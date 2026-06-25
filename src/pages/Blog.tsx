import { business } from '../data/site'
import PageHeader from '../components/PageHeader'
import Placeholder from '../components/Placeholder'
import { ArrowRight } from '../components/icons'
import page from './Page.module.css'

/**
 * 블로그 — 카탈로그 / 농장블로그 (더미 글 목록)
 * link: 해당 글의 네이버 블로그 주소. 비워두면 블로그 메인으로 연결.
 *   → 실제 글이 생기면 그 글의 주소를 link에 붙여넣으면 카드가 그 글로 바로 이동합니다.
 *   (추후 RSS 자동 연동 시에는 이 주소가 자동으로 채워집니다.)
 */
interface Post {
  tag: string
  title: string
  excerpt: string
  date: string
  link?: string
}

const POSTS: Post[] = [
  {
    tag: '카탈로그',
    title: 'R규격별 수사해당화 카탈로그 (2026 봄)',
    excerpt: '근원 규격별 수형과 가격대를 한눈에 정리한 봄 시즌 카탈로그입니다.',
    date: '2026.03.02',
    link: '', // 예: 'https://blog.naver.com/momsdream_treefarm/2230xxxxxxxx'
  },
  {
    tag: '농장블로그',
    title: '수사해당화 식재, 이렇게 하면 잘 자랍니다',
    excerpt: '심는 깊이부터 물 주기, 지주대 세우기까지 활착을 돕는 기본 식재법.',
    date: '2026.02.18',
    link: '',
  },
  {
    tag: '농장블로그',
    title: '봄을 알리는 첫 꽃, 농장의 3월',
    excerpt: '늘어진 가지마다 분홍 꽃이 피기 시작하는 농장의 봄 풍경을 기록합니다.',
    date: '2026.03.15',
    link: '',
  },
  {
    tag: '카탈로그',
    title: '외목대 vs 다간, 무엇을 고를까?',
    excerpt: '수형에 따른 분위기와 관리 차이를 비교해 선택을 돕습니다.',
    date: '2026.01.27',
    link: '',
  },
  {
    tag: '농장블로그',
    title: '대형목 운반·식재 현장 이야기',
    excerpt: '조경 납품을 위한 대형 성목의 굴취부터 운반, 식재까지의 과정.',
    date: '2025.11.30',
    link: '',
  },
  {
    tag: '농장블로그',
    title: '가을, 다음 봄을 준비하는 농장',
    excerpt: '월동 관리와 다음 시즌 예약 분양을 준비하는 가을 농장의 일과.',
    date: '2025.10.20',
    link: '',
  },
]

export default function Blog() {
  return (
    <>
      <PageHeader
        eyebrow="블로그"
        title="카탈로그 · 농장블로그"
        lead="규격별 카탈로그와 농장 일상, 재배 노하우를 글로 정리해 공유합니다. (게시글은 예시이며 순차 발행됩니다.)"
      />

      <section className="section">
        <div className="container">
          {/* 네이버 블로그 바로가기 */}
          <div className={page.blogBar}>
            <p>
              농장의 글은 <strong>네이버 블로그</strong>에서 더 자세히 보실 수 있습니다.
            </p>
            <a
              href={business.naverBlog}
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              네이버 블로그 바로가기 <ArrowRight width={18} height={18} />
            </a>
          </div>

          <div className={page.cards}>
            {POSTS.map((post, i) => (
              <a
                key={i}
                href={post.link || business.naverBlog}
                className={page.cardLink}
                target="_blank"
                rel="noreferrer"
              >
                <Placeholder label="대표 이미지 준비중" ratio="16 / 9" seed={i + 4} />
                <div className={page.cardBody}>
                  <span className={page.cardTag}>{post.tag}</span>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <span className={page.cardMeta}>{post.date}</span>
                </div>
              </a>
            ))}
          </div>

          <p className={page.blogNote}>
            ※ 글 목록은 예시입니다. 네이버 블로그에 글을 올리면 홈페이지에도 자동으로 보이게 하는
            연동은 추후(파트 2/6) 작업 예정입니다.
          </p>
        </div>
      </section>
    </>
  )
}
