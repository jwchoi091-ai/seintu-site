/** 공용 아이콘 세트 (인라인 SVG, currentColor 기반) */
import type { SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement>

const base = (props: IconProps): IconProps => ({
  width: 22,
  height: 22,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.7,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  ...props,
})

export const SearchIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <circle cx="11" cy="11" r="7" />
    <path d="m20 20-3.2-3.2" />
  </svg>
)

export const HeartIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 1 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
)

export const CartIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M3 4h2l1.6 11.2A2 2 0 0 0 8.6 17h8.8a2 2 0 0 0 2-1.6L21 8H6" />
    <circle cx="9.5" cy="20" r="1.2" />
    <circle cx="17.5" cy="20" r="1.2" />
  </svg>
)

export const UserIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <circle cx="12" cy="8.5" r="3.6" />
    <path d="M5 20c.8-3.6 3.6-5.4 7-5.4s6.2 1.8 7 5.4" />
  </svg>
)

export const MenuIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
)

export const CloseIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
)

export const ArrowRight = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
)

export const ChevronDown = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="m6 9 6 6 6-6" />
  </svg>
)

export const ChevronLeft = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="m15 6-6 6 6 6" />
  </svg>
)

export const ChevronRight = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="m9 6 6 6-6 6" />
  </svg>
)

export const MailIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m4 7 8 6 8-6" />
  </svg>
)

export const ChatIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M21 11.5a8.38 8.38 0 0 1-8.5 8.5 9 9 0 0 1-3.8-.8L3 21l1.3-4.2A8.38 8.38 0 0 1 3.5 11.5 8.5 8.5 0 0 1 12 3a8.5 8.5 0 0 1 9 8.5Z" />
  </svg>
)

export const PhoneIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M5 4h3.5l1.5 4.5L8 10a12 12 0 0 0 6 6l1.5-2 4.5 1.5V19a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />
  </svg>
)

export const SmsIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M4 5h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H9l-4 3v-3H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z" />
    <path d="M8 10h.01M12 10h.01M16 10h.01" />
  </svg>
)

export const QuestionIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <circle cx="12" cy="12" r="9" />
    <path d="M9.5 9.5a2.5 2.5 0 0 1 4.5 1.5c0 1.7-2 2-2 3.2" />
    <path d="M12 17h.01" />
  </svg>
)

export const SproutIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M12 20v-6" />
    <path d="M12 14c0-3 2-5 6-5 0 3-2 5-6 5Z" />
    <path d="M12 13c0-2.6-1.8-4.6-5-4.6 0 2.8 1.8 4.6 5 4.6Z" />
  </svg>
)

/**
 * 수사해당화 블라썸 — 브랜드 시그니처 마크
 * 5장 꽃잎 + 꽃술. fill 기반(컬러 토큰 사용).
 */
export const Blossom = ({
  size = 28,
  petal = 'var(--blossom-100)',
  center = 'var(--blossom-500)',
  ...rest
}: { size?: number; petal?: string; center?: string } & IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    aria-hidden="true"
    {...rest}
  >
    <g transform="translate(32 32)" fill={petal}>
      <ellipse cx="0" cy="-13" rx="7.6" ry="11" />
      <ellipse cx="0" cy="-13" rx="7.6" ry="11" transform="rotate(72)" />
      <ellipse cx="0" cy="-13" rx="7.6" ry="11" transform="rotate(144)" />
      <ellipse cx="0" cy="-13" rx="7.6" ry="11" transform="rotate(216)" />
      <ellipse cx="0" cy="-13" rx="7.6" ry="11" transform="rotate(288)" />
    </g>
    <circle cx="32" cy="32" r="5.6" fill={center} />
  </svg>
)
