import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { brand, business, faqs } from '../data/site'
import PageHeader from '../components/PageHeader'
import { ChatIcon, PhoneIcon, SmsIcon, QuestionIcon } from '../components/icons'
import page from './Page.module.css'

/** form 데이터를 application/x-www-form-urlencoded 문자열로 인코딩 (Netlify Forms 규격) */
const encode = (data: Record<string, string>) =>
  Object.keys(data)
    .map((k) => encodeURIComponent(k) + '=' + encodeURIComponent(data[k]))
    .join('&')

/**
 * 문의하기 — 견적·상담 폼 + 연락처
 * 폼 전송: Netlify Forms (index.html의 숨김 'quote' 폼으로 빌드 감지 → 제출은 사장님 이메일·대시보드로 수집)
 * 상품 상세에서 넘어오면 ?product= / ?spec= 쿼리로 폼이 자동 채워짐.
 */
export default function Contact() {
  const [params] = useSearchParams()
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const prefillProduct = params.get('product') ?? ''
  const prefillSpec = params.get('spec') ?? ''

  const info: { label: string; value: string }[] = [
    { label: '상호', value: business.company },
    { label: '전화', value: business.tel },
    { label: '이메일', value: brand.email },
    { label: '주소', value: business.address },
  ]

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const obj: Record<string, string> = { 'form-name': 'quote' }
    data.forEach((v, k) => {
      obj[k] = typeof v === 'string' ? v : ''
    })

    setStatus('sending')
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode(obj),
    })
      .then((res) => {
        if (!res.ok) throw new Error(String(res.status))
        setStatus('sent')
        form.reset()
      })
      .catch(() => setStatus('error'))
  }

  const hasKakao = business.kakaoChannel !== '#'
  const telDigits = business.tel.replace(/[^0-9]/g, '')

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
          {status === 'sent' ? (
            <div className={page.formDone}>
              <h3>문의가 접수되었습니다 🌸</h3>
              <p>
                남겨주신 내용을 확인하는 대로 연락드리겠습니다. 빠른 상담이 필요하시면 아래
                전화·카카오톡으로 문의해 주세요.
              </p>
              <button
                type="button"
                className="btn btn-ghost"
                onClick={() => setStatus('idle')}
                style={{ marginTop: 6 }}
              >
                새 문의 작성하기
              </button>
            </div>
          ) : (
            <form
              className={page.form}
              name="quote"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
            >
              {/* Netlify 식별용 숨김 필드 + 스팸 방지 허니팟 */}
              <input type="hidden" name="form-name" value="quote" />
              <p hidden>
                <label>
                  사람이 아니면 입력: <input name="bot-field" />
                </label>
              </p>

              {prefillProduct && (
                <div className={page.prefill}>
                  <span>문의 상품</span>
                  <strong>{prefillProduct}</strong>
                </div>
              )}
              <input type="hidden" name="product" value={prefillProduct} />

              <div className={page.row2}>
                <div className={page.field}>
                  <label htmlFor="name">성함</label>
                  <input id="name" name="name" required placeholder="홍길동" />
                </div>
                <div className={page.field}>
                  <label htmlFor="phone">연락처</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="010-0000-0000"
                  />
                </div>
              </div>

              <div className={page.field}>
                <label htmlFor="spec">희망 규격·수량</label>
                <input
                  id="spec"
                  name="spec"
                  defaultValue={prefillSpec}
                  placeholder="예: R8 외목대 5주"
                />
              </div>

              <div className={page.row2}>
                <div className={page.field}>
                  <label htmlFor="region">식재 지역</label>
                  <input id="region" name="region" placeholder="예: 충남 예산군" />
                </div>
                <div className={page.field}>
                  <label htmlFor="planting">식재 시공</label>
                  <select id="planting" name="planting" defaultValue="">
                    <option value="" disabled>
                      선택해 주세요
                    </option>
                    <option value="나무만 구매">나무만 구매</option>
                    <option value="식재 시공 필요">식재 시공 필요</option>
                    <option value="상담 후 결정">상담 후 결정</option>
                  </select>
                </div>
              </div>

              <div className={page.field}>
                <label htmlFor="message">문의 내용</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="배송·식재 일정, 현장 조건 등 자유롭게 적어 주세요."
                />
              </div>

              {status === 'error' && (
                <p className={page.formError}>
                  전송 중 문제가 발생했습니다. 잠시 후 다시 시도하시거나 전화·이메일로 문의해
                  주세요.
                </p>
              )}

              <button
                type="submit"
                className="btn btn-blossom"
                style={{ alignSelf: 'flex-start' }}
                disabled={status === 'sending'}
              >
                {status === 'sending' ? '보내는 중…' : '문의 보내기'}
              </button>
              <p className={page.formNote}>
                * 남겨주신 연락처로만 답변에 사용하며, 상담 외 용도로 쓰지 않습니다.
              </p>
            </form>
          )}

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

            <p className={page.quickTitle}>바로 상담하기</p>
            <div className={page.contactBtns}>
              {hasKakao && (
                <a
                  href={business.kakaoChannel}
                  target="_blank"
                  rel="noreferrer"
                  className={`btn ${page.kakaoBtn}`}
                >
                  <ChatIcon width={18} height={18} /> 카카오톡 상담
                </a>
              )}
              <a href={`sms:${telDigits}`} className="btn btn-ghost">
                <SmsIcon width={18} height={18} /> 문자 문의
              </a>
              <a href={`tel:${telDigits}`} className="btn btn-primary">
                <PhoneIcon width={18} height={18} /> 전화 문의
              </a>
            </div>
            <p className={page.formNote} style={{ marginTop: 12 }}>
              이메일: <a href={`mailto:${brand.email}`} style={{ color: 'var(--green-700)' }}>{brand.email}</a>
            </p>
          </aside>
        </div>
      </section>

      {/* 자주 묻는 질문 */}
      <section className="section" style={{ paddingTop: 0 }} aria-labelledby="faq-title">
        <div className="container">
          <span className="eyebrow">
            <QuestionIcon width={18} height={18} /> 자주 묻는 질문
          </span>
          <h2 id="faq-title" className="section-title" style={{ marginBottom: 8 }}>
            문의 전에 확인해 보세요
          </h2>
          <ul className={page.faqList}>
            {faqs.map((f) => (
              <li key={f.q}>
                <details className={page.faqItem}>
                  <summary>{f.q}</summary>
                  <p>{f.a}</p>
                </details>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
