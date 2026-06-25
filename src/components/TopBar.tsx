import { Link } from 'react-router-dom'
import { business } from '../data/site'
import styles from './TopBar.module.css'

/** 최상단 유틸리티 바 — 회원/주문은 스마트스토어 위임, 문의는 사이트 내 페이지 */
export default function TopBar() {
  return (
    <div className={styles.bar}>
      <div className={`container ${styles.inner}`}>
        <p className={styles.greet}>
          수사해당화 전문 농장 <strong>수사해당가든</strong>에 오신 것을 환영합니다
        </p>
        <nav className={styles.links} aria-label="회원 메뉴">
          <a href={business.smartStore} target="_blank" rel="noreferrer">로그인</a>
          <span className={styles.sep} aria-hidden="true" />
          <a href={business.smartStore} target="_blank" rel="noreferrer">회원가입</a>
          <span className={styles.sep} aria-hidden="true" />
          <a href={business.smartStore} target="_blank" rel="noreferrer">주문조회</a>
          <span className={styles.sep} aria-hidden="true" />
          <Link to="/contact">고객문의</Link>
        </nav>
      </div>
    </div>
  )
}
