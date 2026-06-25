import { useState } from 'react'
import { Link } from 'react-router-dom'
import { farmEvents } from '../data/site'
import PageHeader from '../components/PageHeader'
import { ChevronLeft, ChevronRight } from '../components/icons'
import styles from './Schedule.module.css'

const WEEKDAYS = ['일', '월', '화', '수', '목', '금', '토']

/** 일정 유형별 색 키 (CSS 안전 키) */
const typeKey: Record<string, string> = {
  식재: 'plant',
  교육: 'edu',
  개방: 'open',
  출고: 'ship',
}

/** 농장 일정 — 달력(메인) + 월별 목록(오른쪽) */
export default function Schedule() {
  const today = new Date()
  const year = today.getFullYear()
  const isThisMonth = (m: number) => m === today.getMonth() + 1

  const [month, setMonth] = useState(today.getMonth() + 1) // 1~12
  const [selectedDay, setSelectedDay] = useState<number | null>(
    isThisMonth(today.getMonth() + 1) ? today.getDate() : null,
  )

  // 이번 달 일정
  const monthEvents = farmEvents.filter((e) => e.month === month)
  const eventByDay = new Map<number, typeof farmEvents>()
  monthEvents.forEach((e) => {
    eventByDay.set(e.day, [...(eventByDay.get(e.day) ?? []), e])
  })

  // 달력 그리드 (앞쪽 빈칸 + 날짜)
  const firstWeekday = new Date(year, month - 1, 1).getDay()
  const daysInMonth = new Date(year, month, 0).getDate()
  const cells: (number | null)[] = [
    ...Array(firstWeekday).fill(null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ]

  // 월 이동
  const goMonth = (m: number) => {
    setMonth(m)
    setSelectedDay(isThisMonth(m) ? today.getDate() : null)
  }
  const prevMonth = () => goMonth(month === 1 ? 12 : month - 1)
  const nextMonth = () => goMonth(month === 12 ? 1 : month + 1)

  // 오른쪽 목록: 일정이 있는 달
  const monthsWithEvents = [...new Set(farmEvents.map((e) => e.month))].sort((a, b) => a - b)

  // 하단 패널: 선택한 날의 일정 (없으면 그 달 전체)
  const selectedEvents = selectedDay ? eventByDay.get(selectedDay) ?? [] : []
  const showDaySelected = selectedDay !== null && selectedEvents.length > 0

  return (
    <>
      <PageHeader
        eyebrow="농장 일정"
        title="농장 일정 달력"
        lead="달력에서 날짜를 누르면 그날의 식재·교육·개방 일정을 확인할 수 있습니다. 오른쪽 목록에서 다른 달로 이동하세요. (일정은 예시이며 변동될 수 있습니다.)"
      />

      <section className="section">
        <div className={`container ${styles.layout}`}>
          {/* 메인: 달력 */}
          <div className={styles.calendarWrap}>
            <div className={styles.calHead}>
              <button onClick={prevMonth} aria-label="이전 달" className={styles.navBtn}>
                <ChevronLeft width={20} height={20} />
              </button>
              <h2 className={styles.calTitle}>
                {year}년 <strong>{month}월</strong>
              </h2>
              <button onClick={nextMonth} aria-label="다음 달" className={styles.navBtn}>
                <ChevronRight width={20} height={20} />
              </button>
            </div>

            <div className={styles.grid}>
              {WEEKDAYS.map((w, i) => (
                <div
                  key={w}
                  className={`${styles.weekday} ${i === 0 ? styles.sun : ''} ${
                    i === 6 ? styles.sat : ''
                  }`}
                >
                  {w}
                </div>
              ))}

              {cells.map((day, i) => {
                if (day === null) return <div key={`b${i}`} className={styles.empty} />
                const dayEvents = eventByDay.get(day) ?? []
                const hasEvent = dayEvents.length > 0
                const isToday = isThisMonth(month) && day === today.getDate()
                const isSelected = day === selectedDay
                return (
                  <button
                    key={day}
                    className={`${styles.day} ${hasEvent ? styles.hasEvent : ''} ${
                      isSelected ? styles.selected : ''
                    } ${isToday ? styles.today : ''}`}
                    onClick={() => setSelectedDay(day)}
                    aria-pressed={isSelected}
                  >
                    <span className={styles.dayNum}>{day}</span>
                    {hasEvent && (
                      <span className={styles.dots}>
                        {dayEvents.slice(0, 3).map((e, j) => (
                          <i key={j} className={styles[typeKey[e.type]]} />
                        ))}
                      </span>
                    )}
                  </button>
                )
              })}
            </div>

            {/* 범례 */}
            <div className={styles.legend}>
              {Object.entries(typeKey).map(([label, key]) => (
                <span key={label}>
                  <i className={styles[key]} /> {label}
                </span>
              ))}
            </div>

            {/* 선택한 날 / 이번 달 일정 */}
            <div className={styles.detail}>
              <h3 className={styles.detailTitle}>
                {showDaySelected ? `${month}월 ${selectedDay}일 일정` : `${month}월 전체 일정`}
              </h3>
              {(showDaySelected ? selectedEvents : monthEvents).length === 0 ? (
                <p className={styles.none}>등록된 일정이 없습니다.</p>
              ) : (
                <ul className={styles.eventList}>
                  {(showDaySelected ? selectedEvents : monthEvents).map((e, i) => (
                    <li key={i}>
                      <span className={`${styles.eventDate} ${styles[typeKey[e.type]]}`}>
                        {e.day}일
                      </span>
                      <div>
                        <strong>{e.title}</strong>
                        <span className={styles.eventDesc}>{e.desc}</span>
                      </div>
                      <span className={`${styles.typeTag} ${styles[typeKey[e.type]]}`}>
                        {e.type}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          {/* 오른쪽: 월별 목록 */}
          <aside className={styles.side}>
            <h3 className={styles.sideTitle}>월별 일정</h3>
            <ul className={styles.monthList}>
              {monthsWithEvents.map((m) => {
                const evs = farmEvents.filter((e) => e.month === m)
                return (
                  <li key={m}>
                    <button
                      className={`${styles.monthBtn} ${m === month ? styles.monthActive : ''}`}
                      onClick={() => goMonth(m)}
                    >
                      <span className={styles.monthLabel}>{m}월</span>
                      <span className={styles.monthSummary}>
                        {evs[0].title}
                        {evs.length > 1 && ` 외 ${evs.length - 1}건`}
                      </span>
                    </button>
                  </li>
                )
              })}
            </ul>

            <Link to="/contact" className="btn btn-primary" style={{ width: '100%', marginTop: 18 }}>
              방문·교육 신청 문의
            </Link>
          </aside>
        </div>
      </section>
    </>
  )
}
