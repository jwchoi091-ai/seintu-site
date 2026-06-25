import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import TopBar from './TopBar'
import Header from './Header'
import CategoryNav from './CategoryNav'
import Footer from './Footer'
import FloatingContact from './FloatingContact'

/** 라우트 변경 시 페이지 상단으로 스크롤 (해시 이동은 제외) */
function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (!hash) window.scrollTo(0, 0)
  }, [pathname, hash])
  return null
}

/** 모든 페이지가 공유하는 골격 (상단 바 · 헤더 · 카테고리바 · 푸터) */
export default function Layout() {
  return (
    <>
      <a href="#main" className="sr-only">
        본문 바로가기
      </a>
      <ScrollToTop />

      <header id="top">
        <TopBar />
        <Header />
        <CategoryNav />
      </header>

      <main id="main">
        <Outlet />
      </main>

      <Footer />
      <FloatingContact />
    </>
  )
}
