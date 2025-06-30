# YouTube 클론

React 기반 YouTube 클론 애플리케이션으로 YouTube의 기능과 디자인을 모방합니다. 이 프로젝트는 사용자가 비디오를 탐색하고, 비디오 세부 정보를 보고, 비디오를 검색하고, 관련 콘텐츠를 볼 수 있게 합니다.

## 주요 기능

- **비디오 탐색**: 인기 있는 트렌딩 비디오 탐색
- **비디오 검색**: 키워드를 사용하여 비디오 검색
- **비디오 재생**: 커스텀 비디오 플레이어로 비디오 시청
- **채널 정보**: 채널 세부 정보 및 해당 채널의 비디오 보기
- **관련 비디오**: 현재 시청 중인 비디오 기반 관련 비디오 보기
- **다크 모드**: 더 나은 시청 경험을 위한 라이트/다크 모드 전환

## 기술 스택

- **프론트엔드**: React.js, React Router
- **스타일링**: TailwindCSS
- **상태 관리**: React Context API
- **데이터 요청**: Tanstack React Query, Axios
- **비디오 플레이어**: react-youtube
- **아이콘**: react-icons
- **날짜 형식**: moment

## 프로젝트 구조

```
src/
  ├── api/                  # API 클라이언트 및 서비스 레이어
  ├── components/           # 재사용 가능한 UI 컴포넌트
  │   ├── ChannelInfo.jsx   # 채널 정보 컴포넌트
  │   ├── Header.jsx        # 검색 기능이 있는 애플리케이션 헤더
  │   ├── NotFound.jsx      # 404 페이지 컴포넌트
  │   ├── RelatedVideos.jsx # 관련 비디오 사이드바
  │   ├── SearchBox.jsx     # 검색 기능 컴포넌트
  │   ├── VideoBlock.jsx    # 비디오 카드 컴포넌트
  │   ├── VideoDetail.jsx   # 비디오 세부 정보 페이지 컴포넌트
  │   └── Videos.jsx        # 비디오 목록 컴포넌트
  ├── context/              # React Context 제공자
  │   ├── DarkModeContext.jsx  # 다크 모드 기능
  │   └── YoutubeApiContext.jsx # YouTube API 컨텍스트
  └── App.js                # 메인 애플리케이션 컴포넌트 및 라우트
```

## 시작하기

### 필수 조건

- Node.js (v14 이상)
- npm 또는 yarn

### 설치

1. 저장소 복제

   ```
   git clone [저장소-링크]
   cd youtube
   ```

2. 의존성 설치

   ```
   npm install
   # 또는
   yarn
   ```

3. 개발 서버 시작

   ```
   npm start
   # 또는
   yarn start
   ```

4. 브라우저를 열고 `http://localhost:3000`으로 이동

## 개발

### 사용 가능한 스크립트

- `npm start` - 개발 모드에서 앱 실행
- `npm test` - 테스트 러너 시작
- `npm run build` - 프로덕션용 앱 빌드
- `npm run eject` - create-react-app 구성 이젝트

## API 통합

이 애플리케이션은 개발을 위해 실제 YouTube API와 목업 데이터를 모두 사용합니다:

- `youtubeClient.js` - 실제 YouTube API 호출 처리
- `fakeYoutubeClient.js` - API 할당량 사용 없이 개발을 위한 목업 데이터 제공

## 배포

이 프로젝트는 Netlify 또는 다른 정적 호스팅 서비스에 배포할 수 있습니다:

1. 프로젝트 빌드:
   ```
   npm run build
   ```
2. `build` 디렉토리를 호스팅 서비스에 배포
