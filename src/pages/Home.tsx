import TopBar from '../components/TopBar'
import Header from '../components/Header'
import CategoryNav from '../components/CategoryNav'
import Hero from '../components/Hero'
import Stats from '../components/Stats'
import ProductCategories from '../components/ProductCategories'
import BrandStory from '../components/BrandStory'
import ContentPreview from '../components/ContentPreview'
import ContactCTA from '../components/ContactCTA'
import Footer from '../components/Footer'

/** 소개 메인 페이지 */
export default function Home() {
  return (
    <>
      <a href="#products" className="sr-only">
        본문 바로가기
      </a>

      <header id="top">
        <TopBar />
        <Header />
        <CategoryNav />
      </header>

      <main>
        <Hero />
        <Stats />
        <ProductCategories />
        <BrandStory />
        <ContentPreview />
        <ContactCTA />
      </main>

      <Footer />
    </>
  )
}
