import { useEffect, useRef, useState } from 'react'
import { stats, flooredStat } from '../data/site'
import { Blossom } from './icons'
import styles from './Stats.module.css'

/** 숫자로 보는 신뢰 — 화면에 들어오면 카운트업 */
export default function Stats() {
  const ref = useRef<HTMLDivElement>(null)
  const [run, setRun] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRun(true)
          io.disconnect()
        }
      },
      { threshold: 0.4 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <section className={styles.wrap} aria-label="숫자로 보는 신뢰" ref={ref}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.head}>
          <span className="eyebrow" style={{ color: 'rgba(255,255,255,0.9)' }}>
            <Blossom size={18} petal="#fff" center="var(--blossom-400)" /> 숫자로 보는 신뢰
          </span>
          <h2 className={styles.title}>오랜 시간, 수사해당화 한 그루 한 그루에 쌓인 기록</h2>
        </div>

        <dl className={styles.grid}>
          {stats.map((s) => (
            <div key={s.label} className={styles.stat}>
              <dt className={styles.label}>{s.label}</dt>
              <dd className={`${styles.value} tnum`}>
                <Counter target={flooredStat(s)} run={run} />
                <span className={styles.unit}>
                  {s.unit}
                  {s.plus && <span className={styles.plus}>+</span>}
                </span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

function Counter({ target, run }: { target: number; run: boolean }) {
  const [n, setN] = useState(0)

  useEffect(() => {
    if (!run) return
    const dur = 1500
    const start = performance.now()
    let raf = 0
    const tick = (now: number) => {
      const p = Math.min((now - start) / dur, 1)
      // easeOutExpo
      const eased = p === 1 ? 1 : 1 - Math.pow(2, -10 * p)
      setN(Math.round(target * eased))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [run, target])

  return <>{n.toLocaleString('ko-KR')}</>
}
