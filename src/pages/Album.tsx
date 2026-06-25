import { useState } from 'react'
import PageHeader from '../components/PageHeader'
import Placeholder from '../components/Placeholder'
import page from './Page.module.css'

/** 앨범 — 농장 / 식재 현장 / 교육 사진 (더미) */
const TABS = ['전체', '농장', '식재 현장', '교육'] as const

const PHOTOS = [
  { cat: '농장', caption: '봄철 만개한 수사해당화' },
  { cat: '농장', caption: '농장 전경' },
  { cat: '식재 현장', caption: '정원 식재 현장' },
  { cat: '교육', caption: '식재 교육 모습' },
  { cat: '농장', caption: '가을의 농장' },
  { cat: '식재 현장', caption: '조경 납품 현장' },
  { cat: '교육', caption: '관리 노하우 강의' },
  { cat: '농장', caption: '묘목장 전경' },
  { cat: '식재 현장', caption: '전원주택 마당 식재' },
]

export default function Album() {
  const [tab, setTab] = useState<(typeof TABS)[number]>('전체')
  const list = tab === '전체' ? PHOTOS : PHOTOS.filter((p) => p.cat === tab)

  return (
    <>
      <PageHeader
        eyebrow="앨범"
        title="농장과 현장의 기록"
        lead="농장의 사계절, 식재 현장, 교육 현장의 모습을 사진으로 담았습니다. (사진은 준비 중이며 순차 업로드됩니다.)"
      />

      <section className="section">
        <div className="container">
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 28 }}>
            {TABS.map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className="btn"
                style={{
                  padding: '9px 18px',
                  background: t === tab ? 'var(--green-600)' : 'var(--canvas-soft)',
                  color: t === tab ? '#fff' : 'var(--ink-2)',
                  border: `1px solid ${t === tab ? 'var(--green-600)' : 'var(--hairline-strong)'}`,
                }}
              >
                {t}
              </button>
            ))}
          </div>

          <div className={page.gallery}>
            {list.map((p, i) => (
              <figure key={i} className={page.galleryItem}>
                <Placeholder label="사진 준비중" ratio="1 / 1" seed={i + 2} />
                <figcaption>{p.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
