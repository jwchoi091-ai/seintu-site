import { Link, useLocation } from 'react-router-dom'
import { business } from '../data/site'
import { PhoneIcon, ChatIcon } from './icons'
import styles from './FloatingContact.module.css'

/** 어느 페이지에서든 항상 보이는 플로팅 상담 버튼 (문의 페이지에서는 숨김) */
export default function FloatingContact() {
  const { pathname } = useLocation()
  if (pathname === '/contact') return null

  const tel = business.tel.replace(/[^0-9]/g, '')

  return (
    <div className={styles.wrap} aria-label="빠른 상담">
      <Link to="/contact" className={`${styles.btn} ${styles.quote}`}>
        <ChatIcon width={18} height={18} />
        <span className={styles.label}>견적 문의</span>
      </Link>
      <a href={`tel:${tel}`} className={`${styles.btn} ${styles.phone}`}>
        <PhoneIcon width={18} height={18} />
        <span className={styles.label}>전화 문의</span>
      </a>
    </div>
  )
}
