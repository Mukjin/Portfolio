export const projects = [
  {
    id: "focusflow-ai",
    title: "FocusFlow_AI",
    subtitle: "AI-Native Backend Architecture 기반 지능형 학습 플래너",
    tech: ["Supabase", "PostgreSQL", "Gemini API", "React", "Zustand"],
    achievements: [
      "Rule Engine과 LLM을 결합한 하이브리드 파이프라인 구축으로 AI 응답 스키마 일치율 100% 달성 및 예측 불가능한 오류 원천 차단",
      "Gemini API의 Google Search Grounding과 Robust JSON Parser를 도입하여 가짜 링크(Dead Link) 생성률 0%, 파싱 실패율 0%로 AI 데이터 신뢰성 확보",
      "PostgreSQL JSONB 타입을 활용한 하이브리드 데이터 모델링으로 스키마 변경 없이 가변적인 AI 메타데이터를 수용하고 Read Latency 40% 단축",
      "Client-driven 상태 관리(Zustand)와 1.5초 Debounce 기반 동기화를 통해 데이터 정합성을 유지하며 불필요한 DB Write 요청 90% 감소",
      "MVP 검증 속도를 위해 Supabase를 도입하고, 향후 Spring Boot 기반 마이크로서비스로 추출 가능하도록 도메인 로직을 모듈화하여 확장성 고려"
    ],
    media: [
      { type: 'image', url: '/images/FocusFlow1.png', caption: '메인 랜딩 페이지' },
      { type: 'image', url: '/images/FocusFlow2.png', caption: '플랜 설정 및 AI 최적화' },
      { type: 'image', url: '/images/FocusFlow3.png', caption: '캘린더 뷰' },
      { type: 'image', url: '/images/FocusFlow4.png', caption: '칸반 보드 뷰' },
      { type: 'image', url: '/images/FocusFlow5.png', caption: '학습 통계 대시보드' },
      { type: 'image', url: '/images/FocusFlow6.png', caption: '상세 목록 뷰' },
      { type: 'image', url: '/images/FocusFlow7.mp4', caption: '서비스 시연 영상' }
    ]
  },
  {
    id: "bookforest",
    title: "BookForest",
    subtitle: "Spring Boot 기반 REST API 온라인 서점",
    tech: ["Java", "Spring", "JPA", "Redis", "MySQL", "Docker"],
    achievements: [
      "대규모 상품 데이터 조회 및 주문 처리 시 DB 조인 과부하 발생 → Redis 캐싱으로 DB 부하 70% 감소",
      "N+1 문제로 연관 엔티티 로딩 시 쿼리 폭증 → JPA fetch join으로 쿼리 수 50% 감축",
      "Lazy Loading 오버헤드 제거 → DTO 기반 조회로 응답 속도 70% 단축",
      "대규모 주문 이력 조회 성능 저하 → Batch Fetch Size 적용 및 DTO Projection으로 조회 속도 60% 개선",
      "복잡한 검색/필터링 성능 개선 → Elasticsearch 색인 및 Query DSL 활용, 응답 속도 80% 개선 (500ms → 100ms)"
    ]
  },
  {
    id: "refactor",
    title: "Refactor",
    subtitle: "Spring Boot 기반 인터파크 클론코딩 리팩터링",
    tech: ["Java", "Spring Boot", "JPA", "Redis", "MySQL", "Docker", "Github Actions", "JMeter"],
    achievements: [
      "복잡하게 얽힌 ERD 구조를 단순화하고 불필요한 외래키 제약을 제거하여 쿼리 성능 개선 기반 마련",
      "대용량 환경(100만 건) 공연 데이터 조회 시, 조인 쿼리를 단일 테이블 조회 및 DTO 병합 방식으로 변경하여 전체 조회 API 실행시간 815ms → 27ms(약 96%) 개선",
      "대규모 동시 요청(1만 명) 대비 Redis 기반 대기열 큐(Queue) 시스템 구현으로 서버 부하 분산 (최대 응답 시간 134초 → 52초, 처리량 3.23배 증가)",
      "좌석 중복 예매 방지를 위해 낙관적 락, 비관적 락, Redis 분산 락을 비교 분석하고, 단일 DB 환경에 적합한 낙관적 락을 적용하여 동시성 이슈 해결",
      "이미지 메타 정보 사전 획득 구조로 변경하여 검증 실패 시 롤백 과정에서 불필요한 파일이 S3에 누적되는 문제 방지"
    ]
  },
  {
    id: "fresh-connect",
    title: "프레쉬 커넥트 (Fresh-Connect)",
    subtitle: "대량의 상품 정보 및 유저 활동 처리를 위한 성능 최적화 프로젝트",
    tech: ["Spring Boot", "JPA", "Elasticsearch", "Redis", "WebSocket", "Prometheus", "Grafana"],
    achievements: [
      "통계 API(전체 매출, 주간 매출 등)의 N+1 문제 및 서버 메모리 과부하를 SQL 집계 함수와 DTO 반환으로 개선 (응답 시간 674ms → 27ms)",
      "단순 LIKE 검색의 한계(느린 속도, 트래픽 집중 시 부하)를 극복하기 위해 Elasticsearch 도입, 단일 API 응답 속도 향상 및 위치 기반 검색 구현",
      "외부 API(KAMIS) 호출 시 블로킹 방지를 위해 @Async와 CompletableFuture를 활용한 비동기 병렬 처리 적용 (실행 시간 26.6초 → 9.6초 단축)",
      "Store 도메인 조회 시 페이징 쿼리 분리 및 Fetch Join을 활용하여 N+1 문제 해결",
      "JWT 필터에서 발생하는 불필요한 연관 엔티티(Store) 로딩 문제를 FetchType.LAZY로 변경하여 TPS 약 6% 향상 (300/s → 320/s)",
      "Prometheus와 Grafana를 연동하여 실시간 성능 지표 모니터링 환경 구축"
    ]
  },
  {
    id: "giosk",
    title: "카페 키오스크 (GIOSK)",
    subtitle: "고객 요구 맞춤형 백엔드 협업 프로젝트",
    tech: ["Spring Boot", "PostgreSQL", "React", "Toss Payments", "Docker", "AWS EC2", "AWS S3"],
    achievements: [
      "Toss Payments 결제 위젯을 연동하고, 임시 주문 정보 저장 및 검증 프로세스를 구현하여 안전한 결제 흐름 구축",
      "프론트엔드와 백엔드 간 CORS 및 세션 불일치 문제를 withCredentials 설정과 allowCredentials(true)를 통해 해결하여 결제 검증 오류 수정",
      "LIFO 기반 결제 취소 제한 및 쿠폰 출처 추적 로직을 구현하여, 결제 취소 시 스탬프/쿠폰 시스템의 데이터 무결성 붕괴 문제 해결",
      "DDD(도메인 주도 설계)의 이벤트 스토밍 기법을 도입하여 복잡한 비즈니스 로직을 명확히 분리하고 엔티티 구조 설계",
      "Docker Compose를 활용하여 Spring Boot, PostgreSQL 컨테이너를 AWS EC2에 배포하고, Health Check를 통한 안정적인 서비스 기동 환경 구성"
    ]
  }
];
