import { brand, stats, flooredStat } from '../data/site'
import PageHeader from '../components/PageHeader'
import Placeholder from '../components/Placeholder'
import page from './Page.module.css'

/** 회사소개 — 농장 이야기 */
export default function About() {
  return (
    <>
      <PageHeader
        eyebrow="농장 소개"
        title="수사해당가든 이야기"
        lead={brand.positioning}
      />

      <section className="section">
        <div className="container">
          <Placeholder label="농장 전경 사진 준비중" ratio="16 / 9" seed={2} />

          <div className={page.prose} style={{ marginTop: 36 }}>
            <h2>엄마의 꿈에서 시작했습니다</h2>
            <p>
              언젠가 고향에 돌아가 살고 싶다던 엄마의 꿈. 그 꿈을 이루기 위해 엄마가 가장
              좋아하는 꽃나무인 수사해당화를 고향 땅에 심으며 농장이 시작되었습니다. 매년 봄이면
              늘어진 가지마다 분홍 꽃이 가득 피어 농장을 가득 채웁니다.
            </p>

            <h2>정직하게 키우고, 정직하게 나눕니다</h2>
            <p>
              근원 규격(R)과 수형에 따라 나무를 정확히 분류하고, 상태를 있는 그대로 안내합니다.
              작은 입문용 묘목부터 조경수급 성목, 외목대·다간까지 — 심으실 환경에 가장 알맞은
              나무를 함께 골라 드립니다.
            </p>

            <h2>심는 법까지 함께</h2>
            <p>
              나무만 파는 것이 아니라, 잘 자라도록 식재 방법과 관리 노하우까지 나눕니다. 농장
              교육과 식재 현장 경험을 통해 쌓은 정보를 블로그와 일정으로 꾸준히 공유합니다.
            </p>
          </div>

          {/* 숫자로 보는 농장 */}
          <ul
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 20,
              marginTop: 44,
            }}
          >
            {stats.map((s) => (
              <li
                key={s.label}
                style={{
                  background: 'var(--green-50)',
                  border: '1px solid var(--green-100)',
                  borderRadius: 'var(--r-lg)',
                  padding: '26px 20px',
                  textAlign: 'center',
                }}
              >
                <strong
                  className="tnum"
                  style={{ fontSize: '1.9rem', color: 'var(--green-700)' }}
                >
                  {flooredStat(s).toLocaleString('ko-KR')}
                  {s.unit}
                  {s.plus && '+'}
                </strong>
                <span style={{ display: 'block', color: 'var(--ink-mute)', marginTop: 4 }}>
                  {s.label}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
