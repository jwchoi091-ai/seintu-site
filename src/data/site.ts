/**
 * 사이트 전역 콘텐츠 (단일 출처)
 * 모든 문구·수치는 ABOUT 문서에서 가져옴. 페이지/컴포넌트는 이 파일만 참조한다.
 * 추후 스마트스토어·앱 연동 시에도 이 데이터를 공유 소스로 사용한다.
 */

export const brand = {
  name: '수사해당가든',
  nameEn: 'Suusa-Haedang Garden',
  tagline: '수사해당화 전문 농장',
  // 한 줄 포지셔닝
  positioning:
    '언젠가 고향에 돌아가 살고 싶다던 엄마의 꿈을 이루기 위해, 엄마가 좋아하는 꽃나무 수사해당화를 고향 땅에 심어 가꾸는 농장입니다.',
  email: 'jwchoi091@gmail.com',
  reference: 'https://www.danong.co.kr/index.html',
} as const

/** 상단 주메뉴 */
export interface NavItem {
  label: string
  href: string
  /** 카테고리바 드롭다운 등에 노출할 세부메뉴 */
  children?: { label: string; href: string }[]
}

export const mainNav: NavItem[] = [
  {
    label: '상품 보기',
    href: '#products',
    children: [
      { label: '전체보기', href: '#products' },
      { label: 'R10점 이상', href: '#products' },
      { label: 'R8~R10', href: '#products' },
      { label: 'R5~7', href: '#products' },
      { label: 'R5점 미만', href: '#products' },
      { label: '외목대', href: '#products' },
      { label: '다간', href: '#products' },
      { label: '원예자재', href: '#products' },
    ],
  },
  {
    label: '앨범',
    href: '#album',
    children: [
      { label: '농장', href: '#album' },
      { label: '식재 현장', href: '#album' },
      { label: '교육', href: '#album' },
    ],
  },
  {
    label: '블로그',
    href: '#blog',
    children: [
      { label: '카탈로그', href: '#blog' },
      { label: '농장블로그', href: '#blog' },
    ],
  },
  { label: '농장 일정', href: '#schedule' },
  { label: '문의하기', href: '#contact' },
  { label: '공지사항', href: '#notice' },
]

/** 상품 카테고리 (R = 근원 규격 등급) */
export interface ProductCategory {
  label: string
  desc: string
  href: string
  featured?: boolean
}

export const productCategories: ProductCategory[] = [
  { label: '전체보기', desc: '농장의 모든 수사해당화', href: '#products', featured: true },
  { label: 'R10점 이상', desc: '대형 조경수급 성목', href: '#products' },
  { label: 'R8 ~ R10', desc: '풍성한 수형의 중대형목', href: '#products' },
  { label: 'R5 ~ R7', desc: '정원·마당에 알맞은 크기', href: '#products' },
  { label: 'R5점 미만', desc: '입문용·소형 묘목', href: '#products' },
  { label: '외목대', desc: '곧은 외줄기 단정한 수형', href: '#products' },
  { label: '다간', desc: '여러 줄기 자연스러운 수형', href: '#products' },
  { label: '원예자재', desc: '식재·관리에 필요한 자재', href: '#products' },
]

/** 숫자로 보는 신뢰 */
export interface Stat {
  value: number
  unit: string
  label: string
}

export const stats: Stat[] = [
  { value: 20000, unit: '주', label: '보유 나무' },
  { value: 15000, unit: '주', label: '식재 이력' },
  { value: 200, unit: '명', label: '누적 교육 인원' },
]

/** 콘텐츠 미리보기 (앨범 / 블로그 / 농장 일정) */
export interface ContentLink {
  eyebrow: string
  title: string
  desc: string
  href: string
}

export const contentLinks: ContentLink[] = [
  {
    eyebrow: '앨범',
    title: '농장과 식재 현장의 기록',
    desc: '농장·식재 현장·교육 현장의 사진을 모았습니다. 계절마다 달라지는 수사해당화를 만나보세요.',
    href: '#album',
  },
  {
    eyebrow: '블로그',
    title: '카탈로그 · 농장블로그',
    desc: '규격별 카탈로그와 농장 일상, 재배 노하우를 글로 정리해 공유합니다.',
    href: '#blog',
  },
  {
    eyebrow: '농장 일정',
    title: '월별 식재 · 교육 일정',
    desc: '월별 농장의 식재 일정과 교육 일정을 한눈에 확인하고 미리 신청할 수 있습니다.',
    href: '#schedule',
  },
]

/** 히어로 하단 공지 티커 */
export const notices: string[] = [
  '봄 식재 시즌 수사해당화 묘목 예약 분양 안내',
  'R규격별 재고 현황이 업데이트되었습니다',
  '농장 식재 교육 일정은 [농장 일정]에서 확인하세요',
]
