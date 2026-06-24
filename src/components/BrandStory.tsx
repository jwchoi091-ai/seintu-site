import { Blossom } from './icons'
import styles from './BrandStory.module.css'

/** 브랜드 스토리 — 엄마의 꿈에서 시작된 농장 */
export default function BrandStory() {
  return (
    <section className={`section ${styles.wrap}`} id="story">
      <div className={`container ${styles.inner}`}>
        <figure className={styles.visual} aria-hidden="true">
          <div className={styles.scene}>
            <div className={styles.sun} />
            <div className={styles.hills}>
              <span className={styles.hillBack} />
              <span className={styles.hillFront} />
            </div>
            <div className={styles.trees}>
              {[0, 1, 2, 3, 4].map((i) => (
                <Blossom
                  key={i}
                  size={36 + (i % 3) * 12}
                  petal="#fff"
                  center="var(--blossom-400)"
                />
              ))}
            </div>
          </div>
          <figcaption className={styles.caption}>
            고향 땅에 조성한 수사해당화 농장
          </figcaption>
        </figure>

        <div className={styles.copy}>
          <span className="eyebrow">
            <Blossom size={18} /> 농장 이야기
          </span>
          <h2 className="section-title">
            한 그루의 꽃나무에서
            <br />
            시작된 농장
          </h2>

          <p className={styles.para}>
            “언젠가 고향에 돌아가 살고 싶다”던 엄마의 꿈이 이 농장의 출발점입니다. 엄마가
            가장 좋아하는 꽃나무인 <strong>수사해당화</strong>를 고향 땅에 한 그루씩 심으며,
            지금의 농장이 만들어졌습니다.
          </p>
          <p className={styles.para}>
            우리는 한 가지 나무에만 집중합니다. 수사해당화만을 오래 길러 온 만큼, 규격과
            수형을 정직하게 나누고 식재부터 관리까지의 경험을 함께 나눕니다. 나무를 사 가시는
            분들이 직접 잘 키워내실 수 있도록 돕는 것까지가 저희의 일이라고 생각합니다.
          </p>

          <ul className={styles.points}>
            <li>
              <strong>한 우물</strong>
              수사해당화만 전문으로 재배·분양
            </li>
            <li>
              <strong>정직한 규격</strong>
              근원 규격(R)과 수형 기준을 그대로 안내
            </li>
            <li>
              <strong>함께 키우기</strong>
              식재 현장 경험과 교육으로 노하우 공유
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
