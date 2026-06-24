import { contentLinks } from '../data/site'
import { ArrowRight, Blossom } from './icons'
import styles from './ContentPreview.module.css'

/** 앨범 · 블로그 · 농장 일정 미리보기 */
export default function ContentPreview() {
  return (
    <section className="section" id="album">
      <div className="container">
        <header className={styles.head}>
          <span className="eyebrow">
            <Blossom size={18} /> 농장 콘텐츠
          </span>
          <h2 className="section-title">사진과 글, 일정으로 만나는 농장</h2>
          <p className="section-lead">
            농장의 사계절과 식재 현장, 재배 노하우를 기록으로 남깁니다. 방문 전에 농장 일정도
            함께 확인해 보세요.
          </p>
        </header>

        <div className={styles.grid}>
          {contentLinks.map((c, i) => (
            <a key={c.title} href={c.href} className={styles.card}>
              <div className={`${styles.thumb} ${styles[`thumb${i}`]}`} aria-hidden="true">
                <Blossom size={40} petal="#fff" center="var(--blossom-400)" />
              </div>
              <div className={styles.body}>
                <span className={styles.tag}>{c.eyebrow}</span>
                <h3 className={styles.cardTitle}>{c.title}</h3>
                <p className={styles.cardDesc}>{c.desc}</p>
                <span className={styles.go}>
                  바로가기 <ArrowRight width={16} height={16} />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
