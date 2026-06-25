import { Link } from 'react-router-dom'
import { Blossom } from './icons'
import styles from './PageHeader.module.css'

/** 보조 페이지 공통 헤더 — 브레드크럼 + 제목 + 리드 */
export default function PageHeader({
  eyebrow,
  title,
  lead,
}: {
  eyebrow: string
  title: string
  lead?: string
}) {
  return (
    <div className={styles.wrap}>
      <div className="container">
        <nav className={styles.crumb} aria-label="현재 위치">
          <Link to="/">홈</Link>
          <span aria-hidden="true">/</span>
          <span>{title}</span>
        </nav>
        <span className="eyebrow">
          <Blossom size={18} /> {eyebrow}
        </span>
        <h1 className={styles.title}>{title}</h1>
        {lead && <p className={styles.lead}>{lead}</p>}
      </div>
    </div>
  )
}
