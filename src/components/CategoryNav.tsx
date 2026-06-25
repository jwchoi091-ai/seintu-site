import { useState } from 'react'
import { Link } from 'react-router-dom'
import { mainNav, productCategories } from '../data/site'
import { MenuIcon, CloseIcon, ChevronDown } from './icons'
import styles from './CategoryNav.module.css'

/** 카테고리 슬러그 → 상품목록 경로 */
const catTo = (slug: string) => (slug === 'all' ? '/products' : `/products?cat=${slug}`)

/** 초록 카테고리 바 — CATEGORY OPEN 패널 + 주메뉴 (모바일 햄버거 대응) */
export default function CategoryNav() {
  const [catOpen, setCatOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav className={styles.bar} aria-label="주 메뉴">
      <div className={`container ${styles.inner}`}>
        {/* CATEGORY OPEN */}
        <div
          className={styles.catWrap}
          onMouseEnter={() => setCatOpen(true)}
          onMouseLeave={() => setCatOpen(false)}
        >
          <button
            className={styles.catBtn}
            aria-expanded={catOpen}
            onClick={() => setCatOpen((v) => !v)}
          >
            <MenuIcon width={20} height={20} />
            <span>CATEGORY</span>
            <ChevronDown width={16} height={16} className={styles.catChevron} />
          </button>

          {catOpen && (
            <div className={styles.catPanel} role="menu">
              <p className={styles.catPanelTitle}>상품 카테고리</p>
              <ul>
                {productCategories.map((c) => (
                  <li key={c.slug}>
                    <Link to={catTo(c.slug)} role="menuitem" onClick={() => setCatOpen(false)}>
                      <span>{c.label}</span>
                      <em>{c.desc}</em>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* 데스크톱 주메뉴 */}
        <ul className={styles.menu}>
          {mainNav.map((item) => (
            <li key={item.label}>
              <Link to={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>

        {/* 모바일 토글 */}
        <button
          className={styles.mobileToggle}
          aria-expanded={mobileOpen}
          aria-label="메뉴 열기"
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <CloseIcon /> : <MenuIcon />}
          <span>전체메뉴</span>
        </button>
      </div>

      {/* 모바일 드로어 */}
      {mobileOpen && (
        <div className={styles.drawer}>
          <div className={styles.drawerHead}>
            <strong>전체메뉴</strong>
            <button aria-label="닫기" onClick={() => setMobileOpen(false)}>
              <CloseIcon />
            </button>
          </div>
          <ul className={styles.drawerMenu}>
            {mainNav.map((item) => (
              <li key={item.label}>
                <Link to={item.href} onClick={() => setMobileOpen(false)}>
                  {item.label}
                </Link>
                {item.children && (
                  <ul className={styles.drawerSub}>
                    {item.children.map((c) => (
                      <li key={c.label}>
                        <Link to={c.href} onClick={() => setMobileOpen(false)}>
                          {c.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}
