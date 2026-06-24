# 수사해당가든 (Suusa-Haedang Garden)

수사해당화 전문 농장 공식 홈페이지. 회원이 묘목을 구매하고, 식재·농사 정보를 얻어가는 마케팅·판매용 사이트입니다.

> 현재 단계: **소개(메인) 페이지** 1종 완성. 회원·결제·상품 상세는 순차 개발 예정이며, 추후 네이버 스마트스토어·모바일 앱과 콘텐츠를 공유합니다.

> 🧭 **다른 컴퓨터에서 작업하거나, 작업 흐름·명령어가 궁금하면 [SETUP.md](SETUP.md)를 보세요.**
> 라이브 사이트: https://sweet-lamington-f73d5c.netlify.app/

## 기술 스택

- **React 18 + TypeScript**
- **Vite** (개발 서버 / 번들러)
- **CSS Modules** + 디자인 토큰(`src/styles/global.css`)
- 웹폰트: Pretendard

## 실행 방법

```bash
npm install      # 최초 1회
npm run dev      # 개발 서버 (http://localhost:5173)
npm run build    # 프로덕션 빌드 → dist/
npm run preview  # 빌드 결과 미리보기
```

## 폴더 구조

```
src/
  data/site.ts          모든 문구·수치의 단일 출처 (ABOUT 문서 기반)
  styles/global.css     디자인 토큰 · 공용 스타일
  components/           헤더/히어로/통계/카테고리/스토리/푸터 등 + 각 .module.css
  pages/Home.tsx        소개 메인 페이지 (섹션 조립)
  components/icons.tsx   인라인 SVG 아이콘 + 수사해당화 블라썸 마크
```

## 콘텐츠 수정

사이트의 모든 텍스트·메뉴·숫자는 [`src/data/site.ts`](src/data/site.ts) 한 곳에서 관리합니다.
브랜드명, 포지셔닝 문구, 메뉴 구성, 신뢰 수치, 연락처를 이 파일에서 바로 바꿀 수 있습니다.

## 디자인

- 팔레트: 자연 그린 + 수사해당화 블라썸 핑크
- 레이아웃: 상단 유틸바 → 로고·검색 → 초록 카테고리바 → 히어로 (원예 쇼핑몰 관례 반영)
- 반응형: 데스크톱 / 태블릿 / 모바일(햄버거 메뉴) 대응
