import { brand, mainNav } from '../data/site'
import { Blossom, MailIcon } from './icons'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.brand}>
          <a href="#top" className={styles.logo}>
            <Blossom size={34} />
            <span>
              <strong>{brand.name}</strong>
              <em>{brand.tagline}</em>
            </span>
          </a>
          <p className={styles.desc}>
            엄마의 꿈에서 시작된 수사해당화 전문 농장. 규격별 묘목 분양과 식재·교육 정보를
            정직하게 나눕니다.
          </p>
          <a href={`mailto:${brand.email}`} className={styles.contact}>
            <MailIcon width={18} height={18} /> {brand.email}
          </a>
        </div>

        <nav className={styles.cols} aria-label="푸터 메뉴">
          <div className={styles.col}>
            <h3>바로가기</h3>
            <ul>
              {mainNav.map((n) => (
                <li key={n.label}>
                  <a href={n.href}>{n.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.col}>
            <h3>회원</h3>
            <ul>
              <li><a href="#login">로그인</a></li>
              <li><a href="#signup">회원가입</a></li>
              <li><a href="#orders">주문조회</a></li>
              <li><a href="#contact">고객문의</a></li>
            </ul>
          </div>
          <div className={styles.col}>
            <h3>곧 만나요</h3>
            <ul>
              <li><span className={styles.soon}>네이버 스마트스토어</span></li>
              <li><span className={styles.soon}>모바일 앱</span></li>
            </ul>
          </div>
        </nav>
      </div>

      <div className={styles.legal}>
        <div className="container">
          <p>© {new Date().getFullYear()} {brand.name} ({brand.nameEn}). All rights reserved.</p>
          <p className={styles.note}>본 사이트는 소개용 메인 페이지입니다. 회원·결제 기능은 순차 오픈 예정입니다.</p>
        </div>
      </div>
    </footer>
  )
}
