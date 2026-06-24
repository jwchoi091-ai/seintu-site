import { brand } from '../data/site'
import { Blossom, SearchIcon, HeartIcon, CartIcon, UserIcon } from './icons'
import styles from './Header.module.css'

/** 로고 + 검색바 + 유틸 아이콘 (예시 이미지의 2단 헤더) */
export default function Header() {
  return (
    <div className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <a href="#top" className={styles.logo} aria-label={`${brand.name} 홈`}>
          <Blossom size={42} />
          <span className={styles.logoText}>
            <strong>{brand.name}</strong>
            <em>{brand.tagline}</em>
          </span>
        </a>

        <form
          className={styles.search}
          role="search"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="search"
            placeholder="찾으시는 수사해당화 규격을 검색해 보세요 (예: R8, 다간, 외목대)"
            aria-label="상품 검색"
          />
          <button type="submit" aria-label="검색">
            <SearchIcon />
          </button>
        </form>

        <nav className={styles.utils} aria-label="바로가기">
          <a href="#album" className={styles.util}>
            <HeartIcon />
            <span>관심상품</span>
          </a>
          <a href="#products" className={styles.util}>
            <CartIcon />
            <span>장바구니</span>
          </a>
          <a href="#login" className={styles.util}>
            <UserIcon />
            <span>마이페이지</span>
          </a>
        </nav>
      </div>
    </div>
  )
}
