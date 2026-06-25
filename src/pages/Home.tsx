import Hero from '../components/Hero'
import Stats from '../components/Stats'
import ProductCategories from '../components/ProductCategories'
import BrandStory from '../components/BrandStory'
import ContentPreview from '../components/ContentPreview'
import ContactCTA from '../components/ContactCTA'

/** 소개 메인 페이지 (섹션 조립) */
export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <ProductCategories />
      <BrandStory />
      <ContentPreview />
      <ContactCTA />
    </>
  )
}
