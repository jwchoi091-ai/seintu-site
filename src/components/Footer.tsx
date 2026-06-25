import { Link } from 'react-router-dom'
import { brand, business, mainNav } from '../data/site'
import { Blossom, MailIcon } from './icons'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.brand}>
          <Link to="/" className={styles.logo}>
            <Blossom size={34} />
            <span>
              <strong>{brand.name}</strong>
              <em>{brand.tagline}</em>
            </span>
          </Link>
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
                  <Link to={n.href}>{n.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.col}>
            <h3>안내</h3>
            <ul>
              <li><Link to="/about">농장 소개</Link></li>
              <li><Link to="/contact">고객문의</Link></li>
              <li><Link to="/notice">공지사항</Link></li>
            </ul>
          </div>
          <div className={styles.col}>
            <h3>곧 만나요</h3>
            <ul>
              <li>
                <a href={business.smartStore} className={styles.soon} target="_blank" rel="noreferrer">
                  네이버 스마트스토어
                </a>
              </li>
              <li><span className={styles.soon}>모바일 앱</span></li>
            </ul>
          </div>
        </nav>
      </div>

      <div className={styles.legal}>
        <div className="container">
          <p className={styles.biz}>
            <span>{business.company}</span>
            <span>대표 {business.owner}</span>
            <span>사업자등록번호 {business.bizNo}</span>
            <span>통신판매업신고 {business.mailOrderNo}</span>
            <span>{business.address}</span>
            <span>{business.tel}</span>
          </p>
          <p>© {new Date().getFullYear()} {brand.name} ({brand.nameEn}). All rights reserved.</p>
          <p className={styles.note}>
            ※ 사업자 정보는 등록 준비 중인 예시값입니다. 결제·회원 기능은 네이버 스마트스토어를
            통해 순차 오픈됩니다.
          </p>
        </div>
      </div>
    </footer>
  )
}
