// EstiBuilder App Logic

// 1. Master Item Database (통신공사 품목 DB)
const ITEM_MASTER_DB = [
    // category: device
    { id: "M001", name: "모듈라짹", spec: "매입용, Cat.5 2구", unit: "개", category: "device", materialPrice: 11500, laborType: "통신내선공", laborFactor: 0.0336, laborRef: "통신 4-3-2" },
    { id: "M002", name: "TV UNIT", spec: "쌍방향, 단말", unit: "개", category: "device", materialPrice: 2635, laborType: "통신내선공", laborFactor: 0.0700, laborRef: "통신 4-2-2" },
    { id: "M003", name: "TV UNIT", spec: "쌍방향, 직렬", unit: "개", category: "device", materialPrice: 2750, laborType: "통신내선공", laborFactor: 0.0700, laborRef: "통신 4-2-2" },
    { id: "M004", name: "스피커", spec: "스피커(S.T), 천정용(3W)", unit: "개", category: "device", materialPrice: 16174, laborType: "통신설비공", laborFactor: 0.2100, laborRef: "통신 7-11-5" },
    { id: "M005", name: "스피커", spec: "벽부형(3W)", unit: "개", category: "device", materialPrice: 18500, laborType: "통신설비공", laborFactor: 0.2100, laborRef: "통신 7-11-5" },
    { id: "M006", name: "CCTV카메라(일체형)", spec: "Color CCD, Dome(고정형)", unit: "개", category: "device", materialPrice: 125000, laborType: "통신설비공", laborFactor: 0.2400, laborRef: "통신 9-2-1-1" },
    { id: "M007", name: "무선 경광등", spec: "경보장치용", unit: "개", category: "device", materialPrice: 195500, laborType: "통신내선공", laborFactor: 0.1000, laborRef: "통신 4-4-1" },
    { id: "M008", name: "비상벨 송신기", spec: "무선 송신형", unit: "개", category: "device", materialPrice: 13800, laborType: "통신내선공", laborFactor: 0.1000, laborRef: "통신 4-4-1" },
    { id: "M009", name: "비상벨 수신기", spec: "메인 제어형", unit: "개", category: "device", materialPrice: 465750, laborType: "통신내선공", laborFactor: 0.1000, laborRef: "통신 4-4-1" },
    { id: "M010", name: "비상벨 중계기", spec: "신호 증폭용", unit: "개", category: "device", materialPrice: 523250, laborType: "통신내선공", laborFactor: 0.1000, laborRef: "통신 4-4-1" },
    { id: "M011", name: "경광등용 안내판", spec: "아크릴 포장형", unit: "개", category: "device", materialPrice: 11500, laborType: "통신내선공", laborFactor: 0.1000, laborRef: "통신 4-4-1" },
    
    // category: cable
    { id: "C001", name: "UTP 케이블", spec: "CAT 5E. 4P-0.5mm", unit: "M", category: "cable", materialPrice: 350, laborType: "통신내선공", laborFactor: 0.0336, laborRef: "통신 4-3-2" },
    { id: "C002", name: "광섬유 케이블", spec: "2Core (S/M)", unit: "M", category: "cable", materialPrice: 850, laborType: "통신설비공", laborFactor: 0.0500, laborRef: "통신 4-1-3" },
    { id: "C003", name: "Speaker Cable", spec: "2S11F", unit: "M", category: "cable", materialPrice: 650, laborType: "통신설비공", laborFactor: 0.0400, laborRef: "통신 4-8-1" },
    { id: "C004", name: "난연성 비닐절연 접지선", spec: "0.6/1kV F-GV 16㎟", unit: "M", category: "cable", materialPrice: 3500, laborType: "통신내선공", laborFactor: 0.1200, laborRef: "통신 6-1-1" },
    { id: "C005", name: "압착단자 (접지용)", spec: "R형동선 나압착 16 ㎟", unit: "개", category: "cable", materialPrice: 350, laborType: "통신내선공", laborFactor: 0.0500, laborRef: "통신 6-1-1" },

    // category: pipe
    { id: "P001", name: "경질비닐전선관(통신)", spec: "HI 22 mm", unit: "M", category: "pipe", materialPrice: 1200, laborType: "통신내선공", laborFactor: 0.0600, laborRef: "통신 3-1-1" },
    { id: "P002", name: "경질비닐전선관(통신)", spec: "HI 36 mm", unit: "M", category: "pipe", materialPrice: 1800, laborType: "통신내선공", laborFactor: 0.0800, laborRef: "통신 3-1-1" },
    { id: "P003", name: "경질비닐전선관(노출)", spec: "HI 36 mm", unit: "M", category: "pipe", materialPrice: 2000, laborType: "통신내선공", laborFactor: 0.0900, laborRef: "통신 3-1-1" },
    { id: "P004", name: "강제전선관용 부품", spec: "위샤캡, 36 C", unit: "개", category: "pipe", materialPrice: 1500, laborType: "통신내선공", laborFactor: 0.0500, laborRef: "통신 3-7-1" },
    { id: "P005", name: "지중선용 가선철물", spec: "전주용입상관, D130x2m", unit: "개", category: "pipe", materialPrice: 45000, laborType: "통신내선공", laborFactor: 0.2500, laborRef: "통신 3-7-1" },
    { id: "P006", name: "통신맨홀 (사각수공 1호)", spec: "450x950x700", unit: "개소", category: "pipe", materialPrice: 180000, laborType: "통신내선공", laborFactor: 1.5000, laborRef: "통신 2-3-1" },
    { id: "P007", name: "관로구방수(통신)", spec: "D 30", unit: "개소", category: "pipe", materialPrice: 8500, laborType: "통신내선공", laborFactor: 0.1500, laborRef: "통신 4-1-7" },
    { id: "P008", name: "관로구방수(통신)", spec: "D 50", unit: "개소", category: "pipe", materialPrice: 12000, laborType: "통신내선공", laborFactor: 0.2000, laborRef: "통신 4-1-7" },
    
    // category: labor
    { id: "L001", name: "터파기(인력100%)", spec: "보통토사0∼1m", unit: "㎥", category: "labor", materialPrice: 0, laborType: "특별인부", laborFactor: 0.3500, laborRef: "공통 3-2-1" },
    { id: "L002", name: "되메우기(인력100%)", spec: "보통토사", unit: "㎥", category: "labor", materialPrice: 0, laborType: "특별인부", laborFactor: 0.2000, laborRef: "공통 3-4-3" },
    { id: "L003", name: "현장내잔토처리", spec: "소운반.고르기", unit: "㎥", category: "labor", materialPrice: 0, laborType: "특별인부", laborFactor: 0.1500, laborRef: "공통 3-2-1" },
    { id: "L004", name: "잡석깔기지정", spec: "인력포설", unit: "㎥", category: "labor", materialPrice: 28000, laborType: "특별인부", laborFactor: 0.4000, laborRef: "공통 3-4-8" }
];

// 표준품셈 데이터베이스 (자동 추천 및 세부 설정용)
const STANDARD_LABOR_DB = [
    { code: "통신 1-1-6", name: "재료의 할증률 및 철거손실률   공사용 재료의 할증률 및 철거용 재료의 ", spec: "표준 규격", unit: "개", laborType: "특별인부", laborFactor: 41.531, category: "device", keywords: ["재료의 할증률 및 철거손실률   공사"] },
    { code: "통신 1-1-7", name: "1-1-6  재료의 할증률 및 철거손실률   공사용 재료의 할증률 및 철", spec: "표준 규격", unit: "개", laborType: "특별인부", laborFactor: 41.531, category: "device", keywords: ["1-1-6  재료의 할증률 및 철거손"] },
    { code: "통신 1-1-21", name: "o H1(총주행시간 : hr) = ( + ) × N    ", spec: "표준 규격", unit: "개", laborType: "보통인부", laborFactor: 0.1, category: "device", keywords: ["o H1(총주행시간 : hr) = ("] },
    { code: "통신 1-1-20", name: "건설기계운전사 건설기계관리법 시행령 제2조에 규정한 기계로서 다음과 같은", spec: "표준 규격", unit: "개", laborType: "보통인부", laborFactor: 2.83, category: "device", keywords: ["건설기계운전사 건설기계관리법 시행령 "] },
    { code: "통신 1-1-22", name: "경운기 운반 및 적상․하 시간 기준  가 경운기 운반비 산출공식   (1", spec: "표준 규격", unit: "개", laborType: "보통인부", laborFactor: 0.1, category: "device", keywords: ["경운기 운반 및 적상․하 시간 기준 "] },
    { code: "통신 1-4-5", name: "운전경비 산정  o 장비연료 및 운전원장비규격주연료(L/h)잡재료(주연료", spec: "표준 규격", unit: "개", laborType: "보통인부", laborFactor: 0.55, category: "device", keywords: ["운전경비 산정  o 장비연료 및 운전"] },
    { code: "통신 2-1-1", name: "제 2 장  관로․전봇대공사2-1  관로   PVC관규격통신외선공보통인부", spec: "표준 규격", unit: "개", laborType: "통신외선공", laborFactor: 0.06, category: "pipe", keywords: ["제 2 장  관로․전봇대공사2-1  "] },
    { code: "통신 2-1-4-2", name: "[해 설]   ① 콘크리트 트로프(Trough) 설치, 흄관 및 강관 부", spec: "표준 규격", unit: "개", laborType: "통신외선공", laborFactor: 0.06, category: "pipe", keywords: ["[해 설]   ① 콘크리트 트로프(T"] },
    { code: "통신 2-1-8-1", name: "[해 설]   ① 콘크리트 트로프(Trough) 설치, 흄관 및 강관 부", spec: "표준 규격", unit: "개", laborType: "통신외선공", laborFactor: 0.06, category: "pipe", keywords: ["[해 설]   ① 콘크리트 트로프(T"] },
    { code: "통신 2-1-9", name: "[해 설]   ① 콘크리트 트로프(Trough) 설치, 흄관 및 강관 부", spec: "표준 규격", unit: "개", laborType: "통신외선공", laborFactor: 0.06, category: "pipe", keywords: ["[해 설]   ① 콘크리트 트로프(T"] },
    { code: "통신 1-1-27-1", name: "[해 설]   ① 콘크리트 트로프(Trough) 설치, 흄관 및 강관 부", spec: "표준 규격", unit: "개", laborType: "통신외선공", laborFactor: 0.06, category: "device", keywords: ["[해 설]   ① 콘크리트 트로프(T"] },
    { code: "통신 2-1-4", name: "흄관 및 강관  -1  흄관규격(외경) 통신외선공보통인부763㎜ 이하11", spec: "표준 규격", unit: "개", laborType: "통신외선공", laborFactor: 0.29, category: "pipe", keywords: ["흄관 및 강관  -1  흄관규격(외경"] },
    { code: "통신 2-1-4-1", name: "2-1-4  흄관 및 강관    흄관규격(외경) 통신외선공보통인부763㎜", spec: "표준 규격", unit: "개", laborType: "통신외선공", laborFactor: 0.29, category: "pipe", keywords: ["2-1-4  흄관 및 강관    흄관"] },
    { code: "통신 2-2-1", name: "2-2  트로프(Trough)   콘크리트 트로프  -1  일반용 트로프", spec: "표준 규격", unit: "개", laborType: "통신외선공", laborFactor: 0.16, category: "pipe", keywords: ["2-2  트로프(Trough)   콘"] },
    { code: "통신 2-2-1-1", name: "2-2  트로프(Trough) 2-2-1  콘크리트 트로프    일반용 ", spec: "표준 규격", unit: "개", laborType: "통신외선공", laborFactor: 0.16, category: "pipe", keywords: ["2-2  트로프(Trough) 2-2"] },
    { code: "통신 2-3-3", name: "③ 철개인상의 경우는 신설품셈에 철거품셈을 합산하여 적용   ④ 재해 예", spec: "표준 규격", unit: "개", laborType: "통신외선공", laborFactor: 10.03, category: "pipe", keywords: ["③ 철개인상의 경우는 신설품셈에 철거"] },
    { code: "통신 2-4-1", name: "2-4  전봇대   전봇대 인력 세움공정규격통신외선공보통인부", spec: "표준 규격", unit: "개", laborType: "통신외선공", laborFactor: 0.65, category: "pipe", keywords: ["2-4  전봇대   전봇대 인력 세움"] },
    { code: "통신 2-4-2", name: "전봇대 기계화 세움규격통신외선공보통인부장비사용시간 Tc값(분)(F=10)", spec: "표준 규격", unit: "개", laborType: "통신외선공", laborFactor: 140.15, category: "pipe", keywords: ["전봇대 기계화 세움규격통신외선공보통인"] },
    { code: "통신 3-1-1", name: "[해 설]   ① 콘크리트 매입 경우임   ② Box 위치의 먹줄치기, ", spec: "표준 규격", unit: "개", laborType: "통신내선공", laborFactor: 0.09, category: "pipe", keywords: ["[해 설]   ① 콘크리트 매입 경우"] },
    { code: "통신 3-2-2", name: "[해 설]   ① 콘크리트 매입 경우임   ② Box 위치의 먹줄치기, ", spec: "표준 규격", unit: "개", laborType: "통신내선공", laborFactor: 0.09, category: "pipe", keywords: ["[해 설]   ① 콘크리트 매입 경우"] },
    { code: "통신 3-3-2", name: "050058070086110210  [해 설]   ① 본 품셈은 중간단자", spec: "표준 규격", unit: "개", laborType: "통신내선공", laborFactor: 0.1, category: "pipe", keywords: ["050058070086110210  "] },
    { code: "통신 4-3-3", name: "[해 설]   ① 옥내설치의 경우에도 본 품셈 적용 다만, 통신케이블공을", spec: "표준 규격", unit: "개", laborType: "통신내선공", laborFactor: 0.02, category: "cable", keywords: ["[해 설]   ① 옥내설치의 경우에도"] },
    { code: "통신 3-3-3", name: "[해 설]   ① 옥내설치의 경우에도 본 품셈 적용 다만, 통신케이블공을", spec: "표준 규격", unit: "개", laborType: "통신내선공", laborFactor: 0.02, category: "pipe", keywords: ["[해 설]   ① 옥내설치의 경우에도"] },
    { code: "통신 3-4-1", name: "3-4  케이블랙 및 트레이   케이블랙 및 트레이규격 통신내선공철재알루", spec: "표준 규격", unit: "개", laborType: "통신내선공", laborFactor: 1.502, category: "pipe", keywords: ["3-4  케이블랙 및 트레이   케이"] },
    { code: "통신 3-7-1", name: "[해 설]   ① 먹줄, 인서트 및 지지금속부속품(전산볼트, 브라켓, 나", spec: "표준 규격", unit: "개", laborType: "통신내선공", laborFactor: 1.502, category: "pipe", keywords: ["[해 설]   ① 먹줄, 인서트 및 "] },
    { code: "통신 9-4-20-4", name: "[해 설]   ① 먹줄, 인서트 및 지지금속부속품(전산볼트, 브라켓, 나", spec: "표준 규격", unit: "개", laborType: "통신내선공", laborFactor: 1.502, category: "device", keywords: ["[해 설]   ① 먹줄, 인서트 및 "] },
    { code: "통신 3-4-2", name: "[해 설]   ① 먹줄, 인서트 및 지지금속부속품(전산볼트, 브라켓, 나", spec: "표준 규격", unit: "개", laborType: "통신내선공", laborFactor: 1.502, category: "pipe", keywords: ["[해 설]   ① 먹줄, 인서트 및 "] },
    { code: "통신 3-6-1", name: "3-6  액세스플로어(Access Floor)   액세스플로어(Acces", spec: "표준 규격", unit: "개", laborType: "보통인부", laborFactor: 160.18, category: "pipe", keywords: ["3-6  액세스플로어(Access F"] },
    { code: "통신 3-7-2", name: "[해 설]   ① 천장의 경우 150% 적용   ② 방폭형 200% 적용", spec: "표준 규격", unit: "개", laborType: "특별인부", laborFactor: 0.4, category: "pipe", keywords: ["[해 설]   ① 천장의 경우 150"] },
    { code: "통신 3-7-2-1", name: "[해 설]   ① 천장의 경우 150% 적용   ② 방폭형 200% 적용", spec: "표준 규격", unit: "개", laborType: "특별인부", laborFactor: 0.4, category: "pipe", keywords: ["[해 설]   ① 천장의 경우 150"] },
    { code: "통신 3-7-2-2", name: "덕트용 구멍뚫기", spec: "표준 규격", unit: "개", laborType: "보통인부", laborFactor: 0.4, category: "pipe", keywords: ["덕트용 구멍뚫기"] },
    { code: "통신 1-2-2-5", name: "⑩ 인력 견인포설시 8자 포설은 보통인부에 한하여 15% 가산   ⑪ 교", spec: "표준 규격", unit: "개", laborType: "통신외선공", laborFactor: 0.1, category: "device", keywords: ["⑩ 인력 견인포설시 8자 포설은 보통"] },
    { code: "통신 4-1-2-1", name: "[해 설]   ① 평탄지, 일반공법 및 기설낙뢰차폐선(철거비 별도) 송전", spec: "표준 규격", unit: "개", laborType: "통신외선공", laborFactor: 0.1, category: "cable", keywords: ["[해 설]   ① 평탄지, 일반공법 "] },
    { code: "통신 4-1-1", name: "5C 이하100m0410417C〃0650528C〃07405910C〃093", spec: "표준 규격", unit: "개", laborType: "보통인부", laborFactor: 0.22, category: "cable", keywords: ["5C 이하100m0410417C〃06"] },
    { code: "통신 5-1-1", name: "[해 설]   ① Outlet Box 6구는 본 품셈의 130%, 12구", spec: "표준 규격", unit: "개", laborType: "보통인부", laborFactor: 0.1, category: "device", keywords: ["[해 설]   ① Outlet Box"] },
    { code: "통신 4-7-1", name: "4-7  시내케이블   지중 및 가공케이블규격지중케이블가공케이블통신케이블", spec: "표준 규격", unit: "개", laborType: "보통인부", laborFactor: 0.65, category: "cable", keywords: ["4-7  시내케이블   지중 및 가공"] },
    { code: "통신 4-7-2", name: "시내케이블 심선 보통접속  -1  심선개별 보통접속규격통신케이블공보통인부", spec: "표준 규격", unit: "개", laborType: "보통인부", laborFactor: 0.09, category: "cable", keywords: ["시내케이블 심선 보통접속  -1  심"] },
    { code: "통신 4-7-2-1", name: "4-7-2  시내케이블 심선 보통접속    심선개별 보통접속규격통신케이블", spec: "표준 규격", unit: "개", laborType: "보통인부", laborFactor: 0.09, category: "cable", keywords: ["4-7-2  시내케이블 심선 보통접속"] },
    { code: "통신 4-7-3", name: "소대시내케이블 보통접속규격통신케이블공보통인부          3P  이상", spec: "표준 규격", unit: "개", laborType: "보통인부", laborFactor: 0.65, category: "cable", keywords: ["소대시내케이블 보통접속규격통신케이블공"] },
    { code: "통신 4-7-4", name: "[해 설]   ① 스탈페스(Stalpeth), 웰만텔(Wellmantel", spec: "표준 규격", unit: "개", laborType: "보통인부", laborFactor: 0.65, category: "cable", keywords: ["[해 설]   ① 스탈페스(Stalp"] },
    { code: "통신 4-7-4-1", name: "[해 설]   ① 스탈페스(Stalpeth), 웰만텔(Wellmantel", spec: "표준 규격", unit: "개", laborType: "보통인부", laborFactor: 0.65, category: "cable", keywords: ["[해 설]   ① 스탈페스(Stalp"] },
    { code: "통신 4-7-5", name: "케이블 외피접속  -1  열수축관에 의한 케이블 외피접속규격통신케이블공보", spec: "표준 규격", unit: "개", laborType: "보통인부", laborFactor: 0.15, category: "cable", keywords: ["케이블 외피접속  -1  열수축관에 "] },
    { code: "통신 4-7-5-1", name: "4-7-5  케이블 외피접속    열수축관에 의한 케이블 외피접속규격통신", spec: "표준 규격", unit: "개", laborType: "보통인부", laborFactor: 0.15, category: "cable", keywords: ["4-7-5  케이블 외피접속    열"] },
    { code: "통신 4-7-5-2", name: "4-7-5  케이블 외피접속  4-7-5-1  열수축관에 의한 케이블 외", spec: "표준 규격", unit: "개", laborType: "보통인부", laborFactor: 0.15, category: "cable", keywords: ["4-7-5  케이블 외피접속  4-7"] },
    { code: "통신 4-7-5-3", name: "[해 설]    ① 가공케이블 시공 시 120% 적용    ② 씨링콤파운", spec: "표준 규격", unit: "개", laborType: "보통인부", laborFactor: 360.37, category: "cable", keywords: ["[해 설]    ① 가공케이블 시공 "] },
    { code: "통신 4-7-6", name: "케이블 국내성단(100회선당)규  격  별 통신케이블공보통인부04, 05", spec: "표준 규격", unit: "개", laborType: "보통인부", laborFactor: 300.33, category: "cable", keywords: ["케이블 국내성단(100회선당)규  격"] },
    { code: "통신 4-8-1", name: "4-8  음향 및 영상케이블   음향 및 영상케이블공정규격단 위통 신 케", spec: "표준 규격", unit: "개", laborType: "통신내선공", laborFactor: 0.1414, category: "cable", keywords: ["4-8  음향 및 영상케이블   음향"] },
    { code: "통신 4-2-1", name: "마이크 케이블1P〃023-멀티실드 2P이하〃024-멀티실드 4P이하〃02", spec: "표준 규격", unit: "개", laborType: "통신내선공", laborFactor: 0.1414, category: "cable", keywords: ["마이크 케이블1P〃023-멀티실드 2"] },
    { code: "통신 4-1-3", name: "마이크 케이블1P〃023-멀티실드 2P이하〃024-멀티실드 4P이하〃02", spec: "표준 규격", unit: "개", laborType: "통신내선공", laborFactor: 0.1414, category: "cable", keywords: ["마이크 케이블1P〃023-멀티실드 2"] },
    { code: "통신 4-2-2", name: "마이크 케이블1P〃023-멀티실드 2P이하〃024-멀티실드 4P이하〃02", spec: "표준 규격", unit: "개", laborType: "통신내선공", laborFactor: 0.1414, category: "cable", keywords: ["마이크 케이블1P〃023-멀티실드 2"] },
    { code: "통신 4-8-2", name: "FR 케이블 접속 및 성단공정규격단 위통 신 케 이 블 공보통인부접속25", spec: "표준 규격", unit: "개", laborType: "보통인부", laborFactor: 0.02, category: "cable", keywords: ["FR 케이블 접속 및 성단공정규격단 "] },
    { code: "통신 4-11-8", name: "통신케이블 접속방호함공정규격지중가공보통분기보통분기케이블접속방  호  함 ", spec: "표준 규격", unit: "개", laborType: "통신내선공", laborFactor: 0.06, category: "cable", keywords: ["통신케이블 접속방호함공정규격지중가공보"] },
    { code: "통신 4-11-9-2", name: "[해 설]    ① 시험조정품셈 포함    ② 전화기 설치품셈에 있어 동", spec: "표준 규격", unit: "개", laborType: "통신내선공", laborFactor: 0.06, category: "cable", keywords: ["[해 설]    ① 시험조정품셈 포함"] },
    { code: "통신 6-3-6", name: "디지털 계통보호전송장치(PITR)", spec: "표준 규격", unit: "개", laborType: "통신설비공", laborFactor: 0.5, category: "device", keywords: ["디지털 계통보호전송장치(PITR)"] },
    { code: "통신 4-4-1", name: "[해 설]   ① 시험품셈은 PITR장비 1대 구성기준이며, 2T/L(송", spec: "표준 규격", unit: "개", laborType: "통신설비공", laborFactor: 0.5, category: "cable", keywords: ["[해 설]   ① 시험품셈은 PITR"] },
    { code: "통신 7-1-1", name: "제 7 장  무선․방송설비공사7-1  송․수신기   VHF(100W 이하", spec: "표준 규격", unit: "개", laborType: "통신설비공", laborFactor: 0.5, category: "device", keywords: ["제 7 장  무선․방송설비공사7-1 "] },
    { code: "통신 7-1-2", name: "[해 설]   ① SSB(100W이하) 이동국도 본공량에 준함   ② 비", spec: "표준 규격", unit: "개", laborType: "통신설비공", laborFactor: 0.5, category: "device", keywords: ["[해 설]   ① SSB(100W이하"] },
    { code: "통신 7-1-3", name: "[해 설]   ① VHF 또는 UHF(50W 이하) 고정국 송․수신기 신", spec: "표준 규격", unit: "개", laborType: "통신설비공", laborFactor: 0.505, category: "device", keywords: ["[해 설]   ① VHF 또는 UHF"] },
    { code: "통신 7-1-4", name: "[해 설]   ① 멀티플 채널(Multiple Channel)은 매 채널", spec: "표준 규격", unit: "개", laborType: "통신설비공", laborFactor: 0.505, category: "device", keywords: ["[해 설]   ① 멀티플 채널(Mul"] },
    { code: "통신 7-2-1", name: "7-2  송신기   중․단파 송신기직종출력(kW)공정통신관련기사통신관련산", spec: "표준 규격", unit: "개", laborType: "통신설비공", laborFactor: 0.3, category: "device", keywords: ["7-2  송신기   중․단파 송신기직"] },
    { code: "통신 7-2-2", name: "[해 설]   ① 배선 및 접지 등은 별도 계상   ② 500kW 이하는", spec: "표준 규격", unit: "개", laborType: "통신설비공", laborFactor: 0.51, category: "device", keywords: ["[해 설]   ① 배선 및 접지 등은"] },
    { code: "통신 7-2-3", name: "FM 송신기직종출력공정통신관련기    사통신관련산업기사 통신설비공보통인부", spec: "표준 규격", unit: "개", laborType: "통신설비공", laborFactor: 0.3, category: "device", keywords: ["FM 송신기직종출력공정통신관련기   "] },
    { code: "통신 7-4-2", name: "UHF-TV 디지털 중계기직종              출력공정통 신 관 ", spec: "표준 규격", unit: "개", laborType: "통신설비공", laborFactor: 0.3, category: "device", keywords: ["UHF-TV 디지털 중계기직종    "] },
    { code: "통신 7-5-1", name: "7-5  안테나   파라볼릭(Parabolic) 안테나  -1  철탑설치", spec: "표준 규격", unit: "개", laborType: "보통인부", laborFactor: 2.002, category: "device", keywords: ["7-5  안테나   파라볼릭(Para"] },
    { code: "통신 7-5-1-1", name: "7-5  안테나 7-5-1  파라볼릭(Parabolic) 안테나    철", spec: "표준 규격", unit: "개", laborType: "보통인부", laborFactor: 2.002, category: "device", keywords: ["7-5  안테나 7-5-1  파라볼릭"] },
    { code: "통신 7-5-1-2", name: "건물설치규격공정통신관련산업기사통신설비공보통인부Ø12m이하 1 인양조립설치", spec: "표준 규격", unit: "개", laborType: "통신설비공", laborFactor: 0.26, category: "device", keywords: ["건물설치규격공정통신관련산업기사통신설비"] },
    { code: "통신 7-5-3", name: "단파 안테나  -1  Curtain 안테나공정통신관련기    사통신관련기", spec: "표준 규격", unit: "개", laborType: "보통인부", laborFactor: 0.3, category: "device", keywords: ["단파 안테나  -1  Curtain "] },
    { code: "통신 7-5-3-1", name: "7-5-3  단파 안테나    Curtain 안테나공정통신관련기    사", spec: "표준 규격", unit: "개", laborType: "보통인부", laborFactor: 0.3, category: "device", keywords: ["7-5-3  단파 안테나    Cur"] },
    { code: "통신 7-5-3-3", name: "208-10801800-1800--  [해 설]   ① 설치고 30m 기", spec: "표준 규격", unit: "개", laborType: "통신외선공", laborFactor: 0.5, category: "device", keywords: ["208-10801800-1800-- "] },
    { code: "통신 7-5-3-4", name: "[해 설]    ① 철거 30% 적용    룸빅 안테나   (1) 공중선", spec: "표준 규격", unit: "개", laborType: "통신외선공", laborFactor: 1.0, category: "device", keywords: ["[해 설]    ① 철거 30% 적용"] },
    { code: "통신 7-5-4", name: "의사공중선규격통신관련기사통신관련산업기사통신설비공보통인부10W-100W  ", spec: "표준 규격", unit: "개", laborType: "통신설비공", laborFactor: 0.8018, category: "device", keywords: ["의사공중선규격통신관련기사통신관련산업기"] },
    { code: "통신 11-5-1", name: "[해 설]   ① 높이 6m이하 설치   ② 브라켓 1개 설치 품셈 포함", spec: "표준 규격", unit: "개", laborType: "통신외선공", laborFactor: 0.2, category: "device", keywords: ["[해 설]   ① 높이 6m이하 설치"] },
    { code: "통신 7-7-3", name: "단파 급전선공정통신관련기사통신외선공보통인부 2선식  1 포장해체 및 재단", spec: "표준 규격", unit: "개", laborType: "통신외선공", laborFactor: 0.06, category: "device", keywords: ["단파 급전선공정통신관련기사통신외선공보"] },
    { code: "통신 7-8-1", name: "7-8  위성 송․수신설비   위성통신용 협대역 송․수신기공정통    신", spec: "표준 규격", unit: "개", laborType: "통신내선공", laborFactor: 0.5, category: "device", keywords: ["7-8  위성 송․수신설비   위성통"] },
    { code: "통신 7-8-2", name: "[해 설]   ① 철거 30% 적용    위성통신 잡음무선기(UNCOOL", spec: "표준 규격", unit: "개", laborType: "통신내선공", laborFactor: 0.5, category: "device", keywords: ["[해 설]   ① 철거 30% 적용 "] },
    { code: "통신 7-8-3", name: "[해 설]   ① 철거 30% 적용   위성통신용 Transmit Lev", spec: "표준 규격", unit: "개", laborType: "통신내선공", laborFactor: 0.5, category: "device", keywords: ["[해 설]   ① 철거 30% 적용 "] },
    { code: "통신 7-9-2", name: "(W+D)×2=500㎜이하,무게5㎏이하대-062---031(W+D)×2=", spec: "표준 규격", unit: "개", laborType: "특별인부", laborFactor: 0.06, category: "device", keywords: ["(W+D)×2=500㎜이하,무게5㎏이"] },
    { code: "통신 7-10-1", name: "7-10  기타 무선설비   광대역 무선통신장치공정단 위통신관련기    ", spec: "표준 규격", unit: "개", laborType: "통신설비공", laborFactor: 0.33, category: "device", keywords: ["7-10  기타 무선설비   광대역 "] },
    { code: "통신 7-10-2", name: "7-10  기타 무선설비 7-10-1  광대역 무선통신장치공정단 위통신관", spec: "표준 규격", unit: "개", laborType: "통신설비공", laborFactor: 0.33, category: "device", keywords: ["7-10  기타 무선설비 7-10-1"] },
    { code: "통신 7-10-8", name: "Diplexer 및 필터(Filter) 공정규격조립 및 설치시험 및 측정", spec: "표준 규격", unit: "개", laborType: "보통인부", laborFactor: 0.3, category: "device", keywords: ["Diplexer 및 필터(Filter"] },
    { code: "통신 11-4-1", name: "[해 설]   ① UPS설치는 “ 무정전 전원장치(UPS, CVCF)” ", spec: "표준 규격", unit: "개", laborType: "보통인부", laborFactor: 0.1, category: "device", keywords: ["[해 설]   ① UPS설치는 “ 무"] },
    { code: "통신 8-1-1", name: "[해 설]  ① 프로보 설치에는 센서케이블 설치와 외부 고정작업 포함하며", spec: "표준 규격", unit: "개", laborType: "통신설비공", laborFactor: 0.09, category: "device", keywords: ["[해 설]  ① 프로보 설치에는 센서"] },
    { code: "통신 9-1-10", name: "[해 설]   ① 신호등주(철주) 신설은 기계화 시공기준[장비사용시간(분", spec: "표준 규격", unit: "개", laborType: "보통인부", laborFactor: 0.05, category: "device", keywords: ["[해 설]   ① 신호등주(철주) 신"] },
    { code: "통신 9-1-6", name: "[해 설]   ① 신호등주(철주) 신설은 기계화 시공기준[장비사용시간(분", spec: "표준 규격", unit: "개", laborType: "보통인부", laborFactor: 0.05, category: "device", keywords: ["[해 설]   ① 신호등주(철주) 신"] },
    { code: "통신 2-1-8", name: "[해 설]   ① 신호등주(철주) 신설은 기계화 시공기준[장비사용시간(분", spec: "표준 규격", unit: "개", laborType: "보통인부", laborFactor: 0.05, category: "pipe", keywords: ["[해 설]   ① 신호등주(철주) 신"] },
    { code: "통신 2-4-4", name: "[해 설]   ① 신호등주(철주) 신설은 기계화 시공기준[장비사용시간(분", spec: "표준 규격", unit: "개", laborType: "보통인부", laborFactor: 0.05, category: "pipe", keywords: ["[해 설]   ① 신호등주(철주) 신"] },
    { code: "통신 11-7-5-1", name: "[해 설]   ① 신호등주(철주) 신설은 기계화 시공기준[장비사용시간(분", spec: "표준 규격", unit: "개", laborType: "보통인부", laborFactor: 0.05, category: "device", keywords: ["[해 설]   ① 신호등주(철주) 신"] },
    { code: "통신 11-6-2", name: "[해 설]   ① 신호등주(철주) 신설은 기계화 시공기준[장비사용시간(분", spec: "표준 규격", unit: "개", laborType: "보통인부", laborFactor: 0.05, category: "device", keywords: ["[해 설]   ① 신호등주(철주) 신"] },
    { code: "통신 8-4-8-3", name: "제어함체　설치개----007-007제어기　설치－043---032--스피커", spec: "표준 규격", unit: "개", laborType: "보통인부", laborFactor: 0.06, category: "device", keywords: ["제어함체　설치개----007-007제"] },
    { code: "통신 4-3-1", name: "제어함체　설치개----007-007제어기　설치－043---032--스피커", spec: "표준 규격", unit: "개", laborType: "보통인부", laborFactor: 0.06, category: "cable", keywords: ["제어함체　설치개----007-007제"] },
    { code: "통신 9-1-9", name: "교통정보수집시스템(Beacon)공정통신관련산업기사통신외선공통신설비공특별인", spec: "표준 규격", unit: "개", laborType: "통신설비공", laborFactor: 0.11, category: "device", keywords: ["교통정보수집시스템(Beacon)공정통"] },
    { code: "통신 4-3-2", name: "[해 설]     ① L3스위치는 “9Slot Chassis” 1대, “", spec: "표준 규격", unit: "개", laborType: "통신설비공", laborFactor: 0.01, category: "cable", keywords: ["[해 설]     ① L3스위치는 “"] },
    { code: "통신 10-1-1", name: "제 10 장  해상‧항공설비공사10-1  해상통신설비   해상 및 해안레", spec: "표준 규격", unit: "개", laborType: "보통인부", laborFactor: 1.0, category: "device", keywords: ["제 10 장  해상‧항공설비공사10-"] },
    { code: "통신 10-1-3", name: "기지국 선박자동식별시스템공정통 신 관 련기     사통 신 관 련산 업 ", spec: "표준 규격", unit: "개", laborType: "보통인부", laborFactor: 0.06, category: "device", keywords: ["기지국 선박자동식별시스템공정통 신 관"] },
    { code: "통신 7-5-2", name: "[해 설]   ① 본 품셈은 해안 기지국내 single 설치기준으로 du", spec: "표준 규격", unit: "개", laborType: "보통인부", laborFactor: 0.06, category: "device", keywords: ["[해 설]   ① 본 품셈은 해안 기"] },
    { code: "통신 7-7-1-2", name: "[해 설]   ① 본 품셈은 해안 기지국내 single 설치기준으로 du", spec: "표준 규격", unit: "개", laborType: "보통인부", laborFactor: 0.06, category: "device", keywords: ["[해 설]   ① 본 품셈은 해안 기"] },
    { code: "통신 10-2-3", name: "VHF DSC Radio Telephone(25W이하)공정통신관련산업기사", spec: "표준 규격", unit: "개", laborType: "보통인부", laborFactor: 0.07, category: "device", keywords: ["VHF DSC Radio Teleph"] },
    { code: "통신 10-2-4", name: "SSB 송수신기(100W 이하)공정통신관련산업기사통신관련기 능 사무   ", spec: "표준 규격", unit: "개", laborType: "보통인부", laborFactor: 0.08, category: "device", keywords: ["SSB 송수신기(100W 이하)공정통"] },
    { code: "통신 10-2-5", name: "Unit간 Matching 및 조정 등이 포함됨   ⑦ 대국시험 및 종합", spec: "표준 규격", unit: "개", laborType: "보통인부", laborFactor: 0.13, category: "device", keywords: ["Unit간 Matching 및 조정 "] },
    { code: "통신 10-2-2", name: "[해 설]   ① EME(Externally Mounted Equipme", spec: "표준 규격", unit: "개", laborType: "보통인부", laborFactor: 0.13, category: "device", keywords: ["[해 설]   ① EME(Extern"] },
    { code: "통신 10-2-6", name: "인마세트 선박지구국(INMARSAT) 표준 FB형, VSAT형공정통신관련", spec: "표준 규격", unit: "개", laborType: "보통인부", laborFactor: 0.13, category: "device", keywords: ["인마세트 선박지구국(INMARSAT)"] },
    { code: "통신 10-2-10", name: "기상수신기(Weather Facsimile Receiver)공정통신관련산", spec: "표준 규격", unit: "개", laborType: "통신설비공", laborFactor: 0.02, category: "device", keywords: ["기상수신기(Weather Facsim"] },
    { code: "통신 10-2-9", name: "[해 설]   ① 다음에 명시하지 아니한 내용은 “ 나브텍스 수신기(NA", spec: "표준 규격", unit: "개", laborType: "통신설비공", laborFactor: 0.02, category: "device", keywords: ["[해 설]   ① 다음에 명시하지 아"] },
    { code: "통신 10-2-11", name: "[해 설]   ① 다음에 명시하지 아니한 내용은 “10-2-9 나브텍스 ", spec: "표준 규격", unit: "개", laborType: "통신설비공", laborFactor: 0.02, category: "device", keywords: ["[해 설]   ① 다음에 명시하지 아"] },
    { code: "통신 10-3-1", name: "10-3  항공통신설비   계기착륙시설(ILS방위각)공정통신관련 기   ", spec: "표준 규격", unit: "개", laborType: "보통인부", laborFactor: 1.0, category: "device", keywords: ["10-3  항공통신설비   계기착륙시"] },
    { code: "통신 10-3-2", name: "[해 설]   ① 본 품셈은 표지기 1대 감시장치 1식을 포함함   ② ", spec: "표준 규격", unit: "개", laborType: "보통인부", laborFactor: 1.0, category: "device", keywords: ["[해 설]   ① 본 품셈은 표지기 "] },
    { code: "통신 10-3-3", name: "전방향 표지시설(VOR)공정통신관련 기    사무    선안테나공통  신", spec: "표준 규격", unit: "개", laborType: "보통인부", laborFactor: 1.0, category: "device", keywords: ["전방향 표지시설(VOR)공정통신관련 "] },
    { code: "통신 10-3-4", name: "[해 설]   ① 본 품셈은 표지기 1대 감시장치 1식을 포함함   ② ", spec: "표준 규격", unit: "개", laborType: "보통인부", laborFactor: 1.0, category: "device", keywords: ["[해 설]   ① 본 품셈은 표지기 "] },
    { code: "통신 11-1-1-4", name: "1,600AH이하 축전지공정직종50V120V240V380V소   운   ", spec: "표준 규격", unit: "개", laborType: "통신설비공", laborFactor: 50.01, category: "device", keywords: ["1,600AH이하 축전지공정직종50V"] },
    { code: "통신 11-1-1-1", name: "[해 설] “ 250AH이하 축전지” 해설항 적용  11-1-1-5  2", spec: "표준 규격", unit: "개", laborType: "통신설비공", laborFactor: 50.01, category: "device", keywords: ["[해 설] “ 250AH이하 축전지”"] },
    { code: "통신 11-1-1-5", name: "[해 설] “11-1-1-1 250AH이하 축전지” 해설항 적용    2", spec: "표준 규격", unit: "개", laborType: "통신설비공", laborFactor: 50.01, category: "device", keywords: ["[해 설] “11-1-1-1 250A"] },
    { code: "통신 11-1-1-6", name: "[해 설] “11-1-1-1 250AH이하 축전지” 해설항 적용    3", spec: "표준 규격", unit: "개", laborType: "통신설비공", laborFactor: 50.01, category: "device", keywords: ["[해 설] “11-1-1-1 250A"] },
    { code: "통신 11-3-1", name: "11-3  배터리 충전장치   배터리(Battery) 충전장치규격직종6V", spec: "표준 규격", unit: "개", laborType: "통신설비공", laborFactor: 0.08, category: "device", keywords: ["11-3  배터리 충전장치   배터리"] },
    { code: "통신 11-7-3", name: "[해 설]   ① 회전형의 경우 “ 전동발전기” 품셈 적용   ② 시운전", spec: "표준 규격", unit: "개", laborType: "통신내선공", laborFactor: 0.13, category: "device", keywords: ["[해 설]   ① 회전형의 경우 “ "] },
    { code: "통신 12-1-1", name: "제 12 장  철도통신‧신호설비공사12-1  철도통신선로설비   통화장치", spec: "표준 규격", unit: "개", laborType: "통신설비공", laborFactor: 0.25, category: "device", keywords: ["제 12 장  철도통신‧신호설비공사1"] },
    { code: "통신 9-2-1-1", name: "[해 설]   ① 연선전화 및 건널목 비상직통전화 설치품셈에는 기초대(철", spec: "표준 규격", unit: "개", laborType: "통신설비공", laborFactor: 0.25, category: "device", keywords: ["[해 설]   ① 연선전화 및 건널목"] },
    { code: "통신 12-2-1", name: "12-2  역무용통신설비   기기신설공정통신설비공통신내선공보통인부비고보안", spec: "표준 규격", unit: "개", laborType: "통신내선공", laborFactor: 0.04, category: "device", keywords: ["12-2  역무용통신설비   기기신설"] },
    { code: "통신 8-1-6", name: "[해 설]   ① 시험조정품셈 포함   ② 간이교환주장치 내선 20회로 ", spec: "표준 규격", unit: "개", laborType: "통신내선공", laborFactor: 0.04, category: "device", keywords: ["[해 설]   ① 시험조정품셈 포함 "] },
    { code: "통신 7-7-1", name: "[해 설 : 지상장치는 역사 승강장 CCTV 영상신호를 디지털 RF신호로", spec: "표준 규격", unit: "개", laborType: "특별인부", laborFactor: 1.76, category: "device", keywords: ["[해 설 : 지상장치는 역사 승강장 "] },
    { code: "통신 12-2-2-2", name: "차상장치공정H/W시험사통신설비공통신케이블공영상신호 변환장치(IDU : I", spec: "표준 규격", unit: "개", laborType: "통신설비공", laborFactor: 1.34, category: "device", keywords: ["차상장치공정H/W시험사통신설비공통신케"] },
    { code: "통신 9-2-2-3", name: "010------종합시험 신호방향표시기 시험 잔여기간 및 금액표시기시험 ", spec: "표준 규격", unit: "개", laborType: "보통인부", laborFactor: 0.06, category: "device", keywords: ["010------종합시험 신호방향표시"] },
    { code: "통신 13-7-6", name: "[해 설]   ① 본 품셈의 기준국 기준이며, 감시국의 수신안테나(중파 ", spec: "표준 규격", unit: "개", laborType: "통신외선공", laborFactor: 0.1, category: "device", keywords: ["[해 설]   ① 본 품셈의 기준국 "] },
    { code: "통신 13-5-1-7", name: "[해 설]   ① 본 품셈의 기준국 기준이며, 감시국의 수신안테나(중파 ", spec: "표준 규격", unit: "개", laborType: "통신외선공", laborFactor: 0.1, category: "device", keywords: ["[해 설]   ① 본 품셈의 기준국 "] },
    { code: "통신 13-8-7-5", name: "[해 설]   ① 본 품셈의 기준국 기준이며, 감시국의 수신안테나(중파 ", spec: "표준 규격", unit: "개", laborType: "통신외선공", laborFactor: 0.1, category: "device", keywords: ["[해 설]   ① 본 품셈의 기준국 "] },
    { code: "통신 13-8-1", name: "[해 설]   ① 본 품셈의 기준국 기준이며, 감시국의 수신안테나(중파 ", spec: "표준 규격", unit: "개", laborType: "통신외선공", laborFactor: 0.1, category: "device", keywords: ["[해 설]   ① 본 품셈의 기준국 "] },
    { code: "통신 13-10-1", name: "[해 설]   ① 본 품셈의 기준국 기준이며, 감시국의 수신안테나(중파 ", spec: "표준 규격", unit: "개", laborType: "통신외선공", laborFactor: 0.1, category: "device", keywords: ["[해 설]   ① 본 품셈의 기준국 "] },
    { code: "통신 13-4-1-1", name: "[해 설]   ① 본 품셈의 기준국 기준이며, 감시국의 수신안테나(중파 ", spec: "표준 규격", unit: "개", laborType: "통신외선공", laborFactor: 0.1, category: "device", keywords: ["[해 설]   ① 본 품셈의 기준국 "] },
    { code: "통신 13-8-7-2", name: "소규모배전자동화설비 점검", spec: "표준 규격", unit: "개", laborType: "보통인부", laborFactor: 0.27, category: "device", keywords: ["소규모배전자동화설비 점검"] },
    { code: "통신 13-8-11", name: "긴급구조표준시스템 정기 점검", spec: "표준 규격", unit: "개", laborType: "통신설비공", laborFactor: 0.08, category: "device", keywords: ["긴급구조표준시스템 정기 점검"] },
    { code: "통신 13-9-2", name: "승강장 스크린도어(PSD : Platform Screen Door) 시스", spec: "표준 규격", unit: "개", laborType: "특별인부", laborFactor: 0.01, category: "device", keywords: ["승강장 스크린도어(PSD : Plat"] },
    { code: "통신 1-2-2-6", name: "002002 ㅇPSD 각종 설비간 접지선 연결 상태   및 저항 측정 0", spec: "표준 규격", unit: "개", laborType: "특별인부", laborFactor: 0.01, category: "device", keywords: ["002002 ㅇPSD 각종 설비간 접"] },
];

// 2. Wage Rates (노임 단가 테이블)
const WAGE_RATES = {
    "2023_1": { "통신내선공": 251790, "통신설비공": 280506, "특별인부": 197450 },
    "2024_1": { "통신내선공": 268400, "통신설비공": 298100, "특별인부": 208500 },
    "2026_1": { "통신내선공": 298500, "통신설비공": 332600, "특별인부": 234100 }
};

// 3. Application State (상태 관리)
let state = {
    projectName: "",
    duration: "",
    wageStandard: "2026_1",
    roundingPrecision: 1000, // 천단위 절사
    rates: {
        indirectLabor: 12.5,
        healthInsurance: 3.545,
        pensionInsurance: 4.5,
        longtermCare: 12.81,
        accidentInsurance: 3.7,
        employmentInsurance: 1.01,
        otherExpense: 7.8,
        generalAdmin: 6.0,
        profit: 15.0
    },
    divisions: [],
    itemPrices: {},
    activeDivisionId: ""
};

let costShareChart = null;

// 4. Initialization
document.addEventListener("DOMContentLoaded", () => {
    loadFromLocalStorage();
    initTabs();
    initSettingsListeners();
    initBuilderListeners();
    initPriceListeners();
    initLaborListeners();
    initDivisionsListeners();
    initSaveLoadListeners();
    loadActiveDivision();
    populateDbLibrary();
    calculateEstimates();
});

// Tab Navigation
function initTabs() {
    const navItems = document.querySelectorAll(".nav-item");
    const tabSections = document.querySelectorAll(".tab-section");

    navItems.forEach(item => {
        item.addEventListener("click", () => {
            const tabId = item.getAttribute("data-tab");
            
            navItems.forEach(i => i.classList.remove("active"));
            tabSections.forEach(s => s.classList.remove("active"));
            
            item.classList.add("active");
            document.getElementById(tabId).classList.add("active");

            if (tabId === "tab-summary") {
                setTimeout(updateChart, 50);
            }
            if (tabId === "tab-divisions") {
                renderDivisionsTable();
            }
            if (tabId === "tab-prices") {
                renderPriceInvestigationTable();
            }
            if (tabId === "tab-labor") {
                renderLaborBasisTable();
            }
        });
    });
}

// Settings Change Listeners
function initSettingsListeners() {
    const inputs = {
        projectName: document.getElementById("input-project-name"),
        duration: document.getElementById("input-project-duration"),
        wageStandard: document.getElementById("select-wage-standard"),
        roundingPrecision: document.getElementById("input-rounding-precision"),
        indirectLabor: document.getElementById("rate-indirect-labor"),
        healthInsurance: document.getElementById("rate-health-insurance"),
        pensionInsurance: document.getElementById("rate-pension-insurance"),
        longtermCare: document.getElementById("rate-longterm-care"),
        accidentInsurance: document.getElementById("rate-accident-insurance"),
        employmentInsurance: document.getElementById("rate-employment-insurance"),
        otherExpense: document.getElementById("rate-other-expense"),
        generalAdmin: document.getElementById("rate-general-admin"),
        profit: document.getElementById("rate-profit")
    };

    inputs.projectName.addEventListener("input", (e) => {
        state.projectName = e.target.value;
        document.getElementById("header-project-name").textContent = state.projectName;
    });

    inputs.duration.addEventListener("input", (e) => {
        state.duration = e.target.value;
        document.getElementById("header-project-duration").textContent = state.duration;
    });

    inputs.wageStandard.addEventListener("change", (e) => {
        state.wageStandard = e.target.value;
        showToast("노임 단가 기준이 변경되어 내역 단가가 재산출되었습니다.", "info");
        calculateEstimates();
    });

    inputs.roundingPrecision.addEventListener("change", (e) => {
        state.roundingPrecision = parseInt(e.target.value);
        calculateEstimates();
    });

    // Rate inputs
    const rateKeys = ["indirectLabor", "healthInsurance", "pensionInsurance", "longtermCare", "accidentInsurance", "employmentInsurance", "otherExpense", "generalAdmin", "profit"];
    rateKeys.forEach(key => {
        inputs[key].addEventListener("input", (e) => {
            state.rates[key] = parseFloat(e.target.value) || 0;
            calculateEstimates();
        });
    });
}

// Builder Listeners
function initBuilderListeners() {
    const selectDiv = document.getElementById("select-active-division");
    selectDiv.addEventListener("change", (e) => {
        state.activeDivisionId = e.target.value;
        loadActiveDivision();
    });

    document.getElementById("btn-add-division").addEventListener("click", () => {
        document.getElementById("input-new-division-name").value = "";
        openModal("modal-add-division");
    });

    document.getElementById("btn-confirm-add-division").addEventListener("click", () => {
        const name = document.getElementById("input-new-division-name").value.trim();
        if (!name) {
            showToast("공종명을 입력해주세요.", "danger");
            return;
        }
        const nextId = "div-" + (state.divisions.length + 1);
        state.divisions.push({
            id: nextId,
            name: `${state.divisions.length + 1}. ${name}`,
            items: []
        });
        state.activeDivisionId = nextId;
        closeModal("modal-add-division");
        updateDivisionSelects();
        loadActiveDivision();
        calculateEstimates();
        showToast("새 공종이 추가되었습니다.", "success");
    });

    document.getElementById("btn-delete-division").addEventListener("click", () => {
        if (state.divisions.length <= 1) {
            showToast("최소 한 개의 공종은 유지되어야 합니다.", "danger");
            return;
        }
        if (confirm("정말 현재 공종과 하위 품목들을 모두 삭제하시겠습니까?")) {
            const index = state.divisions.findIndex(d => d.id === state.activeDivisionId);
            state.divisions.splice(index, 1);
            
            // Re-index names
            state.divisions.forEach((div, i) => {
                // Strip existing numbering prefix and re-add
                const cleanName = div.name.replace(/^\d+\.\s*/, "");
                div.name = `${i + 1}. ${cleanName}`;
            });

            state.activeDivisionId = state.divisions[0].id;
            updateDivisionSelects();
            loadActiveDivision();
            calculateEstimates();
            showToast("공종이 삭제되었습니다.", "success");
        }
    });

    // DB Search input
    document.getElementById("input-db-search").addEventListener("input", (e) => {
        const query = e.target.value.toLowerCase().trim();
        populateDbLibrary(query);
    });

    // Category chips
    document.querySelectorAll(".filter-chip").forEach(chip => {
        chip.addEventListener("click", () => {
            document.querySelectorAll(".filter-chip").forEach(c => c.classList.remove("active"));
            chip.classList.add("active");
            populateDbLibrary(document.getElementById("input-db-search").value.toLowerCase().trim(), chip.getAttribute("data-category"));
        });
    });

    // Export button
    document.getElementById("btn-export-excel").addEventListener("click", () => {
        exportToExcel();
    });
}

// Price Investigation Listeners
function initPriceListeners() {
    const btnAddPrice = document.getElementById("btn-add-price-item");
    if (btnAddPrice) {
        btnAddPrice.addEventListener("click", () => {
            openAddPriceItemModal();
        });
    }

    const btnConfirmAddPrice = document.getElementById("btn-confirm-add-price-item");
    if (btnConfirmAddPrice) {
        btnConfirmAddPrice.addEventListener("click", () => {
            confirmAddPriceItem();
        });
    }

    document.getElementById("btn-auto-lowest").addEventListener("click", () => {
        let count = 0;
        for (const masterId in state.itemPrices) {
            const p = state.itemPrices[masterId];
            const prices = [];
            if (p.facilityPrice > 0) prices.push(p.facilityPrice);
            if (p.marketPrice.price > 0) prices.push(p.marketPrice.price);
            if (p.infoPrice.price > 0) prices.push(p.infoPrice.price);
            if (p.materialPrice.price > 0) prices.push(p.materialPrice.price);
            if (p.distPrice.price > 0) prices.push(p.distPrice.price);
            if (p.invest1.price > 0) prices.push(p.invest1.price);
            if (p.invest2.price > 0) prices.push(p.invest2.price);
            
            if (prices.length > 0) {
                const minPrice = Math.min(...prices);
                if (p.appliedPrice !== minPrice) {
                    p.appliedPrice = minPrice;
                    count++;
                }
            }
        }
        if (count > 0) {
            renderPriceInvestigationTable();
            calculateEstimates();
            showToast(`${count}개 품목의 적용단가가 최저 조사단가로 갱신되었습니다.`, "success");
        } else {
            showToast("이미 모든 적용단가가 최저단가와 일치합니다.", "info");
        }
    });
}

// Render Price Investigation Table
function renderPriceInvestigationTable() {
    const tbody = document.getElementById("price-table-body");
    tbody.innerHTML = "";

    const usedMasterIds = new Set();
    state.divisions.forEach(div => {
        div.items.forEach(item => {
            usedMasterIds.add(item.masterId);
        });
    });

    if (usedMasterIds.size === 0) {
        tbody.innerHTML = `<tr><td colspan="20" style="text-align: center; color: var(--text-muted); padding: 45px 0;"><i class="fa-solid fa-calculator" style="font-size: 24px; margin-bottom: 10px; display: block;"></i>내역서 빌더에서 먼저 품목을 추가해야 단가 조사를 진행할 수 있습니다.</td></tr>`;
        return;
    }

    let index = 1;
    usedMasterIds.forEach(masterId => {
        if (!state.itemPrices[masterId]) {
            const dbItem = ITEM_MASTER_DB.find(i => i.id === masterId);
            const defaultMatPrice = dbItem ? dbItem.materialPrice : 0;
            state.itemPrices[masterId] = {
                appliedPrice: defaultMatPrice,
                facilityPrice: defaultMatPrice,
                marketPrice: { price: 0, page: "" },
                infoPrice: { price: 0, page: "" },
                materialPrice: { price: 0, page: "" },
                distPrice: { price: 0, page: "" },
                invest1: { price: 0, page: "" },
                invest2: { price: 0, page: "" }
            };
        }

        const p = state.itemPrices[masterId];
        const dbItem = ITEM_MASTER_DB.find(i => i.id === masterId) || { name: "알수없음", spec: "규격없음", unit: "개" };

        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td class="sticky-col first-col">${index++}</td>
            <td class="sticky-col second-col">
                <div class="item-meta">
                    <span class="item-title">${dbItem.name}</span>
                    <span class="item-subtitle">${dbItem.spec}</span>
                </div>
            </td>
            <td style="text-align: center;">${dbItem.unit}</td>
            <td>
                <input type="number" class="price-input" data-id="${masterId}" data-field="appliedPrice" value="${p.appliedPrice}">
            </td>
            <td>
                <input type="number" class="price-input" data-id="${masterId}" data-field="facilityPrice" value="${p.facilityPrice}">
            </td>
            <td><input type="number" class="price-input-group" data-id="${masterId}" data-group="marketPrice" data-field="price" value="${p.marketPrice.price}"></td>
            <td><input type="text" class="page-input-group" data-id="${masterId}" data-group="marketPrice" data-field="page" value="${p.marketPrice.page}"></td>
            <td><input type="number" class="price-input-group" data-id="${masterId}" data-group="infoPrice" data-field="price" value="${p.infoPrice.price}"></td>
            <td><input type="text" class="page-input-group" data-id="${masterId}" data-group="infoPrice" data-field="page" value="${p.infoPrice.page}"></td>
            <td><input type="number" class="price-input-group" data-id="${masterId}" data-group="materialPrice" data-field="price" value="${p.materialPrice.price}"></td>
            <td><input type="text" class="page-input-group" data-id="${masterId}" data-group="materialPrice" data-field="page" value="${p.materialPrice.page}"></td>
            <td><input type="number" class="price-input-group" data-id="${masterId}" data-group="distPrice" data-field="price" value="${p.distPrice.price}"></td>
            <td><input type="text" class="page-input-group" data-id="${masterId}" data-group="distPrice" data-field="page" value="${p.distPrice.page}"></td>
            <td><input type="number" class="price-input-group" data-id="${masterId}" data-group="invest1" data-field="price" value="${p.invest1.price}"></td>
            <td><input type="text" class="page-input-group" data-id="${masterId}" data-group="invest1" data-field="page" value="${p.invest1.page}"></td>
            <td><input type="number" class="price-input-group" data-id="${masterId}" data-group="invest2" data-field="price" value="${p.invest2.price}"></td>
            <td><input type="text" class="page-input-group" data-id="${masterId}" data-group="invest2" data-field="page" value="${p.invest2.page}"></td>
            <td style="text-align: center;">
                <button class="btn-icon-danger" onclick="deletePriceInvestigationItem('${masterId}')" title="품목 완전히 삭제">
                    <i class="fa-solid fa-trash-can"></i>
                </button>
            </td>
        `;

        tbody.appendChild(tr);
    });

    tbody.querySelectorAll(".price-input").forEach(input => {
        input.addEventListener("change", (e) => {
            const masterId = e.target.getAttribute("data-id");
            const field = e.target.getAttribute("data-field");
            const val = Math.max(0, parseInt(e.target.value) || 0);
            
            state.itemPrices[masterId][field] = val;
            calculateEstimates();
        });
    });

    tbody.querySelectorAll(".price-input-group").forEach(input => {
        input.addEventListener("change", (e) => {
            const masterId = e.target.getAttribute("data-id");
            const group = e.target.getAttribute("data-group");
            const field = e.target.getAttribute("data-field");
            const val = Math.max(0, parseInt(e.target.value) || 0);
            
            state.itemPrices[masterId][group][field] = val;
            calculateEstimates();
        });
    });

    tbody.querySelectorAll(".page-input-group").forEach(input => {
        input.addEventListener("change", (e) => {
            const masterId = e.target.getAttribute("data-id");
            const group = e.target.getAttribute("data-group");
            const field = e.target.getAttribute("data-field");
            const val = e.target.value.trim();
            
            state.itemPrices[masterId][group][field] = val;
        });
    });
}

// Labor Basis Listeners
function initLaborListeners() {
    const btnAuto = document.getElementById("btn-auto-map-labor");
    if (btnAuto) {
        btnAuto.addEventListener("click", () => {
            autoMapAllLaborBasis();
        });
    }

    const searchInput = document.getElementById("input-modal-labor-search");
    if (searchInput) {
        searchInput.addEventListener("input", (e) => {
            searchModalLaborBasis(e.target.value);
        });
    }

    const btnAddLabor = document.getElementById("btn-add-labor-item");
    if (btnAddLabor) {
        btnAddLabor.addEventListener("click", () => {
            openAddLaborItemModal();
        });
    }

    const searchAddLaborInput = document.getElementById("input-add-labor-db-search");
    if (searchAddLaborInput) {
        searchAddLaborInput.addEventListener("input", (e) => {
            searchAddLaborDbList(e.target.value);
        });
    }

    const btnConfirmAddLabor = document.getElementById("btn-confirm-add-labor-item");
    if (btnConfirmAddLabor) {
        btnConfirmAddLabor.addEventListener("click", () => {
            confirmAddLaborItem();
        });
    }

    const btnSyncLabor = document.getElementById("btn-sync-labor-items");
    if (btnSyncLabor) {
        btnSyncLabor.addEventListener("click", () => {
            syncLaborBasisTable();
        });
    }
}

// 품명/규격 기반 텍스트 매칭 추천 알고리즘
function recommendLaborBasis(itemName, itemSpec) {
    const queryName = itemName.toLowerCase().trim();
    const querySpec = itemSpec.toLowerCase().trim();
    
    return STANDARD_LABOR_DB.map(dbItem => {
        let score = 0;
        const dbName = dbItem.name.toLowerCase();
        const dbSpec = dbItem.spec.toLowerCase();
        
        // 1. 품명 키워드 매칭
        if (queryName.includes(dbName) || dbName.includes(queryName)) {
            score += 10;
        } else {
            // 단어 토큰 분할 매칭
            const tokens = queryName.split(/[\s,._-\u3000]+/);
            tokens.forEach(t => {
                if (t.length >= 2 && dbName.includes(t)) {
                    score += 3;
                }
            });
        }
        
        // 2. 검색 키워드 목록 매칭
        if (dbItem.keywords) {
            dbItem.keywords.forEach(kw => {
                const kwL = kw.toLowerCase();
                if (queryName.includes(kwL)) score += 4;
                if (querySpec.includes(kwL)) score += 2;
            });
        }
        
        // 3. 규격 매칭
        if (querySpec && dbSpec) {
            const specTokens = querySpec.split(/[\s,._-\u3000]+/);
            specTokens.forEach(t => {
                if (t.length >= 2 && dbSpec.includes(t)) {
                    score += 2.5;
                }
            });
        }
        
        // 4. 단위 일치 가중치
        if (dbItem.unit === dbItem.unit) {
            score += 0.5;
        }
        
        return {
            dbItem: dbItem,
            score: score
        };
    })
    .filter(res => res.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 5)
    .map(res => ({
        ...res.dbItem,
        matchScore: Math.min(100, Math.round((res.score / 15) * 100))
    }));
}

// 전체 자동 매핑 및 일괄 추천 적용
function autoMapAllLaborBasis() {
    let count = 0;
    state.divisions.forEach(div => {
        div.items.forEach(item => {
            const recs = recommendLaborBasis(item.name, item.spec);
            if (recs.length > 0 && recs[0].matchScore >= 35) {
                const best = recs[0];
                if (item.laborRef !== best.code || item.laborFactor !== best.laborFactor || item.laborType !== best.laborType) {
                    item.laborRef = best.code;
                    item.laborFactor = best.laborFactor;
                    item.laborType = best.laborType;
                    count++;
                }
            }
        });
    });
    if (count > 0) {
        renderLaborBasisTable();
        calculateEstimates();
        showToast(`${count}개 품목의 표준품셈 근거가 자동으로 최적 매핑되었습니다.`, "success");
    } else {
        showToast("모든 품목이 이미 최적의 표준품셈에 매핑되어 있습니다.", "info");
    }
}

let activeLaborEditItem = null;

// 품셈 변경 모달창 열기
function openLaborRefModal(divId, itemId) {
    const div = state.divisions.find(d => d.id === divId);
    if (!div) return;
    
    const item = div.items.find(i => i.id === itemId);
    if (!item) return;
    
    activeLaborEditItem = { divId, itemId, item };
    
    document.getElementById("lbl-modal-item-name").textContent = item.name;
    document.getElementById("lbl-modal-item-spec").textContent = item.spec;
    document.getElementById("lbl-modal-item-qty").textContent = `${item.qty} ${item.unit}`;
    document.getElementById("lbl-modal-item-current").textContent = `${item.laborRef || '근거 없음'} (${item.laborType || '미지정'}, ${item.laborFactor || 0}인)`;
    
    // 예상 가격 표시
    updateLaborModalPreview(item.laborFactor, item.laborType);
    
    // 추천 목록 생성
    const recs = recommendLaborBasis(item.name, item.spec);
    const recList = document.getElementById("modal-recommend-list");
    recList.innerHTML = "";
    
    if (recs.length === 0) {
        recList.innerHTML = `<div style="text-align: center; color: var(--text-muted); font-size: 12px; padding: 15px 0;">추천할 표준품셈 항목이 없습니다. 하단 검색을 이용해주세요.</div>`;
    } else {
        recs.forEach(rec => {
            const card = document.createElement("div");
            card.className = "recommend-card";
            
            let badgeClass = "low";
            if (rec.matchScore >= 75) badgeClass = "";
            else if (rec.matchScore >= 50) badgeClass = "high";
            
            card.innerHTML = `
                <div class="recommend-card-info">
                    <span class="recommend-card-title">${rec.name} (${rec.code})</span>
                    <span class="recommend-card-sub">${rec.spec} | ${rec.laborType} ${rec.laborFactor}인</span>
                </div>
                <div class="recommend-meta-wrap">
                    <span class="recommend-match-badge ${badgeClass}">${rec.matchScore}% 일치</span>
                </div>
            `;
            
            card.addEventListener("click", () => {
                applyLaborRef(rec.code, rec.laborType, rec.laborFactor);
            });
            
            // Preview on hover
            card.addEventListener("mouseenter", () => {
                updateLaborModalPreview(rec.laborFactor, rec.laborType);
            });
            
            recList.appendChild(card);
        });
    }
    
    // 검색창 초기화 및 전체 목록 렌더링
    const searchInput = document.getElementById("input-modal-labor-search");
    searchInput.value = "";
    searchModalLaborBasis("");
    
    openModal("modal-recommend-labor");
}

// 모달 내 실시간 노무 단가 프리뷰 업데이트
function updateLaborModalPreview(laborFactor, laborType) {
    const wages = WAGE_RATES[state.wageStandard];
    const wageRate = wages[laborType] || 0;
    const calcCost = Math.floor((laborFactor || 0) * wageRate);
    
    document.getElementById("lbl-modal-wage-rate").textContent = wageRate.toLocaleString();
    document.getElementById("lbl-modal-calculated-labor").textContent = calcCost.toLocaleString();
}

// 모달 내 품셈 검색
function searchModalLaborBasis(query) {
    const list = document.getElementById("modal-labor-results-list");
    list.innerHTML = "";
    
    const queryL = query.toLowerCase().trim();
    const filtered = STANDARD_LABOR_DB.filter(dbItem => {
        return dbItem.name.toLowerCase().includes(queryL) ||
               dbItem.spec.toLowerCase().includes(queryL) ||
               dbItem.code.toLowerCase().includes(queryL) ||
               dbItem.laborType.toLowerCase().includes(queryL);
    });
    
    if (filtered.length === 0) {
        list.innerHTML = `<div style="text-align: center; color: var(--text-muted); font-size: 12px; padding: 20px 0;">검색 결과가 없습니다.</div>`;
        return;
    }
    
    filtered.forEach(dbItem => {
        const row = document.createElement("div");
        row.className = "modal-db-item-row";
        
        row.innerHTML = `
            <div class="modal-db-item-details">
                <span class="modal-db-item-name">${dbItem.name} (${dbItem.code})</span>
                <span class="modal-db-item-spec">${dbItem.spec} [${dbItem.unit}]</span>
            </div>
            <div class="modal-db-item-right">
                <span class="modal-db-item-factor">${dbItem.laborFactor.toFixed(4)} 인</span>
                <div class="modal-db-item-type">${dbItem.laborType}</div>
            </div>
        `;
        
        row.addEventListener("click", () => {
            applyLaborRef(dbItem.code, dbItem.laborType, dbItem.laborFactor);
        });
        
        // Preview on hover
        row.addEventListener("mouseenter", () => {
            updateLaborModalPreview(dbItem.laborFactor, dbItem.laborType);
        });
        
        list.appendChild(row);
    });
}

// 품셈 적용 완료 및 갱신
function applyLaborRef(code, laborType, laborFactor) {
    if (!activeLaborEditItem) return;
    
    const { item } = activeLaborEditItem;
    item.laborRef = code;
    item.laborType = laborType;
    item.laborFactor = laborFactor;
    
    // If standard multiplier/scenario exists, update description
    const scenarioMap = {
        "new": "신설",
        "demolish": "철거자재",
        "reuse": "철거재사용",
        "night": "야간할증",
        "narrow": "야지작업"
    };
    item.laborRemark = scenarioMap[item.laborScenario || "new"] || "신설";
    
    closeModal("modal-recommend-labor");
    
    renderLaborBasisTable();
    calculateEstimates();
    loadActiveDivision(); // Update BOQ screen unit cost too
    
    showToast(`"${item.name}"의 노임근거가 ${code} (${laborType})로 변경되었습니다.`, "success");
    activeLaborEditItem = null;
}

// Expose functions globally to inline HTML onclick handlers
window.openLaborRefModal = openLaborRefModal;
window.applyLaborRef = applyLaborRef;
window.deleteLaborBasisItem = deleteLaborBasisItem;
window.openAddLaborItemModal = openAddLaborItemModal;
window.confirmAddLaborItem = confirmAddLaborItem;
window.openAddPriceItemModal = openAddPriceItemModal;
window.confirmAddPriceItem = confirmAddPriceItem;
window.deletePriceInvestigationItem = deletePriceInvestigationItem;
window.syncLaborBasisTable = syncLaborBasisTable;

// 1. 단가조사 직접 추가 모달 열기
function openAddPriceItemModal() {
    if (state.divisions.length === 0) {
        showToast("선택된 공종이 없습니다. 먼저 공종설정 탭에서 공종을 추가해 주세요.", "warning");
        return;
    }

    // Populate labor-ref select from STANDARD_LABOR_DB
    const selectLabor = document.getElementById("select-modal-price-labor-ref");
    selectLabor.innerHTML = `<option value="">노무비 없음 (자재 전용)</option>`;
    STANDARD_LABOR_DB.forEach(dbItem => {
        const opt = document.createElement("option");
        opt.value = dbItem.code;
        opt.textContent = `${dbItem.code} ${dbItem.name} (${dbItem.laborType} ${dbItem.laborFactor}인)`;
        selectLabor.appendChild(opt);
    });

    // Clear fields
    document.getElementById("input-modal-price-name").value = "";
    document.getElementById("input-modal-price-spec").value = "";
    document.getElementById("input-modal-price-unit").value = "개";
    document.getElementById("input-modal-price-qty").value = "1";
    document.getElementById("input-modal-price-matprice").value = "0";

    openModal("modal-add-price-item");
}

// 2. 단가조사 직접 추가 처리
function confirmAddPriceItem() {
    const name = document.getElementById("input-modal-price-name").value.trim();
    const spec = document.getElementById("input-modal-price-spec").value.trim();
    const unit = document.getElementById("input-modal-price-unit").value.trim();
    const qty = parseFloat(document.getElementById("input-modal-price-qty").value) || 0;
    const matPrice = parseFloat(document.getElementById("input-modal-price-matprice").value) || 0;
    const laborRefCode = document.getElementById("select-modal-price-labor-ref").value;

    if (!name) {
        showToast("품목명을 입력해주세요.", "danger");
        return;
    }
    if (qty < 0) {
        showToast("수량은 0 이상이어야 합니다.", "danger");
        return;
    }

    const div = state.divisions.find(d => d.id === state.activeDivisionId);
    if (!div) {
        showToast("선택된 활성 공종이 없습니다. 공종을 먼저 추가하거나 활성화해 주세요.", "danger");
        return;
    }

    // Generate custom masterId
    const newMasterId = "M_CUSTOM_" + Date.now();
    
    // Check labor config
    let laborType = null;
    let laborFactor = 0;
    if (laborRefCode) {
        const dbItem = STANDARD_LABOR_DB.find(d => d.code === laborRefCode);
        if (dbItem) {
            laborType = dbItem.laborType;
            laborFactor = dbItem.laborFactor;
        }
    }

    // Add to ITEM_MASTER_DB so standard filters find it
    ITEM_MASTER_DB.push({
        id: newMasterId,
        name: name,
        spec: spec,
        unit: unit,
        category: "device", // default category
        materialPrice: matPrice,
        laborType: laborType,
        laborFactor: laborFactor,
        laborRef: laborRefCode
    });

    // Create price state entry
    state.itemPrices[newMasterId] = {
        appliedPrice: matPrice,
        facilityPrice: matPrice,
        marketPrice: { price: 0, page: "" },
        infoPrice: { price: 0, page: "" },
        materialPrice: { price: 0, page: "" },
        distPrice: { price: 0, page: "" },
        invest1: { price: 0, page: "" },
        invest2: { price: 0, page: "" }
    };

    // Add to division items list
    const newItem = {
        id: "item-" + Date.now() + Math.random().toString(36).substr(2, 5),
        masterId: newMasterId,
        name: name,
        spec: spec,
        unit: unit,
        qty: qty,
        materialPrice: matPrice,
        laborType: laborType,
        laborFactor: laborFactor,
        laborScenario: "new",
        laborMultiplier: 1.0,
        laborRef: laborRefCode,
        laborRemark: laborRefCode ? "신설" : ""
    };
    div.items.push(newItem);

    closeModal("modal-add-price-item");
    
    renderPriceInvestigationTable();
    calculateEstimates();
    loadActiveDivision();
    renderLaborBasisTable();

    showToast(`단가조사 품목 "${name}"이(가) 등록되었습니다.`, "success");
}

// 3. 단가조사 품목 완전히 내역에서 제거
function deletePriceInvestigationItem(masterId) {
    const dbItem = ITEM_MASTER_DB.find(i => i.id === masterId) || { name: "알수없음" };
    if (confirm(`"${dbItem.name}" 품목을 단가조사, 내역서(BOQ), 노임근거를 포함해 이 프로젝트에서 완전히 삭제하시겠습니까?`)) {
        
        // 1. Remove from divisions
        state.divisions.forEach(div => {
            div.items = div.items.filter(item => item.masterId !== masterId);
        });

        // 2. Remove from itemPrices state
        delete state.itemPrices[masterId];

        // 3. Remove from master database (so it doesn't show in lists)
        const dbIdx = ITEM_MASTER_DB.findIndex(i => i.id === masterId);
        if (dbIdx !== -1) {
            ITEM_MASTER_DB.splice(dbIdx, 1);
        }

        renderPriceInvestigationTable();
        calculateEstimates();
        loadActiveDivision();
        renderLaborBasisTable();

        showToast(`"${dbItem.name}" 품목이 내역에서 완전히 제거되었습니다.`, "success");
    }
}

// 4. 노임근거 단가조사 연동 새로고침
function syncLaborBasisTable() {
    renderLaborBasisTable();
    calculateEstimates();
    showToast("단가조사(내역서)의 최신 품목 목록이 노임근거에 새로고침 동기화되었습니다.", "success");
}

// 5. 노임근거 개별 항목 삭제/근거 제거 (2단계 스마트 대화상자)
function deleteLaborBasisItem(divId, itemId) {
    const div = state.divisions.find(d => d.id === divId);
    if (!div) return;
    
    const item = div.items.find(i => i.id === itemId);
    if (!item) return;
    
    const priceInfo = state.itemPrices[item.masterId] || { appliedPrice: item.materialPrice };
    const materialPrice = priceInfo.appliedPrice;
    
    if (materialPrice === 0 || item.materialPrice === 0) {
        // Pure labor item, completely delete from division
        if (confirm(`"${item.name}"은 자재비가 없는 순수 노무 항목이므로 내역서에서 완전히 삭제됩니다. 진행하시겠습니까?`)) {
            const index = div.items.findIndex(i => i.id === itemId);
            if (index !== -1) {
                div.items.splice(index, 1);
                showToast(`"${item.name}" 품목이 완전히 제거되었습니다.`, "success");
            }
        } else {
            return;
        }
    } else {
        // Mixed item, clear labor configuration or delete completely
        const clearLabor = confirm(`"${item.name}"은 자재비가 존재하는 품목입니다.\n\n[확인]을 누르시면 자재비는 내역에 보존하고 '노무비 품셈 근거만 제거'합니다.\n[취소]를 누르시면 완전히 삭제할지 선택할 수 있습니다.`);
        if (clearLabor) {
            item.laborType = null;
            item.laborFactor = 0;
            item.laborRef = "";
            item.laborScenario = "new";
            item.laborMultiplier = 1.0;
            item.laborRemark = "";
            showToast(`"${item.name}"의 노무 산출 근거가 제거되었습니다.`, "info");
        } else {
            const deleteFully = confirm(`"${item.name}"을 단가조사와 내역서(BOQ)를 포함해 프로젝트에서 완전히 삭제하시겠습니까?`);
            if (deleteFully) {
                const index = div.items.findIndex(i => i.id === itemId);
                if (index !== -1) {
                    div.items.splice(index, 1);
                    showToast(`"${item.name}" 품목이 완전히 삭제되었습니다.`, "success");
                }
            }
        }
    }
    
    renderLaborBasisTable();
    calculateEstimates();
    loadActiveDivision();
}

// 2. 순수 노임 근거 항목 직접 추가 팝업 열기
function openAddLaborItemModal() {
    const selectDiv = document.getElementById("select-modal-labor-division");
    selectDiv.innerHTML = "";
    state.divisions.forEach(div => {
        const opt = document.createElement("option");
        opt.value = div.id;
        opt.textContent = div.name;
        selectDiv.appendChild(opt);
    });
    
    // Clear form fields
    document.getElementById("input-modal-labor-item-name").value = "";
    document.getElementById("input-modal-labor-item-spec").value = "";
    document.getElementById("input-modal-labor-item-unit").value = "개";
    document.getElementById("input-modal-labor-item-qty").value = "1";
    document.getElementById("input-modal-labor-item-factor").value = "0.1000";
    document.getElementById("input-modal-labor-item-ref").value = "";
    document.getElementById("select-modal-labor-item-type").value = "통신내선공";
    document.getElementById("input-add-labor-db-search").value = "";
    
    searchAddLaborDbList("");
    openModal("modal-add-labor-item");
}

// 3. 품셈 추가 팝업 내부 검색
function searchAddLaborDbList(query) {
    const list = document.getElementById("modal-add-labor-db-list");
    list.innerHTML = "";
    
    const queryL = query.toLowerCase().trim();
    const filtered = STANDARD_LABOR_DB.filter(dbItem => {
        return dbItem.name.toLowerCase().includes(queryL) ||
               dbItem.spec.toLowerCase().includes(queryL) ||
               dbItem.code.toLowerCase().includes(queryL) ||
               dbItem.laborType.toLowerCase().includes(queryL);
    });
    
    if (filtered.length === 0) {
        list.innerHTML = `<div style="text-align: center; color: var(--text-muted); font-size: 11px; padding: 20px 0;">검색 결과가 없습니다.</div>`;
        return;
    }
    
    filtered.forEach(dbItem => {
        const row = document.createElement("div");
        row.className = "modal-db-item-row";
        row.innerHTML = `
            <div class="modal-db-item-details">
                <span class="modal-db-item-name">${dbItem.name} (${dbItem.code})</span>
                <span class="modal-db-item-spec">${dbItem.spec} [${dbItem.unit}]</span>
            </div>
            <div class="modal-db-item-right">
                <span class="modal-db-item-factor">${dbItem.laborFactor.toFixed(4)} 인</span>
                <div class="modal-db-item-type">${dbItem.laborType}</div>
            </div>
        `;
        
        row.addEventListener("click", () => {
            document.getElementById("input-modal-labor-item-name").value = dbItem.name;
            document.getElementById("input-modal-labor-item-spec").value = dbItem.spec;
            document.getElementById("input-modal-labor-item-unit").value = dbItem.unit;
            document.getElementById("input-modal-labor-item-factor").value = dbItem.laborFactor.toFixed(4);
            document.getElementById("select-modal-labor-item-type").value = dbItem.laborType;
            document.getElementById("input-modal-labor-item-ref").value = dbItem.code;
            
            list.querySelectorAll(".modal-db-item-row").forEach(r => r.classList.remove("active"));
            row.classList.add("active");
        });
        
        list.appendChild(row);
    });
}

// 4. 순수 노임 항목 추가 적용
function confirmAddLaborItem() {
    const divId = document.getElementById("select-modal-labor-division").value;
    const name = document.getElementById("input-modal-labor-item-name").value.trim();
    const spec = document.getElementById("input-modal-labor-item-spec").value.trim();
    const unit = document.getElementById("input-modal-labor-item-unit").value.trim();
    const qty = parseFloat(document.getElementById("input-modal-labor-item-qty").value) || 0;
    const factor = parseFloat(document.getElementById("input-modal-labor-item-factor").value) || 0;
    const laborType = document.getElementById("select-modal-labor-item-type").value;
    const ref = document.getElementById("input-modal-labor-item-ref").value;

    if (!name) {
        showToast("품목명을 입력해주세요.", "danger");
        return;
    }
    if (qty <= 0) {
        showToast("수량은 0보다 커야 합니다.", "danger");
        return;
    }

    const div = state.divisions.find(d => d.id === divId);
    if (!div) return;

    const customMasterId = "L_CUSTOM_" + Date.now();
    const newItem = {
        id: "item-" + Date.now() + Math.random().toString(36).substr(2, 5),
        masterId: customMasterId,
        name: name,
        spec: spec,
        unit: unit,
        qty: qty,
        materialPrice: 0,
        laborType: laborType,
        laborFactor: factor,
        laborScenario: "new",
        laborMultiplier: 1.0,
        laborRef: ref || "자체품셈",
        laborRemark: "신설"
    };

    div.items.push(newItem);
    closeModal("modal-add-labor-item");

    renderLaborBasisTable();
    calculateEstimates();
    loadActiveDivision();

    showToast(`순수 노무비 항목 "${name}"이 추가되었습니다.`, "success");
}

// Render Labor Basis Table
function renderLaborBasisTable() {
    const tbody = document.getElementById("labor-basis-table-body");
    tbody.innerHTML = "";

    let overallIndex = 1;
    let hasItems = false;

    state.divisions.forEach(div => {
        div.items.forEach(item => {
            hasItems = true;
            const tr = document.createElement("tr");
            
            const hasLabor = item.laborFactor !== undefined && item.laborFactor > 0 && item.laborType;
            const multiplier = item.laborMultiplier !== undefined ? item.laborMultiplier : 1.0;
            const calcFactor = hasLabor ? (item.laborFactor * multiplier) : 0;
            const totalLaborVolume = item.qty * calcFactor;

            const scenarios = [
                { value: "new", label: "신설 (100% 적용)", mult: 1.0, remark: "신설" },
                { value: "demolish", label: "단순 철거 (30% 적용)", mult: 0.3, remark: "철거자재" },
                { value: "reuse", label: "재사용 철거 (50% 적용)", mult: 0.5, remark: "철거재사용" },
                { value: "night", label: "야간 작업 (125% 적용)", mult: 1.25, remark: "야간할증" },
                { value: "narrow", label: "협소 장소 (110% 적용)", mult: 1.10, remark: "야지작업" }
            ];

            let selectHtml = "-";
            if (hasLabor) {
                selectHtml = `<select class="select-labor-scenario" data-div-id="${div.id}" data-item-id="${item.id}" style="background-color: var(--bg-base); border: 1px solid var(--border-color); color: var(--text-primary); padding: 6px 10px; border-radius: 4px; outline: none; font-size: 13px; width: 100%; cursor: pointer;">`;
                scenarios.forEach(sc => {
                    const selected = item.laborScenario === sc.value ? "selected" : "";
                    selectHtml += `<option value="${sc.value}" data-mult="${sc.mult}" data-remark="${sc.remark}" ${selected}>${sc.label}</option>`;
                });
                selectHtml += `</select>`;
            }

            tr.innerHTML = `
                <td>${overallIndex++}</td>
                <td style="color: var(--text-secondary); font-size: 13px;">${div.name}</td>
                <td>
                    <div class="item-meta">
                        <span class="item-title">${item.name}</span>
                        <span class="item-subtitle">${item.spec}</span>
                    </div>
                </td>
                <td style="text-align: center;">${item.unit}</td>
                <td style="text-align: right; font-family: monospace;">${item.qty}</td>
                <td>${hasLabor ? item.laborType : "-"}</td>
                <td style="text-align: right; font-family: monospace;">${hasLabor ? item.laborFactor.toFixed(4) : "-"}</td>
                <td style="text-align: center;">${selectHtml}</td>
                <td style="text-align: right; font-family: monospace; font-weight: 600; color: ${hasLabor ? "var(--accent)" : "var(--text-muted)"};">${hasLabor ? totalLaborVolume.toFixed(4) : "-"}</td>
                <td style="text-align: center;">
                    <span class="labor-ref-badge-clickable" onclick="openLaborRefModal('${div.id}', '${item.id}')" title="클릭하여 표준품셈 변경/추천 받기">
                        <i class="fa-solid fa-wand-magic-sparkles"></i> ${item.laborRef || "근거 없음"}
                    </span>
                </td>
                <td style="text-align: center;">
                    <button class="btn-icon-danger" onclick="deleteLaborBasisItem('${div.id}', '${item.id}')" title="노임근거 제거/삭제">
                        <i class="fa-solid fa-trash-can"></i>
                    </button>
                </td>
            `;

            tbody.appendChild(tr);
        });
    });

    if (!hasItems) {
        tbody.innerHTML = `<tr><td colspan="11" style="text-align: center; color: var(--text-muted); padding: 45px 0;"><i class="fa-solid fa-person-digging" style="font-size: 24px; margin-bottom: 10px; display: block;"></i>내역서에 추가된 품목이 없습니다.</td></tr>`;
        return;
    }

    tbody.querySelectorAll(".select-labor-scenario").forEach(select => {
        select.addEventListener("change", (e) => {
            const divId = e.target.getAttribute("data-div-id");
            const itemId = e.target.getAttribute("data-item-id");
            
            const selectedOpt = e.target.options[e.target.selectedIndex];
            const scenario = e.target.value;
            const multiplier = parseFloat(selectedOpt.getAttribute("data-mult"));
            const remark = selectedOpt.getAttribute("data-remark");

            const div = state.divisions.find(d => d.id === divId);
            if (div) {
                const item = div.items.find(i => i.id === itemId);
                if (item) {
                    item.laborScenario = scenario;
                    item.laborMultiplier = multiplier;
                    item.laborRemark = remark;
                    
                    renderLaborBasisTable();
                    calculateEstimates();
                    showToast(`"${item.name}" 노임 적용 조건이 변경되었습니다.`, "info");
                }
            }
        });
    });
}

// Update Division Select Dropdown
function updateDivisionSelects() {
    const selectDiv = document.getElementById("select-active-division");
    selectDiv.innerHTML = "";
    state.divisions.forEach(div => {
        const opt = document.createElement("option");
        opt.value = div.id;
        opt.textContent = div.name;
        if (div.id === state.activeDivisionId) opt.selected = true;
        selectDiv.appendChild(opt);
    });
}

// Load Active Division Items
function loadActiveDivision() {
    updateDivisionSelects();
    const activeDiv = state.divisions.find(d => d.id === state.activeDivisionId);
    const tbody = document.getElementById("boq-table-body");
    tbody.innerHTML = "";

    if (state.divisions.length === 0) {
        tbody.innerHTML = `<tr><td colspan="8" class="text-center" style="text-align: center; color: var(--text-muted); padding: 40px 0;"><i class="fa-solid fa-folder-tree" style="font-size: 24px; margin-bottom: 10px; display: block;"></i>등록된 공종이 없습니다. 좌측 메뉴의 '공종설정' 탭에서 공종을 먼저 추가하세요.</td></tr>`;
        return;
    }

    if (!activeDiv || activeDiv.items.length === 0) {
        tbody.innerHTML = `<tr><td colspan="8" class="text-center" style="text-align: center; color: var(--text-muted); padding: 40px 0;"><i class="fa-solid fa-folder-open" style="font-size: 24px; margin-bottom: 10px; display: block;"></i>추가된 품목이 없습니다. 우측 라이브러리에서 품목을 검색해 추가하세요.</td></tr>`;
        return;
    }

    const wages = WAGE_RATES[state.wageStandard];

    activeDiv.items.forEach((item, index) => {
        const tr = document.createElement("tr");
        
        // Calculate labor unit cost
        const priceInfo = state.itemPrices[item.masterId] || { appliedPrice: item.materialPrice };
        const materialPrice = priceInfo.appliedPrice;
        const laborCost = Math.floor(item.laborFactor * (wages[item.laborType] || 0));
        const totalUnitCost = materialPrice + laborCost;
        const rowTotal = item.qty * totalUnitCost;

        tr.innerHTML = `
            <td>${index + 1}</td>
            <td>
                <div class="item-meta">
                    <span class="item-title">${item.name}</span>
                    <span class="item-subtitle">${item.spec}</span>
                </div>
            </td>
            <td>${item.unit}</td>
            <td>
                <input type="number" class="input-qty" data-id="${item.id}" value="${item.qty}" min="0">
            </td>
            <td class="col-currency">₩${materialPrice.toLocaleString()}</td>
            <td class="col-currency" title="${item.laborType} 품셈 ${item.laborFactor}인">₩${laborCost.toLocaleString()}</td>
            <td class="col-currency">₩${rowTotal.toLocaleString()}</td>
            <td style="text-align: center;">
                <button class="btn-icon-danger btn-delete-item" data-id="${item.id}" title="품목 삭제">
                    <i class="fa-solid fa-trash-can"></i>
                </button>
            </td>
        `;

        tbody.appendChild(tr);
    });

    // Add row listeners
    tbody.querySelectorAll(".input-qty").forEach(input => {
        input.addEventListener("change", (e) => {
            const itemId = e.target.getAttribute("data-id");
            const newQty = Math.max(0, parseFloat(e.target.value) || 0);
            
            // Find and update qty
            const item = activeDiv.items.find(i => i.id === itemId);
            if (item) {
                item.qty = newQty;
                loadActiveDivision(); // Re-render table
                calculateEstimates(); // Recalculate
            }
        });
    });

    tbody.querySelectorAll(".btn-delete-item").forEach(btn => {
        btn.addEventListener("click", (e) => {
            const itemId = btn.getAttribute("data-id");
            const index = activeDiv.items.findIndex(i => i.id === itemId);
            if (index !== -1) {
                activeDiv.items.splice(index, 1);
                loadActiveDivision();
                calculateEstimates();
                showToast("품목이 제거되었습니다.", "info");
            }
        });
    });
}

// Populate Standard Library Database
function populateDbLibrary(query = "", category = "all") {
    const listContainer = document.getElementById("db-items-list");
    listContainer.innerHTML = "";

    const wages = WAGE_RATES[state.wageStandard];

    const filtered = ITEM_MASTER_DB.filter(item => {
        const matchesQuery = item.name.toLowerCase().includes(query) || item.spec.toLowerCase().includes(query);
        const matchesCategory = category === "all" || item.category === category;
        return matchesQuery && matchesCategory;
    });

    if (filtered.length === 0) {
        listContainer.innerHTML = `<div style="text-align: center; color: var(--text-muted); padding: 20px;"><i class="fa-solid fa-triangle-exclamation" style="display: block; margin-bottom: 8px; font-size: 20px;"></i>검색 결과가 없습니다.</div>`;
        return;
    }

    filtered.forEach(item => {
        const div = document.createElement("div");
        div.className = "db-item-card";
        
        const laborCost = Math.floor(item.laborFactor * (wages[item.laborType] || 0));

        div.innerHTML = `
            <div class="db-item-header">
                <span class="db-item-title">${item.name}</span>
                <span class="db-item-unit">${item.unit}</span>
            </div>
            <div class="db-item-spec">${item.spec || "-"}</div>
            <div class="db-item-price-row">
                <span>자재: ₩${item.materialPrice.toLocaleString()}</span>
                <span>노무: ₩${laborCost.toLocaleString()} <span style="font-size: 9px; color: var(--text-muted);">(${item.laborType})</span></span>
            </div>
        `;

        div.addEventListener("click", () => {
            addItemToActiveDivision(item);
        });

        listContainer.appendChild(div);
    });
}

// Add Item from DB Library to BOQ
function addItemToActiveDivision(dbItem) {
    const activeDiv = state.divisions.find(d => d.id === state.activeDivisionId);
    if (!activeDiv) {
        showToast("선택된 공종이 없습니다. 먼저 공종설정 탭에서 공종을 추가해 주세요.", "warning");
        return;
    }

    // Check if item price configuration exists in state, if not create it
    if (!state.itemPrices[dbItem.id]) {
        state.itemPrices[dbItem.id] = {
            appliedPrice: dbItem.materialPrice,
            facilityPrice: dbItem.materialPrice,
            marketPrice: { price: 0, page: "" },
            infoPrice: { price: 0, page: "" },
            materialPrice: { price: 0, page: "" },
            distPrice: { price: 0, page: "" },
            invest1: { price: 0, page: "" },
            invest2: { price: 0, page: "" }
        };
    }

    // Check if item already exists in division to prevent duplicate, or increment quantity
    const existing = activeDiv.items.find(i => i.masterId === dbItem.id);
    if (existing) {
        existing.qty += 1;
        showToast(`"${dbItem.name}" 수량이 1 증가했습니다.`, "success");
    } else {
        const newItem = {
            id: "item-" + Date.now() + Math.random().toString(36).substr(2, 5),
            masterId: dbItem.id,
            name: dbItem.name,
            spec: dbItem.spec,
            unit: dbItem.unit,
            qty: 1,
            materialPrice: dbItem.materialPrice,
            laborType: dbItem.laborType,
            laborFactor: dbItem.laborFactor,
            laborScenario: "new",
            laborMultiplier: 1.0,
            laborRef: dbItem.laborRef || "",
            laborRemark: "신설"
        };
        activeDiv.items.push(newItem);
        showToast(`"${dbItem.name}" 품목이 추가되었습니다.`, "success");
    }

    loadActiveDivision();
    calculateEstimates();
}

// 5. Dynamic Computation Engine (실시간 자동 연산 및 원가계산)
let lastCalculations = {}; // Cache calculation outputs for exporting

function calculateEstimates() {
    const wages = WAGE_RATES[state.wageStandard];
    
    // 1. Calculate direct sums for each division
    let totalDirectMaterial = 0;
    let totalDirectLabor = 0;
    let totalDirectExpense = 0;

    state.divisions.forEach(div => {
        div.materialSum = 0;
        div.laborSum = 0;
        div.expenseSum = 0;

        div.items.forEach(item => {
            const priceInfo = state.itemPrices[item.masterId] || { appliedPrice: item.materialPrice };
            const materialPrice = priceInfo.appliedPrice;
            const multiplier = item.laborMultiplier !== undefined ? item.laborMultiplier : 1.0;
            const itemLaborCost = Math.floor(item.laborFactor * multiplier * (wages[item.laborType] || 0));
            div.materialSum += item.qty * materialPrice;
            div.laborSum += item.qty * itemLaborCost;
            // No direct expenses on items in our DB template, but can be added if needed
        });

        // 3% Tool Wear (공구손료) gets added automatically to Expenses under each division
        const toolWearRate = 3.0; // 3%
        const toolWear = Math.floor(div.laborSum * (toolWearRate / 100));
        div.expenseSum += toolWear;

        totalDirectMaterial += div.materialSum;
        totalDirectLabor += div.laborSum;
        totalDirectExpense += div.expenseSum;
    });

    // 2. Cost calculations
    const rates = state.rates;
    
    // 노무비
    const directLabor = totalDirectLabor;
    const indirectLabor = Math.floor(directLabor * (rates.indirectLabor / 100));
    const totalLabor = directLabor + indirectLabor;

    // 경비 (보험료 및 기타경비)
    const health = Math.floor(directLabor * (rates.healthInsurance / 100));
    const pension = Math.floor(directLabor * (rates.pensionInsurance / 100));
    const longtermCare = Math.floor(health * (rates.longtermCare / 100));
    const accident = Math.floor(totalLabor * (rates.accidentInsurance / 100));
    const employment = Math.floor(totalLabor * (rates.employmentInsurance / 100));
    const otherExpense = Math.floor((totalDirectMaterial + directLabor) * (rates.otherExpense / 100));
    
    // Tools wear already integrated inside division totals. We represent it here as direct expense.
    const directExpense = totalDirectExpense; // This is basically the toolWear sum
    const totalExpense = directExpense + health + pension + longtermCare + accident + employment + otherExpense;

    // 순공사비
    const netConstruction = totalDirectMaterial + totalLabor + totalExpense;

    // 일반관리비
    const generalAdmin = Math.floor(netConstruction * (rates.generalAdmin / 100));

    // 이윤
    const profitBasis = totalLabor + totalExpense + generalAdmin;
    const rawProfit = Math.floor(profitBasis * (rates.profit / 100));

    // Apply Rounding / Adjustments to rawProfit to match custom precision
    // Total raw before VAT
    const totalCostRaw = netConstruction + generalAdmin + rawProfit;
    const precision = state.roundingPrecision;
    
    // Standard approach: adjust raw profit so that totalCost raw is rounded according to precision
    const totalCostRounded = Math.floor(totalCostRaw / precision) * precision;
    const profitAdjustment = totalCostRounded - totalCostRaw;
    const adjustedProfit = rawProfit + profitAdjustment;
    
    const totalCost = netConstruction + generalAdmin + adjustedProfit;

    // 부가가치세
    const vat = Math.floor(totalCost * 0.1);

    // 도급액 (총공사비)
    const grandTotal = totalCost + vat;

    // Save calculations for UI & Excel Exporting
    lastCalculations = {
        directMaterial: totalDirectMaterial,
        directLabor: directLabor,
        indirectLabor: indirectLabor,
        totalLabor: totalLabor,
        directExpense: directExpense,
        health: health,
        pension: pension,
        longtermCare: longtermCare,
        accident: accident,
        employment: employment,
        otherExpense: otherExpense,
        totalExpense: totalExpense,
        netConstruction: netConstruction,
        generalAdmin: generalAdmin,
        profit: adjustedProfit,
        totalCost: totalCost,
        vat: vat,
        grandTotal: grandTotal
    };

    // Update Header Badges
    document.getElementById("badge-total-cost").textContent = `₩${grandTotal.toLocaleString()}`;

    // Render Cost Calculations Table
    renderCostCalculationTable();
    saveToLocalStorage();
}

function renderCostCalculationTable() {
    const tbody = document.getElementById("cost-calculation-body");
    tbody.innerHTML = "";

    const c = lastCalculations;
    const rates = state.rates;

    const rows = [
        { name: "1. 직접재료비", formula: "품목별 수량 × 자재단가의 총합", value: c.directMaterial, class: "" },
        { name: "2. 직접노무비", formula: "품목별 수량 × 품셈공량 × 노임단가", value: c.directLabor, class: "" },
        { name: "3. 간접노무비", formula: `직접노무비 × ${rates.indirectLabor}%`, value: c.indirectLabor, class: "" },
        { name: "노무비 소계", formula: "직접노무비 + 간접노무비", value: c.totalLabor, class: "total-row" },
        { name: "4. 직접경비 (공구손료)", formula: "직접노무비 × 3%", value: c.directExpense, class: "" },
        { name: "5. 건강보험료", formula: `직접노무비 × ${rates.healthInsurance}%`, value: c.health, class: "" },
        { name: "6. 국민연금보험료", formula: `직접노무비 × ${rates.pensionInsurance}%`, value: c.pension, class: "" },
        { name: "7. 노인장기요양보험료", formula: `건강보험료 × ${rates.longtermCare}%`, value: c.longtermCare, class: "" },
        { name: "8. 산재보험료", formula: `노무비 소계 × ${rates.accidentInsurance}%`, value: c.accident, class: "" },
        { name: "9. 고용보험료", formula: `노무비 소계 × ${rates.employmentInsurance}%`, value: c.employment, class: "" },
        { name: "10. 기타경비", formula: `(재료비 + 직접노무비) × ${rates.otherExpense}%`, value: c.otherExpense, class: "" },
        { name: "경비 소계", formula: "경비 항목의 합계", value: c.totalExpense, class: "total-row" },
        { name: "순공사비 합계", formula: "재료비 + 노무비 소계 + 경비 소계", value: c.netConstruction, class: "total-row" },
        { name: "11. 일반관리비", formula: `순공사비 × ${rates.generalAdmin}%`, value: c.generalAdmin, class: "" },
        { name: "12. 이윤", formula: `(노무비소계 + 경비소계 + 일반관리비) × ${rates.profit}% + 절사 조정`, value: c.profit, class: "" },
        { name: "총원가", formula: "순공사비 + 일반관리비 + 이윤", value: c.totalCost, class: "total-row" },
        { name: "13. 부가가치세", formula: "총원가 × 10%", value: c.vat, class: "" },
        { name: "도급합계 (총공사비)", formula: "총원가 + 부가가치세 (단위 절사 반영)", value: c.grandTotal, class: "total-row" }
    ];

    rows.forEach(r => {
        const tr = document.createElement("tr");
        if (r.class) tr.className = r.class;
        tr.innerHTML = `
            <td>${r.name}</td>
            <td style="color: var(--text-muted); font-size: 12px;">${r.formula}</td>
            <td style="text-align: right; font-family: monospace; font-size: 15px;">₩${r.value.toLocaleString()}</td>
        `;
        tbody.appendChild(tr);
    });
}

// Update Visual Chart (Chart.js)
function updateChart() {
    const ctx = document.getElementById("cost-share-chart").getContext("2d");

    const labels = state.divisions.map(d => d.name);
    const data = state.divisions.map(d => {
        const wages = WAGE_RATES[state.wageStandard];
        let sum = 0;
        d.items.forEach(item => {
            const priceInfo = state.itemPrices[item.masterId] || { appliedPrice: item.materialPrice };
            const materialPrice = priceInfo.appliedPrice;
            const laborCost = Math.floor(item.laborFactor * (wages[item.laborType] || 0));
            sum += item.qty * (materialPrice + laborCost);
        });
        const toolWear = Math.floor((sum - d.materialSum) * 0.03); // approximate tool wear based on labor sum
        return sum + toolWear;
    });

    if (costShareChart) {
        costShareChart.destroy();
    }

    if (data.every(val => val === 0)) {
        return; // Don't draw chart if data is all zero
    }

    costShareChart = new Chart(ctx, {
        type: "doughnut",
        data: {
            labels: labels,
            datasets: [{
                data: data,
                backgroundColor: [
                    "rgba(79, 70, 229, 0.75)",
                    "rgba(6, 182, 212, 0.75)",
                    "rgba(16, 185, 129, 0.75)",
                    "rgba(245, 158, 11, 0.75)",
                    "rgba(239, 68, 68, 0.75)"
                ],
                borderColor: "rgba(11, 15, 25, 0.8)",
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: "bottom",
                    labels: {
                        color: "#9CA3AF",
                        font: { size: 12 }
                    }
                }
            },
            cutout: "70%"
        }
    });
}

// 6. ExcelJS Exporter - Creates a beautifully styled, formula-linked multisheet workbook
async function exportToExcel() {
    try {
        showToast("엑셀 파일 빌드 중...", "info");
        const workbook = new ExcelJS.Workbook();
        workbook.creator = "EstiBuilder";
        
        // Pre-calculate Excel row indices for 1-to-1 linkage between '내역서' and '노임근거'
        let boqRow = 3; // Data starts after title (row 1) and headers (row 2)
        let laborRow = 2; // Data starts after headers (row 1) in shLabor
        
        state.divisions.forEach(div => {
            boqRow++; // Division name row
            div.items.forEach(item => {
                item.excelRowIndex = boqRow;
                boqRow++;
                
                if (item.laborType && item.laborFactor > 0) {
                    item.laborExcelRowIndex = laborRow;
                    laborRow++;
                } else {
                    item.laborExcelRowIndex = null;
                }
            });
            boqRow++; // Tool wear row
            boqRow++; // Division total row
            boqRow++; // Division spacer row
        });
        
        // ----------------------------------------------------
        // 1. OPTION SHEET
        // ----------------------------------------------------
        const shOpt = workbook.addWorksheet("옵션");
        shOpt.views = [{ showGridLines: true }];
        shOpt.getCell("A1").value = "구분";
        shOpt.getCell("B1").value = "요율";
        shOpt.getCell("C1").value = "적용";
        
        shOpt.getCell("A2").value = "간접노무비율"; shOpt.getCell("B2").value = state.rates.indirectLabor / 100;
        shOpt.getCell("A3").value = "건강보험료율"; shOpt.getCell("B3").value = state.rates.healthInsurance / 100;
        shOpt.getCell("A4").value = "국민연금보험료율"; shOpt.getCell("B4").value = state.rates.pensionInsurance / 100;
        shOpt.getCell("A5").value = "노인장기요양보험"; shOpt.getCell("B5").value = state.rates.longtermCare / 100;
        shOpt.getCell("A6").value = "산재보험료율"; shOpt.getCell("B6").value = state.rates.accidentInsurance / 100;
        shOpt.getCell("A7").value = "고용보험료율"; shOpt.getCell("B7").value = state.rates.employmentInsurance / 100;
        shOpt.getCell("A8").value = "기타경비율"; shOpt.getCell("B8").value = state.rates.otherExpense / 100;
        shOpt.getCell("A9").value = "일반관리비율"; shOpt.getCell("B9").value = state.rates.generalAdmin / 100;
        shOpt.getCell("A10").value = "이윤율"; shOpt.getCell("B10").value = state.rates.profit / 100;
        
        // Wages configuration in option
        const wages = WAGE_RATES[state.wageStandard];
        shOpt.getCell("A12").value = "통신내선공 단가"; shOpt.getCell("B12").value = wages["통신내선공"];
        shOpt.getCell("A13").value = "통신설비공 단가"; shOpt.getCell("B13").value = wages["통신설비공"];
        shOpt.getCell("A14").value = "특별인부 단가"; shOpt.getCell("B14").value = wages["특별인부"];
        
        // Tool wear
        shOpt.getCell("A16").value = "공구손료"; shOpt.getCell("B16").value = 0.03;

        // Apply number format
        for (let r = 2; r <= 10; r++) {
            shOpt.getCell(`B${r}`).numFmt = "0.00%";
        }
        shOpt.getCell("B12").numFmt = "₩#,##0";
        shOpt.getCell("B13").numFmt = "₩#,##0";
        shOpt.getCell("B14").numFmt = "₩#,##0";
        shOpt.getCell("B16").numFmt = "0.0%";

        // ----------------------------------------------------
        // 2. UNIT PRICE DATA SHEET (단가조사)
        // ----------------------------------------------------
        const shPrice = workbook.addWorksheet("단가조사");
        shPrice.views = [{ showGridLines: true }];
        
        // Add double row headers
        shPrice.addRow(["번호", "품목코드", "명칭", "규격", "단위", "적용단가", "시설단가", "거래가격", "", "물가정보", "", "물가자료", "", "유통물가", "", "조사단가1", "", "조사단가2", "", "비고"]);
        shPrice.addRow(["", "", "", "", "", "", "", "단가", "PAGE", "단가", "PAGE", "단가", "PAGE", "단가", "PAGE", "단가", "PAGE", "단가", "PAGE", ""]);
        
        // Merge cells
        shPrice.mergeCells("A1:A2");
        shPrice.mergeCells("B1:B2");
        shPrice.mergeCells("C1:C2");
        shPrice.mergeCells("D1:D2");
        shPrice.mergeCells("E1:E2");
        shPrice.mergeCells("F1:F2");
        shPrice.mergeCells("G1:G2");
        shPrice.mergeCells("H1:I1");
        shPrice.mergeCells("J1:K1");
        shPrice.mergeCells("L1:M1");
        shPrice.mergeCells("N1:O1");
        shPrice.mergeCells("P1:Q1");
        shPrice.mergeCells("R1:S1");
        shPrice.mergeCells("T1:T2");

        // Unique list of master items used
        const allItemsMap = new Map();
        state.divisions.forEach(div => {
            div.items.forEach(item => {
                allItemsMap.set(item.masterId, item);
            });
        });
        
        let pIndex = 1;
        allItemsMap.forEach((item, key) => {
            const p = state.itemPrices[key] || {
                appliedPrice: item.materialPrice,
                facilityPrice: item.materialPrice,
                marketPrice: { price: 0, page: "" },
                infoPrice: { price: 0, page: "" },
                materialPrice: { price: 0, page: "" },
                distPrice: { price: 0, page: "" },
                invest1: { price: 0, page: "" },
                invest2: { price: 0, page: "" }
            };
            shPrice.addRow([
                pIndex++,
                key,
                item.name,
                item.spec,
                item.unit,
                p.appliedPrice,
                p.facilityPrice,
                p.marketPrice.price,
                p.marketPrice.page,
                p.infoPrice.price,
                p.infoPrice.page,
                p.materialPrice.price,
                p.materialPrice.page,
                p.distPrice.price,
                p.distPrice.page,
                p.invest1.price,
                p.invest1.page,
                p.invest2.price,
                p.invest2.page,
                "" // 비고
            ]);
        });

        // Style the double headers
        styleHeaderRow(shPrice.getRow(1));
        styleHeaderRow(shPrice.getRow(2));
        
        // Column formatting
        shPrice.getColumn(1).width = 6;   // 번호
        shPrice.getColumn(2).width = 12;  // 품목코드
        shPrice.getColumn(3).width = 22;  // 명칭
        shPrice.getColumn(4).width = 22;  // 규격
        shPrice.getColumn(5).width = 8;   // 단위
        shPrice.getColumn(6).width = 15;  // 적용단가
        shPrice.getColumn(7).width = 15;  // 시설단가
        
        // Format H to S columns
        for (let col = 8; col <= 19; col++) {
            const colWidth = (col % 2 === 0) ? 14 : 9; // Even = price, Odd = Page
            shPrice.getColumn(col).width = colWidth;
            if (col % 2 === 0) {
                shPrice.getColumn(col).numFmt = "₩#,##0";
                shPrice.getColumn(col).alignment = { horizontal: 'right' };
            } else {
                shPrice.getColumn(col).alignment = { horizontal: 'center' };
            }
        }
        shPrice.getColumn(6).numFmt = "₩#,##0";
        shPrice.getColumn(7).numFmt = "₩#,##0";
        shPrice.getColumn(20).width = 15; // 비고

        // ----------------------------------------------------
        // 3. LABOR DETAILS SHEET (노임근거)
        // ----------------------------------------------------
        const shLabor = workbook.addWorksheet("노임근거");
        shLabor.views = [{ showGridLines: true }];
        
        // Headers: 번호, 소속공종, 명칭, 규격, 단위, 직종, 기본품셈, 할증률, 산출공량, 노임단가, 노무단가, 비고
        shLabor.addRow(["번호", "소속공종", "명칭", "규격", "단위", "직종", "기본품셈", "할증률", "산출공량", "노임단가", "노무단가", "비고"]);
        
        let lIndex = 1;
        state.divisions.forEach(div => {
            div.items.forEach(item => {
                if (item.laborType && item.laborFactor > 0) {
                    const rowNum = lIndex + 1; // row 1 is header
                    
                    // Map labor type to option cells
                    let wageCell = "옵션!$B$12"; // 통신내선공 default
                    if (item.laborType === "통신설비공") wageCell = "옵션!$B$13";
                    else if (item.laborType === "특별인부") wageCell = "옵션!$B$14";
                    
                    const multiplier = item.laborMultiplier !== undefined ? item.laborMultiplier : 1.0;
                    
                    shLabor.addRow([
                        lIndex++,
                        div.name.replace(/^\d+\.\s*/, ""),
                        item.name,
                        item.spec,
                        item.unit,
                        item.laborType,
                        item.laborFactor,
                        multiplier,
                        { formula: `G${rowNum}*H${rowNum}` }, // 산출공량 = 기본품셈 * 할증률
                        { formula: wageCell }, // 시중노임단가
                        { formula: `TRUNC(I${rowNum}*J${rowNum}, 0)` }, // 노무단가 = 산출공량 * 노임단가
                        item.laborRemark || ""
                    ]);
                }
            });
        });

        styleHeaderRow(shLabor.getRow(1));
        shLabor.getColumn(1).width = 6;   // 번호
        shLabor.getColumn(2).width = 15;  // 소속공종
        shLabor.getColumn(3).width = 22;  // 명칭
        shLabor.getColumn(4).width = 22;  // 규격
        shLabor.getColumn(5).width = 8;   // 단위
        shLabor.getColumn(6).width = 12;  // 직종
        shLabor.getColumn(7).width = 10;  // 기본품셈
        shLabor.getColumn(8).width = 10;  // 할증률
        shLabor.getColumn(9).width = 10;  // 산출공량
        shLabor.getColumn(10).width = 14; // 노임단가
        shLabor.getColumn(11).width = 14; // 노무단가
        shLabor.getColumn(12).width = 12; // 비고
        
        shLabor.getColumn(7).numFmt = "0.0000";
        shLabor.getColumn(8).numFmt = "0.0%";
        shLabor.getColumn(9).numFmt = "0.0000";
        shLabor.getColumn(10).numFmt = "₩#,##0";
        shLabor.getColumn(11).numFmt = "₩#,##0";

        // ----------------------------------------------------
        // 4. MAIN BOQ ESTIMATE SHEET (내역서)
        // ----------------------------------------------------
        const shBOQ = workbook.addWorksheet("내역서");
        shBOQ.views = [{ showGridLines: true }];
        
        shBOQ.addRow(["설계내역서 - " + state.projectName]);
        shBOQ.mergeCells("A1:K1");
        shBOQ.getCell("A1").font = { size: 16, bold: true, name: "맑은 고딕" };
        shBOQ.getCell("A1").alignment = { vertical: 'middle', horizontal: 'center' };
        shBOQ.getRow(1).height = 40;

        shBOQ.addRow(["번호", "품명", "규격", "단위", "수량", "재료비 단가", "재료비 금액", "노무비 단가", "노무비 금액", "경비 단가", "경비 금액", "합계 금액"]);
        styleHeaderRow(shBOQ.getRow(2));
        shBOQ.getRow(2).height = 25;

        let boqCurrentRow = 3;
        
        // Track the totals formulas
        const matSumFormulas = [];
        const labSumFormulas = [];
        const expSumFormulas = [];

        state.divisions.forEach((div) => {
            // Write division header
            const divRow = shBOQ.addRow([div.name]);
            shBOQ.mergeCells(`A${boqCurrentRow}:L${boqCurrentRow}`);
            divRow.getCell(1).font = { bold: true, size: 12, name: "맑은 고딕" };
            divRow.getCell(1).fill = {
                type: 'pattern',
                pattern: 'solid',
                fgColor: { argb: 'FFF0F4F8' }
            };
            boqCurrentRow++;

            const startItemRow = boqCurrentRow;
            
            // Write items
            div.items.forEach((item, idx) => {
                // Find row index of this item in 단가조사 and 노임근거 sheets
                const keysArr = Array.from(allItemsMap.keys());
                const priceMatchIndex = keysArr.indexOf(item.masterId) + 3; // 1-based index + 2 header rows
                
                const hasLabor = item.laborExcelRowIndex !== null;
                const laborCellFormula = hasLabor ? `노임근거!K${item.laborExcelRowIndex}` : "0";

                const itemRow = shBOQ.addRow([
                    idx + 1,
                    item.name,
                    item.spec,
                    item.unit,
                    item.qty,
                    { formula: `단가조사!F${priceMatchIndex}` }, // Material Unit Cost
                    { formula: `TRUNC(E${boqCurrentRow}*F${boqCurrentRow}, 0)` }, // Material Total Cost
                    hasLabor ? { formula: laborCellFormula } : 0, // Labor Unit Cost
                    { formula: `TRUNC(E${boqCurrentRow}*H${boqCurrentRow}, 0)` }, // Labor Total Cost
                    0, // Expense Unit Cost
                    0, // Expense Total Cost
                    { formula: `SUM(G${boqCurrentRow}, I${boqCurrentRow}, K${boqCurrentRow})` }
                ]);
                boqCurrentRow++;
            });

            // Write dynamic Tool Wear (공구손료) for this division
            const laborSumRange = `I${startItemRow}:I${boqCurrentRow - 1}`;
            const toolWearRow = shBOQ.addRow([
                "",
                "[ 공구손료 ]",
                "노무비의 3 %",
                "식",
                1,
                0,
                0,
                0,
                0,
                { formula: `TRUNC(SUM(${laborSumRange})*옵션!$B$16, 0)` },
                { formula: `TRUNC(E${boqCurrentRow}*J${boqCurrentRow}, 0)` },
                { formula: `K${boqCurrentRow}` }
            ]);
            toolWearRow.getCell(2).font = { color: { argb: 'FF808080' }, italic: true, name: "맑은 고딕" };
            toolWearRow.getCell(3).font = { color: { argb: 'FF808080' }, italic: true, name: "맑은 고딕" };
            
            const endItemRow = boqCurrentRow;
            boqCurrentRow++;

            // Write Division Total
            const divTotalRow = shBOQ.addRow([
                "",
                "( 소      계 )",
                "",
                "",
                "",
                "",
                { formula: `SUM(G${startItemRow}:G${endItemRow})` },
                "",
                { formula: `SUM(I${startItemRow}:I${endItemRow})` },
                "",
                { formula: `SUM(K${startItemRow}:K${endItemRow})` },
                { formula: `SUM(L${startItemRow}:L${endItemRow})` }
            ]);
            
            matSumFormulas.push(`G${boqCurrentRow}`);
            labSumFormulas.push(`I${boqCurrentRow}`);
            expSumFormulas.push(`K${boqCurrentRow}`);

            divTotalRow.eachCell((cell) => {
                cell.font = { bold: true, name: "맑은 고딕" };
            });
            divTotalRow.getCell(2).fill = {
                type: 'pattern',
                pattern: 'solid',
                fgColor: { argb: 'FFEAEFFF' }
            };
            boqCurrentRow++;
        });

        // Write Estimate Total sum
        const totalBOQRow = shBOQ.addRow([
            "",
            "[ 합           계 ]",
            "",
            "",
            "",
            "",
            { formula: `SUM(${matSumFormulas.join(",")})` },
            "",
            { formula: `SUM(${labSumFormulas.join(",")})` },
            "",
            { formula: `SUM(${expSumFormulas.join(",")})` },
            { formula: `SUM(G${boqCurrentRow}, I${boqCurrentRow}, K${boqCurrentRow})` }
        ]);
        
        totalBOQRow.eachCell((cell) => {
            cell.font = { bold: true, size: 11, name: "맑은 고딕" };
            cell.border = {
                top: { style: 'thin' },
                bottom: { style: 'double' }
            };
        });
        
        // Format columns width & layout for BOQ
        shBOQ.getColumn(1).width = 6;
        shBOQ.getColumn(2).width = 25;
        shBOQ.getColumn(3).width = 25;
        shBOQ.getColumn(4).width = 8;
        shBOQ.getColumn(5).width = 8;
        shBOQ.getColumn(6).width = 15;
        shBOQ.getColumn(7).width = 15;
        shBOQ.getColumn(8).width = 15;
        shBOQ.getColumn(9).width = 15;
        shBOQ.getColumn(10).width = 15;
        shBOQ.getColumn(11).width = 15;
        shBOQ.getColumn(12).width = 18;

        for (let colNum = 6; colNum <= 12; colNum++) {
            shBOQ.getColumn(colNum).numFmt = "₩#,##0";
            shBOQ.getColumn(colNum).alignment = { horizontal: 'right' };
        }

        // ----------------------------------------------------
        // 5. DIVISION SUMMARY TABLE (총괄표)
        // ----------------------------------------------------
        const shSummary = workbook.addWorksheet("총괄표");
        shSummary.views = [{ showGridLines: true }];
        
        shSummary.addRow(["공종별 총괄 집계표"]);
        shSummary.mergeCells("A1:G1");
        shSummary.getCell("A1").font = { size: 15, bold: true, name: "맑은 고딕" };
        shSummary.getCell("A1").alignment = { horizontal: 'center' };
        shSummary.getRow(1).height = 30;

        shSummary.addRow(["번호", "공   종   명", "단위", "수량", "재료비 합계", "노무비 합계", "경비 합계", "총액"]);
        styleHeaderRow(shSummary.getRow(2));
        
        // Find row locations in 내역서 sheet to point formulas
        let summaryIdx = 1;
        let sumCurrentRow = 3;
        
        const matSummaryForms = [];
        const labSummaryForms = [];
        const expSummaryForms = [];

        // We can scan the rows of the 내역서 sheet we created to look for "( 소      계 )" to link them correctly
        // Since we tracked boqCurrentRow, let's map each division index
        let divisionsTotalRows = [];
        let boqIndex = 3;
        state.divisions.forEach((div) => {
            boqIndex++; // Skip div name row
            boqIndex += div.items.length; // Skip item rows
            boqIndex++; // Skip tool wear row
            divisionsTotalRows.push(boqIndex); // This is the total row number in 내역서 sheet
            boqIndex += 2; // Skip total row itself & division spacer
        });

        state.divisions.forEach((div, i) => {
            const boqTotalRow = divisionsTotalRows[i];
            shSummary.addRow([
                summaryIdx++,
                div.name.replace(/^\d+\.\s*/, ""), // Strip number for clean summary
                "식",
                1,
                { formula: `내역서!G${boqTotalRow}` },
                { formula: `내역서!I${boqTotalRow}` },
                { formula: `내역서!K${boqTotalRow}` },
                { formula: `내역서!L${boqTotalRow}` }
            ]);
            
            const rNum = sumCurrentRow;
            matSummaryForms.push(`E${rNum}`);
            labSummaryForms.push(`F${rNum}`);
            expSummaryForms.push(`G${rNum}`);
            sumCurrentRow++;
        });

        const finalSummaryTotalRow = shSummary.addRow([
            "",
            "( 합       계 )",
            "",
            "",
            { formula: `SUM(${matSummaryForms.join(",")})` },
            { formula: `SUM(${labSummaryForms.join(",")})` },
            { formula: `SUM(${expSummaryForms.join(",")})` },
            { formula: `SUM(E${sumCurrentRow}, F${sumCurrentRow}, G${sumCurrentRow})` }
        ]);

        finalSummaryTotalRow.eachCell((cell) => {
            cell.font = { bold: true, name: "맑은 고딕" };
            cell.border = { top: { style: 'thin' }, bottom: { style: 'double' } };
        });

        shSummary.getColumn(1).width = 8;
        shSummary.getColumn(2).width = 25;
        shSummary.getColumn(3).width = 8;
        shSummary.getColumn(4).width = 8;
        shSummary.getColumn(5).width = 18;
        shSummary.getColumn(6).width = 18;
        shSummary.getColumn(7).width = 18;
        shSummary.getColumn(8).width = 20;

        for (let colNum = 5; colNum <= 8; colNum++) {
            shSummary.getColumn(colNum).numFmt = "₩#,##0";
            shSummary.getColumn(colNum).alignment = { horizontal: 'right' };
        }

        // ----------------------------------------------------
        // 6. MASTER COST STATEMENT SHEET (원가)
        // ----------------------------------------------------
        const shCost = workbook.addWorksheet("원가");
        shCost.views = [{ showGridLines: true }];
        
        shCost.addRow(["원 가 계 산 서"]);
        shCost.mergeCells("A1:D1");
        shCost.getCell("A1").font = { size: 16, bold: true, name: "맑은 고딕" };
        shCost.getCell("A1").alignment = { horizontal: 'center' };
        shCost.getRow(1).height = 35;

        shCost.addRow([`공사명: ${state.projectName}`, "", "", `공사기간: ${state.duration}`]);
        shCost.mergeCells("A2:C2");
        shCost.getRow(2).font = { name: "맑은 고딕", size: 10 };
        shCost.getRow(2).height = 20;

        shCost.addRow(["비 목", "구  분", "금 액", "비  고"]);
        styleHeaderRow(shCost.getRow(3));
        shCost.getRow(3).height = 24;

        // References to the Summary sheet sum values
        const totalSummaryRowIndex = state.divisions.length + 3;

        // Setup the cost sheet rows
        const costRows = [
            /* Row 4 */  ["재료비", "직접재료비", { formula: `총괄표!E${totalSummaryRowIndex}` }, ""],
            /* Row 5 */  ["", "간접재료비", 0, ""],
            /* Row 6 */  ["", "( 소   계 )", { formula: "SUM(C4:C5)" }, ""],
            
            /* Row 7 */  ["노무비", "직접노무비", { formula: `총괄표!F${totalSummaryRowIndex}` }, ""],
            /* Row 8 */  ["", "간접노무비", { formula: "TRUNC(C7*옵션!$B$2, 0)" }, "(직접 노무비) * 옵션 요율"],
            /* Row 9 */  ["", "( 소   계 )", { formula: "SUM(C7:C8)" }, ""],
            
            /* Row 10 */ ["경비", "직접경비 (공구손료)", { formula: `총괄표!G${totalSummaryRowIndex}` }, ""],
            /* Row 11 */ ["", "건강보험료", { formula: "TRUNC(C7*옵션!$B$3, 0)" }, "직노 * 요율"],
            /* Row 12 */ ["", "국민연금보험료", { formula: "TRUNC(C7*옵션!$B$4, 0)" }, "직노 * 요율"],
            /* Row 13 */ ["", "노인장기요양보험", { formula: "TRUNC(C11*옵션!$B$5, 0)" }, "건강보험 * 요율"],
            /* Row 14 */ ["", "산재보험료", { formula: "TRUNC(C9*옵션!$B$6, 0)" }, "노무비소계 * 요율"],
            /* Row 15 */ ["", "고용보험료", { formula: "TRUNC(C9*옵션!$B$7, 0)" }, "노무비소계 * 요율"],
            /* Row 16 */ ["", "기타경비", { formula: "TRUNC((C4+C7)*옵션!$B$8, 0)" }, "(직재+직노) * 요율"],
            /* Row 17 */ ["", "( 소   계 )", { formula: "SUM(C10:C16)" }, ""],
            
            /* Row 18 */ ["순공사비", "( 순공사비계 )", { formula: "C6+C9+C17" }, ""],
            
            /* Row 19 */ ["일반관리비", "", { formula: "TRUNC(C18*옵션!$B$9, 0)" }, "순공사비계 * 요율"],
            
            // Adjusted profit row to handle rounding precision
            /* Row 20 */ ["이윤", "", { formula: `TRUNC((C9+C17+C19)*옵션!$B$10, 0)` }, "(노무비소계+경비소계+일반관리비) * 요율"],
            
            /* Row 21 */ ["총원가", "", { formula: "C18+C19+C20" }, ""],
            /* Row 22 */ ["부가가치세", "", { formula: "TRUNC(C21*0.1, 0)" }, "총원가 * 10%"],
            
            // Grand total with rounding formula directly injected to match state.roundingPrecision
            /* Row 23 */ ["총  계", "", { formula: `TRUNC((C21+C22)/${state.roundingPrecision}, 0)*${state.roundingPrecision}` }, "천원단위 절사 적용"]
        ];

        costRows.forEach(cr => {
            shCost.addRow(cr);
        });

        // Add beautiful layout and highlights for Cost Statement
        shCost.getColumn(1).width = 18;
        shCost.getColumn(2).width = 25;
        shCost.getColumn(3).width = 20;
        shCost.getColumn(4).width = 30;

        shCost.getColumn(3).numFmt = "₩#,##0";
        shCost.getColumn(3).alignment = { horizontal: 'right' };

        // Make totals bold
        const boldRows = [6, 9, 17, 18, 21, 23];
        boldRows.forEach(rNum => {
            const excelRowIndex = rNum + 3; // Shift by header rows (A1, A2, A3)
            const row = shCost.getRow(excelRowIndex);
            row.eachCell(cell => {
                cell.font = { bold: true, name: "맑은 고딕" };
            });
            row.getCell(2).fill = {
                type: 'pattern',
                pattern: 'solid',
                fgColor: { argb: 'FFF2F4F7' }
            };
        });

        const grandTotalRowIndex = 23 + 3;
        const gtRow = shCost.getRow(grandTotalRowIndex);
        gtRow.eachCell(cell => {
            cell.font = { bold: true, size: 12, color: { argb: 'FFF59E0B' }, name: "맑은 고딕" };
            cell.border = { top: { style: 'thin' }, bottom: { style: 'double' } };
        });

        // ----------------------------------------------------
        // Generate Blob & Download
        // ----------------------------------------------------
        const buffer = await workbook.xlsx.writeBuffer();
        const blob = new Blob([buffer], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = `${state.projectName.replace(/\s+/g, "_")}_설계예산서.xlsx`;
        link.click();
        
        showToast("엑셀 파일이 성공적으로 다운로드되었습니다!", "success");

    } catch (err) {
        console.error(err);
        showToast("엑셀 생성 오류: " + err.message, "danger");
    }
}

// Helper to style sheet header rows
function styleHeaderRow(row) {
    row.eachCell((cell) => {
        cell.font = { bold: true, color: { argb: 'FFFFFFFF' }, name: "맑은 고딕" };
        cell.fill = {
            type: 'pattern',
            pattern: 'solid',
            fgColor: { argb: 'FF1F4E79' } // Dark blue theme
        };
        cell.alignment = { vertical: 'middle', horizontal: 'center' };
        cell.border = {
            top: { style: 'thin', color: { argb: 'FF161C2D' } },
            bottom: { style: 'medium', color: { argb: 'FF161C2D' } },
            left: { style: 'thin', color: { argb: 'FF161C2D' } },
            right: { style: 'thin', color: { argb: 'FF161C2D' } }
        };
    });
}

// 7. Modals helper
function openModal(id) {
    document.getElementById(id).classList.add("active");
}

function closeModal(id) {
    document.getElementById(id).classList.remove("active");
}

window.openModal = openModal;
window.closeModal = closeModal;

// Toast Notifications helper
function showToast(message, type = "info") {
    const container = document.getElementById("toast-container");
    const toast = document.createElement("div");
    toast.className = `toast toast-${type}`;
    
    let icon = "fa-info-circle";
    if (type === "success") icon = "fa-check-circle";
    else if (type === "danger") icon = "fa-times-circle";
    else if (type === "warning") icon = "fa-exclamation-triangle";

    toast.innerHTML = `
        <i class="fa-solid ${icon}"></i>
        <span>${message}</span>
    `;

    container.appendChild(toast);
    
    // Animate in
    setTimeout(() => {
        toast.classList.add("active");
    }, 10);

    // Remove after 3.5s
    setTimeout(() => {
        toast.classList.remove("active");
        setTimeout(() => toast.remove(), 400);
    }, 3500);
}

// ----------------------------------------------------
// 8. 공종 설정 (Divisions Settings) 관리 기능
// ----------------------------------------------------

// 공종 접두사 자동 일관성 갱신 (1. , 2. 등)
function normalizeDivisionNames() {
    state.divisions.forEach((div, index) => {
        const cleanName = div.name.replace(/^\d+\.\s*/, "");
        div.name = `${index + 1}. ${cleanName}`;
    });
}

// 공종 변경 시 전체 동기화 콜백
function onDivisionsUpdated() {
    normalizeDivisionNames();
    
    // activeDivisionId 유효성 체크
    if (state.divisions.length > 0) {
        const activeExists = state.divisions.some(d => d.id === state.activeDivisionId);
        if (!activeExists) {
            state.activeDivisionId = state.divisions[0].id;
        }
    } else {
        state.activeDivisionId = "";
    }
    
    loadActiveDivision();
    renderPriceInvestigationTable();
    renderLaborBasisTable();
    calculateEstimates();
}

// 공종 설정 탭 테이블 렌더링
function renderDivisionsTable() {
    const tbody = document.getElementById("division-list-tbody");
    if (!tbody) return;
    
    tbody.innerHTML = "";
    
    if (state.divisions.length === 0) {
        tbody.innerHTML = `<tr><td colspan="5" style="text-align: center; color: var(--text-muted); padding: 30px 0;">등록된 공종이 없습니다. 상단에서 신규 공종을 추가하세요.</td></tr>`;
        return;
    }
    
    state.divisions.forEach((div, index) => {
        const tr = document.createElement("tr");
        
        // 순서
        const tdIndex = document.createElement("td");
        tdIndex.style.textAlign = "center";
        tdIndex.textContent = index + 1;
        tr.appendChild(tdIndex);
        
        // 공종명
        const tdName = document.createElement("td");
        tdName.style.textAlign = "left";
        tdName.style.fontWeight = "500";
        tdName.textContent = div.name;
        tr.appendChild(tdName);
        
        // 품목 수
        const tdCount = document.createElement("td");
        tdCount.style.textAlign = "center";
        tdCount.textContent = div.items.length + " 개";
        tr.appendChild(tdCount);
        
        // 순서 조정 (위로 / 아래로 이동)
        const tdOrder = document.createElement("td");
        tdOrder.style.textAlign = "center";
        
        const btnUp = document.createElement("button");
        btnUp.className = "btn-icon-primary";
        btnUp.title = "위로 이동";
        btnUp.innerHTML = `<i class="fa-solid fa-arrow-up"></i>`;
        btnUp.disabled = index === 0;
        btnUp.onclick = () => moveDivision(div.id, "up");
        
        const btnDown = document.createElement("button");
        btnDown.className = "btn-icon-primary";
        btnDown.title = "아래로 이동";
        btnDown.innerHTML = `<i class="fa-solid fa-arrow-down"></i>`;
        btnDown.disabled = index === state.divisions.length - 1;
        btnDown.onclick = () => moveDivision(div.id, "down");
        
        tdOrder.appendChild(btnUp);
        tdOrder.appendChild(btnDown);
        tr.appendChild(tdOrder);
        
        // 관리 (이름 수정 / 삭제)
        const tdActions = document.createElement("td");
        tdActions.style.textAlign = "center";
        
        const btnEdit = document.createElement("button");
        btnEdit.className = "btn-icon-primary";
        btnEdit.title = "이름 수정";
        btnEdit.innerHTML = `<i class="fa-solid fa-pen-to-square"></i>`;
        btnEdit.onclick = () => editDivisionName(div.id);
        
        const btnDelete = document.createElement("button");
        btnDelete.className = "btn-icon-danger";
        btnDelete.title = "공종 삭제";
        btnDelete.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
        btnDelete.onclick = () => deleteDivision(div.id);
        
        tdActions.appendChild(btnEdit);
        tdActions.appendChild(btnDelete);
        tr.appendChild(tdActions);
        
        tbody.appendChild(tr);
    });
}

// 공종 이벤트 리스너 설정
function initDivisionsListeners() {
    const btnAdd = document.getElementById("btn-add-division");
    const inputName = document.getElementById("input-new-division-name");
    
    if (btnAdd && inputName) {
        btnAdd.onclick = () => {
            const name = inputName.value.trim();
            if (name) {
                addDivision(name);
                inputName.value = "";
            } else {
                showToast("공종명을 입력해주세요.", "danger");
            }
        };
        
        inputName.onkeydown = (e) => {
            if (e.key === "Enter") {
                const name = inputName.value.trim();
                if (name) {
                    addDivision(name);
                    inputName.value = "";
                } else {
                    showToast("공종명을 입력해주세요.", "danger");
                }
            }
        };
    }
}

// 신규 공종 추가
function addDivision(name) {
    const newId = "div-" + Date.now();
    state.divisions.push({
        id: newId,
        name: name,
        items: []
    });
    
    onDivisionsUpdated();
    renderDivisionsTable();
    showToast(`공종 "${name}"이(가) 추가되었습니다.`, "success");
}

// 공종명 수정
function editDivisionName(divId) {
    const div = state.divisions.find(d => d.id === divId);
    if (!div) return;
    
    const cleanName = div.name.replace(/^\d+\.\s*/, "");
    const newName = prompt(`공종 "${cleanName}"의 새로운 이름을 입력하세요.`, cleanName);
    
    if (newName === null) return;
    const trimmed = newName.trim();
    if (!trimmed) {
        showToast("공종명은 공백일 수 없습니다.", "danger");
        return;
    }
    
    div.name = trimmed;
    
    onDivisionsUpdated();
    renderDivisionsTable();
    showToast("공종명이 변경되었습니다.", "success");
}

// 공종 삭제
function deleteDivision(divId) {
    const divIdx = state.divisions.findIndex(d => d.id === divId);
    if (divIdx === -1) return;
    
    const div = state.divisions[divIdx];
    const cleanName = div.name.replace(/^\d+\.\s*/, "");
    
    if (div.items.length > 0) {
        if (!confirm(`공종 "${cleanName}" 내에 ${div.items.length}개의 설계 품목이 등록되어 있습니다.\n\n이 공종과 소속된 모든 품목을 내역서에서 완전히 삭제하시겠습니까?`)) {
            return;
        }
    } else {
        if (!confirm(`공종 "${cleanName}"을 삭제하시겠습니까?`)) {
            return;
        }
    }
    
    state.divisions.splice(divIdx, 1);
    
    onDivisionsUpdated();
    renderDivisionsTable();
    showToast(`공종 "${cleanName}"이(가) 제거되었습니다.`, "success");
}

// 공종 순서 조정
function moveDivision(divId, direction) {
    const idx = state.divisions.findIndex(d => d.id === divId);
    if (idx === -1) return;
    
    if (direction === "up" && idx > 0) {
        const temp = state.divisions[idx];
        state.divisions[idx] = state.divisions[idx - 1];
        state.divisions[idx - 1] = temp;
    } else if (direction === "down" && idx < state.divisions.length - 1) {
        const temp = state.divisions[idx];
        state.divisions[idx] = state.divisions[idx + 1];
        state.divisions[idx + 1] = temp;
    } else {
        return;
    }
    
    onDivisionsUpdated();
    renderDivisionsTable();
    showToast("공종의 순서가 변경되었습니다.", "info");
}

// ----------------------------------------------------
// 9. 로컬 저장 (localStorage) 및 JSON 파일 백업/복원
// ----------------------------------------------------

// localStorage에 상태 저장
function saveToLocalStorage() {
    try {
        localStorage.setItem("estibuilder_project_state", JSON.stringify(state));
    } catch (e) {
        console.error("로컬 스토리지 저장에 실패했습니다.", e);
    }
}

// localStorage에서 상태 불러오기
function loadFromLocalStorage() {
    try {
        const saved = localStorage.getItem("estibuilder_project_state");
        if (saved) {
            const parsed = JSON.parse(saved);
            if (parsed && parsed.divisions && parsed.rates) {
                state = parsed;
                
                // UI 폼 인풋 및 헤더 갱신
                const inputProjName = document.getElementById("input-project-name");
                const inputDuration = document.getElementById("input-project-duration");
                const headerProjName = document.getElementById("header-project-name");
                const headerDuration = document.getElementById("header-project-duration");
                
                if (inputProjName) inputProjName.value = state.projectName || "";
                if (inputDuration) inputDuration.value = state.duration || "";
                if (headerProjName) headerProjName.textContent = state.projectName || "신규 프로젝트";
                if (headerDuration) headerDuration.textContent = state.duration || "공사기간 미정";
                
                // 보험 요율 인풋 세팅
                const rateKeys = ["indirectLabor", "healthInsurance", "pensionInsurance", "longtermCare", "accidentInsurance", "employmentInsurance", "otherExpense", "generalAdmin", "profit"];
                rateKeys.forEach(key => {
                    const inputEl = document.getElementById(`rate-${key.replace(/([A-Z])/g, "-$1").toLowerCase()}`);
                    if (inputEl && state.rates[key] !== undefined) {
                        inputEl.value = state.rates[key];
                    }
                });
                
                // 노임단가 및 끝자리 세팅
                const selectWage = document.getElementById("select-wage-standard");
                if (selectWage && state.wageStandard) {
                    selectWage.value = state.wageStandard;
                }
                
                const selectPrecision = document.getElementById("input-rounding-precision");
                if (selectPrecision && state.roundingPrecision) {
                    selectPrecision.value = state.roundingPrecision;
                }
            }
        }
    } catch (e) {
        console.error("로컬 스토리지 복구에 실패했습니다.", e);
    }
}

// state를 JSON 파일로 다운로드
function exportStateToJson() {
    try {
        const dataStr = JSON.stringify(state, null, 2);
        const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
        
        const exportFileDefaultName = `${(state.projectName || "신규프로젝트").replace(/\s+/g, "_")}_설계데이터.json`;
        
        const linkElement = document.createElement('a');
        linkElement.setAttribute('href', dataUri);
        linkElement.setAttribute('download', exportFileDefaultName);
        linkElement.click();
        
        showToast("설계 파일이 다운로드되었습니다.", "success");
    } catch (e) {
        showToast("설계 저장에 실패했습니다.", "danger");
        console.error(e);
    }
}

// JSON 파일 업로드하여 state 복구
function importStateFromJson(file) {
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = function(event) {
        try {
            const parsed = JSON.parse(event.target.result);
            if (parsed && parsed.divisions && parsed.rates) {
                state = parsed;
                
                // 로컬 스토리지에 즉시 동기화
                saveToLocalStorage();
                
                // UI 인풋 필드 갱신
                const inputProjName = document.getElementById("input-project-name");
                const inputDuration = document.getElementById("input-project-duration");
                const headerProjName = document.getElementById("header-project-name");
                const headerDuration = document.getElementById("header-project-duration");
                
                if (inputProjName) inputProjName.value = state.projectName || "";
                if (inputDuration) inputDuration.value = state.duration || "";
                if (headerProjName) headerProjName.textContent = state.projectName || "신규 프로젝트";
                if (headerDuration) headerDuration.textContent = state.duration || "공사기간 미정";
                
                const rateKeys = ["indirectLabor", "healthInsurance", "pensionInsurance", "longtermCare", "accidentInsurance", "employmentInsurance", "otherExpense", "generalAdmin", "profit"];
                rateKeys.forEach(key => {
                    const inputEl = document.getElementById(`rate-${key.replace(/([A-Z])/g, "-$1").toLowerCase()}`);
                    if (inputEl && state.rates[key] !== undefined) {
                        inputEl.value = state.rates[key];
                    }
                });
                
                const selectWage = document.getElementById("select-wage-standard");
                if (selectWage && state.wageStandard) {
                    selectWage.value = state.wageStandard;
                }
                
                const selectPrecision = document.getElementById("input-rounding-precision");
                if (selectPrecision && state.roundingPrecision) {
                    selectPrecision.value = state.roundingPrecision;
                }
                
                // 화면 리렌더링
                loadActiveDivision();
                renderPriceInvestigationTable();
                renderLaborBasisTable();
                if (typeof renderDivisionsTable === "function") {
                    renderDivisionsTable();
                }
                calculateEstimates();
                
                showToast("설계 데이터가 성공적으로 불러와졌습니다.", "success");
            } else {
                showToast("올바르지 않은 설계 데이터 파일입니다.", "danger");
            }
        } catch (e) {
            showToast("파일 파싱 중 에러가 발생했습니다.", "danger");
            console.error(e);
        }
    };
    reader.readAsText(file);
}

// 저장/불러오기 버튼 리스너 바인딩
function initSaveLoadListeners() {
    const btnSave = document.getElementById("btn-save-json");
    const btnLoad = document.getElementById("btn-load-json");
    const inputFile = document.getElementById("input-file-json");
    
    if (btnSave) {
        btnSave.onclick = () => {
            exportStateToJson();
        };
    }
    
    if (btnLoad && inputFile) {
        btnLoad.onclick = () => {
            inputFile.click();
        };
        
        inputFile.onchange = (e) => {
            if (e.target.files && e.target.files[0]) {
                importStateFromJson(e.target.files[0]);
                e.target.value = "";
            }
        };
    }
}
