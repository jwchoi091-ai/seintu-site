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

/**
 * 사업자 정보 (푸터 법적 표시용)
 * ⚠️ 더미값 — 파트 0(통신판매업 신고)에서 실제 정보로 교체.
 */
export const business = {
  company: '수사해당가든',
  owner: '대표자명',
  bizNo: '000-00-00000', // 사업자등록번호
  mailOrderNo: '제0000-지역-0000호', // 통신판매업 신고번호
  address: '○○도 ○○시 ○○면 ○○리 000', // 농장/사업장 주소
  tel: '010-0000-0000',
  smartStore: '#', // 네이버 스마트스토어 URL (개설 후 교체)
  kakaoChannel: '#', // 카카오톡 채널 URL (개설 후 교체)
  naverBlog: 'https://blog.naver.com/momsdream_treefarm', // 네이버 블로그 (주소 바뀌면 이 한 줄만 교체)
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
    href: '/products',
    children: [
      { label: '전체보기', href: '/products' },
      { label: 'R10점 이상', href: '/products?cat=r10' },
      { label: 'R8~R10', href: '/products?cat=r8' },
      { label: 'R5~7', href: '/products?cat=r5' },
      { label: 'R5점 미만', href: '/products?cat=r5under' },
      { label: '외목대', href: '/products?cat=single' },
      { label: '다간', href: '/products?cat=multi' },
      { label: '원예자재', href: '/products?cat=supplies' },
    ],
  },
  {
    label: '앨범',
    href: '/album',
    children: [
      { label: '농장', href: '/album' },
      { label: '식재 현장', href: '/album' },
      { label: '교육', href: '/album' },
    ],
  },
  {
    label: '블로그',
    href: '/blog',
    children: [
      { label: '카탈로그', href: '/blog' },
      { label: '농장블로그', href: '/blog' },
    ],
  },
  { label: '농장 일정', href: '/schedule' },
  { label: '문의하기', href: '/contact' },
  { label: '공지사항', href: '/notice' },
]

/** 상품 카테고리 (R = 근원 규격 등급) */
export interface ProductCategory {
  /** 필터 식별자 (URL ?cat= 값) */
  slug: string
  label: string
  desc: string
  featured?: boolean
}

export const productCategories: ProductCategory[] = [
  { slug: 'all', label: '전체보기', desc: '농장의 모든 수사해당화', featured: true },
  { slug: 'r10', label: 'R10점 이상', desc: '대형 조경수급 성목' },
  { slug: 'r8', label: 'R8 ~ R10', desc: '풍성한 수형의 중대형목' },
  { slug: 'r5', label: 'R5 ~ R7', desc: '정원·마당에 알맞은 크기' },
  { slug: 'r5under', label: 'R5점 미만', desc: '입문용·소형 묘목' },
  { slug: 'single', label: '외목대', desc: '곧은 외줄기 단정한 수형' },
  { slug: 'multi', label: '다간', desc: '여러 줄기 자연스러운 수형' },
  { slug: 'supplies', label: '원예자재', desc: '식재·관리에 필요한 자재' },
]

/**
 * 상품 (더미 데이터)
 * ⚠️ 사진·가격·재고는 예시값. 추후 실제 데이터로 교체하고, 파트 5에서 구글 시트와 연동.
 * price: null = 견적 문의 상품 (대형목 등)
 */
export interface Product {
  id: string
  name: string
  /** ProductCategory.slug 참조 */
  category: string
  grade: string // 근원 규격 (예: R12)
  form: string // 수형 (외목대 / 다간 등)
  height: string // 수고
  price: number | null // null = 견적
  stock: number
  status: '판매중' | '예약분양' | '품절'
  summary: string
  description: string
}

export const products: Product[] = [
  {
    id: 'r12-jogyeong',
    name: '수사해당화 R12 조경수급 성목',
    category: 'r10',
    grade: 'R12',
    form: '외목대',
    height: '약 3.0m',
    price: null,
    stock: 8,
    status: '판매중',
    summary: '대형 조경 현장에 어울리는 풍성한 수형의 성목입니다.',
    description:
      '오랜 기간 농장에서 정성껏 가꾼 대형 조경수급 수사해당화입니다. 관공서·공원·전원주택 조경에 적합하며, 식재 및 운반은 별도 견적으로 협의합니다.',
  },
  {
    id: 'r11-dagan',
    name: '수사해당화 R11 다간목',
    category: 'r10',
    grade: 'R11',
    form: '다간',
    height: '약 2.8m',
    price: null,
    stock: 5,
    status: '판매중',
    summary: '여러 줄기가 자연스럽게 뻗은 다간 성목.',
    description:
      '자연스러운 다간 수형으로 정원의 중심목으로 손색이 없습니다. 봄철 만개 시 풍성한 꽃을 감상할 수 있습니다.',
  },
  {
    id: 'r9-jeongwon',
    name: '수사해당화 R9 정원목',
    category: 'r8',
    grade: 'R9',
    form: '외목대',
    height: '약 2.4m',
    price: 180000,
    stock: 14,
    status: '판매중',
    summary: '마당·정원에 알맞은 균형 잡힌 중대형목.',
    description:
      '전원주택 마당이나 정원에 알맞은 크기의 수사해당화입니다. 단정한 외목대 수형으로 어디에 심어도 잘 어울립니다.',
  },
  {
    id: 'r8-dagan',
    name: '수사해당화 R8 다간목',
    category: 'r8',
    grade: 'R8',
    form: '다간',
    height: '약 2.2m',
    price: 160000,
    stock: 11,
    status: '판매중',
    summary: '풍성한 수형의 다간 중대형목.',
    description: '여러 줄기가 어우러져 볼륨감 있는 수형을 자랑합니다. 식재 후 관리가 비교적 수월합니다.',
  },
  {
    id: 'r6-madang',
    name: '수사해당화 R6 마당목',
    category: 'r5',
    grade: 'R6',
    form: '외목대',
    height: '약 1.8m',
    price: 90000,
    stock: 22,
    status: '판매중',
    summary: '작은 마당에도 부담 없는 인기 규격.',
    description:
      '가장 많이 찾는 규격으로, 작은 마당이나 텃밭 가장자리에 심기 좋습니다. 가성비가 뛰어납니다.',
  },
  {
    id: 'r5-multi',
    name: '수사해당화 R5 다간 묘목',
    category: 'r5',
    grade: 'R5',
    form: '다간',
    height: '약 1.6m',
    price: 70000,
    stock: 30,
    status: '판매중',
    summary: '입문용으로 적당한 다간 묘목.',
    description: '처음 수사해당화를 키워보는 분께 추천하는 다간 묘목입니다.',
  },
  {
    id: 'r3-myomok',
    name: '수사해당화 R3 묘목',
    category: 'r5under',
    grade: 'R3',
    form: '외목대',
    height: '약 1.2m',
    price: 35000,
    stock: 0,
    status: '품절',
    summary: '소형 입문용 묘목 (다음 시즌 예약).',
    description:
      '가장 작은 규격의 입문용 묘목입니다. 현재 재고가 소진되어 다음 식재 시즌 예약 분양으로 진행됩니다.',
  },
  {
    id: 'spring-reserve',
    name: '봄 식재 예약 분양 (R5~R7 모둠)',
    category: 'r5',
    grade: 'R5~R7',
    form: '혼합',
    height: '1.6~2.0m',
    price: null,
    stock: 40,
    status: '예약분양',
    summary: '봄 식재 시즌 사전 예약 상품.',
    description:
      '봄 식재 시즌에 맞춰 미리 예약받는 모둠 상품입니다. 규격·수량은 상담을 통해 조정합니다.',
  },
  {
    id: 'supply-stake',
    name: '지주대 세트 (식재 자재)',
    category: 'supplies',
    grade: '-',
    form: '-',
    height: '-',
    price: 12000,
    stock: 120,
    status: '판매중',
    summary: '식재 시 나무를 지지하는 지주대 세트.',
    description: '갓 심은 나무가 뿌리내릴 때까지 지지해 주는 지주대 세트입니다.',
  },
  {
    id: 'supply-soil',
    name: '상토·영양제 패키지',
    category: 'supplies',
    grade: '-',
    form: '-',
    height: '-',
    price: 18000,
    stock: 85,
    status: '판매중',
    summary: '식재·활착을 돕는 상토와 영양제.',
    description: '식재 직후 활착을 돕는 상토와 영양제를 묶은 패키지입니다.',
  },
]

/**
 * 농장 일정 (달력용 더미 데이터)
 * ⚠️ month/day만 저장하고 연도는 화면에서 '올해'로 적용 → 매년 그대로 노출.
 * 실제 일정은 추후 교체.
 */
export interface FarmEvent {
  month: number // 1~12
  day: number
  title: string
  desc: string
  /** 일정 유형 (색 구분) */
  type: '식재' | '교육' | '개방' | '출고'
}

export const farmEvents: FarmEvent[] = [
  { month: 3, day: 2, title: '봄 식재 시즌 시작', desc: '예약 분양 출고 개시', type: '출고' },
  { month: 3, day: 15, title: '정원 식재 적기', desc: '봄 식재 권장 기간 시작', type: '식재' },
  { month: 3, day: 23, title: '소형목 출고일', desc: 'R5~R7 모둠 출고', type: '출고' },
  { month: 4, day: 10, title: '수사해당화 만개 · 농장 개방', desc: '꽃이 가득 핀 농장 방문 가능', type: '개방' },
  { month: 4, day: 20, title: '주말 농장 개방', desc: '사전 예약 방문', type: '개방' },
  { month: 5, day: 11, title: '식재 교육 (초급)', desc: '심는 법·물 주기·지주대 실습', type: '교육' },
  { month: 5, day: 25, title: '식재 교육 (중급)', desc: '수형 관리·전정 실습', type: '교육' },
  { month: 6, day: 7, title: '여름 관리 안내', desc: '병해충·가지 정리 요령 교육', type: '교육' },
  { month: 10, day: 5, title: '가을 식재 시즌', desc: '가을 식재 적기 시작', type: '식재' },
  { month: 10, day: 19, title: '다음 봄 예약 접수', desc: '예약 분양 신청 시작', type: '출고' },
  { month: 11, day: 8, title: '대형목 굴취·납품', desc: '조경 납품용 대형 성목 출고', type: '출고' },
  { month: 11, day: 22, title: '월동 관리 교육', desc: '겨울나기 준비 안내', type: '교육' },
]

/** 숫자로 보는 신뢰 */
export interface Stat {
  value: number
  unit: string
  label: string
  /** 표시할 때 이 단위로 내림 (예: 1000 → 15200을 15000으로 표기) */
  roundTo: number
  /** '그 이상'을 뜻하는 '+' 표기 여부 */
  plus?: boolean
}

export const stats: Stat[] = [
  { value: 20000, unit: '주', label: '보유 나무', roundTo: 1000, plus: true },
  { value: 15000, unit: '주', label: '식재 이력', roundTo: 1000, plus: true },
  { value: 200, unit: '명', label: '누적 교육 인원', roundTo: 100, plus: true },
]

/** 통계 표시값 — roundTo 단위로 내림한 숫자 (예: 15200 → 15000) */
export const flooredStat = (s: Stat) => Math.floor(s.value / s.roundTo) * s.roundTo

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
    href: '/album',
  },
  {
    eyebrow: '블로그',
    title: '카탈로그 · 농장블로그',
    desc: '규격별 카탈로그와 농장 일상, 재배 노하우를 글로 정리해 공유합니다.',
    href: '/blog',
  },
  {
    eyebrow: '농장 일정',
    title: '월별 식재 · 교육 일정',
    desc: '월별 농장의 식재 일정과 교육 일정을 한눈에 확인하고 미리 신청할 수 있습니다.',
    href: '/schedule',
  },
]

/** 히어로 하단 공지 티커 */
export const notices: string[] = [
  '봄 식재 시즌 수사해당화 묘목 예약 분양 안내',
  'R규격별 재고 현황이 업데이트되었습니다',
  '농장 식재 교육 일정은 [농장 일정]에서 확인하세요',
]
