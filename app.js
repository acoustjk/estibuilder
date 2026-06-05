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
    { code: "통신 1-1-27-1", name: "-경광등", spec: "표준 규격", unit: "개", laborType: "보통인부", laborFactor: 0.15, category: "device", keywords: ["-경광등"] },
    { code: "통신 1-1-27-1", name: "-안전유도로봇", spec: "표준 규격", unit: "개", laborType: "보통인부", laborFactor: 0.15, category: "device", keywords: ["-안전유도로봇"] },
    { code: "통신 2-1-6", name: "경고표시 테이프100m0.13케이블 매설표지판", spec: "표준 규격", unit: "개", laborType: "보통인부", laborFactor: 0.08, category: "pipe", keywords: ["경고표시 테이프100m0.13케이블 "] },
    { code: "통신 2-2-1-3", name: "콘크리트 트로프 들어내기 및 닫기들어내기닫기트로프뚜 껑(폭)70㎜100m0.30-0.29-", spec: "표준 규격", unit: "개", laborType: "통신케이블공", laborFactor: 0.4, category: "pipe", keywords: ["콘크리트 트로프 들어내기 및 닫기들어"] },
    { code: "통신 2-2-1-3", name: "0.39-150㎜", spec: "표준 규격", unit: "개", laborType: "통신케이블공", laborFactor: 0.5, category: "pipe", keywords: ["0.39-150㎜"] },
    { code: "통신 2-2-1-3", name: "0.49-200㎜", spec: "표준 규격", unit: "개", laborType: "통신케이블공", laborFactor: 0.9, category: "pipe", keywords: ["0.49-200㎜"] },
    { code: "통신 2-4-1", name: "콘크리트 전봇", spec: "표준 규격", unit: "대", laborType: "통신외선공", laborFactor: 5.0, category: "pipe", keywords: ["콘크리트 전봇"] },
    { code: "통신 2-4-1", name: "m 이하", spec: "표준 규격", unit: "대", laborType: "통신외선공", laborFactor: 7.0, category: "pipe", keywords: ["m 이하"] },
    { code: "통신 2-4-1", name: ") 콘크리트 전봇", spec: "표준 규격", unit: "대", laborType: "통신외선공", laborFactor: 1.0, category: "pipe", keywords: [") 콘크리트 전봇"] },
    { code: "통신 2-4-1", name: ") 콘크리트 전봇", spec: "표준 규격", unit: "대", laborType: "통신외선공", laborFactor: 1.0, category: "pipe", keywords: [") 콘크리트 전봇"] },
    { code: "통신 2-4-1", name: "에 디딤쇠 설치시는 0.1인을 가산.(전봇", spec: "표준 규격", unit: "대", laborType: "통신외선공", laborFactor: 1.0, category: "pipe", keywords: ["에 디딤쇠 설치시는 0.1인을 가산."] },
    { code: "통신 2-4-4", name: "연선 7/2.3 이하 7/2.6 ~ 7/2.9", spec: "표준 규격", unit: "개", laborType: "통신외선공", laborFactor: 7.0, category: "pipe", keywords: ["연선 7/2.3 이하 7/2.6 ~ "] },
    { code: "통신 2-4-4", name: "/3.2 ~ 7/4.5", spec: "표준 규격", unit: "개", laborType: "통신외선공", laborFactor: 7.0, category: "pipe", keywords: ["/3.2 ~ 7/4.5"] },
    { code: "통신 2-4-8", name: "주의표 또는 번호표설치시매0.06기입시", spec: "표준 규격", unit: "개", laborType: "보통인부", laborFactor: 0.04, category: "pipe", keywords: ["주의표 또는 번호표설치시매0.06기입"] },
    { code: "통신 2-4-8", name: "도색판", spec: "표준 규격", unit: "개", laborType: "보통인부", laborFactor: 0.15, category: "pipe", keywords: ["도색판"] },
    { code: "통신 3-5-2", name: "×400㎜", spec: "표준 규격", unit: "개", laborType: "통신케이블공", laborFactor: 1.0, category: "pipe", keywords: ["×400㎜"] },
    { code: "통신 3-5-2", name: ",000×400㎜", spec: "표준 규격", unit: "개", laborType: "통신케이블공", laborFactor: 1.0, category: "pipe", keywords: [",000×400㎜"] },
    { code: "통신 3-5-2", name: "기덕트 뚜껑 닫기--", spec: "표준 규격", unit: "개", laborType: "통신케이블공", laborFactor: 0.12, category: "pipe", keywords: ["기덕트 뚜껑 닫기--"] },
    { code: "통신 3-5-3", name: "PVC몰딩 및 알루미늄몰딩(바닥)", spec: "표준 규격", unit: "10m", laborType: "통신내선공", laborFactor: 0.25, category: "pipe", keywords: ["배관", "pvc몰딩 및 알루미늄몰딩(바닥)", "배선", "pvc", "관로", "pipe"] },
    { code: "통신 3-7-1", name: "-----천 공각 종", spec: "표준 규격", unit: "10개", laborType: "통신내선공", laborFactor: 0.22, category: "pipe", keywords: ["-----천 공각 종"] },
    { code: "통신 3-7-1", name: "-----0.080.120.160.200.300.450.55--------------구 멍", spec: "표준 규격", unit: "10개", laborType: "보통인부", laborFactor: 0.36, category: "pipe", keywords: ["-----0.080.120.160.2"] },
    { code: "통신 3-7-1", name: "--0.270.360.540.84--------구멍따기박스용석고판 12.7Ф 이하", spec: "표준 규격", unit: "10개", laborType: "통신내선공", laborFactor: 0.41, category: "pipe", keywords: ["--0.270.360.540.84--"] },
    { code: "통신 3-7-1", name: "--박스용철판(데크플레이트 등)두께 2㎜ 이하", spec: "표준 규격", unit: "개", laborType: "통신내선공", laborFactor: 0.12, category: "pipe", keywords: ["--박스용철판(데크플레이트 등)두께 "] },
    { code: "통신 3-7-1", name: "--MDF판넬-", spec: "표준 규격", unit: "개", laborType: "통신내선공", laborFactor: 0.1, category: "pipe", keywords: ["--mdf판넬-"] },
    { code: "통신 3-7-1", name: "--방 화 폼 설 치- ℓ---0.30케 이 블 표 시식별표시용 PVC", spec: "표준 규격", unit: "개", laborType: "보통인부", laborFactor: 0.01, category: "pipe", keywords: ["배관", "배선", "--방 화 폼 설 치- ℓ---0.3", "pvc", "관로", "pipe"] },
    { code: "통신 3-7-1", name: "-전산볼트 설치 Ø13㎜ 이하", spec: "표준 규격", unit: "개", laborType: "통신내선공", laborFactor: 0.01, category: "pipe", keywords: ["-전산볼트 설치 ø13㎜ 이하"] },
    { code: "통신 4-1-1", name: "광섬유케이블포 설(싱 글/멀 티 모 드)지중인력견인포설100m0.94--1.41기계견인포설", spec: "표준 규격", unit: "개", laborType: "광케이블설치사", laborFactor: 0.48, category: "cable", keywords: ["광케이블", "광섬유케이블포 설(싱 글/멀 티 모 ", "광", "광섬유", "fiber", "optical"] },
    { code: "통신 4-1-1", name: "광섬유케이블포 설(싱 글/멀 티 모 드)지중인력견인포설100m0.94--1.41기계견인포설", spec: "표준 규격", unit: "개", laborType: "특별인부", laborFactor: 0.48, category: "cable", keywords: ["광케이블", "광섬유케이블포 설(싱 글/멀 티 모 ", "광", "광섬유", "fiber", "optical"] },
    { code: "통신 4-1-1", name: "광섬유 가 공 포 설", spec: "표준 규격", unit: "개", laborType: "광케이블설치사", laborFactor: 1.35, category: "cable", keywords: ["광케이블", "광섬유 가 공 포 설", "광", "광섬유", "fiber", "optical"] },
    { code: "통신 4-1-1", name: "광섬유 가 공 포 설", spec: "표준 규격", unit: "개", laborType: "보통인부", laborFactor: 1.01, category: "cable", keywords: ["광케이블", "광섬유 가 공 포 설", "광", "광섬유", "fiber", "optical"] },
    { code: "통신 4-1-1", name: "이하) 100m-0.28-0.42견인선 포설인력포설(4㎜)100m-0.28-0.42공기압력", spec: "표준 규격", unit: "개", laborType: "통신외선공", laborFactor: 0.04, category: "cable", keywords: ["이하) 100m-0.28-0.42견인"] },
    { code: "통신 4-1-1", name: "이하) 100m-0.28-0.42견인선 포설인력포설(4㎜)100m-0.28-0.42공기압력", spec: "표준 규격", unit: "개", laborType: "보통인부", laborFactor: 0.07, category: "cable", keywords: ["이하) 100m-0.28-0.42견인"] },
    { code: "통신 4-1-2-2", name: "광분배함(OFD) 및 저장함 설치 -", spec: "표준 규격", unit: "개", laborType: "통신설비공", laborFactor: 0.09, category: "cable", keywords: ["광분배함(ofd) 및 저장함 설치 -"] },
    { code: "통신 4-1-2-2", name: "광분배함(OFD) 및 저장함 설치 -", spec: "표준 규격", unit: "개", laborType: "보통인부", laborFactor: 0.09, category: "cable", keywords: ["광분배함(ofd) 및 저장함 설치 -"] },
    { code: "통신 4-1-2-2", name: "광분배반(FDF)-", spec: "표준 규격", unit: "대", laborType: "통신설비공", laborFactor: 0.23, category: "cable", keywords: ["광분배반(fdf)-"] },
    { code: "통신 4-1-2-2", name: "광분배반(FDF)-", spec: "표준 규격", unit: "대", laborType: "보통인부", laborFactor: 0.23, category: "cable", keywords: ["광분배반(fdf)-"] },
    { code: "통신 4-1-2-2", name: "광단자함(OTP)-", spec: "표준 규격", unit: "개", laborType: "통신설비공", laborFactor: 0.29, category: "cable", keywords: ["광단자함(otp)-"] },
    { code: "통신 4-1-2-2", name: "광단자함(OTP)-", spec: "표준 규격", unit: "개", laborType: "보통인부", laborFactor: 0.15, category: "cable", keywords: ["광단자함(otp)-"] },
    { code: "통신 4-1-2-2", name: "광분배기4분배기 이하", spec: "표준 규격", unit: "개", laborType: "광케이블설치사", laborFactor: 0.06, category: "cable", keywords: ["광분배기4분배기 이하"] },
    { code: "통신 4-1-2-2", name: "국 내 성 단12코어 이하코어당0.14-0.14 71코어", spec: "표준 규격", unit: "개", laborType: "광케이블설치사", laborFactor: 0.12, category: "cable", keywords: ["국 내 성 단12코어 이하코어당0.1"] },
    { code: "통신 4-1-2-2", name: "국 내 성 단12코어 이하코어당0.14-0.14 71코어", spec: "표준 규격", unit: "개", laborType: "특별인부", laborFactor: 0.09, category: "cable", keywords: ["국 내 성 단12코어 이하코어당0.1"] },
    { code: "통신 4-1-2-2", name: "72코어 이상", spec: "표준 규격", unit: "개", laborType: "광케이블설치사", laborFactor: 0.08, category: "cable", keywords: ["72코어 이상"] },
    { code: "통신 4-1-2-2", name: "72코어 이상", spec: "표준 규격", unit: "개", laborType: "특별인부", laborFactor: 0.06, category: "cable", keywords: ["72코어 이상"] },
    { code: "통신 4-1-3", name: "광코어 공압포설(집합광섬유) 4코어 이하", spec: "표준 규격", unit: "개", laborType: "보통인부", laborFactor: 8.0, category: "cable", keywords: ["광케이블", "광코어 공압포설(집합광섬유) 4코어 ", "광", "광섬유", "fiber", "optical"] },
    { code: "통신 4-1-3", name: "광섬유 광튜브 포설7튜브 이하", spec: "표준 규격", unit: "개", laborType: "광케이블설치사", laborFactor: 0.49, category: "cable", keywords: ["광케이블", "광", "광섬유", "광섬유 광튜브 포설7튜브 이하", "fiber", "optical"] },
    { code: "통신 4-1-3", name: "광섬유 광튜브 포설7튜브 이하", spec: "표준 규격", unit: "개", laborType: "보통인부", laborFactor: 0.838, category: "cable", keywords: ["광케이블", "광", "광섬유", "광섬유 광튜브 포설7튜브 이하", "fiber", "optical"] },
    { code: "통신 4-1-3", name: "광섬유 튜브 이상", spec: "표준 규격", unit: "개", laborType: "광케이블설치사", laborFactor: 0.58, category: "cable", keywords: ["광케이블", "광섬유 튜브 이상", "광", "광섬유", "fiber", "optical"] },
    { code: "통신 4-1-3", name: "광섬유 튜브 이상", spec: "표준 규격", unit: "개", laborType: "보통인부", laborFactor: 0.95, category: "cable", keywords: ["광케이블", "광섬유 튜브 이상", "광", "광섬유", "fiber", "optical"] },
    { code: "통신 4-1-3", name: "광섬유", spec: "표준 규격", unit: "소", laborType: "광케이블설치사", laborFactor: 0.07, category: "cable", keywords: ["광케이블", "광", "광섬유", "fiber", "optical"] },
    { code: "통신 4-1-3", name: "광섬유 광인출구 설치-", spec: "표준 규격", unit: "10개", laborType: "광케이블설치사", laborFactor: 0.18, category: "cable", keywords: ["광케이블", "광", "광섬유", "광섬유 광인출구 설치-", "fiber", "optical"] },
    { code: "통신 4-2-1", name: "동축케이블 포설옥 내포 설5C 이하", spec: "표준 규격", unit: "10m", laborType: "통신케이블공", laborFactor: 0.17, category: "cable", keywords: ["동축케이블 포설옥 내포 설5c 이하"] },
    { code: "통신 4-2-1", name: "7C", spec: "표준 규격", unit: "10m", laborType: "통신케이블공", laborFactor: 0.22, category: "cable", keywords: ["7c"] },
    { code: "통신 4-2-1", name: "10C", spec: "표준 규격", unit: "10m", laborType: "통신케이블공", laborFactor: 0.32, category: "cable", keywords: ["10c"] },
    { code: "통신 4-2-2", name: "커넥터통신관련산업기사 커넥터5C 이하", spec: "표준 규격", unit: "개", laborType: "통신내선공", laborFactor: 0.02, category: "cable", keywords: ["커넥터통신관련산업기사 커넥터5c 이하"] },
    { code: "통신 4-2-2", name: "-7C, 8C", spec: "표준 규격", unit: "개", laborType: "통신내선공", laborFactor: 0.05, category: "cable", keywords: ["-7c, 8c"] },
    { code: "통신 4-2-2", name: "-10C, 12C", spec: "표준 규격", unit: "개", laborType: "통신내선공", laborFactor: 0.06, category: "cable", keywords: ["-10c, 12c"] },
    { code: "통신 4-2-2", name: "-17C", spec: "표준 규격", unit: "개", laborType: "통신내선공", laborFactor: 0.07, category: "cable", keywords: ["-17c"] },
    { code: "통신 4-2-2", name: "-BNC(RG-58)Ethernet(Thick)", spec: "표준 규격", unit: "10개", laborType: "통신내선공", laborFactor: 0.56, category: "cable", keywords: ["-bnc(rg-58)ethernet("] },
    { code: "통신 4-2-2", name: "-Ethernet(Thin)", spec: "표준 규격", unit: "10개", laborType: "통신내선공", laborFactor: 0.56, category: "cable", keywords: ["-ethernet(thin)"] },
    { code: "통신 4-2-2", name: "-Terminator(Thick)", spec: "표준 규격", unit: "10개", laborType: "통신내선공", laborFactor: 0.51, category: "cable", keywords: ["-terminator(thick)"] },
    { code: "통신 4-2-2", name: "-Terminator(Thin)", spec: "표준 규격", unit: "10개", laborType: "통신내선공", laborFactor: 0.14, category: "cable", keywords: ["-terminator(thin)"] },
    { code: "통신 4-2-2", name: "-직렬단자설치", spec: "표준 규격", unit: "개", laborType: "통신내선공", laborFactor: 0.07, category: "cable", keywords: ["-직렬단자설치"] },
    { code: "통신 4-3-1", name: "UTP, STP, FTP구내 4P", spec: "표준 규격", unit: "10m", laborType: "통신케이블공", laborFactor: 0.15, category: "cable", keywords: ["utp, stp, ftp구내 4p", "cable", "꼬임", "케이블", "utp"] },
    { code: "통신 4-3-1", name: "UTP 25P", spec: "표준 규격", unit: "10m", laborType: "통신케이블공", laborFactor: 0.24, category: "cable", keywords: ["cable", "꼬임", "케이블", "utp", "utp 25p"] },
    { code: "통신 4-3-1", name: "UTP 50P", spec: "표준 규격", unit: "10m", laborType: "통신케이블공", laborFactor: 0.35, category: "cable", keywords: ["cable", "꼬임", "utp 50p", "케이블", "utp"] },
    { code: "통신 4-3-1", name: "UTP 100P", spec: "표준 규격", unit: "10m", laborType: "통신케이블공", laborFactor: 0.5, category: "cable", keywords: ["cable", "꼬임", "케이블", "utp", "utp 100p"] },
    { code: "통신 4-3-1", name: "UTP 옥외 4P이하", spec: "표준 규격", unit: "10m", laborType: "통신케이블공", laborFactor: 0.05, category: "cable", keywords: ["cable", "꼬임", "케이블", "utp", "utp 옥외 4p이하"] },
    { code: "통신 4-3-1", name: "UTP Thin", spec: "표준 규격", unit: "10m", laborType: "통신케이블공", laborFactor: 0.18, category: "cable", keywords: ["cable", "utp thin", "꼬임", "케이블", "utp"] },
    { code: "통신 4-3-1", name: "UTP Thick", spec: "표준 규격", unit: "10m", laborType: "통신케이블공", laborFactor: 0.32, category: "cable", keywords: ["cable", "꼬임", "케이블", "utp", "utp thick"] },
    { code: "통신 4-3-1", name: "UTP RS-Cable10P 이하", spec: "표준 규격", unit: "10m", laborType: "통신케이블공", laborFactor: 0.18, category: "cable", keywords: ["cable", "꼬임", "utp rs-cable10p 이하", "케이블", "utp"] },
    { code: "통신 4-3-1", name: "UTP 10P 초과", spec: "표준 규격", unit: "10m", laborType: "통신케이블공", laborFactor: 0.23, category: "cable", keywords: ["cable", "꼬임", "utp 10p 초과", "케이블", "utp"] },
    { code: "통신 4-3-1", name: "UTP AUI", spec: "표준 규격", unit: "10m", laborType: "통신케이블공", laborFactor: 0.2, category: "cable", keywords: ["cable", "꼬임", "utp aui", "케이블", "utp"] },
    { code: "통신 4-3-1", name: "Token Cable(2P)", spec: "표준 규격", unit: "10m", laborType: "통신내선공", laborFactor: 0.17, category: "cable", keywords: ["cable", "token cable(2p)", "꼬임", "케이블", "utp"] },
    { code: "통신 4-3-2", name: "RS-232C(10Pin)", spec: "표준 규격", unit: "10개", laborType: "통신내선공", laborFactor: 0.49, category: "cable", keywords: ["rs-232c(10pin)"] },
    { code: "통신 4-3-2", name: "Modular(RJ45-8Pin Plug)", spec: "표준 규격", unit: "10개", laborType: "통신내선공", laborFactor: 0.13, category: "cable", keywords: ["modular(rj45-8pin pl"] },
    { code: "통신 4-3-2", name: "Modular(Outlet)", spec: "표준 규격", unit: "10개", laborType: "통신내선공", laborFactor: 0.28, category: "cable", keywords: ["modular(outlet)"] },
    { code: "통신 4-3-2", name: "TELCO(50Pin)", spec: "표준 규격", unit: "10개", laborType: "통신내선공", laborFactor: 1.19, category: "cable", keywords: ["telco(50pin)"] },
    { code: "통신 4-3-2", name: "Token Ring용 Data Line", spec: "표준 규격", unit: "10개", laborType: "통신내선공", laborFactor: 0.84, category: "cable", keywords: ["token ring용 data lin"] },
    { code: "통신 4-3-3", name: "M D F설 치 23″ Standard (공 철가)", spec: "표준 규격", unit: "열", laborType: "통신설비공", laborFactor: 1.55, category: "cable", keywords: ["m d f설 치 23″ standar"] },
    { code: "통신 4-3-3", name: "M D F설 치 23″ Standard (공 철가)", spec: "표준 규격", unit: "열", laborType: "보통인부", laborFactor: 0.78, category: "cable", keywords: ["m d f설 치 23″ standar"] },
    { code: "통신 4-3-3", name: "Box 설치 Outlet Box (4구이하 노출/매입)", spec: "표준 규격", unit: "개", laborType: "통신내선공", laborFactor: 0.15, category: "cable", keywords: ["box 설치 outlet box (4"] },
    { code: "통신 4-3-3", name: "110 Block설 치 25P 이하", spec: "표준 규격", unit: "세트", laborType: "통신설비공", laborFactor: 0.11, category: "cable", keywords: ["110 block설 치 25p 이하"] },
    { code: "통신 4-3-3", name: "110 Block설 치 25P 이하", spec: "표준 규격", unit: "세트", laborType: "보통인부", laborFactor: 0.11, category: "cable", keywords: ["110 block설 치 25p 이하"] },
    { code: "통신 4-3-3", name: "50P", spec: "표준 규격", unit: "세트", laborType: "통신설비공", laborFactor: 0.25, category: "cable", keywords: ["50p"] },
    { code: "통신 4-3-3", name: "50P", spec: "표준 규격", unit: "세트", laborType: "보통인부", laborFactor: 0.13, category: "cable", keywords: ["50p"] },
    { code: "통신 4-3-3", name: "100P", spec: "표준 규격", unit: "세트", laborType: "통신설비공", laborFactor: 0.31, category: "cable", keywords: ["100p"] },
    { code: "통신 4-3-3", name: "100P", spec: "표준 규격", unit: "세트", laborType: "보통인부", laborFactor: 0.17, category: "cable", keywords: ["100p"] },
    { code: "통신 4-3-3", name: "300P", spec: "표준 규격", unit: "세트", laborType: "통신설비공", laborFactor: 0.43, category: "cable", keywords: ["300p"] },
    { code: "통신 4-3-3", name: "300P", spec: "표준 규격", unit: "세트", laborType: "보통인부", laborFactor: 0.24, category: "cable", keywords: ["300p"] },
    { code: "통신 4-3-3", name: "19″Rack높이 2.2m미만", spec: "표준 규격", unit: "대", laborType: "통신설비공", laborFactor: 0.48, category: "cable", keywords: ["19″rack높이 2.2m미만"] },
    { code: "통신 4-3-3", name: "높이 2.2m이상", spec: "표준 규격", unit: "대", laborType: "통신설비공", laborFactor: 0.54, category: "cable", keywords: ["높이 2.2m이상"] },
    { code: "통신 4-3-3", name: "이하", spec: "표준 규격", unit: "대", laborType: "통신설비공", laborFactor: 0.07, category: "cable", keywords: ["이하"] },
    { code: "통신 4-3-3", name: "이하", spec: "표준 규격", unit: "대", laborType: "보통인부", laborFactor: 0.0712, category: "cable", keywords: ["이하"] },
    { code: "통신 4-3-3", name: "Patch 및 Line Cord 설치 및 정리", spec: "표준 규격", unit: "10개", laborType: "통신케이블공", laborFactor: 0.4, category: "cable", keywords: ["patch 및 line cord 설치"] },
    { code: "통신 4-3-3", name: "Patch 및 Line Cord 설치 및 정리", spec: "표준 규격", unit: "10개", laborType: "보통인부", laborFactor: 0.54, category: "cable", keywords: ["patch 및 line cord 설치"] },
    { code: "통신 4-3-3", name: "성 단Patch Panel", spec: "표준 규격", unit: "Port", laborType: "통신케이블공", laborFactor: 0.02, category: "cable", keywords: ["성 단patch panel"] },
    { code: "통신 4-3-3", name: "성 단Patch Panel", spec: "표준 규격", unit: "Port", laborType: "보통인부", laborFactor: 0.0211, category: "cable", keywords: ["성 단patch panel"] },
    { code: "통신 4-5-1", name: "통신관련기 사무 선안테나공1. 포장해체 및 점검드럼-0.20-0.25 2. 포설", spec: "표준 규격", unit: "10m", laborType: "보통인부", laborFactor: 3.0, category: "cable", keywords: ["통신관련기 사무 선안테나공1. 포장해"] },
    { code: "통신 4-5-2", name: "커넥터Ø 1/2″", spec: "표준 규격", unit: "개", laborType: "통신내선공", laborFactor: 0.06, category: "cable", keywords: ["커넥터ø 1/2″"] },
    { code: "통신 4-5-2", name: "Ø ⅞″", spec: "표준 규격", unit: "개", laborType: "통신내선공", laborFactor: 0.07, category: "cable", keywords: ["ø ⅞″"] },
    { code: "통신 4-5-2", name: "Ø 1⅝″", spec: "표준 규격", unit: "개", laborType: "통신내선공", laborFactor: 0.09, category: "cable", keywords: ["ø 1⅝″"] },
    { code: "통신 4-5-2", name: "Ø 3⅛″", spec: "표준 규격", unit: "개", laborType: "통신내선공", laborFactor: 0.11, category: "cable", keywords: ["ø 3⅛″"] },
    { code: "통신 4-5-2", name: "Ø 4″", spec: "표준 규격", unit: "개", laborType: "통신내선공", laborFactor: 0.12, category: "cable", keywords: ["ø 4″"] },
    { code: "통신 4-5-2", name: "Ø 5″", spec: "표준 규격", unit: "개", laborType: "통신내선공", laborFactor: 0.13, category: "cable", keywords: ["ø 5″"] },
    { code: "통신 4-5-2", name: "Ø 6″", spec: "표준 규격", unit: "개", laborType: "통신내선공", laborFactor: 0.14, category: "cable", keywords: ["ø 6″"] },
    { code: "통신 4-6-1", name: "㎟이하", spec: "표준 규격", unit: "개", laborType: "통신케이블공", laborFactor: 1.0, category: "cable", keywords: ["㎟이하"] },
    { code: "통신 4-6-2", name: "--- --- --- 800", spec: "표준 규격", unit: "개", laborType: "통신케이블공", laborFactor: 1.0, category: "cable", keywords: ["--- --- --- 800"] },
    { code: "통신 4-6-3", name: "--- --- --- 800", spec: "표준 규격", unit: "개", laborType: "통신케이블공", laborFactor: 1.0, category: "cable", keywords: ["--- --- --- 800"] },
    { code: "통신 4-7-2-1", name: "별 보통접속0.4㎜ 심선접속 0.5㎜", spec: "표준 규격", unit: "개", laborType: "통신케이블공", laborFactor: 0.65, category: "cable", keywords: ["별 보통접속0.4㎜ 심선접속 0.5㎜"] },
    { code: "통신 4-7-2-2", name: "심선접속자(커넥터)에 의한 심선 보통접속0.4㎜ 심선접속 0.5㎜", spec: "표준 규격", unit: "개", laborType: "통신케이블공", laborFactor: 0.65, category: "cable", keywords: ["심선접속자(커넥터)에 의한 심선 보통"] },
    { code: "통신 4-8-1", name: "단 위케이블포 설 FR 케이블2.5㎟×20C 이하", spec: "표준 규격", unit: "10m", laborType: "통신케이블공", laborFactor: 0.19, category: "cable", keywords: ["단 위케이블포 설 fr 케이블2.5㎟"] },
    { code: "통신 4-8-1", name: "멀티비디오 케이블V5-5CFB 이하", spec: "표준 규격", unit: "10m", laborType: "통신케이블공", laborFactor: 0.19, category: "cable", keywords: ["멀티비디오 케이블v5-5cfb 이하"] },
    { code: "통신 4-8-1", name: "Triaxial 케이블12.95㎜ 이하", spec: "표준 규격", unit: "10m", laborType: "통신케이블공", laborFactor: 0.21, category: "cable", keywords: ["triaxial 케이블12.95㎜ 이"] },
    { code: "통신 4-8-1", name: "HDMI케이블-", spec: "표준 규격", unit: "10m", laborType: "통신케이블공", laborFactor: 0.16, category: "cable", keywords: ["hdmi케이블-"] },
    { code: "통신 4-8-1", name: "㎟-4C 이하", spec: "표준 규격", unit: "10m", laborType: "통신케이블공", laborFactor: 0.18, category: "cable", keywords: ["㎟-4c 이하"] },
    { code: "통신 4-8-1", name: "멀티2.0㎟-16C", spec: "표준 규격", unit: "10m", laborType: "통신케이블공", laborFactor: 0.23, category: "cable", keywords: ["멀티2.0㎟-16c"] },
    { code: "통신 4-8-1", name: "마이크 케이블1P", spec: "표준 규격", unit: "10m", laborType: "통신케이블공", laborFactor: 0.23, category: "cable", keywords: ["마이크 케이블1p"] },
    { code: "통신 4-8-1", name: "멀티실드 2P이하", spec: "표준 규격", unit: "10m", laborType: "통신케이블공", laborFactor: 0.24, category: "cable", keywords: ["멀티실드 2p이하"] },
    { code: "통신 4-8-1", name: "멀티실드 4P이하", spec: "표준 규격", unit: "10m", laborType: "통신케이블공", laborFactor: 0.28, category: "cable", keywords: ["멀티실드 4p이하"] },
    { code: "통신 4-8-1", name: "멀티실드 8P이하", spec: "표준 규격", unit: "10m", laborType: "통신케이블공", laborFactor: 0.3, category: "cable", keywords: ["멀티실드 8p이하"] },
    { code: "통신 4-8-1", name: "멀티실드 12P이하", spec: "표준 규격", unit: "10m", laborType: "통신케이블공", laborFactor: 0.32, category: "cable", keywords: ["멀티실드 12p이하"] },
    { code: "통신 4-8-1", name: "멀티실드 24P이하", spec: "표준 규격", unit: "10m", laborType: "통신케이블공", laborFactor: 0.38, category: "cable", keywords: ["멀티실드 24p이하"] },
    { code: "통신 4-8-1", name: "멀티실드 32P이하", spec: "표준 규격", unit: "10m", laborType: "통신케이블공", laborFactor: 0.45, category: "cable", keywords: ["멀티실드 32p이하"] },
    { code: "통신 4-8-1", name: "커넥터접 속Triaxial 커넥터-", spec: "표준 규격", unit: "10개", laborType: "통신내선공", laborFactor: 1.61, category: "cable", keywords: ["커넥터접 속triaxial 커넥터-"] },
    { code: "통신 4-8-1", name: "RCA, Phone, XLR 커넥터-", spec: "표준 규격", unit: "10개", laborType: "통신내선공", laborFactor: 0.17, category: "cable", keywords: ["rca, phone, xlr 커넥터-"] },
    { code: "통신 4-8-1", name: "D-SUB 커넥터15Pin이하", spec: "표준 규격", unit: "10개", laborType: "통신내선공", laborFactor: 0.7, category: "cable", keywords: ["d-sub 커넥터15pin이하"] },
    { code: "통신 4-9-2", name: "연) 10", spec: "표준 규격", unit: "조", laborType: "통신내선공", laborFactor: 0.37, category: "cable", keywords: ["연) 10"] },
    { code: "통신 4-9-2", name: "CRT 이용 선번정리10", spec: "표준 규격", unit: "회선", laborType: "특별인부", laborFactor: 0.07, category: "cable", keywords: ["crt 이용 선번정리10"] },
    { code: "통신 5-3-1", name: "시스템0.94-AceMAP서버4.70-AnyMedia", spec: "표준 규격", unit: "개", laborType: "통신설비공", laborFactor: 4.7, category: "device", keywords: ["시스템0.94-acemap서버4.70"] },
    { code: "통신 6-2-1-2", name: "--종합시험 종합특성시험SYS0.86--타합선구성 타합선 구성 및 시험(2W)", spec: "표준 규격", unit: "개소", laborType: "통신설비공", laborFactor: 0.5, category: "device", keywords: ["--종합시험 종합특성시험sys0.86"] },
    { code: "통신 6-2-2", name: "H/W시험사입력전원 측정", spec: "표준 규격", unit: "대", laborType: "광케이블설치사", laborFactor: 0.23, category: "device", keywords: ["h/w시험사입력전원 측정"] },
    { code: "통신 6-2-2", name: "-경보시험(PDP)", spec: "표준 규격", unit: "대", laborType: "광케이블설치사", laborFactor: 0.21, category: "device", keywords: ["-경보시험(pdp)"] },
    { code: "통신 6-2-3", name: "H/W시험사입력전원 측정", spec: "표준 규격", unit: "대", laborType: "광케이블설치사", laborFactor: 0.23, category: "device", keywords: ["h/w시험사입력전원 측정"] },
    { code: "통신 6-2-3", name: "-경보시험(PDP)", spec: "표준 규격", unit: "대", laborType: "광케이블설치사", laborFactor: 0.21, category: "device", keywords: ["-경보시험(pdp)"] },
    { code: "통신 6-2-4", name: "H/W시험사입력전원 측정", spec: "표준 규격", unit: "대", laborType: "광케이블설치사", laborFactor: 0.23, category: "device", keywords: ["h/w시험사입력전원 측정"] },
    { code: "통신 6-2-4", name: "-경보시험(PDP)", spec: "표준 규격", unit: "대", laborType: "광케이블설치사", laborFactor: 0.21, category: "device", keywords: ["-경보시험(pdp)"] },
    { code: "통신 6-2-4", name: "EMS 기능시험시스템0.75-종합시험", spec: "표준 규격", unit: "대", laborType: "광케이블설치사", laborFactor: 0.83, category: "device", keywords: ["ems 기능시험시스템0.75-종합시험"] },
    { code: "통신 6-3-1", name: "정 셀프0.17 NAS DS1 신호비트에러 및 지터시험GRP0.09 CEPT DS1 신호비", spec: "표준 규격", unit: "개", laborType: "통신설비공", laborFactor: 0.09, category: "device", keywords: ["정 셀프0.17 nas ds1 신호비"] },
    { code: "통신 6-3-1", name: "NAS DS1 신호의 루프백시험", spec: "표준 규격", unit: "개", laborType: "통신설비공", laborFactor: 0.1, category: "device", keywords: ["nas ds1 신호의 루프백시험"] },
    { code: "통신 6-3-1", name: "CEPT DS1 신호의 루프백시험", spec: "표준 규격", unit: "개", laborType: "통신설비공", laborFactor: 0.1, category: "device", keywords: ["cept ds1 신호의 루프백시험"] },
    { code: "통신 6-3-1", name: "절체기능시험", spec: "표준 규격", unit: "개", laborType: "통신설비공", laborFactor: 0.11, category: "device", keywords: ["절체기능시험"] },
    { code: "통신 6-3-1", name: "성능감시 및 경보시험", spec: "표준 규격", unit: "개", laborType: "통신설비공", laborFactor: 0.27, category: "device", keywords: ["성능감시 및 경보시험"] },
    { code: "통신 6-3-1", name: "신호형태시험", spec: "표준 규격", unit: "개", laborType: "통신설비공", laborFactor: 0.12, category: "device", keywords: ["신호형태시험"] },
    { code: "통신 6-3-4", name: "통신관련기 사통신관련산업기사통신관련기 능 사입력전원측정랙-0.08-경보시험PDP-0.46-", spec: "표준 규격", unit: "대", laborType: "보통인부", laborFactor: 0.41, category: "device", keywords: ["통신관련기 사통신관련산업기사통신관련기"] },
    { code: "통신 6-3-4", name: "-광전송특성시험", spec: "표준 규격", unit: "회선", laborType: "통신설비공", laborFactor: 0.4, category: "device", keywords: ["-광전송특성시험"] },
    { code: "통신 6-3-4", name: "0.35시 험시스템의 절체기능시험SYS-0.24-EMS자체 셋업 및 DSLAM현재상태 확인", spec: "표준 규격", unit: "대", laborType: "보통인부", laborFactor: 0.71, category: "device", keywords: ["0.35시 험시스템의 절체기능시험sy"] },
    { code: "통신 6-3-4", name: "국ADSL 라인속도 측정", spec: "표준 규격", unit: "회선", laborType: "보통인부", laborFactor: 0.02, category: "device", keywords: ["국adsl 라인속도 측정"] },
    { code: "통신 6-3-7", name: "H/W시 험사S/W시 험사통신관 련산업기 사광 전송부 분입력전원 시험", spec: "표준 규격", unit: "대", laborType: "광케이블설치사", laborFactor: 0.23, category: "device", keywords: ["h/w시 험사s/w시 험사통신관 련산"] },
    { code: "통신 6-3-7", name: "---경보시험(PDP)", spec: "표준 규격", unit: "대", laborType: "광케이블설치사", laborFactor: 0.21, category: "device", keywords: ["---경보시험(pdp)"] },
    { code: "통신 6-3-7", name: "1.50--P-to-P부 분시스템 셋업 및 현재상태 확인시험", spec: "표준 규격", unit: "대", laborType: "광케이블설치사", laborFactor: 0.72, category: "device", keywords: ["1.50--p-to-p부 분시스템 셋"] },
    { code: "통신 6-3-7", name: "---광전송 특성시험", spec: "표준 규격", unit: "대", laborType: "광케이블설치사", laborFactor: 0.41, category: "device", keywords: ["---광전송 특성시험"] },
    { code: "통신 6-3-7", name: "--0.36DS1급 전기적 특성시험", spec: "표준 규격", unit: "대", laborType: "광케이블설치사", laborFactor: 0.82, category: "device", keywords: ["--0.36ds1급 전기적 특성시험"] },
    { code: "통신 6-3-7", name: "국시험", spec: "표준 규격", unit: "대", laborType: "광케이블설치사", laborFactor: 0.25, category: "device", keywords: ["국시험"] },
    { code: "통신 7-1-5", name: "-내부결선 및 기타결선", spec: "표준 규격", unit: "개", laborType: "통신설비공", laborFactor: 0.3, category: "device", keywords: ["-내부결선 및 기타결선"] },
    { code: "통신 7-1-5", name: "별설비 특성시험", spec: "표준 규격", unit: "개", laborType: "통신설비공", laborFactor: 0.68, category: "device", keywords: ["별설비 특성시험"] },
    { code: "통신 7-1-5", name: "--송수신상태 및 동작확인", spec: "표준 규격", unit: "개", laborType: "통신설비공", laborFactor: 2.01, category: "device", keywords: ["--송수신상태 및 동작확인"] },
    { code: "통신 7-1-5", name: "--장비 이원화 여부 확인", spec: "표준 규격", unit: "개", laborType: "통신설비공", laborFactor: 1.72, category: "device", keywords: ["--장비 이원화 여부 확인"] },
    { code: "통신 7-1-5", name: "--장비설정 상태 확인", spec: "표준 규격", unit: "개", laborType: "통신설비공", laborFactor: 1.2, category: "device", keywords: ["--장비설정 상태 확인"] },
    { code: "통신 7-1-5", name: "--접지상태 및 케이블 결선상태 확인", spec: "표준 규격", unit: "개", laborType: "통신설비공", laborFactor: 0.41, category: "device", keywords: ["--접지상태 및 케이블 결선상태 확인"] },
    { code: "통신 7-1-5", name: "국 종 합 시 험", spec: "표준 규격", unit: "개", laborType: "통신설비공", laborFactor: 4.12, category: "device", keywords: ["국 종 합 시 험"] },
    { code: "통신 7-4-4", name: "-0.26수신안테나기-0.57-0.66-안테나 폴", spec: "표준 규격", unit: "개", laborType: "보통인부", laborFactor: 0.1, category: "device", keywords: ["-0.26수신안테나기-0.57-0.6"] },
    { code: "통신 7-4-5-2", name: "시 험", spec: "표준 규격", unit: "개", laborType: "통신설비공", laborFactor: 0.19, category: "device", keywords: ["시 험"] },
    { code: "통신 7-5-3-1", name: "당 송전전공 0.08인 가산. ④ 턴바클 삽입, 해설 ③항과 동일. ⑤ 급전선 설치자재로 ", spec: "표준 규격", unit: "공정", laborType: "통신외선공", laborFactor: 3.0, category: "device", keywords: ["당 송전전공 0.08인 가산. ④ 턴"] },
    { code: "통신 7-5-3-1", name: ", 4, 5, 6항의 용접공 품셈 삭제. ⑥", spec: "표준 규격", unit: "공정", laborType: "통신외선공", laborFactor: 1.0, category: "device", keywords: [", 4, 5, 6항의 용접공 품셈 삭"] },
    { code: "통신 7-5-7", name: "셋톱박스 설 치", spec: "표준 규격", unit: "개", laborType: "통신설비공", laborFactor: 0.1, category: "device", keywords: ["셋톱박스 설 치"] },
    { code: "통신 7-7-1-1", name: "(BOX)-0.40-0.40 2.인양설치", spec: "표준 규격", unit: "10m", laborType: "보통인부", laborFactor: 3.0, category: "device", keywords: ["(box)-0.40-0.40 2.인양"] },
    { code: "통신 7-7-1-1", name: "공기압력시험 및 점검식-5.408.00- 4.최종특성측정", spec: "표준 규격", unit: "10m", laborType: "통신외선공", laborFactor: 4.2, category: "device", keywords: ["공기압력시험 및 점검식-5.408.0"] },
    { code: "통신 7-7-1-1", name: "(BOX)-0.30-0.35 2.인양설치", spec: "표준 규격", unit: "10m", laborType: "보통인부", laborFactor: 3.0, category: "device", keywords: ["(box)-0.30-0.35 2.인양"] },
    { code: "통신 7-7-1-1", name: "공기압력시험 및 점검식-2.706.00- 4.최종특성측정", spec: "표준 규격", unit: "10m", laborType: "통신외선공", laborFactor: 4.0, category: "device", keywords: ["공기압력시험 및 점검식-2.706.0"] },
    { code: "통신 7-7-1-2", name: "3.공기압력시험 및 점검식-1.203.50-Air Type 적 용 4.최종특성측정", spec: "표준 규격", unit: "개", laborType: "통신외선공", laborFactor: 3.0, category: "device", keywords: ["3.공기압력시험 및 점검식-1.203"] },
    { code: "통신 2-4-2", name: "품셈의 1구간당 설치 품셈으로 계상. ⑨", spec: "표준 규격", unit: "공정", laborType: "통신외선공", laborFactor: 3.0, category: "pipe", keywords: ["품셈의 1구간당 설치 품셈으로 계상."] },
    { code: "통신 2-4-2", name: "설치 품셈 포함. ⑨", spec: "표준 규격", unit: "공정", laborType: "보통인부", laborFactor: 3.0, category: "pipe", keywords: ["설치 품셈 포함. ⑨"] },
    { code: "통신 2-4-2", name: "항의 임피던스 측정은 1공사 구간당 품셈. ⑩ 급전선 자재로 동관을 사용할시 1.5인, 용", spec: "표준 규격", unit: "공정", laborType: "보통인부", laborFactor: 1.0, category: "pipe", keywords: ["항의 임피던스 측정은 1공사 구간당 "] },
    { code: "통신 7-7-4", name: "립7. 공기압력시험 및 점검 상 자", spec: "표준 규격", unit: "10m", laborType: "통신설비공", laborFactor: 1.0, category: "device", keywords: ["립7. 공기압력시험 및 점검 상 자"] },
    { code: "통신 7-9-1-1", name: "유지보수 기능시험", spec: "표준 규격", unit: "개", laborType: "통신설비공", laborFactor: 4.93, category: "device", keywords: ["유지보수 기능시험"] },
    { code: "통신 7-9-1-2", name: "통신관련산업기사무 선안테나공장 비 설 치", spec: "표준 규격", unit: "대", laborType: "통신케이블공", laborFactor: 0.59, category: "device", keywords: ["통신관련산업기사무 선안테나공장 비 설"] },
    { code: "통신 7-9-2", name: "0.18--0 . 18 시 험특성시험", spec: "표준 규격", unit: "개", laborType: "통신케이블공", laborFactor: 2.16, category: "device", keywords: ["0.18--0 . 18 시 험특성시험"] },
    { code: "통신 7-9-2", name: "-1.85--기능시험", spec: "표준 규격", unit: "개", laborType: "통신케이블공", laborFactor: 0.85, category: "device", keywords: ["-1.85--기능시험"] },
    { code: "통신 7-9-2", name: "--0.40 -연동시험", spec: "표준 규격", unit: "개", laborType: "통신케이블공", laborFactor: 1.58, category: "device", keywords: ["--0.40 -연동시험"] },
    { code: "통신 7-9-2", name: "--0.60 -호시험", spec: "표준 규격", unit: "개", laborType: "통신케이블공", laborFactor: 1.35, category: "device", keywords: ["--0.60 -호시험"] },
    { code: "통신 7-9-2", name: "---정류기설 치10A 이하", spec: "표준 규격", unit: "대", laborType: "통신케이블공", laborFactor: 0.12, category: "device", keywords: ["---정류기설 치10a 이하"] },
    { code: "통신 7-9-2", name: "0.12---20A 이하", spec: "표준 규격", unit: "대", laborType: "통신케이블공", laborFactor: 0.14, category: "device", keywords: ["0.12---20a 이하"] },
    { code: "통신 7-9-3", name: "(W : 가로, D : 세로, H : 높이)통신관련산업기사무 선안테나공H/W시 험 사중계기", spec: "표준 규격", unit: "대", laborType: "통신내선공", laborFactor: 0.62, category: "device", keywords: ["(w : 가로, d : 세로, h :"] },
    { code: "통신 7-9-3", name: "--0.31(W+D)×2=1,000㎜이하,H=500㎜이하,무게25㎏이하", spec: "표준 규격", unit: "대", laborType: "통신내선공", laborFactor: 0.75, category: "device", keywords: ["--0.31(w+d)×2=1,000㎜"] },
    { code: "통신 7-9-3", name: "--0.37(W+D)×2=1,200㎜이하,H=1,000㎜이하,무게50㎏이하", spec: "표준 규격", unit: "대", laborType: "통신내선공", laborFactor: 0.87, category: "device", keywords: ["--0.37(w+d)×2=1,200㎜"] },
    { code: "통신 7-9-3", name: "--0.43(W+D)×2=1,200㎜초과,H=1,000㎜초과,무게50㎏초과", spec: "표준 규격", unit: "대", laborType: "통신내선공", laborFactor: 0.99, category: "device", keywords: ["--0.43(w+d)×2=1,200㎜"] },
    { code: "통신 7-9-3", name: "--0.49시험 -", spec: "표준 규격", unit: "대", laborType: "통신설비공", laborFactor: 1.22, category: "device", keywords: ["--0.49시험 -"] },
    { code: "통신 7-9-3", name: "-1.18-OMNI안테나설치 - 기-0.17-0.17--인 터 넷품질시험시험 -", spec: "표준 규격", unit: "대", laborType: "통신설비공", laborFactor: 0.06, category: "device", keywords: ["-1.18-omni안테나설치 - 기-"] },
    { code: "통신 7-9-5", name: "0.25-0.25 종합시험", spec: "표준 규격", unit: "대", laborType: "통신설비공", laborFactor: 0.33, category: "device", keywords: ["0.25-0.25 종합시험"] },
    { code: "통신 7-9-5", name: "-- 종합시험", spec: "표준 규격", unit: "대", laborType: "통신설비공", laborFactor: 0.16, category: "device", keywords: ["-- 종합시험"] },
    { code: "통신 7-10-1", name: "단 위통신관련기 사통 신 관 련산 업 기 사S/W 시험사단말장치 설치", spec: "표준 규격", unit: "대", laborType: "보통인부", laborFactor: 0.41, category: "device", keywords: ["단 위통신관련기 사통 신 관 련산 업"] },
    { code: "통신 7-10-1", name: "정)", spec: "표준 규격", unit: "대", laborType: "통신설비공", laborFactor: 2.0, category: "device", keywords: ["정)"] },
    { code: "통신 7-11-4", name: "무선 스피커", spec: "표준 규격", unit: "대", laborType: "특별인부", laborFactor: 0.05, category: "device", keywords: ["무선 스피커"] },
    { code: "통신 7-11-4", name: "-안테나기0.660.47-안테나 Pole", spec: "표준 규격", unit: "대", laborType: "특별인부", laborFactor: 0.1, category: "device", keywords: ["-안테나기0.660.47-안테나 po"] },
    { code: "통신 7-11-5", name: "통신관련산업기사 내장공건축목공플랜 트 기계설 치 공Jack Panel8포트 이하", spec: "표준 규격", unit: "개", laborType: "통신설비공", laborFactor: 0.63, category: "device", keywords: ["통신관련산업기사 내장공건축목공플랜 트"] },
    { code: "통신 7-11-5", name: "-0.400.11전 동-", spec: "표준 규격", unit: "개", laborType: "보통인부", laborFactor: 0.8, category: "device", keywords: ["-0.400.11전 동-"] },
    { code: "통신 7-11-5", name: "-7.004.00Speaker고 정5W이하", spec: "표준 규격", unit: "개", laborType: "보통인부", laborFactor: 0.21, category: "device", keywords: ["-7.004.00speaker고 정5"] },
    { code: "통신 7-11-5", name: "----“30W이하", spec: "표준 규격", unit: "개", laborType: "보통인부", laborFactor: 0.32, category: "device", keywords: ["----“30w이하"] },
    { code: "통신 7-11-5", name: "-0.23전 동 상황판구동부120인치이하", spec: "표준 규격", unit: "개", laborType: "통신설비공", laborFactor: 1.99, category: "device", keywords: ["-0.23전 동 상황판구동부120인치"] },
    { code: "통신 7-11-5", name: "절기(ATT)-", spec: "표준 규격", unit: "대", laborType: "보통인부", laborFactor: 0.16, category: "device", keywords: ["절기(att)-"] },
    { code: "통신 7-12-3-1", name: "옥외형 분배기(분기기)설치S-MATV 시험통신관련산업기사 2분배기(1분기기)", spec: "표준 규격", unit: "개", laborType: "보통인부", laborFactor: 3.0, category: "device", keywords: ["옥외형 분배기(분기기)설치s-matv"] },
    { code: "통신 7-12-3-2", name: "옥내형 분배기(분기기)설치2분배기(1분기기)", spec: "표준 규격", unit: "개", laborType: "보통인부", laborFactor: 3.0, category: "device", keywords: ["옥내형 분배기(분기기)설치2분배기(1"] },
    { code: "통신 7-13-5", name: "종합시험Audio 특성시험(Mono 방식)", spec: "표준 규격", unit: "개", laborType: "통신설비공", laborFactor: 0.08, category: "device", keywords: ["종합시험audio 특성시험(mono "] },
    { code: "통신 7-13-7", name: "다이플렉서 휠터(CATV용 19″Rack타입)", spec: "표준 규격", unit: "개", laborType: "통신내선공", laborFactor: 0.52, category: "device", keywords: ["다이플렉서 휠터(catv용 19″ra"] },
    { code: "통신 7-13-7", name: "0.20종단저항(75Ω)", spec: "표준 규격", unit: "개", laborType: "통신내선공", laborFactor: 0.02, category: "device", keywords: ["0.20종단저항(75ω)"] },
    { code: "통신 7-13-9", name: "별특 성시 험 광원 파장 시험SYS0.47-0.47-- 광송신 출력 측정", spec: "표준 규격", unit: "개", laborType: "통신설비공", laborFactor: 0.33, category: "device", keywords: ["별특 성시 험 광원 파장 시험sys0"] },
    { code: "통신 7-13-9", name: "0.33-- 광수신 감도 측정", spec: "표준 규격", unit: "개", laborType: "통신설비공", laborFactor: 0.33, category: "device", keywords: ["0.33-- 광수신 감도 측정"] },
    { code: "통신 7-13-9", name: "--공 통시 험 상태감시 시험", spec: "표준 규격", unit: "개", laborType: "통신설비공", laborFactor: 0.15, category: "device", keywords: ["--공 통시 험 상태감시 시험"] },
    { code: "통신 7-13-9", name: "0.15-- 전송로 특성시험", spec: "표준 규격", unit: "개", laborType: "통신설비공", laborFactor: 0.25, category: "device", keywords: ["0.15-- 전송로 특성시험"] },
    { code: "통신 8-1-1", name: "통 신관련기사통신관련산업기사S/W시험사H/W시험사광전변환장치", spec: "표준 규격", unit: "대", laborType: "광케이블설치사", laborFactor: 0.07, category: "device", keywords: ["통 신관련기사통신관련산업기사s/w시험"] },
    { code: "통신 8-1-1", name: "0.14-0.14- PC용 LAN S/W install(Config & Test)", spec: "표준 규격", unit: "대", laborType: "통신설비공", laborFactor: 0.1, category: "device", keywords: ["0.14-0.14- pc용 lan s"] },
    { code: "통신 8-1-1", name: "0.16-0.26- S/W Install", spec: "표준 규격", unit: "대", laborType: "보통인부", laborFactor: 0.26, category: "device", keywords: ["0.16-0.26- s/w insta"] },
    { code: "통신 8-1-6", name: "IP 전화기", spec: "표준 규격", unit: "대", laborType: "통신설비공", laborFactor: 0.15, category: "device", keywords: ["ip 전화기"] },
    { code: "통신 8-1-6", name: "키폰 전화기", spec: "표준 규격", unit: "대", laborType: "통신설비공", laborFactor: 0.1, category: "device", keywords: ["키폰 전화기"] },
    { code: "통신 8-2-1-1", name: "-IP 입력 및 기기 Setting", spec: "표준 규격", unit: "대", laborType: "통신설비공", laborFactor: 0.1, category: "device", keywords: ["-ip 입력 및 기기 setting"] },
    { code: "통신 8-2-1-2", name: "-IP 입력 및 기기 Setting", spec: "표준 규격", unit: "대", laborType: "통신설비공", laborFactor: 0.06, category: "device", keywords: ["-ip 입력 및 기기 setting"] },
    { code: "통신 8-2-1-3", name: "통신관련산업기사S/W시험사무선 Home PAD 설치식-0.050.05-IP 입력 및 기기 ", spec: "표준 규격", unit: "대", laborType: "통신설비공", laborFactor: 0.1, category: "device", keywords: ["통신관련산업기사s/w시험사무선 hom"] },
    { code: "통신 8-2-1-3", name: "--Configuration 작업", spec: "표준 규격", unit: "대", laborType: "통신설비공", laborFactor: 0.06, category: "device", keywords: ["--configuration 작업"] },
    { code: "통신 8-2-1-8", name: "경비실기 설치식-0.050.05IP 입력 및 기기 세팅세", spec: "표준 규격", unit: "대", laborType: "통신설비공", laborFactor: 0.1, category: "device", keywords: ["경비실기 설치식-0.050.05ip "] },
    { code: "통신 8-2-2-3", name: "화장실용 비상콜 설치식 0.14시 험(Test)세", spec: "표준 규격", unit: "대", laborType: "통신설비공", laborFactor: 0.04, category: "device", keywords: ["화장실용 비상콜 설치식 0.14시 험"] },
    { code: "통신 8-2-2-4", name: "스피커 설치", spec: "표준 규격", unit: "개", laborType: "통신설비공", laborFactor: 0.13, category: "device", keywords: ["스피커 설치"] },
    { code: "통신 8-2-2-4", name: "시 험(Test)세", spec: "표준 규격", unit: "대", laborType: "통신설비공", laborFactor: 0.03, category: "device", keywords: ["시 험(test)세"] },
    { code: "통신 8-2-2-5", name: "스피커 Outlet 설치", spec: "표준 규격", unit: "개", laborType: "통신설비공", laborFactor: 0.15, category: "device", keywords: ["스피커 outlet 설치"] },
    { code: "통신 8-2-2-6", name: "비디오폰 설치", spec: "표준 규격", unit: "대", laborType: "통신설비공", laborFactor: 0.25, category: "device", keywords: ["비디오폰 설치"] },
    { code: "통신 8-3-2", name: "0.210.18전 광 판", spec: "표준 규격", unit: "대", laborType: "통신설비공", laborFactor: 0.17, category: "device", keywords: ["0.210.18전 광 판"] },
    { code: "통신 8-4-3", name: "S/W시험사장비설치", spec: "표준 규격", unit: "대", laborType: "통신설비공", laborFactor: 1.67, category: "device", keywords: ["s/w시험사장비설치"] },
    { code: "통신 8-4-5", name: "통신관련산업기사H/W시험사S/W시험사통합검침장치", spec: "표준 규격", unit: "대", laborType: "통신설비공", laborFactor: 0.37, category: "device", keywords: ["통신관련산업기사h/w시험사s/w시험사"] },
    { code: "통신 8-4-5", name: "집선장치(데이터전송장치)", spec: "표준 규격", unit: "대", laborType: "통신설비공", laborFactor: 0.4, category: "device", keywords: ["집선장치(데이터전송장치)"] },
    { code: "통신 8-4-6", name: "-시험불포함", spec: "표준 규격", unit: "개", laborType: "통신설비공", laborFactor: 0.05, category: "device", keywords: ["-시험불포함"] },
    { code: "통신 8-4-6", name: "-시험불포함(현장작업)", spec: "표준 규격", unit: "개", laborType: "통신설비공", laborFactor: 0.04, category: "device", keywords: ["-시험불포함(현장작업)"] },
    { code: "통신 8-4-6", name: "--시험불포함(창고작업)10", spec: "표준 규격", unit: "대", laborType: "통신설비공", laborFactor: 0.06, category: "device", keywords: ["--시험불포함(창고작업)10"] },
    { code: "통신 8-4-6", name: "-무선외장형시험불포함", spec: "표준 규격", unit: "대", laborType: "통신설비공", laborFactor: 0.05, category: "device", keywords: ["-무선외장형시험불포함"] },
    { code: "통신 8-4-6", name: "-무선내장형시험불포함", spec: "표준 규격", unit: "대", laborType: "통신설비공", laborFactor: 0.04, category: "device", keywords: ["-무선내장형시험불포함"] },
    { code: "통신 8-4-6", name: "0.38-인입용(접촉식/비접촉식)", spec: "표준 규격", unit: "대", laborType: "통신설비공", laborFactor: 0.2, category: "device", keywords: ["0.38-인입용(접촉식/비접촉식)"] },
    { code: "통신 8-4-6", name: "--서지보호기", spec: "표준 규격", unit: "대", laborType: "통신설비공", laborFactor: 0.1, category: "device", keywords: ["--서지보호기"] },
    { code: "통신 8-4-6", name: "-0.05외장형 모뎀 연결장치", spec: "표준 규격", unit: "대", laborType: "통신설비공", laborFactor: 0.05, category: "device", keywords: ["-0.05외장형 모뎀 연결장치"] },
    { code: "통신 8-4-7-2", name: "-3.OS S/WOS 설치", spec: "표준 규격", unit: "개", laborType: "보통인부", laborFactor: 0.2, category: "device", keywords: ["-3.os s/wos 설치"] },
    { code: "통신 8-4-8-5", name: "Pair", spec: "표준 규격", unit: "개", laborType: "통신설비공", laborFactor: 5.0, category: "device", keywords: ["pair"] },
    { code: "통신 8-6-4", name: "구경(구경 50mm 이하)", spec: "표준 규격", unit: "대", laborType: "통신설비공", laborFactor: 0.12, category: "device", keywords: ["구경(구경 50mm 이하)"] },
    { code: "통신 8-6-4", name: "구경(구경 50mm 초과)", spec: "표준 규격", unit: "대", laborType: "통신설비공", laborFactor: 0.27, category: "device", keywords: ["구경(구경 50mm 초과)"] },
    { code: "통신 8-7-2", name: "체 설치", spec: "표준 규격", unit: "대", laborType: "통신설비공", laborFactor: 0.5, category: "device", keywords: ["체 설치"] },
    { code: "통신 8-7-3", name: "S/W시험사통신관련산업기사장비설치수수기", spec: "표준 규격", unit: "대", laborType: "통신설비공", laborFactor: 0.33, category: "device", keywords: ["s/w시험사통신관련산업기사장비설치수수"] },
    { code: "통신 8-7-3", name: "- -기록기", spec: "표준 규격", unit: "대", laborType: "통신설비공", laborFactor: 0.23, category: "device", keywords: ["- -기록기"] },
    { code: "통신 8-7-3", name: "- -표시기", spec: "표준 규격", unit: "대", laborType: "통신설비공", laborFactor: 0.25, category: "device", keywords: ["- -표시기"] },
    { code: "통신 9-1-1", name: "통신관련산업기사S/W시험사H/W시험사루프코일설치4각, 8각", spec: "표준 규격", unit: "개", laborType: "통신케이블공", laborFactor: 0.34, category: "device", keywords: ["통신관련산업기사s/w시험사h/w시험사"] },
    { code: "통신 9-1-1", name: "0.340.340.3432각", spec: "표준 규격", unit: "개", laborType: "통신케이블공", laborFactor: 0.75, category: "device", keywords: ["0.340.340.3432각"] },
    { code: "통신 9-1-1", name: "0.750.750.75원 형", spec: "표준 규격", unit: "개", laborType: "통신케이블공", laborFactor: 0.4, category: "device", keywords: ["0.750.750.75원 형"] },
    { code: "통신 9-1-1", name: "0.400.400.40촬상부카메라 설치", spec: "표준 규격", unit: "대", laborType: "통신케이블공", laborFactor: 0.7, category: "device", keywords: ["0.400.400.40촬상부카메라 설"] },
    { code: "통신 9-1-1", name: "-0.400.40검지기 점검 및 시험", spec: "표준 규격", unit: "대", laborType: "통신케이블공", laborFactor: 0.38, category: "device", keywords: ["-0.400.40검지기 점검 및 시험"] },
    { code: "통신 9-1-1", name: "-0.400.40검지기 점검 및 시험", spec: "표준 규격", unit: "대", laborType: "보통인부", laborFactor: 0.38, category: "device", keywords: ["-0.400.40검지기 점검 및 시험"] },
    { code: "통신 9-1-1", name: "---제어부 시험", spec: "표준 규격", unit: "대", laborType: "통신케이블공", laborFactor: 0.53, category: "device", keywords: ["---제어부 시험"] },
    { code: "통신 9-1-1", name: "---제어부 시험", spec: "표준 규격", unit: "대", laborType: "보통인부", laborFactor: 0.53, category: "device", keywords: ["---제어부 시험"] },
    { code: "통신 9-1-3", name: "통신관련산업기사S/W시험사H/W시험사무 선안테나공노변기지국(RSE) 안테나부설 치", spec: "표준 규격", unit: "대", laborType: "통신설비공", laborFactor: 0.61, category: "device", keywords: ["통신관련산업기사s/w시험사h/w시험사"] },
    { code: "통신 9-1-3", name: "-0.360.360.36시험지향성", spec: "표준 규격", unit: "대", laborType: "통신설비공", laborFactor: 0.16, category: "device", keywords: ["-0.360.360.36시험지향성"] },
    { code: "통신 9-1-3", name: "0.16---무지향성", spec: "표준 규격", unit: "개", laborType: "통신설비공", laborFactor: 0.54, category: "device", keywords: ["0.16---무지향성"] },
    { code: "통신 9-1-3", name: "0.54---제어부분전함", spec: "표준 규격", unit: "개", laborType: "통신설비공", laborFactor: 0.34, category: "device", keywords: ["0.54---제어부분전함"] },
    { code: "통신 9-1-3", name: "---차량단말기(OBE/CNS/통합형)설 치----0.200.20-시 험-0.12-0.12", spec: "표준 규격", unit: "대", laborType: "통신설비공", laborFactor: 0.45, category: "device", keywords: ["---차량단말기(obe/cns/통합형"] },
    { code: "통신 9-1-3", name: "0.45---무지향성", spec: "표준 규격", unit: "대", laborType: "통신설비공", laborFactor: 0.81, category: "device", keywords: ["0.45---무지향성"] },
    { code: "통신 9-1-4", name: "통 신 관 련산 업 기 사S/W시험사H/W시험사가 변 표 지 판 설 치문형식", spec: "표준 규격", unit: "대", laborType: "통신케이블공", laborFactor: 0.66, category: "device", keywords: ["통 신 관 련산 업 기 사s/w시험사"] },
    { code: "통신 9-1-4", name: "-0.661.32측주식", spec: "표준 규격", unit: "대", laborType: "통신케이블공", laborFactor: 0.4, category: "device", keywords: ["-0.661.32측주식"] },
    { code: "통신 9-1-4", name: "-0.400.80LCS 표 지 판 설 치", spec: "표준 규격", unit: "대", laborType: "통신케이블공", laborFactor: 0.12, category: "device", keywords: ["-0.400.80lcs 표 지 판 설"] },
    { code: "통신 9-1-4", name: "-0.400.40제어기", spec: "표준 규격", unit: "대", laborType: "보통인부", laborFactor: 0.4, category: "device", keywords: ["-0.400.40제어기"] },
    { code: "통신 9-1-4", name: "-0.20-전 원 원격 제 어장 치", spec: "표준 규격", unit: "세트", laborType: "통신케이블공", laborFactor: 0.43, category: "device", keywords: ["-0.20-전 원 원격 제 어장 치"] },
    { code: "통신 9-1-4", name: "--시험현장시험", spec: "표준 규격", unit: "세트", laborType: "통신케이블공", laborFactor: 0.15, category: "device", keywords: ["--시험현장시험"] },
    { code: "통신 9-1-4", name: "--시험현장시험", spec: "표준 규격", unit: "세트", laborType: "보통인부", laborFactor: 0.15, category: "device", keywords: ["--시험현장시험"] },
    { code: "통신 9-1-4", name: "---종합시험", spec: "표준 규격", unit: "세트", laborType: "통신케이블공", laborFactor: 2.0, category: "device", keywords: ["---종합시험"] },
    { code: "통신 9-1-4", name: "---종합시험", spec: "표준 규격", unit: "세트", laborType: "보통인부", laborFactor: 2.0, category: "device", keywords: ["---종합시험"] },
    { code: "통신 9-1-5", name: "신호등주(철주) 신설Ø250 x 8m이하기0.96--0.69 보행등주(철주) 신설Ø125 ", spec: "표준 규격", unit: "개", laborType: "통신외선공", laborFactor: 0.58, category: "device", keywords: ["신호등주(철주) 신설ø250 x 8m"] },
    { code: "통신 9-1-5", name: "신호등주(철주) 신설Ø250 x 8m이하기0.96--0.69 보행등주(철주) 신설Ø125 ", spec: "표준 규격", unit: "개", laborType: "보통인부", laborFactor: 0.41, category: "device", keywords: ["신호등주(철주) 신설ø250 x 8m"] },
    { code: "통신 9-1-5", name: "Ø125 x", spec: "표준 규격", unit: "개", laborType: "통신외선공", laborFactor: 0.46, category: "device", keywords: ["ø125 x"] },
    { code: "통신 9-1-5", name: "Ø125 x", spec: "표준 규격", unit: "개", laborType: "보통인부", laborFactor: 0.32, category: "device", keywords: ["ø125 x"] },
    { code: "통신 9-1-5", name: "전선관 배관Ø50㎜이하", spec: "표준 규격", unit: "10m", laborType: "통신외선공", laborFactor: 0.12, category: "device", keywords: ["배관", "배선", "전선관 배관ø50㎜이하", "pvc", "관로", "pipe"] },
    { code: "통신 9-1-5", name: "전선관 배관Ø50㎜이하", spec: "표준 규격", unit: "10m", laborType: "보통인부", laborFactor: 0.29, category: "device", keywords: ["배관", "배선", "전선관 배관ø50㎜이하", "pvc", "관로", "pipe"] },
    { code: "통신 9-1-5", name: "Ø100㎜이하", spec: "표준 규격", unit: "10m", laborType: "통신외선공", laborFactor: 0.18, category: "device", keywords: ["ø100㎜이하"] },
    { code: "통신 9-1-5", name: "Ø100㎜이하", spec: "표준 규격", unit: "10m", laborType: "보통인부", laborFactor: 0.57, category: "device", keywords: ["ø100㎜이하"] },
    { code: "통신 9-1-5", name: "신호케이블 포설2.0㎟ x 5C", spec: "표준 규격", unit: "10m", laborType: "통신케이블공", laborFactor: 0.32, category: "device", keywords: ["신호케이블 포설2.0㎟ x 5c"] },
    { code: "통신 9-1-5", name: "5.5㎟ x 7C", spec: "표준 규격", unit: "10m", laborType: "통신케이블공", laborFactor: 0.48, category: "device", keywords: ["5.5㎟ x 7c"] },
    { code: "통신 9-1-5", name: "LED 교통신호등 신설차량등(4색등 이하)", spec: "표준 규격", unit: "개", laborType: "통신설비공", laborFactor: 0.4, category: "device", keywords: ["led 교통신호등 신설차량등(4색등 "] },
    { code: "통신 9-1-5", name: "보행등", spec: "표준 규격", unit: "개", laborType: "통신설비공", laborFactor: 0.29, category: "device", keywords: ["보행등"] },
    { code: "통신 9-1-5", name: "보행잔여시간표시기", spec: "표준 규격", unit: "대", laborType: "통신설비공", laborFactor: 0.3, category: "device", keywords: ["보행잔여시간표시기"] },
    { code: "통신 9-1-5", name: "보행잔여시간표시기", spec: "표준 규격", unit: "대", laborType: "보통인부", laborFactor: 0.2, category: "device", keywords: ["보행잔여시간표시기"] },
    { code: "통신 9-1-5", name: "시각장애인용 음향신호기", spec: "표준 규격", unit: "대", laborType: "통신설비공", laborFactor: 0.3, category: "device", keywords: ["시각장애인용 음향신호기"] },
    { code: "통신 9-1-5", name: "시각장애인용 음향신호기", spec: "표준 규격", unit: "대", laborType: "보통인부", laborFactor: 0.2, category: "device", keywords: ["시각장애인용 음향신호기"] },
    { code: "통신 9-1-5", name: "차광막 설치-", spec: "표준 규격", unit: "개", laborType: "통신설비공", laborFactor: 0.6, category: "device", keywords: ["차광막 설치-"] },
    { code: "통신 9-1-5", name: "차광막 설치-", spec: "표준 규격", unit: "개", laborType: "보통인부", laborFactor: 0.6, category: "device", keywords: ["차광막 설치-"] },
    { code: "통신 9-1-7", name: "통신관련산업기사S/W시험사H/W시험사찰 상 부카메라 설치", spec: "표준 규격", unit: "대", laborType: "통신케이블공", laborFactor: 0.7, category: "device", keywords: ["통신관련산업기사s/w시험사h/w시험사"] },
    { code: "통신 9-1-7", name: "0.12-0.12온습도 센서", spec: "표준 규격", unit: "대", laborType: "통신내선공", laborFactor: 0.06, category: "device", keywords: ["0.12-0.12온습도 센서"] },
    { code: "통신 9-1-7", name: "0.06-0.06Amp 설치식----0.12-0.12제어부 시험", spec: "표준 규격", unit: "대", laborType: "통신케이블공", laborFactor: 0.53, category: "device", keywords: ["0.06-0.06amp 설치식----"] },
    { code: "통신 9-1-7", name: "0.06-0.06Amp 설치식----0.12-0.12제어부 시험", spec: "표준 규격", unit: "대", laborType: "통신내선공", laborFactor: 0.53, category: "device", keywords: ["0.06-0.06amp 설치식----"] },
    { code: "통신 9-1-8", name: "통신관련산업기사정류장안내 단말기 설치단말기설치", spec: "표준 규격", unit: "대", laborType: "통신설비공", laborFactor: 0.23, category: "device", keywords: ["통신관련산업기사정류장안내 단말기 설치"] },
    { code: "통신 9-1-8", name: "0.12쉘터 구멍뚫기 및 마감작업", spec: "표준 규격", unit: "대", laborType: "통신설비공", laborFactor: 0.14, category: "device", keywords: ["0.12쉘터 구멍뚫기 및 마감작업"] },
    { code: "통신 9-1-8", name: "0.14정류장안내단말기 시험", spec: "표준 규격", unit: "대", laborType: "통신설비공", laborFactor: 0.17, category: "device", keywords: ["0.14정류장안내단말기 시험"] },
    { code: "통신 9-1-8", name: "시험선로시험", spec: "표준 규격", unit: "대", laborType: "특별인부", laborFactor: 0.2, category: "device", keywords: ["시험선로시험"] },
    { code: "통신 9-1-10", name: "위반단속장비철주“", spec: "표준 규격", unit: "개", laborType: "통신외선공", laborFactor: 1.72, category: "device", keywords: ["위반단속장비철주“"] },
    { code: "통신 9-1-10", name: "위반단속장비철주“", spec: "표준 규격", unit: "개", laborType: "특별인부", laborFactor: 1.72121, category: "device", keywords: ["위반단속장비철주“"] },
    { code: "통신 9-1-10", name: "CCTV(Closed Circuit TV)철주", spec: "표준 규격", unit: "개", laborType: "통신외선공", laborFactor: 3.06, category: "device", keywords: ["cctv(closed circuit "] },
    { code: "통신 9-1-10", name: "CCTV(Closed Circuit TV)철주", spec: "표준 규격", unit: "개", laborType: "특별인부", laborFactor: 2.3068, category: "device", keywords: ["cctv(closed circuit "] },
    { code: "통신 9-1-10", name: "(Arm) 설치6m이하", spec: "표준 규격", unit: "개", laborType: "통신외선공", laborFactor: 0.32, category: "device", keywords: ["(arm) 설치6m이하"] },
    { code: "통신 9-1-10", name: "(Arm) 설치6m이하", spec: "표준 규격", unit: "개", laborType: "특별인부", laborFactor: 0.32, category: "device", keywords: ["(arm) 설치6m이하"] },
    { code: "통신 9-1-10", name: "설치원형", spec: "표준 규격", unit: "개", laborType: "통신외선공", laborFactor: 0.72, category: "device", keywords: ["설치원형"] },
    { code: "통신 9-1-10", name: "설치원형", spec: "표준 규격", unit: "개", laborType: "특별인부", laborFactor: 0.59, category: "device", keywords: ["설치원형"] },
    { code: "통신 9-1-10", name: "-반원형", spec: "표준 규격", unit: "개", laborType: "통신외선공", laborFactor: 0.53, category: "device", keywords: ["-반원형"] },
    { code: "통신 9-1-10", name: "-반원형", spec: "표준 규격", unit: "개", laborType: "특별인부", laborFactor: 0.39, category: "device", keywords: ["-반원형"] },
    { code: "통신 9-1-11", name: "통신관련산업기사제어장치", spec: "표준 규격", unit: "대", laborType: "보통인부", laborFactor: 0.59, category: "device", keywords: ["통신관련산업기사제어장치"] },
    { code: "통신 9-1-11", name: "무선검지기", spec: "표준 규격", unit: "대", laborType: "보통인부", laborFactor: 0.38, category: "device", keywords: ["무선검지기"] },
    { code: "통신 9-1-11", name: "도로안전등", spec: "표준 규격", unit: "대", laborType: "통신설비공", laborFactor: 0.37, category: "device", keywords: ["도로안전등"] },
    { code: "통신 9-1-11", name: "함체설치", spec: "표준 규격", unit: "대", laborType: "통신케이블공", laborFactor: 0.4, category: "device", keywords: ["함체설치"] },
    { code: "통신 9-1-15", name: "-0.75-0.45광센서1회로", spec: "표준 규격", unit: "대", laborType: "통신내선공", laborFactor: 1.23, category: "device", keywords: ["-0.75-0.45광센서1회로"] },
    { code: "통신 9-1-15", name: "-0.75-0.45광센서1회로", spec: "표준 규격", unit: "대", laborType: "보통인부", laborFactor: 0.61, category: "device", keywords: ["-0.75-0.45광센서1회로"] },
    { code: "통신 9-1-15", name: "----2회로", spec: "표준 규격", unit: "세트", laborType: "통신내선공", laborFactor: 1.48, category: "device", keywords: ["----2회로"] },
    { code: "통신 9-1-15", name: "----2회로", spec: "표준 규격", unit: "세트", laborType: "보통인부", laborFactor: 0.73, category: "device", keywords: ["----2회로"] },
    { code: "통신 9-1-15", name: "0.65-0.70시험", spec: "표준 규격", unit: "대", laborType: "통신외선공", laborFactor: 0.2, category: "device", keywords: ["0.65-0.70시험"] },
    { code: "통신 9-1-15", name: "-0.10--영상촬영장치", spec: "표준 규격", unit: "대", laborType: "통신외선공", laborFactor: 1.43, category: "device", keywords: ["-0.10--영상촬영장치"] },
    { code: "통신 9-1-15", name: "-차선제어기설치", spec: "표준 규격", unit: "대", laborType: "통신외선공", laborFactor: 0.4, category: "device", keywords: ["-차선제어기설치"] },
    { code: "통신 9-1-15", name: "---영수증발행기", spec: "표준 규격", unit: "대", laborType: "보통인부", laborFactor: 0.05, category: "device", keywords: ["---영수증발행기"] },
    { code: "통신 9-1-15", name: "-0.20-0.16안테나설치", spec: "표준 규격", unit: "대", laborType: "통신외선공", laborFactor: 0.61, category: "device", keywords: ["-0.20-0.16안테나설치"] },
    { code: "통신 9-1-15", name: "-0.20-0.16안테나설치", spec: "표준 규격", unit: "대", laborType: "특별인부", laborFactor: 0.36, category: "device", keywords: ["-0.20-0.16안테나설치"] },
    { code: "통신 9-1-15", name: "-0.36-0.36시험(IR)", spec: "표준 규격", unit: "대", laborType: "통신내선공", laborFactor: 0.16, category: "device", keywords: ["-0.36-0.36시험(ir)"] },
    { code: "통신 9-1-15", name: "-0.36-0.36시험(IR)", spec: "표준 규격", unit: "대", laborType: "보통인부", laborFactor: 0.16, category: "device", keywords: ["-0.36-0.36시험(ir)"] },
    { code: "통신 9-1-15", name: "----시험(RF)", spec: "표준 규격", unit: "대", laborType: "통신내선공", laborFactor: 0.54, category: "device", keywords: ["----시험(rf)"] },
    { code: "통신 9-1-15", name: "----시험(RF)", spec: "표준 규격", unit: "대", laborType: "보통인부", laborFactor: 0.54, category: "device", keywords: ["----시험(rf)"] },
    { code: "통신 9-1-15", name: "----운전자표시기", spec: "표준 규격", unit: "대", laborType: "보통인부", laborFactor: 0.32, category: "device", keywords: ["----운전자표시기"] },
    { code: "통신 9-1-15", name: "-0.43--갠트리VMS Type", spec: "표준 규격", unit: "대", laborType: "특별인부", laborFactor: 0.56, category: "device", keywords: ["-0.43--갠트리vms type"] },
    { code: "통신 9-1-15", name: "3.60-3.60-Pole Type", spec: "표준 규격", unit: "대", laborType: "특별인부", laborFactor: 0.43, category: "device", keywords: ["3.60-3.60-pole type"] },
    { code: "통신 9-1-15", name: "0.58-0.41-다차로용", spec: "표준 규격", unit: "대", laborType: "특별인부", laborFactor: 1.12, category: "device", keywords: ["0.58-0.41-다차로용"] },
    { code: "통신 9-2-1-1", name: "통신관련산업기사촬상부설 치 카 메 라일 반 형", spec: "표준 규격", unit: "대", laborType: "통신내선공", laborFactor: 0.24, category: "device", keywords: ["통신관련산업기사촬상부설 치 카 메 라"] },
    { code: "통신 9-2-1-1", name: "통신관련산업기사촬상부설 치 카 메 라일 반 형", spec: "표준 규격", unit: "대", laborType: "보통인부", laborFactor: 0.24, category: "device", keywords: ["통신관련산업기사촬상부설 치 카 메 라"] },
    { code: "통신 9-2-1-1", name: "-돔(Dome)형", spec: "표준 규격", unit: "대", laborType: "통신내선공", laborFactor: 0.18, category: "device", keywords: ["-돔(dome)형"] },
    { code: "통신 9-2-1-1", name: "-돔(Dome)형", spec: "표준 규격", unit: "대", laborType: "보통인부", laborFactor: 0.18, category: "device", keywords: ["-돔(dome)형"] },
    { code: "통신 9-2-1-1", name: "-스피드 돔형", spec: "표준 규격", unit: "대", laborType: "통신내선공", laborFactor: 0.32, category: "device", keywords: ["-스피드 돔형"] },
    { code: "통신 9-2-1-1", name: "-스피드 돔형", spec: "표준 규격", unit: "대", laborType: "보통인부", laborFactor: 0.32, category: "device", keywords: ["-스피드 돔형"] },
    { code: "통신 9-2-1-1", name: "-P/T 일체형", spec: "표준 규격", unit: "대", laborType: "통신내선공", laborFactor: 0.32, category: "device", keywords: ["-p/t 일체형"] },
    { code: "통신 9-2-1-1", name: "-P/T 일체형", spec: "표준 규격", unit: "대", laborType: "보통인부", laborFactor: 0.32, category: "device", keywords: ["-p/t 일체형"] },
    { code: "통신 9-2-1-1", name: "-브라켓(Bracket)일반형", spec: "표준 규격", unit: "대", laborType: "통신내선공", laborFactor: 0.23, category: "device", keywords: ["-브라켓(bracket)일반형"] },
    { code: "통신 9-2-1-1", name: "0.23천장형", spec: "표준 규격", unit: "대", laborType: "통신내선공", laborFactor: 0.31, category: "device", keywords: ["0.23천장형"] },
    { code: "통신 9-2-1-1", name: "0.31팬틸트(Pan/Tilt)", spec: "표준 규격", unit: "대", laborType: "특별인부", laborFactor: 0.53, category: "device", keywords: ["0.31팬틸트(pan/tilt)"] },
    { code: "통신 9-2-1-1", name: "안 내 판", spec: "표준 규격", unit: "개", laborType: "통신내선공", laborFactor: 0.09, category: "device", keywords: ["안 내 판"] },
    { code: "통신 9-2-1-1", name: "장치C H 또 는 세 트0.180.18--0.18하드디스크 증설", spec: "표준 규격", unit: "대", laborType: "통신내선공", laborFactor: 0.25, category: "device", keywords: ["장치c h 또 는 세 트0.180.1"] },
    { code: "통신 9-2-1-1", name: "-전송부설 치엔코더", spec: "표준 규격", unit: "대", laborType: "통신내선공", laborFactor: 0.2, category: "device", keywords: ["-전송부설 치엔코더"] },
    { code: "통신 9-2-1-1", name: "0.20디코더", spec: "표준 규격", unit: "대", laborType: "통신내선공", laborFactor: 0.2, category: "device", keywords: ["0.20디코더"] },
];

// 2. Wage Rates (노임 단가 테이블)
const WAGE_RATES = {
    "2023_1": {
        "통신내선공": 251790,
        "통신설비공": 280506,
        "통신외선공": 363102,
        "통신케이블공": 389536,
        "특별인부": 197450,
        "보통인부": 157068,
        "광케이블설치사": 409726
    },
    "2024_1": {
        "통신내선공": 268400,
        "통신설비공": 298100,
        "통신외선공": 387376,
        "통신케이블공": 414944,
        "특별인부": 208500,
        "보통인부": 165545,
        "광케이블설치사": 444142
    },
    "2026_1": {
        "통신내선공": 298500,
        "통신설비공": 332600,
        "통신외선공": 408942,
        "통신케이블공": 436224,
        "특별인부": 234100,
        "보통인부": 172068,
        "광케이블설치사": 471349
    }
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
            score += 12;
        } else {
            // 단어 토큰 분할 매칭
            const tokens = queryName.split(/[\s,._-\u3000]+/);
            const dbTokens = dbName.split(/[\s,._-\u3000]+/);
            
            tokens.forEach(t => {
                if (t.length >= 2) {
                    if (dbName.includes(t)) {
                        score += 4;
                    } else {
                        // Sub-token partial matching (e.g. "구내용" vs "구내")
                        dbTokens.forEach(dbt => {
                            if (dbt.length >= 2 && (t.includes(dbt) || dbt.includes(t))) {
                                score += 2;
                            }
                        });
                    }
                }
            });
        }
        
        // 2. 강한 카테고리 매칭 (핵심 키워드 가속)
        // UTP 케이블 매칭 가중치
        if (queryName.includes("utp") || querySpec.includes("utp")) {
            if (dbName.includes("utp") || dbItem.code.includes("4-3-1")) {
                score += 8;
            }
        }
        
        // 광케이블 매칭 가중치
        if (queryName.includes("광") || queryName.includes("optical") || queryName.includes("fiber")) {
            if (dbName.includes("광섬유") || dbName.includes("광케이블") || dbItem.code.includes("4-1-1")) {
                score += 8;
            }
        }
        
        // 배관/배선 매칭 가중치
        if (queryName.includes("배관") || queryName.includes("배선") || queryName.includes("관로")) {
            if (dbName.includes("배관") || dbName.includes("배선") || dbName.includes("관로") || dbItem.category === "pipe") {
                score += 5;
            }
        }
        
        // 3. 검색 키워드 목록 매칭
        if (dbItem.keywords) {
            dbItem.keywords.forEach(kw => {
                const kwL = kw.toLowerCase();
                if (queryName.includes(kwL) || kwL.includes(queryName)) score += 5;
                if (querySpec.includes(kwL) || kwL.includes(querySpec)) score += 3;
            });
        }
        
        // 4. 규격 매칭 (Pairs or Cores)
        // Extract numbers like 4P, 25P, 4C, 8C and compare
        const queryP = queryName.match(/(\d+)\s*[pc]/) || querySpec.match(/(\d+)\s*[pc]/);
        const dbP = dbName.match(/(\d+)\s*[pc]/) || dbSpec.match(/(\d+)\s*[pc]/);
        if (queryP && dbP && queryP[1] === dbP[1]) {
            score += 6; // Exact pair/core match (e.g. both have 4P or 4C)
        }
        
        return {
            dbItem: dbItem,
            score: score
        };
    })
    .filter(res => res.score > 2) // Filter out very low matches
    .sort((a, b) => b.score - a.score)
    .slice(0, 5)
    .map(res => ({
        ...res.dbItem,
        matchScore: Math.min(100, Math.round((res.score / 18) * 100))
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
        shOpt.getCell("A18").value = "통신외선공 단가"; shOpt.getCell("B18").value = wages["통신외선공"];
        shOpt.getCell("A19").value = "통신케이블공 단가"; shOpt.getCell("B19").value = wages["통신케이블공"];
        shOpt.getCell("A20").value = "보통인부 단가"; shOpt.getCell("B20").value = wages["보통인부"];
        shOpt.getCell("A21").value = "광케이블설치사 단가"; shOpt.getCell("B21").value = wages["광케이블설치사"];
        
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
        shOpt.getCell("B18").numFmt = "₩#,##0";
        shOpt.getCell("B19").numFmt = "₩#,##0";
        shOpt.getCell("B20").numFmt = "₩#,##0";
        shOpt.getCell("B21").numFmt = "₩#,##0";

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
                    else if (item.laborType === "통신외선공") wageCell = "옵션!$B$18";
                    else if (item.laborType === "통신케이블공") wageCell = "옵션!$B$19";
                    else if (item.laborType === "보통인부") wageCell = "옵션!$B$20";
                    else if (item.laborType === "광케이블설치사") wageCell = "옵션!$B$21";
                    
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
