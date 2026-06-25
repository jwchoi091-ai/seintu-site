import { Link, useParams } from 'react-router-dom'
import { products, business } from '../data/site'
import Placeholder from '../components/Placeholder'
import { priceLabel, statusKey } from './Products'
import { ArrowRight, Blossom } from '../components/icons'
import styles from './ProductDetail.module.css'

/** 상품 상세 */
export default function ProductDetail() {
  const { id } = useParams()
  const product = products.find((p) => p.id === id)

  if (!product) {
    return (
      <section className="section">
        <div className={`container ${styles.missing}`}>
          <Blossom size={48} />
          <h1>상품을 찾을 수 없습니다</h1>
          <p>주소가 바뀌었거나 판매가 종료된 상품일 수 있습니다.</p>
          <Link to="/products" className="btn btn-primary">
            전체 상품 보기
          </Link>
        </div>
      </section>
    )
  }

  const isQuote = product.price === null
  const soldOut = product.status === '품절'

  // 견적 폼으로 상품명·규격 전달 (Contact 페이지가 ?product=/?spec= 으로 자동 채움)
  const specHint = [product.grade, product.form !== '-' ? product.form : '']
    .filter(Boolean)
    .join(' ')
  const quoteHref = `/contact?product=${encodeURIComponent(product.name)}&spec=${encodeURIComponent(
    specHint,
  )}`
  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4)

  const specs: [string, string][] = [
    ['근원 규격', product.grade],
    ['수형', product.form],
    ['수고(높이)', product.height],
    ['재고', soldOut ? '품절' : `${product.stock}주`],
    ['판매 상태', product.status],
  ]

  return (
    <section className="section">
      <div className="container">
        <nav className={styles.crumb} aria-label="현재 위치">
          <Link to="/">홈</Link>
          <span aria-hidden="true">/</span>
          <Link to="/products">상품</Link>
          <span aria-hidden="true">/</span>
          <span>{product.name}</span>
        </nav>

        <div className={styles.top}>
          {/* 이미지 */}
          <div className={styles.gallery}>
            <Placeholder label="상품 대표 사진 준비중" ratio="4 / 3" seed={3} />
            <div className={styles.thumbs}>
              {[0, 1, 2].map((n) => (
                <Placeholder key={n} label="" ratio="1 / 1" seed={n + 5} />
              ))}
            </div>
          </div>

          {/* 정보 */}
          <div className={styles.info}>
            <div className={styles.tags}>
              <span>{product.grade}</span>
              {product.form !== '-' && <span>{product.form}</span>}
              <span className={`${styles.status} ${styles[statusKey[product.status]]}`}>
                {product.status}
              </span>
            </div>

            <h1 className={styles.name}>{product.name}</h1>
            <p className={styles.summary}>{product.summary}</p>

            <div className={styles.priceRow}>
              <span className={`${styles.price} tnum`}>{priceLabel(product.price)}</span>
              {isQuote && <span className={styles.priceNote}>규격·수량·식재에 따라 달라집니다</span>}
            </div>

            <table className={styles.specs}>
              <tbody>
                {specs.map(([k, v]) => (
                  <tr key={k}>
                    <th scope="row">{k}</th>
                    <td>{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className={styles.actions}>
              {isQuote ? (
                <Link to={quoteHref} className="btn btn-blossom">
                  견적 문의하기 <ArrowRight width={18} height={18} />
                </Link>
              ) : (
                <a
                  href={business.smartStore}
                  className={`btn btn-primary ${soldOut ? styles.disabled : ''}`}
                  aria-disabled={soldOut}
                >
                  {soldOut ? '품절' : '스토어에서 구매하기'}
                </a>
              )}
              <Link to={quoteHref} className="btn btn-ghost">
                견적·문의하기
              </Link>
            </div>
            <p className={styles.notice}>
              ※ 결제는 네이버 스마트스토어에서 진행됩니다. 대형목·대량 분양은 견적 문의를 이용해
              주세요.
            </p>
          </div>
        </div>

        {/* 설명 */}
        <div className={styles.desc}>
          <h2 className={styles.descTitle}>상품 설명</h2>
          <p>{product.description}</p>
        </div>

        {/* 관련 상품 */}
        {related.length > 0 && (
          <div className={styles.related}>
            <h2 className={styles.relatedTitle}>같은 카테고리의 다른 상품</h2>
            <ul className={styles.relatedGrid}>
              {related.map((p, i) => (
                <li key={p.id}>
                  <Link to={`/products/${p.id}`} className={styles.relatedCard}>
                    <Placeholder label="" ratio="4 / 3" seed={i + 9} />
                    <strong>{p.name}</strong>
                    <span className="tnum">{priceLabel(p.price)}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  )
}
