import { useState } from 'react'
import { brand, business } from '../data/site'
import PageHeader from '../components/PageHeader'
import { MailIcon } from '../components/icons'
import page from './Page.module.css'

/**
 * 문의하기 — 견적·상담 폼 + 연락처
 * ⚠️ 폼 전송은 파트 2에서 구현(시트 연동). 지금은 안내 메시지만 표시.
 */
export default function Contact() {
  const [sent, setSent] = useState(false)

  const info: { label: string; value: string }[] = [
    { label: '상호', value: business.company },
    { label: '전화', value: business.tel },
    { label: '이메일', value: brand.email },
    { label: '주소', value: business.address },
  ]

  return (
    <>
      <PageHeader
        eyebrow="문의하기"
        title="견적 · 상담 문의"
        lead="원하시는 규격·수량·식재 환경을 남겨 주시면 알맞은 나무와 식재 방법을 안내해 드립니다. 대량 분양·조경 납품 문의도 환영합니다."
      />

      <section className="section">
        <div className={`container ${page.contactGrid}`}>
          {/* 폼 */}
          <form
            className={page.form}
            onSubmit={(e) => {
              e.preventDefault()
              setSent(true)
            }}
          >
            <div className={page.field}>
              <label htmlFor="name">성함</label>
              <input id="name" name="name" required placeholder="홍길동" />
            </div>
            <div className={page.field}>
              <label htmlFor="phone">연락처</label>
              <input id="phone" name="phone" required placeholder="010-0000-0000" />
            </div>
            <div className={page.field}>
              <label htmlFor="spec">희망 규격·수량</label>
              <input id="spec" name="spec" placeholder="예: R8 외목대 5주" />
            </div>
            <div className={page.field}>
              <label htmlFor="message">문의 내용</label>
              <textarea
                id="message"
                name="message"
                placeholder="식재 지역, 배송·식재 필요 여부 등을 적어 주세요."
              />
            </div>

            {sent ? (
              <p
                style={{
                  background: 'var(--blossom-50)',
                  border: '1px solid var(--blossom-100)',
                  color: 'var(--blossom-700)',
                  borderRadius: 'var(--r-md)',
                  padding: '14px 16px',
                  fontWeight: 600,
                }}
              >
                문의가 접수되었습니다. (※ 현재는 데모 단계로 실제 전송되지 않습니다 — 빠른 상담은
                전화·이메일을 이용해 주세요.)
              </p>
            ) : (
              <button type="submit" className="btn btn-blossom" style={{ alignSelf: 'flex-start' }}>
                문의 보내기
              </button>
            )}
            <p className={page.formNote}>
              * 폼 전송 기능은 준비 중입니다. 우선 아래 연락처로 문의해 주세요.
            </p>
          </form>

          {/* 연락처 */}
          <aside className={page.infoBox}>
            <h3>연락처 안내</h3>
            <ul className={page.infoList}>
              {info.map((it) => (
                <li key={it.label}>
                  <span className={page.infoLabel}>{it.label}</span>
                  <span className={page.infoValue}>{it.value}</span>
                </li>
              ))}
            </ul>
            <a
              href={`mailto:${brand.email}`}
              className="btn btn-primary"
              style={{ marginTop: 18, width: '100%' }}
            >
              <MailIcon width={18} height={18} /> 이메일로 문의
            </a>
          </aside>
        </div>
      </section>
    </>
  )
}
