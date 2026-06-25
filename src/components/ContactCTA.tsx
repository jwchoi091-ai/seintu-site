import { Link } from 'react-router-dom'
import { brand } from '../data/site'
import { MailIcon, ArrowRight, Blossom } from './icons'
import styles from './ContactCTA.module.css'

/** 문의 유도 CTA */
export default function ContactCTA() {
  return (
    <section className={styles.wrap} id="contact">
      <div className={`container ${styles.inner}`}>
        <div className={styles.petal} aria-hidden="true">
          <Blossom size={120} petal="rgba(255,255,255,0.18)" center="rgba(255,255,255,0.28)" />
        </div>

        <div className={styles.copy}>
          <h2 className={styles.title}>수사해당화, 어떤 나무가 필요하세요?</h2>
          <p className={styles.lead}>
            규격·수량·식재 환경을 알려주시면 알맞은 나무와 식재 방법을 함께 안내해 드립니다.
            대량 분양·조경 납품 문의도 환영합니다.
          </p>
        </div>

        <div className={styles.actions}>
          <a href={`mailto:${brand.email}`} className={`btn btn-blossom ${styles.mailBtn}`}>
            <MailIcon width={18} height={18} /> 이메일로 문의하기
          </a>
          <Link to="/products" className={`btn ${styles.ghost}`}>
            상품 먼저 둘러보기 <ArrowRight width={18} height={18} />
          </Link>
          <p className={styles.email}>{brand.email}</p>
        </div>
      </div>
    </section>
  )
}
