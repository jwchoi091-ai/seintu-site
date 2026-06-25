import { Link } from 'react-router-dom'
import { Blossom } from '../components/icons'

/** 404 */
export default function NotFound() {
  return (
    <section className="section">
      <div
        className="container"
        style={{
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 14,
          paddingBlock: 40,
        }}
      >
        <Blossom size={56} />
        <h1 style={{ fontSize: '2rem' }}>페이지를 찾을 수 없습니다</h1>
        <p style={{ color: 'var(--ink-mute)' }}>
          주소가 바뀌었거나 존재하지 않는 페이지입니다.
        </p>
        <Link to="/" className="btn btn-primary" style={{ marginTop: 10 }}>
          홈으로 돌아가기
        </Link>
      </div>
    </section>
  )
}
