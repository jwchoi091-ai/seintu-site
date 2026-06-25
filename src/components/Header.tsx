import { Link } from 'react-router-dom'
import { brand, business } from '../data/site'
import { Blossom, SearchIcon, HeartIcon, CartIcon, UserIcon } from './icons'
import styles from './Header.module.css'

/** 로고 + 검색바 + 유틸 아이콘 (예시 이미지의 2단 헤더) */
export default function Header() {
  return (
    <div className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <Link to="/" className={styles.logo} aria-label={`${brand.name} 홈`}>
          <Blossom size={42} />
          <span className={styles.logoText}>
            <strong>{brand.name}</strong>
            <em>{brand.tagline}</em>
          </span>
        </Link>

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

        {/* 관심상품·장바구니·마이페이지는 결제를 담당하는 스마트스토어로 연결 (개설 후 URL 교체) */}
        <nav className={styles.utils} aria-label="바로가기">
          <a href={business.smartStore} className={styles.util} target="_blank" rel="noreferrer">
            <HeartIcon />
            <span>관심상품</span>
          </a>
          <a href={business.smartStore} className={styles.util} target="_blank" rel="noreferrer">
            <CartIcon />
            <span>장바구니</span>
          </a>
          <a href={business.smartStore} className={styles.util} target="_blank" rel="noreferrer">
            <UserIcon />
            <span>마이페이지</span>
          </a>
        </nav>
      </div>
    </div>
  )
}
