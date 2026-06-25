import { Blossom } from './icons'
import styles from './Placeholder.module.css'

/**
 * 더미 이미지 플레이스홀더.
 * ⚠️ 실제 사진이 준비되면 <img>로 교체. label/seed만 넘기면 됩니다.
 * seed 값에 따라 배경 색조가 조금씩 달라져 갤러리가 단조롭지 않습니다.
 */
export default function Placeholder({
  label = '이미지 준비중',
  ratio = '4 / 3',
  seed = 0,
  rounded = true,
}: {
  label?: string
  /** CSS aspect-ratio 값 (예: '4 / 3', '1 / 1', '16 / 9') */
  ratio?: string
  seed?: number
  rounded?: boolean
}) {
  // seed로 색조(hue) 회전 → 카드마다 미묘하게 다른 톤
  const hue = (seed * 47) % 360
  return (
    <div
      className={`${styles.box} ${rounded ? styles.rounded : ''}`}
      style={{
        aspectRatio: ratio,
        filter: `hue-rotate(${hue}deg)`,
      }}
      role="img"
      aria-label={label}
    >
      <Blossom size={44} petal="rgba(255,255,255,0.92)" center="var(--blossom-500)" />
      <span className={styles.label}>{label}</span>
    </div>
  )
}
