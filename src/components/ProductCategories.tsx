import { Link } from 'react-router-dom'
import { productCategories } from '../data/site'
import { Blossom, ArrowRight } from './icons'
import styles from './ProductCategories.module.css'

const catTo = (slug: string) => (slug === 'all' ? '/products' : `/products?cat=${slug}`)

/** 상품 카테고리 — R규격/수형별 진입 (소개 페이지의 미리보기) */
export default function ProductCategories() {
  return (
    <section className="section" id="products">
      <div className="container">
        <header className={styles.head}>
          <div>
            <span className="eyebrow">
              <Blossom size={18} /> 상품 보기
            </span>
            <h2 className="section-title">규격과 수형으로 골라보는 수사해당화</h2>
            <p className="section-lead">
              근원 규격(R)과 수형에 따라 카테고리를 나눠 두었습니다. 정원용 소형목부터 조경수급
              성목, 외목대·다간까지 원하는 나무를 쉽게 찾아보세요.
            </p>
          </div>
          <Link to="/products" className={`btn btn-ghost ${styles.allBtn}`}>
            전체 상품 보기 <ArrowRight width={18} height={18} />
          </Link>
        </header>

        <ul className={styles.grid}>
          {productCategories.map((c) => (
            <li key={c.slug}>
              <Link
                to={catTo(c.slug)}
                className={`${styles.card} ${c.featured ? styles.featured : ''}`}
              >
                <span className={styles.icon}>
                  <Blossom
                    size={30}
                    petal={c.featured ? '#fff' : 'var(--blossom-100)'}
                    center={c.featured ? 'var(--blossom-100)' : 'var(--blossom-500)'}
                  />
                </span>
                <span className={styles.cardLabel}>{c.label}</span>
                <span className={styles.cardDesc}>{c.desc}</span>
                <span className={styles.go}>
                  보기 <ArrowRight width={15} height={15} />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
