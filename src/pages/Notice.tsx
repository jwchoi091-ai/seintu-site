import { notices } from '../data/site'
import PageHeader from '../components/PageHeader'
import page from './Page.module.css'

/** 공지사항 — notices 데이터 + 더미 날짜 */
const DATES = ['2026.03.01', '2026.02.20', '2026.02.05']

export default function Notice() {
  return (
    <>
      <PageHeader
        eyebrow="공지사항"
        title="공지사항"
        lead="농장 운영, 분양·예약, 일정 변경 등 주요 안내를 모아둡니다."
      />

      <section className="section">
        <div className="container">
          <ol className={page.notices}>
            {notices.map((text, i) => (
              <li key={i} className={page.noticeRow}>
                <span className={page.num}>{notices.length - i}</span>
                <span className={page.txt}>{text}</span>
                <span className={page.date}>{DATES[i] ?? '2026.01.01'}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  )
}
