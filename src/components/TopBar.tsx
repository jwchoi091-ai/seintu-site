import styles from './TopBar.module.css'

/** 최상단 유틸리티 바 — 로그인/회원가입/주문조회 등 (회원 기능은 추후 연동) */
export default function TopBar() {
  return (
    <div className={styles.bar}>
      <div className={`container ${styles.inner}`}>
        <p className={styles.greet}>
          수사해당화 전문 농장 <strong>수사해당가든</strong>에 오신 것을 환영합니다
        </p>
        <nav className={styles.links} aria-label="회원 메뉴">
          <a href="#login">로그인</a>
          <span className={styles.sep} aria-hidden="true" />
          <a href="#signup">회원가입</a>
          <span className={styles.sep} aria-hidden="true" />
          <a href="#orders">주문조회</a>
          <span className={styles.sep} aria-hidden="true" />
          <a href="#contact">고객문의</a>
        </nav>
      </div>
    </div>
  )
}
