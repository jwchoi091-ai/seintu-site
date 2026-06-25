import { Link, useSearchParams } from 'react-router-dom'
import { products, productCategories } from '../data/site'
import Placeholder from '../components/Placeholder'
import PageHeader from '../components/PageHeader'
import { ArrowRight } from '../components/icons'
import styles from './Products.module.css'

/** 가격 표기 (null = 견적) */
export function priceLabel(price: number | null) {
  return price === null ? '견적 문의' : `${price.toLocaleString('ko-KR')}원`
}

/** 상태 → CSS 안전 키 (한글 클래스명 회피) */
export const statusKey: Record<string, string> = {
  판매중: 'sale',
  예약분양: 'reserve',
  품절: 'sold',
}

/** 상품 목록 — 카테고리 필터 + 카드 그리드 */
export default function Products() {
  const [params, setParams] = useSearchParams()
  const cat = params.get('cat') ?? 'all'

  // 외목대/다간은 수형(form) 기준 카테고리 → 규격 분류와 별개로 form도 함께 매칭
  const formByCat: Record<string, string> = { single: '외목대', multi: '다간' }
  const list =
    cat === 'all'
      ? products
      : products.filter((p) => p.category === cat || p.form === formByCat[cat])
  const active = productCategories.find((c) => c.slug === cat) ?? productCategories[0]

  return (
    <>
      <PageHeader
        eyebrow="상품 보기"
        title="수사해당화 상품"
        lead="근원 규격(R)과 수형으로 골라보세요. 대형목은 견적 문의로, 소형목·자재는 곧 스마트스토어에서 바로 구매할 수 있습니다."
      />

      <section className="section">
        <div className="container">
          {/* 카테고리 필터 */}
          <div className={styles.filters} role="tablist" aria-label="상품 카테고리">
            {productCategories.map((c) => (
              <button
                key={c.slug}
                role="tab"
                aria-selected={c.slug === cat}
                className={`${styles.chip} ${c.slug === cat ? styles.chipActive : ''}`}
                onClick={() =>
                  setParams(c.slug === 'all' ? {} : { cat: c.slug }, { replace: true })
                }
              >
                {c.label}
              </button>
            ))}
          </div>

          <p className={styles.count}>
            <strong>{active.label}</strong> · 총 {list.length}개 상품
          </p>

          {list.length === 0 ? (
            <p className={styles.empty}>해당 카테고리에 등록된 상품이 아직 없습니다.</p>
          ) : (
            <ul className={styles.grid}>
              {list.map((p, i) => (
                <li key={p.id}>
                  <Link to={`/products/${p.id}`} className={styles.card}>
                    <div className={styles.thumb}>
                      <Placeholder label="상품 사진 준비중" ratio="4 / 3" seed={i + 1} />
                      <span className={`${styles.badge} ${styles[statusKey[p.status]]}`}>
                        {p.status}
                      </span>
                    </div>
                    <div className={styles.body}>
                      <div className={styles.tags}>
                        <span>{p.grade}</span>
                        {p.form !== '-' && <span>{p.form}</span>}
                      </div>
                      <h3 className={styles.name}>{p.name}</h3>
                      <p className={styles.summary}>{p.summary}</p>
                      <div className={styles.foot}>
                        <span className={`${styles.price} tnum`}>{priceLabel(p.price)}</span>
                        <span className={styles.go}>
                          자세히 <ArrowRight width={15} height={15} />
                        </span>
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </>
  )
}
