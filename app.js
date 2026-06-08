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
  { code: "통신 1-1-7", name: "폭2.4m [3m]", spec: "", unit: "개", labors: {"특별인부": 0.08}, category: "labor", page: 35, keywords: ["폭2.4m [3m]"] },
  { code: "통신 1-1-7", name: "폭2.4m [6m]", spec: "", unit: "개", labors: {"특별인부": 0.15}, category: "labor", page: 35, keywords: ["폭2.4m [6m]"] },
  { code: "통신 1-1-7", name: "폭2.4m [9m]", spec: "", unit: "개", labors: {"특별인부": 0.11}, category: "labor", page: 35, keywords: ["폭2.4m [9m]"] },
  { code: "통신 1-1-7", name: "폭2.4m [12m]", spec: "", unit: "개", labors: {"특별인부": 0.18}, category: "labor", page: 35, keywords: ["폭2.4m [12m]"] },
  { code: "통신 1-1-7", name: "3.0m [3m]", spec: "", unit: "개", labors: {"특별인부": 0.09}, category: "labor", page: 35, keywords: ["3.0m [3m]"] },
  { code: "통신 1-1-7", name: "3.0m [6m]", spec: "", unit: "개", labors: {"특별인부": 0.17}, category: "labor", page: 35, keywords: ["3.0m [6m]"] },
  { code: "통신 1-1-7", name: "3.0m [9m]", spec: "", unit: "개", labors: {"특별인부": 0.19}, category: "labor", page: 35, keywords: ["3.0m [9m]"] },
  { code: "통신 1-1-7", name: "3.0m [12m]", spec: "", unit: "개", labors: {"특별인부": 0.2}, category: "labor", page: 35, keywords: ["3.0m [12m]"] },
  { code: "통신 1-1-7", name: "3.5m [3m]", spec: "", unit: "개", labors: {"특별인부": 0.13}, category: "labor", page: 35, keywords: ["3.5m [3m]"] },
  { code: "통신 1-1-7", name: "3.5m [6m]", spec: "", unit: "개", labors: {"특별인부": 0.17}, category: "labor", page: 35, keywords: ["3.5m [6m]"] },
  { code: "통신 1-1-7", name: "3.5m [9m]", spec: "", unit: "개", labors: {"특별인부": 0.21}, category: "labor", page: 35, keywords: ["3.5m [9m]"] },
  { code: "통신 1-1-7", name: "3.5m [12m]", spec: "", unit: "개", labors: {"특별인부": 0.25}, category: "labor", page: 35, keywords: ["3.5m [12m]"] },
  { code: "통신 1-1-7", name: "4.8m [3m]", spec: "", unit: "개", labors: {"특별인부": 0.13}, category: "labor", page: 35, keywords: ["4.8m [3m]"] },
  { code: "통신 1-1-7", name: "4.8m [6m]", spec: "", unit: "개", labors: {"특별인부": 0.19}, category: "labor", page: 35, keywords: ["4.8m [6m]"] },
  { code: "통신 1-1-7", name: "4.8m [9m]", spec: "", unit: "개", labors: {"특별인부": 0.24}, category: "labor", page: 35, keywords: ["4.8m [9m]"] },
  { code: "통신 1-1-7", name: "4.8m [12m]", spec: "", unit: "개", labors: {"특별인부": 0.35}, category: "labor", page: 35, keywords: ["4.8m [12m]"] },
  { code: "통신 1-1-7", name: "6.0m [3m]", spec: "", unit: "개", labors: {"특별인부": 0.14}, category: "labor", page: 35, keywords: ["6.0m [3m]"] },
  { code: "통신 1-1-7", name: "6.0m [6m]", spec: "", unit: "개", labors: {"특별인부": 0.2}, category: "labor", page: 35, keywords: ["6.0m [6m]"] },
  { code: "통신 1-1-7", name: "6.0m [9m]", spec: "", unit: "개", labors: {"특별인부": 0.26}, category: "labor", page: 35, keywords: ["6.0m [9m]"] },
  { code: "통신 1-1-7", name: "6.0m [12m]", spec: "", unit: "개", labors: {"특별인부": 0.38}, category: "labor", page: 35, keywords: ["6.0m [12m]"] },
  { code: "통신 1-1-14", name: "콘 크 리 트 전 봇 대 [적상]", spec: "", unit: "기", labors: {"보통인부": 0.38}, category: "labor", page: 42, keywords: ["콘 크 리 트 전 봇 대 [적상]", "노 임"] },
  { code: "통신 1-1-14", name: "콘 크 리 트 전 봇 대 [적하]", spec: "", unit: "기", labors: {"보통인부": 0.25}, category: "labor", page: 42, keywords: ["노 임", "콘 크 리 트 전 봇 대 [적하]"] },
  { code: "통신 1-1-14", name: "애 자 류 [적상]", spec: "", unit: "톤", labors: {"보통인부": 0.21}, category: "labor", page: 42, keywords: ["노 임", "애 자 류 [적상]"] },
  { code: "통신 1-1-14", name: "애 자 류 [적하]", spec: "", unit: "톤", labors: {"보통인부": 0.15}, category: "labor", page: 42, keywords: ["애 자 류 [적하]", "노 임"] },
  { code: "통신 1-1-14", name: "철 재 류 [적상]", spec: "", unit: "톤", labors: {"보통인부": 0.15}, category: "labor", page: 42, keywords: ["철 재 류 [적상]", "노 임"] },
  { code: "통신 1-1-14", name: "철 재 류 [적하]", spec: "", unit: "톤", labors: {"보통인부": 0.12}, category: "labor", page: 42, keywords: ["노 임", "철 재 류 [적하]"] },
  { code: "통신 1-1-14", name: "전 선 류 [적상]", spec: "", unit: "톤", labors: {"보통인부": 0.47}, category: "labor", page: 42, keywords: ["노 임", "전 선 류 [적상]"] },
  { code: "통신 1-1-14", name: "전 선 류 [적하]", spec: "", unit: "톤", labors: {"보통인부": 0.31}, category: "labor", page: 42, keywords: ["노 임", "전 선 류 [적하]"] },
  { code: "통신 1-1-14", name: "시 멘 트 [적상]", spec: "", unit: "톤", labors: {"보통인부": 0.18}, category: "labor", page: 42, keywords: ["시 멘 트 [적상]", "노 임"] },
  { code: "통신 1-1-14", name: "시 멘 트 [적하]", spec: "", unit: "톤", labors: {"보통인부": 0.13}, category: "labor", page: 42, keywords: ["노 임", "시 멘 트 [적하]"] },
  { code: "통신 1-1-22", name: "토 사 류", spec: "2인", unit: "톤", labors: {"보통인부": 0.092}, category: "labor", page: 43, keywords: ["토 사 류", "경운기 운반 및 적상․하 시간 기준", "2인"] },
  { code: "통신 1-1-22", name: "석 재 류", spec: "2인", unit: "톤", labors: {"보통인부": 0.108}, category: "labor", page: 43, keywords: ["경운기 운반 및 적상․하 시간 기준", "2인", "석 재 류"] },
  { code: "통신 1-1-22", name: "애 자 류", spec: "6인", unit: "톤", labors: {"보통인부": 0.31}, category: "labor", page: 43, keywords: ["경운기 운반 및 적상․하 시간 기준", "6인", "애 자 류"] },
  { code: "통신 1-1-22", name: "철재 및 금속부속품", spec: "6인", unit: "톤", labors: {"보통인부": 0.25}, category: "labor", page: 43, keywords: ["경운기 운반 및 적상․하 시간 기준", "철재 및 금속부속품", "6인"] },
  { code: "통신 1-1-22", name: "시 멘 트 류", spec: "6인", unit: "톤", labors: {"보통인부": 0.31}, category: "labor", page: 43, keywords: ["경운기 운반 및 적상․하 시간 기준", "시 멘 트 류", "6인"] },
  { code: "통신 1-1-27-1", name: "교통콘(라바콘)", spec: "", unit: "100m", labors: {"보통인부": 0.15}, category: "labor", page: 46, keywords: ["안전시설", "교통콘(라바콘)"] },
  { code: "통신 1-1-27-1", name: "표지판", spec: "", unit: "개소", labors: {"보통인부": 0.05}, category: "labor", page: 46, keywords: ["표지판", "안전시설"] },
  { code: "통신 1-1-27-1", name: "경광등", spec: "", unit: "개소", labors: {"보통인부": 0.15}, category: "labor", page: 46, keywords: ["경광등", "안전시설"] },
  { code: "통신 1-1-27-1", name: "안전유도로봇", spec: "", unit: "개소", labors: {"보통인부": 0.15}, category: "labor", page: 46, keywords: ["안전유도로봇", "안전시설"] },
  { code: "통신 1-4-5", name: "크레인 (타이어)(톤) (오거장착 별도)", spec: "3", unit: "개", labors: {"보통인부": 1.0}, category: "labor", page: 68, keywords: ["크레인 (타이어)(톤) (오거장착 별도)", "운전경비 산정"] },
  { code: "통신 1-4-5", name: "고소작업차(톤)", spec: "1.2", unit: "개", labors: {"보통인부": 1.0}, category: "labor", page: 68, keywords: ["고소작업차(톤)", "1.2", "운전경비 산정"] },
  { code: "통신 2-1-1", name: "Ø 30㎜ 이 하", spec: "", unit: "본", labors: {"통신외선공": 0.06, "보통인부": 0.17}, category: "pipe", page: 73, keywords: ["ø 30㎜ 이 하", "pvc관"] },
  { code: "통신 2-1-1", name: "Ø 50㎜", spec: "", unit: "본", labors: {"통신외선공": 0.07, "보통인부": 0.18}, category: "pipe", page: 73, keywords: ["ø 50㎜", "pvc관"] },
  { code: "통신 2-1-1", name: "Ø 80㎜", spec: "", unit: "본", labors: {"통신외선공": 0.08, "보통인부": 0.22}, category: "pipe", page: 73, keywords: ["ø 80㎜", "pvc관"] },
  { code: "통신 2-1-1", name: "Ø 100㎜", spec: "", unit: "본", labors: {"통신외선공": 0.1, "보통인부": 0.26}, category: "pipe", page: 73, keywords: ["ø 100㎜", "pvc관"] },
  { code: "통신 2-1-1", name: "Ø 150㎜", spec: "", unit: "본", labors: {"통신외선공": 0.12, "보통인부": 0.32}, category: "pipe", page: 73, keywords: ["pvc관", "ø 150㎜"] },
  { code: "통신 2-1-1", name: "Ø 200㎜ 이 하", spec: "", unit: "본", labors: {"통신외선공": 0.14, "보통인부": 0.38}, category: "pipe", page: 73, keywords: ["ø 200㎜ 이 하", "pvc관"] },
  { code: "통신 2-1-1", name: "Ø 250㎜", spec: "", unit: "본", labors: {"통신외선공": 0.19, "보통인부": 0.51}, category: "pipe", page: 73, keywords: ["ø 250㎜", "pvc관"] },
  { code: "통신 2-1-1", name: "Ø 300㎜", spec: "", unit: "본", labors: {"통신외선공": 0.21, "보통인부": 0.56}, category: "pipe", page: 73, keywords: ["ø 300㎜", "pvc관"] },
  { code: "통신 2-1-2", name: "100㎜", spec: "", unit: "m", labors: {"통신외선공": 0.17, "보통인부": 0.2}, category: "pipe", page: 74, keywords: ["pvc관 절개 및 절단", "100㎜"] },
  { code: "통신 2-1-2", name: "80㎜", spec: "", unit: "m", labors: {"통신외선공": 0.13, "보통인부": 0.16}, category: "pipe", page: 74, keywords: ["80㎜", "pvc관 절개 및 절단"] },
  { code: "통신 2-1-2", name: "50㎜", spec: "", unit: "m", labors: {"통신외선공": 0.08, "보통인부": 0.1}, category: "pipe", page: 74, keywords: ["50㎜", "pvc관 절개 및 절단"] },
  { code: "통신 2-1-3", name: "16㎜ 이 하", spec: "", unit: "개", labors: {"통신외선공": 0.05, "보통인부": 0.12}, category: "pipe", page: 74, keywords: ["16㎜ 이 하", "합성수지관(주름관 포함)"] },
  { code: "통신 2-1-3", name: "30㎜", spec: "", unit: "개", labors: {"통신외선공": 0.07, "보통인부": 0.14}, category: "pipe", page: 74, keywords: ["30㎜", "합성수지관(주름관 포함)"] },
  { code: "통신 2-1-3", name: "50㎜", spec: "", unit: "개", labors: {"통신외선공": 0.12, "보통인부": 0.29}, category: "pipe", page: 74, keywords: ["50㎜", "합성수지관(주름관 포함)"] },
  { code: "통신 2-1-3", name: "80㎜", spec: "", unit: "개", labors: {"통신외선공": 0.15, "보통인부": 0.35}, category: "pipe", page: 74, keywords: ["80㎜", "합성수지관(주름관 포함)"] },
  { code: "통신 2-1-3", name: "100㎜", spec: "", unit: "개", labors: {"통신외선공": 0.18, "보통인부": 0.57}, category: "pipe", page: 74, keywords: ["합성수지관(주름관 포함)", "100㎜"] },
  { code: "통신 2-1-3", name: "125㎜", spec: "", unit: "개", labors: {"통신외선공": 0.25, "보통인부": 0.77}, category: "pipe", page: 74, keywords: ["합성수지관(주름관 포함)", "125㎜"] },
  { code: "통신 2-1-3", name: "150㎜", spec: "", unit: "개", labors: {"통신외선공": 0.3, "보통인부": 0.97}, category: "pipe", page: 74, keywords: ["150㎜", "합성수지관(주름관 포함)"] },
  { code: "통신 2-1-3", name: "175㎜", spec: "", unit: "개", labors: {"통신외선공": 0.36, "보통인부": 1.17}, category: "pipe", page: 74, keywords: ["합성수지관(주름관 포함)", "175㎜"] },
  { code: "통신 2-1-3", name: "200㎜", spec: "", unit: "개", labors: {"통신외선공": 0.41, "보통인부": 1.29}, category: "pipe", page: 74, keywords: ["합성수지관(주름관 포함)", "200㎜"] },
  { code: "통신 2-1-4-1", name: "76.3㎜ 이하", spec: "", unit: "개", labors: {"통신외선공": 0.29, "보통인부": 0.59}, category: "pipe", page: 75, keywords: ["흄관", "76.3㎜ 이하"] },
  { code: "통신 2-1-4-1", name: "114.3㎜ 이하", spec: "", unit: "개", labors: {"통신외선공": 0.41, "보통인부": 0.81}, category: "pipe", page: 75, keywords: ["흄관", "114.3㎜ 이하"] },
  { code: "통신 2-1-4-1", name: "165.2㎜ 이하", spec: "", unit: "개", labors: {"통신외선공": 0.46, "보통인부": 0.92}, category: "pipe", page: 75, keywords: ["흄관", "165.2㎜ 이하"] },
  { code: "통신 2-1-4-1", name: "216.3㎜ 이하", spec: "", unit: "개", labors: {"통신외선공": 0.57, "보통인부": 1.13}, category: "pipe", page: 75, keywords: ["216.3㎜ 이하", "흄관"] },
  { code: "통신 2-1-4-1", name: "267.4㎜ 이하", spec: "", unit: "개", labors: {"통신외선공": 0.76, "보통인부": 1.53}, category: "pipe", page: 75, keywords: ["흄관", "267.4㎜ 이하"] },
  { code: "통신 2-1-4-1", name: "318.5㎜ 이하", spec: "", unit: "개", labors: {"통신외선공": 1.0, "보통인부": 1.99}, category: "pipe", page: 75, keywords: ["흄관", "318.5㎜ 이하"] },
  { code: "통신 2-1-4-1", name: "406.4㎜ 이하", spec: "", unit: "개", labors: {"통신외선공": 1.25, "보통인부": 2.49}, category: "pipe", page: 75, keywords: ["흄관", "406.4㎜ 이하"] },
  { code: "통신 2-1-4-2", name: "76.3㎜ 이 하", spec: "", unit: "개", labors: {"통신외선공": 0.43, "보통인부": 0.87}, category: "pipe", page: 75, keywords: ["반원흄관 및 강관", "76.3㎜ 이 하"] },
  { code: "통신 2-1-4-2", name: "114.3㎜ 이 하", spec: "", unit: "개", labors: {"통신외선공": 0.51, "보통인부": 1.01}, category: "pipe", page: 75, keywords: ["114.3㎜ 이 하", "반원흄관 및 강관"] },
  { code: "통신 2-1-4-2", name: "165.2㎜ 이 하", spec: "", unit: "개", labors: {"통신외선공": 0.63, "보통인부": 1.25}, category: "pipe", page: 75, keywords: ["반원흄관 및 강관", "165.2㎜ 이 하"] },
  { code: "통신 2-1-4-2", name: "216.3㎜ 이 하", spec: "", unit: "개", labors: {"통신외선공": 0.74, "보통인부": 1.48}, category: "pipe", page: 75, keywords: ["반원흄관 및 강관", "216.3㎜ 이 하"] },
  { code: "통신 2-1-4-2", name: "267.4㎜ 이 하", spec: "", unit: "개", labors: {"통신외선공": 1.0, "보통인부": 1.99}, category: "pipe", page: 75, keywords: ["반원흄관 및 강관", "267.4㎜ 이 하"] },
  { code: "통신 2-1-4-2", name: "318.5㎜ 이 하", spec: "", unit: "개", labors: {"통신외선공": 1.1, "보통인부": 2.2}, category: "pipe", page: 75, keywords: ["반원흄관 및 강관", "318.5㎜ 이 하"] },
  { code: "통신 2-1-5", name: "76㎜ 이하", spec: "", unit: "개", labors: {"통신외선공": 0.43, "보통인부": 0.43}, category: "pipe", page: 76, keywords: ["도관전선관", "76㎜ 이하"] },
  { code: "통신 2-1-5", name: "115㎜ 이하", spec: "", unit: "개", labors: {"통신외선공": 0.5, "보통인부": 0.5}, category: "pipe", page: 76, keywords: ["도관전선관", "115㎜ 이하"] },
  { code: "통신 2-1-6", name: "경고표시 테이프", spec: "", unit: "100m", labors: {"보통인부": 0.13}, category: "pipe", page: 76, keywords: ["경고표시 테이프 및 매설표지판", "경고표시 테이프"] },
  { code: "통신 2-1-6", name: "케이블 매설표지판", spec: "", unit: "개", labors: {"보통인부": 0.08}, category: "pipe", page: 76, keywords: ["케이블 매설표지판", "경고표시 테이프 및 매설표지판"] },
  { code: "통신 2-1-7", name: "통신용 관로청소", spec: "", unit: "100m", labors: {"통신외선공": 0.44, "보통인부": 0.6}, category: "pipe", page: 76, keywords: ["통신용 관로 등 청소", "통신용 관로청소"] },
  { code: "통신 2-1-7", name: "․인수공 청 소", spec: "", unit: "기", labors: {"통신외선공": 0.17, "보통인부": 0.17}, category: "pipe", page: 76, keywords: ["․인수공 청 소", "통신용 관로 등 청소"] },
  { code: "통신 2-1-7", name: "토로프 청소", spec: "", unit: "10㎡", labors: {"보통인부": 0.08}, category: "pipe", page: 76, keywords: ["토로프 청소", "통신용 관로 등 청소"] },
  { code: "통신 2-1-8-1", name: "보통토사", spec: "깊이1m미만", unit: "개", labors: {"보통인부": 0.2}, category: "pipe", page: 77, keywords: ["인력 터파기", "보통토사", "깊이1m미만"] },
  { code: "통신 2-1-8-1", name: "보통토사", spec: "1m이상~2m미만", unit: "개", labors: {"보통인부": 0.27}, category: "pipe", page: 77, keywords: ["인력 터파기", "1m이상~2m미만", "보통토사"] },
  { code: "통신 2-1-8-1", name: "보통토사", spec: "2m이상~3m미만", unit: "개", labors: {"보통인부": 0.34}, category: "pipe", page: 77, keywords: ["인력 터파기", "보통토사", "2m이상~3m미만"] },
  { code: "통신 2-1-8-1", name: "경질토사", spec: "깊이1m미만", unit: "개", labors: {"보통인부": 0.26}, category: "pipe", page: 77, keywords: ["인력 터파기", "경질토사", "깊이1m미만"] },
  { code: "통신 2-1-8-1", name: "경질토사", spec: "1m이상~2m미만", unit: "개", labors: {"보통인부": 0.35}, category: "pipe", page: 77, keywords: ["인력 터파기", "1m이상~2m미만", "경질토사"] },
  { code: "통신 2-1-8-1", name: "경질토사", spec: "2m이상~3m미만", unit: "개", labors: {"보통인부": 0.44}, category: "pipe", page: 77, keywords: ["인력 터파기", "경질토사", "2m이상~3m미만"] },
  { code: "통신 2-1-8-1", name: "고사점토 및 자갈 섞인 토사", spec: "깊이1m미만", unit: "개", labors: {"보통인부": 0.32}, category: "pipe", page: 77, keywords: ["인력 터파기", "고사점토 및 자갈 섞인 토사", "깊이1m미만"] },
  { code: "통신 2-1-8-1", name: "고사점토 및 자갈 섞인 토사", spec: "1m이상~2m미만", unit: "개", labors: {"보통인부": 0.43}, category: "pipe", page: 77, keywords: ["인력 터파기", "1m이상~2m미만", "고사점토 및 자갈 섞인 토사"] },
  { code: "통신 2-1-8-1", name: "고사점토 및 자갈 섞인 토사", spec: "2m이상~3m미만", unit: "개", labors: {"보통인부": 0.54}, category: "pipe", page: 77, keywords: ["인력 터파기", "고사점토 및 자갈 섞인 토사", "2m이상~3m미만"] },
  { code: "통신 2-1-8-1", name: "호박돌 섞인토사", spec: "깊이1m미만", unit: "개", labors: {"보통인부": 0.57}, category: "pipe", page: 77, keywords: ["인력 터파기", "호박돌 섞인토사", "깊이1m미만"] },
  { code: "통신 2-1-8-1", name: "호박돌 섞인토사", spec: "1m이상~2m미만", unit: "개", labors: {"보통인부": 0.77}, category: "pipe", page: 77, keywords: ["인력 터파기", "1m이상~2m미만", "호박돌 섞인토사"] },
  { code: "통신 2-1-8-1", name: "호박돌 섞인토사", spec: "2m이상~3m미만", unit: "개", labors: {"보통인부": 0.97}, category: "pipe", page: 77, keywords: ["인력 터파기", "호박돌 섞인토사", "2m이상~3m미만"] },
  { code: "통신 2-1-8-1", name: "연암 및 풍화암", spec: "깊이1m미만", unit: "개", labors: {"특별인부": 1.6}, category: "pipe", page: 77, keywords: ["인력 터파기", "연암 및 풍화암", "깊이1m미만"] },
  { code: "통신 2-1-8-1", name: "연암 및 풍화암", spec: "1m이상~2m미만", unit: "개", labors: {"특별인부": 1.8}, category: "pipe", page: 77, keywords: ["인력 터파기", "1m이상~2m미만", "연암 및 풍화암"] },
  { code: "통신 2-1-8-1", name: "연암 및 풍화암", spec: "2m이상~3m미만", unit: "개", labors: {"특별인부": 2.0}, category: "pipe", page: 77, keywords: ["인력 터파기", "연암 및 풍화암", "2m이상~3m미만"] },
  { code: "통신 2-1-8-1", name: "보통암", spec: "깊이1m미만", unit: "개", labors: {"특별인부": 2.4}, category: "pipe", page: 77, keywords: ["인력 터파기", "보통암", "깊이1m미만"] },
  { code: "통신 2-1-8-1", name: "보통암", spec: "1m이상~2m미만", unit: "개", labors: {"특별인부": 2.6}, category: "pipe", page: 77, keywords: ["인력 터파기", "1m이상~2m미만", "보통암"] },
  { code: "통신 2-1-8-1", name: "보통암", spec: "2m이상~3m미만", unit: "개", labors: {"특별인부": 2.8}, category: "pipe", page: 77, keywords: ["인력 터파기", "보통암", "2m이상~3m미만"] },
  { code: "통신 2-1-8-1", name: "경 암", spec: "깊이1m미만", unit: "개", labors: {"특별인부": 4.4}, category: "pipe", page: 77, keywords: ["인력 터파기", "깊이1m미만", "경 암"] },
  { code: "통신 2-1-8-1", name: "경 암", spec: "1m이상~2m미만", unit: "개", labors: {"특별인부": 6.1}, category: "pipe", page: 77, keywords: ["인력 터파기", "1m이상~2m미만", "경 암"] },
  { code: "통신 2-1-8-1", name: "경 암", spec: "2m이상~3m미만", unit: "개", labors: {"특별인부": 7.8}, category: "pipe", page: 77, keywords: ["인력 터파기", "2m이상~3m미만", "경 암"] },
  { code: "통신 2-1-8-2", name: "풍화암", spec: "공기압축기 7.1㎥/min 페이브멘트브레이커 25㎏급 4대 기준", unit: "개", labors: {"특별인부": 0.33, "보통인부": 0.16}, category: "pipe", page: 78, keywords: ["공기압축기 7.1㎥/min 페이브멘트브레이커 25㎏급 4대 기준", "풍화암", "기계사용 터파기"] },
  { code: "통신 2-1-8-2", name: "연 암", spec: "", unit: "개", labors: {"특별인부": 0.41, "보통인부": 0.21}, category: "pipe", page: 78, keywords: ["연 암", "기계사용 터파기"] },
  { code: "통신 2-1-8-2", name: "보통암", spec: "", unit: "개", labors: {"특별인부": 0.58, "보통인부": 0.29}, category: "pipe", page: 78, keywords: ["보통암", "기계사용 터파기"] },
  { code: "통신 2-1-8-2", name: "경 암", spec: "", unit: "개", labors: {"특별인부": 0.94, "보통인부": 0.48}, category: "pipe", page: 78, keywords: ["기계사용 터파기", "경 암"] },
  { code: "통신 2-1-9", name: "토 사", spec: "15", unit: "㎥", labors: {"보통인부": 0.14}, category: "pipe", page: 78, keywords: ["토 사", "15", "인력 흙 다지기"] },
  { code: "통신 2-1-9", name: "토 사", spec: "30", unit: "㎥", labors: {"보통인부": 0.11}, category: "pipe", page: 78, keywords: ["30", "토 사", "인력 흙 다지기"] },
  { code: "통신 2-1-9", name: "점 토", spec: "15", unit: "㎥", labors: {"보통인부": 0.25}, category: "pipe", page: 78, keywords: ["점 토", "15", "인력 흙 다지기"] },
  { code: "통신 2-1-9", name: "점 토", spec: "30", unit: "㎥", labors: {"보통인부": 0.19}, category: "pipe", page: 78, keywords: ["30", "점 토", "인력 흙 다지기"] },
  { code: "통신 2-2-1-1", name: "내경 70㎜ × 75㎜ 이하", spec: "", unit: "개", labors: {"통신외선공": 0.16, "보통인부": 0.16}, category: "pipe", page: 79, keywords: ["일반용 트로프", "내경 70㎜ × 75㎜ 이하"] },
  { code: "통신 2-2-1-1", name: "90㎜ × 75㎜ 이하", spec: "", unit: "개", labors: {"통신외선공": 0.22, "보통인부": 0.21}, category: "pipe", page: 79, keywords: ["90㎜ × 75㎜ 이하", "일반용 트로프"] },
  { code: "통신 2-2-1-1", name: "120㎜ × 75㎜ 이하", spec: "", unit: "개", labors: {"통신외선공": 0.24, "보통인부": 0.23}, category: "pipe", page: 79, keywords: ["120㎜ × 75㎜ 이하", "일반용 트로프"] },
  { code: "통신 2-2-1-1", name: "150㎜ × 90㎜ 이하", spec: "", unit: "개", labors: {"통신외선공": 0.33, "보통인부": 0.32}, category: "pipe", page: 79, keywords: ["150㎜ × 90㎜ 이하", "일반용 트로프"] },
  { code: "통신 2-2-1-1", name: "150㎜ × 120㎜ 이하", spec: "", unit: "개", labors: {"통신외선공": 0.34, "보통인부": 0.34}, category: "pipe", page: 79, keywords: ["150㎜ × 120㎜ 이하", "일반용 트로프"] },
  { code: "통신 2-2-1-1", name: "150㎜ × 170㎜ 이하", spec: "", unit: "개", labors: {"통신외선공": 0.44, "보통인부": 0.44}, category: "pipe", page: 79, keywords: ["일반용 트로프", "150㎜ × 170㎜ 이하"] },
  { code: "통신 2-2-1-1", name: "200㎜ × 90㎜ 이하", spec: "", unit: "개", labors: {"통신외선공": 0.54, "보통인부": 0.54}, category: "pipe", page: 79, keywords: ["200㎜ × 90㎜ 이하", "일반용 트로프"] },
  { code: "통신 2-2-1-1", name: "200㎜ × 170㎜ 이하", spec: "", unit: "개", labors: {"통신외선공": 0.68, "보통인부": 0.67}, category: "pipe", page: 79, keywords: ["200㎜ × 170㎜ 이하", "일반용 트로프"] },
  { code: "통신 2-2-1-1", name: "270㎜ × 170㎜ 이하", spec: "", unit: "개", labors: {"통신외선공": 0.77, "보통인부": 0.76}, category: "pipe", page: 79, keywords: ["일반용 트로프", "270㎜ × 170㎜ 이하"] },
  { code: "통신 2-2-1-1", name: "290㎜ × 170㎜ 이하", spec: "", unit: "개", labors: {"통신외선공": 0.95, "보통인부": 0.94}, category: "pipe", page: 79, keywords: ["일반용 트로프", "290㎜ × 170㎜ 이하"] },
  { code: "통신 2-2-1-1", name: "300㎜ × 170㎜ 이하", spec: "", unit: "개", labors: {"통신외선공": 0.99, "보통인부": 0.99}, category: "pipe", page: 79, keywords: ["300㎜ × 170㎜ 이하", "일반용 트로프"] },
  { code: "통신 2-2-1-1", name: "400㎜ × 215㎜ 이하", spec: "", unit: "개", labors: {"통신외선공": 1.22, "보통인부": 1.21}, category: "pipe", page: 79, keywords: ["일반용 트로프", "400㎜ × 215㎜ 이하"] },
  { code: "통신 2-2-1-2", name: "외경 740㎜ × 500㎜ 이하", spec: "", unit: "10m", labors: {"통신외선공": 1.45}, category: "pipe", page: 79, keywords: ["고속철도용 트로프", "외경 740㎜ × 500㎜ 이하"] },
  { code: "통신 2-2-1-2", name: "840㎜ × 500㎜", spec: "", unit: "10m", labors: {"통신외선공": 1.93}, category: "pipe", page: 79, keywords: ["고속철도용 트로프", "840㎜ × 500㎜"] },
  { code: "통신 2-2-1-2", name: "530㎜ × 320㎜", spec: "", unit: "10m", labors: {"통신외선공": 0.27}, category: "pipe", page: 79, keywords: ["고속철도용 트로프", "530㎜ × 320㎜"] },
  { code: "통신 2-2-1-2", name: "400㎜ × 290㎜", spec: "", unit: "10m", labors: {"통신외선공": 0.24}, category: "pipe", page: 79, keywords: ["고속철도용 트로프", "400㎜ × 290㎜"] },
  { code: "통신 2-2-1-2", name: "320㎜ × 250㎜", spec: "", unit: "10m", labors: {"통신외선공": 0.23}, category: "pipe", page: 79, keywords: ["고속철도용 트로프", "320㎜ × 250㎜"] },
  { code: "통신 2-2-1-2", name: "115㎜ × 290㎜", spec: "", unit: "10m", labors: {"통신외선공": 0.21}, category: "pipe", page: 79, keywords: ["고속철도용 트로프", "115㎜ × 290㎜"] },
  { code: "통신 2-2-1-3", name: "트로프 뚜 껑 (폭) [들어내기]", spec: "70㎜", unit: "100m", labors: {"통신케이블공": 0.3}, category: "pipe", page: 80, keywords: ["70㎜", "콘크리트 트로프 들어내기 및 닫기", "트로프 뚜 껑 (폭) [들어내기]"] },
  { code: "통신 2-2-1-3", name: "트로프 뚜 껑 (폭) [닫기]", spec: "70㎜", unit: "100m", labors: {"통신케이블공": 0.29}, category: "pipe", page: 80, keywords: ["70㎜", "콘크리트 트로프 들어내기 및 닫기", "트로프 뚜 껑 (폭) [닫기]"] },
  { code: "통신 2-2-2", name: "내경 70㎜ × 75㎜ 이하", spec: "", unit: "개", labors: {"통신외선공": 0.11, "보통인부": 0.11}, category: "pipe", page: 80, keywords: ["합성수지(파스콘) 트로프", "내경 70㎜ × 75㎜ 이하"] },
  { code: "통신 2-2-2", name: "120㎜ × 75㎜ 이하", spec: "", unit: "개", labors: {"통신외선공": 0.17, "보통인부": 0.17}, category: "pipe", page: 80, keywords: ["합성수지(파스콘) 트로프", "120㎜ × 75㎜ 이하"] },
  { code: "통신 2-2-2", name: "150㎜ × 90㎜ 이하", spec: "", unit: "개", labors: {"통신외선공": 0.22, "보통인부": 0.22}, category: "pipe", page: 80, keywords: ["합성수지(파스콘) 트로프", "150㎜ × 90㎜ 이하"] },
  { code: "통신 2-2-2", name: "150㎜ × 120㎜ 이하", spec: "", unit: "개", labors: {"통신외선공": 0.24, "보통인부": 0.24}, category: "pipe", page: 80, keywords: ["150㎜ × 120㎜ 이하", "합성수지(파스콘) 트로프"] },
  { code: "통신 2-2-2", name: "200㎜ × 90㎜ 이하", spec: "", unit: "개", labors: {"통신외선공": 0.3, "보통인부": 0.3}, category: "pipe", page: 80, keywords: ["합성수지(파스콘) 트로프", "200㎜ × 90㎜ 이하"] },
  { code: "통신 2-2-2", name: "200㎜ × 170㎜ 이하", spec: "", unit: "개", labors: {"통신외선공": 0.34, "보통인부": 0.34}, category: "pipe", page: 80, keywords: ["합성수지(파스콘) 트로프", "200㎜ × 170㎜ 이하"] },
  { code: "통신 2-2-2", name: "250㎜ × 170㎜ 이하", spec: "", unit: "개", labors: {"통신외선공": 0.4, "보통인부": 0.4}, category: "pipe", page: 80, keywords: ["합성수지(파스콘) 트로프", "250㎜ × 170㎜ 이하"] },
  { code: "통신 2-2-2", name: "300㎜ × 170㎜ 이하", spec: "", unit: "개", labors: {"통신외선공": 0.48, "보통인부": 0.48}, category: "pipe", page: 80, keywords: ["300㎜ × 170㎜ 이하", "합성수지(파스콘) 트로프"] },
  { code: "통신 2-2-2", name: "325㎜ × 170㎜ 이하", spec: "", unit: "개", labors: {"통신외선공": 0.53, "보통인부": 0.53}, category: "pipe", page: 80, keywords: ["합성수지(파스콘) 트로프", "325㎜ × 170㎜ 이하"] },
  { code: "통신 2-3-1", name: "수공", spec: "950×450×700 이하", unit: "60", labors: {"통신외선공": 0.03, "특별인부": 0.07, "보통인부": 0.43}, category: "pipe", page: 81, keywords: ["조립식 인․수공", "수공", "950×450×700 이하"] },
  { code: "통신 2-3-1", name: "(Hand Hole)", spec: "1,700×800×1,100 이하", unit: "-", labors: {"통신외선공": 0.04, "특별인부": 0.09, "보통인부": 0.67}, category: "pipe", page: 81, keywords: ["조립식 인․수공", "(hand hole)", "1,700×800×1,100 이하"] },
  { code: "통신 2-3-1", name: "인공", spec: "2,000×1,000×1,700 이하", unit: "-", labors: {"통신외선공": 0.04, "특별인부": 0.09, "보통인부": 0.67}, category: "pipe", page: 81, keywords: ["인공", "조립식 인․수공", "2,000×1,000×1,700 이하"] },
  { code: "통신 2-3-1", name: "(Man Hole)", spec: "3,200×1,300×1,700 이하", unit: "-", labors: {"통신외선공": 0.07, "특별인부": 0.11, "보통인부": 0.8}, category: "pipe", page: 81, keywords: ["조립식 인․수공", "(man hole)", "3,200×1,300×1,700 이하"] },
  { code: "통신 2-3-2", name: "인공철개 설치", spec: "소형", unit: "기", labors: {"통신외선공": 0.6, "보통인부": 0.3}, category: "pipe", page: 81, keywords: ["인․수공 철개 및 입상관(오름관)", "인공철개 설치", "소형"] },
  { code: "통신 2-3-2", name: "수공철개 설치", spec: "950㎜×450㎜×700㎜ 이하", unit: "기", labors: {"통신외선공": 0.12, "보통인부": 0.06}, category: "pipe", page: 81, keywords: ["인․수공 철개 및 입상관(오름관)", "950㎜×450㎜×700㎜ 이하", "수공철개 설치"] },
  { code: "통신 2-3-2", name: "입상관(오름관) 설치", spec: "내경 100㎜ 이하", unit: "개소", labors: {"보통인부": 0.3}, category: "pipe", page: 81, keywords: ["인․수공 철개 및 입상관(오름관)", "내경 100㎜ 이하", "입상관(오름관) 설치"] },
  { code: "통신 2-3-3", name: "수공", spec: "950×450×700", unit: "m", labors: {"통신외선공": 0.06}, category: "pipe", page: 82, keywords: ["인․수공케이블 지지철물", "수공", "950×450×700"] },
  { code: "통신 2-3-3", name: "수공", spec: "1,700×800×1,100", unit: "m", labors: {"통신외선공": 0.07}, category: "pipe", page: 82, keywords: ["인․수공케이블 지지철물", "수공", "1,700×800×1,100"] },
  { code: "통신 2-3-3", name: "인공", spec: "2,000×1,000×1,700", unit: "직 선 형", labors: {"통신외선공": 0.06}, category: "pipe", page: 82, keywords: ["인․수공케이블 지지철물", "인공", "2,000×1,000×1,700"] },
  { code: "통신 2-3-3", name: "인공", spec: "3,200×1,300×1,700", unit: "직 선 형", labors: {"통신외선공": 0.2}, category: "pipe", page: 82, keywords: ["3,200×1,300×1,700", "인공", "인․수공케이블 지지철물"] },
  { code: "통신 2-3-4", name: "공 관 로", spec: "", unit: "개", labors: {"통신케이블공": 0.01, "보통인부": 0.01}, category: "pipe", page: 82, keywords: ["관구마개", "공 관 로"] },
  { code: "통신 2-3-4", name: "케이블수용관로", spec: "", unit: "개", labors: {"통신케이블공": 0.03, "보통인부": 0.03}, category: "pipe", page: 82, keywords: ["케이블수용관로", "관구마개"] },
  { code: "통신 2-4-1", name: "콘크리트 전봇대", spec: "5m 이하", unit: "개", labors: {"통신외선공": 0.65, "보통인부": 0.73}, category: "pipe", page: 83, keywords: ["전봇대 인력 세움", "콘크리트 전봇대", "5m 이하"] },
  { code: "통신 2-4-1", name: "콘크리트 전봇대", spec: "6m", unit: "개", labors: {"통신외선공": 0.72, "보통인부": 0.81}, category: "pipe", page: 83, keywords: ["전봇대 인력 세움", "6m", "콘크리트 전봇대"] },
  { code: "통신 2-4-1", name: "콘크리트 전봇대", spec: "7m", unit: "개", labors: {"통신외선공": 1.23, "보통인부": 1.4}, category: "pipe", page: 83, keywords: ["전봇대 인력 세움", "콘크리트 전봇대", "7m"] },
  { code: "통신 2-4-1", name: "콘크리트 전봇대", spec: "8m", unit: "개", labors: {"통신외선공": 1.66, "보통인부": 1.88}, category: "pipe", page: 83, keywords: ["전봇대 인력 세움", "8m", "콘크리트 전봇대"] },
  { code: "통신 2-4-1", name: "콘크리트 전봇대", spec: "9m", unit: "개", labors: {"통신외선공": 1.68, "보통인부": 2.13}, category: "pipe", page: 83, keywords: ["전봇대 인력 세움", "9m", "콘크리트 전봇대"] },
  { code: "통신 2-4-1", name: "콘크리트 전봇대", spec: "10m", unit: "개", labors: {"통신외선공": 2.01, "보통인부": 2.55}, category: "pipe", page: 83, keywords: ["전봇대 인력 세움", "10m", "콘크리트 전봇대"] },
  { code: "통신 2-4-1", name: "콘크리트 전봇대", spec: "11m", unit: "개", labors: {"통신외선공": 2.5, "보통인부": 2.63}, category: "pipe", page: 83, keywords: ["전봇대 인력 세움", "11m", "콘크리트 전봇대"] },
  { code: "통신 2-4-1", name: "콘크리트 전봇대", spec: "12m", unit: "개", labors: {"통신외선공": 2.86, "보통인부": 3.0}, category: "pipe", page: 83, keywords: ["전봇대 인력 세움", "12m", "콘크리트 전봇대"] },
  { code: "통신 2-4-1", name: "콘크리트 전봇대", spec: "14m", unit: "개", labors: {"통신외선공": 3.6, "보통인부": 4.24}, category: "pipe", page: 83, keywords: ["전봇대 인력 세움", "14m", "콘크리트 전봇대"] },
  { code: "통신 2-4-1", name: "콘크리트 전봇대", spec: "16m", unit: "개", labors: {"통신외선공": 5.1, "보통인부": 5.2}, category: "pipe", page: 83, keywords: ["전봇대 인력 세움", "16m", "콘크리트 전봇대"] },
  { code: "통신 2-4-1", name: "콘크리트 전봇대", spec: "17m", unit: "개", labors: {"통신외선공": 6.5, "보통인부": 6.74}, category: "pipe", page: 83, keywords: ["전봇대 인력 세움", "17m", "콘크리트 전봇대"] },
  { code: "통신 2-4-2", name: "7m이하", spec: "49", unit: "개", labors: {"통신외선공": 0.39, "보통인부": 0.14}, category: "pipe", page: 84, keywords: ["전봇대 기계화 세움", "7m이하", "49"] },
  { code: "통신 2-4-2", name: "8m", spec: "52", unit: "개", labors: {"통신외선공": 0.44, "보통인부": 0.15}, category: "pipe", page: 84, keywords: ["전봇대 기계화 세움", "52", "8m"] },
  { code: "통신 2-4-2", name: "9m", spec: "53", unit: "개", labors: {"통신외선공": 0.45, "보통인부": 0.16}, category: "pipe", page: 84, keywords: ["전봇대 기계화 세움", "53", "9m"] },
  { code: "통신 2-4-2", name: "10m", spec: "57", unit: "개", labors: {"통신외선공": 0.51, "보통인부": 0.18}, category: "pipe", page: 84, keywords: ["57", "전봇대 기계화 세움", "10m"] },
  { code: "통신 2-4-2", name: "11m", spec: "59", unit: "개", labors: {"통신외선공": 0.53, "보통인부": 0.18}, category: "pipe", page: 84, keywords: ["59", "11m", "전봇대 기계화 세움"] },
  { code: "통신 2-4-2", name: "12m", spec: "61", unit: "개", labors: {"통신외선공": 0.54, "보통인부": 0.19}, category: "pipe", page: 84, keywords: ["전봇대 기계화 세움", "12m", "61"] },
  { code: "통신 2-4-2", name: "13m", spec: "64", unit: "개", labors: {"통신외선공": 0.61, "보통인부": 0.2}, category: "pipe", page: 84, keywords: ["64", "전봇대 기계화 세움", "13m"] },
  { code: "통신 2-4-2", name: "14m", spec: "65", unit: "개", labors: {"통신외선공": 0.62, "보통인부": 0.21}, category: "pipe", page: 84, keywords: ["전봇대 기계화 세움", "14m", "65"] },
  { code: "통신 2-4-2", name: "15m", spec: "68", unit: "개", labors: {"통신외선공": 0.64, "보통인부": 0.21}, category: "pipe", page: 84, keywords: ["전봇대 기계화 세움", "15m", "68"] },
  { code: "통신 2-4-2", name: "16m", spec: "72", unit: "개", labors: {"통신외선공": 0.71, "보통인부": 0.23}, category: "pipe", page: 84, keywords: ["전봇대 기계화 세움", "16m", "72"] },
  { code: "통신 2-4-2", name: "17m", spec: "73", unit: "개", labors: {"통신외선공": 0.72, "보통인부": 0.24}, category: "pipe", page: 84, keywords: ["전봇대 기계화 세움", "73", "17m"] },
  { code: "통신 2-4-2", name: "18m", spec: "75", unit: "개", labors: {"통신외선공": 0.74, "보통인부": 0.24}, category: "pipe", page: 84, keywords: ["75", "전봇대 기계화 세움", "18m"] },
  { code: "통신 2-4-3", name: "7m 이 하", spec: "", unit: "기", labors: {"보통인부": 0.2}, category: "pipe", page: 85, keywords: ["7m 이 하", "콘크리트 전봇대 파쇄"] },
  { code: "통신 2-4-3", name: "8m", spec: "", unit: "기", labors: {"보통인부": 0.25}, category: "pipe", page: 85, keywords: ["8m", "콘크리트 전봇대 파쇄"] },
  { code: "통신 2-4-3", name: "9m", spec: "", unit: "기", labors: {"보통인부": 0.3}, category: "pipe", page: 85, keywords: ["9m", "콘크리트 전봇대 파쇄"] },
  { code: "통신 2-4-3", name: "10m 이 상", spec: "", unit: "기", labors: {"보통인부": 0.4}, category: "pipe", page: 85, keywords: ["10m 이 상", "콘크리트 전봇대 파쇄"] },
  { code: "통신 2-4-4", name: "4㎜ 철선", spec: "", unit: "개", labors: {"통신외선공": 0.45, "보통인부": 0.34}, category: "pipe", page: 85, keywords: ["지지선", "4㎜ 철선"] },
  { code: "통신 2-4-4", name: "깊이 (1.2m) 4조 이하", spec: "", unit: "개", labors: {"통신외선공": 0.57, "보통인부": 0.43}, category: "pipe", page: 85, keywords: ["지지선", "깊이 (1.2m) 4조 이하"] },
  { code: "통신 2-4-4", name: "(1.5m) 6조", spec: "", unit: "개", labors: {"통신외선공": 0.75, "보통인부": 0.56}, category: "pipe", page: 85, keywords: ["(1.5m) 6조", "지지선"] },
  { code: "통신 2-4-4", name: "(1.5m) 8조", spec: "", unit: "개", labors: {"통신외선공": 1.11, "보통인부": 0.83}, category: "pipe", page: 85, keywords: ["(1.5m) 8조", "지지선"] },
  { code: "통신 2-4-4", name: "(1.7m) 10조", spec: "", unit: "개", labors: {"통신외선공": 1.54, "보통인부": 1.16}, category: "pipe", page: 85, keywords: ["(1.7m) 10조", "지지선"] },
  { code: "통신 2-4-4", name: "(1.7m) 12조", spec: "", unit: "개", labors: {"통신외선공": 1.9, "보통인부": 1.43}, category: "pipe", page: 85, keywords: ["(1.7m) 12조", "지지선"] },
  { code: "통신 2-4-4", name: "(1.7m) 15조", spec: "", unit: "개", labors: {"통신외선공": 2.35, "보통인부": 1.73}, category: "pipe", page: 85, keywords: ["지지선", "(1.7m) 15조"] },
  { code: "통신 2-4-4", name: "연선", spec: "", unit: "개", labors: {"통신외선공": 0.23, "보통인부": 0.11}, category: "pipe", page: 85, keywords: ["지지선", "연선"] },
  { code: "통신 2-4-4", name: "7/2.3 이하", spec: "", unit: "개", labors: {"통신외선공": 0.3, "보통인부": 0.23}, category: "pipe", page: 85, keywords: ["지지선", "7/2.3 이하"] },
  { code: "통신 2-4-4", name: "7/2.6 ~ 7/2.9", spec: "", unit: "개", labors: {"통신외선공": 0.42, "보통인부": 0.27}, category: "pipe", page: 85, keywords: ["지지선", "7/2.6 ~ 7/2.9"] },
  { code: "통신 2-4-4", name: "7/3.2 ~ 7/4.5", spec: "", unit: "개", labors: {"통신외선공": 0.44, "보통인부": 0.28}, category: "pipe", page: 85, keywords: ["7/3.2 ~ 7/4.5", "지지선"] },
  { code: "통신 2-4-4", name: "7/5.0 “", spec: "", unit: "개", labors: {"통신외선공": 0.44, "보통인부": 0.28}, category: "pipe", page: 85, keywords: ["지지선", "7/5.0 “"] },
  { code: "통신 2-4-5", name: "30㎟ 아연도 강연선", spec: "", unit: "㎞", labors: {"통신외선공": 4.83, "특별인부": 3.22}, category: "pipe", page: 86, keywords: ["30㎟ 아연도 강연선", "조가선"] },
  { code: "통신 2-4-5", name: "38㎟", spec: "", unit: "개", labors: {"통신외선공": 5.22, "특별인부": 3.48}, category: "pipe", page: 86, keywords: ["조가선", "38㎟"] },
  { code: "통신 2-4-5", name: "45㎟", spec: "", unit: "개", labors: {"통신외선공": 5.22, "특별인부": 3.48}, category: "pipe", page: 86, keywords: ["조가선", "45㎟"] },
  { code: "통신 2-4-5", name: "55㎟", spec: "", unit: "개", labors: {"통신외선공": 6.27, "특별인부": 4.18}, category: "pipe", page: 86, keywords: ["55㎟", "조가선"] },
  { code: "통신 2-4-5", name: "70㎟", spec: "", unit: "개", labors: {"통신외선공": 6.63, "특별인부": 4.42}, category: "pipe", page: 86, keywords: ["70㎟", "조가선"] },
  { code: "통신 2-4-5", name: "90㎟", spec: "", unit: "개", labors: {"통신외선공": 9.06, "특별인부": 6.04}, category: "pipe", page: 86, keywords: ["90㎟", "조가선"] },
  { code: "통신 2-4-5", name: "110㎟", spec: "", unit: "개", labors: {"통신외선공": 11.16, "특별인부": 7.44}, category: "pipe", page: 86, keywords: ["조가선", "110㎟"] },
  { code: "통신 2-4-5", name: "Y 선 설 치", spec: "", unit: "개소", labors: {"통신외선공": 1.07}, category: "pipe", page: 86, keywords: ["y 선 설 치", "조가선"] },
  { code: "통신 2-4-5", name: "가 선 심 볼(절 차)", spec: "", unit: "개", labors: {"통신외선공": 2.52}, category: "pipe", page: 86, keywords: ["가 선 심 볼(절 차)", "조가선"] },
  { code: "통신 2-4-5", name: "가선콤파운드(절차)", spec: "", unit: "개", labors: {"통신외선공": 4.66}, category: "pipe", page: 86, keywords: ["조가선", "가선콤파운드(절차)"] },
  { code: "통신 2-4-5", name: "가 선 콤 파 운 드", spec: "", unit: "㎞", labors: {"통신외선공": 21.3}, category: "pipe", page: 86, keywords: ["가 선 콤 파 운 드", "조가선"] },
  { code: "통신 2-4-5", name: "가 선 심 볼", spec: "", unit: "개", labors: {"통신외선공": 14.6}, category: "pipe", page: 86, keywords: ["조가선", "가 선 심 볼"] },
  { code: "통신 2-4-5", name: "프 리 텐 숀", spec: "", unit: "개소", labors: {"통신외선공": 0.58}, category: "pipe", page: 86, keywords: ["조가선", "프 리 텐 숀"] },
  { code: "통신 2-4-5", name: "밴 드", spec: "", unit: "10개", labors: {"통신외선공": 0.58, "특별인부": 0.29}, category: "pipe", page: 86, keywords: ["조가선", "밴 드"] },
  { code: "통신 2-4-5", name: "클 램 프", spec: "", unit: "10개", labors: {"통신외선공": 0.28, "특별인부": 0.1}, category: "pipe", page: 86, keywords: ["조가선", "클 램 프"] },
  { code: "통신 2-4-5", name: "턴 버 클", spec: "", unit: "10개", labors: {"통신외선공": 0.56, "특별인부": 0.28}, category: "pipe", page: 86, keywords: ["조가선", "턴 버 클"] },
  { code: "통신 2-4-5", name: "지 지 용 볼 트", spec: "", unit: "10개", labors: {"통신외선공": 0.84, "특별인부": 0.84}, category: "pipe", page: 86, keywords: ["지 지 용 볼 트", "조가선"] },
  { code: "통신 2-4-6", name: "케이블 행거 설치", spec: "55㎜~105㎜", unit: "m", labors: {"통신케이블공": 1.92, "보통인부": 2.16}, category: "pipe", page: 86, keywords: ["케이블 행거(hanger)", "케이블 행거 설치", "55㎜~105㎜"] },
  { code: "통신 2-4-7", name: "PVC, 광케이블", spec: "", unit: "m", labors: {"통신케이블공": 5.6, "보통인부": 2.8}, category: "pipe", page: 87, keywords: ["케이블 바인딩(binding)", "pvc, 광케이블"] },
  { code: "통신 2-4-8", name: "주의표 또는 번호표", spec: "설치시", unit: "매", labors: {"보통인부": 0.06}, category: "pipe", page: 87, keywords: ["설치시", "전봇대 부대설비", "주의표 또는 번호표"] },
  { code: "통신 2-4-8", name: "차량충돌 예방용 전봇대도색판", spec: "", unit: "매", labors: {"보통인부": 0.15}, category: "pipe", page: 87, keywords: ["전봇대 부대설비", "차량충돌 예방용 전봇대도색판"] },
  { code: "통신 2-4-8", name: "지하매설물 조사", spec: "", unit: "㎥", labors: {"보통인부": 0.43}, category: "pipe", page: 87, keywords: ["전봇대 부대설비", "지하매설물 조사"] },
  { code: "통신 3-1-1", name: "14 [합성수지 전선관]", spec: "-", unit: "-", labors: {"통신내선공": 0.4}, category: "pipe", page: 91, keywords: ["14 [합성수지 전선관]", "구내통신배관"] },
  { code: "통신 3-1-1", name: "16 [합성수지 전선관]", spec: "16", unit: "16", labors: {"통신내선공": 0.5}, category: "pipe", page: 91, keywords: ["16 [합성수지 전선관]", "16", "구내통신배관"] },
  { code: "통신 3-1-1", name: "16 [후강 전선관]", spec: "16", unit: "16", labors: {"통신내선공": 0.8}, category: "pipe", page: 91, keywords: ["16", "16 [후강 전선관]", "구내통신배관"] },
  { code: "통신 3-1-1", name: "16 [금속제가요전선관]", spec: "16", unit: "16", labors: {"통신내선공": 0.44}, category: "pipe", page: 91, keywords: ["16 [금속제가요전선관]", "16", "구내통신배관"] },
  { code: "통신 3-1-1", name: "16 [나사 없는 전선관]", spec: "16", unit: "16", labors: {"통신내선공": 0.5}, category: "pipe", page: 91, keywords: ["16", "16 [나사 없는 전선관]", "구내통신배관"] },
  { code: "통신 3-1-1", name: "16 [박강 전선관]", spec: "16", unit: "16", labors: {"통신내선공": 0.5}, category: "pipe", page: 91, keywords: ["16", "16 [박강 전선관]", "구내통신배관"] },
  { code: "통신 3-1-1", name: "22 [합성수지 전선관]", spec: "22", unit: "22", labors: {"통신내선공": 0.6}, category: "pipe", page: 91, keywords: ["22", "22 [합성수지 전선관]", "구내통신배관"] },
  { code: "통신 3-1-1", name: "22 [후강 전선관]", spec: "22", unit: "22", labors: {"통신내선공": 1.1}, category: "pipe", page: 91, keywords: ["22", "22 [후강 전선관]", "구내통신배관"] },
  { code: "통신 3-1-1", name: "22 [금속제가요전선관]", spec: "22", unit: "22", labors: {"통신내선공": 0.59}, category: "pipe", page: 91, keywords: ["22", "22 [금속제가요전선관]", "구내통신배관"] },
  { code: "통신 3-1-1", name: "22 [나사 없는 전선관]", spec: "22", unit: "22", labors: {"통신내선공": 0.6}, category: "pipe", page: 91, keywords: ["22 [나사 없는 전선관]", "22", "구내통신배관"] },
  { code: "통신 3-1-1", name: "22 [박강 전선관]", spec: "22", unit: "22", labors: {"통신내선공": 0.6}, category: "pipe", page: 91, keywords: ["22 [박강 전선관]", "22", "구내통신배관"] },
  { code: "통신 3-1-1", name: "28 [합성수지 전선관]", spec: "28", unit: "28", labors: {"통신내선공": 0.8}, category: "pipe", page: 91, keywords: ["28", "28 [합성수지 전선관]", "구내통신배관"] },
  { code: "통신 3-1-1", name: "28 [후강 전선관]", spec: "28", unit: "28", labors: {"통신내선공": 1.4}, category: "pipe", page: 91, keywords: ["28 [후강 전선관]", "28", "구내통신배관"] },
  { code: "통신 3-1-1", name: "28 [금속제가요전선관]", spec: "28", unit: "28", labors: {"통신내선공": 0.72}, category: "pipe", page: 91, keywords: ["28 [금속제가요전선관]", "28", "구내통신배관"] },
  { code: "통신 3-1-1", name: "28 [나사 없는 전선관]", spec: "28", unit: "28", labors: {"통신내선공": 0.8}, category: "pipe", page: 91, keywords: ["28 [나사 없는 전선관]", "28", "구내통신배관"] },
  { code: "통신 3-1-1", name: "28 [박강 전선관]", spec: "28", unit: "28", labors: {"통신내선공": 0.8}, category: "pipe", page: 91, keywords: ["28", "28 [박강 전선관]", "구내통신배관"] },
  { code: "통신 3-1-1", name: "36 [합성수지 전선관]", spec: "36", unit: "36", labors: {"통신내선공": 1.0}, category: "pipe", page: 91, keywords: ["구내통신배관", "36 [합성수지 전선관]", "36"] },
  { code: "통신 3-1-1", name: "36 [후강 전선관]", spec: "36", unit: "36", labors: {"통신내선공": 2.0}, category: "pipe", page: 91, keywords: ["구내통신배관", "36 [후강 전선관]", "36"] },
  { code: "통신 3-1-1", name: "36 [금속제가요전선관]", spec: "36", unit: "36", labors: {"통신내선공": 0.87}, category: "pipe", page: 91, keywords: ["36 [금속제가요전선관]", "구내통신배관", "36"] },
  { code: "통신 3-1-1", name: "36 [나사 없는 전선관]", spec: "36", unit: "36", labors: {"통신내선공": 1.0}, category: "pipe", page: 91, keywords: ["36 [나사 없는 전선관]", "구내통신배관", "36"] },
  { code: "통신 3-1-1", name: "36 [박강 전선관]", spec: "36", unit: "36", labors: {"통신내선공": 1.0}, category: "pipe", page: 91, keywords: ["36 [박강 전선관]", "구내통신배관", "36"] },
  { code: "통신 3-1-1", name: "42 [합성수지 전선관]", spec: "42", unit: "42", labors: {"통신내선공": 1.3}, category: "pipe", page: 91, keywords: ["42 [합성수지 전선관]", "42", "구내통신배관"] },
  { code: "통신 3-1-1", name: "42 [후강 전선관]", spec: "42", unit: "42", labors: {"통신내선공": 2.5}, category: "pipe", page: 91, keywords: ["42 [후강 전선관]", "42", "구내통신배관"] },
  { code: "통신 3-1-1", name: "42 [금속제가요전선관]", spec: "42", unit: "42", labors: {"통신내선공": 1.04}, category: "pipe", page: 91, keywords: ["42", "42 [금속제가요전선관]", "구내통신배관"] },
  { code: "통신 3-1-1", name: "42 [나사 없는 전선관]", spec: "42", unit: "42", labors: {"통신내선공": 1.3}, category: "pipe", page: 91, keywords: ["42 [나사 없는 전선관]", "42", "구내통신배관"] },
  { code: "통신 3-1-1", name: "42 [박강 전선관]", spec: "42", unit: "42", labors: {"통신내선공": 1.3}, category: "pipe", page: 91, keywords: ["42 [박강 전선관]", "42", "구내통신배관"] },
  { code: "통신 3-1-1", name: "54 [합성수지 전선관]", spec: "54", unit: "54", labors: {"통신내선공": 1.9}, category: "pipe", page: 91, keywords: ["54", "54 [합성수지 전선관]", "구내통신배관"] },
  { code: "통신 3-1-1", name: "54 [후강 전선관]", spec: "54", unit: "54", labors: {"통신내선공": 3.4}, category: "pipe", page: 91, keywords: ["54 [후강 전선관]", "54", "구내통신배관"] },
  { code: "통신 3-1-1", name: "54 [금속제가요전선관]", spec: "54", unit: "54", labors: {"통신내선공": 1.36}, category: "pipe", page: 91, keywords: ["54", "54 [금속제가요전선관]", "구내통신배관"] },
  { code: "통신 3-1-1", name: "54 [나사 없는 전선관]", spec: "54", unit: "54", labors: {"통신내선공": 1.9}, category: "pipe", page: 91, keywords: ["54", "54 [나사 없는 전선관]", "구내통신배관"] },
  { code: "통신 3-1-1", name: "54 [박강 전선관]", spec: "54", unit: "54", labors: {"통신내선공": 1.9}, category: "pipe", page: 91, keywords: ["54", "54 [박강 전선관]", "구내통신배관"] },
  { code: "통신 3-1-1", name: "70 [합성수지 전선관]", spec: "70", unit: "70", labors: {"통신내선공": 2.8}, category: "pipe", page: 91, keywords: ["70", "70 [합성수지 전선관]", "구내통신배관"] },
  { code: "통신 3-1-1", name: "70 [후강 전선관]", spec: "70", unit: "70", labors: {"통신내선공": 4.4}, category: "pipe", page: 91, keywords: ["70 [후강 전선관]", "70", "구내통신배관"] },
  { code: "통신 3-1-1", name: "70 [금속제가요전선관]", spec: "70", unit: "70", labors: {"통신내선공": 1.56}, category: "pipe", page: 91, keywords: ["70 [금속제가요전선관]", "70", "구내통신배관"] },
  { code: "통신 3-1-1", name: "70 [나사 없는 전선관]", spec: "70", unit: "70", labors: {"통신내선공": 2.8}, category: "pipe", page: 91, keywords: ["70", "70 [나사 없는 전선관]", "구내통신배관"] },
  { code: "통신 3-1-1", name: "70 [박강 전선관]", spec: "70", unit: "70", labors: {"통신내선공": 2.8}, category: "pipe", page: 91, keywords: ["70 [박강 전선관]", "70", "구내통신배관"] },
  { code: "통신 3-1-1", name: "82 [합성수지 전선관]", spec: "82", unit: "82", labors: {"통신내선공": 3.7}, category: "pipe", page: 91, keywords: ["82", "82 [합성수지 전선관]", "구내통신배관"] },
  { code: "통신 3-1-1", name: "82 [후강 전선관]", spec: "82", unit: "82", labors: {"통신내선공": 5.4}, category: "pipe", page: 91, keywords: ["82", "82 [후강 전선관]", "구내통신배관"] },
  { code: "통신 3-1-1", name: "82 [금속제가요전선관]", spec: "82", unit: "82", labors: {"통신내선공": 1.76}, category: "pipe", page: 91, keywords: ["82 [금속제가요전선관]", "82", "구내통신배관"] },
  { code: "통신 3-1-1", name: "92 [합성수지 전선관]", spec: "92", unit: "92", labors: {"통신내선공": 4.5}, category: "pipe", page: 91, keywords: ["92", "92 [합성수지 전선관]", "구내통신배관"] },
  { code: "통신 3-1-1", name: "92 [후강 전선관]", spec: "92", unit: "92", labors: {"통신내선공": 6.0}, category: "pipe", page: 91, keywords: ["92 [후강 전선관]", "92", "구내통신배관"] },
  { code: "통신 3-1-1", name: "92 [금속제가요전선관]", spec: "92", unit: "92", labors: {"통신내선공": 1.96}, category: "pipe", page: 91, keywords: ["92 [금속제가요전선관]", "92", "구내통신배관"] },
  { code: "통신 3-1-1", name: "104 [합성수지 전선관]", spec: "104", unit: "104", labors: {"통신내선공": 4.6}, category: "pipe", page: 91, keywords: ["104 [합성수지 전선관]", "구내통신배관", "104"] },
  { code: "통신 3-1-1", name: "104 [후강 전선관]", spec: "104", unit: "104", labors: {"통신내선공": 7.1}, category: "pipe", page: 91, keywords: ["104 [후강 전선관]", "구내통신배관", "104"] },
  { code: "통신 3-1-1", name: "104 [금속제가요전선관]", spec: "104", unit: "104", labors: {"통신내선공": 2.16}, category: "pipe", page: 91, keywords: ["104 [금속제가요전선관]", "구내통신배관", "104"] },
  { code: "통신 3-1-1", name: "125 [합성수지 전선관]", spec: "-", unit: "-", labors: {"통신내선공": 5.1}, category: "pipe", page: 91, keywords: ["125 [합성수지 전선관]", "구내통신배관"] },
  { code: "통신 3-2-1", name: "Concrete Box", spec: "", unit: "개", labors: {"통신내선공": 0.11}, category: "pipe", page: 93, keywords: ["concrete box", "박스(box), 풀박스(pull-box), 시스템 박스 등"] },
  { code: "통신 3-2-1", name: "Outlet Box", spec: "", unit: "개", labors: {"통신내선공": 0.18}, category: "pipe", page: 93, keywords: ["outlet box", "박스(box), 풀박스(pull-box), 시스템 박스 등"] },
  { code: "통신 3-2-1", name: "Switch Box (3개용이하)", spec: "", unit: "개", labors: {"통신내선공": 0.18}, category: "pipe", page: 93, keywords: ["박스(box), 풀박스(pull-box), 시스템 박스 등", "switch box (3개용이하)"] },
  { code: "통신 3-2-1", name: "Switch Box (4개용이상)", spec: "", unit: "개", labors: {"통신내선공": 0.25}, category: "pipe", page: 93, keywords: ["박스(box), 풀박스(pull-box), 시스템 박스 등", "switch box (4개용이상)"] },
  { code: "통신 3-2-1", name: "연결용 박스", spec: "", unit: "개", labors: {"통신내선공": 0.04}, category: "pipe", page: 93, keywords: ["박스(box), 풀박스(pull-box), 시스템 박스 등", "연결용 박스"] },
  { code: "통신 3-2-1", name: "시스템 박스", spec: "", unit: "개", labors: {"통신내선공": 0.21}, category: "pipe", page: 93, keywords: ["박스(box), 풀박스(pull-box), 시스템 박스 등", "시스템 박스"] },
  { code: "통신 3-2-1", name: "풀박스", spec: "", unit: "개", labors: {"통신내선공": 0.04}, category: "pipe", page: 93, keywords: ["박스(box), 풀박스(pull-box), 시스템 박스 등", "풀박스"] },
  { code: "통신 3-2-1", name: "- 천장면 : 단면적 100 이하(깊이10 이하) ", spec: "", unit: "개", labors: {"통신내선공": 0.22}, category: "pipe", page: 93, keywords: ["박스(box), 풀박스(pull-box), 시스템 박스 등", "- 천장면 : 단면적 100 이하(깊이10 이하) "] },
  { code: "통신 3-2-1", name: "단면적 625 이하(깊이20 이하) ", spec: "", unit: "개", labors: {"통신내선공": 0.3}, category: "pipe", page: 93, keywords: ["박스(box), 풀박스(pull-box), 시스템 박스 등", "단면적 625 이하(깊이20 이하) "] },
  { code: "통신 3-2-1", name: "단면적 900 이하(깊이30 이하) ", spec: "", unit: "개", labors: {"통신내선공": 0.35}, category: "pipe", page: 93, keywords: ["단면적 900 이하(깊이30 이하) ", "박스(box), 풀박스(pull-box), 시스템 박스 등"] },
  { code: "통신 3-2-1", name: "단면적 1,600 이하(깊이30 이하) ", spec: "", unit: "개", labors: {"통신내선공": 0.66}, category: "pipe", page: 93, keywords: ["박스(box), 풀박스(pull-box), 시스템 박스 등", "단면적 1,600 이하(깊이30 이하) "] },
  { code: "통신 3-2-1", name: "단면적 4,900 이하(깊이40 이하) ", spec: "", unit: "개", labors: {"통신내선공": 0.95}, category: "pipe", page: 93, keywords: ["박스(box), 풀박스(pull-box), 시스템 박스 등", "단면적 4,900 이하(깊이40 이하) "] },
  { code: "통신 3-2-1", name: "단면적 10,000 이하(깊이15 이하) ", spec: "", unit: "개", labors: {"통신내선공": 1.3}, category: "pipe", page: 93, keywords: ["단면적 10,000 이하(깊이15 이하) ", "박스(box), 풀박스(pull-box), 시스템 박스 등"] },
  { code: "통신 3-2-1", name: "단면적 14,400 이하(깊이15 이하) ", spec: "", unit: "개", labors: {"통신내선공": 2.5}, category: "pipe", page: 93, keywords: ["단면적 14,400 이하(깊이15 이하) ", "박스(box), 풀박스(pull-box), 시스템 박스 등"] },
  { code: "통신 3-2-1", name: "단면적 22,500 이하(깊이25 이하) ", spec: "", unit: "개", labors: {"통신내선공": 4.7}, category: "pipe", page: 93, keywords: ["단면적 22,500 이하(깊이25 이하) ", "박스(box), 풀박스(pull-box), 시스템 박스 등"] },
  { code: "통신 3-2-1", name: "- 벽 면 : 단면적 100 이하(깊이10 이하) ", spec: "", unit: "개", labors: {"통신내선공": 0.17}, category: "pipe", page: 93, keywords: ["박스(box), 풀박스(pull-box), 시스템 박스 등", "- 벽 면 : 단면적 100 이하(깊이10 이하) "] },
  { code: "통신 3-2-1", name: "단면적 40,000 이하(깊이30 이하) ", spec: "", unit: "개", labors: {"통신내선공": 5.64}, category: "pipe", page: 93, keywords: ["단면적 40,000 이하(깊이30 이하) ", "박스(box), 풀박스(pull-box), 시스템 박스 등"] },
  { code: "통신 3-2-2", name: "박스(Box)", spec: "", unit: "개", labors: {"통신내선공": 0.1}, category: "pipe", page: 94, keywords: ["박스(box)", "박스용 연결접지선(bond earth)"] },
  { code: "통신 3-2-2", name: "후강 전선관 Ø16㎜ ~ 36㎜", spec: "", unit: "개", labors: {"통신내선공": 0.09}, category: "pipe", page: 94, keywords: ["박스용 연결접지선(bond earth)", "후강 전선관 ø16㎜ ~ 36㎜"] },
  { code: "통신 3-2-2", name: "Ø42㎜ ~ 54㎜", spec: "", unit: "개", labors: {"통신내선공": 0.1}, category: "pipe", page: 94, keywords: ["ø42㎜ ~ 54㎜", "박스용 연결접지선(bond earth)"] },
  { code: "통신 3-2-2", name: "Ø70㎜", spec: "", unit: "개", labors: {"통신내선공": 0.13}, category: "pipe", page: 94, keywords: ["ø70㎜", "박스용 연결접지선(bond earth)"] },
  { code: "통신 3-2-2", name: "Ø82㎜", spec: "", unit: "개", labors: {"통신내선공": 0.16}, category: "pipe", page: 94, keywords: ["ø82㎜", "박스용 연결접지선(bond earth)"] },
  { code: "통신 3-2-2", name: "Ø92㎜", spec: "", unit: "개", labors: {"통신내선공": 0.19}, category: "pipe", page: 94, keywords: ["ø92㎜", "박스용 연결접지선(bond earth)"] },
  { code: "통신 3-2-2", name: "Ø104㎜", spec: "", unit: "개", labors: {"통신내선공": 0.23}, category: "pipe", page: 94, keywords: ["ø104㎜", "박스용 연결접지선(bond earth)"] },
  { code: "통신 3-3-1", name: "단자함", spec: "단면적 500 이하(깊이10 이하) ", unit: "개", labors: {"통신내선공": 0.5, "보통인부": 0.5}, category: "pipe", page: 95, keywords: ["단면적 500 이하(깊이10 이하) ", "단자함"] },
  { code: "통신 3-3-1", name: "단자함", spec: "단면적 1800 이하(깊이13 이하) ", unit: "개", labors: {"통신내선공": 0.58, "보통인부": 0.58}, category: "pipe", page: 95, keywords: ["단면적 1800 이하(깊이13 이하) ", "단자함"] },
  { code: "통신 3-3-1", name: "단자함", spec: "단면적 5,250 이하(깊이15 이하) ", unit: "개", labors: {"통신내선공": 0.7, "보통인부": 0.7}, category: "pipe", page: 95, keywords: ["단면적 5,250 이하(깊이15 이하) ", "단자함"] },
  { code: "통신 3-3-1", name: "단자함", spec: "단면적 11,000 이하(깊이15 이하) ", unit: "개", labors: {"통신내선공": 0.86, "보통인부": 0.86}, category: "pipe", page: 95, keywords: ["단면적 11,000 이하(깊이15 이하) ", "단자함"] },
  { code: "통신 3-3-1", name: "단자함", spec: "단면적 18,200 이하(깊이18 이하) ", unit: "개", labors: {"통신내선공": 1.1, "보통인부": 1.1}, category: "pipe", page: 95, keywords: ["단면적 18,200 이하(깊이18 이하) ", "단자함"] },
  { code: "통신 3-3-1", name: "단자함", spec: "단면적 27,200 이하(깊이25 이하) ", unit: "개", labors: {"통신내선공": 2.1, "보통인부": 2.1}, category: "pipe", page: 95, keywords: ["단면적 27,200 이하(깊이25 이하) ", "단자함"] },
  { code: "통신 3-3-2", name: "단 자 함", spec: "15P 이하", unit: "m", labors: {"통신케이블공": 0.34, "보통인부": 0.17}, category: "pipe", page: 95, keywords: ["15p 이하", "배선반", "단 자 함"] },
  { code: "통신 3-3-2", name: "단 자 함", spec: "25P", unit: "m", labors: {"통신케이블공": 0.36, "보통인부": 0.18}, category: "pipe", page: 95, keywords: ["25p", "배선반", "단 자 함"] },
  { code: "통신 3-3-2", name: "단 자 함", spec: "50P", unit: "m", labors: {"통신케이블공": 0.65, "보통인부": 0.45}, category: "pipe", page: 95, keywords: ["배선반", "50p", "단 자 함"] },
  { code: "통신 3-3-2", name: "단 자 함", spec: "100P", unit: "m", labors: {"통신케이블공": 0.69, "보통인부": 0.49}, category: "pipe", page: 95, keywords: ["배선반", "100p", "단 자 함"] },
  { code: "통신 3-3-2", name: "단 자 함", spec: "150P", unit: "m", labors: {"통신케이블공": 0.78, "보통인부": 0.54}, category: "pipe", page: 95, keywords: ["배선반", "150p", "단 자 함"] },
  { code: "통신 3-3-2", name: "단 자 함", spec: "200P", unit: "m", labors: {"통신케이블공": 0.82, "보통인부": 0.59}, category: "pipe", page: 95, keywords: ["200p", "배선반", "단 자 함"] },
  { code: "통신 3-3-2", name: "단 자 함", spec: "250P 이하", unit: "m", labors: {"통신케이블공": 0.89, "보통인부": 0.64}, category: "pipe", page: 95, keywords: ["250p 이하", "배선반", "단 자 함"] },
  { code: "통신 3-3-2", name: "단 자 함", spec: "300P", unit: "m", labors: {"통신케이블공": 0.97, "보통인부": 0.69}, category: "pipe", page: 95, keywords: ["300p", "배선반", "단 자 함"] },
  { code: "통신 3-3-2", name: "단 자 함", spec: "350P", unit: "m", labors: {"통신케이블공": 1.06, "보통인부": 0.74}, category: "pipe", page: 95, keywords: ["배선반", "350p", "단 자 함"] },
  { code: "통신 3-3-2", name: "단 자 함", spec: "400P", unit: "m", labors: {"통신케이블공": 1.15, "보통인부": 0.8}, category: "pipe", page: 95, keywords: ["400p", "배선반", "단 자 함"] },
  { code: "통신 3-3-2", name: "단 자 함", spec: "450P", unit: "m", labors: {"통신케이블공": 1.25, "보통인부": 0.86}, category: "pipe", page: 95, keywords: ["450p", "배선반", "단 자 함"] },
  { code: "통신 3-3-2", name: "단 자 함", spec: "500P", unit: "m", labors: {"통신케이블공": 1.36, "보통인부": 0.93}, category: "pipe", page: 95, keywords: ["500p", "배선반", "단 자 함"] },
  { code: "통신 3-3-2", name: "단 자 함", spec: "600P", unit: "m", labors: {"통신케이블공": 1.61, "보통인부": 1.09}, category: "pipe", page: 95, keywords: ["600p", "배선반", "단 자 함"] },
  { code: "통신 3-3-2", name: "배 선 함", spec: "10P 이하", unit: "m", labors: {"통신케이블공": 0.65, "보통인부": 0.45}, category: "pipe", page: 95, keywords: ["10p 이하", "배선반", "배 선 함"] },
  { code: "통신 3-3-2", name: "배 선 함", spec: "50P", unit: "m", labors: {"통신케이블공": 0.72, "보통인부": 0.45}, category: "pipe", page: 95, keywords: ["배선반", "50p", "배 선 함"] },
  { code: "통신 3-3-2", name: "종말단자", spec: "10P 이하", unit: "m", labors: {"통신케이블공": 0.2, "보통인부": 0.1}, category: "pipe", page: 95, keywords: ["배선반", "10p 이하", "종말단자"] },
  { code: "통신 3-3-2", name: "종말단자", spec: "25P", unit: "m", labors: {"통신케이블공": 0.24, "보통인부": 0.12}, category: "pipe", page: 95, keywords: ["25p", "배선반", "종말단자"] },
  { code: "통신 3-3-2", name: "피뢰탄기반", spec: "100P 이하", unit: "m", labors: {"통신내선공": 0.3}, category: "pipe", page: 95, keywords: ["100p 이하", "피뢰탄기반", "배선반"] },
  { code: "통신 3-4-1", name: "폭 200㎜ 이하", spec: "1.58", unit: "m", labors: {"통신내선공": 2.1}, category: "pipe", page: 97, keywords: ["1.58", "폭 200㎜ 이하", "케이블랙 및 트레이"] },
  { code: "통신 3-4-1", name: "300㎜", spec: "2.00", unit: "m", labors: {"통신내선공": 2.71}, category: "pipe", page: 97, keywords: ["2.00", "케이블랙 및 트레이", "300㎜"] },
  { code: "통신 3-4-1", name: "400㎜", spec: "2.49", unit: "m", labors: {"통신내선공": 3.55}, category: "pipe", page: 97, keywords: ["2.49", "케이블랙 및 트레이", "400㎜"] },
  { code: "통신 3-4-1", name: "500㎜", spec: "3.12", unit: "m", labors: {"통신내선공": 4.21}, category: "pipe", page: 97, keywords: ["500㎜", "케이블랙 및 트레이", "3.12"] },
  { code: "통신 3-4-1", name: "600㎜", spec: "3.64", unit: "m", labors: {"통신내선공": 5.2}, category: "pipe", page: 97, keywords: ["3.64", "600㎜", "케이블랙 및 트레이"] },
  { code: "통신 3-4-1", name: "800㎜", spec: "4.13", unit: "m", labors: {"통신내선공": 5.9}, category: "pipe", page: 97, keywords: ["4.13", "케이블랙 및 트레이", "800㎜"] },
  { code: "통신 3-4-1", name: "1,000㎜", spec: "5.11", unit: "m", labors: {"통신내선공": 7.3}, category: "pipe", page: 97, keywords: ["케이블랙 및 트레이", "1,000㎜", "5.11"] },
  { code: "통신 3-4-2", name: "폭 200㎜ 이하", spec: "1.10", unit: "m", labors: {"통신내선공": 1.5}, category: "pipe", page: 97, keywords: ["조립식 케이블트레이", "1.10", "폭 200㎜ 이하"] },
  { code: "통신 3-4-2", name: "300㎜", spec: "1.40", unit: "m", labors: {"통신내선공": 2.0}, category: "pipe", page: 97, keywords: ["1.40", "조립식 케이블트레이", "300㎜"] },
  { code: "통신 3-4-2", name: "400㎜", spec: "1.80", unit: "m", labors: {"통신내선공": 2.6}, category: "pipe", page: 97, keywords: ["1.80", "조립식 케이블트레이", "400㎜"] },
  { code: "통신 3-4-2", name: "500㎜", spec: "2.10", unit: "m", labors: {"통신내선공": 3.1}, category: "pipe", page: 97, keywords: ["2.10", "500㎜", "조립식 케이블트레이"] },
  { code: "통신 3-4-2", name: "600㎜", spec: "2.90", unit: "m", labors: {"통신내선공": 4.1}, category: "pipe", page: 97, keywords: ["600㎜", "조립식 케이블트레이", "2.90"] },
  { code: "통신 3-4-2", name: "800㎜", spec: "3.20", unit: "m", labors: {"통신내선공": 4.6}, category: "pipe", page: 97, keywords: ["3.20", "조립식 케이블트레이", "800㎜"] },
  { code: "통신 3-4-2", name: "1,000㎜", spec: "4.20", unit: "m", labors: {"통신내선공": 6.1}, category: "pipe", page: 97, keywords: ["조립식 케이블트레이", "1,000㎜", "4.20"] },
  { code: "통신 3-5-1", name: "F4 35 × 41", spec: "", unit: "m", labors: {"통신내선공": 0.6}, category: "pipe", page: 98, keywords: ["플로어덕트", "f4 35 × 41"] },
  { code: "통신 3-5-1", name: "F7 35 × 73", spec: "", unit: "개", labors: {"통신내선공": 0.7}, category: "pipe", page: 98, keywords: ["f7 35 × 73", "플로어덕트"] },
  { code: "통신 3-5-1", name: "F5 25 × 51", spec: "", unit: "개", labors: {"통신내선공": 0.5}, category: "pipe", page: 98, keywords: ["플로어덕트", "f5 25 × 51"] },
  { code: "통신 3-5-1", name: "F6 노스타드 25 × 51", spec: "", unit: "개", labors: {"통신내선공": 0.5}, category: "pipe", page: 98, keywords: ["f6 노스타드 25 × 51", "플로어덕트"] },
  { code: "통신 3-5-1", name: "F6 23 × 60", spec: "", unit: "개", labors: {"통신내선공": 0.6}, category: "pipe", page: 98, keywords: ["f6 23 × 60", "플로어덕트"] },
  { code: "통신 3-5-1", name: "F6 노스타드 25 × 55", spec: "", unit: "개", labors: {"통신내선공": 0.5}, category: "pipe", page: 98, keywords: ["플로어덕트", "f6 노스타드 25 × 55"] },
  { code: "통신 3-5-1", name: "F8 23 × 80", spec: "", unit: "개", labors: {"통신내선공": 0.6}, category: "pipe", page: 98, keywords: ["f8 23 × 80", "플로어덕트"] },
  { code: "통신 3-5-1", name: "Junction Box 대형", spec: "", unit: "개", labors: {"통신내선공": 1.0}, category: "pipe", page: 98, keywords: ["junction box 대형", "플로어덕트"] },
  { code: "통신 3-5-1", name: "Junction Box 중형", spec: "", unit: "개", labors: {"통신내선공": 0.9}, category: "pipe", page: 98, keywords: ["플로어덕트", "junction box 중형"] },
  { code: "통신 3-5-1", name: "Junction Box 소형", spec: "", unit: "개", labors: {"통신내선공": 0.8}, category: "pipe", page: 98, keywords: ["junction box 소형", "플로어덕트"] },
  { code: "통신 3-5-1", name: "노출 Insert Cap", spec: "", unit: "개", labors: {"통신내선공": 0.1}, category: "pipe", page: 98, keywords: ["플로어덕트", "노출 insert cap"] },
  { code: "통신 3-5-2", name: "60× 30㎜ 이하", spec: "18 ㎠", unit: "m", labors: {"통신내선공": 0.15}, category: "pipe", page: 99, keywords: ["60× 30㎜ 이하", "금속덕트", "18 ㎠"] },
  { code: "통신 3-5-2", name: "100× 50㎜", spec: "50 ㎠", unit: "개", labors: {"통신내선공": 0.2}, category: "pipe", page: 99, keywords: ["100× 50㎜", "금속덕트", "50 ㎠"] },
  { code: "통신 3-5-2", name: "100×100㎜", spec: "100 ㎠", unit: "개", labors: {"통신내선공": 0.3}, category: "pipe", page: 99, keywords: ["100×100㎜", "금속덕트", "100 ㎠"] },
  { code: "통신 3-5-2", name: "150×100㎜", spec: "150 ㎠", unit: "개", labors: {"통신내선공": 0.4}, category: "pipe", page: 99, keywords: ["금속덕트", "150 ㎠", "150×100㎜"] },
  { code: "통신 3-5-2", name: "200×100㎜", spec: "200 ㎠", unit: "개", labors: {"통신내선공": 0.45}, category: "pipe", page: 99, keywords: ["금속덕트", "200 ㎠", "200×100㎜"] },
  { code: "통신 3-5-2", name: "300×100㎜", spec: "300 ㎠", unit: "개", labors: {"통신내선공": 0.5}, category: "pipe", page: 99, keywords: ["금속덕트", "300 ㎠", "300×100㎜"] },
  { code: "통신 3-5-2", name: "400×150㎜", spec: "600 ㎠", unit: "개", labors: {"통신내선공": 0.6}, category: "pipe", page: 99, keywords: ["600 ㎠", "400×150㎜", "금속덕트"] },
  { code: "통신 3-5-2", name: "500×200㎜", spec: "1,000 ㎠", unit: "개", labors: {"통신내선공": 1.5}, category: "pipe", page: 99, keywords: ["500×200㎜", "1,000 ㎠", "금속덕트"] },
  { code: "통신 3-5-2", name: "600×300㎜", spec: "1,800 ㎠", unit: "개", labors: {"통신내선공": 2.0}, category: "pipe", page: 99, keywords: ["금속덕트", "600×300㎜", "1,800 ㎠"] },
  { code: "통신 3-5-2", name: "700×400㎜", spec: "2,800 ㎠", unit: "개", labors: {"통신내선공": 2.5}, category: "pipe", page: 99, keywords: ["금속덕트", "700×400㎜", "2,800 ㎠"] },
  { code: "통신 3-5-2", name: "1,000×400㎜", spec: "4,000 ㎠", unit: "개", labors: {"통신내선공": 3.0}, category: "pipe", page: 99, keywords: ["1,000×400㎜", "4,000 ㎠", "금속덕트"] },
  { code: "통신 3-5-2", name: "절구 주변의 길이 3m", spec: "-", unit: "개", labors: {"통신내선공": 3.2}, category: "pipe", page: 99, keywords: ["금속덕트", "절구 주변의 길이 3m"] },
  { code: "통신 3-5-2", name: "길이 4m", spec: "-", unit: "개", labors: {"통신내선공": 4.5}, category: "pipe", page: 99, keywords: ["길이 4m", "금속덕트"] },
  { code: "통신 3-5-2", name: "길이 5m", spec: "-", unit: "개", labors: {"통신내선공": 6.3}, category: "pipe", page: 99, keywords: ["금속덕트", "길이 5m"] },
  { code: "통신 3-5-2", name: "덕트 뚜껑 열기", spec: "-", unit: "100m", labors: {"통신케이블공": 0.12, "보통인부": 1.0}, category: "pipe", page: 99, keywords: ["금속덕트", "덕트 뚜껑 열기"] },
  { code: "통신 3-5-2", name: "덕트 뚜껑 닫기", spec: "-", unit: "100m", labors: {"보통인부": 1.0}, category: "pipe", page: 99, keywords: ["덕트 뚜껑 닫기", "금속덕트"] },
  { code: "통신 3-5-3", name: "금 속", spec: "소 형 210㎟ 이하", unit: "m", labors: {"통신내선공": 0.16}, category: "pipe", page: 100, keywords: ["소 형 210㎟ 이하", "금 속", "몰딩(molding)"] },
  { code: "통신 3-5-3", name: "몰 딩", spec: "중 형 595㎟ 이하", unit: "m", labors: {"통신내선공": 0.18}, category: "pipe", page: 100, keywords: ["중 형 595㎟ 이하", "몰 딩", "몰딩(molding)"] },
  { code: "통신 3-5-3", name: "몰 딩", spec: "대 형 600㎟ 초과", unit: "m", labors: {"통신내선공": 0.22}, category: "pipe", page: 100, keywords: ["몰 딩", "대 형 600㎟ 초과", "몰딩(molding)"] },
  { code: "통신 3-5-3", name: "PVC몰딩 및 알루미늄몰딩(바닥)", spec: "", unit: "10m", labors: {"통신내선공": 0.25}, category: "pipe", page: 100, keywords: ["pvc몰딩 및 알루미늄몰딩(바닥)", "몰딩(molding)"] },
  { code: "통신 3-5-4", name: "40㎜ × 40㎜ 이하", spec: "", unit: "m", labors: {"통신내선공": 0.3}, category: "pipe", page: 100, keywords: ["40㎜ × 40㎜ 이하", "레이스웨이"] },
  { code: "통신 3-5-4", name: "70㎜ × 40㎜", spec: "", unit: "m", labors: {"통신내선공": 0.44}, category: "pipe", page: 100, keywords: ["레이스웨이", "70㎜ × 40㎜"] },
  { code: "통신 3-5-4", name: "110㎜ × 50㎜", spec: "", unit: "m", labors: {"통신내선공": 0.76}, category: "pipe", page: 100, keywords: ["110㎜ × 50㎜", "레이스웨이"] },
  { code: "통신 3-6-1", name: "우드 Floor", spec: "0.16", unit: "개", labors: {"보통인부": 0.16}, category: "pipe", page: 101, keywords: ["우드 floor", "액세스플로어(access floor)", "0.16"] },
  { code: "통신 3-6-1", name: "스틸 Floor", spec: "0.18", unit: "개", labors: {"보통인부": 0.18}, category: "pipe", page: 101, keywords: ["액세스플로어(access floor)", "0.18", "스틸 floor"] },
  { code: "통신 3-6-1", name: "우드스틸 Floor", spec: "0.19", unit: "개", labors: {"보통인부": 0.19}, category: "pipe", page: 101, keywords: ["액세스플로어(access floor)", "0.19", "우드스틸 floor"] },
  { code: "통신 3-6-1", name: "스틸콘크리트 Floor", spec: "0.21", unit: "개", labors: {"보통인부": 0.21}, category: "pipe", page: 101, keywords: ["0.21", "스틸콘크리트 floor", "액세스플로어(access floor)"] },
  { code: "통신 3-7-1", name: "박 스 커 버", spec: "-", unit: "장", labors: {"통신내선공": 0.03}, category: "pipe", page: 102, keywords: ["(앵커볼트 설치 등)", "박 스 커 버"] },
  { code: "통신 3-7-1", name: "C형엘보 또는", spec: "1 ¼″ 이하", unit: "개", labors: {"통신내선공": 0.04}, category: "pipe", page: 102, keywords: ["(앵커볼트 설치 등)", "1 ¼″ 이하", "c형엘보 또는"] },
  { code: "통신 3-7-1", name: "콘 듀 렛 드", spec: "2 ¼″ 이하", unit: "개", labors: {"통신내선공": 0.08}, category: "pipe", page: 102, keywords: ["콘 듀 렛 드", "(앵커볼트 설치 등)", "2 ¼″ 이하"] },
  { code: "통신 3-7-1", name: "콘 듀 렛 드", spec: "3 ¼″ 이하", unit: "개", labors: {"통신내선공": 0.12}, category: "pipe", page: 102, keywords: ["콘 듀 렛 드", "(앵커볼트 설치 등)", "3 ¼″ 이하"] },
  { code: "통신 3-7-1", name: "웨 더 캡", spec: "1 ½″ 이하", unit: "개", labors: {"통신내선공": 0.03}, category: "pipe", page: 102, keywords: ["(앵커볼트 설치 등)", "웨 더 캡", "1 ½″ 이하"] },
  { code: "통신 3-7-1", name: "웨 더 캡", spec: "3 ½″ 이하", unit: "개", labors: {"통신내선공": 0.04}, category: "pipe", page: 102, keywords: ["(앵커볼트 설치 등)", "3 ½″ 이하", "웨 더 캡"] },
  { code: "통신 3-7-1", name: "써 비 스 캡", spec: "1 ¼″ 이하", unit: "개", labors: {"통신내선공": 0.03}, category: "pipe", page: 102, keywords: ["(앵커볼트 설치 등)", "써 비 스 캡", "1 ¼″ 이하"] },
  { code: "통신 3-7-1", name: "써 비 스 캡", spec: "3 ¼″ 이하", unit: "개", labors: {"통신내선공": 0.04}, category: "pipe", page: 102, keywords: ["3 ¼″ 이하", "써 비 스 캡", "(앵커볼트 설치 등)"] },
  { code: "통신 3-7-1", name: "드라이브일(총타정)", spec: "Ø 9㎜ 이하", unit: "10개", labors: {"통신내선공": 0.18}, category: "pipe", page: 102, keywords: ["(앵커볼트 설치 등)", "ø 9㎜ 이하", "드라이브일(총타정)"] },
  { code: "통신 3-7-1", name: "드라이브일(총타정)", spec: "Ø12㎜ 이하", unit: "10개", labors: {"통신내선공": 0.28}, category: "pipe", page: 102, keywords: ["(앵커볼트 설치 등)", "드라이브일(총타정)", "ø12㎜ 이하"] },
  { code: "통신 3-7-1", name: "천 공", spec: "각 종", unit: "10개", labors: {"통신내선공": 0.22}, category: "pipe", page: 102, keywords: ["각 종", "천 공", "(앵커볼트 설치 등)"] },
  { code: "통신 3-7-1", name: "칼 블 럭 ( 쐐 기 )", spec: "Ø 9㎜ 이하", unit: "10개", labors: {"통신내선공": 0.28}, category: "pipe", page: 102, keywords: ["(앵커볼트 설치 등)", "칼 블 럭 ( 쐐 기 )", "ø 9㎜ 이하"] },
  { code: "통신 3-7-1", name: "칼 블 럭 ( 쐐 기 )", spec: "Ø12㎜ 이하", unit: "10개", labors: {"통신내선공": 0.36}, category: "pipe", page: 102, keywords: ["(앵커볼트 설치 등)", "칼 블 럭 ( 쐐 기 )", "ø12㎜ 이하"] },
  { code: "통신 3-7-1", name: "배 관 용 홈 파 기", spec: "바닥 Ø22이하용", unit: "m", labors: {"보통인부": 0.08}, category: "pipe", page: 102, keywords: ["배 관 용 홈 파 기", "(앵커볼트 설치 등)", "바닥 ø22이하용"] },
  { code: "통신 3-7-1", name: "배 관 용 홈 파 기", spec: "Ø28", unit: "m", labors: {"보통인부": 0.12}, category: "pipe", page: 102, keywords: ["배 관 용 홈 파 기", "ø28", "(앵커볼트 설치 등)"] },
  { code: "통신 3-7-1", name: "배 관 용 홈 파 기", spec: "Ø36", unit: "m", labors: {"보통인부": 0.16}, category: "pipe", page: 102, keywords: ["배 관 용 홈 파 기", "(앵커볼트 설치 등)", "ø36"] },
  { code: "통신 3-7-1", name: "배 관 용 홈 파 기", spec: "Ø42", unit: "m", labors: {"보통인부": 0.2}, category: "pipe", page: 102, keywords: ["배 관 용 홈 파 기", "ø42", "(앵커볼트 설치 등)"] },
  { code: "통신 3-7-1", name: "배 관 용 홈 파 기", spec: "Ø54", unit: "m", labors: {"보통인부": 0.3}, category: "pipe", page: 102, keywords: ["배 관 용 홈 파 기", "ø54", "(앵커볼트 설치 등)"] },
  { code: "통신 3-7-1", name: "배 관 용 홈 파 기", spec: "Ø70", unit: "m", labors: {"보통인부": 0.45}, category: "pipe", page: 102, keywords: ["배 관 용 홈 파 기", "(앵커볼트 설치 등)", "ø70"] },
  { code: "통신 3-7-1", name: "배 관 용 홈 파 기", spec: "Ø82", unit: "m", labors: {"보통인부": 0.55}, category: "pipe", page: 102, keywords: ["배 관 용 홈 파 기", "ø82", "(앵커볼트 설치 등)"] },
  { code: "통신 3-7-1", name: "구 멍 뚫 기", spec: "깊이 50㎜ 이하", unit: "10개", labors: {"보통인부": 0.36}, category: "pipe", page: 102, keywords: ["(앵커볼트 설치 등)", "구 멍 뚫 기", "깊이 50㎜ 이하"] },
  { code: "통신 3-7-1", name: "앵 커 볼 트 설 치", spec: "Ø13㎜ 이하", unit: "개", labors: {"통신내선공": 0.04}, category: "pipe", page: 102, keywords: ["(앵커볼트 설치 등)", "ø13㎜ 이하", "앵 커 볼 트 설 치"] },
  { code: "통신 3-7-1", name: "앵 커 볼 트 설 치", spec: "Ø15㎜", unit: "개", labors: {"통신내선공": 0.08}, category: "pipe", page: 102, keywords: ["ø15㎜", "앵 커 볼 트 설 치", "(앵커볼트 설치 등)"] },
  { code: "통신 3-7-1", name: "앵 커 볼 트 설 치", spec: "Ø16~Ø19㎜", unit: "개", labors: {"통신내선공": 0.12}, category: "pipe", page: 102, keywords: ["ø16~ø19㎜", "(앵커볼트 설치 등)", "앵 커 볼 트 설 치"] },
  { code: "통신 3-7-1", name: "앵 커 볼 트 설 치", spec: "Ø22~Ø25㎜", unit: "개", labors: {"통신내선공": 0.23}, category: "pipe", page: 102, keywords: ["ø22~ø25㎜", "(앵커볼트 설치 등)", "앵 커 볼 트 설 치"] },
  { code: "통신 3-7-1", name: "앵 커 볼 트 설 치", spec: "Ø28㎜ 이상", unit: "개", labors: {"통신내선공": 0.3}, category: "pipe", page: 102, keywords: ["(앵커볼트 설치 등)", "ø28㎜ 이상", "앵 커 볼 트 설 치"] },
  { code: "통신 3-7-1", name: "콤파운드 주입", spec: "단면적 50㎠ 이하", unit: "개소", labors: {"보통인부": 0.08}, category: "pipe", page: 102, keywords: ["(앵커볼트 설치 등)", "콤파운드 주입", "단면적 50㎠ 이하"] },
  { code: "통신 3-7-1", name: "콤파운드 주입", spec: "단면적 100㎠ 이하", unit: "개소", labors: {"보통인부": 0.12}, category: "pipe", page: 102, keywords: ["(앵커볼트 설치 등)", "콤파운드 주입", "단면적 100㎠ 이하"] },
  { code: "통신 3-7-1", name: "콤파운드 주입", spec: "단면적 150㎠ 이하", unit: "개소", labors: {"보통인부": 0.18}, category: "pipe", page: 102, keywords: ["(앵커볼트 설치 등)", "콤파운드 주입", "단면적 150㎠ 이하"] },
  { code: "통신 3-7-1", name: "콤파운드 주입", spec: "단면적 151㎠ 이상", unit: "개소", labors: {"보통인부": 0.2}, category: "pipe", page: 102, keywords: ["(앵커볼트 설치 등)", "콤파운드 주입", "단면적 151㎠ 이상"] },
  { code: "통신 3-7-1", name: "기 주입된 콤파운드 제거", spec: "단면적 50㎠ 이하", unit: "개", labors: {"보통인부": 0.27}, category: "pipe", page: 102, keywords: ["기 주입된 콤파운드 제거", "(앵커볼트 설치 등)", "단면적 50㎠ 이하"] },
  { code: "통신 3-7-1", name: "기 주입된 콤파운드 제거", spec: "단면적 100㎠ 이하", unit: "개", labors: {"보통인부": 0.36}, category: "pipe", page: 102, keywords: ["기 주입된 콤파운드 제거", "(앵커볼트 설치 등)", "단면적 100㎠ 이하"] },
  { code: "통신 3-7-1", name: "기 주입된 콤파운드 제거", spec: "단면적 150㎠ 이하", unit: "개", labors: {"보통인부": 0.54}, category: "pipe", page: 102, keywords: ["기 주입된 콤파운드 제거", "(앵커볼트 설치 등)", "단면적 150㎠ 이하"] },
  { code: "통신 3-7-1", name: "기 주입된 콤파운드 제거", spec: "단면적 151㎠ 이상", unit: "개", labors: {"보통인부": 0.84}, category: "pipe", page: 102, keywords: ["기 주입된 콤파운드 제거", "(앵커볼트 설치 등)", "단면적 151㎠ 이상"] },
  { code: "통신 3-7-1", name: "구", spec: "12.7Ф 이하", unit: "10개", labors: {"통신내선공": 0.41}, category: "pipe", page: 102, keywords: ["(앵커볼트 설치 등)", "12.7ф 이하"] },
  { code: "통신 3-7-1", name: "멍", spec: "두께 2㎜ 이하", unit: "개", labors: {"통신내선공": 0.12}, category: "pipe", page: 102, keywords: ["두께 2㎜ 이하", "(앵커볼트 설치 등)"] },
  { code: "통신 3-7-1", name: "따", spec: "-", unit: "개", labors: {"통신내선공": 0.1}, category: "pipe", page: 102, keywords: ["(앵커볼트 설치 등)"] },
  { code: "통신 3-7-1", name: "케 이 블 표 시", spec: "식별표시용 PVC", unit: "개", labors: {"보통인부": 0.01}, category: "pipe", page: 102, keywords: ["(앵커볼트 설치 등)", "케 이 블 표 시", "식별표시용 pvc"] },
  { code: "통신 3-7-1", name: "도로커팅", spec: "깊이 10㎝", unit: "m", labors: {"보통인부": 0.13}, category: "pipe", page: 102, keywords: ["(앵커볼트 설치 등)", "깊이 10㎝", "도로커팅"] },
  { code: "통신 3-7-1", name: "기초대 설치", spec: "30㎝×30㎝×30㎝", unit: "개", labors: {"보통인부": 0.11}, category: "pipe", page: 102, keywords: ["기초대 설치", "30㎝×30㎝×30㎝", "(앵커볼트 설치 등)"] },
  { code: "통신 3-7-1", name: "전산볼트 설치", spec: "Ø13㎜ 이하", unit: "개", labors: {"통신내선공": 0.01}, category: "pipe", page: 102, keywords: ["전산볼트 설치", "(앵커볼트 설치 등)", "ø13㎜ 이하"] },
  { code: "통신 3-7-2-3", name: "구경 (㎜) [두께 150㎜이하]", spec: "", unit: "본", labors: {"보통인부": 0.1}, category: "pipe", page: 104, keywords: ["배관용 구멍뚫기(코어드릴 사용기준)", "구경 (㎜) [두께 150㎜이하]"] },
  { code: "통신 3-7-2-3", name: "구경 (㎜) [두께 300㎜이하]", spec: "", unit: "본", labors: {"보통인부": 0.17}, category: "pipe", page: 104, keywords: ["배관용 구멍뚫기(코어드릴 사용기준)", "구경 (㎜) [두께 300㎜이하]"] },
  { code: "통신 4-1-1", name: "광섬유케이블", spec: "지", unit: "100m", labors: {"광케이블설치사": 0.94, "보통인부": 1.41}, category: "cable", page: 109, keywords: ["광섬유케이블", "광섬유케이블 포설"] },
  { code: "통신 4-1-1", name: "포 설", spec: "중", unit: "100m", labors: {"광케이블설치사": 0.48, "특별인부": 0.48}, category: "cable", page: 109, keywords: ["광섬유케이블 포설", "포 설"] },
  { code: "통신 4-1-1", name: "(싱글/멀티모드)", spec: "중", unit: "100m", labors: {"광케이블설치사": 0.34, "통신외선공": 0.25, "특별인부": 0.2}, category: "cable", page: 109, keywords: ["(싱글/멀티모드)", "광섬유케이블 포설"] },
  { code: "통신 4-1-1", name: "내관포설", spec: "23㎜이하 PE관", unit: "m", labors: {"통신외선공": 0.45, "보통인부": 0.5}, category: "cable", page: 109, keywords: ["23㎜이하 pe관", "광섬유케이블 포설", "내관포설"] },
  { code: "통신 4-1-1", name: "내관포설", spec: "28㎜이하 PE관", unit: "m", labors: {"통신외선공": 0.48, "보통인부": 0.53}, category: "cable", page: 109, keywords: ["광섬유케이블 포설", "내관포설", "28㎜이하 pe관"] },
  { code: "통신 4-1-1", name: "내관포설", spec: "36㎜이하 PE관", unit: "m", labors: {"통신외선공": 0.51, "보통인부": 0.57}, category: "cable", page: 109, keywords: ["광섬유케이블 포설", "내관포설", "36㎜이하 pe관"] },
  { code: "통신 4-1-1", name: "내관이음", spec: "공기압력포설용", unit: "개소", labors: {"광케이블설치사": 0.12, "통신외선공": 0.12, "특별인부": 0.12}, category: "cable", page: 109, keywords: ["내관이음", "광섬유케이블 포설", "공기압력포설용"] },
  { code: "통신 4-1-1", name: "결 합 형", spec: "28㎜이하 PE관", unit: "100m", labors: {"통신외선공": 0.44, "보통인부": 0.57}, category: "cable", page: 109, keywords: ["광섬유케이블 포설", "28㎜이하 pe관", "결 합 형"] },
  { code: "통신 4-1-1", name: "슬 림 형 내관포설", spec: "인력견인포설 (2조 이하)", unit: "100m", labors: {"통신외선공": 0.28, "보통인부": 0.42}, category: "cable", page: 109, keywords: ["광섬유케이블 포설", "슬 림 형 내관포설", "인력견인포설 (2조 이하)"] },
  { code: "통신 4-1-1", name: "견인선 포설", spec: "인력포설(4㎜)", unit: "100m", labors: {"통신외선공": 0.28, "보통인부": 0.42}, category: "cable", page: 109, keywords: ["인력포설(4㎜)", "광섬유케이블 포설", "견인선 포설"] },
  { code: "통신 4-1-2-1", name: "광섬유케이블", spec: "12코어 이하", unit: "코어당", labors: {"광케이블설치사": 0.11, "특별인부": 0.11}, category: "cable", page: 111, keywords: ["광섬유케이블", "광섬유케이블 접속 및 시험", "12코어 이하"] },
  { code: "통신 4-1-2-1", name: "일 반 접 속", spec: "48코어 이하", unit: "코어당", labors: {"광케이블설치사": 0.08, "특별인부": 0.08}, category: "cable", page: 111, keywords: ["일 반 접 속", "48코어 이하", "광섬유케이블 접속 및 시험"] },
  { code: "통신 4-1-2-1", name: "일 반 접 속", spec: "72코어 미만", unit: "코어당", labors: {"광케이블설치사": 0.06, "특별인부": 0.06}, category: "cable", page: 111, keywords: ["일 반 접 속", "72코어 미만", "광섬유케이블 접속 및 시험"] },
  { code: "통신 4-1-2-1", name: "일 반 접 속", spec: "72코어 이상", unit: "코어당", labors: {"광케이블설치사": 0.03, "특별인부": 0.02}, category: "cable", page: 111, keywords: ["72코어 이상", "일 반 접 속", "광섬유케이블 접속 및 시험"] },
  { code: "통신 4-1-2-1", name: "절체접속", spec: "12코어 이하", unit: "코어당", labors: {"광케이블설치사": 0.35, "특별인부": 0.35}, category: "cable", page: 111, keywords: ["절체접속", "광섬유케이블 접속 및 시험", "12코어 이하"] },
  { code: "통신 4-1-2-1", name: "절체접속", spec: "48코어 이하", unit: "코어당", labors: {"광케이블설치사": 0.25, "특별인부": 0.25}, category: "cable", page: 111, keywords: ["절체접속", "48코어 이하", "광섬유케이블 접속 및 시험"] },
  { code: "통신 4-1-2-1", name: "절체접속", spec: "72코어 미만", unit: "코어당", labors: {"광케이블설치사": 0.24, "특별인부": 0.22}, category: "cable", page: 111, keywords: ["절체접속", "72코어 미만", "광섬유케이블 접속 및 시험"] },
  { code: "통신 4-1-2-1", name: "절체접속", spec: "72코어 이상", unit: "코어당", labors: {"광케이블설치사": 0.2, "특별인부": 0.18}, category: "cable", page: 111, keywords: ["절체접속", "72코어 이상", "광섬유케이블 접속 및 시험"] },
  { code: "통신 4-1-2-1", name: "광접속함체", spec: "-", unit: "대", labors: {"광케이블설치사": 0.51, "특별인부": 0.51}, category: "cable", page: 111, keywords: ["광접속함체", "광섬유케이블 접속 및 시험"] },
  { code: "통신 4-1-2-1", name: "광섬유케이블", spec: "접 속 전 시 험", unit: "코어당", labors: {"광케이블설치사": 0.15, "특별인부": 0.13}, category: "cable", page: 111, keywords: ["접 속 전 시 험", "광섬유케이블", "광섬유케이블 접속 및 시험"] },
  { code: "통신 4-1-2-1", name: "시험 및 측정", spec: "접 속 후 시 험", unit: "코어당", labors: {"광케이블설치사": 0.11, "특별인부": 0.11}, category: "cable", page: 111, keywords: ["광섬유케이블 접속 및 시험", "시험 및 측정", "접 속 후 시 험"] },
  { code: "통신 4-1-2-1", name: "시험 및 측정", spec: "최 종 시 험", unit: "코어당", labors: {"광케이블설치사": 0.22, "특별인부": 0.22}, category: "cable", page: 111, keywords: ["최 종 시 험", "시험 및 측정", "광섬유케이블 접속 및 시험"] },
  { code: "통신 4-1-2-1", name: "시험 및 측정", spec: "광대역폭 측정", unit: "코어당", labors: {"통신관련기사": 0.28, "광케이블설치사": 0.14, "특별인부": 0.21}, category: "cable", page: 111, keywords: ["광섬유케이블 접속 및 시험", "시험 및 측정", "광대역폭 측정"] },
  { code: "통신 4-1-2-1", name: "시험 및 측정", spec: "편광모드분산측정", unit: "코어당", labors: {"광케이블설치사": 0.59, "특별인부": 0.59}, category: "cable", page: 111, keywords: ["편광모드분산측정", "시험 및 측정", "광섬유케이블 접속 및 시험"] },
  { code: "통신 4-1-2-1", name: "시험 및 측정", spec: "반사손실 측정", unit: "코어당", labors: {"광케이블설치사": 0.25, "특별인부": 0.2}, category: "cable", page: 111, keywords: ["반사손실 측정", "시험 및 측정", "광섬유케이블 접속 및 시험"] },
  { code: "통신 4-1-2-1", name: "광섬유케이블 식 별", spec: "OTDR 확인", unit: "케이블당", labors: {"광케이블설치사": 0.28, "특별인부": 0.23}, category: "cable", page: 111, keywords: ["광섬유케이블 식 별", "광섬유케이블 접속 및 시험", "otdr 확인"] },
  { code: "통신 4-1-2-2", name: "광분배함(OFD) 및 저장함 설치", spec: "-", unit: "개", labors: {"통신설비공": 0.09, "보통인부": 0.09}, category: "cable", page: 112, keywords: ["광분배함(반) 및 성단 등", "광분배함(ofd) 및 저장함 설치"] },
  { code: "통신 4-1-2-2", name: "광분배반(FDF)", spec: "-", unit: "대", labors: {"통신설비공": 0.23, "보통인부": 0.23}, category: "cable", page: 112, keywords: ["광분배반(fdf)", "광분배함(반) 및 성단 등"] },
  { code: "통신 4-1-2-2", name: "광단자함(OTP)", spec: "-", unit: "개", labors: {"통신설비공": 0.29, "보통인부": 0.15}, category: "cable", page: 112, keywords: ["광분배함(반) 및 성단 등", "광단자함(otp)"] },
  { code: "통신 4-1-2-2", name: "광분배기", spec: "4분배기 이하", unit: "개", labors: {"광케이블설치사": 0.06}, category: "cable", page: 112, keywords: ["4분배기 이하", "광분배함(반) 및 성단 등", "광분배기"] },
  { code: "통신 4-1-2-2", name: "국 내 성 단", spec: "12코어 이하", unit: "코어당", labors: {"광케이블설치사": 0.14, "특별인부": 0.14}, category: "cable", page: 112, keywords: ["광분배함(반) 및 성단 등", "국 내 성 단", "12코어 이하"] },
  { code: "통신 4-1-2-2", name: "국 내 성 단", spec: "13 - 71코어", unit: "코어당", labors: {"광케이블설치사": 0.12, "특별인부": 0.09}, category: "cable", page: 112, keywords: ["광분배함(반) 및 성단 등", "국 내 성 단", "13 - 71코어"] },
  { code: "통신 4-1-2-2", name: "국 내 성 단", spec: "72코어 이상", unit: "코어당", labors: {"광케이블설치사": 0.08, "특별인부": 0.06}, category: "cable", page: 112, keywords: ["광분배함(반) 및 성단 등", "국 내 성 단", "72코어 이상"] },
  { code: "통신 4-1-3", name: "광섬유케이블포설", spec: "12코어 이하", unit: "100m", labors: {"광케이블설치사": 0.92, "특별인부": 0.46}, category: "cable", page: 113, keywords: ["12코어 이하", "구내 광섬유케이블", "광섬유케이블포설"] },
  { code: "통신 4-1-3", name: "광섬유케이블포설", spec: "24코어 이하", unit: "100m", labors: {"광케이블설치사": 1.32, "특별인부": 0.67}, category: "cable", page: 113, keywords: ["24코어 이하", "구내 광섬유케이블", "광섬유케이블포설"] },
  { code: "통신 4-1-3", name: "광코어 공압포설", spec: "4코어 이하", unit: "m", labors: {"광케이블설치사": 0.12, "특별인부": 0.09}, category: "cable", page: 113, keywords: ["광코어 공압포설", "4코어 이하", "구내 광섬유케이블"] },
  { code: "통신 4-1-3", name: "(집합광섬유)", spec: "8코어 이하", unit: "m", labors: {"광케이블설치사": 0.15, "특별인부": 0.11}, category: "cable", page: 113, keywords: ["(집합광섬유)", "구내 광섬유케이블", "8코어 이하"] },
  { code: "통신 4-1-3", name: "(집합광섬유)", spec: "9코어 이상", unit: "m", labors: {"광케이블설치사": 0.17, "특별인부": 0.12}, category: "cable", page: 113, keywords: ["(집합광섬유)", "9코어 이상", "구내 광섬유케이블"] },
  { code: "통신 4-1-3", name: "광튜브 포설", spec: "7튜브 이하", unit: "m", labors: {"광케이블설치사": 0.49, "보통인부": 0.83}, category: "cable", page: 113, keywords: ["광튜브 포설", "7튜브 이하", "구내 광섬유케이블"] },
  { code: "통신 4-1-3", name: "광튜브 포설", spec: "8튜브 이상", unit: "m", labors: {"광케이블설치사": 0.58, "보통인부": 0.95}, category: "cable", page: 113, keywords: ["8튜브 이상", "광튜브 포설", "구내 광섬유케이블"] },
  { code: "통신 4-1-3", name: "광튜브 내관이음", spec: "광튜브", unit: "개소", labors: {"광케이블설치사": 0.07}, category: "cable", page: 113, keywords: ["광튜브", "구내 광섬유케이블", "광튜브 내관이음"] },
  { code: "통신 4-1-3", name: "슬림형내관포설", spec: "인력견인포설", unit: "100m", labors: {"광케이블설치사": 0.34, "보통인부": 0.51}, category: "cable", page: 113, keywords: ["인력견인포설", "슬림형내관포설", "구내 광섬유케이블"] },
  { code: "통신 4-1-3", name: "성 단", spec: "-", unit: "코어당", labors: {"광케이블설치사": 0.06, "특별인부": 0.05}, category: "cable", page: 113, keywords: ["성 단", "구내 광섬유케이블"] },
  { code: "통신 4-1-3", name: "시 험", spec: "최종시험", unit: "m", labors: {"광케이블설치사": 0.05, "특별인부": 0.02}, category: "cable", page: 113, keywords: ["최종시험", "시 험", "구내 광섬유케이블"] },
  { code: "통신 4-1-3", name: "시 험", spec: "반사손실측정", unit: "m", labors: {"광케이블설치사": 0.05, "특별인부": 0.02}, category: "cable", page: 113, keywords: ["시 험", "반사손실측정", "구내 광섬유케이블"] },
  { code: "통신 4-1-3", name: "광인출구 설치", spec: "-", unit: "10개", labors: {"광케이블설치사": 0.18}, category: "cable", page: 113, keywords: ["광인출구 설치", "구내 광섬유케이블"] },
  { code: "통신 4-1-3", name: "광점퍼코드 (광패치코드) 포설", spec: "-", unit: "10m", labors: {"광케이블설치사": 0.07, "특별인부": 0.08}, category: "cable", page: 113, keywords: ["광점퍼코드 (광패치코드) 포설", "구내 광섬유케이블"] },
  { code: "통신 4-1-4", name: "지중포설", spec: "단면적 35㎟ 이하", unit: "100m", labors: {"광케이블설치사": 1.34, "보통인부": 1.34}, category: "cable", page: 114, keywords: ["광전복합케이블", "단면적 35㎟ 이하", "지중포설"] },
  { code: "통신 4-1-4", name: "지중포설", spec: "단면적 50㎟ 이하", unit: "100m", labors: {"광케이블설치사": 1.49, "보통인부": 1.49}, category: "cable", page: 114, keywords: ["단면적 50㎟ 이하", "광전복합케이블", "지중포설"] },
  { code: "통신 4-1-4", name: "가공포설", spec: "단면적 35㎟ 이하", unit: "m", labors: {"광케이블설치사": 1.61, "보통인부": 1.61}, category: "cable", page: 114, keywords: ["광전복합케이블", "가공포설", "단면적 35㎟ 이하"] },
  { code: "통신 4-1-4", name: "가공포설", spec: "단면적 50㎟ 이하", unit: "m", labors: {"광케이블설치사": 1.79, "보통인부": 1.79}, category: "cable", page: 114, keywords: ["단면적 50㎟ 이하", "광전복합케이블", "가공포설"] },
  { code: "통신 4-1-5", name: "안전로프", spec: "", unit: "기", labors: {"특별인부": 0.14}, category: "cable", page: 115, keywords: ["안전로프", "광섬유 복합 낙뢰차폐선(opgw, compositive overhead ground"] },
  { code: "통신 4-1-5", name: "연", spec: "인발", unit: "㎞", labors: {"통신관련기사": 0.41, "광케이블설치사": 0.93, "특별인부": 6.24}, category: "cable", page: 115, keywords: ["인발", "광섬유 복합 낙뢰차폐선(opgw, compositive overhead ground"] },
  { code: "통신 4-1-5", name: "선", spec: "공법", unit: "㎞", labors: {"통신관련기사": 0.6, "광케이블설치사": 1.12, "특별인부": 6.62}, category: "cable", page: 115, keywords: ["공법", "광섬유 복합 낙뢰차폐선(opgw, compositive overhead ground"] },
  { code: "통신 4-1-5", name: "(전선", spec: "공법", unit: "㎞", labors: {"통신관련기사": 0.67, "광케이블설치사": 1.37, "특별인부": 6.81}, category: "cable", page: 115, keywords: ["공법", "광섬유 복합 낙뢰차폐선(opgw, compositive overhead ground", "(전선"] },
  { code: "통신 4-1-5", name: "펴기)", spec: "공법", unit: "㎞", labors: {"통신관련기사": 0.74, "광케이블설치사": 1.45, "특별인부": 7.18}, category: "cable", page: 115, keywords: ["펴기)", "공법", "광섬유 복합 낙뢰차폐선(opgw, compositive overhead ground"] },
  { code: "통신 4-1-5", name: "긴", spec: "내장", unit: "기", labors: {"통신관련기사": 0.89, "특별인부": 4.02}, category: "cable", page: 115, keywords: ["광섬유 복합 낙뢰차폐선(opgw, compositive overhead ground", "내장"] },
  { code: "통신 4-1-5", name: "선", spec: "철탑", unit: "기", labors: {"통신관련기사": 0.94, "특별인부": 4.14}, category: "cable", page: 115, keywords: ["광섬유 복합 낙뢰차폐선(opgw, compositive overhead ground", "철탑"] },
  { code: "통신 4-1-5", name: "(전선", spec: "(접속)", unit: "기", labors: {"통신관련기사": 1.0, "특별인부": 4.22}, category: "cable", page: 115, keywords: ["광섬유 복합 낙뢰차폐선(opgw, compositive overhead ground", "(전선", "(접속)"] },
  { code: "통신 4-1-5", name: "당기", spec: "(접속)", unit: "기", labors: {"통신관련기사": 1.02, "특별인부": 4.54}, category: "cable", page: 115, keywords: ["광섬유 복합 낙뢰차폐선(opgw, compositive overhead ground", "당기", "(접속)"] },
  { code: "통신 4-1-5", name: "접 속", spec: "준비및함체설치", unit: "개소", labors: {"통신관련기사": 0.33, "광케이블설치사": 3.25, "통신외선공": 4.33, "특별인부": 2.17}, category: "cable", page: 115, keywords: ["준비및함체설치", "접 속", "광섬유 복합 낙뢰차폐선(opgw, compositive overhead ground"] },
  { code: "통신 4-1-6", name: "광섬유복합가공중성선 포설", spec: "95㎟", unit: "100m", labors: {"광케이블설치사": 1.41, "통신외선공": 0.52, "보통인부": 1.52}, category: "cable", page: 117, keywords: ["광섬유복합가공중성선(opnw, optical neutral wire)", "광섬유복합가공중성선 포설", "95㎟"] },
  { code: "통신 4-1-7", name: "관로구 방수장치", spec: "200㎜이하", unit: "개", labors: {"통신외선공": 0.13, "보통인부": 0.13}, category: "cable", page: 117, keywords: ["관로구 방수장치", "200㎜이하", "지중케이블 금속부속품"] },
  { code: "통신 4-1-7", name: "케이블행거", spec: "-", unit: "개", labors: {"통신외선공": 0.01, "보통인부": 0.01}, category: "cable", page: 117, keywords: ["케이블행거", "지중케이블 금속부속품"] },
  { code: "통신 4-1-7", name: "케이블홀더", spec: "-", unit: "개", labors: {"통신외선공": 0.01, "보통인부": 0.01}, category: "cable", page: 117, keywords: ["케이블홀더", "지중케이블 금속부속품"] },
  { code: "통신 4-1-7", name: "행거안전캡", spec: "-", unit: "100개", labors: {"통신외선공": 0.12, "보통인부": 0.12}, category: "cable", page: 117, keywords: ["행거안전캡", "지중케이블 금속부속품"] },
  { code: "통신 4-2-1", name: "옥 내", spec: "5C 이하", unit: "10m", labors: {"통신케이블공": 0.17}, category: "cable", page: 118, keywords: ["옥 내", "5c 이하", "동축케이블 포설"] },
  { code: "통신 4-2-1", name: "포 설", spec: "7C", unit: "10m", labors: {"통신케이블공": 0.22}, category: "cable", page: 118, keywords: ["7c", "동축케이블 포설", "포 설"] },
  { code: "통신 4-2-1", name: "포 설", spec: "10C", unit: "10m", labors: {"통신케이블공": 0.32}, category: "cable", page: 118, keywords: ["동축케이블 포설", "10c", "포 설"] },
  { code: "통신 4-2-1", name: "지 하", spec: "5C 이하", unit: "100m", labors: {"통신케이블공": 0.41, "보통인부": 0.41}, category: "cable", page: 118, keywords: ["5c 이하", "동축케이블 포설", "지 하"] },
  { code: "통신 4-2-1", name: "관 로", spec: "7C", unit: "100m", labors: {"통신케이블공": 0.65, "보통인부": 0.52}, category: "cable", page: 118, keywords: ["관 로", "7c", "동축케이블 포설"] },
  { code: "통신 4-2-1", name: "포 설", spec: "8C", unit: "100m", labors: {"통신케이블공": 0.74, "보통인부": 0.59}, category: "cable", page: 118, keywords: ["동축케이블 포설", "8c", "포 설"] },
  { code: "통신 4-2-1", name: "포 설", spec: "12C", unit: "100m", labors: {"통신케이블공": 1.11, "보통인부": 0.89}, category: "cable", page: 118, keywords: ["12c", "동축케이블 포설", "포 설"] },
  { code: "통신 4-2-1", name: "포 설", spec: "17C", unit: "100m", labors: {"통신케이블공": 1.58, "보통인부": 1.26}, category: "cable", page: 118, keywords: ["17c", "동축케이블 포설", "포 설"] },
  { code: "통신 4-2-2", name: "커넥터", spec: "5C이하", unit: "개", labors: {"통신내선공": 0.02}, category: "cable", page: 119, keywords: ["커넥터", "5c이하"] },
  { code: "통신 4-2-2", name: "직렬단자", spec: "설치", unit: "개", labors: {"통신내선공": 0.07}, category: "cable", page: 119, keywords: ["커넥터", "설치", "직렬단자"] },
  { code: "통신 4-3-1", name: "UTP, STP,", spec: "구내", unit: "10m", labors: {"통신케이블공": 0.15}, category: "cable", page: 120, keywords: ["utp, stp,", "구내", "꼬임케이블 포설"] },
  { code: "통신 4-3-1", name: "FTP", spec: "구내", unit: "10m", labors: {"통신케이블공": 0.24}, category: "cable", page: 120, keywords: ["ftp", "구내", "꼬임케이블 포설"] },
  { code: "통신 4-3-1", name: "Thin", spec: "", unit: "10m", labors: {"통신케이블공": 0.18}, category: "cable", page: 120, keywords: ["thin", "꼬임케이블 포설"] },
  { code: "통신 4-3-1", name: "Thick", spec: "", unit: "10m", labors: {"통신케이블공": 0.32}, category: "cable", page: 120, keywords: ["꼬임케이블 포설", "thick"] },
  { code: "통신 4-3-1", name: "RS-Cable", spec: "", unit: "10m", labors: {"통신케이블공": 0.18}, category: "cable", page: 120, keywords: ["rs-cable", "꼬임케이블 포설"] },
  { code: "통신 4-3-1", name: "AUI", spec: "", unit: "10m", labors: {"통신케이블공": 0.2}, category: "cable", page: 120, keywords: ["aui", "꼬임케이블 포설"] },
  { code: "통신 4-3-1", name: "Token Cable(2P)", spec: "", unit: "10m", labors: {"통신내선공": 0.17}, category: "cable", page: 120, keywords: ["token cable(2p)", "꼬임케이블 포설"] },
  { code: "통신 4-3-2", name: "RS-232C(10Pin)", spec: "", unit: "10개", labors: {"통신내선공": 0.49}, category: "cable", page: 121, keywords: ["rs-232c(10pin)", "커넥터 및 jack 접속"] },
  { code: "통신 4-3-2", name: "Modular(RJ45-8Pin Plug)", spec: "", unit: "10개", labors: {"통신내선공": 0.13}, category: "cable", page: 121, keywords: ["modular(rj45-8pin plug)", "커넥터 및 jack 접속"] },
  { code: "통신 4-3-2", name: "Modular(Outlet)", spec: "", unit: "10개", labors: {"통신내선공": 0.28}, category: "cable", page: 121, keywords: ["modular(outlet)", "커넥터 및 jack 접속"] },
  { code: "통신 4-3-2", name: "TELCO(50Pin)", spec: "", unit: "10개", labors: {"통신내선공": 1.19}, category: "cable", page: 121, keywords: ["커넥터 및 jack 접속", "telco(50pin)"] },
  { code: "통신 4-3-2", name: "Token Ring용 Data Line", spec: "", unit: "10개", labors: {"통신내선공": 0.84}, category: "cable", page: 121, keywords: ["커넥터 및 jack 접속", "token ring용 data line"] },
  { code: "통신 4-3-3", name: "M D F 설 치", spec: "23″ Standard (공 철가기준)", unit: "열", labors: {"통신설비공": 1.55, "보통인부": 0.78}, category: "cable", page: 121, keywords: ["patch panel 및 성단 등", "m d f 설 치", "23″ standard (공 철가기준)"] },
  { code: "통신 4-3-3", name: "Box 설치", spec: "Outlet Box (4구이하 노출/매입)", unit: "개", labors: {"통신내선공": 0.15}, category: "cable", page: 121, keywords: ["patch panel 및 성단 등", "outlet box (4구이하 노출/매입)", "box 설치"] },
  { code: "통신 4-3-3", name: "110 Block", spec: "25P 이하", unit: "세트", labors: {"통신설비공": 0.11, "보통인부": 0.11}, category: "cable", page: 121, keywords: ["110 block", "patch panel 및 성단 등", "25p 이하"] },
  { code: "통신 4-3-3", name: "설 치", spec: "50P", unit: "세트", labors: {"통신설비공": 0.25, "보통인부": 0.13}, category: "cable", page: 121, keywords: ["patch panel 및 성단 등", "설 치", "50p"] },
  { code: "통신 4-3-3", name: "설 치", spec: "100P", unit: "세트", labors: {"통신설비공": 0.31, "보통인부": 0.17}, category: "cable", page: 121, keywords: ["patch panel 및 성단 등", "설 치", "100p"] },
  { code: "통신 4-3-3", name: "설 치", spec: "300P", unit: "세트", labors: {"통신설비공": 0.43, "보통인부": 0.24}, category: "cable", page: 121, keywords: ["300p", "patch panel 및 성단 등", "설 치"] },
  { code: "통신 4-3-3", name: "19″Rack", spec: "높이 2.2m미만", unit: "대", labors: {"통신설비공": 0.48}, category: "cable", page: 121, keywords: ["patch panel 및 성단 등", "19″rack", "높이 2.2m미만"] },
  { code: "통신 4-3-3", name: "Patch Panel 설 치", spec: "6 Port 이하", unit: "대", labors: {"통신설비공": 0.07, "보통인부": 0.07}, category: "cable", page: 121, keywords: ["patch panel 설 치", "patch panel 및 성단 등", "6 port 이하"] },
  { code: "통신 4-3-3", name: "Patch 및 Line Cord 설치 및 정리", spec: "", unit: "10개", labors: {"통신케이블공": 0.4, "보통인부": 0.54}, category: "cable", page: 121, keywords: ["patch panel 및 성단 등", "patch 및 line cord 설치 및 정리"] },
  { code: "통신 4-3-3", name: "성 단", spec: "Patch Panel", unit: "Port", labors: {"통신케이블공": 0.02, "보통인부": 0.02}, category: "cable", page: 121, keywords: ["patch panel", "성 단", "patch panel 및 성단 등"] },
  { code: "통신 4-3-3", name: "성 단", spec: "110 Block", unit: "25P1Line", labors: {"통신케이블공": 0.1, "보통인부": 0.1}, category: "cable", page: 121, keywords: ["110 block", "성 단", "patch panel 및 성단 등"] },
  { code: "통신 4-3-3", name: "회 선 시 험", spec: "", unit: "Port (또는4P)", labors: {"통신케이블공": 0.05, "보통인부": 0.03}, category: "cable", page: 121, keywords: ["patch panel 및 성단 등", "회 선 시 험"] },
  { code: "통신 4-4-1", name: "1 C", spec: "0.10", unit: "10m", labors: {"통신케이블공": 0.09}, category: "cable", page: 123, keywords: ["제어용 케이블", "0.10", "1 c"] },
  { code: "통신 4-4-1", name: "2 C", spec: "0.14", unit: "10m", labors: {"통신케이블공": 0.12}, category: "cable", page: 123, keywords: ["2 c", "0.14", "제어용 케이블"] },
  { code: "통신 4-4-1", name: "3 C", spec: "0.19", unit: "10m", labors: {"통신케이블공": 0.17}, category: "cable", page: 123, keywords: ["0.19", "3 c", "제어용 케이블"] },
  { code: "통신 4-4-1", name: "4 C", spec: "0.26", unit: "10m", labors: {"통신케이블공": 0.23}, category: "cable", page: 123, keywords: ["0.26", "제어용 케이블", "4 c"] },
  { code: "통신 4-4-1", name: "5 C", spec: "0.32", unit: "10m", labors: {"통신케이블공": 0.29}, category: "cable", page: 123, keywords: ["5 c", "제어용 케이블", "0.32"] },
  { code: "통신 4-4-1", name: "6 C", spec: "0.35", unit: "10m", labors: {"통신케이블공": 0.32}, category: "cable", page: 123, keywords: ["6 c", "0.35", "제어용 케이블"] },
  { code: "통신 4-4-1", name: "7 C", spec: "0.39", unit: "10m", labors: {"통신케이블공": 0.35}, category: "cable", page: 123, keywords: ["0.39", "7 c", "제어용 케이블"] },
  { code: "통신 4-4-1", name: "8 C", spec: "0.42", unit: "10m", labors: {"통신케이블공": 0.38}, category: "cable", page: 123, keywords: ["0.42", "8 c", "제어용 케이블"] },
  { code: "통신 4-4-1", name: "10 C", spec: "0.48", unit: "10m", labors: {"통신케이블공": 0.43}, category: "cable", page: 123, keywords: ["10 c", "제어용 케이블", "0.48"] },
  { code: "통신 4-4-1", name: "12 C", spec: "0.54", unit: "10m", labors: {"통신케이블공": 0.49}, category: "cable", page: 123, keywords: ["12 c", "제어용 케이블", "0.54"] },
  { code: "통신 4-4-1", name: "14 C", spec: "0.59", unit: "10m", labors: {"통신케이블공": 0.53}, category: "cable", page: 123, keywords: ["0.59", "14 c", "제어용 케이블"] },
  { code: "통신 4-4-1", name: "19 C", spec: "0.72", unit: "10m", labors: {"통신케이블공": 0.65}, category: "cable", page: 123, keywords: ["0.72", "19 c", "제어용 케이블"] },
  { code: "통신 4-4-1", name: "24 C", spec: "0.84", unit: "10m", labors: {"통신케이블공": 0.76}, category: "cable", page: 123, keywords: ["0.84", "제어용 케이블", "24 c"] },
  { code: "통신 4-4-1", name: "30 C", spec: "0.98", unit: "10m", labors: {"통신케이블공": 0.86}, category: "cable", page: 123, keywords: ["0.98", "제어용 케이블", "30 c"] },
  { code: "통신 4-4-1", name: "50 C", spec: "1.12", unit: "10m", labors: {"통신케이블공": 1.01}, category: "cable", page: 123, keywords: ["50 c", "제어용 케이블", "1.12"] },
  { code: "통신 4-5-1", name: "1. 포장해체 및 점검", spec: "", unit: "드럼", labors: {"무선안테나공": 0.2, "보통인부": 0.25}, category: "cable", page: 124, keywords: ["1. 포장해체 및 점검", "방사형 및 누설동축케이블"] },
  { code: "통신 4-5-1", name: "2. 포설", spec: "", unit: "10m", labors: {"통신관련기사": 0.5, "무선안테나공": 0.67, "통신외선공": 0.83, "보통인부": 0.5}, category: "cable", page: 124, keywords: ["2. 포설", "방사형 및 누설동축케이블"] },
  { code: "통신 4-5-1", name: "3. 최종특성시험", spec: "", unit: "식", labors: {"통신관련기사": 3.0}, category: "cable", page: 124, keywords: ["3. 최종특성시험", "방사형 및 누설동축케이블"] },
  { code: "통신 4-5-2", name: "Ø 1/2″", spec: "", unit: "개", labors: {"통신내선공": 0.06}, category: "cable", page: 124, keywords: ["커넥터", "ø 1/2″"] },
  { code: "통신 4-5-2", name: "Ø ⅞″", spec: "", unit: "개", labors: {"통신내선공": 0.07}, category: "cable", page: 124, keywords: ["커넥터", "ø ⅞″"] },
  { code: "통신 4-5-2", name: "Ø 1⅝″", spec: "", unit: "개", labors: {"통신내선공": 0.09}, category: "cable", page: 124, keywords: ["커넥터", "ø 1⅝″"] },
  { code: "통신 4-5-2", name: "Ø 3⅛″", spec: "", unit: "개", labors: {"통신내선공": 0.11}, category: "cable", page: 124, keywords: ["커넥터", "ø 3⅛″"] },
  { code: "통신 4-5-2", name: "Ø 4″", spec: "", unit: "개", labors: {"통신내선공": 0.12}, category: "cable", page: 124, keywords: ["커넥터", "ø 4″"] },
  { code: "통신 4-5-2", name: "Ø 5″", spec: "", unit: "개", labors: {"통신내선공": 0.13}, category: "cable", page: 124, keywords: ["커넥터", "ø 5″"] },
  { code: "통신 4-5-2", name: "Ø 6″", spec: "", unit: "개", labors: {"통신내선공": 0.14}, category: "cable", page: 124, keywords: ["커넥터", "ø 6″"] },
  { code: "통신 4-6-1", name: "16㎟이하 단심", spec: "", unit: "m", labors: {"통신케이블공": 0.23}, category: "cable", page: 125, keywords: ["16㎟이하 단심", "통신용 구내 전력케이블"] },
  { code: "통신 4-6-1", name: "25㎟이하", spec: "", unit: "m", labors: {"통신케이블공": 0.3}, category: "cable", page: 125, keywords: ["통신용 구내 전력케이블", "25㎟이하"] },
  { code: "통신 4-6-1", name: "38㎟이하", spec: "", unit: "m", labors: {"통신케이블공": 0.36}, category: "cable", page: 125, keywords: ["통신용 구내 전력케이블", "38㎟이하"] },
  { code: "통신 4-6-1", name: "50㎟이하", spec: "", unit: "m", labors: {"통신케이블공": 0.43}, category: "cable", page: 125, keywords: ["50㎟이하", "통신용 구내 전력케이블"] },
  { code: "통신 4-6-1", name: "60㎟이하", spec: "", unit: "m", labors: {"통신케이블공": 0.49}, category: "cable", page: 125, keywords: ["60㎟이하", "통신용 구내 전력케이블"] },
  { code: "통신 4-6-1", name: "70㎟이하", spec: "", unit: "m", labors: {"통신케이블공": 0.57}, category: "cable", page: 125, keywords: ["통신용 구내 전력케이블", "70㎟이하"] },
  { code: "통신 4-6-1", name: "80㎟이하", spec: "", unit: "m", labors: {"통신케이블공": 0.6}, category: "cable", page: 125, keywords: ["통신용 구내 전력케이블", "80㎟이하"] },
  { code: "통신 4-6-1", name: "100㎟이하", spec: "", unit: "m", labors: {"통신케이블공": 0.71}, category: "cable", page: 125, keywords: ["100㎟이하", "통신용 구내 전력케이블"] },
  { code: "통신 4-6-1", name: "125㎟이하", spec: "", unit: "m", labors: {"통신케이블공": 0.84}, category: "cable", page: 125, keywords: ["125㎟이하", "통신용 구내 전력케이블"] },
  { code: "통신 4-6-1", name: "150㎟이하", spec: "", unit: "m", labors: {"통신케이블공": 0.97}, category: "cable", page: 125, keywords: ["통신용 구내 전력케이블", "150㎟이하"] },
  { code: "통신 4-6-1", name: "185㎟이하", spec: "", unit: "m", labors: {"통신케이블공": 1.08}, category: "cable", page: 125, keywords: ["통신용 구내 전력케이블", "185㎟이하"] },
  { code: "통신 4-6-1", name: "200㎟이하", spec: "", unit: "m", labors: {"통신케이블공": 1.17}, category: "cable", page: 125, keywords: ["200㎟이하", "통신용 구내 전력케이블"] },
  { code: "통신 4-6-1", name: "240㎟이하", spec: "", unit: "m", labors: {"통신케이블공": 1.36}, category: "cable", page: 125, keywords: ["240㎟이하", "통신용 구내 전력케이블"] },
  { code: "통신 4-6-1", name: "250㎟이하", spec: "", unit: "m", labors: {"통신케이블공": 1.42}, category: "cable", page: 125, keywords: ["통신용 구내 전력케이블", "250㎟이하"] },
  { code: "통신 4-6-1", name: "300㎟이하", spec: "", unit: "m", labors: {"통신케이블공": 1.59}, category: "cable", page: 125, keywords: ["통신용 구내 전력케이블", "300㎟이하"] },
  { code: "통신 4-6-1", name: "325㎟이하", spec: "", unit: "m", labors: {"통신케이블공": 1.72}, category: "cable", page: 125, keywords: ["통신용 구내 전력케이블", "325㎟이하"] },
  { code: "통신 4-6-1", name: "400㎟이하", spec: "", unit: "m", labors: {"통신케이블공": 2.05}, category: "cable", page: 125, keywords: ["통신용 구내 전력케이블", "400㎟이하"] },
  { code: "통신 4-6-1", name: "500㎟이하", spec: "", unit: "m", labors: {"통신케이블공": 2.4}, category: "cable", page: 125, keywords: ["통신용 구내 전력케이블", "500㎟이하"] },
  { code: "통신 4-6-1", name: "630㎟이하", spec: "", unit: "m", labors: {"통신케이블공": 2.85}, category: "cable", page: 125, keywords: ["통신용 구내 전력케이블", "630㎟이하"] },
  { code: "통신 4-6-1", name: "800㎟이하", spec: "", unit: "m", labors: {"통신케이블공": 3.39}, category: "cable", page: 125, keywords: ["통신용 구내 전력케이블", "800㎟이하"] },
  { code: "통신 4-6-1", name: "1,000㎟이하", spec: "", unit: "m", labors: {"통신케이블공": 4.15}, category: "cable", page: 125, keywords: ["통신용 구내 전력케이블", "1,000㎟이하"] },
  { code: "통신 4-7-1", name: "20p 이하 [지중케이블]", spec: "", unit: "m", labors: {"통신케이블공": 0.44, "보통인부": 0.69}, category: "cable", page: 128, keywords: ["지중 및 가공케이블", "20p 이하 [지중케이블]"] },
  { code: "통신 4-7-1", name: "20p 이하 [가공케이블]", spec: "", unit: "m", labors: {"통신케이블공": 0.4, "보통인부": 0.36}, category: "cable", page: 128, keywords: ["20p 이하 [가공케이블]", "지중 및 가공케이블"] },
  { code: "통신 4-7-1", name: "50p 이하 [지중케이블]", spec: "", unit: "m", labors: {"통신케이블공": 0.59, "보통인부": 0.84}, category: "cable", page: 128, keywords: ["50p 이하 [지중케이블]", "지중 및 가공케이블"] },
  { code: "통신 4-7-1", name: "50p 이하 [가공케이블]", spec: "", unit: "m", labors: {"통신케이블공": 0.48, "보통인부": 0.44}, category: "cable", page: 128, keywords: ["지중 및 가공케이블", "50p 이하 [가공케이블]"] },
  { code: "통신 4-7-1", name: "300p 이하 [지중케이블]", spec: "", unit: "m", labors: {"통신케이블공": 0.67, "보통인부": 1.21}, category: "cable", page: 128, keywords: ["지중 및 가공케이블", "300p 이하 [지중케이블]"] },
  { code: "통신 4-7-1", name: "300p 이하 [가공케이블]", spec: "", unit: "m", labors: {"통신케이블공": 0.98, "보통인부": 0.88}, category: "cable", page: 128, keywords: ["300p 이하 [가공케이블]", "지중 및 가공케이블"] },
  { code: "통신 4-7-1", name: "900p 이하 [지중케이블]", spec: "", unit: "m", labors: {"통신케이블공": 0.99, "보통인부": 2.22}, category: "cable", page: 128, keywords: ["900p 이하 [지중케이블]", "지중 및 가공케이블"] },
  { code: "통신 4-7-1", name: "900p 이하 [가공케이블]", spec: "", unit: "m", labors: {"통신케이블공": 1.41, "보통인부": 1.26}, category: "cable", page: 128, keywords: ["지중 및 가공케이블", "900p 이하 [가공케이블]"] },
  { code: "통신 4-7-1", name: "3,600p 이하 [지중케이블]", spec: "", unit: "m", labors: {"통신케이블공": 1.38, "보통인부": 2.68}, category: "cable", page: 128, keywords: ["지중 및 가공케이블", "3,600p 이하 [지중케이블]"] },
  { code: "통신 4-7-2-1", name: "0.4㎜ 심선접속", spec: "", unit: "개", labors: {"통신케이블공": 0.3, "보통인부": 0.21}, category: "cable", page: 129, keywords: ["심선개별 보통접속", "0.4㎜ 심선접속"] },
  { code: "통신 4-7-2-1", name: "0.5㎜", spec: "", unit: "개", labors: {"통신케이블공": 0.33, "보통인부": 0.23}, category: "cable", page: 129, keywords: ["심선개별 보통접속", "0.5㎜"] },
  { code: "통신 4-7-2-1", name: "0.65㎜", spec: "", unit: "개", labors: {"통신케이블공": 0.36, "보통인부": 0.25}, category: "cable", page: 129, keywords: ["0.65㎜", "심선개별 보통접속"] },
  { code: "통신 4-7-2-1", name: "0.9㎜", spec: "", unit: "개", labors: {"통신케이블공": 0.39, "보통인부": 0.27}, category: "cable", page: 129, keywords: ["심선개별 보통접속", "0.9㎜"] },
  { code: "통신 4-7-2-2", name: "0.4㎜ 심선접속", spec: "", unit: "개", labors: {"통신케이블공": 0.12, "보통인부": 0.09}, category: "cable", page: 129, keywords: ["25회선 심선접속자(커넥터)에 의한 심선 보통접속", "0.4㎜ 심선접속"] },
  { code: "통신 4-7-2-2", name: "0.5㎜", spec: "", unit: "개", labors: {"통신케이블공": 0.13, "보통인부": 0.1}, category: "cable", page: 129, keywords: ["25회선 심선접속자(커넥터)에 의한 심선 보통접속", "0.5㎜"] },
  { code: "통신 4-7-2-2", name: "0.65㎜", spec: "", unit: "개", labors: {"통신케이블공": 0.14, "보통인부": 0.11}, category: "cable", page: 129, keywords: ["25회선 심선접속자(커넥터)에 의한 심선 보통접속", "0.65㎜"] },
  { code: "통신 4-7-2-2", name: "0.9㎜", spec: "", unit: "개", labors: {"통신케이블공": 0.15, "보통인부": 0.12}, category: "cable", page: 129, keywords: ["25회선 심선접속자(커넥터)에 의한 심선 보통접속", "0.9㎜"] },
  { code: "통신 4-7-3", name: "3P 이상", spec: "", unit: "m", labors: {"통신케이블공": 0.22, "보통인부": 0.22}, category: "cable", page: 130, keywords: ["3p 이상", "소대시내케이블 보통접속"] },
  { code: "통신 4-7-3", name: "10P", spec: "", unit: "m", labors: {"통신케이블공": 0.27, "보통인부": 0.27}, category: "cable", page: 130, keywords: ["소대시내케이블 보통접속", "10p"] },
  { code: "통신 4-7-3", name: "20P", spec: "", unit: "m", labors: {"통신케이블공": 0.29, "보통인부": 0.29}, category: "cable", page: 130, keywords: ["소대시내케이블 보통접속", "20p"] },
  { code: "통신 4-7-3", name: "25P", spec: "", unit: "m", labors: {"통신케이블공": 0.3, "보통인부": 0.3}, category: "cable", page: 130, keywords: ["소대시내케이블 보통접속", "25p"] },
  { code: "통신 4-7-3", name: "30P", spec: "", unit: "m", labors: {"통신케이블공": 0.31, "보통인부": 0.31}, category: "cable", page: 130, keywords: ["소대시내케이블 보통접속", "30p"] },
  { code: "통신 4-7-3", name: "50P ~ 100P 미만", spec: "", unit: "m", labors: {"통신케이블공": 0.33, "보통인부": 0.33}, category: "cable", page: 130, keywords: ["소대시내케이블 보통접속", "50p ~ 100p 미만"] },
  { code: "통신 4-7-4-1", name: "국내 - 국외", spec: "0.4㎜ ~ 0.5㎜", unit: "개", labors: {"통신케이블공": 4.45, "보통인부": 2.49}, category: "cable", page: 130, keywords: ["국내 - 국외", "0.4㎜ ~ 0.5㎜", "1, 5회선 심선접속자(커넥터)에 의한 절체"] },
  { code: "통신 4-7-4-1", name: "2 점 간", spec: "0.65㎜ ~ 0.9㎜", unit: "개", labors: {"통신케이블공": 4.51, "보통인부": 2.53}, category: "cable", page: 130, keywords: ["0.65㎜ ~ 0.9㎜", "2 점 간", "1, 5회선 심선접속자(커넥터)에 의한 절체"] },
  { code: "통신 4-7-4-1", name: "국 외", spec: "0.4㎜ ~ 0.5㎜", unit: "개", labors: {"통신케이블공": 2.53, "보통인부": 1.61}, category: "cable", page: 130, keywords: ["국 외", "0.4㎜ ~ 0.5㎜", "1, 5회선 심선접속자(커넥터)에 의한 절체"] },
  { code: "통신 4-7-4-2", name: "국내 - 국외", spec: "0.4㎜ ~ 0.5㎜", unit: "개", labors: {"통신케이블공": 2.83, "보통인부": 2.0}, category: "cable", page: 131, keywords: ["25회선 심선접속자(커넥터)에 의한 절체", "국내 - 국외", "0.4㎜ ~ 0.5㎜"] },
  { code: "통신 4-7-4-2", name: "2 점 간", spec: "0.65㎜ ~ 0.9㎜", unit: "개", labors: {"통신케이블공": 2.86, "보통인부": 2.03}, category: "cable", page: 131, keywords: ["0.65㎜ ~ 0.9㎜", "25회선 심선접속자(커넥터)에 의한 절체", "2 점 간"] },
  { code: "통신 4-7-4-2", name: "국 외", spec: "0.4㎜ ~ 0.5㎜", unit: "개", labors: {"통신케이블공": 1.48, "보통인부": 1.12}, category: "cable", page: 131, keywords: ["25회선 심선접속자(커넥터)에 의한 절체", "국 외", "0.4㎜ ~ 0.5㎜"] },
  { code: "통신 4-7-5-1", name: "열수축관 - 32", spec: "", unit: "m", labors: {"통신케이블공": 0.1, "보통인부": 0.1}, category: "cable", page: 132, keywords: ["열수축관 - 32", "열수축관에 의한 케이블 외피접속"] },
  { code: "통신 4-7-5-1", name: "열수축관 - 43", spec: "", unit: "m", labors: {"통신케이블공": 0.11, "보통인부": 0.11}, category: "cable", page: 132, keywords: ["열수축관 - 43", "열수축관에 의한 케이블 외피접속"] },
  { code: "통신 4-7-5-1", name: "열수축관 - 62", spec: "", unit: "m", labors: {"통신케이블공": 0.15, "보통인부": 0.12}, category: "cable", page: 132, keywords: ["열수축관 - 62", "열수축관에 의한 케이블 외피접속"] },
  { code: "통신 4-7-5-1", name: "열수축관 - 72", spec: "", unit: "m", labors: {"통신케이블공": 0.17, "보통인부": 0.13}, category: "cable", page: 132, keywords: ["열수축관에 의한 케이블 외피접속", "열수축관 - 72"] },
  { code: "통신 4-7-5-1", name: "열수축관 - 92, 93", spec: "", unit: "m", labors: {"통신케이블공": 0.19, "보통인부": 0.14}, category: "cable", page: 132, keywords: ["열수축관 - 92, 93", "열수축관에 의한 케이블 외피접속"] },
  { code: "통신 4-7-5-1", name: "열수축관 - 101", spec: "", unit: "m", labors: {"통신케이블공": 0.2, "보통인부": 0.15}, category: "cable", page: 132, keywords: ["열수축관 - 101", "열수축관에 의한 케이블 외피접속"] },
  { code: "통신 4-7-5-1", name: "열수축관 - 122", spec: "", unit: "m", labors: {"통신케이블공": 0.21, "보통인부": 0.16}, category: "cable", page: 132, keywords: ["열수축관 - 122", "열수축관에 의한 케이블 외피접속"] },
  { code: "통신 4-7-5-1", name: "열수축관 - 139", spec: "", unit: "m", labors: {"통신케이블공": 0.22, "보통인부": 0.17}, category: "cable", page: 132, keywords: ["열수축관 - 139", "열수축관에 의한 케이블 외피접속"] },
  { code: "통신 4-7-5-1", name: "열수축관 - 150", spec: "", unit: "m", labors: {"통신케이블공": 0.24, "보통인부": 0.18}, category: "cable", page: 132, keywords: ["열수축관 - 150", "열수축관에 의한 케이블 외피접속"] },
  { code: "통신 4-7-5-1", name: "열수축관 - 160", spec: "", unit: "m", labors: {"통신케이블공": 0.25, "보통인부": 0.19}, category: "cable", page: 132, keywords: ["열수축관 - 160", "열수축관에 의한 케이블 외피접속"] },
  { code: "통신 4-7-5-1", name: "열수축관 - 180", spec: "", unit: "m", labors: {"통신케이블공": 0.27, "보통인부": 0.2}, category: "cable", page: 132, keywords: ["열수축관 - 180", "열수축관에 의한 케이블 외피접속"] },
  { code: "통신 4-7-5-1", name: "열수축관 - 190", spec: "", unit: "m", labors: {"통신케이블공": 0.29, "보통인부": 0.21}, category: "cable", page: 132, keywords: ["열수축관 - 190", "열수축관에 의한 케이블 외피접속"] },
  { code: "통신 4-7-5-1", name: "열수축관 - 200", spec: "", unit: "m", labors: {"통신케이블공": 0.31, "보통인부": 0.22}, category: "cable", page: 132, keywords: ["열수축관 - 200", "열수축관에 의한 케이블 외피접속"] },
  { code: "통신 4-7-5-2", name: "PB - 25/15 - 100", spec: "", unit: "m", labors: {"통신케이블공": 0.09, "보통인부": 0.06}, category: "cable", page: 132, keywords: ["pb - 25/15 - 100", "열수축관에 의한 격벽용 케이블 외피접속"] },
  { code: "통신 4-7-5-2", name: "PB - 50/20 - 150", spec: "", unit: "m", labors: {"통신케이블공": 0.1, "보통인부": 0.07}, category: "cable", page: 132, keywords: ["열수축관에 의한 격벽용 케이블 외피접속", "pb - 50/20 - 150"] },
  { code: "통신 4-7-5-2", name: "PB - 70/50 - 200", spec: "", unit: "m", labors: {"통신케이블공": 0.13, "보통인부": 0.09}, category: "cable", page: 132, keywords: ["pb - 70/50 - 200", "열수축관에 의한 격벽용 케이블 외피접속"] },
  { code: "통신 4-7-5-2", name: "PB - 100/70 - 250", spec: "", unit: "m", labors: {"통신케이블공": 0.17, "보통인부": 0.1}, category: "cable", page: 132, keywords: ["열수축관에 의한 격벽용 케이블 외피접속", "pb - 100/70 - 250"] },
  { code: "통신 4-7-5-3", name: "80 - 500", spec: "", unit: "m", labors: {"통신케이블공": 0.33, "보통인부": 0.31}, category: "cable", page: 133, keywords: ["80 - 500", "접속관(조립식, 케이블) 외피접속"] },
  { code: "통신 4-7-5-3", name: "100 - 660", spec: "", unit: "m", labors: {"통신케이블공": 0.37, "보통인부": 0.36}, category: "cable", page: 133, keywords: ["100 - 660", "접속관(조립식, 케이블) 외피접속"] },
  { code: "통신 4-7-5-3", name: "120 - 660", spec: "", unit: "m", labors: {"통신케이블공": 0.38, "보통인부": 0.37}, category: "cable", page: 133, keywords: ["120 - 660", "접속관(조립식, 케이블) 외피접속"] },
  { code: "통신 4-7-5-3", name: "140 - 660", spec: "", unit: "m", labors: {"통신케이블공": 0.38, "보통인부": 0.37}, category: "cable", page: 133, keywords: ["140 - 660", "접속관(조립식, 케이블) 외피접속"] },
  { code: "통신 4-7-5-3", name: "160 - 700", spec: "", unit: "m", labors: {"통신케이블공": 0.41, "보통인부": 0.4}, category: "cable", page: 133, keywords: ["접속관(조립식, 케이블) 외피접속", "160 - 700"] },
  { code: "통신 4-7-5-3", name: "180 - 700", spec: "", unit: "m", labors: {"통신케이블공": 0.44, "보통인부": 0.42}, category: "cable", page: 133, keywords: ["접속관(조립식, 케이블) 외피접속", "180 - 700"] },
  { code: "통신 4-7-5-3", name: "200 - 700", spec: "", unit: "m", labors: {"통신케이블공": 0.46, "보통인부": 0.44}, category: "cable", page: 133, keywords: ["200 - 700", "접속관(조립식, 케이블) 외피접속"] },
  { code: "통신 4-7-5-3", name: "240 - 700", spec: "", unit: "m", labors: {"통신케이블공": 0.47, "보통인부": 0.46}, category: "cable", page: 133, keywords: ["240 - 700", "접속관(조립식, 케이블) 외피접속"] },
  { code: "통신 4-7-6", name: "0.4, 0.5mm", spec: "", unit: "m", labors: {"통신케이블공": 0.5, "보통인부": 0.25}, category: "cable", page: 134, keywords: ["케이블 국내성단", "0.4, 0.5mm"] },
  { code: "통신 4-7-6", name: "0.65mm", spec: "", unit: "m", labors: {"통신케이블공": 0.6, "보통인부": 0.3}, category: "cable", page: 134, keywords: ["케이블 국내성단", "0.65mm"] },
  { code: "통신 4-7-6", name: "0.9mm", spec: "", unit: "m", labors: {"통신케이블공": 0.65, "보통인부": 0.33}, category: "cable", page: 134, keywords: ["0.9mm", "케이블 국내성단"] },
  { code: "통신 4-8-1", name: "케이블 포 설", spec: "2.5㎟×20C 이하", unit: "10m", labors: {"통신케이블공": 0.19}, category: "cable", page: 135, keywords: ["2.5㎟×20c 이하", "음향 및 영상케이블", "케이블 포 설"] },
  { code: "통신 4-8-1", name: "커넥터 접 속", spec: "-", unit: "10개", labors: {"통신내선공": 1.61}, category: "cable", page: 135, keywords: ["음향 및 영상케이블", "커넥터 접 속"] },
  { code: "통신 4-8-2", name: "접속", spec: "2.5㎟ 이하", unit: "코어", labors: {"통신케이블공": 0.03, "보통인부": 0.01}, category: "cable", page: 136, keywords: ["접속", "fr 케이블 접속 및 성단", "2.5㎟ 이하"] },
  { code: "통신 4-8-2", name: "레진 주입형 저압케이블 접속재", spec: "-", unit: "개", labors: {"통신케이블공": 0.18, "보통인부": 0.05}, category: "cable", page: 136, keywords: ["fr 케이블 접속 및 성단", "레진 주입형 저압케이블 접속재"] },
  { code: "통신 4-8-2", name: "성단", spec: "2.5㎟ 이하", unit: "코어", labors: {"통신케이블공": 0.02, "보통인부": 0.02}, category: "cable", page: 136, keywords: ["성단", "fr 케이블 접속 및 성단", "2.5㎟ 이하"] },
  { code: "통신 4-8-2", name: "중간접속", spec: "2.5㎟ 이하", unit: "코어", labors: {"통신케이블공": 0.02}, category: "cable", page: 136, keywords: ["fr 케이블 접속 및 성단", "2.5㎟ 이하", "중간접속"] },
  { code: "통신 4-9-1", name: "FTTH 인입선 가설", spec: "", unit: "10m", labors: {"광케이블설치사": 0.08, "통신외선공": 0.07}, category: "cable", page: 137, keywords: ["ftth 인입선 가설", "ftth 인입선"] },
  { code: "통신 4-9-2", name: "점퍼선(2개연)", spec: "", unit: "10조", labors: {"통신내선공": 0.37}, category: "cable", page: 137, keywords: ["점퍼선(2개연)", "점퍼선 구성품"] },
  { code: "통신 4-9-2", name: "CRT 이용 선번정리", spec: "", unit: "10회선", labors: {"특별인부": 0.07}, category: "cable", page: 137, keywords: ["점퍼선 구성품", "crt 이용 선번정리"] },
  { code: "통신 4-9-3", name: "옥외 꼬임케이블 인입선 가설", spec: "", unit: "조", labors: {"통신케이블공": 0.11, "통신외선공": 0.11}, category: "cable", page: 137, keywords: ["옥외 꼬임케이블 인입선", "옥외 꼬임케이블 인입선 가설"] },
  { code: "통신 4-9-3", name: "PVC 케 이 블 4P 이하", spec: "", unit: "m", labors: {"통신케이블공": 0.17}, category: "cable", page: 138, keywords: ["옥외 꼬임케이블 인입선", "pvc 케 이 블 4p 이하"] },
  { code: "통신 4-9-3", name: "10P", spec: "", unit: "m", labors: {"통신케이블공": 0.18}, category: "cable", page: 138, keywords: ["옥외 꼬임케이블 인입선", "10p"] },
  { code: "통신 4-9-3", name: "20P", spec: "", unit: "m", labors: {"통신케이블공": 0.22}, category: "cable", page: 138, keywords: ["옥외 꼬임케이블 인입선", "20p"] },
  { code: "통신 4-9-3", name: "30P", spec: "", unit: "m", labors: {"통신케이블공": 0.23}, category: "cable", page: 138, keywords: ["옥외 꼬임케이블 인입선", "30p"] },
  { code: "통신 4-9-3", name: "50P", spec: "", unit: "m", labors: {"통신케이블공": 0.32}, category: "cable", page: 138, keywords: ["옥외 꼬임케이블 인입선", "50p"] },
  { code: "통신 4-9-3", name: "100P", spec: "", unit: "m", labors: {"통신케이블공": 0.45}, category: "cable", page: 138, keywords: ["옥외 꼬임케이블 인입선", "100p"] },
  { code: "통신 4-9-3", name: "PVC 케 이 블 200P 이하", spec: "", unit: "m", labors: {"통신케이블공": 1.1}, category: "cable", page: 138, keywords: ["옥외 꼬임케이블 인입선", "pvc 케 이 블 200p 이하"] },
  { code: "통신 4-9-3", name: "300P", spec: "", unit: "m", labors: {"통신케이블공": 1.6}, category: "cable", page: 138, keywords: ["300p", "옥외 꼬임케이블 인입선"] },
  { code: "통신 4-9-3", name: "400P", spec: "", unit: "m", labors: {"통신케이블공": 2.2}, category: "cable", page: 138, keywords: ["옥외 꼬임케이블 인입선", "400p"] },
  { code: "통신 4-9-3", name: "600P", spec: "", unit: "m", labors: {"통신케이블공": 3.3}, category: "cable", page: 138, keywords: ["옥외 꼬임케이블 인입선", "600p"] },
  { code: "통신 4-11-1", name: "300P 이하", spec: "0.51", unit: "100m", labors: {"보통인부": 0.38}, category: "cable", page: 139, keywords: ["0.51", "300p 이하", "케이블 절단과 공드럼 해체"] },
  { code: "통신 4-11-1", name: "300P 초과 ~ 1,200P 이하", spec: "1.17", unit: "100m", labors: {"보통인부": 0.88}, category: "cable", page: 139, keywords: ["1.17", "300p 초과 ~ 1,200p 이하", "케이블 절단과 공드럼 해체"] },
  { code: "통신 4-11-1", name: "1,200P 초과", spec: "1.46", unit: "100m", labors: {"보통인부": 1.1}, category: "cable", page: 139, keywords: ["케이블 절단과 공드럼 해체", "1.46", "1,200p 초과"] },
  { code: "통신 4-11-1", name: "광섬유케이블", spec: "", unit: "100m", labors: {"보통인부": 0.28}, category: "cable", page: 139, keywords: ["광섬유케이블", "케이블 절단과 공드럼 해체"] },
  { code: "통신 4-11-1", name: "공드럼 해체", spec: "", unit: "드럼", labors: {"보통인부": 0.5}, category: "cable", page: 139, keywords: ["공드럼 해체", "케이블 절단과 공드럼 해체"] },
  { code: "통신 4-11-2", name: "인 공", spec: "", unit: "기", labors: {"보통인부": 0.52}, category: "cable", page: 139, keywords: ["인 공", "케이블 보호"] },
  { code: "통신 4-11-2", name: "수 공", spec: "", unit: "기", labors: {"보통인부": 0.26}, category: "cable", page: 139, keywords: ["케이블 보호", "수 공"] },
  { code: "통신 4-11-3", name: "표 주 세 움", spec: "", unit: "m", labors: {"통신외선공": 0.25, "보통인부": 0.51}, category: "cable", page: 139, keywords: ["표 주 세 움", "통신케이블 보호용 부대공정"] },
  { code: "통신 4-11-3", name: "횡 평 강 및 철 물 설 치", spec: "", unit: "m", labors: {"통신외선공": 1.0, "보통인부": 1.0}, category: "cable", page: 139, keywords: ["횡 평 강 및 철 물 설 치", "통신케이블 보호용 부대공정"] },
  { code: "통신 4-11-6", name: "플렛트 폼 설치", spec: "", unit: "대", labors: {"통신설비공": 1.0, "보통인부": 1.0}, category: "cable", page: 140, keywords: ["플렛트 폼 설치", "중화트랜스"] },
  { code: "통신 4-11-6", name: "25P 유도중화트랜스 설치", spec: "", unit: "개", labors: {"통신케이블공": 1.7, "보통인부": 1.0}, category: "cable", page: 140, keywords: ["25p 유도중화트랜스 설치", "중화트랜스"] },
  { code: "통신 4-11-6", name: "50P", spec: "", unit: "개", labors: {"통신케이블공": 2.54, "보통인부": 1.62}, category: "cable", page: 140, keywords: ["중화트랜스", "50p"] },
  { code: "통신 4-11-6", name: "100P", spec: "", unit: "개", labors: {"통신케이블공": 3.76, "보통인부": 1.89}, category: "cable", page: 140, keywords: ["중화트랜스", "100p"] },
  { code: "통신 4-11-6", name: "200P", spec: "", unit: "개", labors: {"통신케이블공": 6.16, "보통인부": 2.29}, category: "cable", page: 140, keywords: ["200p", "중화트랜스"] },
  { code: "통신 4-11-6", name: "300P", spec: "", unit: "개", labors: {"통신케이블공": 8.57, "보통인부": 4.16}, category: "cable", page: 140, keywords: ["300p", "중화트랜스"] },
  { code: "통신 4-11-7", name: "거리 50m당", spec: "", unit: "개", labors: {"통신외선공": 0.32, "보통인부": 0.16}, category: "cable", page: 140, keywords: ["수목가지치기", "거리 50m당"] },
  { code: "통신 4-11-9-1", name: "카드사용", spec: "", unit: "개", labors: {"통신설비공": 0.36}, category: "cable", page: 141, keywords: ["카드사용", "기기신설"] },
  { code: "통신 4-11-9-2", name: "제 어 기", spec: "", unit: "개", labors: {"통신내선공": 0.09}, category: "cable", page: 141, keywords: ["개폐기 및 함체", "제 어 기"] },
  { code: "통신 4-11-9-2", name: "썬 스 위 치", spec: "", unit: "개", labors: {"통신내선공": 0.07}, category: "cable", page: 141, keywords: ["썬 스 위 치", "개폐기 및 함체"] },
  { code: "통신 4-11-9-2", name: "불 편 안 내 함", spec: "", unit: "개", labors: {"통신설비공": 0.06}, category: "cable", page: 141, keywords: ["개폐기 및 함체", "불 편 안 내 함"] },
  { code: "통신 4-11-9-2", name: "점 검 함", spec: "", unit: "개", labors: {"통신설비공": 0.06}, category: "cable", page: 141, keywords: ["점 검 함", "개폐기 및 함체"] },
  { code: "통신 4-11-9-2", name: "누 전 차 단 기", spec: "", unit: "개", labors: {"통신내선공": 0.16}, category: "cable", page: 141, keywords: ["누 전 차 단 기", "개폐기 및 함체"] },
  { code: "통신 4-11-9-2", name: "커버나이프 스위치", spec: "", unit: "개", labors: {"통신내선공": 0.08}, category: "cable", page: 141, keywords: ["개폐기 및 함체", "커버나이프 스위치"] },
  { code: "통신 4-11-9-3", name: "일 반 A 형", spec: "", unit: "기", labors: {"통신설비공": 0.2, "보통인부": 0.63}, category: "cable", page: 142, keywords: ["일 반 a 형", "부스"] },
  { code: "통신 4-11-9-3", name: "일 반 B 형", spec: "", unit: "실", labors: {"통신설비공": 0.2, "보통인부": 0.63}, category: "cable", page: 142, keywords: ["일 반 b 형", "부스"] },
  { code: "통신 4-11-9-3", name: "특 수 방 음 형", spec: "", unit: "실", labors: {"통신설비공": 0.26, "보통인부": 0.88}, category: "cable", page: 142, keywords: ["부스", "특 수 방 음 형"] },
  { code: "통신 4-11-9-3", name: "지 체 부 자 유 형", spec: "", unit: "기", labors: {"통신설비공": 0.25, "보통인부": 1.04}, category: "cable", page: 142, keywords: ["부스", "지 체 부 자 유 형"] },
  { code: "통신 5-1-1", name: "철가", spec: "마킹 및 레벨링", unit: "개소", labors: {"통신설비공": 0.05, "보통인부": 0.05}, category: "device", page: 145, keywords: ["철가", "기초설치(공통)", "마킹 및 레벨링"] },
  { code: "통신 5-1-1", name: "및", spec: "케이블랙 조립설치", unit: "m", labors: {"통신설비공": 0.24, "보통인부": 0.09}, category: "device", page: 145, keywords: ["케이블랙 조립설치", "기초설치(공통)"] },
  { code: "통신 5-1-1", name: "기기", spec: "기초철가 조립설치", unit: "개", labors: {"통신관련산업기사": 0.04, "통신설비공": 0.52, "보통인부": 0.37}, category: "device", page: 145, keywords: ["기기", "기초설치(공통)", "기초철가 조립설치"] },
  { code: "통신 5-1-1", name: "가설치", spec: "케이블 홀파기 및 설치", unit: "개소", labors: {"보통인부": 2.0}, category: "device", page: 145, keywords: ["기초설치(공통)", "케이블 홀파기 및 설치", "가설치"] },
  { code: "통신 5-1-1", name: "가설치", spec: "각종기기가 설치", unit: "가", labors: {"통신설비공": 1.35, "보통인부": 0.78}, category: "device", page: 145, keywords: ["각종기기가 설치", "기초설치(공통)", "가설치"] },
  { code: "통신 5-1-1", name: "가설치", spec: "I / O 장치 설치", unit: "대", labors: {"통신설비공": 0.03, "보통인부": 0.02}, category: "device", page: 145, keywords: ["기초설치(공통)", "i / o 장치 설치", "가설치"] },
  { code: "통신 5-1-1", name: "가설치", spec: "본배선반 조립설치", unit: "열", labors: {"통신설비공": 2.0, "보통인부": 1.0}, category: "device", page: 145, keywords: ["기초설치(공통)", "본배선반 조립설치", "가설치"] },
  { code: "통신 5-1-1", name: "가설치", spec: "신호경보판 설치", unit: "개", labors: {"통신관련산업기사": 0.25, "통신설비공": 0.5, "보통인부": 0.5}, category: "device", page: 145, keywords: ["기초설치(공통)", "신호경보판 설치", "가설치"] },
  { code: "통신 5-1-1", name: "가설치", spec: "시험대 설치", unit: "대", labors: {"통신케이블공": 1.0, "통신설비공": 1.0, "보통인부": 1.0}, category: "device", page: 145, keywords: ["기초설치(공통)", "가설치", "시험대 설치"] },
  { code: "통신 5-1-1", name: "가설치", spec: "컴퓨터(프로세서)장치 설치", unit: "대", labors: {"통신케이블공": 2.22, "통신설비공": 2.0, "H/W시험사": 4.45, "보통인부": 2.0}, category: "device", page: 145, keywords: ["기초설치(공통)", "컴퓨터(프로세서)장치 설치", "가설치"] },
  { code: "통신 5-1-1", name: "케이블", spec: "케이블 포설 포박", unit: "10m", labors: {"통신케이블공": 0.2, "통신설비공": 0.26, "보통인부": 0.1}, category: "device", page: 145, keywords: ["케이블", "기초설치(공통)", "케이블 포설 포박"] },
  { code: "통신 5-1-1", name: "포설", spec: "케이블 포설", unit: "개", labors: {"통신케이블공": 0.14, "통신설비공": 0.15}, category: "device", page: 145, keywords: ["포설", "기초설치(공통)", "케이블 포설"] },
  { code: "통신 5-1-1", name: "포박", spec: "커넥터부 케이블 포설", unit: "개", labors: {"통신케이블공": 0.2, "통신설비공": 0.15, "보통인부": 0.09}, category: "device", page: 145, keywords: ["기초설치(공통)", "커넥터부 케이블 포설", "포박"] },
  { code: "통신 5-1-1", name: "포박", spec: "커넥터 접속", unit: "10개소", labors: {"통신관련산업기사": 0.12, "통신케이블공": 0.13, "통신설비공": 0.05}, category: "device", page: 145, keywords: ["기초설치(공통)", "커넥터 접속", "포박"] },
  { code: "통신 5-1-1", name: "포박", spec: "케이블 색별 랩핑", unit: "개", labors: {"통신관련산업기사": 0.52}, category: "device", page: 145, keywords: ["기초설치(공통)", "포박", "케이블 색별 랩핑"] },
  { code: "통신 5-1-1", name: "포박", spec: "", unit: "100심", labors: {"통신케이블공": 0.24}, category: "device", page: 145, keywords: ["기초설치(공통)", "포박"] },
  { code: "통신 5-1-1", name: "포박", spec: "케이블 배선 속정리", unit: "랙", labors: {"통신케이블공": 1.37, "보통인부": 0.64}, category: "device", page: 145, keywords: ["케이블 배선 속정리", "기초설치(공통)", "포박"] },
  { code: "통신 5-1-1", name: "포박", spec: "1심 점퍼선 포설랩핑", unit: "10회선", labors: {"통신설비공": 0.14}, category: "device", page: 145, keywords: ["기초설치(공통)", "1심 점퍼선 포설랩핑", "포박"] },
  { code: "통신 5-1-1", name: "포박", spec: "2심 점퍼선 포설랩핑", unit: "개", labors: {"통신설비공": 0.18}, category: "device", page: 145, keywords: ["기초설치(공통)", "2심 점퍼선 포설랩핑", "포박"] },
  { code: "통신 5-1-1", name: "포박", spec: "3심 점퍼선 포설랩핑", unit: "개", labors: {"통신설비공": 0.24}, category: "device", page: 145, keywords: ["3심 점퍼선 포설랩핑", "기초설치(공통)", "포박"] },
  { code: "통신 5-1-1", name: "포박", spec: "단자판 설치", unit: "10개", labors: {"통신설비공": 0.35, "보통인부": 0.13}, category: "device", page: 145, keywords: ["단자판 설치", "기초설치(공통)", "포박"] },
  { code: "통신 5-1-1", name: "포박", spec: "커넥터 조립", unit: "10개", labors: {"통신관련산업기사": 0.4, "통신케이블공": 0.42}, category: "device", page: 145, keywords: ["기초설치(공통)", "커넥터 조립", "포박"] },
  { code: "통신 5-1-1", name: "기초", spec: "시험대정합기설치및점검", unit: "대", labors: {"통신설비공": 0.5, "H/W시험사": 3.44}, category: "device", page: 145, keywords: ["기초", "기초설치(공통)", "시험대정합기설치및점검"] },
  { code: "통신 5-1-1", name: "점검", spec: "케이블 도통점검", unit: "100회선", labors: {"통신케이블공": 0.35}, category: "device", page: 145, keywords: ["점검", "기초설치(공통)", "케이블 도통점검"] },
  { code: "통신 5-1-1", name: "점검", spec: "회로팩 삽입 점검", unit: "100매", labors: {"H/W시험사": 0.86}, category: "device", page: 145, keywords: ["점검", "기초설치(공통)", "회로팩 삽입 점검"] },
  { code: "통신 5-1-1", name: "종합", spec: "국간중계 회선시험", unit: "회선(CH)", labors: {"H/W시험사": 0.06, "S/W시험사": 0.08}, category: "device", page: 145, keywords: ["기초설치(공통)", "국간중계 회선시험", "종합"] },
  { code: "통신 5-1-1", name: "시험", spec: "", unit: "T1/E1", labors: {"H/W시험사": 0.3, "S/W시험사": 0.4}, category: "device", page: 145, keywords: ["시험", "기초설치(공통)"] },
  { code: "통신 5-1-1", name: "시험", spec: "과 금 시 험", unit: "10호수", labors: {"H/W시험사": 0.09, "S/W시험사": 0.09}, category: "device", page: 145, keywords: ["시험", "기초설치(공통)", "과 금 시 험"] },
  { code: "통신 5-2-1", name: "프로그램", spec: "번호계획 수립 및 프로그램 제작", unit: "100회선", labors: {"S/W시험사": 0.54}, category: "device", page: 147, keywords: ["번호계획 수립 및 프로그램 제작", "사설교환기", "프로그램"] },
  { code: "통신 5-2-1", name: "설 치", spec: "프로그램 Install", unit: "시스템", labors: {"S/W시험사": 0.08}, category: "device", page: 147, keywords: ["설 치", "프로그램 install", "사설교환기"] },
  { code: "통신 5-2-1", name: "설 치 및", spec: "포장해체 및 보드(Board)실장", unit: "랙", labors: {"H/W시험사": 0.08}, category: "device", page: 147, keywords: ["포장해체 및 보드(board)실장", "사설교환기", "설 치 및"] },
  { code: "통신 5-2-1", name: "시 험", spec: "각종 측정 및 기초시험", unit: "시스템", labors: {"H/W시험사": 1.23}, category: "device", page: 147, keywords: ["시 험", "사설교환기", "각종 측정 및 기초시험"] },
  { code: "통신 5-2-1", name: "개통시험", spec: "디지폰(키폰)시험", unit: "대", labors: {"H/W시험사": 0.02}, category: "device", page: 147, keywords: ["사설교환기", "개통시험", "디지폰(키폰)시험"] },
  { code: "통신 5-2-1", name: "개통시험", spec: "국선/DID/DOD/전용선 시험", unit: "10회선", labors: {"통신케이블공": 0.14, "H/W시험사": 0.14}, category: "device", page: 147, keywords: ["국선/did/dod/전용선 시험", "사설교환기", "개통시험"] },
  { code: "통신 5-2-1", name: "개통시험", spec: "기능시험", unit: "시스템", labors: {"H/W시험사": 0.1}, category: "device", page: 147, keywords: ["기능시험", "사설교환기", "개통시험"] },
  { code: "통신 5-2-1", name: "개통시험", spec: "가입자 도통시험", unit: "100회선", labors: {"H/W시험사": 0.49}, category: "device", page: 147, keywords: ["사설교환기", "개통시험", "가입자 도통시험"] },
  { code: "통신 5-2-1", name: "개통시험", spec: "시스템원격유지보수(RMS)설치및시험", unit: "대", labors: {"H/W시험사": 0.06}, category: "device", page: 147, keywords: ["사설교환기", "개통시험", "시스템원격유지보수(rms)설치및시험"] },
  { code: "통신 5-2-1", name: "개통시험", spec: "경보회로(Alarm Box)설치 및시험", unit: "대", labors: {"H/W시험사": 0.1}, category: "device", page: 147, keywords: ["사설교환기", "경보회로(alarm box)설치 및시험", "개통시험"] },
  { code: "통신 5-2-1", name: "부가장비설", spec: "음성정보시스템(자동응답시스템)", unit: "8회선", labors: {"H/W시험사": 0.46}, category: "device", page: 147, keywords: ["음성정보시스템(자동응답시스템)", "사설교환기", "부가장비설"] },
  { code: "통신 5-2-1", name: "치/시험", spec: "M O H", unit: "대", labors: {"H/W시험사": 0.09}, category: "device", page: 147, keywords: ["치/시험", "사설교환기", "m o h"] },
  { code: "통신 5-2-1", name: "치/시험", spec: "과금등산장치", unit: "대", labors: {"H/W시험사": 0.3}, category: "device", page: 147, keywords: ["치/시험", "사설교환기", "과금등산장치"] },
  { code: "통신 5-2-1", name: "운 용 자", spec: "단말기(디지폰, 키폰)", unit: "회", labors: {"H/W시험사": 0.07}, category: "device", page: 147, keywords: ["사설교환기", "단말기(디지폰, 키폰)", "운 용 자"] },
  { code: "통신 5-2-1", name: "인수시험", spec: "중 계 대", unit: "회", labors: {"H/W시험사": 0.26}, category: "device", page: 147, keywords: ["중 계 대", "사설교환기", "인수시험"] },
  { code: "통신 5-2-1", name: "및 교 육", spec: "운영프로그램", unit: "회", labors: {"H/W시험사": 0.35}, category: "device", page: 147, keywords: ["운영프로그램", "사설교환기", "및 교 육"] },
  { code: "통신 5-2-1", name: "및 교 육", spec: "과금등산장치", unit: "회", labors: {"H/W시험사": 0.13}, category: "device", page: 147, keywords: ["사설교환기", "및 교 육", "과금등산장치"] },
  { code: "통신 5-2-1", name: "종합시험", spec: "종합시험(모니터링)", unit: "회", labors: {"H/W시험사": 2.0}, category: "device", page: 147, keywords: ["종합시험", "사설교환기", "종합시험(모니터링)"] },
  { code: "통신 5-3-1", name: "각 종 시 험", spec: "기초시험(각종측정)", unit: "랙", labors: {"통신관련산업기사": 0.45}, category: "device", page: 148, keywords: ["기초시험(각종측정)", "액세스 g/w", "각 종 시 험"] },
  { code: "통신 5-3-1", name: "종 합 시 험", spec: "", unit: "100회선", labors: {"통신관련산업기사": 0.05, "S/W시험사": 0.04}, category: "device", page: 148, keywords: ["종 합 시 험", "액세스 g/w"] },
  { code: "통신 6-1-1", name: "기 초", spec: "1. 마킹 및 레벨링", unit: "개소", labors: {"통신설비공": 0.05, "보통인부": 0.05}, category: "device", page: 153, keywords: ["기초설치(공통)", "기 초", "1. 마킹 및 레벨링"] },
  { code: "통신 6-1-1", name: "공 사", spec: "2. 경량강조금물 또는 보붙임물 설치", unit: "개", labors: {"통신설비공": 0.05, "보통인부": 0.05}, category: "device", page: 153, keywords: ["기초설치(공통)", "2. 경량강조금물 또는 보붙임물 설치", "공 사"] },
  { code: "통신 6-1-1", name: "공 사", spec: "3. 스트락차 설치", unit: "m", labors: {"통신설비공": 0.11, "보통인부": 0.01}, category: "device", page: 153, keywords: ["3. 스트락차 설치", "기초설치(공통)", "공 사"] },
  { code: "통신 6-1-1", name: "공 사", spec: "4. U형찬넬 설치", unit: "개", labors: {"통신설비공": 0.05, "보통인부": 0.05}, category: "device", page: 153, keywords: ["4. u형찬넬 설치", "기초설치(공통)", "공 사"] },
  { code: "통신 6-1-1", name: "공 사", spec: "5. 케이블그릿드 설치", unit: "㎡", labors: {"통신설비공": 0.2, "보통인부": 0.1}, category: "device", page: 153, keywords: ["기초설치(공통)", "5. 케이블그릿드 설치", "공 사"] },
  { code: "통신 6-1-1", name: "케이블", spec: "1. 국내케이블 포설포박", unit: "10m", labors: {"통신케이블공": 0.2, "통신설비공": 0.26, "보통인부": 0.1}, category: "device", page: 153, keywords: ["케이블", "기초설치(공통)", "1. 국내케이블 포설포박"] },
  { code: "통신 6-1-1", name: "포 설", spec: "2. 광점퍼코드 포설", unit: "개", labors: {"통신케이블공": 0.07, "통신설비공": 0.08}, category: "device", page: 153, keywords: ["기초설치(공통)", "2. 광점퍼코드 포설", "포 설"] },
  { code: "통신 6-1-1", name: "포 설", spec: "3. 광점퍼코드 대조", unit: "포트당", labors: {"통신케이블공": 0.04, "보통인부": 0.04}, category: "device", page: 153, keywords: ["기초설치(공통)", "3. 광점퍼코드 대조", "포 설"] },
  { code: "통신 6-1-1", name: "포 설", spec: "4. 심선성단 및 수용(국내케이블)", unit: "10단자", labors: {"통신설비공": 0.04, "보통인부": 0.01}, category: "device", page: 153, keywords: ["기초설치(공통)", "4. 심선성단 및 수용(국내케이블)", "포 설"] },
  { code: "통신 6-1-1", name: "포 설", spec: "(반송케이블)", unit: "개", labors: {"통신설비공": 0.3, "보통인부": 0.05}, category: "device", page: 153, keywords: ["기초설치(공통)", "(반송케이블)", "포 설"] },
  { code: "통신 6-1-1", name: "포 설", spec: "(동축케이블)", unit: "개", labors: {"통신설비공": 0.7, "보통인부": 0.07}, category: "device", page: 153, keywords: ["기초설치(공통)", "(동축케이블)", "포 설"] },
  { code: "통신 6-1-1", name: "포 설", spec: "5. 도통점검", unit: "100P", labors: {"통신케이블공": 0.26}, category: "device", page: 153, keywords: ["5. 도통점검", "기초설치(공통)", "포 설"] },
  { code: "통신 6-1-1", name: "포 설", spec: "6. 점퍼선포선 납땜(2심)", unit: "회선", labors: {"통신설비공": 0.02}, category: "device", page: 153, keywords: ["6. 점퍼선포선 납땜(2심)", "기초설치(공통)", "포 설"] },
  { code: "통신 6-1-1", name: "포 설", spec: "점퍼선포선 납땜(3심)", unit: "개", labors: {"통신설비공": 0.03}, category: "device", page: 153, keywords: ["점퍼선포선 납땜(3심)", "기초설치(공통)", "포 설"] },
  { code: "통신 6-1-1", name: "포 설", spec: "점퍼선포선 납땜(4심)", unit: "개", labors: {"통신설비공": 0.04}, category: "device", page: 153, keywords: ["점퍼선포선 납땜(4심)", "기초설치(공통)", "포 설"] },
  { code: "통신 6-1-1", name: "포 설", spec: "점퍼선포선 납땜(반송용실드)", unit: "개", labors: {"통신설비공": 0.03}, category: "device", page: 153, keywords: ["기초설치(공통)", "점퍼선포선 납땜(반송용실드)", "포 설"] },
  { code: "통신 6-1-1", name: "포 설", spec: "점퍼선포선 납땜(동축용실드)", unit: "개", labors: {"통신설비공": 0.07}, category: "device", page: 153, keywords: ["점퍼선포선 납땜(동축용실드)", "기초설치(공통)", "포 설"] },
  { code: "통신 6-1-1", name: "포 설", spec: "7. 전원케이블 포설포박", unit: "m", labors: {"통신케이블공": 0.02, "통신설비공": 0.03, "보통인부": 0.01}, category: "device", page: 153, keywords: ["기초설치(공통)", "7. 전원케이블 포설포박", "포 설"] },
  { code: "통신 6-1-1", name: "케", spec: "8. 전원케이블성단 및 수용(200㎟)", unit: "단자", labors: {"통신설비공": 0.21}, category: "device", page: 154, keywords: ["기초설치(공통)", "8. 전원케이블성단 및 수용(200㎟)"] },
  { code: "통신 6-1-1", name: "이", spec: "(100㎟)", unit: "개", labors: {"통신설비공": 0.16}, category: "device", page: 154, keywords: ["(100㎟)", "기초설치(공통)"] },
  { code: "통신 6-1-1", name: "블", spec: "(50㎟)", unit: "개", labors: {"통신설비공": 0.15}, category: "device", page: 154, keywords: ["기초설치(공통)", "(50㎟)"] },
  { code: "통신 6-1-1", name: "포 설", spec: "(22㎟)", unit: "개", labors: {"통신설비공": 0.1}, category: "device", page: 154, keywords: ["기초설치(공통)", "(22㎟)", "포 설"] },
  { code: "통신 6-1-1", name: "포 설", spec: "(5.0㎟)", unit: "개", labors: {"통신설비공": 0.08}, category: "device", page: 154, keywords: ["기초설치(공통)", "(5.0㎟)", "포 설"] },
  { code: "통신 6-1-1", name: "포 설", spec: "(1.2㎟)", unit: "개", labors: {"통신설비공": 0.08}, category: "device", page: 154, keywords: ["기초설치(공통)", "(1.2㎟)", "포 설"] },
  { code: "통신 6-1-1", name: "포 설", spec: "9. 그릿드형 국내케이블 포설", unit: "10m", labors: {"통신케이블공": 0.14, "통신설비공": 0.15, "보통인부": 0.1}, category: "device", page: 154, keywords: ["기초설치(공통)", "9. 그릿드형 국내케이블 포설", "포 설"] },
  { code: "통신 6-1-1", name: "장치가", spec: "1. 포장해체 및 반입", unit: "가", labors: {"통신설비공": 0.5, "보통인부": 0.5}, category: "device", page: 154, keywords: ["기초설치(공통)", "1. 포장해체 및 반입", "장치가"] },
  { code: "통신 6-1-1", name: "설치", spec: "2. 장치거치", unit: "개", labors: {"통신설비공": 0.5, "보통인부": 0.5}, category: "device", page: 154, keywords: ["2. 장치거치", "기초설치(공통)", "설치"] },
  { code: "통신 6-1-1", name: "설치", spec: "3. 유니트 실장", unit: "개", labors: {"통신설비공": 0.02}, category: "device", page: 154, keywords: ["기초설치(공통)", "3. 유니트 실장", "설치"] },
  { code: "통신 6-1-1", name: "설치", spec: "4. 유니트 설치", unit: "개", labors: {"통신설비공": 0.03, "보통인부": 0.02}, category: "device", page: 154, keywords: ["4. 유니트 설치", "기초설치(공통)", "설치"] },
  { code: "통신 6-1-1", name: "CR광", spec: "1. 터미널 부착", unit: "광체", labors: {"통신설비공": 1.0, "보통인부": 0.1}, category: "device", page: 154, keywords: ["기초설치(공통)", "cr광", "1. 터미널 부착"] },
  { code: "통신 6-1-1", name: "체 내", spec: "2. 경보 및 감시선 배선", unit: "광체", labors: {"통신설비공": 0.38}, category: "device", page: 154, keywords: ["기초설치(공통)", "2. 경보 및 감시선 배선", "체 내"] },
  { code: "통신 6-1-1", name: "기 초", spec: "1. 공 통", unit: "대", labors: {"통신관련산업기사": 0.2}, category: "device", page: 154, keywords: ["기초설치(공통)", "기 초", "1. 공 통"] },
  { code: "통신 6-1-1", name: "조 정", spec: "시 험", unit: "대", labors: {"통신관련산업기사": 0.5}, category: "device", page: 154, keywords: ["조 정", "시 험", "기초설치(공통)"] },
  { code: "통신 6-1-1", name: "타합선", spec: "1. 4선식 타합선 구성", unit: "개소", labors: {"통신설비공": 1.0}, category: "device", page: 154, keywords: ["기초설치(공통)", "타합선", "1. 4선식 타합선 구성"] },
  { code: "통신 6-1-1", name: "구 성", spec: "2. 2선식 타합선 구성", unit: "개소", labors: {"통신설비공": 0.5}, category: "device", page: 154, keywords: ["기초설치(공통)", "구 성", "2. 2선식 타합선 구성"] },
  { code: "통신 6-1-1", name: "구 성", spec: "3. 감시선 급전", unit: "개소", labors: {"통신설비공": 0.4}, category: "device", page: 154, keywords: ["3. 감시선 급전", "구 성", "기초설치(공통)"] },
  { code: "통신 6-1-1", name: "형광등", spec: "30w 이하", unit: "등", labors: {"통신설비공": 0.15}, category: "device", page: 154, keywords: ["30w 이하", "기초설치(공통)", "형광등"] },
  { code: "통신 6-1-1", name: "설 치", spec: "40w 이하", unit: "등", labors: {"통신설비공": 0.22}, category: "device", page: 154, keywords: ["기초설치(공통)", "설 치", "40w 이하"] },
  { code: "통신 6-1-1", name: "설 치", spec: "100w 이하", unit: "등", labors: {"통신설비공": 0.4}, category: "device", page: 154, keywords: ["기초설치(공통)", "설 치", "100w 이하"] },
  { code: "통신 6-2-1-1", name: "외부 시험", spec: "입력전원 측정", unit: "PDP", labors: {"광케이블설치사": 0.26}, category: "device", page: 155, keywords: ["입력전원 측정", "동기식 광전송 장치", "외부 시험"] },
  { code: "통신 6-2-1-1", name: "자체", spec: "1. 출력전원시험", unit: "유니트", labors: {"광케이블설치사": 0.34}, category: "device", page: 155, keywords: ["동기식 광전송 장치", "1. 출력전원시험", "자체"] },
  { code: "통신 6-2-1-1", name: "시험", spec: "2. MMI 자체셋팅 및 동작확인 시험", unit: "대", labors: {"광케이블설치사": 0.41}, category: "device", page: 155, keywords: ["시험", "동기식 광전송 장치", "2. mmi 자체셋팅 및 동작확인 시험"] },
  { code: "통신 6-2-1-1", name: "시험", spec: "3. 시스템셋업 및 현재상태확인시험", unit: "시스템", labors: {"광케이블설치사": 0.72}, category: "device", page: 155, keywords: ["시험", "동기식 광전송 장치", "3. 시스템셋업 및 현재상태확인시험"] },
  { code: "통신 6-2-1-1", name: "시험", spec: "4. 광전송 특성시험", unit: "회선", labors: {"광케이블설치사": 0.41, "특별인부": 0.36}, category: "device", page: 155, keywords: ["시험", "4. 광전송 특성시험", "동기식 광전송 장치"] },
  { code: "통신 6-2-1-1", name: "시험", spec: "5. DS3급 전기적 특성시험", unit: "개", labors: {"광케이블설치사": 0.36, "특별인부": 0.21}, category: "device", page: 155, keywords: ["시험", "5. ds3급 전기적 특성시험", "동기식 광전송 장치"] },
  { code: "통신 6-2-1-1", name: "시험", spec: "6. DS1급 전기적 특성시험", unit: "개", labors: {"광케이블설치사": 0.13, "특별인부": 0.13}, category: "device", page: 155, keywords: ["시험", "6. ds1급 전기적 특성시험", "동기식 광전송 장치"] },
  { code: "통신 6-2-1-1", name: "시험", spec: "7. 시스템의 절체기능시험", unit: "시스템", labors: {"광케이블설치사": 0.77}, category: "device", page: 155, keywords: ["시험", "7. 시스템의 절체기능시험", "동기식 광전송 장치"] },
  { code: "통신 6-2-1-1", name: "시험", spec: "8. 경보시험", unit: "PDP", labors: {"광케이블설치사": 0.44}, category: "device", page: 155, keywords: ["시험", "8. 경보시험", "동기식 광전송 장치"] },
  { code: "통신 6-2-1-1", name: "대국", spec: "1. 대국입력 수신 광 레벨 측정시험", unit: "개소", labors: {"광케이블설치사": 0.18, "특별인부": 0.15}, category: "device", page: 155, keywords: ["1. 대국입력 수신 광 레벨 측정시험", "대국", "동기식 광전송 장치"] },
  { code: "통신 6-2-1-1", name: "시험", spec: "2. 시스템 대국 설정조건 확인시험", unit: "시스템", labors: {"광케이블설치사": 0.64}, category: "device", page: 155, keywords: ["2. 시스템 대국 설정조건 확인시험", "시험", "동기식 광전송 장치"] },
  { code: "통신 6-2-1-1", name: "시험", spec: "3. 시스템 대국 기능시험", unit: "개", labors: {"광케이블설치사": 1.02}, category: "device", page: 155, keywords: ["시험", "3. 시스템 대국 기능시험", "동기식 광전송 장치"] },
  { code: "통신 6-2-1-1", name: "시험", spec: "4. 타합반 시험", unit: "유니트", labors: {"통신설비공": 0.35}, category: "device", page: 155, keywords: ["시험", "동기식 광전송 장치", "4. 타합반 시험"] },
  { code: "통신 6-2-1-1", name: "시험", spec: "5. 최종성능 감시시험(DS1급 이상)", unit: "시스템", labors: {"광케이블설치사": 0.8}, category: "device", page: 155, keywords: ["시험", "5. 최종성능 감시시험(ds1급 이상)", "동기식 광전송 장치"] },
  { code: "통신 6-2-1-1", name: "시험", spec: "6. DS0급 음성회선 대국 전기적 특성 시험", unit: "회선", labors: {"광케이블설치사": 0.02}, category: "device", page: 155, keywords: ["시험", "동기식 광전송 장치", "6. ds0급 음성회선 대국 전기적 특성 시험"] },
  { code: "통신 6-2-1-1", name: "시험", spec: "7. DS0급 DP회선 대국 전기적 특성 시험", unit: "회선", labors: {"광케이블설치사": 0.01}, category: "device", page: 155, keywords: ["시험", "동기식 광전송 장치", "7. ds0급 dp회선 대국 전기적 특성 시험"] },
  { code: "통신 6-2-1-2", name: "광섬유케이블 국 내 성 단", spec: "", unit: "코어", labors: {"광케이블설치사": 0.5, "특별인부": 0.25}, category: "device", page: 156, keywords: ["광섬유케이블 국 내 성 단", "비동기식 광전송장치"] },
  { code: "통신 6-2-1-2", name: "기초", spec: "개별", unit: "SYS", labors: {"광케이블설치사": 0.99, "특별인부": 0.99}, category: "device", page: 156, keywords: ["비동기식 광전송장치", "기초", "개별"] },
  { code: "통신 6-2-1-2", name: "조정", spec: "특성", unit: "SYS", labors: {"광케이블설치사": 0.49, "특별인부": 0.49}, category: "device", page: 156, keywords: ["비동기식 광전송장치", "특성", "조정"] },
  { code: "통신 6-2-1-2", name: "및", spec: "시험", unit: "SYS", labors: {"광케이블설치사": 0.49, "특별인부": 0.49}, category: "device", page: 156, keywords: ["시험", "비동기식 광전송장치"] },
  { code: "통신 6-2-1-2", name: "시험", spec: "시험", unit: "SYS", labors: {"광케이블설치사": 0.36, "특별인부": 0.36}, category: "device", page: 156, keywords: ["시험", "비동기식 광전송장치"] },
  { code: "통신 6-2-1-2", name: "타합선구성", spec: "", unit: "개소", labors: {"통신설비공": 0.5}, category: "device", page: 156, keywords: ["타합선구성", "비동기식 광전송장치"] },
  { code: "통신 6-2-2", name: "입력전원 측정", spec: "", unit: "대", labors: {"광케이블설치사": 0.23}, category: "device", page: 157, keywords: ["입력전원 측정", "캐리어 이더넷"] },
  { code: "통신 6-2-2", name: "경보시험(PDP)", spec: "", unit: "대", labors: {"광케이블설치사": 0.21}, category: "device", page: 157, keywords: ["캐리어 이더넷", "경보시험(pdp)"] },
  { code: "통신 6-2-2", name: "장비설정 및 상태확인시험", spec: "", unit: "대", labors: {"광케이블설치사": 0.89, "H/W시험사": 0.45}, category: "device", page: 157, keywords: ["장비설정 및 상태확인시험", "캐리어 이더넷"] },
  { code: "통신 6-2-2", name: "광전송 특성시험", spec: "", unit: "회선", labors: {"광케이블설치사": 0.3, "H/W시험사": 0.15}, category: "device", page: 157, keywords: ["광전송 특성시험", "캐리어 이더넷"] },
  { code: "통신 6-2-2", name: "DS-1급 전기적 특성시험", spec: "", unit: "회선", labors: {"광케이블설치사": 0.14, "H/W시험사": 0.07}, category: "device", page: 157, keywords: ["캐리어 이더넷", "ds-1급 전기적 특성시험"] },
  { code: "통신 6-2-2", name: "DS-3급 전기적 특성시험", spec: "", unit: "회선", labors: {"광케이블설치사": 0.31, "H/W시험사": 0.15}, category: "device", page: 157, keywords: ["ds-3급 전기적 특성시험", "캐리어 이더넷"] },
  { code: "통신 6-2-2", name: "Ethernet회선구성 시험", spec: "", unit: "회선", labors: {"광케이블설치사": 0.38, "H/W시험사": 0.19}, category: "device", page: 157, keywords: ["ethernet회선구성 시험", "캐리어 이더넷"] },
  { code: "통신 6-2-2", name: "장비특성 및 대국시험", spec: "", unit: "대", labors: {"광케이블설치사": 2.37, "H/W시험사": 1.19}, category: "device", page: 157, keywords: ["장비특성 및 대국시험", "캐리어 이더넷"] },
  { code: "통신 6-2-3", name: "입력전원 측정", spec: "", unit: "대", labors: {"광케이블설치사": 0.23}, category: "device", page: 157, keywords: ["입력전원 측정", "mspp 광전송장비"] },
  { code: "통신 6-2-3", name: "경보시험(PDP)", spec: "", unit: "대", labors: {"광케이블설치사": 0.21}, category: "device", page: 157, keywords: ["mspp 광전송장비", "경보시험(pdp)"] },
  { code: "통신 6-2-3", name: "장비설정 및 상태확인시험", spec: "", unit: "대", labors: {"광케이블설치사": 0.8, "H/W시험사": 0.4}, category: "device", page: 157, keywords: ["mspp 광전송장비", "장비설정 및 상태확인시험"] },
  { code: "통신 6-2-3", name: "광전송 특성시험", spec: "", unit: "회선", labors: {"광케이블설치사": 0.3, "H/W시험사": 0.15}, category: "device", page: 157, keywords: ["mspp 광전송장비", "광전송 특성시험"] },
  { code: "통신 6-2-3", name: "DS-1급 전기적 특성시험", spec: "", unit: "회선", labors: {"광케이블설치사": 0.14, "H/W시험사": 0.07}, category: "device", page: 157, keywords: ["mspp 광전송장비", "ds-1급 전기적 특성시험"] },
  { code: "통신 6-2-3", name: "DS-3급 전기적 특성시험", spec: "", unit: "회선", labors: {"광케이블설치사": 0.31, "H/W시험사": 0.15}, category: "device", page: 157, keywords: ["ds-3급 전기적 특성시험", "mspp 광전송장비"] },
  { code: "통신 6-2-3", name: "Ethernet회선구성 시험", spec: "", unit: "회선", labors: {"광케이블설치사": 0.3, "H/W시험사": 0.15}, category: "device", page: 157, keywords: ["mspp 광전송장비", "ethernet회선구성 시험"] },
  { code: "통신 6-2-3", name: "장비특성 및 대국시험", spec: "", unit: "대", labors: {"광케이블설치사": 2.12, "H/W시험사": 1.06}, category: "device", page: 157, keywords: ["장비특성 및 대국시험", "mspp 광전송장비"] },
  { code: "통신 6-2-4", name: "입력전원 측정", spec: "", unit: "대", labors: {"광케이블설치사": 0.23}, category: "device", page: 158, keywords: ["입력전원 측정", "wdm 광전송장비"] },
  { code: "통신 6-2-4", name: "경보시험(PDP)", spec: "", unit: "대", labors: {"광케이블설치사": 0.21}, category: "device", page: 158, keywords: ["wdm 광전송장비", "경보시험(pdp)"] },
  { code: "통신 6-2-4", name: "장비설정 및 상태확인시험", spec: "", unit: "대", labors: {"광케이블설치사": 0.73, "H/W시험사": 0.37}, category: "device", page: 158, keywords: ["wdm 광전송장비", "장비설정 및 상태확인시험"] },
  { code: "통신 6-2-4", name: "광다중화부 특성시험", spec: "", unit: "유니트", labors: {"광케이블설치사": 1.25, "H/W시험사": 0.63}, category: "device", page: 158, keywords: ["wdm 광전송장비", "광다중화부 특성시험"] },
  { code: "통신 6-2-4", name: "광파장 변환부 특성시험", spec: "", unit: "유니트", labors: {"광케이블설치사": 1.13, "H/W시험사": 0.56}, category: "device", page: 158, keywords: ["광파장 변환부 특성시험", "wdm 광전송장비"] },
  { code: "통신 6-2-4", name: "광증폭부 특성시험", spec: "", unit: "유니트", labors: {"광케이블설치사": 0.71, "H/W시험사": 0.35}, category: "device", page: 158, keywords: ["wdm 광전송장비", "광증폭부 특성시험"] },
  { code: "통신 6-2-4", name: "제어부 기능시험", spec: "", unit: "유니트", labors: {"광케이블설치사": 0.54, "H/W시험사": 0.27}, category: "device", page: 158, keywords: ["wdm 광전송장비", "제어부 기능시험"] },
  { code: "통신 6-2-4", name: "EMS 기능시험", spec: "", unit: "시스템", labors: {"광케이블설치사": 0.75}, category: "device", page: 158, keywords: ["wdm 광전송장비", "ems 기능시험"] },
  { code: "통신 6-2-4", name: "종합시험", spec: "", unit: "시스템", labors: {"광케이블설치사": 0.83}, category: "device", page: 158, keywords: ["wdm 광전송장비", "종합시험"] },
  { code: "통신 6-3-1", name: "전원시험 및 조정", spec: "", unit: "셀프", labors: {"통신관련산업기사": 0.17}, category: "device", page: 159, keywords: ["전원시험 및 조정", "다중화장치(mx-13)"] },
  { code: "통신 6-3-1", name: "NAS DS1 신호비트에러 및 지터시험", spec: "", unit: "GRP", labors: {"통신관련산업기사": 0.09}, category: "device", page: 159, keywords: ["다중화장치(mx-13)", "nas ds1 신호비트에러 및 지터시험"] },
  { code: "통신 6-3-1", name: "CEPT DS1 신호비트에러 및 지터시험", spec: "", unit: "GRP", labors: {"통신관련산업기사": 0.09}, category: "device", page: 159, keywords: ["cept ds1 신호비트에러 및 지터시험", "다중화장치(mx-13)"] },
  { code: "통신 6-3-1", name: "NAS DS1 신호의 루프백시험", spec: "", unit: "GRP", labors: {"통신관련산업기사": 0.1}, category: "device", page: 159, keywords: ["nas ds1 신호의 루프백시험", "다중화장치(mx-13)"] },
  { code: "통신 6-3-1", name: "CEPT DS1 신호의 루프백시험", spec: "", unit: "GRP", labors: {"통신관련산업기사": 0.1}, category: "device", page: 159, keywords: ["cept ds1 신호의 루프백시험", "다중화장치(mx-13)"] },
  { code: "통신 6-3-1", name: "절체기능시험", spec: "", unit: "GRP", labors: {"통신관련산업기사": 0.11}, category: "device", page: 159, keywords: ["절체기능시험", "다중화장치(mx-13)"] },
  { code: "통신 6-3-1", name: "성능감시 및 경보시험", spec: "", unit: "GRP", labors: {"통신관련산업기사": 0.27}, category: "device", page: 159, keywords: ["성능감시 및 경보시험", "다중화장치(mx-13)"] },
  { code: "통신 6-3-1", name: "신호형태시험", spec: "", unit: "GRP", labors: {"통신관련산업기사": 0.12}, category: "device", page: 159, keywords: ["다중화장치(mx-13)", "신호형태시험"] },
  { code: "통신 6-3-2", name: "철 가", spec: "마킹 및 레벨링", unit: "개 소", labors: {"통신설비공": 0.05, "보통인부": 0.05}, category: "device", page: 159, keywords: ["마킹 및 레벨링", "디지털회선 분배장치(dcs)", "철 가"] },
  { code: "통신 6-3-2", name: "및", spec: "케이블랙 설치", unit: "m", labors: {"통신설비공": 0.05, "보통인부": 0.05}, category: "device", page: 159, keywords: ["디지털회선 분배장치(dcs)", "케이블랙 설치"] },
  { code: "통신 6-3-2", name: "기기", spec: "컴퓨터(프로세서)장치", unit: "대", labors: {"통신케이블공": 2.22, "통신설비공": 2.0, "H/W시험사": 4.45, "보통인부": 2.0}, category: "device", page: 159, keywords: ["기기", "디지털회선 분배장치(dcs)", "컴퓨터(프로세서)장치"] },
  { code: "통신 6-3-2", name: "가설치", spec: "각종 기기가 설치", unit: "(프레임)", labors: {"통신설비공": 0.5, "보통인부": 0.5}, category: "device", page: 159, keywords: ["각종 기기가 설치", "디지털회선 분배장치(dcs)", "가설치"] },
  { code: "통신 6-3-2", name: "가설치", spec: "가전원선 설치", unit: "가", labors: {"통신설비공": 0.17}, category: "device", page: 159, keywords: ["디지털회선 분배장치(dcs)", "가전원선 설치", "가설치"] },
  { code: "통신 6-3-2", name: "케이블", spec: "케이블 포설포박", unit: "10m", labors: {"통신케이블공": 0.2, "통신설비공": 0.26, "보통인부": 0.1}, category: "device", page: 159, keywords: ["케이블", "디지털회선 분배장치(dcs)", "케이블 포설포박"] },
  { code: "통신 6-3-2", name: "포 설", spec: "커넥터부케이블포설", unit: "개", labors: {"통신케이블공": 0.2, "통신설비공": 0.15, "보통인부": 0.1}, category: "device", page: 159, keywords: ["디지털회선 분배장치(dcs)", "커넥터부케이블포설", "포 설"] },
  { code: "통신 6-3-2", name: "및", spec: "케이블 색별랩핑", unit: "10개소", labors: {"통신관련산업기사": 0.52}, category: "device", page: 159, keywords: ["케이블 색별랩핑", "디지털회선 분배장치(dcs)"] },
  { code: "통신 6-3-2", name: "점퍼링", spec: "“", unit: "100심", labors: {"통신케이블공": 0.24}, category: "device", page: 159, keywords: ["점퍼링", "디지털회선 분배장치(dcs)"] },
  { code: "통신 6-3-2", name: "점퍼링", spec: "커넥터 접속", unit: "10개소", labors: {"통신관련산업기사": 0.12, "통신케이블공": 0.13, "통신설비공": 0.05}, category: "device", page: 159, keywords: ["점퍼링", "커넥터 접속", "디지털회선 분배장치(dcs)"] },
  { code: "통신 6-3-2", name: "점퍼링", spec: "2심 점퍼선 포설랩핑", unit: "10회선", labors: {"통신설비공": 0.18}, category: "device", page: 159, keywords: ["점퍼링", "디지털회선 분배장치(dcs)", "2심 점퍼선 포설랩핑"] },
  { code: "통신 6-3-2", name: "점퍼링", spec: "단자판 설치", unit: "10개", labors: {"통신설비공": 0.35, "보통인부": 0.13}, category: "device", page: 159, keywords: ["점퍼링", "디지털회선 분배장치(dcs)", "단자판 설치"] },
  { code: "통신 6-3-2", name: "기 초", spec: "도통 및 연결시험", unit: "T1", labors: {"통신케이블공": 0.02, "H/W시험사": 0.02, "S/W시험사": 0.01}, category: "device", page: 159, keywords: ["디지털회선 분배장치(dcs)", "기 초", "도통 및 연결시험"] },
  { code: "통신 6-3-2", name: "시 험", spec: "기기 전원시험", unit: "가", labors: {"H/W시험사": 1.08}, category: "device", page: 159, keywords: ["디지털회선 분배장치(dcs)", "시 험", "기기 전원시험"] },
  { code: "통신 6-3-2", name: "프로세 서시험", spec: "프로세서 및 메모리 시험", unit: "시스템", labors: {"H/W시험사": 2.06, "S/W시험사": 6.63}, category: "device", page: 159, keywords: ["디지털회선 분배장치(dcs)", "프로세서 및 메모리 시험", "프로세 서시험"] },
  { code: "통신 6-3-2", name: "시스템", spec: "유니트 진단시험", unit: "유니트", labors: {"H/W시험사": 2.16, "S/W시험사": 3.9}, category: "device", page: 159, keywords: ["디지털회선 분배장치(dcs)", "유니트 진단시험", "시스템"] },
  { code: "통신 6-3-2", name: "시 험", spec: "경보시험", unit: "시스템", labors: {"H/W시험사": 0.66}, category: "device", page: 159, keywords: ["시 험", "디지털회선 분배장치(dcs)", "경보시험"] },
  { code: "통신 6-3-2", name: "시 험", spec: "원격경보 시험", unit: "개", labors: {"H/W시험사": 1.25}, category: "device", page: 159, keywords: ["시 험", "디지털회선 분배장치(dcs)", "원격경보 시험"] },
  { code: "통신 6-3-2", name: "시 험", spec: "시스템 확인시험", unit: "개", labors: {"H/W시험사": 13.75, "S/W시험사": 13.43}, category: "device", page: 159, keywords: ["디지털회선 분배장치(dcs)", "시 험", "시스템 확인시험"] },
  { code: "통신 6-3-2", name: "시 험", spec: "Cross Connect", unit: "10채널", labors: {"H/W시험사": 0.23, "S/W시험사": 0.24}, category: "device", page: 159, keywords: ["시 험", "cross connect", "디지털회선 분배장치(dcs)"] },
  { code: "통신 6-3-3", name: "기초시험", spec: "기기전원시험", unit: "가", labors: {"H/W시험사": 0.2}, category: "device", page: 160, keywords: ["기기전원시험", "디지털 전송접속 분배장치(dxc-13)", "기초시험"] },
  { code: "통신 6-3-3", name: "프로세서시험", spec: "프로세서 및 메모리시험", unit: "SYS", labors: {"H/W시험사": 2.06, "S/W시험사": 6.63}, category: "device", page: 160, keywords: ["디지털 전송접속 분배장치(dxc-13)", "프로세서 및 메모리시험", "프로세서시험"] },
  { code: "통신 6-3-3", name: "System", spec: "셀프 진단시험", unit: "셀프", labors: {"H/W시험사": 2.16, "S/W시험사": 3.9}, category: "device", page: 160, keywords: ["system", "셀프 진단시험", "디지털 전송접속 분배장치(dxc-13)"] },
  { code: "통신 6-3-3", name: "시 험", spec: "경보시험", unit: "SYS", labors: {"H/W시험사": 0.66}, category: "device", page: 160, keywords: ["시 험", "디지털 전송접속 분배장치(dxc-13)", "경보시험"] },
  { code: "통신 6-3-3", name: "시 험", spec: "시스템 확인시험", unit: "개", labors: {"H/W시험사": 13.76, "S/W시험사": 13.43}, category: "device", page: 160, keywords: ["시 험", "시스템 확인시험", "디지털 전송접속 분배장치(dxc-13)"] },
  { code: "통신 6-3-3", name: "시 험", spec: "상호접속 Mapping시험", unit: "DS1", labors: {"H/W시험사": 0.02, "S/W시험사": 0.02}, category: "device", page: 160, keywords: ["시 험", "디지털 전송접속 분배장치(dxc-13)", "상호접속 mapping시험"] },
  { code: "통신 6-3-4", name: "자 체 시 험", spec: "입력전원측정", unit: "랙", labors: {"통신관련산업기사": 0.08}, category: "device", page: 161, keywords: ["입력전원측정", "자 체 시 험", "dslam 장치"] },
  { code: "통신 6-3-4", name: "대 국 시 험", spec: "ADSL 라인속도 측정", unit: "회선", labors: {"통신관련산업기사": 0.02}, category: "device", page: 161, keywords: ["대 국 시 험", "dslam 장치", "adsl 라인속도 측정"] },
  { code: "통신 6-3-5", name: "장치설정", spec: "장치거치(셀프설치)", unit: "대", labors: {"통신설비공": 0.03, "보통인부": 0.02}, category: "device", page: 161, keywords: ["장치설정", "장치거치(셀프설치)", "디지털 클럭공급장치(dots)"] },
  { code: "통신 6-3-5", name: "장치설정", spec: "유 니 트 실 장", unit: "개", labors: {"통신설비공": 0.02}, category: "device", page: 161, keywords: ["유 니 트 실 장", "장치설정", "디지털 클럭공급장치(dots)"] },
  { code: "통신 6-3-5", name: "설치시험", spec: "전 원 전 압 시 험", unit: "대", labors: {"통신관련산업기사": 0.08}, category: "device", page: 161, keywords: ["설치시험", "디지털 클럭공급장치(dots)", "전 원 전 압 시 험"] },
  { code: "통신 6-3-5", name: "설치시험", spec: "경보 및 접불시험", unit: "개", labors: {"통신관련산업기사": 0.08}, category: "device", page: 161, keywords: ["경보 및 접불시험", "설치시험", "디지털 클럭공급장치(dots)"] },
  { code: "통신 6-3-5", name: "설치시험", spec: "입력클럭 신호시험", unit: "회 선", labors: {"통신관련산업기사": 0.19}, category: "device", page: 161, keywords: ["입력클럭 신호시험", "설치시험", "디지털 클럭공급장치(dots)"] },
  { code: "통신 6-3-5", name: "설치시험", spec: "출력클럭 신호시험", unit: "개 소", labors: {"통신관련산업기사": 0.03}, category: "device", page: 161, keywords: ["설치시험", "디지털 클럭공급장치(dots)", "출력클럭 신호시험"] },
  { code: "통신 6-3-6", name: "조 [전 류 차동방식]", spec: "Bay건립", unit: "대", labors: {"통신설비공": 0.75}, category: "device", page: 162, keywords: ["디지털 계통보호전송장치(pitr)", "bay건립", "조 [전 류 차동방식]"] },
  { code: "통신 6-3-6", name: "조 [방 향 비교방식]", spec: "Bay건립", unit: "대", labors: {"통신설비공": 0.75}, category: "device", page: 162, keywords: ["디지털 계통보호전송장치(pitr)", "bay건립", "조 [방 향 비교방식]"] },
  { code: "통신 6-3-6", name: "조 [방향비교 전류차동방식]", spec: "Bay건립", unit: "대", labors: {"통신설비공": 0.75}, category: "device", page: 162, keywords: ["디지털 계통보호전송장치(pitr)", "bay건립", "조 [방향비교 전류차동방식]"] },
  { code: "통신 6-3-6", name: "조 [방향비교 전송차단방식]", spec: "Bay건립", unit: "대", labors: {"통신설비공": 0.75}, category: "device", page: 162, keywords: ["디지털 계통보호전송장치(pitr)", "bay건립", "조 [방향비교 전송차단방식]"] },
  { code: "통신 6-3-6", name: "조 [E/O 방식]", spec: "Bay건립", unit: "대", labors: {"통신설비공": 0.75}, category: "device", page: 162, keywords: ["디지털 계통보호전송장치(pitr)", "bay건립", "조 [e/o 방식]"] },
  { code: "통신 6-3-6", name: "립 [전 류 차동방식]", spec: "세트조립", unit: "대", labors: {"보통인부": 1.0}, category: "device", page: 162, keywords: ["립 [전 류 차동방식]", "세트조립", "디지털 계통보호전송장치(pitr)"] },
  { code: "통신 6-3-6", name: "립 [방 향 비교방식]", spec: "세트조립", unit: "대", labors: {"보통인부": 1.0}, category: "device", page: 162, keywords: ["디지털 계통보호전송장치(pitr)", "세트조립", "립 [방 향 비교방식]"] },
  { code: "통신 6-3-6", name: "립 [방향비교 전류차동방식]", spec: "세트조립", unit: "대", labors: {"보통인부": 1.0}, category: "device", page: 162, keywords: ["디지털 계통보호전송장치(pitr)", "립 [방향비교 전류차동방식]", "세트조립"] },
  { code: "통신 6-3-6", name: "립 [방향비교 전송차단방식]", spec: "세트조립", unit: "대", labors: {"보통인부": 1.0}, category: "device", page: 162, keywords: ["디지털 계통보호전송장치(pitr)", "세트조립", "립 [방향비교 전송차단방식]"] },
  { code: "통신 6-3-6", name: "립 [E/O 방식]", spec: "세트조립", unit: "대", labors: {"보통인부": 1.0}, category: "device", page: 162, keywords: ["립 [e/o 방식]", "디지털 계통보호전송장치(pitr)", "세트조립"] },
  { code: "통신 6-3-6", name: "및 [전 류 차동방식]", spec: "PowerPanel 조립및배선", unit: "대", labors: {"통신설비공": 0.75}, category: "device", page: 162, keywords: ["powerpanel 조립및배선", "디지털 계통보호전송장치(pitr)", "및 [전 류 차동방식]"] },
  { code: "통신 6-3-6", name: "및 [방 향 비교방식]", spec: "PowerPanel 조립및배선", unit: "대", labors: {"통신설비공": 0.75}, category: "device", page: 162, keywords: ["powerpanel 조립및배선", "디지털 계통보호전송장치(pitr)", "및 [방 향 비교방식]"] },
  { code: "통신 6-3-6", name: "및 [방향비교 전류차동방식]", spec: "PowerPanel 조립및배선", unit: "대", labors: {"통신설비공": 1.5}, category: "device", page: 162, keywords: ["powerpanel 조립및배선", "디지털 계통보호전송장치(pitr)", "및 [방향비교 전류차동방식]"] },
  { code: "통신 6-3-6", name: "및 [방향비교 전송차단방식]", spec: "PowerPanel 조립및배선", unit: "대", labors: {"통신설비공": 1.5}, category: "device", page: 162, keywords: ["powerpanel 조립및배선", "디지털 계통보호전송장치(pitr)", "및 [방향비교 전송차단방식]"] },
  { code: "통신 6-3-6", name: "및 [E/O 방식]", spec: "PowerPanel 조립및배선", unit: "대", labors: {"통신설비공": 0.75}, category: "device", page: 162, keywords: ["powerpanel 조립및배선", "디지털 계통보호전송장치(pitr)", "및 [e/o 방식]"] },
  { code: "통신 6-3-6", name: "설 [전 류 차동방식]", spec: "내부배선및기타결선", unit: "대", labors: {"통신설비공": 0.75}, category: "device", page: 162, keywords: ["디지털 계통보호전송장치(pitr)", "설 [전 류 차동방식]", "내부배선및기타결선"] },
  { code: "통신 6-3-6", name: "설 [방 향 비교방식]", spec: "내부배선및기타결선", unit: "대", labors: {"통신설비공": 0.75}, category: "device", page: 162, keywords: ["디지털 계통보호전송장치(pitr)", "설 [방 향 비교방식]", "내부배선및기타결선"] },
  { code: "통신 6-3-6", name: "설 [방향비교 전류차동방식]", spec: "내부배선및기타결선", unit: "대", labors: {"통신설비공": 1.0}, category: "device", page: 162, keywords: ["디지털 계통보호전송장치(pitr)", "내부배선및기타결선", "설 [방향비교 전류차동방식]"] },
  { code: "통신 6-3-6", name: "설 [방향비교 전송차단방식]", spec: "내부배선및기타결선", unit: "대", labors: {"통신설비공": 1.0}, category: "device", page: 162, keywords: ["디지털 계통보호전송장치(pitr)", "내부배선및기타결선", "설 [방향비교 전송차단방식]"] },
  { code: "통신 6-3-6", name: "설 [E/O 방식]", spec: "내부배선및기타결선", unit: "대", labors: {"통신설비공": 0.75}, category: "device", page: 162, keywords: ["디지털 계통보호전송장치(pitr)", "설 [e/o 방식]", "내부배선및기타결선"] },
  { code: "통신 6-3-6", name: "치 [전 류 차동방식]", spec: "내부배선및기타결선", unit: "대", labors: {"보통인부": 0.75}, category: "device", page: 162, keywords: ["디지털 계통보호전송장치(pitr)", "치 [전 류 차동방식]", "내부배선및기타결선"] },
  { code: "통신 6-3-6", name: "치 [방 향 비교방식]", spec: "내부배선및기타결선", unit: "대", labors: {"보통인부": 0.75}, category: "device", page: 162, keywords: ["디지털 계통보호전송장치(pitr)", "치 [방 향 비교방식]", "내부배선및기타결선"] },
  { code: "통신 6-3-6", name: "치 [방향비교 전류차동방식]", spec: "내부배선및기타결선", unit: "대", labors: {"보통인부": 1.0}, category: "device", page: 162, keywords: ["디지털 계통보호전송장치(pitr)", "치 [방향비교 전류차동방식]", "내부배선및기타결선"] },
  { code: "통신 6-3-6", name: "치 [방향비교 전송차단방식]", spec: "내부배선및기타결선", unit: "대", labors: {"보통인부": 1.0}, category: "device", page: 162, keywords: ["디지털 계통보호전송장치(pitr)", "치 [방향비교 전송차단방식]", "내부배선및기타결선"] },
  { code: "통신 6-3-6", name: "치 [E/O 방식]", spec: "내부배선및기타결선", unit: "대", labors: {"보통인부": 0.75}, category: "device", page: 162, keywords: ["디지털 계통보호전송장치(pitr)", "치 [e/o 방식]", "내부배선및기타결선"] },
  { code: "통신 6-3-6", name: "시 [전 류 차동방식]", spec: "1.전송로시험", unit: "T/L", labors: {"통신관련산업기사": 1.0}, category: "device", page: 162, keywords: ["시 [전 류 차동방식]", "디지털 계통보호전송장치(pitr)", "1.전송로시험"] },
  { code: "통신 6-3-6", name: "시 [방 향 비교방식]", spec: "1.전송로시험", unit: "T/L", labors: {"통신관련산업기사": 1.0}, category: "device", page: 162, keywords: ["시 [방 향 비교방식]", "디지털 계통보호전송장치(pitr)", "1.전송로시험"] },
  { code: "통신 6-3-6", name: "시 [방향비교 전류차동방식]", spec: "1.전송로시험", unit: "T/L", labors: {"통신관련산업기사": 1.0}, category: "device", page: 162, keywords: ["시 [방향비교 전류차동방식]", "1.전송로시험", "디지털 계통보호전송장치(pitr)"] },
  { code: "통신 6-3-6", name: "시 [방향비교 전송차단방식]", spec: "1.전송로시험", unit: "T/L", labors: {"통신관련산업기사": 1.0}, category: "device", page: 162, keywords: ["시 [방향비교 전송차단방식]", "디지털 계통보호전송장치(pitr)", "1.전송로시험"] },
  { code: "통신 6-3-6", name: "시 [E/O 방식]", spec: "1.전송로시험", unit: "T/L", labors: {"통신관련산업기사": 1.0}, category: "device", page: 162, keywords: ["1.전송로시험", "디지털 계통보호전송장치(pitr)", "시 [e/o 방식]"] },
  { code: "통신 6-3-6", name: "험 [전 류 차동방식]", spec: "oT1,E1전송로", unit: "T/L", labors: {"통신관련산업기사": 1.0}, category: "device", page: 162, keywords: ["디지털 계통보호전송장치(pitr)", "ot1,e1전송로", "험 [전 류 차동방식]"] },
  { code: "통신 6-3-6", name: "험 [방 향 비교방식]", spec: "oT1,E1전송로", unit: "T/L", labors: {"통신관련산업기사": 1.0}, category: "device", page: 162, keywords: ["디지털 계통보호전송장치(pitr)", "험 [방 향 비교방식]", "ot1,e1전송로"] },
  { code: "통신 6-3-6", name: "험 [방향비교 전류차동방식]", spec: "oT1,E1전송로", unit: "T/L", labors: {"통신관련산업기사": 1.0}, category: "device", page: 162, keywords: ["디지털 계통보호전송장치(pitr)", "험 [방향비교 전류차동방식]", "ot1,e1전송로"] },
  { code: "통신 6-3-6", name: "험 [방향비교 전송차단방식]", spec: "oT1,E1전송로", unit: "T/L", labors: {"통신관련산업기사": 1.0}, category: "device", page: 162, keywords: ["디지털 계통보호전송장치(pitr)", "ot1,e1전송로", "험 [방향비교 전송차단방식]"] },
  { code: "통신 6-3-6", name: "험 [E/O 방식]", spec: "oT1,E1전송로", unit: "T/L", labors: {"통신관련산업기사": 1.0}, category: "device", page: 162, keywords: ["디지털 계통보호전송장치(pitr)", "험 [e/o 방식]", "ot1,e1전송로"] },
  { code: "통신 6-3-7", name: "광전송 부분", spec: "입력전원 시험", unit: "대", labors: {"광케이블설치사": 0.23}, category: "device", page: 163, keywords: ["입력전원 시험", "송·변전 광단말장치", "광전송 부분"] },
  { code: "통신 6-3-7", name: "계통 보호 부분", spec: "64kbps 측정", unit: "T/L", labors: {"통신관련산업기사": 1.0}, category: "device", page: 163, keywords: ["64kbps 측정", "계통 보호 부분", "송·변전 광단말장치"] },
  { code: "통신 6-3-7", name: "P-to-P 부분", spec: "시스템셋업및현재상태확인시험", unit: "대", labors: {"광케이블설치사": 0.72}, category: "device", page: 163, keywords: ["시스템셋업및현재상태확인시험", "송·변전 광단말장치", "p-to-p 부분"] },
  { code: "통신 7-1-1", name: "설 치 대 제 작", spec: "-", unit: "-", labors: {"통신설비공": 1.0}, category: "device", page: 169, keywords: ["설 치 대 제 작", "vhf(100w 이하) 이동국 송․수신기"] },
  { code: "통신 7-1-1", name: "조 립 설 치", spec: "-", unit: "0.50", labors: {"통신설비공": 0.5, "보통인부": 1.0}, category: "device", page: 169, keywords: ["vhf(100w 이하) 이동국 송․수신기", "조 립 설 치"] },
  { code: "통신 7-1-1", name: "배 선 및 결 선", spec: "-", unit: "-", labors: {"통신설비공": 1.0}, category: "device", page: 169, keywords: ["vhf(100w 이하) 이동국 송․수신기", "배 선 및 결 선"] },
  { code: "통신 7-1-1", name: "국부점검 및 조정시험", spec: "-", unit: "-", labors: {"통신관련산업기사": 4.0}, category: "device", page: 169, keywords: ["vhf(100w 이하) 이동국 송․수신기", "국부점검 및 조정시험"] },
  { code: "통신 7-1-1", name: "대 국 시 험", spec: "-", unit: "-", labors: {"통신관련산업기사": 2.0}, category: "device", page: 169, keywords: ["대 국 시 험", "vhf(100w 이하) 이동국 송․수신기"] },
  { code: "통신 7-1-2", name: "조 립 설 치", spec: "", unit: "개", labors: {"통신설비공": 0.5, "보통인부": 1.0}, category: "device", page: 169, keywords: ["vhf 또는 uhf(100w 이하) 고정국 송․수신기", "조 립 설 치"] },
  { code: "통신 7-1-2", name: "배 선 및 결 선", spec: "", unit: "개", labors: {"통신설비공": 3.0, "보통인부": 2.0}, category: "device", page: 169, keywords: ["배 선 및 결 선", "vhf 또는 uhf(100w 이하) 고정국 송․수신기"] },
  { code: "통신 7-1-2", name: "국부점검 및 조정시험", spec: "", unit: "개", labors: {"통신관련산업기사": 4.0}, category: "device", page: 169, keywords: ["vhf 또는 uhf(100w 이하) 고정국 송․수신기", "국부점검 및 조정시험"] },
  { code: "통신 7-1-2", name: "대 국 시 험", spec: "", unit: "개", labors: {"통신관련산업기사": 2.0}, category: "device", page: 169, keywords: ["대 국 시 험", "vhf 또는 uhf(100w 이하) 고정국 송․수신기"] },
  { code: "통신 7-1-3", name: "조 립 설 치", spec: "", unit: "개", labors: {"통신설비공": 0.6, "보통인부": 1.2}, category: "device", page: 170, keywords: ["vhf 또는 uhf(110w 이상) 고정국 송․수신기", "조 립 설 치"] },
  { code: "통신 7-1-3", name: "배 선 및 결 선", spec: "", unit: "개", labors: {"통신설비공": 3.6, "보통인부": 2.4}, category: "device", page: 170, keywords: ["vhf 또는 uhf(110w 이상) 고정국 송․수신기", "배 선 및 결 선"] },
  { code: "통신 7-1-3", name: "국부점검 및 조정시험", spec: "", unit: "개", labors: {"통신관련산업기사": 10.0}, category: "device", page: 170, keywords: ["vhf 또는 uhf(110w 이상) 고정국 송․수신기", "국부점검 및 조정시험"] },
  { code: "통신 7-1-3", name: "대 국 시 험", spec: "", unit: "개", labors: {"통신관련산업기사": 4.5}, category: "device", page: 170, keywords: ["vhf 또는 uhf(110w 이상) 고정국 송․수신기", "대 국 시 험"] },
  { code: "통신 7-1-4", name: "전 원 배 선", spec: "", unit: "개", labors: {"통신관련산업기사": 0.5, "통신설비공": 0.5}, category: "device", page: 170, keywords: ["전 원 배 선", "중․단파(500w 이하) 송․수신기"] },
  { code: "통신 7-1-4", name: "신 호 선 배 선", spec: "", unit: "개", labors: {"통신관련산업기사": 0.5, "통신설비공": 0.5}, category: "device", page: 170, keywords: ["신 호 선 배 선", "중․단파(500w 이하) 송․수신기"] },
  { code: "통신 7-1-4", name: "급 전 선 실 내 배 선", spec: "", unit: "개", labors: {"통신관련산업기사": 1.0, "통신설비공": 2.0}, category: "device", page: 170, keywords: ["중․단파(500w 이하) 송․수신기", "급 전 선 실 내 배 선"] },
  { code: "통신 7-1-4", name: "접지선매설 및 인입작업", spec: "", unit: "개", labors: {"통신관련산업기사": 0.5, "통신설비공": 0.5}, category: "device", page: 170, keywords: ["중․단파(500w 이하) 송․수신기", "접지선매설 및 인입작업"] },
  { code: "통신 7-1-4", name: "시 험", spec: "", unit: "개", labors: {"통신관련산업기사": 5.0, "통신설비공": 1.0}, category: "device", page: 170, keywords: ["시 험", "중․단파(500w 이하) 송․수신기"] },
  { code: "통신 7-1-5", name: "포장해체 및 현품대조", spec: "", unit: "대", labors: {"통신설비공": 0.4, "보통인부": 0.4}, category: "device", page: 171, keywords: ["포장해체 및 현품대조", "마이크로웨이브(micro wave) rf 송․수신기"] },
  { code: "통신 7-1-5", name: "B a y 건 립", spec: "", unit: "대", labors: {"통신설비공": 0.5, "보통인부": 1.0}, category: "device", page: 171, keywords: ["마이크로웨이브(micro wave) rf 송․수신기", "b a y 건 립"] },
  { code: "통신 7-1-5", name: "․송수신기 조립", spec: "", unit: "대", labors: {"통신관련산업기사": 0.61, "통신설비공": 0.6}, category: "device", page: 171, keywords: ["․송수신기 조립", "마이크로웨이브(micro wave) rf 송․수신기"] },
  { code: "통신 7-1-5", name: "내부결선 및 기타결선", spec: "", unit: "대", labors: {"통신관련기사": 0.3, "통신설비공": 0.3, "보통인부": 0.25}, category: "device", page: 171, keywords: ["내부결선 및 기타결선", "마이크로웨이브(micro wave) rf 송․수신기"] },
  { code: "통신 7-1-5", name: "국부조작 시험및각 판넬점검", spec: "개별설비 특성시험", unit: "대", labors: {"통신관련기사": 0.68}, category: "device", page: 171, keywords: ["개별설비 특성시험", "국부조작 시험및각 판넬점검", "마이크로웨이브(micro wave) rf 송․수신기"] },
  { code: "통신 7-1-5", name: "대 국 종 합 시 험", spec: "", unit: "대", labors: {"통신관련기사": 4.12}, category: "device", page: 171, keywords: ["대 국 종 합 시 험", "마이크로웨이브(micro wave) rf 송․수신기"] },
  { code: "통신 7-1-6", name: "B a y 건 립", spec: "", unit: "개", labors: {"통신설비공": 0.5, "보통인부": 1.0}, category: "device", page: 171, keywords: ["마이크로웨이브(micro wave) power amplifier", "b a y 건 립"] },
  { code: "통신 7-1-6", name: "S e t 조 립", spec: "", unit: "개", labors: {"통신설비공": 5.0}, category: "device", page: 171, keywords: ["s e t 조 립", "마이크로웨이브(micro wave) power amplifier"] },
  { code: "통신 7-1-6", name: "내부결선 및 기타결선", spec: "", unit: "개", labors: {"보통인부": 0.75}, category: "device", page: 171, keywords: ["내부결선 및 기타결선", "마이크로웨이브(micro wave) power amplifier"] },
  { code: "통신 7-1-6", name: "T. W. T 조 립 설 치", spec: "", unit: "개", labors: {"통신관련기사": 1.0, "보통인부": 1.0}, category: "device", page: 171, keywords: ["t. w. t 조 립 설 치", "마이크로웨이브(micro wave) power amplifier"] },
  { code: "통신 7-1-6", name: "국부조작시험및각판넬점검", spec: "", unit: "개", labors: {"통신관련기사": 6.31}, category: "device", page: 171, keywords: ["국부조작시험및각판넬점검", "마이크로웨이브(micro wave) power amplifier"] },
  { code: "통신 7-2-1", name: "포 기 점초 작 기 업 기", spec: "포 장 해 체", unit: "개", labors: {"통신설비공": 0.5, "보통인부": 1.0}, category: "device", page: 172, keywords: ["중․단파 송신기", "포 장 해 체", "포 기 점초 작 기 업 기"] },
  { code: "통신 7-2-1", name: "전 조 제립 고 및 저 설 공 치 공", spec: "전 원 부", unit: "개", labors: {"통신관련기사": 0.5, "통신관련산업기사": 0.5, "통신설비공": 2.5}, category: "device", page: 172, keywords: ["중․단파 송신기", "전 조 제립 고 및 저 설 공 치 공", "전 원 부"] },
  { code: "통신 7-2-1", name: "전 조 제 고정 저", spec: "전 원 부", unit: "개", labors: {"통신관련기사": 0.5, "통신관련산업기사": 1.0}, category: "device", page: 172, keywords: ["중․단파 송신기", "전 조 제 고정 저", "전 원 부"] },
  { code: "통신 7-2-1", name: "회 절 시 과 기험 기 시", spec: "회 로 결 선", unit: "개", labors: {"통신설비공": 1.0}, category: "device", page: 172, keywords: ["중․단파 송신기", "회 로 결 선", "회 절 시 과 기험 기 시"] },
  { code: "통신 7-2-1", name: "공 공 중 선 정공 합", spec: "공중선정합회로설계", unit: "개", labors: {"통신관련기사": 1.0, "통신관련산업기사": 1.0}, category: "device", page: 172, keywords: ["중․단파 송신기", "공 공 중 선 정공 합", "공중선정합회로설계"] },
  { code: "통신 7-2-1", name: "A 공 측 반 정 변 및 변 교 의 정 신 H", spec: "Audio입력임피던스", unit: "개", labors: {"통신관련산업기사": 1.0, "통신설비공": 1.0}, category: "device", page: 172, keywords: ["중․단파 송신기", "audio입력임피던스", "a 공 측 반 정 변 및 변 교 의 정 신 h"] },
  { code: "통신 7-2-2", name: "기 초 작 업", spec: "포 장 해 체", unit: "개", labors: {"통신설비공": 1.0, "보통인부": 1.5}, category: "device", page: 173, keywords: ["기 초 작 업", "vhf-tv 송신기", "포 장 해 체"] },
  { code: "통신 7-2-2", name: "조 립 및 설 치", spec: "전 원 부", unit: "개", labors: {"통신관련기사": 1.0, "통신관련산업기사": 1.0, "통신설비공": 2.0}, category: "device", page: 173, keywords: ["전 원 부", "조 립 및 설 치", "vhf-tv 송신기"] },
  { code: "통신 7-2-2", name: "조 정", spec: "전 원 부", unit: "개", labors: {"통신관련기사": 1.0, "통신관련산업기사": 1.0}, category: "device", page: 173, keywords: ["조 정", "전 원 부", "vhf-tv 송신기"] },
  { code: "통신 7-2-2", name: "시 험", spec: "회 로 결 선", unit: "-", labors: {"통신설비공": 1.0}, category: "device", page: 174, keywords: ["시 험", "vhf-tv 송신기", "회 로 결 선"] },
  { code: "통신 7-2-2", name: "측 정 및 교 정", spec: "영상입력임피던스", unit: "-", labors: {"통신관련산업기사": 1.0, "통신설비공": 1.0}, category: "device", page: 174, keywords: ["영상입력임피던스", "측 정 및 교 정", "vhf-tv 송신기"] },
  { code: "통신 7-2-3", name: "기 초 작 업", spec: "포 장 해 체", unit: "개", labors: {"통신설비공": 0.3, "보통인부": 1.0}, category: "device", page: 175, keywords: ["기 초 작 업", "포 장 해 체", "fm 송신기"] },
  { code: "통신 7-2-3", name: "조 립 및 설 치", spec: "전 원 부", unit: "개", labors: {"통신관련기사": 0.5, "통신관련산업기사": 0.5, "통신설비공": 1.5}, category: "device", page: 175, keywords: ["전 원 부", "조 립 및 설 치", "fm 송신기"] },
  { code: "통신 7-2-3", name: "조 정", spec: "전 원 부", unit: "개", labors: {"통신관련기사": 0.5, "통신관련산업기사": 0.5}, category: "device", page: 175, keywords: ["조 정", "전 원 부", "fm 송신기"] },
  { code: "통신 7-2-3", name: "시 험", spec: "회 로 결 선", unit: "개", labors: {"통신설비공": 1.0}, category: "device", page: 175, keywords: ["시 험", "회 로 결 선", "fm 송신기"] },
  { code: "통신 7-2-3", name: "측정 및 교정", spec: "입력임피던스", unit: "개", labors: {"통신관련산업기사": 1.0, "통신설비공": 1.0}, category: "device", page: 175, keywords: ["입력임피던스", "측정 및 교정", "fm 송신기"] },
  { code: "통신 7-3-1", name: "기 기 설 치", spec: "", unit: "개", labors: {"통신관련산업기사": 1.0, "통신설비공": 1.0, "보통인부": 1.0}, category: "device", page: 176, keywords: ["단파수신기(ssb 수신기)", "기 기 설 치"] },
  { code: "통신 7-3-1", name: "기기 조정 및 시험", spec: "", unit: "개", labors: {"통신관련산업기사": 1.0, "통신설비공": 1.0, "보통인부": 1.0}, category: "device", page: 176, keywords: ["단파수신기(ssb 수신기)", "기기 조정 및 시험"] },
  { code: "통신 7-4-1", name: "기초 작업", spec: "포 장 해 체", unit: "개", labors: {"통신설비공": 0.3, "보통인부": 0.5}, category: "device", page: 177, keywords: ["vhf-tv 중계기(translator)", "포 장 해 체", "기초 작업"] },
  { code: "통신 7-4-1", name: "조립 및 설치", spec: "전 원 부", unit: "개", labors: {"통신관련산업기사": 1.0, "통신설비공": 0.3}, category: "device", page: 177, keywords: ["조립 및 설치", "전 원 부", "vhf-tv 중계기(translator)"] },
  { code: "통신 7-4-1", name: "조 정", spec: "전 원 부", unit: "개", labors: {"통신관련산업기사": 1.0}, category: "device", page: 177, keywords: ["조 정", "전 원 부", "vhf-tv 중계기(translator)"] },
  { code: "통신 7-4-1", name: "시 험", spec: "안 정 도", unit: "개", labors: {"통신관련산업기사": 1.0}, category: "device", page: 177, keywords: ["시 험", "vhf-tv 중계기(translator)", "안 정 도"] },
  { code: "통신 7-4-1", name: "측정 및 교정", spec: "주 파수 특 성", unit: "개", labors: {"통신관련산업기사": 1.0}, category: "device", page: 177, keywords: ["주 파수 특 성", "vhf-tv 중계기(translator)", "측정 및 교정"] },
  { code: "통신 7-4-2", name: "기초 작업", spec: "포 장 해 체", unit: "개", labors: {"통신설비공": 0.3, "보통인부": 0.5}, category: "device", page: 178, keywords: ["uhf-tv 디지털 중계기", "포 장 해 체", "기초 작업"] },
  { code: "통신 7-4-2", name: "조립 및 설치", spec: "전 원 부", unit: "개", labors: {"통신관련산업기사": 1.0, "통신설비공": 0.3}, category: "device", page: 178, keywords: ["조립 및 설치", "uhf-tv 디지털 중계기", "전 원 부"] },
  { code: "통신 7-4-2", name: "조 정", spec: "전 원 부", unit: "개", labors: {"통신관련산업기사": 1.5}, category: "device", page: 178, keywords: ["조 정", "uhf-tv 디지털 중계기", "전 원 부"] },
  { code: "통신 7-4-2", name: "시 험", spec: "안 정 도", unit: "개", labors: {"통신관련산업기사": 1.0}, category: "device", page: 178, keywords: ["uhf-tv 디지털 중계기", "시 험", "안 정 도"] },
  { code: "통신 7-4-2", name: "측정 및 교 정", spec: "주 파 수 특 성", unit: "개", labors: {"통신관련산업기사": 1.5}, category: "device", page: 178, keywords: ["측정 및 교 정", "주 파 수 특 성", "uhf-tv 디지털 중계기"] },
  { code: "통신 7-4-3", name: "안테나", spec: "송신", unit: "기", labors: {"무선안테나공": 0.54, "통신설비공": 0.74, "보통인부": 0.37}, category: "device", page: 179, keywords: ["dtv 소출력 중계기", "송신", "안테나"] },
  { code: "통신 7-4-3", name: "중계기", spec: "", unit: "대", labors: {"통신관련산업기사": 0.58, "통신설비공": 0.68, "보통인부": 0.34}, category: "device", page: 179, keywords: ["dtv 소출력 중계기", "중계기"] },
  { code: "통신 7-4-4", name: "무선스피커", spec: "", unit: "대", labors: {"통신관련산업기사": 0.16, "통신설비공": 0.35, "보통인부": 0.27}, category: "device", page: 179, keywords: ["라디오재방송설비", "무선스피커"] },
  { code: "통신 7-4-4", name: "AM 매칭박스", spec: "", unit: "대", labors: {"통신관련산업기사": 0.15, "통신설비공": 0.26, "보통인부": 0.26}, category: "device", page: 179, keywords: ["라디오재방송설비", "am 매칭박스"] },
  { code: "통신 7-4-4", name: "수신안테나", spec: "", unit: "기", labors: {"통신설비공": 0.57, "무선안테나공": 0.66}, category: "device", page: 179, keywords: ["수신안테나", "라디오재방송설비"] },
  { code: "통신 7-4-4", name: "안테나 폴", spec: "", unit: "개", labors: {"통신설비공": 0.1}, category: "device", page: 179, keywords: ["라디오재방송설비", "안테나 폴"] },
  { code: "통신 7-4-4", name: "저전압증폭기", spec: "", unit: "대", labors: {"통신관련산업기사": 0.5, "통신설비공": 1.06, "보통인부": 0.61}, category: "device", page: 179, keywords: ["라디오재방송설비", "저전압증폭기"] },
  { code: "통신 7-4-4", name: "양방향증폭기", spec: "", unit: "대", labors: {"통신관련산업기사": 0.25, "통신설비공": 0.5, "보통인부": 0.25}, category: "device", page: 179, keywords: ["양방향증폭기", "라디오재방송설비"] },
  { code: "통신 7-4-4", name: "전원분배장치", spec: "", unit: "대", labors: {"통신관련산업기사": 0.18, "통신설비공": 0.18, "보통인부": 0.18}, category: "device", page: 179, keywords: ["라디오재방송설비", "전원분배장치"] },
  { code: "통신 7-4-4", name: "주장치부", spec: "중계장치", unit: "대", labors: {"통신관련산업기사": 0.79, "통신설비공": 0.92, "H/W시험사": 0.85}, category: "device", page: 179, keywords: ["중계장치", "라디오재방송설비", "주장치부"] },
  { code: "통신 7-4-4", name: "종합시험", spec: "", unit: "식", labors: {"통신관련산업기사": 0.87, "H/W시험사": 0.87}, category: "device", page: 179, keywords: ["라디오재방송설비", "종합시험"] },
  { code: "통신 7-4-5-1", name: "FM 중계기", spec: "", unit: "대", labors: {"통신관련산업기사": 0.15, "통신설비공": 0.15}, category: "device", page: 180, keywords: ["fm 중계기", "fm 및 dmb 중계기"] },
  { code: "통신 7-4-5-1", name: "DMB 중계기", spec: "", unit: "대", labors: {"통신관련산업기사": 0.15, "통신설비공": 0.15}, category: "device", page: 180, keywords: ["dmb 중계기", "fm 및 dmb 중계기"] },
  { code: "통신 7-4-5-2", name: "세대내 설치", spec: "벽 면", unit: "대", labors: {"통신설비공": 0.15}, category: "device", page: 181, keywords: ["벽 면", "소출력 fm/t-dmb 무선중계기(10mv/m@10m이하)", "세대내 설치"] },
  { code: "통신 7-4-5-2", name: "시 험", spec: "", unit: "대", labors: {"통신관련산업기사": 0.19}, category: "device", page: 181, keywords: ["소출력 fm/t-dmb 무선중계기(10mv/m@10m이하)", "시 험"] },
  { code: "통신 7-4-5-2", name: "지하층 설치", spec: "", unit: "대", labors: {"통신관련산업기사": 0.25, "통신설비공": 0.22}, category: "device", page: 181, keywords: ["소출력 fm/t-dmb 무선중계기(10mv/m@10m이하)", "지하층 설치"] },
  { code: "통신 7-4-6", name: "누설동축케이블", spec: "", unit: "10m", labors: {"무선안테나공": 0.3, "통신케이블공": 0.3}, category: "device", page: 181, keywords: ["무선통신보조설비", "누설동축케이블"] },
  { code: "통신 7-4-6", name: "무선기기 접속단자", spec: "", unit: "개", labors: {"통신설비공": 0.07}, category: "device", page: 181, keywords: ["무선통신보조설비", "무선기기 접속단자"] },
  { code: "통신 7-5-1-1", name: "Ø1.2m이하", spec: "1. 조립인양설치", unit: "2.00", labors: {"통신관련기사": 2.0, "무선안테나공": 4.0, "보통인부": 6.0}, category: "device", page: 182, keywords: ["철탑설치", "ø1.2m이하", "1. 조립인양설치"] },
  { code: "통신 7-5-1-1", name: "Ø1.2m이하", spec: "2. 방 향 조 정", unit: "-", labors: {"통신관련기사": 2.0, "무선안테나공": 2.0, "보통인부": 2.0}, category: "device", page: 182, keywords: ["철탑설치", "ø1.2m이하", "2. 방 향 조 정"] },
  { code: "통신 7-5-1-1", name: "Ø2.0m이하", spec: "1. 조립인양설치", unit: "4.00", labors: {"통신관련기사": 4.0, "무선안테나공": 8.0, "보통인부": 6.3}, category: "device", page: 182, keywords: ["철탑설치", "1. 조립인양설치", "ø2.0m이하"] },
  { code: "통신 7-5-1-1", name: "Ø2.0m이하", spec: "2. 방 향 조 정", unit: "-", labors: {"통신관련기사": 2.0, "무선안테나공": 5.0, "보통인부": 2.0}, category: "device", page: 182, keywords: ["철탑설치", "2. 방 향 조 정", "ø2.0m이하"] },
  { code: "통신 7-5-1-1", name: "Ø3.0m이하", spec: "1. 조립인양설치", unit: "5.00", labors: {"통신관련기사": 5.0, "무선안테나공": 8.0, "보통인부": 10.0}, category: "device", page: 182, keywords: ["철탑설치", "1. 조립인양설치", "ø3.0m이하"] },
  { code: "통신 7-5-1-1", name: "Ø3.0m이하", spec: "2. 방 향 조 정", unit: "-", labors: {"통신관련기사": 2.0, "무선안테나공": 5.0, "보통인부": 2.0}, category: "device", page: 182, keywords: ["철탑설치", "2. 방 향 조 정", "ø3.0m이하"] },
  { code: "통신 7-5-1-1", name: "Ø4.0m이하", spec: "1. 조립인양설치", unit: "5.00", labors: {"통신관련기사": 5.0, "무선안테나공": 10.7, "보통인부": 13.0}, category: "device", page: 182, keywords: ["ø4.0m이하", "1. 조립인양설치", "철탑설치"] },
  { code: "통신 7-5-1-1", name: "Ø4.0m이하", spec: "2. 방 향 조 정", unit: "-", labors: {"통신관련기사": 3.0, "무선안테나공": 6.0, "보통인부": 2.0}, category: "device", page: 182, keywords: ["ø4.0m이하", "2. 방 향 조 정", "철탑설치"] },
  { code: "통신 7-5-1-1", name: "Ø5.0m이하", spec: "1. 조립인양설치", unit: "6.00", labors: {"통신관련기사": 7.25, "무선안테나공": 15.1, "보통인부": 17.1}, category: "device", page: 182, keywords: ["철탑설치", "1. 조립인양설치", "ø5.0m이하"] },
  { code: "통신 7-5-1-1", name: "Ø5.0m이하", spec: "2. 방 향 조 정", unit: "-", labors: {"통신관련기사": 3.0, "무선안테나공": 8.0, "보통인부": 2.0}, category: "device", page: 182, keywords: ["철탑설치", "2. 방 향 조 정", "ø5.0m이하"] },
  { code: "통신 7-5-1-2", name: "Ø1.2m이하", spec: "1. 인양조립설치", unit: "개", labors: {"통신설비공": 0.51, "보통인부": 0.26}, category: "device", page: 183, keywords: ["ø1.2m이하", "1. 인양조립설치", "건물설치"] },
  { code: "통신 7-5-1-2", name: "Ø1.2m이하", spec: "2. 방향 및 시험조정", unit: "개", labors: {"통신관련산업기사": 0.51}, category: "device", page: 183, keywords: ["2. 방향 및 시험조정", "ø1.2m이하", "건물설치"] },
  { code: "통신 7-5-1-2", name: "Ø2.4m이하", spec: "1. 인양조립설치", unit: "개", labors: {"통신설비공": 1.15, "보통인부": 0.58}, category: "device", page: 183, keywords: ["1. 인양조립설치", "건물설치", "ø2.4m이하"] },
  { code: "통신 7-5-1-2", name: "Ø2.4m이하", spec: "2. 방향 및 시험조정", unit: "개", labors: {"통신관련산업기사": 1.15}, category: "device", page: 183, keywords: ["2. 방향 및 시험조정", "건물설치", "ø2.4m이하"] },
  { code: "통신 7-5-1-2", name: "Ø3.2m이하", spec: "1. 인양조립설치", unit: "개", labors: {"통신설비공": 2.2, "보통인부": 1.1}, category: "device", page: 183, keywords: ["ø3.2m이하", "1. 인양조립설치", "건물설치"] },
  { code: "통신 7-5-1-2", name: "Ø3.2m이하", spec: "2. 방향 및 시험조정", unit: "개", labors: {"통신관련산업기사": 2.2}, category: "device", page: 183, keywords: ["ø3.2m이하", "건물설치", "2. 방향 및 시험조정"] },
  { code: "통신 7-5-2", name: "1. 조 립 인 양 설 치", spec: "3.00", unit: "개", labors: {"통신관련기사": 1.0, "무선안테나공": 3.0, "특별인부": 2.5}, category: "device", page: 183, keywords: ["vhf, 옴니, 코너(corner) 안테나", "1. 조 립 인 양 설 치", "3.00"] },
  { code: "통신 7-5-2", name: "2. 방 향 조 정", spec: "-", unit: "개", labors: {"통신관련기사": 2.0, "무선안테나공": 1.0}, category: "device", page: 183, keywords: ["vhf, 옴니, 코너(corner) 안테나", "2. 방 향 조 정"] },
  { code: "통신 7-5-3-1", name: "1. ANT Element : 제 작", spec: "-", unit: "5.60", labors: {"통신관련기사": 2.0, "통신외선공": 8.0, "보통인부": 6.0}, category: "device", page: 184, keywords: ["curtain 안테나", "1. ant element : 제 작"] },
  { code: "통신 7-5-3-1", name: "설 치", spec: "10.00", unit: "-", labors: {"통신관련기사": 5.0, "무선안테나공": 5.0, "보통인부": 11.5}, category: "device", page: 184, keywords: ["설 치", "curtain 안테나", "10.00"] },
  { code: "통신 7-5-3-1", name: "2. Element 지지용트라스:", spec: "-", unit: "1.80", labors: {"통신외선공": 4.0, "보통인부": 2.0}, category: "device", page: 184, keywords: ["2. element 지지용트라스:", "curtain 안테나"] },
  { code: "통신 7-5-3-1", name: "제 작", spec: "1.60", unit: "-", labors: {"통신관련기사": 0.3, "보통인부": 3.2}, category: "device", page: 184, keywords: ["1.60", "제 작", "curtain 안테나"] },
  { code: "통신 7-5-3-1", name: "3. 임피던스 매칭트랜스 :", spec: "-", unit: "2.10", labors: {"통신관련기사": 0.8, "보통인부": 2.5}, category: "device", page: 184, keywords: ["curtain 안테나", "3. 임피던스 매칭트랜스 :"] },
  { code: "통신 7-5-3-1", name: "제 작", spec: "3.20", unit: "-", labors: {"무선안테나공": 4.5, "보통인부": 6.0}, category: "device", page: 184, keywords: ["3.20", "제 작", "curtain 안테나"] },
  { code: "통신 7-5-3-1", name: "4. 상부 Dividing 급전선 :", spec: "-", unit: "3.50", labors: {"통신관련기사": 1.0, "통신외선공": 8.0}, category: "device", page: 184, keywords: ["4. 상부 dividing 급전선 :", "curtain 안테나"] },
  { code: "통신 7-5-3-1", name: "제 작", spec: "4.00", unit: "-", labors: {"통신관련기사": 0.5, "보통인부": 8.0}, category: "device", page: 184, keywords: ["4.00", "제 작", "curtain 안테나"] },
  { code: "통신 7-5-3-1", name: "5. 수직입상급전선 : 제 작", spec: "-", unit: "3.50", labors: {"통신관련기사": 1.0, "통신외선공": 8.0}, category: "device", page: 184, keywords: ["5. 수직입상급전선 : 제 작", "curtain 안테나"] },
  { code: "통신 7-5-3-1", name: "설 치", spec: "4.00", unit: "-", labors: {"통신관련기사": 0.5, "보통인부": 8.0}, category: "device", page: 184, keywords: ["4.00", "설 치", "curtain 안테나"] },
  { code: "통신 7-5-3-1", name: "6. Element 지지보조지지선:", spec: "-", unit: "-", labors: {"통신외선공": 6.0, "보통인부": 6.0}, category: "device", page: 184, keywords: ["curtain 안테나", "6. element 지지보조지지선:"] },
  { code: "통신 7-5-3-1", name: "제 작", spec: "6.00", unit: "-", labors: {"보통인부": 8.0}, category: "device", page: 184, keywords: ["제 작", "curtain 안테나", "6.00"] },
  { code: "통신 7-5-3-1", name: "7. Stub Matching :", spec: "-", unit: "4.00", labors: {"통신관련기사": 1.5, "통신외선공": 8.0, "보통인부": 4.0}, category: "device", page: 184, keywords: ["7. stub matching :", "curtain 안테나"] },
  { code: "통신 7-5-3-1", name: "Network 제 작", spec: "10.00", unit: "-", labors: {"통신관련기사": 4.0, "보통인부": 15.0}, category: "device", page: 184, keywords: ["curtain 안테나", "network 제 작", "10.00"] },
  { code: "통신 7-5-3-1", name: "8. Slew Switch : 제 작", spec: "-", unit: "-", labors: {"무선안테나공": 2.0, "통신외선공": 2.0, "보통인부": 10.0}, category: "device", page: 184, keywords: ["8. slew switch : 제 작", "curtain 안테나"] },
  { code: "통신 7-5-3-1", name: "설 치", spec: "-", unit: "-", labors: {"통신관련기사": 1.6, "통신외선공": 3.0, "보통인부": 12.0}, category: "device", page: 184, keywords: ["설 치", "curtain 안테나"] },
  { code: "통신 7-5-3-1", name: "9. Reflector Screen :", spec: "-", unit: "-", labors: {"통신외선공": 6.0, "보통인부": 4.0}, category: "device", page: 184, keywords: ["curtain 안테나", "9. reflector screen :"] },
  { code: "통신 7-5-3-1", name: "(10선-12선) 제 작", spec: "4.00", unit: "-", labors: {"보통인부": 10.0}, category: "device", page: 184, keywords: ["4.00", "curtain 안테나", "(10선-12선) 제 작"] },
  { code: "통신 7-5-3-1", name: "10. 임피던스측정 및 정합", spec: "-", unit: "-", labors: {"통신관련기사": 7.0, "무선안테나공": 14.0, "보통인부": 14.0}, category: "device", page: 184, keywords: ["10. 임피던스측정 및 정합", "curtain 안테나"] },
  { code: "통신 7-5-3-2", name: "1. 포 장 해 체 점 검", spec: "", unit: "개", labors: {"통신외선공": 2.6, "보통인부": 2.08}, category: "device", page: 185, keywords: ["lp 안테나", "1. 포 장 해 체 점 검"] },
  { code: "통신 7-5-3-2", name: "가. Boom 조 립", spec: "", unit: "개", labors: {"통신관련기사": 0.5, "통신외선공": 1.0, "보통인부": 10.8}, category: "device", page: 185, keywords: ["lp 안테나", "가. boom 조 립"] },
  { code: "통신 7-5-3-2", name: "나. Boom 인양설치", spec: "", unit: "개", labors: {"통신관련기사": 1.0, "무선안테나공": 7.2, "통신외선공": 1.0, "보통인부": 18.0}, category: "device", page: 185, keywords: ["lp 안테나", "나. boom 인양설치"] },
  { code: "통신 7-5-3-2", name: "다. 소 자 조 립", spec: "", unit: "개", labors: {"통신관련기사": 5.02, "통신외선공": 1.0}, category: "device", page: 185, keywords: ["lp 안테나", "다. 소 자 조 립"] },
  { code: "통신 7-5-3-2", name: "라. 소자인양 설치", spec: "", unit: "개", labors: {"통신관련기사": 3.1, "무선안테나공": 8.0, "통신외선공": 2.0, "보통인부": 18.0}, category: "device", page: 185, keywords: ["lp 안테나", "라. 소자인양 설치"] },
  { code: "통신 7-5-3-2", name: "마. 배 선 및 결 선", spec: "", unit: "개", labors: {"무선안테나공": 1.0, "통신외선공": 8.0}, category: "device", page: 185, keywords: ["lp 안테나", "마. 배 선 및 결 선"] },
  { code: "통신 7-5-3-2", name: "3. 특성시험 및 조정", spec: "", unit: "개", labors: {"통신관련기사": 4.0, "통신외선공": 7.5}, category: "device", page: 185, keywords: ["lp 안테나", "3. 특성시험 및 조정"] },
  { code: "통신 7-5-3-3", name: "공중선소자조립", spec: "", unit: "개", labors: {"통신관련산업기사": 1.0, "통신외선공": 1.0, "보통인부": 0.5}, category: "device", page: 185, keywords: ["공중선소자조립", "다브레트 안테나"] },
  { code: "통신 7-5-3-3", name: "공중선가설작업", spec: "", unit: "개", labors: {"무선안테나공": 1.0, "통신외선공": 1.0, "보통인부": 0.5}, category: "device", page: 185, keywords: ["공중선가설작업", "다브레트 안테나"] },
  { code: "통신 7-5-3-3", name: "공 중 선 시 험", spec: "", unit: "개", labors: {"통신관련산업기사": 1.0, "무선안테나공": 0.5}, category: "device", page: 185, keywords: ["공 중 선 시 험", "다브레트 안테나"] },
  { code: "통신 7-5-3-3", name: "소 운 반", spec: "", unit: "개", labors: {"보통인부": 1.0}, category: "device", page: 185, keywords: ["소 운 반", "다브레트 안테나"] },
  { code: "통신 7-5-3-3", name: "피복외경 15㎜이하", spec: "", unit: "개", labors: {"무선안테나공": 0.01, "통신외선공": 0.01, "보통인부": 0.01}, category: "device", page: 186, keywords: ["피복외경 15㎜이하", "다브레트 안테나"] },
  { code: "통신 7-5-3-3", name: "초과", spec: "", unit: "개", labors: {"무선안테나공": 0.02, "통신외선공": 0.02, "보통인부": 0.05}, category: "device", page: 186, keywords: ["초과", "다브레트 안테나"] },
  { code: "통신 7-5-3-4", name: "공중선소자조립", spec: "", unit: "개", labors: {"통신관련산업기사": 2.0, "통신외선공": 2.0, "보통인부": 1.0}, category: "device", page: 186, keywords: ["룸빅 안테나", "공중선소자조립"] },
  { code: "통신 7-5-3-4", name: "공중선가설작업", spec: "", unit: "개", labors: {"무선안테나공": 3.0, "통신외선공": 3.0, "보통인부": 1.5}, category: "device", page: 186, keywords: ["룸빅 안테나", "공중선가설작업"] },
  { code: "통신 7-5-3-4", name: "공 중 선 시 험", spec: "", unit: "개", labors: {"통신관련산업기사": 1.0, "무선안테나공": 1.0}, category: "device", page: 186, keywords: ["룸빅 안테나", "공 중 선 시 험"] },
  { code: "통신 7-5-3-4", name: "소 운 반", spec: "", unit: "개", labors: {"보통인부": 2.0}, category: "device", page: 186, keywords: ["소 운 반", "룸빅 안테나"] },
  { code: "통신 7-5-3-4", name: "피복외경 15㎜이하", spec: "", unit: "개", labors: {"무선안테나공": 0.01, "통신외선공": 0.01, "보통인부": 0.01}, category: "device", page: 186, keywords: ["룸빅 안테나", "피복외경 15㎜이하"] },
  { code: "통신 7-5-3-4", name: "“ “ 초과", spec: "", unit: "개", labors: {"무선안테나공": 0.02, "통신외선공": 0.02, "보통인부": 0.05}, category: "device", page: 186, keywords: ["“ “ 초과", "룸빅 안테나"] },
  { code: "통신 7-5-4", name: "10W-100W", spec: "", unit: "개", labors: {"통신설비공": 1.0}, category: "device", page: 187, keywords: ["의사공중선", "10w-100w"] },
  { code: "통신 7-5-4", name: "1kW 이하", spec: "", unit: "개", labors: {"통신관련산업기사": 1.0, "통신설비공": 1.0}, category: "device", page: 187, keywords: ["의사공중선", "1kw 이하"] },
  { code: "통신 7-5-4", name: "5kW 이하", spec: "", unit: "개", labors: {"통신관련기사": 1.0, "통신관련산업기사": 1.0, "통신설비공": 1.0}, category: "device", page: 187, keywords: ["의사공중선", "5kw 이하"] },
  { code: "통신 7-5-4", name: "10kW 이하", spec: "", unit: "개", labors: {"통신관련기사": 1.0, "통신관련산업기사": 1.0, "통신설비공": 1.0}, category: "device", page: 187, keywords: ["의사공중선", "10kw 이하"] },
  { code: "통신 7-5-4", name: "50kW 이하", spec: "", unit: "개", labors: {"통신관련기사": 1.0, "통신관련산업기사": 3.0, "통신설비공": 3.0, "보통인부": 1.0}, category: "device", page: 187, keywords: ["의사공중선", "50kw 이하"] },
  { code: "통신 7-5-4", name: "100kW 이하", spec: "", unit: "개", labors: {"통신관련기사": 2.0, "통신관련산업기사": 4.0, "통신설비공": 4.0, "보통인부": 3.0}, category: "device", page: 187, keywords: ["의사공중선", "100kw 이하"] },
  { code: "통신 7-5-4", name: "300kW 이하", spec: "", unit: "개", labors: {"통신관련기사": 3.0, "통신관련산업기사": 6.0, "통신설비공": 6.0, "보통인부": 5.0}, category: "device", page: 187, keywords: ["의사공중선", "300kw 이하"] },
  { code: "통신 7-5-4", name: "500kW 이하", spec: "", unit: "개", labors: {"통신관련기사": 5.5, "통신관련산업기사": 11.0, "통신설비공": 11.0, "보통인부": 9.0}, category: "device", page: 187, keywords: ["의사공중선", "500kw 이하"] },
  { code: "통신 7-5-4", name: "1,000kW 이하", spec: "", unit: "개", labors: {"통신관련기사": 11.0, "통신관련산업기사": 22.0, "통신설비공": 22.0, "보통인부": 18.0}, category: "device", page: 187, keywords: ["의사공중선", "1,000kw 이하"] },
  { code: "통신 7-5-5-1", name: "포장해체 및 점검", spec: "-", unit: "개", labors: {"통신외선공": 1.0, "보통인부": 0.8}, category: "device", page: 187, keywords: ["포장해체 및 점검", "tv low channel"] },
  { code: "통신 7-5-5-1", name: "조 립 설 치", spec: "7.00", unit: "개", labors: {"통신관련기사": 3.7, "통신외선공": 5.0, "보통인부": 18.0}, category: "device", page: 187, keywords: ["7.00", "tv low channel", "조 립 설 치"] },
  { code: "통신 7-5-5-1", name: "특성측정 및 조정", spec: "-", unit: "개", labors: {"통신관련기사": 4.0, "통신외선공": 7.5}, category: "device", page: 187, keywords: ["tv low channel", "특성측정 및 조정"] },
  { code: "통신 7-5-5-2", name: "포장해체 및 점검", spec: "-", unit: "개", labors: {"통신외선공": 0.8, "보통인부": 0.6}, category: "device", page: 188, keywords: ["포장해체 및 점검", "tv high channel"] },
  { code: "통신 7-5-5-2", name: "조 립 설 치", spec: "6.00", unit: "개", labors: {"통신관련기사": 3.5, "통신외선공": 4.0, "보통인부": 14.0}, category: "device", page: 188, keywords: ["6.00", "tv high channel", "조 립 설 치"] },
  { code: "통신 7-5-5-2", name: "특성측정 및 조정", spec: "-", unit: "개", labors: {"통신관련기사": 4.0, "통신외선공": 6.0}, category: "device", page: 188, keywords: ["특성측정 및 조정", "tv high channel"] },
  { code: "통신 7-5-5-3", name: "포장해체 및 점검", spec: "-", unit: "개", labors: {"통신외선공": 0.6, "보통인부": 0.4}, category: "device", page: 188, keywords: ["포장해체 및 점검", "tv uhf channel"] },
  { code: "통신 7-5-5-3", name: "조 립 설 치", spec: "3.00", unit: "개", labors: {"통신관련기사": 1.5, "통신외선공": 2.0, "보통인부": 5.0}, category: "device", page: 188, keywords: ["3.00", "조 립 설 치", "tv uhf channel"] },
  { code: "통신 7-5-5-3", name: "특성측정 및 조정", spec: "-", unit: "개", labors: {"통신관련기사": 5.0, "통신외선공": 6.0}, category: "device", page: 188, keywords: ["특성측정 및 조정", "tv uhf channel"] },
  { code: "통신 7-5-5-4", name: "포장해체 및 점검", spec: "-", unit: "개", labors: {"통신외선공": 0.8, "보통인부": 0.6}, category: "device", page: 188, keywords: ["포장해체 및 점검", "fm(88-108mhz)"] },
  { code: "통신 7-5-5-4", name: "조 립 설 치", spec: "4.00", unit: "개", labors: {"통신관련기사": 3.0, "통신외선공": 2.0, "보통인부": 11.0}, category: "device", page: 188, keywords: ["4.00", "fm(88-108mhz)", "조 립 설 치"] },
  { code: "통신 7-5-5-4", name: "특성측정 및 조정", spec: "-", unit: "개", labors: {"통신관련기사": 4.0, "통신외선공": 4.5}, category: "device", page: 188, keywords: ["특성측정 및 조정", "fm(88-108mhz)"] },
  { code: "통신 7-5-6", name: "지상파TV 및 FM", spec: "수신 안테나", unit: "세트", labors: {"무선안테나공": 0.17, "통신설비공": 0.33}, category: "device", page: 189, keywords: ["방송 공동수신 안테나", "수신 안테나", "지상파tv 및 fm"] },
  { code: "통신 7-5-6", name: "라디오 방송", spec: "폴(Pole)", unit: "기", labors: {"통신설비공": 0.1}, category: "device", page: 189, keywords: ["라디오 방송", "폴(pole)", "방송 공동수신 안테나"] },
  { code: "통신 7-5-6", name: "위성방송안테나", spec: "지름 1.2m 이하", unit: "개", labors: {"무선안테나공": 0.6, "통신설비공": 0.53}, category: "device", page: 189, keywords: ["방송 공동수신 안테나", "지름 1.2m 이하", "위성방송안테나"] },
  { code: "통신 7-5-6", name: "위성방송안테나", spec: "지름 1.8m 이하", unit: "개", labors: {"무선안테나공": 0.76, "통신설비공": 0.6}, category: "device", page: 189, keywords: ["방송 공동수신 안테나", "위성방송안테나", "지름 1.8m 이하"] },
  { code: "통신 7-5-7", name: "안 테 나 설 치", spec: "", unit: "대", labors: {"통신설비공": 0.14, "통신관련산업기사": 0.1}, category: "device", page: 189, keywords: ["안 테 나 설 치", "디지털 위성방송 개별수신방식(dth)"] },
  { code: "통신 7-5-7", name: "셋톱박스 설 치", spec: "", unit: "대", labors: {"통신설비공": 0.1}, category: "device", page: 189, keywords: ["셋톱박스 설 치", "디지털 위성방송 개별수신방식(dth)"] },
  { code: "통신 7-5-7", name: "시 험", spec: "", unit: "대", labors: {"통신관련산업기사": 0.1}, category: "device", page: 189, keywords: ["시 험", "디지털 위성방송 개별수신방식(dth)"] },
  { code: "통신 7-5-8", name: "수신안테나", spec: "실 내", unit: "대", labors: {"통신설비공": 0.09, "특별인부": 0.06}, category: "device", page: 190, keywords: ["수신안테나", "실 내", "dtv방송 단독수신설비"] },
  { code: "통신 7-5-8", name: "안테나폴", spec: "-", unit: "기", labors: {"통신설비공": 0.1}, category: "device", page: 190, keywords: ["안테나폴", "dtv방송 단독수신설비"] },
  { code: "통신 7-6-1-1", name: "1. 건 립", spec: "-", unit: "톤", labors: {"무선안테나공": 6.5, "통신외선공": 6.5, "보통인부": 5.0}, category: "device", page: 191, keywords: ["자립식 철탑", "1. 건 립"] },
  { code: "통신 7-6-1-1", name: "3. 철탑보안등시설", spec: "-", unit: "조", labors: {"무선안테나공": 1.0, "통신외선공": 2.0}, category: "device", page: 191, keywords: ["자립식 철탑", "3. 철탑보안등시설"] },
  { code: "통신 7-6-1-1", name: "4. 피뢰침 시설", spec: "-", unit: "조", labors: {"무선안테나공": 1.0, "통신외선공": 2.0}, category: "device", page: 191, keywords: ["자립식 철탑", "4. 피뢰침 시설"] },
  { code: "통신 7-6-1-2", name: "철탑자재 분류", spec: "", unit: "톤", labors: {"무선안테나공": 0.5, "통신외선공": 1.2, "특별인부": 1.2}, category: "device", page: 191, keywords: ["조립식 강관주형 철탑", "철탑자재 분류"] },
  { code: "통신 7-6-1-2", name: "건 립", spec: "", unit: "톤", labors: {"무선안테나공": 3.6, "통신외선공": 3.6, "특별인부": 2.6}, category: "device", page: 191, keywords: ["조립식 강관주형 철탑", "건 립"] },
  { code: "통신 7-6-2", name: "1. 철탑자재분류", spec: "(폭)60이하 (단위 : ㎝)", unit: "0.20", labors: {"무선안테나공": 0.11}, category: "device", page: 192, keywords: ["1. 철탑자재분류", "(폭)60이하 (단위 : ㎝)", "중파방송용 삼각지선식 철탑"] },
  { code: "통신 7-6-2", name: "1. 철탑자재분류", spec: "(폭)90이하 (단위 : ㎝)", unit: "0.20", labors: {"무선안테나공": 0.12}, category: "device", page: 192, keywords: ["1. 철탑자재분류", "(폭)90이하 (단위 : ㎝)", "중파방송용 삼각지선식 철탑"] },
  { code: "통신 7-6-2", name: "1. 철탑자재분류", spec: "(폭)120이하 (단위 : ㎝)", unit: "0.20", labors: {"무선안테나공": 0.13}, category: "device", page: 192, keywords: ["1. 철탑자재분류", "(폭)120이하 (단위 : ㎝)", "중파방송용 삼각지선식 철탑"] },
  { code: "통신 7-6-2", name: "2. 철탑조립", spec: "(폭)60이하 (단위 : ㎝)", unit: "1.00", labors: {"통신외선공": 0.68}, category: "device", page: 192, keywords: ["2. 철탑조립", "(폭)60이하 (단위 : ㎝)", "중파방송용 삼각지선식 철탑"] },
  { code: "통신 7-6-2", name: "2. 철탑조립", spec: "(폭)90이하 (단위 : ㎝)", unit: "1.00", labors: {"통신외선공": 0.73}, category: "device", page: 192, keywords: ["2. 철탑조립", "(폭)90이하 (단위 : ㎝)", "중파방송용 삼각지선식 철탑"] },
  { code: "통신 7-6-2", name: "2. 철탑조립", spec: "(폭)120이하 (단위 : ㎝)", unit: "1.00", labors: {"통신외선공": 0.78}, category: "device", page: 192, keywords: ["2. 철탑조립", "(폭)120이하 (단위 : ㎝)", "중파방송용 삼각지선식 철탑"] },
  { code: "통신 7-6-2", name: "3. 철탑건립", spec: "(폭)60이하 (단위 : ㎝)", unit: "5.61", labors: {"무선안테나공": 2.16}, category: "device", page: 192, keywords: ["3. 철탑건립", "(폭)60이하 (단위 : ㎝)", "중파방송용 삼각지선식 철탑"] },
  { code: "통신 7-6-2", name: "3. 철탑건립", spec: "(폭)90이하 (단위 : ㎝)", unit: "5.61", labors: {"무선안테나공": 3.02}, category: "device", page: 192, keywords: ["3. 철탑건립", "(폭)90이하 (단위 : ㎝)", "중파방송용 삼각지선식 철탑"] },
  { code: "통신 7-6-2", name: "3. 철탑건립", spec: "(폭)120이하 (단위 : ㎝)", unit: "5.61", labors: {"무선안테나공": 3.88}, category: "device", page: 192, keywords: ["(폭)120이하 (단위 : ㎝)", "3. 철탑건립", "중파방송용 삼각지선식 철탑"] },
  { code: "통신 7-6-2", name: "4. 3방향 지지선설치", spec: "(폭)60이하 (단위 : ㎝)", unit: "6.76", labors: {"통신외선공": 2.2}, category: "device", page: 192, keywords: ["4. 3방향 지지선설치", "(폭)60이하 (단위 : ㎝)", "중파방송용 삼각지선식 철탑"] },
  { code: "통신 7-6-2", name: "4. 3방향 지지선설치", spec: "(폭)90이하 (단위 : ㎝)", unit: "6.76", labors: {"통신외선공": 3.77}, category: "device", page: 192, keywords: ["4. 3방향 지지선설치", "(폭)90이하 (단위 : ㎝)", "중파방송용 삼각지선식 철탑"] },
  { code: "통신 7-6-2", name: "4. 3방향 지지선설치", spec: "(폭)120이하 (단위 : ㎝)", unit: "6.76", labors: {"통신외선공": 4.9}, category: "device", page: 192, keywords: ["4. 3방향 지지선설치", "(폭)120이하 (단위 : ㎝)", "중파방송용 삼각지선식 철탑"] },
  { code: "통신 7-6-2", name: "(1개소당 길이", spec: "(폭)60이하 (단위 : ㎝)", unit: "3.12", labors: {"보통인부": 1.2}, category: "device", page: 192, keywords: ["(1개소당 길이", "(폭)60이하 (단위 : ㎝)", "중파방송용 삼각지선식 철탑"] },
  { code: "통신 7-6-2", name: "(1개소당 길이", spec: "(폭)90이하 (단위 : ㎝)", unit: "3.12", labors: {"보통인부": 1.74}, category: "device", page: 192, keywords: ["(1개소당 길이", "(폭)90이하 (단위 : ㎝)", "중파방송용 삼각지선식 철탑"] },
  { code: "통신 7-6-2", name: "(1개소당 길이", spec: "(폭)120이하 (단위 : ㎝)", unit: "3.12", labors: {"보통인부": 2.28}, category: "device", page: 192, keywords: ["(1개소당 길이", "(폭)120이하 (단위 : ㎝)", "중파방송용 삼각지선식 철탑"] },
  { code: "통신 7-6-2", name: "5. 항공장애표시등", spec: "(폭)60이하 (단위 : ㎝)", unit: "4.10", labors: {"보통인부": 4.1}, category: "device", page: 192, keywords: ["5. 항공장애표시등", "(폭)60이하 (단위 : ㎝)", "중파방송용 삼각지선식 철탑"] },
  { code: "통신 7-6-2", name: "5. 항공장애표시등", spec: "(폭)90이하 (단위 : ㎝)", unit: "4.10", labors: {"보통인부": 4.1}, category: "device", page: 192, keywords: ["5. 항공장애표시등", "(폭)90이하 (단위 : ㎝)", "중파방송용 삼각지선식 철탑"] },
  { code: "통신 7-6-2", name: "5. 항공장애표시등", spec: "(폭)120이하 (단위 : ㎝)", unit: "4.10", labors: {"보통인부": 4.1}, category: "device", page: 192, keywords: ["5. 항공장애표시등", "(폭)120이하 (단위 : ㎝)", "중파방송용 삼각지선식 철탑"] },
  { code: "통신 7-6-2", name: "설치(2단 기준)", spec: "(폭)60이하 (단위 : ㎝)", unit: "1.10", labors: {"보통인부": 1.1}, category: "device", page: 192, keywords: ["설치(2단 기준)", "(폭)60이하 (단위 : ㎝)", "중파방송용 삼각지선식 철탑"] },
  { code: "통신 7-6-2", name: "설치(2단 기준)", spec: "(폭)90이하 (단위 : ㎝)", unit: "1.10", labors: {"보통인부": 1.1}, category: "device", page: 192, keywords: ["설치(2단 기준)", "(폭)90이하 (단위 : ㎝)", "중파방송용 삼각지선식 철탑"] },
  { code: "통신 7-6-2", name: "설치(2단 기준)", spec: "(폭)120이하 (단위 : ㎝)", unit: "1.10", labors: {"보통인부": 1.1}, category: "device", page: 192, keywords: ["설치(2단 기준)", "(폭)120이하 (단위 : ㎝)", "중파방송용 삼각지선식 철탑"] },
  { code: "통신 7-6-2", name: "6. 위치 및", spec: "(폭)60이하 (단위 : ㎝)", unit: "6.00", labors: {"보통인부": 4.0}, category: "device", page: 192, keywords: ["6. 위치 및", "(폭)60이하 (단위 : ㎝)", "중파방송용 삼각지선식 철탑"] },
  { code: "통신 7-6-2", name: "6. 위치 및", spec: "(폭)90이하 (단위 : ㎝)", unit: "6.00", labors: {"보통인부": 4.0}, category: "device", page: 192, keywords: ["6. 위치 및", "(폭)90이하 (단위 : ㎝)", "중파방송용 삼각지선식 철탑"] },
  { code: "통신 7-6-2", name: "6. 위치 및", spec: "(폭)120이하 (단위 : ㎝)", unit: "6.00", labors: {"보통인부": 5.0}, category: "device", page: 192, keywords: ["6. 위치 및", "(폭)120이하 (단위 : ㎝)", "중파방송용 삼각지선식 철탑"] },
  { code: "통신 7-6-2", name: "수직측량", spec: "(폭)60이하 (단위 : ㎝)", unit: "11.00", labors: {"보통인부": 8.0}, category: "device", page: 192, keywords: ["수직측량", "(폭)60이하 (단위 : ㎝)", "중파방송용 삼각지선식 철탑"] },
  { code: "통신 7-6-2", name: "수직측량", spec: "(폭)90이하 (단위 : ㎝)", unit: "11.00", labors: {"보통인부": 8.0}, category: "device", page: 192, keywords: ["수직측량", "(폭)90이하 (단위 : ㎝)", "중파방송용 삼각지선식 철탑"] },
  { code: "통신 7-6-2", name: "수직측량", spec: "(폭)120이하 (단위 : ㎝)", unit: "11.00", labors: {"보통인부": 9.0}, category: "device", page: 192, keywords: ["(폭)120이하 (단위 : ㎝)", "수직측량", "중파방송용 삼각지선식 철탑"] },
  { code: "통신 7-6-2", name: "7. 좌애자설치", spec: "(폭)60이하 (단위 : ㎝)", unit: "3.00", labors: {"무선안테나공": 1.2}, category: "device", page: 192, keywords: ["7. 좌애자설치", "(폭)60이하 (단위 : ㎝)", "중파방송용 삼각지선식 철탑"] },
  { code: "통신 7-6-2", name: "7. 좌애자설치", spec: "(폭)90이하 (단위 : ㎝)", unit: "3.00", labors: {"무선안테나공": 1.5}, category: "device", page: 192, keywords: ["7. 좌애자설치", "(폭)90이하 (단위 : ㎝)", "중파방송용 삼각지선식 철탑"] },
  { code: "통신 7-6-2", name: "7. 좌애자설치", spec: "(폭)120이하 (단위 : ㎝)", unit: "3.00", labors: {"무선안테나공": 2.0}, category: "device", page: 192, keywords: ["(폭)120이하 (단위 : ㎝)", "7. 좌애자설치", "중파방송용 삼각지선식 철탑"] },
  { code: "통신 7-6-2", name: "8. 피뢰침 설치 (피뢰기)", spec: "(폭)60이하 (단위 : ㎝)", unit: "2.60", labors: {"보통인부": 2.6}, category: "device", page: 192, keywords: ["중파방송용 삼각지선식 철탑", "(폭)60이하 (단위 : ㎝)", "8. 피뢰침 설치 (피뢰기)"] },
  { code: "통신 7-6-2", name: "8. 피뢰침 설치 (피뢰기)", spec: "(폭)90이하 (단위 : ㎝)", unit: "2.60", labors: {"보통인부": 2.6}, category: "device", page: 192, keywords: ["중파방송용 삼각지선식 철탑", "(폭)90이하 (단위 : ㎝)", "8. 피뢰침 설치 (피뢰기)"] },
  { code: "통신 7-6-2", name: "8. 피뢰침 설치 (피뢰기)", spec: "(폭)120이하 (단위 : ㎝)", unit: "2.60", labors: {"보통인부": 2.6}, category: "device", page: 192, keywords: ["중파방송용 삼각지선식 철탑", "(폭)120이하 (단위 : ㎝)", "8. 피뢰침 설치 (피뢰기)"] },
  { code: "통신 7-6-2", name: "9. 링트랜스설치", spec: "(폭)60이하 (단위 : ㎝)", unit: "1.40", labors: {"통신외선공": 1.4}, category: "device", page: 192, keywords: ["(폭)60이하 (단위 : ㎝)", "9. 링트랜스설치", "중파방송용 삼각지선식 철탑"] },
  { code: "통신 7-6-2", name: "9. 링트랜스설치", spec: "(폭)90이하 (단위 : ㎝)", unit: "1.40", labors: {"통신외선공": 1.4}, category: "device", page: 192, keywords: ["(폭)90이하 (단위 : ㎝)", "9. 링트랜스설치", "중파방송용 삼각지선식 철탑"] },
  { code: "통신 7-6-2", name: "9. 링트랜스설치", spec: "(폭)120이하 (단위 : ㎝)", unit: "1.40", labors: {"통신외선공": 1.4}, category: "device", page: 192, keywords: ["(폭)120이하 (단위 : ㎝)", "9. 링트랜스설치", "중파방송용 삼각지선식 철탑"] },
  { code: "통신 7-6-2", name: "10. 철탑도장", spec: "(폭)60이하 (단위 : ㎝)", unit: "1.30", labors: {"무선안테나공": 0.43}, category: "device", page: 192, keywords: ["10. 철탑도장", "(폭)60이하 (단위 : ㎝)", "중파방송용 삼각지선식 철탑"] },
  { code: "통신 7-6-2", name: "10. 철탑도장", spec: "(폭)90이하 (단위 : ㎝)", unit: "1.30", labors: {"무선안테나공": 0.64}, category: "device", page: 192, keywords: ["10. 철탑도장", "(폭)90이하 (단위 : ㎝)", "중파방송용 삼각지선식 철탑"] },
  { code: "통신 7-6-2", name: "10. 철탑도장", spec: "(폭)120이하 (단위 : ㎝)", unit: "1.30", labors: {"무선안테나공": 0.85}, category: "device", page: 192, keywords: ["10. 철탑도장", "(폭)120이하 (단위 : ㎝)", "중파방송용 삼각지선식 철탑"] },
  { code: "통신 7-7-1-1", name: "1.포장해체 및 점검", spec: "", unit: "개(BOX)", labors: {"무선안테나공": 0.4, "보통인부": 0.4}, category: "device", page: 194, keywords: ["1.포장해체 및 점검", "rigid feeder"] },
  { code: "통신 7-7-1-1", name: "2.인양설치", spec: "", unit: "10m", labors: {"통신관련기사": 6.5, "무선안테나공": 10.17, "통신외선공": 12.5, "보통인부": 12.0}, category: "device", page: 194, keywords: ["2.인양설치", "rigid feeder"] },
  { code: "통신 7-7-1-1", name: "3.공기압력시험 및 점검", spec: "", unit: "식", labors: {"무선안테나공": 5.4, "통신외선공": 8.0}, category: "device", page: 194, keywords: ["3.공기압력시험 및 점검", "rigid feeder"] },
  { code: "통신 7-7-1-1", name: "4.최종특성측정", spec: "", unit: "식", labors: {"통신관련기사": 4.2, "보통인부": 4.2}, category: "device", page: 194, keywords: ["4.최종특성측정", "rigid feeder"] },
  { code: "통신 7-7-1-2", name: "1.포장해체 및 점검", spec: "-", unit: "드럼", labors: {"무선안테나공": 0.2, "보통인부": 0.25}, category: "device", page: 195, keywords: ["1.포장해체 및 점검", "feeder cable"] },
  { code: "통신 7-7-1-2", name: "2.인양설치", spec: "-", unit: "10m", labors: {"통신관련기사": 0.77, "무선안테나공": 1.15, "통신외선공": 1.54, "보통인부": 1.15}, category: "device", page: 195, keywords: ["2.인양설치", "feeder cable"] },
  { code: "통신 7-7-1-2", name: "3.공기압력시험 및 점검", spec: "AirType적용", unit: "식", labors: {"무선안테나공": 1.2, "통신외선공": 3.5}, category: "device", page: 195, keywords: ["airtype적용", "3.공기압력시험 및 점검", "feeder cable"] },
  { code: "통신 7-7-1-2", name: "4.최종특성측정", spec: "-", unit: "식", labors: {"통신관련기사": 3.0}, category: "device", page: 195, keywords: ["4.최종특성측정", "feeder cable"] },
  { code: "통신 7-7-2", name: "6선식 1. 포장해체 및 재단", spec: "", unit: "개", labors: {"통신외선공": 0.9, "보통인부": 1.0}, category: "device", page: 196, keywords: ["6선식 1. 포장해체 및 재단", "중파 급전선"] },
  { code: "통신 7-7-2", name: "2. 인양 설치", spec: "", unit: "개", labors: {"통신관련기사": 0.6, "통신외선공": 1.5, "보통인부": 1.9}, category: "device", page: 196, keywords: ["중파 급전선", "2. 인양 설치"] },
  { code: "통신 7-7-2", name: "3. 임피던스 측정", spec: "", unit: "개", labors: {"통신관련기사": 4.0, "통신외선공": 3.0}, category: "device", page: 196, keywords: ["3. 임피던스 측정", "중파 급전선"] },
  { code: "통신 7-7-2", name: "12선식 1. 포장해체 및 재단", spec: "", unit: "개", labors: {"통신외선공": 1.5, "보통인부": 1.6}, category: "device", page: 196, keywords: ["12선식 1. 포장해체 및 재단", "중파 급전선"] },
  { code: "통신 7-7-2", name: "24선식 1. 포장해체 및 재단", spec: "", unit: "개", labors: {"통신외선공": 2.2, "보통인부": 2.4}, category: "device", page: 196, keywords: ["24선식 1. 포장해체 및 재단", "중파 급전선"] },
  { code: "통신 7-7-3", name: "2선식 1. 포장해체 및 재단", spec: "", unit: "개", labors: {"통신외선공": 0.4, "보통인부": 0.5}, category: "device", page: 197, keywords: ["2선식 1. 포장해체 및 재단", "단파 급전선"] },
  { code: "통신 7-7-3", name: "2. 인양 설치", spec: "", unit: "개", labors: {"통신관련기사": 0.3, "통신외선공": 0.9, "보통인부": 0.9}, category: "device", page: 197, keywords: ["단파 급전선", "2. 인양 설치"] },
  { code: "통신 7-7-3", name: "3. 임피던스 측정", spec: "", unit: "개", labors: {"통신관련기사": 4.5, "통신외선공": 4.0}, category: "device", page: 197, keywords: ["3. 임피던스 측정", "단파 급전선"] },
  { code: "통신 7-7-3", name: "4선식 1. 포장해체 및 재단", spec: "", unit: "개", labors: {"통신외선공": 1.3, "보통인부": 1.5}, category: "device", page: 197, keywords: ["단파 급전선", "4선식 1. 포장해체 및 재단"] },
  { code: "통신 7-7-3", name: "Caga 1. 포장해체 및 재단", spec: "", unit: "개", labors: {"통신외선공": 1.3, "보통인부": 1.5}, category: "device", page: 197, keywords: ["단파 급전선", "caga 1. 포장해체 및 재단"] },
  { code: "통신 7-7-3", name: "Type 2. 인양 설치", spec: "", unit: "개", labors: {"통신관련기사": 1.2, "통신외선공": 3.7, "보통인부": 3.5}, category: "device", page: 197, keywords: ["type 2. 인양 설치", "단파 급전선"] },
  { code: "통신 7-7-4", name: "1. 포장해체 및 현품대조", spec: "", unit: "상 자", labors: {"통신관련기사": 0.33, "보통인부": 0.66}, category: "device", page: 197, keywords: ["1. 포장해체 및 현품대조", "도파관"] },
  { code: "통신 7-7-4", name: "2. 조 립 인 양 설 치", spec: "", unit: "10m", labors: {"통신관련기사": 1.5, "무선안테나공": 3.0, "통신설비공": 3.5}, category: "device", page: 197, keywords: ["2. 조 립 인 양 설 치", "도파관"] },
  { code: "통신 7-7-4", name: "4. 분 리 기 설 치", spec: "", unit: "개", labors: {"무선안테나공": 0.06, "통신설비공": 0.06}, category: "device", page: 197, keywords: ["4. 분 리 기 설 치", "도파관"] },
  { code: "통신 7-7-4", name: "5. 물 받 이 설 치", spec: "", unit: "개", labors: {"무선안테나공": 0.06, "통신설비공": 0.06}, category: "device", page: 197, keywords: ["5. 물 받 이 설 치", "도파관"] },
  { code: "통신 7-7-4", name: "6. 교차편파보상기및조립", spec: "", unit: "개", labors: {"무선안테나공": 0.06, "통신설비공": 0.06}, category: "device", page: 197, keywords: ["도파관", "6. 교차편파보상기및조립"] },
  { code: "통신 7-7-4", name: "7. 공기압력시험 및 점검", spec: "", unit: "개", labors: {"통신관련기사": 0.5, "통신설비공": 1.0}, category: "device", page: 197, keywords: ["7. 공기압력시험 및 점검", "도파관"] },
  { code: "통신 7-7-5", name: "포장해체 및 점검", spec: "", unit: "개(Box)", labors: {"무선안테나공": 0.3, "보통인부": 0.3}, category: "device", page: 198, keywords: ["포장해체 및 점검", "웨이브 가이드(wave guide)"] },
  { code: "통신 7-7-5", name: "랙(Rack)설 치", spec: "", unit: "조", labors: {"무선안테나공": 1.25, "통신설비공": 1.0, "보통인부": 2.0}, category: "device", page: 198, keywords: ["랙(rack)설 치", "웨이브 가이드(wave guide)"] },
  { code: "통신 7-7-5", name: "W/G조립설치", spec: "", unit: "10m", labors: {"통신관련산업기사": 1.25, "무선안테나공": 2.0, "통신설비공": 2.5}, category: "device", page: 198, keywords: ["w/g조립설치", "웨이브 가이드(wave guide)"] },
  { code: "통신 7-7-5", name: "W/G시 험", spec: "", unit: "조", labors: {"통신관련산업기사": 0.5, "통신설비공": 1.0}, category: "device", page: 198, keywords: ["w/g시 험", "웨이브 가이드(wave guide)"] },
  { code: "통신 7-8-1", name: "B a y 건 립", spec: "", unit: "개", labors: {"통신설비공": 0.5}, category: "device", page: 199, keywords: ["위성통신용 협대역 송․수신기", "b a y 건 립"] },
  { code: "통신 7-8-1", name: "S e t 조 립", spec: "", unit: "개", labors: {"통신설비공": 4.0}, category: "device", page: 199, keywords: ["s e t 조 립", "위성통신용 협대역 송․수신기"] },
  { code: "통신 7-8-1", name: "내부결선 및 기타결선", spec: "", unit: "개", labors: {"통신케이블공": 1.0, "통신내선공": 0.75, "보통인부": 0.75}, category: "device", page: 199, keywords: ["내부결선 및 기타결선", "위성통신용 협대역 송․수신기"] },
  { code: "통신 7-8-1", name: "국부조작시험및각판넬점검", spec: "", unit: "개", labors: {"통신설비공": 12.75}, category: "device", page: 199, keywords: ["국부조작시험및각판넬점검", "위성통신용 협대역 송․수신기"] },
  { code: "통신 7-8-1", name: "대 국 종 합 시 험", spec: "", unit: "개", labors: {"통신설비공": 8.25}, category: "device", page: 199, keywords: ["대 국 종 합 시 험", "위성통신용 협대역 송․수신기"] },
  { code: "통신 7-8-2", name: "B a y 건 립", spec: "2.00", unit: "개", labors: {"보통인부": 1.0}, category: "device", page: 199, keywords: ["2.00", "위성통신 잡음무선기(uncooled lna)", "b a y 건 립"] },
  { code: "통신 7-8-2", name: "S e t 조 립", spec: "-", unit: "개", labors: {"통신설비공": 1.0, "보통인부": 0.5}, category: "device", page: 199, keywords: ["위성통신 잡음무선기(uncooled lna)", "s e t 조 립"] },
  { code: "통신 7-8-2", name: "내부결선 및 기타결선", spec: "-", unit: "개", labors: {"통신케이블공": 1.0, "통신내선공": 0.5}, category: "device", page: 199, keywords: ["위성통신 잡음무선기(uncooled lna)", "내부결선 및 기타결선"] },
  { code: "통신 7-8-2", name: "국부조작시험및각판넬점검", spec: "-", unit: "개", labors: {"통신설비공": 9.5}, category: "device", page: 199, keywords: ["국부조작시험및각판넬점검", "위성통신 잡음무선기(uncooled lna)"] },
  { code: "통신 7-8-3", name: "B a y 건 립", spec: "", unit: "개", labors: {"통신설비공": 0.75, "보통인부": 1.0}, category: "device", page: 199, keywords: ["위성통신용 transmit level control equip", "b a y 건 립"] },
  { code: "통신 7-8-3", name: "S e t 조 립", spec: "", unit: "개", labors: {"통신설비공": 0.5}, category: "device", page: 199, keywords: ["위성통신용 transmit level control equip", "s e t 조 립"] },
  { code: "통신 7-8-3", name: "내부결선 및 기타결선", spec: "", unit: "개", labors: {"통신케이블공": 1.5, "통신설비공": 0.5, "통신내선공": 1.0}, category: "device", page: 199, keywords: ["위성통신용 transmit level control equip", "내부결선 및 기타결선"] },
  { code: "통신 7-8-3", name: "국부조작시험및각판넬점검", spec: "", unit: "개", labors: {"통신설비공": 6.0}, category: "device", page: 199, keywords: ["국부조작시험및각판넬점검", "위성통신용 transmit level control equip"] },
  { code: "통신 7-8-4", name: "설 치", spec: "", unit: "개", labors: {"통신설비공": 1.0, "보통인부": 2.0}, category: "device", page: 199, keywords: ["설 치", "gce용 3kw rectifier"] },
  { code: "통신 7-8-4", name: "배 선", spec: "", unit: "개", labors: {"통신내선공": 1.0, "보통인부": 1.2}, category: "device", page: 199, keywords: ["배 선", "gce용 3kw rectifier"] },
  { code: "통신 7-8-4", name: "시 운 전", spec: "", unit: "개", labors: {"통신설비공": 4.0}, category: "device", page: 199, keywords: ["시 운 전", "gce용 3kw rectifier"] },
  { code: "통신 7-9-1-1", name: "기초시험", spec: "각종측정", unit: "랙", labors: {"H/W시험사": 0.67}, category: "device", page: 200, keywords: ["acr(access control router) 시험", "각종측정", "기초시험"] },
  { code: "통신 7-9-1-1", name: "시스템 시 험", spec: "시스템초기화 시험", unit: "식", labors: {"S/W시험사": 2.72}, category: "device", page: 200, keywords: ["acr(access control router) 시험", "시스템 시 험", "시스템초기화 시험"] },
  { code: "통신 7-9-1-1", name: "종합시험", spec: "성능시험", unit: "식", labors: {"H/W시험사": 9.9, "S/W시험사": 9.9}, category: "device", page: 200, keywords: ["acr(access control router) 시험", "성능시험", "종합시험"] },
  { code: "통신 7-9-1-1", name: "EMS 시험", spec: "", unit: "식", labors: {"H/W시험사": 28.44, "S/W시험사": 32.72}, category: "device", page: 200, keywords: ["acr(access control router) 시험", "ems 시험"] },
  { code: "통신 7-9-1-2", name: "장 비 설 치", spec: "", unit: "대", labors: {"통신관련산업기사": 0.59, "통신설비공": 0.77}, category: "device", page: 201, keywords: ["ras(radio access station)", "장 비 설 치"] },
  { code: "통신 7-9-1-2", name: "케이블 포설", spec: "", unit: "식", labors: {"통신케이블공": 1.97, "통신설비공": 1.64}, category: "device", page: 201, keywords: ["ras(radio access station)", "케이블 포설"] },
  { code: "통신 7-9-1-2", name: "안테나 설 치", spec: "지지물", unit: "기", labors: {"무선안테나공": 1.09, "통신설비공": 1.15}, category: "device", page: 201, keywords: ["지지물", "ras(radio access station)", "안테나 설 치"] },
  { code: "통신 7-9-1-2", name: "하중분산패드 설치", spec: "", unit: "세트", labors: {"무선안테나공": 1.28, "통신설비공": 1.28}, category: "device", page: 201, keywords: ["하중분산패드 설치", "ras(radio access station)"] },
  { code: "통신 7-9-1-2", name: "기초시험", spec: "각종측정 및 상태점검", unit: "랙", labors: {"H/W시험사": 0.33, "S/W시험사": 1.46}, category: "device", page: 202, keywords: ["ras(radio access station)", "각종측정 및 상태점검", "기초시험"] },
  { code: "통신 7-9-1-2", name: "시스템 시 험", spec: "시스템초기화 시험", unit: "RAS", labors: {"H/W시험사": 1.38, "S/W시험사": 1.78}, category: "device", page: 202, keywords: ["시스템 시 험", "ras(radio access station)", "시스템초기화 시험"] },
  { code: "통신 7-9-1-2", name: "연 동 시 험", spec: "", unit: "RAS", labors: {"H/W시험사": 3.96, "S/W시험사": 7.62}, category: "device", page: 202, keywords: ["ras(radio access station)", "연 동 시 험"] },
  { code: "통신 7-9-2", name: "중계기", spec: "(W+D)×2=500㎜이하,", unit: "대", labors: {"통신설비공": 0.7, "특별인부": 0.7}, category: "device", page: 203, keywords: ["옥외 중계기", "중계기", "(w+d)×2=500㎜이하,"] },
  { code: "통신 7-9-2", name: "안테나 설 치", spec: "-", unit: "기", labors: {"무선안테나공": 0.36, "통신설비공": 0.36}, category: "device", page: 203, keywords: ["옥외 중계기", "안테나 설 치"] },
  { code: "통신 7-9-2", name: "분전반", spec: "∅1 220V, 30A이하", unit: "대", labors: {"통신설비공": 0.18, "특별인부": 0.1}, category: "device", page: 203, keywords: ["옥외 중계기", "∅1 220v, 30a이하", "분전반"] },
  { code: "통신 7-9-2", name: "설 치", spec: "∅1 220V, 30A이하", unit: "대", labors: {"특별인부": 8.0}, category: "device", page: 203, keywords: ["옥외 중계기", "설 치", "∅1 220v, 30a이하"] },
  { code: "통신 7-9-2", name: "시 험", spec: "특성시험", unit: "대", labors: {"통신관련산업기사": 2.16, "H/W시험사": 1.85}, category: "device", page: 203, keywords: ["옥외 중계기", "시 험", "특성시험"] },
  { code: "통신 7-9-2", name: "급전선 설 치", spec: "∅ ½“", unit: "10m", labors: {"무선안테나공": 0.92, "통신케이블공": 1.08}, category: "device", page: 203, keywords: ["옥외 중계기", "급전선 설 치", "∅ ½“"] },
  { code: "통신 7-9-2", name: "정류기 설 치", spec: "10A 이하", unit: "대", labors: {"통신관련산업기사": 0.12, "통신설비공": 0.12}, category: "device", page: 203, keywords: ["옥외 중계기", "정류기 설 치", "10a 이하"] },
  { code: "통신 7-9-3", name: "중", spec: "(W+D)×2=500㎜이하,", unit: "대", labors: {"통신설비공": 0.62, "특별인부": 0.3}, category: "device", page: 205, keywords: ["옥내 중계기", "(w+d)×2=500㎜이하,"] },
  { code: "통신 7-9-3", name: "계", spec: "무게5㎏이하", unit: "대", labors: {"특별인부": 1.0}, category: "device", page: 205, keywords: ["무게5㎏이하", "옥내 중계기"] },
  { code: "통신 7-9-3", name: "OMNI 안테나", spec: "-", unit: "기", labors: {"통신설비공": 0.17, "무선안테나공": 0.17}, category: "device", page: 205, keywords: ["omni 안테나", "옥내 중계기"] },
  { code: "통신 7-9-3", name: "인터넷 품질시험", spec: "-", unit: "대", labors: {"통신관련산업기사": 0.06, "H/W시험사": 0.06}, category: "device", page: 205, keywords: ["인터넷 품질시험", "옥내 중계기"] },
  { code: "통신 7-9-3", name: "부대설비", spec: "분배기", unit: "개", labors: {"통신설비공": 0.17, "통신내선공": 0.17}, category: "device", page: 205, keywords: ["부대설비", "옥내 중계기", "분배기"] },
  { code: "통신 7-9-4", name: "안테나부(RU)", spec: "", unit: "대", labors: {"통신관련산업기사": 1.15, "H/W시험사": 1.52, "광케이블설치사": 0.37, "통신설비공": 0.51}, category: "device", page: 206, keywords: ["안테나부(ru)", "lte중계기"] },
  { code: "통신 7-9-4", name: "데이터부(DU)", spec: "", unit: "대", labors: {"통신관련산업기사": 1.5, "H/W시험사": 1.5, "광케이블설치사": 0.17, "통신설비공": 0.17}, category: "device", page: 206, keywords: ["데이터부(du)", "lte중계기"] },
  { code: "통신 7-9-4", name: "OPC", spec: "", unit: "대", labors: {"광케이블설치사": 0.33, "통신설비공": 0.24}, category: "device", page: 206, keywords: ["opc", "lte중계기"] },
  { code: "통신 7-9-4", name: "안테나", spec: "", unit: "대", labors: {"통신설비공": 0.36, "무선안테나공": 0.51}, category: "device", page: 206, keywords: ["lte중계기", "안테나"] },
  { code: "통신 7-9-5", name: "실외형", spec: "AP설치", unit: "대", labors: {"통신관련산업기사": 0.41, "통신설비공": 0.41, "보통인부": 0.41}, category: "device", page: 206, keywords: ["무선 ap(access point)", "실외형", "ap설치"] },
  { code: "통신 7-9-5", name: "실내형", spec: "AP설치", unit: "대", labors: {"통신관련산업기사": 0.09, "통신설비공": 0.09}, category: "device", page: 206, keywords: ["무선 ap(access point)", "실내형", "ap설치"] },
  { code: "통신 7-9-6", name: "장비 설치", spec: "", unit: "대", labors: {"S/W시험사": 0.8, "H/W시험사": 0.8}, category: "device", page: 207, keywords: ["장비 설치", "무선 lan 및 무선 ap 컨트롤러"] },
  { code: "통신 7-9-7", name: "RU (Radio Unit)", spec: "안테나 일체형", unit: "대", labors: {"무선안테나공": 0.72, "통신설비공": 0.48}, category: "device", page: 207, keywords: ["ru (radio unit)", "안테나 일체형", "5g 중계기"] },
  { code: "통신 7-10-1", name: "단말장치 설치", spec: "", unit: "대", labors: {"통신관련산업기사": 0.41, "통신설비공": 0.41, "보통인부": 0.41}, category: "device", page: 208, keywords: ["광대역 무선통신장치", "단말장치 설치"] },
  { code: "통신 7-10-1", name: "대국시험(방향조정)", spec: "", unit: "대", labors: {"통신관련기사": 2.0}, category: "device", page: 208, keywords: ["광대역 무선통신장치", "대국시험(방향조정)"] },
  { code: "통신 7-10-1", name: "종합시험", spec: "", unit: "대", labors: {"통신관련산업기사": 0.33, "S/W시험사": 0.33}, category: "device", page: 208, keywords: ["광대역 무선통신장치", "종합시험"] },
  { code: "통신 7-10-3", name: "1. 조 립 설 치", spec: "5.00", unit: "개", labors: {"통신관련기사": 5.0, "무선안테나공": 8.0, "보통인부": 10.0}, category: "device", page: 208, keywords: ["1. 조 립 설 치", "패시브 리플렉터(반사판, passive reflector)(30㎡기준)", "5.00"] },
  { code: "통신 7-10-3", name: "2. 방 향 조 정", spec: "-", unit: "개", labors: {"통신관련기사": 5.0, "무선안테나공": 5.0}, category: "device", page: 208, keywords: ["2. 방 향 조 정", "패시브 리플렉터(반사판, passive reflector)(30㎡기준)"] },
  { code: "통신 7-10-4", name: "조 립 및 설 치", spec: "", unit: "개", labors: {"통신설비공": 2.0}, category: "device", page: 209, keywords: ["디하드레이터(dehydrator)", "조 립 및 설 치"] },
  { code: "통신 7-10-4", name: "조정 및 시운전", spec: "", unit: "개", labors: {"통신관련산업기사": 2.0, "통신설비공": 2.0}, category: "device", page: 209, keywords: ["디하드레이터(dehydrator)", "조정 및 시운전"] },
  { code: "통신 7-10-5", name: "S e t 설 치", spec: "", unit: "개", labors: {"통신설비공": 1.0, "보통인부": 1.0}, category: "device", page: 209, keywords: ["s e t 설 치", "브랜칭 필터(branching filter)"] },
  { code: "통신 7-10-5", name: "특 성 시 험", spec: "", unit: "개", labors: {"통신관련산업기사": 1.93}, category: "device", page: 209, keywords: ["브랜칭 필터(branching filter)", "특 성 시 험"] },
  { code: "통신 7-10-6", name: "B a y 건 립", spec: "", unit: "개", labors: {"통신설비공": 0.5, "보통인부": 1.0}, category: "device", page: 209, keywords: ["콤바이너(combiner)", "b a y 건 립"] },
  { code: "통신 7-10-6", name: "S e t 조 립", spec: "", unit: "개", labors: {"통신설비공": 3.75}, category: "device", page: 209, keywords: ["콤바이너(combiner)", "s e t 조 립"] },
  { code: "통신 7-10-6", name: "내부결선및기타결선", spec: "", unit: "개", labors: {"통신관련기사": 1.0, "통신설비공": 2.0, "보통인부": 0.75}, category: "device", page: 209, keywords: ["콤바이너(combiner)", "내부결선및기타결선"] },
  { code: "통신 7-10-6", name: "국 부 시 험 점 검", spec: "", unit: "개", labors: {"통신관련산업기사": 19.56}, category: "device", page: 209, keywords: ["국 부 시 험 점 검", "콤바이너(combiner)"] },
  { code: "통신 7-10-6", name: "대 국 종 합 시 험", spec: "", unit: "개", labors: {"통신관련산업기사": 24.83}, category: "device", page: 209, keywords: ["콤바이너(combiner)", "대 국 종 합 시 험"] },
  { code: "통신 7-10-8", name: "Bridge Diplexer [조립 및 설치]", spec: "⅝이하1", unit: "개", labors: {"통신관련산업기사": 1.0, "통신설비공": 2.0, "보통인부": 0.7}, category: "device", page: 210, keywords: ["bridge diplexer [조립 및 설치]", "⅝이하1", "diplexer 및 필터(filter)"] },
  { code: "통신 7-10-8", name: "Bridge Diplexer [시험 및 측정]", spec: "⅝이하1", unit: "개", labors: {"통신관련기사": 1.0, "통신관련산업기사": 1.0}, category: "device", page: 210, keywords: ["bridge diplexer [시험 및 측정]", "⅝이하1", "diplexer 및 필터(filter)"] },
  { code: "통신 7-10-8", name: "CIN Diplexer [조립 및 설치]", spec: "⅝ 1", unit: "개", labors: {"통신관련산업기사": 2.0, "통신설비공": 4.0, "보통인부": 1.0}, category: "device", page: 210, keywords: ["cin diplexer [조립 및 설치]", "⅝ 1", "diplexer 및 필터(filter)"] },
  { code: "통신 7-10-8", name: "CIN Diplexer [시험 및 측정]", spec: "⅝ 1", unit: "개", labors: {"통신관련기사": 1.0, "통신관련산업기사": 1.5}, category: "device", page: 210, keywords: ["⅝ 1", "cin diplexer [시험 및 측정]", "diplexer 및 필터(filter)"] },
  { code: "통신 7-10-8", name: "Filter Plexer [조립 및 설치]", spec: "⅝ 1", unit: "개", labors: {"통신관련산업기사": 1.0, "통신설비공": 2.0, "보통인부": 0.7}, category: "device", page: 210, keywords: ["⅝ 1", "filter plexer [조립 및 설치]", "diplexer 및 필터(filter)"] },
  { code: "통신 7-10-8", name: "Filter Plexer [시험 및 측정]", spec: "⅝ 1", unit: "개", labors: {"통신관련기사": 1.0, "통신관련산업기사": 1.0}, category: "device", page: 210, keywords: ["filter plexer [시험 및 측정]", "⅝ 1", "diplexer 및 필터(filter)"] },
  { code: "통신 7-10-8", name: "3dB Coupler [조립 및 설치]", spec: "⅝ 1", unit: "개", labors: {"통신관련산업기사": 1.0, "통신설비공": 2.0, "보통인부": 0.7}, category: "device", page: 210, keywords: ["3db coupler [조립 및 설치]", "⅝ 1", "diplexer 및 필터(filter)"] },
  { code: "통신 7-10-8", name: "3dB Coupler [시험 및 측정]", spec: "⅝ 1", unit: "개", labors: {"통신관련기사": 1.0, "통신관련산업기사": 1.0}, category: "device", page: 210, keywords: ["⅝ 1", "3db coupler [시험 및 측정]", "diplexer 및 필터(filter)"] },
  { code: "통신 7-10-8", name: "Harmonics Filter [조립 및 설치]", spec: "⅞ 1", unit: "개", labors: {"통신관련산업기사": 0.5, "통신설비공": 0.5, "보통인부": 0.3}, category: "device", page: 210, keywords: ["⅞ 1", "diplexer 및 필터(filter)", "harmonics filter [조립 및 설치]"] },
  { code: "통신 7-10-8", name: "Harmonics Filter [시험 및 측정]", spec: "⅞ 1", unit: "개", labors: {"통신관련기사": 0.5, "통신관련산업기사": 0.5}, category: "device", page: 210, keywords: ["harmonics filter [시험 및 측정]", "⅞ 1", "diplexer 및 필터(filter)"] },
  { code: "통신 7-10-8", name: "Coaxial Switch [조립 및 설치]", spec: "⅞", unit: "개", labors: {"통신관련산업기사": 0.5, "통신설비공": 3.0, "보통인부": 0.5}, category: "device", page: 210, keywords: ["coaxial switch [조립 및 설치]", "diplexer 및 필터(filter)"] },
  { code: "통신 7-10-8", name: "Coaxial Switch [시험 및 측정]", spec: "⅞", unit: "개", labors: {"통신관련기사": 0.5, "통신관련산업기사": 1.0}, category: "device", page: 210, keywords: ["diplexer 및 필터(filter)", "coaxial switch [시험 및 측정]"] },
  { code: "통신 7-10-8", name: "VSB Filter [조립 및 설치]", spec: "⅝ 1", unit: "개", labors: {"통신관련산업기사": 1.0, "통신설비공": 2.0, "보통인부": 0.7}, category: "device", page: 210, keywords: ["⅝ 1", "vsb filter [조립 및 설치]", "diplexer 및 필터(filter)"] },
  { code: "통신 7-10-8", name: "VSB Filter [시험 및 측정]", spec: "⅝ 1", unit: "개", labors: {"통신관련기사": 1.0, "통신관련산업기사": 1.0}, category: "device", page: 210, keywords: ["vsb filter [시험 및 측정]", "⅝ 1", "diplexer 및 필터(filter)"] },
  { code: "통신 7-10-8", name: "Band Pass Filter [조립 및 설치]", spec: "⅞", unit: "개", labors: {"통신관련산업기사": 0.5, "통신설비공": 0.5, "보통인부": 0.3}, category: "device", page: 210, keywords: ["band pass filter [조립 및 설치]", "diplexer 및 필터(filter)"] },
  { code: "통신 7-10-8", name: "Band Pass Filter [시험 및 측정]", spec: "⅞", unit: "개", labors: {"통신관련기사": 0.5, "통신관련산업기사": 0.5}, category: "device", page: 210, keywords: ["diplexer 및 필터(filter)", "band pass filter [시험 및 측정]"] },
  { code: "통신 7-10-8", name: "Notch Filter [조립 및 설치]", spec: "⅞", unit: "개", labors: {"통신관련산업기사": 0.5, "통신설비공": 0.5, "보통인부": 0.3}, category: "device", page: 210, keywords: ["diplexer 및 필터(filter)", "notch filter [조립 및 설치]"] },
  { code: "통신 7-10-8", name: "Notch Filter [시험 및 측정]", spec: "⅞", unit: "개", labors: {"통신관련기사": 0.3, "통신관련산업기사": 0.3}, category: "device", page: 210, keywords: ["diplexer 및 필터(filter)", "notch filter [시험 및 측정]"] },
  { code: "통신 7-11-1", name: "Audio Mixer [설치]", spec: "20채널 이하", unit: "개", labors: {"통신관련산업기사": 0.4, "통신설비공": 0.4, "보통인부": 0.21}, category: "device", page: 211, keywords: ["audio mixer [설치]", "20채널 이하", "방송국 설비"] },
  { code: "통신 7-11-1", name: "Audio Mixer [시험 및 측정]", spec: "20채널 이하", unit: "개", labors: {"통신관련기사": 0.27, "통신관련산업기사": 0.27}, category: "device", page: 211, keywords: ["audio mixer [시험 및 측정]", "20채널 이하", "방송국 설비"] },
  { code: "통신 7-11-1", name: "Audio Mixer [설치]", spec: "26채널 이하", unit: "개", labors: {"통신관련산업기사": 0.43, "통신설비공": 0.49, "보통인부": 0.27}, category: "device", page: 211, keywords: ["audio mixer [설치]", "방송국 설비", "26채널 이하"] },
  { code: "통신 7-11-1", name: "Audio Mixer [시험 및 측정]", spec: "26채널 이하", unit: "개", labors: {"통신관련기사": 0.36, "통신관련산업기사": 0.28}, category: "device", page: 211, keywords: ["audio mixer [시험 및 측정]", "방송국 설비", "26채널 이하"] },
  { code: "통신 7-11-1", name: "Stabilizing Amp [설치]", spec: "", unit: "개", labors: {"통신관련산업기사": 0.5, "통신설비공": 0.8, "보통인부": 0.5}, category: "device", page: 211, keywords: ["방송국 설비", "stabilizing amp [설치]"] },
  { code: "통신 7-11-1", name: "Stabilizing Amp [점검]", spec: "", unit: "개", labors: {"통신관련산업기사": 0.6}, category: "device", page: 211, keywords: ["stabilizing amp [점검]", "방송국 설비"] },
  { code: "통신 7-11-1", name: "Stabilizing Amp [조정]", spec: "", unit: "개", labors: {"통신관련기사": 3.0, "통신관련산업기사": 1.0}, category: "device", page: 211, keywords: ["stabilizing amp [조정]", "방송국 설비"] },
  { code: "통신 7-11-1", name: "Stabilizing Amp [시험 및 측정]", spec: "", unit: "개", labors: {"통신관련기사": 2.0, "통신관련산업기사": 1.0}, category: "device", page: 211, keywords: ["방송국 설비", "stabilizing amp [시험 및 측정]"] },
  { code: "통신 7-11-1", name: "Limiting Amp [설치]", spec: "", unit: "개", labors: {"통신관련산업기사": 0.2, "통신설비공": 0.5, "보통인부": 0.3}, category: "device", page: 211, keywords: ["방송국 설비", "limiting amp [설치]"] },
  { code: "통신 7-11-1", name: "Limiting Amp [점검]", spec: "", unit: "개", labors: {"통신관련산업기사": 0.4}, category: "device", page: 211, keywords: ["limiting amp [점검]", "방송국 설비"] },
  { code: "통신 7-11-1", name: "Limiting Amp [조정]", spec: "", unit: "개", labors: {"통신관련기사": 0.3, "통신관련산업기사": 0.5, "통신설비공": 0.1}, category: "device", page: 211, keywords: ["방송국 설비", "limiting amp [조정]"] },
  { code: "통신 7-11-1", name: "Limiting Amp [시험 및 측정]", spec: "", unit: "개", labors: {"통신관련기사": 0.5, "통신관련산업기사": 1.0}, category: "device", page: 211, keywords: ["방송국 설비", "limiting amp [시험 및 측정]"] },
  { code: "통신 7-11-1", name: "Power Amp [설치]", spec: "300W이상", unit: "개", labors: {"통신관련산업기사": 0.46, "통신설비공": 0.63, "보통인부": 0.63}, category: "device", page: 211, keywords: ["power amp [설치]", "300w이상", "방송국 설비"] },
  { code: "통신 7-11-1", name: "Power Amp [조정]", spec: "300W이상", unit: "개", labors: {"통신관련기사": 0.4, "통신관련산업기사": 0.33}, category: "device", page: 211, keywords: ["300w이상", "power amp [조정]", "방송국 설비"] },
  { code: "통신 7-11-1", name: "Power Amp [시험 및 측정]", spec: "300W이상", unit: "개", labors: {"통신관련기사": 0.65, "통신관련산업기사": 0.52}, category: "device", page: 211, keywords: ["300w이상", "power amp [시험 및 측정]", "방송국 설비"] },
  { code: "통신 7-11-1", name: "Power Amp [설치]", spec: "300W미만", unit: "개", labors: {"통신관련산업기사": 0.24, "통신설비공": 0.11, "보통인부": 0.48}, category: "device", page: 211, keywords: ["power amp [설치]", "300w미만", "방송국 설비"] },
  { code: "통신 7-11-1", name: "Power Amp [조정]", spec: "300W미만", unit: "개", labors: {"통신관련기사": 0.32, "통신관련산업기사": 0.1}, category: "device", page: 211, keywords: ["300w미만", "power amp [조정]", "방송국 설비"] },
  { code: "통신 7-11-1", name: "Power Amp [시험 및 측정]", spec: "300W미만", unit: "개", labors: {"통신관련기사": 0.52, "통신관련산업기사": 0.42}, category: "device", page: 211, keywords: ["300w미만", "power amp [시험 및 측정]", "방송국 설비"] },
  { code: "통신 7-11-1", name: "Audio Distribution Amp [설치]", spec: "", unit: "개", labors: {"통신관련산업기사": 0.2, "통신설비공": 0.4, "보통인부": 0.2}, category: "device", page: 211, keywords: ["audio distribution amp [설치]", "방송국 설비"] },
  { code: "통신 7-11-1", name: "Audio Distribution Amp [점검]", spec: "", unit: "개", labors: {"통신관련산업기사": 0.4}, category: "device", page: 211, keywords: ["방송국 설비", "audio distribution amp [점검]"] },
  { code: "통신 7-11-1", name: "Audio Distribution Amp [조정]", spec: "", unit: "개", labors: {"통신관련기사": 0.3, "통신관련산업기사": 0.4}, category: "device", page: 211, keywords: ["audio distribution amp [조정]", "방송국 설비"] },
  { code: "통신 7-11-1", name: "Audio Distribution Amp [시험 및 측정]", spec: "", unit: "개", labors: {"통신관련기사": 0.5, "통신관련산업기사": 1.0}, category: "device", page: 211, keywords: ["audio distribution amp [시험 및 측정]", "방송국 설비"] },
  { code: "통신 7-11-1", name: "Video Distribution Amp [설치]", spec: "", unit: "개", labors: {"통신관련산업기사": 0.2, "통신설비공": 0.4, "보통인부": 0.2}, category: "device", page: 211, keywords: ["video distribution amp [설치]", "방송국 설비"] },
  { code: "통신 7-11-1", name: "Video Distribution Amp [점검]", spec: "", unit: "개", labors: {"통신관련산업기사": 0.4}, category: "device", page: 211, keywords: ["방송국 설비", "video distribution amp [점검]"] },
  { code: "통신 7-11-1", name: "Video Distribution Amp [조정]", spec: "", unit: "개", labors: {"통신관련기사": 0.8, "통신관련산업기사": 0.5}, category: "device", page: 211, keywords: ["방송국 설비", "video distribution amp [조정]"] },
  { code: "통신 7-11-1", name: "Video Distribution Amp [시험 및 측정]", spec: "", unit: "개", labors: {"통신관련기사": 0.8, "통신관련산업기사": 1.2}, category: "device", page: 211, keywords: ["video distribution amp [시험 및 측정]", "방송국 설비"] },
  { code: "통신 7-11-1", name: "Line Distribution Amp [설치]", spec: "", unit: "개", labors: {"통신관련산업기사": 0.2, "통신설비공": 0.4, "보통인부": 0.2}, category: "device", page: 211, keywords: ["line distribution amp [설치]", "방송국 설비"] },
  { code: "통신 7-11-1", name: "Line Distribution Amp [점검]", spec: "", unit: "개", labors: {"통신관련산업기사": 0.4}, category: "device", page: 211, keywords: ["line distribution amp [점검]", "방송국 설비"] },
  { code: "통신 7-11-1", name: "Line Distribution Amp [조정]", spec: "", unit: "개", labors: {"통신관련기사": 1.0, "통신관련산업기사": 0.5}, category: "device", page: 211, keywords: ["line distribution amp [조정]", "방송국 설비"] },
  { code: "통신 7-11-1", name: "Line Distribution Amp [시험 및 측정]", spec: "", unit: "개", labors: {"통신관련기사": 0.8, "통신관련산업기사": 1.2}, category: "device", page: 211, keywords: ["line distribution amp [시험 및 측정]", "방송국 설비"] },
  { code: "통신 7-11-1", name: "Phase Equalizer [설치]", spec: "", unit: "개", labors: {"통신관련산업기사": 0.3, "통신설비공": 0.6, "보통인부": 0.3}, category: "device", page: 211, keywords: ["방송국 설비", "phase equalizer [설치]"] },
  { code: "통신 7-11-1", name: "Phase Equalizer [점검]", spec: "", unit: "개", labors: {"통신관련산업기사": 0.5}, category: "device", page: 211, keywords: ["phase equalizer [점검]", "방송국 설비"] },
  { code: "통신 7-11-1", name: "Phase Equalizer [조정]", spec: "", unit: "개", labors: {"통신관련기사": 2.0, "통신관련산업기사": 1.0}, category: "device", page: 211, keywords: ["방송국 설비", "phase equalizer [조정]"] },
  { code: "통신 7-11-1", name: "Phase Equalizer [시험 및 측정]", spec: "", unit: "개", labors: {"통신관련기사": 2.0, "통신관련산업기사": 1.0}, category: "device", page: 211, keywords: ["phase equalizer [시험 및 측정]", "방송국 설비"] },
  { code: "통신 7-11-1", name: "Audimax [설치]", spec: "", unit: "개", labors: {"통신관련산업기사": 0.2, "통신설비공": 0.5, "보통인부": 0.3}, category: "device", page: 211, keywords: ["방송국 설비", "audimax [설치]"] },
  { code: "통신 7-11-1", name: "Audimax [점검]", spec: "", unit: "개", labors: {"통신관련산업기사": 0.4}, category: "device", page: 211, keywords: ["audimax [점검]", "방송국 설비"] },
  { code: "통신 7-11-1", name: "Audimax [조정]", spec: "", unit: "개", labors: {"통신관련기사": 0.3, "통신관련산업기사": 0.5}, category: "device", page: 211, keywords: ["방송국 설비", "audimax [조정]"] },
  { code: "통신 7-11-1", name: "Audimax [시험 및 측정]", spec: "", unit: "개", labors: {"통신관련기사": 0.5, "통신관련산업기사": 1.0}, category: "device", page: 211, keywords: ["방송국 설비", "audimax [시험 및 측정]"] },
  { code: "통신 7-11-1", name: "Volumax [설치]", spec: "", unit: "개", labors: {"통신관련산업기사": 0.2, "통신설비공": 0.5, "보통인부": 0.3}, category: "device", page: 211, keywords: ["volumax [설치]", "방송국 설비"] },
  { code: "통신 7-11-1", name: "Volumax [점검]", spec: "", unit: "개", labors: {"통신관련산업기사": 0.4}, category: "device", page: 211, keywords: ["방송국 설비", "volumax [점검]"] },
  { code: "통신 7-11-1", name: "Volumax [조정]", spec: "", unit: "개", labors: {"통신관련기사": 0.3, "통신관련산업기사": 0.5}, category: "device", page: 211, keywords: ["방송국 설비", "volumax [조정]"] },
  { code: "통신 7-11-1", name: "Volumax [시험 및 측정]", spec: "", unit: "개", labors: {"통신관련기사": 0.5}, category: "device", page: 211, keywords: ["volumax [시험 및 측정]", "방송국 설비"] },
  { code: "통신 7-11-1", name: "컴프레서 리미터 [설치]", spec: "", unit: "개", labors: {"통신관련산업기사": 0.36, "통신설비공": 0.36}, category: "device", page: 211, keywords: ["컴프레서 리미터 [설치]", "방송국 설비"] },
  { code: "통신 7-11-1", name: "컴프레서 리미터 [점검]", spec: "", unit: "개", labors: {"통신관련산업기사": 0.49}, category: "device", page: 211, keywords: ["컴프레서 리미터 [점검]", "방송국 설비"] },
  { code: "통신 7-11-1", name: "컴프레서 리미터 [조정]", spec: "", unit: "개", labors: {"통신관련기사": 2.11, "통신관련산업기사": 1.06}, category: "device", page: 211, keywords: ["컴프레서 리미터 [조정]", "방송국 설비"] },
  { code: "통신 7-11-1", name: "컴프레서 리미터 [시험 및 측정]", spec: "", unit: "개", labors: {"통신관련기사": 2.11, "통신관련산업기사": 1.06}, category: "device", page: 211, keywords: ["방송국 설비", "컴프레서 리미터 [시험 및 측정]"] },
  { code: "통신 7-11-1", name: "Audio Demodulator [설치]", spec: "", unit: "개", labors: {"통신관련산업기사": 0.4, "통신설비공": 0.5, "보통인부": 0.3}, category: "device", page: 211, keywords: ["방송국 설비", "audio demodulator [설치]"] },
  { code: "통신 7-11-1", name: "Audio Demodulator [점검]", spec: "", unit: "개", labors: {"통신관련산업기사": 0.5}, category: "device", page: 211, keywords: ["방송국 설비", "audio demodulator [점검]"] },
  { code: "통신 7-11-1", name: "Audio Demodulator [조정]", spec: "", unit: "개", labors: {"통신관련기사": 0.4, "통신관련산업기사": 0.6}, category: "device", page: 211, keywords: ["audio demodulator [조정]", "방송국 설비"] },
  { code: "통신 7-11-1", name: "Audio Demodulator [시험 및 측정]", spec: "", unit: "개", labors: {"통신관련기사": 0.8, "통신관련산업기사": 1.0}, category: "device", page: 211, keywords: ["audio demodulator [시험 및 측정]", "방송국 설비"] },
  { code: "통신 7-11-1", name: "Visual Demodulator [설치]", spec: "", unit: "개", labors: {"통신관련산업기사": 0.8, "통신설비공": 0.5, "보통인부": 0.5}, category: "device", page: 211, keywords: ["방송국 설비", "visual demodulator [설치]"] },
  { code: "통신 7-11-1", name: "Visual Demodulator [점검]", spec: "", unit: "개", labors: {"통신관련산업기사": 0.6}, category: "device", page: 211, keywords: ["방송국 설비", "visual demodulator [점검]"] },
  { code: "통신 7-11-1", name: "Visual Demodulator [조정]", spec: "", unit: "개", labors: {"통신관련기사": 1.5, "통신관련산업기사": 1.0}, category: "device", page: 211, keywords: ["visual demodulator [조정]", "방송국 설비"] },
  { code: "통신 7-11-1", name: "Visual Demodulator [시험 및 측정]", spec: "", unit: "개", labors: {"통신관련기사": 1.0, "통신관련산업기사": 1.5}, category: "device", page: 211, keywords: ["방송국 설비", "visual demodulator [시험 및 측정]"] },
  { code: "통신 7-11-1", name: "Stereo Demodulator [설치]", spec: "", unit: "개", labors: {"통신관련산업기사": 0.3, "통신설비공": 0.8, "보통인부": 0.4}, category: "device", page: 211, keywords: ["방송국 설비", "stereo demodulator [설치]"] },
  { code: "통신 7-11-1", name: "Stereo Demodulator [점검]", spec: "", unit: "개", labors: {"통신관련산업기사": 0.4}, category: "device", page: 211, keywords: ["stereo demodulator [점검]", "방송국 설비"] },
  { code: "통신 7-11-1", name: "Stereo Demodulator [조정]", spec: "", unit: "개", labors: {"통신관련기사": 0.4, "통신관련산업기사": 0.6}, category: "device", page: 211, keywords: ["stereo demodulator [조정]", "방송국 설비"] },
  { code: "통신 7-11-1", name: "Stereo Demodulator [시험 및 측정]", spec: "", unit: "개", labors: {"통신관련기사": 0.8, "통신관련산업기사": 1.0}, category: "device", page: 211, keywords: ["방송국 설비", "stereo demodulator [시험 및 측정]"] },
  { code: "통신 7-11-1", name: "SCA Demodulator [설치]", spec: "", unit: "개", labors: {"통신관련산업기사": 0.2, "통신설비공": 0.5, "보통인부": 0.3}, category: "device", page: 211, keywords: ["sca demodulator [설치]", "방송국 설비"] },
  { code: "통신 7-11-1", name: "SCA Demodulator [점검]", spec: "", unit: "개", labors: {"통신관련산업기사": 0.4}, category: "device", page: 211, keywords: ["sca demodulator [점검]", "방송국 설비"] },
  { code: "통신 7-11-1", name: "SCA Demodulator [조정]", spec: "", unit: "개", labors: {"통신관련기사": 0.3, "통신관련산업기사": 0.5}, category: "device", page: 211, keywords: ["sca demodulator [조정]", "방송국 설비"] },
  { code: "통신 7-11-1", name: "SCA Demodulator [시험 및 측정]", spec: "", unit: "개", labors: {"통신관련기사": 0.5, "통신관련산업기사": 0.8}, category: "device", page: 211, keywords: ["sca demodulator [시험 및 측정]", "방송국 설비"] },
  { code: "통신 7-11-1", name: "Utility Monitor [설치]", spec: "", unit: "개", labors: {"통신관련산업기사": 0.3, "통신설비공": 0.5, "보통인부": 0.3}, category: "device", page: 211, keywords: ["utility monitor [설치]", "방송국 설비"] },
  { code: "통신 7-11-1", name: "Utility Monitor [점검]", spec: "", unit: "개", labors: {"통신관련산업기사": 0.5}, category: "device", page: 211, keywords: ["utility monitor [점검]", "방송국 설비"] },
  { code: "통신 7-11-1", name: "Utility Monitor [조정]", spec: "", unit: "개", labors: {"통신관련기사": 0.5, "통신관련산업기사": 0.8}, category: "device", page: 211, keywords: ["utility monitor [조정]", "방송국 설비"] },
  { code: "통신 7-11-1", name: "Utility Monitor [시험 및 측정]", spec: "", unit: "개", labors: {"통신관련기사": 0.4, "통신관련산업기사": 0.8}, category: "device", page: 211, keywords: ["utility monitor [시험 및 측정]", "방송국 설비"] },
  { code: "통신 7-11-1", name: "Modulation Monitor [설치]", spec: "", unit: "개", labors: {"통신관련산업기사": 0.2, "통신설비공": 0.5, "보통인부": 0.3}, category: "device", page: 211, keywords: ["방송국 설비", "modulation monitor [설치]"] },
  { code: "통신 7-11-1", name: "Modulation Monitor [점검]", spec: "", unit: "개", labors: {"통신관련산업기사": 0.4}, category: "device", page: 211, keywords: ["modulation monitor [점검]", "방송국 설비"] },
  { code: "통신 7-11-1", name: "Modulation Monitor [조정]", spec: "", unit: "개", labors: {"통신관련기사": 0.4, "통신관련산업기사": 0.6}, category: "device", page: 211, keywords: ["modulation monitor [조정]", "방송국 설비"] },
  { code: "통신 7-11-1", name: "Modulation Monitor [시험 및 측정]", spec: "", unit: "개", labors: {"통신관련기사": 0.6, "통신관련산업기사": 0.8}, category: "device", page: 211, keywords: ["방송국 설비", "modulation monitor [시험 및 측정]"] },
  { code: "통신 7-11-1", name: "Frequency Monitor [설치]", spec: "", unit: "개", labors: {"통신관련산업기사": 0.2, "통신설비공": 0.5, "보통인부": 0.3}, category: "device", page: 211, keywords: ["frequency monitor [설치]", "방송국 설비"] },
  { code: "통신 7-11-1", name: "Frequency Monitor [점검]", spec: "", unit: "개", labors: {"통신관련산업기사": 0.4}, category: "device", page: 211, keywords: ["frequency monitor [점검]", "방송국 설비"] },
  { code: "통신 7-11-1", name: "Frequency Monitor [조정]", spec: "", unit: "개", labors: {"통신관련기사": 0.4, "통신관련산업기사": 0.6}, category: "device", page: 211, keywords: ["방송국 설비", "frequency monitor [조정]"] },
  { code: "통신 7-11-1", name: "Frequency Monitor [시험 및 측정]", spec: "", unit: "개", labors: {"통신관련기사": 0.6, "통신관련산업기사": 0.8}, category: "device", page: 211, keywords: ["방송국 설비", "frequency monitor [시험 및 측정]"] },
  { code: "통신 7-11-1", name: "Precision Monitor [설치]", spec: "", unit: "개", labors: {"통신관련산업기사": 0.42, "통신설비공": 0.71, "보통인부": 0.71}, category: "device", page: 211, keywords: ["precision monitor [설치]", "방송국 설비"] },
  { code: "통신 7-11-1", name: "Precision Monitor [점검]", spec: "", unit: "개", labors: {"통신관련산업기사": 0.35}, category: "device", page: 211, keywords: ["precision monitor [점검]", "방송국 설비"] },
  { code: "통신 7-11-1", name: "Precision Monitor [조정]", spec: "", unit: "개", labors: {"통신관련기사": 1.05, "통신관련산업기사": 0.98}, category: "device", page: 211, keywords: ["방송국 설비", "precision monitor [조정]"] },
  { code: "통신 7-11-1", name: "Precision Monitor [시험 및 측정]", spec: "", unit: "개", labors: {"통신관련기사": 1.26, "통신관련산업기사": 1.19}, category: "device", page: 211, keywords: ["precision monitor [시험 및 측정]", "방송국 설비"] },
  { code: "통신 7-11-1", name: "TV Monitor [설치]", spec: "19″이하", unit: "개", labors: {"통신관련산업기사": 0.25, "통신설비공": 0.25}, category: "device", page: 211, keywords: ["tv monitor [설치]", "19″이하", "방송국 설비"] },
  { code: "통신 7-11-1", name: "Switcher [설치]", spec: "", unit: "개", labors: {"통신관련산업기사": 1.0, "통신설비공": 1.5, "보통인부": 0.6}, category: "device", page: 211, keywords: ["switcher [설치]", "방송국 설비"] },
  { code: "통신 7-11-1", name: "Switcher [점검]", spec: "", unit: "개", labors: {"통신관련산업기사": 0.5}, category: "device", page: 211, keywords: ["switcher [점검]", "방송국 설비"] },
  { code: "통신 7-11-1", name: "Switcher [시험 및 측정]", spec: "", unit: "개", labors: {"통신관련기사": 1.0, "통신관련산업기사": 1.0}, category: "device", page: 211, keywords: ["switcher [시험 및 측정]", "방송국 설비"] },
  { code: "통신 7-11-1", name: "Stereo Generator [설치]", spec: "", unit: "개", labors: {"통신관련산업기사": 0.3, "통신설비공": 0.8, "보통인부": 0.4}, category: "device", page: 211, keywords: ["방송국 설비", "stereo generator [설치]"] },
  { code: "통신 7-11-1", name: "Stereo Generator [점검]", spec: "", unit: "개", labors: {"통신관련산업기사": 0.4}, category: "device", page: 211, keywords: ["stereo generator [점검]", "방송국 설비"] },
  { code: "통신 7-11-1", name: "Stereo Generator [조정]", spec: "", unit: "개", labors: {"통신관련기사": 0.4, "통신관련산업기사": 0.6}, category: "device", page: 211, keywords: ["stereo generator [조정]", "방송국 설비"] },
  { code: "통신 7-11-1", name: "Stereo Generator [시험 및 측정]", spec: "", unit: "개", labors: {"통신관련기사": 0.8, "통신관련산업기사": 1.0}, category: "device", page: 211, keywords: ["방송국 설비", "stereo generator [시험 및 측정]"] },
  { code: "통신 7-11-1", name: "SCA Generator [설치]", spec: "", unit: "개", labors: {"통신관련산업기사": 0.2, "통신설비공": 0.5, "보통인부": 0.3}, category: "device", page: 211, keywords: ["방송국 설비", "sca generator [설치]"] },
  { code: "통신 7-11-1", name: "SCA Generator [점검]", spec: "", unit: "개", labors: {"통신관련산업기사": 0.4}, category: "device", page: 211, keywords: ["sca generator [점검]", "방송국 설비"] },
  { code: "통신 7-11-1", name: "SCA Generator [조정]", spec: "", unit: "개", labors: {"통신관련기사": 0.3, "통신관련산업기사": 0.5}, category: "device", page: 211, keywords: ["sca generator [조정]", "방송국 설비"] },
  { code: "통신 7-11-1", name: "SCA Generator [시험 및 측정]", spec: "", unit: "개", labors: {"통신관련기사": 0.5, "통신관련산업기사": 0.8}, category: "device", page: 211, keywords: ["방송국 설비", "sca generator [시험 및 측정]"] },
  { code: "통신 7-11-1", name: "빔프로젝터 (Beam Projector) [설치]", spec: "4,000ANSI이하", unit: "개", labors: {"통신관련산업기사": 0.2, "통신설비공": 0.2}, category: "device", page: 212, keywords: ["빔프로젝터 (beam projector) [설치]", "4,000ansi이하", "방송국 설비"] },
  { code: "통신 7-11-1", name: "빔프로젝터 (Beam Projector) [조정]", spec: "4,000ANSI이하", unit: "개", labors: {"통신관련기사": 0.29, "통신관련산업기사": 0.29}, category: "device", page: 212, keywords: ["4,000ansi이하", "빔프로젝터 (beam projector) [조정]", "방송국 설비"] },
  { code: "통신 7-11-1", name: "빔프로젝터 (Beam Projector) [시험 및 측정]", spec: "4,000ANSI이하", unit: "개", labors: {"통신관련기사": 0.17, "통신관련산업기사": 0.17}, category: "device", page: 212, keywords: ["빔프로젝터 (beam projector) [시험 및 측정]", "4,000ansi이하", "방송국 설비"] },
  { code: "통신 7-11-1", name: "Multi Remote Con- troller (A/V 통합 제어) [설치]", spec: "TouchScreenSet", unit: "개", labors: {"H/W시험사": 1.6, "통신설비공": 1.3, "보통인부": 0.9}, category: "device", page: 212, keywords: ["touchscreenset", "방송국 설비", "multi remote con- troller (a/v 통합 제어) [설치]"] },
  { code: "통신 7-11-1", name: "Multi Remote Con- troller (A/V 통합 제어) [조정]", spec: "TouchScreenSet", unit: "개", labors: {"통신관련기사": 1.2}, category: "device", page: 212, keywords: ["multi remote con- troller (a/v 통합 제어) [조정]", "touchscreenset", "방송국 설비"] },
  { code: "통신 7-11-1", name: "Multi Remote Con- troller (A/V 통합 제어) [시험 및 측정]", spec: "TouchScreenSet", unit: "개", labors: {"S/W시험사": 1.0, "H/W시험사": 1.0}, category: "device", page: 212, keywords: ["multi remote con- troller (a/v 통합 제어) [시험 및 측정]", "touchscreenset", "방송국 설비"] },
  { code: "통신 7-11-1", name: "영 사 기 [설치]", spec: "", unit: "개", labors: {"통신관련산업기사": 4.0, "통신설비공": 1.5, "보통인부": 2.0}, category: "device", page: 212, keywords: ["영 사 기 [설치]", "방송국 설비"] },
  { code: "통신 7-11-1", name: "영 사 기 [점검]", spec: "", unit: "개", labors: {"통신관련산업기사": 1.0}, category: "device", page: 212, keywords: ["방송국 설비", "영 사 기 [점검]"] },
  { code: "통신 7-11-1", name: "영 사 기 [조정]", spec: "", unit: "개", labors: {"통신관련기사": 3.0, "통신관련산업기사": 1.0, "통신설비공": 0.5}, category: "device", page: 212, keywords: ["방송국 설비", "영 사 기 [조정]"] },
  { code: "통신 7-11-1", name: "영 사 기 [시험 및 측정]", spec: "", unit: "개", labors: {"통신관련기사": 3.0}, category: "device", page: 212, keywords: ["영 사 기 [시험 및 측정]", "방송국 설비"] },
  { code: "통신 7-11-1", name: "동시통역 시 스 템 (적외선방식) [설치]", spec: "", unit: "Control Unit", labors: {"H/W시험사": 2.42, "통신설비공": 0.42}, category: "device", page: 212, keywords: ["동시통역 시 스 템 (적외선방식) [설치]", "방송국 설비"] },
  { code: "통신 7-11-1", name: "동시통역 시 스 템 (적외선방식) [점검]", spec: "", unit: "Control Unit", labors: {"통신관련산업기사": 1.42}, category: "device", page: 212, keywords: ["동시통역 시 스 템 (적외선방식) [점검]", "방송국 설비"] },
  { code: "통신 7-11-1", name: "동시통역 시 스 템 (적외선방식) [조정]", spec: "", unit: "Control Unit", labors: {"통신관련산업기사": 1.0, "통신설비공": 2.0}, category: "device", page: 212, keywords: ["방송국 설비", "동시통역 시 스 템 (적외선방식) [조정]"] },
  { code: "통신 7-11-1", name: "동시통역 시 스 템 (적외선방식) [시험 및 측정]", spec: "", unit: "Control Unit", labors: {"S/W시험사": 4.85, "H/W시험사": 2.42}, category: "device", page: 212, keywords: ["동시통역 시 스 템 (적외선방식) [시험 및 측정]", "방송국 설비"] },
  { code: "통신 7-11-1", name: "화상회의 시 스 템 [설치]", spec: "", unit: "CODEC", labors: {"H/W시험사": 1.4, "통신관련산업기사": 0.2}, category: "device", page: 212, keywords: ["방송국 설비", "화상회의 시 스 템 [설치]"] },
  { code: "통신 7-11-1", name: "화상회의 시 스 템 [점검]", spec: "", unit: "CODEC", labors: {"통신관련산업기사": 0.3}, category: "device", page: 212, keywords: ["화상회의 시 스 템 [점검]", "방송국 설비"] },
  { code: "통신 7-11-1", name: "화상회의 시 스 템 [조정]", spec: "", unit: "CODEC", labors: {"통신관련산업기사": 0.7}, category: "device", page: 212, keywords: ["방송국 설비", "화상회의 시 스 템 [조정]"] },
  { code: "통신 7-11-1", name: "화상회의 시 스 템 [시험 및 측정]", spec: "", unit: "CODEC", labors: {"S/W시험사": 2.8, "H/W시험사": 1.4, "통신관련산업기사": 0.2}, category: "device", page: 212, keywords: ["화상회의 시 스 템 [시험 및 측정]", "방송국 설비"] },
  { code: "통신 7-11-1", name: "CATV Modulator [설치]", spec: "", unit: "개", labors: {"통신관련산업기사": 0.21, "통신설비공": 0.21, "보통인부": 0.32}, category: "device", page: 212, keywords: ["catv modulator [설치]", "방송국 설비"] },
  { code: "통신 7-11-1", name: "CATV Modulator [조정]", spec: "", unit: "개", labors: {"통신관련기사": 0.18, "통신관련산업기사": 0.18}, category: "device", page: 212, keywords: ["catv modulator [조정]", "방송국 설비"] },
  { code: "통신 7-11-1", name: "ASI Multiplexer [설치]", spec: "", unit: "개", labors: {"통신관련산업기사": 0.22, "통신설비공": 0.22, "보통인부": 0.33}, category: "device", page: 212, keywords: ["asi multiplexer [설치]", "방송국 설비"] },
  { code: "통신 7-11-1", name: "ASI Multiplexer [조정]", spec: "", unit: "개", labors: {"통신관련기사": 0.17, "통신관련산업기사": 0.17}, category: "device", page: 212, keywords: ["방송국 설비", "asi multiplexer [조정]"] },
  { code: "통신 7-11-1", name: "방송용카메라 [설치]", spec: "", unit: "개", labors: {"통신관련산업기사": 0.2, "통신설비공": 0.2, "보통인부": 0.31}, category: "device", page: 212, keywords: ["방송용카메라 [설치]", "방송국 설비"] },
  { code: "통신 7-11-1", name: "방송용카메라 [조정]", spec: "", unit: "개", labors: {"통신관련기사": 0.15, "통신관련산업기사": 0.15}, category: "device", page: 212, keywords: ["방송국 설비", "방송용카메라 [조정]"] },
  { code: "통신 7-11-1-1", name: "Sync Generator", spec: "", unit: "대", labors: {"통신관련산업기사": 0.16, "통신설비공": 0.16}, category: "device", page: 214, keywords: ["sync generator", "방송 제작 송출 설비"] },
  { code: "통신 7-11-1-1", name: "Sync C/O(change over) GateWay C/O(change over)", spec: "", unit: "대", labors: {"통신관련산업기사": 0.1, "통신설비공": 0.1}, category: "device", page: 214, keywords: ["sync c/o(change over) gateway c/o(change over)", "방송 제작 송출 설비"] },
  { code: "통신 7-11-1-1", name: "Frame Synchronizer", spec: "", unit: "대", labors: {"통신관련산업기사": 0.16, "통신설비공": 0.16}, category: "device", page: 214, keywords: ["frame synchronizer", "방송 제작 송출 설비"] },
  { code: "통신 7-11-1-1", name: "Encoder, Decoder, Signal&ESG Encoder, Caption Encoder, Multiplexer, Scrambler, Video Server (File Player), IP Stream Analyzer, GateWay", spec: "RU형", unit: "대", labors: {"통신관련산업기사": 0.16, "통신설비공": 0.16}, category: "device", page: 214, keywords: ["ru형", "encoder, decoder, signal&esg encoder, caption encoder, multiplexer, scrambler, video server (file player), ip stream analyzer, gateway", "방송 제작 송출 설비"] },
  { code: "통신 7-11-1-1", name: "Patch Bay", spec: "24CH", unit: "대", labors: {"통신관련산업기사": 0.19, "통신설비공": 0.19}, category: "device", page: 214, keywords: ["24ch", "patch bay", "방송 제작 송출 설비"] },
  { code: "통신 7-11-1-1", name: "Audio Video Mixer (Switcher) Audio Video Router Audio Video C/O", spec: "10CH", unit: "대", labors: {"통신관련산업기사": 0.18, "통신설비공": 0.18}, category: "device", page: 214, keywords: ["10ch", "audio video mixer (switcher) audio video router audio video c/o", "방송 제작 송출 설비"] },
  { code: "통신 7-11-1-1", name: "Digital Interface Unit (DIU)", spec: "10 Slot", unit: "대", labors: {"통신관련산업기사": 0.24, "통신설비공": 0.24}, category: "device", page: 214, keywords: ["digital interface unit (diu)", "10 slot", "방송 제작 송출 설비"] },
  { code: "통신 7-11-1-1", name: "방송 제어용 PC", spec: "일반 PC형", unit: "대", labors: {"통신관련산업기사": 0.07, "통신설비공": 0.07}, category: "device", page: 215, keywords: ["방송 제작 송출 설비", "방송 제어용 pc", "일반 pc형"] },
  { code: "통신 7-11-1-1", name: "Audio/ Video Level Monitor", spec: "", unit: "대", labors: {"통신관련산업기사": 0.1, "통신설비공": 0.1}, category: "device", page: 215, keywords: ["방송 제작 송출 설비", "audio/ video level monitor"] },
  { code: "통신 7-11-1-1", name: "KVM Switch", spec: "Rack형(Lod일체형)", unit: "대", labors: {"통신관련산업기사": 0.18, "통신설비공": 0.18}, category: "device", page: 215, keywords: ["rack형(lod일체형)", "kvm switch", "방송 제작 송출 설비"] },
  { code: "통신 7-11-1-1", name: "WFM(Waveform Monitor)", spec: "", unit: "대", labors: {"통신관련산업기사": 0.18, "통신설비공": 0.18}, category: "device", page: 215, keywords: ["wfm(waveform monitor)", "방송 제작 송출 설비"] },
  { code: "통신 7-11-1-1", name: "방송용 GPS 안테나 설치", spec: "", unit: "대", labors: {"통신설비공": 0.14, "통신케이블공": 0.14}, category: "device", page: 215, keywords: ["방송 제작 송출 설비", "방송용 gps 안테나 설치"] },
  { code: "통신 7-11-1-1", name: "Video Line Monitor", spec: "19“이하", unit: "대", labors: {"통신관련산업기사": 0.15, "통신설비공": 0.15}, category: "device", page: 215, keywords: ["video line monitor", "방송 제작 송출 설비", "19“이하"] },
  { code: "통신 7-11-2-1", name: "Emergency Control Unit", spec: "", unit: "대", labors: {"통신관련산업기사": 0.75, "통신설비공": 0.75}, category: "device", page: 216, keywords: ["emergency control unit", "비상방송 설비"] },
  { code: "통신 7-11-2-1", name: "Emergency Switch", spec: "", unit: "대", labors: {"통신관련산업기사": 0.64, "통신설비공": 0.64}, category: "device", page: 216, keywords: ["emergency switch", "비상방송 설비"] },
  { code: "통신 7-11-2-1", name: "Matrix Logic", spec: "", unit: "대", labors: {"통신관련산업기사": 0.64, "통신설비공": 0.64}, category: "device", page: 216, keywords: ["비상방송 설비", "matrix logic"] },
  { code: "통신 7-11-2-1", name: "Program Exchange", spec: "", unit: "대", labors: {"통신관련산업기사": 0.71, "통신설비공": 0.71}, category: "device", page: 216, keywords: ["program exchange", "비상방송 설비"] },
  { code: "통신 7-11-2-1", name: "Speaker Selector", spec: "", unit: "대", labors: {"통신관련산업기사": 0.51, "통신설비공": 0.51}, category: "device", page: 216, keywords: ["speaker selector", "비상방송 설비"] },
  { code: "통신 7-11-2-1", name: "Relay Group", spec: "", unit: "대", labors: {"통신관련산업기사": 0.57, "통신설비공": 0.57}, category: "device", page: 216, keywords: ["relay group", "비상방송 설비"] },
  { code: "통신 7-11-2-1", name: "Power Distributor", spec: "", unit: "대", labors: {"통신관련산업기사": 0.39, "통신설비공": 0.39}, category: "device", page: 216, keywords: ["비상방송 설비", "power distributor"] },
  { code: "통신 7-11-2-1", name: "Terminal Board", spec: "", unit: "대", labors: {"통신관련산업기사": 0.58, "통신설비공": 0.58}, category: "device", page: 216, keywords: ["terminal board", "비상방송 설비"] },
  { code: "통신 7-11-2-1", name: "Program Manual Controller", spec: "", unit: "대", labors: {"통신관련산업기사": 0.32, "통신설비공": 0.32}, category: "device", page: 216, keywords: ["비상방송 설비", "program manual controller"] },
  { code: "통신 7-11-2-1", name: "Power AMP", spec: "", unit: "대", labors: {"통신관련산업기사": 0.26, "통신설비공": 0.26}, category: "device", page: 216, keywords: ["power amp", "비상방송 설비"] },
  { code: "통신 7-11-2-1", name: "Emergency Combination System", spec: "", unit: "대", labors: {"통신관련산업기사": 0.77, "통신설비공": 0.77}, category: "device", page: 216, keywords: ["emergency combination system", "비상방송 설비"] },
  { code: "통신 7-11-2-1", name: "Emergency Router", spec: "", unit: "대", labors: {"통신관련산업기사": 0.68, "통신설비공": 0.68}, category: "device", page: 216, keywords: ["emergency router", "비상방송 설비"] },
  { code: "통신 7-11-2-1", name: "Emergency Interface", spec: "", unit: "대", labors: {"통신관련산업기사": 0.26, "통신설비공": 0.26}, category: "device", page: 216, keywords: ["emergency interface", "비상방송 설비"] },
  { code: "통신 7-11-2-2", name: "Power AMP Monitor", spec: "", unit: "대", labors: {"통신관련산업기사": 0.3, "통신설비공": 0.3}, category: "device", page: 217, keywords: ["bgm방송 설비", "power amp monitor"] },
  { code: "통신 7-11-2-2", name: "AM/FM Tuner", spec: "", unit: "대", labors: {"통신관련산업기사": 0.21, "통신설비공": 0.21}, category: "device", page: 217, keywords: ["am/fm tuner", "bgm방송 설비"] },
  { code: "통신 7-11-2-2", name: "Cassette Deck", spec: "", unit: "대", labors: {"통신관련산업기사": 0.37, "통신설비공": 0.37}, category: "device", page: 217, keywords: ["bgm방송 설비", "cassette deck"] },
  { code: "통신 7-11-2-2", name: "Chime/Siren", spec: "", unit: "대", labors: {"통신관련산업기사": 0.32, "통신설비공": 0.32}, category: "device", page: 217, keywords: ["bgm방송 설비", "chime/siren"] },
  { code: "통신 7-11-2-2", name: "CD Player/DVD Player", spec: "", unit: "대", labors: {"통신관련산업기사": 0.2, "통신설비공": 0.2}, category: "device", page: 217, keywords: ["cd player/dvd player", "bgm방송 설비"] },
  { code: "통신 7-11-2-2", name: "Pre Amplifier", spec: "", unit: "대", labors: {"통신관련산업기사": 0.38, "통신설비공": 0.38}, category: "device", page: 217, keywords: ["pre amplifier", "bgm방송 설비"] },
  { code: "통신 7-11-2-2", name: "Auto Blower", spec: "", unit: "대", labors: {"통신관련산업기사": 0.19, "통신설비공": 0.19}, category: "device", page: 217, keywords: ["bgm방송 설비", "auto blower"] },
  { code: "통신 7-11-2-2", name: "Auto Charger", spec: "", unit: "대", labors: {"통신관련산업기사": 0.34, "통신설비공": 0.34}, category: "device", page: 217, keywords: ["bgm방송 설비", "auto charger"] },
  { code: "통신 7-11-2-2", name: "Digital Control Exchanger", spec: "", unit: "대", labors: {"통신관련산업기사": 0.73, "통신설비공": 0.73}, category: "device", page: 217, keywords: ["bgm방송 설비", "digital control exchanger"] },
  { code: "통신 7-11-2-2", name: "Audio Monitor", spec: "", unit: "대", labors: {"통신관련산업기사": 0.5, "통신설비공": 0.5}, category: "device", page: 217, keywords: ["bgm방송 설비", "audio monitor"] },
  { code: "통신 7-11-2-2", name: "Local Selector", spec: "", unit: "대", labors: {"통신관련산업기사": 0.21, "통신설비공": 0.21}, category: "device", page: 217, keywords: ["bgm방송 설비", "local selector"] },
  { code: "통신 7-11-2-2", name: "프로그램 타이머", spec: "", unit: "대", labors: {"통신관련산업기사": 0.4, "통신설비공": 0.4}, category: "device", page: 217, keywords: ["프로그램 타이머", "bgm방송 설비"] },
  { code: "통신 7-11-2-2", name: "멀티보이스 파일", spec: "", unit: "대", labors: {"통신관련산업기사": 0.34, "통신설비공": 0.34}, category: "device", page: 217, keywords: ["bgm방송 설비", "멀티보이스 파일"] },
  { code: "통신 7-11-2-2", name: "리모트 앰프", spec: "", unit: "대", labors: {"통신관련산업기사": 0.27, "통신설비공": 0.27}, category: "device", page: 217, keywords: ["리모트 앰프", "bgm방송 설비"] },
  { code: "통신 7-11-2-2", name: "AMP Fault Detector", spec: "", unit: "대", labors: {"통신관련산업기사": 0.32, "통신설비공": 0.32}, category: "device", page: 217, keywords: ["bgm방송 설비", "amp fault detector"] },
  { code: "통신 7-11-2-2", name: "데이터 리시버", spec: "", unit: "대", labors: {"통신관련산업기사": 0.32, "통신설비공": 0.32}, category: "device", page: 217, keywords: ["bgm방송 설비", "데이터 리시버"] },
  { code: "통신 7-11-2-2", name: "Speaker Line Checker", spec: "", unit: "대", labors: {"통신관련산업기사": 0.76, "통신설비공": 0.76}, category: "device", page: 217, keywords: ["speaker line checker", "bgm방송 설비"] },
  { code: "통신 7-11-2-2", name: "Direct Box", spec: "", unit: "대", labors: {"통신관련산업기사": 0.02, "통신설비공": 0.02}, category: "device", page: 217, keywords: ["bgm방송 설비", "direct box"] },
  { code: "통신 7-11-2-2", name: "Management 프로그램", spec: "", unit: "대", labors: {"통신관련산업기사": 0.29, "통신설비공": 0.29}, category: "device", page: 217, keywords: ["bgm방송 설비", "management 프로그램"] },
  { code: "통신 7-11-2-2", name: "Digi-Link Multi Controller", spec: "", unit: "대", labors: {"통신관련산업기사": 0.18, "통신설비공": 0.18}, category: "device", page: 217, keywords: ["bgm방송 설비", "digi-link multi controller"] },
  { code: "통신 7-11-2-2", name: "Portable AMP", spec: "", unit: "대", labors: {"통신관련산업기사": 0.05, "통신설비공": 0.05}, category: "device", page: 217, keywords: ["bgm방송 설비", "portable amp"] },
  { code: "통신 7-11-2-2", name: "Telephone Paging", spec: "", unit: "대", labors: {"통신관련산업기사": 0.12, "통신설비공": 0.12}, category: "device", page: 217, keywords: ["bgm방송 설비", "telephone paging"] },
  { code: "통신 7-11-2-2", name: "Audio Distribution", spec: "", unit: "대", labors: {"통신관련산업기사": 0.17, "통신설비공": 0.17}, category: "device", page: 217, keywords: ["bgm방송 설비", "audio distribution"] },
  { code: "통신 7-11-2-3", name: "Power Distributor Switcher", spec: "", unit: "대", labors: {"통신관련산업기사": 0.39, "통신설비공": 0.39}, category: "device", page: 218, keywords: ["power distributor switcher", "프로오디오 설비(sr)"] },
  { code: "통신 7-11-2-3", name: "Power Supply", spec: "", unit: "대", labors: {"통신관련산업기사": 0.38, "통신설비공": 0.38}, category: "device", page: 218, keywords: ["power supply", "프로오디오 설비(sr)"] },
  { code: "통신 7-11-2-3", name: "VU Meter", spec: "", unit: "대", labors: {"통신관련산업기사": 0.23, "통신설비공": 0.23}, category: "device", page: 218, keywords: ["vu meter", "프로오디오 설비(sr)"] },
  { code: "통신 7-11-2-3", name: "하울링제거기", spec: "", unit: "대", labors: {"통신관련산업기사": 0.38, "통신설비공": 0.55}, category: "device", page: 218, keywords: ["하울링제거기", "프로오디오 설비(sr)"] },
  { code: "통신 7-11-2-3", name: "Digital Signal Processor", spec: "", unit: "대", labors: {"통신관련산업기사": 3.64, "통신설비공": 1.82}, category: "device", page: 218, keywords: ["digital signal processor", "프로오디오 설비(sr)"] },
  { code: "통신 7-11-2-3", name: "Digital Audio Mixer", spec: "", unit: "대", labors: {"통신관련산업기사": 3.25, "통신설비공": 1.63}, category: "device", page: 218, keywords: ["digital audio mixer", "프로오디오 설비(sr)"] },
  { code: "통신 7-11-2-3", name: "Audio I/O Box", spec: "", unit: "대", labors: {"통신관련산업기사": 0.13, "통신설비공": 0.13}, category: "device", page: 218, keywords: ["audio i/o box", "프로오디오 설비(sr)"] },
  { code: "통신 7-11-2-3", name: "Graphic Equalizer", spec: "", unit: "대", labors: {"통신관련산업기사": 0.06, "통신설비공": 0.06}, category: "device", page: 218, keywords: ["graphic equalizer", "프로오디오 설비(sr)"] },
  { code: "통신 7-11-2-3", name: "Network Audio Signal Router", spec: "", unit: "대", labors: {"통신관련산업기사": 0.11, "통신설비공": 0.11}, category: "device", page: 218, keywords: ["network audio signal router", "프로오디오 설비(sr)"] },
  { code: "통신 7-11-2-3", name: "스피커 브라켓(벽부형)", spec: "", unit: "개", labors: {"통신설비공": 0.11}, category: "device", page: 218, keywords: ["프로오디오 설비(sr)", "스피커 브라켓(벽부형)"] },
  { code: "통신 7-11-2-3", name: "체인블럭", spec: "수동형", unit: "대", labors: {"통신설비공": 0.56}, category: "device", page: 218, keywords: ["체인블럭", "프로오디오 설비(sr)", "수동형"] },
  { code: "통신 7-11-2-3", name: "스피커프레임", spec: "일체형", unit: "개", labors: {"통신설비공": 0.27}, category: "device", page: 218, keywords: ["스피커프레임", "일체형", "프로오디오 설비(sr)"] },
  { code: "통신 7-11-2-4", name: "Digital Modulator", spec: "", unit: "대", labors: {"통신관련산업기사": 0.35, "통신설비공": 0.35}, category: "device", page: 219, keywords: ["멀티미디어방송 설비", "digital modulator"] },
  { code: "통신 7-11-2-4", name: "Digital A/V Matrix Switch", spec: "", unit: "대", labors: {"통신관련산업기사": 0.61, "통신설비공": 0.61}, category: "device", page: 219, keywords: ["digital a/v matrix switch", "멀티미디어방송 설비"] },
  { code: "통신 7-11-2-4", name: "VGA Matrix", spec: "", unit: "대", labors: {"통신관련산업기사": 0.35, "통신설비공": 0.33}, category: "device", page: 219, keywords: ["vga matrix", "멀티미디어방송 설비"] },
  { code: "통신 7-11-2-4", name: "A/V Receiver", spec: "", unit: "대", labors: {"통신관련산업기사": 0.33, "통신설비공": 0.52}, category: "device", page: 219, keywords: ["a/v receiver", "멀티미디어방송 설비"] },
  { code: "통신 7-11-2-4", name: "A/V Mixer", spec: "", unit: "대", labors: {"통신관련산업기사": 0.58, "통신설비공": 0.58}, category: "device", page: 219, keywords: ["a/v mixer", "멀티미디어방송 설비"] },
  { code: "통신 7-11-2-4", name: "Network A/V Streamer", spec: "", unit: "대", labors: {"통신관련산업기사": 0.36, "통신설비공": 0.36}, category: "device", page: 219, keywords: ["network a/v streamer", "멀티미디어방송 설비"] },
  { code: "통신 7-11-2-4", name: "Set-top Box", spec: "", unit: "대", labors: {"통신관련산업기사": 0.32, "통신설비공": 0.32}, category: "device", page: 219, keywords: ["set-top box", "멀티미디어방송 설비"] },
  { code: "통신 7-11-2-4", name: "Video Distribution", spec: "", unit: "대", labors: {"통신관련산업기사": 0.04, "통신설비공": 0.04}, category: "device", page: 219, keywords: ["video distribution", "멀티미디어방송 설비"] },
  { code: "통신 7-11-2-5", name: "Network Audio Server", spec: "", unit: "대", labors: {"통신관련산업기사": 0.77, "통신설비공": 0.77}, category: "device", page: 219, keywords: ["네트워크 통합방송 설비", "network audio server"] },
  { code: "통신 7-11-2-5", name: "Network Audio Converter", spec: "", unit: "대", labors: {"통신관련산업기사": 0.43, "통신설비공": 0.43}, category: "device", page: 219, keywords: ["네트워크 통합방송 설비", "network audio converter"] },
  { code: "통신 7-11-2-5", name: "Audio Over Ethernet", spec: "", unit: "대", labors: {"통신관련산업기사": 0.63, "통신설비공": 0.63}, category: "device", page: 219, keywords: ["audio over ethernet", "네트워크 통합방송 설비"] },
  { code: "통신 7-11-3", name: "조 립 및 설 치 [Mixing Consol e]", spec: "", unit: "개", labors: {"통신관련기사": 0.94}, category: "device", page: 220, keywords: ["조 립 및 설 치 [mixing consol e]", "콘솔(console)"] },
  { code: "통신 7-11-3", name: "조 립 및 설 치 [AM TX Control Console]", spec: "", unit: "개", labors: {"통신관련기사": 1.0}, category: "device", page: 220, keywords: ["콘솔(console)", "조 립 및 설 치 [am tx control console]"] },
  { code: "통신 7-11-3", name: "조 립 및 설 치 [TV TX Control Console]", spec: "", unit: "개", labors: {"통신관련기사": 2.0}, category: "device", page: 220, keywords: ["조 립 및 설 치 [tv tx control console]", "콘솔(console)"] },
  { code: "통신 7-11-3", name: "조 정 [Mixing Consol e]", spec: "", unit: "개", labors: {"통신관련기사": 1.75}, category: "device", page: 220, keywords: ["콘솔(console)", "조 정 [mixing consol e]"] },
  { code: "통신 7-11-3", name: "시 험 및 측 정 [Mixing Consol e]", spec: "", unit: "개", labors: {"통신관련기사": 3.67}, category: "device", page: 220, keywords: ["시 험 및 측 정 [mixing consol e]", "콘솔(console)"] },
  { code: "통신 7-11-3", name: "시 험 및 측 정 [AM TX Control Console]", spec: "", unit: "개", labors: {"통신관련기사": 1.0}, category: "device", page: 220, keywords: ["시 험 및 측 정 [am tx control console]", "콘솔(console)"] },
  { code: "통신 7-11-3", name: "시 험 및 측 정 [TV TX Control Console]", spec: "", unit: "개", labors: {"통신관련기사": 2.0}, category: "device", page: 220, keywords: ["시 험 및 측 정 [tv tx control console]", "콘솔(console)"] },
  { code: "통신 7-11-4", name: "무선방송 주장치", spec: "", unit: "세트", labors: {"통신설비공": 0.53, "특별인부": 0.48}, category: "device", page: 220, keywords: ["마을 무선방송시스템", "무선방송 주장치"] },
  { code: "통신 7-11-4", name: "무선 스피커", spec: "", unit: "대", labors: {"통신설비공": 0.05}, category: "device", page: 220, keywords: ["마을 무선방송시스템", "무선 스피커"] },
  { code: "통신 7-11-4", name: "안테나", spec: "", unit: "기", labors: {"무선안테나공": 0.66, "통신설비공": 0.47}, category: "device", page: 220, keywords: ["마을 무선방송시스템", "안테나"] },
  { code: "통신 7-11-4", name: "안테나 Pole", spec: "", unit: "대", labors: {"통신설비공": 0.1}, category: "device", page: 220, keywords: ["마을 무선방송시스템", "안테나 pole"] },
  { code: "통신 7-11-4", name: "종합시험", spec: "", unit: "식", labors: {"통신설비공": 0.21, "특별인부": 0.21}, category: "device", page: 220, keywords: ["종합시험", "마을 무선방송시스템"] },
  { code: "통신 7-11-5", name: "Jack Panel", spec: "8포트 이하", unit: "개", labors: {"통신설비공": 0.63}, category: "device", page: 221, keywords: ["jack panel", "8포트 이하"] },
  { code: "통신 7-11-5", name: "Console 박스", spec: "-", unit: "개", labors: {"통신관련산업기사": 0.3, "통신설비공": 1.5, "보통인부": 0.5}, category: "device", page: 221, keywords: ["console 박스"] },
  { code: "통신 7-11-5", name: "행거 (Hanger)", spec: "-", unit: "개", labors: {"통신관련산업기사": 0.11, "통신설비공": 0.11, "보통인부": 0.11}, category: "device", page: 221, keywords: ["행거 (hanger)"] },
  { code: "통신 7-11-5", name: "스 크 린", spec: "120인치 이하", unit: "대", labors: {"통신설비공": 2.0, "보통인부": 2.0}, category: "device", page: 221, keywords: ["120인치 이하", "스 크 린"] },
  { code: "통신 7-11-5", name: "Speaker", spec: "5W이하", unit: "대", labors: {"통신설비공": 0.21}, category: "device", page: 221, keywords: ["5w이하", "speaker"] },
  { code: "통신 7-11-5", name: "전 동 상 황판", spec: "120인치이하", unit: "대", labors: {"통신관련산업기사": 1.99, "보통인부": 1.99}, category: "device", page: 221, keywords: ["전 동 상 황판", "120인치이하"] },
  { code: "통신 7-11-5", name: "Suspension Mic Elevation", spec: "1Point", unit: "대", labors: {"통신관련산업기사": 0.15, "통신설비공": 0.15, "보통인부": 0.15}, category: "device", page: 221, keywords: ["suspension mic elevation", "1point"] },
  { code: "통신 7-11-5", name: "Wireless Ant", spec: "-", unit: "대", labors: {"통신관련산업기사": 0.16, "통신설비공": 0.15}, category: "device", page: 221, keywords: ["wireless ant"] },
  { code: "통신 7-11-5", name: "무선 리시버 (Wireless Receiver)", spec: "-", unit: "대", labors: {"통신관련산업기사": 0.23, "통신설비공": 0.23}, category: "device", page: 221, keywords: ["무선 리시버 (wireless receiver)"] },
  { code: "통신 7-11-5", name: "천장타공", spec: "8인치 이하", unit: "개소", labors: {"통신설비공": 0.11}, category: "device", page: 221, keywords: ["8인치 이하", "천장타공"] },
  { code: "통신 7-11-5", name: "음량조절기(ATT)", spec: "-", unit: "대", labors: {"통신설비공": 0.16}, category: "device", page: 221, keywords: ["음량조절기(att)"] },
  { code: "통신 7-11-5", name: "이동식 노래방 기기", spec: "-", unit: "대", labors: {"통신설비공": 0.3}, category: "device", page: 222, keywords: ["이동식 노래방 기기"] },
  { code: "통신 7-11-5", name: "전동 엘리베이션 (빔프로젝터용)", spec: "천장 4m 이하", unit: "대", labors: {"통신설비공": 0.68, "보통인부": 0.44}, category: "device", page: 222, keywords: ["전동 엘리베이션 (빔프로젝터용)", "천장 4m 이하"] },
  { code: "통신 7-12-1", name: "전파수신상태조사", spec: "", unit: "개소당", labors: {"통신관련산업기사": 0.76, "보통인부": 0.38}, category: "device", page: 223, keywords: ["전파수신상태조사"] },
  { code: "통신 7-12-2", name: "간선(옥외용) [증폭기 설치]", spec: "", unit: "대", labors: {"통신설비공": 0.26, "보통인부": 0.25}, category: "device", page: 223, keywords: ["간선(옥외용) [증폭기 설치]", "증폭기"] },
  { code: "통신 7-12-2", name: "간선(옥외용) [시험 및 조정]", spec: "", unit: "대", labors: {"통신관련산업기사": 0.31, "통신설비공": 0.31}, category: "device", page: 223, keywords: ["증폭기", "간선(옥외용) [시험 및 조정]"] },
  { code: "통신 7-12-2", name: "분기 분배 [증폭기 설치]", spec: "2Port", unit: "대", labors: {"통신설비공": 0.27, "보통인부": 0.26}, category: "device", page: 223, keywords: ["2port", "증폭기", "분기 분배 [증폭기 설치]"] },
  { code: "통신 7-12-2", name: "분기 분배 [시험 및 조정]", spec: "2Port", unit: "대", labors: {"통신관련산업기사": 0.38, "통신설비공": 0.38}, category: "device", page: 223, keywords: ["분기 분배 [시험 및 조정]", "2port", "증폭기"] },
  { code: "통신 7-12-2", name: "․연장(옥내외) [증폭기 설치]", spec: "", unit: "대", labors: {"통신설비공": 0.25, "보통인부": 0.25}, category: "device", page: 223, keywords: ["․연장(옥내외) [증폭기 설치]", "증폭기"] },
  { code: "통신 7-12-2", name: "․연장(옥내외) [시험 및 조정]", spec: "", unit: "대", labors: {"통신관련산업기사": 0.25, "통신설비공": 0.25}, category: "device", page: 223, keywords: ["증폭기", "․연장(옥내외) [시험 및 조정]"] },
  { code: "통신 7-12-2", name: "구내전송증폭기 [증폭기 설치]", spec: "", unit: "대", labors: {"통신설비공": 0.16, "보통인부": 0.16}, category: "device", page: 223, keywords: ["증폭기", "구내전송증폭기 [증폭기 설치]"] },
  { code: "통신 7-12-2", name: "구내전송증폭기 [시험 및 조정]", spec: "", unit: "대", labors: {"통신관련산업기사": 0.2, "통신설비공": 0.2}, category: "device", page: 223, keywords: ["구내전송증폭기 [시험 및 조정]", "증폭기"] },
  { code: "통신 7-12-2", name: "채널자동이득조절앰프 [증폭기 설치]", spec: "", unit: "대", labors: {"통신설비공": 0.26, "보통인부": 0.07}, category: "device", page: 223, keywords: ["채널자동이득조절앰프 [증폭기 설치]", "증폭기"] },
  { code: "통신 7-12-2", name: "채널자동이득조절앰프 [시험 및 조정]", spec: "", unit: "대", labors: {"통신관련산업기사": 0.47, "통신설비공": 0.09}, category: "device", page: 223, keywords: ["채널자동이득조절앰프 [시험 및 조정]", "증폭기"] },
  { code: "통신 7-12-2", name: "헤드앰프(주전송증폭기) [증폭기 설치]", spec: "", unit: "대", labors: {"통신설비공": 0.18, "보통인부": 0.18}, category: "device", page: 223, keywords: ["헤드앰프(주전송증폭기) [증폭기 설치]", "증폭기"] },
  { code: "통신 7-12-2", name: "헤드앰프(주전송증폭기) [시험 및 조정]", spec: "", unit: "대", labors: {"통신관련산업기사": 0.47, "통신설비공": 0.09}, category: "device", page: 223, keywords: ["헤드앰프(주전송증폭기) [시험 및 조정]", "증폭기"] },
  { code: "통신 7-12-2", name: "신호처리기 [증폭기 설치]", spec: "", unit: "대", labors: {"통신설비공": 0.18, "보통인부": 0.18}, category: "device", page: 223, keywords: ["증폭기", "신호처리기 [증폭기 설치]"] },
  { code: "통신 7-12-2", name: "신호처리기 [시험 및 조정]", spec: "", unit: "대", labors: {"통신관련산업기사": 0.47, "통신설비공": 0.09}, category: "device", page: 223, keywords: ["신호처리기 [시험 및 조정]", "증폭기"] },
  { code: "통신 7-12-3-1", name: "2분배기(1분기기) [설치]", spec: "", unit: "개", labors: {"통신설비공": 0.11, "보통인부": 0.11}, category: "device", page: 224, keywords: ["옥외형 분배기(분기기)", "2분배기(1분기기) [설치]"] },
  { code: "통신 7-12-3-1", name: "2분배기(1분기기) [S-MATV 시험]", spec: "", unit: "개", labors: {"통신관련산업기사": 0.02}, category: "device", page: 224, keywords: ["옥외형 분배기(분기기)", "2분배기(1분기기) [s-matv 시험]"] },
  { code: "통신 7-12-3-1", name: "3 “ (2 “ ) [설치]", spec: "", unit: "“", labors: {"통신설비공": 0.2, "보통인부": 0.09}, category: "device", page: 224, keywords: ["옥외형 분배기(분기기)", "3 “ (2 “ ) [설치]"] },
  { code: "통신 7-12-3-1", name: "3 “ (2 “ ) [S-MATV 시험]", spec: "", unit: "“", labors: {"통신관련산업기사": 0.03}, category: "device", page: 224, keywords: ["3 “ (2 “ ) [s-matv 시험]", "옥외형 분배기(분기기)"] },
  { code: "통신 7-12-3-1", name: "4 “ (3 “ ) [설치]", spec: "", unit: "“", labors: {"통신설비공": 0.16, "보통인부": 0.16}, category: "device", page: 224, keywords: ["4 “ (3 “ ) [설치]", "옥외형 분배기(분기기)"] },
  { code: "통신 7-12-3-1", name: "4 “ (3 “ ) [S-MATV 시험]", spec: "", unit: "“", labors: {"통신관련산업기사": 0.04}, category: "device", page: 224, keywords: ["4 “ (3 “ ) [s-matv 시험]", "옥외형 분배기(분기기)"] },
  { code: "통신 7-12-3-1", name: "5 “ (4 “ ) [설치]", spec: "", unit: "“", labors: {"통신설비공": 0.26, "보통인부": 0.15}, category: "device", page: 224, keywords: ["5 “ (4 “ ) [설치]", "옥외형 분배기(분기기)"] },
  { code: "통신 7-12-3-1", name: "6 “ [설치]", spec: "", unit: "“", labors: {"통신설비공": 0.3, "보통인부": 0.18}, category: "device", page: 224, keywords: ["6 “ [설치]", "옥외형 분배기(분기기)"] },
  { code: "통신 7-12-3-1", name: "6 “ [S-MATV 시험]", spec: "", unit: "“", labors: {"통신관련산업기사": 0.06}, category: "device", page: 224, keywords: ["6 “ [s-matv 시험]", "옥외형 분배기(분기기)"] },
  { code: "통신 7-12-3-1", name: "8 “ [설치]", spec: "", unit: "“", labors: {"통신설비공": 0.36, "보통인부": 0.19}, category: "device", page: 224, keywords: ["8 “ [설치]", "옥외형 분배기(분기기)"] },
  { code: "통신 7-12-3-1", name: "8 “ [S-MATV 시험]", spec: "", unit: "“", labors: {"통신관련산업기사": 0.08}, category: "device", page: 224, keywords: ["옥외형 분배기(분기기)", "8 “ [s-matv 시험]"] },
  { code: "통신 7-12-3-1", name: "12 “ [설치]", spec: "", unit: "“", labors: {"통신설비공": 0.48, "보통인부": 0.36}, category: "device", page: 224, keywords: ["12 “ [설치]", "옥외형 분배기(분기기)"] },
  { code: "통신 7-12-3-1", name: "16 “ [설치]", spec: "", unit: "“", labors: {"통신설비공": 0.6, "보통인부": 0.48}, category: "device", page: 224, keywords: ["옥외형 분배기(분기기)", "16 “ [설치]"] },
  { code: "통신 7-12-3-1", name: "(8분기기) [설치]", spec: "", unit: "“", labors: {"통신설비공": 0.38, "보통인부": 0.27}, category: "device", page: 224, keywords: ["옥외형 분배기(분기기)", "(8분기기) [설치]"] },
  { code: "통신 7-12-3-1", name: "전력분배기(10Port기준) [설치]", spec: "", unit: "“", labors: {"통신설비공": 0.1}, category: "device", page: 224, keywords: ["전력분배기(10port기준) [설치]", "옥외형 분배기(분기기)"] },
  { code: "통신 7-12-3-2", name: "2분배기(1분기기) [설치]", spec: "", unit: "개", labors: {"통신설비공": 0.08, "보통인부": 0.08}, category: "device", page: 225, keywords: ["옥내형 분배기(분기기)", "2분배기(1분기기) [설치]"] },
  { code: "통신 7-12-3-2", name: "3 (2 ) [설치]", spec: "", unit: "“", labors: {"통신설비공": 0.12, "보통인부": 0.12}, category: "device", page: 225, keywords: ["3 (2 ) [설치]", "옥내형 분배기(분기기)"] },
  { code: "통신 7-12-3-2", name: "4 (3 ) [설치]", spec: "", unit: "“", labors: {"통신설비공": 0.13, "보통인부": 0.13}, category: "device", page: 225, keywords: ["옥내형 분배기(분기기)", "4 (3 ) [설치]"] },
  { code: "통신 7-12-3-2", name: "5 (4 ) [설치]", spec: "", unit: "“", labors: {"통신설비공": 0.17, "보통인부": 0.17}, category: "device", page: 225, keywords: ["5 (4 ) [설치]", "옥내형 분배기(분기기)"] },
  { code: "통신 7-12-3-2", name: "6 [설치]", spec: "", unit: "“", labors: {"통신설비공": 0.19, "보통인부": 0.19}, category: "device", page: 225, keywords: ["옥내형 분배기(분기기)", "6 [설치]"] },
  { code: "통신 7-12-3-2", name: "8 [설치]", spec: "", unit: "“", labors: {"통신설비공": 0.23, "보통인부": 0.23}, category: "device", page: 225, keywords: ["8 [설치]", "옥내형 분배기(분기기)"] },
  { code: "통신 7-12-3-2", name: "12 [설치]", spec: "", unit: "“", labors: {"통신설비공": 0.32, "보통인부": 0.32}, category: "device", page: 225, keywords: ["12 [설치]", "옥내형 분배기(분기기)"] },
  { code: "통신 7-12-3-2", name: "16 [설치]", spec: "", unit: "“", labors: {"통신설비공": 0.41, "보통인부": 0.41}, category: "device", page: 225, keywords: ["16 [설치]", "옥내형 분배기(분기기)"] },
  { code: "통신 7-12-3-2", name: "(8분기기) [설치]", spec: "", unit: "“", labors: {"통신설비공": 0.25, "보통인부": 0.25}, category: "device", page: 225, keywords: ["옥내형 분배기(분기기)", "(8분기기) [설치]"] },
  { code: "통신 7-12-4", name: "위성방송수신기", spec: "", unit: "대", labors: {"통신관련산업기사": 0.06, "통신설비공": 0.15}, category: "device", page: 225, keywords: ["위성방송수신기 등", "위성방송수신기"] },
  { code: "통신 7-12-4", name: "디지털 아날로그 신호변환기", spec: "", unit: "대", labors: {"통신관련산업기사": 0.06, "통신설비공": 0.15}, category: "device", page: 225, keywords: ["위성방송수신기 등", "디지털 아날로그 신호변환기"] },
  { code: "통신 7-12-5", name: "광 송신기", spec: "", unit: "대", labors: {"광케이블설치사": 0.07, "통신설비공": 0.07}, category: "device", page: 225, keywords: ["광 송·수신기 등", "광 송신기"] },
  { code: "통신 7-12-5", name: "광 증폭기", spec: "", unit: "대", labors: {"광케이블설치사": 0.06, "통신설비공": 0.06}, category: "device", page: 225, keywords: ["광 증폭기", "광 송·수신기 등"] },
  { code: "통신 7-13-1", name: "개별특성", spec: "RF레벨조정", unit: "CH", labors: {"통신관련산업기사": 0.08}, category: "device", page: 226, keywords: ["am 변조기", "개별특성", "rf레벨조정"] },
  { code: "통신 7-13-1", name: "시 험", spec: "비디오입력레벨시험", unit: "CH", labors: {"통신관련산업기사": 0.1}, category: "device", page: 226, keywords: ["am 변조기", "시 험", "비디오입력레벨시험"] },
  { code: "통신 7-13-1", name: "종합시험", spec: "오디오입력레벨시험", unit: "CH", labors: {"통신관련산업기사": 0.08}, category: "device", page: 226, keywords: ["am 변조기", "종합시험", "오디오입력레벨시험"] },
  { code: "통신 7-13-1", name: "종합시험", spec: "비디오특성시험", unit: "CH", labors: {"통신관련산업기사": 0.07}, category: "device", page: 226, keywords: ["am 변조기", "종합시험", "비디오특성시험"] },
  { code: "통신 7-13-1", name: "종합시험", spec: "오디오특성시험", unit: "CH", labors: {"통신관련산업기사": 0.11}, category: "device", page: 226, keywords: ["am 변조기", "종합시험", "오디오특성시험"] },
  { code: "통신 7-13-2", name: "장비설치", spec: "단말기및프린터설치", unit: "식", labors: {"통신설비공": 0.42, "보통인부": 0.38}, category: "device", page: 226, keywords: ["전송로 망감시 제어장치", "단말기및프린터설치", "장비설치"] },
  { code: "통신 7-13-2", name: "개별특성", spec: "상향신호처리기", unit: "대", labors: {"통신관련산업기사": 0.09}, category: "device", page: 226, keywords: ["전송로 망감시 제어장치", "개별특성", "상향신호처리기"] },
  { code: "통신 7-13-2", name: "시 험", spec: "하향신호처리기", unit: "개", labors: {"통신관련산업기사": 0.06}, category: "device", page: 226, keywords: ["하향신호처리기", "전송로 망감시 제어장치", "시 험"] },
  { code: "통신 7-13-2", name: "시 험", spec: "망감시모뎀", unit: "개", labors: {"통신관련산업기사": 0.06}, category: "device", page: 226, keywords: ["전송로 망감시 제어장치", "시 험", "망감시모뎀"] },
  { code: "통신 7-13-2", name: "시 험", spec: "․입출력장치기능시험", unit: "식", labors: {"통신관련산업기사": 0.04}, category: "device", page: 226, keywords: ["전송로 망감시 제어장치", "시 험", "․입출력장치기능시험"] },
  { code: "통신 7-13-2", name: "종합시험", spec: "자료입력", unit: "대", labors: {"통신관련산업기사": 0.06}, category: "device", page: 226, keywords: ["전송로 망감시 제어장치", "종합시험", "자료입력"] },
  { code: "통신 7-13-2", name: "종합시험", spec: "망감시프로그램테스트", unit: "식", labors: {"통신관련산업기사": 0.39}, category: "device", page: 226, keywords: ["망감시프로그램테스트", "전송로 망감시 제어장치", "종합시험"] },
  { code: "통신 7-13-2", name: "종합시험", spec: "일반기능및특수기능시험", unit: "식", labors: {"통신관련산업기사": 0.26}, category: "device", page: 226, keywords: ["전송로 망감시 제어장치", "종합시험", "일반기능및특수기능시험"] },
  { code: "통신 7-13-2", name: "종합시험", spec: "온라인(On-Line)시험", unit: "식", labors: {"통신관련산업기사": 0.17}, category: "device", page: 226, keywords: ["전송로 망감시 제어장치", "종합시험", "온라인(on-line)시험"] },
  { code: "통신 7-13-3", name: "집 중 경보장치", spec: "단말기및프린터설치", unit: "식", labors: {"통신설비공": 0.06}, category: "device", page: 227, keywords: ["집중경보 장치", "단말기및프린터설치", "집 중 경보장치"] },
  { code: "통신 7-13-3", name: "개별특성", spec: "경보반~전원배전반시험", unit: "구간", labors: {"통신관련산업기사": 0.08}, category: "device", page: 227, keywords: ["개별특성", "경보반~전원배전반시험", "집중경보 장치"] },
  { code: "통신 7-13-3", name: "시 험", spec: "경보반~Bay셀프간심선시험", unit: "개", labors: {"통신관련산업기사": 0.13}, category: "device", page: 227, keywords: ["경보반~bay셀프간심선시험", "시 험", "집중경보 장치"] },
  { code: "통신 7-13-3", name: "시 험", spec: "․입출력장치기능시험", unit: "식", labors: {"통신관련산업기사": 0.04}, category: "device", page: 227, keywords: ["시 험", "․입출력장치기능시험", "집중경보 장치"] },
  { code: "통신 7-13-3", name: "종합시험", spec: "집중경보프로그램테스트", unit: "식", labors: {"통신관련산업기사": 0.19}, category: "device", page: 227, keywords: ["종합시험", "집중경보 장치", "집중경보프로그램테스트"] },
  { code: "통신 7-13-3", name: "종합시험", spec: "데이터(Data)회선개통시험", unit: "구간", labors: {"통신관련산업기사": 0.09}, category: "device", page: 227, keywords: ["종합시험", "데이터(data)회선개통시험", "집중경보 장치"] },
  { code: "통신 7-13-3", name: "종합시험", spec: "온라인(On-Line)시험", unit: "식", labors: {"통신관련산업기사": 0.13}, category: "device", page: 227, keywords: ["종합시험", "온라인(on-line)시험", "집중경보 장치"] },
  { code: "통신 7-13-4-1", name: "개별특성", spec: "주파수응답특성시험", unit: "CH", labors: {"통신관련산업기사": 0.16}, category: "device", page: 227, keywords: ["개별특성", "fm 광전송장치(fm 복조기)", "주파수응답특성시험"] },
  { code: "통신 7-13-4-1", name: "시 험", spec: "비직선왜곡시험", unit: "CH", labors: {"통신관련산업기사": 0.07}, category: "device", page: 227, keywords: ["시 험", "fm 광전송장치(fm 복조기)", "비직선왜곡시험"] },
  { code: "통신 7-13-4-1", name: "종합시험", spec: "채널별신호대잡음비 (Video S/N비)", unit: "SYS", labors: {"통신관련산업기사": 0.07}, category: "device", page: 227, keywords: ["채널별신호대잡음비 (video s/n비)", "종합시험", "fm 광전송장치(fm 복조기)"] },
  { code: "통신 7-13-4-2", name: "개별특성", spec: "광원의파장측정", unit: "SYS", labors: {"통신관련기사": 0.66}, category: "device", page: 228, keywords: ["개별특성", "광원의파장측정", "am 광전송장치"] },
  { code: "통신 7-13-4-2", name: "시 험", spec: "광송신출력측정", unit: "SYS", labors: {"통신관련기사": 0.25}, category: "device", page: 228, keywords: ["시 험", "광송신출력측정", "am 광전송장치"] },
  { code: "통신 7-13-4-2", name: "시 험", spec: "광수신감도측정", unit: "SYS", labors: {"통신관련기사": 0.26}, category: "device", page: 228, keywords: ["시 험", "광수신감도측정", "am 광전송장치"] },
  { code: "통신 7-13-4-2", name: "종합시험", spec: "주파수응답시험", unit: "SYS", labors: {"통신관련산업기사": 0.69}, category: "device", page: 228, keywords: ["종합시험", "주파수응답시험", "am 광전송장치"] },
  { code: "통신 7-13-5", name: "개별특성", spec: "재송신채널특성시험", unit: "CH", labors: {"통신관련산업기사": 0.09}, category: "device", page: 228, keywords: ["fm 음악변조 및 중계기", "개별특성", "재송신채널특성시험"] },
  { code: "통신 7-13-5", name: "시 험", spec: "자주방송기저대역특성시험", unit: "CH", labors: {"통신관련산업기사": 0.08}, category: "device", page: 228, keywords: ["fm 음악변조 및 중계기", "시 험", "자주방송기저대역특성시험"] },
  { code: "통신 7-13-5", name: "종합시험", spec: "Audio특성시험(Mono방식)", unit: "CH", labors: {"통신관련산업기사": 0.08}, category: "device", page: 228, keywords: ["fm 음악변조 및 중계기", "종합시험", "audio특성시험(mono방식)"] },
  { code: "통신 7-13-6", name: "종 합", spec: "․영상반송파의신호레벨", unit: "구간", labors: {"통신관련산업기사": 0.09, "통신설비공": 0.09}, category: "device", page: 229, keywords: ["종합유선전송로 최종시험(end-to-end)", "종 합", "․영상반송파의신호레벨"] },
  { code: "통신 7-13-6", name: "유 선", spec: "․영상반송파의레벨안정도", unit: "구간", labors: {"통신관련산업기사": 0.02}, category: "device", page: 229, keywords: ["유 선", "․영상반송파의레벨안정도", "종합유선전송로 최종시험(end-to-end)"] },
  { code: "통신 7-13-6", name: "전송로", spec: "․채널간영상반송파의레벨차", unit: "구간", labors: {"통신관련산업기사": 0.02}, category: "device", page: 229, keywords: ["종합유선전송로 최종시험(end-to-end)", "․채널간영상반송파의레벨차", "전송로"] },
  { code: "통신 7-13-6", name: "최 종", spec: "․음성반송파의영상반송파에대한레벨차", unit: "구간", labors: {"통신관련산업기사": 0.02}, category: "device", page: 229, keywords: ["종합유선전송로 최종시험(end-to-end)", "최 종", "․음성반송파의영상반송파에대한레벨차"] },
  { code: "통신 7-13-6", name: "시 험", spec: "(제1음성파기준)", unit: "구간", labors: {"통신관련산업기사": 0.02}, category: "device", page: 229, keywords: ["종합유선전송로 최종시험(end-to-end)", "시 험", "(제1음성파기준)"] },
  { code: "통신 7-13-6", name: "시 험", spec: "․영상신호주파수대역특성", unit: "구간", labors: {"통신관련산업기사": 0.03}, category: "device", page: 229, keywords: ["종합유선전송로 최종시험(end-to-end)", "시 험", "․영상신호주파수대역특성"] },
  { code: "통신 7-13-6", name: "시 험", spec: "․영상반송파대잡음비(C/N비)", unit: "구간", labors: {"통신관련산업기사": 0.03}, category: "device", page: 229, keywords: ["종합유선전송로 최종시험(end-to-end)", "시 험", "․영상반송파대잡음비(c/n비)"] },
  { code: "통신 7-13-6", name: "시 험", spec: "․비트방해비(D/U비)", unit: "구간", labors: {"통신관련산업기사": 0.03}, category: "device", page: 229, keywords: ["종합유선전송로 최종시험(end-to-end)", "시 험", "․비트방해비(d/u비)"] },
  { code: "통신 7-13-6", name: "시 험", spec: "․혼변조도", unit: "구간", labors: {"통신관련산업기사": 0.03}, category: "device", page: 229, keywords: ["종합유선전송로 최종시험(end-to-end)", "시 험", "․혼변조도"] },
  { code: "통신 7-13-6", name: "시 험", spec: "․전원험변조도", unit: "구간", labors: {"통신관련산업기사": 0.03}, category: "device", page: 229, keywords: ["종합유선전송로 최종시험(end-to-end)", "시 험", "․전원험변조도"] },
  { code: "통신 7-13-6", name: "시 험", spec: "․지연전달영상반송파에의한방해", unit: "구간", labors: {"통신관련산업기사": 0.02}, category: "device", page: 229, keywords: ["종합유선전송로 최종시험(end-to-end)", "시 험", "․지연전달영상반송파에의한방해"] },
  { code: "통신 7-13-6", name: "시 험", spec: "․영상반송파의주파수편차", unit: "구간", labors: {"통신관련산업기사": 0.03}, category: "device", page: 229, keywords: ["․영상반송파의주파수편차", "시 험", "종합유선전송로 최종시험(end-to-end)"] },
  { code: "통신 7-13-6", name: "시 험", spec: "․영상반송파와음성반송파간의간격", unit: "구간", labors: {"통신관련산업기사": 0.03, "보통인부": 0.03}, category: "device", page: 229, keywords: ["종합유선전송로 최종시험(end-to-end)", "시 험", "․영상반송파와음성반송파간의간격"] },
  { code: "통신 7-13-6", name: "시 험", spec: "․수신단자간결합도", unit: "구간", labors: {"통신관련산업기사": 0.04, "보통인부": 0.04}, category: "device", page: 229, keywords: ["종합유선전송로 최종시험(end-to-end)", "시 험", "․수신단자간결합도"] },
  { code: "통신 7-13-6", name: "시 험", spec: "․누설전자파", unit: "구간", labors: {"통신관련산업기사": 0.03}, category: "device", page: 229, keywords: ["종합유선전송로 최종시험(end-to-end)", "시 험", "․누설전자파"] },
  { code: "통신 7-13-7", name: "대역통과여파기", spec: "", unit: "개", labors: {"무선안테나공": 0.11, "통신설비공": 0.11}, category: "device", page: 230, keywords: ["각종 휠터 및 기타설비", "대역통과여파기"] },
  { code: "통신 7-13-7", name: "다이플렉서 휠터 (CATV용 19″Rack타입)", spec: "", unit: "개", labors: {"통신설비공": 0.52}, category: "device", page: 230, keywords: ["각종 휠터 및 기타설비", "다이플렉서 휠터 (catv용 19″rack타입)"] },
  { code: "통신 7-13-7", name: "채널트랩(낫치휠터)", spec: "", unit: "개", labors: {"무선안테나공": 0.11, "통신설비공": 0.11}, category: "device", page: 230, keywords: ["각종 휠터 및 기타설비", "채널트랩(낫치휠터)"] },
  { code: "통신 7-13-7", name: "레벨셑터", spec: "", unit: "개", labors: {"무선안테나공": 0.65, "통신설비공": 0.65}, category: "device", page: 230, keywords: ["각종 휠터 및 기타설비", "레벨셑터"] },
  { code: "통신 7-13-7", name: "채널컨버터", spec: "", unit: "개", labors: {"무선안테나공": 0.19, "통신설비공": 0.19}, category: "device", page: 230, keywords: ["각종 휠터 및 기타설비", "채널컨버터"] },
  { code: "통신 7-13-7", name: "보호기", spec: "", unit: "개", labors: {"통신내선공": 0.2}, category: "device", page: 230, keywords: ["각종 휠터 및 기타설비", "보호기"] },
  { code: "통신 7-13-7", name: "종단저항(75Ω)", spec: "", unit: "개", labors: {"통신설비공": 0.02}, category: "device", page: 230, keywords: ["각종 휠터 및 기타설비", "종단저항(75ω)"] },
  { code: "통신 7-13-8", name: "절 체 장 치 설 치", spec: "", unit: "대", labors: {"통신설비공": 0.06, "보통인부": 0.09}, category: "device", page: 230, keywords: ["절체장치(aps, automatic protection switching)", "절 체 장 치 설 치"] },
  { code: "통신 7-13-8", name: "출 력 레 벨 측 정", spec: "", unit: "대", labors: {"통신관련산업기사": 0.07}, category: "device", page: 230, keywords: ["출 력 레 벨 측 정", "절체장치(aps, automatic protection switching)"] },
  { code: "통신 7-13-8", name: "수 신 감 도 측 정", spec: "", unit: "대", labors: {"통신관련산업기사": 0.07}, category: "device", page: 230, keywords: ["절체장치(aps, automatic protection switching)", "수 신 감 도 측 정"] },
  { code: "통신 7-13-8", name: "시 스 템 절 체 시 험", spec: "", unit: "대", labors: {"통신관련기사": 0.06, "통신관련산업기사": 0.11}, category: "device", page: 230, keywords: ["시 스 템 절 체 시 험", "절체장치(aps, automatic protection switching)"] },
  { code: "통신 7-13-9", name: "ONU장비설치", spec: "", unit: "대", labors: {"통신설비공": 0.33, "보통인부": 0.7}, category: "device", page: 231, keywords: ["옥외형 광․수신장치(onu, optical network unit)", "onu장비설치"] },
  { code: "통신 7-13-9", name: "개별 특성 시험", spec: "광원파장시험", unit: "SYS", labors: {"통신관련기사": 0.47}, category: "device", page: 231, keywords: ["옥외형 광․수신장치(onu, optical network unit)", "광원파장시험", "개별 특성 시험"] },
  { code: "통신 7-13-9", name: "공통 시험", spec: "상태감시시험", unit: "SYS", labors: {"통신관련기사": 0.15}, category: "device", page: 231, keywords: ["공통 시험", "옥외형 광․수신장치(onu, optical network unit)", "상태감시시험"] },
  { code: "통신 7-13-9", name: "종합특성시험(주파수응답시험)", spec: "", unit: "SYS", labors: {"통신관련기사": 0.43, "통신관련산업기사": 0.31}, category: "device", page: 231, keywords: ["종합특성시험(주파수응답시험)", "옥외형 광․수신장치(onu, optical network unit)"] },
  { code: "통신 7-13-10", name: "CT-Box", spec: "", unit: "대", labors: {"통신설비공": 0.21, "보통인부": 0.4}, category: "device", page: 231, keywords: ["ct-box", "페디스탈 설치(ct-box)"] },
  { code: "통신 7-13-11", name: "축전지 내장형", spec: "", unit: "조", labors: {"통신설비공": 0.97, "보통인부": 0.79}, category: "device", page: 232, keywords: ["축전지 내장형", "동축케이블 급전용 전원공급장치"] },
  { code: "통신 7-13-11", name: "축전지 비내장형", spec: "", unit: "조", labors: {"통신설비공": 0.3, "보통인부": 0.44}, category: "device", page: 232, keywords: ["축전지 비내장형", "동축케이블 급전용 전원공급장치"] },
  { code: "통신 7-13-11", name: "전력삽입기", spec: "", unit: "개", labors: {"통신설비공": 0.13, "보통인부": 0.13}, category: "device", page: 232, keywords: ["동축케이블 급전용 전원공급장치", "전력삽입기"] },
  { code: "통신 8-1-1", name: "광전변환장치", spec: "", unit: "대", labors: {"광케이블설치사": 0.07, "통신설비공": 0.07}, category: "device", page: 235, keywords: ["광전변환장치", "네트워크 설비(공통)"] },
  { code: "통신 8-1-1", name: "단말기(PC)설치", spec: "", unit: "대", labors: {"S/W시험사": 0.21, "H/W시험사": 0.1}, category: "device", page: 235, keywords: ["단말기(pc)설치", "네트워크 설비(공통)"] },
  { code: "통신 8-1-1", name: "PC용 LAN Card설치", spec: "", unit: "대", labors: {"통신설비공": 0.14, "H/W시험사": 0.14}, category: "device", page: 235, keywords: ["pc용 lan card설치", "네트워크 설비(공통)"] },
  { code: "통신 8-1-1", name: "PC용 LAN S/W install (Config & Test)", spec: "", unit: "대", labors: {"통신관련기사": 0.1, "S/W시험사": 0.28}, category: "device", page: 235, keywords: ["pc용 lan s/w install (config & test)", "네트워크 설비(공통)"] },
  { code: "통신 8-1-1", name: "Transceiver설치", spec: "", unit: "대", labors: {"통신설비공": 0.2, "보통인부": 0.14}, category: "device", page: 235, keywords: ["transceiver설치", "네트워크 설비(공통)"] },
  { code: "통신 8-1-1", name: "DSU/MODEM설치 및 기능시험(입‧출력 Test)", spec: "", unit: "대", labors: {"S/W시험사": 0.38, "H/W시험사": 0.23}, category: "device", page: 235, keywords: ["dsu/modem설치 및 기능시험(입‧출력 test)", "네트워크 설비(공통)"] },
  { code: "통신 8-1-1", name: "Box Type 장비설치 (샤시, Slot의 일체형)", spec: "", unit: "대", labors: {"통신관련산업기사": 0.42, "통신설비공": 0.12, "S/W시험사": 0.66}, category: "device", page: 235, keywords: ["네트워크 설비(공통)", "box type 장비설치 (샤시, slot의 일체형)"] },
  { code: "통신 8-1-1", name: "서버", spec: "본체 설치", unit: "식", labors: {"통신설비공": 0.33, "H/W시험사": 0.5}, category: "device", page: 235, keywords: ["서버", "네트워크 설비(공통)", "본체 설치"] },
  { code: "통신 8-1-1", name: "(Sever)", spec: "OS/Patch설치", unit: "대", labors: {"S/W시험사": 0.77, "H/W시험사": 0.85}, category: "device", page: 235, keywords: ["os/patch설치", "네트워크 설비(공통)", "(sever)"] },
  { code: "통신 8-1-1", name: "(Sever)", spec: "Device 설치", unit: "식", labors: {"S/W시험사": 0.17, "H/W시험사": 0.25}, category: "device", page: 235, keywords: ["네트워크 설비(공통)", "device 설치", "(sever)"] },
  { code: "통신 8-1-1", name: "(Sever)", spec: "Data 백업", unit: "식", labors: {"S/W시험사": 0.46, "H/W시험사": 0.33}, category: "device", page: 235, keywords: ["data 백업", "네트워크 설비(공통)", "(sever)"] },
  { code: "통신 8-1-1", name: "(Sever)", spec: "SW Install", unit: "식", labors: {"S/W시험사": 0.48}, category: "device", page: 235, keywords: ["sw install", "네트워크 설비(공통)", "(sever)"] },
  { code: "통신 8-1-1", name: "(Sever)", spec: "보안정책적용/", unit: "식", labors: {"S/W시험사": 1.12}, category: "device", page: 235, keywords: ["네트워크 설비(공통)", "보안정책적용/", "(sever)"] },
  { code: "통신 8-1-1", name: "(Sever)", spec: "환경설정", unit: "식", labors: {"S/W시험사": 0.88}, category: "device", page: 235, keywords: ["환경설정", "네트워크 설비(공통)", "(sever)"] },
  { code: "통신 8-1-1", name: "(Sever)", spec: "Log 분석", unit: "식", labors: {"S/W시험사": 0.56, "H/W시험사": 0.31}, category: "device", page: 235, keywords: ["log 분석", "네트워크 설비(공통)", "(sever)"] },
  { code: "통신 8-1-1", name: "더미 허브", spec: "", unit: "대", labors: {"S/W시험사": 0.09, "H/W시험사": 0.09}, category: "device", page: 235, keywords: ["네트워크 설비(공통)", "더미 허브"] },
  { code: "통신 8-1-1", name: "장비설치", spec: "Box(샤시)설치", unit: "대", labors: {"통신설비공": 0.23, "보통인부": 0.16}, category: "device", page: 235, keywords: ["네트워크 설비(공통)", "장비설치", "box(샤시)설치"] },
  { code: "통신 8-1-1", name: "(Slot", spec: "Card설치(Module)", unit: "대", labors: {"통신설비공": 0.16, "H/W시험사": 0.26}, category: "device", page: 235, keywords: ["card설치(module)", "(slot", "네트워크 설비(공통)"] },
  { code: "통신 8-1-1", name: "Type)", spec: "S/W Install", unit: "대", labors: {"통신관련산업기사": 0.26, "S/W시험사": 1.46}, category: "device", page: 235, keywords: ["s/w install", "네트워크 설비(공통)", "type)"] },
  { code: "통신 8-1-1", name: "Router", spec: "설치 및 Control", unit: "대", labors: {"S/W시험사": 1.12, "H/W시험사": 0.8}, category: "device", page: 236, keywords: ["설치 및 control", "router", "네트워크 설비(공통)"] },
  { code: "통신 8-1-1", name: "Switching", spec: "Consol 운용시험", unit: "대", labors: {"S/W시험사": 0.88}, category: "device", page: 236, keywords: ["consol 운용시험", "네트워크 설비(공통)", "switching"] },
  { code: "통신 8-1-1", name: "Intelligent", spec: "S/W설치 및", unit: "대", labors: {"S/W시험사": 1.28, "H/W시험사": 1.08}, category: "device", page: 236, keywords: ["s/w설치 및", "intelligent", "네트워크 설비(공통)"] },
  { code: "통신 8-1-1", name: "ATM", spec: "설치 및 Control", unit: "대", labors: {"S/W시험사": 1.08, "H/W시험사": 1.1}, category: "device", page: 236, keywords: ["atm", "설치 및 control", "네트워크 설비(공통)"] },
  { code: "통신 8-1-1", name: "Switch", spec: "Consol 운용시험", unit: "대", labors: {"S/W시험사": 1.0}, category: "device", page: 236, keywords: ["consol 운용시험", "switch", "네트워크 설비(공통)"] },
  { code: "통신 8-1-1", name: "장 비", spec: "S/W설치 및", unit: "대", labors: {"S/W시험사": 1.4}, category: "device", page: 236, keywords: ["장 비", "s/w설치 및", "네트워크 설비(공통)"] },
  { code: "통신 8-1-1", name: "Set up", spec: "기본 기능시험", unit: "대", labors: {"S/W시험사": 1.92, "H/W시험사": 1.32}, category: "device", page: 236, keywords: ["set up", "기본 기능시험", "네트워크 설비(공통)"] },
  { code: "통신 8-1-2", name: "방화벽(Firewall)", spec: "", unit: "대", labors: {"S/W시험사": 0.42, "H/W시험사": 0.42}, category: "device", page: 237, keywords: ["정보보호장비", "방화벽(firewall)"] },
  { code: "통신 8-1-2", name: "무선침입방지 시스템(WIPS)", spec: "주장치", unit: "대", labors: {"S/W시험사": 0.74, "H/W시험사": 0.74}, category: "device", page: 237, keywords: ["주장치", "정보보호장비", "무선침입방지 시스템(wips)"] },
  { code: "통신 8-1-2", name: "통합보안장비(UTM)", spec: "", unit: "대", labors: {"S/W시험사": 0.48, "H/W시험사": 0.48}, category: "device", page: 237, keywords: ["정보보호장비", "통합보안장비(utm)"] },
  { code: "통신 8-1-3", name: "AP서버", spec: "본체 설치", unit: "대", labors: {"H/W시험사": 0.42, "통신설비공": 0.42}, category: "device", page: 237, keywords: ["공간 및 지리정보시스템", "ap서버", "본체 설치"] },
  { code: "통신 8-1-3", name: "AP서버", spec: "프로그램 설치 및 설정", unit: "대", labors: {"S/W시험사": 4.96, "H/W시험사": 1.65}, category: "device", page: 237, keywords: ["프로그램 설치 및 설정", "ap서버", "공간 및 지리정보시스템"] },
  { code: "통신 8-1-3", name: "DB/DW서버", spec: "본체 설치", unit: "개", labors: {"H/W시험사": 0.42, "통신설비공": 0.42}, category: "device", page: 237, keywords: ["db/dw서버", "공간 및 지리정보시스템", "본체 설치"] },
  { code: "통신 8-1-3", name: "DB/DW서버", spec: "프로그램 설치 및 설정", unit: "개", labors: {"S/W시험사": 4.65, "H/W시험사": 1.55}, category: "device", page: 237, keywords: ["프로그램 설치 및 설정", "db/dw서버", "공간 및 지리정보시스템"] },
  { code: "통신 8-1-3", name: "연계서버", spec: "본체 설치", unit: "개", labors: {"H/W시험사": 0.42, "통신설비공": 0.42}, category: "device", page: 237, keywords: ["연계서버", "공간 및 지리정보시스템", "본체 설치"] },
  { code: "통신 8-1-3", name: "연계서버", spec: "프로그램 설치 및 설정", unit: "개", labors: {"S/W시험사": 4.4, "H/W시험사": 1.47}, category: "device", page: 237, keywords: ["연계서버", "공간 및 지리정보시스템", "프로그램 설치 및 설정"] },
  { code: "통신 8-1-4", name: "장비 설치", spec: "", unit: "대", labors: {"S/W시험사": 1.44, "H/W시험사": 1.44}, category: "device", page: 238, keywords: ["장비 설치", "네트워크 트래픽관리시스템"] },
  { code: "통신 8-1-4", name: "장비연동 및 운용시험", spec: "", unit: "대", labors: {"S/W시험사": 2.08, "H/W시험사": 2.08}, category: "device", page: 238, keywords: ["장비연동 및 운용시험", "네트워크 트래픽관리시스템"] },
  { code: "통신 8-1-5", name: "VPN 설치", spec: "", unit: "대", labors: {"S/W시험사": 0.39, "H/W시험사": 0.39}, category: "device", page: 238, keywords: ["vpn 설치", "가상사설망(vpn)장치"] },
  { code: "통신 8-1-6", name: "IP 전화기", spec: "", unit: "대", labors: {"통신설비공": 0.15}, category: "device", page: 238, keywords: ["ip 및 키폰 전화기", "ip 전화기"] },
  { code: "통신 8-1-6", name: "키폰 전화기", spec: "", unit: "대", labors: {"통신설비공": 0.1}, category: "device", page: 238, keywords: ["ip 및 키폰 전화기", "키폰 전화기"] },
  { code: "통신 8-1-7", name: "판넬", spec: "외벽", unit: "㎡", labors: {"통신외선공": 0.15, "통신설비공": 0.15, "특별인부": 0.08}, category: "device", page: 239, keywords: ["외벽", "ict 밀폐장치(containment)", "판넬"] },
  { code: "통신 8-1-7", name: "출입문", spec: "", unit: "세트", labors: {"통신외선공": 1.13, "통신설비공": 1.13, "특별인부": 0.56}, category: "device", page: 239, keywords: ["출입문", "ict 밀폐장치(containment)"] },
  { code: "통신 8-2-1-1", name: "기기매입박스 점검 및 선로 기능시험", spec: "", unit: "개소", labors: {"통신설비공": 0.25, "통신내선공": 0.25}, category: "device", page: 240, keywords: ["홈서버(home server)", "기기매입박스 점검 및 선로 기능시험"] },
  { code: "통신 8-2-1-1", name: "홈서버 설치", spec: "", unit: "식", labors: {"통신설비공": 0.16, "통신내선공": 0.16}, category: "device", page: 240, keywords: ["홈서버(home server)", "홈서버 설치"] },
  { code: "통신 8-2-1-1", name: "터미널보드 설치 및 결선", spec: "", unit: "개소", labors: {"통신설비공": 0.34, "통신내선공": 0.34}, category: "device", page: 240, keywords: ["홈서버(home server)", "터미널보드 설치 및 결선"] },
  { code: "통신 8-2-1-1", name: "IP 입력 및 기기 Setting", spec: "", unit: "대", labors: {"통신관련산업기사": 0.1}, category: "device", page: 240, keywords: ["홈서버(home server)", "ip 입력 및 기기 setting"] },
  { code: "통신 8-2-1-1", name: "장치별 기능 및 종합시험", spec: "", unit: "세대", labors: {"통신관련산업기사": 0.73, "통신설비공": 0.85, "통신내선공": 0.19, "S/W시험사": 0.6}, category: "device", page: 240, keywords: ["장치별 기능 및 종합시험", "홈서버(home server)"] },
  { code: "통신 8-2-1-2", name: "기기매입박스 점검 및 선로기능시험", spec: "", unit: "개소", labors: {"통신설비공": 0.25, "통신내선공": 0.25}, category: "device", page: 241, keywords: ["세대 wall pad(터치스크린)", "기기매입박스 점검 및 선로기능시험"] },
  { code: "통신 8-2-1-2", name: "기기 설치", spec: "", unit: "식", labors: {"통신설비공": 0.14, "통신내선공": 0.14}, category: "device", page: 241, keywords: ["세대 wall pad(터치스크린)", "기기 설치"] },
  { code: "통신 8-2-1-2", name: "터미널보드 설치 및 결선", spec: "", unit: "개소", labors: {"통신설비공": 0.31, "통신내선공": 0.31}, category: "device", page: 241, keywords: ["세대 wall pad(터치스크린)", "터미널보드 설치 및 결선"] },
  { code: "통신 8-2-1-2", name: "IP 입력 및 기기 Setting", spec: "", unit: "대", labors: {"통신관련산업기사": 0.06}, category: "device", page: 241, keywords: ["세대 wall pad(터치스크린)", "ip 입력 및 기기 setting"] },
  { code: "통신 8-2-1-2", name: "장치별 기능 및 종합시험", spec: "", unit: "세대", labors: {"통신관련산업기사": 0.5, "통신설비공": 0.63, "통신내선공": 0.25, "S/W시험사": 0.19}, category: "device", page: 241, keywords: ["세대 wall pad(터치스크린)", "장치별 기능 및 종합시험"] },
  { code: "통신 8-2-1-3", name: "무선 Home PAD 설치", spec: "", unit: "식", labors: {"통신설비공": 0.05, "통신내선공": 0.05}, category: "device", page: 242, keywords: ["무선 home pad 설치", "무선 home pad"] },
  { code: "통신 8-2-1-3", name: "IP 입력 및 기기 Setting", spec: "", unit: "대", labors: {"통신관련산업기사": 0.1}, category: "device", page: 242, keywords: ["ip 입력 및 기기 setting", "무선 home pad"] },
  { code: "통신 8-2-1-3", name: "Configuration 작업", spec: "", unit: "대", labors: {"통신관련산업기사": 0.06}, category: "device", page: 242, keywords: ["configuration 작업", "무선 home pad"] },
  { code: "통신 8-2-1-3", name: "장치별 기능 및 종합시험", spec: "", unit: "세대", labors: {"통신관련산업기사": 0.5, "통신설비공": 0.94, "통신내선공": 0.56, "S/W시험사": 0.19}, category: "device", page: 242, keywords: ["장치별 기능 및 종합시험", "무선 home pad"] },
  { code: "통신 8-2-1-4", name: "세대 지문인식기 설치", spec: "", unit: "식", labors: {"통신설비공": 0.1, "통신내선공": 0.1}, category: "device", page: 243, keywords: ["세대 지문인식기 설치", "세대 지문인식기"] },
  { code: "통신 8-2-1-4", name: "선로 Test 및 결선", spec: "", unit: "개소", labors: {"통신설비공": 0.36, "통신내선공": 0.36}, category: "device", page: 243, keywords: ["선로 test 및 결선", "세대 지문인식기"] },
  { code: "통신 8-2-1-4", name: "장치별 기능 및 종합시험", spec: "", unit: "세대", labors: {"통신관련산업기사": 0.3, "통신설비공": 0.46, "통신내선공": 0.17}, category: "device", page: 243, keywords: ["장치별 기능 및 종합시험", "세대 지문인식기"] },
  { code: "통신 8-2-1-4", name: "지문등록", spec: "", unit: "세대", labors: {"통신관련산업기사": 0.13, "통신설비공": 0.19}, category: "device", page: 243, keywords: ["지문등록", "세대 지문인식기"] },
  { code: "통신 8-2-1-5", name: "출입문 타공", spec: "", unit: "개소", labors: {"통신설비공": 0.15, "통신내선공": 0.15}, category: "device", page: 243, keywords: ["세대 전기정 door lock", "출입문 타공"] },
  { code: "통신 8-2-1-5", name: "세대 전기정 Door Lock 설치 및 힌지 고정", spec: "", unit: "식", labors: {"통신설비공": 0.15, "통신내선공": 0.15}, category: "device", page: 243, keywords: ["세대 전기정 door lock", "세대 전기정 door lock 설치 및 힌지 고정"] },
  { code: "통신 8-2-1-5", name: "선로 Test 및 결선", spec: "", unit: "개소", labors: {"통신설비공": 0.31, "통신내선공": 0.31}, category: "device", page: 243, keywords: ["선로 test 및 결선", "세대 전기정 door lock"] },
  { code: "통신 8-2-1-5", name: "장치별 기능 및 종합시험", spec: "", unit: "세대", labors: {"통신관련산업기사": 0.15, "통신설비공": 0.15}, category: "device", page: 243, keywords: ["장치별 기능 및 종합시험", "세대 전기정 door lock"] },
  { code: "통신 8-2-1-6", name: "무선 수신기 설치", spec: "", unit: "식", labors: {"통신설비공": 0.16, "통신내선공": 0.16}, category: "device", page: 244, keywords: ["무선 수신기 설치", "무선 수신기(세대 비상용)"] },
  { code: "통신 8-2-1-6", name: "선로 Test 및 결선", spec: "", unit: "개소", labors: {"통신설비공": 0.29, "통신내선공": 0.29}, category: "device", page: 244, keywords: ["선로 test 및 결선", "무선 수신기(세대 비상용)"] },
  { code: "통신 8-2-1-6", name: "장치별 기능 및 종합시험", spec: "", unit: "세대", labors: {"통신관련산업기사": 0.13, "통신설비공": 0.32, "통신내선공": 0.13}, category: "device", page: 244, keywords: ["장치별 기능 및 종합시험", "무선 수신기(세대 비상용)"] },
  { code: "통신 8-2-1-7", name: "기기매입박스 점검 및 선로기능시험", spec: "", unit: "개소", labors: {"통신설비공": 0.42, "통신내선공": 0.42}, category: "device", page: 244, keywords: ["현관공동기(벽부형)", "기기매입박스 점검 및 선로기능시험"] },
  { code: "통신 8-2-1-7", name: "현관공동기 설치", spec: "", unit: "식", labors: {"통신설비공": 0.13, "통신내선공": 0.13}, category: "device", page: 244, keywords: ["현관공동기(벽부형)", "현관공동기 설치"] },
  { code: "통신 8-2-1-7", name: "IP 입력 및 카드리더 세팅", spec: "", unit: "세대", labors: {"통신관련산업기사": 0.19, "통신설비공": 0.19}, category: "device", page: 244, keywords: ["현관공동기(벽부형)", "ip 입력 및 카드리더 세팅"] },
  { code: "통신 8-2-1-7", name: "장치별 기능 및 종합시험", spec: "", unit: "세대", labors: {"통신관련산업기사": 0.3, "통신설비공": 0.42, "통신내선공": 0.36}, category: "device", page: 244, keywords: ["현관공동기(벽부형)", "장치별 기능 및 종합시험"] },
  { code: "통신 8-2-1-8", name: "기기매입박스 점검 및 선로기능시험", spec: "", unit: "개소", labors: {"통신설비공": 0.32, "통신내선공": 0.32}, category: "device", page: 245, keywords: ["경비실기", "기기매입박스 점검 및 선로기능시험"] },
  { code: "통신 8-2-1-8", name: "경비실기 설치", spec: "", unit: "식", labors: {"통신설비공": 0.05, "통신내선공": 0.05}, category: "device", page: 245, keywords: ["경비실기 설치", "경비실기"] },
  { code: "통신 8-2-1-8", name: "IP 입력 및 기기 세팅", spec: "", unit: "세대", labors: {"통신관련산업기사": 0.1}, category: "device", page: 245, keywords: ["ip 입력 및 기기 세팅", "경비실기"] },
  { code: "통신 8-2-1-8", name: "장치별 기능 및 종합시험", spec: "", unit: "세대", labors: {"통신관련산업기사": 0.25, "통신설비공": 0.38, "통신내선공": 0.32}, category: "device", page: 245, keywords: ["장치별 기능 및 종합시험", "경비실기"] },
  { code: "통신 8-2-2-1", name: "커넥터 설치", spec: "", unit: "개소", labors: {"통신관련산업기사": 0.15, "통신설비공": 0.15}, category: "device", page: 245, keywords: ["커넥터 설치", "주방 tv"] },
  { code: "통신 8-2-2-1", name: "주방 TV 설치", spec: "", unit: "식", labors: {"통신관련산업기사": 0.05, "통신설비공": 0.05}, category: "device", page: 245, keywords: ["주방 tv", "주방 tv 설치"] },
  { code: "통신 8-2-2-1", name: "시 험(Test)", spec: "", unit: "세대", labors: {"통신관련산업기사": 0.04, "통신설비공": 0.04}, category: "device", page: 245, keywords: ["주방 tv", "시 험(test)"] },
  { code: "통신 8-2-2-1", name: "방음 코킹 작업", spec: "", unit: "개소", labors: {"통신설비공": 0.03}, category: "device", page: 245, keywords: ["방음 코킹 작업", "주방 tv"] },
  { code: "통신 8-2-2-1", name: "주방 라디오 설치", spec: "", unit: "식", labors: {"통신설비공": 0.05}, category: "device", page: 246, keywords: ["주방 라디오 설치", "주방 tv"] },
  { code: "통신 8-2-2-3", name: "화장실용 비상콜 설치", spec: "", unit: "식", labors: {"통신설비공": 0.14}, category: "device", page: 246, keywords: ["화장실용 비상콜 설치", "화장실용 비상콜"] },
  { code: "통신 8-2-2-3", name: "시 험(Test)", spec: "", unit: "세대", labors: {"통신설비공": 0.04}, category: "device", page: 246, keywords: ["시 험(test)", "화장실용 비상콜"] },
  { code: "통신 8-2-2-4", name: "세대 스피커 설치", spec: "", unit: "개", labors: {"통신설비공": 0.13}, category: "device", page: 246, keywords: ["세대 스피커 설치", "세대 스피커"] },
  { code: "통신 8-2-2-4", name: "시 험(Test)", spec: "", unit: "세대", labors: {"통신설비공": 0.03}, category: "device", page: 246, keywords: ["세대 스피커", "시 험(test)"] },
  { code: "통신 8-2-2-5", name: "스피커 Outlet 설치", spec: "", unit: "개", labors: {"통신설비공": 0.15}, category: "device", page: 247, keywords: ["스피커 outlet", "스피커 outlet 설치"] },
  { code: "통신 8-2-2-6", name: "비디오폰 설치", spec: "", unit: "대", labors: {"통신설비공": 0.25}, category: "device", page: 247, keywords: ["비디오폰", "비디오폰 설치"] },
  { code: "통신 8-2-3", name: "제어부 설치", spec: "", unit: "열", labors: {"H/W시험사": 0.25, "통신설비공": 0.25}, category: "device", page: 247, keywords: ["제어부 설치", "무인택배시스템"] },
  { code: "통신 8-2-3", name: "보관함 설치", spec: "", unit: "“", labors: {"H/W시험사": 0.15, "통신설비공": 0.15}, category: "device", page: 247, keywords: ["무인택배시스템", "보관함 설치"] },
  { code: "통신 8-3-1", name: "리더기부", spec: "", unit: "대", labors: {"통신설비공": 1.17}, category: "device", page: 248, keywords: ["13.56mhz대역 리더기 및 안테나", "리더기부"] },
  { code: "통신 8-3-1", name: "안 테 나", spec: "", unit: "대", labors: {"통신케이블공": 0.23, "통신설비공": 0.43}, category: "device", page: 248, keywords: ["안 테 나", "13.56mhz대역 리더기 및 안테나"] },
  { code: "통신 8-3-1", name: "경 광 등", spec: "", unit: "개", labors: {"통신케이블공": 0.21, "통신설비공": 0.26}, category: "device", page: 248, keywords: ["13.56mhz대역 리더기 및 안테나", "경 광 등"] },
  { code: "통신 8-3-1", name: "시 험", spec: "", unit: "세트", labors: {"통신관련기사": 0.37, "S/W시험사": 0.64}, category: "device", page: 248, keywords: ["13.56mhz대역 리더기 및 안테나", "시 험"] },
  { code: "통신 8-3-2", name: "리더기부", spec: "", unit: "대", labors: {"통신설비공": 1.19}, category: "device", page: 248, keywords: ["리더기부", "900mhz대역 리더기 및 안테나"] },
  { code: "통신 8-3-2", name: "안 테 나", spec: "", unit: "조", labors: {"통신케이블공": 0.67, "통신설비공": 0.27}, category: "device", page: 248, keywords: ["안 테 나", "900mhz대역 리더기 및 안테나"] },
  { code: "통신 8-3-2", name: "경 광 등", spec: "", unit: "개", labors: {"통신케이블공": 0.21, "통신설비공": 0.26}, category: "device", page: 248, keywords: ["900mhz대역 리더기 및 안테나", "경 광 등"] },
  { code: "통신 8-3-2", name: "센 서", spec: "", unit: "개", labors: {"통신케이블공": 0.21, "통신설비공": 0.18}, category: "device", page: 248, keywords: ["센 서", "900mhz대역 리더기 및 안테나"] },
  { code: "통신 8-3-2", name: "전 광 판", spec: "", unit: "대", labors: {"S/W시험사": 0.17, "통신설비공": 0.6}, category: "device", page: 248, keywords: ["전 광 판", "900mhz대역 리더기 및 안테나"] },
  { code: "통신 8-3-2", name: "시 험", spec: "", unit: "세트", labors: {"통신관련기사": 0.64, "S/W시험사": 0.78}, category: "device", page: 248, keywords: ["시 험", "900mhz대역 리더기 및 안테나"] },
  { code: "통신 8-3-3", name: "리더기부", spec: "", unit: "대", labors: {"통신설비공": 0.92}, category: "device", page: 249, keywords: ["리더기부", "433mhz대역 리더기 및 안테나"] },
  { code: "통신 8-3-3", name: "안 테 나", spec: "", unit: "대", labors: {"통신케이블공": 0.56, "통신설비공": 0.25}, category: "device", page: 249, keywords: ["안 테 나", "433mhz대역 리더기 및 안테나"] },
  { code: "통신 8-3-3", name: "시 험", spec: "", unit: "세트", labors: {"통신관련기사": 0.65, "S/W시험사": 0.35}, category: "device", page: 249, keywords: ["시 험", "433mhz대역 리더기 및 안테나"] },
  { code: "통신 8-3-4", name: "리더기부", spec: "", unit: "대", labors: {"통신설비공": 0.67}, category: "device", page: 249, keywords: ["리더기부", "2.45ghz대역 리더기 및 안테나"] },
  { code: "통신 8-3-4", name: "안 테 나", spec: "", unit: "“", labors: {"통신케이블공": 0.58, "통신설비공": 0.11}, category: "device", page: 249, keywords: ["안 테 나", "2.45ghz대역 리더기 및 안테나"] },
  { code: "통신 8-3-4", name: "시 험", spec: "", unit: "세트", labors: {"통신관련기사": 0.5, "S/W시험사": 0.44}, category: "device", page: 249, keywords: ["시 험", "2.45ghz대역 리더기 및 안테나"] },
  { code: "통신 8-4-1", name: "메인장비", spec: "최대전력관리장치", unit: "대", labors: {"통신관련산업기사": 0.17, "통신설비공": 0.17}, category: "device", page: 250, keywords: ["최대전력관리장치", "최대전력관리시스템", "메인장비"] },
  { code: "통신 8-4-1", name: "계량기 신호선", spec: "", unit: "m", labors: {"통신관련산업기사": 0.06, "통신설비공": 0.06}, category: "device", page: 250, keywords: ["최대전력관리시스템", "계량기 신호선"] },
  { code: "통신 8-4-1", name: "중앙제어기", spec: "", unit: "대", labors: {"통신관련산업기사": 0.16, "통신설비공": 0.16}, category: "device", page: 250, keywords: ["최대전력관리시스템", "중앙제어기"] },
  { code: "통신 8-4-1", name: "중계기", spec: "", unit: "대", labors: {"통신관련산업기사": 0.14, "통신설비공": 0.14}, category: "device", page: 250, keywords: ["중계기", "최대전력관리시스템"] },
  { code: "통신 8-4-1", name: "최대전력관리 프로그램", spec: "", unit: "대", labors: {"통신관련산업기사": 0.28, "통신설비공": 0.28}, category: "device", page: 250, keywords: ["최대전력관리시스템", "최대전력관리 프로그램"] },
  { code: "통신 8-4-2", name: "메인프로세스 유닛", spec: "", unit: "대", labors: {"통신설비공": 0.55, "통신케이블공": 0.55, "H/W시험사": 0.85, "S/W시험사": 0.85}, category: "device", page: 250, keywords: ["축전지관리 시스템(bms)", "메인프로세스 유닛"] },
  { code: "통신 8-4-2", name: "데이터수집장치", spec: "", unit: "대", labors: {"통신설비공": 0.53, "통신케이블공": 0.53, "H/W시험사": 0.61, "S/W시험사": 0.61}, category: "device", page: 250, keywords: ["데이터수집장치", "축전지관리 시스템(bms)"] },
  { code: "통신 8-4-2", name: "클램프 부착 및 결선", spec: "", unit: "개", labors: {"통신설비공": 0.03, "통신케이블공": 0.03}, category: "device", page: 250, keywords: ["축전지관리 시스템(bms)", "클램프 부착 및 결선"] },
  { code: "통신 8-4-3", name: "장비설치", spec: "", unit: "대", labors: {"통신설비공": 1.67}, category: "device", page: 251, keywords: ["장비설치", "에너지저장시스템(ess)"] },
  { code: "통신 8-4-3", name: "S/W 설치", spec: "", unit: "대", labors: {"S/W시험사": 0.71}, category: "device", page: 251, keywords: ["s/w 설치", "에너지저장시스템(ess)"] },
  { code: "통신 8-4-4", name: "계측기 설치", spec: "", unit: "대", labors: {"통신관련산업기사": 0.35, "통신설비공": 0.35}, category: "device", page: 251, keywords: ["계측기 설치", "에너지 관리시스템(ems)"] },
  { code: "통신 8-4-4", name: "데이터 확인", spec: "", unit: "대", labors: {"S/W시험사": 0.54}, category: "device", page: 251, keywords: ["데이터 확인", "에너지 관리시스템(ems)"] },
  { code: "통신 8-4-4", name: "시 험", spec: "", unit: "대", labors: {"S/W시험사": 0.67}, category: "device", page: 251, keywords: ["시 험", "에너지 관리시스템(ems)"] },
  { code: "통신 8-4-5", name: "통합검침장치", spec: "", unit: "대", labors: {"통신관련산업기사": 0.37, "통신설비공": 0.37}, category: "device", page: 252, keywords: ["원격검침 설비", "통합검침장치"] },
  { code: "통신 8-4-5", name: "중앙관제장치", spec: "", unit: "세트", labors: {"통신관련산업기사": 1.21, "H/W시험사": 0.96, "S/W시험사": 2.63, "통신설비공": 0.64}, category: "device", page: 252, keywords: ["중앙관제장치", "원격검침 설비"] },
  { code: "통신 8-4-5", name: "집선장치(데이터전송장치)", spec: "", unit: "대", labors: {"통신관련산업기사": 0.4, "통신설비공": 0.4}, category: "device", page: 252, keywords: ["집선장치(데이터전송장치)", "원격검침 설비"] },
  { code: "통신 8-4-5", name: "모뎀", spec: "고압계기형", unit: "대", labors: {"S/W시험사": 0.03, "통신설비공": 0.2, "특별인부": 0.19}, category: "device", page: 252, keywords: ["모뎀", "원격검침 설비", "고압계기형"] },
  { code: "통신 8-4-6", name: "AMI용", spec: "", unit: "대", labors: {"H/W시험사": 0.28, "S/W시험사": 0.28, "통신외선공": 0.28}, category: "device", page: 253, keywords: ["ami용", "전력선통신(plc : power line communication) 설비"] },
  { code: "통신 8-4-6", name: "데이터", spec: "", unit: "m", labors: {"통신외선공": 0.13, "보통인부": 0.07}, category: "device", page: 253, keywords: ["데이터", "전력선통신(plc : power line communication) 설비"] },
  { code: "통신 8-4-6", name: "집중장치", spec: "", unit: "개소", labors: {"통신외선공": 0.44, "보통인부": 0.22}, category: "device", page: 253, keywords: ["전력선통신(plc : power line communication) 설비", "집중장치"] },
  { code: "통신 8-4-6", name: "모뎀", spec: "PLC", unit: "대", labors: {"H/W시험사": 0.06, "S/W시험사": 0.02}, category: "device", page: 253, keywords: ["모뎀", "전력선통신(plc : power line communication) 설비", "plc"] },
  { code: "통신 8-4-6", name: "모뎀", spec: "외장형", unit: "대", labors: {"통신설비공": 0.05}, category: "device", page: 253, keywords: ["모뎀", "외장형", "전력선통신(plc : power line communication) 설비"] },
  { code: "통신 8-4-6", name: "브릿지", spec: "", unit: "10대 대", labors: {"H/W시험사": 0.27, "S/W시험사": 0.13, "통신외선공": 0.27}, category: "device", page: 253, keywords: ["브릿지", "전력선통신(plc : power line communication) 설비"] },
  { code: "통신 8-4-6", name: "중계기", spec: "", unit: "10대 대", labors: {"H/W시험사": 0.25, "S/W시험사": 0.13, "통신외선공": 0.25}, category: "device", page: 253, keywords: ["중계기", "전력선통신(plc : power line communication) 설비"] },
  { code: "통신 8-4-6", name: "커플러", spec: "", unit: "개", labors: {"통신외선공": 0.38}, category: "device", page: 253, keywords: ["커플러", "전력선통신(plc : power line communication) 설비"] },
  { code: "통신 8-4-6", name: "서지보호기", spec: "", unit: "10대 대", labors: {"통신설비공": 0.1, "보통인부": 0.05}, category: "device", page: 253, keywords: ["서지보호기", "전력선통신(plc : power line communication) 설비"] },
  { code: "통신 8-4-6", name: "외장형 모뎀 연결장치", spec: "", unit: "10대 대", labors: {"통신설비공": 0.05}, category: "device", page: 253, keywords: ["외장형 모뎀 연결장치", "전력선통신(plc : power line communication) 설비"] },
  { code: "통신 8-4-7-1", name: "종 합 설 치", spec: "", unit: "식", labors: {"통신관련산업기사": 0.32, "S/W시험사": 1.13, "H/W시험사": 0.76, "보통인부": 0.36}, category: "device", page: 255, keywords: ["종 합 설 치", "대규모배전자동화설비"] },
  { code: "통신 8-4-7-1", name: "개 별 설 치", spec: "1. 서버및이중화", unit: "대", labors: {"통신관련산업기사": 0.16, "S/W시험사": 0.16, "H/W시험사": 0.67, "보통인부": 0.36}, category: "device", page: 255, keywords: ["대규모배전자동화설비", "개 별 설 치", "1. 서버및이중화"] },
  { code: "통신 8-4-7-1", name: "Device 설치", spec: "", unit: "개", labors: {"S/W시험사": 0.17, "H/W시험사": 0.25}, category: "device", page: 255, keywords: ["대규모배전자동화설비", "device 설치"] },
  { code: "통신 8-4-7-1", name: "개 별 설 치", spec: "1.이중화 저장장치", unit: "대", labors: {"통신관련산업기사": 0.1, "S/W시험사": 0.07, "H/W시험사": 0.79}, category: "device", page: 256, keywords: ["개 별 설 치", "대규모배전자동화설비", "1.이중화 저장장치"] },
  { code: "통신 8-4-7-1", name: "개 별 설 치", spec: "1. HMI 장치설치", unit: "대", labors: {"통신관련산업기사": 0.08, "S/W시험사": 0.06, "H/W시험사": 0.26}, category: "device", page: 256, keywords: ["1. hmi 장치설치", "개 별 설 치", "대규모배전자동화설비"] },
  { code: "통신 8-4-7-1", name: "개 별 설 치", spec: "1. FEP 장치설치", unit: "대", labors: {"통신관련산업기사": 0.08, "S/W시험사": 0.06, "H/W시험사": 0.87}, category: "device", page: 257, keywords: ["대규모배전자동화설비", "개 별 설 치", "1. fep 장치설치"] },
  { code: "통신 8-4-7-1", name: "서버 프로그램 설치 및 시험", spec: "", unit: "대", labors: {"S/W시험사": 0.35}, category: "device", page: 258, keywords: ["서버 프로그램 설치 및 시험", "대규모배전자동화설비"] },
  { code: "통신 8-4-7-1", name: "클라이언트 프로그램 설치 및 시험", spec: "", unit: "대", labors: {"S/W시험사": 0.26}, category: "device", page: 258, keywords: ["클라이언트 프로그램 설치 및 시험", "대규모배전자동화설비"] },
  { code: "통신 8-4-7-1", name: "대규모배전자동화 시스템 데이터베이스 구축", spec: "", unit: "D/L", labors: {"S/W시험사": 3.04}, category: "device", page: 258, keywords: ["대규모배전자동화 시스템 데이터베이스 구축", "대규모배전자동화설비"] },
  { code: "통신 8-4-7-1", name: "대규모배전자동화 시스템 기본도 제작", spec: "", unit: "식", labors: {"S/W시험사": 1.36}, category: "device", page: 258, keywords: ["대규모배전자동화 시스템 기본도 제작", "대규모배전자동화설비"] },
  { code: "통신 8-4-7-1", name: "신규 포맷의 데이터베이스 구조로 데이터 복원", spec: "", unit: "Table", labors: {"S/W시험사": 0.24}, category: "device", page: 259, keywords: ["신규 포맷의 데이터베이스 구조로 데이터 복원", "대규모배전자동화설비"] },
  { code: "통신 8-4-7-1", name: "개폐기 신·증설에 따른 데이터베이스 입력", spec: "", unit: "대", labors: {"S/W시험사": 0.24}, category: "device", page: 259, keywords: ["대규모배전자동화설비", "개폐기 신·증설에 따른 데이터베이스 입력"] },
  { code: "통신 8-4-7-2", name: "종 합 설 치", spec: "", unit: "식", labors: {"S/W시험사": 0.49, "H/W시험사": 0.23, "보통인부": 0.15}, category: "device", page: 260, keywords: ["소규모배전자동화설비", "종 합 설 치"] },
  { code: "통신 8-4-7-2", name: "개별 설치", spec: "1.주장치설치및시험", unit: "대", labors: {"S/W시험사": 0.27, "H/W시험사": 0.23, "보통인부": 0.15}, category: "device", page: 260, keywords: ["소규모배전자동화설비", "1.주장치설치및시험", "개별 설치"] },
  { code: "통신 8-4-7-2", name: "Device 설치", spec: "", unit: "“", labors: {"S/W시험사": 0.07, "H/W시험사": 0.18}, category: "device", page: 260, keywords: ["소규모배전자동화설비", "device 설치"] },
  { code: "통신 8-4-7-2", name: "주 종 합 설 치 템 시", spec: "", unit: "식", labors: {"S/W시험사": 0.56, "H/W시험사": 0.28, "보통인부": 0.15}, category: "device", page: 260, keywords: ["주 종 합 설 치 템 시", "소규모배전자동화설비"] },
  { code: "통신 8-4-7-2", name: "개 별 설 치", spec: "주 1.주장치설치및시험 니", unit: "식", labors: {"S/W시험사": 0.26, "H/W시험사": 0.23, "보통인부": 0.15}, category: "device", page: 260, keywords: ["주 1.주장치설치및시험 니", "소규모배전자동화설비", "개 별 설 치"] },
  { code: "통신 8-4-7-2", name: "Device 설치 부", spec: "", unit: "식", labors: {"S/W시험사": 0.07, "H/W시험사": 0.18}, category: "device", page: 260, keywords: ["소규모배전자동화설비", "device 설치 부"] },
  { code: "통신 8-4-7-2", name: "소규모 배전자동화 응용프로그램 설치 및 시험", spec: "", unit: "식", labors: {"S/W시험사": 0.25}, category: "device", page: 261, keywords: ["소규모배전자동화설비", "소규모 배전자동화 응용프로그램 설치 및 시험"] },
  { code: "통신 8-4-7-2", name: "소규모 배전자동화 시스템 데이터베이스 구축", spec: "", unit: "D/L", labors: {"S/W시험사": 0.42}, category: "device", page: 261, keywords: ["소규모 배전자동화 시스템 데이터베이스 구축", "소규모배전자동화설비"] },
  { code: "통신 8-4-7-2", name: "개폐기 신·증설에 따른 데이터베이스 입력", spec: "", unit: "대", labors: {"S/W시험사": 0.24}, category: "device", page: 261, keywords: ["소규모배전자동화설비", "개폐기 신·증설에 따른 데이터베이스 입력"] },
  { code: "통신 8-4-7-3", name: "자동화용 유선통합장치 (Modem/Hub/T.S.)설치", spec: "전용회선용장치종합설치 시스템동작및시험", unit: "대", labors: {"S/W시험사": 0.44, "H/W시험사": 0.54, "보통인부": 0.17}, category: "device", page: 262, keywords: ["전용회선용장치종합설치 시스템동작및시험", "자동화용 유선통합장치 (modem/hub/t.s.)설치", "배전자동화용 부대장치"] },
  { code: "통신 8-4-7-3", name: "자동화용 무선통합장치 (DSU/Router/Hub)설치", spec: "무선데이터망장치종합설치 시스템동작및시험", unit: "대", labors: {"S/W시험사": 0.72, "H/W시험사": 0.51, "보통인부": 0.21}, category: "device", page: 262, keywords: ["자동화용 무선통합장치 (dsu/router/hub)설치", "배전자동화용 부대장치", "무선데이터망장치종합설치 시스템동작및시험"] },
  { code: "통신 8-4-7-3", name: "자동화용 신호전송장치(DSU) 설치", spec: "장치장착및케이블접속 구간별네트웍대조시험", unit: "대", labors: {"S/W시험사": 0.4, "H/W시험사": 0.25, "보통인부": 0.18}, category: "device", page: 262, keywords: ["장치장착및케이블접속 구간별네트웍대조시험", "배전자동화용 부대장치", "자동화용 신호전송장치(dsu) 설치"] },
  { code: "통신 8-4-7-3", name: "자동화용 회선경로, 분배장치(Router)설치", spec: "구간별네트웍대조시험 장치설치및결선 시스템동작시험", unit: "대", labors: {"S/W시험사": 0.38, "H/W시험사": 0.26, "보통인부": 0.14}, category: "device", page: 262, keywords: ["자동화용 회선경로, 분배장치(router)설치", "배전자동화용 부대장치", "구간별네트웍대조시험 장치설치및결선 시스템동작시험"] },
  { code: "통신 8-4-7-3", name: "자동화용 회선집선장치(Hub)설치", spec: "장치장착및케이블접속 주장치와네트웍연계시험", unit: "대", labors: {"S/W시험사": 0.21, "H/W시험사": 0.27, "보통인부": 0.11}, category: "device", page: 262, keywords: ["배전자동화용 부대장치", "자동화용 회선집선장치(hub)설치", "장치장착및케이블접속 주장치와네트웍연계시험"] },
  { code: "통신 8-4-7-3", name: "자동화용 전단처리장치 T.S(Terminal Server)설치", spec: "장치장착및케이블접속 Port별개별동작시험", unit: "대", labors: {"S/W시험사": 0.27, "H/W시험사": 0.34, "보통인부": 0.12}, category: "device", page: 262, keywords: ["장치장착및케이블접속 port별개별동작시험", "배전자동화용 부대장치", "자동화용 전단처리장치 t.s(terminal server)설치"] },
  { code: "통신 8-4-7-3", name: "종 합 설 치", spec: "", unit: "식", labors: {"통신관련산업기사": 0.42, "S/W시험사": 0.42, "H/W시험사": 0.4}, category: "device", page: 262, keywords: ["종 합 설 치", "배전자동화용 부대장치"] },
  { code: "통신 8-4-7-3", name: "개별 설치", spec: "1.GPS 수신장치", unit: "대", labors: {"H/W시험사": 0.4}, category: "device", page: 262, keywords: ["1.gps 수신장치", "배전자동화용 부대장치", "개별 설치"] },
  { code: "통신 3-1-1", name: "PDA 장치 설치", spec: "", unit: "식", labors: {"H/W시험사": 0.2}, category: "pipe", page: 263, keywords: ["pda 장치 설치"] },
  { code: "통신 3-1-1", name: "PDA 동작시험, 주장치~PDA간 연동시험", spec: "", unit: "식", labors: {"S/W시험사": 0.18}, category: "pipe", page: 263, keywords: ["pda 동작시험, 주장치~pda간 연동시험"] },
  { code: "통신 3-1-1", name: "프린터 설치 동작시험", spec: "", unit: "대", labors: {"S/W시험사": 0.23, "H/W시험사": 0.31, "보통인부": 0.18}, category: "pipe", page: 263, keywords: ["프린터 설치 동작시험"] },
  { code: "통신 3-1-1", name: "종합설치", spec: "", unit: "대", labors: {"S/W시험사": 0.61, "H/W시험사": 0.37, "보통인부": 0.28}, category: "pipe", page: 263, keywords: ["종합설치"] },
  { code: "통신 3-1-1", name: "개별 설치", spec: "Gateway", unit: "대", labors: {"S/W시험사": 0.41, "H/W시험사": 0.37, "보통인부": 0.28}, category: "pipe", page: 263, keywords: ["gateway", "개별 설치"] },
  { code: "통신 3-1-1", name: "Device 설치", spec: "", unit: "개", labors: {"S/W시험사": 0.07, "H/W시험사": 0.18}, category: "pipe", page: 263, keywords: ["device 설치"] },
  { code: "통신 3-1-1", name: "신호변환장치(센터측)", spec: "", unit: "대", labors: {"S/W시험사": 0.46, "H/W시험사": 0.45}, category: "pipe", page: 264, keywords: ["신호변환장치(센터측)"] },
  { code: "통신 3-1-1", name: "신호변환장치(제어함측)", spec: "", unit: "대", labors: {"S/W시험사": 0.54, "H/W시험사": 0.47}, category: "pipe", page: 264, keywords: ["신호변환장치(제어함측)"] },
  { code: "통신 3-1-1", name: "사전현장조사(전계강도측정)", spec: "", unit: "개소", labors: {"S/W시험사": 0.21, "보통인부": 0.21}, category: "pipe", page: 264, keywords: ["사전현장조사(전계강도측정)"] },
  { code: "통신 3-1-1", name: "안테나 설치 및 방향조정", spec: "", unit: "대", labors: {"무선안테나공": 0.67}, category: "pipe", page: 265, keywords: ["안테나 설치 및 방향조정"] },
  { code: "통신 3-1-1", name: "급전선 포설", spec: "", unit: "m", labors: {"통신케이블공": 0.01, "보통인부": 0.02}, category: "pipe", page: 265, keywords: ["급전선 포설"] },
  { code: "통신 3-1-1", name: "종 합 설 치", spec: "", unit: "대", labors: {"S/W시험사": 0.76, "H/W시험사": 0.57, "보통인부": 0.45}, category: "pipe", page: 265, keywords: ["종 합 설 치"] },
  { code: "통신 3-1-1", name: "개별 설치", spec: "1.Gateway장치", unit: "대", labors: {"S/W시험사": 0.42, "H/W시험사": 0.57, "보통인부": 0.45}, category: "pipe", page: 265, keywords: ["1.gateway장치", "개별 설치"] },
  { code: "통신 3-1-1", name: "쉘프설치 및 HCU 통신시험", spec: "", unit: "대", labors: {"S/W시험사": 0.16, "H/W시험사": 0.2, "보통인부": 0.2}, category: "pipe", page: 265, keywords: ["쉘프설치 및 hcu 통신시험"] },
  { code: "통신 3-1-1", name: "HCM 설치 및 시험", spec: "", unit: "대", labors: {"S/W시험사": 0.19, "H/W시험사": 0.23}, category: "pipe", page: 265, keywords: ["hcm 설치 및 시험"] },
  { code: "통신 3-1-1", name: "TCU장치", spec: "", unit: "대", labors: {"S/W시험사": 0.34, "H/W시험사": 0.24, "보통인부": 0.17}, category: "pipe", page: 266, keywords: ["tcu장치"] },
  { code: "통신 1-1-27", name: "집합형 쉘프", spec: "장치설치 및 결선", unit: "대", labors: {"H/W시험사": 0.18, "보통인부": 0.15}, category: "labor", page: 266, keywords: ["-1안전시설” 품셈적용.", "장치설치 및 결선", "집합형 쉘프"] },
  { code: "통신 1-1-27", name: "집합형 장치", spec: "장치설치 시스템 동작시험", unit: "대", labors: {"S/W시험사": 0.24, "H/W시험사": 0.01}, category: "labor", page: 266, keywords: ["집합형 장치", "-1안전시설” 품셈적용.", "장치설치 시스템 동작시험"] },
  { code: "통신 1-1-27", name: "단독형 장치", spec: "장치설치 및 결선, 시 스템 동작시험", unit: "대", labors: {"S/W시험사": 0.35, "H/W시험사": 0.34, "보통인부": 0.25}, category: "labor", page: 266, keywords: ["-1안전시설” 품셈적용.", "장치설치 및 결선, 시 스템 동작시험", "단독형 장치"] },
  { code: "통신 1-1-27", name: "보호기(통신TR)", spec: "장치설치 및 결선", unit: "대", labors: {"통신내선공": 0.28, "보통인부": 0.24}, category: "labor", page: 266, keywords: ["보호기(통신tr)", "장치설치 및 결선", "-1안전시설” 품셈적용."] },
  { code: "통신 1-1-27", name: "장치 설치", spec: "1.쉘프 장착 및 고정", unit: "대", labors: {"H/W시험사": 0.07, "특별인부": 0.07}, category: "labor", page: 267, keywords: ["장치 설치", "-1안전시설” 품셈적용.", "1.쉘프 장착 및 고정"] },
  { code: "통신 1-1-27", name: "종합성능시험", spec: "시스템 개별 송·수신 레벨 시험", unit: "링", labors: {"광케이블설치사": 1.0, "특별인부": 1.0}, category: "labor", page: 267, keywords: ["-1안전시설” 품셈적용.", "시스템 개별 송·수신 레벨 시험", "종합성능시험"] },
  { code: "통신 1-1-27", name: "광신호변환장치(제어함측)", spec: "", unit: "대", labors: {"광케이블설치사": 0.57, "H/W시험사": 0.36, "보통인부": 0.3}, category: "labor", page: 267, keywords: ["-1안전시설” 품셈적용.", "광신호변환장치(제어함측)"] },
  { code: "통신 1-1-27", name: "무선신호변환장치", spec: "", unit: "대", labors: {"S/W시험사": 0.35, "H/W시험사": 0.24, "보통인부": 0.17}, category: "labor", page: 268, keywords: ["-1안전시설” 품셈적용.", "무선신호변환장치"] },
  { code: "통신 1-1-27-1", name: "DWB 신호변환장치", spec: "", unit: "대", labors: {"S/W시험사": 0.26, "H/W시험사": 0.3, "보통인부": 0.23}, category: "labor", page: 268, keywords: ["안전시설” 품셈적용.", "dwb 신호변환장치"] },
  { code: "통신 1-1-27-1", name: "광복합 TRS 신호변환장치 설치", spec: "", unit: "대", labors: {"H/W시험사": 0.28, "S/W시험사": 0.28}, category: "labor", page: 268, keywords: ["안전시설” 품셈적용.", "광복합 trs 신호변환장치 설치"] },
  { code: "통신 1-1-27-1", name: "종합시험", spec: "", unit: "식", labors: {"H/W시험사": 0.05, "S/W시험사": 0.05}, category: "labor", page: 268, keywords: ["안전시설” 품셈적용.", "종합시험"] },
  { code: "통신 1-1-27-1", name: "광연계 무선 신호변환장치 설치", spec: "", unit: "대", labors: {"H/W시험사": 0.28, "S/W시험사": 0.28}, category: "labor", page: 269, keywords: ["안전시설” 품셈적용.", "광연계 무선 신호변환장치 설치"] },
  { code: "통신 1-1-27-1", name: "종합연동시험", spec: "", unit: "식", labors: {"H/W시험사": 0.02, "S/W시험사": 0.02}, category: "labor", page: 269, keywords: ["안전시설” 품셈적용.", "종합연동시험"] },
  { code: "통신 8-4-7-4", name: "가공용 단말장치 설치 및 결선", spec: "", unit: "대", labors: {"S/W시험사": 0.37, "H/W시험사": 0.42}, category: "device", page: 270, keywords: ["가공용 단말장치 설치 및 결선", "배전자동화용 단말장치"] },
  { code: "통신 8-4-7-4", name: "지중용 단말장치 설치 및 결선", spec: "", unit: "대", labors: {"S/W시험사": 0.59, "H/W시험사": 0.75}, category: "device", page: 270, keywords: ["배전자동화용 단말장치", "지중용 단말장치 설치 및 결선"] },
  { code: "통신 8-4-7-4", name: "Recloser 제어함 장치설치 및 결선", spec: "", unit: "대", labors: {"S/W시험사": 0.46, "H/W시험사": 0.54}, category: "device", page: 270, keywords: ["배전자동화용 단말장치", "recloser 제어함 장치설치 및 결선"] },
  { code: "통신 1-1-27-1", name: "가공개폐기", spec: "시스템간 연계 연동시험 (주장치~통신장치~단말장치)", unit: "대", labors: {"S/W시험사": 0.78, "H/W시험사": 0.86, "보통인부": 0.93}, category: "labor", page: 270, keywords: ["가공개폐기", "안전시설” 품셈적용.", "시스템간 연계 연동시험 (주장치~통신장치~단말장치)"] },
  { code: "통신 1-1-27-1", name: "지중개폐기", spec: "시스템간 연계 연동시험 (주장치~통신장치~단말장치)", unit: "대", labors: {"S/W시험사": 1.72, "H/W시험사": 1.76, "보통인부": 1.83}, category: "labor", page: 270, keywords: ["시스템간 연계 연동시험 (주장치~통신장치~단말장치)", "안전시설” 품셈적용.", "지중개폐기"] },
  { code: "통신 8-4-7-5", name: "설치작업", spec: "함체(랙) 설치", unit: "랙", labors: {"통신설비공": 0.5, "보통인부": 1.0}, category: "device", page: 271, keywords: ["scada 원격소 장치", "함체(랙) 설치", "설치작업"] },
  { code: "통신 8-4-7-5", name: "송수신 상태 조정 및 시험", spec: "", unit: "개소", labors: {"H/W시험사": 0.6, "통신관련산업기사": 0.6}, category: "device", page: 271, keywords: ["송수신 상태 조정 및 시험", "scada 원격소 장치"] },
  { code: "통신 8-4-7-5", name: "종합점검 및 시험", spec: "GPS 시각동기 상태 점검", unit: "개소", labors: {"H/W시험사": 0.35}, category: "device", page: 271, keywords: ["gps 시각동기 상태 점검", "scada 원격소 장치", "종합점검 및 시험"] },
  { code: "통신 8-4-8-1", name: "설치작업", spec: "기기건립 및 결선", unit: "Bay", labors: {"통신설비공": 5.8, "보통인부": 1.9}, category: "device", page: 272, keywords: ["기기건립 및 결선", "중앙처리 장치(cpu)", "설치작업"] },
  { code: "통신 8-4-8-1", name: "국부점검", spec: "프로세서회로점검", unit: "카드", labors: {"H/W시험사": 0.5}, category: "device", page: 272, keywords: ["프로세서회로점검", "중앙처리 장치(cpu)", "국부점검"] },
  { code: "통신 8-4-8-1", name: "국부점검", spec: "메모리회로점검", unit: "카드", labors: {"H/W시험사": 0.5}, category: "device", page: 272, keywords: ["메모리회로점검", "중앙처리 장치(cpu)", "국부점검"] },
  { code: "통신 8-4-8-1", name: "국부점검", spec: "제어 및 결합회로점검", unit: "카드", labors: {"H/W시험사": 0.5}, category: "device", page: 272, keywords: ["제어 및 결합회로점검", "중앙처리 장치(cpu)", "국부점검"] },
  { code: "통신 8-4-8-1", name: "시 험", spec: "CPU판넬수동시험", unit: "대", labors: {"통신관련기사": 7.0}, category: "device", page: 272, keywords: ["cpu판넬수동시험", "시 험", "중앙처리 장치(cpu)"] },
  { code: "통신 8-4-8-1", name: "시 험", spec: "명령어수행상태시험", unit: "대", labors: {"통신관련기사": 11.0}, category: "device", page: 272, keywords: ["시 험", "중앙처리 장치(cpu)", "명령어수행상태시험"] },
  { code: "통신 8-4-8-1", name: "시 험", spec: "메모리수동시험", unit: "대", labors: {"통신관련기사": 8.0}, category: "device", page: 272, keywords: ["메모리수동시험", "시 험", "중앙처리 장치(cpu)"] },
  { code: "통신 8-4-8-1", name: "시 험", spec: "HSRAM수동시험", unit: "대", labors: {"통신관련기사": 5.0}, category: "device", page: 272, keywords: ["시 험", "hsram수동시험", "중앙처리 장치(cpu)"] },
  { code: "통신 8-4-8-2", name: "설치작업", spec: "기기건립 및 결선", unit: "Bay", labors: {"통신설비공": 5.8, "보통인부": 1.9}, category: "device", page: 272, keywords: ["기기건립 및 결선", "입출력 장치(i/o equipment)", "설치작업"] },
  { code: "통신 8-4-8-2", name: "국부점검", spec: "Interface 회로점검", unit: "카드", labors: {"H/W시험사": 0.5}, category: "device", page: 272, keywords: ["interface 회로점검", "입출력 장치(i/o equipment)", "국부점검"] },
  { code: "통신 8-4-8-2", name: "국부점검", spec: "Line Buffer Control회로점검", unit: "카드", labors: {"H/W시험사": 0.5}, category: "device", page: 272, keywords: ["line buffer control회로점검", "입출력 장치(i/o equipment)", "국부점검"] },
  { code: "통신 8-4-8-2", name: "국부점검", spec: "General Purpose회로점검", unit: "카드", labors: {"H/W시험사": 0.5}, category: "device", page: 272, keywords: ["입출력 장치(i/o equipment)", "general purpose회로점검", "국부점검"] },
  { code: "통신 8-4-8-2", name: "국부점검", spec: "․Digital 입출력회로점검", unit: "카드", labors: {"H/W시험사": 0.5}, category: "device", page: 272, keywords: ["․digital 입출력회로점검", "입출력 장치(i/o equipment)", "국부점검"] },
  { code: "통신 8-4-8-2", name: "시 험", spec: "Computer / Sub System", unit: "대", labors: {"통신관련기사": 4.0}, category: "device", page: 272, keywords: ["시 험", "computer / sub system", "입출력 장치(i/o equipment)"] },
  { code: "통신 8-4-8-2", name: "시 험", spec: "Interface 기능시험", unit: "대", labors: {"통신관련기사": 10.0}, category: "device", page: 272, keywords: ["시 험", "입출력 장치(i/o equipment)", "interface 기능시험"] },
  { code: "통신 8-4-8-2", name: "시 험", spec: "Address Time Control 기능시험", unit: "대", labors: {"통신관련기사": 16.0}, category: "device", page: 272, keywords: ["address time control 기능시험", "시 험", "입출력 장치(i/o equipment)"] },
  { code: "통신 8-4-8-3", name: "설치작업", spec: "캐 비 넷 건 립", unit: "Bay", labors: {"H/W시험사": 4.2, "보통인부": 2.8}, category: "device", page: 273, keywords: ["고장 절체장치(failover)", "설치작업", "캐 비 넷 건 립"] },
  { code: "통신 8-4-8-3", name: "국부점검", spec: "F.O 전 원 반 점 검", unit: "대", labors: {"H/W시험사": 3.0}, category: "device", page: 273, keywords: ["f.o 전 원 반 점 검", "고장 절체장치(failover)", "국부점검"] },
  { code: "통신 8-4-8-3", name: "국부점검", spec: "F.O 및 G.P 회 로 점 검", unit: "대", labors: {"H/W시험사": 7.0}, category: "device", page: 273, keywords: ["고장 절체장치(failover)", "f.o 및 g.p 회 로 점 검", "국부점검"] },
  { code: "통신 8-4-8-3", name: "시험 및", spec: "컴 퓨 터 F.O 기 능 시 험", unit: "개", labors: {"통신관련기사": 9.0}, category: "device", page: 273, keywords: ["시험 및", "컴 퓨 터 f.o 기 능 시 험", "고장 절체장치(failover)"] },
  { code: "통신 8-4-8-3", name: "조 정", spec: "라인버터 F.O 기 능 시 험", unit: "개", labors: {"통신관련기사": 3.0}, category: "device", page: 273, keywords: ["조 정", "라인버터 f.o 기 능 시 험", "고장 절체장치(failover)"] },
  { code: "통신 8-4-8-3", name: "조 정", spec: "라인버터 Error 종 합 시 험", unit: "개", labors: {"통신관련기사": 2.0}, category: "device", page: 273, keywords: ["조 정", "고장 절체장치(failover)", "라인버터 error 종 합 시 험"] },
  { code: "통신 8-4-8-4", name: "설치작업", spec: "Panel 삽입 및 결선", unit: "개", labors: {"통신설비공": 5.0}, category: "device", page: 273, keywords: ["주파수 편차 변환기(f.d.t) 시간편차 변환기(t.d.t)", "설치작업", "panel 삽입 및 결선"] },
  { code: "통신 8-4-8-4", name: "시험조정", spec: "국부점검 및 조정시험", unit: "개", labors: {"통신관련기사": 4.0}, category: "device", page: 273, keywords: ["시험조정", "국부점검 및 조정시험", "주파수 편차 변환기(f.d.t) 시간편차 변환기(t.d.t)"] },
  { code: "통신 8-4-8-5", name: "설치작업", spec: "Bay건립", unit: "Bay", labors: {"통신설비공": 0.5, "보통인부": 1.0}, category: "device", page: 273, keywords: ["line buffer", "bay건립", "설치작업"] },
  { code: "통신 8-4-8-5", name: "설치작업", spec: "Panel 삽입점검", unit: "개", labors: {"통신관련기사": 5.0}, category: "device", page: 273, keywords: ["line buffer", "panel 삽입점검", "설치작업"] },
  { code: "통신 8-4-8-5", name: "설치작업", spec: "케이블결선", unit: "Pair", labors: {"통신케이블공": 0.06}, category: "device", page: 273, keywords: ["케이블결선", "line buffer", "설치작업"] },
  { code: "통신 8-4-8-5", name: "설치작업", spec: "전원반 조립결선", unit: "Pair", labors: {"통신설비공": 7.5}, category: "device", page: 273, keywords: ["line buffer", "설치작업", "전원반 조립결선"] },
  { code: "통신 8-4-8-5", name: "국부점검", spec: "Timing ＆ Control회로점검", unit: "카드", labors: {"통신관련기사": 0.5}, category: "device", page: 273, keywords: ["timing ＆ control회로점검", "line buffer", "국부점검"] },
  { code: "통신 8-4-8-5", name: "국부점검", spec: "Register 회로점검", unit: "카드", labors: {"통신관련기사": 0.5}, category: "device", page: 273, keywords: ["line buffer", "register 회로점검", "국부점검"] },
  { code: "통신 8-4-8-5", name: "국부점검", spec: "Address Decoder ＆ Driver회로점검", unit: "카드", labors: {"통신관련기사": 0.5}, category: "device", page: 273, keywords: ["address decoder ＆ driver회로점검", "line buffer", "국부점검"] },
  { code: "통신 8-4-8-5", name: "국부점검", spec: "Modem ＆ Interface회로점검", unit: "개", labors: {"통신관련기사": 0.5}, category: "device", page: 273, keywords: ["modem ＆ interface회로점검", "line buffer", "국부점검"] },
  { code: "통신 8-4-8-5", name: "국부점검", spec: "Station Program회로점검", unit: "개", labors: {"통신관련기사": 0.5}, category: "device", page: 273, keywords: ["station program회로점검", "line buffer", "국부점검"] },
  { code: "통신 8-4-8-5", name: "국부점검", spec: "Line S.W 회로점검", unit: "개", labors: {"통신관련기사": 0.5}, category: "device", page: 273, keywords: ["line s.w 회로점검", "line buffer", "국부점검"] },
  { code: "통신 8-4-8-5", name: "시 험", spec: "․송수신상태시험", unit: "대", labors: {"통신관련기사": 16.0}, category: "device", page: 273, keywords: ["시 험", "․송수신상태시험", "line buffer"] },
  { code: "통신 8-4-8-5", name: "조 정", spec: "Test Panel 시험", unit: "대", labors: {"통신관련기사": 3.0}, category: "device", page: 273, keywords: ["조 정", "test panel 시험", "line buffer"] },
  { code: "통신 8-4-8-5", name: "조 정", spec: "Matrix 상태시험", unit: "대", labors: {"통신관련기사": 8.0}, category: "device", page: 273, keywords: ["조 정", "line buffer", "matrix 상태시험"] },
  { code: "통신 8-4-8-6", name: "설치작업", spec: "캐비넷건립 및 결선", unit: "Bay당", labors: {"H/W시험사": 5.8, "보통인부": 1.9}, category: "device", page: 274, keywords: ["캐비넷건립 및 결선", "영상 변환장치(dve)", "설치작업"] },
  { code: "통신 8-4-8-6", name: "국부점검", spec: "Interface 회 로 점 검", unit: "카드당", labors: {"H/W시험사": 0.5}, category: "device", page: 274, keywords: ["interface 회 로 점 검", "영상 변환장치(dve)", "국부점검"] },
  { code: "통신 8-4-8-6", name: "국부점검", spec: "Memory 회 로 점 검", unit: "카드당", labors: {"H/W시험사": 0.5}, category: "device", page: 274, keywords: ["memory 회 로 점 검", "영상 변환장치(dve)", "국부점검"] },
  { code: "통신 8-4-8-6", name: "국부점검", spec: "Control 회 로 점 검", unit: "카드당", labors: {"H/W시험사": 0.5}, category: "device", page: 274, keywords: ["control 회 로 점 검", "영상 변환장치(dve)", "국부점검"] },
  { code: "통신 8-4-8-6", name: "국부점검", spec: "D V E 회 로 점 검", unit: "카드당", labors: {"H/W시험사": 0.5}, category: "device", page: 274, keywords: ["d v e 회 로 점 검", "영상 변환장치(dve)", "국부점검"] },
  { code: "통신 8-4-8-6", name: "시 험", spec: "R ead 기 능 시 험", unit: "대당", labors: {"통신관련기사": 8.0}, category: "device", page: 274, keywords: ["시 험", "r ead 기 능 시 험", "영상 변환장치(dve)"] },
  { code: "통신 8-4-8-6", name: "조 정", spec: "Write 기 능 시 험", unit: "대당", labors: {"통신관련기사": 8.0}, category: "device", page: 274, keywords: ["조 정", "영상 변환장치(dve)", "write 기 능 시 험"] },
  { code: "통신 8-4-8-6", name: "조 정", spec: "주변장치제어기능시험", unit: "대당", labors: {"통신관련기사": 8.0}, category: "device", page: 274, keywords: ["조 정", "주변장치제어기능시험", "영상 변환장치(dve)"] },
  { code: "통신 8-4-8-7", name: "설치 및 조정", spec: "", unit: "개", labors: {"통신설비공": 14.6, "보통인부": 10.8}, category: "device", page: 274, keywords: ["전원공급 장치", "설치 및 조정"] },
  { code: "통신 8-4-8-8", name: "Card Reader", spec: "", unit: "개", labors: {"통신내선공": 2.5, "보통인부": 1.2}, category: "device", page: 274, keywords: ["주변장치", "card reader"] },
  { code: "통신 8-4-8-8", name: "Line Printer", spec: "", unit: "개", labors: {"통신내선공": 2.5, "보통인부": 1.2}, category: "device", page: 274, keywords: ["주변장치", "line printer"] },
  { code: "통신 8-4-8-8", name: "K.S.R", spec: "", unit: "개", labors: {"통신내선공": 2.5, "보통인부": 1.2}, category: "device", page: 274, keywords: ["주변장치", "k.s.r"] },
  { code: "통신 8-4-8-8", name: "Video Copier", spec: "", unit: "개", labors: {"통신내선공": 7.0, "보통인부": 2.5}, category: "device", page: 274, keywords: ["video copier", "주변장치"] },
  { code: "통신 8-4-8-9", name: "설치작업", spec: "계 통 반 건 립", unit: "식", labors: {"통신설비공": 20.16, "보통인부": 13.44}, category: "device", page: 275, keywords: ["계통반(map board)", "설치작업", "계 통 반 건 립"] },
  { code: "통신 8-4-8-9", name: "설치작업", spec: "타 일 조 립", unit: "식", labors: {"통신설비공": 20.4, "보통인부": 20.4}, category: "device", page: 275, keywords: ["타 일 조 립", "계통반(map board)", "설치작업"] },
  { code: "통신 8-4-8-9", name: "점검 및", spec: "표 시 기 점 검", unit: "개", labors: {"통신설비공": 12.7}, category: "device", page: 275, keywords: ["점검 및", "표 시 기 점 검", "계통반(map board)"] },
  { code: "통신 8-4-8-9", name: "결 선", spec: "표 시 기 결 선", unit: "개", labors: {"통신설비공": 40.6}, category: "device", page: 275, keywords: ["표 시 기 결 선", "계통반(map board)", "결 선"] },
  { code: "통신 8-4-8-9", name: "시험 및", spec: "프로그램 연결시험", unit: "개", labors: {"통신관련기사": 15.0}, category: "device", page: 275, keywords: ["시험 및", "계통반(map board)", "프로그램 연결시험"] },
  { code: "통신 8-4-8-9", name: "조 정", spec: "최 종 시 험", unit: "개", labors: {"통신관련기사": 15.0}, category: "device", page: 275, keywords: ["조 정", "계통반(map board)", "최 종 시 험"] },
  { code: "통신 8-4-8-10", name: "Bay 건립", spec: "2.70", unit: "Bay", labors: {"통신설비공": 8.7, "보통인부": 4.5}, category: "device", page: 275, keywords: ["2.70", "bay 건립", "기록기반"] },
  { code: "통신 8-4-8-10", name: "기록계 시설", spec: "-", unit: "대", labors: {"통신설비공": 6.75}, category: "device", page: 275, keywords: ["기록계 시설", "기록기반"] },
  { code: "통신 8-4-8-10", name: "전원부 시설", spec: "-", unit: "개", labors: {"통신설비공": 3.0}, category: "device", page: 275, keywords: ["전원부 시설", "기록기반"] },
  { code: "통신 8-4-8-10", name: "전자 모듈", spec: "-", unit: "Module", labors: {"통신관련기사": 2.0}, category: "device", page: 275, keywords: ["전자 모듈", "기록기반"] },
  { code: "통신 8-4-8-11", name: "조립 및 설치", spec: "", unit: "개", labors: {"통신관련기사": 1.0, "통신관련산업기사": 2.0, "통신설비공": 4.0, "보통인부": 2.0}, category: "device", page: 276, keywords: ["조립 및 설치", "콘솔(console)"] },
  { code: "통신 8-4-8-11", name: "조 정", spec: "", unit: "개", labors: {"통신관련기사": 2.0, "통신관련산업기사": 4.0}, category: "device", page: 276, keywords: ["조 정", "콘솔(console)"] },
  { code: "통신 8-4-8-11", name: "시험 및 측정", spec: "", unit: "개", labors: {"통신관련기사": 4.0, "통신관련산업기사": 8.0}, category: "device", page: 276, keywords: ["시험 및 측정", "콘솔(console)"] },
  { code: "통신 8-4-8-12", name: "기기간 연결용 케이블포설", spec: "", unit: "10m", labors: {"통신케이블공": 0.32}, category: "device", page: 276, keywords: ["기기간 연결용 케이블포설", "전자계산기 배선"] },
  { code: "통신 8-4-8-12", name: "간 이 시 험", spec: "", unit: "조", labors: {"통신케이블공": 0.15}, category: "device", page: 276, keywords: ["간 이 시 험", "전자계산기 배선"] },
  { code: "통신 8-5-1", name: "LED 전광판", spec: "", unit: "㎡", labors: {"통신설비공": 1.02}, category: "device", page: 277, keywords: ["led 옥외전광판", "led 전광판"] },
  { code: "통신 8-5-1", name: "제 어 부", spec: "운영컴퓨터", unit: "대", labors: {"S/W시험사": 0.1, "H/W시험사": 0.44}, category: "device", page: 277, keywords: ["운영컴퓨터", "led 옥외전광판", "제 어 부"] },
  { code: "통신 8-5-1", name: "종합시험", spec: "", unit: "식", labors: {"통신관련산업기사": 1.04, "S/W시험사": 0.88}, category: "device", page: 277, keywords: ["종합시험", "led 옥외전광판"] },
  { code: "통신 8-5-1", name: "마감, 방수처리", spec: "", unit: "㎡", labors: {"통신설비공": 0.03}, category: "device", page: 277, keywords: ["마감, 방수처리", "led 옥외전광판"] },
  { code: "통신 8-5-2", name: "주장비", spec: "", unit: "대", labors: {"통신관련산업기사": 0.27, "S/W시험사": 0.27, "통신설비공": 0.27}, category: "device", page: 277, keywords: ["차량위치 및 빌딩안내설비", "주장비"] },
  { code: "통신 8-5-2", name: "거치대", spec: "", unit: "대", labors: {"통신설비공": 0.36}, category: "device", page: 277, keywords: ["거치대", "차량위치 및 빌딩안내설비"] },
  { code: "통신 8-5-4", name: "유인 발급시스템", spec: "", unit: "대", labors: {"H/W시험사": 0.21, "통신설비공": 0.21}, category: "device", page: 278, keywords: ["유인 발급시스템", "통합민원발급시스템"] },
  { code: "통신 8-5-4", name: "무인 발급시스템", spec: "", unit: "대", labors: {"H/W시험사": 0.31, "통신설비공": 0.31}, category: "device", page: 278, keywords: ["무인 발급시스템", "통합민원발급시스템"] },
  { code: "통신 8-6-1", name: "수 위 측 정", spec: "", unit: "개", labors: {"H/W시험사": 0.09, "특별인부": 0.09}, category: "device", page: 278, keywords: ["수 위 측 정", "지하수 관측장비"] },
  { code: "통신 8-6-1", name: "프 로 보 설 치", spec: "", unit: "개", labors: {"통신설비공": 0.27, "특별인부": 0.27}, category: "device", page: 278, keywords: ["지하수 관측장비", "프 로 보 설 치"] },
  { code: "통신 8-6-1", name: "데이터 로거 설치 및 셋팅", spec: "", unit: "개", labors: {"통신설비공": 0.13, "특별인부": 0.13}, category: "device", page: 278, keywords: ["데이터 로거 설치 및 셋팅", "지하수 관측장비"] },
  { code: "통신 8-6-1", name: "비 교 측 정", spec: "", unit: "개", labors: {"S/W시험사": 0.21, "특별인부": 0.21}, category: "device", page: 278, keywords: ["비 교 측 정", "지하수 관측장비"] },
  { code: "통신 8-6-1", name: "종 합 시 험", spec: "", unit: "개", labors: {"S/W시험사": 0.26, "특별인부": 0.26}, category: "device", page: 278, keywords: ["종 합 시 험", "지하수 관측장비"] },
  { code: "통신 8-6-1", name: "센서케이블", spec: "절 연 시 험", unit: "개", labors: {"S/W시험사": 0.09, "특별인부": 0.09}, category: "device", page: 278, keywords: ["센서케이블", "지하수 관측장비", "절 연 시 험"] },
  { code: "통신 8-6-1", name: "센 서 교 정", spec: "온 도", unit: "개", labors: {"S/W시험사": 0.13, "특별인부": 0.13}, category: "device", page: 278, keywords: ["센 서 교 정", "지하수 관측장비", "온 도"] },
  { code: "통신 8-6-2", name: "노면센서설치", spec: "", unit: "개", labors: {"통신케이블공": 1.25, "통신설비공": 1.25, "보통인부": 1.25}, category: "device", page: 279, keywords: ["노면센서설치", "도로결빙 및 수막감지설비"] },
  { code: "통신 8-6-4", name: "원격검침단말기", spec: "소구경(구경50mm 이하)", unit: "대", labors: {"통신설비공": 0.12}, category: "device", page: 279, keywords: ["수도계량기 원격검침 설비", "소구경(구경50mm 이하)", "원격검침단말기"] },
  { code: "통신 8-7-2", name: "조 립", spec: "케이블결선", unit: "식", labors: {"통신설비공": 0.19, "H/W시험사": 0.38}, category: "device", page: 280, keywords: ["케이블결선", "자동기상관측시스템", "조 립"] },
  { code: "통신 8-7-2", name: "및", spec: "기상장비본체설치", unit: "대", labors: {"통신설비공": 0.5, "H/W시험사": 0.25}, category: "device", page: 280, keywords: ["자동기상관측시스템", "기상장비본체설치"] },
  { code: "통신 8-7-2", name: "설 치", spec: "각종센서설치", unit: "센서당", labors: {"통신설비공": 0.3}, category: "device", page: 280, keywords: ["각종센서설치", "설 치", "자동기상관측시스템"] },
  { code: "통신 8-7-2", name: "Software", spec: "Sensor server 프로그램 설치", unit: "국소당", labors: {"S/W시험사": 0.3, "H/W시험사": 0.25}, category: "device", page: 280, keywords: ["sensor server 프로그램 설치", "자동기상관측시스템", "software"] },
  { code: "통신 8-7-2", name: "설 치", spec: "Client설치(Workstation당)", unit: "대", labors: {"S/W시험사": 0.13}, category: "device", page: 280, keywords: ["설 치", "client설치(workstation당)", "자동기상관측시스템"] },
  { code: "통신 8-7-2", name: "설 치", spec: "데이터로거(DataLogger) 설정값Setting작업", unit: "대", labors: {"H/W시험사": 0.76}, category: "device", page: 280, keywords: ["설 치", "자동기상관측시스템", "데이터로거(datalogger) 설정값setting작업"] },
  { code: "통신 8-7-2", name: "종 합", spec: "데이터로거(DataLogger) 동작상태확인", unit: "대", labors: {"S/W시험사": 0.76, "H/W시험사": 0.76}, category: "device", page: 280, keywords: ["데이터로거(datalogger) 동작상태확인", "자동기상관측시스템", "종 합"] },
  { code: "통신 8-7-2", name: "시 험", spec: "풍향,풍속,기압,온도,습도,시정계시험조정", unit: "식", labors: {"S/W시험사": 0.2, "H/W시험사": 0.2}, category: "device", page: 280, keywords: ["풍향,풍속,기압,온도,습도,시정계시험조정", "시 험", "자동기상관측시스템"] },
  { code: "통신 8-7-2", name: "시 험", spec: "SystemApplication 및연동Software시험", unit: "식", labors: {"S/W시험사": 0.38, "H/W시험사": 0.38}, category: "device", page: 280, keywords: ["시 험", "systemapplication 및연동software시험", "자동기상관측시스템"] },
  { code: "통신 8-7-3", name: "장비설치", spec: "수수기", unit: "대", labors: {"통신설비공": 0.33}, category: "device", page: 280, keywords: ["강우량 측정 시스템", "장비설치", "수수기"] },
  { code: "통신 8-7-3", name: "시 험", spec: "", unit: "식", labors: {"S/W시험사": 0.09, "통신관련산업기사": 0.09}, category: "device", page: 280, keywords: ["시 험", "강우량 측정 시스템"] },
  { code: "통신 8-7-4", name: "데이터 로거(Data Logger)", spec: "", unit: "대", labors: {"통신설비공": 0.2, "통신관련산업기사": 0.2}, category: "device", page: 281, keywords: ["데이터 로거(data logger)", "대기오염측정시스템"] },
  { code: "통신 8-7-4", name: "아황산가스(SO₂) 측정기", spec: "", unit: "대", labors: {"통신설비공": 0.17, "통신관련산업기사": 0.17}, category: "device", page: 281, keywords: ["대기오염측정시스템", "아황산가스(so₂) 측정기"] },
  { code: "통신 8-7-4", name: "일산화탄소(CO) 측정기", spec: "", unit: "대", labors: {"통신설비공": 0.15, "통신관련산업기사": 0.15}, category: "device", page: 281, keywords: ["일산화탄소(co) 측정기", "대기오염측정시스템"] },
  { code: "통신 8-7-4", name: "이산화질소(NO₂) 측정기", spec: "", unit: "대", labors: {"통신설비공": 0.17, "통신관련산업기사": 0.17}, category: "device", page: 281, keywords: ["이산화질소(no₂) 측정기", "대기오염측정시스템"] },
  { code: "통신 8-7-4", name: "오존(O₃) 측정기", spec: "", unit: "대", labors: {"통신설비공": 0.16, "통신관련산업기사": 0.16}, category: "device", page: 281, keywords: ["대기오염측정시스템", "오존(o₃) 측정기"] },
  { code: "통신 8-7-4", name: "먼지 측정기", spec: "", unit: "대", labors: {"통신설비공": 0.16, "통신관련산업기사": 0.16}, category: "device", page: 281, keywords: ["대기오염측정시스템", "먼지 측정기"] },
  { code: "통신 8-7-5", name: "적설계", spec: "", unit: "대", labors: {"H/W시험사": 0.29, "통신설비공": 0.29}, category: "device", page: 282, keywords: ["적설계", "적설량 관측시스템"] },
  { code: "통신 8-7-5", name: "적설데이터로거", spec: "", unit: "대", labors: {"H/W시험사": 0.63, "통신설비공": 0.63}, category: "device", page: 282, keywords: ["적설데이터로거", "적설량 관측시스템"] },
  { code: "통신 8-7-5", name: "적설판(1.5m×1.5m)", spec: "", unit: "대", labors: {"H/W시험사": 0.02, "통신설비공": 0.02}, category: "device", page: 282, keywords: ["적설량 관측시스템", "적설판(1.5m×1.5m)"] },
  { code: "통신 9-1-1", name: "루프 코일 설치", spec: "4각, 8각", unit: "개", labors: {"통신관련산업기사": 0.34, "통신케이블공": 0.34, "통신설비공": 0.34, "보통인부": 0.34}, category: "device", page: 287, keywords: ["4각, 8각", "검지(루프, 영상, avi) 시스템", "루프 코일 설치"] },
  { code: "통신 9-1-1", name: "촬상부", spec: "카메라 설치", unit: "대", labors: {"통신관련산업기사": 0.7, "통신설비공": 0.7}, category: "device", page: 287, keywords: ["카메라 설치", "촬상부", "검지(루프, 영상, avi) 시스템"] },
  { code: "통신 9-1-1", name: "제어부", spec: "제어함체 설치", unit: "개", labors: {"통신설비공": 0.4, "보통인부": 0.4}, category: "device", page: 287, keywords: ["검지(루프, 영상, avi) 시스템", "제어부", "제어함체 설치"] },
  { code: "통신 9-1-1", name: "부대 공종", spec: "강관주 구멍뚫기 및 나 사산작업", unit: "개소", labors: {"통신설비공": 0.14, "보통인부": 0.14}, category: "device", page: 287, keywords: ["부대 공종", "검지(루프, 영상, avi) 시스템", "강관주 구멍뚫기 및 나 사산작업"] },
  { code: "통신 9-1-1", name: "영상 분석", spec: "기본 자료 수집", unit: "차로", labors: {"통신관련산업기사": 0.3, "통신설비공": 0.3, "보통인부": 0.6}, category: "device", page: 287, keywords: ["영상 분석", "검지(루프, 영상, avi) 시스템", "기본 자료 수집"] },
  { code: "통신 9-1-1", name: "종 합 시 험", spec: "", unit: "시스템", labors: {"S/W시험사": 0.91, "H/W시험사": 0.91}, category: "device", page: 287, keywords: ["검지(루프, 영상, avi) 시스템", "종 합 시 험"] },
  { code: "통신 9-1-2", name: "검 지 기", spec: "", unit: "대", labors: {"통신설비공": 0.43, "보통인부": 0.43}, category: "device", page: 289, keywords: ["검 지 기", "레이더 검지기"] },
  { code: "통신 9-1-2", name: "제 어 기", spec: "", unit: "대", labors: {"통신관련산업기사": 0.47, "H/W시험사": 0.47, "보통인부": 0.47}, category: "device", page: 289, keywords: ["제 어 기", "레이더 검지기"] },
  { code: "통신 9-1-3", name: "노 변 기 지 국 (RSE)", spec: "안 테 나 부", unit: "대", labors: {"통신관련산업기사": 0.61, "무선안테나공": 0.36, "통신설비공": 0.36, "보통인부": 0.36}, category: "device", page: 289, keywords: ["노 변 기 지 국 (rse)", "노변기지국(road side equipment) 설비", "안 테 나 부"] },
  { code: "통신 9-1-3", name: "차량단말기 (OBE /CNS/통합형)", spec: "", unit: "-", labors: {"무선안테나공": 0.2, "통신설비공": 0.2}, category: "device", page: 289, keywords: ["차량단말기 (obe /cns/통합형)", "노변기지국(road side equipment) 설비"] },
  { code: "통신 9-1-3", name: "종합시험", spec: "", unit: "대", labors: {"통신관련산업기사": 0.45, "H/W시험사": 0.45}, category: "device", page: 289, keywords: ["종합시험", "노변기지국(road side equipment) 설비"] },
  { code: "통신 9-1-4", name: "가변표지판 설치", spec: "문형식", unit: "대", labors: {"통신관련산업기사": 0.66, "통신설비공": 0.66, "보통인부": 1.32}, category: "device", page: 290, keywords: ["가변정보표지판(vms) 및 차로제어시스템(lcs)", "문형식", "가변표지판 설치"] },
  { code: "통신 9-1-4", name: "제어 함체부 설 치", spec: "제어부함체 설치", unit: "대", labors: {"통신설비공": 0.4, "보통인부": 0.4}, category: "device", page: 290, keywords: ["제어 함체부 설 치", "가변정보표지판(vms) 및 차로제어시스템(lcs)", "제어부함체 설치"] },
  { code: "통신 9-1-4", name: "모뎀설치 및 시험", spec: "무선모뎀", unit: "대", labors: {"S/W시험사": 0.38, "H/W시험사": 0.23}, category: "device", page: 290, keywords: ["무선모뎀", "모뎀설치 및 시험", "가변정보표지판(vms) 및 차로제어시스템(lcs)"] },
  { code: "통신 9-1-4", name: "시험", spec: "현장시험", unit: "대", labors: {"통신관련산업기사": 0.15, "H/W시험사": 0.15}, category: "device", page: 290, keywords: ["시험", "가변정보표지판(vms) 및 차로제어시스템(lcs)", "현장시험"] },
  { code: "통신 9-1-5", name: "신호등주(철주) 신설", spec: "Ø250 x 8m이하", unit: "기", labors: {"통신외선공": 0.96, "보통인부": 0.69}, category: "device", page: 291, keywords: ["ø250 x 8m이하", "교통신호기", "신호등주(철주) 신설"] },
  { code: "통신 9-1-5", name: "보행등주(철주) 신설", spec: "Ø125 x 6m", unit: "기", labors: {"통신외선공": 0.58, "보통인부": 0.41}, category: "device", page: 291, keywords: ["ø125 x 6m", "교통신호기", "보행등주(철주) 신설"] },
  { code: "통신 9-1-5", name: "전선관 배관", spec: "Ø50㎜이하", unit: "10m", labors: {"통신외선공": 0.12, "보통인부": 0.29}, category: "device", page: 291, keywords: ["전선관 배관", "교통신호기", "ø50㎜이하"] },
  { code: "통신 9-1-5", name: "신호케이블 포설", spec: "2.0㎟ x 5C", unit: "10m", labors: {"통신케이블공": 0.32}, category: "device", page: 291, keywords: ["신호케이블 포설", "2.0㎟ x 5c", "교통신호기"] },
  { code: "통신 9-1-5", name: "LED 교통신호등 신설", spec: "차량등(4색등 이하)", unit: "개", labors: {"통신설비공": 0.4}, category: "device", page: 291, keywords: ["led 교통신호등 신설", "차량등(4색등 이하)", "교통신호기"] },
  { code: "통신 9-1-5", name: "차광막 설치", spec: "-", unit: "개", labors: {"통신설비공": 0.6, "보통인부": 0.6}, category: "device", page: 291, keywords: ["차광막 설치", "교통신호기"] },
  { code: "통신 9-1-6", name: "교통신호제어기설치", spec: "", unit: "개", labors: {"통신관련산업기사": 0.2, "통신케이블공": 0.2, "통신설비공": 0.2, "보통인부": 0.2}, category: "device", page: 292, keywords: ["교통신호제어기설치", "교통신호제어기"] },
  { code: "통신 9-1-6", name: "신호선중간접속및성단작업", spec: "", unit: "개", labors: {"통신관련산업기사": 0.47, "통신케이블공": 0.47, "보통인부": 0.47}, category: "device", page: 292, keywords: ["교통신호제어기", "신호선중간접속및성단작업"] },
  { code: "통신 9-1-6", name: "신호등 확인", spec: "", unit: "개", labors: {"통신관련산업기사": 0.15, "보통인부": 0.6}, category: "device", page: 292, keywords: ["신호등 확인", "교통신호제어기"] },
  { code: "통신 9-1-6", name: "차선별메시지입력 및 셋팅", spec: "", unit: "개", labors: {"H/W시험사": 0.19, "보통인부": 0.1}, category: "device", page: 292, keywords: ["차선별메시지입력 및 셋팅", "교통신호제어기"] },
  { code: "통신 9-1-6", name: "모뎀설치 및 시험", spec: "", unit: "개", labors: {"S/W시험사": 0.38, "H/W시험사": 0.23}, category: "device", page: 292, keywords: ["모뎀설치 및 시험", "교통신호제어기"] },
  { code: "통신 9-1-6", name: "신호시험", spec: "", unit: "개", labors: {"H/W시험사": 0.05, "보통인부": 0.2}, category: "device", page: 292, keywords: ["신호시험", "교통신호제어기"] },
  { code: "통신 9-1-6", name: "종합시험", spec: "", unit: "개", labors: {"통신관련산업기사": 0.65, "H/W시험사": 0.65}, category: "device", page: 292, keywords: ["종합시험", "교통신호제어기"] },
  { code: "통신 9-1-7", name: "찰상부", spec: "카메라 설치", unit: "대", labors: {"통신관련산업기사": 0.7, "통신설비공": 0.7}, category: "device", page: 293, keywords: ["카메라 설치", "찰상부", "위반단속 장비(과속, 신호위반, 전용차로, 주차)"] },
  { code: "통신 9-1-7", name: "제 어 부", spec: "제어함체 설치", unit: "개", labors: {"통신설비공": 0.07, "보통인부": 0.07}, category: "device", page: 293, keywords: ["제어함체 설치", "제 어 부", "위반단속 장비(과속, 신호위반, 전용차로, 주차)"] },
  { code: "통신 9-1-7", name: "부대 공정", spec: "강관주 구멍뚫기 및 나사산작업", unit: "개소", labors: {"통신설비공": 0.14, "보통인부": 0.14}, category: "device", page: 293, keywords: ["강관주 구멍뚫기 및 나사산작업", "위반단속 장비(과속, 신호위반, 전용차로, 주차)", "부대 공정"] },
  { code: "통신 9-1-7", name: "영상 분석", spec: "기본 자료 수집", unit: "차로", labors: {"통신관련산업기사": 0.54, "통신설비공": 0.54, "보통인부": 1.08}, category: "device", page: 293, keywords: ["영상 분석", "위반단속 장비(과속, 신호위반, 전용차로, 주차)", "기본 자료 수집"] },
  { code: "통신 9-1-7", name: "종합 시험", spec: "시스템", unit: "식", labors: {"S/W시험사": 0.91, "H/W시험사": 0.91}, category: "device", page: 293, keywords: ["종합 시험", "위반단속 장비(과속, 신호위반, 전용차로, 주차)", "시스템"] },
  { code: "통신 9-1-8", name: "정류장안 내 단말기 설치", spec: "단말기설치", unit: "대", labors: {"통신설비공": 0.23, "특별인부": 0.23, "보통인부": 0.23}, category: "device", page: 294, keywords: ["단말기설치", "정류장안 내 단말기 설치", "정류장 안내단말기"] },
  { code: "통신 9-1-8", name: "정류장안내단말기 시험", spec: "", unit: "대", labors: {"통신설비공": 0.17, "특별인부": 0.17, "보통인부": 0.17}, category: "device", page: 294, keywords: ["정류장안내단말기 시험", "정류장 안내단말기"] },
  { code: "통신 9-1-8", name: "시험", spec: "선로시험", unit: "대", labors: {"통신관련산업기사": 0.2, "보통인부": 0.2}, category: "device", page: 294, keywords: ["시험", "정류장 안내단말기", "선로시험"] },
  { code: "통신 9-1-9", name: "소형무선기지국", spec: "설치", unit: "개", labors: {"통신관련산업기사": 1.94, "통신설비공": 1.6}, category: "device", page: 295, keywords: ["교통정보수집시스템(beacon)", "소형무선기지국", "설치"] },
  { code: "통신 9-1-9", name: "위 치 비 콘", spec: "설치", unit: "개", labors: {"통신외선공": 0.12, "보통인부": 0.12}, category: "device", page: 295, keywords: ["교통정보수집시스템(beacon)", "위 치 비 콘", "설치"] },
  { code: "통신 9-1-9", name: "차량 통신모듈", spec: "설치", unit: "개", labors: {"통신설비공": 0.22, "특별인부": 0.22}, category: "device", page: 295, keywords: ["교통정보수집시스템(beacon)", "차량 통신모듈", "설치"] },
  { code: "통신 9-1-10", name: "차량자동인식장치(AVI)철주", spec: "8m", unit: "기", labors: {"통신외선공": 1.79, "통신설비공": 0.43, "특별인부": 1.79}, category: "device", page: 295, keywords: ["차량자동인식장치(avi)철주", "its 철주", "8m"] },
  { code: "통신 9-1-10", name: "가변정보표지판(VMS)철주", spec: "9m", unit: "기", labors: {"통신외선공": 3.6, "통신설비공": 0.56, "특별인부": 3.6}, category: "device", page: 295, keywords: ["가변정보표지판(vms)철주", "its 철주", "9m"] },
  { code: "통신 9-1-10", name: "차량검지시스템(VDS)철주", spec: "12m", unit: "기", labors: {"통신외선공": 2.04, "통신설비공": 0.47, "특별인부": 2.04}, category: "device", page: 295, keywords: ["차량검지시스템(vds)철주", "12m", "its 철주"] },
  { code: "통신 9-1-10", name: "위반단속장비철주", spec: "“", unit: "기", labors: {"통신외선공": 1.72, "특별인부": 1.72}, category: "device", page: 295, keywords: ["its 철주", "위반단속장비철주"] },
  { code: "통신 9-1-10", name: "CCTV(Closed Circuit TV)철주", spec: "15m", unit: "기", labors: {"통신외선공": 3.06, "특별인부": 2.3}, category: "device", page: 295, keywords: ["cctv(closed circuit tv)철주", "its 철주", "15m"] },
  { code: "통신 9-1-10", name: "부착대(Arm) 설치", spec: "6m이하", unit: "기", labors: {"통신외선공": 0.32, "특별인부": 0.32}, category: "device", page: 295, keywords: ["부착대(arm) 설치", "6m이하", "its 철주"] },
  { code: "통신 9-1-10", name: "안전작업대 설치", spec: "원형", unit: "기", labors: {"통신외선공": 0.72, "특별인부": 0.59}, category: "device", page: 295, keywords: ["안전작업대 설치", "its 철주", "원형"] },
  { code: "통신 9-1-11", name: "제어장치", spec: "", unit: "대", labors: {"통신관련산업기사": 0.59, "통신설비공": 0.59, "보통인부": 0.59}, category: "device", page: 296, keywords: ["제어장치", "교차점 알리미 시스템"] },
  { code: "통신 9-1-11", name: "무선검지기", spec: "", unit: "대", labors: {"통신관련산업기사": 0.38, "통신설비공": 0.38, "보통인부": 0.38}, category: "device", page: 296, keywords: ["교차점 알리미 시스템", "무선검지기"] },
  { code: "통신 9-1-11", name: "도로안전등", spec: "", unit: "대", labors: {"통신관련산업기사": 0.37, "통신케이블공": 0.19, "보통인부": 0.19}, category: "device", page: 296, keywords: ["교차점 알리미 시스템", "도로안전등"] },
  { code: "통신 9-1-11", name: "함체설치", spec: "", unit: "대", labors: {"통신설비공": 0.4, "보통인부": 0.4}, category: "device", page: 296, keywords: ["함체설치", "교차점 알리미 시스템"] },
  { code: "통신 9-1-11", name: "전원선 포설 및 연결", spec: "", unit: "개소", labors: {"통신설비공": 0.42, "통신케이블공": 0.42}, category: "device", page: 296, keywords: ["전원선 포설 및 연결", "교차점 알리미 시스템"] },
  { code: "통신 9-1-11", name: "제어선 포설 및 연결", spec: "", unit: "개소", labors: {"통신설비공": 0.51, "통신케이블공": 0.51}, category: "device", page: 296, keywords: ["제어선 포설 및 연결", "교차점 알리미 시스템"] },
  { code: "통신 9-1-12", name: "도로피에조센서 설치", spec: "", unit: "개", labors: {"통신관련산업기사": 0.9, "통신설비공": 0.6, "보통인부": 0.6}, category: "device", page: 297, keywords: ["도로피에조센서 감지시스템", "도로피에조센서 설치"] },
  { code: "통신 9-1-12", name: "제어함체 설치", spec: "", unit: "개", labors: {"통신설비공": 0.4, "보통인부": 0.4}, category: "device", page: 297, keywords: ["도로피에조센서 감지시스템", "제어함체 설치"] },
  { code: "통신 9-1-14", name: "키오스크", spec: "", unit: "대", labors: {"통신관련산업기사": 0.83, "S/W시험사": 0.83, "통신설비공": 0.87}, category: "device", page: 297, keywords: ["키오스크", "자전거무인대여시스템"] },
  { code: "통신 9-1-14", name: "거 치 대", spec: "", unit: "대", labors: {"통신설비공": 0.33}, category: "device", page: 297, keywords: ["거 치 대", "자전거무인대여시스템"] },
  { code: "통신 9-1-15", name: "답판 센서", spec: "", unit: "개소", labors: {"통신설비공": 0.75, "보통인부": 0.45}, category: "device", page: 298, keywords: ["고속도로 자동통행료 징수시스템", "답판 센서"] },
  { code: "통신 9-1-15", name: "광센서", spec: "1회로", unit: "대", labors: {"H/W시험사": 1.23, "통신내선공": 0.61}, category: "device", page: 298, keywords: ["고속도로 자동통행료 징수시스템", "광센서", "1회로"] },
  { code: "통신 9-1-15", name: "통합차로 제어기", spec: "설치", unit: "대", labors: {"통신관련산업기사": 0.2, "통신케이블공": 0.25, "통신설비공": 0.65, "보통인부": 0.7}, category: "device", page: 298, keywords: ["고속도로 자동통행료 징수시스템", "통합차로 제어기", "설치"] },
  { code: "통신 9-1-15", name: "영상촬영장치", spec: "", unit: "대", labors: {"통신관련산업기사": 1.43, "통신설비공": 0.75}, category: "device", page: 298, keywords: ["고속도로 자동통행료 징수시스템", "영상촬영장치"] },
  { code: "통신 9-1-15", name: "통행권확인기", spec: "", unit: "대", labors: {"S/W시험사": 0.58, "H/W시험사": 0.64, "통신관련산업기사": 0.83, "통신케이블공": 0.34}, category: "device", page: 298, keywords: ["고속도로 자동통행료 징수시스템", "통행권확인기"] },
  { code: "통신 9-1-15", name: "차선 제어기", spec: "설치", unit: "대", labors: {"통신관련산업기사": 0.4, "통신설비공": 0.4}, category: "device", page: 298, keywords: ["고속도로 자동통행료 징수시스템", "차선 제어기", "설치"] },
  { code: "통신 9-1-15", name: "영수증발행기", spec: "", unit: "대", labors: {"통신내선공": 0.05, "통신설비공": 0.2, "보통인부": 0.16}, category: "device", page: 298, keywords: ["고속도로 자동통행료 징수시스템", "영수증발행기"] },
  { code: "통신 9-1-15", name: "안테나", spec: "설치", unit: "대", labors: {"통신관련산업기사": 0.61, "무선안테나공": 0.36, "통신설비공": 0.36, "보통인부": 0.36}, category: "device", page: 298, keywords: ["고속도로 자동통행료 징수시스템", "설치", "안테나"] },
  { code: "통신 9-1-15", name: "운전자표시기", spec: "", unit: "대", labors: {"통신내선공": 0.32, "통신설비공": 0.43}, category: "device", page: 298, keywords: ["고속도로 자동통행료 징수시스템", "운전자표시기"] },
  { code: "통신 9-1-15", name: "갠트리", spec: "VMS Type", unit: "대", labors: {"무선안테나공": 0.56, "통신외선공": 3.6, "특별인부": 3.6}, category: "device", page: 298, keywords: ["고속도로 자동통행료 징수시스템", "갠트리", "vms type"] },
  { code: "통신 9-1-16", name: "루프 검지 기", spec: "8각", unit: "개", labors: {"통신관련산업기사": 0.34, "통신케이블공": 0.34, "통신설비공": 0.34, "보통인부": 0.34}, category: "device", page: 299, keywords: ["교통감응신호 설비", "루프 검지 기", "8각"] },
  { code: "통신 9-1-16", name: "검지기보드", spec: "", unit: "대", labors: {"H/W시험사": 0.25, "통신설비공": 0.25}, category: "device", page: 299, keywords: ["검지기보드", "교통감응신호 설비"] },
  { code: "통신 9-1-17", name: "통학로 등하교 알리미", spec: "", unit: "대", labors: {"H/W시험사": 0.11, "통신설비공": 0.11}, category: "device", page: 299, keywords: ["통학로 등하교 알리미"] },
  { code: "통신 9-2-1-1", name: "촬상부 설 치", spec: "카메라", unit: "대", labors: {"통신설비공": 0.24, "특별인부": 0.24}, category: "device", page: 300, keywords: ["cctv 시스템", "촬상부 설 치", "카메라"] },
  { code: "통신 9-2-1-1", name: "감시부 설 치", spec: "Receiver판넬", unit: "개", labors: {"통신관련산업기사": 0.43, "통신설비공": 0.32}, category: "device", page: 300, keywords: ["감시부 설 치", "cctv 시스템", "receiver판넬"] },
  { code: "통신 9-2-1-1", name: "전송부 설 치", spec: "엔코더", unit: "대", labors: {"통신설비공": 0.2, "보통인부": 0.2}, category: "device", page: 300, keywords: ["전송부 설 치", "cctv 시스템", "엔코더"] },
  { code: "통신 9-2-1-1", name: "시 험", spec: "송수신 제어신호 및 영상 Level 조정", unit: "세트", labors: {"통신관련산업기사": 0.52, "통신설비공": 0.65}, category: "device", page: 300, keywords: ["시 험", "cctv 시스템", "송수신 제어신호 및 영상 level 조정"] },
  { code: "통신 9-2-1-2", name: "블레이드 (Blade)", spec: "본체설치", unit: "대", labors: {"통신설비공": 0.45, "H/W시험사": 0.45}, category: "device", page: 302, keywords: ["통합관제센터", "본체설치", "블레이드 (blade)"] },
  { code: "통신 9-2-1-2", name: "스토리지 (Storage)", spec: "본체설치", unit: "대", labors: {"통신설비공": 0.9}, category: "device", page: 302, keywords: ["스토리지 (storage)", "통합관제센터", "본체설치"] },
  { code: "통신 9-2-1-2", name: "L3스위치", spec: "본체설치", unit: "대", labors: {"통신관련산업기사": 0.2, "통신설비공": 0.2}, category: "device", page: 302, keywords: ["l3스위치", "통합관제센터", "본체설치"] },
  { code: "통신 9-2-1-2", name: "네트워크 비디오 서버", spec: "본체설치", unit: "세트", labors: {"통신관련산업기사": 0.19, "통신설비공": 0.18}, category: "device", page: 302, keywords: ["본체설치", "통합관제센터", "네트워크 비디오 서버"] },
  { code: "통신 9-2-1-2", name: "Base Frame", spec: "", unit: "면", labors: {"통신설비공": 0.09, "보통인부": 0.02}, category: "device", page: 304, keywords: ["통합관제센터", "base frame"] },
  { code: "통신 9-2-1-2", name: "LED-DLP 큐브", spec: "큐브설치", unit: "대", labors: {"통신관련산업기사": 0.1, "통신설비공": 0.1}, category: "device", page: 304, keywords: ["led-dlp 큐브", "큐브설치", "통합관제센터"] },
  { code: "통신 9-2-1-2", name: "RGB Matrix Switcher", spec: "본체설치", unit: "대", labors: {"통신관련산업기사": 0.38, "통신설비공": 0.38}, category: "device", page: 304, keywords: ["rgb matrix switcher", "통합관제센터", "본체설치"] },
  { code: "통신 9-2-1-2", name: "Wall Controller", spec: "본체설치", unit: "대", labors: {"통신관련산업기사": 0.35, "통신설비공": 0.35, "S/W시험사": 0.8}, category: "device", page: 304, keywords: ["통합관제센터", "wall controller", "본체설치"] },
  { code: "통신 9-2-1-2", name: "게이트웨이", spec: "본체설치", unit: "대", labors: {"S/W시험사": 1.1, "H/W시험사": 1.1}, category: "device", page: 304, keywords: ["게이트웨이", "통합관제센터", "본체설치"] },
  { code: "통신 9-2-1-2", name: "KVM Switch", spec: "", unit: "대", labors: {"S/W시험사": 0.19, "H/W시험사": 0.19}, category: "device", page: 304, keywords: ["kvm switch", "통합관제센터"] },
  { code: "통신 9-2-1-2", name: "KVM Extender", spec: "", unit: "세트", labors: {"S/W시험사": 0.14, "H/W시험사": 0.14}, category: "device", page: 304, keywords: ["kvm extender", "통합관제센터"] },
  { code: "통신 9-2-1-2", name: "VGA Extender", spec: "", unit: "세트", labors: {"S/W시험사": 0.11, "H/W시험사": 0.11}, category: "device", page: 304, keywords: ["vga extender", "통합관제센터"] },
  { code: "통신 9-2-1-3", name: "3m 이하 [설계하중 200㎏ 이하]", spec: "", unit: "개", labors: {"통신외선공": 0.29, "보통인부": 0.56}, category: "device", page: 305, keywords: ["cctv pole", "3m 이하 [설계하중 200㎏ 이하]"] },
  { code: "통신 9-2-1-3", name: "5m [설계하중 200㎏ 이하]", spec: "", unit: "개", labors: {"통신외선공": 0.5, "보통인부": 0.56}, category: "device", page: 305, keywords: ["5m [설계하중 200㎏ 이하]", "cctv pole"] },
  { code: "통신 9-2-1-3", name: "5m [설계하중 200㎏ 이상]", spec: "", unit: "개", labors: {"통신외선공": 0.65, "보통인부": 0.73}, category: "device", page: 305, keywords: ["cctv pole", "5m [설계하중 200㎏ 이상]"] },
  { code: "통신 9-2-1-3", name: "6m [설계하중 200㎏ 이하]", spec: "", unit: "개", labors: {"통신외선공": 0.55, "보통인부": 0.62}, category: "device", page: 305, keywords: ["cctv pole", "6m [설계하중 200㎏ 이하]"] },
  { code: "통신 9-2-1-3", name: "6m [설계하중 200㎏ 이상]", spec: "", unit: "개", labors: {"통신외선공": 0.72, "보통인부": 0.81}, category: "device", page: 305, keywords: ["6m [설계하중 200㎏ 이상]", "cctv pole"] },
  { code: "통신 9-2-1-3", name: "7m [설계하중 200㎏ 이하]", spec: "", unit: "개", labors: {"통신외선공": 0.95, "보통인부": 1.08}, category: "device", page: 305, keywords: ["7m [설계하중 200㎏ 이하]", "cctv pole"] },
  { code: "통신 9-2-1-3", name: "7m [설계하중 200㎏ 이상]", spec: "", unit: "개", labors: {"통신외선공": 1.23, "보통인부": 1.4}, category: "device", page: 305, keywords: ["7m [설계하중 200㎏ 이상]", "cctv pole"] },
  { code: "통신 9-2-1-3", name: "8m [설계하중 200㎏ 이하]", spec: "", unit: "개", labors: {"통신외선공": 1.28, "보통인부": 1.45}, category: "device", page: 305, keywords: ["cctv pole", "8m [설계하중 200㎏ 이하]"] },
  { code: "통신 9-2-1-3", name: "8m [설계하중 200㎏ 이상]", spec: "", unit: "개", labors: {"통신외선공": 1.66, "보통인부": 1.88}, category: "device", page: 305, keywords: ["8m [설계하중 200㎏ 이상]", "cctv pole"] },
  { code: "통신 9-2-1-3", name: "9m [설계하중 200㎏ 이하]", spec: "", unit: "개", labors: {"통신외선공": 1.29, "보통인부": 1.64}, category: "device", page: 305, keywords: ["9m [설계하중 200㎏ 이하]", "cctv pole"] },
  { code: "통신 9-2-1-3", name: "9m [설계하중 200㎏ 이상]", spec: "", unit: "개", labors: {"통신외선공": 1.68, "보통인부": 2.13}, category: "device", page: 305, keywords: ["cctv pole", "9m [설계하중 200㎏ 이상]"] },
  { code: "통신 9-2-1-3", name: "10m [설계하중 200㎏ 이하]", spec: "", unit: "개", labors: {"통신외선공": 1.55, "보통인부": 1.96}, category: "device", page: 305, keywords: ["10m [설계하중 200㎏ 이하]", "cctv pole"] },
  { code: "통신 9-2-1-3", name: "10m [설계하중 200㎏ 이상]", spec: "", unit: "개", labors: {"통신외선공": 2.01, "보통인부": 2.55}, category: "device", page: 305, keywords: ["cctv pole", "10m [설계하중 200㎏ 이상]"] },
  { code: "통신 9-2-1-3", name: "11m [설계하중 200㎏ 이하]", spec: "", unit: "개", labors: {"통신외선공": 1.93, "보통인부": 2.03}, category: "device", page: 305, keywords: ["11m [설계하중 200㎏ 이하]", "cctv pole"] },
  { code: "통신 9-2-1-3", name: "11m [설계하중 200㎏ 이상]", spec: "", unit: "개", labors: {"통신외선공": 2.5, "보통인부": 2.63}, category: "device", page: 305, keywords: ["cctv pole", "11m [설계하중 200㎏ 이상]"] },
  { code: "통신 9-2-1-3", name: "12m [설계하중 200㎏ 이하]", spec: "", unit: "개", labors: {"통신외선공": 2.2, "보통인부": 2.31}, category: "device", page: 305, keywords: ["12m [설계하중 200㎏ 이하]", "cctv pole"] },
  { code: "통신 9-2-1-3", name: "12m [설계하중 200㎏ 이상]", spec: "", unit: "개", labors: {"통신외선공": 2.86, "보통인부": 3.0}, category: "device", page: 305, keywords: ["cctv pole", "12m [설계하중 200㎏ 이상]"] },
  { code: "통신 9-2-1-3", name: "14m [설계하중 200㎏ 이하]", spec: "", unit: "개", labors: {"통신외선공": 2.77, "보통인부": 3.26}, category: "device", page: 305, keywords: ["cctv pole", "14m [설계하중 200㎏ 이하]"] },
  { code: "통신 9-2-1-3", name: "14m [설계하중 200㎏ 이상]", spec: "", unit: "개", labors: {"통신외선공": 3.6, "보통인부": 4.24}, category: "device", page: 305, keywords: ["cctv pole", "14m [설계하중 200㎏ 이상]"] },
  { code: "통신 9-2-2-1", name: "주제어장치 (AccessControl Unit)", spec: "1 Door", unit: "세트", labors: {"통신관련산업기사": 0.13, "통신케이블공": 1.0, "통신설비공": 1.13}, category: "device", page: 306, keywords: ["1 door", "주제어장치 (accesscontrol unit)", "통합형 시스템"] },
  { code: "통신 9-2-2-1", name: "Card Reader", spec: "-", unit: "대", labors: {"통신케이블공": 0.61, "통신설비공": 0.61}, category: "device", page: 306, keywords: ["통합형 시스템", "card reader"] },
  { code: "통신 9-2-2-1", name: "Door Lock", spec: "E/M Lock", unit: "대", labors: {"통신케이블공": 0.48, "통신설비공": 0.48}, category: "device", page: 306, keywords: ["door lock", "통합형 시스템", "e/m lock"] },
  { code: "통신 9-2-2-1", name: "출구버튼", spec: "-", unit: "대", labors: {"통신케이블공": 0.42, "통신설비공": 0.42}, category: "device", page: 306, keywords: ["통합형 시스템", "출구버튼"] },
  { code: "통신 9-2-2-1", name: "Converter", spec: "RS232/422,485", unit: "대", labors: {"통신케이블공": 0.4, "통신설비공": 0.4}, category: "device", page: 306, keywords: ["rs232/422,485", "converter", "통합형 시스템"] },
  { code: "통신 9-2-2-1", name: "종 합 시 험", spec: "", unit: "식", labors: {"통신설비공": 0.96, "S/W시험사": 2.38}, category: "device", page: 306, keywords: ["종 합 시 험", "통합형 시스템"] },
  { code: "통신 9-2-2-2", name: "Card Reader", spec: "단독형", unit: "대", labors: {"통신케이블공": 0.76, "통신설비공": 0.76}, category: "device", page: 307, keywords: ["단독형(stand-alone type) 시스템", "단독형", "card reader"] },
  { code: "통신 9-2-2-2", name: "생체인식기", spec: "지문", unit: "대", labors: {"통신관련산업기사": 0.38, "통신케이블공": 0.9, "통신설비공": 1.27}, category: "device", page: 307, keywords: ["생체인식기", "지문", "단독형(stand-alone type) 시스템"] },
  { code: "통신 9-2-2-2", name: "생체등록기", spec: "지문", unit: "대", labors: {"통신설비공": 0.5, "S/W시험사": 0.63}, category: "device", page: 307, keywords: ["생체등록기", "지문", "단독형(stand-alone type) 시스템"] },
  { code: "통신 9-2-2-3", name: "출입게이트", spec: "설 치", unit: "대", labors: {"통신관련산업기사": 0.36, "통신케이블공": 0.32, "통신설비공": 0.63, "통신내선공": 1.0}, category: "device", page: 307, keywords: ["설 치", "출입통제 게이트", "출입게이트"] },
  { code: "통신 9-2-2-3", name: "화물게이트", spec: "", unit: "대", labors: {"통신설비공": 0.34, "통신내선공": 0.34}, category: "device", page: 307, keywords: ["출입통제 게이트", "화물게이트"] },
  { code: "통신 9-2-2-3", name: "Glass Wall", spec: "", unit: "대", labors: {"통신설비공": 0.31, "통신내선공": 0.31}, category: "device", page: 307, keywords: ["출입통제 게이트", "glass wall"] },
  { code: "통신 9-2-4-1", name: "신호전송기", spec: "", unit: "대", labors: {"통신설비공": 0.12, "통신케이블공": 0.12}, category: "device", page: 308, keywords: ["신호전송기", "주장치"] },
  { code: "통신 9-2-4-1", name: "메인주장치", spec: "", unit: "대", labors: {"통신설비공": 0.18, "통신케이블공": 0.18}, category: "device", page: 308, keywords: ["주장치", "메인주장치"] },
  { code: "통신 9-2-4-1", name: "알람표시기", spec: "", unit: "대", labors: {"통신설비공": 0.11, "통신케이블공": 0.22}, category: "device", page: 308, keywords: ["알람표시기", "주장치"] },
  { code: "통신 9-2-4-1", name: "로컬컨트롤러", spec: "", unit: "대", labors: {"통신설비공": 0.12, "통신케이블공": 0.12}, category: "device", page: 308, keywords: ["로컬컨트롤러", "주장치"] },
  { code: "통신 9-2-4-1", name: "셔터신호전송기", spec: "", unit: "대", labors: {"통신설비공": 0.14, "통신케이블공": 0.32}, category: "device", page: 308, keywords: ["주장치", "셔터신호전송기"] },
  { code: "통신 9-2-4-1", name: "락 신호전송기", spec: "", unit: "대", labors: {"통신설비공": 0.13, "통신케이블공": 0.13}, category: "device", page: 308, keywords: ["주장치", "락 신호전송기"] },
  { code: "통신 9-2-4-1", name: "조작표시기", spec: "", unit: "대", labors: {"통신설비공": 0.15, "통신케이블공": 0.29}, category: "device", page: 308, keywords: ["조작표시기", "주장치"] },
  { code: "통신 9-2-4-2", name: "적외선감지기", spec: "", unit: "조", labors: {"통신설비공": 0.14}, category: "device", page: 309, keywords: ["적외선감지기", "감지기(sensor)"] },
  { code: "통신 9-2-4-2", name: "자석감지기", spec: "", unit: "개", labors: {"통신설비공": 0.07}, category: "device", page: 309, keywords: ["감지기(sensor)", "자석감지기"] },
  { code: "통신 9-2-4-2", name: "열선감지기", spec: "", unit: "개", labors: {"통신설비공": 0.07}, category: "device", page: 309, keywords: ["열선감지기", "감지기(sensor)"] },
  { code: "통신 9-2-4-2", name: "동체감지기", spec: "", unit: "개", labors: {"통신설비공": 0.06}, category: "device", page: 309, keywords: ["동체감지기", "감지기(sensor)"] },
  { code: "통신 9-2-4-2", name: "유리감지기", spec: "", unit: "개", labors: {"통신설비공": 0.04}, category: "device", page: 309, keywords: ["유리감지기", "감지기(sensor)"] },
  { code: "통신 9-2-4-2", name: "셧터감지기", spec: "", unit: "개", labors: {"통신설비공": 0.09}, category: "device", page: 309, keywords: ["셧터감지기", "감지기(sensor)"] },
  { code: "통신 9-2-4-2", name: "휀스(장력)감지기", spec: "", unit: "개", labors: {"통신설비공": 0.07}, category: "device", page: 309, keywords: ["휀스(장력)감지기", "감지기(sensor)"] },
  { code: "통신 9-2-4-2", name: "금고감지기", spec: "", unit: "개", labors: {"통신설비공": 0.08}, category: "device", page: 309, keywords: ["금고감지기", "감지기(sensor)"] },
  { code: "통신 9-2-4-2", name: "진동감지기", spec: "", unit: "개", labors: {"통신설비공": 0.03}, category: "device", page: 309, keywords: ["진동감지기", "감지기(sensor)"] },
  { code: "통신 9-2-4-2", name: "벽(충격)감지기", spec: "", unit: "개", labors: {"통신설비공": 0.07}, category: "device", page: 309, keywords: ["벽(충격)감지기", "감지기(sensor)"] },
  { code: "통신 9-2-4-2", name: "누수감지기", spec: "", unit: "개", labors: {"통신설비공": 0.08}, category: "device", page: 309, keywords: ["감지기(sensor)", "누수감지기"] },
  { code: "통신 9-2-4-2", name: "누액감지기", spec: "", unit: "개", labors: {"통신설비공": 0.07}, category: "device", page: 309, keywords: ["누액감지기", "감지기(sensor)"] },
  { code: "통신 9-2-4-2", name: "화재감지기", spec: "", unit: "개", labors: {"통신설비공": 0.06}, category: "device", page: 309, keywords: ["감지기(sensor)", "화재감지기"] },
  { code: "통신 9-2-4-2", name: "가스감지기", spec: "", unit: "개", labors: {"통신설비공": 0.09}, category: "device", page: 309, keywords: ["가스감지기", "감지기(sensor)"] },
  { code: "통신 9-2-4-2", name: "음향감지기", spec: "", unit: "개", labors: {"통신설비공": 0.07}, category: "device", page: 309, keywords: ["음향감지기", "감지기(sensor)"] },
  { code: "통신 9-2-4-2", name: "(CD)충격감지기", spec: "", unit: "개", labors: {"통신설비공": 0.03}, category: "device", page: 309, keywords: ["(cd)충격감지기", "감지기(sensor)"] },
  { code: "통신 9-2-4-3", name: "보조전원장치", spec: "", unit: "개", labors: {"통신설비공": 0.11, "통신내선공": 0.28}, category: "device", page: 310, keywords: ["보조전원장치", "경비․보안 주변기기"] },
  { code: "통신 9-2-4-3", name: "프린터", spec: "", unit: "개", labors: {"통신설비공": 0.04, "통신내선공": 0.05}, category: "device", page: 310, keywords: ["경비․보안 주변기기", "프린터"] },
  { code: "통신 9-2-4-3", name: "카드리더", spec: "", unit: "개", labors: {"통신설비공": 0.1, "통신내선공": 0.1}, category: "device", page: 310, keywords: ["카드리더", "경비․보안 주변기기"] },
  { code: "통신 9-2-4-3", name: "출입관리기", spec: "", unit: "개", labors: {"통신설비공": 0.08, "통신내선공": 0.11}, category: "device", page: 310, keywords: ["경비․보안 주변기기", "출입관리기"] },
  { code: "통신 9-2-4-3", name: "회선제어기", spec: "", unit: "개", labors: {"통신내선공": 0.17}, category: "device", page: 310, keywords: ["경비․보안 주변기기", "회선제어기"] },
  { code: "통신 9-2-4-3", name: "가스이보기", spec: "", unit: "개", labors: {"통신내선공": 0.09}, category: "device", page: 310, keywords: ["경비․보안 주변기기", "가스이보기"] },
  { code: "통신 9-2-4-3", name: "화재이보기", spec: "", unit: "개", labors: {"통신내선공": 0.05}, category: "device", page: 310, keywords: ["화재이보기", "경비․보안 주변기기"] },
  { code: "통신 9-2-4-3", name: "누수감지신호기", spec: "", unit: "개", labors: {"통신내선공": 0.08}, category: "device", page: 310, keywords: ["누수감지신호기", "경비․보안 주변기기"] },
  { code: "통신 9-2-4-3", name: "비상(통보)스위치", spec: "", unit: "개", labors: {"통신내선공": 0.06}, category: "device", page: 310, keywords: ["경비․보안 주변기기", "비상(통보)스위치"] },
  { code: "통신 9-2-4-3", name: "비상램프", spec: "", unit: "개", labors: {"통신내선공": 0.05}, category: "device", page: 310, keywords: ["경비․보안 주변기기", "비상램프"] },
  { code: "통신 9-2-4-3", name: "방범싸이렌", spec: "", unit: "개", labors: {"통신내선공": 0.08}, category: "device", page: 310, keywords: ["경비․보안 주변기기", "방범싸이렌"] },
  { code: "통신 9-2-4-3", name: "락개폐기", spec: "", unit: "개", labors: {"통신설비공": 0.1, "통신내선공": 0.24}, category: "device", page: 310, keywords: ["경비․보안 주변기기", "락개폐기"] },
  { code: "통신 9-2-4-3", name: "방범용 라우터", spec: "", unit: "개", labors: {"통신설비공": 0.11, "통신내선공": 0.25}, category: "device", page: 310, keywords: ["경비․보안 주변기기", "방범용 라우터"] },
  { code: "통신 9-2-4-3", name: "폐점예고등", spec: "", unit: "개", labors: {"통신내선공": 0.07}, category: "device", page: 310, keywords: ["경비․보안 주변기기", "폐점예고등"] },
  { code: "통신 9-2-4-3", name: "CD/ATM감시반", spec: "", unit: "개", labors: {"통신내선공": 0.22}, category: "device", page: 310, keywords: ["cd/atm감시반", "경비․보안 주변기기"] },
  { code: "통신 9-2-4-3", name: "음성안내장치", spec: "", unit: "개", labors: {"통신설비공": 0.12, "통신내선공": 0.18}, category: "device", page: 310, keywords: ["경비․보안 주변기기", "음성안내장치"] },
  { code: "통신 9-2-4-3", name: "설비제어장치", spec: "", unit: "개", labors: {"통신설비공": 0.17, "통신내선공": 0.32}, category: "device", page: 310, keywords: ["경비․보안 주변기기", "설비제어장치"] },
  { code: "통신 9-2-4-3", name: "KEY BOX", spec: "", unit: "개", labors: {"통신내선공": 0.04}, category: "device", page: 310, keywords: ["경비․보안 주변기기", "key box"] },
  { code: "통신 9-2-5-1", name: "키보관 및 객실 현황판 (Key Rack)", spec: "설 치", unit: "대", labors: {"통신케이블공": 0.29, "통신설비공": 0.27}, category: "device", page: 311, keywords: ["설 치", "키보관 및 객실 현황판 (key rack)", "중앙 제어 시스템"] },
  { code: "통신 9-2-5-1", name: "중앙현황판 (Centrol Indicator Panel)", spec: "설 치", unit: "대", labors: {"통신케이블공": 0.17, "통신설비공": 0.15}, category: "device", page: 311, keywords: ["설 치", "중앙현황판 (centrol indicator panel)", "중앙 제어 시스템"] },
  { code: "통신 9-2-5-1", name: "층중계기 (Floor Indicator Panel)", spec: "설 치", unit: "대", labors: {"통신케이블공": 0.16, "통신설비공": 0.16}, category: "device", page: 311, keywords: ["설 치", "층중계기 (floor indicator panel)", "중앙 제어 시스템"] },
  { code: "통신 9-2-5-1", name: "데이터 전송 제어기 (Data Transmit Controller)", spec: "", unit: "대", labors: {"통신관련산업기사": 0.04, "통신케이블공": 0.17, "통신설비공": 0.16}, category: "device", page: 311, keywords: ["데이터 전송 제어기 (data transmit controller)", "중앙 제어 시스템"] },
  { code: "통신 9-2-5-1", name: "종 합 시 험", spec: "", unit: "식", labors: {"통신관련산업기사": 2.15, "통신설비공": 2.08}, category: "device", page: 311, keywords: ["종 합 시 험", "중앙 제어 시스템"] },
  { code: "통신 9-2-5-2", name: "객실제어기 (Control Box)", spec: "주장치 설치", unit: "대", labors: {"통신관련산업기사": 0.42, "통신설비공": 0.38}, category: "device", page: 311, keywords: ["객실제어기 (control box)", "객실내 시스템", "주장치 설치"] },
  { code: "통신 9-2-5-2", name: "단말기(Night Table)", spec: "", unit: "대", labors: {"통신설비공": 0.1}, category: "device", page: 311, keywords: ["객실내 시스템", "단말기(night table)"] },
  { code: "통신 9-2-5-2", name: "각종 부대장치", spec: "", unit: "개", labors: {"통신설비공": 0.04}, category: "device", page: 311, keywords: ["객실내 시스템", "각종 부대장치"] },
  { code: "통신 9-2-5-2", name: "종 합 시 험", spec: "", unit: "식", labors: {"통신관련산업기사": 0.11, "통신설비공": 0.07}, category: "device", page: 311, keywords: ["종 합 시 험", "객실내 시스템"] },
  { code: "통신 9-2-6", name: "비상통화장치", spec: "", unit: "대", labors: {"통신설비공": 0.82}, category: "device", page: 312, keywords: ["승강기 비상통화시스템", "비상통화장치"] },
  { code: "통신 9-2-6", name: "비상조명장치", spec: "", unit: "대", labors: {"통신설비공": 0.25}, category: "device", page: 312, keywords: ["승강기 비상통화시스템", "비상조명장치"] },
  { code: "통신 9-2-9-1", name: "시 험 장 치", spec: "감시제어부", unit: "대", labors: {"통신설비공": 0.21, "H/W시험사": 0.21}, category: "device", page: 312, keywords: ["감시제어부", "시험장치 및 부대장치", "시 험 장 치"] },
  { code: "통신 9-2-9-1", name: "부 대 장 치", spec: "종단 해킹필터 연결", unit: "개", labors: {"광케이블설치사": 0.03, "보통인부": 0.03}, category: "device", page: 312, keywords: ["종단 해킹필터 연결", "시험장치 및 부대장치", "부 대 장 치"] },
  { code: "통신 9-2-9-1", name: "절환스위칭카드", spec: "광펄스시험기반 또는 광심선선택기 증설용", unit: "개", labors: {"통신설비공": 0.06, "H/W시험사": 0.06}, category: "device", page: 313, keywords: ["광펄스시험기반 또는 광심선선택기 증설용", "절환스위칭카드", "시험장치 및 부대장치"] },
  { code: "통신 9-2-9-1", name: "관리서버", spec: "-", unit: "대", labors: {"통신설비공": 0.45, "H/W시험사": 2.1}, category: "device", page: 313, keywords: ["시험장치 및 부대장치", "관리서버"] },
  { code: "통신 9-2-9-1", name: "스토리지", spec: "-", unit: "대", labors: {"통신설비공": 0.9, "H/W시험사": 1.42}, category: "device", page: 313, keywords: ["스토리지", "시험장치 및 부대장치"] },
  { code: "통신 9-2-9-2", name: "기초시험", spec: "각종장비 측정", unit: "랙", labors: {"통신관련산업기사": 0.07}, category: "device", page: 314, keywords: ["해킹감시s/w 및 관제s/w", "각종장비 측정", "기초시험"] },
  { code: "통신 9-2-9-2", name: "컴퓨터시험", spec: "예비시험. LAN접속시험, OS 설치", unit: "대", labors: {"통신관련산업기사": 0.19}, category: "device", page: 314, keywords: ["해킹감시s/w 및 관제s/w", "컴퓨터시험", "예비시험. lan접속시험, os 설치"] },
  { code: "통신 9-2-9-2", name: "해킹감시S/W 탑재", spec: "S/W설치,광심선 시험 및 감시, 감시포트일괄 표시, 모바일 기능, Client방식에 의한 GIS연동 기능, 시험장치 탑재", unit: "식", labors: {"통신관련산업기사": 0.42, "S/W시험사": 1.89}, category: "device", page: 314, keywords: ["해킹감시s/w 및 관제s/w", "해킹감시s/w 탑재", "s/w설치,광심선 시험 및 감시, 감시포트일괄 표시, 모바일 기능, client방식에 의한 gis연동 기능, 시험장치 탑재"] },
  { code: "통신 9-2-9-2", name: "관제S/W 탑재", spec: "OS/DBMS설치, 선 로시설 QR코드 Tagging운용 및 관 리, 모바일 기능, Web방식에 의한 GIS 연동 기능, 관리서버 탑재", unit: "식", labors: {"통신관련산업기사": 0.42, "S/W시험사": 1.89}, category: "device", page: 314, keywords: ["os/dbms설치, 선 로시설 qr코드 tagging운용 및 관 리, 모바일 기능, web방식에 의한 gis 연동 기능, 관리서버 탑재", "해킹감시s/w 및 관제s/w", "관제s/w 탑재"] },
  { code: "통신 9-2-9-2", name: "시험장치 동작", spec: "측정부, 광심선선택기", unit: "대", labors: {"통신관련산업기사": 0.04, "S/W시험사": 0.04}, category: "device", page: 314, keywords: ["측정부, 광심선선택기", "해킹감시s/w 및 관제s/w", "시험장치 동작"] },
  { code: "통신 9-2-9-2", name: "광코어운용정보입력", spec: "-", unit: "코어", labors: {"광케이블설치사": 0.02, "특별인부": 0.02}, category: "device", page: 314, keywords: ["해킹감시s/w 및 관제s/w", "광코어운용정보입력"] },
  { code: "통신 9-2-9-2", name: "선로시설정보입력", spec: "케이블선, 시설물 (인공, 관로, 전봇대, 접속점 등), 시설정보 변경, 거리보정(시설물 여장, 케이블 연입률(撚⼊率))등 단위별및누적산출", unit: "100개", labors: {"광케이블설치사": 0.71, "특별인부": 0.71}, category: "device", page: 314, keywords: ["해킹감시s/w 및 관제s/w", "선로시설정보입력", "케이블선, 시설물 (인공, 관로, 전봇대, 접속점 등), 시설정보 변경, 거리보정(시설물 여장, 케이블 연입률(撚⼊率))등 단위별및누적산출"] },
  { code: "통신 9-2-9-2", name: "경보발생 점검", spec: "코어별 및 시설물별 개폐 점검(접속함체, OFD, 외함, 인공, 출 입문 등)", unit: "코어", labors: {"통신관련산업기사": 0.08, "S/W시험사": 0.08}, category: "device", page: 314, keywords: ["해킹감시s/w 및 관제s/w", "코어별 및 시설물별 개폐 점검(접속함체, ofd, 외함, 인공, 출 입문 등)", "경보발생 점검"] },
  { code: "통신 9-2-9-2", name: "종합시험", spec: "시험장치", unit: "대", labors: {"S/W시험사": 0.07, "광케이블설치사": 0.07}, category: "device", page: 314, keywords: ["해킹감시s/w 및 관제s/w", "종합시험", "시험장치"] },
  { code: "통신 9-2-9-2", name: "원격시험", spec: "이동단말제어 포함", unit: "코어", labors: {"S/W시험사": 0.03, "광케이블설치사": 0.03}, category: "device", page: 314, keywords: ["해킹감시s/w 및 관제s/w", "원격시험", "이동단말제어 포함"] },
  { code: "통신 9-2-12", name: "가스감지기", spec: "", unit: "대", labors: {"통신설비공": 0.09}, category: "device", page: 315, keywords: ["가스감지기", "흡입형 가스감지 설비"] },
  { code: "통신 9-2-12", name: "흡입형 가스감지기 튜브", spec: "", unit: "10m", labors: {"통신내선공": 0.22}, category: "device", page: 315, keywords: ["흡입형 가스감지기 튜브", "흡입형 가스감지 설비"] },
  { code: "통신 9-2-13", name: "설치", spec: "열 영상 감시 카메라", unit: "대", labors: {"통신관련산업기사": 0.72, "통신설비공": 0.48}, category: "device", page: 316, keywords: ["열 영상 감시 시스템", "열 영상 감시 카메라", "설치"] },
  { code: "통신 9-2-13", name: "시험", spec: "", unit: "식", labors: {"통신관련산업기사": 0.58, "통신설비공": 0.39}, category: "device", page: 316, keywords: ["시험", "열 영상 감시 시스템"] },
  { code: "통신 9-3-1", name: "외함(계기반) 설치", spec: "", unit: "면", labors: {"통신설비공": 0.38, "특별인부": 0.21}, category: "device", page: 317, keywords: ["외함(계기반) 설치", "현장감시제어설비(rcs)"] },
  { code: "통신 9-3-1", name: "Bay건립 및 카드설치", spec: "", unit: "면", labors: {"통신케이블공": 0.46, "통신설비공": 0.59, "특별인부": 0.38}, category: "device", page: 317, keywords: ["현장감시제어설비(rcs)", "bay건립 및 카드설치"] },
  { code: "통신 9-3-1", name: "케이블 접속", spec: "", unit: "10Point", labors: {"통신케이블공": 0.16, "특별인부": 0.08}, category: "device", page: 317, keywords: ["케이블 접속", "현장감시제어설비(rcs)"] },
  { code: "통신 9-3-1", name: "각종 계기", spec: "", unit: "모듈", labors: {"통신관련산업기사": 0.3}, category: "device", page: 317, keywords: ["각종 계기", "현장감시제어설비(rcs)"] },
  { code: "통신 9-3-1", name: "시 험", spec: "", unit: "카드", labors: {"통신관련산업기사": 0.02}, category: "device", page: 317, keywords: ["시 험", "현장감시제어설비(rcs)"] },
  { code: "통신 9-3-2-1", name: "브라켓 설치", spec: "", unit: "대", labors: {"통신설비공": 0.15, "특별인부": 0.15}, category: "device", page: 317, keywords: ["초음파 수위계", "브라켓 설치"] },
  { code: "통신 9-3-2-1", name: "변환기 설치", spec: "", unit: "대", labors: {"통신설비공": 0.09, "특별인부": 0.09}, category: "device", page: 317, keywords: ["초음파 수위계", "변환기 설치"] },
  { code: "통신 9-3-2-1", name: "센서 설치", spec: "", unit: "대", labors: {"통신설비공": 0.1, "특별인부": 0.1}, category: "device", page: 317, keywords: ["초음파 수위계", "센서 설치"] },
  { code: "통신 9-3-2-1", name: "시 험", spec: "", unit: "대", labors: {"통신설비공": 0.09, "특별인부": 0.09}, category: "device", page: 317, keywords: ["초음파 수위계", "시 험"] },
  { code: "통신 9-3-2-2", name: "변환기 설치", spec: "", unit: "대", labors: {"통신설비공": 0.15, "특별인부": 0.15}, category: "device", page: 318, keywords: ["변환기 설치", "초음파 유량계"] },
  { code: "통신 9-3-2-2", name: "센서 설치", spec: "", unit: "세트", labors: {"통신설비공": 0.17, "특별인부": 0.17}, category: "device", page: 318, keywords: ["센서 설치", "초음파 유량계"] },
  { code: "통신 9-3-2-2", name: "시 험", spec: "", unit: "식", labors: {"통신설비공": 0.11, "특별인부": 0.11}, category: "device", page: 318, keywords: ["시 험", "초음파 유량계"] },
  { code: "통신 9-3-2-3", name: "압력센서 설치", spec: "", unit: "대", labors: {"통신설비공": 0.13, "특별인부": 0.13}, category: "device", page: 318, keywords: ["압력전송기", "압력센서 설치"] },
  { code: "통신 9-3-2-3", name: "변환기 설치", spec: "", unit: "대", labors: {"통신설비공": 0.11, "특별인부": 0.11}, category: "device", page: 318, keywords: ["압력전송기", "변환기 설치"] },
  { code: "통신 9-3-2-3", name: "시 험", spec: "", unit: "식", labors: {"통신설비공": 0.07, "특별인부": 0.07}, category: "device", page: 318, keywords: ["압력전송기", "시 험"] },
  { code: "통신 9-3-3-1", name: "기기 설치", spec: "", unit: "대", labors: {"통신설비공": 0.11, "특별인부": 0.11}, category: "device", page: 319, keywords: ["탁도계", "기기 설치"] },
  { code: "통신 9-3-3-1", name: "배관 연결", spec: "", unit: "대", labors: {"통신설비공": 0.22, "특별인부": 0.22}, category: "device", page: 319, keywords: ["배관 연결", "탁도계"] },
  { code: "통신 9-3-3-1", name: "시 험", spec: "", unit: "식", labors: {"통신설비공": 0.09, "특별인부": 0.09}, category: "device", page: 319, keywords: ["시 험", "탁도계"] },
  { code: "통신 9-3-3-2", name: "기기 설치", spec: "", unit: "대", labors: {"통신설비공": 0.19, "특별인부": 0.19}, category: "device", page: 319, keywords: ["전기전도도계", "기기 설치"] },
  { code: "통신 9-3-3-2", name: "배관 연결", spec: "", unit: "대", labors: {"통신설비공": 0.19, "특별인부": 0.19}, category: "device", page: 319, keywords: ["전기전도도계", "배관 연결"] },
  { code: "통신 9-3-3-2", name: "시 험", spec: "", unit: "식", labors: {"통신설비공": 0.08, "특별인부": 0.08}, category: "device", page: 319, keywords: ["시 험", "전기전도도계"] },
  { code: "통신 9-3-3-3", name: "기기 설치", spec: "", unit: "대", labors: {"통신설비공": 0.23, "특별인부": 0.23}, category: "device", page: 319, keywords: ["잔류염소계", "기기 설치"] },
  { code: "통신 9-3-3-3", name: "배관 연결", spec: "", unit: "대", labors: {"통신설비공": 0.14, "특별인부": 0.14}, category: "device", page: 319, keywords: ["잔류염소계", "배관 연결"] },
  { code: "통신 9-3-3-3", name: "시 험", spec: "", unit: "식", labors: {"통신설비공": 0.07, "특별인부": 0.07}, category: "device", page: 319, keywords: ["잔류염소계", "시 험"] },
  { code: "통신 9-3-3-4", name: "기기 설치", spec: "", unit: "대", labors: {"통신설비공": 0.34, "특별인부": 0.34}, category: "device", page: 320, keywords: ["수소이온농도계(ph계)", "기기 설치"] },
  { code: "통신 9-3-3-4", name: "배관 연결", spec: "", unit: "대", labors: {"통신설비공": 0.18, "특별인부": 0.18}, category: "device", page: 320, keywords: ["배관 연결", "수소이온농도계(ph계)"] },
  { code: "통신 9-3-3-4", name: "시 험", spec: "", unit: "식", labors: {"통신설비공": 0.06, "특별인부": 0.06}, category: "device", page: 320, keywords: ["시 험", "수소이온농도계(ph계)"] },
  { code: "통신 9-3-3-5", name: "수질계측기용 수조설치", spec: "", unit: "대", labors: {"통신설비공": 0.34, "특별인부": 0.34}, category: "device", page: 320, keywords: ["수질계측기용 수조설치", "수질계측기용 수조"] },
  { code: "통신 9-3-3-6", name: "기기 설치", spec: "", unit: "대", labors: {"통신설비공": 0.16, "특별인부": 0.16}, category: "device", page: 321, keywords: ["알칼리도계", "기기 설치"] },
  { code: "통신 9-3-3-6", name: "배관 연결", spec: "", unit: "대", labors: {"통신설비공": 0.15, "특별인부": 0.15}, category: "device", page: 321, keywords: ["배관 연결", "알칼리도계"] },
  { code: "통신 9-3-3-6", name: "시 험", spec: "", unit: "식", labors: {"통신설비공": 0.1, "특별인부": 0.1}, category: "device", page: 321, keywords: ["시 험", "알칼리도계"] },
  { code: "통신 9-3-3-7", name: "계측기부", spec: "", unit: "대", labors: {"통신설비공": 0.12, "특별인부": 0.12}, category: "device", page: 321, keywords: ["계측기부", "망간계측기"] },
  { code: "통신 9-3-3-7", name: "필터부", spec: "", unit: "대", labors: {"통신설비공": 0.18, "특별인부": 0.18}, category: "device", page: 321, keywords: ["필터부", "망간계측기"] },
  { code: "통신 9-3-3-7", name: "배관 연결", spec: "", unit: "대", labors: {"통신설비공": 0.22, "특별인부": 0.22}, category: "device", page: 321, keywords: ["배관 연결", "망간계측기"] },
  { code: "통신 9-3-3-7", name: "시 험", spec: "", unit: "식", labors: {"통신설비공": 0.17, "특별인부": 0.17}, category: "device", page: 321, keywords: ["시 험", "망간계측기"] },
  { code: "통신 9-3-3-8", name: "검출부", spec: "센서", unit: "대", labors: {"통신설비공": 0.22, "특별인부": 0.22}, category: "device", page: 322, keywords: ["검출부", "다항목 수질측정장치", "센서"] },
  { code: "통신 9-3-3-8", name: "수질 데이터수집장치", spec: "", unit: "대", labors: {"통신설비공": 0.13, "특별인부": 0.13}, category: "device", page: 322, keywords: ["수질 데이터수집장치", "다항목 수질측정장치"] },
  { code: "통신 9-3-4", name: "화학적 산소요구량 (COD)연속자동측정기", spec: "", unit: "대", labors: {"통신관련산업기사": 0.96, "통신케이블공": 0.24, "통신설비공": 0.47}, category: "device", page: 322, keywords: ["화학적 산소요구량 (cod)연속자동측정기", "수질원격감시시스템(tms)"] },
  { code: "통신 9-3-4", name: "총유기탄소량(TOC) 연속자동측정기", spec: "", unit: "대", labors: {"통신관련산업기사": 0.96, "통신케이블공": 0.32, "통신설비공": 0.43}, category: "device", page: 322, keywords: ["수질원격감시시스템(tms)", "총유기탄소량(toc) 연속자동측정기"] },
  { code: "통신 9-3-4", name: "총질소(TN) 연속자동측정기", spec: "", unit: "대", labors: {"통신관련산업기사": 0.96, "통신케이블공": 0.2, "통신설비공": 0.4}, category: "device", page: 322, keywords: ["총질소(tn) 연속자동측정기", "수질원격감시시스템(tms)"] },
  { code: "통신 9-3-4", name: "총인(TP) 연속자동측정기", spec: "", unit: "대", labors: {"통신관련산업기사": 0.96, "통신케이블공": 0.2, "통신설비공": 0.4}, category: "device", page: 322, keywords: ["수질원격감시시스템(tms)", "총인(tp) 연속자동측정기"] },
  { code: "통신 9-3-4", name: "수소이온농도(PH) 연속자동측정기", spec: "", unit: "대", labors: {"통신관련산업기사": 0.21, "통신케이블공": 0.14, "통신설비공": 0.29}, category: "device", page: 322, keywords: ["수질원격감시시스템(tms)", "수소이온농도(ph) 연속자동측정기"] },
  { code: "통신 9-3-4", name: "부유물질량(SS) 연속자동측정기", spec: "", unit: "대", labors: {"통신관련산업기사": 0.21, "통신케이블공": 0.14, "통신설비공": 0.29}, category: "device", page: 322, keywords: ["부유물질량(ss) 연속자동측정기", "수질원격감시시스템(tms)"] },
  { code: "통신 9-3-4", name: "데이터로거(Data Logger)", spec: "", unit: "대", labors: {"통신관련산업기사": 0.21, "통신케이블공": 0.16, "통신설비공": 0.33}, category: "device", page: 322, keywords: ["수질원격감시시스템(tms)", "데이터로거(data logger)"] },
  { code: "통신 9-3-4", name: "자동채수기(Auto Sampler)", spec: "", unit: "대", labors: {"통신관련산업기사": 0.21, "통신케이블공": 0.17, "통신설비공": 0.35}, category: "device", page: 322, keywords: ["수질원격감시시스템(tms)", "자동채수기(auto sampler)"] },
  { code: "통신 9-3-5", name: "제어함체", spec: "W600×H2100×D600 이하", unit: "대", labors: {"통신설비공": 1.58, "특별인부": 1.58}, category: "device", page: 323, keywords: ["w600×h2100×d600 이하", "제어함체", "지능형 물관리용 함체"] },
  { code: "통신 9-3-5", name: "계기함체", spec: "W800×H1600×D900 이하", unit: "대", labors: {"통신설비공": 1.07, "특별인부": 1.07}, category: "device", page: 323, keywords: ["계기함체", "w800×h1600×d900 이하", "지능형 물관리용 함체"] },
  { code: "통신 9-3-5", name: "기초패드", spec: "W1200×H2100×D600 이하", unit: "대", labors: {"통신설비공": 1.28, "특별인부": 1.28}, category: "device", page: 323, keywords: ["w1200×h2100×d600 이하", "기초패드", "지능형 물관리용 함체"] },
  { code: "통신 9-3-6", name: "용존산소량계", spec: "", unit: "대", labors: {"통신설비공": 0.44, "특별인부": 0.44}, category: "device", page: 323, keywords: ["용존산소량계", "하수처리용 계측기"] },
  { code: "통신 9-3-6", name: "부유물질농도계", spec: "", unit: "대", labors: {"통신설비공": 0.42, "특별인부": 0.42}, category: "device", page: 323, keywords: ["부유물질농도계", "하수처리용 계측기"] },
  { code: "통신 9-3-6", name: "농도계", spec: "", unit: "대", labors: {"통신설비공": 0.46, "특별인부": 0.46}, category: "device", page: 323, keywords: ["농도계", "하수처리용 계측기"] },
  { code: "통신 9-4-1", name: "철주 조립 및 건립", spec: "", unit: "기", labors: {"통신외선공": 0.64, "통신케이블공": 0.25}, category: "device", page: 324, keywords: ["철주 조립 및 건립", "스마트 가로등 시스템"] },
  { code: "통신 9-4-1", name: "LED등기구", spec: "", unit: "대", labors: {"통신외선공": 0.05, "통신설비공": 0.25}, category: "device", page: 324, keywords: ["스마트 가로등 시스템", "led등기구"] },
  { code: "통신 9-4-1", name: "제어장비 설치", spec: "", unit: "대", labors: {"통신설비공": 0.23}, category: "device", page: 324, keywords: ["제어장비 설치", "스마트 가로등 시스템"] },
  { code: "통신 9-4-1", name: "종 합 시 험", spec: "", unit: "식", labors: {"통신관련기사": 3.56, "S/W시험사": 3.56}, category: "device", page: 324, keywords: ["종 합 시 험", "스마트 가로등 시스템"] },
  { code: "통신 9-4-2", name: "장비설치", spec: "조명컨버터", unit: "대", labors: {"통신설비공": 0.06, "특별인부": 0.06}, category: "device", page: 324, keywords: ["장비설치", "조명컨버터", "디밍제어 시스템(dimming control system)"] },
  { code: "통신 9-4-2", name: "S/W 설치 및 시험", spec: "", unit: "식", labors: {"S/W시험사": 0.88, "통신설비공": 0.88}, category: "device", page: 324, keywords: ["s/w 설치 및 시험", "디밍제어 시스템(dimming control system)"] },
  { code: "통신 9-4-3", name: "점멸기 부착", spec: "", unit: "세트", labors: {"무선안테나공": 0.06, "통신설비공": 0.05}, category: "device", page: 325, keywords: ["점멸기 부착", "무선 양방향 가로등 감시 점멸제어기"] },
  { code: "통신 9-4-3", name: "․각종 케이블 결선점검", spec: "", unit: "세트", labors: {"통신케이블공": 0.26, "통신설비공": 0.09}, category: "device", page: 325, keywords: ["무선 양방향 가로등 감시 점멸제어기", "․각종 케이블 결선점검"] },
  { code: "통신 9-4-3", name: "안테나 설치", spec: "", unit: "세트", labors: {"무선안테나공": 0.1, "통신설비공": 0.06}, category: "device", page: 325, keywords: ["무선 양방향 가로등 감시 점멸제어기", "안테나 설치"] },
  { code: "통신 9-4-4", name: "전자칠판", spec: "본 체", unit: "대", labors: {"H/W시험사": 0.3, "통신설비공": 0.3}, category: "device", page: 325, keywords: ["본 체", "스마트 스쿨 시스템", "전자칠판"] },
  { code: "통신 9-4-4", name: "전자교탁", spec: "본 체", unit: "대", labors: {"H/W시험사": 0.3, "통신설비공": 0.3}, category: "device", page: 325, keywords: ["전자교탁", "본 체", "스마트 스쿨 시스템"] },
  { code: "통신 9-4-5", name: "활동센서", spec: "", unit: "대", labors: {"통신설비공": 0.04}, category: "device", page: 326, keywords: ["활동센서", "사회적 약자 안전관리 시스템"] },
  { code: "통신 9-4-5", name: "화재센서", spec: "", unit: "대", labors: {"통신설비공": 0.04}, category: "device", page: 326, keywords: ["화재센서", "사회적 약자 안전관리 시스템"] },
  { code: "통신 9-4-5", name: "가스센서", spec: "", unit: "대", labors: {"통신설비공": 0.08}, category: "device", page: 326, keywords: ["사회적 약자 안전관리 시스템", "가스센서"] },
  { code: "통신 9-4-5", name: "출입센서", spec: "", unit: "대", labors: {"통신설비공": 0.03}, category: "device", page: 326, keywords: ["사회적 약자 안전관리 시스템", "출입센서"] },
  { code: "통신 9-4-5", name: "응급호출기", spec: "", unit: "대", labors: {"통신설비공": 0.01}, category: "device", page: 326, keywords: ["사회적 약자 안전관리 시스템", "응급호출기"] },
  { code: "통신 9-4-5", name: "게이트웨이", spec: "", unit: "대", labors: {"통신설비공": 0.11}, category: "device", page: 326, keywords: ["게이트웨이", "사회적 약자 안전관리 시스템"] },
  { code: "통신 9-4-6-1", name: "제어함체 설치", spec: "", unit: "대", labors: {"H/W시험사": 0.28, "통신설비공": 0.28}, category: "device", page: 326, keywords: ["보행신호 음성안내 보조장치", "제어함체 설치"] },
  { code: "통신 9-4-6-1", name: "센서 Pole 설치", spec: "", unit: "대", labors: {"통신설비공": 0.15, "특별인부": 0.15}, category: "device", page: 326, keywords: ["센서 pole 설치", "보행신호 음성안내 보조장치"] },
  { code: "통신 9-4-6-1", name: "종합시험", spec: "", unit: "식", labors: {"H/W시험사": 0.67, "통신관련기사": 0.67}, category: "device", page: 326, keywords: ["종합시험", "보행신호 음성안내 보조장치"] },
  { code: "통신 9-4-6-1", name: "통합 Pole 설치", spec: "", unit: "대", labors: {"통신설비공": 0.6, "특별인부": 0.6}, category: "device", page: 327, keywords: ["보행신호 음성안내 보조장치", "통합 pole 설치"] },
  { code: "통신 9-4-6-1", name: "BLE Beacon 모듈 설치", spec: "", unit: "개", labors: {"H/W시험사": 0.05, "통신설비공": 0.05}, category: "device", page: 327, keywords: ["ble beacon 모듈 설치", "보행신호 음성안내 보조장치"] },
  { code: "통신 9-4-6-1", name: "감지센서 설치", spec: "", unit: "대", labors: {"H/W시험사": 0.18, "통신설비공": 0.18}, category: "device", page: 327, keywords: ["보행신호 음성안내 보조장치", "감지센서 설치"] },
  { code: "통신 9-4-6-1", name: "안내표지판 설치", spec: "", unit: "개", labors: {"H/W시험사": 0.02, "통신설비공": 0.02}, category: "device", page: 327, keywords: ["안내표지판 설치", "보행신호 음성안내 보조장치"] },
  { code: "통신 9-4-6-2", name: "LED 발광장치", spec: "", unit: "대", labors: {"통신설비공": 0.26, "통신내선공": 0.26}, category: "device", page: 328, keywords: ["led 발광장치", "횡단보도 led 발광 영상장치"] },
  { code: "통신 9-4-6-2", name: "제어장치", spec: "", unit: "대", labors: {"통신관련산업기사": 0.38, "통신설비공": 0.53, "통신내선공": 0.15}, category: "device", page: 328, keywords: ["제어장치", "횡단보도 led 발광 영상장치"] },
  { code: "통신 9-4-6-3", name: "LED 모듈", spec: "", unit: "대", labors: {"통신관련산업기사": 0.02, "통신설비공": 0.02}, category: "device", page: 328, keywords: ["스마트 바닥신호등", "led 모듈"] },
  { code: "통신 9-4-6-3", name: "제어함체", spec: "", unit: "대", labors: {"통신관련산업기사": 0.26, "통신설비공": 0.26}, category: "device", page: 328, keywords: ["스마트 바닥신호등", "제어함체"] },
  { code: "통신 9-4-7-1", name: "차량검지기", spec: "1회로", unit: "대", labors: {"H/W시험사": 0.63, "통신내선공": 0.63}, category: "device", page: 329, keywords: ["차량검지기", "1회로", "주차관제 검지시스템"] },
  { code: "통신 9-4-7-1", name: "차번인식장치", spec: "단방향", unit: "시스템", labors: {"통신관련산업기사": 0.77, "통신설비공": 0.77}, category: "device", page: 329, keywords: ["차번인식장치", "단방향", "주차관제 검지시스템"] },
  { code: "통신 9-4-7-1", name: "영상관리컴퓨터", spec: "", unit: "시스템", labors: {"H/W시험사": 1.12, "통신설비공": 0.57}, category: "device", page: 329, keywords: ["영상관리컴퓨터", "주차관제 검지시스템"] },
  { code: "통신 9-4-7-1", name: "초음파 위치센서", spec: "", unit: "개", labors: {"통신설비공": 0.31}, category: "device", page: 329, keywords: ["초음파 위치센서", "주차관제 검지시스템"] },
  { code: "통신 9-4-7-2", name: "주차권 발행기", spec: "", unit: "대", labors: {"S/W시험사": 0.89, "통신케이블공": 0.98, "통신설비공": 0.76}, category: "device", page: 329, keywords: ["주차관제 요금시스템", "주차권 발행기"] },
  { code: "통신 9-4-7-2", name: "출구 판독기", spec: "", unit: "대", labors: {"S/W시험사": 0.95, "통신케이블공": 1.02, "통신설비공": 0.75}, category: "device", page: 329, keywords: ["주차관제 요금시스템", "출구 판독기"] },
  { code: "통신 9-4-7-2", name: "차 단 기", spec: "", unit: "개", labors: {"H/W시험사": 0.39, "통신케이블공": 0.79, "통신설비공": 0.39}, category: "device", page: 329, keywords: ["차 단 기", "주차관제 요금시스템"] },
  { code: "통신 9-4-7-2", name: "요금계산기", spec: "무인", unit: "개", labors: {"통신관련산업기사": 0.83, "S/W시험사": 0.83, "H/W시험사": 0.83, "통신케이블공": 0.83}, category: "device", page: 329, keywords: ["주차관제 요금시스템", "요금계산기", "무인"] },
  { code: "통신 9-4-7-2", name: "요금표시기", spec: "", unit: "개", labors: {"통신설비공": 0.29, "통신내선공": 0.29}, category: "device", page: 329, keywords: ["주차관제 요금시스템", "요금표시기"] },
  { code: "통신 9-4-7-2", name: "중앙관리컴퓨터", spec: "", unit: "개", labors: {"S/W시험사": 1.74, "H/W시험사": 1.31, "통신설비공": 0.83}, category: "device", page: 329, keywords: ["주차관제 요금시스템", "중앙관리컴퓨터"] },
  { code: "통신 9-4-7-2", name: "정기권 판독기", spec: "", unit: "개", labors: {"통신케이블공": 0.49, "통신설비공": 0.34}, category: "device", page: 329, keywords: ["주차관제 요금시스템", "정기권 판독기"] },
  { code: "통신 9-4-7-2", name: "정기권 컨트롤러", spec: "", unit: "시스템", labors: {"통신관련산업기사": 1.85, "H/W시험사": 0.77}, category: "device", page: 329, keywords: ["주차관제 요금시스템", "정기권 컨트롤러"] },
  { code: "통신 9-4-7-2", name: "요금정산소 설치", spec: "", unit: "개소", labors: {"통신설비공": 2.52, "통신내선공": 2.43}, category: "device", page: 329, keywords: ["주차관제 요금시스템", "요금정산소 설치"] },
  { code: "통신 9-4-7-3", name: "경 보 등", spec: "천장형", unit: "개", labors: {"통신설비공": 0.29, "통신내선공": 0.29}, category: "device", page: 330, keywords: ["천장형", "주차관제 신호 및 기타설비", "경 보 등"] },
  { code: "통신 9-4-7-3", name: "만 차 등", spec: "입구", unit: "개", labors: {"통신설비공": 0.44, "통신내선공": 0.39}, category: "device", page: 330, keywords: ["주차관제 신호 및 기타설비", "만 차 등", "입구"] },
  { code: "통신 9-4-7-3", name: "유 도 등", spec: "20W", unit: "개", labors: {"통신설비공": 0.34, "통신내선공": 0.28}, category: "device", page: 330, keywords: ["주차관제 신호 및 기타설비", "20w", "유 도 등"] },
  { code: "통신 9-4-7-3", name: "2색 신호등", spec: "", unit: "개", labors: {"통신설비공": 0.25, "통신내선공": 0.44}, category: "device", page: 330, keywords: ["2색 신호등", "주차관제 신호 및 기타설비"] },
  { code: "통신 9-4-7-3", name: "출차주의등", spec: "", unit: "개", labors: {"통신설비공": 0.21, "통신내선공": 0.21}, category: "device", page: 330, keywords: ["출차주의등", "주차관제 신호 및 기타설비"] },
  { code: "통신 9-4-7-3", name: "진입금지등", spec: "", unit: "개", labors: {"통신설비공": 0.31, "통신내선공": 0.36}, category: "device", page: 330, keywords: ["주차관제 신호 및 기타설비", "진입금지등"] },
  { code: "통신 9-4-7-3", name: "중앙감시반", spec: "", unit: "개", labors: {"통신케이블공": 1.26, "통신설비공": 0.84}, category: "device", page: 330, keywords: ["주차관제 신호 및 기타설비", "중앙감시반"] },
  { code: "통신 9-4-7-4", name: "주차 유도카메라", spec: "3면", unit: "대", labors: {"통신관련산업기사": 0.06, "통신설비공": 0.18}, category: "device", page: 331, keywords: ["주차 유도카메라", "지능형 주차유도시스템", "3면"] },
  { code: "통신 9-4-7-4", name: "주차 유도안내판", spec: "", unit: "대", labors: {"통신관련산업기사": 0.37, "통신설비공": 0.37}, category: "device", page: 331, keywords: ["지능형 주차유도시스템", "주차 유도안내판"] },
  { code: "통신 9-4-7-4", name: "초음파 위치센서", spec: "", unit: "개", labors: {"통신설비공": 0.31}, category: "device", page: 331, keywords: ["초음파 위치센서", "지능형 주차유도시스템"] },
  { code: "통신 9-4-8-1", name: "접수대 콘솔", spec: "", unit: "대", labors: {"통신설비공": 0.71, "특별인부": 0.35}, category: "device", page: 332, keywords: ["종합접수대 시스템", "접수대 콘솔"] },
  { code: "통신 9-4-8-1", name: "제어부", spec: "주제어장치", unit: "대", labors: {"H/W시험사": 0.52, "통신설비공": 0.52}, category: "device", page: 332, keywords: ["종합접수대 시스템", "제어부", "주제어장치"] },
  { code: "통신 9-4-8-1", name: "전원부", spec: "전원제어장치", unit: "대", labors: {"H/W시험사": 0.41, "통신설비공": 0.41}, category: "device", page: 332, keywords: ["종합접수대 시스템", "전원부", "전원제어장치"] },
  { code: "통신 9-4-8-1", name: "출력부", spec: "모니터스피커", unit: "대", labors: {"H/W시험사": 0.08, "통신설비공": 0.08}, category: "device", page: 332, keywords: ["종합접수대 시스템", "출력부", "모니터스피커"] },
  { code: "통신 9-4-8-1", name: "방송", spec: "방송지령장치", unit: "대", labors: {"H/W시험사": 0.24, "통신설비공": 0.24}, category: "device", page: 332, keywords: ["종합접수대 시스템", "방송지령장치", "방송"] },
  { code: "통신 9-4-8-1", name: "기타", spec: "경광등", unit: "대", labors: {"통신설비공": 0.04}, category: "device", page: 332, keywords: ["종합접수대 시스템", "기타", "경광등"] },
  { code: "통신 9-4-8-2", name: "무선 주장치", spec: "본체설치", unit: "대", labors: {"H/W시험사": 1.81}, category: "device", page: 332, keywords: ["무선 주장치", "본체설치", "통합무선제어시스템"] },
  { code: "통신 9-4-8-2", name: "대국시험", spec: "", unit: "개소", labors: {"H/W시험사": 1.21, "S/W시험사": 2.42}, category: "device", page: 332, keywords: ["대국시험", "통합무선제어시스템"] },
  { code: "통신 9-4-8-3", name: "무선원격제어단말장치", spec: "", unit: "대", labors: {"H/W시험사": 0.46, "통신설비공": 0.46}, category: "device", page: 333, keywords: ["무선원격제어단말장치", "무선원격기지국"] },
  { code: "통신 9-4-8-3", name: "소방용 무전기", spec: "", unit: "대", labors: {"H/W시험사": 0.44, "통신설비공": 0.44}, category: "device", page: 333, keywords: ["소방용 무전기", "무선원격기지국"] },
  { code: "통신 9-4-8-3", name: "안테나", spec: "차량탑재형", unit: "대", labors: {"통신설비공": 0.27, "무선안테나공": 0.27}, category: "device", page: 333, keywords: ["차량탑재형", "무선원격기지국", "안테나"] },
  { code: "통신 9-4-8-3", name: "무선중계장치", spec: "", unit: "대", labors: {"H/W시험사": 0.26, "통신설비공": 0.26}, category: "device", page: 333, keywords: ["무선중계장치", "무선원격기지국"] },
  { code: "통신 9-4-8-3", name: "라디오컨트롤러", spec: "", unit: "대", labors: {"H/W시험사": 0.07, "통신설비공": 0.07}, category: "device", page: 333, keywords: ["라디오컨트롤러", "무선원격기지국"] },
  { code: "통신 9-4-8-3", name: "함체", spec: "", unit: "대", labors: {"통신설비공": 0.4, "보통인부": 0.8}, category: "device", page: 333, keywords: ["함체", "무선원격기지국"] },
  { code: "통신 9-4-8-4", name: "방송원격단말장치", spec: "", unit: "대", labors: {"H/W시험사": 0.36, "통신설비공": 0.36}, category: "device", page: 333, keywords: ["방송원격단말장치", "일제방송지령시스템"] },
  { code: "통신 9-4-8-4", name: "스피커", spec: "실링(10W)", unit: "대", labors: {"통신설비공": 0.32}, category: "device", page: 333, keywords: ["실링(10w)", "스피커", "일제방송지령시스템"] },
  { code: "통신 9-4-9", name: "환경센서", spec: "", unit: "대", labors: {"통신설비공": 0.1, "특별인부": 0.1}, category: "device", page: 334, keywords: ["스마트 팜(farm)", "환경센서"] },
  { code: "통신 9-4-9", name: "개폐기", spec: "", unit: "대", labors: {"통신설비공": 0.09, "특별인부": 0.09}, category: "device", page: 334, keywords: ["스마트 팜(farm)", "개폐기"] },
  { code: "통신 9-4-9", name: "제어함체", spec: "", unit: "대", labors: {"통신설비공": 0.86, "S/W시험사": 0.86}, category: "device", page: 334, keywords: ["스마트 팜(farm)", "제어함체"] },
  { code: "통신 9-4-10", name: "수질측정기", spec: "", unit: "대", labors: {"통신설비공": 0.58, "특별인부": 0.58}, category: "device", page: 334, keywords: ["수질측정기", "스마트 피쉬 팜(fish farm)"] },
  { code: "통신 9-4-10", name: "사료급이기", spec: "", unit: "대", labors: {"통신설비공": 0.52, "특별인부": 0.52}, category: "device", page: 334, keywords: ["스마트 피쉬 팜(fish farm)", "사료급이기"] },
  { code: "통신 9-4-10", name: "종합시험", spec: "", unit: "식", labors: {"통신설비공": 1.25, "S/W시험사": 1.25}, category: "device", page: 334, keywords: ["스마트 피쉬 팜(fish farm)", "종합시험"] },
  { code: "통신 9-4-11", name: "스마트 방향표지판", spec: "", unit: "대", labors: {"H/W시험사": 0.88, "S/W시험사": 0.44}, category: "device", page: 334, keywords: ["스마트 방향표지판"] },
  { code: "통신 9-4-12", name: "폴타입", spec: "센서", unit: "대", labors: {"통신설비공": 0.15}, category: "device", page: 335, keywords: ["센서", "폴타입", "지능형 인원계수시스템"] },
  { code: "통신 9-4-12", name: "게이트타입", spec: "일체형", unit: "대", labors: {"통신관련산업기사": 1.48, "통신설비공": 1.48}, category: "device", page: 335, keywords: ["일체형", "게이트타입", "지능형 인원계수시스템"] },
  { code: "통신 9-4-13", name: "감지기", spec: "", unit: "대", labors: {"통신설비공": 0.21, "특별인부": 0.21}, category: "device", page: 335, keywords: ["감지기", "지능형 이상음원 시스템"] },
  { code: "통신 9-4-13", name: "비상벨", spec: "", unit: "대", labors: {"통신설비공": 0.16, "특별인부": 0.16}, category: "device", page: 335, keywords: ["비상벨", "지능형 이상음원 시스템"] },
  { code: "통신 9-4-13", name: "경광등", spec: "", unit: "대", labors: {"통신설비공": 0.13, "특별인부": 0.13}, category: "device", page: 335, keywords: ["경광등", "지능형 이상음원 시스템"] },
  { code: "통신 9-4-14", name: "상수도 누수감지설비", spec: "", unit: "개", labors: {"통신설비공": 0.02, "보통인부": 0.02}, category: "device", page: 335, keywords: ["iot기반 지하공간 안전관리 시스템", "상수도 누수감지설비"] },
  { code: "통신 9-4-15", name: "LED조명", spec: "", unit: "대", labors: {"통신관련산업기사": 0.07, "통신설비공": 0.07}, category: "device", page: 336, keywords: ["가시광통신(li-fi : light-fidelity) 설비", "led조명"] },
  { code: "통신 9-4-15", name: "가시광 조명컨버터", spec: "", unit: "개", labors: {"통신관련산업기사": 0.04, "통신설비공": 0.04}, category: "device", page: 336, keywords: ["가시광통신(li-fi : light-fidelity) 설비", "가시광 조명컨버터"] },
  { code: "통신 9-4-15", name: "가시광 송신기", spec: "", unit: "개", labors: {"통신관련산업기사": 0.05, "통신설비공": 0.05}, category: "device", page: 336, keywords: ["가시광 송신기", "가시광통신(li-fi : light-fidelity) 설비"] },
  { code: "통신 9-4-16", name: "센터용", spec: "긴급차량 출동버튼", unit: "대", labors: {"통신설비공": 0.06}, category: "device", page: 336, keywords: ["센터용", "긴급차량 우선 신호 시스템", "긴급차량 출동버튼"] },
  { code: "통신 9-4-16", name: "교차로용", spec: "RSE", unit: "대", labors: {"통신관련산업기사": 0.94, "무선안테나공": 0.94}, category: "device", page: 336, keywords: ["rse", "교차로용", "긴급차량 우선 신호 시스템"] },
  { code: "통신 9-4-16", name: "PPC보드", spec: "", unit: "대", labors: {"H/W시험사": 0.3, "통신설비공": 0.29}, category: "device", page: 336, keywords: ["긴급차량 우선 신호 시스템", "ppc보드"] },
  { code: "통신 9-4-17", name: "비디오월 (Video Wall)", spec: "설치", unit: "면", labors: {"통신관련산업기사": 0.14, "통신설비공": 0.21}, category: "device", page: 337, keywords: ["비디오월 (video wall)", "디지털 사이니지", "설치"] },
  { code: "통신 9-4-17", name: "단독형", spec: "", unit: "대", labors: {"S/W시험사": 0.35, "통신설비공": 0.35}, category: "device", page: 337, keywords: ["단독형", "디지털 사이니지"] },
  { code: "통신 9-4-17", name: "벽부형", spec: "", unit: "대", labors: {"통신관련산업기사": 0.14, "통신설비공": 0.14}, category: "device", page: 337, keywords: ["벽부형", "디지털 사이니지"] },
  { code: "통신 9-4-17", name: "액자형", spec: "", unit: "대", labors: {"통신관련산업기사": 0.1, "통신설비공": 0.1}, category: "device", page: 337, keywords: ["액자형", "디지털 사이니지"] },
  { code: "통신 9-4-18", name: "로고젝터", spec: "", unit: "대", labors: {"통신설비공": 0.36}, category: "device", page: 337, keywords: ["로고젝터"] },
  { code: "통신 9-4-19", name: "LTE모뎀", spec: "", unit: "대", labors: {"통신설비공": 0.22, "S/W시험사": 0.22}, category: "device", page: 338, keywords: ["lte모뎀", "전기차 충전소용 lte모뎀"] },
  { code: "통신 9-4-20-1", name: "기 록 계", spec: "", unit: "대", labors: {"통신관련산업기사": 1.9, "S/W시험사": 1.25, "통신설비공": 0.65}, category: "device", page: 338, keywords: ["지진감지시스템", "기 록 계"] },
  { code: "통신 9-4-20-1", name: "가속도센서", spec: "", unit: "대", labors: {"통신관련산업기사": 0.32, "통신설비공": 0.32}, category: "device", page: 338, keywords: ["가속도센서", "지진감지시스템"] },
  { code: "통신 9-4-20-1", name: "GPS안테나", spec: "", unit: "대", labors: {"무선안테나공": 0.32, "통신설비공": 0.37}, category: "device", page: 338, keywords: ["지진감지시스템", "gps안테나"] },
  { code: "통신 9-4-20-1", name: "함체", spec: "", unit: "대", labors: {"통신관련산업기사": 0.08, "통신설비공": 0.08}, category: "device", page: 338, keywords: ["지진감지시스템", "함체"] },
  { code: "통신 9-4-20-2", name: "비상벨", spec: "", unit: "대", labors: {"S/W시험사": 0.09, "통신설비공": 0.09}, category: "device", page: 339, keywords: ["비상벨", "통화겸용 비상벨"] },
  { code: "통신 9-4-20-2", name: "제어기", spec: "", unit: "대", labors: {"S/W시험사": 0.11, "통신설비공": 0.11}, category: "device", page: 339, keywords: ["제어기", "통화겸용 비상벨"] },
  { code: "통신 9-4-20-3", name: "자동수신단말장치", spec: "", unit: "대", labors: {"통신설비공": 0.41, "특별인부": 0.41}, category: "device", page: 339, keywords: ["자동수신단말장치", "재난 예·경보시스템"] },
  { code: "통신 9-4-20-3", name: "폴(Pole)", spec: "", unit: "대", labors: {"통신설비공": 1.03, "특별인부": 1.03}, category: "device", page: 339, keywords: ["폴(pole)", "재난 예·경보시스템"] },
  { code: "통신 9-4-20-3", name: "혼스피커", spec: "", unit: "대", labors: {"통신설비공": 0.19, "특별인부": 0.19}, category: "device", page: 339, keywords: ["혼스피커", "재난 예·경보시스템"] },
  { code: "통신 9-4-20-4", name: "이중마루 (면진 또는 내진)", spec: "", unit: "㎡", labors: {"통신설비공": 0.23, "보통인부": 0.23}, category: "device", page: 340, keywords: ["지진대비 보호설비", "이중마루 (면진 또는 내진)"] },
  { code: "통신 9-4-20-4", name: "내진랙", spec: "", unit: "대", labors: {"통신설비공": 0.3}, category: "device", page: 340, keywords: ["지진대비 보호설비", "내진랙"] },
  { code: "통신 9-4-20-4", name: "면진테이블", spec: "", unit: "대", labors: {"통신설비공": 0.19, "보통인부": 0.13}, category: "device", page: 340, keywords: ["지진대비 보호설비", "면진테이블"] },
  { code: "통신 9-4-20-4", name: "내진 버팀대", spec: "Φ 13 이하", unit: "세트", labors: {"통신설비공": 0.16}, category: "device", page: 340, keywords: ["φ 13 이하", "지진대비 보호설비", "내진 버팀대"] },
  { code: "통신 9-4-20-4", name: "내진 스토퍼", spec: "Φ 13 이하", unit: "개", labors: {"통신설비공": 0.1}, category: "device", page: 340, keywords: ["φ 13 이하", "지진대비 보호설비", "내진 스토퍼"] },
  { code: "통신 9-4-20-5", name: "민방위경보단말장치", spec: "", unit: "대", labors: {"통신관련산업기사": 0.66, "통신설비공": 0.66}, category: "device", page: 341, keywords: ["민방위경보단말장치", "민방위 경보통제 시스템"] },
  { code: "통신 9-4-20-5", name: "폴(Pole)", spec: "", unit: "대", labors: {"통신관련산업기사": 0.65, "통신설비공": 0.65}, category: "device", page: 341, keywords: ["폴(pole)", "민방위 경보통제 시스템"] },
  { code: "통신 9-4-20-5", name: "혼 스피커", spec: "", unit: "대", labors: {"통신관련산업기사": 0.11, "통신설비공": 0.11}, category: "device", page: 341, keywords: ["민방위 경보통제 시스템", "혼 스피커"] },
  { code: "통신 9-4-20-6", name: "내공변위센서", spec: "", unit: "개", labors: {"광케이블설치사": 0.27, "통신설비공": 0.27}, category: "device", page: 341, keywords: ["내공변위센서", "광섬유센서 구조물 안전 모니터링 시스템"] },
  { code: "통신 9-4-20-6", name: "센서접속함체", spec: "", unit: "대", labors: {"통신설비공": 1.07}, category: "device", page: 341, keywords: ["광섬유센서 구조물 안전 모니터링 시스템", "센서접속함체"] },
  { code: "통신 9-4-20-7", name: "통화장치", spec: "주장치", unit: "개", labors: {"통신설비공": 0.26}, category: "device", page: 342, keywords: ["주장치", "통화장치", "공중화장실 무선통신 비상벨 시스템"] },
  { code: "통신 9-4-20-7", name: "무선비상벨", spec: "", unit: "개", labors: {"통신설비공": 0.02}, category: "device", page: 342, keywords: ["무선비상벨", "공중화장실 무선통신 비상벨 시스템"] },
  { code: "통신 9-4-20-7", name: "경광등", spec: "", unit: "개", labors: {"통신설비공": 0.14}, category: "device", page: 342, keywords: ["경광등", "공중화장실 무선통신 비상벨 시스템"] },
  { code: "통신 9-4-21-1", name: "호출부", spec: "콘솔베드", unit: "개", labors: {"통신케이블공": 0.12, "통신설비공": 0.12}, category: "device", page: 342, keywords: ["의료용 너스콜", "콘솔베드", "호출부"] },
  { code: "통신 9-4-21-1", name: "수신부", spec: "주수신기", unit: "대", labors: {"통신케이블공": 0.4, "통신설비공": 0.48}, category: "device", page: 342, keywords: ["의료용 너스콜", "주수신기", "수신부"] },
  { code: "통신 9-4-21-1", name: "제어부", spec: "중앙제어기", unit: "대", labors: {"통신설비공": 0.36}, category: "device", page: 342, keywords: ["중앙제어기", "의료용 너스콜", "제어부"] },
  { code: "통신 9-4-21-1", name: "종합시험", spec: "", unit: "시스템", labors: {"통신관련산업기사": 2.15, "통신케이블공": 2.08}, category: "device", page: 342, keywords: ["종합시험", "의료용 너스콜"] },
  { code: "통신 9-4-21-2", name: "진료안내설비", spec: "", unit: "대", labors: {"S/W시험사": 0.35, "통신설비공": 0.35}, category: "device", page: 343, keywords: ["진료안내설비", "지능형 진료시스템"] },
  { code: "통신 9-4-21-2", name: "진료대기설비", spec: "49“이하", unit: "대", labors: {"통신관련산업기사": 0.14, "통신설비공": 0.14}, category: "device", page: 343, keywords: ["49“이하", "진료대기설비", "지능형 진료시스템"] },
  { code: "통신 9-4-22", name: "태그", spec: "", unit: "10개", labors: {"통신설비공": 0.09}, category: "device", page: 343, keywords: ["태그", "전자가격표시기(esl:electronic shelf label) 시스템"] },
  { code: "통신 9-4-22", name: "게이트웨이", spec: "", unit: "대", labors: {"통신설비공": 0.2, "통신관련산업기사": 0.3}, category: "device", page: 343, keywords: ["전자가격표시기(esl:electronic shelf label) 시스템", "게이트웨이"] },
  { code: "통신 9-4-22", name: "종합시험", spec: "", unit: "식", labors: {"H/W시험사": 0.9, "S/W시험사": 0.9}, category: "device", page: 343, keywords: ["전자가격표시기(esl:electronic shelf label) 시스템", "종합시험"] },
  { code: "통신 9-4-23", name: "중계기 함체", spec: "", unit: "대", labors: {"통신관련산업기사": 0.47, "통신설비공": 0.47}, category: "device", page: 344, keywords: ["중계기 함체", "스마트 비탈면 경보시스템"] },
  { code: "통신 9-4-23", name: "센서 함체", spec: "", unit: "“", labors: {"통신관련산업기사": 0.27, "통신설비공": 0.27}, category: "device", page: 344, keywords: ["스마트 비탈면 경보시스템", "센서 함체"] },
  { code: "통신 9-4-23", name: "센서", spec: "", unit: "개", labors: {"통신관련산업기사": 0.07, "통신설비공": 0.07}, category: "device", page: 344, keywords: ["센서", "스마트 비탈면 경보시스템"] },
  { code: "통신 9-4-24", name: "미세먼지신호등", spec: "", unit: "대", labors: {"통신관련산업기사": 0.25, "통신설비공": 0.25}, category: "device", page: 344, keywords: ["스마트 미세먼지신호등 시스템", "미세먼지신호등"] },
  { code: "통신 9-4-25", name: "원격데이터수집 단말장치", spec: "", unit: "대", labors: {"통신설비공": 0.16}, category: "device", page: 344, keywords: ["신재생에너지 원격데이터수집 단말장치(rtu)", "원격데이터수집 단말장치"] },
  { code: "통신 9-4-26", name: "인공지능(AI) 카메라", spec: "", unit: "대", labors: {"통신관련산업기사": 0.64, "통신설비공": 0.32}, category: "device", page: 345, keywords: ["스마트 교차로 시스템", "인공지능(ai) 카메라"] },
  { code: "통신 9-4-26", name: "제어함체", spec: "", unit: "대", labors: {"통신관련산업기사": 0.51, "통신설비공": 0.25}, category: "device", page: 345, keywords: ["스마트 교차로 시스템", "제어함체"] },
  { code: "통신 9-4-26", name: "안내표지판", spec: "", unit: "개소", labors: {"통신설비공": 0.12, "보통인부": 0.12}, category: "device", page: 345, keywords: ["스마트 교차로 시스템", "안내표지판"] },
  { code: "통신 9-4-27", name: "도난방지 안테나", spec: "", unit: "대", labors: {"통신설비공": 0.18, "통신케이블공": 0.18}, category: "device", page: 345, keywords: ["도난방지 안테나", "스마트 도난방지 시스템"] },
  { code: "통신 9-4-28", name: "SCADA", spec: "프로그램설치 및 설정", unit: "식", labors: {"H/W시험사": 0.24, "S/W시험사": 0.24}, category: "device", page: 346, keywords: ["프로그램설치 및 설정", "스마트 공장 시스템", "scada"] },
  { code: "통신 9-4-28", name: "PLC", spec: "외함 설치", unit: "면", labors: {"통신설비공": 0.38, "특별인부": 0.21}, category: "device", page: 346, keywords: ["plc", "외함 설치", "스마트 공장 시스템"] },
  { code: "통신 9-4-28", name: "환경 센서", spec: "", unit: "대", labors: {"통신설비공": 0.12, "특별인부": 0.12}, category: "device", page: 346, keywords: ["환경 센서", "스마트 공장 시스템"] },
  { code: "통신 9-4-28", name: "현황판", spec: "", unit: "대", labors: {"통신관련산업기사": 0.4, "통신설비공": 0.4}, category: "device", page: 346, keywords: ["현황판", "스마트 공장 시스템"] },
  { code: "통신 9-4-29", name: "네트워크(IP) 카메라", spec: "일반형", unit: "대", labors: {"통신설비공": 0.24, "특별인부": 0.24}, category: "device", page: 347, keywords: ["일반형", "네트워크(ip) 카메라", "지능형 카메라 시스템"] },
  { code: "통신 9-4-29", name: "브라켓", spec: "-", unit: "대", labors: {"통신설비공": 0.13, "특별인부": 0.13}, category: "device", page: 347, keywords: ["지능형 카메라 시스템", "브라켓"] },
  { code: "통신 9-4-30-1", name: "유인 배출신고 시스템", spec: "", unit: "대", labors: {"H/W시험사": 0.18, "통신설비공": 0.18}, category: "device", page: 347, keywords: ["유인 배출신고 시스템", "대형 폐기물 배출신고 시스템"] },
  { code: "통신 9-4-30-1", name: "무인 배출신고 시스템", spec: "", unit: "대", labors: {"H/W시험사": 0.3, "통신설비공": 0.3}, category: "device", page: 347, keywords: ["무인 배출신고 시스템", "대형 폐기물 배출신고 시스템"] },
  { code: "통신 9-4-30-2", name: "음식물 쓰레기 개별계량장비", spec: "", unit: "대", labors: {"통신설비공": 0.31}, category: "device", page: 348, keywords: ["음식물 쓰레기 개별계량장비"] },
  { code: "통신 9-4-31", name: "제어부", spec: "", unit: "대", labors: {"통신관련산업기사": 0.6, "통신설비공": 0.54, "보통인부": 0.54}, category: "device", page: 348, keywords: ["스마트 횡단보도 안전지원 시스템", "제어부"] },
  { code: "통신 9-4-31", name: "검지부", spec: "차량용", unit: "대", labors: {"통신설비공": 0.27, "보통인부": 0.27}, category: "device", page: 348, keywords: ["차량용", "스마트 횡단보도 안전지원 시스템", "검지부"] },
  { code: "통신 9-4-31", name: "표출부", spec: "", unit: "대", labors: {"통신관련산업기사": 0.58, "통신설비공": 0.52, "보통인부": 0.52}, category: "device", page: 348, keywords: ["스마트 횡단보도 안전지원 시스템", "표출부"] },
  { code: "통신 9-4-31", name: "매립등", spec: "", unit: "대", labors: {"통신설비공": 0.09, "보통인부": 0.09}, category: "device", page: 348, keywords: ["스마트 횡단보도 안전지원 시스템", "매립등"] },
  { code: "통신 9-4-31", name: "전원선 포설 및 연결", spec: "", unit: "개소", labors: {"통신설비공": 0.42, "통신케이블공": 0.42}, category: "device", page: 348, keywords: ["전원선 포설 및 연결", "스마트 횡단보도 안전지원 시스템"] },
  { code: "통신 9-4-31", name: "제어선 포설 및 연결", spec: "", unit: "개소", labors: {"통신설비공": 0.51, "통신케이블공": 0.51}, category: "device", page: 348, keywords: ["스마트 횡단보도 안전지원 시스템", "제어선 포설 및 연결"] },
  { code: "통신 9-4-32", name: "제어부", spec: "", unit: "대", labors: {"통신관련산업기사": 0.67, "통신설비공": 0.53, "보통인부": 0.53}, category: "device", page: 349, keywords: ["제어부", "스마트 과속정보 표지판"] },
  { code: "통신 9-4-32", name: "검지부", spec: "", unit: "대", labors: {"통신설비공": 0.27, "보통인부": 0.27}, category: "device", page: 349, keywords: ["스마트 과속정보 표지판", "검지부"] },
  { code: "통신 9-4-32", name: "표출부", spec: "", unit: "대", labors: {"통신설비공": 0.36, "보통인부": 0.36}, category: "device", page: 349, keywords: ["표출부", "스마트 과속정보 표지판"] },
  { code: "통신 9-4-33", name: "IoT 에어샤워", spec: "설치", unit: "대", labors: {"통신설비공": 0.9, "보통인부": 0.9}, category: "device", page: 349, keywords: ["iot 에어샤워", "스마트 iot 에어샤워", "설치"] },
  { code: "통신 9-4-34", name: "유류 센서", spec: "", unit: "대", labors: {"통신설비공": 0.21, "특별인부": 0.21}, category: "device", page: 349, keywords: ["유류 센서", "스마트 유류재고 관리 시스템"] },
  { code: "통신 9-4-34", name: "제어기", spec: "", unit: "대", labors: {"통신설비공": 0.12, "특별인부": 0.12}, category: "device", page: 349, keywords: ["제어기", "스마트 유류재고 관리 시스템"] },
  { code: "통신 9-4-34", name: "시험", spec: "", unit: "식", labors: {"통신관련산업기사": 0.15, "통신설비공": 0.15}, category: "device", page: 349, keywords: ["시험", "스마트 유류재고 관리 시스템"] },
  { code: "통신 9-4-35", name: "스마트 수하물 저울", spec: "", unit: "대", labors: {"통신설비공": 0.3, "S/W시험사": 0.3}, category: "device", page: 350, keywords: ["스마트 수하물 저울", "스마트 수하물 저울 시스템"] },
  { code: "통신 9-4-36", name: "감지 센서", spec: "", unit: "개", labors: {"통신설비공": 0.05, "H/W시험사": 0.05}, category: "device", page: 350, keywords: ["감지 센서", "스마트 화장실 시스템"] },
  { code: "통신 9-4-36", name: "LED 표시등", spec: "", unit: "개", labors: {"통신설비공": 0.02, "H/W시험사": 0.02}, category: "device", page: 350, keywords: ["led 표시등", "스마트 화장실 시스템"] },
  { code: "통신 9-4-36", name: "중계기", spec: "", unit: "대", labors: {"통신설비공": 0.31, "H/W시험사": 0.31}, category: "device", page: 350, keywords: ["중계기", "스마트 화장실 시스템"] },
  { code: "통신 9-4-37", name: "설치", spec: "도서대출 반납부", unit: "대", labors: {"통신설비공": 0.28, "H/W시험사": 0.28, "S/W시험사": 0.28}, category: "device", page: 350, keywords: ["스마트 도서관 시스템", "도서대출 반납부", "설치"] },
  { code: "통신 9-4-37", name: "시험", spec: "", unit: "식", labors: {"통신설비공": 0.32, "H/W시험사": 0.32, "S/W시험사": 0.32}, category: "device", page: 350, keywords: ["시험", "스마트 도서관 시스템"] },
  { code: "통신 9-4-38-1", name: "센서케이블 포설", spec: "", unit: "10m", labors: {"통신케이블공": 0.15}, category: "device", page: 351, keywords: ["자력(부착)식 케이블센서 감지 시스템", "센서케이블 포설"] },
  { code: "통신 9-4-38-1", name: "함체 설치", spec: "", unit: "대", labors: {"통신설비공": 0.63}, category: "device", page: 351, keywords: ["자력(부착)식 케이블센서 감지 시스템", "함체 설치"] },
  { code: "통신 9-4-38-1", name: "시그널디텍터 설치", spec: "", unit: "세트", labors: {"통신관련산업기사": 0.21, "통신설비공": 0.42}, category: "device", page: 351, keywords: ["자력(부착)식 케이블센서 감지 시스템", "시그널디텍터 설치"] },
  { code: "통신 9-4-38-1", name: "경보수신반 설치", spec: "", unit: "대", labors: {"통신관련산업기사": 0.3, "통신설비공": 0.7}, category: "device", page: 351, keywords: ["자력(부착)식 케이블센서 감지 시스템", "경보수신반 설치"] },
  { code: "통신 9-4-38-1", name: "․송수신 유니트", spec: "", unit: "개", labors: {"통신설비공": 0.02}, category: "device", page: 351, keywords: ["자력(부착)식 케이블센서 감지 시스템", "․송수신 유니트"] },
  { code: "통신 9-4-38-1", name: "시 험", spec: "구간시험", unit: "구간", labors: {"통신관련산업기사": 0.05, "통신설비공": 0.1}, category: "device", page: 351, keywords: ["구간시험", "시 험", "자력(부착)식 케이블센서 감지 시스템"] },
  { code: "통신 9-4-38-2", name: "포스트 설치", spec: "앵커", unit: "개", labors: {"특별인부": 0.45, "보통인부": 0.45}, category: "device", page: 352, keywords: ["포스트 설치", "앵커", "장력식 감지 시스템"] },
  { code: "통신 9-4-38-2", name: "장력 와이어 포설", spec: "", unit: "m", labors: {"특별인부": 0.02, "보통인부": 0.02}, category: "device", page: 352, keywords: ["장력 와이어 포설", "장력식 감지 시스템"] },
  { code: "통신 9-4-38-2", name: "스파이럴 설치", spec: "", unit: "개", labors: {"통신설비공": 0.13}, category: "device", page: 352, keywords: ["스파이럴 설치", "장력식 감지 시스템"] },
  { code: "통신 9-4-38-2", name: "감지기 설치", spec: "", unit: "대", labors: {"통신설비공": 0.13}, category: "device", page: 352, keywords: ["감지기 설치", "장력식 감지 시스템"] },
  { code: "통신 9-4-38-2", name: "경보분석장치 설치", spec: "", unit: "대", labors: {"통신설비공": 0.29, "특별인부": 0.29}, category: "device", page: 352, keywords: ["경보분석장치 설치", "장력식 감지 시스템"] },
  { code: "통신 9-4-38-2", name: "시험", spec: "구간시험", unit: "구간", labors: {"통신설비공": 0.2, "통신관련산업기사": 0.2}, category: "device", page: 352, keywords: ["시험", "구간시험", "장력식 감지 시스템"] },
  { code: "통신 9-4-39", name: "점멸기", spec: "", unit: "대", labors: {"통신케이블공": 0.12, "통신설비공": 0.12}, category: "device", page: 352, keywords: ["스마트 보안등 감시 제어시스템", "점멸기"] },
  { code: "통신 9-4-40", name: "중계기", spec: "", unit: "대", labors: {"무선안테나공": 0.32, "통신설비공": 0.32}, category: "device", page: 353, keywords: ["스마트 수목관리 시스템", "중계기"] },
  { code: "통신 9-4-40", name: "센서", spec: "수목", unit: "대", labors: {"통신설비공": 0.04}, category: "device", page: 353, keywords: ["센서", "스마트 수목관리 시스템", "수목"] },
  { code: "통신 9-4-41", name: "스탠드 타입", spec: "", unit: "대", labors: {"통신설비공": 0.16}, category: "device", page: 353, keywords: ["스마트 발열체크 시스템", "스탠드 타입"] },
  { code: "통신 9-4-41", name: "게이트 타입", spec: "", unit: "대", labors: {"통신설비공": 0.33}, category: "device", page: 353, keywords: ["스마트 발열체크 시스템", "게이트 타입"] },
  { code: "통신 9-4-42", name: "메인장비", spec: "", unit: "대", labors: {"통신관련산업기사": 0.45, "통신설비공": 0.45}, category: "device", page: 353, keywords: ["메인장비", "소음중화시스템"] },
  { code: "통신 9-4-42", name: "소음레벨감지센서", spec: "", unit: "대", labors: {"통신관련산업기사": 0.06, "통신설비공": 0.06}, category: "device", page: 353, keywords: ["소음레벨감지센서", "소음중화시스템"] },
  { code: "통신 9-4-43", name: "T형 제수변 플렌지", spec: "", unit: "대", labors: {"통신외선공": 0.18, "보통인부": 0.18}, category: "device", page: 354, keywords: ["iot기반 지능형 소화전 관리시스템", "t형 제수변 플렌지"] },
  { code: "통신 9-4-43", name: "제어함체", spec: "", unit: "대", labors: {"통신외선공": 0.35, "통신설비공": 0.35, "보통인부": 0.35}, category: "device", page: 354, keywords: ["제어함체", "iot기반 지능형 소화전 관리시스템"] },
  { code: "통신 9-4-43", name: "Pole", spec: "", unit: "기", labors: {"통신외선공": 0.11, "보통인부": 0.11}, category: "device", page: 354, keywords: ["pole", "iot기반 지능형 소화전 관리시스템"] },
  { code: "통신 9-4-44", name: "전광판", spec: "차량용", unit: "대", labors: {"통신설비공": 0.39, "통신관련산업기사": 0.39, "보통인부": 0.19}, category: "device", page: 355, keywords: ["차량용", "우회전 스마트 알리미 시스템", "전광판"] },
  { code: "통신 9-4-44", name: "제어함체", spec: "", unit: "대", labors: {"통신외선공": 0.29, "통신설비공": 0.29, "보통인부": 0.29}, category: "device", page: 355, keywords: ["우회전 스마트 알리미 시스템", "제어함체"] },
  { code: "통신 9-4-44", name: "시험", spec: "", unit: "식", labors: {"통신설비공": 0.54, "통신관련산업기사": 1.08}, category: "device", page: 355, keywords: ["시험", "우회전 스마트 알리미 시스템"] },
  { code: "통신 9-4-45", name: "모니터링 시스템", spec: "", unit: "면당", labors: {"통신설비공": 0.08, "통신내선공": 0.08}, category: "device", page: 355, keywords: ["모니터링 시스템", "전기차 배터리 온도 모니터링 시스템"] },
  { code: "통신 9-4-45", name: "전원함체", spec: "", unit: "개", labors: {"통신설비공": 0.1, "통신내선공": 0.1}, category: "device", page: 355, keywords: ["전원함체", "전기차 배터리 온도 모니터링 시스템"] },
  { code: "통신 9-4-45", name: "메인함체", spec: "", unit: "개", labors: {"통신설비공": 0.09, "통신내선공": 0.09}, category: "device", page: 355, keywords: ["전기차 배터리 온도 모니터링 시스템", "메인함체"] },
  { code: "통신 9-4-45", name: "운영프로그램", spec: "", unit: "식", labors: {"통신설비공": 0.14, "S/W시험사": 0.14}, category: "device", page: 355, keywords: ["운영프로그램", "전기차 배터리 온도 모니터링 시스템"] },
  { code: "통신 9-4-45", name: "최종시험", spec: "", unit: "식", labors: {"통신설비공": 0.06, "S/W시험사": 0.06}, category: "device", page: 355, keywords: ["최종시험", "전기차 배터리 온도 모니터링 시스템"] },
  { code: "통신 10-1-1", name: "기 초", spec: "1. 포 장 해 체", unit: "-", labors: {"통신설비공": 6.0, "보통인부": 12.0}, category: "device", page: 359, keywords: ["1. 포 장 해 체", "해상 및 해안레이더(300kw 기준)", "기 초"] },
  { code: "통신 10-1-1", name: "작 업", spec: "2. 점 검 및 목 록 대 조", unit: "-", labors: {"통신관련산업기사": 3.0, "통신설비공": 6.0}, category: "device", page: 359, keywords: ["해상 및 해안레이더(300kw 기준)", "작 업", "2. 점 검 및 목 록 대 조"] },
  { code: "통신 10-1-1", name: "작 업", spec: "3. 기 기 반 입 및 장 치", unit: "-", labors: {"통신관련산업기사": 4.0, "통신설비공": 12.0, "보통인부": 20.0}, category: "device", page: 359, keywords: ["해상 및 해안레이더(300kw 기준)", "작 업", "3. 기 기 반 입 및 장 치"] },
  { code: "통신 10-1-1", name: "작 업", spec: "4. 장 치 대 설 치", unit: "-", labors: {"통신관련산업기사": 3.0, "통신설비공": 9.0, "보통인부": 6.0}, category: "device", page: 359, keywords: ["해상 및 해안레이더(300kw 기준)", "작 업", "4. 장 치 대 설 치"] },
  { code: "통신 10-1-1", name: "작 업", spec: "5. 안테나설치 위치확인", unit: "2.00", labors: {"통신관련기사": 1.0, "통신관련산업기사": 2.0, "보통인부": 2.0}, category: "device", page: 359, keywords: ["해상 및 해안레이더(300kw 기준)", "작 업", "5. 안테나설치 위치확인"] },
  { code: "통신 10-1-1", name: "조 립", spec: "6. 전 원 시 설", unit: "-", labors: {"통신관련기사": 2.0, "통신관련산업기사": 2.0, "통신설비공": 8.0, "보통인부": 4.0}, category: "device", page: 359, keywords: ["6. 전 원 시 설", "해상 및 해안레이더(300kw 기준)", "조 립"] },
  { code: "통신 10-1-1", name: "및", spec: "7. 지 시 기 설 치", unit: "-", labors: {"통신관련기사": 2.0, "통신관련산업기사": 4.0, "통신설비공": 6.0, "보통인부": 6.0}, category: "device", page: 359, keywords: ["해상 및 해안레이더(300kw 기준)", "7. 지 시 기 설 치"] },
  { code: "통신 10-1-1", name: "설 치", spec: "8. 변 조 기 설 치", unit: "-", labors: {"통신관련기사": 3.0, "통신관련산업기사": 6.0, "통신설비공": 12.0, "보통인부": 3.0}, category: "device", page: 359, keywords: ["해상 및 해안레이더(300kw 기준)", "설 치", "8. 변 조 기 설 치"] },
  { code: "통신 10-1-1", name: "설 치", spec: "9. 송‧수 신 기 설 치", unit: "-", labors: {"통신관련기사": 4.0, "통신관련산업기사": 12.0, "통신설비공": 16.0, "보통인부": 4.0}, category: "device", page: 359, keywords: ["해상 및 해안레이더(300kw 기준)", "설 치", "9. 송‧수 신 기 설 치"] },
  { code: "통신 10-1-1", name: "설 치", spec: "10. 레이더 조정기 설 치", unit: "-", labors: {"통신관련산업기사": 3.0, "통신설비공": 6.0}, category: "device", page: 359, keywords: ["해상 및 해안레이더(300kw 기준)", "10. 레이더 조정기 설 치", "설 치"] },
  { code: "통신 10-1-1", name: "설 치", spec: "11. Adapter Ind 설 치", unit: "-", labors: {"통신관련산업기사": 3.0, "통신설비공": 6.0}, category: "device", page: 359, keywords: ["해상 및 해안레이더(300kw 기준)", "설 치", "11. adapter ind 설 치"] },
  { code: "통신 10-1-1", name: "설 치", spec: "12. Inter Conn.Box 설 치", unit: "-", labors: {"통신관련산업기사": 3.0, "통신설비공": 6.0}, category: "device", page: 359, keywords: ["해상 및 해안레이더(300kw 기준)", "설 치", "12. inter conn.box 설 치"] },
  { code: "통신 10-1-1", name: "설 치", spec: "13. 안 테 나 설 치", unit: "-", labors: {"통신관련기사": 3.0, "통신관련산업기사": 3.0, "통신설비공": 8.0, "보통인부": 6.0}, category: "device", page: 359, keywords: ["해상 및 해안레이더(300kw 기준)", "설 치", "13. 안 테 나 설 치"] },
  { code: "통신 10-1-1", name: "설 치", spec: "14. 기 타 회 로 결 선", unit: "-", labors: {"통신관련기사": 3.0, "통신관련산업기사": 3.0, "통신설비공": 9.0}, category: "device", page: 359, keywords: ["해상 및 해안레이더(300kw 기준)", "설 치", "14. 기 타 회 로 결 선"] },
  { code: "통신 10-1-1", name: "점 검", spec: "15. 회 로 결 선 점 검", unit: "-", labors: {"통신관련기사": 3.0, "통신관련산업기사": 6.0}, category: "device", page: 359, keywords: ["해상 및 해안레이더(300kw 기준)", "점 검", "15. 회 로 결 선 점 검"] },
  { code: "통신 10-1-1", name: "및", spec: "16. 기기단속동작 점 검", unit: "-", labors: {"통신관련기사": 3.0, "통신관련산업기사": 6.0}, category: "device", page: 359, keywords: ["해상 및 해안레이더(300kw 기준)", "16. 기기단속동작 점 검"] },
  { code: "통신 10-1-1", name: "조 정", spec: "17. 기기연속동작 점 검", unit: "-", labors: {"통신관련기사": 3.0, "통신관련산업기사": 6.0}, category: "device", page: 359, keywords: ["조 정", "해상 및 해안레이더(300kw 기준)", "17. 기기연속동작 점 검"] },
  { code: "통신 10-1-1", name: "조 정", spec: "18. 종합성능점검 및 조정", unit: "-", labors: {"통신관련기사": 6.0, "통신관련산업기사": 6.0}, category: "device", page: 359, keywords: ["조 정", "해상 및 해안레이더(300kw 기준)", "18. 종합성능점검 및 조정"] },
  { code: "통신 10-1-1", name: "조 정", spec: "19. 시 험 전 파 발 사", unit: "-", labors: {"통신관련기사": 8.0, "통신관련산업기사": 8.0}, category: "device", page: 359, keywords: ["조 정", "해상 및 해안레이더(300kw 기준)", "19. 시 험 전 파 발 사"] },
  { code: "통신 10-1-2-1", name: "기 초", spec: "포장해체 및 목록대조", unit: "개", labors: {"통신설비공": 0.39, "H/W시험사": 0.52}, category: "device", page: 360, keywords: ["포장해체 및 목록대조", "기 초", "vts 운용콘솔"] },
  { code: "통신 10-1-2-1", name: "작 업", spec: "장비반입 및 전원설비 설치", unit: "개", labors: {"통신설비공": 0.48, "H/W시험사": 0.48}, category: "device", page: 360, keywords: ["작 업", "장비반입 및 전원설비 설치", "vts 운용콘솔"] },
  { code: "통신 10-1-2-1", name: "작 업", spec: "운용콘솔 설치(2700 x1100)", unit: "개", labors: {"통신설비공": 1.5, "H/W시험사": 1.5}, category: "device", page: 360, keywords: ["작 업", "vts 운용콘솔", "운용콘솔 설치(2700 x1100)"] },
  { code: "통신 10-1-2-1", name: "조 립", spec: "운용콘솔 본체 설치", unit: "개", labors: {"통신설비공": 0.2, "H/W시험사": 0.3}, category: "device", page: 360, keywords: ["운용콘솔 본체 설치", "vts 운용콘솔", "조 립"] },
  { code: "통신 10-1-2-1", name: "및", spec: "모니터 설치", unit: "개", labors: {"통신설비공": 0.1, "H/W시험사": 0.1}, category: "device", page: 360, keywords: ["모니터 설치", "vts 운용콘솔"] },
  { code: "통신 10-1-2-1", name: "설 치", spec: "OS/Patch 설치", unit: "개", labors: {"S/W시험사": 0.65, "H/W시험사": 0.65}, category: "device", page: 360, keywords: ["설 치", "os/patch 설치", "vts 운용콘솔"] },
  { code: "통신 10-1-2-1", name: "설 치", spec: "장비 결선", unit: "개", labors: {"통신설비공": 0.58, "H/W시험사": 0.58}, category: "device", page: 360, keywords: ["vts 운용콘솔", "설 치", "장비 결선"] },
  { code: "통신 10-1-2-1", name: "Software", spec: "운용서버 프로그램 설치", unit: "개", labors: {"S/W시험사": 1.0, "H/W시험사": 0.3}, category: "device", page: 360, keywords: ["vts 운용콘솔", "software", "운용서버 프로그램 설치"] },
  { code: "통신 10-1-2-1", name: "설 치", spec: "VTS 운용 Sub-Client설치", unit: "개", labors: {"S/W시험사": 0.7, "H/W시험사": 0.3}, category: "device", page: 360, keywords: ["설 치", "vts 운용콘솔", "vts 운용 sub-client설치"] },
  { code: "통신 10-1-2-1", name: "설 치", spec: "Driver설치 및 동작상태 확인", unit: "개", labors: {"S/W시험사": 0.3, "H/W시험사": 1.2}, category: "device", page: 360, keywords: ["설 치", "driver설치 및 동작상태 확인", "vts 운용콘솔"] },
  { code: "통신 10-1-2-1", name: "설 치", spec: "Chart 및 각종 Mask 설치(국소당)", unit: "개", labors: {"S/W시험사": 1.5}, category: "device", page: 360, keywords: ["vts 운용콘솔", "설 치", "chart 및 각종 mask 설치(국소당)"] },
  { code: "통신 10-1-2-1", name: "종 합", spec: "운용콘솔 설치상태 확인·점검", unit: "개", labors: {"H/W시험사": 0.21}, category: "device", page: 360, keywords: ["운용콘솔 설치상태 확인·점검", "vts 운용콘솔", "종 합"] },
  { code: "통신 10-1-2-1", name: "시 험", spec: "전원측정 및 점검", unit: "개", labors: {"H/W시험사": 0.2}, category: "device", page: 360, keywords: ["시 험", "전원측정 및 점검", "vts 운용콘솔"] },
  { code: "통신 10-1-2-1", name: "시 험", spec: "Multi Video Distribution 시험", unit: "개", labors: {"H/W시험사": 0.17}, category: "device", page: 360, keywords: ["vts 운용콘솔", "시 험", "multi video distribution 시험"] },
  { code: "통신 10-1-2-1", name: "시 험", spec: "System Application 및 연동 SoftWare 시험", unit: "개", labors: {"H/W시험사": 0.78}, category: "device", page: 360, keywords: ["시 험", "vts 운용콘솔", "system application 및 연동 software 시험"] },
  { code: "통신 10-1-2-1", name: "시 험", spec: "Network 상태 시험 및 점검", unit: "개", labors: {"H/W시험사": 0.32}, category: "device", page: 360, keywords: ["시 험", "vts 운용콘솔", "network 상태 시험 및 점검"] },
  { code: "통신 10-1-2-1", name: "시 험", spec: "Plot전시상태 시험 및 조정(국소당)", unit: "개", labors: {"H/W시험사": 0.86}, category: "device", page: 360, keywords: ["plot전시상태 시험 및 조정(국소당)", "시 험", "vts 운용콘솔"] },
  { code: "통신 10-1-2-1", name: "시 험", spec: "Track 및 AIS상태 시험(국소당)", unit: "개", labors: {"H/W시험사": 0.66}, category: "device", page: 360, keywords: ["track 및 ais상태 시험(국소당)", "시 험", "vts 운용콘솔"] },
  { code: "통신 10-1-2-1", name: "시 험", spec: "Data-Backup", unit: "개", labors: {"H/W시험사": 0.79}, category: "device", page: 360, keywords: ["vts 운용콘솔", "시 험", "data-backup"] },
  { code: "통신 10-1-2-1", name: "시 험", spec: "Remote Control상태 시험(국소당)", unit: "개", labors: {"H/W시험사": 1.5}, category: "device", page: 360, keywords: ["시 험", "remote control상태 시험(국소당)", "vts 운용콘솔"] },
  { code: "통신 10-1-2-1", name: "시 험", spec: "단축 조정 KEY 판넬 시험", unit: "개", labors: {"H/W시험사": 0.76}, category: "device", page: 360, keywords: ["시 험", "vts 운용콘솔", "단축 조정 key 판넬 시험"] },
  { code: "통신 10-1-2-2", name: "기 초", spec: "포장해체 및 목록대조", unit: "개", labors: {"통신설비공": 0.39, "H/W시험사": 0.52}, category: "device", page: 361, keywords: ["포장해체 및 목록대조", "기 초", "경보통합처리장치"] },
  { code: "통신 10-1-2-2", name: "작 업", spec: "장비반입 및 전원설비 설치", unit: "개", labors: {"통신설비공": 0.48, "H/W시험사": 0.48}, category: "device", page: 361, keywords: ["작 업", "장비반입 및 전원설비 설치", "경보통합처리장치"] },
  { code: "통신 10-1-2-2", name: "조 립", spec: "모니터 설치", unit: "개", labors: {"통신설비공": 0.1, "H/W시험사": 0.1}, category: "device", page: 361, keywords: ["모니터 설치", "경보통합처리장치", "조 립"] },
  { code: "통신 10-1-2-2", name: "및", spec: "OS/Patch 설치", unit: "개", labors: {"S/W시험사": 0.65, "H/W시험사": 0.65}, category: "device", page: 361, keywords: ["os/patch 설치", "경보통합처리장치"] },
  { code: "통신 10-1-2-2", name: "설 치", spec: "장비 결선", unit: "개", labors: {"통신설비공": 0.58, "H/W시험사": 0.58}, category: "device", page: 361, keywords: ["설 치", "경보통합처리장치", "장비 결선"] },
  { code: "통신 10-1-2-2", name: "Software", spec: "경보통합처리장치 프로그램 설치", unit: "개", labors: {"S/W시험사": 1.4, "H/W시험사": 0.55}, category: "device", page: 361, keywords: ["경보통합처리장치", "software", "경보통합처리장치 프로그램 설치"] },
  { code: "통신 10-1-2-2", name: "설 치", spec: "VTS 운용 Sub-Client설치", unit: "개", labors: {"S/W시험사": 0.7, "H/W시험사": 0.45}, category: "device", page: 361, keywords: ["설 치", "경보통합처리장치", "vts 운용 sub-client설치"] },
  { code: "통신 10-1-2-2", name: "설 치", spec: "Driver설치 및 동작상태 확인", unit: "개", labors: {"S/W시험사": 0.55, "H/W시험사": 1.0}, category: "device", page: 361, keywords: ["설 치", "driver설치 및 동작상태 확인", "경보통합처리장치"] },
  { code: "통신 10-1-2-2", name: "종 합", spec: "경보통합처리장치 설치상태 확인·점검", unit: "개", labors: {"H/W시험사": 0.4}, category: "device", page: 361, keywords: ["경보통합처리장치 설치상태 확인·점검", "경보통합처리장치", "종 합"] },
  { code: "통신 10-1-2-2", name: "시 험", spec: "전원측정 및 점검", unit: "개", labors: {"H/W시험사": 0.25}, category: "device", page: 361, keywords: ["시 험", "전원측정 및 점검", "경보통합처리장치"] },
  { code: "통신 10-1-2-2", name: "시 험", spec: "Video Distribution 점검", unit: "개", labors: {"H/W시험사": 0.25}, category: "device", page: 361, keywords: ["시 험", "경보통합처리장치", "video distribution 점검"] },
  { code: "통신 10-1-2-2", name: "시 험", spec: "System Application 및 연동Software 시험", unit: "개", labors: {"S/W시험사": 0.5, "H/W시험사": 0.55}, category: "device", page: 361, keywords: ["시 험", "경보통합처리장치", "system application 및 연동software 시험"] },
  { code: "통신 10-1-2-2", name: "시 험", spec: "Network 상태 시험", unit: "개", labors: {"H/W시험사": 0.35}, category: "device", page: 361, keywords: ["network 상태 시험", "시 험", "경보통합처리장치"] },
  { code: "통신 10-1-2-2", name: "시 험", spec: "Data 서비스기능 및 Radar 통제시험", unit: "개", labors: {"S/W시험사": 0.55, "H/W시험사": 0.55}, category: "device", page: 361, keywords: ["시 험", "data 서비스기능 및 radar 통제시험", "경보통합처리장치"] },
  { code: "통신 10-1-2-2", name: "시 험", spec: "Radar Target Data 처리시험", unit: "개", labors: {"S/W시험사": 0.45, "H/W시험사": 0.45}, category: "device", page: 361, keywords: ["시 험", "radar target data 처리시험", "경보통합처리장치"] },
  { code: "통신 10-1-2-2", name: "시 험", spec: "Data-Backup", unit: "개", labors: {"S/W시험사": 0.46, "H/W시험사": 0.33}, category: "device", page: 361, keywords: ["시 험", "경보통합처리장치", "data-backup"] },
  { code: "통신 10-1-2-2", name: "시 험", spec: "Time Server 시험 및 조정", unit: "개", labors: {"S/W시험사": 0.85, "H/W시험사": 0.75}, category: "device", page: 361, keywords: ["시 험", "time server 시험 및 조정", "경보통합처리장치"] },
  { code: "통신 10-1-2-3", name: "기 초", spec: "포장해체 및 목록대조", unit: "개", labors: {"통신설비공": 0.39, "H/W시험사": 0.52}, category: "device", page: 361, keywords: ["포장해체 및 목록대조", "기 초", "기록장치"] },
  { code: "통신 10-1-2-3", name: "작 업", spec: "장비반입 및 전원설비 설치", unit: "개", labors: {"통신설비공": 0.48, "H/W시험사": 0.48}, category: "device", page: 361, keywords: ["작 업", "장비반입 및 전원설비 설치", "기록장치"] },
  { code: "통신 10-1-2-3", name: "조 립", spec: "모니터 설치", unit: "개", labors: {"통신설비공": 0.1, "H/W시험사": 0.1}, category: "device", page: 361, keywords: ["모니터 설치", "기록장치", "조 립"] },
  { code: "통신 10-1-2-3", name: "및", spec: "OS/Patch 설치", unit: "개", labors: {"S/W시험사": 0.65, "H/W시험사": 0.65}, category: "device", page: 361, keywords: ["os/patch 설치", "기록장치"] },
  { code: "통신 10-1-2-3", name: "설 치", spec: "장비 결선", unit: "개", labors: {"통신설비공": 0.58, "H/W시험사": 0.58}, category: "device", page: 361, keywords: ["설 치", "기록장치", "장비 결선"] },
  { code: "통신 10-1-2-3", name: "Softwar", spec: "기록장치 프로그램 설치", unit: "개", labors: {"S/W시험사": 1.4, "H/W시험사": 0.5}, category: "device", page: 361, keywords: ["softwar", "기록장치 프로그램 설치", "기록장치"] },
  { code: "통신 10-1-2-3", name: "e", spec: "VTS 운용 Sub-Client 설치", unit: "개", labors: {"S/W시험사": 0.7, "H/W시험사": 0.4}, category: "device", page: 361, keywords: ["기록장치", "vts 운용 sub-client 설치"] },
  { code: "통신 10-1-2-3", name: "설 치", spec: "Driver설치 및 동작상태 확인", unit: "개", labors: {"S/W시험사": 0.6, "H/W시험사": 0.55}, category: "device", page: 361, keywords: ["설 치", "driver설치 및 동작상태 확인", "기록장치"] },
  { code: "통신 10-1-2-3", name: "설 치", spec: "Voice 데이타 저장 프로그램 설치", unit: "개", labors: {"S/W시험사": 0.75, "H/W시험사": 0.75}, category: "device", page: 361, keywords: ["설 치", "기록장치", "voice 데이타 저장 프로그램 설치"] },
  { code: "통신 10-1-2-3", name: "종 합", spec: "기록장치 설치상태 확인·점검", unit: "개", labors: {"H/W시험사": 0.2}, category: "device", page: 361, keywords: ["기록장치 설치상태 확인·점검", "기록장치", "종 합"] },
  { code: "통신 10-1-2-3", name: "시 험", spec: "전원측정 및 점검", unit: "개", labors: {"H/W시험사": 0.11}, category: "device", page: 361, keywords: ["시 험", "전원측정 및 점검", "기록장치"] },
  { code: "통신 10-1-2-3", name: "시 험", spec: "Network상태 시험", unit: "개", labors: {"H/W시험사": 0.35}, category: "device", page: 361, keywords: ["시 험", "기록장치", "network상태 시험"] },
  { code: "통신 10-1-2-3", name: "시 험", spec: "기록매체점검(RW-CDROM, Tape-Backup등포함)", unit: "개", labors: {"S/W시험사": 0.2, "H/W시험사": 0.2}, category: "device", page: 361, keywords: ["시 험", "기록장치", "기록매체점검(rw-cdrom, tape-backup등포함)"] },
  { code: "통신 10-1-2-3", name: "시 험", spec: "각종 기록Data 저장 시험", unit: "개", labors: {"S/W시험사": 0.5, "H/W시험사": 0.5}, category: "device", page: 361, keywords: ["각종 기록data 저장 시험", "시 험", "기록장치"] },
  { code: "통신 10-1-2-3", name: "시 험", spec: "(Video, Voice, Track, AIS, VHF/DF등)", unit: "개", labors: {"S/W시험사": 0.55, "H/W시험사": 0.25}, category: "device", page: 361, keywords: ["(video, voice, track, ais, vhf/df등)", "시 험", "기록장치"] },
  { code: "통신 10-1-2-3", name: "시 험", spec: "System state 및 Software 시험", unit: "개", labors: {"S/W시험사": 1.2}, category: "device", page: 361, keywords: ["시 험", "system state 및 software 시험", "기록장치"] },
  { code: "통신 10-1-2-3", name: "시 험", spec: "각종 Replay상태 시험(국소당)", unit: "개", labors: {"S/W시험사": 0.75, "H/W시험사": 0.75}, category: "device", page: 361, keywords: ["시 험", "각종 replay상태 시험(국소당)", "기록장치"] },
  { code: "통신 10-1-2-4", name: "기 초", spec: "포장해체 및 목록대조", unit: "개", labors: {"통신설비공": 0.39, "H/W시험사": 0.52}, category: "device", page: 362, keywords: ["포장해체 및 목록대조", "기 초", "데이터 저장장치"] },
  { code: "통신 10-1-2-4", name: "작 업", spec: "장비반입 및 전원설비 설치", unit: "개", labors: {"통신설비공": 0.48, "H/W시험사": 0.48}, category: "device", page: 362, keywords: ["작 업", "데이터 저장장치", "장비반입 및 전원설비 설치"] },
  { code: "통신 10-1-2-4", name: "조 립", spec: "모니터 설치", unit: "개", labors: {"통신설비공": 0.1, "H/W시험사": 0.1}, category: "device", page: 362, keywords: ["모니터 설치", "데이터 저장장치", "조 립"] },
  { code: "통신 10-1-2-4", name: "및", spec: "OS/Patch 설치", unit: "개", labors: {"S/W시험사": 0.65, "H/W시험사": 0.65}, category: "device", page: 362, keywords: ["데이터 저장장치", "os/patch 설치"] },
  { code: "통신 10-1-2-4", name: "설 치", spec: "장비 결선", unit: "개", labors: {"통신설비공": 0.58, "H/W시험사": 0.58}, category: "device", page: 362, keywords: ["설 치", "데이터 저장장치", "장비 결선"] },
  { code: "통신 10-1-2-4", name: "Software", spec: "저장장치 프로그램 설치", unit: "개", labors: {"S/W시험사": 1.4, "H/W시험사": 0.5}, category: "device", page: 362, keywords: ["저장장치 프로그램 설치", "데이터 저장장치", "software"] },
  { code: "통신 10-1-2-4", name: "설 치", spec: "VTS 운용 Sub-Client설치", unit: "개", labors: {"S/W시험사": 0.8, "H/W시험사": 0.55}, category: "device", page: 362, keywords: ["설 치", "데이터 저장장치", "vts 운용 sub-client설치"] },
  { code: "통신 10-1-2-4", name: "설 치", spec: "Driver설치 및 동작상태 확인", unit: "개", labors: {"S/W시험사": 0.65, "H/W시험사": 0.5}, category: "device", page: 362, keywords: ["설 치", "driver설치 및 동작상태 확인", "데이터 저장장치"] },
  { code: "통신 10-1-2-4", name: "설 치", spec: "Data-Base Server설치", unit: "개", labors: {"S/W시험사": 0.5}, category: "device", page: 362, keywords: ["설 치", "데이터 저장장치", "data-base server설치"] },
  { code: "통신 10-1-2-4", name: "종 합", spec: "저장장치 설치상태 확인·점검", unit: "개", labors: {"H/W시험사": 0.33}, category: "device", page: 362, keywords: ["데이터 저장장치", "저장장치 설치상태 확인·점검", "종 합"] },
  { code: "통신 10-1-2-4", name: "시 험", spec: "전원측정 및 점검", unit: "개", labors: {"H/W시험사": 0.29}, category: "device", page: 362, keywords: ["시 험", "데이터 저장장치", "전원측정 및 점검"] },
  { code: "통신 10-1-2-4", name: "시 험", spec: "Video Distribution 시험 및 조정", unit: "개", labors: {"H/W시험사": 0.3}, category: "device", page: 362, keywords: ["시 험", "데이터 저장장치", "video distribution 시험 및 조정"] },
  { code: "통신 10-1-2-4", name: "시 험", spec: "SQL Server 동작상태 시험", unit: "개", labors: {"S/W시험사": 0.2}, category: "device", page: 362, keywords: ["시 험", "데이터 저장장치", "sql server 동작상태 시험"] },
  { code: "통신 10-1-2-4", name: "시 험", spec: "Web Service(IIS)동작상태 시험", unit: "개", labors: {"S/W시험사": 0.2}, category: "device", page: 362, keywords: ["web service(iis)동작상태 시험", "시 험", "데이터 저장장치"] },
  { code: "통신 10-1-2-4", name: "시 험", spec: "Driver동작상태 및 Network상태 시험", unit: "개", labors: {"H/W시험사": 0.55}, category: "device", page: 362, keywords: ["driver동작상태 및 network상태 시험", "시 험", "데이터 저장장치"] },
  { code: "통신 10-1-2-4", name: "시 험", spec: "System state 및 Software점검", unit: "개", labors: {"S/W시험사": 0.4, "H/W시험사": 0.3}, category: "device", page: 362, keywords: ["시 험", "데이터 저장장치", "system state 및 software점검"] },
  { code: "통신 10-1-2-4", name: "시 험", spec: "데이타베이스 확인 및 Back-up", unit: "개", labors: {"S/W시험사": 0.55, "H/W시험사": 0.65}, category: "device", page: 362, keywords: ["시 험", "데이터 저장장치", "데이타베이스 확인 및 back-up"] },
  { code: "통신 10-1-2-5", name: "기 초", spec: "포장해체 및 목록대조", unit: "개", labors: {"통신설비공": 0.39, "H/W시험사": 0.52}, category: "device", page: 362, keywords: ["포장해체 및 목록대조", "편집기", "기 초"] },
  { code: "통신 10-1-2-5", name: "작 업", spec: "장비반입 및 전원설비 설치", unit: "개", labors: {"통신설비공": 0.48, "H/W시험사": 0.48}, category: "device", page: 362, keywords: ["편집기", "작 업", "장비반입 및 전원설비 설치"] },
  { code: "통신 10-1-2-5", name: "조 립", spec: "모니터 설치", unit: "개", labors: {"통신설비공": 0.1, "H/W시험사": 0.1}, category: "device", page: 362, keywords: ["편집기", "모니터 설치", "조 립"] },
  { code: "통신 10-1-2-5", name: "및", spec: "OS/Patch 설치", unit: "개", labors: {"S/W시험사": 0.65, "H/W시험사": 0.65}, category: "device", page: 362, keywords: ["편집기", "os/patch 설치"] },
  { code: "통신 10-1-2-5", name: "설 치", spec: "장비 결선", unit: "개", labors: {"통신설비공": 0.58, "H/W시험사": 0.58}, category: "device", page: 362, keywords: ["편집기", "설 치", "장비 결선"] },
  { code: "통신 10-1-2-5", name: "Software", spec: "편집기 프로그램설치", unit: "개", labors: {"S/W시험사": 1.55, "H/W시험사": 0.7}, category: "device", page: 362, keywords: ["편집기", "편집기 프로그램설치", "software"] },
  { code: "통신 10-1-2-5", name: "설 치", spec: "VTS 운용Sub-Client설치", unit: "개", labors: {"S/W시험사": 0.8, "H/W시험사": 0.45}, category: "device", page: 362, keywords: ["편집기", "설 치", "vts 운용sub-client설치"] },
  { code: "통신 10-1-2-5", name: "설 치", spec: "Chart 및각종Mask 설치", unit: "개", labors: {"S/W시험사": 1.5}, category: "device", page: 362, keywords: ["편집기", "설 치", "chart 및각종mask 설치"] },
  { code: "통신 10-1-2-5", name: "종 합", spec: "편집기설치상태확인·점검", unit: "개", labors: {"H/W시험사": 0.35}, category: "device", page: 362, keywords: ["편집기", "편집기설치상태확인·점검", "종 합"] },
  { code: "통신 10-1-2-5", name: "시 험", spec: "전원측정및점검", unit: "개", labors: {"H/W시험사": 0.24}, category: "device", page: 362, keywords: ["편집기", "시 험", "전원측정및점검"] },
  { code: "통신 10-1-2-5", name: "시 험", spec: "Video Distribution 시험및점검", unit: "개", labors: {"S/W시험사": 0.35}, category: "device", page: 362, keywords: ["편집기", "시 험", "video distribution 시험및점검"] },
  { code: "통신 10-1-2-5", name: "시 험", spec: "SystemApplication 및연동Software 시험", unit: "개", labors: {"S/W시험사": 0.35, "H/W시험사": 0.32}, category: "device", page: 362, keywords: ["편집기", "시 험", "systemapplication 및연동software 시험"] },
  { code: "통신 10-1-2-5", name: "시 험", spec: "Network 상태시험", unit: "개", labors: {"H/W시험사": 0.35}, category: "device", page: 362, keywords: ["편집기", "시 험", "network 상태시험"] },
  { code: "통신 10-1-2-5", name: "시 험", spec: "Plot전시상태시험및조정(국소당)", unit: "개", labors: {"S/W시험사": 0.42, "H/W시험사": 0.42}, category: "device", page: 362, keywords: ["편집기", "시 험", "plot전시상태시험및조정(국소당)"] },
  { code: "통신 10-1-2-5", name: "시 험", spec: "Track 및AIS상태시험(국소당)", unit: "개", labors: {"S/W시험사": 0.4, "H/W시험사": 0.35}, category: "device", page: 362, keywords: ["편집기", "시 험", "track 및ais상태시험(국소당)"] },
  { code: "통신 10-1-2-5", name: "시 험", spec: "Remote Control상태시험(국소당)", unit: "개", labors: {"H/W시험사": 0.34}, category: "device", page: 362, keywords: ["편집기", "시 험", "remote control상태시험(국소당)"] },
  { code: "통신 10-1-2-5", name: "시 험", spec: "Data 송출시험및점검", unit: "개", labors: {"H/W시험사": 0.32}, category: "device", page: 362, keywords: ["편집기", "시 험", "data 송출시험및점검"] },
  { code: "통신 10-1-2-6", name: "기 초", spec: "포장해체 및 목록대조", unit: "개", labors: {"통신설비공": 0.39, "H/W시험사": 0.52}, category: "device", page: 363, keywords: ["포장해체 및 목록대조", "데이터 재생장치", "기 초"] },
  { code: "통신 10-1-2-6", name: "작 업", spec: "장비반입 및 전원설비 설치", unit: "개", labors: {"통신설비공": 0.48, "H/W시험사": 0.48}, category: "device", page: 363, keywords: ["데이터 재생장치", "작 업", "장비반입 및 전원설비 설치"] },
  { code: "통신 10-1-2-6", name: "조 립", spec: "모니터 설치", unit: "개", labors: {"통신설비공": 0.1, "H/W시험사": 0.1}, category: "device", page: 363, keywords: ["데이터 재생장치", "모니터 설치", "조 립"] },
  { code: "통신 10-1-2-6", name: "및", spec: "OS/Patch 설치", unit: "개", labors: {"S/W시험사": 0.65, "H/W시험사": 0.65}, category: "device", page: 363, keywords: ["데이터 재생장치", "os/patch 설치"] },
  { code: "통신 10-1-2-6", name: "설 치", spec: "장비 결선", unit: "개", labors: {"통신설비공": 0.58, "H/W시험사": 0.58}, category: "device", page: 363, keywords: ["데이터 재생장치", "설 치", "장비 결선"] },
  { code: "통신 10-1-2-6", name: "Software", spec: "데이터재생프로그램설치", unit: "개", labors: {"S/W시험사": 1.6, "H/W시험사": 0.94}, category: "device", page: 363, keywords: ["데이터재생프로그램설치", "software", "데이터 재생장치"] },
  { code: "통신 10-1-2-6", name: "설 치", spec: "VTS 운용Sub-Client설치", unit: "개", labors: {"S/W시험사": 0.9, "H/W시험사": 0.75}, category: "device", page: 363, keywords: ["데이터 재생장치", "설 치", "vts 운용sub-client설치"] },
  { code: "통신 10-1-2-6", name: "설 치", spec: "Chart 및각종Mask 설치", unit: "개", labors: {"S/W시험사": 1.5}, category: "device", page: 363, keywords: ["데이터 재생장치", "설 치", "chart 및각종mask 설치"] },
  { code: "통신 10-1-2-6", name: "종 합", spec: "데이터재생장치설치상태확인·점검", unit: "개", labors: {"H/W시험사": 0.42}, category: "device", page: 363, keywords: ["데이터 재생장치", "데이터재생장치설치상태확인·점검", "종 합"] },
  { code: "통신 10-1-2-6", name: "시 험", spec: "전원측정및점검", unit: "개", labors: {"H/W시험사": 0.23}, category: "device", page: 363, keywords: ["데이터 재생장치", "시 험", "전원측정및점검"] },
  { code: "통신 10-1-2-6", name: "시 험", spec: "Multi Video Distribution 시험및조정", unit: "개", labors: {"H/W시험사": 0.24}, category: "device", page: 363, keywords: ["데이터 재생장치", "시 험", "multi video distribution 시험및조정"] },
  { code: "통신 10-1-2-6", name: "시 험", spec: "SystemApplication 및연동Software 시험", unit: "개", labors: {"S/W시험사": 0.32}, category: "device", page: 363, keywords: ["데이터 재생장치", "시 험", "systemapplication 및연동software 시험"] },
  { code: "통신 10-1-2-6", name: "시 험", spec: "Network 상태시험", unit: "개", labors: {"S/W시험사": 0.38, "H/W시험사": 0.38}, category: "device", page: 363, keywords: ["데이터 재생장치", "시 험", "network 상태시험"] },
  { code: "통신 10-1-2-6", name: "시 험", spec: "Plot전시상태시험및조정(국소당)", unit: "개", labors: {"H/W시험사": 0.42}, category: "device", page: 363, keywords: ["데이터 재생장치", "시 험", "plot전시상태시험및조정(국소당)"] },
  { code: "통신 10-1-2-6", name: "시 험", spec: "Track 및AIS상태시험(국소당)", unit: "개", labors: {"S/W시험사": 0.43, "H/W시험사": 0.43}, category: "device", page: 363, keywords: ["데이터 재생장치", "시 험", "track 및ais상태시험(국소당)"] },
  { code: "통신 10-1-2-6", name: "시 험", spec: "RemoteComtrol상태시험및조정(국소당)", unit: "개", labors: {"S/W시험사": 0.48, "H/W시험사": 0.45}, category: "device", page: 363, keywords: ["데이터 재생장치", "시 험", "remotecomtrol상태시험및조정(국소당)"] },
  { code: "통신 10-1-2-6", name: "시 험", spec: "Data-Backup", unit: "개", labors: {"S/W시험사": 0.46, "H/W시험사": 0.33}, category: "device", page: 363, keywords: ["데이터 재생장치", "시 험", "data-backup"] },
  { code: "통신 10-1-2-7", name: "기 초", spec: "포장해체 및 목록대조", unit: "개", labors: {"통신설비공": 0.39, "H/W시험사": 0.52}, category: "device", page: 363, keywords: ["포장해체 및 목록대조", "기 초", "센서서버장치"] },
  { code: "통신 10-1-2-7", name: "작 업", spec: "장비반입 및 전원설비 설치", unit: "개", labors: {"통신설비공": 0.48, "H/W시험사": 0.48}, category: "device", page: 363, keywords: ["작 업", "센서서버장치", "장비반입 및 전원설비 설치"] },
  { code: "통신 10-1-2-7", name: "조 립", spec: "모니터 설치", unit: "개", labors: {"통신설비공": 0.1, "H/W시험사": 0.1}, category: "device", page: 363, keywords: ["모니터 설치", "센서서버장치", "조 립"] },
  { code: "통신 10-1-2-7", name: "및", spec: "OS/Patch 설치", unit: "개", labors: {"S/W시험사": 0.65, "H/W시험사": 0.65}, category: "device", page: 363, keywords: ["센서서버장치", "os/patch 설치"] },
  { code: "통신 10-1-2-7", name: "설 치", spec: "장비 결선", unit: "개", labors: {"통신설비공": 0.58, "H/W시험사": 0.58}, category: "device", page: 363, keywords: ["설 치", "센서서버장치", "장비 결선"] },
  { code: "통신 10-1-2-7", name: "Software", spec: "센서서버 프로그램 설치", unit: "개", labors: {"S/W시험사": 1.52, "H/W시험사": 0.95}, category: "device", page: 363, keywords: ["센서서버장치", "센서서버 프로그램 설치", "software"] },
  { code: "통신 10-1-2-7", name: "설 치", spec: "VTS 운용 Sub-Client설치", unit: "개", labors: {"S/W시험사": 0.86, "H/W시험사": 0.65}, category: "device", page: 363, keywords: ["설 치", "센서서버장치", "vts 운용 sub-client설치"] },
  { code: "통신 10-1-2-7", name: "설 치", spec: "Chart 및 각종 Mask 설치", unit: "개", labors: {"S/W시험사": 1.5}, category: "device", page: 363, keywords: ["설 치", "센서서버장치", "chart 및 각종 mask 설치"] },
  { code: "통신 10-1-2-7", name: "종 합", spec: "센서서버장치 설치상태 확인·점검", unit: "개", labors: {"S/W시험사": 0.2, "H/W시험사": 0.32}, category: "device", page: 363, keywords: ["센서서버장치", "센서서버장치 설치상태 확인·점검", "종 합"] },
  { code: "통신 10-1-2-7", name: "시 험", spec: "전원측정 및 점검", unit: "개", labors: {"H/W시험사": 0.26}, category: "device", page: 363, keywords: ["시 험", "센서서버장치", "전원측정 및 점검"] },
  { code: "통신 10-1-2-7", name: "시 험", spec: "Video Distribution 시험 및 조정", unit: "개", labors: {"S/W시험사": 0.21, "H/W시험사": 0.21}, category: "device", page: 363, keywords: ["시 험", "센서서버장치", "video distribution 시험 및 조정"] },
  { code: "통신 10-1-2-7", name: "시 험", spec: "Sub-Client 시험", unit: "개", labors: {"S/W시험사": 0.32, "H/W시험사": 0.32}, category: "device", page: 363, keywords: ["시 험", "센서서버장치", "sub-client 시험"] },
  { code: "통신 10-1-2-7", name: "시 험", spec: "SystemApplication 및연동Software 시험", unit: "개", labors: {"S/W시험사": 0.3}, category: "device", page: 363, keywords: ["시 험", "센서서버장치", "systemapplication 및연동software 시험"] },
  { code: "통신 10-1-2-7", name: "시 험", spec: "Network 연결상태 시험", unit: "개", labors: {"H/W시험사": 0.32}, category: "device", page: 363, keywords: ["network 연결상태 시험", "시 험", "센서서버장치"] },
  { code: "통신 10-1-2-7", name: "시 험", spec: "Radar Sevive Modle시험", unit: "개", labors: {"S/W시험사": 0.41}, category: "device", page: 363, keywords: ["시 험", "센서서버장치", "radar sevive modle시험"] },
  { code: "통신 10-1-2-7", name: "시 험", spec: "Data Back-up", unit: "개", labors: {"S/W시험사": 0.46, "H/W시험사": 0.33}, category: "device", page: 363, keywords: ["시 험", "센서서버장치", "data back-up"] },
  { code: "통신 10-1-2-8", name: "기초", spec: "포장해체및목록대조", unit: "개", labors: {"무선안테나공": 1.08, "H/W시험사": 2.02}, category: "device", page: 364, keywords: ["포장해체및목록대조", "기초", "초단파대역 방향탐지기"] },
  { code: "통신 10-1-2-8", name: "작업", spec: "장비반입", unit: "개", labors: {"무선안테나공": 1.3, "H/W시험사": 0.65}, category: "device", page: 364, keywords: ["장비반입", "작업", "초단파대역 방향탐지기"] },
  { code: "통신 10-1-2-8", name: "조 립", spec: "TiltMaster설치", unit: "개", labors: {"무선안테나공": 3.45, "H/W시험사": 0.9}, category: "device", page: 364, keywords: ["tiltmaster설치", "초단파대역 방향탐지기", "조 립"] },
  { code: "통신 10-1-2-8", name: "및", spec: "안테나설치(18소자)", unit: "개", labors: {"무선안테나공": 3.41, "H/W시험사": 2.45}, category: "device", page: 364, keywords: ["안테나설치(18소자)", "초단파대역 방향탐지기"] },
  { code: "통신 10-1-2-8", name: "설 치", spec: "DF장비설치", unit: "개", labors: {"무선안테나공": 3.3, "H/W시험사": 1.8}, category: "device", page: 364, keywords: ["설 치", "초단파대역 방향탐지기", "df장비설치"] },
  { code: "통신 10-1-2-8", name: "설 치", spec: "각종케이블결선", unit: "개", labors: {"무선안테나공": 1.7, "H/W시험사": 1.4}, category: "device", page: 364, keywords: ["각종케이블결선", "설 치", "초단파대역 방향탐지기"] },
  { code: "통신 10-1-2-8", name: "Software", spec: "보드별 설정값 확인 및 시험", unit: "개", labors: {"S/W시험사": 0.25, "H/W시험사": 0.5}, category: "device", page: 364, keywords: ["보드별 설정값 확인 및 시험", "software", "초단파대역 방향탐지기"] },
  { code: "통신 10-1-2-8", name: "설 치", spec: "계측장비를 이용한 각 Board 설정값 조정", unit: "개", labors: {"H/W시험사": 1.5}, category: "device", page: 364, keywords: ["계측장비를 이용한 각 board 설정값 조정", "설 치", "초단파대역 방향탐지기"] },
  { code: "통신 10-1-2-8", name: "설 치", spec: "DF 조정(방위당)", unit: "개", labors: {"무선안테나공": 2.0, "S/W시험사": 2.0, "H/W시험사": 2.0}, category: "device", page: 364, keywords: ["설 치", "df 조정(방위당)", "초단파대역 방향탐지기"] },
  { code: "통신 10-1-2-8", name: "설 치", spec: "VTS 프로그램설치", unit: "개", labors: {"S/W시험사": 0.25}, category: "device", page: 364, keywords: ["vts 프로그램설치", "설 치", "초단파대역 방향탐지기"] },
  { code: "통신 10-1-2-8", name: "종 합", spec: "VHF/DF 자체 동작상태 확인", unit: "개", labors: {"S/W시험사": 0.25, "H/W시험사": 0.25}, category: "device", page: 364, keywords: ["vhf/df 자체 동작상태 확인", "종 합", "초단파대역 방향탐지기"] },
  { code: "통신 10-1-2-8", name: "시 험", spec: "각 PCB 및 장비의 기능상태 시험", unit: "개", labors: {"S/W시험사": 0.11, "H/W시험사": 0.5}, category: "device", page: 364, keywords: ["시 험", "각 pcb 및 장비의 기능상태 시험", "초단파대역 방향탐지기"] },
  { code: "통신 10-1-2-8", name: "시 험", spec: "운항선박 DF 조정(1일기준)", unit: "개", labors: {"S/W시험사": 1.0, "H/W시험사": 1.0}, category: "device", page: 364, keywords: ["시 험", "운항선박 df 조정(1일기준)", "초단파대역 방향탐지기"] },
  { code: "통신 10-1-2-8", name: "시 험", spec: "System Application 및 연동Software 시험", unit: "개", labors: {"S/W시험사": 0.25, "H/W시험사": 0.25}, category: "device", page: 364, keywords: ["시 험", "초단파대역 방향탐지기", "system application 및 연동software 시험"] },
  { code: "통신 10-1-2-9", name: "Software", spec: "VTS추적장치 프로그램 설치", unit: "개", labors: {"S/W시험사": 1.4, "H/W시험사": 0.5}, category: "device", page: 365, keywords: ["추적장치", "vts추적장치 프로그램 설치", "software"] },
  { code: "통신 10-1-2-9", name: "설 치", spec: "VTS 운용 Sub-Client설치", unit: "개", labors: {"S/W시험사": 0.7, "H/W시험사": 0.3}, category: "device", page: 365, keywords: ["추적장치", "설 치", "vts 운용 sub-client설치"] },
  { code: "통신 10-1-2-9", name: "설 치", spec: "SCADA장비 설치 및 결선", unit: "개", labors: {"통신설비공": 0.75, "H/W시험사": 0.75}, category: "device", page: 365, keywords: ["scada장비 설치 및 결선", "설 치", "추적장치"] },
  { code: "통신 10-1-2-9", name: "설 치", spec: "Chart 및 각종 Mask 설치", unit: "개", labors: {"S/W시험사": 1.5}, category: "device", page: 365, keywords: ["추적장치", "설 치", "chart 및 각종 mask 설치"] },
  { code: "통신 10-1-2-9", name: "조정", spec: "PulseVideo조정(Pulse당)", unit: "개", labors: {"S/W시험사": 1.0, "H/W시험사": 2.0}, category: "device", page: 365, keywords: ["추적장치", "pulsevideo조정(pulse당)", "조정"] },
  { code: "통신 10-1-2-9", name: "작업", spec: "Radar송수신기Video조정(송수신기당)", unit: "개", labors: {"S/W시험사": 3.0, "H/W시험사": 3.0}, category: "device", page: 365, keywords: ["추적장치", "radar송수신기video조정(송수신기당)", "작업"] },
  { code: "통신 10-1-2-9", name: "작업", spec: "안테나Rotation및Sync조정(Pules당)", unit: "개", labors: {"S/W시험사": 0.5, "H/W시험사": 0.5}, category: "device", page: 365, keywords: ["추적장치", "안테나rotation및sync조정(pules당)", "작업"] },
  { code: "통신 10-1-2-9", name: "작업", spec: "각종Mask조정작업(국소당)", unit: "개", labors: {"S/W시험사": 1.5}, category: "device", page: 365, keywords: ["각종mask조정작업(국소당)", "추적장치", "작업"] },
  { code: "통신 10-1-2-9", name: "종 합", spec: "레이더 추적장치 동작상태 시험 및 조정", unit: "개", labors: {"S/W시험사": 1.1, "H/W시험사": 1.1}, category: "device", page: 365, keywords: ["레이더 추적장치 동작상태 시험 및 조정", "추적장치", "종 합"] },
  { code: "통신 10-1-2-9", name: "시 험", spec: "System Application 및 연동Software 시험", unit: "개", labors: {"S/W시험사": 0.2, "H/W시험사": 0.2}, category: "device", page: 365, keywords: ["추적장치", "시 험", "system application 및 연동software 시험"] },
  { code: "통신 10-1-2-9", name: "시 험", spec: "VTS System 연계Video 조정작업(송수신기당)", unit: "개", labors: {"S/W시험사": 2.25, "H/W시험사": 2.25}, category: "device", page: 365, keywords: ["vts system 연계video 조정작업(송수신기당)", "추적장치", "시 험"] },
  { code: "통신 10-1-2-9", name: "시 험", spec: "VTSsystem연계Track상태점검및조정(송수신기당)", unit: "개", labors: {"S/W시험사": 2.1, "H/W시험사": 2.1}, category: "device", page: 365, keywords: ["추적장치", "시 험", "vtssystem연계track상태점검및조정(송수신기당)"] },
  { code: "통신 10-1-2-10", name: "기초작업", spec: "포장해체및목록대조", unit: "개", labors: {"통신설비공": 0.23, "H/W시험사": 0.23}, category: "device", page: 366, keywords: ["포장해체및목록대조", "기초작업", "radar 원격제어장치"] },
  { code: "통신 10-1-2-10", name: "기초작업", spec: "장치대설치", unit: "개", labors: {"통신설비공": 0.5, "H/W시험사": 0.5}, category: "device", page: 366, keywords: ["장치대설치", "기초작업", "radar 원격제어장치"] },
  { code: "통신 10-1-2-10", name: "기초작업", spec: "기기반입및전원설비설치", unit: "개", labors: {"통신설비공": 0.38, "H/W시험사": 1.02}, category: "device", page: 366, keywords: ["radar 원격제어장치", "기초작업", "기기반입및전원설비설치"] },
  { code: "통신 10-1-2-10", name: "조립및", spec: "레이더원격제어장치설치", unit: "개", labors: {"통신설비공": 0.3, "H/W시험사": 0.3}, category: "device", page: 366, keywords: ["조립및", "레이더원격제어장치설치", "radar 원격제어장치"] },
  { code: "통신 10-1-2-10", name: "설치", spec: "각종케이블결선", unit: "개", labors: {"통신설비공": 0.81, "H/W시험사": 0.81}, category: "device", page: 366, keywords: ["각종케이블결선", "radar 원격제어장치", "설치"] },
  { code: "통신 10-1-2-10", name: "장비조정", spec: "장비내부점검및설정조정작업", unit: "개", labors: {"S/W시험사": 1.21, "H/W시험사": 1.21}, category: "device", page: 366, keywords: ["장비조정", "radar 원격제어장치", "장비내부점검및설정조정작업"] },
  { code: "통신 10-1-2-10", name: "Software", spec: "운용프로그램설치", unit: "개", labors: {"S/W시험사": 0.45}, category: "device", page: 366, keywords: ["운용프로그램설치", "software", "radar 원격제어장치"] },
  { code: "통신 10-1-2-10", name: "설치", spec: "각운용콘솔프로그램설치(장치당)", unit: "개", labors: {"S/W시험사": 0.31}, category: "device", page: 366, keywords: ["radar 원격제어장치", "각운용콘솔프로그램설치(장치당)", "설치"] },
  { code: "통신 10-1-2-10", name: "종 합", spec: "LocalRadarcontrol시험및조정", unit: "개", labors: {"S/W시험사": 0.25, "H/W시험사": 0.25}, category: "device", page: 366, keywords: ["localradarcontrol시험및조정", "radar 원격제어장치", "종 합"] },
  { code: "통신 10-1-2-10", name: "시 험", spec: "각종입력신호확인작업", unit: "개", labors: {"H/W시험사": 0.5}, category: "device", page: 366, keywords: ["시 험", "각종입력신호확인작업", "radar 원격제어장치"] },
  { code: "통신 10-1-2-10", name: "시 험", spec: "국소내RemoterRadarControl시험", unit: "개", labors: {"S/W시험사": 0.5, "H/W시험사": 0.5}, category: "device", page: 366, keywords: ["시 험", "radar 원격제어장치", "국소내remoterradarcontrol시험"] },
  { code: "통신 10-1-2-10", name: "시 험", spec: "VTSsystem간연계후조정작업", unit: "개", labors: {"S/W시험사": 1.0, "H/W시험사": 1.0}, category: "device", page: 366, keywords: ["시 험", "vtssystem간연계후조정작업", "radar 원격제어장치"] },
  { code: "통신 10-1-2-10", name: "시 험", spec: "VTSsystem연계상태동작확인", unit: "개", labors: {"S/W시험사": 0.72, "H/W시험사": 2.0}, category: "device", page: 366, keywords: ["vtssystem연계상태동작확인", "시 험", "radar 원격제어장치"] },
  { code: "통신 10-1-2-11", name: "기초", spec: "포장해체", unit: "개", labors: {"통신설비공": 0.13, "H/W시험사": 0.13}, category: "device", page: 366, keywords: ["기초", "포장해체", "신호분배기"] },
  { code: "통신 10-1-2-11", name: "작업", spec: "점검및목록대조", unit: "개", labors: {"H/W시험사": 0.26}, category: "device", page: 366, keywords: ["점검및목록대조", "신호분배기", "작업"] },
  { code: "통신 10-1-2-11", name: "조립및", spec: "신호분배기설치", unit: "개", labors: {"통신설비공": 0.25, "H/W시험사": 0.25}, category: "device", page: 366, keywords: ["신호분배기설치", "조립및", "신호분배기"] },
  { code: "통신 10-1-2-11", name: "설치", spec: "각종케이블결선", unit: "개", labors: {"통신설비공": 0.38, "H/W시험사": 0.38}, category: "device", page: 366, keywords: ["각종케이블결선", "신호분배기", "설치"] },
  { code: "통신 10-1-2-11", name: "조정", spec: "송수신기장치별Video조정", unit: "개", labors: {"H/W시험사": 0.25}, category: "device", page: 366, keywords: ["송수신기장치별video조정", "신호분배기", "조정"] },
  { code: "통신 10-1-2-11", name: "작업", spec: "각TP단자별신호상태확인및측정", unit: "개", labors: {"H/W시험사": 0.25}, category: "device", page: 366, keywords: ["각tp단자별신호상태확인및측정", "신호분배기", "작업"] },
  { code: "통신 10-1-2-11", name: "종 합 시 험", spec: "Service PPI 및 추적장치 신호입력 및 출력상 태 확인 및 조정", unit: "개", labors: {"H/W시험사": 0.7}, category: "device", page: 366, keywords: ["service ppi 및 추적장치 신호입력 및 출력상 태 확인 및 조정", "종 합 시 험", "신호분배기"] },
  { code: "통신 10-1-3", name: "기초 작업", spec: "기기반입 및 장비운반", unit: "개", labors: {"통신케이블공": 0.76, "통신설비공": 0.13}, category: "device", page: 367, keywords: ["기기반입 및 장비운반", "기지국 선박자동식별시스템", "기초 작업"] },
  { code: "통신 10-1-3", name: "장비 설치", spec: "기지국 제어장치(BSC)", unit: "개", labors: {"통신관련기사": 0.52, "H/W시험사": 0.5, "S/W시험사": 0.21, "통신케이블공": 0.13}, category: "device", page: 367, keywords: ["장비 설치", "기지국 선박자동식별시스템", "기지국 제어장치(bsc)"] },
  { code: "통신 10-1-3", name: "시험", spec: "종합시험 및 대국시험", unit: "개", labors: {"통신관련기사": 1.32, "H/W시험사": 2.25, "S/W시험사": 1.5}, category: "device", page: 367, keywords: ["시험", "종합시험 및 대국시험", "기지국 선박자동식별시스템"] },
  { code: "통신 10-1-4", name: "안테나", spec: "", unit: "대", labors: {"무선안테나공": 0.37, "통신설비공": 0.37}, category: "device", page: 368, keywords: ["항로표지 집약관리시스템", "안테나"] },
  { code: "통신 10-1-4", name: "원격제어장치", spec: "", unit: "대", labors: {"통신관련산업기사": 1.11, "무선안테나공": 0.66, "통신설비공": 0.45}, category: "device", page: 368, keywords: ["항로표지 집약관리시스템", "원격제어장치"] },
  { code: "통신 10-2-1", name: "선박 통신장비용 전원케이블 포설", spec: "", unit: "100m", labors: {"통신케이블공": 1.1, "보통인부": 0.8}, category: "device", page: 369, keywords: ["공통적용", "선박 통신장비용 전원케이블 포설"] },
  { code: "통신 10-2-1", name: "선박 통신장비용 케이블 포설", spec: "", unit: "100m", labors: {"통신케이블공": 2.2, "보통인부": 1.0}, category: "device", page: 369, keywords: ["공통적용", "선박 통신장비용 케이블 포설"] },
  { code: "통신 10-2-2", name: "기초 작업", spec: "포 장 해 체", unit: "개", labors: {"통신설비공": 0.25, "보통인부": 0.43}, category: "device", page: 369, keywords: ["gmdss mf/hf radio equipments(400w이하)", "포 장 해 체", "기초 작업"] },
  { code: "통신 10-2-2", name: "조 립 및 설 치", spec: "전 원 부", unit: "개", labors: {"통신케이블공": 0.38, "통신설비공": 0.38}, category: "device", page: 369, keywords: ["전 원 부", "gmdss mf/hf radio equipments(400w이하)", "조 립 및 설 치"] },
  { code: "통신 10-2-2", name: "배 선 및 결 선", spec: "Main Equipments", unit: "개", labors: {"통신케이블공": 0.88, "통신설비공": 0.88}, category: "device", page: 370, keywords: ["main equipments", "배 선 및 결 선", "gmdss mf/hf radio equipments(400w이하)"] },
  { code: "통신 10-2-2", name: "조 정", spec: "전 원 부", unit: "개", labors: {"통신설비공": 0.69}, category: "device", page: 370, keywords: ["조 정", "gmdss mf/hf radio equipments(400w이하)", "전 원 부"] },
  { code: "통신 10-2-2", name: "공중선정합", spec: "A.T.U 정 합", unit: "개", labors: {"통신관련산업기사": 0.33}, category: "device", page: 370, keywords: ["공중선정합", "a.t.u 정 합", "gmdss mf/hf radio equipments(400w이하)"] },
  { code: "통신 10-2-2", name: "시 험", spec: "회 로 결 선", unit: "개", labors: {"통신관련산업기사": 0.94, "통신설비공": 0.89}, category: "device", page: 370, keywords: ["시 험", "gmdss mf/hf radio equipments(400w이하)", "회 로 결 선"] },
  { code: "통신 10-2-2", name: "측정교정 및 종합시험", spec: "주 파 수", unit: "개", labors: {"통신관련산업기사": 0.29}, category: "device", page: 370, keywords: ["측정교정 및 종합시험", "gmdss mf/hf radio equipments(400w이하)", "주 파 수"] },
  { code: "통신 10-2-3", name: "기초 작업", spec: "포 장 해 체", unit: "개", labors: {"통신설비공": 0.13, "보통인부": 0.39}, category: "device", page: 371, keywords: ["vhf dsc radio telephone(25w이하)", "포 장 해 체", "기초 작업"] },
  { code: "통신 10-2-3", name: "조립 및 설치", spec: "전 원 부", unit: "개", labors: {"통신케이블공": 0.13, "통신설비공": 0.13}, category: "device", page: 371, keywords: ["조립 및 설치", "전 원 부", "vhf dsc radio telephone(25w이하)"] },
  { code: "통신 10-2-3", name: "배선 및 결선", spec: "VHF DSC Unit", unit: "개", labors: {"통신케이블공": 0.51, "통신설비공": 0.38}, category: "device", page: 371, keywords: ["배선 및 결선", "vhf dsc unit", "vhf dsc radio telephone(25w이하)"] },
  { code: "통신 10-2-3", name: "조정", spec: "전 원 부", unit: "개", labors: {"통신설비공": 0.07}, category: "device", page: 371, keywords: ["vhf dsc radio telephone(25w이하)", "전 원 부", "조정"] },
  { code: "통신 10-2-3", name: "대국시험 및 종합시 험", spec: "회 로 결 선", unit: "개", labors: {"통신관련산업기사": 0.21, "통신설비공": 0.21}, category: "device", page: 371, keywords: ["대국시험 및 종합시 험", "회 로 결 선", "vhf dsc radio telephone(25w이하)"] },
  { code: "통신 10-2-4", name: "기초 작업", spec: "포 장 해 체", unit: "개", labors: {"통신설비공": 0.13, "보통인부": 0.31}, category: "device", page: 372, keywords: ["ssb 송·수신기(100w 이하)", "포 장 해 체", "기초 작업"] },
  { code: "통신 10-2-4", name: "조립 및 설치", spec: "전 원 부", unit: "개", labors: {"통신케이블공": 0.13, "통신설비공": 0.26}, category: "device", page: 372, keywords: ["조립 및 설치", "전 원 부", "ssb 송·수신기(100w 이하)"] },
  { code: "통신 10-2-4", name: "배선 및 결선", spec: "SSB 송 수 신 부", unit: "개", labors: {"통신케이블공": 0.64, "통신설비공": 0.51}, category: "device", page: 372, keywords: ["ssb 송 수 신 부", "배선 및 결선", "ssb 송·수신기(100w 이하)"] },
  { code: "통신 10-2-4", name: "조정", spec: "전 원 부", unit: "개", labors: {"통신설비공": 0.09}, category: "device", page: 372, keywords: ["ssb 송·수신기(100w 이하)", "전 원 부", "조정"] },
  { code: "통신 10-2-4", name: "대국시험 및 종합시 험", spec: "회 로 결 선", unit: "개", labors: {"통신관련산업기사": 0.31, "통신설비공": 0.18}, category: "device", page: 372, keywords: ["ssb 송·수신기(100w 이하)", "대국시험 및 종합시 험", "회 로 결 선"] },
  { code: "통신 10-2-5", name: "기초 작업", spec: "포 장 해 체", unit: "개", labors: {"통신설비공": 0.25, "보통인부": 0.25}, category: "device", page: 373, keywords: ["인마세트 선박지구국(inmarsat) 표준 c형", "포 장 해 체", "기초 작업"] },
  { code: "통신 10-2-5", name: "조립 및 설치", spec: "전 원 부", unit: "개", labors: {"통신케이블공": 0.13, "통신설비공": 0.13}, category: "device", page: 373, keywords: ["조립 및 설치", "인마세트 선박지구국(inmarsat) 표준 c형", "전 원 부"] },
  { code: "통신 10-2-5", name: "배선 및 결선", spec: "E M E", unit: "개", labors: {"통신케이블공": 0.44, "통신설비공": 0.44}, category: "device", page: 373, keywords: ["e m e", "인마세트 선박지구국(inmarsat) 표준 c형", "배선 및 결선"] },
  { code: "통신 10-2-5", name: "조정", spec: "전 원 부", unit: "개", labors: {"통신설비공": 0.16}, category: "device", page: 373, keywords: ["인마세트 선박지구국(inmarsat) 표준 c형", "전 원 부", "조정"] },
  { code: "통신 10-2-5", name: "대국시험 및 종합시험", spec: "회 로 결 선", unit: "개", labors: {"통신관련산업기사": 0.52}, category: "device", page: 373, keywords: ["대국시험 및 종합시험", "인마세트 선박지구국(inmarsat) 표준 c형", "회 로 결 선"] },
  { code: "통신 10-2-6", name: "기초 작업", spec: "포 장 해 체", unit: "개", labors: {"통신설비공": 0.25, "보통인부": 0.35}, category: "device", page: 374, keywords: ["인마세트 선박지구국(inmarsat) 표준 fb형, vsat형", "포 장 해 체", "기초 작업"] },
  { code: "통신 10-2-6", name: "조립 및 설치", spec: "전 원 부", unit: "개", labors: {"통신케이블공": 0.25, "통신설비공": 0.25}, category: "device", page: 374, keywords: ["조립 및 설치", "전 원 부", "인마세트 선박지구국(inmarsat) 표준 fb형, vsat형"] },
  { code: "통신 10-2-6", name: "배선 및 결선", spec: "A D E", unit: "개", labors: {"통신케이블공": 0.88, "통신설비공": 0.88}, category: "device", page: 374, keywords: ["배선 및 결선", "인마세트 선박지구국(inmarsat) 표준 fb형, vsat형", "a d e"] },
  { code: "통신 10-2-6", name: "조정", spec: "전 원 부", unit: "개", labors: {"통신설비공": 0.16}, category: "device", page: 374, keywords: ["인마세트 선박지구국(inmarsat) 표준 fb형, vsat형", "전 원 부", "조정"] },
  { code: "통신 10-2-6", name: "대국시험 및 종합시험", spec: "회 로 결 선", unit: "개", labors: {"통신관련산업기사": 0.73}, category: "device", page: 374, keywords: ["대국시험 및 종합시험", "인마세트 선박지구국(inmarsat) 표준 fb형, vsat형", "회 로 결 선"] },
  { code: "통신 10-2-7", name: "기초 작업", spec: "기기반입 및 장비운반", unit: "개", labors: {"통신케이블공": 0.13, "통신설비공": 0.13}, category: "device", page: 375, keywords: ["음향측심기(echo sounder)", "기기반입 및 장비운반", "기초 작업"] },
  { code: "통신 10-2-7", name: "설치 작업", spec: "전원부 및 지시부 설치", unit: "개", labors: {"통신케이블공": 0.12, "통신설비공": 0.12}, category: "device", page: 375, keywords: ["음향측심기(echo sounder)", "전원부 및 지시부 설치", "설치 작업"] },
  { code: "통신 10-2-7", name: "배선 및 결선", spec: "지 시 부", unit: "개", labors: {"통신케이블공": 0.59, "통신설비공": 0.59}, category: "device", page: 375, keywords: ["지 시 부", "음향측심기(echo sounder)", "배선 및 결선"] },
  { code: "통신 10-2-7", name: "시 험", spec: "회로결선 시험", unit: "개", labors: {"통신관련산업기사": 0.24, "통신케이블공": 0.24}, category: "device", page: 375, keywords: ["음향측심기(echo sounder)", "시 험", "회로결선 시험"] },
  { code: "통신 10-2-8", name: "기초 작업", spec: "포 장 해 체", unit: "-", labors: {"통신케이블공": 0.5, "통신설비공": 0.5}, category: "device", page: 375, keywords: ["marine radar(25kw 이하)", "포 장 해 체", "기초 작업"] },
  { code: "통신 10-2-8", name: "조립 및 설치", spec: "전 원 부", unit: "개", labors: {"무선안테나공": 0.13, "통신케이블공": 0.13}, category: "device", page: 376, keywords: ["조립 및 설치", "marine radar(25kw 이하)", "전 원 부"] },
  { code: "통신 10-2-8", name: "배선 및 결선", spec: "지 시 부", unit: "Gyro Interface Unit", labors: {"무선안테나공": 0.32, "통신케이블공": 0.65}, category: "device", page: 376, keywords: ["지 시 부", "marine radar(25kw 이하)", "배선 및 결선"] },
  { code: "통신 10-2-8", name: "조정", spec: "전 원 부", unit: "개", labors: {"통신케이블공": 0.16}, category: "device", page: 376, keywords: ["marine radar(25kw 이하)", "전 원 부", "조정"] },
  { code: "통신 10-2-8", name: "대국 시험 및 종합 시험", spec: "회 로 결 선", unit: "개", labors: {"통신관련산업기사": 0.73}, category: "device", page: 376, keywords: ["marine radar(25kw 이하)", "대국 시험 및 종합 시험", "회 로 결 선"] },
  { code: "통신 10-2-9", name: "기초 작업", spec: "기기반입 및 장비운반", unit: "개", labors: {"무선안테나공": 0.69, "통신케이블공": 0.61}, category: "device", page: 377, keywords: ["기기반입 및 장비운반", "나브텍스 수신기(navtex receiver)", "기초 작업"] },
  { code: "통신 10-2-9", name: "설치 작업", spec: "Receiver", unit: "Main Unit", labors: {"통신설비공": 0.04}, category: "device", page: 377, keywords: ["receiver", "나브텍스 수신기(navtex receiver)", "설치 작업"] },
  { code: "통신 10-2-9", name: "배선 및 결선", spec: "Main Unit", unit: "개", labors: {"통신케이블공": 0.13, "통신설비공": 0.15}, category: "device", page: 377, keywords: ["main unit", "배선 및 결선", "나브텍스 수신기(navtex receiver)"] },
  { code: "통신 10-2-9", name: "시험", spec: "결선 및 절연내역", unit: "개", labors: {"통신관련산업기사": 0.15}, category: "device", page: 377, keywords: ["시험", "결선 및 절연내역", "나브텍스 수신기(navtex receiver)"] },
  { code: "통신 10-2-10", name: "기초 작업", spec: "기기반입 및 장비운반", unit: "개", labors: {"무선안테나공": 0.25, "통신케이블공": 0.25, "통신설비공": 0.25}, category: "device", page: 378, keywords: ["기상수신기(weather facsimile receiver)", "기기반입 및 장비운반", "기초 작업"] },
  { code: "통신 10-2-10", name: "설치 작업", spec: "Receiver", unit: "Main Unit", labors: {"통신케이블공": 0.09, "통신설비공": 0.1}, category: "device", page: 378, keywords: ["receiver", "기상수신기(weather facsimile receiver)", "설치 작업"] },
  { code: "통신 10-2-10", name: "배선 및 결선", spec: "Main Unit", unit: "개", labors: {"통신케이블공": 0.15, "통신설비공": 0.1}, category: "device", page: 378, keywords: ["기상수신기(weather facsimile receiver)", "main unit", "배선 및 결선"] },
  { code: "통신 10-2-10", name: "시 험", spec: "결선 및 절연내역", unit: "개", labors: {"통신관련산업기사": 0.08}, category: "device", page: 378, keywords: ["기상수신기(weather facsimile receiver)", "시 험", "결선 및 절연내역"] },
  { code: "통신 10-2-11", name: "기 초 작 업", spec: "기기반입 및 장비운반", unit: "개", labors: {"통신관련산업기사": 0.12, "통신설비공": 0.12}, category: "device", page: 378, keywords: ["기 초 작 업", "기기반입 및 장비운반", "레이더 트랜스폰더(radar transponder)"] },
  { code: "통신 10-2-11", name: "설치작업", spec: "Main Unit", unit: "개", labors: {"통신설비공": 0.09}, category: "device", page: 378, keywords: ["레이더 트랜스폰더(radar transponder)", "main unit", "설치작업"] },
  { code: "통신 10-2-11", name: "시 험", spec: "대국 및 종합시험", unit: "개", labors: {"통신관련산업기사": 0.13, "통신설비공": 0.13}, category: "device", page: 378, keywords: ["대국 및 종합시험", "시 험", "레이더 트랜스폰더(radar transponder)"] },
  { code: "통신 10-2-12", name: "기초 작업", spec: "기기반입 및 장비운반", unit: "개", labors: {"무선안테나공": 0.25, "통신케이블공": 0.25, "통신설비공": 0.25}, category: "device", page: 379, keywords: ["기기반입 및 장비운반", "선박자동경보장치(ssas)", "기초 작업"] },
  { code: "통신 10-2-12", name: "설치 작업", spec: "SSAS", unit: "Transceiver Unit", labors: {"통신케이블공": 0.25, "통신설비공": 0.27}, category: "device", page: 379, keywords: ["선박자동경보장치(ssas)", "ssas", "설치 작업"] },
  { code: "통신 10-2-12", name: "배선 및 결선", spec: "Transceiver Unit", unit: "개", labors: {"통신케이블공": 0.61, "통신설비공": 0.52}, category: "device", page: 379, keywords: ["transceiver unit", "배선 및 결선", "선박자동경보장치(ssas)"] },
  { code: "통신 10-2-12", name: "시 험", spec: "결선 및 절연내역", unit: "개", labors: {"통신관련산업기사": 0.38}, category: "device", page: 379, keywords: ["시 험", "선박자동경보장치(ssas)", "결선 및 절연내역"] },
  { code: "통신 10-2-13", name: "기초 작업", spec: "기기반입 및 장비운반", unit: "개", labors: {"무선안테나공": 0.25, "통신케이블공": 0.25, "통신설비공": 0.25}, category: "device", page: 380, keywords: ["기기반입 및 장비운반", "선박자동식별장치(ais)", "기초 작업"] },
  { code: "통신 10-2-13", name: "설치 작업", spec: "전 원 부", unit: "개", labors: {"통신케이블공": 0.13, "통신설비공": 0.13}, category: "device", page: 380, keywords: ["선박자동식별장치(ais)", "전 원 부", "설치 작업"] },
  { code: "통신 10-2-13", name: "배 선 및 결 선", spec: "Transponder~Antenna(2조)", unit: "개", labors: {"무선안테나공": 0.88, "통신케이블공": 0.88}, category: "device", page: 380, keywords: ["transponder~antenna(2조)", "배 선 및 결 선", "선박자동식별장치(ais)"] },
  { code: "통신 10-2-13", name: "시 험", spec: "결선 및 절연내역 시험", unit: "개", labors: {"통신관련산업기사": 0.46}, category: "device", page: 380, keywords: ["시 험", "결선 및 절연내역 시험", "선박자동식별장치(ais)"] },
  { code: "통신 10-2-14", name: "기초 작업", spec: "기기반입 및 장비운반", unit: "개", labors: {"통신케이블공": 0.06, "통신설비공": 0.06}, category: "device", page: 381, keywords: ["기기반입 및 장비운반", "위성항법장치(gps)", "기초 작업"] },
  { code: "통신 10-2-14", name: "설치 작업", spec: "GPS안테나 설치", unit: "개", labors: {"무선안테나공": 0.35, "통신설비공": 0.35}, category: "device", page: 381, keywords: ["위성항법장치(gps)", "gps안테나 설치", "설치 작업"] },
  { code: "통신 10-2-14", name: "배선및 결 선", spec: "안테나~정류부~Main Unit", unit: "개", labors: {"통신케이블공": 1.1, "통신설비공": 1.1}, category: "device", page: 381, keywords: ["안테나~정류부~main unit", "위성항법장치(gps)", "배선및 결 선"] },
  { code: "통신 10-2-14", name: "시 험", spec: "회로결선 및 절연내력 시험", unit: "개", labors: {"통신관련산업기사": 0.26}, category: "device", page: 381, keywords: ["회로결선 및 절연내력 시험", "시 험", "위성항법장치(gps)"] },
  { code: "통신 10-2-15", name: "기초 작업", spec: "기기반입 및 장비운반", unit: "개", labors: {"통신케이블공": 0.06, "통신설비공": 0.06}, category: "device", page: 381, keywords: ["기기반입 및 장비운반", "위성항법 표시장치(gps plotter)", "기초 작업"] },
  { code: "통신 10-2-15", name: "설치 작업", spec: "GPS안테나 설치", unit: "개", labors: {"무선안테나공": 0.35, "통신설비공": 0.35}, category: "device", page: 381, keywords: ["gps안테나 설치", "위성항법 표시장치(gps plotter)", "설치 작업"] },
  { code: "통신 10-2-15", name: "배선및 결 선", spec: "안테나~정류부~Main Unit", unit: "개", labors: {"무선안테나공": 1.1, "통신설비공": 1.1}, category: "device", page: 381, keywords: ["안테나~정류부~main unit", "위성항법 표시장치(gps plotter)", "배선및 결 선"] },
  { code: "통신 10-2-15", name: "시 험", spec: "회로결선 및 절연내력 시험", unit: "개", labors: {"통신관련산업기사": 0.28}, category: "device", page: 381, keywords: ["회로결선 및 절연내력 시험", "시 험", "위성항법 표시장치(gps plotter)"] },
  { code: "통신 10-2-16", name: "기초 작업", spec: "기기반입 및 장비운반", unit: "개", labors: {"무선안테나공": 0.06}, category: "device", page: 382, keywords: ["위성비상위치지시용 무선표지설비(sat/epirb)", "기기반입 및 장비운반", "기초 작업"] },
  { code: "통신 10-2-16", name: "시험", spec: "대국 및 종합시험", unit: "개", labors: {"무선안테나공": 0.3}, category: "device", page: 382, keywords: ["대국 및 종합시험", "시험", "위성비상위치지시용 무선표지설비(sat/epirb)"] },
  { code: "통신 10-2-17", name: "기초 작업", spec: "기기반입 및 장비운반", unit: "개", labors: {"통신케이블공": 0.14, "통신설비공": 0.14}, category: "device", page: 382, keywords: ["기기반입 및 장비운반", "위성항법표시장치 및 어군탐지기 겸용(gps plotter&fish finder)", "기초 작업"] },
  { code: "통신 10-2-17", name: "설치 작업", spec: "전원부 및 지시부 설치", unit: "개", labors: {"통신케이블공": 0.12, "통신설비공": 0.12}, category: "device", page: 382, keywords: ["전원부 및 지시부 설치", "위성항법표시장치 및 어군탐지기 겸용(gps plotter&fish finder)", "설치 작업"] },
  { code: "통신 10-2-17", name: "배선 및 결선", spec: "지 시 부", unit: "개", labors: {"통신케이블공": 0.62, "통신설비공": 0.62}, category: "device", page: 382, keywords: ["지 시 부", "배선 및 결선", "위성항법표시장치 및 어군탐지기 겸용(gps plotter&fish finder)"] },
  { code: "통신 10-2-17", name: "시 험", spec: "회로결선 시험", unit: "개", labors: {"통신관련산업기사": 0.3, "통신케이블공": 0.3}, category: "device", page: 382, keywords: ["시 험", "회로결선 시험", "위성항법표시장치 및 어군탐지기 겸용(gps plotter&fish finder)"] },
  { code: "통신 10-2-18", name: "기초 작업", spec: "기기반입 및 장비운반", unit: "개", labors: {"통신관련산업기사": 0.32, "통신케이블공": 0.32, "통신설비공": 0.32}, category: "device", page: 383, keywords: ["선내지령장치(marine public addresser)", "기기반입 및 장비운반", "기초 작업"] },
  { code: "통신 10-2-18", name: "설치 작업", spec: "선내지령장치", unit: "개", labors: {"통신관련산업기사": 0.75, "통신설비공": 0.75}, category: "device", page: 383, keywords: ["선내지령장치(marine public addresser)", "선내지령장치", "설치 작업"] },
  { code: "통신 10-2-18", name: "배선 및 결선", spec: "내·외부 스피커 및 마이크", unit: "개", labors: {"통신케이블공": 1.17, "통신설비공": 1.17}, category: "device", page: 383, keywords: ["내·외부 스피커 및 마이크", "배선 및 결선", "선내지령장치(marine public addresser)"] },
  { code: "통신 10-2-18", name: "시험", spec: "회로결선", unit: "개", labors: {"통신관련산업기사": 1.0, "통신설비공": 1.0}, category: "device", page: 383, keywords: ["시험", "회로결선", "선내지령장치(marine public addresser)"] },
  { code: "통신 10-2-19", name: "기초 작업", spec: "기기반입", unit: "개", labors: {"통신관련산업기사": 0.14, "통신설비공": 0.14}, category: "device", page: 384, keywords: ["기기반입", "풍향풍속계(wind speed & direction indicator)", "기초 작업"] },
  { code: "통신 10-2-19", name: "설치 작업", spec: "전원부", unit: "개", labors: {"통신케이블공": 0.07, "통신설비공": 0.07}, category: "device", page: 384, keywords: ["풍향풍속계(wind speed & direction indicator)", "전원부", "설치 작업"] },
  { code: "통신 10-2-19", name: "배선 및 결선", spec: "지시부", unit: "개", labors: {"통신케이블공": 1.0, "통신설비공": 1.0}, category: "device", page: 384, keywords: ["배선 및 결선", "지시부", "풍향풍속계(wind speed & direction indicator)"] },
  { code: "통신 10-2-19", name: "시험", spec: "회로결선", unit: "개", labors: {"통신관련산업기사": 0.25, "통신설비공": 0.25}, category: "device", page: 384, keywords: ["시험", "회로결선", "풍향풍속계(wind speed & direction indicator)"] },
  { code: "통신 10-2-20", name: "기초 작업", spec: "기기반입", unit: "개", labors: {"통신케이블공": 0.25, "통신설비공": 0.25}, category: "device", page: 385, keywords: ["기기반입", "전자해도표시시스템(ecdis)", "기초 작업"] },
  { code: "통신 10-2-20", name: "설치 작업", spec: "전원부", unit: "개", labors: {"통신케이블공": 0.13, "통신설비공": 0.13}, category: "device", page: 385, keywords: ["전자해도표시시스템(ecdis)", "전원부", "설치 작업"] },
  { code: "통신 10-2-20", name: "배선 결선", spec: "ECDIS", unit: "개", labors: {"통신케이블공": 1.34, "통신설비공": 1.34}, category: "device", page: 385, keywords: ["ecdis", "배선 결선", "전자해도표시시스템(ecdis)"] },
  { code: "통신 10-2-20", name: "시험", spec: "회로결선", unit: "개", labors: {"통신관련산업기사": 0.5, "통신설비공": 0.5}, category: "device", page: 385, keywords: ["시험", "회로결선", "전자해도표시시스템(ecdis)"] },
  { code: "통신 10-2-21", name: "기초 작업", spec: "기기반입", unit: "개", labors: {"통신관련산업기사": 0.25, "통신케이블공": 0.25, "통신설비공": 0.25}, category: "device", page: 386, keywords: ["선속계(doppler speed log)", "기기반입", "기초 작업"] },
  { code: "통신 10-2-21", name: "설치 작업", spec: "데이타분배기(전원부 포함)", unit: "개", labors: {"통신관련산업기사": 0.13, "통신설비공": 0.13}, category: "device", page: 386, keywords: ["선속계(doppler speed log)", "데이타분배기(전원부 포함)", "설치 작업"] },
  { code: "통신 10-2-21", name: "배선 결선", spec: "지시부", unit: "개", labors: {"통신케이블공": 3.34, "통신설비공": 3.34}, category: "device", page: 386, keywords: ["선속계(doppler speed log)", "지시부", "배선 결선"] },
  { code: "통신 10-2-21", name: "시험", spec: "회로결선", unit: "개", labors: {"통신관련산업기사": 0.5, "통신설비공": 0.5}, category: "device", page: 386, keywords: ["시험", "선속계(doppler speed log)", "회로결선"] },
  { code: "통신 10-2-22", name: "기초 작업", spec: "기기반입", unit: "개", labors: {"통신관련산업기사": 0.25, "통신케이블공": 0.25, "통신설비공": 0.25, "H/W시험사": 0.25, "S/W시험사": 0.25}, category: "device", page: 387, keywords: ["기기반입", "간이항해자료기록장치(s-vdr)", "기초 작업"] },
  { code: "통신 10-2-22", name: "설치 작업", spec: "캡슐(Capsule) 장치", unit: "개", labors: {"통신관련산업기사": 0.25, "통신설비공": 0.25, "H/W시험사": 0.25, "S/W시험사": 0.25}, category: "device", page: 387, keywords: ["캡슐(capsule) 장치", "간이항해자료기록장치(s-vdr)", "설치 작업"] },
  { code: "통신 10-2-22", name: "배선 결선", spec: "기록조정장치", unit: "개", labors: {"통신케이블공": 1.17, "통신설비공": 1.17}, category: "device", page: 387, keywords: ["기록조정장치", "배선 결선", "간이항해자료기록장치(s-vdr)"] },
  { code: "통신 10-2-22", name: "시험", spec: "회로결선", unit: "개", labors: {"통신관련산업기사": 2.0, "통신설비공": 2.0, "H/W시험사": 2.0, "S/W시험사": 2.0}, category: "device", page: 387, keywords: ["시험", "간이항해자료기록장치(s-vdr)", "회로결선"] },
  { code: "통신 10-2-23", name: "기초 작업", spec: "기기반입", unit: "개", labors: {"통신관련산업기사": 0.5, "통신케이블공": 0.5, "통신설비공": 0.5}, category: "device", page: 388, keywords: ["자이로컴퍼스(gyro compass)", "기기반입", "기초 작업"] },
  { code: "통신 10-2-23", name: "설치 작업", spec: "변환장치", unit: "개", labors: {"통신관련산업기사": 0.5, "통신설비공": 0.5}, category: "device", page: 388, keywords: ["자이로컴퍼스(gyro compass)", "변환장치", "설치 작업"] },
  { code: "통신 10-2-23", name: "배선 결선", spec: "Steering Stand", unit: "개", labors: {"통신케이블공": 1.17, "통신설비공": 1.17}, category: "device", page: 388, keywords: ["자이로컴퍼스(gyro compass)", "배선 결선", "steering stand"] },
  { code: "통신 10-2-23", name: "시험", spec: "회로결선", unit: "개", labors: {"통신관련산업기사": 1.0, "통신설비공": 1.0}, category: "device", page: 388, keywords: ["자이로컴퍼스(gyro compass)", "시험", "회로결선"] },
  { code: "통신 10-2-24", name: "기초 작업", spec: "기기반입", unit: "개", labors: {"통신관련산업기사": 0.25, "통신설비공": 0.25}, category: "device", page: 389, keywords: ["자기컴퍼스(magnetic compass)", "기기반입", "기초 작업"] },
  { code: "통신 10-2-24", name: "설치 작업", spec: "자기컴퍼스", unit: "개", labors: {"통신관련산업기사": 0.58, "통신설비공": 0.58}, category: "device", page: 389, keywords: ["자기컴퍼스(magnetic compass)", "자기컴퍼스", "설치 작업"] },
  { code: "통신 10-2-24", name: "시험", spec: "자차수정 및 교정곡선표 작성", unit: "개", labors: {"통신관련산업기사": 2.0, "통신설비공": 2.0}, category: "device", page: 389, keywords: ["자기컴퍼스(magnetic compass)", "시험", "자차수정 및 교정곡선표 작성"] },
  { code: "통신 10-2-25", name: "기초 작업", spec: "기기반입", unit: "개", labors: {"통신관련산업기사": 0.75, "통신케이블공": 0.75, "통신설비공": 0.75, "H/W시험사": 0.75, "S/W시험사": 0.75}, category: "device", page: 389, keywords: ["기기반입", "조타장치(auto pilot)", "기초 작업"] },
  { code: "통신 10-2-25", name: "설치 작업", spec: "전원부", unit: "개", labors: {"통신관련산업기사": 0.13, "통신설비공": 0.13}, category: "device", page: 389, keywords: ["조타장치(auto pilot)", "전원부", "설치 작업"] },
  { code: "통신 10-2-25", name: "배선 결선", spec: "Steering Stand", unit: "개", labors: {"통신케이블공": 1.17, "통신설비공": 1.17}, category: "device", page: 389, keywords: ["배선 결선", "조타장치(auto pilot)", "steering stand"] },
  { code: "통신 10-2-25", name: "시험", spec: "회로결선", unit: "개", labors: {"통신관련산업기사": 1.0, "통신설비공": 1.0, "H/W시험사": 1.0, "S/W시험사": 1.0}, category: "device", page: 389, keywords: ["시험", "회로결선", "조타장치(auto pilot)"] },
  { code: "통신 10-2-26", name: "기초 작업", spec: "기기반입 및 장비운반", unit: "개", labors: {"통신케이블공": 0.14, "통신설비공": 0.14}, category: "device", page: 390, keywords: ["기기반입 및 장비운반", "어군탐지기(fish-finder)", "기초 작업"] },
  { code: "통신 10-2-26", name: "설치 작업", spec: "전원부 및 지시부 설치", unit: "개", labors: {"통신케이블공": 0.2, "통신설비공": 0.2}, category: "device", page: 390, keywords: ["전원부 및 지시부 설치", "어군탐지기(fish-finder)", "설치 작업"] },
  { code: "통신 10-2-26", name: "배선 및 결선", spec: "지 시 부", unit: "개", labors: {"통신케이블공": 0.62, "통신설비공": 0.62}, category: "device", page: 390, keywords: ["지 시 부", "배선 및 결선", "어군탐지기(fish-finder)"] },
  { code: "통신 10-2-26", name: "시험", spec: "회로결선 시험", unit: "개", labors: {"통신관련산업기사": 0.35, "통신케이블공": 0.35}, category: "device", page: 390, keywords: ["어군탐지기(fish-finder)", "시험", "회로결선 시험"] },
  { code: "통신 10-2-27", name: "기초 작업", spec: "기기반입", unit: "개", labors: {"통신관련산업기사": 0.75, "통신케이블공": 0.75, "통신설비공": 0.75, "H/W시험사": 0.75, "S/W시험사": 0.75}, category: "device", page: 391, keywords: ["sonar(sound navigation and ranging)", "기기반입", "기초 작업"] },
  { code: "통신 10-2-27", name: "설치 작업", spec: "전원부 및 지시부", unit: "개", labors: {"통신관련산업기사": 1.51, "통신설비공": 1.51, "H/W시험사": 1.38, "S/W시험사": 1.38}, category: "device", page: 391, keywords: ["sonar(sound navigation and ranging)", "전원부 및 지시부", "설치 작업"] },
  { code: "통신 10-2-27", name: "배선 결선", spec: "지시부", unit: "개", labors: {"통신케이블공": 5.17, "통신설비공": 5.17}, category: "device", page: 391, keywords: ["sonar(sound navigation and ranging)", "지시부", "배선 결선"] },
  { code: "통신 10-2-27", name: "시험", spec: "회로결선", unit: "개", labors: {"통신관련산업기사": 2.0, "통신설비공": 2.0, "H/W시험사": 2.0, "S/W시험사": 2.0}, category: "device", page: 391, keywords: ["시험", "sonar(sound navigation and ranging)", "회로결선"] },
  { code: "통신 10-2-28", name: "기초 작업", spec: "기기반입및장비운반", unit: "개", labors: {"무선안테나공": 0.25, "통신설비공": 0.25}, category: "device", page: 392, keywords: ["선교항해당직경보시스템(bnwas)", "기기반입및장비운반", "기초 작업"] },
  { code: "통신 10-2-28", name: "설치 작업", spec: "Display Unit", unit: "개", labors: {"무선안테나공": 0.19, "통신설비공": 0.19}, category: "device", page: 392, keywords: ["display unit", "선교항해당직경보시스템(bnwas)", "설치 작업"] },
  { code: "통신 10-2-28", name: "시험", spec: "결선및절연내역시험", unit: "개", labors: {"통신관련산업기사": 0.42}, category: "device", page: 392, keywords: ["시험", "결선및절연내역시험", "선교항해당직경보시스템(bnwas)"] },
  { code: "통신 10-2-29", name: "조립 및 설치", spec: "Antenna 설치", unit: "개", labors: {"무선안테나공": 0.2, "통신설비공": 0.2}, category: "device", page: 393, keywords: ["조립 및 설치", "e-네비게이션", "antenna 설치"] },
  { code: "통신 10-2-29", name: "대국시험 및 종합시험", spec: "", unit: "개", labors: {"통신관련산업기사": 0.06}, category: "device", page: 393, keywords: ["대국시험 및 종합시험", "e-네비게이션"] },
  { code: "통신 10-3-1", name: "조 립 및 설 치", spec: "2.00", unit: "개", labors: {"통신관련기사": 6.0, "무선안테나공": 8.0, "통신설비공": 2.0, "보통인부": 1.0}, category: "device", page: 394, keywords: ["2.00", "조 립 및 설 치", "계기착륙시설(ils방위각)"] },
  { code: "통신 10-3-1", name: "케 이 블 랙 설 치", spec: "-", unit: "개", labors: {"통신설비공": 2.0, "보통인부": 2.0}, category: "device", page: 394, keywords: ["케 이 블 랙 설 치", "계기착륙시설(ils방위각)"] },
  { code: "통신 10-3-1", name: "급 전 선 장 치", spec: "-", unit: "개", labors: {"통신설비공": 4.5}, category: "device", page: 394, keywords: ["급 전 선 장 치", "계기착륙시설(ils방위각)"] },
  { code: "통신 10-3-1", name: "국 부 조 정 장 치", spec: "-", unit: "개", labors: {"통신설비공": 10.0}, category: "device", page: 394, keywords: ["국 부 조 정 장 치", "계기착륙시설(ils방위각)"] },
  { code: "통신 10-3-1", name: "감 시 장 치", spec: "-", unit: "개", labors: {"통신관련기사": 4.0, "통신설비공": 4.0}, category: "device", page: 394, keywords: ["감 시 장 치", "계기착륙시설(ils방위각)"] },
  { code: "통신 10-3-1", name: "종합측정 및 시험", spec: "-", unit: "개", labors: {"통신관련기사": 48.0, "무선안테나공": 1.0, "통신설비공": 48.0}, category: "device", page: 394, keywords: ["종합측정 및 시험", "계기착륙시설(ils방위각)"] },
  { code: "통신 10-3-1", name: "위 상 정 합", spec: "-", unit: "개", labors: {"통신관련기사": 10.0, "무선안테나공": 5.0, "통신설비공": 10.0}, category: "device", page: 394, keywords: ["위 상 정 합", "계기착륙시설(ils방위각)"] },
  { code: "통신 10-3-1", name: "전 계 강 도 측 정", spec: "-", unit: "개", labors: {"통신관련기사": 20.0, "통신설비공": 10.0, "보통인부": 10.0}, category: "device", page: 394, keywords: ["전 계 강 도 측 정", "계기착륙시설(ils방위각)"] },
  { code: "통신 10-3-1", name: "원 격 조 정 장 치", spec: "-", unit: "개", labors: {"통신관련기사": 4.0, "통신설비공": 4.0}, category: "device", page: 394, keywords: ["원 격 조 정 장 치", "계기착륙시설(ils방위각)"] },
  { code: "통신 10-3-2", name: "조 립 및 설 치", spec: "2.00", unit: "개", labors: {"통신관련기사": 6.0, "무선안테나공": 8.0, "통신설비공": 2.0, "보통인부": 1.0}, category: "device", page: 394, keywords: ["2.00", "조 립 및 설 치", "계기착륙시설(ils활공각)"] },
  { code: "통신 10-3-2", name: "케 이 블 랙 설 치", spec: "-", unit: "개", labors: {"통신설비공": 2.0, "보통인부": 2.0}, category: "device", page: 394, keywords: ["케 이 블 랙 설 치", "계기착륙시설(ils활공각)"] },
  { code: "통신 10-3-2", name: "급 전 선 장 치", spec: "-", unit: "개", labors: {"통신설비공": 4.5, "보통인부": 1.5}, category: "device", page: 394, keywords: ["급 전 선 장 치", "계기착륙시설(ils활공각)"] },
  { code: "통신 10-3-2", name: "국 부 조 정 장 치", spec: "-", unit: "개", labors: {"통신설비공": 10.0}, category: "device", page: 394, keywords: ["국 부 조 정 장 치", "계기착륙시설(ils활공각)"] },
  { code: "통신 10-3-2", name: "감 시 장 치", spec: "-", unit: "개", labors: {"통신관련기사": 4.0, "통신설비공": 4.0}, category: "device", page: 394, keywords: ["감 시 장 치", "계기착륙시설(ils활공각)"] },
  { code: "통신 10-3-2", name: "종합측정 및 시 험", spec: "-", unit: "개", labors: {"통신관련기사": 48.0, "무선안테나공": 1.0, "통신설비공": 48.0}, category: "device", page: 394, keywords: ["종합측정 및 시 험", "계기착륙시설(ils활공각)"] },
  { code: "통신 10-3-2", name: "위 상 정 합", spec: "-", unit: "개", labors: {"통신관련기사": 10.0, "무선안테나공": 5.0, "통신설비공": 10.0}, category: "device", page: 394, keywords: ["위 상 정 합", "계기착륙시설(ils활공각)"] },
  { code: "통신 10-3-2", name: "전 계 강 도 측 정", spec: "-", unit: "개", labors: {"통신관련기사": 20.0, "통신설비공": 10.0, "보통인부": 1.0}, category: "device", page: 394, keywords: ["전 계 강 도 측 정", "계기착륙시설(ils활공각)"] },
  { code: "통신 10-3-2", name: "원 격 조 정 장 치", spec: "-", unit: "개", labors: {"통신관련기사": 4.0, "통신설비공": 4.0}, category: "device", page: 394, keywords: ["원 격 조 정 장 치", "계기착륙시설(ils활공각)"] },
  { code: "통신 10-3-3", name: "조립 및 설치", spec: "3.00", unit: "개", labors: {"통신관련기사": 12.0, "무선안테나공": 2.0, "통신설비공": 4.0, "보통인부": 1.0}, category: "device", page: 395, keywords: ["조립 및 설치", "전방향 표지시설(vor)", "3.00"] },
  { code: "통신 10-3-3", name: "케이블랙 설치", spec: "-", unit: "개", labors: {"통신설비공": 4.0, "보통인부": 4.0}, category: "device", page: 395, keywords: ["전방향 표지시설(vor)", "케이블랙 설치"] },
  { code: "통신 10-3-3", name: "급전선장치", spec: "-", unit: "개", labors: {"통신설비공": 12.0, "보통인부": 4.0}, category: "device", page: 395, keywords: ["전방향 표지시설(vor)", "급전선장치"] },
  { code: "통신 10-3-3", name: "국부조정장치", spec: "-", unit: "개", labors: {"통신설비공": 2.0}, category: "device", page: 395, keywords: ["전방향 표지시설(vor)", "국부조정장치"] },
  { code: "통신 10-3-3", name: "감시장치", spec: "-", unit: "개", labors: {"통신관련기사": 2.0, "통신설비공": 2.0}, category: "device", page: 395, keywords: ["전방향 표지시설(vor)", "감시장치"] },
  { code: "통신 10-3-3", name: "종합측정 및 시험", spec: "-", unit: "개", labors: {"통신관련기사": 24.0, "무선안테나공": 50.0, "통신설비공": 24.0}, category: "device", page: 395, keywords: ["종합측정 및 시험", "전방향 표지시설(vor)"] },
  { code: "통신 10-3-3", name: "위상정합", spec: "-", unit: "개", labors: {"통신관련기사": 10.0, "무선안테나공": 5.0, "통신설비공": 10.0}, category: "device", page: 395, keywords: ["전방향 표지시설(vor)", "위상정합"] },
  { code: "통신 10-3-3", name: "전계강도측정", spec: "-", unit: "개", labors: {"통신관련기사": 20.0, "무선안테나공": 10.0, "통신설비공": 1.0}, category: "device", page: 395, keywords: ["전계강도측정", "전방향 표지시설(vor)"] },
  { code: "통신 10-3-3", name: "원격조정장치", spec: "-", unit: "개", labors: {"통신관련기사": 2.0, "통신설비공": 2.0}, category: "device", page: 395, keywords: ["원격조정장치", "전방향 표지시설(vor)"] },
  { code: "통신 10-3-4", name: "조 립 및 설 치", spec: "3.00", unit: "개", labors: {"통신관련기사": 12.0, "무선안테나공": 4.0, "통신설비공": 4.0, "보통인부": 2.0}, category: "device", page: 395, keywords: ["전술항행 표지시설(tacan)", "조 립 및 설 치", "3.00"] },
  { code: "통신 10-3-4", name: "케 이 블 랙 설 치", spec: "-", unit: "개", labors: {"통신설비공": 4.0, "보통인부": 4.0}, category: "device", page: 395, keywords: ["전술항행 표지시설(tacan)", "케 이 블 랙 설 치"] },
  { code: "통신 10-3-4", name: "급 전 선 장 치", spec: "-", unit: "개", labors: {"무선안테나공": 2.0, "통신설비공": 16.0, "보통인부": 8.0}, category: "device", page: 395, keywords: ["전술항행 표지시설(tacan)", "급 전 선 장 치"] },
  { code: "통신 10-3-4", name: "국 부 조 정 장 치", spec: "-", unit: "개", labors: {"통신설비공": 20.0}, category: "device", page: 395, keywords: ["전술항행 표지시설(tacan)", "국 부 조 정 장 치"] },
  { code: "통신 10-3-4", name: "감 시 장 치", spec: "-", unit: "개", labors: {"통신관련기사": 10.0, "통신설비공": 15.0}, category: "device", page: 395, keywords: ["전술항행 표지시설(tacan)", "감 시 장 치"] },
  { code: "통신 10-3-4", name: "종합측정 및 시 험", spec: "-", unit: "개", labors: {"통신관련기사": 36.0, "무선안테나공": 36.0, "통신설비공": 24.0}, category: "device", page: 395, keywords: ["전술항행 표지시설(tacan)", "종합측정 및 시 험"] },
  { code: "통신 10-3-4", name: "위 상 정 합", spec: "-", unit: "개", labors: {"통신관련기사": 10.0, "무선안테나공": 5.0, "통신설비공": 10.0}, category: "device", page: 395, keywords: ["위 상 정 합", "전술항행 표지시설(tacan)"] },
  { code: "통신 10-3-4", name: "전 계 강 도 측 정", spec: "1.00", unit: "개", labors: {"통신관련기사": 20.0, "통신설비공": 10.0}, category: "device", page: 395, keywords: ["전 계 강 도 측 정", "전술항행 표지시설(tacan)", "1.00"] },
  { code: "통신 10-3-4", name: "원 격 조 정 장 치", spec: "-", unit: "개", labors: {"통신관련기사": 10.0, "통신설비공": 10.0}, category: "device", page: 395, keywords: ["전술항행 표지시설(tacan)", "원 격 조 정 장 치"] },
  { code: "통신 10-3-5", name: "초 단 파 송 신 기", spec: "반 송 파 변 조 기", unit: "개", labors: {"통신관련기사": 1.0}, category: "device", page: 396, keywords: ["초 단 파 송 신 기", "반 송 파 변 조 기", "계기착륙시설 방위각 비행점검 및 조정"] },
  { code: "통신 10-3-5", name: "T.at", spec: "CA-1403", unit: "개", labors: {"통신관련기사": 1.0}, category: "device", page: 396, keywords: ["ca-1403", "계기착륙시설 방위각 비행점검 및 조정", "t.at"] },
  { code: "통신 10-3-5", name: "초 단 파 측 파 대 송 신 기", spec: "가청주파발전 및 전건조작기", unit: "개", labors: {"통신관련기사": 1.0}, category: "device", page: 396, keywords: ["초 단 파 측 파 대 송 신 기", "계기착륙시설 방위각 비행점검 및 조정", "가청주파발전 및 전건조작기"] },
  { code: "통신 10-3-5", name: "CA-661", spec: "CA-1459", unit: "개", labors: {"통신관련기사": 3.0}, category: "device", page: 396, keywords: ["ca-661", "ca-1459", "계기착륙시설 방위각 비행점검 및 조정"] },
  { code: "통신 10-3-5", name: "하 이 브 릿 드 기 기", spec: "교 류 신 호 전 동 발 전 기", unit: "개", labors: {"통신관련기사": 3.0}, category: "device", page: 396, keywords: ["교 류 신 호 전 동 발 전 기", "계기착륙시설 방위각 비행점검 및 조정", "하 이 브 릿 드 기 기"] },
  { code: "통신 10-3-5", name: "CA-1452", spec: "CA-1440", unit: "개", labors: {"통신관련기사": 3.0}, category: "device", page: 396, keywords: ["ca-1440", "ca-1452", "계기착륙시설 방위각 비행점검 및 조정"] },
  { code: "통신 10-3-5", name: "방 위 각 조 정 기", spec: "반송파전계강도측정조정", unit: "개", labors: {"통신관련기사": 3.0}, category: "device", page: 396, keywords: ["방 위 각 조 정 기", "반송파전계강도측정조정", "계기착륙시설 방위각 비행점검 및 조정"] },
  { code: "통신 10-3-5", name: "CA-1395A", spec: "제1측파대 전계강도측정조정", unit: "개", labors: {"통신관련기사": 3.0}, category: "device", page: 396, keywords: ["제1측파대 전계강도측정조정", "계기착륙시설 방위각 비행점검 및 조정", "ca-1395a"] },
  { code: "통신 10-3-5", name: "방 위 각 감 시 기", spec: "제2측파대 전계강도측정조정", unit: "개", labors: {"통신관련기사": 3.0}, category: "device", page: 396, keywords: ["계기착륙시설 방위각 비행점검 및 조정", "방 위 각 감 시 기", "제2측파대 전계강도측정조정"] },
  { code: "통신 10-3-5", name: "CA-1474", spec: "제3측파대 전계강도측정조정", unit: "개", labors: {"통신관련기사": 1.0}, category: "device", page: 396, keywords: ["ca-1474", "계기착륙시설 방위각 비행점검 및 조정", "제3측파대 전계강도측정조정"] },
  { code: "통신 10-3-5", name: "방위각감시기전원공급기", spec: "종합측파대전계강도측정조정", unit: "개", labors: {"통신관련기사": 1.0}, category: "device", page: 396, keywords: ["계기착륙시설 방위각 비행점검 및 조정", "방위각감시기전원공급기", "종합측파대전계강도측정조정"] },
  { code: "통신 10-3-5", name: "CA-1474-1", spec: "공 간 변 조 도 측 정 조 정", unit: "개", labors: {"통신관련기사": 1.0}, category: "device", page: 396, keywords: ["공 간 변 조 도 측 정 조 정", "계기착륙시설 방위각 비행점검 및 조정", "ca-1474-1"] },
  { code: "통신 10-3-5", name: "방 위 각 자 동 전 환 기", spec: "방 위 각 지 시 측 정 조 정", unit: "개", labors: {"통신관련기사": 1.0}, category: "device", page: 396, keywords: ["방 위 각 지 시 측 정 조 정", "방 위 각 자 동 전 환 기", "계기착륙시설 방위각 비행점검 및 조정"] },
  { code: "통신 10-3-5", name: "CA-1404", spec: "방위각허용편차측정조정", unit: "개", labors: {"통신관련기사": 1.0}, category: "device", page: 396, keywords: ["ca-1404", "계기착륙시설 방위각 비행점검 및 조정", "방위각허용편차측정조정"] },
  { code: "통신 10-3-6", name: "극 초 단 파 송 신 기", spec: "반 송 파 전 계 강 도 측 정", unit: "개", labors: {"통신관련기사": 2.0}, category: "device", page: 397, keywords: ["계기착륙시설 활공각 비행점검 및 조정", "극 초 단 파 송 신 기", "반 송 파 전 계 강 도 측 정"] },
  { code: "통신 10-3-6", name: "TUS", spec: "270°360°", unit: "개", labors: {"통신관련기사": 2.0}, category: "device", page: 397, keywords: ["270°360°", "tus", "계기착륙시설 활공각 비행점검 및 조정"] },
  { code: "통신 10-3-6", name: "활 공 각 조 정 기", spec: "측 파 대 전 계 강 도 측 정", unit: "개", labors: {"통신관련기사": 2.0}, category: "device", page: 397, keywords: ["측 파 대 전 계 강 도 측 정", "계기착륙시설 활공각 비행점검 및 조정", "활 공 각 조 정 기"] },
  { code: "통신 10-3-6", name: "CA-1395B", spec: "270°360°", unit: "개", labors: {"통신관련기사": 3.0}, category: "device", page: 397, keywords: ["270°360°", "ca-1395b", "계기착륙시설 활공각 비행점검 및 조정"] },
  { code: "통신 10-3-6", name: "활 공 각 감 시 기", spec: "공 간 변 조 도 측 정", unit: "개", labors: {"통신관련기사": 3.0}, category: "device", page: 397, keywords: ["활 공 각 감 시 기", "계기착륙시설 활공각 비행점검 및 조정", "공 간 변 조 도 측 정"] },
  { code: "통신 10-3-6", name: "CA-1363", spec: "활 공 각 지 상 측 정 조 정", unit: "개", labors: {"통신관련기사": 24.0}, category: "device", page: 397, keywords: ["ca-1363", "계기착륙시설 활공각 비행점검 및 조정", "활 공 각 지 상 측 정 조 정"] },
  { code: "통신 10-3-6", name: "활 공 각 자 동 전 환 기", spec: "활공각허용편차측정조정", unit: "개", labors: {"통신관련기사": 0.5}, category: "device", page: 397, keywords: ["계기착륙시설 활공각 비행점검 및 조정", "활 공 각 자 동 전 환 기", "활공각허용편차측정조정"] },
  { code: "통신 10-3-6", name: "CA-1404", spec: "비 행 점 검", unit: "개", labors: {"통신관련기사": 0.5}, category: "device", page: 397, keywords: ["계기착륙시설 활공각 비행점검 및 조정", "ca-1404", "비 행 점 검"] },
  { code: "통신 10-3-7", name: "장파송신기 TMU", spec: "수직수평전계강도측정", unit: "개", labors: {"통신관련기사": 2.0}, category: "device", page: 397, keywords: ["장파송신기 tmu", "계기착륙시설 내방표지소 비행점검 및 조정", "수직수평전계강도측정"] },
  { code: "통신 10-3-7", name: "초단파송신기 TZY", spec: "LFR 공 중 선", unit: "개", labors: {"통신관련기사": 1.0}, category: "device", page: 397, keywords: ["lfr 공 중 선", "계기착륙시설 내방표지소 비행점검 및 조정", "초단파송신기 tzy"] },
  { code: "통신 10-3-7", name: "Z마 - 카 공 중 선", spec: "비 행 점 검", unit: "개", labors: {"통신관련기사": 1.0}, category: "device", page: 397, keywords: ["계기착륙시설 내방표지소 비행점검 및 조정", "z마 - 카 공 중 선", "비 행 점 검"] },
  { code: "통신 10-3-8", name: "장 파 송 신 기 31L", spec: "Z 마 - 카 공 중 선", unit: "개", labors: {"통신관련기사": 1.0}, category: "device", page: 397, keywords: ["계기착륙시설 외방표지소 비행점검 및 조정", "z 마 - 카 공 중 선", "장 파 송 신 기 31l"] },
  { code: "통신 10-3-8", name: "초단파 송신기 TEY", spec: "수직평형전계강도측정", unit: "개", labors: {"통신관련기사": 2.0}, category: "device", page: 397, keywords: ["수직평형전계강도측정", "계기착륙시설 외방표지소 비행점검 및 조정", "초단파 송신기 tey"] },
  { code: "통신 10-3-8", name: "감 시 기", spec: "비 행 점 검", unit: "개", labors: {"통신관련기사": 1.0}, category: "device", page: 397, keywords: ["계기착륙시설 외방표지소 비행점검 및 조정", "감 시 기", "비 행 점 검"] },
  { code: "통신 10-3-8", name: "LFR 공 중 선", spec: "비 행 점 검", unit: "개", labors: {"통신관련기사": 1.0}, category: "device", page: 397, keywords: ["lfr 공 중 선", "계기착륙시설 외방표지소 비행점검 및 조정", "비 행 점 검"] },
  { code: "통신 10-3-9", name: "Indicator Site", spec: "Transmitter Site", unit: "개", labors: {"통신관련기사": 5.63}, category: "device", page: 398, keywords: ["radar 장비점검 조정", "transmitter site", "indicator site"] },
  { code: "통신 10-3-9", name: "ASRD, 2공동장비전원부21A-7721", spec: "ASR(TX)AN/ORM-61신호 발진기 작동", unit: "개", labors: {"통신관련기사": 5.63}, category: "device", page: 398, keywords: ["asr(tx)an/orm-61신호 발진기 작동", "radar 장비점검 조정", "asrd, 2공동장비전원부21a-7721"] },
  { code: "통신 10-3-9", name: "콘 솔 전 원 부 FA-7710", spec: "PPI 감시기 21A-4918", unit: "개", labors: {"통신관련기사": 5.63}, category: "device", page: 398, keywords: ["radar 장비점검 조정", "콘 솔 전 원 부 fa-7710", "ppi 감시기 21a-4918"] },
  { code: "통신 10-3-9", name: "공 통 장 비 기 능 검 사", spec: "송신 주파수 및 출력 측정", unit: "개", labors: {"통신관련기사": 5.63}, category: "device", page: 398, keywords: ["radar 장비점검 조정", "공 통 장 비 기 능 검 사", "송신 주파수 및 출력 측정"] },
  { code: "통신 10-3-9", name: "콘 솔 장 비 기 능 검 사", spec: "Ring Time 측정", unit: "개", labors: {"통신관련기사": 2.79}, category: "device", page: 398, keywords: ["radar 장비점검 조정", "ring time 측정", "콘 솔 장 비 기 능 검 사"] },
  { code: "통신 10-3-9", name: "PPI 콘솔형 7701 기능검사", spec: "전압 정재파비 측정", unit: "개", labors: {"통신관련기사": 8.42}, category: "device", page: 398, keywords: ["radar 장비점검 조정", "ppi 콘솔형 7701 기능검사", "전압 정재파비 측정"] },
  { code: "통신 10-3-9", name: "지시기 계통 가동 FA-7700", spec: "이동신호수신기성쇄시험", unit: "개", labors: {"통신관련기사": 16.88}, category: "device", page: 398, keywords: ["이동신호수신기성쇄시험", "radar 장비점검 조정", "지시기 계통 가동 fa-7700"] },
  { code: "통신 10-3-9", name: "오실로스코프 일반적인 조정", spec: "RADAR 장비작동개시조정", unit: "개", labors: {"통신관련기사": 5.63}, category: "device", page: 398, keywords: ["radar 장비점검 조정", "radar 장비작동개시조정", "오실로스코프 일반적인 조정"] },
  { code: "통신 10-3-9", name: "선 로 보 상 기 FA-7723", spec: "RADAR 장비 작동 정지", unit: "개", labors: {"통신관련기사": 5.63}, category: "device", page: 398, keywords: ["radar 장비 작동 정지", "radar 장비점검 조정", "선 로 보 상 기 fa-7723"] },
  { code: "통신 10-3-9", name: "60마일 스킨 발생기FA-7726", spec: "545A 오실로스코프 작동", unit: "개", labors: {"통신관련기사": 11.25}, category: "device", page: 398, keywords: ["radar 장비점검 조정", "545a 오실로스코프 작동", "60마일 스킨 발생기fa-7726"] },
  { code: "통신 10-3-9", name: "시간분배케이트발생기FA-7724", spec: "주동기기 정밀조정", unit: "개", labors: {"통신관련기사": 11.25}, category: "device", page: 398, keywords: ["시간분배케이트발생기fa-7724", "radar 장비점검 조정", "주동기기 정밀조정"] },
  { code: "통신 10-3-9", name: "60마일거리표지기발생기FA-7727", spec: "변조기 신호 정밀조정", unit: "개", labors: {"통신관련기사": 11.25}, category: "device", page: 398, keywords: ["radar 장비점검 조정", "60마일거리표지기발생기fa-7727", "변조기 신호 정밀조정"] },
  { code: "통신 10-3-9", name: "200마일 스윕 발생기 FA-7728", spec: "무변조기 전원 공급기 3A-4727", unit: "개", labors: {"통신관련기사": 5.63}, category: "device", page: 398, keywords: ["radar 장비점검 조정", "무변조기 전원 공급기 3a-4727", "200마일 스윕 발생기 fa-7728"] },
  { code: "통신 10-3-9", name: "200마일거리표지발생기FA-7729", spec: "무변조기 전원 공급기 3A-4727", unit: "개", labors: {"통신관련기사": 11.25}, category: "device", page: 398, keywords: ["radar 장비점검 조정", "200마일거리표지발생기fa-7729", "무변조기 전원 공급기 3a-4727"] },
  { code: "통신 10-3-9", name: "콘솔 비디오 혼합기FA-7713", spec: "무변조기 전원 공급기 3A-4727", unit: "개", labors: {"통신관련기사": 33.75}, category: "device", page: 398, keywords: ["콘솔 비디오 혼합기fa-7713", "radar 장비점검 조정", "무변조기 전원 공급기 3a-4727"] },
  { code: "통신 10-3-9", name: "변형 증폭기 FA-7712", spec: "무변조기 전원 공급기 3A-4727", unit: "개", labors: {"통신관련기사": 67.5}, category: "device", page: 398, keywords: ["무변조기 전원 공급기 3a-4727", "radar 장비점검 조정", "변형 증폭기 fa-7712"] },
  { code: "통신 10-3-9", name: "PPI 콘솔 FA-7701", spec: "무변조기 전원 공급기 3A-4727", unit: "개", labors: {"통신관련기사": 2.79}, category: "device", page: 398, keywords: ["radar 장비점검 조정", "무변조기 전원 공급기 3a-4727", "ppi 콘솔 fa-7701"] },
  { code: "통신 10-3-9", name: "SSR Comm-Decoder Power Supply", spec: "무변조기 전원 공급기 3A-4727", unit: "개", labors: {"통신관련기사": 5.63}, category: "device", page: 398, keywords: ["radar 장비점검 조정", "무변조기 전원 공급기 3a-4727", "ssr comm-decoder power supply"] },
  { code: "통신 10-3-9", name: "Decoder Control Box Mapper", spec: "무변조기 전원 공급기 3A-4727", unit: "개", labors: {"통신관련기사": 5.63}, category: "device", page: 398, keywords: ["무변조기 전원 공급기 3a-4727", "radar 장비점검 조정", "decoder control box mapper"] },
  { code: "통신 10-3-9", name: "Power Supply", spec: "무변조기 전원 공급기 3A-4727", unit: "개", labors: {"통신관련기사": 5.63}, category: "device", page: 398, keywords: ["radar 장비점검 조정", "power supply", "무변조기 전원 공급기 3a-4727"] },
  { code: "통신 10-3-9", name: "AZ-Processor", spec: "무변조기 전원 공급기 3A-4727", unit: "개", labors: {"통신관련기사": 1.4}, category: "device", page: 398, keywords: ["무변조기 전원 공급기 3a-4727", "radar 장비점검 조정", "az-processor"] },
  { code: "통신 10-3-9", name: "Module", spec: "무변조기 전원 공급기 3A-4727", unit: "개", labors: {"통신관련기사": 1.4}, category: "device", page: 398, keywords: ["radar 장비점검 조정", "무변조기 전원 공급기 3a-4727", "module"] },
  { code: "통신 10-3-9", name: "Noncomm-Decoder Power Supply", spec: "고주파 출력 감시기 3A-4741", unit: "개", labors: {"통신관련기사": 11.25}, category: "device", page: 399, keywords: ["radar 장비점검 조정", "고주파 출력 감시기 3a-4741", "noncomm-decoder power supply"] },
  { code: "통신 10-3-9", name: "Master Control Box", spec: "영상신호 발진기 3A-4767", unit: "개", labors: {"통신관련기사": 5.63}, category: "device", page: 399, keywords: ["radar 장비점검 조정", "master control box", "영상신호 발진기 3a-4767"] },
  { code: "통신 10-3-9", name: "제 1 상 쇄 기 조 정", spec: "부 성 증 폭 기 정 밀 측 정", unit: "개", labors: {"통신관련기사": 33.75}, category: "device", page: 399, keywords: ["radar 장비점검 조정", "제 1 상 쇄 기 조 정", "부 성 증 폭 기 정 밀 측 정"] },
  { code: "통신 10-3-9", name: "혼 신 제 거 기 3A-4905", spec: "전단선택여파기및신호혼합기조정", unit: "개", labors: {"통신관련기사": 5.63}, category: "device", page: 399, keywords: ["radar 장비점검 조정", "전단선택여파기및신호혼합기조정", "혼 신 제 거 기 3a-4905"] },
  { code: "통신 10-3-9", name: "수 신 기 복 귀 시 간 조 정", spec: "동 기 주 파 수 정 밀 조 정", unit: "개", labors: {"통신관련기사": 11.25}, category: "device", page: 399, keywords: ["radar 장비점검 조정", "동 기 주 파 수 정 밀 조 정", "수 신 기 복 귀 시 간 조 정"] },
  { code: "통신 10-3-9", name: "정지신호수신기 LAGC 측정", spec: "정지 영상 신호 조정기 FA-4762C", unit: "개", labors: {"통신관련기사": 2.79}, category: "device", page: 399, keywords: ["radar 장비점검 조정", "정지신호수신기 lagc 측정", "정지 영상 신호 조정기 fa-4762c"] },
  { code: "통신 10-3-9", name: "정지신호수신기 FTC 측정", spec: "이동 영상 신호 조정기 FA-4760", unit: "개", labors: {"통신관련기사": 5.63}, category: "device", page: 399, keywords: ["radar 장비점검 조정", "이동 영상 신호 조정기 fa-4760", "정지신호수신기 ftc 측정"] },
  { code: "통신 10-3-9", name: "이동신호수신기 FTC 측정", spec: "STC FA-4766B", unit: "개", labors: {"통신관련기사": 5.63}, category: "device", page: 399, keywords: ["이동신호수신기 ftc 측정", "radar 장비점검 조정", "stc fa-4766b"] },
  { code: "통신 10-3-9", name: "부 성 증 폭 기 FA-4903", spec: "SSR(TX)저전압공급장치점검", unit: "개", labors: {"통신관련기사": 16.88}, category: "device", page: 399, keywords: ["radar 장비점검 조정", "ssr(tx)저전압공급장치점검", "부 성 증 폭 기 fa-4903"] },
  { code: "통신 10-3-9", name: "영 상 적 분 기 FA-4754A", spec: "송신전력 및 반사전력 측 정", unit: "개", labors: {"통신관련기사": 16.88}, category: "device", page: 399, keywords: ["radar 장비점검 조정", "영 상 적 분 기 fa-4754a", "송신전력 및 반사전력 측 정"] },
  { code: "통신 10-3-9", name: "제 2 상 쇄 기 조 정", spec: "고 전 압 공 급 장 치 점 검", unit: "개", labors: {"통신관련기사": 16.88}, category: "device", page: 399, keywords: ["radar 장비점검 조정", "제 2 상 쇄 기 조 정", "고 전 압 공 급 장 치 점 검"] },
  { code: "통신 10-3-9", name: "이동신호상쇄기정밀조정", spec: "전 압 정 재 파 비 측 정", unit: "개", labors: {"통신관련기사": 16.88}, category: "device", page: 399, keywords: ["전 압 정 재 파 비 측 정", "이동신호상쇄기정밀조정", "radar 장비점검 조정"] },
  { code: "통신 10-3-9", name: "속 도 정 형 기 조 정", spec: "장 비 송 풍 장 치 점 검", unit: "개", labors: {"통신관련기사": 5.63}, category: "device", page: 399, keywords: ["장 비 송 풍 장 치 점 검", "radar 장비점검 조정", "속 도 정 형 기 조 정"] },
  { code: "통신 10-3-9", name: "수 신 장 치 종 합 정 밀 조 정", spec: "주 파 수 측 정", unit: "개", labors: {"통신관련기사": 22.5}, category: "device", page: 399, keywords: ["radar 장비점검 조정", "주 파 수 측 정", "수 신 장 치 종 합 정 밀 조 정"] },
  { code: "통신 10-3-9", name: "마그네트론송신장치장애회로", spec: "수 신 감 도 측 정", unit: "개", labors: {"통신관련기사": 72.9}, category: "device", page: 399, keywords: ["radar 장비점검 조정", "마그네트론송신장치장애회로", "수 신 감 도 측 정"] },
  { code: "통신 10-3-9", name: "동조감시기및수정발진기조정", spec: "잡 음 제 거 기 조 정", unit: "개", labors: {"통신관련기사": 7.35}, category: "device", page: 399, keywords: ["잡 음 제 거 기 조 정", "radar 장비점검 조정", "동조감시기및수정발진기조정"] },
  { code: "통신 10-3-9", name: "잡음지수감시기 FA-4917", spec: "부 영 제 거 수 준 조 정", unit: "개", labors: {"통신관련기사": 16.88}, category: "device", page: 399, keywords: ["잡음지수감시기 fa-4917", "부 영 제 거 수 준 조 정", "radar 장비점검 조정"] },
  { code: "통신 10-3-9", name: "Stalo FA-4728 정 밀 조 정", spec: "송신신호형태 발생기 조 정", unit: "개", labors: {"통신관련기사": 33.75}, category: "device", page: 399, keywords: ["radar 장비점검 조정", "stalo fa-4728 정 밀 조 정", "송신신호형태 발생기 조 정"] },
  { code: "통신 10-3-9", name: "자동주파수제어기 FA-4736A", spec: "국 부 발 진 기 조 정", unit: "개", labors: {"통신관련기사": 16.88}, category: "device", page: 399, keywords: ["radar 장비점검 조정", "국 부 발 진 기 조 정", "자동주파수제어기 fa-4736a"] },
  { code: "통신 10-3-9", name: "시험펄스발전기정밀조정 FA-4756", spec: "공기여파기점검장비배선점검", unit: "개", labors: {"통신관련기사": 16.88}, category: "device", page: 399, keywords: ["radar 장비점검 조정", "시험펄스발전기정밀조정 fa-4756", "공기여파기점검장비배선점검"] },
  { code: "통신 10-3-9", name: "수 신 기 감 도 측 정", spec: "비 행 점 검", unit: "개", labors: {"통신관련기사": 32.0}, category: "device", page: 399, keywords: ["radar 장비점검 조정", "수 신 기 감 도 측 정", "비 행 점 검"] },
  { code: "통신 10-3-9", name: "이 동 신 호 장 치 종 합 측 정", spec: "비 행 점 검", unit: "개", labors: {"통신관련기사": 11.25}, category: "device", page: 399, keywords: ["radar 장비점검 조정", "이 동 신 호 장 치 종 합 측 정", "비 행 점 검"] },
  { code: "통신 11-1-1-1", name: "소 운 반 배열 및 조립", spec: "50V", unit: "개", labors: {"통신설비공": 2.66}, category: "device", page: 403, keywords: ["50v", "250ah이하 축전지", "소 운 반 배열 및 조립"] },
  { code: "통신 11-1-1-1", name: "소 운 반 배열 및 조립", spec: "120V", unit: "개", labors: {"통신설비공": 6.39}, category: "device", page: 403, keywords: ["250ah이하 축전지", "120v", "소 운 반 배열 및 조립"] },
  { code: "통신 11-1-1-1", name: "소 운 반 배열 및 조립", spec: "240V", unit: "개", labors: {"통신설비공": 12.78}, category: "device", page: 403, keywords: ["240v", "250ah이하 축전지", "소 운 반 배열 및 조립"] },
  { code: "통신 11-1-1-1", name: "소 운 반 배열 및 조립", spec: "380V", unit: "개", labors: {"통신설비공": 20.18}, category: "device", page: 403, keywords: ["380v", "250ah이하 축전지", "소 운 반 배열 및 조립"] },
  { code: "통신 11-1-1-2", name: "소 운 반 배열 및 조립", spec: "50V", unit: "개", labors: {"통신설비공": 3.18}, category: "device", page: 403, keywords: ["50v", "500ah이하 축전지", "소 운 반 배열 및 조립"] },
  { code: "통신 11-1-1-2", name: "소 운 반 배열 및 조립", spec: "120V", unit: "개", labors: {"통신설비공": 7.63}, category: "device", page: 403, keywords: ["500ah이하 축전지", "120v", "소 운 반 배열 및 조립"] },
  { code: "통신 11-1-1-2", name: "소 운 반 배열 및 조립", spec: "240V", unit: "개", labors: {"통신설비공": 15.26}, category: "device", page: 403, keywords: ["500ah이하 축전지", "240v", "소 운 반 배열 및 조립"] },
  { code: "통신 11-1-1-2", name: "소 운 반 배열 및 조립", spec: "380V", unit: "개", labors: {"통신설비공": 24.11}, category: "device", page: 403, keywords: ["380v", "500ah이하 축전지", "소 운 반 배열 및 조립"] },
  { code: "통신 11-1-1-3", name: "소 운 반 배열 및 조립", spec: "50V", unit: "개", labors: {"통신설비공": 4.66}, category: "device", page: 403, keywords: ["50v", "1,200ah이하 축전지", "소 운 반 배열 및 조립"] },
  { code: "통신 11-1-1-3", name: "소 운 반 배열 및 조립", spec: "120V", unit: "개", labors: {"통신설비공": 11.18}, category: "device", page: 403, keywords: ["1,200ah이하 축전지", "120v", "소 운 반 배열 및 조립"] },
  { code: "통신 11-1-1-3", name: "소 운 반 배열 및 조립", spec: "240V", unit: "개", labors: {"통신설비공": 22.36}, category: "device", page: 403, keywords: ["240v", "1,200ah이하 축전지", "소 운 반 배열 및 조립"] },
  { code: "통신 11-1-1-3", name: "소 운 반 배열 및 조립", spec: "380V", unit: "개", labors: {"통신설비공": 35.32}, category: "device", page: 403, keywords: ["380v", "1,200ah이하 축전지", "소 운 반 배열 및 조립"] },
  { code: "통신 11-1-1-4", name: "소 운 반 배열 및 조립", spec: "50V", unit: "개", labors: {"통신설비공": 6.79}, category: "device", page: 404, keywords: ["50v", "1,600ah이하 축전지", "소 운 반 배열 및 조립"] },
  { code: "통신 11-1-1-4", name: "소 운 반 배열 및 조립", spec: "120V", unit: "개", labors: {"통신설비공": 16.29}, category: "device", page: 404, keywords: ["1,600ah이하 축전지", "120v", "소 운 반 배열 및 조립"] },
  { code: "통신 11-1-1-4", name: "소 운 반 배열 및 조립", spec: "240V", unit: "개", labors: {"통신설비공": 32.58}, category: "device", page: 404, keywords: ["240v", "1,600ah이하 축전지", "소 운 반 배열 및 조립"] },
  { code: "통신 11-1-1-4", name: "소 운 반 배열 및 조립", spec: "380V", unit: "개", labors: {"통신설비공": 51.47}, category: "device", page: 404, keywords: ["380v", "1,600ah이하 축전지", "소 운 반 배열 및 조립"] },
  { code: "통신 11-1-1-5", name: "소 운 반 배열 및 조립", spec: "50V", unit: "개", labors: {"통신설비공": 8.74}, category: "device", page: 404, keywords: ["2,400ah이하 축전지", "50v", "소 운 반 배열 및 조립"] },
  { code: "통신 11-1-1-5", name: "소 운 반 배열 및 조립", spec: "120V", unit: "개", labors: {"통신설비공": 20.97}, category: "device", page: 404, keywords: ["2,400ah이하 축전지", "120v", "소 운 반 배열 및 조립"] },
  { code: "통신 11-1-1-5", name: "소 운 반 배열 및 조립", spec: "240V", unit: "개", labors: {"통신설비공": 41.94}, category: "device", page: 404, keywords: ["2,400ah이하 축전지", "240v", "소 운 반 배열 및 조립"] },
  { code: "통신 11-1-1-5", name: "소 운 반 배열 및 조립", spec: "380V", unit: "개", labors: {"통신설비공": 66.26}, category: "device", page: 404, keywords: ["380v", "2,400ah이하 축전지", "소 운 반 배열 및 조립"] },
  { code: "통신 11-1-1-6", name: "소 운 반 배열 및 조립", spec: "50V", unit: "개", labors: {"통신설비공": 10.48}, category: "device", page: 404, keywords: ["3,000ah이하 축전지", "50v", "소 운 반 배열 및 조립"] },
  { code: "통신 11-1-1-6", name: "소 운 반 배열 및 조립", spec: "120V", unit: "개", labors: {"통신설비공": 25.15}, category: "device", page: 404, keywords: ["3,000ah이하 축전지", "120v", "소 운 반 배열 및 조립"] },
  { code: "통신 11-1-1-6", name: "소 운 반 배열 및 조립", spec: "240V", unit: "개", labors: {"통신설비공": 50.3}, category: "device", page: 404, keywords: ["3,000ah이하 축전지", "240v", "소 운 반 배열 및 조립"] },
  { code: "통신 11-1-1-6", name: "소 운 반 배열 및 조립", spec: "380V", unit: "개", labors: {"통신설비공": 79.47}, category: "device", page: 404, keywords: ["380v", "3,000ah이하 축전지", "소 운 반 배열 및 조립"] },
  { code: "통신 11-1-1-7", name: "축전지 감시장치용 결합기", spec: "", unit: "개", labors: {"통신설비공": 0.05, "보통인부": 0.01}, category: "device", page: 404, keywords: ["축전지 감시장치용 결합기"] },
  { code: "통신 11-1-2", name: "모듈 설치", spec: "21.6V/70Ah", unit: "개", labors: {"통신설비공": 0.02, "통신케이블공": 0.02}, category: "device", page: 405, keywords: ["21.6v/70ah", "모듈 설치", "리튬2차전지"] },
  { code: "통신 11-2-1", name: "고주파정류기", spec: "19″", unit: "대", labors: {"통신설비공": 1.63, "특별인부": 0.47}, category: "device", page: 406, keywords: ["19″", "정류기", "고주파정류기"] },
  { code: "통신 11-2-1", name: "수은정류기", spec: "5kVA이하", unit: "대", labors: {"통신설비공": 1.8}, category: "device", page: 406, keywords: ["5kva이하", "정류기", "수은정류기"] },
  { code: "통신 11-2-1", name: "수은정류기", spec: "10 “", unit: "“", labors: {"통신설비공": 2.8}, category: "device", page: 406, keywords: ["정류기", "10 “", "수은정류기"] },
  { code: "통신 11-2-1", name: "수은정류기", spec: "20 “", unit: "“", labors: {"통신설비공": 3.7}, category: "device", page: 406, keywords: ["정류기", "20 “", "수은정류기"] },
  { code: "통신 11-2-1", name: "수은정류기", spec: "30 “", unit: "“", labors: {"통신설비공": 5.0}, category: "device", page: 406, keywords: ["30 “", "정류기", "수은정류기"] },
  { code: "통신 11-2-1", name: "수은정류기", spec: "50 “", unit: "“", labors: {"통신설비공": 6.5}, category: "device", page: 406, keywords: ["정류기", "50 “", "수은정류기"] },
  { code: "통신 11-2-1", name: "금속정류기", spec: "5kVA이하", unit: "“", labors: {"통신설비공": 1.8}, category: "device", page: 406, keywords: ["금속정류기", "정류기", "5kva이하"] },
  { code: "통신 11-2-1", name: "금속정류기", spec: "10 “", unit: "“", labors: {"통신설비공": 2.7}, category: "device", page: 406, keywords: ["금속정류기", "정류기", "10 “"] },
  { code: "통신 11-2-1", name: "금속정류기", spec: "20 “", unit: "“", labors: {"통신설비공": 3.7}, category: "device", page: 406, keywords: ["금속정류기", "정류기", "20 “"] },
  { code: "통신 11-2-1", name: "금속정류기", spec: "30 “", unit: "“", labors: {"통신설비공": 4.6}, category: "device", page: 406, keywords: ["금속정류기", "30 “", "정류기"] },
  { code: "통신 11-2-1", name: "금속정류기", spec: "50 “", unit: "“", labors: {"통신설비공": 5.5}, category: "device", page: 406, keywords: ["금속정류기", "정류기", "50 “"] },
  { code: "통신 11-3-1", name: "10A이하", spec: "3.65 (24V 이하)", unit: "3.71", labors: {"통신설비공": 3.79}, category: "device", page: 407, keywords: ["배터리(battery) 충전장치", "3.65 (24v 이하)", "10a이하"] },
  { code: "통신 11-3-1", name: "10A이하", spec: "3.65 (50V 이하)", unit: "3.71", labors: {"통신설비공": 3.93}, category: "device", page: 407, keywords: ["배터리(battery) 충전장치", "10a이하", "3.65 (50v 이하)"] },
  { code: "통신 11-3-1", name: "10A이하", spec: "3.65 (100V 이하)", unit: "3.71", labors: {"통신설비공": 4.06}, category: "device", page: 407, keywords: ["배터리(battery) 충전장치", "10a이하", "3.65 (100v 이하)"] },
  { code: "통신 11-3-1", name: "10A이하", spec: "3.65 (101V~ 250V)", unit: "3.71", labors: {"통신설비공": 4.2}, category: "device", page: 407, keywords: ["배터리(battery) 충전장치", "10a이하", "3.65 (101v~ 250v)"] },
  { code: "통신 11-3-1", name: "10A이하", spec: "2.70 (24V 이하)", unit: "2.79", labors: {"보통인부": 2.93}, category: "device", page: 407, keywords: ["2.70 (24v 이하)", "10a이하", "배터리(battery) 충전장치"] },
  { code: "통신 11-3-1", name: "10A이하", spec: "2.70 (50V 이하)", unit: "2.79", labors: {"보통인부": 3.15}, category: "device", page: 407, keywords: ["배터리(battery) 충전장치", "2.70 (50v 이하)", "10a이하"] },
  { code: "통신 11-3-1", name: "10A이하", spec: "2.70 (100V 이하)", unit: "2.79", labors: {"보통인부": 3.38}, category: "device", page: 407, keywords: ["배터리(battery) 충전장치", "10a이하", "2.70 (100v 이하)"] },
  { code: "통신 11-3-1", name: "10A이하", spec: "2.70 (101V~ 250V)", unit: "2.79", labors: {"보통인부": 3.6}, category: "device", page: 407, keywords: ["배터리(battery) 충전장치", "10a이하", "2.70 (101v~ 250v)"] },
  { code: "통신 11-3-1", name: "50A이하", spec: "3.93 (24V 이하)", unit: "4.06", labors: {"통신설비공": 4.2}, category: "device", page: 407, keywords: ["배터리(battery) 충전장치", "50a이하", "3.93 (24v 이하)"] },
  { code: "통신 11-3-1", name: "50A이하", spec: "3.93 (50V 이하)", unit: "4.06", labors: {"통신설비공": 4.42}, category: "device", page: 407, keywords: ["배터리(battery) 충전장치", "50a이하", "3.93 (50v 이하)"] },
  { code: "통신 11-3-1", name: "50A이하", spec: "3.93 (100V 이하)", unit: "4.06", labors: {"통신설비공": 4.53}, category: "device", page: 407, keywords: ["배터리(battery) 충전장치", "50a이하", "3.93 (100v 이하)"] },
  { code: "통신 11-3-1", name: "50A이하", spec: "3.93 (101V~ 250V)", unit: "4.06", labors: {"통신설비공": 4.75}, category: "device", page: 407, keywords: ["배터리(battery) 충전장치", "50a이하", "3.93 (101v~ 250v)"] },
  { code: "통신 11-3-1", name: "50A이하", spec: "3.15 (24V 이하)", unit: "3.38", labors: {"보통인부": 3.6}, category: "device", page: 407, keywords: ["배터리(battery) 충전장치", "50a이하", "3.15 (24v 이하)"] },
  { code: "통신 11-3-1", name: "50A이하", spec: "3.15 (50V 이하)", unit: "3.38", labors: {"보통인부": 3.96}, category: "device", page: 407, keywords: ["3.15 (50v 이하)", "50a이하", "배터리(battery) 충전장치"] },
  { code: "통신 11-3-1", name: "50A이하", spec: "3.15 (100V 이하)", unit: "3.38", labors: {"보통인부": 4.14}, category: "device", page: 407, keywords: ["배터리(battery) 충전장치", "50a이하", "3.15 (100v 이하)"] },
  { code: "통신 11-3-1", name: "50A이하", spec: "3.15 (101V~ 250V)", unit: "3.38", labors: {"보통인부": 4.5}, category: "device", page: 407, keywords: ["3.15 (101v~ 250v)", "50a이하", "배터리(battery) 충전장치"] },
  { code: "통신 11-3-1", name: "100A이하", spec: "4.20 (24V 이하)", unit: "4.48", labors: {"통신설비공": 4.75}, category: "device", page: 407, keywords: ["배터리(battery) 충전장치", "4.20 (24v 이하)", "100a이하"] },
  { code: "통신 11-3-1", name: "100A이하", spec: "4.20 (50V 이하)", unit: "4.48", labors: {"통신설비공": 5.03}, category: "device", page: 407, keywords: ["배터리(battery) 충전장치", "4.20 (50v 이하)", "100a이하"] },
  { code: "통신 11-3-1", name: "100A이하", spec: "4.20 (100V 이하)", unit: "4.48", labors: {"통신설비공": 5.3}, category: "device", page: 407, keywords: ["배터리(battery) 충전장치", "100a이하", "4.20 (100v 이하)"] },
  { code: "통신 11-3-1", name: "100A이하", spec: "4.20 (101V~ 250V)", unit: "4.48", labors: {"통신설비공": 5.58}, category: "device", page: 407, keywords: ["배터리(battery) 충전장치", "4.20 (101v~ 250v)", "100a이하"] },
  { code: "통신 11-3-1", name: "100A이하", spec: "3.60 (24V 이하)", unit: "4.05", labors: {"보통인부": 4.5}, category: "device", page: 407, keywords: ["배터리(battery) 충전장치", "100a이하", "3.60 (24v 이하)"] },
  { code: "통신 11-3-1", name: "100A이하", spec: "3.60 (50V 이하)", unit: "4.05", labors: {"보통인부": 4.95}, category: "device", page: 407, keywords: ["배터리(battery) 충전장치", "100a이하", "3.60 (50v 이하)"] },
  { code: "통신 11-3-1", name: "100A이하", spec: "3.60 (100V 이하)", unit: "4.05", labors: {"보통인부": 5.4}, category: "device", page: 407, keywords: ["배터리(battery) 충전장치", "100a이하", "3.60 (100v 이하)"] },
  { code: "통신 11-3-1", name: "100A이하", spec: "3.60 (101V~ 250V)", unit: "4.05", labors: {"보통인부": 5.85}, category: "device", page: 407, keywords: ["3.60 (101v~ 250v)", "100a이하", "배터리(battery) 충전장치"] },
  { code: "통신 11-3-1", name: "200A이하", spec: "- (24V 이하)", unit: "5.00", labors: {"통신설비공": 5.8}, category: "device", page: 407, keywords: ["200a이하", "- (24v 이하)", "배터리(battery) 충전장치"] },
  { code: "통신 11-3-1", name: "200A이하", spec: "- (50V 이하)", unit: "5.00", labors: {"통신설비공": 6.26}, category: "device", page: 407, keywords: ["200a이하", "- (50v 이하)", "배터리(battery) 충전장치"] },
  { code: "통신 11-3-1", name: "200A이하", spec: "- (100V 이하)", unit: "5.00", labors: {"통신설비공": 6.68}, category: "device", page: 407, keywords: ["200a이하", "- (100v 이하)", "배터리(battery) 충전장치"] },
  { code: "통신 11-3-1", name: "200A이하", spec: "- (101V~ 250V)", unit: "5.00", labors: {"통신설비공": 7.07}, category: "device", page: 407, keywords: ["200a이하", "- (101v~ 250v)", "배터리(battery) 충전장치"] },
  { code: "통신 11-3-1", name: "400A이하", spec: "- (24V 이하)", unit: "6.00", labors: {"통신설비공": 6.8}, category: "device", page: 407, keywords: ["400a이하", "- (24v 이하)", "배터리(battery) 충전장치"] },
  { code: "통신 11-3-1", name: "400A이하", spec: "- (50V 이하)", unit: "6.00", labors: {"통신설비공": 8.6}, category: "device", page: 407, keywords: ["400a이하", "- (50v 이하)", "배터리(battery) 충전장치"] },
  { code: "통신 11-3-1", name: "400A이하", spec: "- (100V 이하)", unit: "6.00", labors: {"통신설비공": 9.15}, category: "device", page: 407, keywords: ["400a이하", "- (100v 이하)", "배터리(battery) 충전장치"] },
  { code: "통신 11-3-1", name: "400A이하", spec: "- (101V~ 250V)", unit: "6.00", labors: {"통신설비공": 10.25}, category: "device", page: 407, keywords: ["400a이하", "- (101v~ 250v)", "배터리(battery) 충전장치"] },
  { code: "통신 11-3-1", name: "600A이하", spec: "- (24V 이하)", unit: "7.20", labors: {"통신설비공": 7.8}, category: "device", page: 407, keywords: ["600a이하", "- (24v 이하)", "배터리(battery) 충전장치"] },
  { code: "통신 11-3-1", name: "600A이하", spec: "- (50V 이하)", unit: "7.20", labors: {"통신설비공": 9.0}, category: "device", page: 407, keywords: ["600a이하", "- (50v 이하)", "배터리(battery) 충전장치"] },
  { code: "통신 11-3-1", name: "800A이하", spec: "- (24V 이하)", unit: "-", labors: {"통신설비공": 8.3}, category: "device", page: 407, keywords: ["배터리(battery) 충전장치", "- (24v 이하)", "800a이하"] },
  { code: "통신 11-3-1", name: "800A이하", spec: "- (50V 이하)", unit: "-", labors: {"통신설비공": 9.5}, category: "device", page: 407, keywords: ["배터리(battery) 충전장치", "- (50v 이하)", "800a이하"] },
  { code: "통신 11-3-1", name: "기본랙(48V, 25A용)설치", spec: "", unit: "대", labors: {"통신설비공": 1.63, "보통인부": 0.47}, category: "device", page: 407, keywords: ["배터리(battery) 충전장치", "기본랙(48v, 25a용)설치"] },
  { code: "통신 11-3-1", name: "정류기(48V, 25A)설치", spec: "", unit: "대", labors: {"통신관련산업기사": 0.24, "통신설비공": 2.0, "보통인부": 0.23}, category: "device", page: 407, keywords: ["배터리(battery) 충전장치", "정류기(48v, 25a)설치"] },
  { code: "통신 11-3-1", name: "교류배전반(48V, 25A)설치", spec: "", unit: "대", labors: {"통신설비공": 0.19, "보통인부": 0.27}, category: "device", page: 407, keywords: ["배터리(battery) 충전장치", "교류배전반(48v, 25a)설치"] },
  { code: "통신 11-3-1", name: "직류분배반(48V, 25A)설치", spec: "", unit: "대", labors: {"통신설비공": 0.11, "보통인부": 0.2}, category: "device", page: 407, keywords: ["배터리(battery) 충전장치", "직류분배반(48v, 25a)설치"] },
  { code: "통신 11-3-1", name: "분배퓨즈(48V, 25A)유니트(판넬)설치", spec: "", unit: "대", labors: {"통신설비공": 0.6, "보통인부": 0.08}, category: "device", page: 407, keywords: ["배터리(battery) 충전장치", "분배퓨즈(48v, 25a)유니트(판넬)설치"] },
  { code: "통신 11-3-2", name: "태양광전지판", spec: "", unit: "대", labors: {"통신외선공": 0.31, "통신설비공": 0.28}, category: "device", page: 408, keywords: ["태양광 충전시스템", "태양광전지판"] },
  { code: "통신 11-3-2", name: "전원관리장치", spec: "", unit: "대", labors: {"통신외선공": 0.23, "통신설비공": 0.35}, category: "device", page: 408, keywords: ["태양광 충전시스템", "전원관리장치"] },
  { code: "통신 11-4-1", name: "소형(1~3kVA) 이하", spec: "", unit: "대", labors: {"통신설비공": 1.0}, category: "device", page: 409, keywords: ["무정전 전원장치(ups, cvcf)", "소형(1~3kva) 이하"] },
  { code: "통신 11-4-1", name: "3kVA초과 ~ 10kVA 이하", spec: "", unit: "대", labors: {"통신설비공": 3.0}, category: "device", page: 409, keywords: ["3kva초과 ~ 10kva 이하", "무정전 전원장치(ups, cvcf)"] },
  { code: "통신 11-4-1", name: "10kVA초과 ~ 20kVA 이하", spec: "", unit: "대", labors: {"통신설비공": 4.0, "보통인부": 1.0}, category: "device", page: 409, keywords: ["10kva초과 ~ 20kva 이하", "무정전 전원장치(ups, cvcf)"] },
  { code: "통신 11-4-1", name: "20kVA초과 ~ 30kVA 이하", spec: "", unit: "대", labors: {"통신설비공": 5.0, "보통인부": 2.0}, category: "device", page: 409, keywords: ["20kva초과 ~ 30kva 이하", "무정전 전원장치(ups, cvcf)"] },
  { code: "통신 11-4-1", name: "30kVA 초과~100kVA 이하", spec: "", unit: "대", labors: {"통신설비공": 6.0, "보통인부": 3.0}, category: "device", page: 409, keywords: ["무정전 전원장치(ups, cvcf)", "30kva 초과~100kva 이하"] },
  { code: "통신 11-4-1", name: "100kVA 초과~250kVA 이하", spec: "", unit: "대", labors: {"통신설비공": 7.0, "보통인부": 4.0}, category: "device", page: 409, keywords: ["무정전 전원장치(ups, cvcf)", "100kva 초과~250kva 이하"] },
  { code: "통신 11-4-1", name: "250kVA초과~500kVA 이하", spec: "", unit: "대", labors: {"통신설비공": 8.0, "보통인부": 5.0}, category: "device", page: 409, keywords: ["무정전 전원장치(ups, cvcf)", "250kva초과~500kva 이하"] },
  { code: "통신 11-4-1", name: "원격감시 및 제어 S/W설치", spec: "", unit: "식", labors: {"S/W시험사": 0.58}, category: "device", page: 409, keywords: ["무정전 전원장치(ups, cvcf)", "원격감시 및 제어 s/w설치"] },
  { code: "통신 11-5-1", name: "접지봉 타설", spec: "길이 1~2m × 1본", unit: "개", labors: {"통신외선공": 0.2, "보통인부": 0.1}, category: "device", page: 410, keywords: ["길이 1~2m × 1본", "접지봉 타설", "접지시설"] },
  { code: "통신 11-5-1", name: "접지봉 타설", spec: "× 2본 연결", unit: "개", labors: {"통신외선공": 0.3, "보통인부": 0.15}, category: "device", page: 410, keywords: ["접지시설", "접지봉 타설", "× 2본 연결"] },
  { code: "통신 11-5-1", name: "접지봉 타설", spec: "× 3본 연결", unit: "개", labors: {"통신외선공": 0.45, "보통인부": 0.23}, category: "device", page: 410, keywords: ["접지봉 타설", "× 3본 연결", "접지시설"] },
  { code: "통신 11-5-1", name: "접지동판 매설", spec: "0.3m × 0.3m 이하", unit: "매", labors: {"통신외선공": 0.3, "보통인부": 0.3}, category: "device", page: 410, keywords: ["0.3m × 0.3m 이하", "접지동판 매설", "접지시설"] },
  { code: "통신 11-5-1", name: "접지동판 매설", spec: "1.0m × 1.5m 이하", unit: "매", labors: {"통신외선공": 0.5, "보통인부": 0.5}, category: "device", page: 410, keywords: ["접지동판 매설", "1.0m × 1.5m 이하", "접지시설"] },
  { code: "통신 11-5-1", name: "접지동판 매설", spec: "1.0m × 2.5m 이하", unit: "매", labors: {"통신외선공": 0.8, "보통인부": 0.8}, category: "device", page: 410, keywords: ["접지동판 매설", "1.0m × 2.5m 이하", "접지시설"] },
  { code: "통신 11-5-1", name: "망형접지동판", spec: "롤형", unit: "20m", labors: {"통신외선공": 0.26, "보통인부": 0.26}, category: "device", page: 410, keywords: ["망형접지동판", "롤형", "접지시설"] },
  { code: "통신 11-5-1", name: "매설", spec: "판형", unit: "매", labors: {"통신외선공": 0.06, "보통인부": 0.06}, category: "device", page: 410, keywords: ["접지시설", "판형", "매설"] },
  { code: "통신 11-5-1", name: "매설", spec: "테두리보강형", unit: "매", labors: {"통신외선공": 0.07, "보통인부": 0.07}, category: "device", page: 410, keywords: ["접지시설", "테두리보강형", "매설"] },
  { code: "통신 11-5-1", name: "접지동판 가공", spec: "-", unit: "매", labors: {"통신외선공": 0.16}, category: "device", page: 410, keywords: ["접지동판 가공", "접지시설"] },
  { code: "통신 11-5-1", name: "탄소봉매설", spec: "φ 150× 1,000미만", unit: "개", labors: {"통신외선공": 0.27, "보통인부": 0.46}, category: "device", page: 410, keywords: ["φ 150× 1,000미만", "탄소봉매설", "접지시설"] },
  { code: "통신 11-5-1", name: "(지하 1.5m 기준)", spec: "φ 150× 1,000이상", unit: "개", labors: {"통신외선공": 0.43, "보통인부": 0.73}, category: "device", page: 410, keywords: ["φ 150× 1,000이상", "(지하 1.5m 기준)", "접지시설"] },
  { code: "통신 11-5-1", name: "(지하 1.5m 기준)", spec: "φ 300× 1,000미만", unit: "개", labors: {"통신외선공": 0.59, "보통인부": 1.0}, category: "device", page: 410, keywords: ["φ 300× 1,000미만", "(지하 1.5m 기준)", "접지시설"] },
  { code: "통신 11-5-1", name: "접지선 부설", spec: "600V 비닐전선", unit: "10개소", labors: {"통신외선공": 0.5, "보통인부": 0.25}, category: "device", page: 410, keywords: ["600v 비닐전선", "접지시설", "접지선 부설"] },
  { code: "통신 11-5-1", name: "접지선 매설", spec: "10㎟ 이하", unit: "10m", labors: {"통신외선공": 0.1}, category: "device", page: 410, keywords: ["접지선 매설", "10㎟ 이하", "접지시설"] },
  { code: "통신 11-5-1", name: "접지선 매설", spec: "35㎟ 이하", unit: "10m", labors: {"통신외선공": 0.12}, category: "device", page: 410, keywords: ["접지선 매설", "접지시설", "35㎟ 이하"] },
  { code: "통신 11-5-1", name: "접지선 매설", spec: "95㎟ 이하", unit: "10m", labors: {"통신외선공": 0.15}, category: "device", page: 410, keywords: ["95㎟ 이하", "접지선 매설", "접지시설"] },
  { code: "통신 11-5-1", name: "접지선 매설", spec: "150㎟ 이하", unit: "10m", labors: {"통신외선공": 0.2}, category: "device", page: 410, keywords: ["접지선 매설", "150㎟ 이하", "접지시설"] },
  { code: "통신 11-5-1", name: "접지선 매설", spec: "150㎟ 초과", unit: "10m", labors: {"통신외선공": 0.25}, category: "device", page: 410, keywords: ["접지선 매설", "150㎟ 초과", "접지시설"] },
  { code: "통신 11-5-1", name: "접속 및 단자", spec: "C형 및 원형 슬리브", unit: "개", labors: {"통신외선공": 0.1}, category: "device", page: 410, keywords: ["c형 및 원형 슬리브", "접속 및 단자", "접지시설"] },
  { code: "통신 11-5-1", name: "설 치", spec: "압착단자", unit: "개", labors: {"통신외선공": 0.03}, category: "device", page: 410, keywords: ["설 치", "압착단자", "접지시설"] },
  { code: "통신 11-5-1", name: "설 치", spec: "용접(발열) 또는 납땜", unit: "개", labors: {"통신외선공": 0.19}, category: "device", page: 410, keywords: ["용접(발열) 또는 납땜", "설 치", "접지시설"] },
  { code: "통신 11-5-1", name: "설 치", spec: "볼트 체결형", unit: "개", labors: {"통신외선공": 0.05}, category: "device", page: 410, keywords: ["접지시설", "설 치", "볼트 체결형"] },
  { code: "통신 11-5-1", name: "접지 단자함", spec: "-", unit: "개", labors: {"통신내선공": 0.66}, category: "device", page: 410, keywords: ["접지 단자함", "접지시설"] },
  { code: "통신 11-5-2-1", name: "대지고유저항 측정", spec: "", unit: "Point", labors: {"통신관련산업기사": 0.33}, category: "device", page: 411, keywords: ["대지고유저항 측정 및 분석", "대지고유저항 측정"] },
  { code: "통신 11-5-2-1", name: "분석", spec: "", unit: "Point", labors: {"통신관련산업기사": 0.25}, category: "device", page: 411, keywords: ["분석", "대지고유저항 측정 및 분석"] },
  { code: "통신 11-5-2-2", name: "매설물 탐지", spec: "맨 홀", unit: "개소", labors: {"통신관련산업기사": 0.46, "특별인부": 0.92}, category: "device", page: 411, keywords: ["매설물 탐지", "맨 홀"] },
  { code: "통신 11-5-2-2", name: "매설물 탐지", spec: "맨홀외", unit: "개소", labors: {"통신관련산업기사": 0.13, "특별인부": 0.26}, category: "device", page: 411, keywords: ["매설물 탐지", "맨홀외"] },
  { code: "통신 11-5-2-3", name: "보 링 공 [수량]", spec: "", unit: "인", labors: {"보통인부": 1.0}, category: "device", page: 412, keywords: ["보 링 공 [수량]", "기계기구 설치"] },
  { code: "통신 11-5-2-3", name: "특 별 인 부 [수량]", spec: "", unit: "인", labors: {"보통인부": 1.0}, category: "device", page: 412, keywords: ["기계기구 설치", "특 별 인 부 [수량]"] },
  { code: "통신 11-5-2-3", name: "보 통 인 부 [수량]", spec: "", unit: "인", labors: {"보통인부": 1.0}, category: "device", page: 412, keywords: ["기계기구 설치", "보 통 인 부 [수량]"] },
  { code: "통신 11-5-2-4", name: "천 공", spec: "Ø 75", unit: "m", labors: {"통신외선공": 0.08}, category: "device", page: 412, keywords: ["천 공", "보링(천공)", "ø 75"] },
  { code: "통신 11-5-2-4", name: "천 공", spec: "Ø100", unit: "m", labors: {"통신외선공": 0.1}, category: "device", page: 412, keywords: ["천 공", "보링(천공)", "ø100"] },
  { code: "통신 11-5-2-4", name: "천 공", spec: "Ø150", unit: "m", labors: {"통신외선공": 0.12}, category: "device", page: 412, keywords: ["천 공", "보링(천공)", "ø150"] },
  { code: "통신 11-5-2-4", name: "천 공", spec: "Ø200", unit: "m", labors: {"통신외선공": 0.15}, category: "device", page: 412, keywords: ["천 공", "보링(천공)", "ø200"] },
  { code: "통신 11-5-2-4", name: "케 이 싱 설 치", spec: "", unit: "m", labors: {"통신외선공": 0.25}, category: "device", page: 412, keywords: ["보링(천공)", "케 이 싱 설 치"] },
  { code: "통신 11-5-2-5", name: "접지전극(봉) 설치", spec: "", unit: "m", labors: {"통신외선공": 0.06}, category: "device", page: 413, keywords: ["저감제 주입 및 접지저항 측정", "접지전극(봉) 설치"] },
  { code: "통신 11-5-2-5", name: "접지선 인출", spec: "95㎟초과", unit: "10m", labors: {"통신외선공": 0.19}, category: "device", page: 413, keywords: ["저감제 주입 및 접지저항 측정", "95㎟초과", "접지선 인출"] },
  { code: "통신 11-5-2-5", name: "접지선 인출", spec: "95㎟이하", unit: "10m", labors: {"통신외선공": 0.13}, category: "device", page: 413, keywords: ["저감제 주입 및 접지저항 측정", "접지선 인출", "95㎟이하"] },
  { code: "통신 11-5-2-5", name: "저감제 주입", spec: "모르타르 형태", unit: "m", labors: {"통신외선공": 0.11}, category: "device", page: 413, keywords: ["저감제 주입 및 접지저항 측정", "저감제 주입", "모르타르 형태"] },
  { code: "통신 11-5-2-5", name: "저감제 주입", spec: "젤 형태", unit: "m", labors: {"통신외선공": 0.09}, category: "device", page: 413, keywords: ["저감제 주입 및 접지저항 측정", "저감제 주입", "젤 형태"] },
  { code: "통신 11-5-2-5", name: "접지저항 측정(3점)", spec: "", unit: "개소", labors: {"통신관련산업기사": 0.18}, category: "device", page: 413, keywords: ["저감제 주입 및 접지저항 측정", "접지저항 측정(3점)"] },
  { code: "통신 11-6-1", name: "피뢰침설치 높이 7.5m 이하", spec: "피뢰기 직류 1,500V용", unit: "개", labors: {"통신외선공": 0.18}, category: "device", page: 414, keywords: ["피뢰기 직류 1,500v용", "피뢰침 및 피뢰기", "피뢰침설치 높이 7.5m 이하"] },
  { code: "통신 11-6-1", name: "10m", spec: "교류 3~11kV용", unit: "개", labors: {"통신외선공": 0.13}, category: "device", page: 414, keywords: ["피뢰침 및 피뢰기", "10m", "교류 3~11kv용"] },
  { code: "통신 11-6-1", name: "15m", spec: "“ 22.9kV용", unit: "개", labors: {"통신외선공": 0.11}, category: "device", page: 414, keywords: ["피뢰침 및 피뢰기", "“ 22.9kv용", "15m"] },
  { code: "통신 11-6-1", name: "20m", spec: "“ 22.9kV용", unit: "개", labors: {"통신외선공": 1.5}, category: "device", page: 414, keywords: ["20m", "피뢰침 및 피뢰기", "“ 22.9kv용"] },
  { code: "통신 11-6-1", name: "25m", spec: "“ 22.9kV용", unit: "개", labors: {"통신외선공": 1.8}, category: "device", page: 414, keywords: ["피뢰침 및 피뢰기", "25m", "“ 22.9kv용"] },
  { code: "통신 11-6-1", name: "30m", spec: "“ 22.9kV용", unit: "개", labors: {"통신외선공": 2.11}, category: "device", page: 414, keywords: ["피뢰침 및 피뢰기", "“ 22.9kv용", "30m"] },
  { code: "통신 11-6-1", name: "35m", spec: "“ 22.9kV용", unit: "개", labors: {"통신외선공": 2.42}, category: "device", page: 414, keywords: ["35m", "“ 22.9kv용", "피뢰침 및 피뢰기"] },
  { code: "통신 11-6-1", name: "40m", spec: "“ 22.9kV용", unit: "개", labors: {"통신외선공": 2.73}, category: "device", page: 414, keywords: ["40m", "피뢰침 및 피뢰기", "“ 22.9kv용"] },
  { code: "통신 11-6-2", name: "서지보호기용 외함 설치(300 x 300)", spec: "", unit: "대", labors: {"통신내선공": 0.11}, category: "device", page: 414, keywords: ["서지보호기용 외함 설치(300 x 300)", "서지보호기(spd)"] },
  { code: "통신 11-6-2", name: "전원용", spec: "", unit: "개", labors: {"통신내선공": 0.24}, category: "device", page: 414, keywords: ["서지보호기(spd)", "전원용"] },
  { code: "통신 11-6-2", name: "통신용(데이터, 영상)", spec: "", unit: "개", labors: {"통신내선공": 0.14}, category: "device", page: 414, keywords: ["통신용(데이터, 영상)", "서지보호기(spd)"] },
  { code: "통신 11-6-3", name: "차폐판", spec: "천장", unit: "㎡", labors: {"통신외선공": 0.2, "통신설비공": 0.65, "특별인부": 0.16}, category: "device", page: 415, keywords: ["천장", "전자기펄스(emp) 방호설비", "차폐판"] },
  { code: "통신 11-6-3", name: "허니컴", spec: "600㎜x600㎜x3/16“이하", unit: "대", labors: {"통신설비공": 0.39}, category: "device", page: 415, keywords: ["전자기펄스(emp) 방호설비", "600㎜x600㎜x3/16“이하", "허니컴"] },
  { code: "통신 11-6-3", name: "차폐필터", spec: "300㎜x90㎜x45㎜ 이하", unit: "대", labors: {"통신설비공": 0.3}, category: "device", page: 415, keywords: ["전자기펄스(emp) 방호설비", "300㎜x90㎜x45㎜ 이하", "차폐필터"] },
  { code: "통신 11-7-1", name: "1kva이하", spec: "운반 및 설치", unit: "대", labors: {"통신설비공": 0.13, "보통인부": 0.13}, category: "device", page: 416, keywords: ["자동전압 조정기", "1kva이하", "운반 및 설치"] },
  { code: "통신 11-7-1", name: "1kva이하", spec: "결선 및 조정시험", unit: "대", labors: {"통신설비공": 0.28, "보통인부": 0.28}, category: "device", page: 416, keywords: ["결선 및 조정시험", "1kva이하", "자동전압 조정기"] },
  { code: "통신 11-7-1", name: "10kva이하", spec: "운반 및 설치", unit: "개", labors: {"통신내선공": 0.6, "통신설비공": 1.5, "보통인부": 0.9}, category: "device", page: 416, keywords: ["자동전압 조정기", "10kva이하", "운반 및 설치"] },
  { code: "통신 11-7-1", name: "10kva이하", spec: "결선 및 조정시험", unit: "개", labors: {"통신내선공": 0.4, "통신설비공": 1.0, "보통인부": 0.6}, category: "device", page: 416, keywords: ["결선 및 조정시험", "10kva이하", "자동전압 조정기"] },
  { code: "통신 11-7-1", name: "50kva이하", spec: "운반 및 설치", unit: "개", labors: {"통신내선공": 0.6, "통신설비공": 1.5, "보통인부": 0.9}, category: "device", page: 416, keywords: ["자동전압 조정기", "운반 및 설치", "50kva이하"] },
  { code: "통신 11-7-1", name: "50kva이하", spec: "결선 및 조정시험", unit: "개", labors: {"통신내선공": 0.6, "통신설비공": 1.5, "보통인부": 0.9}, category: "device", page: 416, keywords: ["자동전압 조정기", "결선 및 조정시험", "50kva이하"] },
  { code: "통신 11-7-1", name: "100kva이하", spec: "운반 및 설치", unit: "개", labors: {"통신내선공": 1.0, "통신설비공": 2.5, "보통인부": 1.5}, category: "device", page: 416, keywords: ["자동전압 조정기", "운반 및 설치", "100kva이하"] },
  { code: "통신 11-7-1", name: "100kva이하", spec: "결선 및 조정시험", unit: "개", labors: {"통신내선공": 0.8, "통신설비공": 2.0, "보통인부": 1.2}, category: "device", page: 416, keywords: ["결선 및 조정시험", "자동전압 조정기", "100kva이하"] },
  { code: "통신 11-7-1", name: "500kva이하", spec: "운반 및 설치", unit: "개", labors: {"통신내선공": 1.8, "통신설비공": 4.5, "보통인부": 2.7}, category: "device", page: 416, keywords: ["자동전압 조정기", "운반 및 설치", "500kva이하"] },
  { code: "통신 11-7-1", name: "500kva이하", spec: "조작반설치", unit: "개", labors: {"통신내선공": 1.2, "통신설비공": 3.0, "보통인부": 1.8}, category: "device", page: 416, keywords: ["자동전압 조정기", "조작반설치", "500kva이하"] },
  { code: "통신 11-7-1", name: "500kva이하", spec: "결선 및 조정시험", unit: "개", labors: {"통신내선공": 1.2, "통신설비공": 3.0, "보통인부": 1.8}, category: "device", page: 416, keywords: ["자동전압 조정기", "결선 및 조정시험", "500kva이하"] },
  { code: "통신 11-7-1", name: "1,200kva이하", spec: "운반 및 설치", unit: "개", labors: {"통신내선공": 2.4, "통신설비공": 6.0, "보통인부": 3.6}, category: "device", page: 416, keywords: ["자동전압 조정기", "운반 및 설치", "1,200kva이하"] },
  { code: "통신 11-7-1", name: "1,200kva이하", spec: "조작반설치", unit: "개", labors: {"통신내선공": 1.2, "통신설비공": 3.0, "보통인부": 1.8}, category: "device", page: 416, keywords: ["자동전압 조정기", "조작반설치", "1,200kva이하"] },
  { code: "통신 11-7-1", name: "1,200kva이하", spec: "결선 및 조정시험", unit: "개", labors: {"통신내선공": 1.6, "통신설비공": 4.0, "보통인부": 2.4}, category: "device", page: 416, keywords: ["자동전압 조정기", "결선 및 조정시험", "1,200kva이하"] },
  { code: "통신 11-7-4", name: "30AF 이하", spec: "개", unit: "개", labors: {"통신설비공": 0.38}, category: "device", page: 417, keywords: ["30af 이하", "분전반"] },
  { code: "통신 11-7-4", name: "50", spec: "개", unit: "개", labors: {"통신설비공": 0.48}, category: "device", page: 417, keywords: ["50", "분전반"] },
  { code: "통신 11-7-4", name: "100", spec: "개", unit: "개", labors: {"통신설비공": 0.65}, category: "device", page: 417, keywords: ["100", "분전반"] },
  { code: "통신 11-7-4", name: "225", spec: "개", unit: "개", labors: {"통신설비공": 0.82}, category: "device", page: 417, keywords: ["225", "분전반"] },
  { code: "통신 11-7-5-1", name: "30AF 이하", spec: "", unit: "개", labors: {"통신내선공": 0.19}, category: "device", page: 418, keywords: ["차단기 및 개폐기 등", "30af 이하"] },
  { code: "통신 11-7-5-1", name: "50", spec: "", unit: "개", labors: {"통신내선공": 0.26}, category: "device", page: 418, keywords: ["차단기 및 개폐기 등", "50"] },
  { code: "통신 11-7-5-1", name: "100", spec: "", unit: "개", labors: {"통신내선공": 0.36}, category: "device", page: 418, keywords: ["차단기 및 개폐기 등", "100"] },
  { code: "통신 11-7-5-1", name: "225", spec: "", unit: "개", labors: {"통신내선공": 0.47}, category: "device", page: 418, keywords: ["차단기 및 개폐기 등", "225"] },
  { code: "통신 11-7-5-2", name: "1,500A 이하", spec: "", unit: "대", labors: {"통신내선공": 1.84}, category: "device", page: 418, keywords: ["1,500a 이하", "저압 자동절체 스위치"] },
  { code: "통신 11-7-5-2", name: "1,500A 초과 ~ 3,000A", spec: "", unit: "대", labors: {"통신내선공": 2.08}, category: "device", page: 418, keywords: ["1,500a 초과 ~ 3,000a", "저압 자동절체 스위치"] },
  { code: "통신 11-7-5-2", name: "3,000A초과 ~ 5,000A까지", spec: "", unit: "대", labors: {"통신내선공": 2.4}, category: "device", page: 418, keywords: ["3,000a초과 ~ 5,000a까지", "저압 자동절체 스위치"] },
  { code: "통신 12-1-1", name: "연선전화", spec: "", unit: "개", labors: {"통신설비공": 0.48, "통신케이블공": 0.52}, category: "device", page: 421, keywords: ["연선전화", "통화장치"] },
  { code: "통신 12-1-1", name: "건널목", spec: "주장치 및 전원장치", unit: "개", labors: {"통신설비공": 1.13}, category: "device", page: 421, keywords: ["건널목", "통화장치", "주장치 및 전원장치"] },
  { code: "통신 12-1-1", name: "비상직통전화", spec: "자장치", unit: "개", labors: {"통신외선공": 0.35, "통신케이블공": 0.56}, category: "device", page: 421, keywords: ["비상직통전화", "통화장치", "자장치"] },
  { code: "통신 12-1-1", name: "비상게이트", spec: "주장치", unit: "개", labors: {"통신설비공": 0.75, "통신케이블공": 0.83}, category: "device", page: 421, keywords: ["비상게이트", "주장치", "통화장치"] },
  { code: "통신 12-1-1", name: "통화장치", spec: "자장치 및 게이트", unit: "개", labors: {"통신설비공": 2.19, "통신케이블공": 2.5}, category: "device", page: 421, keywords: ["자장치 및 게이트", "통화장치"] },
  { code: "통신 12-1-1", name: "통화장치", spec: "모니터 및 인터폰", unit: "개", labors: {"통신설비공": 0.5, "통신케이블공": 0.25}, category: "device", page: 421, keywords: ["모니터 및 인터폰", "통화장치"] },
  { code: "통신 12-2-1", name: "보안기", spec: "세렉타", unit: "개", labors: {"통신내선공": 0.2}, category: "device", page: 422, keywords: ["기기신설", "세렉타", "보안기"] },
  { code: "통신 12-2-1", name: "전화기 자석", spec: "포 함", unit: "개", labors: {"통신내선공": 0.3}, category: "device", page: 422, keywords: ["전화기 자석", "포 함", "기기신설"] },
  { code: "통신 12-2-1", name: "전화기 공전", spec: "보안기", unit: "개", labors: {"통신내선공": 0.2}, category: "device", page: 422, keywords: ["기기신설", "전화기 공전", "보안기"] },
  { code: "통신 12-2-1", name: "자동", spec: "접지", unit: "개", labors: {"통신내선공": 0.04}, category: "device", page: 422, keywords: ["기기신설", "접지", "자동"] },
  { code: "통신 12-2-1", name: "개별", spec: "제외", unit: "개", labors: {"통신내선공": 0.5}, category: "device", page: 422, keywords: ["기기신설", "제외", "개별"] },
  { code: "통신 12-2-1", name: "지령", spec: "제외", unit: "개", labors: {"통신내선공": 0.5}, category: "device", page: 422, keywords: ["기기신설", "지령", "제외"] },
  { code: "통신 12-2-1", name: "방폭형 전화기", spec: "제외", unit: "개", labors: {"통신내선공": 0.5}, category: "device", page: 422, keywords: ["기기신설", "방폭형 전화기", "제외"] },
  { code: "통신 12-2-1", name: "강력전화기(유도방지장치 포함)", spec: "제외", unit: "개", labors: {"통신내선공": 1.0}, category: "device", page: 422, keywords: ["강력전화기(유도방지장치 포함)", "제외", "기기신설"] },
  { code: "통신 12-2-1", name: "방수, 방폭, 방진, 함체", spec: "제외", unit: "개", labors: {"통신내선공": 0.5}, category: "device", page: 422, keywords: ["기기신설", "방수, 방폭, 방진, 함체", "제외"] },
  { code: "통신 12-2-1", name: "전환기", spec: "제외", unit: "개", labors: {"통신내선공": 0.15}, category: "device", page: 422, keywords: ["기기신설", "제외", "전환기"] },
  { code: "통신 12-2-1", name: "운전지령장치(모장치)", spec: "제외", unit: "개", labors: {"통신내선공": 11.0}, category: "device", page: 422, keywords: ["기기신설", "제외", "운전지령장치(모장치)"] },
  { code: "통신 12-2-1", name: "“ (자장치)", spec: "제외", unit: "개", labors: {"통신내선공": 1.5}, category: "device", page: 422, keywords: ["기기신설", "제외", "“ (자장치)"] },
  { code: "통신 12-2-1", name: "Dial", spec: "제외", unit: "개", labors: {"통신내선공": 0.15}, category: "device", page: 422, keywords: ["기기신설", "dial", "제외"] },
  { code: "통신 12-2-1", name: "부저", spec: "제외", unit: "개", labors: {"통신내선공": 0.08}, category: "device", page: 422, keywords: ["기기신설", "부저", "제외"] },
  { code: "통신 12-2-1", name: "전령 100㎜ ~ 200㎜", spec: "제외", unit: "개", labors: {"통신내선공": 0.16}, category: "device", page: 422, keywords: ["기기신설", "전령 100㎜ ~ 200㎜", "제외"] },
  { code: "통신 12-2-1", name: "모터싸이렌(마그넷싸이렌 포함)", spec: "제외", unit: "개", labors: {"통신내선공": 1.6}, category: "device", page: 422, keywords: ["모터싸이렌(마그넷싸이렌 포함)", "기기신설", "제외"] },
  { code: "통신 12-2-1", name: "누름단추 옥외용 고성전화기", spec: "제외", unit: "개", labors: {"통신내선공": 0.16}, category: "device", page: 422, keywords: ["누름단추 옥외용 고성전화기", "제외", "기기신설"] },
  { code: "통신 12-2-1", name: "확성기연락용", spec: "제외", unit: "개", labors: {"통신내선공": 0.7}, category: "device", page: 422, keywords: ["기기신설", "제외", "확성기연락용"] },
  { code: "통신 12-2-1", name: "3권변성기", spec: "제외", unit: "개", labors: {"통신내선공": 3.0}, category: "device", page: 422, keywords: ["3권변성기", "기기신설", "제외"] },
  { code: "통신 12-2-1", name: "통표폐쇄기", spec: "제외", unit: "개", labors: {"통신내선공": 3.7, "보통인부": 1.25}, category: "device", page: 422, keywords: ["기기신설", "제외", "통표폐쇄기"] },
  { code: "통신 12-2-1", name: "인터폰", spec: "제외", unit: "개", labors: {"통신설비공": 1.2, "통신내선공": 0.06}, category: "device", page: 422, keywords: ["기기신설", "인터폰", "제외"] },
  { code: "통신 12-2-1", name: "인터폰 교환장치", spec: "제외", unit: "개", labors: {"통신설비공": 2.0}, category: "device", page: 422, keywords: ["인터폰 교환장치", "기기신설", "제외"] },
  { code: "통신 12-2-1", name: "간이교환장치", spec: "제외", unit: "개", labors: {"통신설비공": 2.0, "통신내선공": 2.0}, category: "device", page: 422, keywords: ["기기신설", "간이교환장치", "제외"] },
  { code: "통신 12-2-1", name: "주장치 20회로 이하", spec: "제외", unit: "개", labors: {"통신설비공": 0.52, "통신내선공": 1.0}, category: "device", page: 422, keywords: ["기기신설", "주장치 20회로 이하", "제외"] },
  { code: "통신 12-2-1", name: "10회로 이하", spec: "제외", unit: "개", labors: {"통신설비공": 0.62, "보통인부": 0.27}, category: "device", page: 422, keywords: ["기기신설", "제외", "10회로 이하"] },
  { code: "통신 12-2-1", name: "전기형", spec: "제외", unit: "개", labors: {"보통인부": 0.32}, category: "device", page: 422, keywords: ["기기신설", "전기형", "제외"] },
  { code: "통신 12-2-2-1", name: "주제어장치", spec: "", unit: "개", labors: {"H/W시험사": 2.1, "S/W시험사": 0.82}, category: "device", page: 423, keywords: ["주제어장치", "지상장치"] },
  { code: "통신 12-2-2-1", name: "RF신호 송수신장치 (ODU : Out Door Unit)", spec: "", unit: "개", labors: {"H/W시험사": 1.8, "특별인부": 1.76}, category: "device", page: 423, keywords: ["지상장치", "rf신호 송수신장치 (odu : out door unit)"] },
  { code: "통신 12-2-2-2", name: "영상신호 변환장치 (IDU : In Door Unit)", spec: "", unit: "개", labors: {"H/W시험사": 1.58, "통신케이블공": 1.5}, category: "device", page: 424, keywords: ["영상신호 변환장치 (idu : in door unit)", "차상장치"] },
  { code: "통신 12-2-2-2", name: "RF신호 송수신장치 (ODU : Out Door Unit)", spec: "", unit: "개", labors: {"H/W시험사": 1.34, "통신케이블공": 1.16}, category: "device", page: 424, keywords: ["차상장치", "rf신호 송수신장치 (odu : out door unit)"] },
  { code: "통신 12-2-2-2", name: "영상 표시부", spec: "", unit: "개", labors: {"통신설비공": 1.34, "통신케이블공": 1.42}, category: "device", page: 424, keywords: ["차상장치", "영상 표시부"] },
  { code: "통신 12-2-2-3", name: "주제어장치", spec: "", unit: "개", labors: {"H/W시험사": 3.4, "S/W시험사": 1.0}, category: "device", page: 424, keywords: ["주제어장치", "사령장치"] },
  { code: "통신 12-2-2-3", name: "원격감시장치", spec: "", unit: "개", labors: {"H/W시험사": 3.66, "S/W시험사": 1.0}, category: "device", page: 424, keywords: ["원격감시장치", "사령장치"] },
  { code: "통신 12-2-2-3", name: "스위치", spec: "", unit: "개", labors: {"H/W시험사": 2.8, "S/W시험사": 0.8}, category: "device", page: 424, keywords: ["스위치", "사령장치"] },
  { code: "통신 12-2-2-4", name: "종합시험", spec: "", unit: "개", labors: {"H/W시험사": 2.05, "S/W시험사": 1.26}, category: "device", page: 425, keywords: ["종합시험", "최적화 작업"] },
  { code: "통신 12-2-2-4", name: "데이터 분석", spec: "", unit: "개", labors: {"H/W시험사": 3.52, "S/W시험사": 2.27}, category: "device", page: 425, keywords: ["최적화 작업", "데이터 분석"] },
  { code: "통신 12-2-2-4", name: "주파수 출력 조정", spec: "", unit: "개", labors: {"H/W시험사": 3.44, "S/W시험사": 1.8}, category: "device", page: 425, keywords: ["최적화 작업", "주파수 출력 조정"] },
  { code: "통신 12-2-3", name: "모시계(또는 부모시계)", spec: "", unit: "개", labors: {"통신내선공": 4.1}, category: "device", page: 425, keywords: ["모시계(또는 부모시계)", "전기시계설비"] },
  { code: "통신 12-2-3", name: "자시계", spec: "단면", unit: "개", labors: {"통신내선공": 0.55}, category: "device", page: 425, keywords: ["단면", "전기시계설비", "자시계"] },
  { code: "통신 12-2-4", name: "공통", spec: "지지물", unit: "조", labors: {"통신설비공": 2.5}, category: "device", page: 426, keywords: ["공통", "지지물", "열차행선 안내게시기"] },
  { code: "통신 12-2-4", name: "LED", spec: "제어부", unit: "대", labors: {"통신관련산업기사": 1.5}, category: "device", page: 426, keywords: ["led", "제어부", "열차행선 안내게시기"] },
  { code: "통신 12-2-4", name: "방식", spec: "표시부", unit: "대", labors: {"통신관련산업기사": 1.0, "통신설비공": 0.25}, category: "device", page: 426, keywords: ["방식", "표시부", "열차행선 안내게시기"] },
  { code: "통신 12-2-4", name: "방식", spec: "전원부", unit: "대", labors: {"통신관련산업기사": 0.9, "통신설비공": 0.25}, category: "device", page: 426, keywords: ["방식", "전원부", "열차행선 안내게시기"] },
  { code: "통신 12-2-4", name: "방식", spec: "함 체", unit: "대", labors: {"통신설비공": 0.3}, category: "device", page: 426, keywords: ["함 체", "방식", "열차행선 안내게시기"] },
  { code: "통신 12-2-4", name: "LCD", spec: "지하", unit: "세트", labors: {"통신설비공": 0.5}, category: "device", page: 426, keywords: ["lcd", "지하", "열차행선 안내게시기"] },
  { code: "통신 12-2-4", name: "방식", spec: "함체", unit: "대", labors: {"통신설비공": 0.75}, category: "device", page: 426, keywords: ["방식", "함체", "열차행선 안내게시기"] },
  { code: "통신 12-2-4", name: "방식", spec: "지상", unit: "대", labors: {"광케이블설치사": 0.6, "통신설비공": 0.6}, category: "device", page: 426, keywords: ["방식", "지상", "열차행선 안내게시기"] },
  { code: "통신 12-2-4", name: "방식", spec: "LCD, 셋톱박스, OPC", unit: "대", labors: {"통신관련산업기사": 0.4, "통신설비공": 0.4}, category: "device", page: 426, keywords: ["방식", "lcd, 셋톱박스, opc", "열차행선 안내게시기"] },
  { code: "통신 12-2-4", name: "종합정보 플랫폼 표출장치", spec: "모니터, 셋톱박스", unit: "세트", labors: {"통신설비공": 1.05}, category: "device", page: 426, keywords: ["열차행선 안내게시기", "종합정보 플랫폼 표출장치", "모니터, 셋톱박스"] },
  { code: "통신 12-2-4", name: "국부역", spec: "본체설치", unit: "대", labors: {"H/W시험사": 0.42}, category: "device", page: 426, keywords: ["국부역", "본체설치", "열차행선 안내게시기"] },
  { code: "통신 12-2-4", name: "장 치", spec: "S/W설치", unit: "식", labors: {"S/W시험사": 0.94}, category: "device", page: 426, keywords: ["s/w설치", "장 치", "열차행선 안내게시기"] },
  { code: "통신 12-2-4", name: "장 치", spec: "종합시험", unit: "식", labors: {"S/W시험사": 0.28}, category: "device", page: 426, keywords: ["종합시험", "장 치", "열차행선 안내게시기"] },
  { code: "통신 12-2-4", name: "중앙서버 환경설정 변경", spec: "", unit: "역사당", labors: {"S/W시험사": 0.28}, category: "device", page: 426, keywords: ["중앙서버 환경설정 변경", "열차행선 안내게시기"] },
  { code: "통신 12-2-5", name: "영상표출장치 설치", spec: "", unit: "대", labors: {"통신관련산업기사": 0.64, "통신설비공": 0.64}, category: "device", page: 427, keywords: ["영상표출장치 설치", "영상표출장치"] },
  { code: "통신 12-2-6", name: "장애인용 음성유도기", spec: "", unit: "대", labors: {"통신설비공": 0.17, "보통인부": 0.15}, category: "device", page: 427, keywords: ["장애인용 음성유도기"] },
  { code: "통신 12-3-1", name: "설치", spec: "포 장 해 체", unit: "10대", labors: {"통신설비공": 1.0, "보통인부": 1.0}, category: "device", page: 428, keywords: ["승차권 자동 개‧집표기(gate)", "포 장 해 체", "설치"] },
  { code: "통신 12-3-1", name: "설치", spec: "장 비 거 치", unit: "10대", labors: {"통신설비공": 5.0, "보통인부": 5.0}, category: "device", page: 428, keywords: ["장 비 거 치", "승차권 자동 개‧집표기(gate)", "설치"] },
  { code: "통신 12-3-1", name: "설치", spec: "세트조립 및 커넥터 결선", unit: "10대", labors: {"통신관련산업기사": 2.0, "통신설비공": 3.0, "보통인부": 1.0}, category: "device", page: 428, keywords: ["승차권 자동 개‧집표기(gate)", "세트조립 및 커넥터 결선", "설치"] },
  { code: "통신 12-3-1", name: "설치", spec: "전원접지 및 결선", unit: "10대", labors: {"통신케이블공": 2.5, "보통인부": 1.25}, category: "device", page: 428, keywords: ["전원접지 및 결선", "승차권 자동 개‧집표기(gate)", "설치"] },
  { code: "통신 12-3-1", name: "기계", spec: "콘솔커버와승차권이송기위치조정", unit: "대", labors: {"통신설비공": 0.15, "보통인부": 0.1}, category: "device", page: 428, keywords: ["콘솔커버와승차권이송기위치조정", "승차권 자동 개‧집표기(gate)", "기계"] },
  { code: "통신 12-3-1", name: "분야", spec: "전원공급장치조정", unit: "개", labors: {"통신설비공": 0.1}, category: "device", page: 428, keywords: ["승차권 자동 개‧집표기(gate)", "전원공급장치조정", "분야"] },
  { code: "통신 12-3-1", name: "조정", spec: "온도조절장치 가동시험", unit: "개", labors: {"통신설비공": 0.1}, category: "device", page: 428, keywords: ["승차권 자동 개‧집표기(gate)", "온도조절장치 가동시험", "조정"] },
  { code: "통신 12-3-1", name: "조정", spec: "기계분야 조정", unit: "대", labors: {"통신설비공": 0.4}, category: "device", page: 428, keywords: ["기계분야 조정", "승차권 자동 개‧집표기(gate)", "조정"] },
  { code: "통신 12-3-1", name: "조정", spec: "RF감도 조정", unit: "대", labors: {"통신관련산업기사": 0.06}, category: "device", page: 428, keywords: ["승차권 자동 개‧집표기(gate)", "rf감도 조정", "조정"] },
  { code: "통신 12-3-1", name: "조정", spec: "플립모듈 조정", unit: "대", labors: {"통신설비공": 0.11}, category: "device", page: 428, keywords: ["플립모듈 조정", "승차권 자동 개‧집표기(gate)", "조정"] },
  { code: "통신 12-3-1", name: "조정", spec: "프로그램 세팅", unit: "대", labors: {"통신관련산업기사": 0.1, "통신설비공": 0.1}, category: "device", page: 428, keywords: ["프로그램 세팅", "승차권 자동 개‧집표기(gate)", "조정"] },
  { code: "통신 12-3-1", name: "종합", spec: "신호방향표시기 시험", unit: "개", labors: {"통신관련산업기사": 0.15}, category: "device", page: 428, keywords: ["승차권 자동 개‧집표기(gate)", "종합", "신호방향표시기 시험"] },
  { code: "통신 12-3-1", name: "시험", spec: "잔여기간및금액표시기시험", unit: "개", labors: {"통신관련산업기사": 0.15}, category: "device", page: 428, keywords: ["시험", "승차권 자동 개‧집표기(gate)", "잔여기간및금액표시기시험"] },
  { code: "통신 12-3-1", name: "시험", spec: "장비기능 및 전송시험(S/W)", unit: "개", labors: {"통신관련기사": 2.0, "통신설비공": 1.0}, category: "device", page: 428, keywords: ["시험", "승차권 자동 개‧집표기(gate)", "장비기능 및 전송시험(s/w)"] },
  { code: "통신 12-3-2", name: "설치", spec: "포 장 해 체", unit: "대", labors: {"통신설비공": 0.5, "보통인부": 0.2}, category: "device", page: 429, keywords: ["승차권 자동발매기", "포 장 해 체", "설치"] },
  { code: "통신 12-3-2", name: "설치", spec: "장 비 거 치", unit: "대", labors: {"통신설비공": 1.0, "보통인부": 1.0}, category: "device", page: 429, keywords: ["장 비 거 치", "승차권 자동발매기", "설치"] },
  { code: "통신 12-3-2", name: "설치", spec: "세트조립 및 커넥터 결선", unit: "대", labors: {"통신관련산업기사": 0.5, "통신설비공": 0.5, "보통인부": 0.5}, category: "device", page: 429, keywords: ["승차권 자동발매기", "세트조립 및 커넥터 결선", "설치"] },
  { code: "통신 12-3-2", name: "설치", spec: "전원접지 및 결선", unit: "대", labors: {"통신케이블공": 0.5, "보통인부": 0.5}, category: "device", page: 429, keywords: ["승차권 자동발매기", "전원접지 및 결선", "설치"] },
  { code: "통신 12-3-2", name: "기계", spec: "동전선별장치(MMS)조정", unit: "개", labors: {"통신설비공": 0.15}, category: "device", page: 429, keywords: ["승차권 자동발매기", "동전선별장치(mms)조정", "기계"] },
  { code: "통신 12-3-2", name: "분야", spec: "거스름돈장치(TUBE,호퍼)조정", unit: "개", labors: {"통신설비공": 0.1}, category: "device", page: 429, keywords: ["승차권 자동발매기", "거스름돈장치(tube,호퍼)조정", "분야"] },
  { code: "통신 12-3-2", name: "조정", spec: "현금상자 조정", unit: "개", labors: {"통신설비공": 0.15}, category: "device", page: 429, keywords: ["승차권 자동발매기", "현금상자 조정", "조정"] },
  { code: "통신 12-3-2", name: "조정", spec: "온도조절장치 시험조정", unit: "개", labors: {"통신설비공": 0.15}, category: "device", page: 429, keywords: ["승차권 자동발매기", "온도조절장치 시험조정", "조정"] },
  { code: "통신 12-3-2", name: "조정", spec: "문(Door)기계분야 조정", unit: "대", labors: {"통신설비공": 0.15, "보통인부": 0.1}, category: "device", page: 429, keywords: ["승차권 자동발매기", "문(door)기계분야 조정", "조정"] },
  { code: "통신 12-3-2", name: "조정", spec: "전원공급장치 측정조정", unit: "대", labors: {"통신설비공": 0.1}, category: "device", page: 429, keywords: ["승차권 자동발매기", "전원공급장치 측정조정", "조정"] },
  { code: "통신 12-3-2", name: "조정/", spec: "지폐방출 장치", unit: "회", labors: {"통신관련산업기사": 0.06, "통신설비공": 0.15}, category: "device", page: 429, keywords: ["승차권 자동발매기", "지폐방출 장치", "조정/"] },
  { code: "통신 12-3-2", name: "시험", spec: "카드발권 장치", unit: "개", labors: {"통신관련산업기사": 0.09, "통신설비공": 0.15}, category: "device", page: 429, keywords: ["시험", "승차권 자동발매기", "카드발권 장치"] },
  { code: "통신 12-3-2", name: "시험", spec: "카드충전 장치", unit: "개", labors: {"통신관련산업기사": 0.06, "통신설비공": 0.13}, category: "device", page: 429, keywords: ["시험", "승차권 자동발매기", "카드충전 장치"] },
  { code: "통신 12-3-2", name: "시험", spec: "영수증 인쇄 장치", unit: "개", labors: {"통신관련산업기사": 0.04, "통신설비공": 0.1}, category: "device", page: 429, keywords: ["영수증 인쇄 장치", "시험", "승차권 자동발매기"] },
  { code: "통신 12-3-2", name: "시험", spec: "전표(회계처리) 인쇄 장치", unit: "개", labors: {"통신관련산업기사": 0.15, "통신설비공": 0.21}, category: "device", page: 429, keywords: ["시험", "승차권 자동발매기", "전표(회계처리) 인쇄 장치"] },
  { code: "통신 12-3-2", name: "시험", spec: "프로그램 세팅", unit: "대", labors: {"통신관련산업기사": 0.08, "통신설비공": 0.08}, category: "device", page: 429, keywords: ["프로그램 세팅", "시험", "승차권 자동발매기"] },
  { code: "통신 12-3-2", name: "시험", spec: "SAM ID 등록 및 한도충전", unit: "ID당", labors: {"통신관련산업기사": 0.14, "통신설비공": 0.14}, category: "device", page: 429, keywords: ["시험", "sam id 등록 및 한도충전", "승차권 자동발매기"] },
  { code: "통신 12-3-2", name: "시험", spec: "동전처리 장치", unit: "회", labors: {"통신관련산업기사": 0.05, "통신설비공": 0.05}, category: "device", page: 429, keywords: ["시험", "승차권 자동발매기", "동전처리 장치"] },
  { code: "통신 12-3-2", name: "시험", spec: "지폐처리 장치", unit: "회", labors: {"통신관련산업기사": 0.07, "통신설비공": 0.07}, category: "device", page: 429, keywords: ["시험", "승차권 자동발매기", "지폐처리 장치"] },
  { code: "통신 12-3-2", name: "시험", spec: "전원공급 장치", unit: "회", labors: {"통신관련산업기사": 0.05, "통신설비공": 0.05}, category: "device", page: 429, keywords: ["시험", "승차권 자동발매기", "전원공급 장치"] },
  { code: "통신 12-3-2", name: "종합", spec: "시스템 전송시험", unit: "대", labors: {"통신관련산업기사": 0.2, "통신설비공": 0.1}, category: "device", page: 429, keywords: ["승차권 자동발매기", "시스템 전송시험", "종합"] },
  { code: "통신 12-3-2", name: "시험", spec: "승차권 판독기록시험", unit: "대", labors: {"통신관련산업기사": 0.2, "통신설비공": 0.1}, category: "device", page: 429, keywords: ["시험", "승차권 자동발매기", "승차권 판독기록시험"] },
  { code: "통신 12-3-2", name: "시험", spec: "주전자시스템시험", unit: "대", labors: {"통신관련기사": 1.5, "통신설비공": 1.0}, category: "device", page: 429, keywords: ["주전자시스템시험", "시험", "승차권 자동발매기"] },
  { code: "통신 12-3-2", name: "시험", spec: "동전 조절장치 시험", unit: "대", labors: {"통신관련기사": 1.5, "통신설비공": 1.0}, category: "device", page: 429, keywords: ["시험", "승차권 자동발매기", "동전 조절장치 시험"] },
  { code: "통신 12-3-3", name: "설치", spec: "포 장 해 체", unit: "대", labors: {"통신설비공": 0.1, "보통인부": 0.1}, category: "device", page: 430, keywords: ["자동발권기", "포 장 해 체", "설치"] },
  { code: "통신 12-3-3", name: "설치", spec: "장 비 거 치", unit: "대", labors: {"통신설비공": 0.25, "보통인부": 0.25}, category: "device", page: 430, keywords: ["장 비 거 치", "자동발권기", "설치"] },
  { code: "통신 12-3-3", name: "설치", spec: "세트조립 및 커넥터 결선", unit: "대", labors: {"통신관련산업기사": 0.2, "통신설비공": 0.3, "보통인부": 0.1}, category: "device", page: 430, keywords: ["자동발권기", "세트조립 및 커넥터 결선", "설치"] },
  { code: "통신 12-3-3", name: "설치", spec: "전원접지 및 결선", unit: "대", labors: {"통신케이블공": 0.25, "보통인부": 0.25}, category: "device", page: 430, keywords: ["자동발권기", "전원접지 및 결선", "설치"] },
  { code: "통신 12-3-3", name: "기계 분야", spec: "전원공급장치 측정조정", unit: "대", labors: {"통신설비공": 0.1}, category: "device", page: 430, keywords: ["기계 분야", "자동발권기", "전원공급장치 측정조정"] },
  { code: "통신 12-3-3", name: "조정/", spec: "카드발권 장치", unit: "회", labors: {"통신관련산업기사": 0.09, "통신설비공": 0.15}, category: "device", page: 430, keywords: ["자동발권기", "조정/", "카드발권 장치"] },
  { code: "통신 12-3-3", name: "시험", spec: "카드충전 장치", unit: "개", labors: {"통신관련산업기사": 0.06, "통신설비공": 0.13}, category: "device", page: 430, keywords: ["시험", "자동발권기", "카드충전 장치"] },
  { code: "통신 12-3-3", name: "시험", spec: "카드판독 장치", unit: "개", labors: {"통신관련산업기사": 0.09}, category: "device", page: 430, keywords: ["카드판독 장치", "시험", "자동발권기"] },
  { code: "통신 12-3-3", name: "시험", spec: "카드정산 시험", unit: "개", labors: {"통신관련산업기사": 0.13}, category: "device", page: 430, keywords: ["시험", "카드정산 시험", "자동발권기"] },
  { code: "통신 12-3-3", name: "시험", spec: "주제어장치 조정", unit: "대", labors: {"통신설비공": 0.06}, category: "device", page: 430, keywords: ["시험", "주제어장치 조정", "자동발권기"] },
  { code: "통신 12-3-3", name: "시험", spec: "SAM ID 등록 및 한도충전", unit: "ID당", labors: {"통신관련산업기사": 0.14, "통신설비공": 0.14}, category: "device", page: 430, keywords: ["시험", "sam id 등록 및 한도충전", "자동발권기"] },
  { code: "통신 12-3-3", name: "종합 시험", spec: "시스템 전송시험", unit: "대", labors: {"통신관련산업기사": 0.2, "통신설비공": 0.1}, category: "device", page: 430, keywords: ["종합 시험", "시스템 전송시험", "자동발권기"] },
  { code: "통신 12-3-4", name: "설치", spec: "모듈", unit: "개", labors: {"통신케이블공": 1.26, "H/W시험사": 1.54}, category: "device", page: 431, keywords: ["역단위 전산기", "모듈", "설치"] },
  { code: "통신 12-3-4", name: "종합 시험", spec: "각 모듈 수동시험", unit: "개", labors: {"통신관련산업기사": 3.5}, category: "device", page: 431, keywords: ["종합 시험", "역단위 전산기", "각 모듈 수동시험"] },
  { code: "통신 12-3-5", name: "프로그램 환경설", spec: "역정보 및 역간거리 등록", unit: "역", labors: {"S/W시험사": 0.03}, category: "device", page: 432, keywords: ["통신제어전산기(scp)", "프로그램 환경설", "역정보 및 역간거리 등록"] },
  { code: "통신 12-3-5", name: "정", spec: "역별 운임생성 및 확인", unit: "역", labors: {"S/W시험사": 0.13, "통신관련산업기사": 0.13}, category: "device", page: 432, keywords: ["역별 운임생성 및 확인", "통신제어전산기(scp)"] },
  { code: "통신 12-3-5", name: "자료 송수신 기", spec: "역정보 확인", unit: "대", labors: {"S/W시험사": 0.18, "통신관련산업기사": 0.18}, category: "device", page: 432, keywords: ["통신제어전산기(scp)", "역정보 확인", "자료 송수신 기"] },
  { code: "통신 12-3-5", name: "능 시험", spec: "노선도별 정보 및 운임 확인", unit: "대", labors: {"S/W시험사": 1.09, "통신관련산업기사": 1.09}, category: "device", page: 432, keywords: ["능 시험", "노선도별 정보 및 운임 확인", "통신제어전산기(scp)"] },
  { code: "통신 12-3-5", name: "종합시험", spec: "", unit: "구간", labors: {"통신관련산업기사": 1.33}, category: "device", page: 432, keywords: ["종합시험", "통신제어전산기(scp)"] },
  { code: "통신 12-3-6", name: "본 체 설 치", spec: "", unit: "대", labors: {"S/W시험사": 0.57, "H/W시험사": 0.57}, category: "device", page: 432, keywords: ["교통카드 보증금환급기", "본 체 설 치"] },
  { code: "통신 12-3-6", name: "S/W 설치", spec: "", unit: "대", labors: {"S/W시험사": 0.27, "H/W시험사": 0.27}, category: "device", page: 432, keywords: ["교통카드 보증금환급기", "s/w 설치"] },
  { code: "통신 12-3-6", name: "종합시험", spec: "", unit: "대", labors: {"S/W시험사": 0.3, "H/W시험사": 0.3}, category: "device", page: 432, keywords: ["교통카드 보증금환급기", "종합시험"] },
  { code: "통신 12-3-7", name: "본체설치", spec: "네트워크 장비 설치", unit: "대", labors: {"H/W시험사": 0.3, "S/W시험사": 0.18}, category: "device", page: 433, keywords: ["네트워크 장비 설치", "교통카드 집계기", "본체설치"] },
  { code: "통신 12-3-7", name: "S/W 설치", spec: "집계프로그램 S/W설치", unit: "대", labors: {"S/W시험사": 0.3}, category: "device", page: 433, keywords: ["집계프로그램 s/w설치", "교통카드 집계기", "s/w 설치"] },
  { code: "통신 12-3-7", name: "S/W 설치", spec: "역사장비 세팅", unit: "대", labors: {"S/W시험사": 0.03}, category: "device", page: 433, keywords: ["역사장비 세팅", "교통카드 집계기", "s/w 설치"] },
  { code: "통신 12-3-7", name: "종 합 시 험", spec: "", unit: "대", labors: {"S/W시험사": 0.12}, category: "device", page: 433, keywords: ["종 합 시 험", "교통카드 집계기"] },
  { code: "통신 12-3-8", name: "본체설치", spec: "I/O보드 설치", unit: "대", labors: {"H/W시험사": 0.12}, category: "device", page: 434, keywords: ["교통카드 단말기", "i/o보드 설치", "본체설치"] },
  { code: "통신 12-3-8", name: "본체설치", spec: "단말기 설치", unit: "대", labors: {"H/W시험사": 0.3}, category: "device", page: 434, keywords: ["단말기 설치", "교통카드 단말기", "본체설치"] },
  { code: "통신 12-3-8", name: "본체설치", spec: "안테나부 설치", unit: "대", labors: {"H/W시험사": 0.22}, category: "device", page: 434, keywords: ["교통카드 단말기", "안테나부 설치", "본체설치"] },
  { code: "통신 12-3-8", name: "S/W 설치", spec: "펌웨어설치 및 기초정보 설정", unit: "대", labors: {"S/W시험사": 0.37}, category: "device", page: 434, keywords: ["교통카드 단말기", "펌웨어설치 및 기초정보 설정", "s/w 설치"] },
  { code: "통신 12-3-9", name: "본 체 설 치", spec: "", unit: "대", labors: {"H/W시험사": 0.11}, category: "device", page: 434, keywords: ["본 체 설 치", "교통카드 정산기"] },
  { code: "통신 12-3-9", name: "S/W 설치", spec: "", unit: "대", labors: {"S/W시험사": 0.18}, category: "device", page: 434, keywords: ["s/w 설치", "교통카드 정산기"] },
  { code: "통신 12-3-9", name: "종 합 시 험", spec: "", unit: "대", labors: {"H/W시험사": 0.1}, category: "device", page: 434, keywords: ["종 합 시 험", "교통카드 정산기"] },
  { code: "통신 12-3-10", name: "본 체 설 치", spec: "", unit: "대", labors: {"H/W시험사": 0.11}, category: "device", page: 435, keywords: ["교통카드 유인충전기", "본 체 설 치"] },
  { code: "통신 12-3-10", name: "S/W 설치", spec: "", unit: "대", labors: {"S/W시험사": 0.18}, category: "device", page: 435, keywords: ["교통카드 유인충전기", "s/w 설치"] },
  { code: "통신 12-3-10", name: "종 합 시 험", spec: "", unit: "대", labors: {"H/W시험사": 0.14}, category: "device", page: 435, keywords: ["교통카드 유인충전기", "종 합 시 험"] },
  { code: "통신 12-3-11", name: "본체설치", spec: "무인충전기 설치", unit: "대", labors: {"통신설비공": 0.88, "H/W시험사": 0.54}, category: "device", page: 435, keywords: ["교통카드 무인충전기", "무인충전기 설치", "본체설치"] },
  { code: "통신 12-3-11", name: "본체설치", spec: "지폐처리장치 설치", unit: "대", labors: {"H/W시험사": 0.35}, category: "device", page: 435, keywords: ["교통카드 무인충전기", "지폐처리장치 설치", "본체설치"] },
  { code: "통신 12-3-11", name: "본체설치", spec: "케이블 결선", unit: "대", labors: {"H/W시험사": 0.16}, category: "device", page: 435, keywords: ["케이블 결선", "교통카드 무인충전기", "본체설치"] },
  { code: "통신 12-3-11", name: "S/W 설치", spec: "펌웨어 및 RF모듈 설치", unit: "개", labors: {"S/W시험사": 0.1}, category: "device", page: 435, keywords: ["펌웨어 및 rf모듈 설치", "교통카드 무인충전기", "s/w 설치"] },
  { code: "통신 12-3-11", name: "S/W 설치", spec: "기초정보 설정", unit: "개", labors: {"S/W시험사": 0.32}, category: "device", page: 435, keywords: ["교통카드 무인충전기", "기초정보 설정", "s/w 설치"] },
  { code: "통신 12-3-11", name: "종 합 시 험", spec: "", unit: "대", labors: {"S/W시험사": 0.14}, category: "device", page: 435, keywords: ["교통카드 무인충전기", "종 합 시 험"] },
  { code: "통신 12-4-1", name: "차상", spec: "조작반", unit: "대", labors: {"통신설비공": 0.15}, category: "device", page: 436, keywords: ["차상", "승강장 스크린도어(psd) 시스템", "조작반"] },
  { code: "통신 12-4-1", name: "지상", spec: "TIP(Tray Interface Panel)", unit: "세트", labors: {"통신케이블공": 0.44, "통신설비공": 0.18}, category: "device", page: 436, keywords: ["tip(tray interface panel)", "승강장 스크린도어(psd) 시스템", "지상"] },
  { code: "통신 12-4-1", name: "지상", spec: "무선(RF)장치", unit: "대", labors: {"통신설비공": 0.27}, category: "device", page: 436, keywords: ["무선(rf)장치", "승강장 스크린도어(psd) 시스템", "지상"] },
  { code: "통신 12-4-1", name: "지상", spec: "출입문검지 센서부", unit: "세트", labors: {"통신설비공": 0.17, "특별인부": 0.17}, category: "device", page: 436, keywords: ["승강장 스크린도어(psd) 시스템", "지상", "출입문검지 센서부"] },
  { code: "통신 12-4-1", name: "지상", spec: "정위치검지 센서부", unit: "개", labors: {"통신설비공": 0.04, "특별인부": 0.08}, category: "device", page: 436, keywords: ["정위치검지 센서부", "승강장 스크린도어(psd) 시스템", "지상"] },
  { code: "통신 12-4-1", name: "지상", spec: "장애물검지 센서부", unit: "개", labors: {"통신설비공": 0.08, "특별인부": 0.08}, category: "device", page: 436, keywords: ["장애물검지 센서부", "승강장 스크린도어(psd) 시스템", "지상"] },
  { code: "통신 12-4-1", name: "지상", spec: "문끝끼임 방지 센서부", unit: "개", labors: {"통신설비공": 0.06, "특별인부": 0.06}, category: "device", page: 436, keywords: ["문끝끼임 방지 센서부", "승강장 스크린도어(psd) 시스템", "지상"] },
  { code: "통신 12-4-1", name: "지상", spec: "경보제어반", unit: "대", labors: {"통신케이블공": 0.29, "통신설비공": 0.23}, category: "device", page: 436, keywords: ["경보제어반", "승강장 스크린도어(psd) 시스템", "지상"] },
  { code: "통신 12-4-1", name: "지상", spec: "개별제어반", unit: "대", labors: {"통신케이블공": 0.15, "통신설비공": 0.1}, category: "device", page: 436, keywords: ["승강장 스크린도어(psd) 시스템", "개별제어반", "지상"] },
  { code: "통신 12-4-1", name: "지상", spec: "승강장 조작반", unit: "대", labors: {"통신케이블공": 0.59, "통신설비공": 0.52}, category: "device", page: 436, keywords: ["승강장 조작반", "승강장 스크린도어(psd) 시스템", "지상"] },
  { code: "통신 12-4-1", name: "지상", spec: "승무원 조작반", unit: "대", labors: {"통신케이블공": 0.56, "통신설비공": 0.49}, category: "device", page: 436, keywords: ["승무원 조작반", "승강장 스크린도어(psd) 시스템", "지상"] },
  { code: "통신 12-4-1", name: "지상", spec: "더미부측 제어반", unit: "대", labors: {"통신케이블공": 0.15, "통신설비공": 0.08}, category: "device", page: 436, keywords: ["승강장 스크린도어(psd) 시스템", "지상", "더미부측 제어반"] },
  { code: "통신 12-4-1", name: "지상", spec: "HMI(Human Machine Interface)", unit: "대", labors: {"통신케이블공": 0.51, "통신설비공": 0.51}, category: "device", page: 436, keywords: ["승강장 스크린도어(psd) 시스템", "지상", "hmi(human machine interface)"] },
  { code: "통신 12-4-1", name: "지상", spec: "레이저거리센서", unit: "대", labors: {"통신케이블공": 0.96, "통신설비공": 0.73}, category: "device", page: 436, keywords: ["승강장 스크린도어(psd) 시스템", "지상", "레이저거리센서"] },
  { code: "통신 12-4-1", name: "지상", spec: "전동차거리알림전광판(기관사)", unit: "대", labors: {"통신케이블공": 0.93, "통신설비공": 0.93}, category: "device", page: 436, keywords: ["전동차거리알림전광판(기관사)", "승강장 스크린도어(psd) 시스템", "지상"] },
  { code: "통신 12-4-1", name: "역무실", spec: "종합제어반", unit: "식", labors: {"통신케이블공": 3.41, "통신설비공": 3.41}, category: "device", page: 436, keywords: ["역무실", "종합제어반", "승강장 스크린도어(psd) 시스템"] },
  { code: "통신 12-4-1", name: "역무실", spec: "조작반", unit: "식", labors: {"통신케이블공": 0.99, "통신설비공": 0.99}, category: "device", page: 436, keywords: ["역무실", "승강장 스크린도어(psd) 시스템", "조작반"] },
  { code: "통신 12-4-1", name: "역무실", spec: "경보반", unit: "식", labors: {"통신케이블공": 0.99, "통신설비공": 0.99}, category: "device", page: 436, keywords: ["역무실", "경보반", "승강장 스크린도어(psd) 시스템"] },
  { code: "통신 12-4-1", name: "역무실", spec: "ATO(Automatic Train", unit: "식", labors: {"통신케이블공": 0.27, "H/W시험사": 0.38}, category: "device", page: 436, keywords: ["역무실", "승강장 스크린도어(psd) 시스템", "ato(automatic train"] },
  { code: "통신 12-4-1", name: "운전", spec: "조정작업", unit: "역사", labors: {"통신케이블공": 2.25, "통신설비공": 2.25, "특별인부": 4.52}, category: "device", page: 436, keywords: ["승강장 스크린도어(psd) 시스템", "조정작업", "운전"] },
  { code: "통신 12-4-1", name: "․", spec: "동작시험", unit: "역사", labors: {"통신케이블공": 1.88, "통신설비공": 1.88, "특별인부": 3.75, "H/W시험사": 1.13}, category: "device", page: 436, keywords: ["동작시험", "승강장 스크린도어(psd) 시스템"] },
  { code: "통신 12-4-1", name: "시험", spec: "연동시험", unit: "역사", labors: {"통신케이블공": 2.63, "통신설비공": 2.63, "특별인부": 5.25, "H/W시험사": 1.88}, category: "device", page: 436, keywords: ["시험", "연동시험", "승강장 스크린도어(psd) 시스템"] },
  { code: "통신 12-4-1", name: "시험", spec: "종합시험", unit: "역사", labors: {"통신케이블공": 2.63, "통신설비공": 2.63, "특별인부": 5.25}, category: "device", page: 436, keywords: ["시험", "종합시험", "승강장 스크린도어(psd) 시스템"] },
  { code: "통신 12-4-1", name: "시험", spec: "성능시험", unit: "역사", labors: {"통신케이블공": 8.31, "통신설비공": 8.31, "특별인부": 16.62}, category: "device", page: 436, keywords: ["시험", "성능시험", "승강장 스크린도어(psd) 시스템"] },
  { code: "통신 12-5-1", name: "전원스위치(NFB220V-5A)", spec: "", unit: "개", labors: {"통신설비공": 0.1}, category: "device", page: 439, keywords: ["전원스위치(nfb220v-5a)", "ats(automatic train stop) 차상장치"] },
  { code: "통신 12-5-1", name: "차상자(ATS-S용)", spec: "", unit: "조", labors: {"통신설비공": 2.0}, category: "device", page: 439, keywords: ["ats(automatic train stop) 차상장치", "차상자(ats-s용)"] },
  { code: "통신 12-5-1", name: "차상자접속함(ATS-S용)", spec: "", unit: "조", labors: {"통신설비공": 0.2}, category: "device", page: 439, keywords: ["ats(automatic train stop) 차상장치", "차상자접속함(ats-s용)"] },
  { code: "통신 12-5-1", name: "전원스위치(ATS-S용)", spec: "", unit: "개", labors: {"통신설비공": 0.1}, category: "device", page: 439, keywords: ["전원스위치(ats-s용)", "ats(automatic train stop) 차상장치"] },
  { code: "통신 12-5-1", name: "구접속함(ATS-S용)", spec: "", unit: "개", labors: {"통신설비공": 0.1}, category: "device", page: 439, keywords: ["ats(automatic train stop) 차상장치", "구접속함(ats-s용)"] },
  { code: "통신 12-5-1", name: "ATS 정전압장치(ATS-S용)", spec: "", unit: "개", labors: {"통신설비공": 0.1}, category: "device", page: 439, keywords: ["ats 정전압장치(ats-s용)", "ats(automatic train stop) 차상장치"] },
  { code: "통신 12-5-1", name: "수신기(ATS-S용)", spec: "", unit: "개", labors: {"통신설비공": 1.0}, category: "device", page: 439, keywords: ["ats(automatic train stop) 차상장치", "수신기(ats-s용)"] },
  { code: "통신 12-5-1", name: "표시기(ATS-S용)", spec: "", unit: "개", labors: {"통신설비공": 0.1}, category: "device", page: 439, keywords: ["표시기(ats-s용)", "ats(automatic train stop) 차상장치"] },
  { code: "통신 12-5-1", name: "방향표시기(ATS-S용)", spec: "", unit: "개", labors: {"통신설비공": 0.1}, category: "device", page: 439, keywords: ["방향표시기(ats-s용)", "ats(automatic train stop) 차상장치"] },
  { code: "통신 12-5-1", name: "경 보 기", spec: "", unit: "개", labors: {"통신설비공": 0.1}, category: "device", page: 439, keywords: ["경 보 기", "ats(automatic train stop) 차상장치"] },
  { code: "통신 12-5-1", name: "확인스위치", spec: "", unit: "개", labors: {"통신설비공": 0.1}, category: "device", page: 439, keywords: ["확인스위치", "ats(automatic train stop) 차상장치"] },
  { code: "통신 12-5-1", name: "복귀스위치", spec: "", unit: "개", labors: {"통신설비공": 0.1}, category: "device", page: 439, keywords: ["복귀스위치", "ats(automatic train stop) 차상장치"] },
  { code: "통신 12-5-1", name: "보조저항기함", spec: "", unit: "개", labors: {"통신설비공": 0.1}, category: "device", page: 439, keywords: ["보조저항기함", "ats(automatic train stop) 차상장치"] },
  { code: "통신 12-5-1", name: "배 선", spec: "", unit: "대", labors: {"통신설비공": 3.0}, category: "device", page: 439, keywords: ["배 선", "ats(automatic train stop) 차상장치"] },
  { code: "통신 12-5-1", name: "보조계전기함", spec: "", unit: "개", labors: {"통신설비공": 0.1}, category: "device", page: 439, keywords: ["ats(automatic train stop) 차상장치", "보조계전기함"] },
  { code: "통신 12-5-1", name: "시 험", spec: "", unit: "대", labors: {"통신설비공": 3.0}, category: "device", page: 439, keywords: ["시 험", "ats(automatic train stop) 차상장치"] },
  { code: "통신 12-5-1", name: "전자변(ATS-S형)", spec: "", unit: "조", labors: {"통신설비공": 0.3}, category: "device", page: 439, keywords: ["전자변(ats-s형)", "ats(automatic train stop) 차상장치"] },
  { code: "통신 12-5-1", name: "전자변(계전기 밸브)", spec: "", unit: "개", labors: {"통신설비공": 0.2}, category: "device", page: 439, keywords: ["전자변(계전기 밸브)", "ats(automatic train stop) 차상장치"] },
  { code: "통신 12-5-1", name: "전자변(마그넷밸브)", spec: "", unit: "개", labors: {"통신설비공": 0.1}, category: "device", page: 439, keywords: ["전자변(마그넷밸브)", "ats(automatic train stop) 차상장치"] },
  { code: "통신 12-5-1", name: "가압스위치(노멀 오픈)", spec: "", unit: "개", labors: {"통신설비공": 0.2}, category: "device", page: 439, keywords: ["가압스위치(노멀 오픈)", "ats(automatic train stop) 차상장치"] },
  { code: "통신 12-5-1", name: "가압스위치(노멀 크로스)", spec: "", unit: "개", labors: {"통신설비공": 0.2}, category: "device", page: 439, keywords: ["가압스위치(노멀 크로스)", "ats(automatic train stop) 차상장치"] },
  { code: "통신 12-5-1", name: "배선(4심 실드케이블)", spec: "", unit: "조", labors: {"통신설비공": 1.0}, category: "device", page: 439, keywords: ["배선(4심 실드케이블)", "ats(automatic train stop) 차상장치"] },
  { code: "통신 13-1-1", name: "정보설비", spec: "일반전화", unit: "10세대", labors: {"통신관련산업기사": 0.02}, category: "device", page: 445, keywords: ["정보설비", "일반전화", "구내 정보통신설비 점검"] },
  { code: "통신 13-1-1", name: "정보설비", spec: "인터폰 또는 비디오폰", unit: "10세대", labors: {"통신관련산업기사": 0.04}, category: "device", page: 445, keywords: ["정보설비", "구내 정보통신설비 점검", "인터폰 또는 비디오폰"] },
  { code: "통신 13-1-1", name: "정보설비", spec: "인터넷", unit: "10세대", labors: {"통신관련산업기사": 0.05}, category: "device", page: 445, keywords: ["정보설비", "인터넷", "구내 정보통신설비 점검"] },
  { code: "통신 13-1-1", name: "전송설비", spec: "케이블방송(CATV)", unit: "단지", labors: {"통신관련산업기사": 0.52}, category: "device", page: 445, keywords: ["케이블방송(catv)", "구내 정보통신설비 점검", "전송설비"] },
  { code: "통신 13-1-1", name: "전송설비", spec: "지상파방송(MATV)", unit: "단지", labors: {"통신관련산업기사": 0.47}, category: "device", page: 445, keywords: ["구내 정보통신설비 점검", "지상파방송(matv)", "전송설비"] },
  { code: "통신 13-1-1", name: "전송설비", spec: "위성방송(SMATV)", unit: "단지", labors: {"통신관련산업기사": 0.42}, category: "device", page: 445, keywords: ["구내 정보통신설비 점검", "위성방송(smatv)", "전송설비"] },
  { code: "통신 13-1-1", name: "방범설비", spec: "침입감지시스템", unit: "10세대", labors: {"통신관련산업기사": 0.05}, category: "device", page: 445, keywords: ["침입감지시스템", "구내 정보통신설비 점검", "방범설비"] },
  { code: "통신 13-1-1", name: "방범설비", spec: "출입통제시스템", unit: "10세대", labors: {"통신관련산업기사": 0.03}, category: "device", page: 445, keywords: ["구내 정보통신설비 점검", "방범설비", "출입통제시스템"] },
  { code: "통신 13-1-1", name: "구내방송설비", spec: "", unit: "단지", labors: {"통신관련산업기사": 0.04}, category: "device", page: 445, keywords: ["구내 정보통신설비 점검", "구내방송설비"] },
  { code: "통신 13-1-1", name: "홈네트워크설비", spec: "", unit: "10세대", labors: {"통신관련산업기사": 0.32}, category: "device", page: 445, keywords: ["홈네트워크설비", "구내 정보통신설비 점검"] },
  { code: "통신 13-2-4", name: "전 원 부", spec: "정류기/BAT점검", unit: "식", labors: {"H/W시험사": 0.06}, category: "device", page: 446, keywords: ["전 원 부", "정류기/bat점검", "사설교환기 점검"] },
  { code: "통신 13-2-4", name: "전 원 부", spec: "전원부 회로기판 점검", unit: "랙", labors: {"H/W시험사": 0.06}, category: "device", page: 446, keywords: ["전원부 회로기판 점검", "전 원 부", "사설교환기 점검"] },
  { code: "통신 13-2-4", name: "전 원 부", spec: "접지저항 점검", unit: "회", labors: {"H/W시험사": 0.02}, category: "device", page: 446, keywords: ["전 원 부", "접지저항 점검", "사설교환기 점검"] },
  { code: "통신 13-2-4", name: "통화로부", spec: "내선 연결 및 감도상태 점검", unit: "100회선", labors: {"H/W시험사": 0.4}, category: "device", page: 446, keywords: ["통화로부", "내선 연결 및 감도상태 점검", "사설교환기 점검"] },
  { code: "통신 13-2-4", name: "통화로부", spec: "국선/DOD/DID/전용선 점검", unit: "10회선", labors: {"H/W시험사": 0.1}, category: "device", page: 446, keywords: ["통화로부", "국선/dod/did/전용선 점검", "사설교환기 점검"] },
  { code: "통신 13-2-4", name: "통화로부", spec: "커넥터 접속/청결상태", unit: "랙", labors: {"H/W시험사": 0.01}, category: "device", page: 446, keywords: ["통화로부", "커넥터 접속/청결상태", "사설교환기 점검"] },
  { code: "통신 13-2-4", name: "제 어 부", spec: "하드웨어 및 소프트웨어 점검", unit: "시스템", labors: {"H/W시험사": 0.03}, category: "device", page: 446, keywords: ["사설교환기 점검", "제 어 부", "하드웨어 및 소프트웨어 점검"] },
  { code: "통신 13-2-4", name: "제 어 부", spec: "제어부 회로기판 및 이중화 점검", unit: "시스템", labors: {"H/W시험사": 0.04}, category: "device", page: 446, keywords: ["제어부 회로기판 및 이중화 점검", "제 어 부", "사설교환기 점검"] },
  { code: "통신 13-2-4", name: "제 어 부", spec: "데이터 백업점검", unit: "시스템", labors: {"H/W시험사": 0.01}, category: "device", page: 446, keywords: ["데이터 백업점검", "제 어 부", "사설교환기 점검"] },
  { code: "통신 13-2-4", name: "중 계 대", spec: "중계대 기능 및 상태 점검", unit: "대", labors: {"H/W시험사": 0.04}, category: "device", page: 446, keywords: ["중 계 대", "중계대 기능 및 상태 점검", "사설교환기 점검"] },
  { code: "통신 13-2-4", name: "부가장비", spec: "MOH(Music On Hold) 점검", unit: "대", labors: {"H/W시험사": 0.01}, category: "device", page: 446, keywords: ["부가장비", "moh(music on hold) 점검", "사설교환기 점검"] },
  { code: "통신 13-2-4", name: "부가장비", spec: "요금등산장치 점검", unit: "시스템", labors: {"S/W시험사": 0.3}, category: "device", page: 446, keywords: ["요금등산장치 점검", "부가장비", "사설교환기 점검"] },
  { code: "통신 13-2-4", name: "부가장비", spec: "자동응답시스템(ARS) 점검", unit: "8회선", labors: {"S/W시험사": 0.29}, category: "device", page: 446, keywords: ["부가장비", "자동응답시스템(ars) 점검", "사설교환기 점검"] },
  { code: "통신 13-2-4", name: "부가장비", spec: "음성사서함(VMS) 점검", unit: "“", labors: {"S/W시험사": 0.1}, category: "device", page: 446, keywords: ["부가장비", "사설교환기 점검", "음성사서함(vms) 점검"] },
  { code: "통신 13-2-4", name: "기 타", spec: "일반전화기 점검", unit: "100대", labors: {"H/W시험사": 2.08}, category: "device", page: 446, keywords: ["사설교환기 점검", "일반전화기 점검", "기 타"] },
  { code: "통신 13-2-4", name: "기 타", spec: "키폰 전화기 및 디지폰 점검", unit: "30대", labors: {"H/W시험사": 1.25}, category: "device", page: 446, keywords: ["키폰 전화기 및 디지폰 점검", "사설교환기 점검", "기 타"] },
  { code: "통신 13-2-4", name: "기 타", spec: "컴퓨터(Hardware/Software)점검", unit: "대", labors: {"H/W시험사": 0.04}, category: "device", page: 446, keywords: ["사설교환기 점검", "컴퓨터(hardware/software)점검", "기 타"] },
  { code: "통신 13-2-4", name: "기 타", spec: "MDF(청결상태 포함)", unit: "열", labors: {"H/W시험사": 0.04}, category: "device", page: 446, keywords: ["사설교환기 점검", "mdf(청결상태 포함)", "기 타"] },
  { code: "통신 13-3-2-1", name: "접속함체 철거 및 설치", spec: "", unit: "대", labors: {"통신관련기사": 0.53, "광케이블설치사": 1.26, "특별인부": 0.53}, category: "device", page: 447, keywords: ["opgw 접속함체 일반점검", "접속함체 철거 및 설치"] },
  { code: "통신 13-3-2-1", name: "접속함체", spec: "", unit: "24코어", labors: {"광케이블설치사": 0.76}, category: "device", page: 447, keywords: ["opgw 접속함체 일반점검", "접속함체"] },
  { code: "통신 13-3-2-1", name: "내·외부점검", spec: "", unit: "48코어", labors: {"광케이블설치사": 1.08}, category: "device", page: 447, keywords: ["내·외부점검", "opgw 접속함체 일반점검"] },
  { code: "통신 13-3-2-2", name: "철탑 점검", spec: "", unit: "기", labors: {"통신관련기사": 0.08, "무선안테나공": 0.06}, category: "device", page: 447, keywords: ["철탑 점검", "opgw 드론점검"] },
  { code: "통신 13-3-2-2", name: "선로 점검", spec: "", unit: "㎞", labors: {"통신관련기사": 0.26, "무선안테나공": 0.19}, category: "device", page: 447, keywords: ["opgw 드론점검", "선로 점검"] },
  { code: "통신 13-3-2-3", name: "인력점검(기별점검)", spec: "", unit: "기", labors: {"통신관련기사": 0.18}, category: "device", page: 449, keywords: ["인력점검(기별점검)", "opgw 인력점검"] },
  { code: "통신 13-3-2-4", name: "기본정비", spec: "", unit: "기", labors: {"통신관련기사": 0.16}, category: "device", page: 449, keywords: ["opgw 단순정비", "기본정비"] },
  { code: "통신 13-3-2-4", name: "세부 공정", spec: "댐퍼", unit: "개", labors: {"통신관련기사": 0.03}, category: "device", page: 449, keywords: ["댐퍼", "opgw 단순정비", "세부 공정"] },
  { code: "통신 13-4-1-1", name: "1. 철탑, 볼트, 너트점검 조임 및 교체", spec: "", unit: "m", labors: {"무선안테나공": 0.65}, category: "device", page: 450, keywords: ["철탑 점검", "1. 철탑, 볼트, 너트점검 조임 및 교체"] },
  { code: "통신 13-4-1-1", name: "2. 산화부분 녹제거 및 보수", spec: "", unit: "㎡", labors: {"무선안테나공": 0.27}, category: "device", page: 450, keywords: ["철탑 점검", "2. 산화부분 녹제거 및 보수"] },
  { code: "통신 13-4-1-1", name: "3. 보안등 점검 및 보수", spec: "", unit: "조", labors: {"무선안테나공": 0.1, "통신외선공": 0.2}, category: "device", page: 450, keywords: ["철탑 점검", "3. 보안등 점검 및 보수"] },
  { code: "통신 13-4-1-1", name: "4. 피뢰침 점검 및 보수", spec: "", unit: "조", labors: {"무선안테나공": 0.1, "통신외선공": 0.2}, category: "device", page: 450, keywords: ["철탑 점검", "4. 피뢰침 점검 및 보수"] },
  { code: "통신 13-4-1-2", name: "1. 공기누설 및 W/G지지철물 점", spec: "", unit: "루트", labors: {"통신관련산업기사": 0.12, "무선안테나공": 0.2, "통신설비공": 0.25}, category: "device", page: 450, keywords: ["w/g(급전선) 점검", "1. 공기누설 및 w/g지지철물 점"] },
  { code: "통신 13-4-1-2", name: "검 및 보강", spec: "", unit: "루트", labors: {"무선안테나공": 0.12}, category: "device", page: 450, keywords: ["검 및 보강", "w/g(급전선) 점검"] },
  { code: "통신 13-4-1-2", name: "2. W/G닥터 점검 및 보강", spec: "", unit: "루트", labors: {"통신관련산업기사": 0.15, "통신설비공": 0.1}, category: "device", page: 450, keywords: ["2. w/g닥터 점검 및 보강", "w/g(급전선) 점검"] },
  { code: "통신 13-4-1-3", name: "1. 디하이드레이터 점검 및 조정", spec: "", unit: "대", labors: {"통신관련산업기사": 0.2}, category: "device", page: 451, keywords: ["1. 디하이드레이터 점검 및 조정", "디하이드레이터 점검"] },
  { code: "통신 13-4-1-3", name: "․2. 에어게이지환 확인 및 보강", spec: "", unit: "대", labors: {"통신관련산업기사": 0.2}, category: "device", page: 451, keywords: ["․2. 에어게이지환 확인 및 보강", "디하이드레이터 점검"] },
  { code: "통신 13-4-1-4", name: "1. 전파장애물 제거", spec: "", unit: "면", labors: {"무선안테나공": 0.5}, category: "device", page: 451, keywords: ["1. 전파장애물 제거", "반사판 점검"] },
  { code: "통신 13-4-1-4", name: "2. 점검 및 방향조정", spec: "", unit: "면", labors: {"통신관련산업기사": 0.5, "무선안테나공": 0.5}, category: "device", page: 451, keywords: ["2. 점검 및 방향조정", "반사판 점검"] },
  { code: "통신 13-4-1-5", name: "4'-6'", spec: "1. 휘다혼, 가이와이어의 볼트", unit: "면", labors: {"무선안테나공": 0.13}, category: "device", page: 451, keywords: ["4'-6'", "파라보라 안테나 점검", "1. 휘다혼, 가이와이어의 볼트"] },
  { code: "통신 13-4-1-5", name: "4'-6'", spec: "이완상태 및 히터점검 보완", unit: "면", labors: {"통신관련기사": 0.17, "무선안테나공": 0.17}, category: "device", page: 451, keywords: ["4'-6'", "이완상태 및 히터점검 보완", "파라보라 안테나 점검"] },
  { code: "통신 13-4-1-5", name: "8'-10'", spec: "1. 휘다혼, 가이와이어의 볼트", unit: "개", labors: {"무선안테나공": 0.26}, category: "device", page: 451, keywords: ["파라보라 안테나 점검", "1. 휘다혼, 가이와이어의 볼트", "8'-10'"] },
  { code: "통신 13-4-1-5", name: "8'-10'", spec: "이완상태 및 히터점검 보완", unit: "개", labors: {"통신관련기사": 0.25, "무선안테나공": 0.42}, category: "device", page: 451, keywords: ["이완상태 및 히터점검 보완", "파라보라 안테나 점검", "8'-10'"] },
  { code: "통신 13-4-1-5", name: "12'이상", spec: "1. 휘다혼, 가이와이어의 볼트", unit: "개", labors: {"무선안테나공": 0.4}, category: "device", page: 451, keywords: ["12'이상", "파라보라 안테나 점검", "1. 휘다혼, 가이와이어의 볼트"] },
  { code: "통신 13-4-1-5", name: "12'이상", spec: "이완상태 및 히터점검 보완", unit: "개", labors: {"통신관련기사": 0.39, "무선안테나공": 0.63}, category: "device", page: 451, keywords: ["12'이상", "이완상태 및 히터점검 보완", "파라보라 안테나 점검"] },
  { code: "통신 13-4-2", name: "주장치부", spec: "외함점검", unit: "식", labors: {"통신관련산업기사": 0.06}, category: "device", page: 452, keywords: ["외함점검", "주장치부", "라디오재방송설비 점검"] },
  { code: "통신 13-4-2", name: "주장치부", spec: "전원부점검", unit: "식", labors: {"통신관련산업기사": 0.21}, category: "device", page: 452, keywords: ["전원부점검", "주장치부", "라디오재방송설비 점검"] },
  { code: "통신 13-4-2", name: "주장치부", spec: "모니터점검", unit: "식", labors: {"통신관련산업기사": 0.07}, category: "device", page: 452, keywords: ["모니터점검", "주장치부", "라디오재방송설비 점검"] },
  { code: "통신 13-4-2", name: "주장치부", spec: "수신부점검", unit: "식", labors: {"통신관련산업기사": 0.46}, category: "device", page: 452, keywords: ["수신부점검", "주장치부", "라디오재방송설비 점검"] },
  { code: "통신 13-4-2", name: "주장치부", spec: "송신부점검", unit: "식", labors: {"통신관련산업기사": 0.54}, category: "device", page: 452, keywords: ["주장치부", "라디오재방송설비 점검", "송신부점검"] },
  { code: "통신 13-4-2", name: "선로상태점검", spec: "", unit: "1㎞", labors: {"통신관련산업기사": 0.19}, category: "device", page: 452, keywords: ["선로상태점검", "라디오재방송설비 점검"] },
  { code: "통신 13-4-2", name: "수신안테나점검", spec: "", unit: "식", labors: {"통신관련산업기사": 0.15}, category: "device", page: 452, keywords: ["라디오재방송설비 점검", "수신안테나점검"] },
  { code: "통신 13-4-3", name: "단독형", spec: "", unit: "대", labors: {"통신관련산업기사": 0.2, "H/W시험사": 0.2}, category: "device", page: 452, keywords: ["단독형", "무선ap 점검"] },
  { code: "통신 13-4-3", name: "통합형", spec: "", unit: "대", labors: {"통신관련산업기사": 0.14, "H/W시험사": 0.14}, category: "device", page: 452, keywords: ["무선ap 점검", "통합형"] },
  { code: "통신 13-4-4-1", name: "Emergency Control Unit", spec: "", unit: "대", labors: {"통신관련산업기사": 0.03}, category: "device", page: 453, keywords: ["비상방송설비 점검", "emergency control unit"] },
  { code: "통신 13-4-4-1", name: "Emergency Switch", spec: "", unit: "대", labors: {"통신관련산업기사": 0.02}, category: "device", page: 453, keywords: ["비상방송설비 점검", "emergency switch"] },
  { code: "통신 13-4-4-1", name: "Matrix Logic", spec: "", unit: "대", labors: {"통신관련산업기사": 0.05}, category: "device", page: 453, keywords: ["비상방송설비 점검", "matrix logic"] },
  { code: "통신 13-4-4-1", name: "Program Exchange", spec: "", unit: "대", labors: {"통신관련산업기사": 0.03}, category: "device", page: 453, keywords: ["비상방송설비 점검", "program exchange"] },
  { code: "통신 13-4-4-1", name: "Speaker Selector", spec: "", unit: "대", labors: {"통신관련산업기사": 0.02}, category: "device", page: 453, keywords: ["비상방송설비 점검", "speaker selector"] },
  { code: "통신 13-4-4-1", name: "Relay Group", spec: "", unit: "대", labors: {"통신관련산업기사": 0.02}, category: "device", page: 453, keywords: ["relay group", "비상방송설비 점검"] },
  { code: "통신 13-4-4-1", name: "Power Distributor", spec: "", unit: "대", labors: {"통신관련산업기사": 0.02}, category: "device", page: 453, keywords: ["비상방송설비 점검", "power distributor"] },
  { code: "통신 13-4-4-1", name: "Terminal Board", spec: "", unit: "대", labors: {"통신관련산업기사": 0.02}, category: "device", page: 453, keywords: ["비상방송설비 점검", "terminal board"] },
  { code: "통신 13-4-4-1", name: "Program Manual Controller", spec: "", unit: "대", labors: {"통신관련산업기사": 0.03}, category: "device", page: 453, keywords: ["비상방송설비 점검", "program manual controller"] },
  { code: "통신 13-4-4-1", name: "Power AMP", spec: "", unit: "대", labors: {"통신관련산업기사": 0.02}, category: "device", page: 453, keywords: ["비상방송설비 점검", "power amp"] },
  { code: "통신 13-4-4-1", name: "Emergency Combination System", spec: "", unit: "대", labors: {"통신관련산업기사": 0.03}, category: "device", page: 453, keywords: ["비상방송설비 점검", "emergency combination system"] },
  { code: "통신 13-4-4-1", name: "Emergency Router", spec: "", unit: "대", labors: {"통신관련산업기사": 0.02}, category: "device", page: 453, keywords: ["비상방송설비 점검", "emergency router"] },
  { code: "통신 13-4-4-1", name: "Emergency Interface", spec: "", unit: "대", labors: {"통신관련산업기사": 0.05}, category: "device", page: 453, keywords: ["비상방송설비 점검", "emergency interface"] },
  { code: "통신 13-4-4-2", name: "Power Amp Monitor", spec: "", unit: "대", labors: {"통신관련산업기사": 0.02}, category: "device", page: 454, keywords: ["bgm방송설비 점검", "power amp monitor"] },
  { code: "통신 13-4-4-2", name: "AM/FM Tuner", spec: "", unit: "대", labors: {"통신관련산업기사": 0.02}, category: "device", page: 454, keywords: ["am/fm tuner", "bgm방송설비 점검"] },
  { code: "통신 13-4-4-2", name: "Cassette Deck", spec: "", unit: "대", labors: {"통신관련산업기사": 0.02}, category: "device", page: 454, keywords: ["bgm방송설비 점검", "cassette deck"] },
  { code: "통신 13-4-4-2", name: "Chime/Siren", spec: "", unit: "대", labors: {"통신관련산업기사": 0.02}, category: "device", page: 454, keywords: ["bgm방송설비 점검", "chime/siren"] },
  { code: "통신 13-4-4-2", name: "CD Player/DVD Player", spec: "", unit: "대", labors: {"통신관련산업기사": 0.02}, category: "device", page: 454, keywords: ["cd player/dvd player", "bgm방송설비 점검"] },
  { code: "통신 13-4-4-2", name: "Pre Amplifier", spec: "", unit: "대", labors: {"통신관련산업기사": 0.03}, category: "device", page: 454, keywords: ["pre amplifier", "bgm방송설비 점검"] },
  { code: "통신 13-4-4-2", name: "Auto Blower", spec: "", unit: "대", labors: {"통신관련산업기사": 0.02}, category: "device", page: 454, keywords: ["bgm방송설비 점검", "auto blower"] },
  { code: "통신 13-4-4-2", name: "Auto Charger", spec: "", unit: "대", labors: {"통신관련산업기사": 0.02}, category: "device", page: 454, keywords: ["bgm방송설비 점검", "auto charger"] },
  { code: "통신 13-4-4-2", name: "Audio Monitor", spec: "", unit: "대", labors: {"통신관련산업기사": 0.02}, category: "device", page: 454, keywords: ["bgm방송설비 점검", "audio monitor"] },
  { code: "통신 13-4-4-2", name: "Local Selector", spec: "", unit: "대", labors: {"통신관련산업기사": 0.03}, category: "device", page: 454, keywords: ["bgm방송설비 점검", "local selector"] },
  { code: "통신 13-4-4-2", name: "프로그램 타이머", spec: "", unit: "대", labors: {"통신관련산업기사": 0.03}, category: "device", page: 454, keywords: ["프로그램 타이머", "bgm방송설비 점검"] },
  { code: "통신 13-4-4-2", name: "멀티보이스 파일", spec: "", unit: "대", labors: {"통신관련산업기사": 0.02}, category: "device", page: 454, keywords: ["bgm방송설비 점검", "멀티보이스 파일"] },
  { code: "통신 13-4-4-2", name: "리모트 앰프", spec: "", unit: "대", labors: {"통신관련산업기사": 0.02}, category: "device", page: 454, keywords: ["리모트 앰프", "bgm방송설비 점검"] },
  { code: "통신 13-4-4-2", name: "Amp Fault Detector", spec: "", unit: "대", labors: {"통신관련산업기사": 0.02}, category: "device", page: 454, keywords: ["bgm방송설비 점검", "amp fault detector"] },
  { code: "통신 13-4-4-2", name: "데이터 리시버", spec: "", unit: "대", labors: {"통신관련산업기사": 0.03}, category: "device", page: 454, keywords: ["bgm방송설비 점검", "데이터 리시버"] },
  { code: "통신 13-4-4-2", name: "Speaker Line Checker", spec: "", unit: "대", labors: {"통신관련산업기사": 0.03}, category: "device", page: 454, keywords: ["speaker line checker", "bgm방송설비 점검"] },
  { code: "통신 13-4-4-2", name: "Direct Box", spec: "", unit: "대", labors: {"통신관련산업기사": 0.03}, category: "device", page: 454, keywords: ["bgm방송설비 점검", "direct box"] },
  { code: "통신 13-4-4-2", name: "Management 프로그램", spec: "", unit: "대", labors: {"통신관련산업기사": 0.16}, category: "device", page: 454, keywords: ["bgm방송설비 점검", "management 프로그램"] },
  { code: "통신 13-4-4-2", name: "Digi-Link Multi Controller", spec: "", unit: "대", labors: {"통신관련산업기사": 0.13}, category: "device", page: 454, keywords: ["bgm방송설비 점검", "digi-link multi controller"] },
  { code: "통신 13-4-4-2", name: "Portable Amp", spec: "", unit: "대", labors: {"통신관련산업기사": 0.03}, category: "device", page: 454, keywords: ["bgm방송설비 점검", "portable amp"] },
  { code: "통신 13-4-4-2", name: "Telephone Paging", spec: "", unit: "대", labors: {"통신관련산업기사": 0.08}, category: "device", page: 454, keywords: ["bgm방송설비 점검", "telephone paging"] },
  { code: "통신 13-4-4-2", name: "Audio Distribution", spec: "", unit: "대", labors: {"통신관련산업기사": 0.11}, category: "device", page: 454, keywords: ["bgm방송설비 점검", "audio distribution"] },
  { code: "통신 13-4-4-3", name: "Power Distributor Switcher", spec: "", unit: "대", labors: {"통신관련산업기사": 0.06}, category: "device", page: 455, keywords: ["power distributor switcher", "프로오디오설비(sr) 점검"] },
  { code: "통신 13-4-4-3", name: "Power Supply", spec: "", unit: "대", labors: {"통신관련산업기사": 0.01}, category: "device", page: 455, keywords: ["power supply", "프로오디오설비(sr) 점검"] },
  { code: "통신 13-4-4-3", name: "하울링제거기", spec: "", unit: "대", labors: {"통신관련산업기사": 0.06}, category: "device", page: 455, keywords: ["하울링제거기", "프로오디오설비(sr) 점검"] },
  { code: "통신 13-4-4-3", name: "Digital Signal Processor", spec: "", unit: "대", labors: {"통신관련산업기사": 0.14}, category: "device", page: 455, keywords: ["digital signal processor", "프로오디오설비(sr) 점검"] },
  { code: "통신 13-4-4-3", name: "Digital Audio Mixer", spec: "", unit: "대", labors: {"통신관련산업기사": 0.13}, category: "device", page: 455, keywords: ["digital audio mixer", "프로오디오설비(sr) 점검"] },
  { code: "통신 13-4-4-3", name: "Audio I/O Box", spec: "", unit: "대", labors: {"통신관련산업기사": 0.06}, category: "device", page: 455, keywords: ["audio i/o box", "프로오디오설비(sr) 점검"] },
  { code: "통신 13-4-4-3", name: "Graphic Equalizer", spec: "", unit: "대", labors: {"통신관련산업기사": 0.01}, category: "device", page: 455, keywords: ["graphic equalizer", "프로오디오설비(sr) 점검"] },
  { code: "통신 13-4-4-3", name: "Network Audio Signal Router", spec: "", unit: "대", labors: {"통신관련산업기사": 0.04}, category: "device", page: 455, keywords: ["network audio signal router", "프로오디오설비(sr) 점검"] },
  { code: "통신 13-4-4-4", name: "Digital Modulator", spec: "", unit: "대", labors: {"통신관련산업기사": 0.04}, category: "device", page: 455, keywords: ["멀티미디어방송설비 점검", "digital modulator"] },
  { code: "통신 13-4-4-4", name: "Digital A/V Matrix Switch", spec: "", unit: "대", labors: {"통신관련산업기사": 0.04}, category: "device", page: 455, keywords: ["digital a/v matrix switch", "멀티미디어방송설비 점검"] },
  { code: "통신 13-4-4-4", name: "A/V Mixer", spec: "", unit: "대", labors: {"통신관련산업기사": 0.05}, category: "device", page: 455, keywords: ["a/v mixer", "멀티미디어방송설비 점검"] },
  { code: "통신 13-4-4-4", name: "Network A/V Streamer", spec: "", unit: "대", labors: {"통신관련산업기사": 0.04}, category: "device", page: 455, keywords: ["network a/v streamer", "멀티미디어방송설비 점검"] },
  { code: "통신 13-4-4-4", name: "Set-top Box", spec: "", unit: "대", labors: {"통신관련산업기사": 0.04}, category: "device", page: 455, keywords: ["set-top box", "멀티미디어방송설비 점검"] },
  { code: "통신 13-4-4-4", name: "VGA Matrix", spec: "", unit: "대", labors: {"통신관련산업기사": 0.02}, category: "device", page: 455, keywords: ["vga matrix", "멀티미디어방송설비 점검"] },
  { code: "통신 13-4-4-4", name: "Video Distribution", spec: "", unit: "대", labors: {"통신관련산업기사": 0.02}, category: "device", page: 455, keywords: ["video distribution", "멀티미디어방송설비 점검"] },
  { code: "통신 13-4-4-5", name: "Network Audio Server", spec: "", unit: "대", labors: {"통신관련산업기사": 0.06}, category: "device", page: 456, keywords: ["네트워크 통합방송설비 점검", "network audio server"] },
  { code: "통신 13-4-4-5", name: "Network Audio Converter", spec: "", unit: "대", labors: {"통신관련산업기사": 0.06}, category: "device", page: 456, keywords: ["네트워크 통합방송설비 점검", "network audio converter"] },
  { code: "통신 13-4-4-5", name: "Audio Over Ethernet", spec: "", unit: "대", labors: {"통신관련산업기사": 0.06}, category: "device", page: 456, keywords: ["audio over ethernet", "네트워크 통합방송설비 점검"] },
  { code: "통신 13-5-1-1", name: "System Application 및 연동 Soft-Ware 점검", spec: "", unit: "개", labors: {"S/W시험사": 0.28}, category: "device", page: 457, keywords: ["system application 및 연동 soft-ware 점검", "vts 운영콘솔 점검"] },
  { code: "통신 13-5-1-1", name: "Sub-Client 점검", spec: "", unit: "개", labors: {"통신관련산업기사": 0.13}, category: "device", page: 457, keywords: ["vts 운영콘솔 점검", "sub-client 점검"] },
  { code: "통신 13-5-1-1", name: "Main CPU Test Point점검", spec: "", unit: "개", labors: {"S/W시험사": 0.36}, category: "device", page: 457, keywords: ["main cpu test point점검", "vts 운영콘솔 점검"] },
  { code: "통신 13-5-1-1", name: "Multi Video Distribution 점검", spec: "", unit: "개", labors: {"통신관련산업기사": 0.1, "H/W시험사": 0.1}, category: "device", page: 457, keywords: ["multi video distribution 점검", "vts 운영콘솔 점검"] },
  { code: "통신 13-5-1-2", name: "Main CPU 및 Card Board Test Point점검", spec: "", unit: "개", labors: {"S/W시험사": 0.36}, category: "device", page: 457, keywords: ["main cpu 및 card board test point점검", "경보통합처리장치 점검"] },
  { code: "통신 13-5-1-2", name: "시스템 원격 경보상태 점검", spec: "", unit: "개", labors: {"통신관련산업기사": 0.19, "H/W시험사": 0.19}, category: "device", page: 457, keywords: ["경보통합처리장치 점검", "시스템 원격 경보상태 점검"] },
  { code: "통신 13-5-1-2", name: "System State 및 Soft-Ware 점검", spec: "", unit: "개", labors: {"H/W시험사": 0.62}, category: "device", page: 457, keywords: ["경보통합처리장치 점검", "system state 및 soft-ware 점검"] },
  { code: "통신 13-5-1-2", name: "데이터 서비스 기능 점검", spec: "", unit: "개", labors: {"S/W시험사": 0.29}, category: "device", page: 457, keywords: ["데이터 서비스 기능 점검", "경보통합처리장치 점검"] },
  { code: "통신 13-5-1-2", name: "Radar 통제 시험", spec: "", unit: "개", labors: {"통신관련산업기사": 0.38}, category: "device", page: 457, keywords: ["radar 통제 시험", "경보통합처리장치 점검"] },
  { code: "통신 13-5-1-2", name: "Radar Target Data 처리시험", spec: "", unit: "개", labors: {"통신관련산업기사": 0.31}, category: "device", page: 457, keywords: ["radar target data 처리시험", "경보통합처리장치 점검"] },
  { code: "통신 13-5-1-3", name: "System State 및 Soft-Ware 점검", spec: "", unit: "개", labors: {"S/W시험사": 0.26}, category: "device", page: 458, keywords: ["기록장치 점검", "system state 및 soft-ware 점검"] },
  { code: "통신 13-5-1-3", name: "기록매체점검 (RW-CDROM, Tape-Backup, SCSI Hard Disk 포함)", spec: "", unit: "개", labors: {"통신관련산업기사": 0.83}, category: "device", page: 458, keywords: ["기록장치 점검", "기록매체점검 (rw-cdrom, tape-backup, scsi hard disk 포함)"] },
  { code: "통신 13-5-1-3", name: "Video Data Archived File 점검", spec: "", unit: "개", labors: {"통신관련산업기사": 0.13}, category: "device", page: 458, keywords: ["video data archived file 점검", "기록장치 점검"] },
  { code: "통신 13-5-1-3", name: "Tracking Data Archived File 점검", spec: "", unit: "개", labors: {"통신관련산업기사": 0.24, "S/W시험사": 0.11}, category: "device", page: 458, keywords: ["기록장치 점검", "tracking data archived file 점검"] },
  { code: "통신 13-5-1-3", name: "Voice Data Archived 점검", spec: "", unit: "개", labors: {"통신관련산업기사": 0.22}, category: "device", page: 458, keywords: ["기록장치 점검", "voice data archived 점검"] },
  { code: "통신 13-5-1-4", name: "Data 편집상태 기능점검", spec: "", unit: "개", labors: {"통신관련산업기사": 0.11}, category: "device", page: 458, keywords: ["data 편집상태 기능점검", "편집기 점검"] },
  { code: "통신 13-5-1-4", name: "System State 및 Soft-Ware 점검", spec: "", unit: "개", labors: {"S/W시험사": 0.6}, category: "device", page: 458, keywords: ["편집기 점검", "system state 및 soft-ware 점검"] },
  { code: "통신 13-5-1-4", name: "Mask Function 점검", spec: "", unit: "개", labors: {"통신관련산업기사": 0.13}, category: "device", page: 458, keywords: ["mask function 점검", "편집기 점검"] },
  { code: "통신 13-5-1-4", name: "전자해도(海圖)편집 및 오버레이 기능점검", spec: "", unit: "개", labors: {"통신관련산업기사": 0.21, "S/W시험사": 0.21}, category: "device", page: 458, keywords: ["편집기 점검", "전자해도(海圖)편집 및 오버레이 기능점검"] },
  { code: "통신 13-5-1-4", name: "Data 송출 시험점검", spec: "", unit: "개", labors: {"H/W시험사": 0.18}, category: "device", page: 458, keywords: ["편집기 점검", "data 송출 시험점검"] },
  { code: "통신 13-5-1-5", name: "Radar Video 상태점검", spec: "", unit: "개", labors: {"H/W시험사": 0.13}, category: "device", page: 459, keywords: ["radar video 상태점검", "데이터 재생장치 점검"] },
  { code: "통신 13-5-1-5", name: "Radar Tracking 상태점검", spec: "", unit: "개", labors: {"H/W시험사": 0.13}, category: "device", page: 459, keywords: ["radar tracking 상태점검", "데이터 재생장치 점검"] },
  { code: "통신 13-5-1-5", name: "Voice Data 상태점검", spec: "", unit: "개", labors: {"H/W시험사": 0.57}, category: "device", page: 459, keywords: ["voice data 상태점검", "데이터 재생장치 점검"] },
  { code: "통신 13-5-1-5", name: "Radar 및 Voice Data 동기화점검", spec: "", unit: "개", labors: {"통신관련산업기사": 0.17}, category: "device", page: 459, keywords: ["데이터 재생장치 점검", "radar 및 voice data 동기화점검"] },
  { code: "통신 13-5-1-6", name: "System State 및 Application Soft-Ware 점검", spec: "", unit: "개", labors: {"S/W시험사": 0.19}, category: "device", page: 459, keywords: ["system state 및 application soft-ware 점검", "센서서버장치 점검"] },
  { code: "통신 13-5-1-6", name: "Radar Service Module 점검", spec: "", unit: "개", labors: {"통신관련산업기사": 0.12}, category: "device", page: 459, keywords: ["radar service module 점검", "센서서버장치 점검"] },
  { code: "통신 13-5-1-6", name: "System Parameter 점검 및 조정", spec: "", unit: "개", labors: {"통신관련산업기사": 0.63}, category: "device", page: 459, keywords: ["system parameter 점검 및 조정", "센서서버장치 점검"] },
  { code: "통신 13-5-1-6", name: "연 동 시 험", spec: "", unit: "개", labors: {"통신관련산업기사": 0.39, "S/W시험사": 0.39}, category: "device", page: 459, keywords: ["연 동 시 험", "센서서버장치 점검"] },
  { code: "통신 13-5-1-7", name: "센 서", spec: "시 정 계", unit: "0.11", labors: {"통신관련산업기사": 0.15}, category: "device", page: 459, keywords: ["기상장비 점검", "시 정 계", "센 서"] },
  { code: "통신 13-5-1-7", name: "점 검", spec: "풍향, 풍속, 기압, 온도, 습도계", unit: "0.25", labors: {"통신관련산업기사": 0.29}, category: "device", page: 459, keywords: ["기상장비 점검", "풍향, 풍속, 기압, 온도, 습도계", "점 검"] },
  { code: "통신 13-5-1-7", name: "원격지 수신 DATA 점검", spec: "", unit: "-", labors: {"통신관련산업기사": 0.38, "H/W시험사": 0.34}, category: "device", page: 459, keywords: ["기상장비 점검", "원격지 수신 data 점검"] },
  { code: "통신 13-5-1-8", name: "Pick-up 및 Soft-Ware 점검", spec: "", unit: "개", labors: {"S/W시험사": 0.27, "H/W시험사": 0.27}, category: "device", page: 460, keywords: ["모니터 및 일반 데이타베이스 점검", "pick-up 및 soft-ware 점검"] },
  { code: "통신 13-5-1-8", name: "모니터 점검", spec: "", unit: "개", labors: {"통신관련산업기사": 0.11}, category: "device", page: 460, keywords: ["모니터 점검", "모니터 및 일반 데이타베이스 점검"] },
  { code: "통신 13-5-1-8", name: "일반 데이타베이스", spec: "", unit: "개", labors: {"S/W시험사": 0.21, "H/W시험사": 0.21}, category: "device", page: 460, keywords: ["일반 데이타베이스", "모니터 및 일반 데이타베이스 점검"] },
  { code: "통신 13-5-2", name: "안테나 점검", spec: "", unit: "개", labors: {"무선안테나공": 0.06}, category: "device", page: 460, keywords: ["무선통신기 점검", "안테나 점검"] },
  { code: "통신 13-5-2", name: "회로 결선상태 점검", spec: "", unit: "개", labors: {"통신관련산업기사": 0.08}, category: "device", page: 460, keywords: ["회로 결선상태 점검", "무선통신기 점검"] },
  { code: "통신 13-5-2", name: "표시부 및 주파수선택기능점검", spec: "", unit: "개", labors: {"통신관련산업기사": 0.09}, category: "device", page: 460, keywords: ["표시부 및 주파수선택기능점검", "무선통신기 점검"] },
  { code: "통신 13-5-2", name: "RF모듈점검", spec: "", unit: "개", labors: {"통신관련산업기사": 0.12}, category: "device", page: 460, keywords: ["무선통신기 점검", "rf모듈점검"] },
  { code: "통신 13-5-2", name: "원격제어점검", spec: "", unit: "개", labors: {"통신관련산업기사": 0.12, "H/W시험사": 0.1}, category: "device", page: 460, keywords: ["원격제어점검", "무선통신기 점검"] },
  { code: "통신 13-5-2", name: "공중선출력 및 주파수 측정, 교정", spec: "", unit: "개", labors: {"통신관련산업기사": 0.4, "H/W시험사": 0.38}, category: "device", page: 460, keywords: ["공중선출력 및 주파수 측정, 교정", "무선통신기 점검"] },
  { code: "통신 13-5-2", name: "Duplex 공중선 결합기 점검", spec: "", unit: "개", labors: {"통신관련산업기사": 0.13, "H/W시험사": 0.13}, category: "device", page: 460, keywords: ["duplex 공중선 결합기 점검", "무선통신기 점검"] },
  { code: "통신 13-5-2", name: "밴드패스필터(BPF) 점검", spec: "", unit: "개", labors: {"통신관련산업기사": 0.15, "H/W시험사": 0.15}, category: "device", page: 460, keywords: ["무선통신기 점검", "밴드패스필터(bpf) 점검"] },
  { code: "통신 13-5-2", name: "주파수 프로그램 설정 및 점검", spec: "", unit: "개", labors: {"통신관련산업기사": 0.08, "H/W시험사": 0.08}, category: "device", page: 460, keywords: ["주파수 프로그램 설정 및 점검", "무선통신기 점검"] },
  { code: "통신 13-5-3", name: "안테나 점검", spec: "", unit: "개", labors: {"통신관련산업기사": 1.53, "무선안테나공": 1.5}, category: "device", page: 461, keywords: ["초단파대역(vhf) 방향탐지기 점검", "안테나 점검"] },
  { code: "통신 13-5-3", name: "AM, FM 절체시험 및 레벨점검 (표적수신 방위 및 오차점검)", spec: "", unit: "개", labors: {"통신관련산업기사": 0.78, "H/W시험사": 0.75}, category: "device", page: 461, keywords: ["초단파대역(vhf) 방향탐지기 점검", "am, fm 절체시험 및 레벨점검 (표적수신 방위 및 오차점검)"] },
  { code: "통신 13-5-3", name: "Receiver와 Control Processor Card 및 Driver Switch Board 점검", spec: "", unit: "개", labors: {"통신관련산업기사": 0.38, "S/W시험사": 0.35, "H/W시험사": 0.35}, category: "device", page: 461, keywords: ["receiver와 control processor card 및 driver switch board 점검", "초단파대역(vhf) 방향탐지기 점검"] },
  { code: "통신 13-5-3", name: "AF 및 DF Output조정 점검", spec: "", unit: "개", labors: {"통신관련산업기사": 0.09, "무선안테나공": 0.06, "H/W시험사": 0.06}, category: "device", page: 461, keywords: ["초단파대역(vhf) 방향탐지기 점검", "af 및 df output조정 점검"] },
  { code: "통신 13-5-4-1", name: "구동기 및 안테나", spec: "기어오일점검 및 보충 (이물질제거 포함)", unit: "개", labors: {"통신관련기사": 0.35, "통신관련산업기사": 0.32, "무선안테나공": 0.32}, category: "device", page: 461, keywords: ["기어오일점검 및 보충 (이물질제거 포함)", "안테나 및 구동기, 송․수신기 점검", "구동기 및 안테나"] },
  { code: "통신 13-5-4-1", name: "․송수신기 (MTR)", spec: "Pulse별 주파수측정", unit: "개", labors: {"통신관련기사": 0.1, "H/W시험사": 0.07}, category: "device", page: 461, keywords: ["․송수신기 (mtr)", "안테나 및 구동기, 송․수신기 점검", "pulse별 주파수측정"] },
  { code: "통신 13-5-4-1", name: "Service PPI", spec: "고압부 및 휘선 Focus점검 조정", unit: "개", labors: {"통신관련산업기사": 0.13}, category: "device", page: 461, keywords: ["service ppi", "안테나 및 구동기, 송․수신기 점검", "고압부 및 휘선 focus점검 조정"] },
  { code: "통신 13-5-4-2", name: "레 이 더 추적장치", spec: "Processor Status점검", unit: "개", labors: {"통신관련기사": 0.36, "통신관련산업기사": 0.39}, category: "device", page: 462, keywords: ["processor status점검", "레 이 더 추적장치", "vts추적장치(vts extractor and tracker) 점검"] },
  { code: "통신 13-5-4-3", name: "P S레이더 원격제어 T 장치 (VRC) M 각", spec: "Pulse 및 MTR 절체 시험", unit: "개", labors: {"통신관련기사": 0.25, "H/W시험사": 0.25}, category: "device", page: 462, keywords: ["radar 원격제어장치 점검", "p s레이더 원격제어 t 장치 (vrc) m 각", "pulse 및 mtr 절체 시험"] },
  { code: "통신 13-5-4-4", name: "레 이 더 ․변복조기", spec: "입출력 신호(비디오, 트리거, 방위) 점검", unit: "개", labors: {"통신관련산업기사": 0.42, "H/W시험사": 0.3}, category: "device", page: 463, keywords: ["입출력 신호(비디오, 트리거, 방위) 점검", "레이더 신호분배기(radar interface mux) 점검", "레 이 더 ․변복조기"] },
  { code: "통신 13-5-5", name: "안테나 점검", spec: "", unit: "개", labors: {"통신관련산업기사": 0.23, "무선안테나공": 0.21}, category: "device", page: 463, keywords: ["해안 무선전송장치(mw : micro wave) 점검", "안테나 점검"] },
  { code: "통신 13-5-5", name: "전원부측정 및 점검", spec: "", unit: "개", labors: {"통신관련산업기사": 0.12, "H/W시험사": 0.1}, category: "device", page: 463, keywords: ["전원부측정 및 점검", "해안 무선전송장치(mw : micro wave) 점검"] },
  { code: "통신 13-5-5", name: "내부결선상태 점검(S/W포함)", spec: "", unit: "개", labors: {"통신관련산업기사": 0.32, "H/W시험사": 0.29}, category: "device", page: 463, keywords: ["해안 무선전송장치(mw : micro wave) 점검", "내부결선상태 점검(s/w포함)"] },
  { code: "통신 13-5-5", name: "패널 점검", spec: "", unit: "개", labors: {"통신관련기사": 0.18, "통신관련산업기사": 0.2}, category: "device", page: 463, keywords: ["해안 무선전송장치(mw : micro wave) 점검", "패널 점검"] },
  { code: "통신 13-5-5", name: "대역폭 및 송신출력 측정", spec: "", unit: "개", labors: {"통신관련산업기사": 0.22, "H/W시험사": 0.19}, category: "device", page: 463, keywords: ["대역폭 및 송신출력 측정", "해안 무선전송장치(mw : micro wave) 점검"] },
  { code: "통신 13-6-1", name: "전원부 및 충전기 점검", spec: "", unit: "개", labors: {"통신관련산업기사": 0.38}, category: "device", page: 464, keywords: ["전원부 및 충전기 점검", "gmdss mf/hf radio equipments(400w이하) 점검"] },
  { code: "통신 13-6-1", name: "Controller 및 SSB Mode 점검", spec: "", unit: "개", labors: {"S/W시험사": 0.78, "H/W시험사": 0.78}, category: "device", page: 464, keywords: ["controller 및 ssb mode 점검", "gmdss mf/hf radio equipments(400w이하) 점검"] },
  { code: "통신 13-6-1", name: "송신부(Transmitter Unit) 점검", spec: "", unit: "개", labors: {"통신관련산업기사": 0.66}, category: "device", page: 464, keywords: ["송신부(transmitter unit) 점검", "gmdss mf/hf radio equipments(400w이하) 점검"] },
  { code: "통신 13-6-1", name: "수신부(Receiver Unit) 점검", spec: "", unit: "개", labors: {"통신관련산업기사": 0.8}, category: "device", page: 464, keywords: ["수신부(receiver unit) 점검", "gmdss mf/hf radio equipments(400w이하) 점검"] },
  { code: "통신 13-6-1", name: "DSC Terminal Unit점검", spec: "", unit: "개", labors: {"S/W시험사": 0.5, "H/W시험사": 0.5}, category: "device", page: 464, keywords: ["dsc terminal unit점검", "gmdss mf/hf radio equipments(400w이하) 점검"] },
  { code: "통신 13-6-1", name: "NBDP Terminal Unit점검", spec: "", unit: "개", labors: {"S/W시험사": 0.44, "H/W시험사": 0.44}, category: "device", page: 464, keywords: ["gmdss mf/hf radio equipments(400w이하) 점검", "nbdp terminal unit점검"] },
  { code: "통신 13-6-1", name: "Print Unit점검", spec: "", unit: "개", labors: {"통신관련산업기사": 0.1}, category: "device", page: 464, keywords: ["print unit점검", "gmdss mf/hf radio equipments(400w이하) 점검"] },
  { code: "통신 13-6-1", name: "Auto Turning Unit점검", spec: "", unit: "개", labors: {"통신관련산업기사": 0.32}, category: "device", page: 464, keywords: ["auto turning unit점검", "gmdss mf/hf radio equipments(400w이하) 점검"] },
  { code: "통신 13-6-1", name: "주파수측정 및 교정", spec: "", unit: "개", labors: {"통신관련산업기사": 0.41}, category: "device", page: 464, keywords: ["주파수측정 및 교정", "gmdss mf/hf radio equipments(400w이하) 점검"] },
  { code: "통신 13-6-1", name: "공중선 출력측정 및 교정", spec: "", unit: "개", labors: {"통신관련산업기사": 0.37, "무선안테나공": 0.77}, category: "device", page: 464, keywords: ["gmdss mf/hf radio equipments(400w이하) 점검", "공중선 출력측정 및 교정"] },
  { code: "통신 13-6-1", name: "전원, 전압측정 및 교정", spec: "", unit: "개", labors: {"통신관련산업기사": 0.16}, category: "device", page: 464, keywords: ["gmdss mf/hf radio equipments(400w이하) 점검", "전원, 전압측정 및 교정"] },
  { code: "통신 13-6-1", name: "DSC해안국 및 NBDP해안국 시험", spec: "", unit: "개", labors: {"통신관련산업기사": 0.22}, category: "device", page: 464, keywords: ["dsc해안국 및 nbdp해안국 시험", "gmdss mf/hf radio equipments(400w이하) 점검"] },
  { code: "통신 13-6-1", name: "종합시험 및 인계", spec: "", unit: "개", labors: {"통신관련산업기사": 0.16}, category: "device", page: 464, keywords: ["종합시험 및 인계", "gmdss mf/hf radio equipments(400w이하) 점검"] },
  { code: "통신 13-6-2", name: "전원부 및 충전기 점검", spec: "", unit: "개", labors: {"통신관련산업기사": 0.32}, category: "device", page: 465, keywords: ["전원부 및 충전기 점검", "중‧단파송신기(250w이하) 점검"] },
  { code: "통신 13-6-2", name: "제어부(Control Unit) 점검", spec: "", unit: "개", labors: {"S/W시험사": 1.25, "H/W시험사": 1.25}, category: "device", page: 465, keywords: ["중‧단파송신기(250w이하) 점검", "제어부(control unit) 점검"] },
  { code: "통신 13-6-2", name: "송신부(Transmitter Unit) 점검", spec: "", unit: "개", labors: {"통신관련산업기사": 0.74}, category: "device", page: 465, keywords: ["송신부(transmitter unit) 점검", "중‧단파송신기(250w이하) 점검"] },
  { code: "통신 13-6-2", name: "수신부(Receiver Unit) 점검", spec: "", unit: "개", labors: {"통신관련산업기사": 0.79}, category: "device", page: 465, keywords: ["수신부(receiver unit) 점검", "중‧단파송신기(250w이하) 점검"] },
  { code: "통신 13-6-2", name: "주파수측정 및 교정", spec: "", unit: "개", labors: {"통신관련산업기사": 0.43}, category: "device", page: 465, keywords: ["주파수측정 및 교정", "중‧단파송신기(250w이하) 점검"] },
  { code: "통신 13-6-2", name: "공중선 출력측정 및 교정", spec: "", unit: "개", labors: {"통신관련산업기사": 0.19, "무선안테나공": 0.77}, category: "device", page: 465, keywords: ["중‧단파송신기(250w이하) 점검", "공중선 출력측정 및 교정"] },
  { code: "통신 13-6-2", name: "전원, 전압측정 및 교정", spec: "", unit: "개", labors: {"통신관련산업기사": 0.1}, category: "device", page: 465, keywords: ["중‧단파송신기(250w이하) 점검", "전원, 전압측정 및 교정"] },
  { code: "통신 13-6-2", name: "해안국 시험", spec: "", unit: "개", labors: {"통신관련산업기사": 0.12}, category: "device", page: 465, keywords: ["중‧단파송신기(250w이하) 점검", "해안국 시험"] },
  { code: "통신 13-6-2", name: "종합시험 및 인계", spec: "", unit: "개", labors: {"통신관련산업기사": 0.1}, category: "device", page: 465, keywords: ["종합시험 및 인계", "중‧단파송신기(250w이하) 점검"] },
  { code: "통신 13-6-3", name: "전원부 점검", spec: "", unit: "개", labors: {"통신관련산업기사": 0.3}, category: "device", page: 465, keywords: ["전원부 점검", "전파수신기(30mhz이하) 점검"] },
  { code: "통신 13-6-3", name: "수신부(Receiver Unit) 점검", spec: "", unit: "개", labors: {"통신관련산업기사": 0.58}, category: "device", page: 465, keywords: ["수신부(receiver unit) 점검", "전파수신기(30mhz이하) 점검"] },
  { code: "통신 13-6-3", name: "주파수측정 및 교정", spec: "", unit: "개", labors: {"통신관련산업기사": 0.31}, category: "device", page: 465, keywords: ["주파수측정 및 교정", "전파수신기(30mhz이하) 점검"] },
  { code: "통신 13-6-3", name: "전원, 전압측정 및 교정", spec: "", unit: "개", labors: {"통신관련산업기사": 0.16}, category: "device", page: 465, keywords: ["전파수신기(30mhz이하) 점검", "전원, 전압측정 및 교정"] },
  { code: "통신 13-6-3", name: "종합시험 및 인계", spec: "", unit: "개", labors: {"통신관련산업기사": 0.19}, category: "device", page: 465, keywords: ["종합시험 및 인계", "전파수신기(30mhz이하) 점검"] },
  { code: "통신 13-6-4", name: "전원부 및 충전기 점검", spec: "", unit: "개", labors: {"통신관련산업기사": 0.36}, category: "device", page: 466, keywords: ["전원부 및 충전기 점검", "ssb송수신기(100w이하) 점검"] },
  { code: "통신 13-6-4", name: "SSB Transceiver Unit 점검", spec: "", unit: "개", labors: {"통신관련산업기사": 0.35}, category: "device", page: 466, keywords: ["ssb transceiver unit 점검", "ssb송수신기(100w이하) 점검"] },
  { code: "통신 13-6-4", name: "Auto Turning Unit점검", spec: "", unit: "개", labors: {"통신관련산업기사": 0.23}, category: "device", page: 466, keywords: ["auto turning unit점검", "ssb송수신기(100w이하) 점검"] },
  { code: "통신 13-6-4", name: "주파수측정 및 교정", spec: "", unit: "개", labors: {"통신관련산업기사": 0.31}, category: "device", page: 466, keywords: ["주파수측정 및 교정", "ssb송수신기(100w이하) 점검"] },
  { code: "통신 13-6-4", name: "공중선 출력 측정 및 교정", spec: "", unit: "개", labors: {"통신관련산업기사": 0.24, "무선안테나공": 0.7}, category: "device", page: 466, keywords: ["공중선 출력 측정 및 교정", "ssb송수신기(100w이하) 점검"] },
  { code: "통신 13-6-4", name: "전원, 전압 측정 및 교정", spec: "", unit: "개", labors: {"통신관련산업기사": 0.16}, category: "device", page: 466, keywords: ["전원, 전압 측정 및 교정", "ssb송수신기(100w이하) 점검"] },
  { code: "통신 13-6-4", name: "해안국 시험", spec: "", unit: "개", labors: {"통신관련산업기사": 0.16}, category: "device", page: 466, keywords: ["해안국 시험", "ssb송수신기(100w이하) 점검"] },
  { code: "통신 13-6-4", name: "종합시험 및 인계", spec: "", unit: "개", labors: {"통신관련산업기사": 0.19}, category: "device", page: 466, keywords: ["종합시험 및 인계", "ssb송수신기(100w이하) 점검"] },
  { code: "통신 13-6-5", name: "전원부 및 충전기 점검", spec: "", unit: "개", labors: {"통신관련산업기사": 0.16}, category: "device", page: 466, keywords: ["전원부 및 충전기 점검", "ssb송수신기(27mhz 전용, 10w이하) 점검"] },
  { code: "통신 13-6-5", name: "27MHz 전용Transceiver 점검", spec: "", unit: "개", labors: {"통신관련산업기사": 0.54}, category: "device", page: 466, keywords: ["27mhz 전용transceiver 점검", "ssb송수신기(27mhz 전용, 10w이하) 점검"] },
  { code: "통신 13-6-5", name: "주파수측정 및 교정", spec: "", unit: "개", labors: {"통신관련산업기사": 0.12}, category: "device", page: 466, keywords: ["주파수측정 및 교정", "ssb송수신기(27mhz 전용, 10w이하) 점검"] },
  { code: "통신 13-6-5", name: "공중선 출력 측정 및 교정", spec: "", unit: "개", labors: {"통신관련산업기사": 0.12}, category: "device", page: 466, keywords: ["공중선 출력 측정 및 교정", "ssb송수신기(27mhz 전용, 10w이하) 점검"] },
  { code: "통신 13-6-5", name: "전원, 전압 측정 및 교정", spec: "", unit: "개", labors: {"통신관련산업기사": 0.12}, category: "device", page: 466, keywords: ["전원, 전압 측정 및 교정", "ssb송수신기(27mhz 전용, 10w이하) 점검"] },
  { code: "통신 13-6-5", name: "해안국 시험", spec: "", unit: "개", labors: {"통신관련산업기사": 0.16}, category: "device", page: 466, keywords: ["ssb송수신기(27mhz 전용, 10w이하) 점검", "해안국 시험"] },
  { code: "통신 13-6-5", name: "종합시험 및 인계", spec: "", unit: "개", labors: {"통신관련산업기사": 0.14}, category: "device", page: 466, keywords: ["종합시험 및 인계", "ssb송수신기(27mhz 전용, 10w이하) 점검"] },
  { code: "통신 13-6-6", name: "전원부 점검", spec: "", unit: "개", labors: {"통신관련산업기사": 0.3}, category: "device", page: 467, keywords: ["vhf dsc radio telephone (25w이하) 점검", "전원부 점검"] },
  { code: "통신 13-6-6", name: "송신부(Transmitter Unit) 점검", spec: "", unit: "개", labors: {"통신관련산업기사": 0.42}, category: "device", page: 467, keywords: ["송신부(transmitter unit) 점검", "vhf dsc radio telephone (25w이하) 점검"] },
  { code: "통신 13-6-6", name: "수신부(Receiver Unit) 점검", spec: "", unit: "개", labors: {"통신관련산업기사": 0.3}, category: "device", page: 467, keywords: ["vhf dsc radio telephone (25w이하) 점검", "수신부(receiver unit) 점검"] },
  { code: "통신 13-6-6", name: "DSC Terminal Unit 및 Control 점검", spec: "", unit: "개", labors: {"S/W시험사": 0.77, "H/W시험사": 0.77}, category: "device", page: 467, keywords: ["vhf dsc radio telephone (25w이하) 점검", "dsc terminal unit 및 control 점검"] },
  { code: "통신 13-6-6", name: "Antenna Unit 점검", spec: "", unit: "개", labors: {"통신관련산업기사": 0.2, "무선안테나공": 0.7}, category: "device", page: 467, keywords: ["antenna unit 점검", "vhf dsc radio telephone (25w이하) 점검"] },
  { code: "통신 13-6-6", name: "주파수측정 및 교정", spec: "", unit: "개", labors: {"통신관련산업기사": 0.15}, category: "device", page: 467, keywords: ["주파수측정 및 교정", "vhf dsc radio telephone (25w이하) 점검"] },
  { code: "통신 13-6-6", name: "공중선 출력측정 및 교정", spec: "", unit: "개", labors: {"통신관련산업기사": 0.15}, category: "device", page: 467, keywords: ["vhf dsc radio telephone (25w이하) 점검", "공중선 출력측정 및 교정"] },
  { code: "통신 13-6-6", name: "전원, 전압 측정 및 교정", spec: "", unit: "개", labors: {"통신관련산업기사": 0.25}, category: "device", page: 467, keywords: ["전원, 전압 측정 및 교정", "vhf dsc radio telephone (25w이하) 점검"] },
  { code: "통신 13-6-6", name: "DSC해안국시험", spec: "", unit: "개", labors: {"통신관련산업기사": 0.1}, category: "device", page: 467, keywords: ["dsc해안국시험", "vhf dsc radio telephone (25w이하) 점검"] },
  { code: "통신 13-6-6", name: "종합시험 및 인계", spec: "", unit: "개", labors: {"통신관련산업기사": 0.2}, category: "device", page: 467, keywords: ["vhf dsc radio telephone (25w이하) 점검", "종합시험 및 인계"] },
  { code: "통신 13-6-7", name: "송신부(Transmitter Unit) 점검", spec: "", unit: "개", labors: {"통신관련산업기사": 0.36}, category: "device", page: 467, keywords: ["송신부(transmitter unit) 점검", "초단파대 양방향 무선전화장치"] },
  { code: "통신 13-6-7", name: "수신부(Receiver Unit) 점검", spec: "", unit: "개", labors: {"통신관련산업기사": 0.46}, category: "device", page: 467, keywords: ["수신부(receiver unit) 점검", "초단파대 양방향 무선전화장치"] },
  { code: "통신 13-6-7", name: "공중선 출력측정 및 교정", spec: "", unit: "개", labors: {"통신관련산업기사": 0.1}, category: "device", page: 467, keywords: ["초단파대 양방향 무선전화장치", "공중선 출력측정 및 교정"] },
  { code: "통신 13-6-7", name: "종합시험 및 인계", spec: "", unit: "개", labors: {"통신관련산업기사": 0.1}, category: "device", page: 467, keywords: ["종합시험 및 인계", "초단파대 양방향 무선전화장치"] },
  { code: "통신 13-6-8", name: "전원부 점검", spec: "", unit: "개", labors: {"통신관련산업기사": 0.19}, category: "device", page: 468, keywords: ["선박용 위성tv(무궁화 위성) 점검", "전원부 점검"] },
  { code: "통신 13-6-8", name: "ADE(Above Deck Equip)점검", spec: "", unit: "개", labors: {"무선안테나공": 0.52, "H/W시험사": 0.3, "S/W시험사": 0.3}, category: "device", page: 468, keywords: ["ade(above deck equip)점검", "선박용 위성tv(무궁화 위성) 점검"] },
  { code: "통신 13-6-8", name: "BDE(Bellow Deck Equip)점검", spec: "", unit: "개", labors: {"통신관련산업기사": 0.29}, category: "device", page: 468, keywords: ["bde(bellow deck equip)점검", "선박용 위성tv(무궁화 위성) 점검"] },
  { code: "통신 13-6-8", name: "신호측정 및 교정", spec: "", unit: "개", labors: {"H/W시험사": 0.49, "S/W시험사": 0.49}, category: "device", page: 468, keywords: ["선박용 위성tv(무궁화 위성) 점검", "신호측정 및 교정"] },
  { code: "통신 13-6-8", name: "전원전압 측정 및 교정", spec: "", unit: "개", labors: {"통신관련산업기사": 0.1}, category: "device", page: 468, keywords: ["전원전압 측정 및 교정", "선박용 위성tv(무궁화 위성) 점검"] },
  { code: "통신 13-6-8", name: "종합시험 및 인계", spec: "", unit: "개", labors: {"통신관련산업기사": 0.19}, category: "device", page: 468, keywords: ["선박용 위성tv(무궁화 위성) 점검", "종합시험 및 인계"] },
  { code: "통신 13-6-9", name: "전원부 점검", spec: "", unit: "개", labors: {"통신관련산업기사": 0.29}, category: "device", page: 468, keywords: ["인마세트 선박지구국(inmarsat) 표준 a, b형 점검", "전원부 점검"] },
  { code: "통신 13-6-9", name: "ADE 점검", spec: "", unit: "개", labors: {"통신관련산업기사": 0.19, "무선안테나공": 1.02, "H/W시험사": 0.61, "S/W시험사": 0.61}, category: "device", page: 468, keywords: ["ade 점검", "인마세트 선박지구국(inmarsat) 표준 a, b형 점검"] },
  { code: "통신 13-6-9", name: "BDE 점검", spec: "", unit: "개", labors: {"통신관련산업기사": 0.16, "H/W시험사": 0.53, "S/W시험사": 0.53}, category: "device", page: 468, keywords: ["bde 점검", "인마세트 선박지구국(inmarsat) 표준 a, b형 점검"] },
  { code: "통신 13-6-9", name: "Print Unit 점검", spec: "", unit: "개", labors: {"통신관련산업기사": 0.32}, category: "device", page: 468, keywords: ["인마세트 선박지구국(inmarsat) 표준 a, b형 점검", "print unit 점검"] },
  { code: "통신 13-6-9", name: "Facsimile Receiver 점검", spec: "", unit: "개", labors: {"통신관련산업기사": 0.33, "S/W시험사": 0.33}, category: "device", page: 468, keywords: ["인마세트 선박지구국(inmarsat) 표준 a, b형 점검", "facsimile receiver 점검"] },
  { code: "통신 13-6-9", name: "주파수 측정 및 교정", spec: "", unit: "개", labors: {"통신관련산업기사": 0.4, "S/W시험사": 0.4}, category: "device", page: 468, keywords: ["주파수 측정 및 교정", "인마세트 선박지구국(inmarsat) 표준 a, b형 점검"] },
  { code: "통신 13-6-9", name: "전원전압 측정 및 교정", spec: "", unit: "개", labors: {"통신관련산업기사": 0.3}, category: "device", page: 468, keywords: ["전원전압 측정 및 교정", "인마세트 선박지구국(inmarsat) 표준 a, b형 점검"] },
  { code: "통신 13-6-9", name: "종합시험 및 인계", spec: "", unit: "개", labors: {"통신관련산업기사": 0.48, "H/W시험사": 0.48, "S/W시험사": 0.48}, category: "device", page: 468, keywords: ["종합시험 및 인계", "인마세트 선박지구국(inmarsat) 표준 a, b형 점검"] },
  { code: "통신 13-6-10", name: "전원부 점검", spec: "", unit: "개", labors: {"통신관련산업기사": 0.3}, category: "device", page: 469, keywords: ["인마세트 선박지구국(inmarsat) 표준 c형 점검", "전원부 점검"] },
  { code: "통신 13-6-10", name: "EME 점검", spec: "", unit: "개", labors: {"통신관련산업기사": 0.36, "무선안테나공": 0.87}, category: "device", page: 469, keywords: ["인마세트 선박지구국(inmarsat) 표준 c형 점검", "eme 점검"] },
  { code: "통신 13-6-10", name: "IME 점검", spec: "", unit: "개", labors: {"통신관련산업기사": 0.29, "H/W시험사": 0.57, "S/W시험사": 0.78}, category: "device", page: 469, keywords: ["인마세트 선박지구국(inmarsat) 표준 c형 점검", "ime 점검"] },
  { code: "통신 13-6-10", name: "Print Unit 점검", spec: "", unit: "개", labors: {"통신관련산업기사": 0.16}, category: "device", page: 469, keywords: ["인마세트 선박지구국(inmarsat) 표준 c형 점검", "print unit 점검"] },
  { code: "통신 13-6-10", name: "신호측정 및 교정", spec: "", unit: "개", labors: {"통신관련산업기사": 0.15}, category: "device", page: 469, keywords: ["인마세트 선박지구국(inmarsat) 표준 c형 점검", "신호측정 및 교정"] },
  { code: "통신 13-6-10", name: "전원전압 측정 및 교정", spec: "", unit: "개", labors: {"통신관련산업기사": 0.15}, category: "device", page: 469, keywords: ["전원전압 측정 및 교정", "인마세트 선박지구국(inmarsat) 표준 c형 점검"] },
  { code: "통신 13-6-10", name: "종합시험 및 인계", spec: "", unit: "개", labors: {"통신관련산업기사": 0.34, "H/W시험사": 0.34, "S/W시험사": 0.34}, category: "device", page: 469, keywords: ["종합시험 및 인계", "인마세트 선박지구국(inmarsat) 표준 c형 점검"] },
  { code: "통신 13-6-11", name: "전원부 점검", spec: "", unit: "개", labors: {"통신관련산업기사": 0.31}, category: "device", page: 469, keywords: ["인마세트 선박지구국(inmarsat) 표준 m, fb형, vsat형 점검", "전원부 점검"] },
  { code: "통신 13-6-11", name: "Antenna Unit 점검", spec: "", unit: "개", labors: {"무선안테나공": 0.91, "H/W시험사": 0.63, "S/W시험사": 0.63}, category: "device", page: 469, keywords: ["antenna unit 점검", "인마세트 선박지구국(inmarsat) 표준 m, fb형, vsat형 점검"] },
  { code: "통신 13-6-11", name: "Main Unit 점검", spec: "", unit: "개", labors: {"통신관련산업기사": 0.15, "H/W시험사": 0.44, "S/W시험사": 0.44}, category: "device", page: 469, keywords: ["인마세트 선박지구국(inmarsat) 표준 m, fb형, vsat형 점검", "main unit 점검"] },
  { code: "통신 13-6-11", name: "Print Unit 점검", spec: "", unit: "개", labors: {"통신관련산업기사": 0.22}, category: "device", page: 469, keywords: ["인마세트 선박지구국(inmarsat) 표준 m, fb형, vsat형 점검", "print unit 점검"] },
  { code: "통신 13-6-11", name: "주파수 측정 및 교정", spec: "", unit: "개", labors: {"통신관련산업기사": 0.46, "S/W시험사": 0.46}, category: "device", page: 469, keywords: ["주파수 측정 및 교정", "인마세트 선박지구국(inmarsat) 표준 m, fb형, vsat형 점검"] },
  { code: "통신 13-6-11", name: "전원전압 측정 및 교정", spec: "", unit: "개", labors: {"통신관련산업기사": 0.15}, category: "device", page: 469, keywords: ["전원전압 측정 및 교정", "인마세트 선박지구국(inmarsat) 표준 m, fb형, vsat형 점검"] },
  { code: "통신 13-6-11", name: "종합시험 및 인계", spec: "", unit: "개", labors: {"통신관련산업기사": 0.36, "H/W시험사": 0.36, "S/W시험사": 0.36}, category: "device", page: 469, keywords: ["종합시험 및 인계", "인마세트 선박지구국(inmarsat) 표준 m, fb형, vsat형 점검"] },
  { code: "통신 13-6-12", name: "전원부 점검", spec: "", unit: "개", labors: {"통신관련산업기사": 0.32}, category: "device", page: 470, keywords: ["선속계(doppler log) 점검", "전원부 점검"] },
  { code: "통신 13-6-12", name: "Display Unit 점검", spec: "", unit: "개", labors: {"통신관련산업기사": 0.43}, category: "device", page: 470, keywords: ["선속계(doppler log) 점검", "display unit 점검"] },
  { code: "통신 13-6-12", name: "선저 Sensor Unit점검", spec: "", unit: "개", labors: {"통신관련산업기사": 1.16}, category: "device", page: 470, keywords: ["선속계(doppler log) 점검", "선저 sensor unit점검"] },
  { code: "통신 13-6-12", name: "Speed 측정 및 교정", spec: "", unit: "개", labors: {"통신관련산업기사": 1.12}, category: "device", page: 470, keywords: ["선속계(doppler log) 점검", "speed 측정 및 교정"] },
  { code: "통신 13-6-12", name: "종합시험 및 인계", spec: "", unit: "개", labors: {"통신관련산업기사": 0.37}, category: "device", page: 470, keywords: ["선속계(doppler log) 점검", "종합시험 및 인계"] },
  { code: "통신 13-6-13", name: "전원부 점검", spec: "", unit: "개", labors: {"통신관련산업기사": 0.37}, category: "device", page: 470, keywords: ["선내지령장치(marine public addresser) 점검", "전원부 점검"] },
  { code: "통신 13-6-13", name: "Power Amplifier Unit점검", spec: "", unit: "개", labors: {"통신관련산업기사": 0.45}, category: "device", page: 470, keywords: ["power amplifier unit점검", "선내지령장치(marine public addresser) 점검"] },
  { code: "통신 13-6-13", name: "Control Unit점검", spec: "", unit: "개", labors: {"통신관련산업기사": 0.68}, category: "device", page: 470, keywords: ["control unit점검", "선내지령장치(marine public addresser) 점검"] },
  { code: "통신 13-6-13", name: "외부 Horn Speaker 점검", spec: "", unit: "개", labors: {"통신관련산업기사": 0.49}, category: "device", page: 470, keywords: ["선내지령장치(marine public addresser) 점검", "외부 horn speaker 점검"] },
  { code: "통신 13-6-13", name: "실내 Speaker 점검", spec: "", unit: "개", labors: {"통신관련산업기사": 0.37}, category: "device", page: 470, keywords: ["선내지령장치(marine public addresser) 점검", "실내 speaker 점검"] },
  { code: "통신 13-6-13", name: "전원전압측정 및 교정", spec: "", unit: "개", labors: {"통신관련산업기사": 0.25}, category: "device", page: 470, keywords: ["선내지령장치(marine public addresser) 점검", "전원전압측정 및 교정"] },
  { code: "통신 13-6-13", name: "종합시험 및 인계", spec: "", unit: "개", labors: {"통신관련산업기사": 0.31}, category: "device", page: 470, keywords: ["선내지령장치(marine public addresser) 점검", "종합시험 및 인계"] },
  { code: "통신 13-6-14", name: "전원부 점검", spec: "", unit: "개", labors: {"통신관련산업기사": 0.28}, category: "device", page: 471, keywords: ["전원부 점검", "기상수신기(weather facsimile receiver) 점검"] },
  { code: "통신 13-6-14", name: "Fax Receiver Unit 점검", spec: "", unit: "개", labors: {"통신관련산업기사": 0.41}, category: "device", page: 471, keywords: ["기상수신기(weather facsimile receiver) 점검", "fax receiver unit 점검"] },
  { code: "통신 13-6-14", name: "Antenna Unit점검", spec: "", unit: "개", labors: {"통신관련산업기사": 0.15, "무선안테나공": 0.66}, category: "device", page: 471, keywords: ["antenna unit점검", "기상수신기(weather facsimile receiver) 점검"] },
  { code: "통신 13-6-14", name: "Printer Unit 점검", spec: "", unit: "개", labors: {"통신관련산업기사": 0.26}, category: "device", page: 471, keywords: ["printer unit 점검", "기상수신기(weather facsimile receiver) 점검"] },
  { code: "통신 13-6-14", name: "수신감도측정 및 교정", spec: "", unit: "개", labors: {"통신관련산업기사": 0.16}, category: "device", page: 471, keywords: ["수신감도측정 및 교정", "기상수신기(weather facsimile receiver) 점검"] },
  { code: "통신 13-6-14", name: "전원전압측정 및 교정", spec: "", unit: "개", labors: {"통신관련산업기사": 0.1}, category: "device", page: 471, keywords: ["전원전압측정 및 교정", "기상수신기(weather facsimile receiver) 점검"] },
  { code: "통신 13-6-14", name: "종합시험 및 인계", spec: "", unit: "개", labors: {"통신관련산업기사": 0.1}, category: "device", page: 471, keywords: ["종합시험 및 인계", "기상수신기(weather facsimile receiver) 점검"] },
  { code: "통신 13-6-15", name: "전원부 점검", spec: "", unit: "개", labors: {"통신관련산업기사": 0.37}, category: "device", page: 471, keywords: ["전원부 점검", "풍향풍속계 점검"] },
  { code: "통신 13-6-15", name: "Display Unit 점검", spec: "", unit: "개", labors: {"통신관련산업기사": 0.4}, category: "device", page: 471, keywords: ["풍향풍속계 점검", "display unit 점검"] },
  { code: "통신 13-6-15", name: "Wind Transmitter 점검", spec: "", unit: "개", labors: {"통신관련산업기사": 1.07}, category: "device", page: 471, keywords: ["wind transmitter 점검", "풍향풍속계 점검"] },
  { code: "통신 13-6-15", name: "풍향/풍속 측정 및 교정", spec: "", unit: "개", labors: {"통신관련산업기사": 0.62}, category: "device", page: 471, keywords: ["풍향/풍속 측정 및 교정", "풍향풍속계 점검"] },
  { code: "통신 13-6-15", name: "종합시험 및 인계", spec: "", unit: "개", labors: {"통신관련산업기사": 0.18}, category: "device", page: 471, keywords: ["종합시험 및 인계", "풍향풍속계 점검"] },
  { code: "통신 13-6-16", name: "전원부 및 충전기 점검", spec: "", unit: "개", labors: {"통신관련산업기사": 0.3}, category: "device", page: 472, keywords: ["marine radar(10kw이하) 점검", "전원부 및 충전기 점검"] },
  { code: "통신 13-6-16", name: "Display Unit 점검", spec: "", unit: "개", labors: {"통신관련산업기사": 0.48}, category: "device", page: 472, keywords: ["marine radar(10kw이하) 점검", "display unit 점검"] },
  { code: "통신 13-6-16", name: "Transceiver Unit 점검", spec: "", unit: "개", labors: {"통신관련산업기사": 0.31}, category: "device", page: 472, keywords: ["marine radar(10kw이하) 점검", "transceiver unit 점검"] },
  { code: "통신 13-6-16", name: "Scanner Unit 점검", spec: "", unit: "개", labors: {"통신관련산업기사": 0.8, "무선안테나공": 1.44}, category: "device", page: 472, keywords: ["marine radar(10kw이하) 점검", "scanner unit 점검"] },
  { code: "통신 13-6-16", name: "ARPA Unit 점검", spec: "", unit: "개", labors: {"통신관련산업기사": 0.6}, category: "device", page: 472, keywords: ["arpa unit 점검", "marine radar(10kw이하) 점검"] },
  { code: "통신 13-6-16", name: "신호측정 및 교정", spec: "", unit: "개", labors: {"통신관련산업기사": 0.28}, category: "device", page: 472, keywords: ["marine radar(10kw이하) 점검", "신호측정 및 교정"] },
  { code: "통신 13-6-16", name: "전원전압측정 및 교정", spec: "", unit: "개", labors: {"통신관련산업기사": 0.1}, category: "device", page: 472, keywords: ["marine radar(10kw이하) 점검", "전원전압측정 및 교정"] },
  { code: "통신 13-6-16", name: "종합시험 및 인계", spec: "", unit: "개", labors: {"통신관련산업기사": 0.1}, category: "device", page: 472, keywords: ["marine radar(10kw이하) 점검", "종합시험 및 인계"] },
  { code: "통신 13-6-17", name: "Radar Transponder 점검", spec: "", unit: "개", labors: {"통신관련산업기사": 0.67}, category: "device", page: 472, keywords: ["radar transponder 점검", "레이더 트랜스폰더(sart) 점검"] },
  { code: "통신 13-6-17", name: "주파수측정 및 교정", spec: "", unit: "개", labors: {"통신관련산업기사": 0.21}, category: "device", page: 472, keywords: ["주파수측정 및 교정", "레이더 트랜스폰더(sart) 점검"] },
  { code: "통신 13-6-17", name: "공중선 수신감도 측정 및 교정", spec: "", unit: "개", labors: {"통신관련산업기사": 0.22}, category: "device", page: 472, keywords: ["레이더 트랜스폰더(sart) 점검", "공중선 수신감도 측정 및 교정"] },
  { code: "통신 13-6-17", name: "종합시험 및 인계", spec: "", unit: "개", labors: {"통신관련산업기사": 0.2}, category: "device", page: 472, keywords: ["종합시험 및 인계", "레이더 트랜스폰더(sart) 점검"] },
  { code: "통신 13-6-18", name: "SAT/EPIRB 점검", spec: "", unit: "개", labors: {"통신관련산업기사": 0.77}, category: "device", page: 473, keywords: ["sat/epirb 점검", "위성 비상위치 지시용 무선표지 설비(sat / epirb) 점검"] },
  { code: "통신 13-6-18", name: "주파수측정 및 교정", spec: "", unit: "개", labors: {"통신관련산업기사": 0.24}, category: "device", page: 473, keywords: ["주파수측정 및 교정", "위성 비상위치 지시용 무선표지 설비(sat / epirb) 점검"] },
  { code: "통신 13-6-18", name: "공중선 출력측정 및 교정", spec: "", unit: "개", labors: {"통신관련산업기사": 0.21}, category: "device", page: 473, keywords: ["위성 비상위치 지시용 무선표지 설비(sat / epirb) 점검", "공중선 출력측정 및 교정"] },
  { code: "통신 13-6-18", name: "전원, 전압 측정 및 교정", spec: "", unit: "개", labors: {"통신관련산업기사": 0.16}, category: "device", page: 473, keywords: ["전원, 전압 측정 및 교정", "위성 비상위치 지시용 무선표지 설비(sat / epirb) 점검"] },
  { code: "통신 13-6-18", name: "종합시험 및 인계", spec: "", unit: "개", labors: {"통신관련산업기사": 0.16}, category: "device", page: 473, keywords: ["종합시험 및 인계", "위성 비상위치 지시용 무선표지 설비(sat / epirb) 점검"] },
  { code: "통신 13-6-19", name: "전원부 점검", spec: "", unit: "개", labors: {"통신관련산업기사": 0.24}, category: "device", page: 473, keywords: ["무선방향탐지기(radio direction finder) 점검", "전원부 점검"] },
  { code: "통신 13-6-19", name: "영상부(Video Unit) 점검", spec: "", unit: "개", labors: {"통신관련산업기사": 0.63}, category: "device", page: 473, keywords: ["무선방향탐지기(radio direction finder) 점검", "영상부(video unit) 점검"] },
  { code: "통신 13-6-19", name: "수신부(Receiver Unit) 점검", spec: "", unit: "개", labors: {"통신관련산업기사": 0.44}, category: "device", page: 473, keywords: ["무선방향탐지기(radio direction finder) 점검", "수신부(receiver unit) 점검"] },
  { code: "통신 13-6-19", name: "루프안테나 점검", spec: "", unit: "개", labors: {"무선안테나공": 1.0}, category: "device", page: 473, keywords: ["무선방향탐지기(radio direction finder) 점검", "루프안테나 점검"] },
  { code: "통신 13-6-19", name: "오차측정 및 교정", spec: "", unit: "개", labors: {"통신관련산업기사": 0.6}, category: "device", page: 473, keywords: ["무선방향탐지기(radio direction finder) 점검", "오차측정 및 교정"] },
  { code: "통신 13-6-19", name: "전원, 전압측정 및 교정", spec: "", unit: "개", labors: {"통신관련산업기사": 0.16}, category: "device", page: 473, keywords: ["무선방향탐지기(radio direction finder) 점검", "전원, 전압측정 및 교정"] },
  { code: "통신 13-6-19", name: "종합시험 및 인계", spec: "", unit: "개", labors: {"통신관련산업기사": 0.16}, category: "device", page: 473, keywords: ["무선방향탐지기(radio direction finder) 점검", "종합시험 및 인계"] },
  { code: "통신 13-6-20", name: "전원부 점검", spec: "", unit: "개", labors: {"통신관련산업기사": 0.21}, category: "device", page: 474, keywords: ["라디오부이 선택호출장치(sell-call signal generator) 점검", "전원부 점검"] },
  { code: "통신 13-6-20", name: "Calling Transmitter 점검", spec: "", unit: "개", labors: {"통신관련산업기사": 0.32}, category: "device", page: 474, keywords: ["calling transmitter 점검", "라디오부이 선택호출장치(sell-call signal generator) 점검"] },
  { code: "통신 13-6-20", name: "Calling Signal Generator 점검", spec: "", unit: "개", labors: {"통신관련산업기사": 0.26}, category: "device", page: 474, keywords: ["라디오부이 선택호출장치(sell-call signal generator) 점검", "calling signal generator 점검"] },
  { code: "통신 13-6-20", name: "주파수측정 및 교정", spec: "", unit: "개", labors: {"통신관련산업기사": 0.13}, category: "device", page: 474, keywords: ["주파수측정 및 교정", "라디오부이 선택호출장치(sell-call signal generator) 점검"] },
  { code: "통신 13-6-20", name: "공중선 출력측정 및 교정", spec: "", unit: "개", labors: {"통신관련산업기사": 0.2}, category: "device", page: 474, keywords: ["라디오부이 선택호출장치(sell-call signal generator) 점검", "공중선 출력측정 및 교정"] },
  { code: "통신 13-6-20", name: "전원전압측정 및 교정", spec: "", unit: "개", labors: {"통신관련산업기사": 0.13}, category: "device", page: 474, keywords: ["라디오부이 선택호출장치(sell-call signal generator) 점검", "전원전압측정 및 교정"] },
  { code: "통신 13-6-20", name: "SELL CALL 시험", spec: "", unit: "개", labors: {"통신관련산업기사": 0.29}, category: "device", page: 474, keywords: ["sell call 시험", "라디오부이 선택호출장치(sell-call signal generator) 점검"] },
  { code: "통신 13-6-20", name: "종합시험 및 인계", spec: "", unit: "개", labors: {"통신관련산업기사": 0.16}, category: "device", page: 474, keywords: ["종합시험 및 인계", "라디오부이 선택호출장치(sell-call signal generator) 점검"] },
  { code: "통신 13-6-21", name: "송신부 점검", spec: "", unit: "개", labors: {"통신관련산업기사": 0.16}, category: "device", page: 474, keywords: ["송신부 점검", "라디오부이(radio buoy) 점검"] },
  { code: "통신 13-6-21", name: "수신부 점검", spec: "", unit: "개", labors: {"통신관련산업기사": 0.2}, category: "device", page: 474, keywords: ["수신부 점검", "라디오부이(radio buoy) 점검"] },
  { code: "통신 13-6-21", name: "주파수측정 및 교정", spec: "", unit: "개", labors: {"통신관련산업기사": 0.16}, category: "device", page: 474, keywords: ["주파수측정 및 교정", "라디오부이(radio buoy) 점검"] },
  { code: "통신 13-6-21", name: "공중선 출력측정 및 교정", spec: "", unit: "개", labors: {"통신관련산업기사": 0.1}, category: "device", page: 474, keywords: ["라디오부이(radio buoy) 점검", "공중선 출력측정 및 교정"] },
  { code: "통신 13-6-21", name: "SELL CALL 수신 시험", spec: "", unit: "개", labors: {"통신관련산업기사": 0.17}, category: "device", page: 474, keywords: ["sell call 수신 시험", "라디오부이(radio buoy) 점검"] },
  { code: "통신 13-6-21", name: "종합시험", spec: "", unit: "개", labors: {"통신관련산업기사": 0.16}, category: "device", page: 474, keywords: ["종합시험", "라디오부이(radio buoy) 점검"] },
  { code: "통신 13-6-22", name: "전원부 점검", spec: "", unit: "개", labors: {"통신관련산업기사": 0.26}, category: "device", page: 475, keywords: ["해수온도계 점검", "전원부 점검"] },
  { code: "통신 13-6-22", name: "Display Unit 점검", spec: "", unit: "개", labors: {"통신관련산업기사": 0.44}, category: "device", page: 475, keywords: ["해수온도계 점검", "display unit 점검"] },
  { code: "통신 13-6-22", name: "선저 Sensor Unit 점검", spec: "", unit: "개", labors: {"통신관련산업기사": 1.1}, category: "device", page: 475, keywords: ["선저 sensor unit 점검", "해수온도계 점검"] },
  { code: "통신 13-6-22", name: "온도측정 및 교정", spec: "", unit: "개", labors: {"통신관련산업기사": 0.24, "무선안테나공": 0.93}, category: "device", page: 475, keywords: ["해수온도계 점검", "온도측정 및 교정"] },
  { code: "통신 13-6-22", name: "전원전압측정 및 교정", spec: "", unit: "개", labors: {"통신관련산업기사": 0.16}, category: "device", page: 475, keywords: ["해수온도계 점검", "전원전압측정 및 교정"] },
  { code: "통신 13-6-22", name: "종합시험 및 인계", spec: "", unit: "개", labors: {"통신관련산업기사": 0.17}, category: "device", page: 475, keywords: ["해수온도계 점검", "종합시험 및 인계"] },
  { code: "통신 13-6-23", name: "전원부 점검", spec: "", unit: "개", labors: {"통신관련산업기사": 0.28}, category: "device", page: 475, keywords: ["전원부 점검", "네비텍스 수신기(navtex receiver) 점검"] },
  { code: "통신 13-6-23", name: "수신부(Receiver Unit) 점검", spec: "", unit: "개", labors: {"통신관련산업기사": 0.36}, category: "device", page: 475, keywords: ["수신부(receiver unit) 점검", "네비텍스 수신기(navtex receiver) 점검"] },
  { code: "통신 13-6-23", name: "Printer Drive Unit 점검", spec: "", unit: "개", labors: {"통신관련산업기사": 0.33}, category: "device", page: 475, keywords: ["printer drive unit 점검", "네비텍스 수신기(navtex receiver) 점검"] },
  { code: "통신 13-6-23", name: "Antenna Unit 점검", spec: "", unit: "개", labors: {"무선안테나공": 0.7}, category: "device", page: 475, keywords: ["antenna unit 점검", "네비텍스 수신기(navtex receiver) 점검"] },
  { code: "통신 13-6-23", name: "전원전압측정 및 교정", spec: "", unit: "개", labors: {"통신관련산업기사": 0.12}, category: "device", page: 475, keywords: ["전원전압측정 및 교정", "네비텍스 수신기(navtex receiver) 점검"] },
  { code: "통신 13-6-23", name: "종합시험 및 인계", spec: "", unit: "개", labors: {"통신관련산업기사": 0.13}, category: "device", page: 475, keywords: ["종합시험 및 인계", "네비텍스 수신기(navtex receiver) 점검"] },
  { code: "통신 13-6-24", name: "전원부 점검", spec: "", unit: "개", labors: {"통신관련산업기사": 0.42}, category: "device", page: 476, keywords: ["전원부 점검", "음향측심기(echo sounder) 점검"] },
  { code: "통신 13-6-24", name: "Display Unit 점검", spec: "", unit: "개", labors: {"통신관련산업기사": 0.71, "H/W시험사": 1.18, "S/W시험사": 1.18}, category: "device", page: 476, keywords: ["음향측심기(echo sounder) 점검", "display unit 점검"] },
  { code: "통신 13-6-24", name: "선저 Transducer 점검", spec: "", unit: "개", labors: {"통신관련산업기사": 1.15}, category: "device", page: 476, keywords: ["음향측심기(echo sounder) 점검", "선저 transducer 점검"] },
  { code: "통신 13-6-24", name: "종합시험 및 인계", spec: "", unit: "개", labors: {"통신관련산업기사": 0.8}, category: "device", page: 476, keywords: ["종합시험 및 인계", "음향측심기(echo sounder) 점검"] },
  { code: "통신 13-6-25", name: "전원부 점검", spec: "", unit: "개", labors: {"통신관련산업기사": 0.25}, category: "device", page: 476, keywords: ["전원부 점검", "gps(global positioning system) navigator 점검"] },
  { code: "통신 13-6-25", name: "Display Unit 점검", spec: "", unit: "개", labors: {"통신관련산업기사": 0.33}, category: "device", page: 476, keywords: ["gps(global positioning system) navigator 점검", "display unit 점검"] },
  { code: "통신 13-6-25", name: "Antenna Unit 점검", spec: "", unit: "개", labors: {"무선안테나공": 0.47}, category: "device", page: 476, keywords: ["antenna unit 점검", "gps(global positioning system) navigator 점검"] },
  { code: "통신 13-6-25", name: "신호측정 및 교정", spec: "", unit: "개", labors: {"H/W시험사": 0.5, "S/W시험사": 0.5}, category: "device", page: 476, keywords: ["신호측정 및 교정", "gps(global positioning system) navigator 점검"] },
  { code: "통신 13-6-25", name: "종합시험 및 인계", spec: "", unit: "개", labors: {"통신관련산업기사": 0.24}, category: "device", page: 476, keywords: ["종합시험 및 인계", "gps(global positioning system) navigator 점검"] },
  { code: "통신 13-6-26", name: "전원부 점검", spec: "", unit: "개", labors: {"통신관련산업기사": 0.41}, category: "device", page: 477, keywords: ["자기컴퍼스(magnetic compass) 점검", "전원부 점검"] },
  { code: "통신 13-6-26", name: "자기컴퍼스 본체 점검", spec: "", unit: "개", labors: {"통신관련산업기사": 0.86}, category: "device", page: 477, keywords: ["자기컴퍼스 본체 점검", "자기컴퍼스(magnetic compass) 점검"] },
  { code: "통신 13-6-26", name: "자기컴퍼스 자차수정", spec: "", unit: "개", labors: {"통신관련산업기사": 1.47}, category: "device", page: 477, keywords: ["자기컴퍼스 자차수정", "자기컴퍼스(magnetic compass) 점검"] },
  { code: "통신 13-6-26", name: "종합시험", spec: "", unit: "개", labors: {"통신관련산업기사": 0.39}, category: "device", page: 477, keywords: ["종합시험", "자기컴퍼스(magnetic compass) 점검"] },
  { code: "통신 13-6-27", name: "전원부 점검", spec: "", unit: "개", labors: {"통신관련산업기사": 0.46}, category: "device", page: 477, keywords: ["전원부 점검", "자동조타장치(auto pilot) 점검"] },
  { code: "통신 13-6-27", name: "조타기 점검(Steering Stand)", spec: "", unit: "개", labors: {"통신관련산업기사": 1.42}, category: "device", page: 477, keywords: ["조타기 점검(steering stand)", "자동조타장치(auto pilot) 점검"] },
  { code: "통신 13-6-27", name: "추종장치 점검(Repeat Back Unit)", spec: "", unit: "개", labors: {"통신관련산업기사": 1.37}, category: "device", page: 477, keywords: ["추종장치 점검(repeat back unit)", "자동조타장치(auto pilot) 점검"] },
  { code: "통신 13-6-27", name: "타각지시기 점검(Rudder Angle Indicator)", spec: "", unit: "개", labors: {"통신관련산업기사": 1.67}, category: "device", page: 477, keywords: ["타각지시기 점검(rudder angle indicator)", "자동조타장치(auto pilot) 점검"] },
  { code: "통신 13-6-27", name: "종 합 시 험", spec: "", unit: "개", labors: {"통신관련산업기사": 0.62}, category: "device", page: 477, keywords: ["종 합 시 험", "자동조타장치(auto pilot) 점검"] },
  { code: "통신 13-6-28", name: "주컴퍼스(Master Compass) 본체 점검", spec: "", unit: "개", labors: {"통신관련산업기사": 2.15}, category: "device", page: 478, keywords: ["주컴퍼스(master compass) 본체 점검", "자이로컴퍼스(gyro compass) 점검"] },
  { code: "통신 13-6-28", name: "인버터(Inverter Unit)점검", spec: "", unit: "개", labors: {"통신관련산업기사": 0.81}, category: "device", page: 478, keywords: ["자이로컴퍼스(gyro compass) 점검", "인버터(inverter unit)점검"] },
  { code: "통신 13-6-28", name: "리피터 발신기 점검(리피터 컴퍼스 포함)", spec: "", unit: "개", labors: {"통신관련산업기사": 1.53}, category: "device", page: 478, keywords: ["리피터 발신기 점검(리피터 컴퍼스 포함)", "자이로컴퍼스(gyro compass) 점검"] },
  { code: "통신 13-6-28", name: "종 합 시 험", spec: "", unit: "개", labors: {"통신관련산업기사": 0.65}, category: "device", page: 478, keywords: ["종 합 시 험", "자이로컴퍼스(gyro compass) 점검"] },
  { code: "통신 13-6-29", name: "전원부 점검", spec: "", unit: "개", labors: {"통신관련산업기사": 0.56}, category: "device", page: 479, keywords: ["전원부 점검", "항해자료기록장치(vdr) 점검"] },
  { code: "통신 13-6-29", name: "Protective Capsule 점검", spec: "", unit: "개", labors: {"통신관련산업기사": 0.92, "H/W시험사": 0.85, "S/W시험사": 0.85}, category: "device", page: 479, keywords: ["protective capsule 점검", "항해자료기록장치(vdr) 점검"] },
  { code: "통신 13-6-29", name: "Main Electronic Enclosure 점검", spec: "", unit: "개", labors: {"통신관련산업기사": 1.09, "H/W시험사": 1.11, "S/W시험사": 1.11}, category: "device", page: 479, keywords: ["항해자료기록장치(vdr) 점검", "main electronic enclosure 점검"] },
  { code: "통신 13-6-29", name: "Emergency 점검", spec: "", unit: "개", labors: {"통신관련산업기사": 0.42}, category: "device", page: 479, keywords: ["emergency 점검", "항해자료기록장치(vdr) 점검"] },
  { code: "통신 13-6-29", name: "Analog Interface 점검", spec: "", unit: "개", labors: {"H/W시험사": 0.35, "S/W시험사": 0.35}, category: "device", page: 479, keywords: ["analog interface 점검", "항해자료기록장치(vdr) 점검"] },
  { code: "통신 13-6-29", name: "Digital Interface 점검", spec: "", unit: "개", labors: {"H/W시험사": 0.35, "S/W시험사": 0.35}, category: "device", page: 479, keywords: ["digital interface 점검", "항해자료기록장치(vdr) 점검"] },
  { code: "통신 13-6-29", name: "Nmea Data Input 점검", spec: "", unit: "개", labors: {"H/W시험사": 0.35, "S/W시험사": 0.35}, category: "device", page: 479, keywords: ["nmea data input 점검", "항해자료기록장치(vdr) 점검"] },
  { code: "통신 13-6-29", name: "항해통신장비 Interface 점검", spec: "", unit: "개", labors: {"통신관련산업기사": 1.09, "H/W시험사": 1.11, "S/W시험사": 1.11}, category: "device", page: 479, keywords: ["항해자료기록장치(vdr) 점검", "항해통신장비 interface 점검"] },
  { code: "통신 13-6-29", name: "종 합 시 험", spec: "", unit: "개", labors: {"통신관련산업기사": 0.34}, category: "device", page: 479, keywords: ["종 합 시 험", "항해자료기록장치(vdr) 점검"] },
  { code: "통신 13-6-30", name: "전원부 점검", spec: "", unit: "개", labors: {"통신관련산업기사": 0.24}, category: "device", page: 480, keywords: ["음향수신장치(ssr) 점검", "전원부 점검"] },
  { code: "통신 13-6-30", name: "Main Unit 점검", spec: "", unit: "개", labors: {"통신관련산업기사": 0.53, "H/W시험사": 0.67}, category: "device", page: 480, keywords: ["음향수신장치(ssr) 점검", "main unit 점검"] },
  { code: "통신 13-6-30", name: "Microphone 점검", spec: "", unit: "개", labors: {"통신관련산업기사": 0.29}, category: "device", page: 480, keywords: ["음향수신장치(ssr) 점검", "microphone 점검"] },
  { code: "통신 13-6-30", name: "신호 측정 및 교정", spec: "", unit: "개", labors: {"H/W시험사": 0.46}, category: "device", page: 480, keywords: ["음향수신장치(ssr) 점검", "신호 측정 및 교정"] },
  { code: "통신 13-6-30", name: "종 합 시 험", spec: "", unit: "개", labors: {"통신관련산업기사": 0.28}, category: "device", page: 480, keywords: ["종 합 시 험", "음향수신장치(ssr) 점검"] },
  { code: "통신 13-6-31", name: "전원부 점검", spec: "", unit: "개", labors: {"통신관련산업기사": 0.46}, category: "device", page: 480, keywords: ["전원부 점검", "전자해도표시시스템(ecdis) 점검"] },
  { code: "통신 13-6-31", name: "Display Unit 점검", spec: "", unit: "개", labors: {"통신관련산업기사": 0.74}, category: "device", page: 480, keywords: ["전자해도표시시스템(ecdis) 점검", "display unit 점검"] },
  { code: "통신 13-6-31", name: "Operation Panel Unit점검", spec: "", unit: "개", labors: {"통신관련산업기사": 0.34}, category: "device", page: 480, keywords: ["operation panel unit점검", "전자해도표시시스템(ecdis) 점검"] },
  { code: "통신 13-6-31", name: "Processing Unit 점검", spec: "", unit: "개", labors: {"통신관련산업기사": 0.73, "H/W시험사": 0.81, "S/W시험사": 0.81}, category: "device", page: 480, keywords: ["processing unit 점검", "전자해도표시시스템(ecdis) 점검"] },
  { code: "통신 13-6-31", name: "External Interface Unit 점검", spec: "", unit: "개", labors: {"통신관련산업기사": 0.46, "H/W시험사": 0.54, "S/W시험사": 0.54}, category: "device", page: 480, keywords: ["전자해도표시시스템(ecdis) 점검", "external interface unit 점검"] },
  { code: "통신 13-6-31", name: "각장비 Interface 점검", spec: "", unit: "개", labors: {"통신관련산업기사": 0.75, "H/W시험사": 0.83, "S/W시험사": 0.83}, category: "device", page: 480, keywords: ["각장비 interface 점검", "전자해도표시시스템(ecdis) 점검"] },
  { code: "통신 13-6-31", name: "출력 Data 점검", spec: "", unit: "개", labors: {"통신관련산업기사": 0.39, "H/W시험사": 0.46, "S/W시험사": 0.46}, category: "device", page: 480, keywords: ["출력 data 점검", "전자해도표시시스템(ecdis) 점검"] },
  { code: "통신 13-6-31", name: "종 합 시 험", spec: "", unit: "개", labors: {"통신관련산업기사": 0.57}, category: "device", page: 480, keywords: ["종 합 시 험", "전자해도표시시스템(ecdis) 점검"] },
  { code: "통신 13-6-32", name: "전원부 점검", spec: "", unit: "개", labors: {"통신관련산업기사": 0.34}, category: "device", page: 481, keywords: ["전원부 점검", "선박용 선박자동식별장치 점검"] },
  { code: "통신 13-6-32", name: "Antenna Unit 점검", spec: "", unit: "개", labors: {"통신관련산업기사": 0.47, "무선안테나공": 0.81}, category: "device", page: 481, keywords: ["antenna unit 점검", "선박용 선박자동식별장치 점검"] },
  { code: "통신 13-6-32", name: "송신부 점검", spec: "", unit: "개", labors: {"통신관련산업기사": 1.07}, category: "device", page: 481, keywords: ["송신부 점검", "선박용 선박자동식별장치 점검"] },
  { code: "통신 13-6-32", name: "수신부 점검", spec: "", unit: "개", labors: {"통신관련산업기사": 0.73}, category: "device", page: 481, keywords: ["수신부 점검", "선박용 선박자동식별장치 점검"] },
  { code: "통신 13-6-32", name: "Gyro/Pilot Plug Interface Unit 점검", spec: "", unit: "개", labors: {"H/W시험사": 0.87, "S/W시험사": 0.87}, category: "device", page: 481, keywords: ["gyro/pilot plug interface unit 점검", "선박용 선박자동식별장치 점검"] },
  { code: "통신 13-6-32", name: "주파수 측정 및 교정", spec: "", unit: "개", labors: {"통신관련산업기사": 0.21}, category: "device", page: 481, keywords: ["주파수 측정 및 교정", "선박용 선박자동식별장치 점검"] },
  { code: "통신 13-6-32", name: "공중선 출력 측정 및 교정", spec: "", unit: "개", labors: {"통신관련산업기사": 0.21}, category: "device", page: 481, keywords: ["공중선 출력 측정 및 교정", "선박용 선박자동식별장치 점검"] },
  { code: "통신 13-6-32", name: "고정정보 및 변동정보 점검", spec: "", unit: "개", labors: {"통신관련산업기사": 0.21}, category: "device", page: 481, keywords: ["고정정보 및 변동정보 점검", "선박용 선박자동식별장치 점검"] },
  { code: "통신 13-6-32", name: "종 합 시 험", spec: "", unit: "개", labors: {"통신관련산업기사": 0.32}, category: "device", page: 481, keywords: ["종 합 시 험", "선박용 선박자동식별장치 점검"] },
  { code: "통신 13-6-33", name: "전원부 점검", spec: "", unit: "개", labors: {"통신관련산업기사": 0.46}, category: "device", page: 482, keywords: ["위성항법장치(gps plotter) 점검", "전원부 점검"] },
  { code: "통신 13-6-33", name: "Display Unit 점검", spec: "", unit: "개", labors: {"통신관련산업기사": 0.71}, category: "device", page: 482, keywords: ["위성항법장치(gps plotter) 점검", "display unit 점검"] },
  { code: "통신 13-6-33", name: "안테나 유니트 점검", spec: "", unit: "개", labors: {"무선안테나공": 0.72}, category: "device", page: 482, keywords: ["위성항법장치(gps plotter) 점검", "안테나 유니트 점검"] },
  { code: "통신 13-6-33", name: "신호 측정 및 교정", spec: "", unit: "개", labors: {"H/W시험사": 0.75, "S/W시험사": 0.75}, category: "device", page: 482, keywords: ["위성항법장치(gps plotter) 점검", "신호 측정 및 교정"] },
  { code: "통신 13-6-33", name: "종 합 시 험", spec: "", unit: "개", labors: {"통신관련산업기사": 0.27}, category: "device", page: 482, keywords: ["위성항법장치(gps plotter) 점검", "종 합 시 험"] },
  { code: "통신 13-6-34", name: "전원부 점검", spec: "", unit: "개", labors: {"통신관련산업기사": 0.38}, category: "device", page: 482, keywords: ["전원부 점검", "선박자동경보장치(ssas : ship security alarm system) 점검"] },
  { code: "통신 13-6-34", name: "안테나 유니트 점검", spec: "", unit: "개", labors: {"무선안테나공": 0.87}, category: "device", page: 482, keywords: ["선박자동경보장치(ssas : ship security alarm system) 점검", "안테나 유니트 점검"] },
  { code: "통신 13-6-34", name: "Main Unit 점검", spec: "", unit: "개", labors: {"통신관련산업기사": 0.57, "H/W시험사": 0.62, "S/W시험사": 0.62}, category: "device", page: 482, keywords: ["선박자동경보장치(ssas : ship security alarm system) 점검", "main unit 점검"] },
  { code: "통신 13-6-34", name: "종 합 시 험", spec: "", unit: "개", labors: {"통신관련산업기사": 0.36}, category: "device", page: 482, keywords: ["종 합 시 험", "선박자동경보장치(ssas : ship security alarm system) 점검"] },
  { code: "통신 13-6-35", name: "송신부 및 수신부 점검", spec: "", unit: "개", labors: {"통신관련산업기사": 1.36}, category: "device", page: 483, keywords: ["송신부 및 수신부 점검", "소나(sonar : sound navigating and ranging) 점검"] },
  { code: "통신 13-6-35", name: "지시부 점검", spec: "", unit: "개", labors: {"통신관련산업기사": 1.53, "H/W시험사": 2.03}, category: "device", page: 483, keywords: ["지시부 점검", "소나(sonar : sound navigating and ranging) 점검"] },
  { code: "통신 13-6-35", name: "선저 Dome 점검", spec: "", unit: "개", labors: {"통신관련산업기사": 1.79}, category: "device", page: 483, keywords: ["소나(sonar : sound navigating and ranging) 점검", "선저 dome 점검"] },
  { code: "통신 13-6-35", name: "상하장치 점검", spec: "", unit: "개", labors: {"통신관련산업기사": 1.48}, category: "device", page: 483, keywords: ["상하장치 점검", "소나(sonar : sound navigating and ranging) 점검"] },
  { code: "통신 13-6-35", name: "종 합 시 험", spec: "", unit: "개", labors: {"통신관련산업기사": 0.82}, category: "device", page: 483, keywords: ["종 합 시 험", "소나(sonar : sound navigating and ranging) 점검"] },
  { code: "통신 13-6-36", name: "전원부 점검", spec: "", unit: "개", labors: {"통신관련산업기사": 0.32}, category: "device", page: 483, keywords: ["전원부 점검", "수온분포 위성수신장치 점검"] },
  { code: "통신 13-6-36", name: "안테나 유니트 점검", spec: "", unit: "개", labors: {"무선안테나공": 0.3}, category: "device", page: 483, keywords: ["수온분포 위성수신장치 점검", "안테나 유니트 점검"] },
  { code: "통신 13-6-36", name: "수신기 점검", spec: "", unit: "개", labors: {"통신관련산업기사": 0.39, "H/W시험사": 0.49}, category: "device", page: 483, keywords: ["수신기 점검", "수온분포 위성수신장치 점검"] },
  { code: "통신 13-6-36", name: "지시부 점검", spec: "", unit: "개", labors: {"통신관련산업기사": 0.37, "H/W시험사": 0.38}, category: "device", page: 483, keywords: ["지시부 점검", "수온분포 위성수신장치 점검"] },
  { code: "통신 13-6-36", name: "신호 측정 및 교정", spec: "", unit: "개", labors: {"통신관련산업기사": 0.34}, category: "device", page: 483, keywords: ["수온분포 위성수신장치 점검", "신호 측정 및 교정"] },
  { code: "통신 13-6-36", name: "종 합 시 험", spec: "", unit: "개", labors: {"통신관련산업기사": 0.35, "H/W시험사": 0.46}, category: "device", page: 483, keywords: ["종 합 시 험", "수온분포 위성수신장치 점검"] },
  { code: "통신 13-6-37", name: "전원부 점검", spec: "", unit: "개", labors: {"통신관련산업기사": 0.39}, category: "device", page: 484, keywords: ["조류계 점검", "전원부 점검"] },
  { code: "통신 13-6-37", name: "Display Unit 점검", spec: "", unit: "개", labors: {"통신관련산업기사": 0.63}, category: "device", page: 484, keywords: ["조류계 점검", "display unit 점검"] },
  { code: "통신 13-6-37", name: "선저 Sensor 점검", spec: "", unit: "개", labors: {"통신관련산업기사": 1.12}, category: "device", page: 484, keywords: ["조류계 점검", "선저 sensor 점검"] },
  { code: "통신 13-6-37", name: "송수신부 점검", spec: "", unit: "개", labors: {"통신관련산업기사": 0.43}, category: "device", page: 484, keywords: ["조류계 점검", "송수신부 점검"] },
  { code: "통신 13-6-37", name: "종 합 시 험", spec: "", unit: "개", labors: {"통신관련산업기사": 1.12}, category: "device", page: 484, keywords: ["조류계 점검", "종 합 시 험"] },
  { code: "통신 13-6-38", name: "전원부 점검", spec: "", unit: "개", labors: {"통신관련산업기사": 0.52}, category: "device", page: 484, keywords: ["전원부 점검", "어군탐지기(fish finder) 점검"] },
  { code: "통신 13-6-38", name: "Display Unit 점검", spec: "", unit: "개", labors: {"통신관련산업기사": 0.69, "H/W시험사": 1.31, "S/W시험사": 1.31}, category: "device", page: 484, keywords: ["어군탐지기(fish finder) 점검", "display unit 점검"] },
  { code: "통신 13-6-38", name: "선저 Transducer 점검", spec: "", unit: "개", labors: {"통신관련산업기사": 1.22}, category: "device", page: 484, keywords: ["어군탐지기(fish finder) 점검", "선저 transducer 점검"] },
  { code: "통신 13-6-38", name: "종합시험 및 인계", spec: "", unit: "개", labors: {"통신관련산업기사": 0.84}, category: "device", page: 484, keywords: ["종합시험 및 인계", "어군탐지기(fish finder) 점검"] },
  { code: "통신 13-6-39", name: "전원부 점검", spec: "", unit: "개", labors: {"통신관련산업기사": 0.25}, category: "device", page: 485, keywords: ["조상기 점검", "전원부 점검"] },
  { code: "통신 13-6-39", name: "본체 점검", spec: "", unit: "개", labors: {"통신관련산업기사": 0.52, "H/W시험사": 0.69}, category: "device", page: 485, keywords: ["조상기 점검", "본체 점검"] },
  { code: "통신 13-6-39", name: "측정 및 교정", spec: "", unit: "개", labors: {"통신관련산업기사": 0.45, "H/W시험사": 0.43}, category: "device", page: 485, keywords: ["조상기 점검", "측정 및 교정"] },
  { code: "통신 13-6-39", name: "종 합 시 험", spec: "", unit: "개", labors: {"통신관련산업기사": 0.41}, category: "device", page: 485, keywords: ["조상기 점검", "종 합 시 험"] },
  { code: "통신 13-6-40", name: "전원부 점검", spec: "", unit: "개", labors: {"통신관련산업기사": 0.43}, category: "device", page: 485, keywords: ["조출기(hm : hooking master) 점검", "전원부 점검"] },
  { code: "통신 13-6-40", name: "본체 및 Display 점검", spec: "", unit: "개", labors: {"통신관련산업기사": 0.49, "H/W시험사": 0.96}, category: "device", page: 485, keywords: ["본체 및 display 점검", "조출기(hm : hooking master) 점검"] },
  { code: "통신 13-6-40", name: "투승부 점검", spec: "", unit: "개", labors: {"통신관련산업기사": 0.43}, category: "device", page: 485, keywords: ["투승부 점검", "조출기(hm : hooking master) 점검"] },
  { code: "통신 13-6-40", name: "종 합 시 험", spec: "", unit: "개", labors: {"통신관련산업기사": 0.67}, category: "device", page: 485, keywords: ["종 합 시 험", "조출기(hm : hooking master) 점검"] },
  { code: "통신 13-6-41-1", name: "공통사항", spec: "입·출력부 점검", unit: "개", labors: {"통신관련산업기사": 0.07}, category: "device", page: 486, keywords: ["입·출력부 점검", "운영국 서버(server) 시스템 점검", "공통사항"] },
  { code: "통신 13-6-41-1", name: "운영서버", spec: "운용 S/W 로그 점검 및 백업", unit: "개", labors: {"S/W시험사": 0.2}, category: "device", page: 486, keywords: ["운영서버", "운용 s/w 로그 점검 및 백업", "운영국 서버(server) 시스템 점검"] },
  { code: "통신 13-6-41-1", name: "D/B서버", spec: "위치정보 데이터베이스 점검", unit: "개", labors: {"S/W시험사": 0.1}, category: "device", page: 486, keywords: ["d/b서버", "운영국 서버(server) 시스템 점검", "위치정보 데이터베이스 점검"] },
  { code: "통신 13-6-41-2", name: "AIS Service Module 점검", spec: "", unit: "개", labors: {"S/W시험사": 0.11}, category: "device", page: 487, keywords: ["운영국 메시지 분배장치(air) 점검", "ais service module 점검"] },
  { code: "통신 13-6-41-2", name: "System Configure 점검", spec: "", unit: "개", labors: {"S/W시험사": 0.06}, category: "device", page: 487, keywords: ["운영국 메시지 분배장치(air) 점검", "system configure 점검"] },
  { code: "통신 13-6-41-2", name: "기지국 원격감시 상태점검", spec: "", unit: "개", labors: {"S/W시험사": 0.06}, category: "device", page: 487, keywords: ["운영국 메시지 분배장치(air) 점검", "기지국 원격감시 상태점검"] },
  { code: "통신 13-6-41-2", name: "Multi Network Interface Board Test 및 상태점검", spec: "", unit: "개", labors: {"통신관련산업기사": 0.13}, category: "device", page: 487, keywords: ["multi network interface board test 및 상태점검", "운영국 메시지 분배장치(air) 점검"] },
  { code: "통신 13-6-41-2", name: "AIS 메시지 데이터 송수신 상태점검", spec: "", unit: "개", labors: {"S/W시험사": 0.06}, category: "device", page: 487, keywords: ["ais 메시지 데이터 송수신 상태점검", "운영국 메시지 분배장치(air) 점검"] },
  { code: "통신 13-6-41-2", name: "다중 기지국 메시지 필터링 점검", spec: "", unit: "개", labors: {"S/W시험사": 0.11}, category: "device", page: 487, keywords: ["다중 기지국 메시지 필터링 점검", "운영국 메시지 분배장치(air) 점검"] },
  { code: "통신 13-6-41-2", name: "인터페이스 상태점검", spec: "", unit: "개", labors: {"S/W시험사": 0.2}, category: "device", page: 487, keywords: ["인터페이스 상태점검", "운영국 메시지 분배장치(air) 점검"] },
  { code: "통신 13-6-41-2", name: "Network Connection Matrix 점검 및 Test", spec: "", unit: "개", labors: {"S/W시험사": 0.1}, category: "device", page: 487, keywords: ["운영국 메시지 분배장치(air) 점검", "network connection matrix 점검 및 test"] },
  { code: "통신 13-6-41-2", name: "접속 Client 보안상태 점검", spec: "", unit: "개", labors: {"S/W시험사": 0.06}, category: "device", page: 487, keywords: ["운영국 메시지 분배장치(air) 점검", "접속 client 보안상태 점검"] },
  { code: "통신 13-6-41-2", name: "기지국 자동 절체 Test", spec: "", unit: "개", labors: {"S/W시험사": 0.15}, category: "device", page: 487, keywords: ["운영국 메시지 분배장치(air) 점검", "기지국 자동 절체 test"] },
  { code: "통신 13-6-41-3", name: "안 테 나", spec: "낙뢰보호기 상태점검", unit: "개", labors: {"통신관련산업기사": 0.07}, category: "device", page: 488, keywords: ["안 테 나", "낙뢰보호기 상태점검", "기지국 안테나 및 rf 스위치 장치 점검"] },
  { code: "통신 13-6-41-3", name: "RF 스 위 치", spec: "RF Control장치 네트웍 연결 상태점검", unit: "개", labors: {"S/W시험사": 0.24}, category: "device", page: 488, keywords: ["rf control장치 네트웍 연결 상태점검", "rf 스 위 치", "기지국 안테나 및 rf 스위치 장치 점검"] },
  { code: "통신 13-6-41-4", name: "주예비 구동 상태점검", spec: "", unit: "개", labors: {"통신관련산업기사": 0.11}, category: "device", page: 488, keywords: ["기지국 송‧수신 장치(abst) 점검", "주예비 구동 상태점검"] },
  { code: "통신 13-6-41-4", name: "사용 주파수 및 BandWidth 측정", spec: "", unit: "개", labors: {"통신관련산업기사": 0.1}, category: "device", page: 488, keywords: ["사용 주파수 및 bandwidth 측정", "기지국 송‧수신 장치(abst) 점검"] },
  { code: "통신 13-6-41-4", name: "System configure 점검", spec: "", unit: "개", labors: {"S/W시험사": 0.07}, category: "device", page: 488, keywords: ["기지국 송‧수신 장치(abst) 점검", "system configure 점검"] },
  { code: "통신 13-6-41-4", name: "송신부 점검", spec: "", unit: "개", labors: {"통신관련산업기사": 0.1, "S/W시험사": 0.2}, category: "device", page: 488, keywords: ["송신부 점검", "기지국 송‧수신 장치(abst) 점검"] },
  { code: "통신 13-6-41-4", name: "수신부 점검", spec: "", unit: "개", labors: {"S/W시험사": 0.12}, category: "device", page: 488, keywords: ["수신부 점검", "기지국 송‧수신 장치(abst) 점검"] },
  { code: "통신 13-6-41-4", name: "변조부 점검", spec: "", unit: "개", labors: {"S/W시험사": 0.1}, category: "device", page: 488, keywords: ["기지국 송‧수신 장치(abst) 점검", "변조부 점검"] },
  { code: "통신 13-6-41-4", name: "입·출력부 점검", spec: "", unit: "개", labors: {"통신관련산업기사": 0.07}, category: "device", page: 488, keywords: ["입·출력부 점검", "기지국 송‧수신 장치(abst) 점검"] },
  { code: "통신 13-6-41-4", name: "채널(Channel)별 작동 상태점검", spec: "", unit: "개", labors: {"S/W시험사": 0.1}, category: "device", page: 488, keywords: ["기지국 송‧수신 장치(abst) 점검", "채널(channel)별 작동 상태점검"] },
  { code: "통신 13-6-41-4", name: "선박국 메시지 송수신 상태점검", spec: "", unit: "개", labors: {"S/W시험사": 0.06}, category: "device", page: 488, keywords: ["선박국 메시지 송수신 상태점검", "기지국 송‧수신 장치(abst) 점검"] },
  { code: "통신 13-6-41-4", name: "Data Link Management 메시지 수신 점검", spec: "", unit: "개", labors: {"S/W시험사": 0.05}, category: "device", page: 488, keywords: ["data link management 메시지 수신 점검", "기지국 송‧수신 장치(abst) 점검"] },
  { code: "통신 13-6-41-4", name: "GPS 신호 수신 상태점검", spec: "", unit: "개", labors: {"S/W시험사": 0.04}, category: "device", page: 488, keywords: ["gps 신호 수신 상태점검", "기지국 송‧수신 장치(abst) 점검"] },
  { code: "통신 13-6-41-5", name: "주예비 구동상태 점검", spec: "", unit: "개", labors: {"통신관련산업기사": 0.11}, category: "device", page: 489, keywords: ["주예비 구동상태 점검", "기지국 제어장치(absc) 점검"] },
  { code: "통신 13-6-41-5", name: "System Configure 점검", spec: "", unit: "개", labors: {"S/W시험사": 0.12}, category: "device", page: 489, keywords: ["기지국 제어장치(absc) 점검", "system configure 점검"] },
  { code: "통신 13-6-41-5", name: "Transponder 인터페이스 점검", spec: "", unit: "개", labors: {"S/W시험사": 0.12}, category: "device", page: 489, keywords: ["기지국 제어장치(absc) 점검", "transponder 인터페이스 점검"] },
  { code: "통신 13-6-41-5", name: "신호전환 상태점검", spec: "", unit: "개", labors: {"S/W시험사": 0.17}, category: "device", page: 489, keywords: ["신호전환 상태점검", "기지국 제어장치(absc) 점검"] },
  { code: "통신 13-6-41-5", name: "Transponder Out, AUX Port 메시지 수신 상태정검", spec: "", unit: "개", labors: {"S/W시험사": 0.05}, category: "device", page: 489, keywords: ["기지국 제어장치(absc) 점검", "transponder out, aux port 메시지 수신 상태정검"] },
  { code: "통신 13-6-41-5", name: "Transponder 에러감시 상태점검", spec: "", unit: "개", labors: {"S/W시험사": 0.1}, category: "device", page: 489, keywords: ["transponder 에러감시 상태점검", "기지국 제어장치(absc) 점검"] },
  { code: "통신 13-6-42", name: "송신부", spec: "송신기 점검", unit: "대", labors: {"H/W시험사": 0.66, "S/W시험사": 0.56}, category: "device", page: 489, keywords: ["송신기 점검", "위성항법보정시스템(dgps) 점검", "송신부"] },
  { code: "통신 13-6-42", name: "송신부", spec: "제어기 점검", unit: "“", labors: {"H/W시험사": 0.4, "S/W시험사": 0.36}, category: "device", page: 489, keywords: ["제어기 점검", "위성항법보정시스템(dgps) 점검", "송신부"] },
  { code: "통신 13-6-42", name: "송신부", spec: "충전기 점검", unit: "“", labors: {"H/W시험사": 0.22, "S/W시험사": 0.18}, category: "device", page: 489, keywords: ["위성항법보정시스템(dgps) 점검", "충전기 점검", "송신부"] },
  { code: "통신 13-6-42", name: "송신부", spec: "동작시험", unit: "식", labors: {"H/W시험사": 0.14, "S/W시험사": 0.14}, category: "device", page: 489, keywords: ["동작시험", "위성항법보정시스템(dgps) 점검", "송신부"] },
  { code: "통신 13-6-42", name: "수신부", spec: "수신기 점검", unit: "대", labors: {"H/W시험사": 0.41, "S/W시험사": 0.37}, category: "device", page: 489, keywords: ["수신기 점검", "위성항법보정시스템(dgps) 점검", "수신부"] },
  { code: "통신 13-6-42", name: "수신부", spec: "동작시험", unit: "식", labors: {"H/W시험사": 0.14, "S/W시험사": 0.14}, category: "device", page: 489, keywords: ["동작시험", "위성항법보정시스템(dgps) 점검", "수신부"] },
  { code: "통신 13-6-42", name: "전원부", spec: "축전지 및 분전반 점검", unit: "“", labors: {"H/W시험사": 0.24, "S/W시험사": 0.2}, category: "device", page: 489, keywords: ["축전지 및 분전반 점검", "위성항법보정시스템(dgps) 점검", "전원부"] },
  { code: "통신 13-6-42", name: "안테나부", spec: "송신안테나 점검", unit: "기", labors: {"무선안테나공": 0.54, "H/W시험사": 0.61}, category: "device", page: 489, keywords: ["안테나부", "위성항법보정시스템(dgps) 점검", "송신안테나 점검"] },
  { code: "통신 13-6-42", name: "안테나부", spec: "수신안테나 점검", unit: "식", labors: {"무선안테나공": 0.72, "H/W시험사": 0.86}, category: "device", page: 489, keywords: ["안테나부", "위성항법보정시스템(dgps) 점검", "수신안테나 점검"] },
  { code: "통신 13-6-42", name: "종합시험", spec: "", unit: "“", labors: {"H/W시험사": 0.45, "S/W시험사": 0.34}, category: "device", page: 489, keywords: ["종합시험", "위성항법보정시스템(dgps) 점검"] },
  { code: "통신 13-7-1-1", name: "제어부", spec: "서", unit: "모듈", labors: {"통신관련산업기사": 0.25, "S/W시험사": 0.29}, category: "device", page: 491, keywords: ["차량자동인식장치(avi : automatic vehicle identification) 점검", "제어부"] },
  { code: "통신 13-7-1-1", name: "제어부", spec: "브", unit: "모듈", labors: {"통신관련산업기사": 0.23, "S/W시험사": 0.23}, category: "device", page: 491, keywords: ["차량자동인식장치(avi : automatic vehicle identification) 점검", "제어부"] },
  { code: "통신 13-7-1-1", name: "카메라부", spec: "카메라 컨트롤러", unit: "개", labors: {"통신관련산업기사": 0.17}, category: "device", page: 491, keywords: ["차량자동인식장치(avi : automatic vehicle identification) 점검", "카메라부", "카메라 컨트롤러"] },
  { code: "통신 13-7-1-1", name: "종 합 시 험", spec: "", unit: "식", labors: {"S/W시험사": 0.21}, category: "device", page: 491, keywords: ["종 합 시 험", "차량자동인식장치(avi : automatic vehicle identification) 점검"] },
  { code: "통신 13-7-1-2", name: "서브랙", spec: "메인 컨트롤러", unit: "모듈", labors: {"통신관련산업기사": 0.31, "S/W시험사": 0.27}, category: "device", page: 492, keywords: ["서브랙", "메인 컨트롤러", "차량 검지 시스템(vds : vehicle detection system) 점검"] },
  { code: "통신 13-7-1-2", name: "서브랙", spec: "루프검지기 유니트", unit: "모듈", labors: {"통신관련산업기사": 0.23, "S/W시험사": 0.23}, category: "device", page: 492, keywords: ["루프검지기 유니트", "서브랙", "차량 검지 시스템(vds : vehicle detection system) 점검"] },
  { code: "통신 13-7-1-2", name: "제어기", spec: "", unit: "대", labors: {"통신관련산업기사": 0.21}, category: "device", page: 492, keywords: ["제어기", "차량 검지 시스템(vds : vehicle detection system) 점검"] },
  { code: "통신 13-7-1-2", name: "종 합 시 험", spec: "", unit: "식", labors: {"S/W시험사": 0.15}, category: "device", page: 492, keywords: ["종 합 시 험", "차량 검지 시스템(vds : vehicle detection system) 점검"] },
  { code: "통신 13-7-1-3", name: "제", spec: "주제어장치(CPU)", unit: "모듈", labors: {"S/W시험사": 0.19}, category: "device", page: 492, keywords: ["주제어장치(cpu)", "전자교통신호 제어기 점검"] },
  { code: "통신 13-7-1-3", name: "어", spec: "사용자 인터페이스(MMI)", unit: "모듈", labors: {"H/W시험사": 0.19}, category: "device", page: 492, keywords: ["사용자 인터페이스(mmi)", "전자교통신호 제어기 점검"] },
  { code: "통신 13-7-1-3", name: "구", spec: "신호제어기(SCU)", unit: "개", labors: {"통신관련산업기사": 0.13}, category: "device", page: 492, keywords: ["전자교통신호 제어기 점검", "신호제어기(scu)"] },
  { code: "통신 13-7-1-3", name: "동", spec: "점멸장치 유니트", unit: "개", labors: {"통신관련산업기사": 0.1}, category: "device", page: 492, keywords: ["점멸장치 유니트", "전자교통신호 제어기 점검"] },
  { code: "통신 13-7-1-3", name: "부", spec: "신호구동기(LSU)", unit: "개", labors: {"통신관련산업기사": 0.13}, category: "device", page: 492, keywords: ["신호구동기(lsu)", "전자교통신호 제어기 점검"] },
  { code: "통신 13-7-1-3", name: "수동 조작기", spec: "", unit: "대", labors: {"통신관련산업기사": 0.19}, category: "device", page: 492, keywords: ["전자교통신호 제어기 점검", "수동 조작기"] },
  { code: "통신 13-7-1-3", name: "종 합 시 험", spec: "", unit: "식", labors: {"S/W시험사": 0.19}, category: "device", page: 492, keywords: ["종 합 시 험", "전자교통신호 제어기 점검"] },
  { code: "통신 13-7-1-4", name: "전광판", spec: "문자식", unit: "대", labors: {"통신관련산업기사": 0.13}, category: "device", page: 493, keywords: ["가변 정보 표지판(vms : variable message sign) 점검", "문자식", "전광판"] },
  { code: "통신 13-7-1-4", name: "전광판", spec: "도형식", unit: "대", labors: {"통신관련산업기사": 0.15}, category: "device", page: 493, keywords: ["가변 정보 표지판(vms : variable message sign) 점검", "도형식", "전광판"] },
  { code: "통신 13-7-1-4", name: "전광판", spec: "동영상", unit: "대", labors: {"통신관련산업기사": 0.2}, category: "device", page: 493, keywords: ["가변 정보 표지판(vms : variable message sign) 점검", "동영상", "전광판"] },
  { code: "통신 13-7-1-4", name: "LED 출력 모듈", spec: "3단 10열", unit: "개", labors: {"통신관련산업기사": 0.17}, category: "device", page: 493, keywords: ["led 출력 모듈", "3단 10열", "가변 정보 표지판(vms : variable message sign) 점검"] },
  { code: "통신 13-7-1-4", name: "LED 출력 모듈", spec: "2단 10열", unit: "개", labors: {"통신관련산업기사": 0.13}, category: "device", page: 493, keywords: ["led 출력 모듈", "가변 정보 표지판(vms : variable message sign) 점검", "2단 10열"] },
  { code: "통신 13-7-1-4", name: "제어기", spec: "", unit: "대", labors: {"통신관련산업기사": 0.21}, category: "device", page: 493, keywords: ["제어기", "가변 정보 표지판(vms : variable message sign) 점검"] },
  { code: "통신 13-7-1-4", name: "전광판 제어 컴퓨터", spec: "", unit: "대", labors: {"S/W시험사": 0.27, "H/W시험사": 0.19}, category: "device", page: 493, keywords: ["전광판 제어 컴퓨터", "가변 정보 표지판(vms : variable message sign) 점검"] },
  { code: "통신 13-7-1-4", name: "LED구동 전원장치", spec: "", unit: "대", labors: {"통신관련산업기사": 0.15}, category: "device", page: 493, keywords: ["가변 정보 표지판(vms : variable message sign) 점검", "led구동 전원장치"] },
  { code: "통신 13-7-1-4", name: "광 다중화 장치", spec: "", unit: "대", labors: {"광케이블설치사": 0.25}, category: "device", page: 493, keywords: ["가변 정보 표지판(vms : variable message sign) 점검", "광 다중화 장치"] },
  { code: "통신 13-7-1-4", name: "종 합 시 험", spec: "", unit: "식", labors: {"S/W시험사": 0.21}, category: "device", page: 493, keywords: ["가변 정보 표지판(vms : variable message sign) 점검", "종 합 시 험"] },
  { code: "통신 13-7-1-5", name: "제어기", spec: "", unit: "대", labors: {"통신관련산업기사": 0.23}, category: "device", page: 494, keywords: ["제어기", "동영상 정보 수집기 점검"] },
  { code: "통신 13-7-1-5", name: "코덱(Codec)", spec: "", unit: "대", labors: {"통신관련산업기사": 0.19, "S/W시험사": 0.17}, category: "device", page: 494, keywords: ["코덱(codec)", "동영상 정보 수집기 점검"] },
  { code: "통신 13-7-1-5", name: "광 다중화 장치", spec: "", unit: "대", labors: {"광케이블설치사": 0.21}, category: "device", page: 494, keywords: ["동영상 정보 수집기 점검", "광 다중화 장치"] },
  { code: "통신 13-7-1-5", name: "종 합 시 험", spec: "", unit: "식", labors: {"S/W시험사": 0.19}, category: "device", page: 494, keywords: ["종 합 시 험", "동영상 정보 수집기 점검"] },
  { code: "통신 13-7-1-6", name: "제", spec: "제어기", unit: "대", labors: {"통신관련산업기사": 0.21}, category: "device", page: 495, keywords: ["기상정보 수집기 점검", "제어기"] },
  { code: "통신 13-7-1-6", name: "부", spec: "자료수집기", unit: "대", labors: {"광케이블설치사": 0.35}, category: "device", page: 495, keywords: ["자료수집기", "기상정보 수집기 점검"] },
  { code: "통신 13-7-1-6", name: "센", spec: "강우량 센서", unit: "개", labors: {"통신관련산업기사": 0.2, "S/W시험사": 0.15}, category: "device", page: 495, keywords: ["강우량 센서", "기상정보 수집기 점검"] },
  { code: "통신 13-7-1-6", name: "서", spec: "강우감지 센서", unit: "개", labors: {"통신관련산업기사": 0.2, "S/W시험사": 0.15}, category: "device", page: 495, keywords: ["강우감지 센서", "기상정보 수집기 점검"] },
  { code: "통신 13-7-1-6", name: "부", spec: "순복사 센서", unit: "개", labors: {"통신관련산업기사": 0.2, "S/W시험사": 0.15}, category: "device", page: 495, keywords: ["순복사 센서", "기상정보 수집기 점검"] },
  { code: "통신 13-7-1-6", name: "부", spec: "노면 센서", unit: "개", labors: {"통신관련산업기사": 0.06, "S/W시험사": 0.06}, category: "device", page: 495, keywords: ["기상정보 수집기 점검", "노면 센서"] },
  { code: "통신 13-7-1-6", name: "종 합 시 험", spec: "", unit: "식", labors: {"광케이블설치사": 0.21}, category: "device", page: 495, keywords: ["기상정보 수집기 점검", "종 합 시 험"] },
  { code: "통신 13-7-1-7", name: "구조물", spec: "", unit: "식", labors: {"통신관련산업기사": 0.14}, category: "device", page: 495, keywords: ["구조물", "위반 단속(과속, 신호위반) 장비 점검"] },
  { code: "통신 13-7-1-7", name: "검지부", spec: "", unit: "식", labors: {"통신관련산업기사": 0.07, "S/W시험사": 0.07}, category: "device", page: 495, keywords: ["검지부", "위반 단속(과속, 신호위반) 장비 점검"] },
  { code: "통신 13-7-1-7", name: "제어부", spec: "", unit: "식", labors: {"통신관련산업기사": 0.13, "S/W시험사": 0.13}, category: "device", page: 495, keywords: ["제어부", "위반 단속(과속, 신호위반) 장비 점검"] },
  { code: "통신 13-7-1-7", name: "성능 점검", spec: "신호단속", unit: "″", labors: {"통신관련산업기사": 0.11, "S/W시험사": 0.11}, category: "device", page: 495, keywords: ["성능 점검", "신호단속", "위반 단속(과속, 신호위반) 장비 점검"] },
  { code: "통신 13-7-2", name: "장치상태확인", spec: "", unit: "대", labors: {"통신관련산업기사": 0.13, "H/W시험사": 0.13}, category: "device", page: 496, keywords: ["장치상태확인", "정류장 안내단말기 점검"] },
  { code: "통신 13-7-2", name: "기능 및 동작확인", spec: "", unit: "대", labors: {"통신관련산업기사": 0.15, "H/W시험사": 0.15}, category: "device", page: 496, keywords: ["기능 및 동작확인", "정류장 안내단말기 점검"] },
  { code: "통신 13-7-3", name: "소형무선기지국", spec: "", unit: "대", labors: {"통신관련산업기사": 0.25, "H/W시험사": 0.25}, category: "device", page: 496, keywords: ["교통정보수집시스템 (beacon) 점검", "소형무선기지국"] },
  { code: "통신 13-7-3", name: "위치비콘", spec: "", unit: "대", labors: {"통신관련산업기사": 0.14, "H/W시험사": 0.14}, category: "device", page: 496, keywords: ["위치비콘", "교통정보수집시스템 (beacon) 점검"] },
  { code: "통신 13-7-4", name: "제어부", spec: "", unit: "대", labors: {"통신관련산업기사": 0.27, "H/W시험사": 0.27}, category: "device", page: 496, keywords: ["제어부", "노변기지국 점검"] },
  { code: "통신 13-7-4", name: "안테나부", spec: "", unit: "대", labors: {"통신관련산업기사": 0.22, "H/W시험사": 0.22}, category: "device", page: 496, keywords: ["안테나부", "노변기지국 점검"] },
  { code: "통신 13-7-5", name: "차량검지기", spec: "박스상태 점검(누수 및 박스 내부청소)", unit: "개", labors: {"H/W시험사": 0.02}, category: "device", page: 497, keywords: ["전자식 주차관제설비 점검", "차량검지기", "박스상태 점검(누수 및 박스 내부청소)"] },
  { code: "통신 13-7-5", name: "차량검지기", spec: "단자 케이블 결선상태", unit: "개", labors: {"H/W시험사": 0.04}, category: "device", page: 497, keywords: ["전자식 주차관제설비 점검", "차량검지기", "단자 케이블 결선상태"] },
  { code: "통신 13-7-5", name: "차량검지기", spec: "전원공급상태", unit: "개", labors: {"H/W시험사": 0.04}, category: "device", page: 497, keywords: ["전원공급상태", "전자식 주차관제설비 점검", "차량검지기"] },
  { code: "통신 13-7-5", name: "차량검지기", spec: "LED 점등상태", unit: "개", labors: {"H/W시험사": 0.02}, category: "device", page: 497, keywords: ["led 점등상태", "전자식 주차관제설비 점검", "차량검지기"] },
  { code: "통신 13-7-5", name: "차량검지기", spec: "루프코일 상태(누전 및 단선)", unit: "개", labors: {"H/W시험사": 0.02}, category: "device", page: 497, keywords: ["루프코일 상태(누전 및 단선)", "전자식 주차관제설비 점검", "차량검지기"] },
  { code: "통신 13-7-5", name: "차량검지기", spec: "루프코일 주파수 변조상태", unit: "개", labors: {"H/W시험사": 0.01}, category: "device", page: 497, keywords: ["루프코일 주파수 변조상태", "전자식 주차관제설비 점검", "차량검지기"] },
  { code: "통신 13-7-5", name: "차량검지기", spec: "타이머 동작상태", unit: "개", labors: {"H/W시험사": 0.01}, category: "device", page: 497, keywords: ["타이머 동작상태", "전자식 주차관제설비 점검", "차량검지기"] },
  { code: "통신 13-7-5", name: "차량검지기", spec: "차량진입 및 통과후 동작상태", unit: "개", labors: {"H/W시험사": 0.12}, category: "device", page: 497, keywords: ["차량진입 및 통과후 동작상태", "전자식 주차관제설비 점검", "차량검지기"] },
  { code: "통신 13-7-5", name: "차량검지기", spec: "차량진입시 카운터 신호", unit: "개", labors: {"H/W시험사": 0.01}, category: "device", page: 497, keywords: ["차량진입시 카운터 신호", "전자식 주차관제설비 점검", "차량검지기"] },
  { code: "통신 13-7-5", name: "주차권발행기", spec: "Roller/Belt 동작 및 마모상태", unit: "개", labors: {"H/W시험사": 0.04}, category: "device", page: 497, keywords: ["전자식 주차관제설비 점검", "roller/belt 동작 및 마모상태", "주차권발행기"] },
  { code: "통신 13-7-5", name: "주차권발행기", spec: "Magnetic Read, Write 및 Head마모상태", unit: "개", labors: {"H/W시험사": 0.08}, category: "device", page: 497, keywords: ["magnetic read, write 및 head마모상태", "전자식 주차관제설비 점검", "주차권발행기"] },
  { code: "통신 13-7-5", name: "주차권발행기", spec: "Card 공급상태", unit: "개", labors: {"H/W시험사": 0.04}, category: "device", page: 497, keywords: ["card 공급상태", "전자식 주차관제설비 점검", "주차권발행기"] },
  { code: "통신 13-7-5", name: "주차권발행기", spec: "Card Print 상태", unit: "개", labors: {"H/W시험사": 0.04}, category: "device", page: 497, keywords: ["card print 상태", "전자식 주차관제설비 점검", "주차권발행기"] },
  { code: "통신 13-7-5", name: "주차권발행기", spec: "동작속도 상태", unit: "개", labors: {"H/W시험사": 0.02}, category: "device", page: 497, keywords: ["동작속도 상태", "전자식 주차관제설비 점검", "주차권발행기"] },
  { code: "통신 13-7-5", name: "주차권발행기", spec: "차량검지 및 통과후 동작상태", unit: "개", labors: {"H/W시험사": 0.12}, category: "device", page: 497, keywords: ["차량검지 및 통과후 동작상태", "전자식 주차관제설비 점검", "주차권발행기"] },
  { code: "통신 13-7-5", name: "주차권발행기", spec: "Display 표시상태 및 Message 내용", unit: "개", labors: {"H/W시험사": 0.02}, category: "device", page: 497, keywords: ["display 표시상태 및 message 내용", "전자식 주차관제설비 점검", "주차권발행기"] },
  { code: "통신 13-7-5", name: "주차권발행기", spec: "외부장치와 통신상태(DATA 오류 유/무)", unit: "개", labors: {"H/W시험사": 0.18, "S/W시험사": 0.18}, category: "device", page: 497, keywords: ["전자식 주차관제설비 점검", "외부장치와 통신상태(data 오류 유/무)", "주차권발행기"] },
  { code: "통신 13-7-5", name: "주차권발행기", spec: "LED 점등상태", unit: "개", labors: {"H/W시험사": 0.02}, category: "device", page: 497, keywords: ["led 점등상태", "전자식 주차관제설비 점검", "주차권발행기"] },
  { code: "통신 13-7-5", name: "주차권발행기", spec: "음성상태 및 볼륨상태", unit: "개", labors: {"H/W시험사": 0.04}, category: "device", page: 497, keywords: ["음성상태 및 볼륨상태", "전자식 주차관제설비 점검", "주차권발행기"] },
  { code: "통신 13-7-5", name: "주차권발행기", spec: "전원스위치 동작상태", unit: "개", labors: {"H/W시험사": 0.04}, category: "device", page: 497, keywords: ["전자식 주차관제설비 점검", "주차권발행기", "전원스위치 동작상태"] },
  { code: "통신 13-7-5", name: "주차권발행기", spec: "주차카드 발급 스위치 동작상태", unit: "개", labors: {"H/W시험사": 0.04}, category: "device", page: 497, keywords: ["주차카드 발급 스위치 동작상태", "전자식 주차관제설비 점검", "주차권발행기"] },
  { code: "통신 13-7-5", name: "주차권발행기", spec: "온도 센서 및 발열상태", unit: "개", labors: {"H/W시험사": 0.03}, category: "device", page: 497, keywords: ["온도 센서 및 발열상태", "전자식 주차관제설비 점검", "주차권발행기"] },
  { code: "통신 13-7-5", name: "주차권발행기", spec: "각 위치의 커넥터 연결상태", unit: "개", labors: {"H/W시험사": 0.09}, category: "device", page: 497, keywords: ["각 위치의 커넥터 연결상태", "전자식 주차관제설비 점검", "주차권발행기"] },
  { code: "통신 13-7-5", name: "유인요금계산기", spec: "Operating System 동작상태", unit: "개", labors: {"S/W시험사": 0.12}, category: "device", page: 497, keywords: ["유인요금계산기", "operating system 동작상태", "전자식 주차관제설비 점검"] },
  { code: "통신 13-7-5", name: "유인요금계산기", spec: "Network 연결상태", unit: "개", labors: {"S/W시험사": 0.15}, category: "device", page: 497, keywords: ["유인요금계산기", "전자식 주차관제설비 점검", "network 연결상태"] },
  { code: "통신 13-7-5", name: "유인요금계산기", spec: "요금계산 Test", unit: "개", labors: {"H/W시험사": 0.02}, category: "device", page: 497, keywords: ["전자식 주차관제설비 점검", "유인요금계산기", "요금계산 test"] },
  { code: "통신 13-7-5", name: "유인요금계산기", spec: "보고서 출력상태(일일/월/계산원별등)", unit: "개", labors: {"S/W시험사": 0.08}, category: "device", page: 497, keywords: ["보고서 출력상태(일일/월/계산원별등)", "유인요금계산기", "전자식 주차관제설비 점검"] },
  { code: "통신 13-7-5", name: "유인요금계산기", spec: "Roller/Belt 동작상태", unit: "개", labors: {"H/W시험사": 0.04}, category: "device", page: 497, keywords: ["roller/belt 동작상태", "유인요금계산기", "전자식 주차관제설비 점검"] },
  { code: "통신 13-7-5", name: "유인요금계산기", spec: "Magnetic 판독상태", unit: "개", labors: {"H/W시험사": 0.08}, category: "device", page: 497, keywords: ["유인요금계산기", "전자식 주차관제설비 점검", "magnetic 판독상태"] },
  { code: "통신 13-7-5", name: "유인요금계산기", spec: "Data 오류 유/무", unit: "개", labors: {"H/W시험사": 0.18, "S/W시험사": 0.18}, category: "device", page: 497, keywords: ["유인요금계산기", "data 오류 유/무", "전자식 주차관제설비 점검"] },
  { code: "통신 13-7-5", name: "유인요금계산기", spec: "프린터 인쇄상태", unit: "개", labors: {"H/W시험사": 0.04}, category: "device", page: 497, keywords: ["유인요금계산기", "프린터 인쇄상태", "전자식 주차관제설비 점검"] },
  { code: "통신 13-7-5", name: "유인요금계산기", spec: "정산후 Cash Drawer Relay 동작상태", unit: "개", labors: {"H/W시험사": 0.04}, category: "device", page: 497, keywords: ["정산후 cash drawer relay 동작상태", "유인요금계산기", "전자식 주차관제설비 점검"] },
  { code: "통신 13-7-5", name: "유인요금계산기", spec: "시간 및 요금 표시상태", unit: "개", labors: {"H/W시험사": 0.02}, category: "device", page: 497, keywords: ["유인요금계산기", "전자식 주차관제설비 점검", "시간 및 요금 표시상태"] },
  { code: "통신 13-7-5", name: "유인요금계산기", spec: "중앙관리컴퓨터와 연결 및 Data처리 상태", unit: "개", labors: {"S/W시험사": 0.09}, category: "device", page: 497, keywords: ["중앙관리컴퓨터와 연결 및 data처리 상태", "유인요금계산기", "전자식 주차관제설비 점검"] },
  { code: "통신 13-7-5", name: "유인요금계산기", spec: "HDD 불량섹터 및 메모리 상태", unit: "개", labors: {"S/W시험사": 0.21}, category: "device", page: 497, keywords: ["유인요금계산기", "hdd 불량섹터 및 메모리 상태", "전자식 주차관제설비 점검"] },
  { code: "통신 13-7-5", name: "유인요금계산기", spec: "정산후 게이트 Open 신호상태", unit: "개", labors: {"H/W시험사": 0.04}, category: "device", page: 497, keywords: ["정산후 게이트 open 신호상태", "유인요금계산기", "전자식 주차관제설비 점검"] },
  { code: "통신 13-7-5", name: "유인요금계산기", spec: "기타 외함 및 동작상태", unit: "개", labors: {"H/W시험사": 0.04}, category: "device", page: 497, keywords: ["유인요금계산기", "기타 외함 및 동작상태", "전자식 주차관제설비 점검"] },
  { code: "통신 13-7-5", name: "무인요금계산기", spec: "Roller/Belt 동작 및 마모상태", unit: "개", labors: {"H/W시험사": 0.04}, category: "device", page: 497, keywords: ["전자식 주차관제설비 점검", "무인요금계산기", "roller/belt 동작 및 마모상태"] },
  { code: "통신 13-7-5", name: "무인요금계산기", spec: "Magnetic Read, Write상태 및 Head마모상태", unit: "개", labors: {"H/W시험사": 0.08}, category: "device", page: 497, keywords: ["magnetic read, write상태 및 head마모상태", "무인요금계산기", "전자식 주차관제설비 점검"] },
  { code: "통신 13-7-5", name: "무인요금계산기", spec: "Card 공급상태", unit: "개", labors: {"H/W시험사": 0.04}, category: "device", page: 497, keywords: ["무인요금계산기", "card 공급상태", "전자식 주차관제설비 점검"] },
  { code: "통신 13-7-5", name: "무인요금계산기", spec: "Card Print 상태", unit: "개", labors: {"H/W시험사": 0.04}, category: "device", page: 497, keywords: ["card print 상태", "무인요금계산기", "전자식 주차관제설비 점검"] },
  { code: "통신 13-7-5", name: "무인요금계산기", spec: "동작속도 상태", unit: "개", labors: {"H/W시험사": 0.02}, category: "device", page: 497, keywords: ["무인요금계산기", "동작속도 상태", "전자식 주차관제설비 점검"] },
  { code: "통신 13-7-5", name: "무인요금계산기", spec: "전면 표시부 동작상태", unit: "개", labors: {"H/W시험사": 0.02}, category: "device", page: 498, keywords: ["무인요금계산기", "전자식 주차관제설비 점검", "전면 표시부 동작상태"] },
  { code: "통신 13-7-5", name: "무인요금계산기", spec: "음성동작상태", unit: "개", labors: {"H/W시험사": 0.04}, category: "device", page: 498, keywords: ["음성동작상태", "무인요금계산기", "전자식 주차관제설비 점검"] },
  { code: "통신 13-7-5", name: "무인요금계산기", spec: "외부장치와 통신상태(Data 오류 유/무)", unit: "개", labors: {"H/W시험사": 0.18, "S/W시험사": 0.18}, category: "device", page: 498, keywords: ["전자식 주차관제설비 점검", "무인요금계산기", "외부장치와 통신상태(data 오류 유/무)"] },
  { code: "통신 13-7-5", name: "무인요금계산기", spec: "LED 점등상태", unit: "개", labors: {"H/W시험사": 0.02}, category: "device", page: 498, keywords: ["무인요금계산기", "전자식 주차관제설비 점검", "led 점등상태"] },
  { code: "통신 13-7-5", name: "무인요금계산기", spec: "온도 센서 및 발열상태", unit: "개", labors: {"H/W시험사": 0.03}, category: "device", page: 498, keywords: ["전자식 주차관제설비 점검", "무인요금계산기", "온도 센서 및 발열상태"] },
  { code: "통신 13-7-5", name: "무인요금계산기", spec: "지폐 및 동전별 판독 및 통신상태", unit: "개", labors: {"H/W시험사": 0.12}, category: "device", page: 498, keywords: ["지폐 및 동전별 판독 및 통신상태", "무인요금계산기", "전자식 주차관제설비 점검"] },
  { code: "통신 13-7-5", name: "무인요금계산기", spec: "지폐 및 동전별 거스름돈 환불상태", unit: "개", labors: {"H/W시험사": 0.14}, category: "device", page: 498, keywords: ["전자식 주차관제설비 점검", "무인요금계산기", "지폐 및 동전별 거스름돈 환불상태"] },
  { code: "통신 13-7-5", name: "무인요금계산기", spec: "영수증 내용 및 인쇄상태", unit: "개", labors: {"H/W시험사": 0.09}, category: "device", page: 498, keywords: ["무인요금계산기", "영수증 내용 및 인쇄상태", "전자식 주차관제설비 점검"] },
  { code: "통신 13-7-5", name: "무인요금계산기", spec: "전원공급 및 스위치 상태", unit: "개", labors: {"H/W시험사": 0.04}, category: "device", page: 498, keywords: ["무인요금계산기", "전자식 주차관제설비 점검", "전원공급 및 스위치 상태"] },
  { code: "통신 13-7-5", name: "무인요금계산기", spec: "호스트 컴퓨터와 연결상태", unit: "개", labors: {"H/W시험사": 0.25, "S/W시험사": 0.25}, category: "device", page: 498, keywords: ["무인요금계산기", "전자식 주차관제설비 점검", "호스트 컴퓨터와 연결상태"] },
  { code: "통신 13-7-5", name: "무인요금계산기", spec: "Data Base의 연결상태", unit: "개", labors: {"S/W시험사": 0.21}, category: "device", page: 498, keywords: ["무인요금계산기", "전자식 주차관제설비 점검", "data base의 연결상태"] },
  { code: "통신 13-7-5", name: "무인요금계산기", spec: "보고서 출력상태(일일/월등)", unit: "개", labors: {"H/W시험사": 0.08}, category: "device", page: 498, keywords: ["무인요금계산기", "전자식 주차관제설비 점검", "보고서 출력상태(일일/월등)"] },
  { code: "통신 13-7-5", name: "무인요금계산기", spec: "각각의 위치 센서 동작상태", unit: "개", labors: {"H/W시험사": 0.06}, category: "device", page: 498, keywords: ["무인요금계산기", "전자식 주차관제설비 점검", "각각의 위치 센서 동작상태"] },
  { code: "통신 13-7-5", name: "무인요금계산기", spec: "외함 손상 및 도어록 상태", unit: "개", labors: {"H/W시험사": 0.04}, category: "device", page: 498, keywords: ["무인요금계산기", "전자식 주차관제설비 점검", "외함 손상 및 도어록 상태"] },
  { code: "통신 13-7-5", name: "무인요금계산기", spec: "각 위치의 보안용 램프 점등상태", unit: "개", labors: {"H/W시험사": 0.02}, category: "device", page: 498, keywords: ["무인요금계산기", "각 위치의 보안용 램프 점등상태", "전자식 주차관제설비 점검"] },
  { code: "통신 13-7-5", name: "무인요금계산기", spec: "각 위치의 커넥터 연결상태", unit: "개", labors: {"H/W시험사": 0.09}, category: "device", page: 498, keywords: ["무인요금계산기", "각 위치의 커넥터 연결상태", "전자식 주차관제설비 점검"] },
  { code: "통신 13-7-5", name: "중앙관리컴퓨터", spec: "Operating System 동작상태", unit: "개", labors: {"S/W시험사": 0.12}, category: "device", page: 498, keywords: ["중앙관리컴퓨터", "operating system 동작상태", "전자식 주차관제설비 점검"] },
  { code: "통신 13-7-5", name: "중앙관리컴퓨터", spec: "Network 연결상태", unit: "개", labors: {"S/W시험사": 0.15}, category: "device", page: 498, keywords: ["중앙관리컴퓨터", "전자식 주차관제설비 점검", "network 연결상태"] },
  { code: "통신 13-7-5", name: "중앙관리컴퓨터", spec: "Data Base 연결상태", unit: "개", labors: {"S/W시험사": 0.21}, category: "device", page: 498, keywords: ["data base 연결상태", "중앙관리컴퓨터", "전자식 주차관제설비 점검"] },
  { code: "통신 13-7-5", name: "중앙관리컴퓨터", spec: "보고서 출력상태(일일/월/계산원별등)", unit: "개", labors: {"H/W시험사": 0.08}, category: "device", page: 498, keywords: ["보고서 출력상태(일일/월/계산원별등)", "중앙관리컴퓨터", "전자식 주차관제설비 점검"] },
  { code: "통신 13-7-5", name: "중앙관리컴퓨터", spec: "불량섹터 및 메모리 상태", unit: "개", labors: {"S/W시험사": 0.21}, category: "device", page: 498, keywords: ["중앙관리컴퓨터", "전자식 주차관제설비 점검", "불량섹터 및 메모리 상태"] },
  { code: "통신 13-7-5", name: "중앙관리컴퓨터", spec: "각 장비별 연결상태 및 Data 오류 유/무", unit: "개", labors: {"S/W시험사": 0.18}, category: "device", page: 498, keywords: ["중앙관리컴퓨터", "전자식 주차관제설비 점검", "각 장비별 연결상태 및 data 오류 유/무"] },
  { code: "통신 13-7-5", name: "중앙관리컴퓨터", spec: "Case 내부 청소상태", unit: "개", labors: {"S/W시험사": 0.04}, category: "device", page: 498, keywords: ["전자식 주차관제설비 점검", "중앙관리컴퓨터", "case 내부 청소상태"] },
  { code: "통신 13-7-5", name: "정기권판독기", spec: "정격 카드 인식거리 상태", unit: "개", labors: {"H/W시험사": 0.13}, category: "device", page: 498, keywords: ["전자식 주차관제설비 점검", "정기권판독기", "정격 카드 인식거리 상태"] },
  { code: "통신 13-7-5", name: "및 컨트롤러", spec: "정격 전원 투입상태", unit: "개", labors: {"H/W시험사": 0.04}, category: "device", page: 498, keywords: ["정격 전원 투입상태", "전자식 주차관제설비 점검", "및 컨트롤러"] },
  { code: "통신 13-7-5", name: "및 컨트롤러", spec: "호스트 컴퓨터와의 연결상태(커넥터)", unit: "개", labors: {"H/W시험사": 0.25, "S/W시험사": 0.25}, category: "device", page: 498, keywords: ["전자식 주차관제설비 점검", "호스트 컴퓨터와의 연결상태(커넥터)", "및 컨트롤러"] },
  { code: "통신 13-7-5", name: "및 컨트롤러", spec: "Data 내용", unit: "개", labors: {"S/W시험사": 0.1}, category: "device", page: 498, keywords: ["data 내용", "전자식 주차관제설비 점검", "및 컨트롤러"] },
  { code: "통신 13-7-5", name: "및 컨트롤러", spec: "등록된 정기권 인식후 게이트 열림상태", unit: "개", labors: {"H/W시험사": 0.12}, category: "device", page: 498, keywords: ["전자식 주차관제설비 점검", "및 컨트롤러", "등록된 정기권 인식후 게이트 열림상태"] },
  { code: "통신 13-7-5", name: "및 컨트롤러", spec: "누전/누수 및 손상상태", unit: "개", labors: {"H/W시험사": 0.06}, category: "device", page: 498, keywords: ["전자식 주차관제설비 점검", "누전/누수 및 손상상태", "및 컨트롤러"] },
  { code: "통신 13-7-5", name: "및 컨트롤러", spec: "동작 LED 점등상태", unit: "개", labors: {"H/W시험사": 0.02}, category: "device", page: 498, keywords: ["동작 led 점등상태", "전자식 주차관제설비 점검", "및 컨트롤러"] },
  { code: "통신 13-7-5", name: "차 단 기", spec: "상하단 케이스 상태", unit: "개", labors: {"H/W시험사": 0.02}, category: "device", page: 498, keywords: ["전자식 주차관제설비 점검", "차 단 기", "상하단 케이스 상태"] },
  { code: "통신 13-7-5", name: "차 단 기", spec: "파손 및 볼트 마모상태", unit: "개", labors: {"H/W시험사": 0.02}, category: "device", page: 498, keywords: ["차 단 기", "전자식 주차관제설비 점검", "파손 및 볼트 마모상태"] },
  { code: "통신 13-7-5", name: "차 단 기", spec: "차량통과후 자동 닫힘 상태", unit: "개", labors: {"H/W시험사": 0.11}, category: "device", page: 498, keywords: ["차 단 기", "차량통과후 자동 닫힘 상태", "전자식 주차관제설비 점검"] },
  { code: "통신 13-7-5", name: "차 단 기", spec: "차량 진입시 Lock 신호상태", unit: "개", labors: {"H/W시험사": 0.02}, category: "device", page: 498, keywords: ["차 단 기", "전자식 주차관제설비 점검", "차량 진입시 lock 신호상태"] },
  { code: "통신 13-7-5", name: "차 단 기", spec: "리바운드 신호상태", unit: "개", labors: {"H/W시험사": 0.02}, category: "device", page: 499, keywords: ["차 단 기", "전자식 주차관제설비 점검", "리바운드 신호상태"] },
  { code: "통신 13-7-5", name: "차 단 기", spec: "루프코일 절연 및 단선여부 확인", unit: "개", labors: {"H/W시험사": 0.04}, category: "device", page: 499, keywords: ["차 단 기", "루프코일 절연 및 단선여부 확인", "전자식 주차관제설비 점검"] },
  { code: "통신 13-7-5", name: "차 단 기", spec: "UP/Down Limit Switch 동작상태", unit: "개", labors: {"H/W시험사": 0.03}, category: "device", page: 499, keywords: ["차 단 기", "전자식 주차관제설비 점검", "up/down limit switch 동작상태"] },
  { code: "통신 13-7-5", name: "차 단 기", spec: "스프링 장력 상태", unit: "개", labors: {"H/W시험사": 0.02}, category: "device", page: 499, keywords: ["차 단 기", "스프링 장력 상태", "전자식 주차관제설비 점검"] },
  { code: "통신 13-7-5", name: "차 단 기", spec: "Motor Unit브레이크 및 떨림상태", unit: "개", labors: {"H/W시험사": 0.02}, category: "device", page: 499, keywords: ["전자식 주차관제설비 점검", "차 단 기", "motor unit브레이크 및 떨림상태"] },
  { code: "통신 13-7-5", name: "차 단 기", spec: "FUSE(250V 2A) 상태", unit: "개", labors: {"H/W시험사": 0.02}, category: "device", page: 499, keywords: ["차 단 기", "fuse(250v 2a) 상태", "전자식 주차관제설비 점검"] },
  { code: "통신 13-7-5", name: "차 단 기", spec: "온도 Sensor 및 발열상태", unit: "개", labors: {"H/W시험사": 0.03}, category: "device", page: 499, keywords: ["차 단 기", "전자식 주차관제설비 점검", "온도 sensor 및 발열상태"] },
  { code: "통신 13-7-5", name: "차 단 기", spec: "외부장치 연결상태(신호발생시 동작상태)", unit: "개", labors: {"S/W시험사": 0.18}, category: "device", page: 499, keywords: ["차 단 기", "외부장치 연결상태(신호발생시 동작상태)", "전자식 주차관제설비 점검"] },
  { code: "통신 13-7-5", name: "차 단 기", spec: "수동 및 자동설정시 동작상태", unit: "개", labors: {"H/W시험사": 0.04}, category: "device", page: 499, keywords: ["차 단 기", "수동 및 자동설정시 동작상태", "전자식 주차관제설비 점검"] },
  { code: "통신 13-7-5", name: "중앙감시반", spec: "전원공급상태(FUSE 상태), 통신상태", unit: "개", labors: {"H/W시험사": 0.06}, category: "device", page: 499, keywords: ["전자식 주차관제설비 점검", "전원공급상태(fuse 상태), 통신상태", "중앙감시반"] },
  { code: "통신 13-7-5", name: "중앙감시반", spec: "Keyboard 동작상태", unit: "개", labors: {"S/W시험사": 0.02}, category: "device", page: 499, keywords: ["keyboard 동작상태", "전자식 주차관제설비 점검", "중앙감시반"] },
  { code: "통신 13-7-5", name: "중앙감시반", spec: "FND 손상상태", unit: "개", labors: {"H/W시험사": 0.02}, category: "device", page: 499, keywords: ["전자식 주차관제설비 점검", "중앙감시반", "fnd 손상상태"] },
  { code: "통신 13-7-5", name: "중앙감시반", spec: "신호발생시 Data 오류 유/무 확인", unit: "개", labors: {"S/W시험사": 0.08}, category: "device", page: 499, keywords: ["전자식 주차관제설비 점검", "신호발생시 data 오류 유/무 확인", "중앙감시반"] },
  { code: "통신 13-7-5", name: "중앙감시반", spec: "날짜 및 시간등 프로그램 동작상태", unit: "개", labors: {"S/W시험사": 0.04}, category: "device", page: 499, keywords: ["전자식 주차관제설비 점검", "날짜 및 시간등 프로그램 동작상태", "중앙감시반"] },
  { code: "통신 13-7-5", name: "주차위치확인기", spec: "정격전원 공급 유/무 확인", unit: "개", labors: {"H/W시험사": 0.04}, category: "device", page: 499, keywords: ["전자식 주차관제설비 점검", "주차위치확인기", "정격전원 공급 유/무 확인"] },
  { code: "통신 13-7-5", name: "주차위치확인기", spec: "전원 및 동작시 황색 LED 점등상태", unit: "개", labors: {"H/W시험사": 0.02}, category: "device", page: 499, keywords: ["전원 및 동작시 황색 led 점등상태", "전자식 주차관제설비 점검", "주차위치확인기"] },
  { code: "통신 13-7-5", name: "주차위치확인기", spec: "Motor 속도 및 떨림상태", unit: "개", labors: {"H/W시험사": 0.02}, category: "device", page: 499, keywords: ["전자식 주차관제설비 점검", "주차위치확인기", "motor 속도 및 떨림상태"] },
  { code: "통신 13-7-5", name: "주차위치확인기", spec: "주차카드 인쇄내용 및 출력상태", unit: "개", labors: {"H/W시험사": 0.02}, category: "device", page: 499, keywords: ["전자식 주차관제설비 점검", "주차위치확인기", "주차카드 인쇄내용 및 출력상태"] },
  { code: "통신 13-7-5", name: "주차위치확인기", spec: "잉크밀도 상태", unit: "개", labors: {"H/W시험사": 0.02}, category: "device", page: 499, keywords: ["잉크밀도 상태", "전자식 주차관제설비 점검", "주차위치확인기"] },
  { code: "통신 13-7-5", name: "주차위치확인기", spec: "Case 파손여부 및 이물질 투입상태", unit: "개", labors: {"H/W시험사": 0.04}, category: "device", page: 499, keywords: ["case 파손여부 및 이물질 투입상태", "전자식 주차관제설비 점검", "주차위치확인기"] },
  { code: "통신 13-7-5", name: "주차위치확인기", spec: "카드 투입구 이물질 청소상태", unit: "개", labors: {"H/W시험사": 0.02}, category: "device", page: 499, keywords: ["전자식 주차관제설비 점검", "카드 투입구 이물질 청소상태", "주차위치확인기"] },
  { code: "통신 13-7-5", name: "주차위치확인기", spec: "위치 표시용 Lamp 점등상태", unit: "개", labors: {"H/W시험사": 0.02}, category: "device", page: 499, keywords: ["위치 표시용 lamp 점등상태", "전자식 주차관제설비 점검", "주차위치확인기"] },
  { code: "통신 13-7-5", name: "경 보 등", spec: "외함 및 전원 공급상태", unit: "개", labors: {"H/W시험사": 0.04}, category: "device", page: 499, keywords: ["외함 및 전원 공급상태", "전자식 주차관제설비 점검", "경 보 등"] },
  { code: "통신 13-7-5", name: "경 보 등", spec: "Lamp(24V) 점등상태, Buzzer 동작상태", unit: "개", labors: {"H/W시험사": 0.02}, category: "device", page: 499, keywords: ["전자식 주차관제설비 점검", "경 보 등", "lamp(24v) 점등상태, buzzer 동작상태"] },
  { code: "통신 13-7-5", name: "경 보 등", spec: "Motor 동작상태(떨림 및 마모상태)", unit: "개", labors: {"H/W시험사": 0.02}, category: "device", page: 499, keywords: ["motor 동작상태(떨림 및 마모상태)", "전자식 주차관제설비 점검", "경 보 등"] },
  { code: "통신 13-7-5", name: "유 도 등", spec: "외함 및 전원공급상태", unit: "개", labors: {"H/W시험사": 0.04}, category: "device", page: 499, keywords: ["외함 및 전원공급상태", "전자식 주차관제설비 점검", "유 도 등"] },
  { code: "통신 13-7-5", name: "유 도 등", spec: "안정기 동작상태", unit: "개", labors: {"H/W시험사": 0.04}, category: "device", page: 499, keywords: ["안정기 동작상태", "전자식 주차관제설비 점검", "유 도 등"] },
  { code: "통신 13-7-5", name: "2색신호등", spec: "외함 및 전원공급상태", unit: "개", labors: {"H/W시험사": 0.04}, category: "device", page: 499, keywords: ["2색신호등", "전자식 주차관제설비 점검", "외함 및 전원공급상태"] },
  { code: "통신 13-7-5", name: "2색신호등", spec: "Lamp 손상상태", unit: "개", labors: {"H/W시험사": 0.02}, category: "device", page: 499, keywords: ["전자식 주차관제설비 점검", "2색신호등", "lamp 손상상태"] },
  { code: "통신 13-7-5", name: "만 차 등", spec: "외함 및 전원공급상태", unit: "개", labors: {"H/W시험사": 0.04}, category: "device", page: 499, keywords: ["전자식 주차관제설비 점검", "외함 및 전원공급상태", "만 차 등"] },
  { code: "통신 13-7-5", name: "만 차 등", spec: "중앙감시반과 Data 오류 유/무 확인", unit: "개", labors: {"H/W시험사": 0.04}, category: "device", page: 499, keywords: ["중앙감시반과 data 오류 유/무 확인", "전자식 주차관제설비 점검", "만 차 등"] },
  { code: "통신 13-7-5", name: "출차 주의등", spec: "외함 및 전원공급상태", unit: "개", labors: {"H/W시험사": 0.04}, category: "device", page: 499, keywords: ["전자식 주차관제설비 점검", "외함 및 전원공급상태", "출차 주의등"] },
  { code: "통신 13-7-5", name: "출차 주의등", spec: "Lamp, Motor, Buzzer 상태", unit: "개", labors: {"H/W시험사": 0.02}, category: "device", page: 499, keywords: ["전자식 주차관제설비 점검", "lamp, motor, buzzer 상태", "출차 주의등"] },
  { code: "통신 13-7-5", name: "진입금지등", spec: "외함 및 전원공급상태(점등상태)", unit: "개", labors: {"H/W시험사": 0.04}, category: "device", page: 499, keywords: ["외함 및 전원공급상태(점등상태)", "진입금지등", "전자식 주차관제설비 점검"] },
  { code: "통신 13-7-5", name: "소 거 기", spec: "청소 및 동작상태", unit: "개", labors: {"H/W시험사": 0.06}, category: "device", page: 499, keywords: ["소 거 기", "전자식 주차관제설비 점검", "청소 및 동작상태"] },
  { code: "통신 13-7-6", name: "청 소", spec: "하우징(고정형)", unit: "대", labors: {"특별인부": 0.1}, category: "device", page: 500, keywords: ["하우징(고정형)", "청 소", "cctv 시스템 점검"] },
  { code: "통신 13-7-6", name: "청 소", spec: "각종 기기가", unit: "가", labors: {"특별인부": 0.09}, category: "device", page: 500, keywords: ["각종 기기가", "청 소", "cctv 시스템 점검"] },
  { code: "통신 13-7-6", name: "케이블 시험(정리 포함)", spec: "", unit: "회선", labors: {"통신케이블공": 0.15, "특별인부": 0.13}, category: "device", page: 500, keywords: ["케이블 시험(정리 포함)", "cctv 시스템 점검"] },
  { code: "통신 13-7-6", name: "시 스 템 시 험", spec: "", unit: "CH", labors: {"통신관련산업기사": 0.26}, category: "device", page: 500, keywords: ["시 스 템 시 험", "cctv 시스템 점검"] },
  { code: "통신 13-7-6", name: "Matrix", spec: "", unit: "CH", labors: {"통신관련산업기사": 0.25}, category: "device", page: 500, keywords: ["cctv 시스템 점검", "matrix"] },
  { code: "통신 13-7-6", name: "카메라", spec: "", unit: "대", labors: {"통신관련산업기사": 0.13}, category: "device", page: 500, keywords: ["cctv 시스템 점검", "카메라"] },
  { code: "통신 13-7-6", name: "모니터", spec: "", unit: "개", labors: {"통신관련산업기사": 0.06}, category: "device", page: 500, keywords: ["cctv 시스템 점검", "모니터"] },
  { code: "통신 13-7-6", name: "모니터(Switcher내장형)", spec: "", unit: "개", labors: {"통신관련산업기사": 0.06}, category: "device", page: 500, keywords: ["모니터(switcher내장형)", "cctv 시스템 점검"] },
  { code: "통신 13-7-6", name: "P A N / T I L T", spec: "", unit: "개", labors: {"특별인부": 0.12}, category: "device", page: 500, keywords: ["p a n / t i l t", "cctv 시스템 점검"] },
  { code: "통신 13-7-6", name: "각종Controller(Power, P/T등)", spec: "", unit: "세트또는CH", labors: {"통신관련산업기사": 0.24}, category: "device", page: 500, keywords: ["각종controller(power, p/t등)", "cctv 시스템 점검"] },
  { code: "통신 13-7-6", name: "Distributor", spec: "", unit: "대", labors: {"통신관련산업기사": 0.06}, category: "device", page: 500, keywords: ["cctv 시스템 점검", "distributor"] },
  { code: "통신 13-7-6", name: "Switcher(Frame or Quad)", spec: "", unit: "대", labors: {"통신관련산업기사": 0.06}, category: "device", page: 500, keywords: ["switcher(frame or quad)", "cctv 시스템 점검"] },
  { code: "통신 13-7-6", name: "Booster AMP", spec: "", unit: "대", labors: {"통신관련산업기사": 0.06}, category: "device", page: 500, keywords: ["booster amp", "cctv 시스템 점검"] },
  { code: "통신 13-7-6", name: "비상호출장치", spec: "방송장비(스피커,마이크)", unit: "개", labors: {"통신관련산업기사": 0.14}, category: "device", page: 500, keywords: ["비상호출장치", "방송장비(스피커,마이크)", "cctv 시스템 점검"] },
  { code: "통신 13-7-6", name: "비상호출장치", spec: "투광등(스포트라이트)", unit: "개", labors: {"통신관련산업기사": 0.14}, category: "device", page: 500, keywords: ["비상호출장치", "cctv 시스템 점검", "투광등(스포트라이트)"] },
  { code: "통신 13-7-6", name: "비상호출장치", spec: "경보신호등·버튼", unit: "개", labors: {"통신관련산업기사": 0.14}, category: "device", page: 500, keywords: ["경보신호등·버튼", "비상호출장치", "cctv 시스템 점검"] },
  { code: "통신 13-7-6", name: "V T R", spec: "", unit: "개", labors: {"특별인부": 0.1}, category: "device", page: 500, keywords: ["cctv 시스템 점검", "v t r"] },
  { code: "통신 13-7-6", name: "DVR 또는 NVR", spec: "", unit: "개", labors: {"통신관련산업기사": 0.22}, category: "device", page: 500, keywords: ["dvr 또는 nvr", "cctv 시스템 점검"] },
  { code: "통신 13-7-6", name: "Terminal(Remote,VideoSensor,CardKey등)", spec: "", unit: "개", labors: {"통신관련산업기사": 0.06, "특별인부": 0.1}, category: "device", page: 500, keywords: ["terminal(remote,videosensor,cardkey등)", "cctv 시스템 점검"] },
  { code: "통신 13-7-6", name: "제어함체", spec: "", unit: "개", labors: {"통신관련산업기사": 0.14}, category: "device", page: 500, keywords: ["제어함체", "cctv 시스템 점검"] },
  { code: "통신 13-7-6", name: "장비집합체", spec: "", unit: "개", labors: {"통신관련산업기사": 0.17}, category: "device", page: 500, keywords: ["cctv 시스템 점검", "장비집합체"] },
  { code: "통신 13-7-6", name: "전광판", spec: "", unit: "개", labors: {"통신관련산업기사": 0.17}, category: "device", page: 500, keywords: ["cctv 시스템 점검", "전광판"] },
  { code: "통신 13-7-6", name: "비디오서버", spec: "", unit: "개", labors: {"통신관련산업기사": 0.13}, category: "device", page: 500, keywords: ["비디오서버", "cctv 시스템 점검"] },
  { code: "통신 13-7-6", name: "Power AMP", spec: "", unit: "개", labors: {"통신관련산업기사": 0.15}, category: "device", page: 500, keywords: ["power amp", "cctv 시스템 점검"] },
  { code: "통신 13-7-6", name: "광 송·수신장치", spec: "", unit: "개", labors: {"통신관련산업기사": 0.15}, category: "device", page: 500, keywords: ["cctv 시스템 점검", "광 송·수신장치"] },
  { code: "통신 13-7-6", name: "송·수신기", spec: "", unit: "개", labors: {"통신관련산업기사": 0.15}, category: "device", page: 500, keywords: ["송·수신기", "cctv 시스템 점검"] },
  { code: "통신 13-7-7", name: "정류조 청소 및 점검", spec: "", unit: "대", labors: {"통신관련산업기사": 0.07}, category: "device", page: 502, keywords: ["정류조 청소 및 점검", "수질원격감시시스템(tms) 점검"] },
  { code: "통신 13-7-7", name: "데이터로거 점검", spec: "", unit: "대", labors: {"통신관련산업기사": 0.08}, category: "device", page: 502, keywords: ["수질원격감시시스템(tms) 점검", "데이터로거 점검"] },
  { code: "통신 13-7-7", name: "측", spec: "총질소(T-N)", unit: "개", labors: {"통신관련산업기사": 0.6}, category: "device", page: 502, keywords: ["수질원격감시시스템(tms) 점검", "총질소(t-n)"] },
  { code: "통신 13-7-7", name: "정", spec: "총인(T-P)", unit: "개", labors: {"통신관련산업기사": 0.6}, category: "device", page: 502, keywords: ["총인(t-p)", "수질원격감시시스템(tms) 점검"] },
  { code: "통신 13-7-7", name: "기", spec: "화학적산소요구량(COD)", unit: "개", labors: {"통신관련산업기사": 0.66}, category: "device", page: 502, keywords: ["화학적산소요구량(cod)", "수질원격감시시스템(tms) 점검"] },
  { code: "통신 13-7-7", name: "기", spec: "부유물질(SS)", unit: "개", labors: {"통신관련산업기사": 0.18}, category: "device", page: 502, keywords: ["수질원격감시시스템(tms) 점검", "부유물질(ss)"] },
  { code: "통신 13-7-7", name: "기", spec: "수소이온농도(pH)", unit: "개", labors: {"통신관련산업기사": 0.18}, category: "device", page: 502, keywords: ["수질원격감시시스템(tms) 점검", "수소이온농도(ph)"] },
  { code: "통신 13-7-8", name: "출입통제 프로그램", spec: "", unit: "식", labors: {"통신관련산업기사": 0.14}, category: "device", page: 502, keywords: ["출입통제시스템 점검", "출입통제 프로그램"] },
  { code: "통신 13-7-8", name: "주제어장치(ACU)", spec: "", unit: "대", labors: {"통신관련산업기사": 0.12}, category: "device", page: 502, keywords: ["주제어장치(acu)", "출입통제시스템 점검"] },
  { code: "통신 13-7-8", name: "Card Reader", spec: "", unit: "대", labors: {"통신관련산업기사": 0.09}, category: "device", page: 502, keywords: ["출입통제시스템 점검", "card reader"] },
  { code: "통신 13-7-8", name: "각종 부대장비", spec: "", unit: "대", labors: {"통신관련산업기사": 0.07}, category: "device", page: 502, keywords: ["출입통제시스템 점검", "각종 부대장비"] },
  { code: "통신 13-7-9", name: "영상부", spec: "", unit: "대", labors: {"S/W시험사": 0.33, "H/W시험사": 0.66}, category: "device", page: 503, keywords: ["영상부", "구름자동관측시스템 점검"] },
  { code: "통신 13-7-9", name: "제어부", spec: "", unit: "대", labors: {"S/W시험사": 0.48, "H/W시험사": 0.97}, category: "device", page: 503, keywords: ["구름자동관측시스템 점검", "제어부"] },
  { code: "통신 13-7-9", name: "전원부", spec: "", unit: "대", labors: {"S/W시험사": 0.24, "H/W시험사": 0.48}, category: "device", page: 503, keywords: ["구름자동관측시스템 점검", "전원부"] },
  { code: "통신 13-7-10", name: "Main System 점검", spec: "", unit: "식", labors: {"H/W시험사": 0.2, "S/W시험사": 0.2}, category: "device", page: 503, keywords: ["main system 점검", "무인국사 통신설비 감시시스템 점검"] },
  { code: "통신 13-7-10", name: "카메라 제어 및 영상 출력 상태 점검", spec: "", unit: "식", labors: {"H/W시험사": 0.33, "S/W시험사": 0.33}, category: "device", page: 503, keywords: ["카메라 제어 및 영상 출력 상태 점검", "무인국사 통신설비 감시시스템 점검"] },
  { code: "통신 13-7-10", name: "입력 센서 동작 상태 점검", spec: "", unit: "식", labors: {"H/W시험사": 0.29, "S/W시험사": 0.29}, category: "device", page: 503, keywords: ["입력 센서 동작 상태 점검", "무인국사 통신설비 감시시스템 점검"] },
  { code: "통신 13-7-10", name: "제어(출력) 센서 동작 상태 점검", spec: "", unit: "식", labors: {"H/W시험사": 0.19, "S/W시험사": 0.19}, category: "device", page: 503, keywords: ["무인국사 통신설비 감시시스템 점검", "제어(출력) 센서 동작 상태 점검"] },
  { code: "통신 13-7-11", name: "측정소 점검", spec: "", unit: "대", labors: {"통신관련산업기사": 0.11}, category: "device", page: 504, keywords: ["측정소 점검", "다항목 수질계측기 점검"] },
  { code: "통신 13-7-11", name: "외함 및 샘플링 펌프 점검", spec: "", unit: "대", labors: {"통신관련산업기사": 0.11}, category: "device", page: 504, keywords: ["외함 및 샘플링 펌프 점검", "다항목 수질계측기 점검"] },
  { code: "통신 13-7-11", name: "계측기", spec: "탁도", unit: "대", labors: {"통신관련산업기사": 0.18}, category: "device", page: 504, keywords: ["탁도", "다항목 수질계측기 점검", "계측기"] },
  { code: "통신 13-7-12", name: "중계기 함체", spec: "", unit: "대", labors: {"통신관련산업기사": 0.13}, category: "device", page: 505, keywords: ["중계기 함체", "스마트 비탈면 경보시스템 점검"] },
  { code: "통신 13-7-12", name: "센서 함체", spec: "", unit: "대", labors: {"통신관련산업기사": 0.06}, category: "device", page: 505, keywords: ["스마트 비탈면 경보시스템 점검", "센서 함체"] },
  { code: "통신 13-7-13", name: "보행신호 음성안내 보조장치", spec: "", unit: "세트", labors: {"통신관련기사": 0.28, "H/W시험사": 0.14}, category: "device", page: 505, keywords: ["보행신호 음성안내 보조장치 점검", "보행신호 음성안내 보조장치"] },
  { code: "통신 13-7-14", name: "열 영상 감시 카메라", spec: "", unit: "대", labors: {"통신관련산업기사": 0.17, "통신설비공": 0.17}, category: "device", page: 505, keywords: ["열 영상 감시 카메라", "열 영상 감시 시스템 점검"] },
  { code: "통신 13-7-14", name: "팬틸트", spec: "", unit: "대", labors: {"통신관련산업기사": 0.19, "통신설비공": 0.19}, category: "device", page: 505, keywords: ["팬틸트", "열 영상 감시 시스템 점검"] },
  { code: "통신 13-7-14", name: "브라켓", spec: "", unit: "대", labors: {"통신관련산업기사": 0.15, "통신설비공": 0.15}, category: "device", page: 505, keywords: ["브라켓", "열 영상 감시 시스템 점검"] },
  { code: "통신 13-7-14", name: "레이저 감지기", spec: "", unit: "대", labors: {"통신관련산업기사": 0.13, "통신설비공": 0.13}, category: "device", page: 505, keywords: ["레이저 감지기", "열 영상 감시 시스템 점검"] },
  { code: "통신 13-7-14", name: "점멸기 점검", spec: "", unit: "대", labors: {"통신관련산업기사": 0.08}, category: "device", page: 506, keywords: ["열 영상 감시 시스템 점검", "점멸기 점검"] },
  { code: "통신 13-7-14", name: "DB입력 및 확인", spec: "", unit: "대", labors: {"통신관련산업기사": 0.03}, category: "device", page: 506, keywords: ["db입력 및 확인", "열 영상 감시 시스템 점검"] },
  { code: "통신 13-7-16", name: "점멸기 점검", spec: "", unit: "대", labors: {"통신관련산업기사": 0.03}, category: "device", page: 506, keywords: ["스마트 보안등 감시 제어시스템 점검", "점멸기 점검"] },
  { code: "통신 13-7-16", name: "DB입력 및 확인", spec: "", unit: "대", labors: {"통신관련산업기사": 0.03}, category: "device", page: 506, keywords: ["스마트 보안등 감시 제어시스템 점검", "db입력 및 확인"] },
  { code: "통신 13-7-17", name: "장비 점검", spec: "", unit: "대", labors: {"H/W시험사": 0.07}, category: "device", page: 506, keywords: ["음식물쓰레기 개별계량장비 점검", "장비 점검"] },
  { code: "통신 13-7-17", name: "부품 교체", spec: "메인보드", unit: "개", labors: {"통신설비공": 0.15}, category: "device", page: 506, keywords: ["부품 교체", "음식물쓰레기 개별계량장비 점검", "메인보드"] },
  { code: "통신 13-7-18", name: "유량계 및 압력계", spec: "", unit: "대", labors: {"통신설비공": 0.39}, category: "device", page: 507, keywords: ["유량계 및 압력계 점검", "유량계 및 압력계"] },
  { code: "통신 13-7-18", name: "유량계 변환기", spec: "", unit: "식", labors: {"통신설비공": 0.11}, category: "device", page: 507, keywords: ["유량계 변환기", "유량계 및 압력계 점검"] },
  { code: "통신 13-7-19", name: "무인 발급시스템", spec: "", unit: "대", labors: {"H/W시험사": 0.13}, category: "device", page: 507, keywords: ["무인 발급시스템", "통합민원발급시스템 점검"] },
  { code: "통신 13-7-20", name: "비상벨", spec: "공중화장실", unit: "개소", labors: {"통신관련산업기사": 0.05}, category: "device", page: 508, keywords: ["비상벨", "비상벨(화장실, 터널 등) 점검", "공중화장실"] },
  { code: "통신 13-8-1", name: "서 버", spec: "", unit: "대", labors: {"S/W시험사": 0.42, "H/W시험사": 0.42}, category: "device", page: 509, keywords: ["네트워크 장비 점검", "서 버"] },
  { code: "통신 13-8-1", name: "라우터", spec: "백본", unit: "개", labors: {"S/W시험사": 0.58, "H/W시험사": 0.58}, category: "device", page: 509, keywords: ["네트워크 장비 점검", "라우터", "백본"] },
  { code: "통신 13-8-1", name: "라우터", spec: "Access", unit: "개", labors: {"S/W시험사": 0.48, "H/W시험사": 0.48}, category: "device", page: 509, keywords: ["access", "네트워크 장비 점검", "라우터"] },
  { code: "통신 13-8-1", name: "스위치", spec: "백 본", unit: "개", labors: {"S/W시험사": 0.49, "H/W시험사": 0.49}, category: "device", page: 509, keywords: ["스위치", "백 본", "네트워크 장비 점검"] },
  { code: "통신 13-8-1", name: "방화벽", spec: "-", unit: "대", labors: {"S/W시험사": 0.14, "H/W시험사": 0.14}, category: "device", page: 509, keywords: ["방화벽", "네트워크 장비 점검"] },
  { code: "통신 13-8-1", name: "허 브", spec: "Dummy", unit: "개", labors: {"S/W시험사": 0.1, "H/W시험사": 0.1}, category: "device", page: 509, keywords: ["네트워크 장비 점검", "허 브", "dummy"] },
  { code: "통신 13-8-1", name: "허 브", spec: "Intelligent(스위칭)", unit: "개", labors: {"S/W시험사": 0.14, "H/W시험사": 0.14}, category: "device", page: 509, keywords: ["intelligent(스위칭)", "네트워크 장비 점검", "허 브"] },
  { code: "통신 13-8-1", name: "교환기", spec: "IP-PBX", unit: "대", labors: {"S/W시험사": 0.23}, category: "device", page: 509, keywords: ["네트워크 장비 점검", "교환기", "ip-pbx"] },
  { code: "통신 13-8-1", name: "모 뎀", spec: "DSU", unit: "개", labors: {"S/W시험사": 0.1, "H/W시험사": 0.1}, category: "device", page: 509, keywords: ["모 뎀", "네트워크 장비 점검", "dsu"] },
  { code: "통신 13-8-1", name: "P C", spec: "-", unit: "대", labors: {"S/W시험사": 0.04, "H/W시험사": 0.04}, category: "device", page: 509, keywords: ["네트워크 장비 점검", "p c"] },
  { code: "통신 13-8-1", name: "트랜시버", spec: "-", unit: "대", labors: {"S/W시험사": 0.13, "H/W시험사": 0.13}, category: "device", page: 509, keywords: ["트랜시버", "네트워크 장비 점검"] },
  { code: "통신 13-8-1", name: "Repeater", spec: "-", unit: "대", labors: {"S/W시험사": 0.19, "H/W시험사": 0.19}, category: "device", page: 509, keywords: ["네트워크 장비 점검", "repeater"] },
  { code: "통신 13-8-1", name: "Bridge", spec: "-", unit: "대", labors: {"S/W시험사": 0.19, "H/W시험사": 0.19}, category: "device", page: 509, keywords: ["bridge", "네트워크 장비 점검"] },
  { code: "통신 13-8-1", name: "공유기", spec: "-", unit: "대", labors: {"S/W시험사": 0.11, "H/W시험사": 0.11}, category: "device", page: 509, keywords: ["공유기", "네트워크 장비 점검"] },
  { code: "통신 13-8-1", name: "분배기", spec: "-", unit: "대", labors: {"S/W시험사": 0.11, "H/W시험사": 0.11}, category: "device", page: 509, keywords: ["네트워크 장비 점검", "분배기"] },
  { code: "통신 13-8-1", name: "패치판넬", spec: "-", unit: "24포트", labors: {"H/W시험사": 0.1}, category: "device", page: 509, keywords: ["네트워크 장비 점검", "패치판넬"] },
  { code: "통신 13-8-1", name: "프린터", spec: "-", unit: "대", labors: {"S/W시험사": 0.16, "H/W시험사": 0.1}, category: "device", page: 509, keywords: ["네트워크 장비 점검", "프린터"] },
  { code: "통신 13-8-2", name: "키보관 및 객실 현황판(Key Rack)", spec: "", unit: "대", labors: {"통신관련산업기사": 0.29}, category: "device", page: 510, keywords: ["키보관 및 객실 현황판(key rack)", "객실관리시스템 점검"] },
  { code: "통신 13-8-2", name: "중앙현황판 (CIP : Central Indicator Panel)", spec: "", unit: "대", labors: {"통신관련산업기사": 0.21}, category: "device", page: 510, keywords: ["중앙현황판 (cip : central indicator panel)", "객실관리시스템 점검"] },
  { code: "통신 13-8-2", name: "층중계기 (FIP : Floor Indicator Panel)", spec: "", unit: "대", labors: {"통신관련산업기사": 0.17}, category: "device", page: 510, keywords: ["층중계기 (fip : floor indicator panel)", "객실관리시스템 점검"] },
  { code: "통신 13-8-2", name: "객실제어기(Control Box)", spec: "", unit: "대", labors: {"통신관련산업기사": 0.1}, category: "device", page: 510, keywords: ["객실제어기(control box)", "객실관리시스템 점검"] },
  { code: "통신 13-8-2", name: "단말기(Night Table)", spec: "", unit: "대", labors: {"통신관련산업기사": 0.04}, category: "device", page: 510, keywords: ["객실관리시스템 점검", "단말기(night table)"] },
  { code: "통신 13-8-2", name: "종 합 시 험", spec: "", unit: "식", labors: {"통신관련산업기사": 0.35}, category: "device", page: 510, keywords: ["종 합 시 험", "객실관리시스템 점검"] },
  { code: "통신 13-8-3", name: "공중망", spec: "가공구간", unit: "1㎞", labors: {"광케이블설치사": 0.16}, category: "device", page: 511, keywords: ["가공구간", "공중망(인터넷, pstn) 점검", "공중망"] },
  { code: "통신 13-8-3", name: "장 비", spec: "광 전 송", unit: "SYS", labors: {"광케이블설치사": 0.29}, category: "device", page: 511, keywords: ["장 비", "공중망(인터넷, pstn) 점검", "광 전 송"] },
  { code: "통신 13-8-3", name: "장 비", spec: "광 단 국", unit: "개", labors: {"광케이블설치사": 0.36}, category: "device", page: 511, keywords: ["장 비", "공중망(인터넷, pstn) 점검", "광 단 국"] },
  { code: "통신 13-8-3", name: "장 비", spec: "광중계기", unit: "대", labors: {"광케이블설치사": 0.28}, category: "device", page: 511, keywords: ["장 비", "공중망(인터넷, pstn) 점검", "광중계기"] },
  { code: "통신 13-8-4-1", name: "회선 및 데이터 전송상태 점검", spec: "", unit: "회 선", labors: {"S/W시험사": 0.06, "특별인부": 0.06}, category: "device", page: 513, keywords: ["회선 및 데이터 전송상태 점검", "지하수관측시스템 점검"] },
  { code: "통신 13-8-4-1", name: "관정깊이 측정", spec: "", unit: "개 소", labors: {"S/W시험사": 0.05, "특별인부": 0.05}, category: "device", page: 513, keywords: ["관정깊이 측정", "지하수관측시스템 점검"] },
  { code: "통신 13-8-4-1", name: "케이블점검 및 세척", spec: "", unit: "케이블당", labors: {"S/W시험사": 0.06, "특별인부": 0.06}, category: "device", page: 513, keywords: ["케이블점검 및 세척", "지하수관측시스템 점검"] },
  { code: "통신 13-8-4-1", name: "모뎀 및 데이터로거 점검", spec: "", unit: "대", labors: {"S/W시험사": 0.08, "특별인부": 0.08}, category: "device", page: 513, keywords: ["모뎀 및 데이터로거 점검", "지하수관측시스템 점검"] },
  { code: "통신 13-8-4-1", name: "센서 세척", spec: "온도", unit: "개", labors: {"S/W시험사": 0.03, "특별인부": 0.03}, category: "device", page: 513, keywords: ["센서 세척", "온도", "지하수관측시스템 점검"] },
  { code: "통신 13-8-4-1", name: "센서 세척", spec: "전기전도도", unit: "개", labors: {"S/W시험사": 0.03, "특별인부": 0.03}, category: "device", page: 513, keywords: ["센서 세척", "전기전도도", "지하수관측시스템 점검"] },
  { code: "통신 13-8-4-1", name: "센서 세척", spec: "수위", unit: "개", labors: {"S/W시험사": 0.03, "특별인부": 0.03}, category: "device", page: 513, keywords: ["수위", "센서 세척", "지하수관측시스템 점검"] },
  { code: "통신 13-8-4-1", name: "센서 세척", spec: "수소이온농도", unit: "개", labors: {"S/W시험사": 0.03, "특별인부": 0.03}, category: "device", page: 513, keywords: ["센서 세척", "수소이온농도", "지하수관측시스템 점검"] },
  { code: "통신 13-8-4-1", name: "종합 측정", spec: "온도", unit: "개", labors: {"S/W시험사": 0.04, "특별인부": 0.04}, category: "device", page: 513, keywords: ["온도", "종합 측정", "지하수관측시스템 점검"] },
  { code: "통신 13-8-4-1", name: "종합 측정", spec: "전기전도도", unit: "개", labors: {"S/W시험사": 0.05, "특별인부": 0.05}, category: "device", page: 513, keywords: ["전기전도도", "종합 측정", "지하수관측시스템 점검"] },
  { code: "통신 13-8-4-1", name: "종합 측정", spec: "수위", unit: "개", labors: {"S/W시험사": 0.06, "특별인부": 0.06}, category: "device", page: 513, keywords: ["수위", "종합 측정", "지하수관측시스템 점검"] },
  { code: "통신 13-8-4-1", name: "종합 측정", spec: "수소이온농도", unit: "개", labors: {"S/W시험사": 0.05, "특별인부": 0.05}, category: "device", page: 513, keywords: ["수소이온농도", "종합 측정", "지하수관측시스템 점검"] },
  { code: "통신 13-8-4-2", name: "케이블 상태확인 및 점검", spec: "", unit: "케이블당", labors: {"S/W시험사": 0.15, "특별인부": 0.07}, category: "device", page: 514, keywords: ["하천 수위관측시스템 점검", "케이블 상태확인 및 점검"] },
  { code: "통신 13-8-4-2", name: "센서부 점검", spec: "음파 송·수신기", unit: "대", labors: {"S/W시험사": 0.21, "특별인부": 0.1}, category: "device", page: 514, keywords: ["센서부 점검", "음파 송·수신기", "하천 수위관측시스템 점검"] },
  { code: "통신 13-8-4-2", name: "센서부 점검", spec: "보호관", unit: "대", labors: {"S/W시험사": 0.19, "특별인부": 0.09}, category: "device", page: 514, keywords: ["센서부 점검", "보호관", "하천 수위관측시스템 점검"] },
  { code: "통신 13-8-4-2", name: "장치함", spec: "", unit: "대", labors: {"S/W시험사": 0.15, "특별인부": 0.07}, category: "device", page: 514, keywords: ["하천 수위관측시스템 점검", "장치함"] },
  { code: "통신 13-8-4-2", name: "음파발생기", spec: "", unit: "대", labors: {"S/W시험사": 0.27, "특별인부": 0.14}, category: "device", page: 514, keywords: ["하천 수위관측시스템 점검", "음파발생기"] },
  { code: "통신 13-8-4-2", name: "원격단말장치", spec: "", unit: "대", labors: {"S/W시험사": 0.26, "특별인부": 0.13}, category: "device", page: 514, keywords: ["하천 수위관측시스템 점검", "원격단말장치"] },
  { code: "통신 13-8-4-2", name: "모뎀", spec: "", unit: "대", labors: {"S/W시험사": 0.25, "특별인부": 0.13}, category: "device", page: 514, keywords: ["모뎀", "하천 수위관측시스템 점검"] },
  { code: "통신 13-8-4-2", name: "전원장치", spec: "", unit: "대", labors: {"S/W시험사": 0.18, "특별인부": 0.09}, category: "device", page: 514, keywords: ["전원장치", "하천 수위관측시스템 점검"] },
  { code: "통신 13-8-4-2", name: "종합 측정", spec: "", unit: "식", labors: {"S/W시험사": 0.24, "특별인부": 0.12}, category: "device", page: 514, keywords: ["하천 수위관측시스템 점검", "종합 측정"] },
  { code: "통신 13-8-4-3", name: "영상수위관측시스템", spec: "", unit: "대", labors: {"H/W시험사": 0.25, "특별인부": 0.25}, category: "device", page: 514, keywords: ["하천 영상수위관측시스템 점검", "영상수위관측시스템"] },
  { code: "통신 13-8-5", name: "메인장비", spec: "최대전력관리장치", unit: "대", labors: {"H/W시험사": 0.09, "S/W시험사": 0.09}, category: "device", page: 515, keywords: ["최대전력관리장치", "최대전력관리시스템 점검", "메인장비"] },
  { code: "통신 13-8-5", name: "메인장비", spec: "제어기", unit: "대", labors: {"H/W시험사": 0.06, "S/W시험사": 0.06}, category: "device", page: 515, keywords: ["최대전력관리시스템 점검", "제어기", "메인장비"] },
  { code: "통신 13-8-5", name: "계량기 신호선", spec: "", unit: "m", labors: {"H/W시험사": 0.05, "S/W시험사": 0.05}, category: "device", page: 515, keywords: ["최대전력관리시스템 점검", "계량기 신호선"] },
  { code: "통신 13-8-5", name: "중앙제어기", spec: "", unit: "대", labors: {"H/W시험사": 0.08, "S/W시험사": 0.08}, category: "device", page: 515, keywords: ["최대전력관리시스템 점검", "중앙제어기"] },
  { code: "통신 13-8-5", name: "중계기", spec: "", unit: "대", labors: {"H/W시험사": 0.06, "S/W시험사": 0.06}, category: "device", page: 515, keywords: ["중계기", "최대전력관리시스템 점검"] },
  { code: "통신 13-8-5", name: "최대전력관리 프로그램", spec: "", unit: "대", labors: {"H/W시험사": 0.1, "S/W시험사": 0.1}, category: "device", page: 515, keywords: ["최대전력관리시스템 점검", "최대전력관리 프로그램"] },
  { code: "통신 13-8-6", name: "AP서버", spec: "", unit: "대", labors: {"S/W시험사": 1.08, "H/W시험사": 0.54}, category: "device", page: 515, keywords: ["공간 및 지리정보시스템 점검", "ap서버"] },
  { code: "통신 13-8-6", name: "DB/DW서버", spec: "", unit: "대", labors: {"S/W시험사": 0.83, "H/W시험사": 0.42}, category: "device", page: 515, keywords: ["공간 및 지리정보시스템 점검", "db/dw서버"] },
  { code: "통신 13-8-6", name: "연계서버", spec: "", unit: "대", labors: {"S/W시험사": 0.74, "H/W시험사": 0.37}, category: "device", page: 515, keywords: ["공간 및 지리정보시스템 점검", "연계서버"] },
  { code: "통신 13-8-7-1", name: "서버장치 점검", spec: "", unit: "식", labors: {"S/W시험사": 0.63, "H/W시험사": 0.67, "보통인부": 0.26}, category: "device", page: 516, keywords: ["서버장치 점검", "대규모배전자동화설비 점검"] },
  { code: "통신 13-8-7-1", name: "이중화 저장장치 중 절제장치 점검", spec: "", unit: "식", labors: {"S/W시험사": 0.14, "H/W시험사": 0.54, "보통인부": 0.87}, category: "device", page: 516, keywords: ["이중화 저장장치 중 절제장치 점검", "대규모배전자동화설비 점검"] },
  { code: "통신 13-8-7-1", name: "HMI(Human Machine Interface)장치 점검", spec: "", unit: "식", labors: {"S/W시험사": 0.45, "H/W시험사": 0.41, "보통인부": 0.44}, category: "device", page: 516, keywords: ["대규모배전자동화설비 점검", "hmi(human machine interface)장치 점검"] },
  { code: "통신 13-8-7-1", name: "전단처리장치(FEP : Front End Processor)장치점검", spec: "", unit: "식", labors: {"S/W시험사": 0.55, "H/W시험사": 0.44, "보통인부": 0.45}, category: "device", page: 516, keywords: ["전단처리장치(fep : front end processor)장치점검", "대규모배전자동화설비 점검"] },
  { code: "통신 13-8-7-1", name: "응용프로그램 및 데이터베이스 점검", spec: "", unit: "식", labors: {"S/W시험사": 2.72}, category: "device", page: 516, keywords: ["응용프로그램 및 데이터베이스 점검", "대규모배전자동화설비 점검"] },
  { code: "통신 13-8-7-2", name: "소규모 주장치점검", spec: "", unit: "식", labors: {"S/W시험사": 0.67, "H/W시험사": 0.85, "보통인부": 0.45}, category: "device", page: 517, keywords: ["소규모 주장치점검", "소규모배전자동화설비 점검"] },
  { code: "통신 13-8-7-2", name: "소규모 주장치 이중화 설비점검", spec: "", unit: "식", labors: {"S/W시험사": 1.03, "H/W시험사": 0.88, "보통인부": 0.45}, category: "device", page: 517, keywords: ["소규모 주장치 이중화 설비점검", "소규모배전자동화설비 점검"] },
  { code: "통신 13-8-7-2", name: "배전자동화 응용 데이터베이스점검", spec: "", unit: "식", labors: {"S/W시험사": 0.27}, category: "device", page: 517, keywords: ["배전자동화 응용 데이터베이스점검", "소규모배전자동화설비 점검"] },
  { code: "통신 13-8-7-2", name: "배전자동화 응용 PDA 데이터베이스점검", spec: "", unit: "식", labors: {"S/W시험사": 0.32}, category: "device", page: 517, keywords: ["소규모배전자동화설비 점검", "배전자동화 응용 pda 데이터베이스점검"] },
  { code: "통신 13-8-7-3", name: "전용선망 점검", spec: "", unit: "대", labors: {"S/W시험사": 0.53, "H/W시험사": 0.73}, category: "device", page: 518, keywords: ["전용선망 점검", "배전자동화용 통신방식별 망 점검"] },
  { code: "통신 13-8-7-3", name: "TRS망 점검", spec: "", unit: "대", labors: {"S/W시험사": 0.37, "H/W시험사": 0.71}, category: "device", page: 518, keywords: ["trs망 점검", "배전자동화용 통신방식별 망 점검"] },
  { code: "통신 13-8-7-3", name: "무선망 점검", spec: "", unit: "대", labors: {"S/W시험사": 0.4, "H/W시험사": 0.5}, category: "device", page: 518, keywords: ["배전자동화용 통신방식별 망 점검", "무선망 점검"] },
  { code: "통신 13-8-7-3", name: "광통신망 점검", spec: "", unit: "대", labors: {"광케이블설치사": 0.79, "특별인부": 0.79}, category: "device", page: 518, keywords: ["광통신망 점검", "배전자동화용 통신방식별 망 점검"] },
  { code: "통신 13-8-7-3", name: "광연계 무선통신망 점검", spec: "", unit: "대", labors: {"S/W시험사": 0.21, "H/W시험사": 0.21}, category: "device", page: 518, keywords: ["광연계 무선통신망 점검", "배전자동화용 통신방식별 망 점검"] },
  { code: "통신 13-8-7-3", name: "TRS모뎀 펌웨어", spec: "가공", unit: "개", labors: {"S/W시험사": 0.19, "H/W시험사": 0.19}, category: "device", page: 518, keywords: ["trs모뎀 펌웨어", "가공", "배전자동화용 통신방식별 망 점검"] },
  { code: "통신 13-8-7-3", name: "업그레이드", spec: "지중", unit: "개", labors: {"S/W시험사": 0.18, "H/W시험사": 0.18}, category: "device", page: 518, keywords: ["업그레이드", "지중", "배전자동화용 통신방식별 망 점검"] },
  { code: "통신 13-8-7-4", name: "가공용 단말장치(GA) 점검", spec: "", unit: "대", labors: {"S/W시험사": 0.65, "H/W시험사": 0.42}, category: "device", page: 520, keywords: ["가공용 단말장치(ga) 점검", "배전자동화용 단말장치 점검"] },
  { code: "통신 13-8-7-4", name: "지중용 단말장치(PA) 점검", spec: "", unit: "대", labors: {"S/W시험사": 0.81, "H/W시험사": 0.51}, category: "device", page: 520, keywords: ["지중용 단말장치(pa) 점검", "배전자동화용 단말장치 점검"] },
  { code: "통신 13-8-7-4", name: "Recloser 단말장치(RA) 점검", spec: "", unit: "대", labors: {"S/W시험사": 0.66, "H/W시험사": 0.88}, category: "device", page: 520, keywords: ["recloser 단말장치(ra) 점검", "배전자동화용 단말장치 점검"] },
  { code: "통신 13-8-7-4", name: "가공용 FAS개조 단말장치(FA) 점검", spec: "", unit: "대", labors: {"S/W시험사": 0.41, "H/W시험사": 0.51}, category: "device", page: 520, keywords: ["가공용 fas개조 단말장치(fa) 점검", "배전자동화용 단말장치 점검"] },
  { code: "통신 13-8-7-4", name: "배터리(배전자동화 단말장치 내장형) 점검", spec: "", unit: "개", labors: {"통신설비공": 0.26, "보통인부": 0.24}, category: "device", page: 520, keywords: ["배터리(배전자동화 단말장치 내장형) 점검", "배전자동화용 단말장치 점검"] },
  { code: "통신 13-8-7-4", name: "단말장치펌웨어업그레이드", spec: "단말장치기능향상(Upgrade)", unit: "대", labors: {"S/W시험사": 0.28, "H/W시험사": 0.24}, category: "device", page: 520, keywords: ["단말장치기능향상(upgrade)", "배전자동화용 단말장치 점검", "단말장치펌웨어업그레이드"] },
  { code: "통신 13-8-7-4", name: "(Firmware Upgrade)", spec: "시험 및 조정", unit: "대", labors: {"S/W시험사": 0.14, "H/W시험사": 0.14}, category: "device", page: 520, keywords: ["(firmware upgrade)", "시험 및 조정", "배전자동화용 단말장치 점검"] },
  { code: "통신 13-8-7-4", name: "제어함 제어부 점검", spec: "", unit: "대", labors: {"H/W시험사": 0.62}, category: "device", page: 520, keywords: ["배전자동화용 단말장치 점검", "제어함 제어부 점검"] },
  { code: "통신 13-8-7-5", name: "GPS 수신장치 점검", spec: "", unit: "식", labors: {"S/W시험사": 0.15, "H/W시험사": 0.22, "보통인부": 0.09}, category: "device", page: 521, keywords: ["배전자동화 부대설비 점검", "gps 수신장치 점검"] },
  { code: "통신 13-8-7-5", name: "현장원격운전용 PDA 점검", spec: "", unit: "식", labors: {"S/W시험사": 0.32, "H/W시험사": 0.17}, category: "device", page: 521, keywords: ["배전자동화 부대설비 점검", "현장원격운전용 pda 점검"] },
  { code: "통신 13-8-7-5", name: "출력장치(프린터)점검", spec: "", unit: "대", labors: {"H/W시험사": 0.38, "보통인부": 0.16}, category: "device", page: 521, keywords: ["배전자동화 부대설비 점검", "출력장치(프린터)점검"] },
  { code: "통신 13-8-7-5", name: "에뮬레이터 장치 점검", spec: "", unit: "식", labors: {"S/W시험사": 0.67, "H/W시험사": 0.85, "보통인부": 0.45}, category: "device", page: 521, keywords: ["배전자동화 부대설비 점검", "에뮬레이터 장치 점검"] },
  { code: "통신 13-8-7-5", name: "항온항습기 점검", spec: "", unit: "대", labors: {"S/W시험사": 0.71, "H/W시험사": 0.6}, category: "device", page: 521, keywords: ["항온항습기 점검", "배전자동화 부대설비 점검"] },
  { code: "통신 13-8-7-6", name: "전압 Transducer", spec: "", unit: "개", labors: {"통신관련산업기사": 0.18, "H/W시험사": 0.13}, category: "device", page: 522, keywords: ["전압 transducer", "일반형 변환기장치(td:transducer) 점검"] },
  { code: "통신 13-8-7-6", name: "전류 Transducer", spec: "", unit: "개", labors: {"통신관련산업기사": 0.18, "H/W시험사": 0.13}, category: "device", page: 522, keywords: ["전류 transducer", "일반형 변환기장치(td:transducer) 점검"] },
  { code: "통신 13-8-7-6", name: "유효전력 Transducer", spec: "", unit: "개", labors: {"통신관련산업기사": 0.26, "H/W시험사": 0.21}, category: "device", page: 522, keywords: ["유효전력 transducer", "일반형 변환기장치(td:transducer) 점검"] },
  { code: "통신 13-8-7-6", name: "무효전력 Transducer", spec: "", unit: "개", labors: {"통신관련산업기사": 0.26, "H/W시험사": 0.21}, category: "device", page: 522, keywords: ["일반형 변환기장치(td:transducer) 점검", "무효전력 transducer"] },
  { code: "통신 13-8-7-7", name: "①결선상태확인 [전류정합 모듈(CMU)]", spec: "", unit: "0.06", labors: {"통신관련산업기사": 0.06}, category: "device", page: 523, keywords: ["모듈형 변환기장치(td:transducer) 점검", "①결선상태확인 [전류정합 모듈(cmu)]"] },
  { code: "통신 13-8-7-7", name: "①결선상태확인 [전력정합 모듈(PMU)]", spec: "", unit: "0.06", labors: {"통신관련산업기사": 0.06}, category: "device", page: 523, keywords: ["모듈형 변환기장치(td:transducer) 점검", "①결선상태확인 [전력정합 모듈(pmu)]"] },
  { code: "통신 13-8-7-7", name: "③결선해체 [전류정합 모듈(CMU)]", spec: "", unit: "0.01", labors: {"통신관련산업기사": 0.01}, category: "device", page: 523, keywords: ["모듈형 변환기장치(td:transducer) 점검", "③결선해체 [전류정합 모듈(cmu)]"] },
  { code: "통신 13-8-7-7", name: "③결선해체 [전력정합 모듈(PMU)]", spec: "", unit: "0.01", labors: {"통신관련산업기사": 0.01}, category: "device", page: 523, keywords: ["③결선해체 [전력정합 모듈(pmu)]", "모듈형 변환기장치(td:transducer) 점검"] },
  { code: "통신 13-8-7-7", name: "⑤모듈해제 [전류정합 모듈(CMU)]", spec: "", unit: "0.01", labors: {"통신관련산업기사": 0.01}, category: "device", page: 523, keywords: ["⑤모듈해제 [전류정합 모듈(cmu)]", "모듈형 변환기장치(td:transducer) 점검"] },
  { code: "통신 13-8-7-7", name: "⑤모듈해제 [전력정합 모듈(PMU)]", spec: "", unit: "0.01", labors: {"통신관련산업기사": 0.01}, category: "device", page: 523, keywords: ["모듈형 변환기장치(td:transducer) 점검", "⑤모듈해제 [전력정합 모듈(pmu)]"] },
  { code: "통신 13-8-7-7", name: "시험 [전류정합 모듈(CMU)]", spec: "⑥MMU 보정", unit: "0.02", labors: {"통신관련산업기사": 0.02}, category: "device", page: 523, keywords: ["⑥mmu 보정", "시험 [전류정합 모듈(cmu)]", "모듈형 변환기장치(td:transducer) 점검"] },
  { code: "통신 13-8-7-7", name: "시험 [전력정합 모듈(PMU)]", spec: "⑥MMU 보정", unit: "0.02", labors: {"통신관련산업기사": 0.02}, category: "device", page: 523, keywords: ["시험 [전력정합 모듈(pmu)]", "⑥mmu 보정", "모듈형 변환기장치(td:transducer) 점검"] },
  { code: "통신 13-8-7-7", name: "및 [전류정합 모듈(CMU)]", spec: "⑥MMU 보정", unit: "0.02", labors: {"H/W시험사": 0.02}, category: "device", page: 523, keywords: ["및 [전류정합 모듈(cmu)]", "⑥mmu 보정", "모듈형 변환기장치(td:transducer) 점검"] },
  { code: "통신 13-8-7-7", name: "및 [전력정합 모듈(PMU)]", spec: "⑥MMU 보정", unit: "0.02", labors: {"H/W시험사": 0.02}, category: "device", page: 523, keywords: ["⑥mmu 보정", "모듈형 변환기장치(td:transducer) 점검", "및 [전력정합 모듈(pmu)]"] },
  { code: "통신 13-8-7-7", name: "⑩시험성적서 작성 [전류정합 모듈(CMU)]", spec: "", unit: "0.01", labors: {"통신관련산업기사": 0.01}, category: "device", page: 523, keywords: ["⑩시험성적서 작성 [전류정합 모듈(cmu)]", "모듈형 변환기장치(td:transducer) 점검"] },
  { code: "통신 13-8-7-7", name: "⑩시험성적서 작성 [전력정합 모듈(PMU)]", spec: "", unit: "0.01", labors: {"통신관련산업기사": 0.01}, category: "device", page: 523, keywords: ["⑩시험성적서 작성 [전력정합 모듈(pmu)]", "모듈형 변환기장치(td:transducer) 점검"] },
  { code: "통신 13-8-7-7", name: "⑪재결선 [전류정합 모듈(CMU)]", spec: "", unit: "0.01", labors: {"통신관련산업기사": 0.01}, category: "device", page: 523, keywords: ["⑪재결선 [전류정합 모듈(cmu)]", "모듈형 변환기장치(td:transducer) 점검"] },
  { code: "통신 13-8-7-7", name: "⑪재결선 [전력정합 모듈(PMU)]", spec: "", unit: "0.01", labors: {"통신관련산업기사": 0.01}, category: "device", page: 523, keywords: ["⑪재결선 [전력정합 모듈(pmu)]", "모듈형 변환기장치(td:transducer) 점검"] },
  { code: "통신 13-8-7-7", name: "⑫모듈장착 [전류정합 모듈(CMU)]", spec: "", unit: "0.01", labors: {"통신관련산업기사": 0.01}, category: "device", page: 523, keywords: ["⑫모듈장착 [전류정합 모듈(cmu)]", "모듈형 변환기장치(td:transducer) 점검"] },
  { code: "통신 13-8-7-7", name: "⑫모듈장착 [전력정합 모듈(PMU)]", spec: "", unit: "0.01", labors: {"통신관련산업기사": 0.01}, category: "device", page: 523, keywords: ["⑫모듈장착 [전력정합 모듈(pmu)]", "모듈형 변환기장치(td:transducer) 점검"] },
  { code: "통신 13-8-7-7", name: "⑬전송데이터 확인 [전류정합 모듈(CMU)]", spec: "", unit: "0.01", labors: {"통신관련산업기사": 0.01}, category: "device", page: 523, keywords: ["모듈형 변환기장치(td:transducer) 점검", "⑬전송데이터 확인 [전류정합 모듈(cmu)]"] },
  { code: "통신 13-8-7-7", name: "⑬전송데이터 확인 [전력정합 모듈(PMU)]", spec: "", unit: "0.01", labors: {"통신관련산업기사": 0.01}, category: "device", page: 523, keywords: ["⑬전송데이터 확인 [전력정합 모듈(pmu)]", "모듈형 변환기장치(td:transducer) 점검"] },
  { code: "통신 13-8-7-7", name: "⑭시험기철거 및 [전류정합 모듈(CMU)]", spec: "", unit: "0.02", labors: {"통신관련산업기사": 0.02}, category: "device", page: 523, keywords: ["모듈형 변환기장치(td:transducer) 점검", "⑭시험기철거 및 [전류정합 모듈(cmu)]"] },
  { code: "통신 13-8-7-7", name: "⑭시험기철거 및 [전력정합 모듈(PMU)]", spec: "", unit: "0.02", labors: {"통신관련산업기사": 0.02}, category: "device", page: 523, keywords: ["⑭시험기철거 및 [전력정합 모듈(pmu)]", "모듈형 변환기장치(td:transducer) 점검"] },
  { code: "통신 13-8-7-7", name: "현장정리 [전류정합 모듈(CMU)]", spec: "", unit: "0.02", labors: {"H/W시험사": 0.02}, category: "device", page: 523, keywords: ["현장정리 [전류정합 모듈(cmu)]", "모듈형 변환기장치(td:transducer) 점검"] },
  { code: "통신 13-8-7-7", name: "현장정리 [전력정합 모듈(PMU)]", spec: "", unit: "0.02", labors: {"H/W시험사": 0.02}, category: "device", page: 523, keywords: ["현장정리 [전력정합 모듈(pmu)]", "모듈형 변환기장치(td:transducer) 점검"] },
  { code: "통신 13-8-8", name: "데이터", spec: "예방점검", unit: "대", labors: {"H/W시험사": 0.3, "S/W시험사": 0.43, "보통인부": 0.43}, category: "device", page: 524, keywords: ["전력선통신(plc)설비 점검", "데이터", "예방점검"] },
  { code: "통신 13-8-8", name: "집중장치", spec: "단순정비", unit: "대", labors: {"H/W시험사": 0.12, "S/W시험사": 0.27}, category: "device", page: 524, keywords: ["전력선통신(plc)설비 점검", "단순정비", "집중장치"] },
  { code: "통신 13-8-8", name: "(DCU)", spec: "보통점검", unit: "대", labors: {"H/W시험사": 0.17, "통신외선공": 0.17, "보통인부": 0.17}, category: "device", page: 524, keywords: ["전력선통신(plc)설비 점검", "(dcu)", "보통점검"] },
  { code: "통신 13-8-8", name: "PLC모뎀 단순", spec: "외장형", unit: "개", labors: {"H/W시험사": 0.06, "S/W시험사": 0.02}, category: "device", page: 524, keywords: ["외장형", "plc모뎀 단순", "전력선통신(plc)설비 점검"] },
  { code: "통신 13-8-8", name: "정비", spec: "내장형", unit: "개", labors: {"H/W시험사": 0.05, "S/W시험사": 0.02}, category: "device", page: 524, keywords: ["내장형", "정비", "전력선통신(plc)설비 점검"] },
  { code: "통신 13-8-8", name: "무선모뎀", spec: "외장형", unit: "개", labors: {"H/W시험사": 0.06, "S/W시험사": 0.02}, category: "device", page: 524, keywords: ["무선모뎀", "외장형", "전력선통신(plc)설비 점검"] },
  { code: "통신 13-8-8", name: "단순정비", spec: "내장형", unit: "개", labors: {"H/W시험사": 0.05, "S/W시험사": 0.02}, category: "device", page: 524, keywords: ["내장형", "전력선통신(plc)설비 점검", "단순정비"] },
  { code: "통신 13-8-8", name: "커플러(접촉식, 비접촉식) 단순 정비", spec: "", unit: "대", labors: {"통신설비공": 0.1}, category: "device", page: 524, keywords: ["커플러(접촉식, 비접촉식) 단순 정비", "전력선통신(plc)설비 점검"] },
  { code: "통신 13-8-9", name: "기록계", spec: "", unit: "대", labors: {"통신관련산업기사": 0.41, "S/W시험사": 0.41}, category: "device", page: 525, keywords: ["기록계", "지진감지시스템 점검"] },
  { code: "통신 13-8-9", name: "가속도센서", spec: "", unit: "대", labors: {"통신관련산업기사": 0.08, "S/W시험사": 0.08}, category: "device", page: 525, keywords: ["가속도센서", "지진감지시스템 점검"] },
  { code: "통신 13-8-10", name: "컴퓨터 패키지", spec: "학생용", unit: "대", labors: {"S/W시험사": 0.09}, category: "device", page: 525, keywords: ["컴퓨터 패키지", "학생용", "학내망 정보화기기 점검"] },
  { code: "통신 13-8-10", name: "영상기기", spec: "빔프로젝트", unit: "대", labors: {"H/W시험사": 0.14}, category: "device", page: 525, keywords: ["영상기기", "빔프로젝트", "학내망 정보화기기 점검"] },
  { code: "통신 13-8-10", name: "스마트스쿨시스템", spec: "전자칠판", unit: "대", labors: {"H/W시험사": 0.1}, category: "device", page: 525, keywords: ["스마트스쿨시스템", "전자칠판", "학내망 정보화기기 점검"] },
  { code: "통신 13-8-11", name: "서버 점검", spec: "", unit: "대", labors: {"S/W시험사": 0.02}, category: "device", page: 526, keywords: ["긴급구조표준시스템 정기 점검", "서버 점검"] },
  { code: "통신 13-8-11", name: "보안장비 점검", spec: "", unit: "“", labors: {"S/W시험사": 0.01}, category: "device", page: 526, keywords: ["긴급구조표준시스템 정기 점검", "보안장비 점검"] },
  { code: "통신 13-8-11", name: "방송설비/무선설비 점검", spec: "", unit: "“", labors: {"S/W시험사": 0.01}, category: "device", page: 526, keywords: ["긴급구조표준시스템 정기 점검", "방송설비/무선설비 점검"] },
  { code: "통신 13-8-11", name: "접수대 점검", spec: "", unit: "“", labors: {"S/W시험사": 0.02}, category: "device", page: 526, keywords: ["접수대 점검", "긴급구조표준시스템 정기 점검"] },
  { code: "통신 13-8-11", name: "데이터베이스 점검", spec: "", unit: "“", labors: {"S/W시험사": 0.01}, category: "device", page: 526, keywords: ["긴급구조표준시스템 정기 점검", "데이터베이스 점검"] },
  { code: "통신 13-8-11", name: "무선기지국 점검", spec: "", unit: "“", labors: {"S/W시험사": 0.35}, category: "device", page: 526, keywords: ["긴급구조표준시스템 정기 점검", "무선기지국 점검"] },
  { code: "통신 13-8-11", name: "비상접수시스템(비상수보시스템)점검", spec: "", unit: "식", labors: {"S/W시험사": 0.25}, category: "device", page: 526, keywords: ["긴급구조표준시스템 정기 점검", "비상접수시스템(비상수보시스템)점검"] },
  { code: "통신 13-8-12", name: "원격검침 단말기", spec: "", unit: "대", labors: {"통신설비공": 0.08}, category: "device", page: 526, keywords: ["수도계량기 원격검침 설비 점검", "원격검침 단말기"] },
  { code: "통신 13-9-1", name: "장", spec: "ChannelBank(E-1/T-1 정합기)", unit: "대", labors: {"통신관련산업기사": 0.04, "통신설비공": 0.12}, category: "device", page: 527, keywords: ["열차무선 중앙제어설비(800mhz대역) 점검", "channelbank(e-1/t-1 정합기)"] },
  { code: "통신 13-9-1", name: "비", spec: "Astro Tac(신호 비교기)", unit: "대", labors: {"통신관련산업기사": 0.04, "통신설비공": 0.11}, category: "device", page: 527, keywords: ["열차무선 중앙제어설비(800mhz대역) 점검", "astro tac(신호 비교기)"] },
  { code: "통신 13-9-1", name: "별", spec: "Controller(중앙 제어기)", unit: "대", labors: {"통신관련산업기사": 0.04, "통신설비공": 0.11}, category: "device", page: 527, keywords: ["열차무선 중앙제어설비(800mhz대역) 점검", "controller(중앙 제어기)"] },
  { code: "통신 13-9-1", name: "별", spec: "Data SW(절체기)", unit: "대", labors: {"통신관련산업기사": 0.04, "통신설비공": 0.11}, category: "device", page: 527, keywords: ["열차무선 중앙제어설비(800mhz대역) 점검", "data sw(절체기)"] },
  { code: "통신 13-9-1", name: "별", spec: "USCI(Universal Simulcast Controller", unit: "대", labors: {"통신관련산업기사": 0.04, "통신설비공": 0.08}, category: "device", page: 527, keywords: ["usci(universal simulcast controller", "열차무선 중앙제어설비(800mhz대역) 점검"] },
  { code: "통신 13-9-1", name: "별", spec: "Interface : Simulcast 제어접속기)", unit: "대", labors: {"통신관련산업기사": 0.04, "통신설비공": 0.08}, category: "device", page: 527, keywords: ["interface : simulcast 제어접속기)", "열차무선 중앙제어설비(800mhz대역) 점검"] },
  { code: "통신 13-9-1", name: "종 합 시 험", spec: "", unit: "식", labors: {"통신관련산업기사": 0.06, "통신설비공": 0.13}, category: "device", page: 527, keywords: ["종 합 시 험", "열차무선 중앙제어설비(800mhz대역) 점검"] },
  { code: "통신 13-9-2", name: "구조부", spec: "ㅇ도어턱 및 각종 안내문(판) 부착상태", unit: "세트", labors: {"특별인부": 0.01}, category: "device", page: 528, keywords: ["승강장 스크린도어(psd : platform screen door) 시스템 점검", "구조부", "ㅇ도어턱 및 각종 안내문(판) 부착상태"] },
  { code: "통신 13-9-2", name: "도어부", spec: "ㅇ슬라이딩도어 동작상태", unit: "“", labors: {"통신설비공": 0.01, "특별인부": 0.01}, category: "device", page: 528, keywords: ["승강장 스크린도어(psd : platform screen door) 시스템 점검", "ㅇ슬라이딩도어 동작상태", "도어부"] },
  { code: "통신 13-9-2", name: "구동부", spec: "ㅇ도어개폐 표시등 및 음성메세지 동작상태", unit: "“", labors: {"통신설비공": 0.01, "특별인부": 0.01}, category: "device", page: 528, keywords: ["승강장 스크린도어(psd : platform screen door) 시스템 점검", "ㅇ도어개폐 표시등 및 음성메세지 동작상태", "구동부"] },
  { code: "통신 13-9-2", name: "센서류", spec: "ㅇ도어낌 방지검지 센서 동작상태", unit: "“", labors: {"통신설비공": 0.01, "특별인부": 0.01}, category: "device", page: 528, keywords: ["승강장 스크린도어(psd : platform screen door) 시스템 점검", "ㅇ도어낌 방지검지 센서 동작상태", "센서류"] },
  { code: "통신 13-9-2", name: "제어 및 조작반", spec: "․ㅇ종합제어반 청결상태 및 기능동작상태", unit: "대", labors: {"통신설비공": 0.02, "특별인부": 0.02}, category: "device", page: 529, keywords: ["제어 및 조작반", "승강장 스크린도어(psd : platform screen door) 시스템 점검", "․ㅇ종합제어반 청결상태 및 기능동작상태"] },
  { code: "통신 13-9-2", name: "통신 시설", spec: "․ㅇHMI 청결상태및기능동작상태", unit: "“", labors: {"통신설비공": 0.01, "특별인부": 0.01}, category: "device", page: 529, keywords: ["승강장 스크린도어(psd : platform screen door) 시스템 점검", "․ㅇhmi 청결상태및기능동작상태", "통신 시설"] },
  { code: "통신 13-9-2", name: "전기 시설", spec: "ㅇPSD 전기설비 외관 및 각종 보호 ․계전기 기능동작상태", unit: "식", labors: {"통신설비공": 0.02, "특별인부": 0.02}, category: "device", page: 529, keywords: ["승강장 스크린도어(psd : platform screen door) 시스템 점검", "전기 시설", "ㅇpsd 전기설비 외관 및 각종 보호 ․계전기 기능동작상태"] },
  { code: "통신 13-9-2", name: "소화 장치", spec: "․ㅇ자동식소화장치 기능동작상태", unit: "“", labors: {"통신설비공": 0.01}, category: "device", page: 529, keywords: ["승강장 스크린도어(psd : platform screen door) 시스템 점검", "소화 장치", "․ㅇ자동식소화장치 기능동작상태"] },
  { code: "통신 13-10-1", name: "소형(1~2kVA) 이하", spec: "", unit: "대", labors: {"통신관련산업기사": 0.45}, category: "device", page: 533, keywords: ["무정전 전원장치(ups, cvcf) 점검", "소형(1~2kva) 이하"] },
  { code: "통신 13-10-1", name: "3kVA 초과 ~ 10kVA 이하", spec: "", unit: "“", labors: {"통신관련산업기사": 0.61}, category: "device", page: 533, keywords: ["3kva 초과 ~ 10kva 이하", "무정전 전원장치(ups, cvcf) 점검"] },
  { code: "통신 13-10-1", name: "10kVA 초과 ~ 20kVA 이하", spec: "", unit: "“", labors: {"통신관련산업기사": 0.93}, category: "device", page: 533, keywords: ["10kva 초과 ~ 20kva 이하", "무정전 전원장치(ups, cvcf) 점검"] },
  { code: "통신 13-10-1", name: "20kVA 초과 ~ 30kVA 이하", spec: "", unit: "“", labors: {"통신관련산업기사": 1.08, "특별인부": 0.85}, category: "device", page: 533, keywords: ["20kva 초과 ~ 30kva 이하", "무정전 전원장치(ups, cvcf) 점검"] },
  { code: "통신 13-10-1", name: "30kVA 초과 ~ 100kVA 이하", spec: "", unit: "“", labors: {"통신관련산업기사": 1.94, "특별인부": 1.55}, category: "device", page: 533, keywords: ["30kva 초과 ~ 100kva 이하", "무정전 전원장치(ups, cvcf) 점검"] },
  { code: "통신 13-10-1", name: "100kVA 초과 ~ 250kVA 이하", spec: "", unit: "“", labors: {"통신관련산업기사": 3.23, "특별인부": 1.58}, category: "device", page: 533, keywords: ["무정전 전원장치(ups, cvcf) 점검", "100kva 초과 ~ 250kva 이하"] },
  { code: "통신 13-10-1", name: "250kVA 초과 ~ 500kVA 이하", spec: "", unit: "“", labors: {"통신관련산업기사": 3.29, "특별인부": 2.69}, category: "device", page: 533, keywords: ["250kva 초과 ~ 500kva 이하", "무정전 전원장치(ups, cvcf) 점검"] }
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
    activeDivisionId: "",
    standardLaborDb: JSON.parse(JSON.stringify(STANDARD_LABOR_DB))
};

let costShareChart = null;

// 4. Initialization
document.addEventListener("DOMContentLoaded", () => {
    loadFromLocalStorage();
    
    // If standard labor DB in state is empty, has old mock data, or uses the old flat schema (missing 'labors' property), load the new DB
    const isOldFlatSchema = state.standardLaborDb && state.standardLaborDb.some(item => !item.labors && (item.laborType || item.laborFactor));
    const hasDittoOrBrokenUnit = state.standardLaborDb && state.standardLaborDb.some(item => 
        (item.name && (item.name.includes("〃") || item.name.endsWith(" 이"))) || 
        (item.unit && item.unit.includes("본(6m") && !item.unit.endsWith(")"))
    );
    const isMissingPageInfo = state.standardLaborDb && !state.standardLaborDb.some(item => item.page);
    if (!state.standardLaborDb || state.standardLaborDb.length < 1000 || isOldFlatSchema || hasDittoOrBrokenUnit || isMissingPageInfo) {
        state.standardLaborDb = JSON.parse(JSON.stringify(STANDARD_LABOR_DB));
        saveToLocalStorage();
    }
    
    initTabs();
    initSettingsListeners();
    initBuilderListeners();
    initPriceListeners();
    initLaborListeners();
    initDivisionsListeners();
    initSaveLoadListeners();
    initMasterDbListeners();
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
            if (tabId === "tab-master-db") {
                renderMasterDbTable();
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

    // Excel Import Trigger
    const btnExcelImportTrigger = document.getElementById("btn-excel-import-trigger");
    if (btnExcelImportTrigger) {
        btnExcelImportTrigger.addEventListener("click", () => {
            openExcelImportModal();
        });
    }

    const btnConfirmExcelImport = document.getElementById("btn-confirm-excel-import");
    if (btnConfirmExcelImport) {
        btnConfirmExcelImport.addEventListener("click", () => {
            confirmExcelImport();
        });
    }

    const textareaExcel = document.getElementById("textarea-excel-paste");
    if (textareaExcel) {
        textareaExcel.addEventListener("input", () => {
            updateExcelPreview();
        });
        textareaExcel.addEventListener("paste", (e) => {
            // Wait for paste to complete, then update
            setTimeout(updateExcelPreview, 10);
        });
    }

    const chkExcelHeader = document.getElementById("chk-excel-header");
    if (chkExcelHeader) {
        chkExcelHeader.addEventListener("change", () => {
            updateExcelPreview();
        });
    }

    // Capture global paste event to detect Excel data on Prices Tab
    window.addEventListener("paste", (e) => {
        const activeTab = document.querySelector(".nav-item.active")?.getAttribute("data-tab");
        if (activeTab !== "tab-prices") return;

        // Skip if focused inside our input or pasting single-line
        const activeEl = document.activeElement;
        if (activeEl && (activeEl.tagName === "INPUT" || activeEl.tagName === "TEXTAREA")) {
            if (activeEl.id === "textarea-excel-paste") return;
            
            const text = e.clipboardData?.getData("text") || "";
            const lines = text.trim().split(/\r?\n/);
            if (lines.length <= 1) return;
        }

        const text = e.clipboardData?.getData("text") || "";
        if (!text) return;

        const lines = text.trim().split(/\r?\n/);
        if (lines.length > 0 && (lines.length > 1 || lines[0].includes("\t"))) {
            e.preventDefault();
            openExcelImportModal(text);
        }
    });

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
function formatCommas(val) {
    if (val === undefined || val === null) return "0";
    return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function recalculateLowestAppliedPrice(masterId) {
    const p = state.itemPrices[masterId];
    if (!p) return;

    const prices = [];
    if (p.facilityPrice > 0) prices.push(p.facilityPrice);
    if (p.marketPrice.price > 0) prices.push(p.marketPrice.price);
    if (p.infoPrice.price > 0) prices.push(p.infoPrice.price);
    if (p.materialPrice.price > 0) prices.push(p.materialPrice.price);
    if (p.distPrice.price > 0) prices.push(p.distPrice.price);
    if (p.invest1.price > 0) prices.push(p.invest1.price);
    if (p.invest2.price > 0) prices.push(p.invest2.price);

    let lowest = 0;
    if (prices.length > 0) {
        lowest = Math.min(...prices);
    }

    p.appliedPrice = lowest;

    const appliedInput = document.querySelector(`input.price-input[data-id="${masterId}"][data-field="appliedPrice"]`);
    if (appliedInput) {
        appliedInput.value = lowest === 0 ? "0" : lowest.toLocaleString();
    }

    calculateEstimates();
    loadActiveDivision();
}

function renderPriceInvestigationTable() {
    const tbody = document.getElementById("price-table-body");
    tbody.innerHTML = "";

    const usedMasterIds = new Set();
    state.divisions.forEach(div => {
        div.items.forEach(item => {
            usedMasterIds.add(item.masterId);
        });
    });

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
                <input type="text" class="price-input" data-id="${masterId}" data-field="appliedPrice" value="${formatCommas(p.appliedPrice)}">
            </td>
            <td>
                <input type="text" class="price-input" data-id="${masterId}" data-field="facilityPrice" value="${formatCommas(p.facilityPrice)}">
            </td>
            <td><input type="text" class="price-input-group" data-id="${masterId}" data-group="marketPrice" data-field="price" value="${formatCommas(p.marketPrice.price)}"></td>
            <td><input type="text" class="page-input-group" data-id="${masterId}" data-group="marketPrice" data-field="page" value="${p.marketPrice.page}"></td>
            <td><input type="text" class="price-input-group" data-id="${masterId}" data-group="infoPrice" data-field="price" value="${formatCommas(p.infoPrice.price)}"></td>
            <td><input type="text" class="page-input-group" data-id="${masterId}" data-group="infoPrice" data-field="page" value="${p.infoPrice.page}"></td>
            <td><input type="text" class="price-input-group" data-id="${masterId}" data-group="materialPrice" data-field="price" value="${formatCommas(p.materialPrice.price)}"></td>
            <td><input type="text" class="page-input-group" data-id="${masterId}" data-group="materialPrice" data-field="page" value="${p.materialPrice.page}"></td>
            <td><input type="text" class="price-input-group" data-id="${masterId}" data-group="distPrice" data-field="price" value="${formatCommas(p.distPrice.price)}"></td>
            <td><input type="text" class="page-input-group" data-id="${masterId}" data-group="distPrice" data-field="page" value="${p.distPrice.page}"></td>
            <td><input type="text" class="price-input-group" data-id="${masterId}" data-group="invest1" data-field="price" value="${formatCommas(p.invest1.price)}"></td>
            <td><input type="text" class="page-input-group" data-id="${masterId}" data-group="invest1" data-field="page" value="${p.invest1.page}"></td>
            <td><input type="text" class="price-input-group" data-id="${masterId}" data-group="invest2" data-field="price" value="${formatCommas(p.invest2.price)}"></td>
            <td><input type="text" class="page-input-group" data-id="${masterId}" data-group="invest2" data-field="page" value="${p.invest2.page}"></td>
            <td style="text-align: center;">
                <button class="btn-icon-danger" onclick="deletePriceInvestigationItem('${masterId}')" title="품목 완전히 삭제">
                    <i class="fa-solid fa-trash-can"></i>
                </button>
            </td>
        `;

        tbody.appendChild(tr);
    });

    // Append Inline Adding Row at the end
    const trInline = document.createElement("tr");
    trInline.className = "inline-add-row";
    trInline.style.background = "rgba(33, 115, 70, 0.05)";
    trInline.innerHTML = `
        <td class="sticky-col first-col" style="text-align: center; color: #217346; font-weight: bold;">+</td>
        <td class="sticky-col second-col">
            <div style="display: flex; gap: 8px; width: 100%;">
                <input type="text" id="inline-price-name" placeholder="새 품명 입력 (엔터 시 추가)..." style="flex: 1; padding: 6px; border: 1px solid var(--border-color); background: var(--bg-base); color: var(--text-primary); border-radius: var(--radius-sm); font-size: 13px; outline: none;">
                <input type="text" id="inline-price-spec" placeholder="규격 입력..." style="flex: 1; padding: 6px; border: 1px solid var(--border-color); background: var(--bg-base); color: var(--text-primary); border-radius: var(--radius-sm); font-size: 13px; outline: none;">
            </div>
        </td>
        <td>
            <input type="text" id="inline-price-unit" value="개" style="width: 100%; text-align: center; padding: 6px; border: 1px solid var(--border-color); background: var(--bg-base); color: var(--text-primary); border-radius: var(--radius-sm); font-size: 13px; outline: none;">
        </td>
        <td colspan="14" style="text-align: left; color: var(--text-secondary); font-size: 12px; padding-left: 15px; font-style: italic; background: rgba(0,0,0,0.05); user-select: none;">
            ← 품명, 규격, 단위 입력 후 <strong>엔터(Enter)</strong> 또는 우측 <strong>[+]</strong> 버튼으로 즉시 품목을 추가합니다.
        </td>
        <td style="text-align: center;">
            <button class="btn btn-primary" id="btn-inline-price-add" style="padding: 5px 10px; font-size: 12px; height: 28px; width: 100%; display: flex; justify-content: center; align-items: center; border-radius: var(--radius-sm); background: #217346; border-color: #217346;">
                <i class="fa-solid fa-plus"></i>
            </button>
        </td>
    `;
    tbody.appendChild(trInline);

    // Bind Inline row add confirm logic
    const confirmInlineAdd = () => {
        const nameInput = document.getElementById("inline-price-name");
        const specInput = document.getElementById("inline-price-spec");
        const unitInput = document.getElementById("inline-price-unit");
        
        const name = nameInput.value.trim();
        const spec = specInput.value.trim();
        const unit = unitInput.value.trim();
        
        if (!name) {
            showToast("품목명을 입력해주세요.", "danger");
            nameInput.focus();
            return;
        }
        
        const div = state.divisions.find(d => d.id === state.activeDivisionId);
        if (!div) {
            showToast("선택된 활성 공종이 없습니다. 공종을 추가해 주세요.", "warning");
            return;
        }
        
        const newMasterId = "M_CUSTOM_" + Date.now();
        const qty = 1;
        const matPrice = 0;
        
        ITEM_MASTER_DB.push({
            id: newMasterId,
            name: name,
            spec: spec,
            unit: unit,
            category: "device",
            materialPrice: matPrice,
            laborType: null,
            laborFactor: 0,
            labors: null,
            laborRef: ""
        });
        
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
        
        const newItem = {
            id: "item-" + Date.now() + Math.random().toString(36).substr(2, 5),
            masterId: newMasterId,
            name: name,
            spec: spec,
            unit: unit,
            qty: qty,
            materialPrice: matPrice,
            laborType: null,
            laborFactor: 0,
            labors: null,
            laborScenario: "new",
            laborMultiplier: 1.0,
            laborRef: "",
            laborRemark: ""
        };
        div.items.push(newItem);
        
        renderPriceInvestigationTable();
        calculateEstimates();
        loadActiveDivision();
        renderLaborBasisTable();
        
        // Restore focus on the new name input
        const nextNameInput = document.getElementById("inline-price-name");
        if (nextNameInput) {
            nextNameInput.focus();
        }
        
        showToast(`단가조사 품목 "${name}"이(가) 등록되었습니다.`, "success");
    };

    const inlineName = document.getElementById("inline-price-name");
    const inlineSpec = document.getElementById("inline-price-spec");
    const inlineUnit = document.getElementById("inline-price-unit");
    const inlineAddBtn = document.getElementById("btn-inline-price-add");

    if (inlineName) {
        inlineName.addEventListener("keydown", (e) => {
            if (e.key === "Enter") confirmInlineAdd();
        });
    }
    if (inlineSpec) {
        inlineSpec.addEventListener("keydown", (e) => {
            if (e.key === "Enter") confirmInlineAdd();
        });
    }
    if (inlineUnit) {
        inlineUnit.addEventListener("keydown", (e) => {
            if (e.key === "Enter") confirmInlineAdd();
        });
    }
    if (inlineAddBtn) {
        inlineAddBtn.addEventListener("click", confirmInlineAdd);
    }

    tbody.querySelectorAll(".price-input").forEach(input => {
        input.addEventListener("focus", (e) => {
            if (e.target.value === "0") {
                e.target.value = "";
            } else {
                e.target.select();
            }
        });

        input.addEventListener("input", (e) => {
            const masterId = e.target.getAttribute("data-id");
            const field = e.target.getAttribute("data-field");
            
            const digits = e.target.value.replace(/[^0-9]/g, "");
            const val = parseInt(digits) || 0;
            
            if (digits === "") {
                e.target.value = "";
            } else {
                e.target.value = val.toLocaleString();
            }
            
            state.itemPrices[masterId][field] = val;
            
            if (field !== "appliedPrice") {
                recalculateLowestAppliedPrice(masterId);
            } else {
                calculateEstimates();
            }
        });

        input.addEventListener("blur", (e) => {
            if (e.target.value === "") {
                e.target.value = "0";
            }
        });
    });

    tbody.querySelectorAll(".price-input-group").forEach(input => {
        input.addEventListener("focus", (e) => {
            if (e.target.value === "0") {
                e.target.value = "";
            } else {
                e.target.select();
            }
        });

        input.addEventListener("input", (e) => {
            const masterId = e.target.getAttribute("data-id");
            const group = e.target.getAttribute("data-group");
            const field = e.target.getAttribute("data-field");
            
            const digits = e.target.value.replace(/[^0-9]/g, "");
            const val = parseInt(digits) || 0;
            
            if (digits === "") {
                e.target.value = "";
            } else {
                e.target.value = val.toLocaleString();
            }
            
            state.itemPrices[masterId][group][field] = val;
            
            recalculateLowestAppliedPrice(masterId);
        });

        input.addEventListener("blur", (e) => {
            if (e.target.value === "") {
                e.target.value = "0";
            }
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

    return state.standardLaborDb.map(dbItem => {
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
                
                // Check if labor configuration has changed
                let hasChanged = false;
                if (item.laborRef !== best.code) {
                    hasChanged = true;
                } else if (best.labors) {
                    if (!item.labors || JSON.stringify(item.labors) !== JSON.stringify(best.labors)) {
                        hasChanged = true;
                    }
                } else if (best.laborType && (item.laborType !== best.laborType || item.laborFactor !== best.laborFactor)) {
                    hasChanged = true;
                }

                if (hasChanged) {
                    item.laborRef = best.code;
                    if (best.labors) {
                        item.labors = JSON.parse(JSON.stringify(best.labors));
                        delete item.laborType;
                        delete item.laborFactor;
                    } else {
                        item.laborType = best.laborType;
                        item.laborFactor = best.laborFactor;
                        delete item.labors;
                    }
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
    
    let currentLaborStr = "";
    if (item.labors) {
        currentLaborStr = Object.entries(item.labors).map(([type, factor]) => `${type} ${factor}인`).join(", ");
    } else {
        currentLaborStr = `${item.laborType || '미지정'}, ${item.laborFactor || 0}인`;
    }
    document.getElementById("lbl-modal-item-current").textContent = `${item.laborRef || '근거 없음'} (${currentLaborStr})`;
    
    // 예상 가격 표시
    updateLaborModalPreview(item.labors || item.laborFactor, item.laborType);
    
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
            
            let laborStr = "";
            if (rec.labors) {
                laborStr = Object.entries(rec.labors).map(([type, factor]) => `${type} ${factor}인`).join(", ");
            } else {
                laborStr = `${rec.laborType} ${rec.laborFactor}인`;
            }

            card.innerHTML = `
                <div class="recommend-card-info" style="flex: 1; min-width: 0;">
                    <span class="recommend-card-title" style="display: flex; align-items: center; gap: 6px; flex-wrap: wrap;">
                        ${rec.name} (${rec.code})
                        ${rec.page ? `
                        <button class="pdf-quick-view btn-icon-danger" data-page="${rec.page}" title="품셈 근거 PDF 보기" style="padding: 2px 5px; font-size: 11px; color: #dc3545; background: rgba(220,53,69,0.1); border-radius: 4px; border: none; cursor: pointer; display: inline-flex; align-items: center; gap: 3px; z-index: 10;">
                            <i class="fa-solid fa-file-pdf"></i>
                        </button>
                        ` : ""}
                    </span>
                    <span class="recommend-card-sub" style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis; display: block;">${rec.spec} | ${laborStr}</span>
                </div>
                <div class="recommend-meta-wrap" style="flex-shrink: 0;">
                    <span class="recommend-match-badge ${badgeClass}">${rec.matchScore}% 일치</span>
                </div>
            `;
            
            card.addEventListener("click", () => {
                applyLaborRef(rec.code, rec.labors || rec.laborType, rec.laborFactor);
            });

            const pdfIcon = card.querySelector(".pdf-quick-view");
            if (pdfIcon) {
                pdfIcon.addEventListener("click", (e) => {
                    e.stopPropagation();
                    const page = parseInt(pdfIcon.getAttribute("data-page"));
                    viewLaborRefPdfByPage(rec.code, page);
                });
            }
            
            // Preview on hover
            card.addEventListener("mouseenter", () => {
                updateLaborModalPreview(rec.labors || rec.laborFactor, rec.laborType);
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
function updateLaborModalPreview(laborFactorOrLabors, laborType) {
    const wages = WAGE_RATES[state.wageStandard];
    let calcCost = 0;
    let laborDetails = "";
    
    if (typeof laborFactorOrLabors === "object" && laborFactorOrLabors !== null) {
        Object.entries(laborFactorOrLabors).forEach(([type, factor]) => {
            const wageRate = wages[type] || 0;
            calcCost += Math.floor((factor || 0) * wageRate);
            laborDetails += `${type}(${wageRate.toLocaleString()}원)*${factor}인 + `;
        });
        if (laborDetails.endsWith(" + ")) {
            laborDetails = laborDetails.substring(0, laborDetails.length - 3);
        }
    } else {
        const wageRate = wages[laborType] || 0;
        calcCost = Math.floor((laborFactorOrLabors || 0) * wageRate);
        laborDetails = `${laborType}(${wageRate.toLocaleString()}원)*${laborFactorOrLabors}인`;
    }
    
    document.getElementById("lbl-modal-wage-rate").textContent = laborDetails || "노무비 없음";
    document.getElementById("lbl-modal-calculated-labor").textContent = calcCost.toLocaleString();
}

// 모달 내 품셈 검색
function searchModalLaborBasis(query) {
    const list = document.getElementById("modal-labor-results-list");
    list.innerHTML = "";
    
    const queryL = query.toLowerCase().trim();
    const filtered = STANDARD_LABOR_DB.filter(dbItem => {
        const laborsKeysMatch = dbItem.labors ? Object.keys(dbItem.labors).some(k => k.toLowerCase().includes(queryL)) : false;
        return dbItem.name.toLowerCase().includes(queryL) ||
               dbItem.spec.toLowerCase().includes(queryL) ||
               dbItem.code.toLowerCase().includes(queryL) ||
               (dbItem.laborType && dbItem.laborType.toLowerCase().includes(queryL)) ||
               laborsKeysMatch;
    });
    
    if (filtered.length === 0) {
        list.innerHTML = `<div style="text-align: center; color: var(--text-muted); font-size: 12px; padding: 20px 0;">검색 결과가 없습니다.</div>`;
        return;
    }
    
    filtered.forEach(dbItem => {
        const row = document.createElement("div");
        row.className = "modal-db-item-row";
        
        let laborStr = "";
        if (dbItem.labors) {
            laborStr = Object.entries(dbItem.labors).map(([type, factor]) => `<div class="modal-db-item-type" style="font-size: 11px; color: var(--text-secondary); text-align: right;">${type} <span style="color: var(--accent); font-weight: 600;">${factor.toFixed(4)}</span> 인</div>`).join("");
        } else {
            laborStr = `<span class="modal-db-item-factor">${dbItem.laborFactor.toFixed(4)} 인</span>
                        <div class="modal-db-item-type">${dbItem.laborType}</div>`;
        }
        
        row.innerHTML = `
            <div class="modal-db-item-details" style="flex: 1; min-width: 0;">
                <span class="modal-db-item-name" style="display: flex; align-items: center; gap: 6px; flex-wrap: wrap;">
                    ${dbItem.name} (${dbItem.code})
                    ${dbItem.page ? `
                    <button class="pdf-quick-view btn-icon-danger" data-page="${dbItem.page}" title="품셈 근거 PDF 보기" style="padding: 2px 5px; font-size: 11px; color: #dc3545; background: rgba(220,53,69,0.1); border-radius: 4px; border: none; cursor: pointer; display: inline-flex; align-items: center; gap: 3px; z-index: 10;">
                        <i class="fa-solid fa-file-pdf"></i>
                    </button>
                    ` : ""}
                </span>
                <span class="modal-db-item-spec" style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis; display: block;">${dbItem.spec} [${dbItem.unit}]</span>
            </div>
            <div class="modal-db-item-right" style="flex-shrink: 0; display: flex; flex-direction: column; align-items: flex-end; justify-content: center; gap: 4px;">
                ${laborStr}
            </div>
        `;
        
        row.addEventListener("click", () => {
            applyLaborRef(dbItem.code, dbItem.labors || dbItem.laborType, dbItem.laborFactor);
        });

        const pdfIcon = row.querySelector(".pdf-quick-view");
        if (pdfIcon) {
            pdfIcon.addEventListener("click", (e) => {
                e.stopPropagation();
                const page = parseInt(pdfIcon.getAttribute("data-page"));
                viewLaborRefPdfByPage(dbItem.code, page);
            });
        }
        
        row.addEventListener("mouseenter", () => {
            updateLaborModalPreview(dbItem.labors || dbItem.laborFactor, dbItem.laborType);
        });
        
        list.appendChild(row);
    });
}

// 품셈 적용 완료 및 갱신
function applyLaborRef(code, laborTypeOrLabors, laborFactor) {
    if (!activeLaborEditItem) return;
    
    const { item } = activeLaborEditItem;
    item.laborRef = code;
    
    if (typeof laborTypeOrLabors === "object" && laborTypeOrLabors !== null) {
        item.labors = JSON.parse(JSON.stringify(laborTypeOrLabors));
        delete item.laborType;
        delete item.laborFactor;
    } else {
        item.laborType = laborTypeOrLabors;
        item.laborFactor = laborFactor;
        delete item.labors;
    }
    
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
    
    let displayLabor = "";
    if (item.labors) {
        displayLabor = Object.entries(item.labors).map(([type, factor]) => `${type} ${factor}인`).join(", ");
    } else {
        displayLabor = `${item.laborType} ${item.laborFactor}인`;
    }
    
    showToast(`"${item.name}"의 노임근거가 ${code} (${displayLabor})로 변경되었습니다.`, "success");
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
window.openExcelImportModal = openExcelImportModal;
window.updateExcelPreview = updateExcelPreview;
window.confirmExcelImport = confirmExcelImport;
window.viewLaborRefPdf = viewLaborRefPdf;
window.viewLaborRefPdfByPage = viewLaborRefPdfByPage;

// 1. 단가조사 직접 추가 모달 열기
function openAddPriceItemModal() {
    if (state.divisions.length === 0) {
        showToast("선택된 공종이 없습니다. 먼저 공종설정 탭에서 공종을 추가해 주세요.", "warning");
        return;
    }

    // Clear fields
    document.getElementById("input-modal-price-name").value = "";
    document.getElementById("input-modal-price-spec").value = "";
    document.getElementById("input-modal-price-unit").value = "개";

    openModal("modal-add-price-item");
}

// 2. 단가조사 직접 추가 처리
function confirmAddPriceItem() {
    const name = document.getElementById("input-modal-price-name").value.trim();
    const spec = document.getElementById("input-modal-price-spec").value.trim();
    const unit = document.getElementById("input-modal-price-unit").value.trim();

    if (!name) {
        showToast("품목명을 입력해주세요.", "danger");
        return;
    }

    const div = state.divisions.find(d => d.id === state.activeDivisionId);
    if (!div) {
        showToast("선택된 활성 공종이 없습니다. 공종을 먼저 추가하거나 활성화해 주세요.", "danger");
        return;
    }

    // Generate custom masterId
    const newMasterId = "M_CUSTOM_" + Date.now();
    
    // Default values: qty is 1, matPrice is 0, laborRefCode is empty
    const qty = 1;
    const matPrice = 0;
    const laborRefCode = "";
    const labors = null;
    const laborType = null;
    const laborFactor = 0;

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
        labors: labors,
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
        labors: labors,
        laborScenario: "new",
        laborMultiplier: 1.0,
        laborRef: laborRefCode,
        laborRemark: ""
    };
    div.items.push(newItem);

    closeModal("modal-add-price-item");
    
    renderPriceInvestigationTable();
    calculateEstimates();
    loadActiveDivision();
    renderLaborBasisTable();

    showToast(`단가조사 품목 "${name}"이(가) 등록되었습니다.`, "success");
}

// Excel Import Functions
function openExcelImportModal(pastedText = "") {
    if (state.divisions.length === 0) {
        showToast("선택된 공종이 없습니다. 먼저 공종설정 탭에서 공종을 추가해 주세요.", "warning");
        return;
    }

    const textarea = document.getElementById("textarea-excel-paste");
    textarea.value = pastedText;
    
    updateExcelPreview();
    openModal("modal-excel-import");
    
    if (!pastedText) {
        setTimeout(() => textarea.focus(), 100);
    }
}

function updateExcelPreview() {
    const textarea = document.getElementById("textarea-excel-paste");
    const tbody = document.getElementById("excel-preview-tbody");
    const countLbl = document.getElementById("lbl-excel-count");
    const confirmBtn = document.getElementById("btn-confirm-excel-import");
    const chkHeader = document.getElementById("chk-excel-header");
    
    const text = textarea.value.trim();
    if (!text) {
        tbody.innerHTML = `<tr><td colspan="4" style="text-align: center; color: var(--text-muted); padding: 30px;">붙여넣은 데이터가 여기에 표시됩니다.</td></tr>`;
        countLbl.textContent = "0";
        confirmBtn.disabled = true;
        return;
    }
    
    const lines = text.split(/\r?\n/);
    const hasHeader = chkHeader.checked;
    
    let parsedCount = 0;
    let html = "";
    const startIndex = hasHeader ? 1 : 0;
    const previewLimit = 100;
    
    for (let i = startIndex; i < lines.length; i++) {
        const line = lines[i];
        if (!line.trim()) continue;
        
        parsedCount++;
        const cols = line.split("\t");
        const name = cols[0]?.trim() || "";
        const spec = cols[1]?.trim() || "";
        const unit = cols[2]?.trim() || "개";
        
        if (parsedCount <= previewLimit) {
            html += `
                <tr>
                    <td style="text-align: center;">${parsedCount}</td>
                    <td><strong>${name || `<span style="color: var(--text-danger);">품명 없음</span>`}</strong></td>
                    <td>${spec || `<span style="color: var(--text-muted); font-style: italic;">규격 없음</span>`}</td>
                    <td style="text-align: center;">${unit}</td>
                </tr>
            `;
        }
    }
    
    if (parsedCount > previewLimit) {
        html += `
            <tr>
                <td colspan="4" style="text-align: center; color: var(--text-muted); font-style: italic; padding: 10px;">
                    ... 외 ${parsedCount - previewLimit}개의 품목이 더 있습니다.
                </td>
            </tr>
        `;
    }
    
    tbody.innerHTML = html || `<tr><td colspan="4" style="text-align: center; color: var(--text-muted); padding: 30px;">유효한 데이터가 없습니다.</td></tr>`;
    countLbl.textContent = parsedCount;
    confirmBtn.disabled = (parsedCount === 0);
}

function confirmExcelImport() {
    const textarea = document.getElementById("textarea-excel-paste");
    const chkHeader = document.getElementById("chk-excel-header");
    
    const text = textarea.value.trim();
    if (!text) return;
    
    const div = state.divisions.find(d => d.id === state.activeDivisionId);
    if (!div) {
        showToast("선택된 활성 공종이 없습니다. 공종을 추가해 주세요.", "warning");
        return;
    }
    
    const lines = text.split(/\r?\n/);
    const hasHeader = chkHeader.checked;
    const startIndex = hasHeader ? 1 : 0;
    
    let addedCount = 0;
    const now = Date.now();
    
    for (let i = startIndex; i < lines.length; i++) {
        const line = lines[i];
        if (!line.trim()) continue;
        
        const cols = line.split("\t");
        const name = cols[0]?.trim() || "";
        if (!name) continue;
        
        const spec = cols[1]?.trim() || "";
        const unit = cols[2]?.trim() || "개";
        
        const newMasterId = "M_CUSTOM_" + now + "_" + addedCount;
        const qty = 1;
        const matPrice = 0;
        
        ITEM_MASTER_DB.push({
            id: newMasterId,
            name: name,
            spec: spec,
            unit: unit,
            category: "device",
            materialPrice: matPrice,
            laborType: null,
            laborFactor: 0,
            labors: null,
            laborRef: ""
        });
        
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
        
        const newItem = {
            id: "item-" + now + Math.random().toString(36).substr(2, 5),
            masterId: newMasterId,
            name: name,
            spec: spec,
            unit: unit,
            qty: qty,
            materialPrice: matPrice,
            laborType: null,
            laborFactor: 0,
            labors: null,
            laborScenario: "new",
            laborMultiplier: 1.0,
            laborRef: "",
            laborRemark: ""
        };
        div.items.push(newItem);
        addedCount++;
    }
    
    closeModal("modal-excel-import");
    
    if (addedCount > 0) {
        renderPriceInvestigationTable();
        calculateEstimates();
        loadActiveDivision();
        renderLaborBasisTable();
        showToast(`엑셀 일괄 등록 완료: ${addedCount}개의 품목이 "${div.name}" 공종에 등록되었습니다.`, "success");
    } else {
        showToast("등록할 수 있는 유효한 품목이 없었습니다.", "warning");
    }
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
        const laborsKeysMatch = dbItem.labors ? Object.keys(dbItem.labors).some(k => k.toLowerCase().includes(queryL)) : false;
        return dbItem.name.toLowerCase().includes(queryL) ||
               dbItem.spec.toLowerCase().includes(queryL) ||
               dbItem.code.toLowerCase().includes(queryL) ||
               (dbItem.laborType && dbItem.laborType.toLowerCase().includes(queryL)) ||
               laborsKeysMatch;
    });
    
    if (filtered.length === 0) {
        list.innerHTML = `<div style="text-align: center; color: var(--text-muted); font-size: 11px; padding: 20px 0;">검색 결과가 없습니다.</div>`;
        return;
    }
    
    filtered.forEach(dbItem => {
        const row = document.createElement("div");
        row.className = "modal-db-item-row";
        
        let laborStr = "";
        let firstLaborType = "";
        let firstLaborFactor = 0;
        
        if (dbItem.labors) {
            laborStr = Object.entries(dbItem.labors).map(([type, factor]) => `<div class="modal-db-item-type" style="font-size: 11px; color: var(--text-secondary); text-align: right;">${type} <span style="color: var(--accent); font-weight: 600;">${factor.toFixed(4)}</span> 인</div>`).join("");
            firstLaborType = Object.keys(dbItem.labors)[0] || "";
            firstLaborFactor = Object.values(dbItem.labors)[0] || 0;
        } else {
            laborStr = `<span class="modal-db-item-factor">${dbItem.laborFactor.toFixed(4)} 인</span>
                        <div class="modal-db-item-type">${dbItem.laborType}</div>`;
            firstLaborType = dbItem.laborType;
            firstLaborFactor = dbItem.laborFactor;
        }
        
        row.innerHTML = `
            <div class="modal-db-item-details">
                <span class="modal-db-item-name">${dbItem.name} (${dbItem.code})</span>
                <span class="modal-db-item-spec">${dbItem.spec} [${dbItem.unit}]</span>
            </div>
            <div class="modal-db-item-right" style="flex-direction: column; align-items: flex-end; justify-content: center; gap: 4px;">
                ${laborStr}
            </div>
        `;
        
        row.addEventListener("click", () => {
            document.getElementById("input-modal-labor-item-name").value = dbItem.name;
            document.getElementById("input-modal-labor-item-spec").value = dbItem.spec;
            document.getElementById("input-modal-labor-item-unit").value = dbItem.unit;
            document.getElementById("input-modal-labor-item-factor").value = firstLaborFactor.toFixed(4);
            document.getElementById("select-modal-labor-item-type").value = firstLaborType;
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
    const ref = document.getElementById("input-modal-labor-item-ref").value.trim();

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
        laborScenario: "new",
        laborMultiplier: 1.0,
        laborRef: ref || "자체품셈",
        laborRemark: "신설"
    };

    // If ref corresponds to a standard labor item, copy all labors
    if (ref) {
        const dbItem = state.standardLaborDb.find(d => d.code === ref);
        if (dbItem && dbItem.labors) {
            newItem.labors = JSON.parse(JSON.stringify(dbItem.labors));
        } else {
            newItem.laborType = laborType;
            newItem.laborFactor = factor;
        }
    } else {
        newItem.laborType = laborType;
        newItem.laborFactor = factor;
    }

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
            
            const basicMult = item.laborMultiplier !== undefined ? item.laborMultiplier : 1.0;
            const extra1Mult = item.laborExtra1Mult !== undefined ? item.laborExtra1Mult : 1.0;
            const extra2Mult = item.laborExtra2Mult !== undefined ? item.laborExtra2Mult : 1.0;
            const multiplier = basicMult * extra1Mult * extra2Mult;
            
            // Build the labors list
            let laborItems = [];
            if (item.labors) {
                Object.entries(item.labors).forEach(([type, factor]) => {
                    laborItems.push({ type, factor });
                });
            } else if (item.laborType && item.laborFactor) {
                laborItems.push({ type: item.laborType, factor: item.laborFactor });
            } else {
                laborItems.push({ type: "-", factor: 0 });
            }
            
            const scenarios = [
                { value: "new", label: "신설 (100% 적용)", mult: 1.0, remark: "신설" },
                { value: "demolish", label: "단순 철거 (30% 적용)", mult: 0.3, remark: "철거자재" },
                { value: "reuse", label: "재사용 철거 (50% 적용)", mult: 0.5, remark: "철거재사용" },
                { value: "night", label: "야간 작업 (125% 적용)", mult: 1.25, remark: "야간할증" },
                { value: "narrow", label: "협소 장소 (110% 적용)", mult: 1.10, remark: "야지작업" }
            ];

            let selectBasicHtml = "-";
            let selectExtra1Html = "-";
            let selectExtra2Html = "-";
            const itemHasLabor = item.labors || (item.laborType && item.laborFactor);
            if (itemHasLabor) {
                // 기본 할증
                selectBasicHtml = `<select class="select-labor-scenario" data-div-id="${div.id}" data-item-id="${item.id}" style="background-color: var(--bg-base); border: 1px solid var(--border-color); color: var(--text-primary); padding: 6px 10px; border-radius: 4px; outline: none; font-size: 13px; width: 100%; cursor: pointer;">`;
                scenarios.forEach(sc => {
                    const selected = (item.laborScenario || "new") === sc.value ? "selected" : "";
                    selectBasicHtml += `<option value="${sc.value}" data-mult="${sc.mult}" data-remark="${sc.remark}" ${selected}>${sc.label}</option>`;
                });
                selectBasicHtml += `</select>`;

                // 해설할증1 (유저 직접 입력, %)
                const val1 = item.laborExtra1Percent !== undefined ? item.laborExtra1Percent : 0;
                selectExtra1Html = `<div style="display: flex; align-items: center; gap: 4px; justify-content: center;">
                    <input type="number" class="input-labor-extra1" data-div-id="${div.id}" data-item-id="${item.id}" value="${val1}" min="0" max="500" step="0.1" style="background-color: var(--bg-base); border: 1px solid var(--border-color); color: var(--text-primary); padding: 6px 10px; border-radius: 4px; outline: none; font-size: 13px; width: 80px; text-align: right;">
                    <span style="font-size: 12px; color: var(--text-secondary);">%</span>
                </div>`;

                // 해설할증2 (유저 직접 입력, %)
                const val2 = item.laborExtra2Percent !== undefined ? item.laborExtra2Percent : 0;
                selectExtra2Html = `<div style="display: flex; align-items: center; gap: 4px; justify-content: center;">
                    <input type="number" class="input-labor-extra2" data-div-id="${div.id}" data-item-id="${item.id}" value="${val2}" min="0" max="500" step="0.1" style="background-color: var(--bg-base); border: 1px solid var(--border-color); color: var(--text-primary); padding: 6px 10px; border-radius: 4px; outline: none; font-size: 13px; width: 80px; text-align: right;">
                    <span style="font-size: 12px; color: var(--text-secondary);">%</span>
                </div>`;
            }

            const itemIndex = overallIndex++;

            laborItems.forEach((li, liIdx) => {
                const tr = document.createElement("tr");
                const hasLabor = li.type !== "-";
                const calcFactor = hasLabor ? (li.factor * multiplier) : 0;
                const totalLaborVolume = item.qty * calcFactor;

                if (liIdx === 0) {
                    tr.innerHTML = `
                        <td rowspan="${laborItems.length}">${itemIndex}</td>
                        <td rowspan="${laborItems.length}" style="color: var(--text-secondary); font-size: 13px;">${div.name}</td>
                        <td rowspan="${laborItems.length}">
                            <div class="item-meta">
                                <span class="item-title">${item.name}</span>
                                <span class="item-subtitle">${item.spec}</span>
                            </div>
                        </td>
                        <td rowspan="${laborItems.length}" style="text-align: center;">${item.unit}</td>
                        <td rowspan="${laborItems.length}" style="text-align: right; font-family: monospace;">${item.qty}</td>
                        <td>${hasLabor ? li.type : "-"}</td>
                        <td style="text-align: right; font-family: monospace;">${hasLabor ? li.factor.toFixed(4) : "-"}</td>
                        <td rowspan="${laborItems.length}" style="text-align: center;">${selectBasicHtml}</td>
                        <td rowspan="${laborItems.length}" style="text-align: center;">${selectExtra1Html}</td>
                        <td rowspan="${laborItems.length}" style="text-align: center;">${selectExtra2Html}</td>
                        <td style="text-align: right; font-family: monospace; font-weight: 600; color: ${hasLabor ? "var(--accent)" : "var(--text-muted)"};">${hasLabor ? totalLaborVolume.toFixed(4) : "-"}</td>
                        <td rowspan="${laborItems.length}" style="text-align: center;">
                            <div style="display: flex; flex-direction: column; align-items: center; gap: 6px; justify-content: center;">
                                <span class="labor-ref-badge-clickable" onclick="openLaborRefModal('${div.id}', '${item.id}')" title="클릭하여 표준품셈 변경/추천 받기">
                                    <i class="fa-solid fa-wand-magic-sparkles"></i> ${item.laborRef || "근거 없음"}
                                </span>
                                ${item.laborRef ? `
                                <button class="btn btn-outline" onclick="viewLaborRefPdf('${item.laborRef}')" style="padding: 2px 6px; font-size: 11px; display: inline-flex; align-items: center; gap: 4px; border-color: rgba(220, 53, 69, 0.4); color: #dc3545; border-radius: var(--radius-sm); background: rgba(220, 53, 69, 0.05); cursor: pointer;">
                                    <i class="fa-solid fa-file-pdf"></i> 품셈 근거 보기
                                </button>
                                ` : ""}
                            </div>
                        </td>
                        <td rowspan="${laborItems.length}" style="text-align: center;">
                            <button class="btn-icon-danger" onclick="deleteLaborBasisItem('${div.id}', '${item.id}')" title="노임근거 제거/삭제">
                                <i class="fa-solid fa-trash-can"></i>
                            </button>
                        </td>
                    `;
                } else {
                    tr.innerHTML = `
                        <td>${hasLabor ? li.type : "-"}</td>
                        <td style="text-align: right; font-family: monospace;">${hasLabor ? li.factor.toFixed(4) : "-"}</td>
                        <td style="text-align: right; font-family: monospace; font-weight: 600; color: ${hasLabor ? "var(--accent)" : "var(--text-muted)"};">${hasLabor ? totalLaborVolume.toFixed(4) : "-"}</td>
                    `;
                }
                tbody.appendChild(tr);
            });
        });
    });

    if (!hasItems) {
        tbody.innerHTML = `<tr><td colspan="13" style="text-align: center; color: var(--text-muted); padding: 45px 0;"><i class="fa-solid fa-person-digging" style="font-size: 24px; margin-bottom: 10px; display: block;"></i>내역서에 추가된 품목이 없습니다.</td></tr>`;
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

    tbody.querySelectorAll(".input-labor-extra1").forEach(input => {
        input.addEventListener("change", (e) => {
            const divId = e.target.getAttribute("data-div-id");
            const itemId = e.target.getAttribute("data-item-id");
            const val = Math.max(0, parseFloat(e.target.value) || 0);

            const div = state.divisions.find(d => d.id === divId);
            if (div) {
                const item = div.items.find(i => i.id === itemId);
                if (item) {
                    item.laborExtra1Percent = val;
                    item.laborExtra1Mult = 1.0 + (val / 100);
                    
                    renderLaborBasisTable();
                    calculateEstimates();
                    showToast(`"${item.name}" 해설할증1 비율이 변경되었습니다.`, "info");
                }
            }
        });
    });

    tbody.querySelectorAll(".input-labor-extra2").forEach(input => {
        input.addEventListener("change", (e) => {
            const divId = e.target.getAttribute("data-div-id");
            const itemId = e.target.getAttribute("data-item-id");
            const val = Math.max(0, parseFloat(e.target.value) || 0);

            const div = state.divisions.find(d => d.id === divId);
            if (div) {
                const item = div.items.find(i => i.id === itemId);
                if (item) {
                    item.laborExtra2Percent = val;
                    item.laborExtra2Mult = 1.0 + (val / 100);
                    
                    renderLaborBasisTable();
                    calculateEstimates();
                    showToast(`"${item.name}" 해설할증2 비율이 변경되었습니다.`, "info");
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
        
        const basicMult = item.laborMultiplier !== undefined ? item.laborMultiplier : 1.0;
        const extra1Mult = item.laborExtra1Mult !== undefined ? item.laborExtra1Mult : 1.0;
        const extra2Mult = item.laborExtra2Mult !== undefined ? item.laborExtra2Mult : 1.0;
        const multiplier = basicMult * extra1Mult * extra2Mult;

        let laborCost = 0;
        let laborDetails = "";
        if (item.labors) {
            Object.entries(item.labors).forEach(([type, factor]) => {
                const cost = Math.floor(factor * multiplier * (wages[type] || 0));
                laborCost += cost;
                laborDetails += `${type} ${factor}인 (할증 ${multiplier.toFixed(2)})\n`;
            });
            laborDetails = laborDetails.trim();
        } else if (item.laborType && item.laborFactor) {
            laborCost = Math.floor(item.laborFactor * multiplier * (wages[item.laborType] || 0));
            laborDetails = `${item.laborType} 품셈 ${item.laborFactor}인 (할증 ${multiplier.toFixed(2)})`;
        } else {
            laborDetails = "노임 정보 없음";
        }
        
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
            <td class="col-currency" title="${laborDetails}">₩${laborCost.toLocaleString()}</td>
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
            
            const basicMult = item.laborMultiplier !== undefined ? item.laborMultiplier : 1.0;
            const extra1Mult = item.laborExtra1Mult !== undefined ? item.laborExtra1Mult : 1.0;
            const extra2Mult = item.laborExtra2Mult !== undefined ? item.laborExtra2Mult : 1.0;
            const multiplier = basicMult * extra1Mult * extra2Mult;
            
            let itemLaborCost = 0;
            if (item.labors) {
                Object.entries(item.labors).forEach(([type, factor]) => {
                    itemLaborCost += Math.floor(factor * multiplier * (wages[type] || 0));
                });
            } else if (item.laborType && item.laborFactor) {
                itemLaborCost = Math.floor(item.laborFactor * multiplier * (wages[item.laborType] || 0));
            }
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
        
        // Define common borders
        const thinBorder = {
            top: { style: 'thin', color: { argb: 'FFBFBFBF' } },
            bottom: { style: 'thin', color: { argb: 'FFBFBFBF' } },
            left: { style: 'thin', color: { argb: 'FFBFBFBF' } },
            right: { style: 'thin', color: { argb: 'FFBFBFBF' } }
        };
        
        // Helper for empty prices -> blank cell
        function priceOrBlank(val) {
            if (val === 0 || val === "0" || val === "" || val === null || val === undefined) {
                return "";
            }
            return Number(val);
        }
        
        // Pre-calculate Excel row indices for 1-to-1 linkage between '내역서' and '노임근거'
        let boqRow = 3; // Data starts after title (row 1) and headers (row 2)
        let laborRow = 2; // Data starts after headers (row 1) in shLabor
        
        // Unique list of master items used (needed for pricing page match indices)
        const allItemsMap = new Map();
        state.divisions.forEach(div => {
            div.items.forEach(item => {
                allItemsMap.set(item.masterId, item);
            });
        });
        const keysArr = Array.from(allItemsMap.keys());
        
        state.divisions.forEach(div => {
            boqRow++; // Division name row
            div.items.forEach(item => {
                item.excelRowIndex = boqRow;
                boqRow++;
                
                // Construct labor entries list for indexing
                let laborEntries = [];
                if (item.labors) {
                    Object.entries(item.labors).forEach(([type, factor]) => {
                        if (factor > 0) {
                            laborEntries.push({ type, factor });
                        }
                    });
                } else if (item.laborType && item.laborFactor > 0) {
                    laborEntries.push({ type: item.laborType, factor: item.laborFactor });
                }
                
                if (laborEntries.length > 0) {
                    item.laborExcelRows = [];
                    laborEntries.forEach(() => {
                        item.laborExcelRows.push(laborRow);
                        laborRow++;
                    });
                } else {
                    item.laborExcelRows = [];
                }
            });
            boqRow++; // Tool wear row
            boqRow++; // Division total row
            boqRow++; // Division spacer row
        });
        
        // ----------------------------------------------------
        // 1. COVER SHEET (갑지)
        // ----------------------------------------------------
        const shCover = workbook.addWorksheet("갑지");
        shCover.views = [{ showGridLines: true }];
        shCover.pageSetup = {
            paperSize: 9, // A4
            orientation: 'portrait',
            fitToPage: true,
            fitToWidth: 1,
            fitToHeight: 1
        };
        
        // Column widths
        shCover.columns = [
            { width: 9.62 },  // A
            { width: 4.62 },  // B
            { width: 6.12 },  // C
            { width: 8.88 },  // D
            { width: 16.75 }, // E
            { width: 8.88 },  // F
            { width: 16.0 },  // G
            { width: 8.88 },  // H
            { width: 8.0 },   // I
            { width: 11.75 }, // J
            { width: 4.25 },  // K
            { width: 5.0 },   // L
            { width: 21.62 }, // M
            { width: 11.12 }  // N
        ];
        
        // Row heights
        shCover.getRow(1).height = 20.10;
        shCover.getRow(2).height = 20.10;
        shCover.getRow(3).height = 56.25; // Title row
        shCover.getRow(4).height = 15.00;
        shCover.getRow(5).height = 30.75; // Project name
        shCover.getRow(6).height = 35.10; // Header
        for (let r = 7; r <= 12; r++) {
            shCover.getRow(r).height = 35.10;
        }
        
        // Add sign-off block values
        shCover.getCell("A1").value = "과  장";
        shCover.getCell("D1").value = "팀  장";
        shCover.getCell("F1").value = "심사자";
        shCover.getCell("H1").value = "설계자";
        shCover.getCell("K1").value = "설  계";
        shCover.getCell("K2").value = "심  사";
        
        // Today date formula or value
        const today = new Date();
        const dateStr = `${today.getFullYear()}년  ${String(today.getMonth() + 1).padStart(2, '0')}월   일`;
        shCover.getCell("M1").value = dateStr;
        shCover.getCell("N1").value = "결  재";
        shCover.getCell("M2").value = { formula: "M1" };
        shCover.getCell("N2").value = "월   일";
        
        // Merging for sign-off blocks
        shCover.mergeCells("A1:A2");
        shCover.mergeCells("B1:C2");
        shCover.mergeCells("D1:D2");
        shCover.mergeCells("E1:E2");
        shCover.mergeCells("F1:F2");
        shCover.mergeCells("G1:G2");
        shCover.mergeCells("H1:I2");
        shCover.mergeCells("J1:J2");
        shCover.mergeCells("K1:L1");
        shCover.mergeCells("K2:L2");
        
        // Style sign-off blocks
        const signOffCells = ["A1", "D1", "F1", "H1", "K1", "K2", "M1", "N1", "M2", "N2"];
        signOffCells.forEach(cellCoord => {
            const cell = shCover.getCell(cellCoord);
            cell.font = { name: "돋움체", size: 11, bold: true };
            cell.alignment = { horizontal: 'center', vertical: 'middle' };
        });
        
        // Set sign-off block borders (thin inside, medium on the outer boundary of A1:N2 block)
        for (let r = 1; r <= 2; r++) {
            for (let c = 1; c <= 14; c++) {
                const cell = shCover.getCell(r, c);
                cell.border = {
                    top: { style: (r === 1) ? 'medium' : 'thin', color: { argb: 'FF000000' } },
                    bottom: { style: (r === 2) ? 'medium' : 'thin', color: { argb: 'FF000000' } },
                    left: { style: (c === 1) ? 'medium' : 'thin', color: { argb: 'FF000000' } },
                    right: { style: (c === 14) ? 'medium' : 'thin', color: { argb: 'FF000000' } }
                };
            }
        }
        
        // Title: 설   계   서
        shCover.mergeCells("A3:N3");
        const titleCell = shCover.getCell("A3");
        titleCell.value = "설   계   서";
        titleCell.font = { name: "돋움체", size: 36, bold: true };
        titleCell.alignment = { horizontal: 'center', vertical: 'middle' };
        
        // Project name
        shCover.mergeCells("A5:N5");
        const projCell = shCover.getCell("A5");
        projCell.value = `공사명 : [${state.projectName}]`;
        projCell.font = { name: "돋움체", size: 14, bold: true };
        projCell.alignment = { horizontal: 'left', vertical: 'middle' };
        
        // Table: 구분 / 금액 / 비고
        shCover.mergeCells("A6:D6");
        shCover.getCell("A6").value = "구            분";
        shCover.mergeCells("E6:L6"); 
        shCover.getCell("E6").value = "금                             액";
        shCover.mergeCells("M6:N6");
        shCover.getCell("M6").value = "비   고";
        
        // Rows values and formulas
        // A7:D7 -> 총공사비
        shCover.mergeCells("A7:D7");
        shCover.getCell("A7").value = "총  공  사  비";
        shCover.getCell("E7").value = " 일    금   :";
        shCover.getCell("F7").value = { formula: '="  "&NUMBERSTRING(J7,1)&"원정"' };
        shCover.mergeCells("J7:L7");
        shCover.getCell("J7").value = { formula: "=원가!C23" }; // 총계 row in 원가 sheet
        
        // A8:A10 -> 도급비
        shCover.mergeCells("A8:A10");
        shCover.getCell("A8").value = "도\n급\n비";
        
        // B8:D8 -> 공급가액
        shCover.mergeCells("B8:D8");
        shCover.getCell("B8").value = "공  급  가  액";
        shCover.getCell("E8").value = " 일    금   :";
        shCover.getCell("F8").value = { formula: '="  "&NUMBERSTRING(J8,1)&"원정"' };
        shCover.mergeCells("J8:L8");
        shCover.getCell("J8").value = { formula: "=원가!C21" }; // 총원가 row in 원가 sheet
        
        // B9:D9 -> 부가가치세
        shCover.mergeCells("B9:D9");
        shCover.getCell("B9").value = "부가가치세";
        shCover.getCell("E9").value = " 일    금   :";
        shCover.getCell("F9").value = { formula: '="  "&NUMBERSTRING(J9,1)&"원정"' };
        shCover.mergeCells("J9:L9");
        shCover.getCell("J9").value = { formula: "=원가!C22" }; // 부가가치세 row in 원가 sheet
        
        // B10:D10 -> 계
        shCover.mergeCells("B10:D10");
        shCover.getCell("B10").value = "계";
        shCover.getCell("E10").value = " 일    금   :";
        shCover.getCell("F10").value = { formula: '="  "&NUMBERSTRING(J10,1)&"원정"' };
        shCover.mergeCells("J10:L10");
        shCover.getCell("J10").value = { formula: "=원가!C23" }; // 총계 row in 원가 sheet
        
        // A11:D11 -> 관급비
        shCover.mergeCells("A11:D11");
        shCover.getCell("A11").value = "관급비";
        shCover.getCell("E11").value = " 일    금   :";
        shCover.getCell("F11").value = { formula: '="  "&NUMBERSTRING(J11,1)&"원정"' };
        shCover.mergeCells("J11:L11");
        shCover.getCell("J11").value = 0;
        
        // A12:D12 -> 이전비
        shCover.mergeCells("A12:D12");
        shCover.getCell("A12").value = "이전비";
        shCover.getCell("E12").value = " 일    금   :";
        shCover.getCell("F12").value = { formula: '="  "&NUMBERSTRING(J12,1)&"원정"' };
        shCover.mergeCells("J12:L12");
        shCover.getCell("J12").value = 0;
        
        // Merge F to I for Korean spelling overflow, and M to N for "비고" column values
        for (let r = 7; r <= 12; r++) {
            shCover.mergeCells(`F${r}:I${r}`);
            shCover.mergeCells(`M${r}:N${r}`);
        }
        
        // Style table cells in Cover sheet (A6:N12)
        for (let r = 6; r <= 12; r++) {
            for (let c = 1; c <= 14; c++) {
                if (c === 12) continue; // skip L because of J:L merge
                const cell = shCover.getCell(r, c);
                
                // Bold font for Rows 7 and 10 and sign-off block header
                const isBold = (r === 7 || r === 10 || (r === 8 && c === 1));
                cell.font = { name: "돋움체", size: 12, bold: isBold };
                
                // Outer medium borders, thin inner borders
                cell.border = {
                    top: { style: (r === 6) ? 'medium' : 'thin', color: { argb: 'FF000000' } },
                    bottom: { style: (r === 12) ? 'medium' : 'thin', color: { argb: 'FF000000' } },
                    left: { style: (c === 1) ? 'medium' : 'thin', color: { argb: 'FF000000' } },
                    right: { style: (c === 14) ? 'medium' : 'thin', color: { argb: 'FF000000' } }
                };
                
                // Alignment
                if (c <= 4) {
                    cell.alignment = { horizontal: 'center', vertical: 'middle', wrapText: true };
                } else if (c === 5) {
                    cell.alignment = { horizontal: 'right', vertical: 'middle' };
                } else if (c === 6) { // merged F:I
                    cell.alignment = { horizontal: 'right', vertical: 'middle' };
                } else if (c === 10) { // merged J:L
                    cell.alignment = { horizontal: 'right', vertical: 'middle' };
                } else {
                    cell.alignment = { horizontal: 'center', vertical: 'middle' };
                }
            }
        }
        
        // Apply number format to J7:L12
        for (let r = 7; r <= 12; r++) {
            shCover.getCell(`J${r}`).numFmt = "#,##0";
        }
        
        // ----------------------------------------------------
        // 2. MASTER COST STATEMENT SHEET (원가)
        // ----------------------------------------------------
        const shCost = workbook.addWorksheet("원가");
        shCost.views = [{ showGridLines: true }];
        shCost.pageSetup = {
            paperSize: 9, // A4
            orientation: 'portrait',
            fitToPage: true,
            fitToWidth: 1,
            fitToHeight: 1
        };
        
        shCost.addRow(["원 가 계 산 서"]);
        shCost.mergeCells("A1:D1");
        shCost.getCell("A1").font = { size: 18, bold: true, name: "맑은 고딕" };
        shCost.getCell("A1").alignment = { horizontal: 'center', vertical: 'middle' };
        shCost.getRow(1).height = 35.10;
        
        shCost.addRow([`공사명: ${state.projectName}`, "", "", `공사기간: ${state.duration}`]);
        shCost.mergeCells("A2:C2");
        shCost.getCell("A2").alignment = { horizontal: 'left', vertical: 'middle' };
        shCost.getCell("D2").alignment = { horizontal: 'right', vertical: 'middle' };
        shCost.getRow(2).font = { name: "맑은 고딕", size: 11 };
        shCost.getRow(2).height = 20.10;
        
        shCost.addRow(["비 목", "구  분", "금 액", "비  고"]);
        styleHeaderRow(shCost.getRow(3), "맑은 고딕");
        shCost.getRow(3).height = 30.75;
        
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
        shCost.getColumn(1).width = 25.88;
        shCost.getColumn(2).width = 25.0;
        shCost.getColumn(3).width = 31.0;
        shCost.getColumn(4).width = 49.12;
        
        shCost.getColumn(3).numFmt = "#,##0";
        
        // Format all cells in shCost starting from row 4
        const costRowCount = shCost.rowCount;
        for (let r = 4; r <= costRowCount; r++) {
            const row = shCost.getRow(r);
            row.height = 18.00;
            const cell1Val = row.getCell(1).value;
            const cell2Val = row.getCell(2).value;
            
            // Check if this row is a total row
            const isTotalRow = (cell2Val === "( 소   계 )" || cell2Val === "( 순공사비계 )" || cell1Val === "총원가");
            const isGrandTotal = (cell1Val === "총  계");
            
            row.eachCell({ includeEmpty: true }, (cell, colNum) => {
                cell.font = { 
                    name: "맑은 고딕", 
                    size: 11, 
                    bold: (isTotalRow || isGrandTotal) 
                };
                
                // Borders
                if (isGrandTotal) {
                    cell.border = {
                        top: { style: 'thin', color: { argb: 'FFBFBFBF' } },
                        bottom: { style: 'double', color: { argb: 'FF000000' } },
                        left: { style: 'thin', color: { argb: 'FFBFBFBF' } },
                        right: { style: 'thin', color: { argb: 'FFBFBFBF' } }
                    };
                } else {
                    cell.border = thinBorder;
                }
                
                // Alignment
                if (colNum === 1 || colNum === 2) {
                    cell.alignment = { horizontal: 'center', vertical: 'middle' };
                } else if (colNum === 3) {
                    cell.alignment = { horizontal: 'right', vertical: 'middle' };
                } else {
                    cell.alignment = { horizontal: 'left', vertical: 'middle' };
                }
            });
        }
        
        // ----------------------------------------------------
        // 3. DIVISION SUMMARY TABLE (총괄표)
        // ----------------------------------------------------
        const shSummary = workbook.addWorksheet("총괄표");
        shSummary.views = [{ showGridLines: true }];
        shSummary.pageSetup = {
            paperSize: 9, // A4
            orientation: 'portrait',
            fitToPage: true,
            fitToWidth: 1,
            fitToHeight: 0 // Flow vertically, fit horizontally
        };
        
        shSummary.addRow(["공종별 총괄 집계표"]);
        shSummary.mergeCells("A1:H1");
        shSummary.getCell("A1").font = { size: 15, bold: true, name: "맑은 고딕" };
        shSummary.getCell("A1").alignment = { horizontal: 'center', vertical: 'middle' };
        shSummary.getRow(1).height = 30.00;
        
        shSummary.addRow(["번호", "공   종   명", "단위", "수량", "재료비 합계", "노무비 합계", "경비 합계", "총액"]);
        styleHeaderRow(shSummary.getRow(2), "맑은 고딕");
        shSummary.getRow(2).height = 21.75;
        
        // Find row locations in 내역서 sheet to point formulas
        let summaryIdx = 1;
        let sumCurrentRow = 3;
        
        const matSummaryForms = [];
        const labSummaryForms = [];
        const expSummaryForms = [];
        
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
        
        shSummary.getColumn(1).width = 8.0;
        shSummary.getColumn(2).width = 28.25;
        shSummary.getColumn(3).width = 8.0;
        shSummary.getColumn(4).width = 13.0;
        shSummary.getColumn(5).width = 18.0;
        shSummary.getColumn(6).width = 13.0;
        shSummary.getColumn(7).width = 13.0;
        shSummary.getColumn(8).width = 20.0;
        
        for (let colNum = 5; colNum <= 8; colNum++) {
            shSummary.getColumn(colNum).numFmt = "#,##0";
        }
        
        const summaryRowCount = shSummary.rowCount;
        for (let r = 3; r <= summaryRowCount; r++) {
            const row = shSummary.getRow(r);
            const cell2Val = row.getCell(2).value;
            
            if (cell2Val === "( 합       계 )") {
                row.height = 21.75;
                row.eachCell({ includeEmpty: true }, (cell) => {
                    cell.font = { name: "맑은 고딕", size: 11, bold: true };
                    cell.border = {
                        top: { style: 'thin', color: { argb: 'FFBFBFBF' } },
                        bottom: { style: 'double', color: { argb: 'FF000000' } },
                        left: { style: 'thin', color: { argb: 'FFBFBFBF' } },
                        right: { style: 'thin', color: { argb: 'FFBFBFBF' } }
                    };
                });
            } else {
                row.height = 23.10;
                row.eachCell({ includeEmpty: true }, (cell, colNum) => {
                    cell.font = { name: "맑은 고딕", size: 10 };
                    cell.border = thinBorder;
                    
                    if (colNum === 1 || colNum === 3 || colNum === 4) {
                        cell.alignment = { horizontal: 'center', vertical: 'middle' };
                    } else if (colNum === 2) {
                        cell.alignment = { horizontal: 'left', vertical: 'middle' };
                    } else {
                        cell.alignment = { horizontal: 'right', vertical: 'middle' };
                    }
                });
            }
        }
        
        // ----------------------------------------------------
        // 4. MAIN BOQ ESTIMATE SHEET (내역서)
        // ----------------------------------------------------
        const shBOQ = workbook.addWorksheet("내역서");
        shBOQ.views = [{ showGridLines: true }];
        shBOQ.pageSetup = {
            paperSize: 9, // A4
            orientation: 'portrait',
            fitToPage: true,
            fitToWidth: 1,
            fitToHeight: 0
        };
        
        shBOQ.addRow(["설계내역서 - " + state.projectName]);
        shBOQ.getCell("A1").font = { size: 12, name: "맑은 고딕" };
        shBOQ.getCell("A1").alignment = { vertical: 'middle', horizontal: 'left' };
        shBOQ.getRow(1).height = 24.00;
        
        shBOQ.addRow(["번호", "품명", "규격", "단위", "수량", "재료비 단가", "재료비 금액", "노무비 단가", "노무비 금액", "경비 단가", "경비 금액", "합계 금액"]);
        styleHeaderRow(shBOQ.getRow(2), "맑은 고딕");
        shBOQ.getRow(2).height = 24.95;
        
        let boqCurrentRow = 3;
        const matSumFormulas = [];
        const labSumFormulas = [];
        const expSumFormulas = [];
        
        state.divisions.forEach((div) => {
            // Write division header
            const divRow = shBOQ.addRow([div.name]);
            shBOQ.mergeCells(`A${boqCurrentRow}:L${boqCurrentRow}`);
            shBOQ.getRow(boqCurrentRow).height = 23.25;
            boqCurrentRow++;
            
            const startItemRow = boqCurrentRow;
            
            // Write items
            div.items.forEach((item, idx) => {
                const priceMatchIndex = keysArr.indexOf(item.masterId) + 4; // Shifted by 4 rows due to title and shifted table header
                
                const hasLabor = item.laborExcelRows && item.laborExcelRows.length > 0;
                const laborCellFormula = hasLabor ? item.laborExcelRows.map(r => "노임근거!M" + r).join("+") : "0";
                
                const itemRow = shBOQ.addRow([
                    idx + 1,
                    item.name,
                    item.spec,
                    item.unit,
                    item.qty,
                    { formula: "단가조사!E" + priceMatchIndex }, // Material Unit Cost
                    { formula: "TRUNC(E" + boqCurrentRow + "*F" + boqCurrentRow + ", 0)" }, // Material Total Cost
                    hasLabor ? { formula: laborCellFormula } : 0, // Labor Unit Cost
                    { formula: "TRUNC(E" + boqCurrentRow + "*H" + boqCurrentRow + ", 0)" }, // Labor Total Cost
                    0, // Expense Unit Cost
                    0, // Expense Total Cost
                    { formula: "SUM(G" + boqCurrentRow + ", I" + boqCurrentRow + ", K" + boqCurrentRow + ")" }
                ]);
                shBOQ.getRow(boqCurrentRow).height = 27.95;
                boqCurrentRow++;
            });
            
            // Write dynamic Tool Wear (공구손료) for this division
            const laborSumRange = "I" + startItemRow + ":I" + (boqCurrentRow - 1);
            shBOQ.addRow([
                "",
                "[ 공구손료 ]",
                "노무비의 3 %",
                "식",
                1,
                0,
                0,
                0,
                0,
                { formula: "TRUNC(SUM(" + laborSumRange + ")*옵션!$B$16, 0)" },
                { formula: "TRUNC(E" + boqCurrentRow + "*J" + boqCurrentRow + ", 0)" },
                { formula: "K" + boqCurrentRow }
            ]);
            shBOQ.getRow(boqCurrentRow).height = 27.95;
            
            const endItemRow = boqCurrentRow;
            boqCurrentRow++;
            
            // Write Division Total
            shBOQ.addRow([
                "",
                "( 소      계 )",
                "",
                "",
                "",
                "",
                { formula: "SUM(G" + startItemRow + ":G" + endItemRow + ")" },
                "",
                { formula: "SUM(I" + startItemRow + ":I" + endItemRow + ")" },
                "",
                { formula: "SUM(K" + startItemRow + ":K" + endItemRow + ")" },
                { formula: "SUM(L" + startItemRow + ":L" + endItemRow + ")" }
            ]);
            shBOQ.getRow(boqCurrentRow).height = 27.95;
            
            matSumFormulas.push("G" + boqCurrentRow);
            labSumFormulas.push("I" + boqCurrentRow);
            expSumFormulas.push("K" + boqCurrentRow);
            boqCurrentRow++;
            
            // Add division spacer row to keep row indices in sync
            shBOQ.addRow([]);
            shBOQ.getRow(boqCurrentRow).height = 17.25;
            boqCurrentRow++;
        });
        
        // Write Estimate Total sum
        shBOQ.addRow([
            "",
            "[ 합           계 ]",
            "",
            "",
            "",
            "",
            { formula: "SUM(" + matSumFormulas.join(",") + ")" },
            "",
            { formula: "SUM(" + labSumFormulas.join(",") + ")" },
            "",
            { formula: "SUM(" + expSumFormulas.join(",") + ")" },
            { formula: "SUM(G" + boqCurrentRow + ", I" + boqCurrentRow + ", K" + boqCurrentRow + ")" }
        ]);
        shBOQ.getRow(boqCurrentRow).height = 27.95;
        
        // Format columns width & layout for BOQ
        shBOQ.getColumn(1).width = 6.0;
        shBOQ.getColumn(2).width = 25.0;
        shBOQ.getColumn(3).width = 13.0;
        shBOQ.getColumn(4).width = 8.0;
        shBOQ.getColumn(5).width = 13.0;
        shBOQ.getColumn(6).width = 15.0;
        shBOQ.getColumn(7).width = 13.0;
        shBOQ.getColumn(8).width = 13.0;
        shBOQ.getColumn(9).width = 13.0;
        shBOQ.getColumn(10).width = 13.0;
        shBOQ.getColumn(11).width = 13.0;
        shBOQ.getColumn(12).width = 18.0;
        shBOQ.getColumn(13).width = 9.0; // Column M
        
        for (let colNum = 6; colNum <= 12; colNum++) {
            shBOQ.getColumn(colNum).numFmt = "#,##0";
        }
        
        const boqRowCount = shBOQ.rowCount;
        for (let r = 3; r <= boqRowCount; r++) {
            const row = shBOQ.getRow(r);
            const cell2Val = row.getCell(2).value;
            const cell1Val = row.getCell(1).value;
            
            if (cell1Val && !cell2Val) {
                // Division Header
                row.eachCell({ includeEmpty: true }, (cell) => {
                    cell.font = { name: "맑은 고딕", size: 11 };
                    cell.border = thinBorder;
                });
            } else if (cell2Val === "( 소      계 )") {
                row.eachCell({ includeEmpty: true }, (cell) => {
                    cell.font = { name: "맑은 고딕", size: 11, bold: true };
                    cell.border = {
                        top: { style: 'thin', color: { argb: 'FFBFBFBF' } },
                        bottom: { style: 'double', color: { argb: 'FF000000' } },
                        left: { style: 'thin', color: { argb: 'FFBFBFBF' } },
                        right: { style: 'thin', color: { argb: 'FFBFBFBF' } }
                    };
                });
            } else if (cell2Val === "[ 합           계 ]") {
                row.eachCell({ includeEmpty: true }, (cell) => {
                    cell.font = { name: "맑은 고딕", size: 11, bold: true };
                    cell.border = {
                        top: { style: 'thin', color: { argb: 'FFBFBFBF' } },
                        bottom: { style: 'double', color: { argb: 'FF000000' } },
                        left: { style: 'thin', color: { argb: 'FFBFBFBF' } },
                        right: { style: 'thin', color: { argb: 'FFBFBFBF' } }
                    };
                });
            } else {
                row.eachCell({ includeEmpty: true }, (cell, colNum) => {
                    cell.font = { name: "맑은 고딕", size: 11 };
                    cell.border = thinBorder;
                    
                    if (colNum === 1 || colNum === 4 || colNum === 5) {
                        cell.alignment = { horizontal: 'center', vertical: 'middle' };
                    } else if (colNum === 2 || colNum === 3) {
                        cell.alignment = { horizontal: 'left', vertical: 'middle' };
                    } else {
                        cell.alignment = { horizontal: 'right', vertical: 'middle' };
                    }
                });
                
                if (cell2Val === "[ 공구손료 ]") {
                    row.getCell(2).font = { name: "맑은 고딕", size: 11, italic: true, color: { argb: 'FF808080' } };
                    row.getCell(3).font = { name: "맑은 고딕", size: 11, italic: true, color: { argb: 'FF808080' } };
                }
            }
        }
        
        // ----------------------------------------------------
        // 5. UNIT PRICE DATA SHEET (단가조사)
        // ----------------------------------------------------
        const shPrice = workbook.addWorksheet("단가조사");
        shPrice.views = [{ showGridLines: true }];
        shPrice.pageSetup = {
            paperSize: 9, // A4
            orientation: 'landscape', // Wide table, print in landscape
            fitToPage: true,
            fitToWidth: 1,
            fitToHeight: 0
        };
        
        // Add Title Row
        shPrice.addRow(["단가조사서 - " + state.projectName]);
        shPrice.getCell("A1").font = { size: 11, name: "맑은 고딕" };
        shPrice.getCell("A1").alignment = { vertical: 'middle', horizontal: 'left' };
        
        // Add double row headers
        shPrice.addRow(["번호", "명칭", "규격", "단위", "적용단가", "시설단가", "거래가격", "", "물가정보", "", "물가자료", "", "유통물가", "", "조사단가1", "", "조사단가2", "", "비고"]);
        shPrice.addRow(["", "", "", "", "", "", "단가", "PAGE", "단가", "PAGE", "단가", "PAGE", "단가", "PAGE", "단가", "PAGE", "단가", "PAGE", ""]);
        
        // Merge cells for headers
        shPrice.mergeCells("A2:A3");
        shPrice.mergeCells("B2:B3");
        shPrice.mergeCells("C2:C3");
        shPrice.mergeCells("D2:D3");
        shPrice.mergeCells("E2:E3");
        shPrice.mergeCells("F2:F3");
        shPrice.mergeCells("G2:H2");
        shPrice.mergeCells("I2:J2");
        shPrice.mergeCells("K2:L2");
        shPrice.mergeCells("M2:N2");
        shPrice.mergeCells("O2:P2");
        shPrice.mergeCells("Q2:R2");
        shPrice.mergeCells("S2:S3");
        
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
            
            const rowNum = pIndex + 3; // header rows (1, 2, 3)
            shPrice.addRow([
                pIndex++,
                item.name,
                item.spec,
                item.unit,
                { formula: "MIN(G" + rowNum + ",I" + rowNum + ",K" + rowNum + ",M" + rowNum + ",O" + rowNum + ",Q" + rowNum + ")" }, // 적용단가 (최저가 공식)
                priceOrBlank(p.facilityPrice),
                priceOrBlank(p.marketPrice.price),
                p.marketPrice.page || "",
                priceOrBlank(p.infoPrice.price),
                p.infoPrice.page || "",
                priceOrBlank(p.materialPrice.price),
                p.materialPrice.page || "",
                priceOrBlank(p.distPrice.price),
                p.distPrice.page || "",
                priceOrBlank(p.invest1.price),
                p.invest1.page || "",
                priceOrBlank(p.invest2.price),
                p.invest2.page || "",
                "" // 비고
            ]);
        });
        
        // Style headers
        styleHeaderRow(shPrice.getRow(2), "맑은 고딕");
        styleHeaderRow(shPrice.getRow(3), "맑은 고딕");
        shPrice.getRow(2).height = 24.75;
        shPrice.getRow(3).height = 24.75;
        
        // Columns width
        shPrice.getColumn(1).width = 6.0;
        shPrice.getColumn(2).width = 22.0;
        shPrice.getColumn(3).width = 29.0;
        shPrice.getColumn(4).width = 8.0;
        shPrice.getColumn(5).width = 18.88;
        shPrice.getColumn(6).width = 15.0;
        shPrice.getColumn(19).width = 15.0; // Column S
        
        shPrice.getColumn(5).numFmt = "#,##0";
        shPrice.getColumn(6).numFmt = "#,##0";
        
        for (let col = 7; col <= 18; col++) {
            const colWidth = (col % 2 === 1) ? 14.0 : 9.0;
            shPrice.getColumn(col).width = colWidth;
            if (col % 2 === 1) {
                shPrice.getColumn(col).numFmt = "#,##0";
            }
        }
        
        const priceRowCount = shPrice.rowCount;
        for (let r = 4; r <= priceRowCount; r++) {
            const row = shPrice.getRow(r);
            row.height = 23.10;
            row.eachCell({ includeEmpty: true }, (cell, colNum) => {
                cell.font = { name: "맑은 고딕", size: 10 };
                cell.border = thinBorder;
                
                if (colNum === 1 || colNum === 4 || (colNum >= 8 && colNum <= 18 && colNum % 2 === 0)) {
                    cell.alignment = { horizontal: 'center', vertical: 'middle' };
                } else if (colNum === 2 || colNum === 3 || colNum === 19) {
                    cell.alignment = { horizontal: 'left', vertical: 'middle' };
                } else {
                    cell.alignment = { horizontal: 'right', vertical: 'middle' };
                }
            });
        }
        
        // ----------------------------------------------------
        // 6. LABOR DETAILS SHEET (노임근거)
        // ----------------------------------------------------
        const shLabor = workbook.addWorksheet("노임근거");
        shLabor.views = [{ showGridLines: true }];
        shLabor.pageSetup = {
            paperSize: 9, // A4
            orientation: 'portrait',
            fitToPage: true,
            fitToWidth: 1,
            fitToHeight: 0
        };
        
        shLabor.addRow(["번호", "소속공종", "명칭", "규격", "단위", "직종", "기본품셈", "기본할증", "해설할증1", "해설할증2", "산출공량", "노임단가", "노무단가", "비고"]);
        
        let lIndex = 1;
        state.divisions.forEach(div => {
            div.items.forEach(item => {
                // Construct labor entries list
                let laborEntries = [];
                if (item.labors) {
                    Object.entries(item.labors).forEach(([type, factor]) => {
                        if (factor > 0) {
                            laborEntries.push({ type, factor });
                        }
                    });
                } else if (item.laborType && item.laborFactor > 0) {
                    laborEntries.push({ type: item.laborType, factor: item.laborFactor });
                }
                
                laborEntries.forEach(entry => {
                    const rowNum = shLabor.rowCount + 1; // Row number in shLabor sheet
                    
                    let wageCell = "옵션!$B$12";
                    if (entry.type === "통신설비공") wageCell = "옵션!$B$13";
                    else if (entry.type === "특별인부") wageCell = "옵션!$B$14";
                    else if (entry.type === "통신외선공") wageCell = "옵션!$B$18";
                    else if (entry.type === "통신케이블공") wageCell = "옵션!$B$19";
                    else if (entry.type === "보통인부") wageCell = "옵션!$B$20";
                    else if (entry.type === "광케이블설치사") wageCell = "옵션!$B$21";
                    
                    const multiplier = item.laborMultiplier !== undefined ? item.laborMultiplier : 1.0;
                    const extra1Mult = item.laborExtra1Mult !== undefined ? item.laborExtra1Mult : 1.0;
                    const extra2Mult = item.laborExtra2Mult !== undefined ? item.laborExtra2Mult : 1.0;
                    
                    shLabor.addRow([
                        lIndex++,
                        div.name.replace(/^\d+\.\s*/, ""),
                        item.name,
                        item.spec,
                        item.unit,
                        entry.type,
                        entry.factor,
                        multiplier,
                        extra1Mult,
                        extra2Mult,
                        { formula: "G" + rowNum + "*H" + rowNum + "*I" + rowNum + "*J" + rowNum },
                        { formula: wageCell },
                        { formula: "TRUNC(K" + rowNum + "*L" + rowNum + ", 0)" },
                        item.laborRemark || ""
                    ]);
                });
            });
        });
        
        styleHeaderRow(shLabor.getRow(1), "돋움체");
        shLabor.getColumn(1).width = 6;
        shLabor.getColumn(2).width = 15;
        shLabor.getColumn(3).width = 22;
        shLabor.getColumn(4).width = 22;
        shLabor.getColumn(5).width = 8;
        shLabor.getColumn(6).width = 12;
        shLabor.getColumn(7).width = 10;
        shLabor.getColumn(8).width = 10;
        shLabor.getColumn(9).width = 12;
        shLabor.getColumn(10).width = 12;
        shLabor.getColumn(11).width = 10;
        shLabor.getColumn(12).width = 14;
        shLabor.getColumn(13).width = 14;
        shLabor.getColumn(14).width = 12;
        
        shLabor.getColumn(7).numFmt = "0.0000";
        shLabor.getColumn(8).numFmt = "0.0%";
        shLabor.getColumn(9).numFmt = "0.0%";
        shLabor.getColumn(10).numFmt = "0.0%";
        shLabor.getColumn(11).numFmt = "0.0000";
        shLabor.getColumn(12).numFmt = "#,##0";
        shLabor.getColumn(13).numFmt = "#,##0";
        
        const laborRowCount = shLabor.rowCount;
        for (let r = 2; r <= laborRowCount; r++) {
            const row = shLabor.getRow(r);
            row.eachCell({ includeEmpty: true }, (cell, colNum) => {
                cell.font = { name: "돋움체", size: 10 };
                cell.border = thinBorder;
                
                if (colNum === 1 || colNum === 2 || colNum === 5 || colNum === 6) {
                    cell.alignment = { horizontal: 'center', vertical: 'middle' };
                } else if (colNum === 3 || colNum === 4 || colNum === 14) {
                    cell.alignment = { horizontal: 'left', vertical: 'middle' };
                } else {
                    cell.alignment = { horizontal: 'right', vertical: 'middle' };
                }
            });
        }
        
        // ----------------------------------------------------
        // 7. OPTION SHEET (옵션)
        // ----------------------------------------------------
        const shOpt = workbook.addWorksheet("옵션");
        shOpt.views = [{ showGridLines: true }];
        shOpt.pageSetup = {
            paperSize: 9, // A4
            orientation: 'portrait',
            fitToPage: true,
            fitToWidth: 1,
            fitToHeight: 1
        };
        
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
        
        const wages = WAGE_RATES[state.wageStandard];
        shOpt.getCell("A12").value = "통신내선공 단가"; shOpt.getCell("B12").value = wages["통신내선공"];
        shOpt.getCell("A13").value = "통신설비공 단가"; shOpt.getCell("B13").value = wages["통신설비공"];
        shOpt.getCell("A14").value = "특별인부 단가"; shOpt.getCell("B14").value = wages["특별인부"];
        shOpt.getCell("A18").value = "통신외선공 단가"; shOpt.getCell("B18").value = wages["통신외선공"];
        shOpt.getCell("A19").value = "통신케이블공 단가"; shOpt.getCell("B19").value = wages["통신케이블공"];
        shOpt.getCell("A20").value = "보통인부 단가"; shOpt.getCell("B20").value = wages["보통인부"];
        shOpt.getCell("A21").value = "광케이블설치사 단가"; shOpt.getCell("B21").value = wages["광케이블설치사"];
        
        shOpt.getCell("A16").value = "공구손료"; shOpt.getCell("B16").value = 0.03;
        
        for (let r = 2; r <= 10; r++) {
            shOpt.getCell(`B${r}`).numFmt = "0.00%";
        }
        shOpt.getCell("B12").numFmt = "#,##0";
        shOpt.getCell("B13").numFmt = "#,##0";
        shOpt.getCell("B14").numFmt = "#,##0";
        shOpt.getCell("B16").numFmt = "0.0%";
        shOpt.getCell("B18").numFmt = "#,##0";
        shOpt.getCell("B19").numFmt = "#,##0";
        shOpt.getCell("B20").numFmt = "#,##0";
        shOpt.getCell("B21").numFmt = "#,##0";
        
        shOpt.getColumn(1).width = 25;
        shOpt.getColumn(2).width = 15;
        shOpt.getColumn(3).width = 10;
        
        styleHeaderRow(shOpt.getRow(1), "돋움체");
        
        const optRowCount = shOpt.rowCount;
        for (let r = 2; r <= optRowCount; r++) {
            const row = shOpt.getRow(r);
            row.eachCell({ includeEmpty: true }, (cell, colNum) => {
                cell.font = { name: "돋움체", size: 10 };
                cell.border = thinBorder;
                if (colNum === 1) {
                    cell.alignment = { horizontal: 'left', vertical: 'middle' };
                } else if (colNum === 2) {
                    cell.alignment = { horizontal: 'right', vertical: 'middle' };
                } else {
                    cell.alignment = { horizontal: 'center', vertical: 'middle' };
                }
            });
        }

        // ----------------------------------------------------
        // 8. COMMENTARY PREMIUM 1 SHEET (해설할증1)
        // ----------------------------------------------------
        const shExtra1 = workbook.addWorksheet("해설할증1");
        shExtra1.views = [{ showGridLines: true }];
        shExtra1.pageSetup = {
            paperSize: 9, // A4
            orientation: 'portrait',
            fitToPage: true,
            fitToWidth: 1,
            fitToHeight: 1
        };

        shExtra1.getCell("A1").value = "구분";
        shExtra1.getCell("B1").value = "할증률";

        const extra1Rows = [
            ["일반", 1.0],
            ["군작전", 1.2],
            ["도서지구", 1.15],
            ["터널/지하", 1.1],
            ["열차빈번", 1.15],
            ["송전선인근", 1.1]
        ];

        extra1Rows.forEach((rowVal, idx) => {
            const rowNum = idx + 2;
            shExtra1.getCell("A" + rowNum).value = rowVal[0];
            shExtra1.getCell("B" + rowNum).value = rowVal[1];
            shExtra1.getCell("B" + rowNum).numFmt = "0.0%";
        });

        shExtra1.getColumn(1).width = 25;
        shExtra1.getColumn(2).width = 15;
        styleHeaderRow(shExtra1.getRow(1), "돋움체");

        for (let r = 2; r <= 7; r++) {
            const row = shExtra1.getRow(r);
            row.eachCell({ includeEmpty: true }, (cell, colNum) => {
                cell.font = { name: "돋움체", size: 10 };
                cell.border = thinBorder;
                if (colNum === 1) {
                    cell.alignment = { horizontal: 'left', vertical: 'middle' };
                } else {
                    cell.alignment = { horizontal: 'right', vertical: 'middle' };
                }
            });
        }

        // ----------------------------------------------------
        // 9. COMMENTARY PREMIUM 2 SHEET (해설할증2)
        // ----------------------------------------------------
        const shExtra2 = workbook.addWorksheet("해설할증2");
        shExtra2.views = [{ showGridLines: true }];
        shExtra2.pageSetup = {
            paperSize: 9, // A4
            orientation: 'portrait',
            fitToPage: true,
            fitToWidth: 1,
            fitToHeight: 1
        };

        shExtra2.getCell("A1").value = "구분";
        shExtra2.getCell("B1").value = "할증률";

        const extra2Rows = [
            ["일반", 1.0],
            ["5m미만", 1.0],
            ["5~10m", 1.1],
            ["10~15m", 1.2],
            ["15~20m", 1.3],
            ["20~30m", 1.4],
            ["30m이상", 1.5]
        ];

        extra2Rows.forEach((rowVal, idx) => {
            const rowNum = idx + 2;
            shExtra2.getCell("A" + rowNum).value = rowVal[0];
            shExtra2.getCell("B" + rowNum).value = rowVal[1];
            shExtra2.getCell("B" + rowNum).numFmt = "0.0%";
        });

        shExtra2.getColumn(1).width = 25;
        shExtra2.getColumn(2).width = 15;
        styleHeaderRow(shExtra2.getRow(1), "돋움체");

        for (let r = 2; r <= 8; r++) {
            const row = shExtra2.getRow(r);
            row.eachCell({ includeEmpty: true }, (cell, colNum) => {
                cell.font = { name: "돋움체", size: 10 };
                cell.border = thinBorder;
                if (colNum === 1) {
                    cell.alignment = { horizontal: 'left', vertical: 'middle' };
                } else {
                    cell.alignment = { horizontal: 'right', vertical: 'middle' };
                }
            });
        }
        
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

function styleHeaderRow(row, fontName = "돋움체") {
    row.eachCell({ includeEmpty: true }, (cell) => {
        cell.font = { bold: true, color: { argb: 'FF000000' }, name: fontName, size: 11 };
        cell.fill = {
            type: 'pattern',
            pattern: 'solid',
            fgColor: { argb: 'FFF2F2F2' }
        };
        cell.alignment = { vertical: 'middle', horizontal: 'center' };
        cell.border = {
            top: { style: 'thin', color: { argb: 'FFBFBFBF' } },
            bottom: { style: 'thin', color: { argb: 'FFBFBFBF' } },
            left: { style: 'thin', color: { argb: 'FFBFBFBF' } },
            right: { style: 'thin', color: { argb: 'FFBFBFBF' } }
        };
    });
}// 7. Modals helper
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
                if (!state.standardLaborDb) {
                    state.standardLaborDb = JSON.parse(JSON.stringify(STANDARD_LABOR_DB));
                }
                
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
                const isImportedOldFlatSchema = state.standardLaborDb && state.standardLaborDb.some(item => !item.labors && (item.laborType || item.laborFactor));
                const isImportedMissingPage = state.standardLaborDb && !state.standardLaborDb.some(item => item.page);
                if (!state.standardLaborDb || state.standardLaborDb.length < 1000 || isImportedOldFlatSchema || isImportedMissingPage) {
                    state.standardLaborDb = JSON.parse(JSON.stringify(STANDARD_LABOR_DB));
                }
                
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
                if (typeof renderMasterDbTable === "function") {
                    renderMasterDbTable();
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

// 10. 표준품셈 DB 관리자 기능 (CRUD)
// ----------------------------------------------------

function renderMasterDbTable() {
    const tbody = document.getElementById("master-db-table-body");
    if (!tbody) return;
    tbody.innerHTML = "";

    const query = (document.getElementById("input-master-db-search")?.value || "").toLowerCase().trim();
    const category = document.getElementById("select-master-db-category")?.value || "all";

    // state.standardLaborDb에서 필터링
    const filtered = state.standardLaborDb.filter(dbItem => {
        // 카테고리 필터
        if (category !== "all" && dbItem.category !== category) return false;

        // 검색 필터
        if (query) {
            const nameMatch = dbItem.name.toLowerCase().includes(query);
            const specMatch = dbItem.spec ? dbItem.spec.toLowerCase().includes(query) : false;
            const codeMatch = dbItem.code.toLowerCase().includes(query);
            const typeMatch = dbItem.laborType ? dbItem.laborType.toLowerCase().includes(query) :
                (dbItem.labors ? Object.keys(dbItem.labors).some(k => k.toLowerCase().includes(query)) : false);
            const kwMatch = dbItem.keywords ? dbItem.keywords.some(kw => kw.toLowerCase().includes(query)) : false;
            return nameMatch || specMatch || codeMatch || typeMatch || kwMatch;
        }
        return true;
    });

    // 검색 결과 개수 갱신
    const countEl = document.getElementById("lbl-master-db-count");
    if (countEl) countEl.textContent = filtered.length;

    if (filtered.length === 0) {
        tbody.innerHTML = `<tr><td colspan="8" style="text-align: center; color: var(--text-muted); padding: 40px 0;">검색 조건에 맞는 표준품셈 항목이 없습니다.</td></tr>`;
        return;
    }

    filtered.forEach((dbItem) => {
        // 원본 배열에서의 index 검색
        const originalIndex = state.standardLaborDb.findIndex(item => 
            item.code === dbItem.code && 
            item.name === dbItem.name && 
            (item.spec === dbItem.spec || (!item.spec && !dbItem.spec)) && 
            (item.unit === dbItem.unit || (!item.unit && !dbItem.unit))
        );

        let laborTypesStr = "";
        let laborFactorsStr = "";
        if (dbItem.labors) {
            laborTypesStr = Object.keys(dbItem.labors).map(type => 
                `<span style="background: rgba(79, 70, 229, 0.15); color: var(--primary-light); padding: 3px 8px; border-radius: 4px; font-size: 11px; margin-right: 4px; display: inline-block;">${type}</span>`
            ).join("");
            laborFactorsStr = Object.values(dbItem.labors).map(f => f.toFixed(4)).join("<br>");
        } else {
            laborTypesStr = `<span style="background: rgba(79, 70, 229, 0.15); color: var(--primary-light); padding: 3px 8px; border-radius: 4px; font-size: 11px;">${dbItem.laborType || "-"}</span>`;
            laborFactorsStr = dbItem.laborFactor ? dbItem.laborFactor.toFixed(4) : "-";
        }

        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td style="text-align: left; font-weight: 500; font-family: monospace; color: var(--text-primary);">${dbItem.code}</td>
            <td style="text-align: left; color: var(--text-primary); font-weight: 500;">${dbItem.name}</td>
            <td style="text-align: left; color: var(--text-secondary);">${dbItem.spec || "표준 규격"}</td>
            <td style="text-align: center; color: var(--text-secondary);">${dbItem.unit || "개"}</td>
            <td style="text-align: left; color: var(--text-primary); font-weight: 500; padding: 8px;">
                ${laborTypesStr}
            </td>
            <td style="text-align: right; font-weight: 600; color: var(--accent); padding: 8px; line-height: 1.5;">
                ${laborFactorsStr}
            </td>
            <td style="text-align: center;">
                <span class="category-tag category-${dbItem.category}" style="font-size: 11px; padding: 2px 6px; border-radius: 4px; background: rgba(255,255,255,0.05);">
                    ${dbItem.category === 'device' ? '기기/인출' : dbItem.category === 'cable' ? '케이블/배선' : dbItem.category === 'pipe' ? '관로/배관' : dbItem.category === 'labor' ? '노무/토공' : dbItem.category}
                </span>
            </td>
            <td style="text-align: center;">
                <div style="display: flex; gap: 6px; justify-content: center;">
                    <button class="btn btn-outline" style="padding: 4px 8px; font-size: 11px; height: 26px;" onclick="window.openEditDbItemModal(${originalIndex})">
                        <i class="fa-solid fa-pen-to-square"></i>
                    </button>
                    <button class="btn btn-danger-outline" style="padding: 4px 8px; font-size: 11px; height: 26px;" onclick="window.deleteDbItem(${originalIndex})">
                        <i class="fa-solid fa-trash"></i>
                    </button>
                </div>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

function openEditDbItemModal(index) {
    const isEdit = index !== undefined && index >= 0;
    
    const titleEl = document.getElementById("lbl-modal-db-item-title");
    const indexInput = document.getElementById("input-modal-db-item-index");
    const codeInput = document.getElementById("input-modal-db-item-code");
    const categorySelect = document.getElementById("select-modal-db-item-category");
    const nameInput = document.getElementById("input-modal-db-item-name");
    const specInput = document.getElementById("input-modal-db-item-spec");
    const unitInput = document.getElementById("input-modal-db-item-unit");
    const typeSelect = document.getElementById("select-modal-db-item-type");
    const factorInput = document.getElementById("input-modal-db-item-factor");
    const keywordsInput = document.getElementById("input-modal-db-item-keywords");

    if (isEdit) {
        const item = state.standardLaborDb[index];
        if (titleEl) titleEl.innerHTML = `<i class="fa-solid fa-database text-primary" style="margin-right: 8px;"></i> 표준품셈 항목 편집`;
        if (indexInput) indexInput.value = index;
        if (codeInput) codeInput.value = item.code;
        if (categorySelect) categorySelect.value = item.category || "device";
        if (nameInput) nameInput.value = item.name;
        if (specInput) specInput.value = item.spec || "표준 규격";
        if (unitInput) unitInput.value = item.unit || "개";
        
        let initialLaborType = item.laborType;
        let initialLaborFactor = item.laborFactor;
        if (item.labors && Object.keys(item.labors).length > 0) {
            initialLaborType = Object.keys(item.labors)[0];
            initialLaborFactor = Object.values(item.labors)[0];
        }
        
        if (typeSelect) typeSelect.value = initialLaborType || "통신내선공";
        if (factorInput) factorInput.value = initialLaborFactor !== undefined ? initialLaborFactor : "0";
        if (keywordsInput) keywordsInput.value = item.keywords ? item.keywords.join(", ") : "";
    } else {
        if (titleEl) titleEl.innerHTML = `<i class="fa-solid fa-database text-primary" style="margin-right: 8px;"></i> 신규 표준품셈 항목 추가`;
        if (indexInput) indexInput.value = "-1";
        if (codeInput) codeInput.value = "";
        if (categorySelect) categorySelect.value = "device";
        if (nameInput) nameInput.value = "";
        if (specInput) specInput.value = "표준 규격";
        if (unitInput) unitInput.value = "개";
        if (typeSelect) typeSelect.value = "통신내선공";
        if (factorInput) factorInput.value = "0.1";
        if (keywordsInput) keywordsInput.value = "";
    }

    openModal("modal-edit-master-db-item");
}

function confirmEditDbItem() {
    const indexVal = document.getElementById("input-modal-db-item-index")?.value;
    const index = parseInt(indexVal);
    
    const code = document.getElementById("input-modal-db-item-code")?.value.trim();
    const category = document.getElementById("select-modal-db-item-category")?.value;
    const name = document.getElementById("input-modal-db-item-name")?.value.trim();
    const spec = document.getElementById("input-modal-db-item-spec")?.value.trim();
    const unit = document.getElementById("input-modal-db-item-unit")?.value.trim();
    const laborType = document.getElementById("select-modal-db-item-type")?.value;
    const factorVal = document.getElementById("input-modal-db-item-factor")?.value;
    const factor = parseFloat(factorVal);
    const keywordsVal = document.getElementById("input-modal-db-item-keywords")?.value || "";
    const keywords = keywordsVal.split(",").map(k => k.trim()).filter(k => k.length > 0);

    if (!code || !name || isNaN(factor) || factor < 0) {
        showToast("필수 입력값을 올바르게 입력해주세요 (품셈 코드, 품명, 기본품셈).", "warning");
        return;
    }

    const itemData = {
        code,
        name,
        spec: spec || "표준 규격",
        unit: unit || "개",
        laborType,
        laborFactor: factor,
        category,
        keywords: keywords.length > 0 ? keywords : [name]
    };

    if (index >= 0) {
        // 기존 항목 편집
        const originalItem = state.standardLaborDb[index];
        if (originalItem.labors) {
            const updatedLabors = JSON.parse(JSON.stringify(originalItem.labors));
            const oldType = originalItem.laborType || Object.keys(originalItem.labors)[0];
            if (oldType && oldType !== laborType) {
                delete updatedLabors[oldType];
            }
            updatedLabors[laborType] = factor;
            itemData.labors = updatedLabors;
            delete itemData.laborType;
            delete itemData.laborFactor;
        }
        state.standardLaborDb[index] = itemData;
        showToast("표준품셈 항목이 성공적으로 수정되었습니다.", "success");
    } else {
        // 신규 항목 추가
        state.standardLaborDb.push(itemData);
        showToast("신규 표준품셈 항목이 추가되었습니다.", "success");
    }

    closeModal("modal-edit-master-db-item");
    saveToLocalStorage();
    renderMasterDbTable();
}

function deleteDbItem(index) {
    if (index === undefined || index < 0 || index >= state.standardLaborDb.length) return;
    const item = state.standardLaborDb[index];
    
    if (confirm(`품셈 [${item.code}] ${item.name} 항목을 삭제하시겠습니까?`)) {
        state.standardLaborDb.splice(index, 1);
        showToast("품셈 항목이 삭제되었습니다.", "success");
        saveToLocalStorage();
        renderMasterDbTable();
    }
}

function initMasterDbListeners() {
    const btnAdd = document.getElementById("btn-add-db-item");
    if (btnAdd) {
        btnAdd.onclick = () => {
            openEditDbItemModal();
        };
    }

    const searchInput = document.getElementById("input-master-db-search");
    if (searchInput) {
        searchInput.oninput = () => {
            renderMasterDbTable();
        };
    }

    const categorySelect = document.getElementById("select-master-db-category");
    if (categorySelect) {
        categorySelect.onchange = () => {
            renderMasterDbTable();
        };
    }

    const btnConfirm = document.getElementById("btn-confirm-edit-db-item");
    if (btnConfirm) {
        btnConfirm.onclick = () => {
            confirmEditDbItem();
        };
    }
}

// Global binding for ES modules inline actions
window.openEditDbItemModal = openEditDbItemModal;
window.deleteDbItem = deleteDbItem;
window.renderMasterDbTable = renderMasterDbTable;

// PDF Viewer Helpers
function viewLaborRefPdf(laborRefCode) {
    if (!laborRefCode) return;
    
    const dbItem = state.standardLaborDb.find(d => d.code === laborRefCode);
    if (!dbItem || !dbItem.page) {
        showToast(`"${laborRefCode}"의 페이지 정보가 데이터베이스에 없습니다.`, "warning");
        return;
    }
    
    viewLaborRefPdfByPage(laborRefCode, dbItem.page);
}

function viewLaborRefPdfByPage(code, pageNum) {
    if (!pageNum) return;
    
    document.getElementById("lbl-pdf-ref-code").textContent = code;
    document.getElementById("lbl-pdf-page-num").textContent = `PDF ${pageNum}페이지`;
    
    const container = document.getElementById("pdf-viewer-container");
    container.innerHTML = `
        <iframe src="Source/DB_Source_T.pdf#page=${pageNum}" width="100%" height="100%" style="border: none;"></iframe>
    `;
    
    openModal("modal-view-pdf");
}

window.viewLaborRefPdf = viewLaborRefPdf;
window.viewLaborRefPdfByPage = viewLaborRefPdfByPage;
