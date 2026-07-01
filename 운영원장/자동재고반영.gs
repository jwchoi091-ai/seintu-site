/**
 * 수사해당가든 운영원장 — 매입·매출 자동 재고 반영 스크립트 (Google Apps Script)
 *
 * [하는 일] '거래' 시트의 행을 '재고'(나무) / '자재' 시트에 반영합니다.
 *   · 매입 → 수량(현재고) 증가.  재고에 없는 항목이면 새 줄로 추가
 *   · 매출 → 수량(현재고) 차감.  재고에 없는 항목이면 반영하지 않고 알려줌
 *   · 반영이 끝난 거래 행에는 '재고반영일'이 찍혀 다시 반영되지 않음(중복 방지)
 *
 * [쓰는 법] 시트 상단 메뉴 '📦 재고 관리' → '매입·매출 → 재고 반영' 클릭
 *
 * ※ 농약·비료처럼 '판매'가 아니라 '소모'로 줄어드는 자재는 거래에 안 잡히므로,
 *   자재 시트에서 현재고를 직접(수기) 줄여 주세요.
 * ※ 구글시트 전용입니다(엑셀 데스크톱에서는 작동하지 않음).
 */

const SHEET_TX = '거래';
const SHEET_TREE = '재고';
const SHEET_MAT = '자재';

function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu('📦 재고 관리')
    .addItem('매입·매출 → 재고 반영', 'applyTransactions')
    .addToUI();
}

function applyTransactions() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const tx = ss.getSheetByName(SHEET_TX);
  const tree = ss.getSheetByName(SHEET_TREE);
  const mat = ss.getSheetByName(SHEET_MAT);
  const ui = SpreadsheetApp.getUi();

  if (!tx || !tree || !mat) {
    ui.alert('시트(거래 / 재고 / 자재)를 찾을 수 없습니다. 시트 이름을 확인해 주세요.');
    return;
  }

  // '거래' 헤더에서 '재고반영일' 열 찾기(없으면 맨 끝에 새로 만듦)
  const txLastCol = tx.getLastColumn();
  const header = tx.getRange(1, 1, 1, txLastCol).getValues()[0];
  let markCol = header.indexOf('재고반영일') + 1;
  if (markCol === 0) {
    markCol = txLastCol + 1;
    tx.getRange(1, markCol).setValue('재고반영일');
  }

  const txLastRow = tx.getLastRow();
  if (txLastRow < 2) { ui.alert('거래 내역이 없습니다.'); return; }

  const width = Math.max(13, markCol);
  const data = tx.getRange(2, 1, txLastRow - 1, width).getValues();

  const treeKeys = tree.getLastRow() > 1
    ? tree.getRange(2, 1, tree.getLastRow() - 1, 1).getValues().map(r => String(r[0]).trim())
    : [];
  const matKeys = mat.getLastRow() > 1
    ? mat.getRange(2, 1, mat.getLastRow() - 1, 1).getValues().map(r => String(r[0]).trim())
    : [];

  const today = new Date();
  let done = 0;
  const unmatched = [];

  for (let i = 0; i < data.length; i++) {
    const row = data[i];
    const rowNum = i + 2;

    const gubun = String(row[1]).trim();     // B 구분 (매입/매출)
    const category = String(row[2]).trim();  // C 품목분류 (나무/자재·경비)
    const mgmtNo = String(row[3]).trim();    // D 관리번호
    const itemName = String(row[4]).trim();  // E 품목명
    const qty = Number(row[5]) || 0;         // F 수량
    const price = Number(row[6]) || '';      // G 단가
    const buyer = row[8];                    // I 거래처
    const date = row[0];                     // A 거래일
    const already = row[markCol - 1];        // 재고반영일

    if (gubun !== '매입' && gubun !== '매출') continue;
    if (already) continue;
    if (qty <= 0) continue;

    const sign = (gubun === '매입') ? 1 : -1;
    let handled = false;

    if (category === '나무') {
      const idx = mgmtNo ? treeKeys.indexOf(mgmtNo) : -1;
      if (idx >= 0) {
        const cell = tree.getRange(idx + 2, 4); // D열 수량
        cell.setValue((Number(cell.getValue()) || 0) + sign * qty);
        handled = true;
      } else if (gubun === '매입') {
        tree.appendRow([
          mgmtNo, '수사해당화', '개체', qty, '', '', '', '', '',
          '', '자가', '', '', '판매가능', price, '', date, '거래 자동추가'
        ]);
        treeKeys.push(mgmtNo);
        handled = true;
      }
    } else if (category === '자재·경비') {
      const idx = itemName ? matKeys.indexOf(itemName) : -1;
      if (idx >= 0) {
        const cell = mat.getRange(idx + 2, 4); // D열 현재고
        cell.setValue((Number(cell.getValue()) || 0) + sign * qty);
        handled = true;
      } else if (gubun === '매입') {
        mat.appendRow([itemName, '', '', qty, '', '', date, buyer, '거래 자동추가']);
        matKeys.push(itemName);
        handled = true;
      }
    } else {
      continue; // 품목분류 미지정은 건너뜀
    }

    if (handled) {
      tx.getRange(rowNum, markCol).setValue(today);
      done++;
    } else {
      // 매출인데 재고/자재에 해당 항목이 없음 → 반영 불가(표시만 남기지 않음)
      unmatched.push(rowNum);
    }
  }

  let msg = done > 0
    ? (done + '건을 재고에 반영했습니다. 🌱')
    : '새로 반영할 내역이 없습니다.';
  if (unmatched.length > 0) {
    msg += '\n\n⚠️ ' + unmatched.length + '건(행 ' + unmatched.join(', ') + ')은 '
        + '재고/자재에 없는 항목이라 반영하지 못했습니다.\n'
        + '해당 거래의 관리번호(나무)·품목명(자재)이 재고 시트와 일치하는지 확인해 주세요.';
  }
  if (done > 0) {
    msg += '\n\n※ 새로 추가된 항목의 규격 등은 재고/자재 시트에서 채워 주세요.';
  }
  ui.alert(msg);
}
