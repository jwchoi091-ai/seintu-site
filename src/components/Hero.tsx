import { Link } from 'react-router-dom'
import { brand, notices } from '../data/site'
import { Blossom, ArrowRight } from './icons'
import styles from './Hero.module.css'

/** 메인 히어로 — 브랜드 포지셔닝 + CTA + 수사해당화 일러스트 + 공지 티커 */
export default function Hero() {
  return (
    <section className={styles.hero} aria-label="대표 소개">
      <div className={styles.petals} aria-hidden="true">
        {PETALS.map((p, i) => (
          <span
            key={i}
            style={{
              left: `${p.left}%`,
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.dur}s`,
              transform: `scale(${p.scale})`,
            }}
          >
            <Blossom size={18} petal="#fff" center="var(--blossom-400)" />
          </span>
        ))}
      </div>

      <div className={`container ${styles.inner}`}>
        <div className={styles.copy}>
          <span className="eyebrow">
            <Blossom size={18} /> 수사해당화 전문 농장
          </span>

          <h1 className={styles.title}>
            엄마의 꿈에서 시작된,
            <br />
            <span className={styles.accent}>수사해당화</span> 농장
          </h1>

          <p className={styles.lead}>{brand.positioning}</p>

          <div className={styles.cta}>
            <Link to="/products" className="btn btn-primary">
              상품 보러가기 <ArrowRight width={18} height={18} />
            </Link>
            <Link to="/about" className="btn btn-ghost">
              농장 이야기
            </Link>
          </div>

          <ul className={styles.chips}>
            <li>R규격별 분양</li>
            <li>외목대 · 다간</li>
            <li>식재 · 교육 정보</li>
          </ul>
        </div>

        <div className={styles.art} aria-hidden="true">
          <BlossomBranch />
        </div>
      </div>

      {/* 공지 티커 */}
      <div className={styles.ticker}>
        <div className={`container ${styles.tickerInner}`}>
          <span className={styles.tickerLabel}>공지</span>
          <div className={styles.tickerTrack}>
            <ul>
              {[...notices, ...notices].map((n, i) => (
                <li key={i}>{n}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

/** 떨어지는 꽃잎 위치 데이터 */
const PETALS = [
  { left: 8, delay: 0, dur: 11, scale: 0.8 },
  { left: 22, delay: 3.5, dur: 14, scale: 1.1 },
  { left: 38, delay: 1.2, dur: 12, scale: 0.7 },
  { left: 55, delay: 5, dur: 15, scale: 1 },
  { left: 70, delay: 2.4, dur: 13, scale: 0.9 },
  { left: 84, delay: 6.2, dur: 16, scale: 1.2 },
  { left: 93, delay: 0.8, dur: 12, scale: 0.75 },
]

/** 수사해당화 가지 — 늘어진 가지에 분홍 꽃이 매달린 형태(垂絲海棠) */
function BlossomBranch() {
  const flowers = [
    { x: 250, y: 80, s: 1.1 },
    { x: 300, y: 150, s: 0.85 },
    { x: 210, y: 175, s: 1 },
    { x: 270, y: 235, s: 0.95 },
    { x: 160, y: 130, s: 0.8 },
    { x: 330, y: 235, s: 0.78 },
    { x: 215, y: 295, s: 1.05 },
    { x: 300, y: 320, s: 0.82 },
    { x: 150, y: 240, s: 0.72 },
  ]
  return (
    <svg viewBox="0 0 400 400" className={styles.branch} role="img" aria-label="수사해당화 꽃가지">
      <defs>
        <radialGradient id="halo" cx="50%" cy="42%" r="60%">
          <stop offset="0%" stopColor="#fdeef4" />
          <stop offset="100%" stopColor="#fdeef4" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="240" cy="190" r="190" fill="url(#halo)" />

      {/* 가지 */}
      <g stroke="#6b4a35" strokeLinecap="round" fill="none">
        <path d="M70 20 C 150 60, 230 70, 250 80" strokeWidth="7" />
        <path d="M250 80 C 290 120, 305 150, 300 150" strokeWidth="5" />
        <path d="M150 55 C 170 110, 195 150, 210 175" strokeWidth="5" />
        <path d="M210 175 C 235 215, 255 230, 270 235" strokeWidth="4" />
        <path d="M180 100 C 165 150, 152 200, 150 240" strokeWidth="4" />
        <path d="M250 130 C 280 180, 315 215, 330 235" strokeWidth="4" />
        <path d="M220 200 C 220 245, 218 280, 215 295" strokeWidth="3.5" />
        <path d="M270 235 C 290 280, 300 310, 300 320" strokeWidth="3.5" />
      </g>

      {/* 잎 */}
      <g fill="#4ca266">
        {flowers.map((f, i) => (
          <ellipse
            key={i}
            cx={f.x + 14}
            cy={f.y - 10}
            rx={9}
            ry={4.5}
            transform={`rotate(${(i * 37) % 360} ${f.x + 14} ${f.y - 10})`}
            opacity="0.9"
          />
        ))}
      </g>

      {/* 꽃 */}
      {flowers.map((f, i) => (
        <g key={i} transform={`translate(${f.x} ${f.y}) scale(${f.s})`}>
          <g fill={i % 3 === 0 ? '#f7c6d9' : '#fbdfe9'}>
            <ellipse cx="0" cy="-12" rx="7" ry="10" />
            <ellipse cx="0" cy="-12" rx="7" ry="10" transform="rotate(72)" />
            <ellipse cx="0" cy="-12" rx="7" ry="10" transform="rotate(144)" />
            <ellipse cx="0" cy="-12" rx="7" ry="10" transform="rotate(216)" />
            <ellipse cx="0" cy="-12" rx="7" ry="10" transform="rotate(288)" />
          </g>
          <circle r="5" fill="#d65f8a" />
        </g>
      ))}
    </svg>
  )
}
