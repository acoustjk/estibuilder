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
    {
        "code": "통신 1-1-21",
        "name": "애자류톤 〃 0.21",
        "spec": "인력운반 및 적상․하 기준",
        "unit": "개",
        "labors": {
            "보통인부": 0.15
        },
        "category": "labor",
        "page": 41,
        "keywords": [
            "애자류톤 〃 0.21",
            "인력운반 및 적상․하 기준"
        ]
    },
    {
        "code": "통신 1-1-21",
        "name": "철재류 〃 0.21",
        "spec": "인력운반 및 적상․하 기준",
        "unit": "개",
        "labors": {
            "보통인부": 0.12
        },
        "category": "labor",
        "page": 41,
        "keywords": [
            "철재류 〃 0.21",
            "인력운반 및 적상․하 기준"
        ]
    },
    {
        "code": "통신 1-1-21",
        "name": "전선류 〃 0.21",
        "spec": "인력운반 및 적상․하 기준",
        "unit": "개",
        "labors": {
            "보통인부": 0.31
        },
        "category": "labor",
        "page": 41,
        "keywords": [
            "전선류 〃 0.21",
            "인력운반 및 적상․하 기준"
        ]
    },
    {
        "code": "통신 1-1-21",
        "name": "시멘트 〃 0.21",
        "spec": "인력운반 및 적상․하 기준",
        "unit": "개",
        "labors": {
            "보통인부": 0.13
        },
        "category": "labor",
        "page": 41,
        "keywords": [
            "시멘트 〃 0.21",
            "인력운반 및 적상․하 기준"
        ]
    },
    {
        "code": "통신 1-1-22",
        "name": "토사류․석재류 83 57 35 15 5 117 83 57 17",
        "spec": "경운기 운반 및 적상․하 시간 기준",
        "unit": "개",
        "labors": {
            "보통인부": 5.0
        },
        "category": "labor",
        "page": 43,
        "keywords": [
            "토사류․석재류 83 57 35 15 5 117 83 57 17",
            "경운기 운반 및 적상․하 시간 기준"
        ]
    },
    {
        "code": "통신 1-1-22",
        "name": "애자류 69 52 31 15 5 117 83 57 17",
        "spec": "경운기 운반 및 적상․하 시간 기준",
        "unit": "개",
        "labors": {
            "보통인부": 5.0
        },
        "category": "labor",
        "page": 43,
        "keywords": [
            "애자류 69 52 31 15 5 117 83 57 17",
            "경운기 운반 및 적상․하 시간 기준"
        ]
    },
    {
        "code": "통신 1-1-22",
        "name": "철재류․금속부속품 77 54 32 15 5 117 83 57 17",
        "spec": "경운기 운반 및 적상․하 시간 기준",
        "unit": "개",
        "labors": {
            "보통인부": 5.0
        },
        "category": "labor",
        "page": 43,
        "keywords": [
            "철재류․금속부속품 77 54 32 15 5 117 83 57 17",
            "경운기 운반 및 적상․하 시간 기준"
        ]
    },
    {
        "code": "통신 1-1-22",
        "name": "시멘트류 76 55 31 15 5 117 83 57 17",
        "spec": "경운기 운반 및 적상․하 시간 기준",
        "unit": "개",
        "labors": {
            "보통인부": 5.0
        },
        "category": "labor",
        "page": 43,
        "keywords": [
            "시멘트류 76 55 31 15 5 117 83 57 17",
            "경운기 운반 및 적상․하 시간 기준"
        ]
    },
    {
        "code": "통신 1-1-22",
        "name": "토사류톤 2인 12 10",
        "spec": "경운기 운반 및 적상․하 시간 기준",
        "unit": "개",
        "labors": {
            "보통인부": 0.092
        },
        "category": "labor",
        "page": 43,
        "keywords": [
            "토사류톤 2인 12 10",
            "경운기 운반 및 적상․하 시간 기준"
        ]
    },
    {
        "code": "통신 1-1-22",
        "name": "석재류톤 2인 15 11",
        "spec": "경운기 운반 및 적상․하 시간 기준",
        "unit": "개",
        "labors": {
            "보통인부": 0.108
        },
        "category": "labor",
        "page": 43,
        "keywords": [
            "석재류톤 2인 15 11",
            "경운기 운반 및 적상․하 시간 기준"
        ]
    },
    {
        "code": "통신 1-1-22",
        "name": "애자류톤 6인 13 9",
        "spec": "경운기 운반 및 적상․하 시간 기준",
        "unit": "개",
        "labors": {
            "보통인부": 0.31
        },
        "category": "labor",
        "page": 43,
        "keywords": [
            "애자류톤 6인 13 9",
            "경운기 운반 및 적상․하 시간 기준"
        ]
    },
    {
        "code": "통신 1-1-22",
        "name": "철재 및 금속부속품 톤 6인 12 8",
        "spec": "경운기 운반 및 적상․하 시간 기준",
        "unit": "개",
        "labors": {
            "보통인부": 0.25
        },
        "category": "labor",
        "page": 43,
        "keywords": [
            "철재 및 금속부속품 톤 6인 12 8",
            "경운기 운반 및 적상․하 시간 기준"
        ]
    },
    {
        "code": "통신 1-1-22",
        "name": "시멘트류톤 6인 15 10",
        "spec": "경운기 운반 및 적상․하 시간 기준",
        "unit": "개",
        "labors": {
            "보통인부": 0.31
        },
        "category": "labor",
        "page": 43,
        "keywords": [
            "시멘트류톤 6인 15 10",
            "경운기 운반 및 적상․하 시간 기준"
        ]
    },
    {
        "code": "통신 1-1-27-1",
        "name": "교통콘(라바콘)",
        "spec": "안전시설",
        "unit": "100m",
        "labors": {
            "보통인부": 0.15
        },
        "category": "labor",
        "page": 46,
        "keywords": [
            "교통콘(라바콘)",
            "안전시설"
        ]
    },
    {
        "code": "통신 1-1-27-1",
        "name": "표지판",
        "spec": "안전시설",
        "unit": "개소",
        "labors": {
            "보통인부": 0.05
        },
        "category": "labor",
        "page": 46,
        "keywords": [
            "표지판",
            "안전시설"
        ]
    },
    {
        "code": "통신 1-1-27-1",
        "name": "경광등",
        "spec": "안전시설",
        "unit": "개소",
        "labors": {
            "보통인부": 0.15
        },
        "category": "labor",
        "page": 46,
        "keywords": [
            "경광등",
            "안전시설"
        ]
    },
    {
        "code": "통신 1-1-27-1",
        "name": "안전유도로봇",
        "spec": "안전시설",
        "unit": "개소",
        "labors": {
            "보통인부": 0.15
        },
        "category": "labor",
        "page": 46,
        "keywords": [
            "안전유도로봇",
            "안전시설"
        ]
    },
    {
        "code": "통신 1-1-27-1",
        "name": "신호수",
        "spec": "안전시설",
        "unit": "개소",
        "labors": {
            "교통정리원": 1.0
        },
        "category": "labor",
        "page": 46,
        "keywords": [
            "신호수",
            "안전시설"
        ]
    },
    {
        "code": "통신 1-4-5",
        "name": "3 3.9 31 1.00",
        "spec": "운전경비 산정",
        "unit": "개",
        "labors": {
            "보통인부": 1.0
        },
        "category": "labor",
        "page": 68,
        "keywords": [
            "3 3.9 31 1.00",
            "운전경비 산정"
        ]
    },
    {
        "code": "통신 1-4-5",
        "name": "10 3.8 39 1.00",
        "spec": "운전경비 산정",
        "unit": "개",
        "labors": {
            "보통인부": 1.0
        },
        "category": "labor",
        "page": 68,
        "keywords": [
            "10 3.8 39 1.00",
            "운전경비 산정"
        ]
    },
    {
        "code": "통신 1-4-5",
        "name": "15 4.7 39 1.00",
        "spec": "운전경비 산정",
        "unit": "개",
        "labors": {
            "보통인부": 1.0
        },
        "category": "labor",
        "page": 68,
        "keywords": [
            "15 4.7 39 1.00",
            "운전경비 산정"
        ]
    },
    {
        "code": "통신 1-4-5",
        "name": "20 5.4 39 1.00",
        "spec": "운전경비 산정",
        "unit": "개",
        "labors": {
            "보통인부": 1.0
        },
        "category": "labor",
        "page": 68,
        "keywords": [
            "20 5.4 39 1.00",
            "운전경비 산정"
        ]
    },
    {
        "code": "통신 1-4-5",
        "name": "25 6.1 39 1.00",
        "spec": "운전경비 산정",
        "unit": "개",
        "labors": {
            "보통인부": 1.0
        },
        "category": "labor",
        "page": 68,
        "keywords": [
            "25 6.1 39 1.00",
            "운전경비 산정"
        ]
    },
    {
        "code": "통신 1-4-5",
        "name": "크레인 30 7.7 39 1.00",
        "spec": "운전경비 산정",
        "unit": "개",
        "labors": {
            "보통인부": 1.0
        },
        "category": "labor",
        "page": 68,
        "keywords": [
            "크레인 30 7.7 39 1.00",
            "운전경비 산정"
        ]
    },
    {
        "code": "통신 1-4-5",
        "name": "(타이어 )(톤) 35 7.7 39 1.00",
        "spec": "운전경비 산정",
        "unit": "개",
        "labors": {
            "보통인부": 1.0
        },
        "category": "labor",
        "page": 68,
        "keywords": [
            "(타이어 )(톤) 35 7.7 39 1.00",
            "운전경비 산정"
        ]
    },
    {
        "code": "통신 1-4-5",
        "name": "40 8.5 57 1.00",
        "spec": "운전경비 산정",
        "unit": "개",
        "labors": {
            "보통인부": 1.0
        },
        "category": "labor",
        "page": 68,
        "keywords": [
            "40 8.5 57 1.00",
            "운전경비 산정"
        ]
    },
    {
        "code": "통신 1-4-5",
        "name": "(오거장착 별도 ) 45 10.0 57 1.00",
        "spec": "운전경비 산정",
        "unit": "개",
        "labors": {
            "보통인부": 1.0
        },
        "category": "labor",
        "page": 68,
        "keywords": [
            "(오거장착 별도 ) 45 10.0 57 1.00",
            "운전경비 산정"
        ]
    },
    {
        "code": "통신 1-4-5",
        "name": "50 10.0 57 1.00",
        "spec": "운전경비 산정",
        "unit": "개",
        "labors": {
            "보통인부": 1.0
        },
        "category": "labor",
        "page": 68,
        "keywords": [
            "50 10.0 57 1.00",
            "운전경비 산정"
        ]
    },
    {
        "code": "통신 1-4-5",
        "name": "60 10.6 57 1.00",
        "spec": "운전경비 산정",
        "unit": "개",
        "labors": {
            "보통인부": 1.0
        },
        "category": "labor",
        "page": 68,
        "keywords": [
            "60 10.6 57 1.00",
            "운전경비 산정"
        ]
    },
    {
        "code": "통신 1-4-5",
        "name": "70 12.3 57 1.00",
        "spec": "운전경비 산정",
        "unit": "개",
        "labors": {
            "보통인부": 1.0
        },
        "category": "labor",
        "page": 68,
        "keywords": [
            "70 12.3 57 1.00",
            "운전경비 산정"
        ]
    },
    {
        "code": "통신 1-4-5",
        "name": "80 12.3 57 1.00",
        "spec": "운전경비 산정",
        "unit": "개",
        "labors": {
            "보통인부": 1.0
        },
        "category": "labor",
        "page": 68,
        "keywords": [
            "80 12.3 57 1.00",
            "운전경비 산정"
        ]
    },
    {
        "code": "통신 1-4-5",
        "name": "100 15.9 57 1.00",
        "spec": "운전경비 산정",
        "unit": "개",
        "labors": {
            "보통인부": 1.0
        },
        "category": "labor",
        "page": 68,
        "keywords": [
            "100 15.9 57 1.00",
            "운전경비 산정"
        ]
    },
    {
        "code": "통신 1-4-5",
        "name": "고소작업차 (톤) 1.2 2.9 35 1.00",
        "spec": "운전경비 산정",
        "unit": "개",
        "labors": {
            "보통인부": 1.0
        },
        "category": "labor",
        "page": 68,
        "keywords": [
            "고소작업차 (톤) 1.2 2.9 35 1.00",
            "운전경비 산정"
        ]
    },
    {
        "code": "통신 1-4-5",
        "name": "5 5.1 20 1.00",
        "spec": "운전경비 산정",
        "unit": "개",
        "labors": {
            "보통인부": 1.0
        },
        "category": "labor",
        "page": 68,
        "keywords": [
            "5 5.1 20 1.00",
            "운전경비 산정"
        ]
    },
    {
        "code": "통신 1-4-5",
        "name": "1.87kW 0.5",
        "spec": "운전경비 산정",
        "unit": "개",
        "labors": {
            "보통인부": 20.0
        },
        "category": "labor",
        "page": 68,
        "keywords": [
            "1.87kW 0.5",
            "운전경비 산정"
        ]
    },
    {
        "code": "통신 1-4-5",
        "name": "2.24kW 0.6",
        "spec": "운전경비 산정",
        "unit": "개",
        "labors": {
            "보통인부": 20.0
        },
        "category": "labor",
        "page": 68,
        "keywords": [
            "2.24kW 0.6",
            "운전경비 산정"
        ]
    },
    {
        "code": "통신 1-4-5",
        "name": "3.36kW 0.9",
        "spec": "운전경비 산정",
        "unit": "개",
        "labors": {
            "보통인부": 20.0
        },
        "category": "labor",
        "page": 68,
        "keywords": [
            "3.36kW 0.9",
            "운전경비 산정"
        ]
    },
    {
        "code": "통신 1-4-5",
        "name": "5.22kW 1.4",
        "spec": "운전경비 산정",
        "unit": "개",
        "labors": {
            "보통인부": 20.0
        },
        "category": "labor",
        "page": 68,
        "keywords": [
            "5.22kW 1.4",
            "운전경비 산정"
        ]
    },
    {
        "code": "통신 1-4-5",
        "name": "8.95kW 2.4",
        "spec": "운전경비 산정",
        "unit": "개",
        "labors": {
            "보통인부": 20.0
        },
        "category": "labor",
        "page": 68,
        "keywords": [
            "8.95kW 2.4",
            "운전경비 산정"
        ]
    },
    {
        "code": "통신 1-4-5",
        "name": "0.12㎥ 3.2 21",
        "spec": "운전경비 산정",
        "unit": "개",
        "labors": {
            "보통인부": 1.0
        },
        "category": "labor",
        "page": 68,
        "keywords": [
            "0.12㎥ 3.2 21",
            "운전경비 산정"
        ]
    },
    {
        "code": "통신 1-4-5",
        "name": "0.2㎥ 5.0 21",
        "spec": "운전경비 산정",
        "unit": "개",
        "labors": {
            "보통인부": 1.0
        },
        "category": "labor",
        "page": 68,
        "keywords": [
            "0.2㎥ 5.0 21",
            "운전경비 산정"
        ]
    },
    {
        "code": "통신 1-4-5",
        "name": "굴삭기 0.4㎥ 9.9 22",
        "spec": "운전경비 산정",
        "unit": "개",
        "labors": {
            "보통인부": 1.0
        },
        "category": "labor",
        "page": 68,
        "keywords": [
            "굴삭기 0.4㎥ 9.9 22",
            "운전경비 산정"
        ]
    },
    {
        "code": "통신 1-4-5",
        "name": "0.7㎥ 11.6 22",
        "spec": "운전경비 산정",
        "unit": "개",
        "labors": {
            "보통인부": 1.0
        },
        "category": "labor",
        "page": 68,
        "keywords": [
            "0.7㎥ 11.6 22",
            "운전경비 산정"
        ]
    },
    {
        "code": "통신 1-4-5",
        "name": "0.8㎥ 15.3 22",
        "spec": "운전경비 산정",
        "unit": "개",
        "labors": {
            "보통인부": 1.0
        },
        "category": "labor",
        "page": 68,
        "keywords": [
            "0.8㎥ 15.3 22",
            "운전경비 산정"
        ]
    },
    {
        "code": "통신 1-4-5",
        "name": "1.0㎥ 19.5 22",
        "spec": "운전경비 산정",
        "unit": "개",
        "labors": {
            "보통인부": 1.0
        },
        "category": "labor",
        "page": 68,
        "keywords": [
            "1.0㎥ 19.5 22",
            "운전경비 산정"
        ]
    },
    {
        "code": "통신 1-4-5",
        "name": "0.18㎥ 5.6 24",
        "spec": "운전경비 산정",
        "unit": "개",
        "labors": {
            "보통인부": 1.0
        },
        "category": "labor",
        "page": 68,
        "keywords": [
            "0.18㎥ 5.6 24",
            "운전경비 산정"
        ]
    },
    {
        "code": "통신 1-4-5",
        "name": "(타이어 ) 0.8㎥ 16.3 24",
        "spec": "운전경비 산정",
        "unit": "개",
        "labors": {
            "보통인부": 1.0
        },
        "category": "labor",
        "page": 68,
        "keywords": [
            "(타이어 ) 0.8㎥ 16.3 24",
            "운전경비 산정"
        ]
    },
    {
        "code": "통신 1-4-5",
        "name": "1.0㎥ 20.5 24",
        "spec": "운전경비 산정",
        "unit": "개",
        "labors": {
            "보통인부": 1.0
        },
        "category": "labor",
        "page": 68,
        "keywords": [
            "1.0㎥ 20.5 24",
            "운전경비 산정"
        ]
    },
    {
        "code": "통신 1-4-5",
        "name": "2-1 관로 ·································································································································",
        "spec": "운전경비 산정",
        "unit": "개",
        "labors": {
            "보통인부": 43.0
        },
        "category": "labor",
        "page": 68,
        "keywords": [
            "2-1 관로 ·································································································································",
            "운전경비 산정"
        ]
    },
    {
        "code": "통신 2-1-1",
        "name": "Ø 30㎜ 이하",
        "spec": "PVC관",
        "unit": "본(6m)",
        "labors": {
            "통신외선공": 0.06,
            "보통인부": 0.17
        },
        "category": "pipe",
        "page": 73,
        "keywords": [
            "Ø 30㎜ 이하",
            "PVC관"
        ]
    },
    {
        "code": "통신 2-1-1",
        "name": "Ø 50㎜ 이하",
        "spec": "PVC관",
        "unit": "본(6m)",
        "labors": {
            "통신외선공": 0.07,
            "보통인부": 0.18
        },
        "category": "pipe",
        "page": 73,
        "keywords": [
            "Ø 50㎜ 이하",
            "PVC관"
        ]
    },
    {
        "code": "통신 2-1-1",
        "name": "Ø 80㎜ 이하",
        "spec": "PVC관",
        "unit": "본(6m)",
        "labors": {
            "통신외선공": 0.08,
            "보통인부": 0.22
        },
        "category": "pipe",
        "page": 73,
        "keywords": [
            "Ø 80㎜ 이하",
            "PVC관"
        ]
    },
    {
        "code": "통신 2-1-1",
        "name": "Ø 100㎜ 이하",
        "spec": "PVC관",
        "unit": "본(6m)",
        "labors": {
            "통신외선공": 0.1,
            "보통인부": 0.26
        },
        "category": "pipe",
        "page": 73,
        "keywords": [
            "Ø 100㎜ 이하",
            "PVC관"
        ]
    },
    {
        "code": "통신 2-1-1",
        "name": "Ø 150㎜ 이하",
        "spec": "PVC관",
        "unit": "본(6m)",
        "labors": {
            "통신외선공": 0.12,
            "보통인부": 0.32
        },
        "category": "pipe",
        "page": 73,
        "keywords": [
            "Ø 150㎜ 이하",
            "PVC관"
        ]
    },
    {
        "code": "통신 2-1-1",
        "name": "Ø 200㎜ 이하",
        "spec": "PVC관",
        "unit": "본(6m)",
        "labors": {
            "통신외선공": 0.14,
            "보통인부": 0.38
        },
        "category": "pipe",
        "page": 73,
        "keywords": [
            "Ø 200㎜ 이하",
            "PVC관"
        ]
    },
    {
        "code": "통신 2-1-1",
        "name": "Ø 250㎜ 이하",
        "spec": "PVC관",
        "unit": "본(6m)",
        "labors": {
            "통신외선공": 0.19,
            "보통인부": 0.51
        },
        "category": "pipe",
        "page": 73,
        "keywords": [
            "Ø 250㎜ 이하",
            "PVC관"
        ]
    },
    {
        "code": "통신 2-1-1",
        "name": "Ø 300㎜ 이하",
        "spec": "PVC관",
        "unit": "본(6m)",
        "labors": {
            "통신외선공": 0.21,
            "보통인부": 0.56
        },
        "category": "pipe",
        "page": 73,
        "keywords": [
            "Ø 300㎜ 이하",
            "PVC관"
        ]
    },
    {
        "code": "통신 2-1-2",
        "name": "100㎜",
        "spec": "PVC관 절개 및 절단",
        "unit": "m",
        "labors": {
            "통신외선공": 0.17,
            "보통인부": 0.2
        },
        "category": "pipe",
        "page": 74,
        "keywords": [
            "100㎜",
            "PVC관 절개 및 절단"
        ]
    },
    {
        "code": "통신 2-1-2",
        "name": "80㎜",
        "spec": "PVC관 절개 및 절단",
        "unit": "m",
        "labors": {
            "통신외선공": 0.13,
            "보통인부": 0.16
        },
        "category": "pipe",
        "page": 74,
        "keywords": [
            "80㎜",
            "PVC관 절개 및 절단"
        ]
    },
    {
        "code": "통신 2-1-2",
        "name": "50㎜",
        "spec": "PVC관 절개 및 절단",
        "unit": "m",
        "labors": {
            "통신외선공": 0.08,
            "보통인부": 0.1
        },
        "category": "pipe",
        "page": 74,
        "keywords": [
            "50㎜",
            "PVC관 절개 및 절단"
        ]
    },
    {
        "code": "통신 2-1-3",
        "name": "16㎜ 이하",
        "spec": "합성수지관(주름관 포함)",
        "unit": "10m",
        "labors": {
            "통신외선공": 0.05,
            "보통인부": 0.12
        },
        "category": "pipe",
        "page": 74,
        "keywords": [
            "16㎜ 이하",
            "합성수지관(주름관 포함)"
        ]
    },
    {
        "code": "통신 2-1-3",
        "name": "30㎜ 이하",
        "spec": "합성수지관(주름관 포함)",
        "unit": "10m",
        "labors": {
            "통신외선공": 0.07,
            "보통인부": 0.14
        },
        "category": "pipe",
        "page": 74,
        "keywords": [
            "30㎜ 이하",
            "합성수지관(주름관 포함)"
        ]
    },
    {
        "code": "통신 2-1-3",
        "name": "50㎜ 이하",
        "spec": "합성수지관(주름관 포함)",
        "unit": "10m",
        "labors": {
            "통신외선공": 0.12,
            "보통인부": 0.29
        },
        "category": "pipe",
        "page": 74,
        "keywords": [
            "50㎜ 이하",
            "합성수지관(주름관 포함)"
        ]
    },
    {
        "code": "통신 2-1-3",
        "name": "80㎜ 이하",
        "spec": "합성수지관(주름관 포함)",
        "unit": "10m",
        "labors": {
            "통신외선공": 0.15,
            "보통인부": 0.35
        },
        "category": "pipe",
        "page": 74,
        "keywords": [
            "80㎜ 이하",
            "합성수지관(주름관 포함)"
        ]
    },
    {
        "code": "통신 2-1-3",
        "name": "100㎜ 이하",
        "spec": "합성수지관(주름관 포함)",
        "unit": "10m",
        "labors": {
            "통신외선공": 0.18,
            "보통인부": 0.57
        },
        "category": "pipe",
        "page": 74,
        "keywords": [
            "100㎜ 이하",
            "합성수지관(주름관 포함)"
        ]
    },
    {
        "code": "통신 2-1-3",
        "name": "125㎜ 이하",
        "spec": "합성수지관(주름관 포함)",
        "unit": "10m",
        "labors": {
            "통신외선공": 0.25,
            "보통인부": 0.77
        },
        "category": "pipe",
        "page": 74,
        "keywords": [
            "125㎜ 이하",
            "합성수지관(주름관 포함)"
        ]
    },
    {
        "code": "통신 2-1-3",
        "name": "150㎜ 이하",
        "spec": "합성수지관(주름관 포함)",
        "unit": "10m",
        "labors": {
            "통신외선공": 0.3,
            "보통인부": 0.97
        },
        "category": "pipe",
        "page": 74,
        "keywords": [
            "150㎜ 이하",
            "합성수지관(주름관 포함)"
        ]
    },
    {
        "code": "통신 2-1-3",
        "name": "175㎜ 이하",
        "spec": "합성수지관(주름관 포함)",
        "unit": "10m",
        "labors": {
            "통신외선공": 0.36,
            "보통인부": 1.17
        },
        "category": "pipe",
        "page": 74,
        "keywords": [
            "175㎜ 이하",
            "합성수지관(주름관 포함)"
        ]
    },
    {
        "code": "통신 2-1-3",
        "name": "200㎜ 이하",
        "spec": "합성수지관(주름관 포함)",
        "unit": "10m",
        "labors": {
            "통신외선공": 0.41,
            "보통인부": 1.29
        },
        "category": "pipe",
        "page": 74,
        "keywords": [
            "200㎜ 이하",
            "합성수지관(주름관 포함)"
        ]
    },
    {
        "code": "통신 2-1-4-1",
        "name": "76.3㎜ 이하",
        "spec": "흄관",
        "unit": "10m",
        "labors": {
            "통신외선공": 0.29,
            "보통인부": 0.59
        },
        "category": "pipe",
        "page": 75,
        "keywords": [
            "76.3㎜ 이하",
            "흄관"
        ]
    },
    {
        "code": "통신 2-1-4-1",
        "name": "114.3㎜ 이하",
        "spec": "흄관",
        "unit": "10m",
        "labors": {
            "통신외선공": 0.41,
            "보통인부": 0.81
        },
        "category": "pipe",
        "page": 75,
        "keywords": [
            "114.3㎜ 이하",
            "흄관"
        ]
    },
    {
        "code": "통신 2-1-4-1",
        "name": "165.2㎜ 이하",
        "spec": "흄관",
        "unit": "10m",
        "labors": {
            "통신외선공": 0.46,
            "보통인부": 0.92
        },
        "category": "pipe",
        "page": 75,
        "keywords": [
            "165.2㎜ 이하",
            "흄관"
        ]
    },
    {
        "code": "통신 2-1-4-1",
        "name": "216.3㎜ 이하",
        "spec": "흄관",
        "unit": "10m",
        "labors": {
            "통신외선공": 0.57,
            "보통인부": 1.13
        },
        "category": "pipe",
        "page": 75,
        "keywords": [
            "216.3㎜ 이하",
            "흄관"
        ]
    },
    {
        "code": "통신 2-1-4-1",
        "name": "267.4㎜ 이하",
        "spec": "흄관",
        "unit": "10m",
        "labors": {
            "통신외선공": 0.76,
            "보통인부": 1.53
        },
        "category": "pipe",
        "page": 75,
        "keywords": [
            "267.4㎜ 이하",
            "흄관"
        ]
    },
    {
        "code": "통신 2-1-4-1",
        "name": "318.5㎜ 이하",
        "spec": "흄관",
        "unit": "10m",
        "labors": {
            "통신외선공": 1.0,
            "보통인부": 1.99
        },
        "category": "pipe",
        "page": 75,
        "keywords": [
            "318.5㎜ 이하",
            "흄관"
        ]
    },
    {
        "code": "통신 2-1-4-1",
        "name": "406.4㎜ 이하",
        "spec": "흄관",
        "unit": "10m",
        "labors": {
            "통신외선공": 1.25,
            "보통인부": 2.49
        },
        "category": "pipe",
        "page": 75,
        "keywords": [
            "406.4㎜ 이하",
            "흄관"
        ]
    },
    {
        "code": "통신 2-1-4-2",
        "name": "76.3㎜ 이하",
        "spec": "반원흄관 및 강관",
        "unit": "10m",
        "labors": {
            "통신외선공": 0.43,
            "보통인부": 0.87
        },
        "category": "pipe",
        "page": 75,
        "keywords": [
            "76.3㎜ 이하",
            "반원흄관 및 강관"
        ]
    },
    {
        "code": "통신 2-1-4-2",
        "name": "114.3㎜ 이하",
        "spec": "반원흄관 및 강관",
        "unit": "10m",
        "labors": {
            "통신외선공": 0.51,
            "보통인부": 1.01
        },
        "category": "pipe",
        "page": 75,
        "keywords": [
            "114.3㎜ 이하",
            "반원흄관 및 강관"
        ]
    },
    {
        "code": "통신 2-1-4-2",
        "name": "165.2㎜ 이하",
        "spec": "반원흄관 및 강관",
        "unit": "10m",
        "labors": {
            "통신외선공": 0.63,
            "보통인부": 1.25
        },
        "category": "pipe",
        "page": 75,
        "keywords": [
            "165.2㎜ 이하",
            "반원흄관 및 강관"
        ]
    },
    {
        "code": "통신 2-1-4-2",
        "name": "216.3㎜ 이하",
        "spec": "반원흄관 및 강관",
        "unit": "10m",
        "labors": {
            "통신외선공": 0.74,
            "보통인부": 1.48
        },
        "category": "pipe",
        "page": 75,
        "keywords": [
            "216.3㎜ 이하",
            "반원흄관 및 강관"
        ]
    },
    {
        "code": "통신 2-1-4-2",
        "name": "267.4㎜ 이하",
        "spec": "반원흄관 및 강관",
        "unit": "10m",
        "labors": {
            "통신외선공": 1.0,
            "보통인부": 1.99
        },
        "category": "pipe",
        "page": 75,
        "keywords": [
            "267.4㎜ 이하",
            "반원흄관 및 강관"
        ]
    },
    {
        "code": "통신 2-1-4-2",
        "name": "318.5㎜ 이하",
        "spec": "반원흄관 및 강관",
        "unit": "10m",
        "labors": {
            "통신외선공": 1.1,
            "보통인부": 2.2
        },
        "category": "pipe",
        "page": 75,
        "keywords": [
            "318.5㎜ 이하",
            "반원흄관 및 강관"
        ]
    },
    {
        "code": "통신 2-1-5",
        "name": "76㎜ 이하",
        "spec": "도관전선관",
        "unit": "10m",
        "labors": {
            "통신외선공": 0.43,
            "보통인부": 0.43
        },
        "category": "pipe",
        "page": 76,
        "keywords": [
            "76㎜ 이하",
            "도관전선관"
        ]
    },
    {
        "code": "통신 2-1-5",
        "name": "115㎜ 이하",
        "spec": "도관전선관",
        "unit": "10m",
        "labors": {
            "통신외선공": 0.5,
            "보통인부": 0.5
        },
        "category": "pipe",
        "page": 76,
        "keywords": [
            "115㎜ 이하",
            "도관전선관"
        ]
    },
    {
        "code": "통신 2-1-6",
        "name": "경고표시 테이프",
        "spec": "경고표시 테이프 및 매설표지판",
        "unit": "100m",
        "labors": {
            "보통인부": 0.13
        },
        "category": "pipe",
        "page": 76,
        "keywords": [
            "경고표시 테이프",
            "경고표시 테이프 및 매설표지판"
        ]
    },
    {
        "code": "통신 2-1-6",
        "name": "케이블 매설표지판",
        "spec": "경고표시 테이프 및 매설표지판",
        "unit": "개",
        "labors": {
            "보통인부": 0.08
        },
        "category": "pipe",
        "page": 76,
        "keywords": [
            "케이블 매설표지판",
            "경고표시 테이프 및 매설표지판"
        ]
    },
    {
        "code": "통신 2-1-7",
        "name": "통신용 관로청소",
        "spec": "통신용 관로 등 청소",
        "unit": "100m",
        "labors": {
            "통신외선공": 0.44,
            "보통인부": 0.6
        },
        "category": "pipe",
        "page": 76,
        "keywords": [
            "통신용 관로청소",
            "통신용 관로 등 청소"
        ]
    },
    {
        "code": "통신 2-1-7",
        "name": "인․수공 청소",
        "spec": "통신용 관로 등 청소",
        "unit": "기",
        "labors": {
            "통신외선공": 0.17,
            "보통인부": 0.17
        },
        "category": "pipe",
        "page": 76,
        "keywords": [
            "인․수공 청소",
            "통신용 관로 등 청소"
        ]
    },
    {
        "code": "통신 2-1-7",
        "name": "토로프 청소",
        "spec": "통신용 관로 등 청소",
        "unit": "10㎡",
        "labors": {
            "보통인부": 0.08
        },
        "category": "pipe",
        "page": 76,
        "keywords": [
            "토로프 청소",
            "통신용 관로 등 청소"
        ]
    },
    {
        "code": "통신 2-1-8-1",
        "name": "경질토사 보통인부 0.26 0.35",
        "spec": "인력 터파기",
        "unit": "㎥",
        "labors": {
            "보통인부": 0.44
        },
        "category": "pipe",
        "page": 77,
        "keywords": [
            "경질토사 보통인부 0.26 0.35",
            "인력 터파기"
        ]
    },
    {
        "code": "통신 2-1-8-1",
        "name": "고사점토 및 자갈 보통인부 0.32 0.43",
        "spec": "인력 터파기",
        "unit": "㎥",
        "labors": {
            "보통인부": 0.54
        },
        "category": "pipe",
        "page": 77,
        "keywords": [
            "고사점토 및 자갈 보통인부 0.32 0.43",
            "인력 터파기"
        ]
    },
    {
        "code": "통신 2-1-8-1",
        "name": "호박돌 섞인토사 보통인부 0.57 0.77",
        "spec": "인력 터파기",
        "unit": "㎥",
        "labors": {
            "보통인부": 0.97
        },
        "category": "pipe",
        "page": 77,
        "keywords": [
            "호박돌 섞인토사 보통인부 0.57 0.77",
            "인력 터파기"
        ]
    },
    {
        "code": "통신 2-1-8-1",
        "name": "연암 및 풍화암 특별인부 1.60 1.80",
        "spec": "인력 터파기",
        "unit": "㎥",
        "labors": {
            "보통인부": 2.0
        },
        "category": "pipe",
        "page": 77,
        "keywords": [
            "연암 및 풍화암 특별인부 1.60 1.80",
            "인력 터파기"
        ]
    },
    {
        "code": "통신 2-1-8-1",
        "name": "보통인부 0.80 0.90",
        "spec": "인력 터파기",
        "unit": "㎥",
        "labors": {
            "보통인부": 1.0
        },
        "category": "pipe",
        "page": 77,
        "keywords": [
            "보통인부 0.80 0.90",
            "인력 터파기"
        ]
    },
    {
        "code": "통신 2-1-8-1",
        "name": "보통암 특별인부 2.40 2.60",
        "spec": "인력 터파기",
        "unit": "㎥",
        "labors": {
            "보통인부": 2.8
        },
        "category": "pipe",
        "page": 77,
        "keywords": [
            "보통암 특별인부 2.40 2.60",
            "인력 터파기"
        ]
    },
    {
        "code": "통신 2-1-8-1",
        "name": "보통인부 1.20 1.30",
        "spec": "인력 터파기",
        "unit": "㎥",
        "labors": {
            "보통인부": 1.4
        },
        "category": "pipe",
        "page": 77,
        "keywords": [
            "보통인부 1.20 1.30",
            "인력 터파기"
        ]
    },
    {
        "code": "통신 2-1-8-1",
        "name": "경암 특별인부 4.40 6.10",
        "spec": "인력 터파기",
        "unit": "㎥",
        "labors": {
            "보통인부": 7.8
        },
        "category": "pipe",
        "page": 77,
        "keywords": [
            "경암 특별인부 4.40 6.10",
            "인력 터파기"
        ]
    },
    {
        "code": "통신 2-1-8-1",
        "name": "보통인부 1.80 2.50",
        "spec": "인력 터파기",
        "unit": "㎥",
        "labors": {
            "보통인부": 3.2
        },
        "category": "pipe",
        "page": 77,
        "keywords": [
            "보통인부 1.80 2.50",
            "인력 터파기"
        ]
    },
    {
        "code": "통신 2-1-9",
        "name": "토사 ㎥",
        "spec": "인력 흙 다지기",
        "unit": "15",
        "labors": {
            "보통인부": 0.14
        },
        "category": "pipe",
        "page": 78,
        "keywords": [
            "토사 ㎥",
            "인력 흙 다지기"
        ]
    },
    {
        "code": "통신 2-1-9",
        "name": "토사 ㎥",
        "spec": "인력 흙 다지기",
        "unit": "30",
        "labors": {
            "보통인부": 0.11
        },
        "category": "pipe",
        "page": 78,
        "keywords": [
            "토사 ㎥",
            "인력 흙 다지기"
        ]
    },
    {
        "code": "통신 2-1-9",
        "name": "점토 ㎥",
        "spec": "인력 흙 다지기",
        "unit": "15",
        "labors": {
            "보통인부": 0.25
        },
        "category": "pipe",
        "page": 78,
        "keywords": [
            "점토 ㎥",
            "인력 흙 다지기"
        ]
    },
    {
        "code": "통신 2-1-9",
        "name": "점토 ㎥",
        "spec": "인력 흙 다지기",
        "unit": "30",
        "labors": {
            "보통인부": 0.19
        },
        "category": "pipe",
        "page": 78,
        "keywords": [
            "점토 ㎥",
            "인력 흙 다지기"
        ]
    },
    {
        "code": "통신 2-2-1-1",
        "name": "내경 70㎜ × 75㎜ 이하",
        "spec": "일반용 트로프",
        "unit": "10m",
        "labors": {
            "통신외선공": 0.16,
            "보통인부": 0.16
        },
        "category": "pipe",
        "page": 79,
        "keywords": [
            "내경 70㎜ × 75㎜ 이하",
            "일반용 트로프"
        ]
    },
    {
        "code": "통신 2-2-1-1",
        "name": "90㎜ × 75㎜ 이하",
        "spec": "일반용 트로프",
        "unit": "10m",
        "labors": {
            "통신외선공": 0.22,
            "보통인부": 0.21
        },
        "category": "pipe",
        "page": 79,
        "keywords": [
            "90㎜ × 75㎜ 이하",
            "일반용 트로프"
        ]
    },
    {
        "code": "통신 2-2-1-1",
        "name": "120㎜ × 75㎜ 이하",
        "spec": "일반용 트로프",
        "unit": "10m",
        "labors": {
            "통신외선공": 0.24,
            "보통인부": 0.23
        },
        "category": "pipe",
        "page": 79,
        "keywords": [
            "120㎜ × 75㎜ 이하",
            "일반용 트로프"
        ]
    },
    {
        "code": "통신 2-2-1-1",
        "name": "150㎜ × 90㎜ 이하",
        "spec": "일반용 트로프",
        "unit": "10m",
        "labors": {
            "통신외선공": 0.33,
            "보통인부": 0.32
        },
        "category": "pipe",
        "page": 79,
        "keywords": [
            "150㎜ × 90㎜ 이하",
            "일반용 트로프"
        ]
    },
    {
        "code": "통신 2-2-1-1",
        "name": "150㎜ × 120㎜ 이하",
        "spec": "일반용 트로프",
        "unit": "10m",
        "labors": {
            "통신외선공": 0.34,
            "보통인부": 0.34
        },
        "category": "pipe",
        "page": 79,
        "keywords": [
            "150㎜ × 120㎜ 이하",
            "일반용 트로프"
        ]
    },
    {
        "code": "통신 2-2-1-1",
        "name": "150㎜ × 170㎜ 이하",
        "spec": "일반용 트로프",
        "unit": "10m",
        "labors": {
            "통신외선공": 0.44,
            "보통인부": 0.44
        },
        "category": "pipe",
        "page": 79,
        "keywords": [
            "150㎜ × 170㎜ 이하",
            "일반용 트로프"
        ]
    },
    {
        "code": "통신 2-2-1-1",
        "name": "200㎜ × 90㎜ 이하",
        "spec": "일반용 트로프",
        "unit": "10m",
        "labors": {
            "통신외선공": 0.54,
            "보통인부": 0.54
        },
        "category": "pipe",
        "page": 79,
        "keywords": [
            "200㎜ × 90㎜ 이하",
            "일반용 트로프"
        ]
    },
    {
        "code": "통신 2-2-1-1",
        "name": "200㎜ × 170㎜ 이하",
        "spec": "일반용 트로프",
        "unit": "10m",
        "labors": {
            "통신외선공": 0.68,
            "보통인부": 0.67
        },
        "category": "pipe",
        "page": 79,
        "keywords": [
            "200㎜ × 170㎜ 이하",
            "일반용 트로프"
        ]
    },
    {
        "code": "통신 2-2-1-1",
        "name": "270㎜ × 170㎜ 이하",
        "spec": "일반용 트로프",
        "unit": "10m",
        "labors": {
            "통신외선공": 0.77,
            "보통인부": 0.76
        },
        "category": "pipe",
        "page": 79,
        "keywords": [
            "270㎜ × 170㎜ 이하",
            "일반용 트로프"
        ]
    },
    {
        "code": "통신 2-2-1-1",
        "name": "290㎜ × 170㎜ 이하",
        "spec": "일반용 트로프",
        "unit": "10m",
        "labors": {
            "통신외선공": 0.95,
            "보통인부": 0.94
        },
        "category": "pipe",
        "page": 79,
        "keywords": [
            "290㎜ × 170㎜ 이하",
            "일반용 트로프"
        ]
    },
    {
        "code": "통신 2-2-1-1",
        "name": "300㎜ × 170㎜ 이하",
        "spec": "일반용 트로프",
        "unit": "10m",
        "labors": {
            "통신외선공": 0.99,
            "보통인부": 0.99
        },
        "category": "pipe",
        "page": 79,
        "keywords": [
            "300㎜ × 170㎜ 이하",
            "일반용 트로프"
        ]
    },
    {
        "code": "통신 2-2-1-1",
        "name": "400㎜ × 215㎜ 이하",
        "spec": "일반용 트로프",
        "unit": "10m",
        "labors": {
            "통신외선공": 1.22,
            "보통인부": 1.21
        },
        "category": "pipe",
        "page": 79,
        "keywords": [
            "400㎜ × 215㎜ 이하",
            "일반용 트로프"
        ]
    },
    {
        "code": "통신 2-2-1-2",
        "name": "외경 740㎜ × 500㎜ 이하",
        "spec": "고속철도용 트로프",
        "unit": "10m",
        "labors": {
            "통신외선공": 1.45
        },
        "category": "pipe",
        "page": 79,
        "keywords": [
            "외경 740㎜ × 500㎜ 이하",
            "고속철도용 트로프"
        ]
    },
    {
        "code": "통신 2-2-1-2",
        "name": "840㎜ × 500㎜ 500㎜ 이하",
        "spec": "고속철도용 트로프",
        "unit": "10m",
        "labors": {
            "통신외선공": 1.93
        },
        "category": "pipe",
        "page": 79,
        "keywords": [
            "840㎜ × 500㎜ 500㎜ 이하",
            "고속철도용 트로프"
        ]
    },
    {
        "code": "통신 2-2-1-2",
        "name": "530㎜ × 320㎜ 500㎜ 이하",
        "spec": "고속철도용 트로프",
        "unit": "10m",
        "labors": {
            "통신외선공": 0.27
        },
        "category": "pipe",
        "page": 79,
        "keywords": [
            "530㎜ × 320㎜ 500㎜ 이하",
            "고속철도용 트로프"
        ]
    },
    {
        "code": "통신 2-2-1-2",
        "name": "400㎜ × 290㎜ 500㎜ 이하",
        "spec": "고속철도용 트로프",
        "unit": "10m",
        "labors": {
            "통신외선공": 0.24
        },
        "category": "pipe",
        "page": 79,
        "keywords": [
            "400㎜ × 290㎜ 500㎜ 이하",
            "고속철도용 트로프"
        ]
    },
    {
        "code": "통신 2-2-1-2",
        "name": "320㎜ × 250㎜ 500㎜ 이하",
        "spec": "고속철도용 트로프",
        "unit": "10m",
        "labors": {
            "통신외선공": 0.23
        },
        "category": "pipe",
        "page": 79,
        "keywords": [
            "320㎜ × 250㎜ 500㎜ 이하",
            "고속철도용 트로프"
        ]
    },
    {
        "code": "통신 2-2-1-2",
        "name": "115㎜ × 290㎜ 500㎜ 이하",
        "spec": "고속철도용 트로프",
        "unit": "10m",
        "labors": {
            "통신외선공": 0.21
        },
        "category": "pipe",
        "page": 79,
        "keywords": [
            "115㎜ × 290㎜ 500㎜ 이하",
            "고속철도용 트로프"
        ]
    },
    {
        "code": "통신 2-2-1-3",
        "name": "70㎜ 100m",
        "spec": "콘크리트 트로프 들어내기 및 닫기",
        "unit": "개",
        "labors": {
            "통신케이블공": 0.29
        },
        "category": "pipe",
        "page": 80,
        "keywords": [
            "70㎜ 100m",
            "콘크리트 트로프 들어내기 및 닫기"
        ]
    },
    {
        "code": "통신 2-2-1-3",
        "name": "120㎜ 100m",
        "spec": "콘크리트 트로프 들어내기 및 닫기",
        "unit": "개",
        "labors": {
            "통신케이블공": 0.39
        },
        "category": "pipe",
        "page": 80,
        "keywords": [
            "120㎜ 100m",
            "콘크리트 트로프 들어내기 및 닫기"
        ]
    },
    {
        "code": "통신 2-2-1-3",
        "name": "트로프 150㎜ 100m",
        "spec": "콘크리트 트로프 들어내기 및 닫기",
        "unit": "개",
        "labors": {
            "통신케이블공": 0.49
        },
        "category": "pipe",
        "page": 80,
        "keywords": [
            "트로프 150㎜ 100m",
            "콘크리트 트로프 들어내기 및 닫기"
        ]
    },
    {
        "code": "통신 2-2-1-3",
        "name": "뚜껑 200㎜ 100m",
        "spec": "콘크리트 트로프 들어내기 및 닫기",
        "unit": "개",
        "labors": {
            "통신케이블공": 0.87
        },
        "category": "pipe",
        "page": 80,
        "keywords": [
            "뚜껑 200㎜ 100m",
            "콘크리트 트로프 들어내기 및 닫기"
        ]
    },
    {
        "code": "통신 2-2-1-3",
        "name": "(폭) 250㎜ ~ 330㎜ 100m",
        "spec": "콘크리트 트로프 들어내기 및 닫기",
        "unit": "개",
        "labors": {
            "통신케이블공": 0.68,
            "보통인부": 0.68
        },
        "category": "pipe",
        "page": 80,
        "keywords": [
            "(폭) 250㎜ ~ 330㎜ 100m",
            "콘크리트 트로프 들어내기 및 닫기"
        ]
    },
    {
        "code": "통신 2-2-1-3",
        "name": "400㎜ ~ 430㎜ 330㎜ 100m",
        "spec": "콘크리트 트로프 들어내기 및 닫기",
        "unit": "개",
        "labors": {
            "통신케이블공": 1.26,
            "보통인부": 1.26
        },
        "category": "pipe",
        "page": 80,
        "keywords": [
            "400㎜ ~ 430㎜ 330㎜ 100m",
            "콘크리트 트로프 들어내기 및 닫기"
        ]
    },
    {
        "code": "통신 2-2-1-3",
        "name": "500㎜ ~ 430㎜ 330㎜ 100m",
        "spec": "콘크리트 트로프 들어내기 및 닫기",
        "unit": "개",
        "labors": {
            "통신케이블공": 1.36,
            "보통인부": 1.36
        },
        "category": "pipe",
        "page": 80,
        "keywords": [
            "500㎜ ~ 430㎜ 330㎜ 100m",
            "콘크리트 트로프 들어내기 및 닫기"
        ]
    },
    {
        "code": "통신 2-2-2",
        "name": "내경 70㎜ × 75㎜ 이하",
        "spec": "합성수지(파스콘) 트로프",
        "unit": "10m",
        "labors": {
            "통신외선공": 0.11,
            "보통인부": 0.11
        },
        "category": "pipe",
        "page": 80,
        "keywords": [
            "내경 70㎜ × 75㎜ 이하",
            "합성수지(파스콘) 트로프"
        ]
    },
    {
        "code": "통신 2-2-2",
        "name": "120㎜ × 75㎜ 이하",
        "spec": "합성수지(파스콘) 트로프",
        "unit": "10m",
        "labors": {
            "통신외선공": 0.17,
            "보통인부": 0.17
        },
        "category": "pipe",
        "page": 80,
        "keywords": [
            "120㎜ × 75㎜ 이하",
            "합성수지(파스콘) 트로프"
        ]
    },
    {
        "code": "통신 2-2-2",
        "name": "150㎜ × 90㎜ 이하",
        "spec": "합성수지(파스콘) 트로프",
        "unit": "10m",
        "labors": {
            "통신외선공": 0.22,
            "보통인부": 0.22
        },
        "category": "pipe",
        "page": 80,
        "keywords": [
            "150㎜ × 90㎜ 이하",
            "합성수지(파스콘) 트로프"
        ]
    },
    {
        "code": "통신 2-2-2",
        "name": "150㎜ × 120㎜ 이하",
        "spec": "합성수지(파스콘) 트로프",
        "unit": "10m",
        "labors": {
            "통신외선공": 0.24,
            "보통인부": 0.24
        },
        "category": "pipe",
        "page": 80,
        "keywords": [
            "150㎜ × 120㎜ 이하",
            "합성수지(파스콘) 트로프"
        ]
    },
    {
        "code": "통신 2-2-2",
        "name": "200㎜ × 90㎜ 이하",
        "spec": "합성수지(파스콘) 트로프",
        "unit": "10m",
        "labors": {
            "통신외선공": 0.3,
            "보통인부": 0.3
        },
        "category": "pipe",
        "page": 80,
        "keywords": [
            "200㎜ × 90㎜ 이하",
            "합성수지(파스콘) 트로프"
        ]
    },
    {
        "code": "통신 2-2-2",
        "name": "200㎜ × 170㎜ 이하",
        "spec": "합성수지(파스콘) 트로프",
        "unit": "10m",
        "labors": {
            "통신외선공": 0.34,
            "보통인부": 0.34
        },
        "category": "pipe",
        "page": 80,
        "keywords": [
            "200㎜ × 170㎜ 이하",
            "합성수지(파스콘) 트로프"
        ]
    },
    {
        "code": "통신 2-2-2",
        "name": "250㎜ × 170㎜ 이하",
        "spec": "합성수지(파스콘) 트로프",
        "unit": "10m",
        "labors": {
            "통신외선공": 0.4,
            "보통인부": 0.4
        },
        "category": "pipe",
        "page": 80,
        "keywords": [
            "250㎜ × 170㎜ 이하",
            "합성수지(파스콘) 트로프"
        ]
    },
    {
        "code": "통신 2-2-2",
        "name": "300㎜ × 170㎜ 이하",
        "spec": "합성수지(파스콘) 트로프",
        "unit": "10m",
        "labors": {
            "통신외선공": 0.48,
            "보통인부": 0.48
        },
        "category": "pipe",
        "page": 80,
        "keywords": [
            "300㎜ × 170㎜ 이하",
            "합성수지(파스콘) 트로프"
        ]
    },
    {
        "code": "통신 2-2-2",
        "name": "325㎜ × 170㎜ 이하",
        "spec": "합성수지(파스콘) 트로프",
        "unit": "10m",
        "labors": {
            "통신외선공": 0.53,
            "보통인부": 0.53
        },
        "category": "pipe",
        "page": 80,
        "keywords": [
            "325㎜ × 170㎜ 이하",
            "합성수지(파스콘) 트로프"
        ]
    },
    {
        "code": "통신 2-3-2",
        "name": "인공철개 설치 소형",
        "spec": "인․수공 철개 및 입상관(오름관)",
        "unit": "기",
        "labors": {
            "통신외선공": 0.6,
            "보통인부": 0.3
        },
        "category": "pipe",
        "page": 81,
        "keywords": [
            "인공철개 설치 소형",
            "인․수공 철개 및 입상관(오름관)"
        ]
    },
    {
        "code": "통신 2-3-2",
        "name": "대형",
        "spec": "인․수공 철개 및 입상관(오름관)",
        "unit": "기",
        "labors": {
            "통신외선공": 0.78,
            "보통인부": 0.39
        },
        "category": "pipe",
        "page": 81,
        "keywords": [
            "대형",
            "인․수공 철개 및 입상관(오름관)"
        ]
    },
    {
        "code": "통신 2-3-2",
        "name": "수공철개 설치 950㎜×450㎜×700㎜ 이하",
        "spec": "인․수공 철개 및 입상관(오름관)",
        "unit": "기",
        "labors": {
            "통신외선공": 0.12,
            "보통인부": 0.06
        },
        "category": "pipe",
        "page": 81,
        "keywords": [
            "수공철개 설치 950㎜×450㎜×700㎜ 이하",
            "인․수공 철개 및 입상관(오름관)"
        ]
    },
    {
        "code": "통신 2-3-2",
        "name": "1,700㎜×800㎜×1,100㎜ 이하",
        "spec": "인․수공 철개 및 입상관(오름관)",
        "unit": "기",
        "labors": {
            "통신외선공": 0.24,
            "보통인부": 0.12
        },
        "category": "pipe",
        "page": 81,
        "keywords": [
            "1,700㎜×800㎜×1,100㎜ 이하",
            "인․수공 철개 및 입상관(오름관)"
        ]
    },
    {
        "code": "통신 2-3-2",
        "name": "입상관(오름관) 설치 내경 100㎜ 이하",
        "spec": "인․수공 철개 및 입상관(오름관)",
        "unit": "개소",
        "labors": {
            "보통인부": 0.3
        },
        "category": "pipe",
        "page": 81,
        "keywords": [
            "입상관(오름관) 설치 내경 100㎜ 이하",
            "인․수공 철개 및 입상관(오름관)"
        ]
    },
    {
        "code": "통신 2-3-3",
        "name": "수공 950×450×700",
        "spec": "인․수공케이블 지지철물",
        "unit": "기",
        "labors": {
            "통신외선공": 0.06
        },
        "category": "pipe",
        "page": 82,
        "keywords": [
            "수공 950×450×700",
            "인․수공케이블 지지철물"
        ]
    },
    {
        "code": "통신 2-3-3",
        "name": "1,700×800×1,100",
        "spec": "인․수공케이블 지지철물",
        "unit": "기",
        "labors": {
            "통신외선공": 0.07
        },
        "category": "pipe",
        "page": 82,
        "keywords": [
            "1,700×800×1,100",
            "인․수공케이블 지지철물"
        ]
    },
    {
        "code": "통신 2-3-3",
        "name": "직선형 2,000×1,000×1,700",
        "spec": "인․수공케이블 지지철물",
        "unit": "기",
        "labors": {
            "통신외선공": 0.06
        },
        "category": "pipe",
        "page": 82,
        "keywords": [
            "직선형 2,000×1,000×1,700",
            "인․수공케이블 지지철물"
        ]
    },
    {
        "code": "통신 2-3-3",
        "name": "3,200×1,300×1,700",
        "spec": "인․수공케이블 지지철물",
        "unit": "기",
        "labors": {
            "통신외선공": 0.2
        },
        "category": "pipe",
        "page": 82,
        "keywords": [
            "3,200×1,300×1,700",
            "인․수공케이블 지지철물"
        ]
    },
    {
        "code": "통신 2-3-3",
        "name": "인공 L형 2,000×1,000×1,700",
        "spec": "인․수공케이블 지지철물",
        "unit": "기",
        "labors": {
            "통신외선공": 0.1
        },
        "category": "pipe",
        "page": 82,
        "keywords": [
            "인공 L형 2,000×1,000×1,700",
            "인․수공케이블 지지철물"
        ]
    },
    {
        "code": "통신 2-3-3",
        "name": "분기형 3,200×1,300×1,700",
        "spec": "인․수공케이블 지지철물",
        "unit": "기",
        "labors": {
            "통신외선공": 0.2
        },
        "category": "pipe",
        "page": 82,
        "keywords": [
            "분기형 3,200×1,300×1,700",
            "인․수공케이블 지지철물"
        ]
    },
    {
        "code": "통신 2-3-3",
        "name": "T형/ 십 2,000×1,000×1,700",
        "spec": "인․수공케이블 지지철물",
        "unit": "기",
        "labors": {
            "통신외선공": 0.18
        },
        "category": "pipe",
        "page": 82,
        "keywords": [
            "T형/ 십 2,000×1,000×1,700",
            "인․수공케이블 지지철물"
        ]
    },
    {
        "code": "통신 2-3-3",
        "name": "자형 3,200×1,300×1,700",
        "spec": "인․수공케이블 지지철물",
        "unit": "기",
        "labors": {
            "통신외선공": 0.27,
            "보통인부": 0.01
        },
        "category": "pipe",
        "page": 82,
        "keywords": [
            "자형 3,200×1,300×1,700",
            "인․수공케이블 지지철물"
        ]
    },
    {
        "code": "통신 2-3-4",
        "name": "공관로",
        "spec": "관구마개",
        "unit": "1공",
        "labors": {
            "통신케이블공": 0.01,
            "보통인부": 0.01
        },
        "category": "pipe",
        "page": 82,
        "keywords": [
            "공관로",
            "관구마개"
        ]
    },
    {
        "code": "통신 2-3-4",
        "name": "케이블수용관로",
        "spec": "관구마개",
        "unit": "1공",
        "labors": {
            "통신케이블공": 0.03,
            "보통인부": 0.03
        },
        "category": "pipe",
        "page": 82,
        "keywords": [
            "케이블수용관로",
            "관구마개"
        ]
    },
    {
        "code": "통신 2-4-1",
        "name": "5m 이하",
        "spec": "전봇대 인력 세움",
        "unit": "기",
        "labors": {
            "통신외선공": 0.65,
            "보통인부": 0.73
        },
        "category": "pipe",
        "page": 83,
        "keywords": [
            "5m 이하",
            "전봇대 인력 세움"
        ]
    },
    {
        "code": "통신 2-4-1",
        "name": "6m 이하",
        "spec": "전봇대 인력 세움",
        "unit": "기",
        "labors": {
            "통신외선공": 0.72,
            "보통인부": 0.81
        },
        "category": "pipe",
        "page": 83,
        "keywords": [
            "6m 이하",
            "전봇대 인력 세움"
        ]
    },
    {
        "code": "통신 2-4-1",
        "name": "7m 이하",
        "spec": "전봇대 인력 세움",
        "unit": "기",
        "labors": {
            "통신외선공": 1.23,
            "보통인부": 1.4
        },
        "category": "pipe",
        "page": 83,
        "keywords": [
            "7m 이하",
            "전봇대 인력 세움"
        ]
    },
    {
        "code": "통신 2-4-1",
        "name": "8m 이하",
        "spec": "전봇대 인력 세움",
        "unit": "기",
        "labors": {
            "통신외선공": 1.66,
            "보통인부": 1.88
        },
        "category": "pipe",
        "page": 83,
        "keywords": [
            "8m 이하",
            "전봇대 인력 세움"
        ]
    },
    {
        "code": "통신 2-4-1",
        "name": "9m 이하",
        "spec": "전봇대 인력 세움",
        "unit": "기",
        "labors": {
            "통신외선공": 1.68,
            "보통인부": 2.13
        },
        "category": "pipe",
        "page": 83,
        "keywords": [
            "9m 이하",
            "전봇대 인력 세움"
        ]
    },
    {
        "code": "통신 2-4-1",
        "name": "콘크리트 전봇대 10m 이하",
        "spec": "전봇대 인력 세움",
        "unit": "기",
        "labors": {
            "통신외선공": 2.01,
            "보통인부": 2.55
        },
        "category": "pipe",
        "page": 83,
        "keywords": [
            "콘크리트 전봇대 10m 이하",
            "전봇대 인력 세움"
        ]
    },
    {
        "code": "통신 2-4-1",
        "name": "11m 전봇대 10m 이하",
        "spec": "전봇대 인력 세움",
        "unit": "기",
        "labors": {
            "통신외선공": 2.5,
            "보통인부": 2.63
        },
        "category": "pipe",
        "page": 83,
        "keywords": [
            "11m 전봇대 10m 이하",
            "전봇대 인력 세움"
        ]
    },
    {
        "code": "통신 2-4-1",
        "name": "12m 전봇대 10m 이하",
        "spec": "전봇대 인력 세움",
        "unit": "기",
        "labors": {
            "통신외선공": 2.86,
            "보통인부": 3.0
        },
        "category": "pipe",
        "page": 83,
        "keywords": [
            "12m 전봇대 10m 이하",
            "전봇대 인력 세움"
        ]
    },
    {
        "code": "통신 2-4-1",
        "name": "14m 전봇대 10m 이하",
        "spec": "전봇대 인력 세움",
        "unit": "기",
        "labors": {
            "통신외선공": 3.6,
            "보통인부": 4.24
        },
        "category": "pipe",
        "page": 83,
        "keywords": [
            "14m 전봇대 10m 이하",
            "전봇대 인력 세움"
        ]
    },
    {
        "code": "통신 2-4-1",
        "name": "16m 전봇대 10m 이하",
        "spec": "전봇대 인력 세움",
        "unit": "기",
        "labors": {
            "통신외선공": 5.1,
            "보통인부": 5.2
        },
        "category": "pipe",
        "page": 83,
        "keywords": [
            "16m 전봇대 10m 이하",
            "전봇대 인력 세움"
        ]
    },
    {
        "code": "통신 2-4-1",
        "name": "17m 전봇대 10m 이하",
        "spec": "전봇대 인력 세움",
        "unit": "기",
        "labors": {
            "통신외선공": 6.5,
            "보통인부": 6.74
        },
        "category": "pipe",
        "page": 83,
        "keywords": [
            "17m 전봇대 10m 이하",
            "전봇대 인력 세움"
        ]
    },
    {
        "code": "통신 2-4-2",
        "name": "7m이하 0.39",
        "spec": "전봇대 기계화 세움",
        "unit": "기",
        "labors": {
            "통신외선공": 0.14,
            "보통인부": 49.0
        },
        "category": "pipe",
        "page": 84,
        "keywords": [
            "7m이하 0.39",
            "전봇대 기계화 세움"
        ]
    },
    {
        "code": "통신 2-4-2",
        "name": "8m 0.44",
        "spec": "전봇대 기계화 세움",
        "unit": "기",
        "labors": {
            "통신외선공": 0.15,
            "보통인부": 52.0
        },
        "category": "pipe",
        "page": 84,
        "keywords": [
            "8m 0.44",
            "전봇대 기계화 세움"
        ]
    },
    {
        "code": "통신 2-4-2",
        "name": "9m 0.45",
        "spec": "전봇대 기계화 세움",
        "unit": "기",
        "labors": {
            "통신외선공": 0.16,
            "보통인부": 53.0
        },
        "category": "pipe",
        "page": 84,
        "keywords": [
            "9m 0.45",
            "전봇대 기계화 세움"
        ]
    },
    {
        "code": "통신 2-4-2",
        "name": "10m 0.51",
        "spec": "전봇대 기계화 세움",
        "unit": "기",
        "labors": {
            "통신외선공": 0.18,
            "보통인부": 57.0
        },
        "category": "pipe",
        "page": 84,
        "keywords": [
            "10m 0.51",
            "전봇대 기계화 세움"
        ]
    },
    {
        "code": "통신 2-4-2",
        "name": "11m 0.53",
        "spec": "전봇대 기계화 세움",
        "unit": "기",
        "labors": {
            "통신외선공": 0.18,
            "보통인부": 59.0
        },
        "category": "pipe",
        "page": 84,
        "keywords": [
            "11m 0.53",
            "전봇대 기계화 세움"
        ]
    },
    {
        "code": "통신 2-4-2",
        "name": "12m 0.54",
        "spec": "전봇대 기계화 세움",
        "unit": "기",
        "labors": {
            "통신외선공": 0.19,
            "보통인부": 61.0
        },
        "category": "pipe",
        "page": 84,
        "keywords": [
            "12m 0.54",
            "전봇대 기계화 세움"
        ]
    },
    {
        "code": "통신 2-4-2",
        "name": "13m 0.61",
        "spec": "전봇대 기계화 세움",
        "unit": "기",
        "labors": {
            "통신외선공": 0.2,
            "보통인부": 64.0
        },
        "category": "pipe",
        "page": 84,
        "keywords": [
            "13m 0.61",
            "전봇대 기계화 세움"
        ]
    },
    {
        "code": "통신 2-4-2",
        "name": "14m 0.62",
        "spec": "전봇대 기계화 세움",
        "unit": "기",
        "labors": {
            "통신외선공": 0.21,
            "보통인부": 65.0
        },
        "category": "pipe",
        "page": 84,
        "keywords": [
            "14m 0.62",
            "전봇대 기계화 세움"
        ]
    },
    {
        "code": "통신 2-4-2",
        "name": "15m 0.64",
        "spec": "전봇대 기계화 세움",
        "unit": "기",
        "labors": {
            "통신외선공": 0.21,
            "보통인부": 68.0
        },
        "category": "pipe",
        "page": 84,
        "keywords": [
            "15m 0.64",
            "전봇대 기계화 세움"
        ]
    },
    {
        "code": "통신 2-4-2",
        "name": "16m 0.71",
        "spec": "전봇대 기계화 세움",
        "unit": "기",
        "labors": {
            "통신외선공": 0.23,
            "보통인부": 72.0
        },
        "category": "pipe",
        "page": 84,
        "keywords": [
            "16m 0.71",
            "전봇대 기계화 세움"
        ]
    },
    {
        "code": "통신 2-4-2",
        "name": "17m 0.72",
        "spec": "전봇대 기계화 세움",
        "unit": "기",
        "labors": {
            "통신외선공": 0.24,
            "보통인부": 73.0
        },
        "category": "pipe",
        "page": 84,
        "keywords": [
            "17m 0.72",
            "전봇대 기계화 세움"
        ]
    },
    {
        "code": "통신 2-4-2",
        "name": "18m 0.74",
        "spec": "전봇대 기계화 세움",
        "unit": "기",
        "labors": {
            "통신외선공": 0.24,
            "보통인부": 75.0
        },
        "category": "pipe",
        "page": 84,
        "keywords": [
            "18m 0.74",
            "전봇대 기계화 세움"
        ]
    },
    {
        "code": "통신 2-4-3",
        "name": "7m 이하",
        "spec": "콘크리트 전봇대 파쇄",
        "unit": "기",
        "labors": {
            "보통인부": 0.2
        },
        "category": "pipe",
        "page": 85,
        "keywords": [
            "7m 이하",
            "콘크리트 전봇대 파쇄"
        ]
    },
    {
        "code": "통신 2-4-3",
        "name": "8m 이하",
        "spec": "콘크리트 전봇대 파쇄",
        "unit": "기",
        "labors": {
            "보통인부": 0.25
        },
        "category": "pipe",
        "page": 85,
        "keywords": [
            "8m 이하",
            "콘크리트 전봇대 파쇄"
        ]
    },
    {
        "code": "통신 2-4-3",
        "name": "9m 이하",
        "spec": "콘크리트 전봇대 파쇄",
        "unit": "기",
        "labors": {
            "보통인부": 0.3
        },
        "category": "pipe",
        "page": 85,
        "keywords": [
            "9m 이하",
            "콘크리트 전봇대 파쇄"
        ]
    },
    {
        "code": "통신 2-4-3",
        "name": "10m 이상",
        "spec": "콘크리트 전봇대 파쇄",
        "unit": "기",
        "labors": {
            "보통인부": 0.4
        },
        "category": "pipe",
        "page": 85,
        "keywords": [
            "10m 이상",
            "콘크리트 전봇대 파쇄"
        ]
    },
    {
        "code": "통신 2-4-4",
        "name": "깊이 (1.2m) 4조 이하",
        "spec": "지지선",
        "unit": "본",
        "labors": {
            "통신외선공": 0.45,
            "보통인부": 0.34
        },
        "category": "pipe",
        "page": 85,
        "keywords": [
            "깊이 (1.2m) 4조 이하",
            "지지선"
        ]
    },
    {
        "code": "통신 2-4-4",
        "name": "(1.5m) 6조 4조 이하",
        "spec": "지지선",
        "unit": "본",
        "labors": {
            "통신외선공": 0.57,
            "보통인부": 0.43
        },
        "category": "pipe",
        "page": 85,
        "keywords": [
            "(1.5m) 6조 4조 이하",
            "지지선"
        ]
    },
    {
        "code": "통신 2-4-4",
        "name": "(1.5m) 8조 4조 이하",
        "spec": "지지선",
        "unit": "본",
        "labors": {
            "통신외선공": 0.75,
            "보통인부": 0.56
        },
        "category": "pipe",
        "page": 85,
        "keywords": [
            "(1.5m) 8조 4조 이하",
            "지지선"
        ]
    },
    {
        "code": "통신 2-4-4",
        "name": "(1.7m) 10 조 이하",
        "spec": "지지선",
        "unit": "본",
        "labors": {
            "통신외선공": 1.11,
            "보통인부": 0.83
        },
        "category": "pipe",
        "page": 85,
        "keywords": [
            "(1.7m) 10 조 이하",
            "지지선"
        ]
    },
    {
        "code": "통신 2-4-4",
        "name": "(1.7m) 12 조 이하",
        "spec": "지지선",
        "unit": "본",
        "labors": {
            "통신외선공": 1.54,
            "보통인부": 1.16
        },
        "category": "pipe",
        "page": 85,
        "keywords": [
            "(1.7m) 12 조 이하",
            "지지선"
        ]
    },
    {
        "code": "통신 2-4-4",
        "name": "(1.7m) 15 조 이하",
        "spec": "지지선",
        "unit": "본",
        "labors": {
            "통신외선공": 1.9,
            "보통인부": 1.43
        },
        "category": "pipe",
        "page": 85,
        "keywords": [
            "(1.7m) 15 조 이하",
            "지지선"
        ]
    },
    {
        "code": "통신 2-4-4",
        "name": "(1.8m) 18 조 이하",
        "spec": "지지선",
        "unit": "본",
        "labors": {
            "통신외선공": 2.35,
            "보통인부": 1.73
        },
        "category": "pipe",
        "page": 85,
        "keywords": [
            "(1.8m) 18 조 이하",
            "지지선"
        ]
    },
    {
        "code": "통신 2-4-4",
        "name": "7/2.3 이하",
        "spec": "지지선",
        "unit": "본",
        "labors": {
            "통신외선공": 0.23,
            "보통인부": 0.11
        },
        "category": "pipe",
        "page": 85,
        "keywords": [
            "7/2.3 이하",
            "지지선"
        ]
    },
    {
        "code": "통신 2-4-4",
        "name": "7/2.6 ~ 7/2.9 이하",
        "spec": "지지선",
        "unit": "본",
        "labors": {
            "통신외선공": 0.3,
            "보통인부": 0.23
        },
        "category": "pipe",
        "page": 85,
        "keywords": [
            "7/2.6 ~ 7/2.9 이하",
            "지지선"
        ]
    },
    {
        "code": "통신 2-4-4",
        "name": "7/3.2 ~ 7/4.5 이하",
        "spec": "지지선",
        "unit": "본",
        "labors": {
            "통신외선공": 0.42,
            "보통인부": 0.27
        },
        "category": "pipe",
        "page": 85,
        "keywords": [
            "7/3.2 ~ 7/4.5 이하",
            "지지선"
        ]
    },
    {
        "code": "통신 2-4-4",
        "name": "7/5.0 ~ 7/4.5 이하",
        "spec": "지지선",
        "unit": "본",
        "labors": {
            "통신외선공": 0.44,
            "보통인부": 0.28
        },
        "category": "pipe",
        "page": 85,
        "keywords": [
            "7/5.0 ~ 7/4.5 이하",
            "지지선"
        ]
    },
    {
        "code": "통신 2-4-4",
        "name": "7/5.5 ~ 7/6.5 이하",
        "spec": "지지선",
        "unit": "본",
        "labors": {
            "통신외선공": 0.44,
            "보통인부": 0.28
        },
        "category": "pipe",
        "page": 85,
        "keywords": [
            "7/5.5 ~ 7/6.5 이하",
            "지지선"
        ]
    },
    {
        "code": "통신 2-4-4",
        "name": "-",
        "spec": "지지선",
        "unit": "본",
        "labors": {
            "통신외선공": 55.0
        },
        "category": "pipe",
        "page": 85,
        "keywords": [
            "-",
            "지지선"
        ]
    },
    {
        "code": "통신 2-4-5",
        "name": "30㎟ 아연도 강연선",
        "spec": "조가선",
        "unit": "㎞",
        "labors": {
            "통신외선공": 4.83,
            "특별인부": 3.22
        },
        "category": "pipe",
        "page": 86,
        "keywords": [
            "30㎟ 아연도 강연선",
            "조가선"
        ]
    },
    {
        "code": "통신 2-4-5",
        "name": "38㎟ 아연도 강연선",
        "spec": "조가선",
        "unit": "㎞",
        "labors": {
            "통신외선공": 5.22,
            "특별인부": 3.48
        },
        "category": "pipe",
        "page": 86,
        "keywords": [
            "38㎟ 아연도 강연선",
            "조가선"
        ]
    },
    {
        "code": "통신 2-4-5",
        "name": "45㎟ 아연도 강연선",
        "spec": "조가선",
        "unit": "㎞",
        "labors": {
            "통신외선공": 5.22,
            "특별인부": 3.48
        },
        "category": "pipe",
        "page": 86,
        "keywords": [
            "45㎟ 아연도 강연선",
            "조가선"
        ]
    },
    {
        "code": "통신 2-4-5",
        "name": "55㎟ 아연도 강연선",
        "spec": "조가선",
        "unit": "㎞",
        "labors": {
            "통신외선공": 6.27,
            "특별인부": 4.18
        },
        "category": "pipe",
        "page": 86,
        "keywords": [
            "55㎟ 아연도 강연선",
            "조가선"
        ]
    },
    {
        "code": "통신 2-4-5",
        "name": "70㎟ 아연도 강연선",
        "spec": "조가선",
        "unit": "㎞",
        "labors": {
            "통신외선공": 6.63,
            "특별인부": 4.42
        },
        "category": "pipe",
        "page": 86,
        "keywords": [
            "70㎟ 아연도 강연선",
            "조가선"
        ]
    },
    {
        "code": "통신 2-4-5",
        "name": "90㎟ 아연도 강연선",
        "spec": "조가선",
        "unit": "㎞",
        "labors": {
            "통신외선공": 9.06,
            "특별인부": 6.04
        },
        "category": "pipe",
        "page": 86,
        "keywords": [
            "90㎟ 아연도 강연선",
            "조가선"
        ]
    },
    {
        "code": "통신 2-4-5",
        "name": "110㎟ 아연도 강연선",
        "spec": "조가선",
        "unit": "㎞",
        "labors": {
            "통신외선공": 11.16,
            "특별인부": 7.44
        },
        "category": "pipe",
        "page": 86,
        "keywords": [
            "110㎟ 아연도 강연선",
            "조가선"
        ]
    },
    {
        "code": "통신 2-4-5",
        "name": "Y 선설치",
        "spec": "조가선",
        "unit": "개소",
        "labors": {
            "통신외선공": 1.07
        },
        "category": "pipe",
        "page": 86,
        "keywords": [
            "Y 선설치",
            "조가선"
        ]
    },
    {
        "code": "통신 2-4-5",
        "name": "가선심 볼(절 차)",
        "spec": "조가선",
        "unit": "개소",
        "labors": {
            "통신외선공": 2.52
        },
        "category": "pipe",
        "page": 86,
        "keywords": [
            "가선심 볼(절 차)",
            "조가선"
        ]
    },
    {
        "code": "통신 2-4-5",
        "name": "가선콤파운드(절차)",
        "spec": "조가선",
        "unit": "개소",
        "labors": {
            "통신외선공": 4.66
        },
        "category": "pipe",
        "page": 86,
        "keywords": [
            "가선콤파운드(절차)",
            "조가선"
        ]
    },
    {
        "code": "통신 2-4-5",
        "name": "가선콤파운드",
        "spec": "조가선",
        "unit": "㎞",
        "labors": {
            "통신외선공": 21.3
        },
        "category": "pipe",
        "page": 86,
        "keywords": [
            "가선콤파운드",
            "조가선"
        ]
    },
    {
        "code": "통신 2-4-5",
        "name": "가선심볼",
        "spec": "조가선",
        "unit": "㎞",
        "labors": {
            "통신외선공": 14.6
        },
        "category": "pipe",
        "page": 86,
        "keywords": [
            "가선심볼",
            "조가선"
        ]
    },
    {
        "code": "통신 2-4-5",
        "name": "프리텐숀",
        "spec": "조가선",
        "unit": "개소",
        "labors": {
            "통신외선공": 0.58
        },
        "category": "pipe",
        "page": 86,
        "keywords": [
            "프리텐숀",
            "조가선"
        ]
    },
    {
        "code": "통신 2-4-5",
        "name": "밴드",
        "spec": "조가선",
        "unit": "10개",
        "labors": {
            "통신외선공": 0.58,
            "특별인부": 0.29
        },
        "category": "pipe",
        "page": 86,
        "keywords": [
            "밴드",
            "조가선"
        ]
    },
    {
        "code": "통신 2-4-5",
        "name": "클램프",
        "spec": "조가선",
        "unit": "10개",
        "labors": {
            "통신외선공": 0.28,
            "특별인부": 0.1
        },
        "category": "pipe",
        "page": 86,
        "keywords": [
            "클램프",
            "조가선"
        ]
    },
    {
        "code": "통신 2-4-5",
        "name": "턴버클",
        "spec": "조가선",
        "unit": "10개",
        "labors": {
            "통신외선공": 0.56,
            "특별인부": 0.28
        },
        "category": "pipe",
        "page": 86,
        "keywords": [
            "턴버클",
            "조가선"
        ]
    },
    {
        "code": "통신 2-4-5",
        "name": "지지용볼트",
        "spec": "조가선",
        "unit": "10개",
        "labors": {
            "통신외선공": 0.84,
            "특별인부": 0.84
        },
        "category": "pipe",
        "page": 86,
        "keywords": [
            "지지용볼트",
            "조가선"
        ]
    },
    {
        "code": "통신 2-4-6",
        "name": "케이블 행거 설치 55㎜~105㎜",
        "spec": "케이블 행거(Hanger)",
        "unit": "㎞",
        "labors": {
            "통신케이블공": 1.92,
            "보통인부": 2.16
        },
        "category": "pipe",
        "page": 86,
        "keywords": [
            "케이블 행거 설치 55㎜~105㎜",
            "케이블 행거(Hanger)"
        ]
    },
    {
        "code": "통신 2-4-7",
        "name": "PVC, 광케이블",
        "spec": "케이블 바인딩(Binding)",
        "unit": "㎞",
        "labors": {
            "통신케이블공": 5.6,
            "보통인부": 2.8
        },
        "category": "pipe",
        "page": 87,
        "keywords": [
            "PVC, 광케이블",
            "케이블 바인딩(Binding)"
        ]
    },
    {
        "code": "통신 2-4-8",
        "name": "설치시",
        "spec": "전봇대 부대설비",
        "unit": "매",
        "labors": {
            "보통인부": 0.06
        },
        "category": "pipe",
        "page": 87,
        "keywords": [
            "설치시",
            "전봇대 부대설비"
        ]
    },
    {
        "code": "통신 2-4-8",
        "name": "기입시",
        "spec": "전봇대 부대설비",
        "unit": "매",
        "labors": {
            "보통인부": 0.04
        },
        "category": "pipe",
        "page": 87,
        "keywords": [
            "기입시",
            "전봇대 부대설비"
        ]
    },
    {
        "code": "통신 2-4-8",
        "name": "차량충돌 예방용 전봇대도색판",
        "spec": "전봇대 부대설비",
        "unit": "매",
        "labors": {
            "보통인부": 0.15
        },
        "category": "pipe",
        "page": 87,
        "keywords": [
            "차량충돌 예방용 전봇대도색판",
            "전봇대 부대설비"
        ]
    },
    {
        "code": "통신 2-4-8",
        "name": "지하매설물 조사",
        "spec": "전봇대 부대설비",
        "unit": "㎥",
        "labors": {
            "보통인부": 0.43
        },
        "category": "pipe",
        "page": 87,
        "keywords": [
            "지하매설물 조사",
            "전봇대 부대설비"
        ]
    },
    {
        "code": "통신 3-2-1",
        "name": "Concrete Box",
        "spec": "박스(BOX), 풀박스(Pull-Box), 시스템 박스 등",
        "unit": "개",
        "labors": {
            "통신내선공": 0.11
        },
        "category": "pipe",
        "page": 93,
        "keywords": [
            "Concrete Box",
            "박스(BOX), 풀박스(Pull-Box), 시스템 박스 등"
        ]
    },
    {
        "code": "통신 3-2-1",
        "name": "Outlet Box",
        "spec": "박스(BOX), 풀박스(Pull-Box), 시스템 박스 등",
        "unit": "개",
        "labors": {
            "통신내선공": 0.18
        },
        "category": "pipe",
        "page": 93,
        "keywords": [
            "Outlet Box",
            "박스(BOX), 풀박스(Pull-Box), 시스템 박스 등"
        ]
    },
    {
        "code": "통신 3-2-1",
        "name": "Switch Box (3개용이하)",
        "spec": "박스(BOX), 풀박스(Pull-Box), 시스템 박스 등",
        "unit": "개",
        "labors": {
            "통신내선공": 0.18
        },
        "category": "pipe",
        "page": 93,
        "keywords": [
            "Switch Box (3개용이하)",
            "박스(BOX), 풀박스(Pull-Box), 시스템 박스 등"
        ]
    },
    {
        "code": "통신 3-2-1",
        "name": "Switch Box (4개용이상)",
        "spec": "박스(BOX), 풀박스(Pull-Box), 시스템 박스 등",
        "unit": "개",
        "labors": {
            "통신내선공": 0.25
        },
        "category": "pipe",
        "page": 93,
        "keywords": [
            "Switch Box (4개용이상)",
            "박스(BOX), 풀박스(Pull-Box), 시스템 박스 등"
        ]
    },
    {
        "code": "통신 3-2-1",
        "name": "연결용 박스",
        "spec": "박스(BOX), 풀박스(Pull-Box), 시스템 박스 등",
        "unit": "개",
        "labors": {
            "통신내선공": 0.04
        },
        "category": "pipe",
        "page": 93,
        "keywords": [
            "연결용 박스",
            "박스(BOX), 풀박스(Pull-Box), 시스템 박스 등"
        ]
    },
    {
        "code": "통신 3-2-1",
        "name": "시스템 박스",
        "spec": "박스(BOX), 풀박스(Pull-Box), 시스템 박스 등",
        "unit": "개",
        "labors": {
            "통신내선공": 0.21
        },
        "category": "pipe",
        "page": 93,
        "keywords": [
            "시스템 박스",
            "박스(BOX), 풀박스(Pull-Box), 시스템 박스 등"
        ]
    },
    {
        "code": "통신 3-2-1",
        "name": "- 천장면 : 단면적 100 이하(깊이10이하)",
        "spec": "박스(BOX), 풀박스(Pull-Box), 시스템 박스 등",
        "unit": "개",
        "labors": {
            "통신내선공": 0.04
        },
        "category": "pipe",
        "page": 93,
        "keywords": [
            "- 천장면 : 단면적 100 이하(깊이10이하)",
            "박스(BOX), 풀박스(Pull-Box), 시스템 박스 등"
        ]
    },
    {
        "code": "통신 3-2-1",
        "name": "단면적 625 이하(깊이20이하)",
        "spec": "박스(BOX), 풀박스(Pull-Box), 시스템 박스 등",
        "unit": "개",
        "labors": {
            "통신내선공": 0.55
        },
        "category": "pipe",
        "page": 93,
        "keywords": [
            "단면적 625 이하(깊이20이하)",
            "박스(BOX), 풀박스(Pull-Box), 시스템 박스 등"
        ]
    },
    {
        "code": "통신 3-2-1",
        "name": "단면적 900 이하(깊이30이하)",
        "spec": "박스(BOX), 풀박스(Pull-Box), 시스템 박스 등",
        "unit": "개",
        "labors": {
            "통신내선공": 0.6
        },
        "category": "pipe",
        "page": 93,
        "keywords": [
            "단면적 900 이하(깊이30이하)",
            "박스(BOX), 풀박스(Pull-Box), 시스템 박스 등"
        ]
    },
    {
        "code": "통신 3-2-1",
        "name": "단면적 1,600 이하(깊이30이하)",
        "spec": "박스(BOX), 풀박스(Pull-Box), 시스템 박스 등",
        "unit": "개",
        "labors": {
            "통신내선공": 0.66
        },
        "category": "pipe",
        "page": 93,
        "keywords": [
            "단면적 1,600 이하(깊이30이하)",
            "박스(BOX), 풀박스(Pull-Box), 시스템 박스 등"
        ]
    },
    {
        "code": "통신 3-2-1",
        "name": "단면적 4,900 이하(깊이40이하)",
        "spec": "박스(BOX), 풀박스(Pull-Box), 시스템 박스 등",
        "unit": "개",
        "labors": {
            "통신내선공": 0.95
        },
        "category": "pipe",
        "page": 93,
        "keywords": [
            "단면적 4,900 이하(깊이40이하)",
            "박스(BOX), 풀박스(Pull-Box), 시스템 박스 등"
        ]
    },
    {
        "code": "통신 3-2-1",
        "name": "단면적 10,000 이하(깊이15이하)",
        "spec": "박스(BOX), 풀박스(Pull-Box), 시스템 박스 등",
        "unit": "개",
        "labors": {
            "통신내선공": 1.23
        },
        "category": "pipe",
        "page": 93,
        "keywords": [
            "단면적 10,000 이하(깊이15이하)",
            "박스(BOX), 풀박스(Pull-Box), 시스템 박스 등"
        ]
    },
    {
        "code": "통신 3-2-1",
        "name": "단면적 14,400 이하(깊이15이하)",
        "spec": "박스(BOX), 풀박스(Pull-Box), 시스템 박스 등",
        "unit": "개",
        "labors": {
            "통신내선공": 1.56
        },
        "category": "pipe",
        "page": 93,
        "keywords": [
            "단면적 14,400 이하(깊이15이하)",
            "박스(BOX), 풀박스(Pull-Box), 시스템 박스 등"
        ]
    },
    {
        "code": "통신 3-2-1",
        "name": "단면적 22,500 이하(깊이25이하)",
        "spec": "박스(BOX), 풀박스(Pull-Box), 시스템 박스 등",
        "unit": "개",
        "labors": {
            "통신내선공": 3.0
        },
        "category": "pipe",
        "page": 93,
        "keywords": [
            "단면적 22,500 이하(깊이25이하)",
            "박스(BOX), 풀박스(Pull-Box), 시스템 박스 등"
        ]
    },
    {
        "code": "통신 3-2-1",
        "name": "단면적 40,000 이하(깊이30이하)",
        "spec": "박스(BOX), 풀박스(Pull-Box), 시스템 박스 등",
        "unit": "개",
        "labors": {
            "통신내선공": 5.64
        },
        "category": "pipe",
        "page": 93,
        "keywords": [
            "단면적 40,000 이하(깊이30이하)",
            "박스(BOX), 풀박스(Pull-Box), 시스템 박스 등"
        ]
    },
    {
        "code": "통신 3-2-1",
        "name": "- 벽면 : 단면적 100 이하(깊이10이하)",
        "spec": "박스(BOX), 풀박스(Pull-Box), 시스템 박스 등",
        "unit": "개",
        "labors": {
            "통신내선공": 0.17
        },
        "category": "pipe",
        "page": 93,
        "keywords": [
            "- 벽면 : 단면적 100 이하(깊이10이하)",
            "박스(BOX), 풀박스(Pull-Box), 시스템 박스 등"
        ]
    },
    {
        "code": "통신 3-2-2",
        "name": "박스(Box)",
        "spec": "박스용 연결접지선(Bond Earth)",
        "unit": "10개소",
        "labors": {
            "통신내선공": 0.1
        },
        "category": "pipe",
        "page": 94,
        "keywords": [
            "박스(Box)",
            "박스용 연결접지선(Bond Earth)"
        ]
    },
    {
        "code": "통신 3-2-2",
        "name": "후강 전선관 Ø16㎜ ~ 36㎜",
        "spec": "박스용 연결접지선(Bond Earth)",
        "unit": "10개소",
        "labors": {
            "통신내선공": 0.23
        },
        "category": "pipe",
        "page": 94,
        "keywords": [
            "후강 전선관 Ø16㎜ ~ 36㎜",
            "박스용 연결접지선(Bond Earth)"
        ]
    },
    {
        "code": "통신 3-3-1",
        "name": "단면적 500이하(깊이10이하)",
        "spec": "단자함",
        "unit": "개",
        "labors": {
            "통신내선공": 0.5,
            "보통인부": 0.5
        },
        "category": "pipe",
        "page": 95,
        "keywords": [
            "단면적 500이하(깊이10이하)",
            "단자함"
        ]
    },
    {
        "code": "통신 3-3-1",
        "name": "단면적 1800이하(깊이13이하)",
        "spec": "단자함",
        "unit": "개",
        "labors": {
            "통신내선공": 0.58,
            "보통인부": 0.58
        },
        "category": "pipe",
        "page": 95,
        "keywords": [
            "단면적 1800이하(깊이13이하)",
            "단자함"
        ]
    },
    {
        "code": "통신 3-3-1",
        "name": "단면적 5,250이하(깊이15이하)",
        "spec": "단자함",
        "unit": "개",
        "labors": {
            "통신내선공": 0.7,
            "보통인부": 0.7
        },
        "category": "pipe",
        "page": 95,
        "keywords": [
            "단면적 5,250이하(깊이15이하)",
            "단자함"
        ]
    },
    {
        "code": "통신 3-3-1",
        "name": "단자함 단면적 11,000이하(깊이15이하)",
        "spec": "단자함",
        "unit": "개",
        "labors": {
            "통신내선공": 0.86,
            "보통인부": 0.86
        },
        "category": "pipe",
        "page": 95,
        "keywords": [
            "단자함 단면적 11,000이하(깊이15이하)",
            "단자함"
        ]
    },
    {
        "code": "통신 3-3-1",
        "name": "단면적 18,200이하(깊이18이하)",
        "spec": "단자함",
        "unit": "개",
        "labors": {
            "통신내선공": 1.1,
            "보통인부": 1.1
        },
        "category": "pipe",
        "page": 95,
        "keywords": [
            "단면적 18,200이하(깊이18이하)",
            "단자함"
        ]
    },
    {
        "code": "통신 3-3-1",
        "name": "단면적 27,200이하(깊이25이하)",
        "spec": "단자함",
        "unit": "개",
        "labors": {
            "통신내선공": 2.1,
            "보통인부": 2.1
        },
        "category": "pipe",
        "page": 95,
        "keywords": [
            "단면적 27,200이하(깊이25이하)",
            "단자함"
        ]
    },
    {
        "code": "통신 3-3-2",
        "name": "15P 이하",
        "spec": "배선반",
        "unit": "개",
        "labors": {
            "통신케이블공": 0.34,
            "보통인부": 0.17
        },
        "category": "pipe",
        "page": 95,
        "keywords": [
            "15P 이하",
            "배선반"
        ]
    },
    {
        "code": "통신 3-3-2",
        "name": "25P 이하",
        "spec": "배선반",
        "unit": "개",
        "labors": {
            "통신케이블공": 0.36,
            "보통인부": 0.18
        },
        "category": "pipe",
        "page": 95,
        "keywords": [
            "25P 이하",
            "배선반"
        ]
    },
    {
        "code": "통신 3-3-2",
        "name": "50P 이하",
        "spec": "배선반",
        "unit": "개",
        "labors": {
            "통신케이블공": 0.65,
            "보통인부": 0.45
        },
        "category": "pipe",
        "page": 95,
        "keywords": [
            "50P 이하",
            "배선반"
        ]
    },
    {
        "code": "통신 3-3-2",
        "name": "100P 이하",
        "spec": "배선반",
        "unit": "개",
        "labors": {
            "통신케이블공": 0.69,
            "보통인부": 0.49
        },
        "category": "pipe",
        "page": 95,
        "keywords": [
            "100P 이하",
            "배선반"
        ]
    },
    {
        "code": "통신 3-3-2",
        "name": "150P 이하",
        "spec": "배선반",
        "unit": "개",
        "labors": {
            "통신케이블공": 0.78,
            "보통인부": 0.54
        },
        "category": "pipe",
        "page": 95,
        "keywords": [
            "150P 이하",
            "배선반"
        ]
    },
    {
        "code": "통신 3-3-2",
        "name": "200P 이하",
        "spec": "배선반",
        "unit": "개",
        "labors": {
            "통신케이블공": 0.82,
            "보통인부": 0.59
        },
        "category": "pipe",
        "page": 95,
        "keywords": [
            "200P 이하",
            "배선반"
        ]
    },
    {
        "code": "통신 3-3-2",
        "name": "단자함 250P 이하",
        "spec": "배선반",
        "unit": "개",
        "labors": {
            "통신케이블공": 0.89,
            "보통인부": 0.64
        },
        "category": "pipe",
        "page": 95,
        "keywords": [
            "단자함 250P 이하",
            "배선반"
        ]
    },
    {
        "code": "통신 3-3-2",
        "name": "300P 250P 이하",
        "spec": "배선반",
        "unit": "개",
        "labors": {
            "통신케이블공": 0.97,
            "보통인부": 0.69
        },
        "category": "pipe",
        "page": 95,
        "keywords": [
            "300P 250P 이하",
            "배선반"
        ]
    },
    {
        "code": "통신 3-3-2",
        "name": "350P 250P 이하",
        "spec": "배선반",
        "unit": "개",
        "labors": {
            "통신케이블공": 1.06,
            "보통인부": 0.74
        },
        "category": "pipe",
        "page": 95,
        "keywords": [
            "350P 250P 이하",
            "배선반"
        ]
    },
    {
        "code": "통신 3-3-2",
        "name": "400P 250P 이하",
        "spec": "배선반",
        "unit": "개",
        "labors": {
            "통신케이블공": 1.15,
            "보통인부": 0.8
        },
        "category": "pipe",
        "page": 95,
        "keywords": [
            "400P 250P 이하",
            "배선반"
        ]
    },
    {
        "code": "통신 3-3-2",
        "name": "450P 250P 이하",
        "spec": "배선반",
        "unit": "개",
        "labors": {
            "통신케이블공": 1.25,
            "보통인부": 0.86
        },
        "category": "pipe",
        "page": 95,
        "keywords": [
            "450P 250P 이하",
            "배선반"
        ]
    },
    {
        "code": "통신 3-3-2",
        "name": "500P 250P 이하",
        "spec": "배선반",
        "unit": "개",
        "labors": {
            "통신케이블공": 1.36,
            "보통인부": 0.93
        },
        "category": "pipe",
        "page": 95,
        "keywords": [
            "500P 250P 이하",
            "배선반"
        ]
    },
    {
        "code": "통신 3-3-2",
        "name": "600P 250P 이하",
        "spec": "배선반",
        "unit": "개",
        "labors": {
            "통신케이블공": 1.61,
            "보통인부": 1.09
        },
        "category": "pipe",
        "page": 95,
        "keywords": [
            "600P 250P 이하",
            "배선반"
        ]
    },
    {
        "code": "통신 3-3-2",
        "name": "배선함 10P 이하",
        "spec": "배선반",
        "unit": "개",
        "labors": {
            "통신케이블공": 0.65,
            "보통인부": 0.45
        },
        "category": "pipe",
        "page": 95,
        "keywords": [
            "배선함 10P 이하",
            "배선반"
        ]
    },
    {
        "code": "통신 3-3-2",
        "name": "50P 10P 이하",
        "spec": "배선반",
        "unit": "개",
        "labors": {
            "통신케이블공": 0.72,
            "보통인부": 0.45
        },
        "category": "pipe",
        "page": 95,
        "keywords": [
            "50P 10P 이하",
            "배선반"
        ]
    },
    {
        "code": "통신 3-3-2",
        "name": "종말단자 10P 이하",
        "spec": "배선반",
        "unit": "개",
        "labors": {
            "통신케이블공": 0.2,
            "보통인부": 0.1
        },
        "category": "pipe",
        "page": 95,
        "keywords": [
            "종말단자 10P 이하",
            "배선반"
        ]
    },
    {
        "code": "통신 3-3-2",
        "name": "25P 10P 이하",
        "spec": "배선반",
        "unit": "개",
        "labors": {
            "통신케이블공": 0.24,
            "보통인부": 0.12
        },
        "category": "pipe",
        "page": 95,
        "keywords": [
            "25P 10P 이하",
            "배선반"
        ]
    },
    {
        "code": "통신 3-3-2",
        "name": "피뢰탄기반 100P 이하",
        "spec": "배선반",
        "unit": "개",
        "labors": {
            "통신내선공": 0.3
        },
        "category": "pipe",
        "page": 95,
        "keywords": [
            "피뢰탄기반 100P 이하",
            "배선반"
        ]
    },
    {
        "code": "통신 3-4-1",
        "name": "폭 200㎜ 이하 2.10",
        "spec": "케이블랙 및 트레이",
        "unit": "10m",
        "labors": {
            "통신내선공": 1.58
        },
        "category": "pipe",
        "page": 97,
        "keywords": [
            "폭 200㎜ 이하 2.10",
            "케이블랙 및 트레이"
        ]
    },
    {
        "code": "통신 3-4-1",
        "name": "300㎜ 200㎜ 이하 2.10",
        "spec": "케이블랙 및 트레이",
        "unit": "10m",
        "labors": {
            "통신내선공": 2.0
        },
        "category": "pipe",
        "page": 97,
        "keywords": [
            "300㎜ 200㎜ 이하 2.10",
            "케이블랙 및 트레이"
        ]
    },
    {
        "code": "통신 3-4-1",
        "name": "400㎜ 200㎜ 이하 2.10",
        "spec": "케이블랙 및 트레이",
        "unit": "10m",
        "labors": {
            "통신내선공": 2.49
        },
        "category": "pipe",
        "page": 97,
        "keywords": [
            "400㎜ 200㎜ 이하 2.10",
            "케이블랙 및 트레이"
        ]
    },
    {
        "code": "통신 3-4-1",
        "name": "500㎜ 200㎜ 이하 2.10",
        "spec": "케이블랙 및 트레이",
        "unit": "10m",
        "labors": {
            "통신내선공": 3.12
        },
        "category": "pipe",
        "page": 97,
        "keywords": [
            "500㎜ 200㎜ 이하 2.10",
            "케이블랙 및 트레이"
        ]
    },
    {
        "code": "통신 3-4-1",
        "name": "600㎜ 200㎜ 이하 2.10",
        "spec": "케이블랙 및 트레이",
        "unit": "10m",
        "labors": {
            "통신내선공": 3.64
        },
        "category": "pipe",
        "page": 97,
        "keywords": [
            "600㎜ 200㎜ 이하 2.10",
            "케이블랙 및 트레이"
        ]
    },
    {
        "code": "통신 3-4-1",
        "name": "800㎜ 200㎜ 이하 2.10",
        "spec": "케이블랙 및 트레이",
        "unit": "10m",
        "labors": {
            "통신내선공": 4.13
        },
        "category": "pipe",
        "page": 97,
        "keywords": [
            "800㎜ 200㎜ 이하 2.10",
            "케이블랙 및 트레이"
        ]
    },
    {
        "code": "통신 3-4-1",
        "name": "1,000㎜ 200㎜ 이하 2.10",
        "spec": "케이블랙 및 트레이",
        "unit": "10m",
        "labors": {
            "통신내선공": 5.11
        },
        "category": "pipe",
        "page": 97,
        "keywords": [
            "1,000㎜ 200㎜ 이하 2.10",
            "케이블랙 및 트레이"
        ]
    },
    {
        "code": "통신 3-4-2",
        "name": "폭 200㎜ 이하 1.50",
        "spec": "조립식 케이블트레이",
        "unit": "10m",
        "labors": {
            "통신내선공": 1.1
        },
        "category": "pipe",
        "page": 97,
        "keywords": [
            "폭 200㎜ 이하 1.50",
            "조립식 케이블트레이"
        ]
    },
    {
        "code": "통신 3-4-2",
        "name": "300㎜ 200㎜ 이하 1.50",
        "spec": "조립식 케이블트레이",
        "unit": "10m",
        "labors": {
            "통신내선공": 1.4
        },
        "category": "pipe",
        "page": 97,
        "keywords": [
            "300㎜ 200㎜ 이하 1.50",
            "조립식 케이블트레이"
        ]
    },
    {
        "code": "통신 3-4-2",
        "name": "400㎜ 200㎜ 이하 1.50",
        "spec": "조립식 케이블트레이",
        "unit": "10m",
        "labors": {
            "통신내선공": 1.8
        },
        "category": "pipe",
        "page": 97,
        "keywords": [
            "400㎜ 200㎜ 이하 1.50",
            "조립식 케이블트레이"
        ]
    },
    {
        "code": "통신 3-4-2",
        "name": "500㎜ 200㎜ 이하 1.50",
        "spec": "조립식 케이블트레이",
        "unit": "10m",
        "labors": {
            "통신내선공": 2.1
        },
        "category": "pipe",
        "page": 97,
        "keywords": [
            "500㎜ 200㎜ 이하 1.50",
            "조립식 케이블트레이"
        ]
    },
    {
        "code": "통신 3-4-2",
        "name": "600㎜ 200㎜ 이하 1.50",
        "spec": "조립식 케이블트레이",
        "unit": "10m",
        "labors": {
            "통신내선공": 2.9
        },
        "category": "pipe",
        "page": 97,
        "keywords": [
            "600㎜ 200㎜ 이하 1.50",
            "조립식 케이블트레이"
        ]
    },
    {
        "code": "통신 3-4-2",
        "name": "800㎜ 200㎜ 이하 1.50",
        "spec": "조립식 케이블트레이",
        "unit": "10m",
        "labors": {
            "통신내선공": 3.2
        },
        "category": "pipe",
        "page": 97,
        "keywords": [
            "800㎜ 200㎜ 이하 1.50",
            "조립식 케이블트레이"
        ]
    },
    {
        "code": "통신 3-4-2",
        "name": "1,000㎜ 200㎜ 이하 1.50",
        "spec": "조립식 케이블트레이",
        "unit": "10m",
        "labors": {
            "통신내선공": 4.2
        },
        "category": "pipe",
        "page": 97,
        "keywords": [
            "1,000㎜ 200㎜ 이하 1.50",
            "조립식 케이블트레이"
        ]
    },
    {
        "code": "통신 3-5-1",
        "name": "F4 35 × 41",
        "spec": "플로어덕트",
        "unit": "m",
        "labors": {
            "통신내선공": 0.6
        },
        "category": "pipe",
        "page": 98,
        "keywords": [
            "F4 35 × 41",
            "플로어덕트"
        ]
    },
    {
        "code": "통신 3-5-1",
        "name": "F7 35 × 73",
        "spec": "플로어덕트",
        "unit": "m",
        "labors": {
            "통신내선공": 0.7
        },
        "category": "pipe",
        "page": 98,
        "keywords": [
            "F7 35 × 73",
            "플로어덕트"
        ]
    },
    {
        "code": "통신 3-5-1",
        "name": "F5 25 × 51",
        "spec": "플로어덕트",
        "unit": "m",
        "labors": {
            "통신내선공": 0.5
        },
        "category": "pipe",
        "page": 98,
        "keywords": [
            "F5 25 × 51",
            "플로어덕트"
        ]
    },
    {
        "code": "통신 3-5-1",
        "name": "F6 노스타드 25 × 51",
        "spec": "플로어덕트",
        "unit": "m",
        "labors": {
            "통신내선공": 0.5
        },
        "category": "pipe",
        "page": 98,
        "keywords": [
            "F6 노스타드 25 × 51",
            "플로어덕트"
        ]
    },
    {
        "code": "통신 3-5-1",
        "name": "F6 23 × 60",
        "spec": "플로어덕트",
        "unit": "m",
        "labors": {
            "통신내선공": 0.6
        },
        "category": "pipe",
        "page": 98,
        "keywords": [
            "F6 23 × 60",
            "플로어덕트"
        ]
    },
    {
        "code": "통신 3-5-1",
        "name": "F6 노스타드 25 × 55",
        "spec": "플로어덕트",
        "unit": "m",
        "labors": {
            "통신내선공": 0.5
        },
        "category": "pipe",
        "page": 98,
        "keywords": [
            "F6 노스타드 25 × 55",
            "플로어덕트"
        ]
    },
    {
        "code": "통신 3-5-1",
        "name": "F8 23 × 80",
        "spec": "플로어덕트",
        "unit": "m",
        "labors": {
            "통신내선공": 0.6
        },
        "category": "pipe",
        "page": 98,
        "keywords": [
            "F8 23 × 80",
            "플로어덕트"
        ]
    },
    {
        "code": "통신 3-5-1",
        "name": "Junction Box 대형",
        "spec": "플로어덕트",
        "unit": "개",
        "labors": {
            "통신내선공": 1.0
        },
        "category": "pipe",
        "page": 98,
        "keywords": [
            "Junction Box 대형",
            "플로어덕트"
        ]
    },
    {
        "code": "통신 3-5-1",
        "name": "Junction Box 중형",
        "spec": "플로어덕트",
        "unit": "개",
        "labors": {
            "통신내선공": 0.9
        },
        "category": "pipe",
        "page": 98,
        "keywords": [
            "Junction Box 중형",
            "플로어덕트"
        ]
    },
    {
        "code": "통신 3-5-1",
        "name": "Junction Box 소형",
        "spec": "플로어덕트",
        "unit": "개",
        "labors": {
            "통신내선공": 0.8
        },
        "category": "pipe",
        "page": 98,
        "keywords": [
            "Junction Box 소형",
            "플로어덕트"
        ]
    },
    {
        "code": "통신 3-5-1",
        "name": "노출 Insert Cap",
        "spec": "플로어덕트",
        "unit": "개",
        "labors": {
            "통신내선공": 0.1
        },
        "category": "pipe",
        "page": 98,
        "keywords": [
            "노출 Insert Cap",
            "플로어덕트"
        ]
    },
    {
        "code": "통신 3-5-2",
        "name": "덕트 뚜껑 열기 - 100m 0.12",
        "spec": "금속덕트",
        "unit": "-",
        "labors": {
            "보통인부": 1.0
        },
        "category": "pipe",
        "page": 99,
        "keywords": [
            "덕트 뚜껑 열기 - 100m 0.12",
            "금속덕트"
        ]
    },
    {
        "code": "통신 3-5-2",
        "name": "덕트 뚜껑 닫기 - 100m 0.12",
        "spec": "금속덕트",
        "unit": "-",
        "labors": {
            "보통인부": 1.0
        },
        "category": "pipe",
        "page": 99,
        "keywords": [
            "덕트 뚜껑 닫기 - 100m 0.12",
            "금속덕트"
        ]
    },
    {
        "code": "통신 3-5-3",
        "name": "금속소형 210㎟ 이하",
        "spec": "몰딩(Molding)",
        "unit": "m",
        "labors": {
            "통신내선공": 0.16
        },
        "category": "pipe",
        "page": 100,
        "keywords": [
            "금속소형 210㎟ 이하",
            "몰딩(Molding)"
        ]
    },
    {
        "code": "통신 3-5-3",
        "name": "중형 595㎟ 이하",
        "spec": "몰딩(Molding)",
        "unit": "m",
        "labors": {
            "통신내선공": 0.18
        },
        "category": "pipe",
        "page": 100,
        "keywords": [
            "중형 595㎟ 이하",
            "몰딩(Molding)"
        ]
    },
    {
        "code": "통신 3-5-3",
        "name": "몰딩대형 600㎟ 초과",
        "spec": "몰딩(Molding)",
        "unit": "m",
        "labors": {
            "통신내선공": 0.22
        },
        "category": "pipe",
        "page": 100,
        "keywords": [
            "몰딩대형 600㎟ 초과",
            "몰딩(Molding)"
        ]
    },
    {
        "code": "통신 3-5-3",
        "name": "PVC몰딩 및 알루미늄몰딩(바닥)",
        "spec": "몰딩(Molding)",
        "unit": "10m",
        "labors": {
            "통신내선공": 0.25
        },
        "category": "pipe",
        "page": 100,
        "keywords": [
            "PVC몰딩 및 알루미늄몰딩(바닥)",
            "몰딩(Molding)"
        ]
    },
    {
        "code": "통신 3-5-4",
        "name": "40㎜ × 40㎜ 이하",
        "spec": "레이스웨이",
        "unit": "m",
        "labors": {
            "통신내선공": 0.3
        },
        "category": "pipe",
        "page": 100,
        "keywords": [
            "40㎜ × 40㎜ 이하",
            "레이스웨이"
        ]
    },
    {
        "code": "통신 3-5-4",
        "name": "70㎜ × 40㎜ 이하",
        "spec": "레이스웨이",
        "unit": "m",
        "labors": {
            "통신내선공": 0.44
        },
        "category": "pipe",
        "page": 100,
        "keywords": [
            "70㎜ × 40㎜ 이하",
            "레이스웨이"
        ]
    },
    {
        "code": "통신 3-5-4",
        "name": "110㎜ × 50㎜ 이하",
        "spec": "레이스웨이",
        "unit": "m",
        "labors": {
            "통신내선공": 0.76
        },
        "category": "pipe",
        "page": 100,
        "keywords": [
            "110㎜ × 50㎜ 이하",
            "레이스웨이"
        ]
    },
    {
        "code": "통신 3-6-1",
        "name": "우드 Floor 0.16",
        "spec": "액세스플로어(Access Floor)",
        "unit": "㎡",
        "labors": {
            "보통인부": 0.16
        },
        "category": "pipe",
        "page": 101,
        "keywords": [
            "우드 Floor 0.16",
            "액세스플로어(Access Floor)"
        ]
    },
    {
        "code": "통신 3-6-1",
        "name": "스틸 Floor 0.18",
        "spec": "액세스플로어(Access Floor)",
        "unit": "㎡",
        "labors": {
            "보통인부": 0.18
        },
        "category": "pipe",
        "page": 101,
        "keywords": [
            "스틸 Floor 0.18",
            "액세스플로어(Access Floor)"
        ]
    },
    {
        "code": "통신 3-6-1",
        "name": "우드스틸 Floor 0.19",
        "spec": "액세스플로어(Access Floor)",
        "unit": "㎡",
        "labors": {
            "보통인부": 0.19
        },
        "category": "pipe",
        "page": 101,
        "keywords": [
            "우드스틸 Floor 0.19",
            "액세스플로어(Access Floor)"
        ]
    },
    {
        "code": "통신 3-6-1",
        "name": "스틸콘크리트 Floor 0.21",
        "spec": "액세스플로어(Access Floor)",
        "unit": "㎡",
        "labors": {
            "보통인부": 0.21
        },
        "category": "pipe",
        "page": 101,
        "keywords": [
            "스틸콘크리트 Floor 0.21",
            "액세스플로어(Access Floor)"
        ]
    },
    {
        "code": "통신 3-7-2-3",
        "name": "25 0.10 0.10 0.28 0.17",
        "spec": "배관용 구멍뚫기(코어드릴 사용기준)",
        "unit": "개소",
        "labors": {
            "보통인부": 0.56
        },
        "category": "pipe",
        "page": 104,
        "keywords": [
            "25 0.10 0.10 0.28 0.17",
            "배관용 구멍뚫기(코어드릴 사용기준)"
        ]
    },
    {
        "code": "통신 3-7-2-3",
        "name": "50 0.12 0.12 0.43 0.21",
        "spec": "배관용 구멍뚫기(코어드릴 사용기준)",
        "unit": "개소",
        "labors": {
            "보통인부": 0.86
        },
        "category": "pipe",
        "page": 104,
        "keywords": [
            "50 0.12 0.12 0.43 0.21",
            "배관용 구멍뚫기(코어드릴 사용기준)"
        ]
    },
    {
        "code": "통신 3-7-2-3",
        "name": "70 0.14 0.14 0.58 0.25",
        "spec": "배관용 구멍뚫기(코어드릴 사용기준)",
        "unit": "개소",
        "labors": {
            "보통인부": 1.16
        },
        "category": "pipe",
        "page": 104,
        "keywords": [
            "70 0.14 0.14 0.58 0.25",
            "배관용 구멍뚫기(코어드릴 사용기준)"
        ]
    },
    {
        "code": "통신 3-7-2-3",
        "name": "100 0.17 0.17 0.73 0.29",
        "spec": "배관용 구멍뚫기(코어드릴 사용기준)",
        "unit": "개소",
        "labors": {
            "보통인부": 1.46
        },
        "category": "pipe",
        "page": 104,
        "keywords": [
            "100 0.17 0.17 0.73 0.29",
            "배관용 구멍뚫기(코어드릴 사용기준)"
        ]
    },
    {
        "code": "통신 3-7-2-3",
        "name": "구경 150 0.21 0.21 1.03 0.37",
        "spec": "배관용 구멍뚫기(코어드릴 사용기준)",
        "unit": "개소",
        "labors": {
            "보통인부": 2.06
        },
        "category": "pipe",
        "page": 104,
        "keywords": [
            "구경 150 0.21 0.21 1.03 0.37",
            "배관용 구멍뚫기(코어드릴 사용기준)"
        ]
    },
    {
        "code": "통신 3-7-2-3",
        "name": "(㎜ ) 200 0.25 0.25 1.33 0.45",
        "spec": "배관용 구멍뚫기(코어드릴 사용기준)",
        "unit": "개소",
        "labors": {
            "보통인부": 2.66
        },
        "category": "pipe",
        "page": 104,
        "keywords": [
            "(㎜ ) 200 0.25 0.25 1.33 0.45",
            "배관용 구멍뚫기(코어드릴 사용기준)"
        ]
    },
    {
        "code": "통신 3-7-2-3",
        "name": "250 0.30 0.30 1.63 0.53",
        "spec": "배관용 구멍뚫기(코어드릴 사용기준)",
        "unit": "개소",
        "labors": {
            "보통인부": 3.26
        },
        "category": "pipe",
        "page": 104,
        "keywords": [
            "250 0.30 0.30 1.63 0.53",
            "배관용 구멍뚫기(코어드릴 사용기준)"
        ]
    },
    {
        "code": "통신 3-7-2-3",
        "name": "300 0.34 0.34 1.93 0.60",
        "spec": "배관용 구멍뚫기(코어드릴 사용기준)",
        "unit": "개소",
        "labors": {
            "보통인부": 3.86
        },
        "category": "pipe",
        "page": 104,
        "keywords": [
            "300 0.34 0.34 1.93 0.60",
            "배관용 구멍뚫기(코어드릴 사용기준)"
        ]
    },
    {
        "code": "통신 3-7-2-3",
        "name": "350 0.38 0.38 2.23 0.68",
        "spec": "배관용 구멍뚫기(코어드릴 사용기준)",
        "unit": "개소",
        "labors": {
            "보통인부": 4.46
        },
        "category": "pipe",
        "page": 104,
        "keywords": [
            "350 0.38 0.38 2.23 0.68",
            "배관용 구멍뚫기(코어드릴 사용기준)"
        ]
    },
    {
        "code": "통신 3-7-2-3",
        "name": "400 0.43 0.43 2.53 0.76",
        "spec": "배관용 구멍뚫기(코어드릴 사용기준)",
        "unit": "개소",
        "labors": {
            "보통인부": 5.06
        },
        "category": "pipe",
        "page": 104,
        "keywords": [
            "400 0.43 0.43 2.53 0.76",
            "배관용 구멍뚫기(코어드릴 사용기준)"
        ]
    },
    {
        "code": "통신 3-7-2-3",
        "name": "25 0.12 0.12 0.36 0.22",
        "spec": "배관용 구멍뚫기(코어드릴 사용기준)",
        "unit": "개소",
        "labors": {
            "보통인부": 0.72
        },
        "category": "pipe",
        "page": 104,
        "keywords": [
            "25 0.12 0.12 0.36 0.22",
            "배관용 구멍뚫기(코어드릴 사용기준)"
        ]
    },
    {
        "code": "통신 3-7-2-3",
        "name": "50 0.15 0.15 0.55 0.27",
        "spec": "배관용 구멍뚫기(코어드릴 사용기준)",
        "unit": "개소",
        "labors": {
            "보통인부": 1.1
        },
        "category": "pipe",
        "page": 104,
        "keywords": [
            "50 0.15 0.15 0.55 0.27",
            "배관용 구멍뚫기(코어드릴 사용기준)"
        ]
    },
    {
        "code": "통신 3-7-2-3",
        "name": "70 0.18 0.18 0.75 0.32",
        "spec": "배관용 구멍뚫기(코어드릴 사용기준)",
        "unit": "개소",
        "labors": {
            "보통인부": 1.49
        },
        "category": "pipe",
        "page": 104,
        "keywords": [
            "70 0.18 0.18 0.75 0.32",
            "배관용 구멍뚫기(코어드릴 사용기준)"
        ]
    },
    {
        "code": "통신 3-7-2-3",
        "name": "100 0.21 0.21 0.93 0.37",
        "spec": "배관용 구멍뚫기(코어드릴 사용기준)",
        "unit": "개소",
        "labors": {
            "보통인부": 1.87
        },
        "category": "pipe",
        "page": 104,
        "keywords": [
            "100 0.21 0.21 0.93 0.37",
            "배관용 구멍뚫기(코어드릴 사용기준)"
        ]
    },
    {
        "code": "통신 3-7-2-3",
        "name": "구경 150 0.27 0.27 1.32 0.47",
        "spec": "배관용 구멍뚫기(코어드릴 사용기준)",
        "unit": "개소",
        "labors": {
            "보통인부": 2.64
        },
        "category": "pipe",
        "page": 104,
        "keywords": [
            "구경 150 0.27 0.27 1.32 0.47",
            "배관용 구멍뚫기(코어드릴 사용기준)"
        ]
    },
    {
        "code": "통신 3-7-2-3",
        "name": "(㎜ ) 200 0.32 0.32 1.71 0.57",
        "spec": "배관용 구멍뚫기(코어드릴 사용기준)",
        "unit": "개소",
        "labors": {
            "보통인부": 3.4
        },
        "category": "pipe",
        "page": 104,
        "keywords": [
            "(㎜ ) 200 0.32 0.32 1.71 0.57",
            "배관용 구멍뚫기(코어드릴 사용기준)"
        ]
    },
    {
        "code": "통신 3-7-2-3",
        "name": "250 0.38 0.38 2.09 0.67",
        "spec": "배관용 구멍뚫기(코어드릴 사용기준)",
        "unit": "개소",
        "labors": {
            "보통인부": 4.17
        },
        "category": "pipe",
        "page": 104,
        "keywords": [
            "250 0.38 0.38 2.09 0.67",
            "배관용 구멍뚫기(코어드릴 사용기준)"
        ]
    },
    {
        "code": "통신 3-7-2-3",
        "name": "300 0.43 0.43 2.47 0.77",
        "spec": "배관용 구멍뚫기(코어드릴 사용기준)",
        "unit": "개소",
        "labors": {
            "보통인부": 4.94
        },
        "category": "pipe",
        "page": 104,
        "keywords": [
            "300 0.43 0.43 2.47 0.77",
            "배관용 구멍뚫기(코어드릴 사용기준)"
        ]
    },
    {
        "code": "통신 3-7-2-3",
        "name": "350 0.49 0.49 2.86 0.87",
        "spec": "배관용 구멍뚫기(코어드릴 사용기준)",
        "unit": "개소",
        "labors": {
            "보통인부": 5.71
        },
        "category": "pipe",
        "page": 104,
        "keywords": [
            "350 0.49 0.49 2.86 0.87",
            "배관용 구멍뚫기(코어드릴 사용기준)"
        ]
    },
    {
        "code": "통신 3-7-2-3",
        "name": "400 0.54 0.54 3.24 0.98",
        "spec": "배관용 구멍뚫기(코어드릴 사용기준)",
        "unit": "개소",
        "labors": {
            "보통인부": 6.47
        },
        "category": "pipe",
        "page": 104,
        "keywords": [
            "400 0.54 0.54 3.24 0.98",
            "배관용 구멍뚫기(코어드릴 사용기준)"
        ]
    },
    {
        "code": "통신 4-1-3",
        "name": "광섬유케이블포설 12코어 이하 100m",
        "spec": "구내 광섬유케이블",
        "unit": "0.92",
        "labors": {
            "특별인부": 0.46
        },
        "category": "cable",
        "page": 113,
        "keywords": [
            "광섬유케이블포설 12코어 이하 100m",
            "구내 광섬유케이블"
        ]
    },
    {
        "code": "통신 4-1-3",
        "name": "24코어 이하 이하 100m",
        "spec": "구내 광섬유케이블",
        "unit": "1.32",
        "labors": {
            "특별인부": 0.67
        },
        "category": "cable",
        "page": 113,
        "keywords": [
            "24코어 이하 이하 100m",
            "구내 광섬유케이블"
        ]
    },
    {
        "code": "통신 4-1-3",
        "name": "광코어 공압포설 4코어 이하 100m",
        "spec": "구내 광섬유케이블",
        "unit": "0.12",
        "labors": {
            "특별인부": 0.09
        },
        "category": "cable",
        "page": 113,
        "keywords": [
            "광코어 공압포설 4코어 이하 100m",
            "구내 광섬유케이블"
        ]
    },
    {
        "code": "통신 4-1-3",
        "name": "(집합광섬유) 8코어 이하 이하 100m",
        "spec": "구내 광섬유케이블",
        "unit": "0.15",
        "labors": {
            "특별인부": 0.11
        },
        "category": "cable",
        "page": 113,
        "keywords": [
            "(집합광섬유) 8코어 이하 이하 100m",
            "구내 광섬유케이블"
        ]
    },
    {
        "code": "통신 4-1-3",
        "name": "9코어 이상 이하 이하 100m",
        "spec": "구내 광섬유케이블",
        "unit": "0.17",
        "labors": {
            "특별인부": 0.12
        },
        "category": "cable",
        "page": 113,
        "keywords": [
            "9코어 이상 이하 이하 100m",
            "구내 광섬유케이블"
        ]
    },
    {
        "code": "통신 4-1-3",
        "name": "광튜브 포설 7튜브 이하 100m",
        "spec": "구내 광섬유케이블",
        "unit": "0.49",
        "labors": {
            "보통인부": 0.83
        },
        "category": "cable",
        "page": 113,
        "keywords": [
            "광튜브 포설 7튜브 이하 100m",
            "구내 광섬유케이블"
        ]
    },
    {
        "code": "통신 4-1-3",
        "name": "8튜브 이상 7튜브 이하 100m",
        "spec": "구내 광섬유케이블",
        "unit": "0.58",
        "labors": {
            "보통인부": 0.95
        },
        "category": "cable",
        "page": 113,
        "keywords": [
            "8튜브 이상 7튜브 이하 100m",
            "구내 광섬유케이블"
        ]
    },
    {
        "code": "통신 4-1-3",
        "name": "슬림형내관포설 인력견인포설 100m",
        "spec": "구내 광섬유케이블",
        "unit": "0.34",
        "labors": {
            "보통인부": 0.51
        },
        "category": "cable",
        "page": 113,
        "keywords": [
            "슬림형내관포설 인력견인포설 100m",
            "구내 광섬유케이블"
        ]
    },
    {
        "code": "통신 4-1-3",
        "name": "성단 - 코어당",
        "spec": "구내 광섬유케이블",
        "unit": "0.06",
        "labors": {
            "특별인부": 0.05
        },
        "category": "cable",
        "page": 113,
        "keywords": [
            "성단 - 코어당",
            "구내 광섬유케이블"
        ]
    },
    {
        "code": "통신 4-1-3",
        "name": "시험 최종시험 코어당",
        "spec": "구내 광섬유케이블",
        "unit": "0.05",
        "labors": {
            "특별인부": 0.02
        },
        "category": "cable",
        "page": 113,
        "keywords": [
            "시험 최종시험 코어당",
            "구내 광섬유케이블"
        ]
    },
    {
        "code": "통신 4-1-3",
        "name": "반사손실측정 최종시험 코어당",
        "spec": "구내 광섬유케이블",
        "unit": "0.05",
        "labors": {
            "특별인부": 0.02
        },
        "category": "cable",
        "page": 113,
        "keywords": [
            "반사손실측정 최종시험 코어당",
            "구내 광섬유케이블"
        ]
    },
    {
        "code": "통신 4-1-3",
        "name": "광점퍼코드 - 10m",
        "spec": "구내 광섬유케이블",
        "unit": "0.07",
        "labors": {
            "특별인부": 0.08
        },
        "category": "cable",
        "page": 113,
        "keywords": [
            "광점퍼코드 - 10m",
            "구내 광섬유케이블"
        ]
    },
    {
        "code": "통신 4-1-4",
        "name": "지중포설 단면적 35㎟ 이하",
        "spec": "광전복합케이블",
        "unit": "100m",
        "labors": {
            "광케이블설치사": 1.34,
            "보통인부": 1.34
        },
        "category": "cable",
        "page": 114,
        "keywords": [
            "지중포설 단면적 35㎟ 이하",
            "광전복합케이블"
        ]
    },
    {
        "code": "통신 4-1-4",
        "name": "단면적 50㎟ 이하",
        "spec": "광전복합케이블",
        "unit": "100m",
        "labors": {
            "광케이블설치사": 1.79,
            "보통인부": 1.79
        },
        "category": "cable",
        "page": 114,
        "keywords": [
            "단면적 50㎟ 이하",
            "광전복합케이블"
        ]
    },
    {
        "code": "통신 4-1-4",
        "name": "가공포설 단면적 35㎟ 이하",
        "spec": "광전복합케이블",
        "unit": "100m",
        "labors": {
            "광케이블설치사": 1.61,
            "보통인부": 1.61
        },
        "category": "cable",
        "page": 114,
        "keywords": [
            "가공포설 단면적 35㎟ 이하",
            "광전복합케이블"
        ]
    },
    {
        "code": "통신 4-1-6",
        "name": "광섬유복합가공중성선 포설 95㎟",
        "spec": "광섬유복합가공중성선(OPNW, Optical Neutral Wire)",
        "unit": "100m",
        "labors": {
            "광케이블설치사": 1.41,
            "통신외선공": 0.52,
            "보통인부": 1.52
        },
        "category": "cable",
        "page": 117,
        "keywords": [
            "광섬유복합가공중성선 포설 95㎟",
            "광섬유복합가공중성선(OPNW, Optical Neutral Wire)"
        ]
    },
    {
        "code": "통신 4-1-7",
        "name": "관로구 방수장치 200㎜이하",
        "spec": "지중케이블 금속부속품",
        "unit": "개",
        "labors": {
            "통신외선공": 0.13,
            "보통인부": 0.13
        },
        "category": "cable",
        "page": 117,
        "keywords": [
            "관로구 방수장치 200㎜이하",
            "지중케이블 금속부속품"
        ]
    },
    {
        "code": "통신 4-1-7",
        "name": "케이블행거 -",
        "spec": "지중케이블 금속부속품",
        "unit": "개",
        "labors": {
            "통신외선공": 0.01,
            "보통인부": 0.01
        },
        "category": "cable",
        "page": 117,
        "keywords": [
            "케이블행거 -",
            "지중케이블 금속부속품"
        ]
    },
    {
        "code": "통신 4-1-7",
        "name": "케이블홀더 -",
        "spec": "지중케이블 금속부속품",
        "unit": "개",
        "labors": {
            "통신외선공": 0.01,
            "보통인부": 0.01
        },
        "category": "cable",
        "page": 117,
        "keywords": [
            "케이블홀더 -",
            "지중케이블 금속부속품"
        ]
    },
    {
        "code": "통신 4-1-7",
        "name": "행거안전캡 -",
        "spec": "지중케이블 금속부속품",
        "unit": "100개",
        "labors": {
            "통신외선공": 0.12,
            "보통인부": 0.12
        },
        "category": "cable",
        "page": 117,
        "keywords": [
            "행거안전캡 -",
            "지중케이블 금속부속품"
        ]
    },
    {
        "code": "통신 4-2-1",
        "name": "5C 이하",
        "spec": "동축케이블 포설",
        "unit": "10m",
        "labors": {
            "통신케이블공": 0.17
        },
        "category": "cable",
        "page": 118,
        "keywords": [
            "5C 이하",
            "동축케이블 포설"
        ]
    },
    {
        "code": "통신 4-2-1",
        "name": "옥내 7C",
        "spec": "동축케이블 포설",
        "unit": "10m",
        "labors": {
            "통신케이블공": 0.22
        },
        "category": "cable",
        "page": 118,
        "keywords": [
            "옥내 7C",
            "동축케이블 포설"
        ]
    },
    {
        "code": "통신 4-2-1",
        "name": "10C",
        "spec": "동축케이블 포설",
        "unit": "10m",
        "labors": {
            "통신케이블공": 0.32
        },
        "category": "cable",
        "page": 118,
        "keywords": [
            "10C",
            "동축케이블 포설"
        ]
    },
    {
        "code": "통신 4-2-1",
        "name": "5C 이하",
        "spec": "동축케이블 포설",
        "unit": "100m",
        "labors": {
            "통신케이블공": 0.41,
            "보통인부": 0.41
        },
        "category": "cable",
        "page": 118,
        "keywords": [
            "5C 이하",
            "동축케이블 포설"
        ]
    },
    {
        "code": "통신 4-2-1",
        "name": "7C",
        "spec": "동축케이블 포설",
        "unit": "100m",
        "labors": {
            "통신케이블공": 0.65,
            "보통인부": 0.52
        },
        "category": "cable",
        "page": 118,
        "keywords": [
            "7C",
            "동축케이블 포설"
        ]
    },
    {
        "code": "통신 4-2-1",
        "name": "지하 8C",
        "spec": "동축케이블 포설",
        "unit": "100m",
        "labors": {
            "통신케이블공": 0.74,
            "보통인부": 0.59
        },
        "category": "cable",
        "page": 118,
        "keywords": [
            "지하 8C",
            "동축케이블 포설"
        ]
    },
    {
        "code": "통신 4-2-1",
        "name": "포설 10C",
        "spec": "동축케이블 포설",
        "unit": "100m",
        "labors": {
            "통신케이블공": 0.93,
            "보통인부": 0.74
        },
        "category": "cable",
        "page": 118,
        "keywords": [
            "포설 10C",
            "동축케이블 포설"
        ]
    },
    {
        "code": "통신 4-2-1",
        "name": "12C",
        "spec": "동축케이블 포설",
        "unit": "100m",
        "labors": {
            "통신케이블공": 1.11,
            "보통인부": 0.89
        },
        "category": "cable",
        "page": 118,
        "keywords": [
            "12C",
            "동축케이블 포설"
        ]
    },
    {
        "code": "통신 4-2-1",
        "name": "17C",
        "spec": "동축케이블 포설",
        "unit": "100m",
        "labors": {
            "통신케이블공": 1.58,
            "보통인부": 1.26
        },
        "category": "cable",
        "page": 118,
        "keywords": [
            "17C",
            "동축케이블 포설"
        ]
    },
    {
        "code": "통신 4-3-2",
        "name": "RS-232C(10Pin)",
        "spec": "커넥터 및 Jack 접속",
        "unit": "10개",
        "labors": {
            "통신내선공": 0.49
        },
        "category": "cable",
        "page": 121,
        "keywords": [
            "RS-232C(10Pin)",
            "커넥터 및 Jack 접속"
        ]
    },
    {
        "code": "통신 4-3-2",
        "name": "Modular(RJ45-8Pin Plug)",
        "spec": "커넥터 및 Jack 접속",
        "unit": "10개",
        "labors": {
            "통신내선공": 0.13
        },
        "category": "cable",
        "page": 121,
        "keywords": [
            "Modular(RJ45-8Pin Plug)",
            "커넥터 및 Jack 접속"
        ]
    },
    {
        "code": "통신 4-3-2",
        "name": "Modular(Outlet)",
        "spec": "커넥터 및 Jack 접속",
        "unit": "10개",
        "labors": {
            "통신내선공": 0.28
        },
        "category": "cable",
        "page": 121,
        "keywords": [
            "Modular(Outlet)",
            "커넥터 및 Jack 접속"
        ]
    },
    {
        "code": "통신 4-3-2",
        "name": "TELCO(50Pin)",
        "spec": "커넥터 및 Jack 접속",
        "unit": "10개",
        "labors": {
            "통신내선공": 1.19
        },
        "category": "cable",
        "page": 121,
        "keywords": [
            "TELCO(50Pin)",
            "커넥터 및 Jack 접속"
        ]
    },
    {
        "code": "통신 4-3-2",
        "name": "Token Ring용 Data Line",
        "spec": "커넥터 및 Jack 접속",
        "unit": "10개",
        "labors": {
            "통신내선공": 0.84
        },
        "category": "cable",
        "page": 121,
        "keywords": [
            "Token Ring용 Data Line",
            "커넥터 및 Jack 접속"
        ]
    },
    {
        "code": "통신 4-4-1",
        "name": "1 C 10m 0.09 0.10 0.11 0.13",
        "spec": "제어용 케이블",
        "unit": "0.14",
        "labors": {
            "통신케이블공": 0.18
        },
        "category": "cable",
        "page": 123,
        "keywords": [
            "1 C 10m 0.09 0.10 0.11 0.13",
            "제어용 케이블"
        ]
    },
    {
        "code": "통신 4-4-1",
        "name": "2 C 10m 0.09 0.10 0.11 0.13",
        "spec": "제어용 케이블",
        "unit": "0.20",
        "labors": {
            "통신케이블공": 0.25
        },
        "category": "cable",
        "page": 123,
        "keywords": [
            "2 C 10m 0.09 0.10 0.11 0.13",
            "제어용 케이블"
        ]
    },
    {
        "code": "통신 4-4-1",
        "name": "3 C 10m 0.09 0.10 0.11 0.13",
        "spec": "제어용 케이블",
        "unit": "0.29",
        "labors": {
            "통신케이블공": 0.36
        },
        "category": "cable",
        "page": 123,
        "keywords": [
            "3 C 10m 0.09 0.10 0.11 0.13",
            "제어용 케이블"
        ]
    },
    {
        "code": "통신 4-4-1",
        "name": "4 C 10m 0.09 0.10 0.11 0.13",
        "spec": "제어용 케이블",
        "unit": "0.39",
        "labors": {
            "통신케이블공": 0.49
        },
        "category": "cable",
        "page": 123,
        "keywords": [
            "4 C 10m 0.09 0.10 0.11 0.13",
            "제어용 케이블"
        ]
    },
    {
        "code": "통신 4-4-1",
        "name": "5 C 10m 0.09 0.10 0.11 0.13",
        "spec": "제어용 케이블",
        "unit": "0.44",
        "labors": {
            "통신케이블공": 0.55
        },
        "category": "cable",
        "page": 123,
        "keywords": [
            "5 C 10m 0.09 0.10 0.11 0.13",
            "제어용 케이블"
        ]
    },
    {
        "code": "통신 4-4-1",
        "name": "6 C 10m 0.09 0.10 0.11 0.13",
        "spec": "제어용 케이블",
        "unit": "0.50",
        "labors": {
            "통신케이블공": 0.63
        },
        "category": "cable",
        "page": 123,
        "keywords": [
            "6 C 10m 0.09 0.10 0.11 0.13",
            "제어용 케이블"
        ]
    },
    {
        "code": "통신 4-4-1",
        "name": "7 C 10m 0.09 0.10 0.11 0.13",
        "spec": "제어용 케이블",
        "unit": "0.54",
        "labors": {
            "통신케이블공": 0.68
        },
        "category": "cable",
        "page": 123,
        "keywords": [
            "7 C 10m 0.09 0.10 0.11 0.13",
            "제어용 케이블"
        ]
    },
    {
        "code": "통신 4-4-1",
        "name": "8 C 10m 0.09 0.10 0.11 0.13",
        "spec": "제어용 케이블",
        "unit": "0.58",
        "labors": {
            "통신케이블공": 0.73
        },
        "category": "cable",
        "page": 123,
        "keywords": [
            "8 C 10m 0.09 0.10 0.11 0.13",
            "제어용 케이블"
        ]
    },
    {
        "code": "통신 4-4-1",
        "name": "10 C 10m 0.09 0.10 0.11 0.13",
        "spec": "제어용 케이블",
        "unit": "0.67",
        "labors": {
            "통신케이블공": 0.84
        },
        "category": "cable",
        "page": 123,
        "keywords": [
            "10 C 10m 0.09 0.10 0.11 0.13",
            "제어용 케이블"
        ]
    },
    {
        "code": "통신 4-5-2",
        "name": "Ø 1/2″",
        "spec": "커넥터",
        "unit": "개",
        "labors": {
            "통신내선공": 0.06
        },
        "category": "cable",
        "page": 124,
        "keywords": [
            "Ø 1/2″",
            "커넥터"
        ]
    },
    {
        "code": "통신 4-5-2",
        "name": "Ø ⅞″",
        "spec": "커넥터",
        "unit": "개",
        "labors": {
            "통신내선공": 0.07
        },
        "category": "cable",
        "page": 124,
        "keywords": [
            "Ø ⅞″",
            "커넥터"
        ]
    },
    {
        "code": "통신 4-5-2",
        "name": "Ø 1⅝″",
        "spec": "커넥터",
        "unit": "개",
        "labors": {
            "통신내선공": 0.09
        },
        "category": "cable",
        "page": 124,
        "keywords": [
            "Ø 1⅝″",
            "커넥터"
        ]
    },
    {
        "code": "통신 4-5-2",
        "name": "Ø 3⅛″",
        "spec": "커넥터",
        "unit": "개",
        "labors": {
            "통신내선공": 0.11
        },
        "category": "cable",
        "page": 124,
        "keywords": [
            "Ø 3⅛″",
            "커넥터"
        ]
    },
    {
        "code": "통신 4-5-2",
        "name": "Ø 4″",
        "spec": "커넥터",
        "unit": "개",
        "labors": {
            "통신내선공": 0.12
        },
        "category": "cable",
        "page": 124,
        "keywords": [
            "Ø 4″",
            "커넥터"
        ]
    },
    {
        "code": "통신 4-5-2",
        "name": "Ø 5″",
        "spec": "커넥터",
        "unit": "개",
        "labors": {
            "통신내선공": 0.13
        },
        "category": "cable",
        "page": 124,
        "keywords": [
            "Ø 5″",
            "커넥터"
        ]
    },
    {
        "code": "통신 4-5-2",
        "name": "Ø 6″",
        "spec": "커넥터",
        "unit": "개",
        "labors": {
            "통신내선공": 0.14
        },
        "category": "cable",
        "page": 124,
        "keywords": [
            "Ø 6″",
            "커넥터"
        ]
    },
    {
        "code": "통신 4-6-1",
        "name": "16㎟이하 단심",
        "spec": "통신용 구내 전력케이블",
        "unit": "10m",
        "labors": {
            "통신케이블공": 0.23
        },
        "category": "cable",
        "page": 125,
        "keywords": [
            "16㎟이하 단심",
            "통신용 구내 전력케이블"
        ]
    },
    {
        "code": "통신 4-6-1",
        "name": "25㎟이하 단심",
        "spec": "통신용 구내 전력케이블",
        "unit": "10m",
        "labors": {
            "통신케이블공": 0.3
        },
        "category": "cable",
        "page": 125,
        "keywords": [
            "25㎟이하 단심",
            "통신용 구내 전력케이블"
        ]
    },
    {
        "code": "통신 4-6-1",
        "name": "38㎟이하 단심",
        "spec": "통신용 구내 전력케이블",
        "unit": "10m",
        "labors": {
            "통신케이블공": 0.36
        },
        "category": "cable",
        "page": 125,
        "keywords": [
            "38㎟이하 단심",
            "통신용 구내 전력케이블"
        ]
    },
    {
        "code": "통신 4-6-1",
        "name": "50㎟이하 단심",
        "spec": "통신용 구내 전력케이블",
        "unit": "10m",
        "labors": {
            "통신케이블공": 0.43
        },
        "category": "cable",
        "page": 125,
        "keywords": [
            "50㎟이하 단심",
            "통신용 구내 전력케이블"
        ]
    },
    {
        "code": "통신 4-6-1",
        "name": "60㎟이하 단심",
        "spec": "통신용 구내 전력케이블",
        "unit": "10m",
        "labors": {
            "통신케이블공": 0.49
        },
        "category": "cable",
        "page": 125,
        "keywords": [
            "60㎟이하 단심",
            "통신용 구내 전력케이블"
        ]
    },
    {
        "code": "통신 4-6-1",
        "name": "70㎟이하 단심",
        "spec": "통신용 구내 전력케이블",
        "unit": "10m",
        "labors": {
            "통신케이블공": 0.57
        },
        "category": "cable",
        "page": 125,
        "keywords": [
            "70㎟이하 단심",
            "통신용 구내 전력케이블"
        ]
    },
    {
        "code": "통신 4-6-1",
        "name": "80㎟이하 단심",
        "spec": "통신용 구내 전력케이블",
        "unit": "10m",
        "labors": {
            "통신케이블공": 0.6
        },
        "category": "cable",
        "page": 125,
        "keywords": [
            "80㎟이하 단심",
            "통신용 구내 전력케이블"
        ]
    },
    {
        "code": "통신 4-6-1",
        "name": "100㎟이하 단심",
        "spec": "통신용 구내 전력케이블",
        "unit": "10m",
        "labors": {
            "통신케이블공": 0.71
        },
        "category": "cable",
        "page": 125,
        "keywords": [
            "100㎟이하 단심",
            "통신용 구내 전력케이블"
        ]
    },
    {
        "code": "통신 4-6-1",
        "name": "125㎟이하 단심",
        "spec": "통신용 구내 전력케이블",
        "unit": "10m",
        "labors": {
            "통신케이블공": 0.84
        },
        "category": "cable",
        "page": 125,
        "keywords": [
            "125㎟이하 단심",
            "통신용 구내 전력케이블"
        ]
    },
    {
        "code": "통신 4-6-1",
        "name": "150㎟이하 단심",
        "spec": "통신용 구내 전력케이블",
        "unit": "10m",
        "labors": {
            "통신케이블공": 0.97
        },
        "category": "cable",
        "page": 125,
        "keywords": [
            "150㎟이하 단심",
            "통신용 구내 전력케이블"
        ]
    },
    {
        "code": "통신 4-6-1",
        "name": "185㎟이하 단심",
        "spec": "통신용 구내 전력케이블",
        "unit": "10m",
        "labors": {
            "통신케이블공": 1.08
        },
        "category": "cable",
        "page": 125,
        "keywords": [
            "185㎟이하 단심",
            "통신용 구내 전력케이블"
        ]
    },
    {
        "code": "통신 4-6-1",
        "name": "200㎟이하 단심",
        "spec": "통신용 구내 전력케이블",
        "unit": "10m",
        "labors": {
            "통신케이블공": 1.17
        },
        "category": "cable",
        "page": 125,
        "keywords": [
            "200㎟이하 단심",
            "통신용 구내 전력케이블"
        ]
    },
    {
        "code": "통신 4-6-1",
        "name": "240㎟이하 단심",
        "spec": "통신용 구내 전력케이블",
        "unit": "10m",
        "labors": {
            "통신케이블공": 1.36
        },
        "category": "cable",
        "page": 125,
        "keywords": [
            "240㎟이하 단심",
            "통신용 구내 전력케이블"
        ]
    },
    {
        "code": "통신 4-6-1",
        "name": "250㎟이하 단심",
        "spec": "통신용 구내 전력케이블",
        "unit": "10m",
        "labors": {
            "통신케이블공": 1.42
        },
        "category": "cable",
        "page": 125,
        "keywords": [
            "250㎟이하 단심",
            "통신용 구내 전력케이블"
        ]
    },
    {
        "code": "통신 4-6-1",
        "name": "300㎟이하 단심",
        "spec": "통신용 구내 전력케이블",
        "unit": "10m",
        "labors": {
            "통신케이블공": 1.59
        },
        "category": "cable",
        "page": 125,
        "keywords": [
            "300㎟이하 단심",
            "통신용 구내 전력케이블"
        ]
    },
    {
        "code": "통신 4-6-1",
        "name": "325㎟이하 단심",
        "spec": "통신용 구내 전력케이블",
        "unit": "10m",
        "labors": {
            "통신케이블공": 1.72
        },
        "category": "cable",
        "page": 125,
        "keywords": [
            "325㎟이하 단심",
            "통신용 구내 전력케이블"
        ]
    },
    {
        "code": "통신 4-6-1",
        "name": "400㎟이하 단심",
        "spec": "통신용 구내 전력케이블",
        "unit": "10m",
        "labors": {
            "통신케이블공": 2.05
        },
        "category": "cable",
        "page": 125,
        "keywords": [
            "400㎟이하 단심",
            "통신용 구내 전력케이블"
        ]
    },
    {
        "code": "통신 4-6-1",
        "name": "500㎟이하 단심",
        "spec": "통신용 구내 전력케이블",
        "unit": "10m",
        "labors": {
            "통신케이블공": 2.4
        },
        "category": "cable",
        "page": 125,
        "keywords": [
            "500㎟이하 단심",
            "통신용 구내 전력케이블"
        ]
    },
    {
        "code": "통신 4-6-1",
        "name": "630㎟이하 단심",
        "spec": "통신용 구내 전력케이블",
        "unit": "10m",
        "labors": {
            "통신케이블공": 2.85
        },
        "category": "cable",
        "page": 125,
        "keywords": [
            "630㎟이하 단심",
            "통신용 구내 전력케이블"
        ]
    },
    {
        "code": "통신 4-6-1",
        "name": "800㎟이하 단심",
        "spec": "통신용 구내 전력케이블",
        "unit": "10m",
        "labors": {
            "통신케이블공": 3.39
        },
        "category": "cable",
        "page": 125,
        "keywords": [
            "800㎟이하 단심",
            "통신용 구내 전력케이블"
        ]
    },
    {
        "code": "통신 4-6-1",
        "name": "1,000㎟이하 단심",
        "spec": "통신용 구내 전력케이블",
        "unit": "10m",
        "labors": {
            "통신케이블공": 4.15
        },
        "category": "cable",
        "page": 125,
        "keywords": [
            "1,000㎟이하 단심",
            "통신용 구내 전력케이블"
        ]
    },
    {
        "code": "통신 4-7-1",
        "name": "20p 0.44 0.59 0.69 0.92",
        "spec": "지중 및 가공케이블",
        "unit": "100m",
        "labors": {
            "통신케이블공": 0.36,
            "보통인부": 0.48
        },
        "category": "cable",
        "page": 128,
        "keywords": [
            "20p 0.44 0.59 0.69 0.92",
            "지중 및 가공케이블"
        ]
    },
    {
        "code": "통신 4-7-1",
        "name": "50p 0.59 0.78 0.84 1.12",
        "spec": "지중 및 가공케이블",
        "unit": "100m",
        "labors": {
            "통신케이블공": 0.44,
            "보통인부": 0.58
        },
        "category": "cable",
        "page": 128,
        "keywords": [
            "50p 0.59 0.78 0.84 1.12",
            "지중 및 가공케이블"
        ]
    },
    {
        "code": "통신 4-7-1",
        "name": "300p 0.67 0.89 1.21 1.61",
        "spec": "지중 및 가공케이블",
        "unit": "100m",
        "labors": {
            "통신케이블공": 0.88,
            "보통인부": 1.17
        },
        "category": "cable",
        "page": 128,
        "keywords": [
            "300p 0.67 0.89 1.21 1.61",
            "지중 및 가공케이블"
        ]
    },
    {
        "code": "통신 4-7-1",
        "name": "900p 0.99 1.32 2.22 2.96",
        "spec": "지중 및 가공케이블",
        "unit": "100m",
        "labors": {
            "통신케이블공": 1.26,
            "보통인부": 1.69
        },
        "category": "cable",
        "page": 128,
        "keywords": [
            "900p 0.99 1.32 2.22 2.96",
            "지중 및 가공케이블"
        ]
    },
    {
        "code": "통신 4-7-2-1",
        "name": "0.4㎜ 심선접속",
        "spec": "심선개별 보통접속",
        "unit": "100회선",
        "labors": {
            "통신케이블공": 0.3,
            "보통인부": 0.21
        },
        "category": "cable",
        "page": 129,
        "keywords": [
            "0.4㎜ 심선접속",
            "심선개별 보통접속"
        ]
    },
    {
        "code": "통신 4-7-2-1",
        "name": "0.5㎜ 심선접속",
        "spec": "심선개별 보통접속",
        "unit": "100회선",
        "labors": {
            "통신케이블공": 0.33,
            "보통인부": 0.23
        },
        "category": "cable",
        "page": 129,
        "keywords": [
            "0.5㎜ 심선접속",
            "심선개별 보통접속"
        ]
    },
    {
        "code": "통신 4-7-2-1",
        "name": "0.65㎜ 심선접속",
        "spec": "심선개별 보통접속",
        "unit": "100회선",
        "labors": {
            "통신케이블공": 0.36,
            "보통인부": 0.25
        },
        "category": "cable",
        "page": 129,
        "keywords": [
            "0.65㎜ 심선접속",
            "심선개별 보통접속"
        ]
    },
    {
        "code": "통신 4-7-2-1",
        "name": "0.9㎜ 심선접속",
        "spec": "심선개별 보통접속",
        "unit": "100회선",
        "labors": {
            "통신케이블공": 0.39,
            "보통인부": 0.27
        },
        "category": "cable",
        "page": 129,
        "keywords": [
            "0.9㎜ 심선접속",
            "심선개별 보통접속"
        ]
    },
    {
        "code": "통신 4-7-2-2",
        "name": "0.4㎜ 심선접속",
        "spec": "25회선 심선접속자(커넥터)에 의한 심선 보통접속",
        "unit": "100회선",
        "labors": {
            "통신케이블공": 0.12,
            "보통인부": 0.09
        },
        "category": "cable",
        "page": 129,
        "keywords": [
            "0.4㎜ 심선접속",
            "25회선 심선접속자(커넥터)에 의한 심선 보통접속"
        ]
    },
    {
        "code": "통신 4-7-2-2",
        "name": "0.5㎜ 심선접속",
        "spec": "25회선 심선접속자(커넥터)에 의한 심선 보통접속",
        "unit": "100회선",
        "labors": {
            "통신케이블공": 0.13,
            "보통인부": 0.1
        },
        "category": "cable",
        "page": 129,
        "keywords": [
            "0.5㎜ 심선접속",
            "25회선 심선접속자(커넥터)에 의한 심선 보통접속"
        ]
    },
    {
        "code": "통신 4-7-2-2",
        "name": "0.65㎜ 심선접속",
        "spec": "25회선 심선접속자(커넥터)에 의한 심선 보통접속",
        "unit": "100회선",
        "labors": {
            "통신케이블공": 0.14,
            "보통인부": 0.11
        },
        "category": "cable",
        "page": 129,
        "keywords": [
            "0.65㎜ 심선접속",
            "25회선 심선접속자(커넥터)에 의한 심선 보통접속"
        ]
    },
    {
        "code": "통신 4-7-2-2",
        "name": "0.9㎜ 심선접속",
        "spec": "25회선 심선접속자(커넥터)에 의한 심선 보통접속",
        "unit": "100회선",
        "labors": {
            "통신케이블공": 0.15,
            "보통인부": 0.12
        },
        "category": "cable",
        "page": 129,
        "keywords": [
            "0.9㎜ 심선접속",
            "25회선 심선접속자(커넥터)에 의한 심선 보통접속"
        ]
    },
    {
        "code": "통신 4-7-3",
        "name": "3P 이상",
        "spec": "소대시내케이블 보통접속",
        "unit": "개소",
        "labors": {
            "통신케이블공": 0.22,
            "보통인부": 0.22
        },
        "category": "cable",
        "page": 130,
        "keywords": [
            "3P 이상",
            "소대시내케이블 보통접속"
        ]
    },
    {
        "code": "통신 4-7-3",
        "name": "10P 이상",
        "spec": "소대시내케이블 보통접속",
        "unit": "개소",
        "labors": {
            "통신케이블공": 0.27,
            "보통인부": 0.27
        },
        "category": "cable",
        "page": 130,
        "keywords": [
            "10P 이상",
            "소대시내케이블 보통접속"
        ]
    },
    {
        "code": "통신 4-7-3",
        "name": "20P 이상",
        "spec": "소대시내케이블 보통접속",
        "unit": "개소",
        "labors": {
            "통신케이블공": 0.29,
            "보통인부": 0.29
        },
        "category": "cable",
        "page": 130,
        "keywords": [
            "20P 이상",
            "소대시내케이블 보통접속"
        ]
    },
    {
        "code": "통신 4-7-3",
        "name": "25P 이상",
        "spec": "소대시내케이블 보통접속",
        "unit": "개소",
        "labors": {
            "통신케이블공": 0.3,
            "보통인부": 0.3
        },
        "category": "cable",
        "page": 130,
        "keywords": [
            "25P 이상",
            "소대시내케이블 보통접속"
        ]
    },
    {
        "code": "통신 4-7-3",
        "name": "30P 이상",
        "spec": "소대시내케이블 보통접속",
        "unit": "개소",
        "labors": {
            "통신케이블공": 0.31,
            "보통인부": 0.31
        },
        "category": "cable",
        "page": 130,
        "keywords": [
            "30P 이상",
            "소대시내케이블 보통접속"
        ]
    },
    {
        "code": "통신 4-7-3",
        "name": "50P ~ 100P 미만",
        "spec": "소대시내케이블 보통접속",
        "unit": "개소",
        "labors": {
            "통신케이블공": 0.33,
            "보통인부": 0.33
        },
        "category": "cable",
        "page": 130,
        "keywords": [
            "50P ~ 100P 미만",
            "소대시내케이블 보통접속"
        ]
    },
    {
        "code": "통신 4-7-4-1",
        "name": "국내 - 국외 0.4㎜ ~ 0.5㎜",
        "spec": "1, 5회선 심선접속자(커넥터)에 의한 절체",
        "unit": "100회선",
        "labors": {
            "통신케이블공": 4.45,
            "보통인부": 2.49
        },
        "category": "cable",
        "page": 130,
        "keywords": [
            "국내 - 국외 0.4㎜ ~ 0.5㎜",
            "1, 5회선 심선접속자(커넥터)에 의한 절체"
        ]
    },
    {
        "code": "통신 4-7-4-1",
        "name": "2 점간 0.65㎜ ~ 0.9㎜",
        "spec": "1, 5회선 심선접속자(커넥터)에 의한 절체",
        "unit": "100회선",
        "labors": {
            "통신케이블공": 2.59,
            "보통인부": 1.65
        },
        "category": "cable",
        "page": 130,
        "keywords": [
            "2 점간 0.65㎜ ~ 0.9㎜",
            "1, 5회선 심선접속자(커넥터)에 의한 절체"
        ]
    },
    {
        "code": "통신 4-7-4-1",
        "name": "국외 0.4㎜ ~ 0.5㎜",
        "spec": "1, 5회선 심선접속자(커넥터)에 의한 절체",
        "unit": "100회선",
        "labors": {
            "통신케이블공": 2.53,
            "보통인부": 1.61
        },
        "category": "cable",
        "page": 130,
        "keywords": [
            "국외 0.4㎜ ~ 0.5㎜",
            "1, 5회선 심선접속자(커넥터)에 의한 절체"
        ]
    },
    {
        "code": "통신 4-7-4-1",
        "name": "-",
        "spec": "1, 5회선 심선접속자(커넥터)에 의한 절체",
        "unit": "100회선",
        "labors": {
            "통신케이블공": 100.0
        },
        "category": "cable",
        "page": 130,
        "keywords": [
            "-",
            "1, 5회선 심선접속자(커넥터)에 의한 절체"
        ]
    },
    {
        "code": "통신 4-7-4-2",
        "name": "국내 - 국외 0.4㎜ ~ 0.5㎜",
        "spec": "25회선 심선접속자(커넥터)에 의한 절체",
        "unit": "100회선",
        "labors": {
            "통신케이블공": 2.83,
            "보통인부": 2.0
        },
        "category": "cable",
        "page": 131,
        "keywords": [
            "국내 - 국외 0.4㎜ ~ 0.5㎜",
            "25회선 심선접속자(커넥터)에 의한 절체"
        ]
    },
    {
        "code": "통신 4-7-4-2",
        "name": "2 점간 0.65㎜ ~ 0.9㎜",
        "spec": "25회선 심선접속자(커넥터)에 의한 절체",
        "unit": "100회선",
        "labors": {
            "통신케이블공": 1.51,
            "보통인부": 1.13
        },
        "category": "cable",
        "page": 131,
        "keywords": [
            "2 점간 0.65㎜ ~ 0.9㎜",
            "25회선 심선접속자(커넥터)에 의한 절체"
        ]
    },
    {
        "code": "통신 4-7-4-2",
        "name": "국외 0.4㎜ ~ 0.5㎜",
        "spec": "25회선 심선접속자(커넥터)에 의한 절체",
        "unit": "100회선",
        "labors": {
            "통신케이블공": 1.48,
            "보통인부": 1.12
        },
        "category": "cable",
        "page": 131,
        "keywords": [
            "국외 0.4㎜ ~ 0.5㎜",
            "25회선 심선접속자(커넥터)에 의한 절체"
        ]
    },
    {
        "code": "통신 4-7-5-1",
        "name": "열수축관 - 32 0.10",
        "spec": "열수축관에 의한 케이블 외피접속",
        "unit": "개",
        "labors": {
            "통신케이블공": 0.1
        },
        "category": "cable",
        "page": 132,
        "keywords": [
            "열수축관 - 32 0.10",
            "열수축관에 의한 케이블 외피접속"
        ]
    },
    {
        "code": "통신 4-7-5-1",
        "name": "열수축관 - 43 0.11",
        "spec": "열수축관에 의한 케이블 외피접속",
        "unit": "개",
        "labors": {
            "통신케이블공": 0.11
        },
        "category": "cable",
        "page": 132,
        "keywords": [
            "열수축관 - 43 0.11",
            "열수축관에 의한 케이블 외피접속"
        ]
    },
    {
        "code": "통신 4-7-5-1",
        "name": "열수축관 - 62 0.15",
        "spec": "열수축관에 의한 케이블 외피접속",
        "unit": "개",
        "labors": {
            "통신케이블공": 0.12
        },
        "category": "cable",
        "page": 132,
        "keywords": [
            "열수축관 - 62 0.15",
            "열수축관에 의한 케이블 외피접속"
        ]
    },
    {
        "code": "통신 4-7-5-1",
        "name": "열수축관 - 72 0.17",
        "spec": "열수축관에 의한 케이블 외피접속",
        "unit": "개",
        "labors": {
            "통신케이블공": 0.13
        },
        "category": "cable",
        "page": 132,
        "keywords": [
            "열수축관 - 72 0.17",
            "열수축관에 의한 케이블 외피접속"
        ]
    },
    {
        "code": "통신 4-7-5-1",
        "name": "열수축관 - 92, 93 0.19",
        "spec": "열수축관에 의한 케이블 외피접속",
        "unit": "개",
        "labors": {
            "통신케이블공": 0.14
        },
        "category": "cable",
        "page": 132,
        "keywords": [
            "열수축관 - 92, 93 0.19",
            "열수축관에 의한 케이블 외피접속"
        ]
    },
    {
        "code": "통신 4-7-5-1",
        "name": "열수축관 - 101 0.20",
        "spec": "열수축관에 의한 케이블 외피접속",
        "unit": "개",
        "labors": {
            "통신케이블공": 0.15
        },
        "category": "cable",
        "page": 132,
        "keywords": [
            "열수축관 - 101 0.20",
            "열수축관에 의한 케이블 외피접속"
        ]
    },
    {
        "code": "통신 4-7-5-1",
        "name": "열수축관 - 122 0.21",
        "spec": "열수축관에 의한 케이블 외피접속",
        "unit": "개",
        "labors": {
            "통신케이블공": 0.16
        },
        "category": "cable",
        "page": 132,
        "keywords": [
            "열수축관 - 122 0.21",
            "열수축관에 의한 케이블 외피접속"
        ]
    },
    {
        "code": "통신 4-7-5-1",
        "name": "열수축관 - 139 0.22",
        "spec": "열수축관에 의한 케이블 외피접속",
        "unit": "개",
        "labors": {
            "통신케이블공": 0.17
        },
        "category": "cable",
        "page": 132,
        "keywords": [
            "열수축관 - 139 0.22",
            "열수축관에 의한 케이블 외피접속"
        ]
    },
    {
        "code": "통신 4-7-5-1",
        "name": "열수축관 - 150 0.24",
        "spec": "열수축관에 의한 케이블 외피접속",
        "unit": "개",
        "labors": {
            "통신케이블공": 0.18
        },
        "category": "cable",
        "page": 132,
        "keywords": [
            "열수축관 - 150 0.24",
            "열수축관에 의한 케이블 외피접속"
        ]
    },
    {
        "code": "통신 4-7-5-1",
        "name": "열수축관 - 160 0.25",
        "spec": "열수축관에 의한 케이블 외피접속",
        "unit": "개",
        "labors": {
            "통신케이블공": 0.19
        },
        "category": "cable",
        "page": 132,
        "keywords": [
            "열수축관 - 160 0.25",
            "열수축관에 의한 케이블 외피접속"
        ]
    },
    {
        "code": "통신 4-7-5-1",
        "name": "열수축관 - 180 0.27",
        "spec": "열수축관에 의한 케이블 외피접속",
        "unit": "개",
        "labors": {
            "통신케이블공": 0.2
        },
        "category": "cable",
        "page": 132,
        "keywords": [
            "열수축관 - 180 0.27",
            "열수축관에 의한 케이블 외피접속"
        ]
    },
    {
        "code": "통신 4-7-5-1",
        "name": "열수축관 - 190 0.29",
        "spec": "열수축관에 의한 케이블 외피접속",
        "unit": "개",
        "labors": {
            "통신케이블공": 0.21
        },
        "category": "cable",
        "page": 132,
        "keywords": [
            "열수축관 - 190 0.29",
            "열수축관에 의한 케이블 외피접속"
        ]
    },
    {
        "code": "통신 4-7-5-1",
        "name": "열수축관 - 200 0.31",
        "spec": "열수축관에 의한 케이블 외피접속",
        "unit": "개",
        "labors": {
            "통신케이블공": 0.22
        },
        "category": "cable",
        "page": 132,
        "keywords": [
            "열수축관 - 200 0.31",
            "열수축관에 의한 케이블 외피접속"
        ]
    },
    {
        "code": "통신 4-7-5-2",
        "name": "PB - 25/15 - 100",
        "spec": "열수축관에 의한 격벽용 케이블 외피접속",
        "unit": "개",
        "labors": {
            "통신케이블공": 0.09,
            "보통인부": 0.06
        },
        "category": "cable",
        "page": 132,
        "keywords": [
            "PB - 25/15 - 100",
            "열수축관에 의한 격벽용 케이블 외피접속"
        ]
    },
    {
        "code": "통신 4-7-5-2",
        "name": "PB - 50/20 - 150",
        "spec": "열수축관에 의한 격벽용 케이블 외피접속",
        "unit": "개",
        "labors": {
            "통신케이블공": 0.1,
            "보통인부": 0.07
        },
        "category": "cable",
        "page": 132,
        "keywords": [
            "PB - 50/20 - 150",
            "열수축관에 의한 격벽용 케이블 외피접속"
        ]
    },
    {
        "code": "통신 4-7-5-2",
        "name": "PB - 70/50 - 200",
        "spec": "열수축관에 의한 격벽용 케이블 외피접속",
        "unit": "개",
        "labors": {
            "통신케이블공": 0.13,
            "보통인부": 0.09
        },
        "category": "cable",
        "page": 132,
        "keywords": [
            "PB - 70/50 - 200",
            "열수축관에 의한 격벽용 케이블 외피접속"
        ]
    },
    {
        "code": "통신 4-7-5-2",
        "name": "PB - 100/70 - 250",
        "spec": "열수축관에 의한 격벽용 케이블 외피접속",
        "unit": "개",
        "labors": {
            "통신케이블공": 0.17,
            "보통인부": 0.1
        },
        "category": "cable",
        "page": 132,
        "keywords": [
            "PB - 100/70 - 250",
            "열수축관에 의한 격벽용 케이블 외피접속"
        ]
    },
    {
        "code": "통신 4-7-5-2",
        "name": "-",
        "spec": "열수축관에 의한 격벽용 케이블 외피접속",
        "unit": "개",
        "labors": {
            "통신케이블공": 102.0
        },
        "category": "cable",
        "page": 132,
        "keywords": [
            "-",
            "열수축관에 의한 격벽용 케이블 외피접속"
        ]
    },
    {
        "code": "통신 4-7-5-3",
        "name": "80 - 500",
        "spec": "접속관(조립식, 케이블) 외피접속",
        "unit": "개",
        "labors": {
            "통신케이블공": 0.33,
            "보통인부": 0.31
        },
        "category": "cable",
        "page": 133,
        "keywords": [
            "80 - 500",
            "접속관(조립식, 케이블) 외피접속"
        ]
    },
    {
        "code": "통신 4-7-5-3",
        "name": "100 - 660",
        "spec": "접속관(조립식, 케이블) 외피접속",
        "unit": "개",
        "labors": {
            "통신케이블공": 0.37,
            "보통인부": 0.36
        },
        "category": "cable",
        "page": 133,
        "keywords": [
            "100 - 660",
            "접속관(조립식, 케이블) 외피접속"
        ]
    },
    {
        "code": "통신 4-7-5-3",
        "name": "120 - 660",
        "spec": "접속관(조립식, 케이블) 외피접속",
        "unit": "개",
        "labors": {
            "통신케이블공": 0.38,
            "보통인부": 0.37
        },
        "category": "cable",
        "page": 133,
        "keywords": [
            "120 - 660",
            "접속관(조립식, 케이블) 외피접속"
        ]
    },
    {
        "code": "통신 4-7-5-3",
        "name": "140 - 660",
        "spec": "접속관(조립식, 케이블) 외피접속",
        "unit": "개",
        "labors": {
            "통신케이블공": 0.38,
            "보통인부": 0.37
        },
        "category": "cable",
        "page": 133,
        "keywords": [
            "140 - 660",
            "접속관(조립식, 케이블) 외피접속"
        ]
    },
    {
        "code": "통신 4-7-5-3",
        "name": "160 - 700",
        "spec": "접속관(조립식, 케이블) 외피접속",
        "unit": "개",
        "labors": {
            "통신케이블공": 0.41,
            "보통인부": 0.4
        },
        "category": "cable",
        "page": 133,
        "keywords": [
            "160 - 700",
            "접속관(조립식, 케이블) 외피접속"
        ]
    },
    {
        "code": "통신 4-7-5-3",
        "name": "180 - 700",
        "spec": "접속관(조립식, 케이블) 외피접속",
        "unit": "개",
        "labors": {
            "통신케이블공": 0.44,
            "보통인부": 0.42
        },
        "category": "cable",
        "page": 133,
        "keywords": [
            "180 - 700",
            "접속관(조립식, 케이블) 외피접속"
        ]
    },
    {
        "code": "통신 4-7-5-3",
        "name": "200 - 700",
        "spec": "접속관(조립식, 케이블) 외피접속",
        "unit": "개",
        "labors": {
            "통신케이블공": 0.46,
            "보통인부": 0.44
        },
        "category": "cable",
        "page": 133,
        "keywords": [
            "200 - 700",
            "접속관(조립식, 케이블) 외피접속"
        ]
    },
    {
        "code": "통신 4-7-5-3",
        "name": "240 - 700",
        "spec": "접속관(조립식, 케이블) 외피접속",
        "unit": "개",
        "labors": {
            "통신케이블공": 0.47,
            "보통인부": 0.46
        },
        "category": "cable",
        "page": 133,
        "keywords": [
            "240 - 700",
            "접속관(조립식, 케이블) 외피접속"
        ]
    },
    {
        "code": "통신 4-7-6",
        "name": "0.4, 0.5mm",
        "spec": "케이블 국내성단",
        "unit": "개",
        "labors": {
            "통신케이블공": 0.5,
            "보통인부": 0.25
        },
        "category": "cable",
        "page": 134,
        "keywords": [
            "0.4, 0.5mm",
            "케이블 국내성단"
        ]
    },
    {
        "code": "통신 4-7-6",
        "name": "0.65mm",
        "spec": "케이블 국내성단",
        "unit": "개",
        "labors": {
            "통신케이블공": 0.6,
            "보통인부": 0.3
        },
        "category": "cable",
        "page": 134,
        "keywords": [
            "0.65mm",
            "케이블 국내성단"
        ]
    },
    {
        "code": "통신 4-7-6",
        "name": "0.9mm",
        "spec": "케이블 국내성단",
        "unit": "개",
        "labors": {
            "통신케이블공": 0.65,
            "보통인부": 0.33
        },
        "category": "cable",
        "page": 134,
        "keywords": [
            "0.9mm",
            "케이블 국내성단"
        ]
    },
    {
        "code": "통신 4-8-1",
        "name": "FR 케이블 2.5㎟×20C 이하 10m",
        "spec": "음향 및 영상케이블",
        "unit": "개",
        "labors": {
            "통신케이블공": 0.19
        },
        "category": "cable",
        "page": 135,
        "keywords": [
            "FR 케이블 2.5㎟×20C 이하 10m",
            "음향 및 영상케이블"
        ]
    },
    {
        "code": "통신 4-8-1",
        "name": "멀티비디오 케이블 V5-5CFB 이하 10m",
        "spec": "음향 및 영상케이블",
        "unit": "개",
        "labors": {
            "통신케이블공": 0.19
        },
        "category": "cable",
        "page": 135,
        "keywords": [
            "멀티비디오 케이블 V5-5CFB 이하 10m",
            "음향 및 영상케이블"
        ]
    },
    {
        "code": "통신 4-8-1",
        "name": "Triaxial 케이블 12.95㎜ 이하 10m",
        "spec": "음향 및 영상케이블",
        "unit": "개",
        "labors": {
            "통신케이블공": 0.21
        },
        "category": "cable",
        "page": 135,
        "keywords": [
            "Triaxial 케이블 12.95㎜ 이하 10m",
            "음향 및 영상케이블"
        ]
    },
    {
        "code": "통신 4-8-1",
        "name": "HDMI케이블 - 12.95㎜ 이하 10m",
        "spec": "음향 및 영상케이블",
        "unit": "개",
        "labors": {
            "통신케이블공": 0.16
        },
        "category": "cable",
        "page": 135,
        "keywords": [
            "HDMI케이블 - 12.95㎜ 이하 10m",
            "음향 및 영상케이블"
        ]
    },
    {
        "code": "통신 4-8-1",
        "name": "5.6㎟-4C 이하 12.95㎜ 이하 10m",
        "spec": "음향 및 영상케이블",
        "unit": "개",
        "labors": {
            "통신내선공": 0.14
        },
        "category": "cable",
        "page": 135,
        "keywords": [
            "5.6㎟-4C 이하 12.95㎜ 이하 10m",
            "음향 및 영상케이블"
        ]
    },
    {
        "code": "통신 4-8-1",
        "name": "스피커 케이블 14.2㎟-4C 이하 10m",
        "spec": "음향 및 영상케이블",
        "unit": "개",
        "labors": {
            "통신케이블공": 0.18
        },
        "category": "cable",
        "page": 135,
        "keywords": [
            "스피커 케이블 14.2㎟-4C 이하 10m",
            "음향 및 영상케이블"
        ]
    },
    {
        "code": "통신 4-8-1",
        "name": "케이블 멀티2.0㎟-16C 14.2㎟-4C 이하 10m",
        "spec": "음향 및 영상케이블",
        "unit": "개",
        "labors": {
            "통신케이블공": 0.23
        },
        "category": "cable",
        "page": 135,
        "keywords": [
            "케이블 멀티2.0㎟-16C 14.2㎟-4C 이하 10m",
            "음향 및 영상케이블"
        ]
    },
    {
        "code": "통신 4-8-1",
        "name": "포설 1P 14.2㎟-4C 이하 10m",
        "spec": "음향 및 영상케이블",
        "unit": "개",
        "labors": {
            "통신케이블공": 0.23
        },
        "category": "cable",
        "page": 135,
        "keywords": [
            "포설 1P 14.2㎟-4C 이하 10m",
            "음향 및 영상케이블"
        ]
    },
    {
        "code": "통신 4-8-1",
        "name": "멀티실드 2P이하 14.2㎟-4C 이하 10m",
        "spec": "음향 및 영상케이블",
        "unit": "개",
        "labors": {
            "통신케이블공": 0.24
        },
        "category": "cable",
        "page": 135,
        "keywords": [
            "멀티실드 2P이하 14.2㎟-4C 이하 10m",
            "음향 및 영상케이블"
        ]
    },
    {
        "code": "통신 4-8-1",
        "name": "멀티실드 4P이하 14.2㎟-4C 이하 10m",
        "spec": "음향 및 영상케이블",
        "unit": "개",
        "labors": {
            "통신케이블공": 0.28
        },
        "category": "cable",
        "page": 135,
        "keywords": [
            "멀티실드 4P이하 14.2㎟-4C 이하 10m",
            "음향 및 영상케이블"
        ]
    },
    {
        "code": "통신 4-8-1",
        "name": "마이크 케이블 멀티실드 8P이하 10m",
        "spec": "음향 및 영상케이블",
        "unit": "개",
        "labors": {
            "통신케이블공": 0.3
        },
        "category": "cable",
        "page": 135,
        "keywords": [
            "마이크 케이블 멀티실드 8P이하 10m",
            "음향 및 영상케이블"
        ]
    },
    {
        "code": "통신 4-8-1",
        "name": "멀티실드 12P이하 멀티실드 8P이하 10m",
        "spec": "음향 및 영상케이블",
        "unit": "개",
        "labors": {
            "통신케이블공": 0.32
        },
        "category": "cable",
        "page": 135,
        "keywords": [
            "멀티실드 12P이하 멀티실드 8P이하 10m",
            "음향 및 영상케이블"
        ]
    },
    {
        "code": "통신 4-8-1",
        "name": "멀티실드 24P이하 멀티실드 8P이하 10m",
        "spec": "음향 및 영상케이블",
        "unit": "개",
        "labors": {
            "통신케이블공": 0.38
        },
        "category": "cable",
        "page": 135,
        "keywords": [
            "멀티실드 24P이하 멀티실드 8P이하 10m",
            "음향 및 영상케이블"
        ]
    },
    {
        "code": "통신 4-8-1",
        "name": "멀티실드 32P이하 멀티실드 8P이하 10m",
        "spec": "음향 및 영상케이블",
        "unit": "개",
        "labors": {
            "통신케이블공": 0.45
        },
        "category": "cable",
        "page": 135,
        "keywords": [
            "멀티실드 32P이하 멀티실드 8P이하 10m",
            "음향 및 영상케이블"
        ]
    },
    {
        "code": "통신 4-8-1",
        "name": "Triaxial 커넥터 - 10개",
        "spec": "음향 및 영상케이블",
        "unit": "개",
        "labors": {
            "통신내선공": 1.61
        },
        "category": "cable",
        "page": 135,
        "keywords": [
            "Triaxial 커넥터 - 10개",
            "음향 및 영상케이블"
        ]
    },
    {
        "code": "통신 4-8-1",
        "name": "커넥터 - - 10개",
        "spec": "음향 및 영상케이블",
        "unit": "개",
        "labors": {
            "통신내선공": 0.17
        },
        "category": "cable",
        "page": 135,
        "keywords": [
            "커넥터 - - 10개",
            "음향 및 영상케이블"
        ]
    },
    {
        "code": "통신 4-8-1",
        "name": "D-SUB 커넥터 15Pin이하 10개",
        "spec": "음향 및 영상케이블",
        "unit": "개",
        "labors": {
            "통신내선공": 0.7
        },
        "category": "cable",
        "page": 135,
        "keywords": [
            "D-SUB 커넥터 15Pin이하 10개",
            "음향 및 영상케이블"
        ]
    },
    {
        "code": "통신 4-8-2",
        "name": "접속 2.5㎟ 이하 코어",
        "spec": "FR 케이블 접속 및 성단",
        "unit": "개",
        "labors": {
            "통신케이블공": 0.03,
            "보통인부": 0.01
        },
        "category": "cable",
        "page": 136,
        "keywords": [
            "접속 2.5㎟ 이하 코어",
            "FR 케이블 접속 및 성단"
        ]
    },
    {
        "code": "통신 4-8-2",
        "name": "레진 주입형 - 개",
        "spec": "FR 케이블 접속 및 성단",
        "unit": "개",
        "labors": {
            "통신케이블공": 0.18,
            "보통인부": 0.05
        },
        "category": "cable",
        "page": 136,
        "keywords": [
            "레진 주입형 - 개",
            "FR 케이블 접속 및 성단"
        ]
    },
    {
        "code": "통신 4-8-2",
        "name": "성단 2.5㎟ 이하 코어",
        "spec": "FR 케이블 접속 및 성단",
        "unit": "개",
        "labors": {
            "통신케이블공": 0.02,
            "보통인부": 0.02
        },
        "category": "cable",
        "page": 136,
        "keywords": [
            "성단 2.5㎟ 이하 코어",
            "FR 케이블 접속 및 성단"
        ]
    },
    {
        "code": "통신 4-8-2",
        "name": "중간접속 2.5㎟ 이하 코어",
        "spec": "FR 케이블 접속 및 성단",
        "unit": "개",
        "labors": {
            "통신케이블공": 0.02
        },
        "category": "cable",
        "page": 136,
        "keywords": [
            "중간접속 2.5㎟ 이하 코어",
            "FR 케이블 접속 및 성단"
        ]
    },
    {
        "code": "통신 4-9-1",
        "name": "FTTH 인입선 가설",
        "spec": "FTTH 인입선",
        "unit": "10m",
        "labors": {
            "광케이블설치사": 0.08,
            "통신외선공": 0.07
        },
        "category": "cable",
        "page": 137,
        "keywords": [
            "FTTH 인입선 가설",
            "FTTH 인입선"
        ]
    },
    {
        "code": "통신 4-9-2",
        "name": "점퍼선(2개연)",
        "spec": "점퍼선 구성품",
        "unit": "10조",
        "labors": {
            "통신내선공": 0.37
        },
        "category": "cable",
        "page": 137,
        "keywords": [
            "점퍼선(2개연)",
            "점퍼선 구성품"
        ]
    },
    {
        "code": "통신 4-9-2",
        "name": "CRT 이용 선번정리",
        "spec": "점퍼선 구성품",
        "unit": "10회선",
        "labors": {
            "특별인부": 0.07
        },
        "category": "cable",
        "page": 137,
        "keywords": [
            "CRT 이용 선번정리",
            "점퍼선 구성품"
        ]
    },
    {
        "code": "통신 4-9-3",
        "name": "옥외 꼬임케이블 인입선 가설",
        "spec": "옥외 꼬임케이블 인입선",
        "unit": "조",
        "labors": {
            "통신케이블공": 0.11,
            "통신외선공": 0.11
        },
        "category": "cable",
        "page": 137,
        "keywords": [
            "옥외 꼬임케이블 인입선 가설",
            "옥외 꼬임케이블 인입선"
        ]
    },
    {
        "code": "통신 4-11-1",
        "name": "300P 이하 100m",
        "spec": "케이블 절단과 공드럼 해체",
        "unit": "0.38",
        "labors": {
            "보통인부": 0.51
        },
        "category": "cable",
        "page": 139,
        "keywords": [
            "300P 이하 100m",
            "케이블 절단과 공드럼 해체"
        ]
    },
    {
        "code": "통신 4-11-1",
        "name": "300P 초과 ~ 1,200P 이하 100m",
        "spec": "케이블 절단과 공드럼 해체",
        "unit": "0.88",
        "labors": {
            "보통인부": 1.17
        },
        "category": "cable",
        "page": 139,
        "keywords": [
            "300P 초과 ~ 1,200P 이하 100m",
            "케이블 절단과 공드럼 해체"
        ]
    },
    {
        "code": "통신 4-11-1",
        "name": "1,200P 초과 ~ 1,200P 이하 100m",
        "spec": "케이블 절단과 공드럼 해체",
        "unit": "1.10",
        "labors": {
            "보통인부": 1.46
        },
        "category": "cable",
        "page": 139,
        "keywords": [
            "1,200P 초과 ~ 1,200P 이하 100m",
            "케이블 절단과 공드럼 해체"
        ]
    },
    {
        "code": "통신 4-11-1",
        "name": "광섬유케이블",
        "spec": "케이블 절단과 공드럼 해체",
        "unit": "100m",
        "labors": {
            "보통인부": 0.28
        },
        "category": "cable",
        "page": 139,
        "keywords": [
            "광섬유케이블",
            "케이블 절단과 공드럼 해체"
        ]
    },
    {
        "code": "통신 4-11-1",
        "name": "공드럼 해체",
        "spec": "케이블 절단과 공드럼 해체",
        "unit": "드럼",
        "labors": {
            "보통인부": 0.5
        },
        "category": "cable",
        "page": 139,
        "keywords": [
            "공드럼 해체",
            "케이블 절단과 공드럼 해체"
        ]
    },
    {
        "code": "통신 4-11-2",
        "name": "인공",
        "spec": "케이블 보호",
        "unit": "기",
        "labors": {
            "보통인부": 0.52
        },
        "category": "cable",
        "page": 139,
        "keywords": [
            "인공",
            "케이블 보호"
        ]
    },
    {
        "code": "통신 4-11-2",
        "name": "수공",
        "spec": "케이블 보호",
        "unit": "기",
        "labors": {
            "보통인부": 0.26
        },
        "category": "cable",
        "page": 139,
        "keywords": [
            "수공",
            "케이블 보호"
        ]
    },
    {
        "code": "통신 4-11-3",
        "name": "표주세움",
        "spec": "통신케이블 보호용 부대공정",
        "unit": "개소",
        "labors": {
            "통신외선공": 0.25,
            "보통인부": 0.51
        },
        "category": "cable",
        "page": 139,
        "keywords": [
            "표주세움",
            "통신케이블 보호용 부대공정"
        ]
    },
    {
        "code": "통신 4-11-3",
        "name": "횡평강및철물설치",
        "spec": "통신케이블 보호용 부대공정",
        "unit": "개소",
        "labors": {
            "통신외선공": 1.0,
            "보통인부": 1.0
        },
        "category": "cable",
        "page": 139,
        "keywords": [
            "횡평강및철물설치",
            "통신케이블 보호용 부대공정"
        ]
    },
    {
        "code": "통신 4-11-6",
        "name": "플렛트 폼 설치",
        "spec": "중화트랜스",
        "unit": "대",
        "labors": {
            "통신설비공": 1.0,
            "보통인부": 1.0
        },
        "category": "cable",
        "page": 140,
        "keywords": [
            "플렛트 폼 설치",
            "중화트랜스"
        ]
    },
    {
        "code": "통신 4-11-6",
        "name": "25P 유도중화트랜스 설치",
        "spec": "중화트랜스",
        "unit": "개",
        "labors": {
            "통신케이블공": 1.7,
            "보통인부": 1.0
        },
        "category": "cable",
        "page": 140,
        "keywords": [
            "25P 유도중화트랜스 설치",
            "중화트랜스"
        ]
    },
    {
        "code": "통신 4-11-6",
        "name": "50P 유도중화트랜스 설치",
        "spec": "중화트랜스",
        "unit": "개",
        "labors": {
            "통신케이블공": 2.54,
            "보통인부": 1.62
        },
        "category": "cable",
        "page": 140,
        "keywords": [
            "50P 유도중화트랜스 설치",
            "중화트랜스"
        ]
    },
    {
        "code": "통신 4-11-6",
        "name": "100P 유도중화트랜스 설치",
        "spec": "중화트랜스",
        "unit": "개",
        "labors": {
            "통신케이블공": 3.76,
            "보통인부": 1.89
        },
        "category": "cable",
        "page": 140,
        "keywords": [
            "100P 유도중화트랜스 설치",
            "중화트랜스"
        ]
    },
    {
        "code": "통신 4-11-6",
        "name": "200P 유도중화트랜스 설치",
        "spec": "중화트랜스",
        "unit": "개",
        "labors": {
            "통신케이블공": 6.16,
            "보통인부": 2.29
        },
        "category": "cable",
        "page": 140,
        "keywords": [
            "200P 유도중화트랜스 설치",
            "중화트랜스"
        ]
    },
    {
        "code": "통신 4-11-6",
        "name": "300P 유도중화트랜스 설치",
        "spec": "중화트랜스",
        "unit": "개",
        "labors": {
            "통신케이블공": 8.57,
            "보통인부": 4.16
        },
        "category": "cable",
        "page": 140,
        "keywords": [
            "300P 유도중화트랜스 설치",
            "중화트랜스"
        ]
    },
    {
        "code": "통신 4-11-7",
        "name": "거리 50m당",
        "spec": "수목가지치기",
        "unit": "개",
        "labors": {
            "통신외선공": 0.32,
            "보통인부": 0.16
        },
        "category": "cable",
        "page": 140,
        "keywords": [
            "거리 50m당",
            "수목가지치기"
        ]
    },
    {
        "code": "통신 4-11-9-1",
        "name": "카드사용",
        "spec": "기기신설",
        "unit": "대",
        "labors": {
            "통신설비공": 0.36
        },
        "category": "cable",
        "page": 141,
        "keywords": [
            "카드사용",
            "기기신설"
        ]
    },
    {
        "code": "통신 4-11-9-2",
        "name": "제어기",
        "spec": "개폐기 및 함체",
        "unit": "개",
        "labors": {
            "통신내선공": 0.09
        },
        "category": "cable",
        "page": 141,
        "keywords": [
            "제어기",
            "개폐기 및 함체"
        ]
    },
    {
        "code": "통신 4-11-9-2",
        "name": "점검함",
        "spec": "개폐기 및 함체",
        "unit": "개",
        "labors": {
            "통신설비공": 0.06
        },
        "category": "cable",
        "page": 141,
        "keywords": [
            "점검함",
            "개폐기 및 함체"
        ]
    },
    {
        "code": "통신 4-11-9-2",
        "name": "누전차단기",
        "spec": "개폐기 및 함체",
        "unit": "개",
        "labors": {
            "통신내선공": 0.16
        },
        "category": "cable",
        "page": 141,
        "keywords": [
            "누전차단기",
            "개폐기 및 함체"
        ]
    },
    {
        "code": "통신 4-11-9-2",
        "name": "커버나이프 스위치",
        "spec": "개폐기 및 함체",
        "unit": "개",
        "labors": {
            "통신내선공": 0.08
        },
        "category": "cable",
        "page": 141,
        "keywords": [
            "커버나이프 스위치",
            "개폐기 및 함체"
        ]
    },
    {
        "code": "통신 4-11-9-3",
        "name": "일반 A 형기",
        "spec": "부스",
        "unit": "0.20",
        "labors": {
            "보통인부": 0.63
        },
        "category": "cable",
        "page": 142,
        "keywords": [
            "일반 A 형기",
            "부스"
        ]
    },
    {
        "code": "통신 4-11-9-3",
        "name": "일반 B 형실",
        "spec": "부스",
        "unit": "0.20",
        "labors": {
            "통신설비공": 0.25,
            "보통인부": 0.63
        },
        "category": "cable",
        "page": 142,
        "keywords": [
            "일반 B 형실",
            "부스"
        ]
    },
    {
        "code": "통신 4-11-9-3",
        "name": "특수방음형 B 형실",
        "spec": "부스",
        "unit": "0.26",
        "labors": {
            "통신설비공": 0.22,
            "보통인부": 0.88
        },
        "category": "cable",
        "page": 142,
        "keywords": [
            "특수방음형 B 형실",
            "부스"
        ]
    },
    {
        "code": "통신 4-11-9-3",
        "name": "지체부자유형기",
        "spec": "부스",
        "unit": "0.25",
        "labors": {
            "통신설비공": 0.27,
            "보통인부": 1.04
        },
        "category": "cable",
        "page": 142,
        "keywords": [
            "지체부자유형기",
            "부스"
        ]
    },
    {
        "code": "통신 6-3-1",
        "name": "전원시험 및 조정",
        "spec": "다중화장치(MX-13)",
        "unit": "셀프",
        "labors": {
            "통신관련산업기사": 0.17
        },
        "category": "device",
        "page": 159,
        "keywords": [
            "전원시험 및 조정",
            "다중화장치(MX-13)"
        ]
    },
    {
        "code": "통신 6-3-1",
        "name": "NAS DS1 신호비트에러 및 지터시험",
        "spec": "다중화장치(MX-13)",
        "unit": "GRP",
        "labors": {
            "통신관련산업기사": 0.09
        },
        "category": "device",
        "page": 159,
        "keywords": [
            "NAS DS1 신호비트에러 및 지터시험",
            "다중화장치(MX-13)"
        ]
    },
    {
        "code": "통신 6-3-1",
        "name": "CEPT DS1 신호비트에러 및 지터시험",
        "spec": "다중화장치(MX-13)",
        "unit": "GRP",
        "labors": {
            "통신관련산업기사": 0.09
        },
        "category": "device",
        "page": 159,
        "keywords": [
            "CEPT DS1 신호비트에러 및 지터시험",
            "다중화장치(MX-13)"
        ]
    },
    {
        "code": "통신 6-3-1",
        "name": "NAS DS1 신호의 루프백시험",
        "spec": "다중화장치(MX-13)",
        "unit": "GRP",
        "labors": {
            "통신관련산업기사": 0.1
        },
        "category": "device",
        "page": 159,
        "keywords": [
            "NAS DS1 신호의 루프백시험",
            "다중화장치(MX-13)"
        ]
    },
    {
        "code": "통신 6-3-1",
        "name": "CEPT DS1 신호의 루프백시험",
        "spec": "다중화장치(MX-13)",
        "unit": "GRP",
        "labors": {
            "통신관련산업기사": 0.1
        },
        "category": "device",
        "page": 159,
        "keywords": [
            "CEPT DS1 신호의 루프백시험",
            "다중화장치(MX-13)"
        ]
    },
    {
        "code": "통신 6-3-1",
        "name": "절체기능시험",
        "spec": "다중화장치(MX-13)",
        "unit": "GRP",
        "labors": {
            "통신관련산업기사": 0.11
        },
        "category": "device",
        "page": 159,
        "keywords": [
            "절체기능시험",
            "다중화장치(MX-13)"
        ]
    },
    {
        "code": "통신 6-3-1",
        "name": "성능감시 및 경보시험",
        "spec": "다중화장치(MX-13)",
        "unit": "GRP",
        "labors": {
            "통신관련산업기사": 0.27
        },
        "category": "device",
        "page": 159,
        "keywords": [
            "성능감시 및 경보시험",
            "다중화장치(MX-13)"
        ]
    },
    {
        "code": "통신 6-3-1",
        "name": "신호형태시험",
        "spec": "다중화장치(MX-13)",
        "unit": "GRP",
        "labors": {
            "통신관련산업기사": 0.12
        },
        "category": "device",
        "page": 159,
        "keywords": [
            "신호형태시험",
            "다중화장치(MX-13)"
        ]
    },
    {
        "code": "통신 6-3-5",
        "name": "장치설정 장치거치 (셀프 설치 )",
        "spec": "디지털 클럭공급장치 (DOTS)",
        "unit": "대",
        "labors": {
            "통신설비공": 0.03,
            "보통인부": 0.02
        },
        "category": "device",
        "page": 161,
        "keywords": [
            "장치설정 장치거치 (셀프 설치 )",
            "디지털 클럭공급장치 (DOTS)"
        ]
    },
    {
        "code": "통신 6-3-5",
        "name": "유니트실장",
        "spec": "디지털 클럭공급장치 (DOTS)",
        "unit": "개",
        "labors": {
            "통신설비공": 0.02
        },
        "category": "device",
        "page": 161,
        "keywords": [
            "유니트실장",
            "디지털 클럭공급장치 (DOTS)"
        ]
    },
    {
        "code": "통신 6-3-5",
        "name": "전원전압시험",
        "spec": "디지털 클럭공급장치 (DOTS)",
        "unit": "대",
        "labors": {
            "통신관련산업기사": 0.08
        },
        "category": "device",
        "page": 161,
        "keywords": [
            "전원전압시험",
            "디지털 클럭공급장치 (DOTS)"
        ]
    },
    {
        "code": "통신 6-3-5",
        "name": "설치시험 경보 및 접불시험",
        "spec": "디지털 클럭공급장치 (DOTS)",
        "unit": "대",
        "labors": {
            "통신관련산업기사": 0.08
        },
        "category": "device",
        "page": 161,
        "keywords": [
            "설치시험 경보 및 접불시험",
            "디지털 클럭공급장치 (DOTS)"
        ]
    },
    {
        "code": "통신 6-3-5",
        "name": "입력클럭 신호시험 회",
        "spec": "디지털 클럭공급장치 (DOTS)",
        "unit": "선",
        "labors": {
            "통신관련산업기사": 0.19
        },
        "category": "device",
        "page": 161,
        "keywords": [
            "입력클럭 신호시험 회",
            "디지털 클럭공급장치 (DOTS)"
        ]
    },
    {
        "code": "통신 6-3-5",
        "name": "출력클럭 신호시험 개",
        "spec": "디지털 클럭공급장치 (DOTS)",
        "unit": "소",
        "labors": {
            "통신관련산업기사": 0.03
        },
        "category": "device",
        "page": 161,
        "keywords": [
            "출력클럭 신호시험 개",
            "디지털 클럭공급장치 (DOTS)"
        ]
    },
    {
        "code": "통신 6-3-6",
        "name": "립특별인부 1.00 1.00 1.00 1.00",
        "spec": "디지털 계통보호전송장치(PITR)",
        "unit": "개",
        "labors": {
            "통신설비공": 1.0
        },
        "category": "device",
        "page": 162,
        "keywords": [
            "립특별인부 1.00 1.00 1.00 1.00",
            "디지털 계통보호전송장치(PITR)"
        ]
    },
    {
        "code": "통신 6-3-6",
        "name": "및 세트 조립 1.00 1.00",
        "spec": "디지털 계통보호전송장치(PITR)",
        "unit": "개",
        "labors": {
            "통신설비공": 0.75
        },
        "category": "device",
        "page": 162,
        "keywords": [
            "및 세트 조립 1.00 1.00",
            "디지털 계통보호전송장치(PITR)"
        ]
    },
    {
        "code": "통신 6-3-6",
        "name": "Power Panel 조립 및 배선 1.00",
        "spec": "디지털 계통보호전송장치(PITR)",
        "unit": "개",
        "labors": {
            "통신설비공": 0.75
        },
        "category": "device",
        "page": 162,
        "keywords": [
            "Power Panel 조립 및 배선 1.00",
            "디지털 계통보호전송장치(PITR)"
        ]
    },
    {
        "code": "통신 6-3-6",
        "name": "설특별인부 0.75 0.75 1.00 1.00",
        "spec": "디지털 계통보호전송장치(PITR)",
        "unit": "개",
        "labors": {
            "통신설비공": 0.75
        },
        "category": "device",
        "page": 162,
        "keywords": [
            "설특별인부 0.75 0.75 1.00 1.00",
            "디지털 계통보호전송장치(PITR)"
        ]
    },
    {
        "code": "통신 6-3-6",
        "name": "치 내부배선 및 기타결선 1.00",
        "spec": "디지털 계통보호전송장치(PITR)",
        "unit": "개",
        "labors": {
            "통신설비공": 0.5
        },
        "category": "device",
        "page": 162,
        "keywords": [
            "치 내부배선 및 기타결선 1.00",
            "디지털 계통보호전송장치(PITR)"
        ]
    },
    {
        "code": "통신 6-3-6",
        "name": "o T1, E1 전송로 T/L 통신관련산업기사 1.00 1.00 1.00 1.00",
        "spec": "디지털 계통보호전송장치(PITR)",
        "unit": "개",
        "labors": {
            "통신설비공": 1.0
        },
        "category": "device",
        "page": 162,
        "keywords": [
            "o T1, E1 전송로 T/L 통신관련산업기사 1.00 1.00 1.00 1.00",
            "디지털 계통보호전송장치(PITR)"
        ]
    },
    {
        "code": "통신 6-3-6",
        "name": "o 광 전송로 전송로 T/L 통신관련산업기사 1.00 1.00 1.00 1.00",
        "spec": "디지털 계통보호전송장치(PITR)",
        "unit": "개",
        "labors": {
            "통신설비공": 1.0
        },
        "category": "device",
        "page": 162,
        "keywords": [
            "o 광 전송로 전송로 T/L 통신관련산업기사 1.00 1.00 1.00 1.00",
            "디지털 계통보호전송장치(PITR)"
        ]
    },
    {
        "code": "통신 6-3-6",
        "name": "시 전원전압측정 T/L 통신관련산업기사 1.00 1.00 1.00 1.00",
        "spec": "디지털 계통보호전송장치(PITR)",
        "unit": "개",
        "labors": {
            "통신설비공": 1.0
        },
        "category": "device",
        "page": 162,
        "keywords": [
            "시 전원전압측정 T/L 통신관련산업기사 1.00 1.00 1.00 1.00",
            "디지털 계통보호전송장치(PITR)"
        ]
    },
    {
        "code": "통신 6-3-6",
        "name": "직통전화시험 지연 시간측정 동작 1.00 1.00 1.00 1.00",
        "spec": "디지털 계통보호전송장치(PITR)",
        "unit": "개",
        "labors": {
            "통신설비공": 0.5
        },
        "category": "device",
        "page": 162,
        "keywords": [
            "직통전화시험 지연 시간측정 동작 1.00 1.00 1.00 1.00",
            "디지털 계통보호전송장치(PITR)"
        ]
    },
    {
        "code": "통신 6-3-6",
        "name": "o 장비설정 상태확인 T/L 통신관련산업기사 1.00 1.00 2.00 2.00",
        "spec": "디지털 계통보호전송장치(PITR)",
        "unit": "개",
        "labors": {
            "통신설비공": 1.0
        },
        "category": "device",
        "page": 162,
        "keywords": [
            "o 장비설정 상태확인 T/L 통신관련산업기사 1.00 1.00 2.00 2.00",
            "디지털 계통보호전송장치(PITR)"
        ]
    },
    {
        "code": "통신 6-3-6",
        "name": "o 접지상태 및 케이블 결선상태 확인 1.00 2.00 2.00",
        "spec": "디지털 계통보호전송장치(PITR)",
        "unit": "개",
        "labors": {
            "통신설비공": 1.0
        },
        "category": "device",
        "page": 162,
        "keywords": [
            "o 접지상태 및 케이블 결선상태 확인 1.00 2.00 2.00",
            "디지털 계통보호전송장치(PITR)"
        ]
    },
    {
        "code": "통신 6-3-6",
        "name": "o 대국간 송․수신상태 확인 T/L 통신관련산업기사 1.00 1.00 2.00 2.00",
        "spec": "디지털 계통보호전송장치(PITR)",
        "unit": "개",
        "labors": {
            "통신설비공": 1.0
        },
        "category": "device",
        "page": 162,
        "keywords": [
            "o 대국간 송․수신상태 확인 T/L 통신관련산업기사 1.00 1.00 2.00 2.00",
            "디지털 계통보호전송장치(PITR)"
        ]
    },
    {
        "code": "통신 7-1-1",
        "name": "조립설치 - 0.50 - 0.50",
        "spec": "VHF(100W 이하) 이동국 송․수신기",
        "unit": "대",
        "labors": {
            "용접공": 1.0
        },
        "category": "device",
        "page": 169,
        "keywords": [
            "조립설치 - 0.50 - 0.50",
            "VHF(100W 이하) 이동국 송․수신기"
        ]
    },
    {
        "code": "통신 7-1-2",
        "name": "조립설치",
        "spec": "VHF 또는 UHF(100W 이하) 고정국 송․수신기",
        "unit": "대",
        "labors": {
            "통신설비공": 0.5,
            "보통인부": 1.0
        },
        "category": "device",
        "page": 169,
        "keywords": [
            "조립설치",
            "VHF 또는 UHF(100W 이하) 고정국 송․수신기"
        ]
    },
    {
        "code": "통신 7-1-2",
        "name": "배선및결선",
        "spec": "VHF 또는 UHF(100W 이하) 고정국 송․수신기",
        "unit": "대",
        "labors": {
            "통신설비공": 3.0,
            "보통인부": 2.0
        },
        "category": "device",
        "page": 169,
        "keywords": [
            "배선및결선",
            "VHF 또는 UHF(100W 이하) 고정국 송․수신기"
        ]
    },
    {
        "code": "통신 7-1-2",
        "name": "국부점검 및 조정시험",
        "spec": "VHF 또는 UHF(100W 이하) 고정국 송․수신기",
        "unit": "대",
        "labors": {
            "통신관련산업기사": 4.0
        },
        "category": "device",
        "page": 169,
        "keywords": [
            "국부점검 및 조정시험",
            "VHF 또는 UHF(100W 이하) 고정국 송․수신기"
        ]
    },
    {
        "code": "통신 7-1-2",
        "name": "대국시험",
        "spec": "VHF 또는 UHF(100W 이하) 고정국 송․수신기",
        "unit": "대",
        "labors": {
            "통신관련산업기사": 2.0
        },
        "category": "device",
        "page": 169,
        "keywords": [
            "대국시험",
            "VHF 또는 UHF(100W 이하) 고정국 송․수신기"
        ]
    },
    {
        "code": "통신 7-1-3",
        "name": "조립설치",
        "spec": "VHF 또는 UHF(110W 이상) 고정국 송․수신기",
        "unit": "대",
        "labors": {
            "통신설비공": 0.6,
            "보통인부": 1.2
        },
        "category": "device",
        "page": 170,
        "keywords": [
            "조립설치",
            "VHF 또는 UHF(110W 이상) 고정국 송․수신기"
        ]
    },
    {
        "code": "통신 7-1-3",
        "name": "배선및결선",
        "spec": "VHF 또는 UHF(110W 이상) 고정국 송․수신기",
        "unit": "대",
        "labors": {
            "통신설비공": 3.6,
            "보통인부": 2.4
        },
        "category": "device",
        "page": 170,
        "keywords": [
            "배선및결선",
            "VHF 또는 UHF(110W 이상) 고정국 송․수신기"
        ]
    },
    {
        "code": "통신 7-1-3",
        "name": "국부점검 및 조정시험",
        "spec": "VHF 또는 UHF(110W 이상) 고정국 송․수신기",
        "unit": "대",
        "labors": {
            "통신관련산업기사": 10.0
        },
        "category": "device",
        "page": 170,
        "keywords": [
            "국부점검 및 조정시험",
            "VHF 또는 UHF(110W 이상) 고정국 송․수신기"
        ]
    },
    {
        "code": "통신 7-1-3",
        "name": "대국시험",
        "spec": "VHF 또는 UHF(110W 이상) 고정국 송․수신기",
        "unit": "대",
        "labors": {
            "통신관련산업기사": 4.5
        },
        "category": "device",
        "page": 170,
        "keywords": [
            "대국시험",
            "VHF 또는 UHF(110W 이상) 고정국 송․수신기"
        ]
    },
    {
        "code": "통신 7-1-4",
        "name": "전원배선",
        "spec": "중․단파(500W 이하) 송․수신기",
        "unit": "대",
        "labors": {
            "통신관련산업기사": 0.5,
            "통신설비공": 0.5
        },
        "category": "device",
        "page": 170,
        "keywords": [
            "전원배선",
            "중․단파(500W 이하) 송․수신기"
        ]
    },
    {
        "code": "통신 7-1-4",
        "name": "신호선배선",
        "spec": "중․단파(500W 이하) 송․수신기",
        "unit": "대",
        "labors": {
            "통신관련산업기사": 0.5,
            "통신설비공": 0.5
        },
        "category": "device",
        "page": 170,
        "keywords": [
            "신호선배선",
            "중․단파(500W 이하) 송․수신기"
        ]
    },
    {
        "code": "통신 7-1-4",
        "name": "급전선실내배선",
        "spec": "중․단파(500W 이하) 송․수신기",
        "unit": "대",
        "labors": {
            "통신관련산업기사": 1.0,
            "통신설비공": 2.0
        },
        "category": "device",
        "page": 170,
        "keywords": [
            "급전선실내배선",
            "중․단파(500W 이하) 송․수신기"
        ]
    },
    {
        "code": "통신 7-1-4",
        "name": "접지선매설 및 인입작업",
        "spec": "중․단파(500W 이하) 송․수신기",
        "unit": "대",
        "labors": {
            "통신관련산업기사": 0.5,
            "통신설비공": 0.5
        },
        "category": "device",
        "page": 170,
        "keywords": [
            "접지선매설 및 인입작업",
            "중․단파(500W 이하) 송․수신기"
        ]
    },
    {
        "code": "통신 7-1-4",
        "name": "시험",
        "spec": "중․단파(500W 이하) 송․수신기",
        "unit": "대",
        "labors": {
            "통신관련산업기사": 5.0,
            "통신설비공": 1.0
        },
        "category": "device",
        "page": 170,
        "keywords": [
            "시험",
            "중․단파(500W 이하) 송․수신기"
        ]
    },
    {
        "code": "통신 7-1-5",
        "name": "포장해체 및 현품대조 대 -",
        "spec": "마이크로웨이브(Micro Wave) RF 송․수신기",
        "unit": "-",
        "labors": {
            "통신설비공": 0.4,
            "보통인부": 0.4
        },
        "category": "device",
        "page": 171,
        "keywords": [
            "포장해체 및 현품대조 대 -",
            "마이크로웨이브(Micro Wave) RF 송․수신기"
        ]
    },
    {
        "code": "통신 7-1-5",
        "name": "B a y 건립 -",
        "spec": "마이크로웨이브(Micro Wave) RF 송․수신기",
        "unit": "-",
        "labors": {
            "통신설비공": 0.5,
            "보통인부": 1.0
        },
        "category": "device",
        "page": 171,
        "keywords": [
            "B a y 건립 -",
            "마이크로웨이브(Micro Wave) RF 송․수신기"
        ]
    },
    {
        "code": "통신 7-1-5",
        "name": "송․수신기 조립 y 건립 -",
        "spec": "마이크로웨이브(Micro Wave) RF 송․수신기",
        "unit": "0.61",
        "labors": {
            "통신설비공": 0.6
        },
        "category": "device",
        "page": 171,
        "keywords": [
            "송․수신기 조립 y 건립 -",
            "마이크로웨이브(Micro Wave) RF 송․수신기"
        ]
    },
    {
        "code": "통신 7-1-5",
        "name": "내부결선 및 기타결선 건립 -",
        "spec": "마이크로웨이브(Micro Wave) RF 송․수신기",
        "unit": "-",
        "labors": {
            "통신설비공": 0.3,
            "보통인부": 0.25
        },
        "category": "device",
        "page": 171,
        "keywords": [
            "내부결선 및 기타결선 건립 -",
            "마이크로웨이브(Micro Wave) RF 송․수신기"
        ]
    },
    {
        "code": "통신 7-1-6",
        "name": "B a y 건립",
        "spec": "마이크로웨이브(Micro Wave) Power Amplifier",
        "unit": "대",
        "labors": {
            "통신설비공": 0.5,
            "보통인부": 1.0
        },
        "category": "device",
        "page": 171,
        "keywords": [
            "B a y 건립",
            "마이크로웨이브(Micro Wave) Power Amplifier"
        ]
    },
    {
        "code": "통신 7-1-6",
        "name": "S e t 조립",
        "spec": "마이크로웨이브(Micro Wave) Power Amplifier",
        "unit": "대",
        "labors": {
            "통신설비공": 5.0
        },
        "category": "device",
        "page": 171,
        "keywords": [
            "S e t 조립",
            "마이크로웨이브(Micro Wave) Power Amplifier"
        ]
    },
    {
        "code": "통신 7-1-6",
        "name": "내부결선 및 기타결선",
        "spec": "마이크로웨이브(Micro Wave) Power Amplifier",
        "unit": "대",
        "labors": {
            "보통인부": 0.75
        },
        "category": "device",
        "page": 171,
        "keywords": [
            "내부결선 및 기타결선",
            "마이크로웨이브(Micro Wave) Power Amplifier"
        ]
    },
    {
        "code": "통신 7-1-6",
        "name": "T. W. T 조립설치",
        "spec": "마이크로웨이브(Micro Wave) Power Amplifier",
        "unit": "대",
        "labors": {
            "통신관련기사": 1.0,
            "보통인부": 1.0
        },
        "category": "device",
        "page": 171,
        "keywords": [
            "T. W. T 조립설치",
            "마이크로웨이브(Micro Wave) Power Amplifier"
        ]
    },
    {
        "code": "통신 7-1-6",
        "name": "국부조작시험 및각 판넬점검",
        "spec": "마이크로웨이브(Micro Wave) Power Amplifier",
        "unit": "대",
        "labors": {
            "통신관련기사": 6.31
        },
        "category": "device",
        "page": 171,
        "keywords": [
            "국부조작시험 및각 판넬점검",
            "마이크로웨이브(Micro Wave) Power Amplifier"
        ]
    },
    {
        "code": "통신 7-2-1",
        "name": "출력 5 10 50 100 300 0.5 5 10 50 100 300 0.5 5 10 50 100 300 0.5 5",
        "spec": "중․단파 송신기",
        "unit": "개",
        "labors": {
            "통신관련기사": 10.0,
            "통신관련산업기사": 50.0,
            "통신설비공": 100.0,
            "보통인부": 300.0
        },
        "category": "device",
        "page": 172,
        "keywords": [
            "출력 5 10 50 100 300 0.5 5 10 50 100 300 0.5 5 10 50 100 300 0.5 5",
            "중․단파 송신기"
        ]
    },
    {
        "code": "통신 7-2-1",
        "name": "설 공중선 절체장치 1.0 1.0 1.0 1.5 2.0 - 1.0 1.0 1.0 1.5 2.0 1.0 1.0 1.02.0 3.0 3.0 - -",
        "spec": "중․단파 송신기",
        "unit": "개",
        "labors": {
            "통신관련산업기사": 1.0,
            "통신설비공": 1.5,
            "보통인부": 2.0
        },
        "category": "device",
        "page": 172,
        "keywords": [
            "설 공중선 절체장치 1.0 1.0 1.0 1.5 2.0 - 1.0 1.0 1.0 1.5 2.0 1.0 1.0 1.02.0 3.0 3.0 - -",
            "중․단파 송신기"
        ]
    },
    {
        "code": "통신 7-2-2",
        "name": "5 10 30 500 1.5 5 10 30 500 1.5 5 10 30 500",
        "spec": "VHF-TV 송신기",
        "unit": "개",
        "labors": {
            "통신관련기사": 1.5,
            "통신관련산업기사": 5.0,
            "통신설비공": 10.0,
            "보통인부": 30.0
        },
        "category": "device",
        "page": 173,
        "keywords": [
            "5 10 30 500 1.5 5 10 30 500 1.5 5 10 30 500",
            "VHF-TV 송신기"
        ]
    },
    {
        "code": "통신 7-2-3",
        "name": "출력 5 10 500 1.5 5 10 500 1.5 5 10 500 1.5",
        "spec": "FM 송신기",
        "unit": "개",
        "labors": {
            "통신설비공": 5.0,
            "보통인부": 10.0
        },
        "category": "device",
        "page": 175,
        "keywords": [
            "출력 5 10 500 1.5 5 10 500 1.5 5 10 500 1.5",
            "FM 송신기"
        ]
    },
    {
        "code": "통신 7-2-3",
        "name": "기포장해체 - - - - - - 0.3 0.5 1.0 1.0 1.0 1.0",
        "spec": "FM 송신기",
        "unit": "개",
        "labors": {
            "통신설비공": 2.0,
            "보통인부": 2.0
        },
        "category": "device",
        "page": 175,
        "keywords": [
            "기포장해체 - - - - - - 0.3 0.5 1.0 1.0 1.0 1.0",
            "FM 송신기"
        ]
    },
    {
        "code": "통신 7-2-3",
        "name": "작 기기반입 및 장치 - - 0.5 0.5 1.0 1.0 1.0 2.0 3.0 4.5 1.0 2.0",
        "spec": "FM 송신기",
        "unit": "개",
        "labors": {
            "통신설비공": 4.0,
            "보통인부": 6.0
        },
        "category": "device",
        "page": 175,
        "keywords": [
            "작 기기반입 및 장치 - - 0.5 0.5 1.0 1.0 1.0 2.0 3.0 4.5 1.0 2.0",
            "FM 송신기"
        ]
    },
    {
        "code": "통신 7-2-3",
        "name": "조전원부 0.5 0.5 0.5 0.5 1.0 1.0 1.5 2.5 4.0 5.0 - -",
        "spec": "FM 송신기",
        "unit": "개",
        "labors": {
            "통신설비공": 1.0,
            "보통인부": 1.0
        },
        "category": "device",
        "page": 175,
        "keywords": [
            "조전원부 0.5 0.5 0.5 0.5 1.0 1.0 1.5 2.5 4.0 5.0 - -",
            "FM 송신기"
        ]
    },
    {
        "code": "통신 7-2-3",
        "name": "립제어부 1.0 1.0 0.5 1.0 2.0 2.0 1.0 1.0 3.0 4.0 - -",
        "spec": "FM 송신기",
        "unit": "개",
        "labors": {
            "통신설비공": 1.0,
            "보통인부": 1.0
        },
        "category": "device",
        "page": 175,
        "keywords": [
            "립제어부 1.0 1.0 0.5 1.0 2.0 2.0 1.0 1.0 3.0 4.0 - -",
            "FM 송신기"
        ]
    },
    {
        "code": "통신 7-2-3",
        "name": "치출력단 1.0 2.0 1.0 2.0 2.0 4.0 1.0 2.0 6.0 8.0 - -",
        "spec": "FM 송신기",
        "unit": "개",
        "labors": {
            "통신설비공": 2.0,
            "보통인부": 2.0
        },
        "category": "device",
        "page": 175,
        "keywords": [
            "치출력단 1.0 2.0 1.0 2.0 2.0 4.0 1.0 2.0 6.0 8.0 - -",
            "FM 송신기"
        ]
    },
    {
        "code": "통신 7-2-3",
        "name": "-",
        "spec": "FM 송신기",
        "unit": "개",
        "labors": {
            "통신설비공": 145.0
        },
        "category": "device",
        "page": 175,
        "keywords": [
            "-",
            "FM 송신기"
        ]
    },
    {
        "code": "통신 7-4-1",
        "name": "포장해체 - - - - - 0.3 0.5 1.0 1.0 0.5",
        "spec": "VHF-TV 중계기(Translator)",
        "unit": "개",
        "labors": {
            "통신관련기능사": 0.5,
            "통신설비공": 1.0,
            "보통인부": 1.5
        },
        "category": "device",
        "page": 177,
        "keywords": [
            "포장해체 - - - - - 0.3 0.5 1.0 1.0 0.5",
            "VHF-TV 중계기(Translator)"
        ]
    },
    {
        "code": "통신 7-4-1",
        "name": "작업 기기반입 및 장치 1.0 0.5 0.5 0.5 - - - 1.0 1.5 0.5",
        "spec": "VHF-TV 중계기(Translator)",
        "unit": "개",
        "labors": {
            "통신관련기능사": 0.5,
            "통신설비공": 1.0,
            "보통인부": 1.5
        },
        "category": "device",
        "page": 177,
        "keywords": [
            "작업 기기반입 및 장치 1.0 0.5 0.5 0.5 - - - 1.0 1.5 0.5",
            "VHF-TV 중계기(Translator)"
        ]
    },
    {
        "code": "통신 7-4-2",
        "name": "포장해체 - - - - - 0.3 0.5 1.0 1.0 0.5",
        "spec": "UHF-TV 디지털 중계기",
        "unit": "개",
        "labors": {
            "통신관련기능사": 0.5,
            "통신설비공": 1.0,
            "보통인부": 1.5
        },
        "category": "device",
        "page": 178,
        "keywords": [
            "포장해체 - - - - - 0.3 0.5 1.0 1.0 0.5",
            "UHF-TV 디지털 중계기"
        ]
    },
    {
        "code": "통신 7-4-2",
        "name": "작업 기기반입 및 장치 1.0 0.5 0.5 0.5 - - - 1.0 1.5 0.5",
        "spec": "UHF-TV 디지털 중계기",
        "unit": "개",
        "labors": {
            "통신관련기능사": 0.5,
            "통신설비공": 1.0,
            "보통인부": 1.5
        },
        "category": "device",
        "page": 178,
        "keywords": [
            "작업 기기반입 및 장치 1.0 0.5 0.5 0.5 - - - 1.0 1.5 0.5",
            "UHF-TV 디지털 중계기"
        ]
    },
    {
        "code": "통신 7-4-3",
        "name": "송신 기 - - 0.54",
        "spec": "DTV 소출력 중계기",
        "unit": "0.74",
        "labors": {
            "보통인부": 0.37
        },
        "category": "device",
        "page": 179,
        "keywords": [
            "송신 기 - - 0.54",
            "DTV 소출력 중계기"
        ]
    },
    {
        "code": "통신 7-4-3",
        "name": "중계기 대 0.58 0.41 -",
        "spec": "DTV 소출력 중계기",
        "unit": "0.68",
        "labors": {
            "보통인부": 0.34
        },
        "category": "device",
        "page": 179,
        "keywords": [
            "중계기 대 0.58 0.41 -",
            "DTV 소출력 중계기"
        ]
    },
    {
        "code": "통신 7-4-4",
        "name": "무선스피커 대 0.16 0.35 -",
        "spec": "라디오재방송설비",
        "unit": "-",
        "labors": {
            "보통인부": 0.27
        },
        "category": "device",
        "page": 179,
        "keywords": [
            "무선스피커 대 0.16 0.35 -",
            "라디오재방송설비"
        ]
    },
    {
        "code": "통신 7-4-4",
        "name": "AM 매칭박스 0.16 0.35 -",
        "spec": "라디오재방송설비",
        "unit": "-",
        "labors": {
            "보통인부": 0.26
        },
        "category": "device",
        "page": 179,
        "keywords": [
            "AM 매칭박스 0.16 0.35 -",
            "라디오재방송설비"
        ]
    },
    {
        "code": "통신 7-4-4",
        "name": "저전압증폭기 대 0.50 1.06 -",
        "spec": "라디오재방송설비",
        "unit": "-",
        "labors": {
            "보통인부": 0.61
        },
        "category": "device",
        "page": 179,
        "keywords": [
            "저전압증폭기 대 0.50 1.06 -",
            "라디오재방송설비"
        ]
    },
    {
        "code": "통신 7-4-4",
        "name": "양방향증폭기 대 0.50 1.06 -",
        "spec": "라디오재방송설비",
        "unit": "0.50",
        "labors": {
            "보통인부": 0.25
        },
        "category": "device",
        "page": 179,
        "keywords": [
            "양방향증폭기 대 0.50 1.06 -",
            "라디오재방송설비"
        ]
    },
    {
        "code": "통신 7-4-4",
        "name": "전원분배장치 대 0.50 1.06 -",
        "spec": "라디오재방송설비",
        "unit": "0.18",
        "labors": {
            "보통인부": 0.18
        },
        "category": "device",
        "page": 179,
        "keywords": [
            "전원분배장치 대 0.50 1.06 -",
            "라디오재방송설비"
        ]
    },
    {
        "code": "통신 7-4-5-1",
        "name": "FM 중계기",
        "spec": "FM 및 DMB 중계기",
        "unit": "대",
        "labors": {
            "통신관련산업기사": 0.15,
            "통신설비공": 0.15
        },
        "category": "device",
        "page": 180,
        "keywords": [
            "FM 중계기",
            "FM 및 DMB 중계기"
        ]
    },
    {
        "code": "통신 7-4-5-1",
        "name": "DMB 중계기",
        "spec": "FM 및 DMB 중계기",
        "unit": "대",
        "labors": {
            "통신관련산업기사": 0.15,
            "통신설비공": 0.15
        },
        "category": "device",
        "page": 180,
        "keywords": [
            "DMB 중계기",
            "FM 및 DMB 중계기"
        ]
    },
    {
        "code": "통신 7-4-5-2",
        "name": "벽면",
        "spec": "소출력 FM/T-DMB 무선중계기(10mV/m@10m이하)",
        "unit": "대",
        "labors": {
            "통신설비공": 0.15
        },
        "category": "device",
        "page": 181,
        "keywords": [
            "벽면",
            "소출력 FM/T-DMB 무선중계기(10mV/m@10m이하)"
        ]
    },
    {
        "code": "통신 7-4-5-2",
        "name": "천정",
        "spec": "소출력 FM/T-DMB 무선중계기(10mV/m@10m이하)",
        "unit": "대",
        "labors": {
            "통신관련산업기사": 0.21,
            "통신설비공": 0.21
        },
        "category": "device",
        "page": 181,
        "keywords": [
            "천정",
            "소출력 FM/T-DMB 무선중계기(10mV/m@10m이하)"
        ]
    },
    {
        "code": "통신 7-4-5-2",
        "name": "시험",
        "spec": "소출력 FM/T-DMB 무선중계기(10mV/m@10m이하)",
        "unit": "대",
        "labors": {
            "통신관련산업기사": 0.19
        },
        "category": "device",
        "page": 181,
        "keywords": [
            "시험",
            "소출력 FM/T-DMB 무선중계기(10mV/m@10m이하)"
        ]
    },
    {
        "code": "통신 7-4-5-2",
        "name": "지하층 설치",
        "spec": "소출력 FM/T-DMB 무선중계기(10mV/m@10m이하)",
        "unit": "대",
        "labors": {
            "통신관련산업기사": 0.25,
            "통신설비공": 0.22
        },
        "category": "device",
        "page": 181,
        "keywords": [
            "지하층 설치",
            "소출력 FM/T-DMB 무선중계기(10mV/m@10m이하)"
        ]
    },
    {
        "code": "통신 7-4-6",
        "name": "무선기기 접속단자 개 -",
        "spec": "무선통신보조설비",
        "unit": "-",
        "labors": {
            "통신설비공": 0.07
        },
        "category": "device",
        "page": 181,
        "keywords": [
            "무선기기 접속단자 개 -",
            "무선통신보조설비"
        ]
    },
    {
        "code": "통신 7-5-1-1",
        "name": "1. 조립인양설치 2.00 4.00",
        "spec": "철탑설치",
        "unit": "대",
        "labors": {
            "통신관련기사": 2.0,
            "보통인부": 6.0
        },
        "category": "device",
        "page": 182,
        "keywords": [
            "1. 조립인양설치 2.00 4.00",
            "철탑설치"
        ]
    },
    {
        "code": "통신 7-5-1-1",
        "name": "2. 방향조정 2.00 2.00",
        "spec": "철탑설치",
        "unit": "대",
        "labors": {
            "보통인부": 2.0
        },
        "category": "device",
        "page": 182,
        "keywords": [
            "2. 방향조정 2.00 2.00",
            "철탑설치"
        ]
    },
    {
        "code": "통신 7-5-1-1",
        "name": "1. 조립인양설치 4.00 8.00",
        "spec": "철탑설치",
        "unit": "대",
        "labors": {
            "통신관련기사": 4.0,
            "보통인부": 6.3
        },
        "category": "device",
        "page": 182,
        "keywords": [
            "1. 조립인양설치 4.00 8.00",
            "철탑설치"
        ]
    },
    {
        "code": "통신 7-5-1-1",
        "name": "2. 방향조정 2.00 5.00",
        "spec": "철탑설치",
        "unit": "대",
        "labors": {
            "보통인부": 2.0
        },
        "category": "device",
        "page": 182,
        "keywords": [
            "2. 방향조정 2.00 5.00",
            "철탑설치"
        ]
    },
    {
        "code": "통신 7-5-1-1",
        "name": "1. 조립인양설치 5.00 8.00",
        "spec": "철탑설치",
        "unit": "대",
        "labors": {
            "통신관련기사": 5.0,
            "보통인부": 10.0
        },
        "category": "device",
        "page": 182,
        "keywords": [
            "1. 조립인양설치 5.00 8.00",
            "철탑설치"
        ]
    },
    {
        "code": "통신 7-5-1-1",
        "name": "1. 조립인양설치 5.00 10.70",
        "spec": "철탑설치",
        "unit": "대",
        "labors": {
            "통신관련기사": 5.0,
            "보통인부": 13.0
        },
        "category": "device",
        "page": 182,
        "keywords": [
            "1. 조립인양설치 5.00 10.70",
            "철탑설치"
        ]
    },
    {
        "code": "통신 7-5-1-1",
        "name": "2. 방향조정 3.00 6.00",
        "spec": "철탑설치",
        "unit": "대",
        "labors": {
            "보통인부": 2.0
        },
        "category": "device",
        "page": 182,
        "keywords": [
            "2. 방향조정 3.00 6.00",
            "철탑설치"
        ]
    },
    {
        "code": "통신 7-5-1-1",
        "name": "1. 조립인양설치 7.25 15.10",
        "spec": "철탑설치",
        "unit": "대",
        "labors": {
            "통신관련기사": 6.0,
            "보통인부": 17.1
        },
        "category": "device",
        "page": 182,
        "keywords": [
            "1. 조립인양설치 7.25 15.10",
            "철탑설치"
        ]
    },
    {
        "code": "통신 7-5-1-1",
        "name": "2. 방향조정 3.00 8.00",
        "spec": "철탑설치",
        "unit": "대",
        "labors": {
            "보통인부": 2.0
        },
        "category": "device",
        "page": 182,
        "keywords": [
            "2. 방향조정 3.00 8.00",
            "철탑설치"
        ]
    },
    {
        "code": "통신 7-5-1-1",
        "name": "-",
        "spec": "철탑설치",
        "unit": "대",
        "labors": {
            "통신관련기사": 152.0
        },
        "category": "device",
        "page": 182,
        "keywords": [
            "-",
            "철탑설치"
        ]
    },
    {
        "code": "통신 7-5-1-2",
        "name": "Ø1.2m이하 1. 인양조립설치 -",
        "spec": "건물설치",
        "unit": "대",
        "labors": {
            "통신설비공": 0.51,
            "보통인부": 0.26
        },
        "category": "device",
        "page": 183,
        "keywords": [
            "Ø1.2m이하 1. 인양조립설치 -",
            "건물설치"
        ]
    },
    {
        "code": "통신 7-5-1-2",
        "name": "Ø2.4m이하 1. 인양조립설치 -",
        "spec": "건물설치",
        "unit": "대",
        "labors": {
            "통신설비공": 1.15,
            "보통인부": 0.58
        },
        "category": "device",
        "page": 183,
        "keywords": [
            "Ø2.4m이하 1. 인양조립설치 -",
            "건물설치"
        ]
    },
    {
        "code": "통신 7-5-1-2",
        "name": "Ø3.2m이하 1. 인양조립설치 -",
        "spec": "건물설치",
        "unit": "대",
        "labors": {
            "통신설비공": 2.2,
            "보통인부": 1.1
        },
        "category": "device",
        "page": 183,
        "keywords": [
            "Ø3.2m이하 1. 인양조립설치 -",
            "건물설치"
        ]
    },
    {
        "code": "통신 7-5-2",
        "name": "1. 조립인양설치 1.00 3.00",
        "spec": "VHF, 옴니, 코너(Corner) 안테나",
        "unit": "대",
        "labors": {
            "통신관련기사": 3.0,
            "특별인부": 2.5
        },
        "category": "device",
        "page": 183,
        "keywords": [
            "1. 조립인양설치 1.00 3.00",
            "VHF, 옴니, 코너(Corner) 안테나"
        ]
    },
    {
        "code": "통신 7-5-3-1",
        "name": "1. ANT Element : 제작 2.00 - - 8.00 - 5.60",
        "spec": "Curtain 안테나",
        "unit": "3Wire 1Dipole 1단",
        "labors": {
            "용접공": 6.0
        },
        "category": "device",
        "page": 184,
        "keywords": [
            "1. ANT Element : 제작 2.00 - - 8.00 - 5.60",
            "Curtain 안테나"
        ]
    },
    {
        "code": "통신 7-5-3-1",
        "name": "설치 5.00 - 5.00 - 10.00 -",
        "spec": "Curtain 안테나",
        "unit": "3Wire 1Dipole 1단",
        "labors": {
            "용접공": 11.5
        },
        "category": "device",
        "page": 184,
        "keywords": [
            "설치 5.00 - 5.00 - 10.00 -",
            "Curtain 안테나"
        ]
    },
    {
        "code": "통신 7-5-3-1",
        "name": "제작 - 0.60 - 4.00 - 1.80",
        "spec": "Curtain 안테나",
        "unit": "3Wire 1Dipole 1단",
        "labors": {
            "용접공": 2.0
        },
        "category": "device",
        "page": 184,
        "keywords": [
            "제작 - 0.60 - 4.00 - 1.80",
            "Curtain 안테나"
        ]
    },
    {
        "code": "통신 7-5-3-1",
        "name": "설치 0.30 - - - 1.60 -",
        "spec": "Curtain 안테나",
        "unit": "3Wire 1Dipole 1단",
        "labors": {
            "용접공": 3.2
        },
        "category": "device",
        "page": 184,
        "keywords": [
            "설치 0.30 - - - 1.60 -",
            "Curtain 안테나"
        ]
    },
    {
        "code": "통신 7-5-3-1",
        "name": "제작 0.80 1.20 - - - 2.10",
        "spec": "Curtain 안테나",
        "unit": "3Wire 1Dipole 1단",
        "labors": {
            "용접공": 2.5
        },
        "category": "device",
        "page": 184,
        "keywords": [
            "제작 0.80 1.20 - - - 2.10",
            "Curtain 안테나"
        ]
    },
    {
        "code": "통신 7-5-3-1",
        "name": "설치 - - 4.50 - 3.20 -",
        "spec": "Curtain 안테나",
        "unit": "3Wire 1Dipole 1단",
        "labors": {
            "용접공": 6.0
        },
        "category": "device",
        "page": 184,
        "keywords": [
            "설치 - - 4.50 - 3.20 -",
            "Curtain 안테나"
        ]
    },
    {
        "code": "통신 7-5-3-1",
        "name": "설치 0.50 1.50 - - 4.00 -",
        "spec": "Curtain 안테나",
        "unit": "3Wire 1Dipole 1단",
        "labors": {
            "용접공": 8.0
        },
        "category": "device",
        "page": 184,
        "keywords": [
            "설치 0.50 1.50 - - 4.00 -",
            "Curtain 안테나"
        ]
    },
    {
        "code": "통신 7-5-3-1",
        "name": "제작 - 1.00 - 6.00 - -",
        "spec": "Curtain 안테나",
        "unit": "3Wire 1Dipole 1단",
        "labors": {
            "용접공": 6.0
        },
        "category": "device",
        "page": 184,
        "keywords": [
            "제작 - 1.00 - 6.00 - -",
            "Curtain 안테나"
        ]
    },
    {
        "code": "통신 7-5-3-1",
        "name": "설치 - 0.50 - - 6.00 -",
        "spec": "Curtain 안테나",
        "unit": "3Wire 1Dipole 1단",
        "labors": {
            "용접공": 8.0
        },
        "category": "device",
        "page": 184,
        "keywords": [
            "설치 - 0.50 - - 6.00 -",
            "Curtain 안테나"
        ]
    },
    {
        "code": "통신 7-5-3-1",
        "name": "Network 제작 1.50 - - 8.00 - 4.00",
        "spec": "Curtain 안테나",
        "unit": "3Wire 1Dipole 1단",
        "labors": {
            "용접공": 4.0
        },
        "category": "device",
        "page": 184,
        "keywords": [
            "Network 제작 1.50 - - 8.00 - 4.00",
            "Curtain 안테나"
        ]
    },
    {
        "code": "통신 7-5-3-1",
        "name": "설치 4.00 - - - 10.00 -",
        "spec": "Curtain 안테나",
        "unit": "3Wire 1Dipole 1단",
        "labors": {
            "용접공": 15.0
        },
        "category": "device",
        "page": 184,
        "keywords": [
            "설치 4.00 - - - 10.00 -",
            "Curtain 안테나"
        ]
    },
    {
        "code": "통신 7-5-3-1",
        "name": "8. Slew Switch : 제작 - 8.00 2.00 2.00 - -",
        "spec": "Curtain 안테나",
        "unit": "3Wire 1Dipole 1단",
        "labors": {
            "용접공": 10.0
        },
        "category": "device",
        "page": 184,
        "keywords": [
            "8. Slew Switch : 제작 - 8.00 2.00 2.00 - -",
            "Curtain 안테나"
        ]
    },
    {
        "code": "통신 7-5-3-1",
        "name": "설치 1.60 6.00 - 3.00 - -",
        "spec": "Curtain 안테나",
        "unit": "3Wire 1Dipole 1단",
        "labors": {
            "용접공": 12.0
        },
        "category": "device",
        "page": 184,
        "keywords": [
            "설치 1.60 6.00 - 3.00 - -",
            "Curtain 안테나"
        ]
    },
    {
        "code": "통신 7-5-3-1",
        "name": "(10선-12선) 제작 - 3.00 - 6.00 - -",
        "spec": "Curtain 안테나",
        "unit": "3Wire 1Dipole 1단",
        "labors": {
            "용접공": 4.0
        },
        "category": "device",
        "page": 184,
        "keywords": [
            "(10선-12선) 제작 - 3.00 - 6.00 - -",
            "Curtain 안테나"
        ]
    },
    {
        "code": "통신 7-5-3-1",
        "name": "설치 - 2.00 - - 4.00 -",
        "spec": "Curtain 안테나",
        "unit": "3Wire 1Dipole 1단",
        "labors": {
            "용접공": 10.0
        },
        "category": "device",
        "page": 184,
        "keywords": [
            "설치 - 2.00 - - 4.00 -",
            "Curtain 안테나"
        ]
    },
    {
        "code": "통신 7-5-3-1",
        "name": "10. 임피던스측정 및 정합 7.00 14.00 14.00 - - -",
        "spec": "Curtain 안테나",
        "unit": "3Wire 1Dipole 1단",
        "labors": {
            "용접공": 14.0
        },
        "category": "device",
        "page": 184,
        "keywords": [
            "10. 임피던스측정 및 정합 7.00 14.00 14.00 - - -",
            "Curtain 안테나"
        ]
    },
    {
        "code": "통신 7-5-3-2",
        "name": "1. 포장해체점검 -",
        "spec": "LP 안테나",
        "unit": "기",
        "labors": {
            "통신외선공": 2.6,
            "보통인부": 2.08
        },
        "category": "device",
        "page": 185,
        "keywords": [
            "1. 포장해체점검 -",
            "LP 안테나"
        ]
    },
    {
        "code": "통신 7-5-3-2",
        "name": "가. Boom 조립 0.50",
        "spec": "LP 안테나",
        "unit": "기",
        "labors": {
            "통신외선공": 1.0,
            "보통인부": 10.8
        },
        "category": "device",
        "page": 185,
        "keywords": [
            "가. Boom 조립 0.50",
            "LP 안테나"
        ]
    },
    {
        "code": "통신 7-5-3-2",
        "name": "나. Boom 인양설치 1.00",
        "spec": "LP 안테나",
        "unit": "기",
        "labors": {
            "통신관련기사": 7.2,
            "통신외선공": 1.0,
            "보통인부": 18.0
        },
        "category": "device",
        "page": 185,
        "keywords": [
            "나. Boom 인양설치 1.00",
            "LP 안테나"
        ]
    },
    {
        "code": "통신 7-5-3-2",
        "name": "다. 소자조립 5.02",
        "spec": "LP 안테나",
        "unit": "기",
        "labors": {
            "통신외선공": 1.0
        },
        "category": "device",
        "page": 185,
        "keywords": [
            "다. 소자조립 5.02",
            "LP 안테나"
        ]
    },
    {
        "code": "통신 7-5-3-2",
        "name": "라. 소자인양 설치 3.10",
        "spec": "LP 안테나",
        "unit": "기",
        "labors": {
            "통신관련기사": 8.0,
            "통신외선공": 2.0,
            "보통인부": 18.0
        },
        "category": "device",
        "page": 185,
        "keywords": [
            "라. 소자인양 설치 3.10",
            "LP 안테나"
        ]
    },
    {
        "code": "통신 7-5-3-2",
        "name": "마. 배선및결선 -",
        "spec": "LP 안테나",
        "unit": "기",
        "labors": {
            "통신관련기사": 1.0,
            "통신외선공": 8.0
        },
        "category": "device",
        "page": 185,
        "keywords": [
            "마. 배선및결선 -",
            "LP 안테나"
        ]
    },
    {
        "code": "통신 7-5-3-2",
        "name": "3. 특성시험 및 조정 4.00",
        "spec": "LP 안테나",
        "unit": "기",
        "labors": {
            "통신외선공": 7.5
        },
        "category": "device",
        "page": 185,
        "keywords": [
            "3. 특성시험 및 조정 4.00",
            "LP 안테나"
        ]
    },
    {
        "code": "통신 7-5-4",
        "name": "10W-100W",
        "spec": "의사공중선",
        "unit": "개",
        "labors": {
            "통신설비공": 1.0
        },
        "category": "device",
        "page": 187,
        "keywords": [
            "10W-100W",
            "의사공중선"
        ]
    },
    {
        "code": "통신 7-5-4",
        "name": "1kW 이하",
        "spec": "의사공중선",
        "unit": "개",
        "labors": {
            "통신관련산업기사": 1.0,
            "통신설비공": 1.0
        },
        "category": "device",
        "page": 187,
        "keywords": [
            "1kW 이하",
            "의사공중선"
        ]
    },
    {
        "code": "통신 7-5-4",
        "name": "5kW 이하",
        "spec": "의사공중선",
        "unit": "개",
        "labors": {
            "통신관련기사": 1.0,
            "통신관련산업기사": 1.0,
            "통신설비공": 1.0
        },
        "category": "device",
        "page": 187,
        "keywords": [
            "5kW 이하",
            "의사공중선"
        ]
    },
    {
        "code": "통신 7-5-4",
        "name": "10kW 이하",
        "spec": "의사공중선",
        "unit": "개",
        "labors": {
            "통신관련기사": 1.0,
            "통신관련산업기사": 1.0,
            "통신설비공": 1.0
        },
        "category": "device",
        "page": 187,
        "keywords": [
            "10kW 이하",
            "의사공중선"
        ]
    },
    {
        "code": "통신 7-5-4",
        "name": "50kW 이하",
        "spec": "의사공중선",
        "unit": "개",
        "labors": {
            "통신관련기사": 1.0,
            "통신관련산업기사": 3.0,
            "통신설비공": 3.0,
            "보통인부": 1.0
        },
        "category": "device",
        "page": 187,
        "keywords": [
            "50kW 이하",
            "의사공중선"
        ]
    },
    {
        "code": "통신 7-5-4",
        "name": "100kW 이하",
        "spec": "의사공중선",
        "unit": "개",
        "labors": {
            "통신관련기사": 2.0,
            "통신관련산업기사": 4.0,
            "통신설비공": 4.0,
            "보통인부": 3.0
        },
        "category": "device",
        "page": 187,
        "keywords": [
            "100kW 이하",
            "의사공중선"
        ]
    },
    {
        "code": "통신 7-5-4",
        "name": "300kW 이하",
        "spec": "의사공중선",
        "unit": "개",
        "labors": {
            "통신관련기사": 3.0,
            "통신관련산업기사": 6.0,
            "통신설비공": 6.0,
            "보통인부": 5.0
        },
        "category": "device",
        "page": 187,
        "keywords": [
            "300kW 이하",
            "의사공중선"
        ]
    },
    {
        "code": "통신 7-5-4",
        "name": "500kW 이하",
        "spec": "의사공중선",
        "unit": "개",
        "labors": {
            "통신관련기사": 5.5,
            "통신관련산업기사": 11.0,
            "통신설비공": 11.0,
            "보통인부": 9.0
        },
        "category": "device",
        "page": 187,
        "keywords": [
            "500kW 이하",
            "의사공중선"
        ]
    },
    {
        "code": "통신 7-5-4",
        "name": "1,000kW 이하",
        "spec": "의사공중선",
        "unit": "개",
        "labors": {
            "통신관련기사": 11.0,
            "통신관련산업기사": 22.0,
            "통신설비공": 22.0,
            "보통인부": 18.0
        },
        "category": "device",
        "page": 187,
        "keywords": [
            "1,000kW 이하",
            "의사공중선"
        ]
    },
    {
        "code": "통신 7-5-5-1",
        "name": "포장해체 및 점검",
        "spec": "TV Low Channel",
        "unit": "2Dipole 1Panel",
        "labors": {
            "통신외선공": 1.0,
            "보통인부": 0.8
        },
        "category": "device",
        "page": 187,
        "keywords": [
            "포장해체 및 점검",
            "TV Low Channel"
        ]
    },
    {
        "code": "통신 7-5-5-1",
        "name": "조립설치",
        "spec": "TV Low Channel",
        "unit": "2Dipole 1Panel",
        "labors": {
            "통신관련기사": 3.7,
            "통신외선공": 5.0,
            "송전전공": 7.0,
            "보통인부": 18.0
        },
        "category": "device",
        "page": 187,
        "keywords": [
            "조립설치",
            "TV Low Channel"
        ]
    },
    {
        "code": "통신 7-5-5-1",
        "name": "특성측정 및 조정",
        "spec": "TV Low Channel",
        "unit": "2Dipole 1Panel",
        "labors": {
            "통신관련기사": 4.0,
            "통신외선공": 7.5
        },
        "category": "device",
        "page": 187,
        "keywords": [
            "특성측정 및 조정",
            "TV Low Channel"
        ]
    },
    {
        "code": "통신 7-5-5-2",
        "name": "포장해체 및 점검",
        "spec": "TV High Channel",
        "unit": "4Dipole 1Panel",
        "labors": {
            "통신외선공": 0.8,
            "보통인부": 0.6
        },
        "category": "device",
        "page": 188,
        "keywords": [
            "포장해체 및 점검",
            "TV High Channel"
        ]
    },
    {
        "code": "통신 7-5-5-2",
        "name": "조립설치",
        "spec": "TV High Channel",
        "unit": "4Dipole 1Panel",
        "labors": {
            "통신관련기사": 3.5,
            "통신외선공": 4.0,
            "송전전공": 6.0,
            "보통인부": 14.0
        },
        "category": "device",
        "page": 188,
        "keywords": [
            "조립설치",
            "TV High Channel"
        ]
    },
    {
        "code": "통신 7-5-5-2",
        "name": "특성측정 및 조정",
        "spec": "TV High Channel",
        "unit": "4Dipole 1Panel",
        "labors": {
            "통신관련기사": 4.0,
            "통신외선공": 6.0
        },
        "category": "device",
        "page": 188,
        "keywords": [
            "특성측정 및 조정",
            "TV High Channel"
        ]
    },
    {
        "code": "통신 7-5-5-3",
        "name": "포장해체 및 점검",
        "spec": "TV UHF Channel",
        "unit": "4Dipole 1Panel",
        "labors": {
            "통신외선공": 0.6,
            "보통인부": 0.4
        },
        "category": "device",
        "page": 188,
        "keywords": [
            "포장해체 및 점검",
            "TV UHF Channel"
        ]
    },
    {
        "code": "통신 7-5-5-3",
        "name": "조립설치",
        "spec": "TV UHF Channel",
        "unit": "4Dipole 1Panel",
        "labors": {
            "통신관련기사": 1.5,
            "통신외선공": 2.0,
            "송전전공": 3.0,
            "보통인부": 5.0
        },
        "category": "device",
        "page": 188,
        "keywords": [
            "조립설치",
            "TV UHF Channel"
        ]
    },
    {
        "code": "통신 7-5-5-3",
        "name": "특성측정 및 조정",
        "spec": "TV UHF Channel",
        "unit": "4Dipole 1Panel",
        "labors": {
            "통신관련기사": 5.0,
            "통신외선공": 6.0
        },
        "category": "device",
        "page": 188,
        "keywords": [
            "특성측정 및 조정",
            "TV UHF Channel"
        ]
    },
    {
        "code": "통신 7-5-5-4",
        "name": "포장해체 및 점검",
        "spec": "FM(88-108MHz)",
        "unit": "Element 1기",
        "labors": {
            "통신외선공": 0.8,
            "보통인부": 0.6
        },
        "category": "device",
        "page": 188,
        "keywords": [
            "포장해체 및 점검",
            "FM(88-108MHz)"
        ]
    },
    {
        "code": "통신 7-5-5-4",
        "name": "조립설치",
        "spec": "FM(88-108MHz)",
        "unit": "Element 1기",
        "labors": {
            "통신관련기사": 3.0,
            "통신외선공": 2.0,
            "송전전공": 4.0,
            "보통인부": 11.0
        },
        "category": "device",
        "page": 188,
        "keywords": [
            "조립설치",
            "FM(88-108MHz)"
        ]
    },
    {
        "code": "통신 7-5-5-4",
        "name": "특성측정 및 조정",
        "spec": "FM(88-108MHz)",
        "unit": "Element 1기",
        "labors": {
            "통신관련기사": 4.0,
            "통신외선공": 4.5
        },
        "category": "device",
        "page": 188,
        "keywords": [
            "특성측정 및 조정",
            "FM(88-108MHz)"
        ]
    },
    {
        "code": "통신 7-5-6",
        "name": "지상파 TV 및 FM 수신 안테나 세트",
        "spec": "방송 공동수신 안테나",
        "unit": "0.17",
        "labors": {
            "통신설비공": 0.33
        },
        "category": "device",
        "page": 189,
        "keywords": [
            "지상파 TV 및 FM 수신 안테나 세트",
            "방송 공동수신 안테나"
        ]
    },
    {
        "code": "통신 7-5-6",
        "name": "라디오 방송 폴(Pole) 기",
        "spec": "방송 공동수신 안테나",
        "unit": "-",
        "labors": {
            "통신설비공": 0.1
        },
        "category": "device",
        "page": 189,
        "keywords": [
            "라디오 방송 폴(Pole) 기",
            "방송 공동수신 안테나"
        ]
    },
    {
        "code": "통신 7-5-6",
        "name": "지름 1.2m 이하 기",
        "spec": "방송 공동수신 안테나",
        "unit": "0.60",
        "labors": {
            "통신설비공": 0.53
        },
        "category": "device",
        "page": 189,
        "keywords": [
            "지름 1.2m 이하 기",
            "방송 공동수신 안테나"
        ]
    },
    {
        "code": "통신 7-5-6",
        "name": "지름 1.8m 이하 기",
        "spec": "방송 공동수신 안테나",
        "unit": "0.76",
        "labors": {
            "통신설비공": 0.6
        },
        "category": "device",
        "page": 189,
        "keywords": [
            "지름 1.8m 이하 기",
            "방송 공동수신 안테나"
        ]
    },
    {
        "code": "통신 7-5-7",
        "name": "안테나설치",
        "spec": "디지털 위성방송 개별수신방식(DTH)",
        "unit": "대",
        "labors": {
            "통신설비공": 0.14,
            "통신관련산업기사": 0.1
        },
        "category": "device",
        "page": 189,
        "keywords": [
            "안테나설치",
            "디지털 위성방송 개별수신방식(DTH)"
        ]
    },
    {
        "code": "통신 7-5-7",
        "name": "셋톱박스 설치",
        "spec": "디지털 위성방송 개별수신방식(DTH)",
        "unit": "대",
        "labors": {
            "통신설비공": 0.1
        },
        "category": "device",
        "page": 189,
        "keywords": [
            "셋톱박스 설치",
            "디지털 위성방송 개별수신방식(DTH)"
        ]
    },
    {
        "code": "통신 7-5-7",
        "name": "시험",
        "spec": "디지털 위성방송 개별수신방식(DTH)",
        "unit": "대",
        "labors": {
            "통신관련산업기사": 0.1
        },
        "category": "device",
        "page": 189,
        "keywords": [
            "시험",
            "디지털 위성방송 개별수신방식(DTH)"
        ]
    },
    {
        "code": "통신 7-5-8",
        "name": "실내",
        "spec": "DTV방송 단독수신설비",
        "unit": "대",
        "labors": {
            "통신설비공": 0.09,
            "특별인부": 0.06
        },
        "category": "device",
        "page": 190,
        "keywords": [
            "실내",
            "DTV방송 단독수신설비"
        ]
    },
    {
        "code": "통신 7-5-8",
        "name": "실외",
        "spec": "DTV방송 단독수신설비",
        "unit": "대",
        "labors": {
            "통신설비공": 0.18,
            "특별인부": 0.17
        },
        "category": "device",
        "page": 190,
        "keywords": [
            "실외",
            "DTV방송 단독수신설비"
        ]
    },
    {
        "code": "통신 7-5-8",
        "name": "안테나폴 -",
        "spec": "DTV방송 단독수신설비",
        "unit": "기",
        "labors": {
            "통신설비공": 0.1
        },
        "category": "device",
        "page": 190,
        "keywords": [
            "안테나폴 -",
            "DTV방송 단독수신설비"
        ]
    },
    {
        "code": "통신 7-6-1-2",
        "name": "철탑자재 분류 톤",
        "spec": "조립식 강관주형 철탑",
        "unit": "0.50",
        "labors": {
            "통신외선공": 1.2,
            "특별인부": 1.2
        },
        "category": "device",
        "page": 191,
        "keywords": [
            "철탑자재 분류 톤",
            "조립식 강관주형 철탑"
        ]
    },
    {
        "code": "통신 7-6-1-2",
        "name": "건립 분류 톤",
        "spec": "조립식 강관주형 철탑",
        "unit": "3.60",
        "labors": {
            "통신외선공": 3.6,
            "특별인부": 2.6
        },
        "category": "device",
        "page": 191,
        "keywords": [
            "건립 분류 톤",
            "조립식 강관주형 철탑"
        ]
    },
    {
        "code": "통신 7-6-2",
        "name": "2. 철탑조립 특별인부 0.90 1.30 1.80",
        "spec": "중파방송용 삼각지선식 철탑",
        "unit": "㎝) (단위 : ㎝) (단위 : ㎝) (단위 : ㎝",
        "labors": {
            "통신외선공": 2.4
        },
        "category": "device",
        "page": 192,
        "keywords": [
            "2. 철탑조립 특별인부 0.90 1.30 1.80",
            "중파방송용 삼각지선식 철탑"
        ]
    },
    {
        "code": "통신 7-6-2",
        "name": "철공 0.07 0.10 0.13",
        "spec": "중파방송용 삼각지선식 철탑",
        "unit": "㎝) (단위 : ㎝) (단위 : ㎝) (단위 : ㎝",
        "labors": {
            "통신외선공": 0.19
        },
        "category": "device",
        "page": 192,
        "keywords": [
            "철공 0.07 0.10 0.13",
            "중파방송용 삼각지선식 철탑"
        ]
    },
    {
        "code": "통신 7-6-2",
        "name": "무선안테나공 2.16 3.02 3.88",
        "spec": "중파방송용 삼각지선식 철탑",
        "unit": "㎝) (단위 : ㎝) (단위 : ㎝) (단위 : ㎝",
        "labors": {
            "통신외선공": 5.61
        },
        "category": "device",
        "page": 192,
        "keywords": [
            "무선안테나공 2.16 3.02 3.88",
            "중파방송용 삼각지선식 철탑"
        ]
    },
    {
        "code": "통신 7-6-2",
        "name": "3. 철탑건립 통신외선공 3.00 4.20 5.40",
        "spec": "중파방송용 삼각지선식 철탑",
        "unit": "㎝) (단위 : ㎝) (단위 : ㎝) (단위 : ㎝",
        "labors": {
            "통신외선공": 7.8
        },
        "category": "device",
        "page": 192,
        "keywords": [
            "3. 철탑건립 통신외선공 3.00 4.20 5.40",
            "중파방송용 삼각지선식 철탑"
        ]
    },
    {
        "code": "통신 7-6-2",
        "name": "보통인부 4.70 6.50 8.46",
        "spec": "중파방송용 삼각지선식 철탑",
        "unit": "㎝) (단위 : ㎝) (단위 : ㎝) (단위 : ㎝",
        "labors": {
            "통신외선공": 12.22
        },
        "category": "device",
        "page": 192,
        "keywords": [
            "보통인부 4.70 6.50 8.46",
            "중파방송용 삼각지선식 철탑"
        ]
    },
    {
        "code": "통신 7-6-2",
        "name": "4. 3방향 지지선설치 통신외선공 2.20 3.77 4.90",
        "spec": "중파방송용 삼각지선식 철탑",
        "unit": "㎝) (단위 : ㎝) (단위 : ㎝) (단위 : ㎝",
        "labors": {
            "통신외선공": 6.76
        },
        "category": "device",
        "page": 192,
        "keywords": [
            "4. 3방향 지지선설치 통신외선공 2.20 3.77 4.90",
            "중파방송용 삼각지선식 철탑"
        ]
    },
    {
        "code": "통신 7-6-2",
        "name": "(1개소당 길이 보통인부 1.20 1.74 2.28",
        "spec": "중파방송용 삼각지선식 철탑",
        "unit": "㎝) (단위 : ㎝) (단위 : ㎝) (단위 : ㎝",
        "labors": {
            "통신외선공": 3.12
        },
        "category": "device",
        "page": 192,
        "keywords": [
            "(1개소당 길이 보통인부 1.20 1.74 2.28",
            "중파방송용 삼각지선식 철탑"
        ]
    },
    {
        "code": "통신 7-6-2",
        "name": "5. 항공장애표시등 송전전공 4.10 4.10 4.10",
        "spec": "중파방송용 삼각지선식 철탑",
        "unit": "㎝) (단위 : ㎝) (단위 : ㎝) (단위 : ㎝",
        "labors": {
            "통신외선공": 4.1
        },
        "category": "device",
        "page": 192,
        "keywords": [
            "5. 항공장애표시등 송전전공 4.10 4.10 4.10",
            "중파방송용 삼각지선식 철탑"
        ]
    },
    {
        "code": "통신 7-6-2",
        "name": "500W 1EA, 보통인부 1.10 1.10 1.10",
        "spec": "중파방송용 삼각지선식 철탑",
        "unit": "㎝) (단위 : ㎝) (단위 : ㎝) (단위 : ㎝",
        "labors": {
            "통신외선공": 1.1
        },
        "category": "device",
        "page": 192,
        "keywords": [
            "500W 1EA, 보통인부 1.10 1.10 1.10",
            "중파방송용 삼각지선식 철탑"
        ]
    },
    {
        "code": "통신 7-6-2",
        "name": "6. 위치 및 지적산업기사 4.00 4.00 5.00",
        "spec": "중파방송용 삼각지선식 철탑",
        "unit": "㎝) (단위 : ㎝) (단위 : ㎝) (단위 : ㎝",
        "labors": {
            "통신외선공": 6.0
        },
        "category": "device",
        "page": 192,
        "keywords": [
            "6. 위치 및 지적산업기사 4.00 4.00 5.00",
            "중파방송용 삼각지선식 철탑"
        ]
    },
    {
        "code": "통신 7-6-2",
        "name": "수직측량 지적기능사 8.00 8.00 9.00",
        "spec": "중파방송용 삼각지선식 철탑",
        "unit": "㎝) (단위 : ㎝) (단위 : ㎝) (단위 : ㎝",
        "labors": {
            "통신외선공": 11.0
        },
        "category": "device",
        "page": 192,
        "keywords": [
            "수직측량 지적기능사 8.00 8.00 9.00",
            "중파방송용 삼각지선식 철탑"
        ]
    },
    {
        "code": "통신 7-6-2",
        "name": "7. 좌애자설치 무선안테나공 1.20 1.50 2.00",
        "spec": "중파방송용 삼각지선식 철탑",
        "unit": "㎝) (단위 : ㎝) (단위 : ㎝) (단위 : ㎝",
        "labors": {
            "통신외선공": 3.0
        },
        "category": "device",
        "page": 192,
        "keywords": [
            "7. 좌애자설치 무선안테나공 1.20 1.50 2.00",
            "중파방송용 삼각지선식 철탑"
        ]
    },
    {
        "code": "통신 7-6-2",
        "name": "보통인부 0.60 0.70 1.00",
        "spec": "중파방송용 삼각지선식 철탑",
        "unit": "㎝) (단위 : ㎝) (단위 : ㎝) (단위 : ㎝",
        "labors": {
            "통신외선공": 1.5
        },
        "category": "device",
        "page": 192,
        "keywords": [
            "보통인부 0.60 0.70 1.00",
            "중파방송용 삼각지선식 철탑"
        ]
    },
    {
        "code": "통신 7-6-2",
        "name": "8. 피뢰침 설치 송전전공 2.60 2.60 2.60",
        "spec": "중파방송용 삼각지선식 철탑",
        "unit": "㎝) (단위 : ㎝) (단위 : ㎝) (단위 : ㎝",
        "labors": {
            "통신외선공": 2.6
        },
        "category": "device",
        "page": 192,
        "keywords": [
            "8. 피뢰침 설치 송전전공 2.60 2.60 2.60",
            "중파방송용 삼각지선식 철탑"
        ]
    },
    {
        "code": "통신 7-6-2",
        "name": "9. 링트랜스설치 통신외선공 1.40 1.40 1.40",
        "spec": "중파방송용 삼각지선식 철탑",
        "unit": "㎝) (단위 : ㎝) (단위 : ㎝) (단위 : ㎝",
        "labors": {
            "통신외선공": 1.4
        },
        "category": "device",
        "page": 192,
        "keywords": [
            "9. 링트랜스설치 통신외선공 1.40 1.40 1.40",
            "중파방송용 삼각지선식 철탑"
        ]
    },
    {
        "code": "통신 7-6-2",
        "name": "보통인부 0.80 0.80 0.80",
        "spec": "중파방송용 삼각지선식 철탑",
        "unit": "㎝) (단위 : ㎝) (단위 : ㎝) (단위 : ㎝",
        "labors": {
            "통신외선공": 0.8
        },
        "category": "device",
        "page": 192,
        "keywords": [
            "보통인부 0.80 0.80 0.80",
            "중파방송용 삼각지선식 철탑"
        ]
    },
    {
        "code": "통신 7-6-2",
        "name": "10. 철탑도장 무선안테나공 0.43 0.64 0.85",
        "spec": "중파방송용 삼각지선식 철탑",
        "unit": "㎝) (단위 : ㎝) (단위 : ㎝) (단위 : ㎝",
        "labors": {
            "통신외선공": 1.3
        },
        "category": "device",
        "page": 192,
        "keywords": [
            "10. 철탑도장 무선안테나공 0.43 0.64 0.85",
            "중파방송용 삼각지선식 철탑"
        ]
    },
    {
        "code": "통신 7-6-2",
        "name": "도장공 0.43 0.64 0.85",
        "spec": "중파방송용 삼각지선식 철탑",
        "unit": "㎝) (단위 : ㎝) (단위 : ㎝) (단위 : ㎝",
        "labors": {
            "통신외선공": 1.3
        },
        "category": "device",
        "page": 192,
        "keywords": [
            "도장공 0.43 0.64 0.85",
            "중파방송용 삼각지선식 철탑"
        ]
    },
    {
        "code": "통신 7-7-1-1",
        "name": "1.포장해체 및 점검 개(BOX) - 0.40",
        "spec": "Rigid Feeder",
        "unit": "-",
        "labors": {
            "통신외선공": 0.4
        },
        "category": "device",
        "page": 194,
        "keywords": [
            "1.포장해체 및 점검 개(BOX) - 0.40",
            "Rigid Feeder"
        ]
    },
    {
        "code": "통신 7-7-1-1",
        "name": "2.인양설치 10m 6.50 10.17",
        "spec": "Rigid Feeder",
        "unit": "12.50",
        "labors": {
            "통신외선공": 12.0
        },
        "category": "device",
        "page": 194,
        "keywords": [
            "2.인양설치 10m 6.50 10.17",
            "Rigid Feeder"
        ]
    },
    {
        "code": "통신 7-7-1-1",
        "name": "4.최종특성측정 및 점검 식 - 5.40",
        "spec": "Rigid Feeder",
        "unit": "-",
        "labors": {
            "통신외선공": 4.2
        },
        "category": "device",
        "page": 194,
        "keywords": [
            "4.최종특성측정 및 점검 식 - 5.40",
            "Rigid Feeder"
        ]
    },
    {
        "code": "통신 7-7-2",
        "name": "6선식 1. 포장해체 및 재단",
        "spec": "중파 급전선",
        "unit": "개",
        "labors": {
            "통신외선공": 0.9,
            "보통인부": 1.0
        },
        "category": "device",
        "page": 196,
        "keywords": [
            "6선식 1. 포장해체 및 재단",
            "중파 급전선"
        ]
    },
    {
        "code": "통신 7-7-2",
        "name": "2. 인양 설치",
        "spec": "중파 급전선",
        "unit": "개",
        "labors": {
            "통신관련기사": 1.5,
            "통신외선공": 3.5,
            "보통인부": 3.4
        },
        "category": "device",
        "page": 196,
        "keywords": [
            "2. 인양 설치",
            "중파 급전선"
        ]
    },
    {
        "code": "통신 7-7-2",
        "name": "3. 임피던스 측정",
        "spec": "중파 급전선",
        "unit": "개",
        "labors": {
            "통신관련기사": 6.0,
            "통신외선공": 4.0
        },
        "category": "device",
        "page": 196,
        "keywords": [
            "3. 임피던스 측정",
            "중파 급전선"
        ]
    },
    {
        "code": "통신 7-7-2",
        "name": "12선식 1. 포장해체 및 재단",
        "spec": "중파 급전선",
        "unit": "개",
        "labors": {
            "통신외선공": 1.5,
            "보통인부": 1.6
        },
        "category": "device",
        "page": 196,
        "keywords": [
            "12선식 1. 포장해체 및 재단",
            "중파 급전선"
        ]
    },
    {
        "code": "통신 7-7-2",
        "name": "24선식 1. 포장해체 및 재단",
        "spec": "중파 급전선",
        "unit": "개",
        "labors": {
            "통신외선공": 2.2,
            "보통인부": 2.4
        },
        "category": "device",
        "page": 196,
        "keywords": [
            "24선식 1. 포장해체 및 재단",
            "중파 급전선"
        ]
    },
    {
        "code": "통신 7-7-3",
        "name": "2선식 1. 포장해체 및 재단",
        "spec": "단파 급전선",
        "unit": "개",
        "labors": {
            "통신외선공": 0.4,
            "보통인부": 0.5
        },
        "category": "device",
        "page": 197,
        "keywords": [
            "2선식 1. 포장해체 및 재단",
            "단파 급전선"
        ]
    },
    {
        "code": "통신 7-7-3",
        "name": "2. 인양 설치",
        "spec": "단파 급전선",
        "unit": "개",
        "labors": {
            "통신관련기사": 1.2,
            "통신외선공": 3.2,
            "보통인부": 3.0
        },
        "category": "device",
        "page": 197,
        "keywords": [
            "2. 인양 설치",
            "단파 급전선"
        ]
    },
    {
        "code": "통신 7-7-3",
        "name": "3. 임피던스 측정",
        "spec": "단파 급전선",
        "unit": "개",
        "labors": {
            "통신관련기사": 6.0,
            "통신외선공": 5.0
        },
        "category": "device",
        "page": 197,
        "keywords": [
            "3. 임피던스 측정",
            "단파 급전선"
        ]
    },
    {
        "code": "통신 7-7-3",
        "name": "4선식 1. 포장해체 및 재단",
        "spec": "단파 급전선",
        "unit": "개",
        "labors": {
            "통신외선공": 1.3,
            "보통인부": 1.5
        },
        "category": "device",
        "page": 197,
        "keywords": [
            "4선식 1. 포장해체 및 재단",
            "단파 급전선"
        ]
    },
    {
        "code": "통신 7-7-3",
        "name": "Caga 1. 포장해체 및 재단",
        "spec": "단파 급전선",
        "unit": "개",
        "labors": {
            "통신외선공": 1.3,
            "보통인부": 1.5
        },
        "category": "device",
        "page": 197,
        "keywords": [
            "Caga 1. 포장해체 및 재단",
            "단파 급전선"
        ]
    },
    {
        "code": "통신 7-7-3",
        "name": "Type 2. 인양 설치",
        "spec": "단파 급전선",
        "unit": "개",
        "labors": {
            "통신관련기사": 1.2,
            "통신외선공": 3.7,
            "보통인부": 3.5
        },
        "category": "device",
        "page": 197,
        "keywords": [
            "Type 2. 인양 설치",
            "단파 급전선"
        ]
    },
    {
        "code": "통신 7-8-4",
        "name": "설치",
        "spec": "GCE용 3kW Rectifier",
        "unit": "대",
        "labors": {
            "통신설비공": 1.0,
            "보통인부": 2.0
        },
        "category": "device",
        "page": 199,
        "keywords": [
            "설치",
            "GCE용 3kW Rectifier"
        ]
    },
    {
        "code": "통신 7-8-4",
        "name": "배선",
        "spec": "GCE용 3kW Rectifier",
        "unit": "대",
        "labors": {
            "통신내선공": 1.0,
            "보통인부": 1.2
        },
        "category": "device",
        "page": 199,
        "keywords": [
            "배선",
            "GCE용 3kW Rectifier"
        ]
    },
    {
        "code": "통신 7-8-4",
        "name": "시운전",
        "spec": "GCE용 3kW Rectifier",
        "unit": "대",
        "labors": {
            "통신설비공": 4.0
        },
        "category": "device",
        "page": 199,
        "keywords": [
            "시운전",
            "GCE용 3kW Rectifier"
        ]
    },
    {
        "code": "통신 7-9-7",
        "name": "RU 안테나 일체형 대",
        "spec": "5G 중계기",
        "unit": "0.72",
        "labors": {
            "통신설비공": 0.48
        },
        "category": "device",
        "page": 207,
        "keywords": [
            "RU 안테나 일체형 대",
            "5G 중계기"
        ]
    },
    {
        "code": "통신 7-9-7",
        "name": "(Radio Unit) 안테나 분리형 대",
        "spec": "5G 중계기",
        "unit": "0.58",
        "labors": {
            "통신설비공": 0.38
        },
        "category": "device",
        "page": 207,
        "keywords": [
            "(Radio Unit) 안테나 분리형 대",
            "5G 중계기"
        ]
    },
    {
        "code": "통신 7-10-3",
        "name": "1. 조립설치 5.00 8.00",
        "spec": "패시브 리플렉터(반사판, Passive Reflector)(30㎡기준)",
        "unit": "대",
        "labors": {
            "통신관련기사": 5.0,
            "보통인부": 10.0
        },
        "category": "device",
        "page": 208,
        "keywords": [
            "1. 조립설치 5.00 8.00",
            "패시브 리플렉터(반사판, Passive Reflector)(30㎡기준)"
        ]
    },
    {
        "code": "통신 7-10-4",
        "name": "조립및설치",
        "spec": "디하드레이터(Dehydrator)",
        "unit": "1 Route",
        "labors": {
            "통신설비공": 2.0
        },
        "category": "device",
        "page": 209,
        "keywords": [
            "조립및설치",
            "디하드레이터(Dehydrator)"
        ]
    },
    {
        "code": "통신 7-10-4",
        "name": "조정 및 시운전",
        "spec": "디하드레이터(Dehydrator)",
        "unit": "1 Route",
        "labors": {
            "통신관련산업기사": 2.0,
            "통신설비공": 2.0
        },
        "category": "device",
        "page": 209,
        "keywords": [
            "조정 및 시운전",
            "디하드레이터(Dehydrator)"
        ]
    },
    {
        "code": "통신 7-10-5",
        "name": "S e t 설치",
        "spec": "브랜칭 필터(Branching Filter)",
        "unit": "1 Route(10m)",
        "labors": {
            "통신설비공": 1.0,
            "보통인부": 1.0
        },
        "category": "device",
        "page": 209,
        "keywords": [
            "S e t 설치",
            "브랜칭 필터(Branching Filter)"
        ]
    },
    {
        "code": "통신 7-10-5",
        "name": "특성시험",
        "spec": "브랜칭 필터(Branching Filter)",
        "unit": "1 Route(10m)",
        "labors": {
            "통신관련산업기사": 1.93
        },
        "category": "device",
        "page": 209,
        "keywords": [
            "특성시험",
            "브랜칭 필터(Branching Filter)"
        ]
    },
    {
        "code": "통신 7-10-6",
        "name": "B a y 건립",
        "spec": "콤바이너(Combiner)",
        "unit": "개",
        "labors": {
            "통신설비공": 0.5,
            "보통인부": 1.0
        },
        "category": "device",
        "page": 209,
        "keywords": [
            "B a y 건립",
            "콤바이너(Combiner)"
        ]
    },
    {
        "code": "통신 7-10-6",
        "name": "S e t 조립",
        "spec": "콤바이너(Combiner)",
        "unit": "개",
        "labors": {
            "통신설비공": 3.75
        },
        "category": "device",
        "page": 209,
        "keywords": [
            "S e t 조립",
            "콤바이너(Combiner)"
        ]
    },
    {
        "code": "통신 7-10-6",
        "name": "내부결선 및 기타결선",
        "spec": "콤바이너(Combiner)",
        "unit": "개",
        "labors": {
            "통신관련기사": 1.0,
            "통신설비공": 2.0,
            "보통인부": 0.75
        },
        "category": "device",
        "page": 209,
        "keywords": [
            "내부결선 및 기타결선",
            "콤바이너(Combiner)"
        ]
    },
    {
        "code": "통신 7-10-6",
        "name": "국부시험점검",
        "spec": "콤바이너(Combiner)",
        "unit": "개",
        "labors": {
            "통신관련산업기사": 19.56
        },
        "category": "device",
        "page": 209,
        "keywords": [
            "국부시험점검",
            "콤바이너(Combiner)"
        ]
    },
    {
        "code": "통신 7-10-6",
        "name": "대국종합시험",
        "spec": "콤바이너(Combiner)",
        "unit": "개",
        "labors": {
            "통신관련산업기사": 24.83
        },
        "category": "device",
        "page": 209,
        "keywords": [
            "대국종합시험",
            "콤바이너(Combiner)"
        ]
    },
    {
        "code": "통신 7-10-7",
        "name": "보통인부 0.75",
        "spec": "결합여파기(Coupling Filter) 및 특수보조여파기(Auxiliary Filter)",
        "unit": "대",
        "labors": {
            "통신설비공": 0.75
        },
        "category": "device",
        "page": 209,
        "keywords": [
            "보통인부 0.75",
            "결합여파기(Coupling Filter) 및 특수보조여파기(Auxiliary Filter)"
        ]
    },
    {
        "code": "통신 7-10-7",
        "name": "결선 통신설비공 0.25",
        "spec": "결합여파기(Coupling Filter) 및 특수보조여파기(Auxiliary Filter)",
        "unit": "대",
        "labors": {
            "통신설비공": 0.5
        },
        "category": "device",
        "page": 209,
        "keywords": [
            "결선 통신설비공 0.25",
            "결합여파기(Coupling Filter) 및 특수보조여파기(Auxiliary Filter)"
        ]
    },
    {
        "code": "통신 7-10-7",
        "name": "주파수특성시험 통신관련산업기사 1.30",
        "spec": "결합여파기(Coupling Filter) 및 특수보조여파기(Auxiliary Filter)",
        "unit": "대",
        "labors": {
            "통신설비공": 1.33
        },
        "category": "device",
        "page": 209,
        "keywords": [
            "주파수특성시험 통신관련산업기사 1.30",
            "결합여파기(Coupling Filter) 및 특수보조여파기(Auxiliary Filter)"
        ]
    },
    {
        "code": "통신 7-11-2-1",
        "name": "Emergency Control Unit 대",
        "spec": "비상방송 설비",
        "unit": "0.75",
        "labors": {
            "통신설비공": 0.75
        },
        "category": "device",
        "page": 216,
        "keywords": [
            "Emergency Control Unit 대",
            "비상방송 설비"
        ]
    },
    {
        "code": "통신 7-11-2-1",
        "name": "Emergency Switch Unit 대",
        "spec": "비상방송 설비",
        "unit": "0.64",
        "labors": {
            "통신설비공": 0.64
        },
        "category": "device",
        "page": 216,
        "keywords": [
            "Emergency Switch Unit 대",
            "비상방송 설비"
        ]
    },
    {
        "code": "통신 7-11-2-1",
        "name": "Matrix Logic Unit 대",
        "spec": "비상방송 설비",
        "unit": "0.64",
        "labors": {
            "통신설비공": 0.64
        },
        "category": "device",
        "page": 216,
        "keywords": [
            "Matrix Logic Unit 대",
            "비상방송 설비"
        ]
    },
    {
        "code": "통신 7-11-2-1",
        "name": "Program Exchange Unit 대",
        "spec": "비상방송 설비",
        "unit": "0.71",
        "labors": {
            "통신설비공": 0.71
        },
        "category": "device",
        "page": 216,
        "keywords": [
            "Program Exchange Unit 대",
            "비상방송 설비"
        ]
    },
    {
        "code": "통신 7-11-2-1",
        "name": "Speaker Selector Unit 대",
        "spec": "비상방송 설비",
        "unit": "0.51",
        "labors": {
            "통신설비공": 0.51
        },
        "category": "device",
        "page": 216,
        "keywords": [
            "Speaker Selector Unit 대",
            "비상방송 설비"
        ]
    },
    {
        "code": "통신 7-11-2-1",
        "name": "Relay Group Unit 대",
        "spec": "비상방송 설비",
        "unit": "0.57",
        "labors": {
            "통신설비공": 0.57
        },
        "category": "device",
        "page": 216,
        "keywords": [
            "Relay Group Unit 대",
            "비상방송 설비"
        ]
    },
    {
        "code": "통신 7-11-2-1",
        "name": "Power Distributor Unit 대",
        "spec": "비상방송 설비",
        "unit": "0.39",
        "labors": {
            "통신설비공": 0.39
        },
        "category": "device",
        "page": 216,
        "keywords": [
            "Power Distributor Unit 대",
            "비상방송 설비"
        ]
    },
    {
        "code": "통신 7-11-2-1",
        "name": "Terminal Board Unit 대",
        "spec": "비상방송 설비",
        "unit": "0.58",
        "labors": {
            "통신설비공": 0.58
        },
        "category": "device",
        "page": 216,
        "keywords": [
            "Terminal Board Unit 대",
            "비상방송 설비"
        ]
    },
    {
        "code": "통신 7-11-2-1",
        "name": "Program Manual Controller 대",
        "spec": "비상방송 설비",
        "unit": "0.32",
        "labors": {
            "통신설비공": 0.32
        },
        "category": "device",
        "page": 216,
        "keywords": [
            "Program Manual Controller 대",
            "비상방송 설비"
        ]
    },
    {
        "code": "통신 7-11-2-1",
        "name": "Power AMP Controller 대",
        "spec": "비상방송 설비",
        "unit": "0.26",
        "labors": {
            "통신설비공": 0.26
        },
        "category": "device",
        "page": 216,
        "keywords": [
            "Power AMP Controller 대",
            "비상방송 설비"
        ]
    },
    {
        "code": "통신 7-11-2-1",
        "name": "Emergency Combination System 대",
        "spec": "비상방송 설비",
        "unit": "0.77",
        "labors": {
            "통신설비공": 0.77
        },
        "category": "device",
        "page": 216,
        "keywords": [
            "Emergency Combination System 대",
            "비상방송 설비"
        ]
    },
    {
        "code": "통신 7-11-2-1",
        "name": "Emergency Router System 대",
        "spec": "비상방송 설비",
        "unit": "0.68",
        "labors": {
            "통신설비공": 0.68
        },
        "category": "device",
        "page": 216,
        "keywords": [
            "Emergency Router System 대",
            "비상방송 설비"
        ]
    },
    {
        "code": "통신 7-11-2-1",
        "name": "Emergency Interface System 대",
        "spec": "비상방송 설비",
        "unit": "0.26",
        "labors": {
            "통신설비공": 0.26
        },
        "category": "device",
        "page": 216,
        "keywords": [
            "Emergency Interface System 대",
            "비상방송 설비"
        ]
    },
    {
        "code": "통신 7-11-2-2",
        "name": "Power AMP Monitor 대",
        "spec": "BGM방송 설비",
        "unit": "0.30",
        "labors": {
            "통신설비공": 0.3
        },
        "category": "device",
        "page": 217,
        "keywords": [
            "Power AMP Monitor 대",
            "BGM방송 설비"
        ]
    },
    {
        "code": "통신 7-11-2-2",
        "name": "AM/FM Tuner Monitor 대",
        "spec": "BGM방송 설비",
        "unit": "0.21",
        "labors": {
            "통신설비공": 0.21
        },
        "category": "device",
        "page": 217,
        "keywords": [
            "AM/FM Tuner Monitor 대",
            "BGM방송 설비"
        ]
    },
    {
        "code": "통신 7-11-2-2",
        "name": "Cassette Deck Monitor 대",
        "spec": "BGM방송 설비",
        "unit": "0.37",
        "labors": {
            "통신설비공": 0.37
        },
        "category": "device",
        "page": 217,
        "keywords": [
            "Cassette Deck Monitor 대",
            "BGM방송 설비"
        ]
    },
    {
        "code": "통신 7-11-2-2",
        "name": "Chime/Siren Deck Monitor 대",
        "spec": "BGM방송 설비",
        "unit": "0.32",
        "labors": {
            "통신설비공": 0.32
        },
        "category": "device",
        "page": 217,
        "keywords": [
            "Chime/Siren Deck Monitor 대",
            "BGM방송 설비"
        ]
    },
    {
        "code": "통신 7-11-2-2",
        "name": "CD Player/DVD Player 대",
        "spec": "BGM방송 설비",
        "unit": "0.20",
        "labors": {
            "통신설비공": 0.2
        },
        "category": "device",
        "page": 217,
        "keywords": [
            "CD Player/DVD Player 대",
            "BGM방송 설비"
        ]
    },
    {
        "code": "통신 7-11-2-2",
        "name": "Pre Amplifier Player 대",
        "spec": "BGM방송 설비",
        "unit": "0.38",
        "labors": {
            "통신설비공": 0.38
        },
        "category": "device",
        "page": 217,
        "keywords": [
            "Pre Amplifier Player 대",
            "BGM방송 설비"
        ]
    },
    {
        "code": "통신 7-11-2-2",
        "name": "Auto Blower Player 대",
        "spec": "BGM방송 설비",
        "unit": "0.19",
        "labors": {
            "통신설비공": 0.19
        },
        "category": "device",
        "page": 217,
        "keywords": [
            "Auto Blower Player 대",
            "BGM방송 설비"
        ]
    },
    {
        "code": "통신 7-11-2-2",
        "name": "Auto Charger Player 대",
        "spec": "BGM방송 설비",
        "unit": "0.34",
        "labors": {
            "통신설비공": 0.34
        },
        "category": "device",
        "page": 217,
        "keywords": [
            "Auto Charger Player 대",
            "BGM방송 설비"
        ]
    },
    {
        "code": "통신 7-11-2-2",
        "name": "Digital Control Exchanger 대",
        "spec": "BGM방송 설비",
        "unit": "0.73",
        "labors": {
            "통신설비공": 0.73
        },
        "category": "device",
        "page": 217,
        "keywords": [
            "Digital Control Exchanger 대",
            "BGM방송 설비"
        ]
    },
    {
        "code": "통신 7-11-2-2",
        "name": "Audio Monitor Exchanger 대",
        "spec": "BGM방송 설비",
        "unit": "0.50",
        "labors": {
            "통신설비공": 0.5
        },
        "category": "device",
        "page": 217,
        "keywords": [
            "Audio Monitor Exchanger 대",
            "BGM방송 설비"
        ]
    },
    {
        "code": "통신 7-11-2-2",
        "name": "Local Selector Exchanger 대",
        "spec": "BGM방송 설비",
        "unit": "0.21",
        "labors": {
            "통신설비공": 0.21
        },
        "category": "device",
        "page": 217,
        "keywords": [
            "Local Selector Exchanger 대",
            "BGM방송 설비"
        ]
    },
    {
        "code": "통신 7-11-2-2",
        "name": "프로그램 타이머 Exchanger 대",
        "spec": "BGM방송 설비",
        "unit": "0.40",
        "labors": {
            "통신설비공": 0.4
        },
        "category": "device",
        "page": 217,
        "keywords": [
            "프로그램 타이머 Exchanger 대",
            "BGM방송 설비"
        ]
    },
    {
        "code": "통신 7-11-2-2",
        "name": "멀티보이스 파일 Exchanger 대",
        "spec": "BGM방송 설비",
        "unit": "0.34",
        "labors": {
            "통신설비공": 0.34
        },
        "category": "device",
        "page": 217,
        "keywords": [
            "멀티보이스 파일 Exchanger 대",
            "BGM방송 설비"
        ]
    },
    {
        "code": "통신 7-11-2-2",
        "name": "리모트 앰프 Exchanger 대",
        "spec": "BGM방송 설비",
        "unit": "0.27",
        "labors": {
            "통신설비공": 0.27
        },
        "category": "device",
        "page": 217,
        "keywords": [
            "리모트 앰프 Exchanger 대",
            "BGM방송 설비"
        ]
    },
    {
        "code": "통신 7-11-2-2",
        "name": "AMP Fault Detector 대",
        "spec": "BGM방송 설비",
        "unit": "0.32",
        "labors": {
            "통신설비공": 0.32
        },
        "category": "device",
        "page": 217,
        "keywords": [
            "AMP Fault Detector 대",
            "BGM방송 설비"
        ]
    },
    {
        "code": "통신 7-11-2-2",
        "name": "데이터 리시버 Detector 대",
        "spec": "BGM방송 설비",
        "unit": "0.32",
        "labors": {
            "통신설비공": 0.32
        },
        "category": "device",
        "page": 217,
        "keywords": [
            "데이터 리시버 Detector 대",
            "BGM방송 설비"
        ]
    },
    {
        "code": "통신 7-11-2-2",
        "name": "Speaker Line Checker 대",
        "spec": "BGM방송 설비",
        "unit": "0.76",
        "labors": {
            "통신설비공": 0.76
        },
        "category": "device",
        "page": 217,
        "keywords": [
            "Speaker Line Checker 대",
            "BGM방송 설비"
        ]
    },
    {
        "code": "통신 7-11-2-2",
        "name": "Direct Box Checker 대",
        "spec": "BGM방송 설비",
        "unit": "0.02",
        "labors": {
            "통신설비공": 0.02
        },
        "category": "device",
        "page": 217,
        "keywords": [
            "Direct Box Checker 대",
            "BGM방송 설비"
        ]
    },
    {
        "code": "통신 7-11-2-2",
        "name": "Management 프로그램 Checker 대",
        "spec": "BGM방송 설비",
        "unit": "0.29",
        "labors": {
            "통신설비공": 0.29
        },
        "category": "device",
        "page": 217,
        "keywords": [
            "Management 프로그램 Checker 대",
            "BGM방송 설비"
        ]
    },
    {
        "code": "통신 7-11-2-2",
        "name": "Digi-Link Multi Controller 대",
        "spec": "BGM방송 설비",
        "unit": "0.18",
        "labors": {
            "통신설비공": 0.18
        },
        "category": "device",
        "page": 217,
        "keywords": [
            "Digi-Link Multi Controller 대",
            "BGM방송 설비"
        ]
    },
    {
        "code": "통신 7-11-2-2",
        "name": "Portable AMP Controller 대",
        "spec": "BGM방송 설비",
        "unit": "0.05",
        "labors": {
            "통신설비공": 0.05
        },
        "category": "device",
        "page": 217,
        "keywords": [
            "Portable AMP Controller 대",
            "BGM방송 설비"
        ]
    },
    {
        "code": "통신 7-11-2-2",
        "name": "Telephone Paging Controller 대",
        "spec": "BGM방송 설비",
        "unit": "0.12",
        "labors": {
            "통신설비공": 0.12
        },
        "category": "device",
        "page": 217,
        "keywords": [
            "Telephone Paging Controller 대",
            "BGM방송 설비"
        ]
    },
    {
        "code": "통신 7-11-2-2",
        "name": "Audio Distribution Controller 대",
        "spec": "BGM방송 설비",
        "unit": "0.17",
        "labors": {
            "통신설비공": 0.17
        },
        "category": "device",
        "page": 217,
        "keywords": [
            "Audio Distribution Controller 대",
            "BGM방송 설비"
        ]
    },
    {
        "code": "통신 7-11-2-3",
        "name": "Power Distributor Switcher 대",
        "spec": "프로오디오 설비(SR)",
        "unit": "0.39",
        "labors": {
            "통신설비공": 0.39
        },
        "category": "device",
        "page": 218,
        "keywords": [
            "Power Distributor Switcher 대",
            "프로오디오 설비(SR)"
        ]
    },
    {
        "code": "통신 7-11-2-3",
        "name": "Power Supply Switcher 대",
        "spec": "프로오디오 설비(SR)",
        "unit": "0.38",
        "labors": {
            "통신설비공": 0.38
        },
        "category": "device",
        "page": 218,
        "keywords": [
            "Power Supply Switcher 대",
            "프로오디오 설비(SR)"
        ]
    },
    {
        "code": "통신 7-11-2-3",
        "name": "VU Meter Switcher 대",
        "spec": "프로오디오 설비(SR)",
        "unit": "0.23",
        "labors": {
            "통신설비공": 0.23
        },
        "category": "device",
        "page": 218,
        "keywords": [
            "VU Meter Switcher 대",
            "프로오디오 설비(SR)"
        ]
    },
    {
        "code": "통신 7-11-2-3",
        "name": "하울링제거기 Meter Switcher 대",
        "spec": "프로오디오 설비(SR)",
        "unit": "0.38",
        "labors": {
            "통신설비공": 0.55
        },
        "category": "device",
        "page": 218,
        "keywords": [
            "하울링제거기 Meter Switcher 대",
            "프로오디오 설비(SR)"
        ]
    },
    {
        "code": "통신 7-11-2-3",
        "name": "Digital Signal Processor 대",
        "spec": "프로오디오 설비(SR)",
        "unit": "3.64",
        "labors": {
            "통신설비공": 1.82
        },
        "category": "device",
        "page": 218,
        "keywords": [
            "Digital Signal Processor 대",
            "프로오디오 설비(SR)"
        ]
    },
    {
        "code": "통신 7-11-2-3",
        "name": "Digital Audio Mixer 대",
        "spec": "프로오디오 설비(SR)",
        "unit": "3.25",
        "labors": {
            "통신설비공": 1.63
        },
        "category": "device",
        "page": 218,
        "keywords": [
            "Digital Audio Mixer 대",
            "프로오디오 설비(SR)"
        ]
    },
    {
        "code": "통신 7-11-2-3",
        "name": "Audio I/O Box 대",
        "spec": "프로오디오 설비(SR)",
        "unit": "0.13",
        "labors": {
            "통신설비공": 0.13
        },
        "category": "device",
        "page": 218,
        "keywords": [
            "Audio I/O Box 대",
            "프로오디오 설비(SR)"
        ]
    },
    {
        "code": "통신 7-11-2-3",
        "name": "Graphic Equalizer Box 대",
        "spec": "프로오디오 설비(SR)",
        "unit": "0.06",
        "labors": {
            "통신설비공": 0.06
        },
        "category": "device",
        "page": 218,
        "keywords": [
            "Graphic Equalizer Box 대",
            "프로오디오 설비(SR)"
        ]
    },
    {
        "code": "통신 7-11-2-3",
        "name": "Network Audio Signal Router 대",
        "spec": "프로오디오 설비(SR)",
        "unit": "0.11",
        "labors": {
            "통신설비공": 0.11
        },
        "category": "device",
        "page": 218,
        "keywords": [
            "Network Audio Signal Router 대",
            "프로오디오 설비(SR)"
        ]
    },
    {
        "code": "통신 7-11-2-3",
        "name": "스피커 브라켓(벽부형) 개",
        "spec": "프로오디오 설비(SR)",
        "unit": "-",
        "labors": {
            "통신설비공": 0.11
        },
        "category": "device",
        "page": 218,
        "keywords": [
            "스피커 브라켓(벽부형) 개",
            "프로오디오 설비(SR)"
        ]
    },
    {
        "code": "통신 7-11-2-3",
        "name": "체인블럭 수동형 대",
        "spec": "프로오디오 설비(SR)",
        "unit": "-",
        "labors": {
            "통신설비공": 0.56
        },
        "category": "device",
        "page": 218,
        "keywords": [
            "체인블럭 수동형 대",
            "프로오디오 설비(SR)"
        ]
    },
    {
        "code": "통신 7-11-2-3",
        "name": "전동형 수동형 대",
        "spec": "프로오디오 설비(SR)",
        "unit": "-",
        "labors": {
            "통신설비공": 0.56
        },
        "category": "device",
        "page": 218,
        "keywords": [
            "전동형 수동형 대",
            "프로오디오 설비(SR)"
        ]
    },
    {
        "code": "통신 7-11-2-3",
        "name": "스피커프레임 일체형 개",
        "spec": "프로오디오 설비(SR)",
        "unit": "-",
        "labors": {
            "통신설비공": 0.27
        },
        "category": "device",
        "page": 218,
        "keywords": [
            "스피커프레임 일체형 개",
            "프로오디오 설비(SR)"
        ]
    },
    {
        "code": "통신 7-11-2-3",
        "name": "조립형 일체형 개",
        "spec": "프로오디오 설비(SR)",
        "unit": "-",
        "labors": {
            "통신설비공": 0.33
        },
        "category": "device",
        "page": 218,
        "keywords": [
            "조립형 일체형 개",
            "프로오디오 설비(SR)"
        ]
    },
    {
        "code": "통신 7-11-2-4",
        "name": "Digital Modulator 대",
        "spec": "멀티미디어방송 설비",
        "unit": "0.35",
        "labors": {
            "통신설비공": 0.35
        },
        "category": "device",
        "page": 219,
        "keywords": [
            "Digital Modulator 대",
            "멀티미디어방송 설비"
        ]
    },
    {
        "code": "통신 7-11-2-4",
        "name": "Digital A/V Matrix Switch 대",
        "spec": "멀티미디어방송 설비",
        "unit": "0.61",
        "labors": {
            "통신설비공": 0.61
        },
        "category": "device",
        "page": 219,
        "keywords": [
            "Digital A/V Matrix Switch 대",
            "멀티미디어방송 설비"
        ]
    },
    {
        "code": "통신 7-11-2-4",
        "name": "VGA Matrix Matrix Switch 대",
        "spec": "멀티미디어방송 설비",
        "unit": "0.35",
        "labors": {
            "통신설비공": 0.33
        },
        "category": "device",
        "page": 219,
        "keywords": [
            "VGA Matrix Matrix Switch 대",
            "멀티미디어방송 설비"
        ]
    },
    {
        "code": "통신 7-11-2-4",
        "name": "A/V Receiver Matrix Switch 대",
        "spec": "멀티미디어방송 설비",
        "unit": "0.33",
        "labors": {
            "통신설비공": 0.52
        },
        "category": "device",
        "page": 219,
        "keywords": [
            "A/V Receiver Matrix Switch 대",
            "멀티미디어방송 설비"
        ]
    },
    {
        "code": "통신 7-11-2-4",
        "name": "A/V Mixer Matrix Switch 대",
        "spec": "멀티미디어방송 설비",
        "unit": "0.58",
        "labors": {
            "통신설비공": 0.58
        },
        "category": "device",
        "page": 219,
        "keywords": [
            "A/V Mixer Matrix Switch 대",
            "멀티미디어방송 설비"
        ]
    },
    {
        "code": "통신 7-11-2-4",
        "name": "Network A/V Streamer Switch 대",
        "spec": "멀티미디어방송 설비",
        "unit": "0.36",
        "labors": {
            "통신설비공": 0.36
        },
        "category": "device",
        "page": 219,
        "keywords": [
            "Network A/V Streamer Switch 대",
            "멀티미디어방송 설비"
        ]
    },
    {
        "code": "통신 7-11-2-4",
        "name": "Set-top Box Streamer Switch 대",
        "spec": "멀티미디어방송 설비",
        "unit": "0.32",
        "labors": {
            "통신설비공": 0.32
        },
        "category": "device",
        "page": 219,
        "keywords": [
            "Set-top Box Streamer Switch 대",
            "멀티미디어방송 설비"
        ]
    },
    {
        "code": "통신 7-11-2-4",
        "name": "Video Distribution Streamer Switch 대",
        "spec": "멀티미디어방송 설비",
        "unit": "0.04",
        "labors": {
            "통신설비공": 0.04
        },
        "category": "device",
        "page": 219,
        "keywords": [
            "Video Distribution Streamer Switch 대",
            "멀티미디어방송 설비"
        ]
    },
    {
        "code": "통신 7-11-2-5",
        "name": "Network Audio Server 대",
        "spec": "네트워크 통합방송 설비",
        "unit": "0.77",
        "labors": {
            "통신설비공": 0.77
        },
        "category": "device",
        "page": 219,
        "keywords": [
            "Network Audio Server 대",
            "네트워크 통합방송 설비"
        ]
    },
    {
        "code": "통신 7-11-2-5",
        "name": "Network Audio Converter 대",
        "spec": "네트워크 통합방송 설비",
        "unit": "0.43",
        "labors": {
            "통신설비공": 0.43
        },
        "category": "device",
        "page": 219,
        "keywords": [
            "Network Audio Converter 대",
            "네트워크 통합방송 설비"
        ]
    },
    {
        "code": "통신 7-11-2-5",
        "name": "Audio Over Ethernet 대",
        "spec": "네트워크 통합방송 설비",
        "unit": "0.63",
        "labors": {
            "통신설비공": 0.63
        },
        "category": "device",
        "page": 219,
        "keywords": [
            "Audio Over Ethernet 대",
            "네트워크 통합방송 설비"
        ]
    },
    {
        "code": "통신 7-11-3",
        "name": "조립및 통신관련산업기사 1.88 2.00 2.00 3.00 5.00 3.00 3.00 4.00",
        "spec": "콘솔(Console)",
        "unit": "개",
        "labors": {
            "통신관련기사": 6.0
        },
        "category": "device",
        "page": 220,
        "keywords": [
            "조립및 통신관련산업기사 1.88 2.00 2.00 3.00 5.00 3.00 3.00 4.00",
            "콘솔(Console)"
        ]
    },
    {
        "code": "통신 7-11-3",
        "name": "설치 통신설비공 3.75 2.00 2.00 3.00 5.00 2.00 3.00 4.00",
        "spec": "콘솔(Console)",
        "unit": "개",
        "labors": {
            "통신관련기사": 6.0
        },
        "category": "device",
        "page": 220,
        "keywords": [
            "설치 통신설비공 3.75 2.00 2.00 3.00 5.00 2.00 3.00 4.00",
            "콘솔(Console)"
        ]
    },
    {
        "code": "통신 7-11-3",
        "name": "보통인부 1.08 1.00 2.00 3.00 4.00 2.00 2.00 2.00",
        "spec": "콘솔(Console)",
        "unit": "개",
        "labors": {
            "통신관련기사": 3.0
        },
        "category": "device",
        "page": 220,
        "keywords": [
            "보통인부 1.08 1.00 2.00 3.00 4.00 2.00 2.00 2.00",
            "콘솔(Console)"
        ]
    },
    {
        "code": "통신 7-11-3",
        "name": "시험및 통신관련기사 3.67 1.00 2.00 3.00 5.00 2.00 2.00 2.00",
        "spec": "콘솔(Console)",
        "unit": "개",
        "labors": {
            "통신관련기사": 4.0
        },
        "category": "device",
        "page": 220,
        "keywords": [
            "시험및 통신관련기사 3.67 1.00 2.00 3.00 5.00 2.00 2.00 2.00",
            "콘솔(Console)"
        ]
    },
    {
        "code": "통신 7-11-3",
        "name": "측정 통신관련산업기사 7.33 2.00 4.00 6.00 10.00 2.00 2.00 4.00",
        "spec": "콘솔(Console)",
        "unit": "개",
        "labors": {
            "통신관련기사": 8.0
        },
        "category": "device",
        "page": 220,
        "keywords": [
            "측정 통신관련산업기사 7.33 2.00 4.00 6.00 10.00 2.00 2.00 4.00",
            "콘솔(Console)"
        ]
    },
    {
        "code": "통신 7-11-4",
        "name": "무선방송 주장치 세트",
        "spec": "마을 무선방송시스템",
        "unit": "-",
        "labors": {
            "통신설비공": 0.53,
            "특별인부": 0.48
        },
        "category": "device",
        "page": 220,
        "keywords": [
            "무선방송 주장치 세트",
            "마을 무선방송시스템"
        ]
    },
    {
        "code": "통신 7-11-4",
        "name": "무선 스피커 대",
        "spec": "마을 무선방송시스템",
        "unit": "-",
        "labors": {
            "통신설비공": 0.05
        },
        "category": "device",
        "page": 220,
        "keywords": [
            "무선 스피커 대",
            "마을 무선방송시스템"
        ]
    },
    {
        "code": "통신 7-11-4",
        "name": "안테나 기",
        "spec": "마을 무선방송시스템",
        "unit": "0.66",
        "labors": {
            "통신설비공": 0.47
        },
        "category": "device",
        "page": 220,
        "keywords": [
            "안테나 기",
            "마을 무선방송시스템"
        ]
    },
    {
        "code": "통신 7-11-4",
        "name": "안테나 Pole 대",
        "spec": "마을 무선방송시스템",
        "unit": "-",
        "labors": {
            "통신설비공": 0.1
        },
        "category": "device",
        "page": 220,
        "keywords": [
            "안테나 Pole 대",
            "마을 무선방송시스템"
        ]
    },
    {
        "code": "통신 7-11-4",
        "name": "종합시험 식",
        "spec": "마을 무선방송시스템",
        "unit": "-",
        "labors": {
            "통신설비공": 0.21,
            "특별인부": 0.21
        },
        "category": "device",
        "page": 220,
        "keywords": [
            "종합시험 식",
            "마을 무선방송시스템"
        ]
    },
    {
        "code": "통신 7-12-1",
        "name": "전파수신상태조사",
        "spec": "전파수신상태조사",
        "unit": "개소당",
        "labors": {
            "통신관련산업기사": 0.76,
            "통신관련기능사": 0.38,
            "보통인부": 0.38
        },
        "category": "device",
        "page": 223,
        "keywords": [
            "전파수신상태조사",
            "전파수신상태조사"
        ]
    },
    {
        "code": "통신 7-12-2",
        "name": "간선(옥외용)",
        "spec": "증폭기",
        "unit": "대",
        "labors": {
            "통신설비공": 0.31,
            "보통인부": 0.25,
            "통신관련산업기사": 0.31
        },
        "category": "device",
        "page": 223,
        "keywords": [
            "간선(옥외용)",
            "증폭기"
        ]
    },
    {
        "code": "통신 7-12-2",
        "name": "2Port",
        "spec": "증폭기",
        "unit": "대",
        "labors": {
            "통신설비공": 0.38,
            "보통인부": 0.26,
            "통신관련산업기사": 0.38
        },
        "category": "device",
        "page": 223,
        "keywords": [
            "2Port",
            "증폭기"
        ]
    },
    {
        "code": "통신 7-12-2",
        "name": "분기 3Port",
        "spec": "증폭기",
        "unit": "대",
        "labors": {
            "통신설비공": 0.43,
            "보통인부": 0.26,
            "통신관련산업기사": 0.43
        },
        "category": "device",
        "page": 223,
        "keywords": [
            "분기 3Port",
            "증폭기"
        ]
    },
    {
        "code": "통신 7-12-2",
        "name": "4Port",
        "spec": "증폭기",
        "unit": "대",
        "labors": {
            "통신설비공": 0.49,
            "보통인부": 0.26,
            "통신관련산업기사": 0.49
        },
        "category": "device",
        "page": 223,
        "keywords": [
            "4Port",
            "증폭기"
        ]
    },
    {
        "code": "통신 7-12-2",
        "name": "연장(옥내․외)",
        "spec": "증폭기",
        "unit": "대",
        "labors": {
            "통신설비공": 0.25,
            "보통인부": 0.25,
            "통신관련산업기사": 0.25
        },
        "category": "device",
        "page": 223,
        "keywords": [
            "연장(옥내․외)",
            "증폭기"
        ]
    },
    {
        "code": "통신 7-12-2",
        "name": "구내전송증폭기",
        "spec": "증폭기",
        "unit": "대",
        "labors": {
            "통신설비공": 0.2,
            "보통인부": 0.16,
            "통신관련산업기사": 0.2
        },
        "category": "device",
        "page": 223,
        "keywords": [
            "구내전송증폭기",
            "증폭기"
        ]
    },
    {
        "code": "통신 7-12-2",
        "name": "채널자동이득조절앰프",
        "spec": "증폭기",
        "unit": "대",
        "labors": {
            "통신설비공": 0.09,
            "보통인부": 0.07,
            "통신관련산업기사": 0.47
        },
        "category": "device",
        "page": 223,
        "keywords": [
            "채널자동이득조절앰프",
            "증폭기"
        ]
    },
    {
        "code": "통신 7-12-2",
        "name": "헤드앰프(주전송증폭기)",
        "spec": "증폭기",
        "unit": "대",
        "labors": {
            "통신설비공": 0.09,
            "보통인부": 0.18,
            "통신관련산업기사": 0.47
        },
        "category": "device",
        "page": 223,
        "keywords": [
            "헤드앰프(주전송증폭기)",
            "증폭기"
        ]
    },
    {
        "code": "통신 7-12-2",
        "name": "신호처리기",
        "spec": "증폭기",
        "unit": "대",
        "labors": {
            "통신설비공": 0.09,
            "보통인부": 0.18,
            "통신관련산업기사": 0.47
        },
        "category": "device",
        "page": 223,
        "keywords": [
            "신호처리기",
            "증폭기"
        ]
    },
    {
        "code": "통신 7-12-3-1",
        "name": "2분배기(1분기기) 개",
        "spec": "옥외형 분배기(분기기)",
        "unit": "0.11",
        "labors": {
            "통신설비공": 0.11,
            "보통인부": 0.02
        },
        "category": "device",
        "page": 224,
        "keywords": [
            "2분배기(1분기기) 개",
            "옥외형 분배기(분기기)"
        ]
    },
    {
        "code": "통신 7-12-3-1",
        "name": "3 개",
        "spec": "옥외형 분배기(분기기)",
        "unit": "0.20",
        "labors": {
            "통신설비공": 0.09,
            "보통인부": 0.03
        },
        "category": "device",
        "page": 224,
        "keywords": [
            "3 개",
            "옥외형 분배기(분기기)"
        ]
    },
    {
        "code": "통신 7-12-3-1",
        "name": "4 개",
        "spec": "옥외형 분배기(분기기)",
        "unit": "0.16",
        "labors": {
            "통신설비공": 0.16,
            "보통인부": 0.04
        },
        "category": "device",
        "page": 224,
        "keywords": [
            "4 개",
            "옥외형 분배기(분기기)"
        ]
    },
    {
        "code": "통신 7-12-3-1",
        "name": "5 개",
        "spec": "옥외형 분배기(분기기)",
        "unit": "0.26",
        "labors": {
            "통신설비공": 0.15
        },
        "category": "device",
        "page": 224,
        "keywords": [
            "5 개",
            "옥외형 분배기(분기기)"
        ]
    },
    {
        "code": "통신 7-12-3-1",
        "name": "6 개",
        "spec": "옥외형 분배기(분기기)",
        "unit": "0.30",
        "labors": {
            "통신설비공": 0.18,
            "보통인부": 0.06
        },
        "category": "device",
        "page": 224,
        "keywords": [
            "6 개",
            "옥외형 분배기(분기기)"
        ]
    },
    {
        "code": "통신 7-12-3-1",
        "name": "8 개",
        "spec": "옥외형 분배기(분기기)",
        "unit": "0.36",
        "labors": {
            "통신설비공": 0.19,
            "보통인부": 0.08
        },
        "category": "device",
        "page": 224,
        "keywords": [
            "8 개",
            "옥외형 분배기(분기기)"
        ]
    },
    {
        "code": "통신 7-12-3-1",
        "name": "12 개",
        "spec": "옥외형 분배기(분기기)",
        "unit": "0.48",
        "labors": {
            "통신설비공": 0.36
        },
        "category": "device",
        "page": 224,
        "keywords": [
            "12 개",
            "옥외형 분배기(분기기)"
        ]
    },
    {
        "code": "통신 7-12-3-1",
        "name": "16 개",
        "spec": "옥외형 분배기(분기기)",
        "unit": "0.60",
        "labors": {
            "통신설비공": 0.48
        },
        "category": "device",
        "page": 224,
        "keywords": [
            "16 개",
            "옥외형 분배기(분기기)"
        ]
    },
    {
        "code": "통신 7-12-3-1",
        "name": "(8분기기) 개",
        "spec": "옥외형 분배기(분기기)",
        "unit": "0.38",
        "labors": {
            "통신설비공": 0.27
        },
        "category": "device",
        "page": 224,
        "keywords": [
            "(8분기기) 개",
            "옥외형 분배기(분기기)"
        ]
    },
    {
        "code": "통신 7-12-3-2",
        "name": "2분배기(1분기기) 개",
        "spec": "옥내형 분배기(분기기)",
        "unit": "개",
        "labors": {
            "통신설비공": 0.08,
            "보통인부": 0.08
        },
        "category": "device",
        "page": 225,
        "keywords": [
            "2분배기(1분기기) 개",
            "옥내형 분배기(분기기)"
        ]
    },
    {
        "code": "통신 7-12-3-2",
        "name": "3 개",
        "spec": "옥내형 분배기(분기기)",
        "unit": "개",
        "labors": {
            "통신설비공": 0.12,
            "보통인부": 0.12
        },
        "category": "device",
        "page": 225,
        "keywords": [
            "3 개",
            "옥내형 분배기(분기기)"
        ]
    },
    {
        "code": "통신 7-12-3-2",
        "name": "4 개",
        "spec": "옥내형 분배기(분기기)",
        "unit": "개",
        "labors": {
            "통신설비공": 0.13,
            "보통인부": 0.13
        },
        "category": "device",
        "page": 225,
        "keywords": [
            "4 개",
            "옥내형 분배기(분기기)"
        ]
    },
    {
        "code": "통신 7-12-3-2",
        "name": "5 개",
        "spec": "옥내형 분배기(분기기)",
        "unit": "개",
        "labors": {
            "통신설비공": 0.17,
            "보통인부": 0.17
        },
        "category": "device",
        "page": 225,
        "keywords": [
            "5 개",
            "옥내형 분배기(분기기)"
        ]
    },
    {
        "code": "통신 7-12-3-2",
        "name": "6 개",
        "spec": "옥내형 분배기(분기기)",
        "unit": "개",
        "labors": {
            "통신설비공": 0.19,
            "보통인부": 0.19
        },
        "category": "device",
        "page": 225,
        "keywords": [
            "6 개",
            "옥내형 분배기(분기기)"
        ]
    },
    {
        "code": "통신 7-12-3-2",
        "name": "8 개",
        "spec": "옥내형 분배기(분기기)",
        "unit": "개",
        "labors": {
            "통신설비공": 0.23,
            "보통인부": 0.23
        },
        "category": "device",
        "page": 225,
        "keywords": [
            "8 개",
            "옥내형 분배기(분기기)"
        ]
    },
    {
        "code": "통신 7-12-3-2",
        "name": "12 개",
        "spec": "옥내형 분배기(분기기)",
        "unit": "개",
        "labors": {
            "통신설비공": 0.32,
            "보통인부": 0.32
        },
        "category": "device",
        "page": 225,
        "keywords": [
            "12 개",
            "옥내형 분배기(분기기)"
        ]
    },
    {
        "code": "통신 7-12-3-2",
        "name": "16 개",
        "spec": "옥내형 분배기(분기기)",
        "unit": "개",
        "labors": {
            "통신설비공": 0.41,
            "보통인부": 0.41
        },
        "category": "device",
        "page": 225,
        "keywords": [
            "16 개",
            "옥내형 분배기(분기기)"
        ]
    },
    {
        "code": "통신 7-12-3-2",
        "name": "(8분기기) 개",
        "spec": "옥내형 분배기(분기기)",
        "unit": "개",
        "labors": {
            "통신설비공": 0.25,
            "보통인부": 0.25
        },
        "category": "device",
        "page": 225,
        "keywords": [
            "(8분기기) 개",
            "옥내형 분배기(분기기)"
        ]
    },
    {
        "code": "통신 7-12-4",
        "name": "위성방송수신기",
        "spec": "위성방송수신기 등",
        "unit": "대",
        "labors": {
            "통신관련산업기사": 0.06,
            "통신설비공": 0.15
        },
        "category": "device",
        "page": 225,
        "keywords": [
            "위성방송수신기",
            "위성방송수신기 등"
        ]
    },
    {
        "code": "통신 7-12-4",
        "name": "디지털 아날로그 신호변환기",
        "spec": "위성방송수신기 등",
        "unit": "대",
        "labors": {
            "통신관련산업기사": 0.06,
            "통신설비공": 0.15
        },
        "category": "device",
        "page": 225,
        "keywords": [
            "디지털 아날로그 신호변환기",
            "위성방송수신기 등"
        ]
    },
    {
        "code": "통신 7-12-5",
        "name": "광 송신기",
        "spec": "광 송·수신기 등",
        "unit": "대",
        "labors": {
            "광케이블설치사": 0.07,
            "통신설비공": 0.07
        },
        "category": "device",
        "page": 225,
        "keywords": [
            "광 송신기",
            "광 송·수신기 등"
        ]
    },
    {
        "code": "통신 7-12-5",
        "name": "광 증폭기",
        "spec": "광 송·수신기 등",
        "unit": "대",
        "labors": {
            "광케이블설치사": 0.06,
            "통신설비공": 0.06
        },
        "category": "device",
        "page": 225,
        "keywords": [
            "광 증폭기",
            "광 송·수신기 등"
        ]
    },
    {
        "code": "통신 7-13-1",
        "name": "개별특성 RF 레벨조정",
        "spec": "AM 변조기",
        "unit": "CH",
        "labors": {
            "통신관련산업기사": 0.08
        },
        "category": "device",
        "page": 226,
        "keywords": [
            "개별특성 RF 레벨조정",
            "AM 변조기"
        ]
    },
    {
        "code": "통신 7-13-1",
        "name": "시험 비디오 입력레벨 시험",
        "spec": "AM 변조기",
        "unit": "CH",
        "labors": {
            "통신관련산업기사": 0.1
        },
        "category": "device",
        "page": 226,
        "keywords": [
            "시험 비디오 입력레벨 시험",
            "AM 변조기"
        ]
    },
    {
        "code": "통신 7-13-1",
        "name": "오디오 입력레벨 시험",
        "spec": "AM 변조기",
        "unit": "CH",
        "labors": {
            "통신관련산업기사": 0.08
        },
        "category": "device",
        "page": 226,
        "keywords": [
            "오디오 입력레벨 시험",
            "AM 변조기"
        ]
    },
    {
        "code": "통신 7-13-1",
        "name": "종합시험 비디오 특성시험",
        "spec": "AM 변조기",
        "unit": "CH",
        "labors": {
            "통신관련산업기사": 0.07
        },
        "category": "device",
        "page": 226,
        "keywords": [
            "종합시험 비디오 특성시험",
            "AM 변조기"
        ]
    },
    {
        "code": "통신 7-13-1",
        "name": "오디오 특성시험",
        "spec": "AM 변조기",
        "unit": "CH",
        "labors": {
            "통신관련산업기사": 0.11
        },
        "category": "device",
        "page": 226,
        "keywords": [
            "오디오 특성시험",
            "AM 변조기"
        ]
    },
    {
        "code": "통신 7-13-4-1",
        "name": "주파수응답 특성시험",
        "spec": "FM 광전송장치(FM 복조기)",
        "unit": "CH",
        "labors": {
            "통신관련산업기사": 0.16
        },
        "category": "device",
        "page": 227,
        "keywords": [
            "주파수응답 특성시험",
            "FM 광전송장치(FM 복조기)"
        ]
    },
    {
        "code": "통신 7-13-4-1",
        "name": "비직선 왜곡 시험",
        "spec": "FM 광전송장치(FM 복조기)",
        "unit": "CH",
        "labors": {
            "통신관련산업기사": 0.07
        },
        "category": "device",
        "page": 227,
        "keywords": [
            "비직선 왜곡 시험",
            "FM 광전송장치(FM 복조기)"
        ]
    },
    {
        "code": "통신 7-13-4-1",
        "name": "색도대 휘도 특성시험",
        "spec": "FM 광전송장치(FM 복조기)",
        "unit": "CH",
        "labors": {
            "통신관련산업기사": 0.07
        },
        "category": "device",
        "page": 227,
        "keywords": [
            "색도대 휘도 특성시험",
            "FM 광전송장치(FM 복조기)"
        ]
    },
    {
        "code": "통신 7-13-4-1",
        "name": "개별특성 직선파형 왜곡시험",
        "spec": "FM 광전송장치(FM 복조기)",
        "unit": "CH",
        "labors": {
            "통신관련산업기사": 0.1
        },
        "category": "device",
        "page": 227,
        "keywords": [
            "개별특성 직선파형 왜곡시험",
            "FM 광전송장치(FM 복조기)"
        ]
    },
    {
        "code": "통신 7-13-4-1",
        "name": "시험 주파수특성(음성신호)",
        "spec": "FM 광전송장치(FM 복조기)",
        "unit": "CH",
        "labors": {
            "통신관련산업기사": 0.09
        },
        "category": "device",
        "page": 227,
        "keywords": [
            "시험 주파수특성(음성신호)",
            "FM 광전송장치(FM 복조기)"
        ]
    },
    {
        "code": "통신 7-13-4-1",
        "name": "고조파 왜곡 측정 및 조정",
        "spec": "FM 광전송장치(FM 복조기)",
        "unit": "CH",
        "labors": {
            "통신관련산업기사": 0.04
        },
        "category": "device",
        "page": 227,
        "keywords": [
            "고조파 왜곡 측정 및 조정",
            "FM 광전송장치(FM 복조기)"
        ]
    },
    {
        "code": "통신 7-13-4-1",
        "name": "좌우 분리도 측정 및 조정",
        "spec": "FM 광전송장치(FM 복조기)",
        "unit": "CH",
        "labors": {
            "통신관련산업기사": 0.04
        },
        "category": "device",
        "page": 227,
        "keywords": [
            "좌우 분리도 측정 및 조정",
            "FM 광전송장치(FM 복조기)"
        ]
    },
    {
        "code": "통신 7-13-4-1",
        "name": "Noise(S/N) 측정",
        "spec": "FM 광전송장치(FM 복조기)",
        "unit": "CH",
        "labors": {
            "통신관련산업기사": 0.07
        },
        "category": "device",
        "page": 227,
        "keywords": [
            "Noise(S/N) 측정",
            "FM 광전송장치(FM 복조기)"
        ]
    },
    {
        "code": "통신 7-13-4-1",
        "name": "종합시험 채널별신호대 잡음비",
        "spec": "FM 광전송장치(FM 복조기)",
        "unit": "SYS",
        "labors": {
            "통신관련산업기사": 0.07
        },
        "category": "device",
        "page": 227,
        "keywords": [
            "종합시험 채널별신호대 잡음비",
            "FM 광전송장치(FM 복조기)"
        ]
    },
    {
        "code": "통신 7-13-5",
        "name": "개별특성 재송신 채널 특성시험",
        "spec": "FM 음악변조 및 중계기",
        "unit": "CH",
        "labors": {
            "통신관련산업기사": 0.09
        },
        "category": "device",
        "page": 228,
        "keywords": [
            "개별특성 재송신 채널 특성시험",
            "FM 음악변조 및 중계기"
        ]
    },
    {
        "code": "통신 7-13-5",
        "name": "시험 자주방송기저대역 특성시험",
        "spec": "FM 음악변조 및 중계기",
        "unit": "CH",
        "labors": {
            "통신관련산업기사": 0.08
        },
        "category": "device",
        "page": 228,
        "keywords": [
            "시험 자주방송기저대역 특성시험",
            "FM 음악변조 및 중계기"
        ]
    },
    {
        "code": "통신 7-13-5",
        "name": "종합시험 Audio 특성시험(Mono 방식)",
        "spec": "FM 음악변조 및 중계기",
        "unit": "CH",
        "labors": {
            "통신관련산업기사": 0.08
        },
        "category": "device",
        "page": 228,
        "keywords": [
            "종합시험 Audio 특성시험(Mono 방식)",
            "FM 음악변조 및 중계기"
        ]
    },
    {
        "code": "통신 7-13-7",
        "name": "대역통과 여파기 개",
        "spec": "각종 휠터 및 기타설비",
        "unit": "0.11",
        "labors": {
            "통신설비공": 0.11
        },
        "category": "device",
        "page": 230,
        "keywords": [
            "대역통과 여파기 개",
            "각종 휠터 및 기타설비"
        ]
    },
    {
        "code": "통신 7-13-7",
        "name": "다이플렉서 휠터 개",
        "spec": "각종 휠터 및 기타설비",
        "unit": "-",
        "labors": {
            "통신설비공": 0.52
        },
        "category": "device",
        "page": 230,
        "keywords": [
            "다이플렉서 휠터 개",
            "각종 휠터 및 기타설비"
        ]
    },
    {
        "code": "통신 7-13-7",
        "name": "채널트랩(낫치휠터) 휠터 개",
        "spec": "각종 휠터 및 기타설비",
        "unit": "0.11",
        "labors": {
            "통신설비공": 0.11
        },
        "category": "device",
        "page": 230,
        "keywords": [
            "채널트랩(낫치휠터) 휠터 개",
            "각종 휠터 및 기타설비"
        ]
    },
    {
        "code": "통신 7-13-7",
        "name": "레벨셑터 휠터 개",
        "spec": "각종 휠터 및 기타설비",
        "unit": "0.65",
        "labors": {
            "통신설비공": 0.65
        },
        "category": "device",
        "page": 230,
        "keywords": [
            "레벨셑터 휠터 개",
            "각종 휠터 및 기타설비"
        ]
    },
    {
        "code": "통신 7-13-7",
        "name": "채널컨버터 휠터 개",
        "spec": "각종 휠터 및 기타설비",
        "unit": "0.19",
        "labors": {
            "통신설비공": 0.19
        },
        "category": "device",
        "page": 230,
        "keywords": [
            "채널컨버터 휠터 개",
            "각종 휠터 및 기타설비"
        ]
    },
    {
        "code": "통신 7-13-7",
        "name": "보호기 휠터 개",
        "spec": "각종 휠터 및 기타설비",
        "unit": "-",
        "labors": {
            "통신내선공": 0.2
        },
        "category": "device",
        "page": 230,
        "keywords": [
            "보호기 휠터 개",
            "각종 휠터 및 기타설비"
        ]
    },
    {
        "code": "통신 7-13-7",
        "name": "종단저항(75Ω) 휠터 개",
        "spec": "각종 휠터 및 기타설비",
        "unit": "-",
        "labors": {
            "통신설비공": 0.02
        },
        "category": "device",
        "page": 230,
        "keywords": [
            "종단저항(75Ω) 휠터 개",
            "각종 휠터 및 기타설비"
        ]
    },
    {
        "code": "통신 7-13-10",
        "name": "CT - Box",
        "spec": "페디스탈 설치 (CT-Box)",
        "unit": "대",
        "labors": {
            "통신설비공": 0.21,
            "보통인부": 0.4
        },
        "category": "device",
        "page": 231,
        "keywords": [
            "CT - Box",
            "페디스탈 설치 (CT-Box)"
        ]
    },
    {
        "code": "통신 7-13-11",
        "name": "축전지 내장형",
        "spec": "동축케이블 급전용 전원공급장치",
        "unit": "조",
        "labors": {
            "통신설비공": 0.97,
            "보통인부": 0.79
        },
        "category": "device",
        "page": 232,
        "keywords": [
            "축전지 내장형",
            "동축케이블 급전용 전원공급장치"
        ]
    },
    {
        "code": "통신 7-13-11",
        "name": "축전지 비내장형",
        "spec": "동축케이블 급전용 전원공급장치",
        "unit": "조",
        "labors": {
            "통신설비공": 0.3,
            "보통인부": 0.44
        },
        "category": "device",
        "page": 232,
        "keywords": [
            "축전지 비내장형",
            "동축케이블 급전용 전원공급장치"
        ]
    },
    {
        "code": "통신 7-13-11",
        "name": "전력삽입기",
        "spec": "동축케이블 급전용 전원공급장치",
        "unit": "개",
        "labors": {
            "통신설비공": 0.13,
            "보통인부": 0.13
        },
        "category": "device",
        "page": 232,
        "keywords": [
            "전력삽입기",
            "동축케이블 급전용 전원공급장치"
        ]
    },
    {
        "code": "통신 8-1-6",
        "name": "IP 전화기",
        "spec": "IP 및 키폰 전화기",
        "unit": "대",
        "labors": {
            "통신설비공": 0.15
        },
        "category": "device",
        "page": 238,
        "keywords": [
            "IP 전화기",
            "IP 및 키폰 전화기"
        ]
    },
    {
        "code": "통신 8-1-6",
        "name": "키폰 전화기",
        "spec": "IP 및 키폰 전화기",
        "unit": "대",
        "labors": {
            "통신설비공": 0.1
        },
        "category": "device",
        "page": 238,
        "keywords": [
            "키폰 전화기",
            "IP 및 키폰 전화기"
        ]
    },
    {
        "code": "통신 8-1-7",
        "name": "외벽",
        "spec": "ICT 밀폐장치(Containment)",
        "unit": "㎡",
        "labors": {
            "통신외선공": 0.15,
            "통신설비공": 0.15,
            "특별인부": 0.08
        },
        "category": "device",
        "page": 239,
        "keywords": [
            "외벽",
            "ICT 밀폐장치(Containment)"
        ]
    },
    {
        "code": "통신 8-1-7",
        "name": "천장",
        "spec": "ICT 밀폐장치(Containment)",
        "unit": "㎡",
        "labors": {
            "통신외선공": 0.15,
            "통신설비공": 0.25,
            "특별인부": 0.13
        },
        "category": "device",
        "page": 239,
        "keywords": [
            "천장",
            "ICT 밀폐장치(Containment)"
        ]
    },
    {
        "code": "통신 8-1-7",
        "name": "출입문",
        "spec": "ICT 밀폐장치(Containment)",
        "unit": "세트",
        "labors": {
            "통신외선공": 1.13,
            "통신설비공": 1.13,
            "특별인부": 0.56
        },
        "category": "device",
        "page": 239,
        "keywords": [
            "출입문",
            "ICT 밀폐장치(Containment)"
        ]
    },
    {
        "code": "통신 8-2-2-1",
        "name": "커넥터 설치",
        "spec": "주방 TV",
        "unit": "개소",
        "labors": {
            "통신관련산업기사": 0.15,
            "통신설비공": 0.15
        },
        "category": "device",
        "page": 245,
        "keywords": [
            "커넥터 설치",
            "주방 TV"
        ]
    },
    {
        "code": "통신 8-2-2-1",
        "name": "주방 TV 설치",
        "spec": "주방 TV",
        "unit": "식",
        "labors": {
            "통신관련산업기사": 0.05,
            "통신설비공": 0.05
        },
        "category": "device",
        "page": 245,
        "keywords": [
            "주방 TV 설치",
            "주방 TV"
        ]
    },
    {
        "code": "통신 8-2-2-1",
        "name": "시 험(Test)",
        "spec": "주방 TV",
        "unit": "세대",
        "labors": {
            "통신관련산업기사": 0.04,
            "통신설비공": 0.04
        },
        "category": "device",
        "page": 245,
        "keywords": [
            "시 험(Test)",
            "주방 TV"
        ]
    },
    {
        "code": "통신 8-2-2-1",
        "name": "방음 코킹 작업",
        "spec": "주방 TV",
        "unit": "개소",
        "labors": {
            "통신설비공": 0.03
        },
        "category": "device",
        "page": 245,
        "keywords": [
            "방음 코킹 작업",
            "주방 TV"
        ]
    },
    {
        "code": "통신 8-2-2-2",
        "name": "주방 라디오 설치",
        "spec": "주방 라디오(Radio)",
        "unit": "식",
        "labors": {
            "통신설비공": 0.05
        },
        "category": "device",
        "page": 245,
        "keywords": [
            "주방 라디오 설치",
            "주방 라디오(Radio)"
        ]
    },
    {
        "code": "통신 8-2-2-2",
        "name": "시 험(Test)",
        "spec": "주방 라디오(Radio)",
        "unit": "세대",
        "labors": {
            "통신설비공": 0.02
        },
        "category": "device",
        "page": 245,
        "keywords": [
            "시 험(Test)",
            "주방 라디오(Radio)"
        ]
    },
    {
        "code": "통신 8-2-2-2",
        "name": "방음 코킹 작업",
        "spec": "주방 라디오(Radio)",
        "unit": "개소",
        "labors": {
            "통신설비공": 0.03
        },
        "category": "device",
        "page": 245,
        "keywords": [
            "방음 코킹 작업",
            "주방 라디오(Radio)"
        ]
    },
    {
        "code": "통신 8-2-2-3",
        "name": "화장실용 비상콜 설치",
        "spec": "화장실용 비상콜",
        "unit": "식",
        "labors": {
            "통신설비공": 0.14
        },
        "category": "device",
        "page": 246,
        "keywords": [
            "화장실용 비상콜 설치",
            "화장실용 비상콜"
        ]
    },
    {
        "code": "통신 8-2-2-3",
        "name": "시 험(Test)",
        "spec": "화장실용 비상콜",
        "unit": "세대",
        "labors": {
            "통신설비공": 0.04
        },
        "category": "device",
        "page": 246,
        "keywords": [
            "시 험(Test)",
            "화장실용 비상콜"
        ]
    },
    {
        "code": "통신 8-2-2-4",
        "name": "세대 스피커 설치",
        "spec": "세대 스피커",
        "unit": "개",
        "labors": {
            "통신설비공": 0.13
        },
        "category": "device",
        "page": 246,
        "keywords": [
            "세대 스피커 설치",
            "세대 스피커"
        ]
    },
    {
        "code": "통신 8-2-2-4",
        "name": "시 험(Test)",
        "spec": "세대 스피커",
        "unit": "세대",
        "labors": {
            "통신설비공": 0.03
        },
        "category": "device",
        "page": 246,
        "keywords": [
            "시 험(Test)",
            "세대 스피커"
        ]
    },
    {
        "code": "통신 8-2-2-5",
        "name": "스피커 Outlet 설치",
        "spec": "스피커 Outlet",
        "unit": "개",
        "labors": {
            "통신설비공": 0.15
        },
        "category": "device",
        "page": 247,
        "keywords": [
            "스피커 Outlet 설치",
            "스피커 Outlet"
        ]
    },
    {
        "code": "통신 8-2-2-6",
        "name": "비디오폰 설치",
        "spec": "비디오폰",
        "unit": "대",
        "labors": {
            "통신설비공": 0.25
        },
        "category": "device",
        "page": 247,
        "keywords": [
            "비디오폰 설치",
            "비디오폰"
        ]
    },
    {
        "code": "통신 8-2-3",
        "name": "제어부 설치 열",
        "spec": "무인택배시스템",
        "unit": "0.25",
        "labors": {
            "통신설비공": 0.25
        },
        "category": "device",
        "page": 247,
        "keywords": [
            "제어부 설치 열",
            "무인택배시스템"
        ]
    },
    {
        "code": "통신 8-2-3",
        "name": "보관함 설치 열",
        "spec": "무인택배시스템",
        "unit": "0.15",
        "labors": {
            "통신설비공": 0.15
        },
        "category": "device",
        "page": 247,
        "keywords": [
            "보관함 설치 열",
            "무인택배시스템"
        ]
    },
    {
        "code": "통신 8-4-1",
        "name": "최대전력관리장치",
        "spec": "최대전력관리시스템",
        "unit": "대",
        "labors": {
            "통신관련산업기사": 0.17,
            "통신설비공": 0.17
        },
        "category": "device",
        "page": 250,
        "keywords": [
            "최대전력관리장치",
            "최대전력관리시스템"
        ]
    },
    {
        "code": "통신 8-4-1",
        "name": "메인장비 제어기",
        "spec": "최대전력관리시스템",
        "unit": "대",
        "labors": {
            "통신관련산업기사": 0.15,
            "통신설비공": 0.15
        },
        "category": "device",
        "page": 250,
        "keywords": [
            "메인장비 제어기",
            "최대전력관리시스템"
        ]
    },
    {
        "code": "통신 8-4-1",
        "name": "계량기 신호선",
        "spec": "최대전력관리시스템",
        "unit": "m",
        "labors": {
            "통신관련산업기사": 0.06,
            "통신설비공": 0.06
        },
        "category": "device",
        "page": 250,
        "keywords": [
            "계량기 신호선",
            "최대전력관리시스템"
        ]
    },
    {
        "code": "통신 8-4-1",
        "name": "중앙제어기",
        "spec": "최대전력관리시스템",
        "unit": "대",
        "labors": {
            "통신관련산업기사": 0.16,
            "통신설비공": 0.16
        },
        "category": "device",
        "page": 250,
        "keywords": [
            "중앙제어기",
            "최대전력관리시스템"
        ]
    },
    {
        "code": "통신 8-4-1",
        "name": "중계기",
        "spec": "최대전력관리시스템",
        "unit": "대",
        "labors": {
            "통신관련산업기사": 0.14,
            "통신설비공": 0.14
        },
        "category": "device",
        "page": 250,
        "keywords": [
            "중계기",
            "최대전력관리시스템"
        ]
    },
    {
        "code": "통신 8-4-1",
        "name": "최대전력관리 프로그램",
        "spec": "최대전력관리시스템",
        "unit": "대",
        "labors": {
            "통신관련산업기사": 0.28,
            "통신설비공": 0.28
        },
        "category": "device",
        "page": 250,
        "keywords": [
            "최대전력관리 프로그램",
            "최대전력관리시스템"
        ]
    },
    {
        "code": "통신 8-4-2",
        "name": "메인프로세스 유닛 대 0.55",
        "spec": "축전지관리 시스템(BMS)",
        "unit": "0.55",
        "labors": {
            "통신설비공": 0.85,
            "통신케이블공": 0.85
        },
        "category": "device",
        "page": 250,
        "keywords": [
            "메인프로세스 유닛 대 0.55",
            "축전지관리 시스템(BMS)"
        ]
    },
    {
        "code": "통신 8-4-2",
        "name": "데이터수집장치 유닛 대 0.55",
        "spec": "축전지관리 시스템(BMS)",
        "unit": "0.53",
        "labors": {
            "통신설비공": 0.61,
            "통신케이블공": 0.61
        },
        "category": "device",
        "page": 250,
        "keywords": [
            "데이터수집장치 유닛 대 0.55",
            "축전지관리 시스템(BMS)"
        ]
    },
    {
        "code": "통신 8-4-3",
        "name": "S/W 설치 대",
        "spec": "에너지저장시스템(ESS)",
        "unit": "-",
        "labors": {
            "통신설비공": 0.71
        },
        "category": "device",
        "page": 251,
        "keywords": [
            "S/W 설치 대",
            "에너지저장시스템(ESS)"
        ]
    },
    {
        "code": "통신 8-4-4",
        "name": "계측기 설치 대",
        "spec": "에너지 관리시스템(EMS)",
        "unit": "0.35",
        "labors": {
            "통신관련산업기사": 0.35
        },
        "category": "device",
        "page": 251,
        "keywords": [
            "계측기 설치 대",
            "에너지 관리시스템(EMS)"
        ]
    },
    {
        "code": "통신 8-4-4",
        "name": "데이터 확인 대",
        "spec": "에너지 관리시스템(EMS)",
        "unit": "-",
        "labors": {
            "통신설비공": 0.54
        },
        "category": "device",
        "page": 251,
        "keywords": [
            "데이터 확인 대",
            "에너지 관리시스템(EMS)"
        ]
    },
    {
        "code": "통신 8-4-4",
        "name": "시험 확인 대",
        "spec": "에너지 관리시스템(EMS)",
        "unit": "-",
        "labors": {
            "통신설비공": 0.67
        },
        "category": "device",
        "page": 251,
        "keywords": [
            "시험 확인 대",
            "에너지 관리시스템(EMS)"
        ]
    },
    {
        "code": "통신 8-4-5",
        "name": "고압계기형 (데이터전송장치 ) 대 0.40 - -",
        "spec": "원격검침 설비",
        "unit": "0.20",
        "labors": {
            "특별인부": 0.19
        },
        "category": "device",
        "page": 252,
        "keywords": [
            "고압계기형 (데이터전송장치 ) 대 0.40 - -",
            "원격검침 설비"
        ]
    },
    {
        "code": "통신 8-4-8-4",
        "name": "설치작업 Panel 삽입 및 결선",
        "spec": "주파수 편차 변환기(F.D.T) 시간편차 변환기(T.D.T)",
        "unit": "대",
        "labors": {
            "통신설비공": 5.0
        },
        "category": "device",
        "page": 273,
        "keywords": [
            "설치작업 Panel 삽입 및 결선",
            "주파수 편차 변환기(F.D.T) 시간편차 변환기(T.D.T)"
        ]
    },
    {
        "code": "통신 8-4-8-4",
        "name": "시험조정 국부점검 및 조정시험",
        "spec": "주파수 편차 변환기(F.D.T) 시간편차 변환기(T.D.T)",
        "unit": "대",
        "labors": {
            "통신관련기사": 4.0
        },
        "category": "device",
        "page": 273,
        "keywords": [
            "시험조정 국부점검 및 조정시험",
            "주파수 편차 변환기(F.D.T) 시간편차 변환기(T.D.T)"
        ]
    },
    {
        "code": "통신 8-4-8-7",
        "name": "설치 및 조정",
        "spec": "전원공급 장치",
        "unit": "개",
        "labors": {
            "통신설비공": 14.6,
            "보통인부": 10.8
        },
        "category": "device",
        "page": 274,
        "keywords": [
            "설치 및 조정",
            "전원공급 장치"
        ]
    },
    {
        "code": "통신 8-4-8-8",
        "name": "Card Reader",
        "spec": "주변장치",
        "unit": "대",
        "labors": {
            "통신내선공": 2.5,
            "보통인부": 1.2
        },
        "category": "device",
        "page": 274,
        "keywords": [
            "Card Reader",
            "주변장치"
        ]
    },
    {
        "code": "통신 8-4-8-8",
        "name": "Line Printer",
        "spec": "주변장치",
        "unit": "대",
        "labors": {
            "통신내선공": 2.5,
            "보통인부": 1.2
        },
        "category": "device",
        "page": 274,
        "keywords": [
            "Line Printer",
            "주변장치"
        ]
    },
    {
        "code": "통신 8-4-8-8",
        "name": "K.S.R",
        "spec": "주변장치",
        "unit": "대",
        "labors": {
            "통신내선공": 2.5,
            "보통인부": 1.2
        },
        "category": "device",
        "page": 274,
        "keywords": [
            "K.S.R",
            "주변장치"
        ]
    },
    {
        "code": "통신 8-4-8-8",
        "name": "Video Copier",
        "spec": "주변장치",
        "unit": "대",
        "labors": {
            "통신내선공": 7.0,
            "보통인부": 2.5
        },
        "category": "device",
        "page": 274,
        "keywords": [
            "Video Copier",
            "주변장치"
        ]
    },
    {
        "code": "통신 8-4-8-9",
        "name": "설치작업 계통반건립",
        "spec": "계통반(Map Board)",
        "unit": "식",
        "labors": {
            "통신설비공": 20.16,
            "보통인부": 13.44
        },
        "category": "device",
        "page": 275,
        "keywords": [
            "설치작업 계통반건립",
            "계통반(Map Board)"
        ]
    },
    {
        "code": "통신 8-4-8-9",
        "name": "타일조립",
        "spec": "계통반(Map Board)",
        "unit": "식",
        "labors": {
            "통신설비공": 20.4,
            "보통인부": 20.4
        },
        "category": "device",
        "page": 275,
        "keywords": [
            "타일조립",
            "계통반(Map Board)"
        ]
    },
    {
        "code": "통신 8-4-8-9",
        "name": "점검 및표시기점검",
        "spec": "계통반(Map Board)",
        "unit": "식",
        "labors": {
            "통신설비공": 12.7
        },
        "category": "device",
        "page": 275,
        "keywords": [
            "점검 및표시기점검",
            "계통반(Map Board)"
        ]
    },
    {
        "code": "통신 8-4-8-9",
        "name": "결선표시기결선",
        "spec": "계통반(Map Board)",
        "unit": "식",
        "labors": {
            "통신설비공": 40.6
        },
        "category": "device",
        "page": 275,
        "keywords": [
            "결선표시기결선",
            "계통반(Map Board)"
        ]
    },
    {
        "code": "통신 8-4-8-9",
        "name": "시험 및 프로그램 연결시험",
        "spec": "계통반(Map Board)",
        "unit": "식",
        "labors": {
            "통신관련기사": 15.0
        },
        "category": "device",
        "page": 275,
        "keywords": [
            "시험 및 프로그램 연결시험",
            "계통반(Map Board)"
        ]
    },
    {
        "code": "통신 8-4-8-9",
        "name": "조정최종시험",
        "spec": "계통반(Map Board)",
        "unit": "식",
        "labors": {
            "통신관련기사": 15.0
        },
        "category": "device",
        "page": 275,
        "keywords": [
            "조정최종시험",
            "계통반(Map Board)"
        ]
    },
    {
        "code": "통신 8-4-8-11",
        "name": "조립 및 설치",
        "spec": "콘솔(Console)",
        "unit": "개",
        "labors": {
            "통신관련기사": 1.0,
            "통신관련산업기사": 2.0,
            "통신설비공": 4.0,
            "보통인부": 2.0
        },
        "category": "device",
        "page": 276,
        "keywords": [
            "조립 및 설치",
            "콘솔(Console)"
        ]
    },
    {
        "code": "통신 8-4-8-11",
        "name": "조정",
        "spec": "콘솔(Console)",
        "unit": "개",
        "labors": {
            "통신관련기사": 2.0,
            "통신관련산업기사": 4.0
        },
        "category": "device",
        "page": 276,
        "keywords": [
            "조정",
            "콘솔(Console)"
        ]
    },
    {
        "code": "통신 8-4-8-11",
        "name": "시험 및 측정",
        "spec": "콘솔(Console)",
        "unit": "개",
        "labors": {
            "통신관련기사": 4.0,
            "통신관련산업기사": 8.0
        },
        "category": "device",
        "page": 276,
        "keywords": [
            "시험 및 측정",
            "콘솔(Console)"
        ]
    },
    {
        "code": "통신 8-4-8-12",
        "name": "기기간 연결용 케이블포설",
        "spec": "전자계산기 배선",
        "unit": "10m",
        "labors": {
            "통신케이블공": 0.32
        },
        "category": "device",
        "page": 276,
        "keywords": [
            "기기간 연결용 케이블포설",
            "전자계산기 배선"
        ]
    },
    {
        "code": "통신 8-4-8-12",
        "name": "간이시험",
        "spec": "전자계산기 배선",
        "unit": "조",
        "labors": {
            "통신케이블공": 0.15
        },
        "category": "device",
        "page": 276,
        "keywords": [
            "간이시험",
            "전자계산기 배선"
        ]
    },
    {
        "code": "통신 8-5-2",
        "name": "주장비 대",
        "spec": "차량위치 및 빌딩안내설비",
        "unit": "0.27",
        "labors": {
            "통신관련산업기사": 0.27,
            "통신설비공": 0.27
        },
        "category": "device",
        "page": 277,
        "keywords": [
            "주장비 대",
            "차량위치 및 빌딩안내설비"
        ]
    },
    {
        "code": "통신 8-5-2",
        "name": "거치대 대",
        "spec": "차량위치 및 빌딩안내설비",
        "unit": "-",
        "labors": {
            "통신설비공": 0.36
        },
        "category": "device",
        "page": 277,
        "keywords": [
            "거치대 대",
            "차량위치 및 빌딩안내설비"
        ]
    },
    {
        "code": "통신 8-5-4",
        "name": "유인 발급시스템 대",
        "spec": "통합민원발급시스템",
        "unit": "0.21",
        "labors": {
            "통신설비공": 0.21
        },
        "category": "device",
        "page": 278,
        "keywords": [
            "유인 발급시스템 대",
            "통합민원발급시스템"
        ]
    },
    {
        "code": "통신 8-5-4",
        "name": "무인 발급시스템 대",
        "spec": "통합민원발급시스템",
        "unit": "0.31",
        "labors": {
            "통신설비공": 0.31
        },
        "category": "device",
        "page": 278,
        "keywords": [
            "무인 발급시스템 대",
            "통합민원발급시스템"
        ]
    },
    {
        "code": "통신 8-6-2",
        "name": "노면센서설치",
        "spec": "도로결빙 및 수막감지설비",
        "unit": "개",
        "labors": {
            "통신케이블공": 1.25,
            "통신설비공": 1.25,
            "보통인부": 1.25
        },
        "category": "device",
        "page": 279,
        "keywords": [
            "노면센서설치",
            "도로결빙 및 수막감지설비"
        ]
    },
    {
        "code": "통신 8-6-4",
        "name": "소구경(구경 50mm 이하)",
        "spec": "수도계량기 원격검침 설비",
        "unit": "대",
        "labors": {
            "통신설비공": 0.12
        },
        "category": "device",
        "page": 279,
        "keywords": [
            "소구경(구경 50mm 이하)",
            "수도계량기 원격검침 설비"
        ]
    },
    {
        "code": "통신 8-6-4",
        "name": "원격검침 단말기 대구경(구경 50mm 초과)",
        "spec": "수도계량기 원격검침 설비",
        "unit": "대",
        "labors": {
            "통신설비공": 0.27
        },
        "category": "device",
        "page": 279,
        "keywords": [
            "원격검침 단말기 대구경(구경 50mm 초과)",
            "수도계량기 원격검침 설비"
        ]
    },
    {
        "code": "통신 8-7-4",
        "name": "데이터 로거(Data Logger)",
        "spec": "대기오염측정시스템",
        "unit": "대",
        "labors": {
            "통신설비공": 0.2,
            "통신관련산업기사": 0.2
        },
        "category": "device",
        "page": 281,
        "keywords": [
            "데이터 로거(Data Logger)",
            "대기오염측정시스템"
        ]
    },
    {
        "code": "통신 8-7-4",
        "name": "아황산가스(SO₂) 측정기",
        "spec": "대기오염측정시스템",
        "unit": "대",
        "labors": {
            "통신설비공": 0.17,
            "통신관련산업기사": 0.17
        },
        "category": "device",
        "page": 281,
        "keywords": [
            "아황산가스(SO₂) 측정기",
            "대기오염측정시스템"
        ]
    },
    {
        "code": "통신 8-7-4",
        "name": "일산화탄소(CO) 측정기",
        "spec": "대기오염측정시스템",
        "unit": "대",
        "labors": {
            "통신설비공": 0.15,
            "통신관련산업기사": 0.15
        },
        "category": "device",
        "page": 281,
        "keywords": [
            "일산화탄소(CO) 측정기",
            "대기오염측정시스템"
        ]
    },
    {
        "code": "통신 8-7-4",
        "name": "이산화질소(NO₂) 측정기",
        "spec": "대기오염측정시스템",
        "unit": "대",
        "labors": {
            "통신설비공": 0.17,
            "통신관련산업기사": 0.17
        },
        "category": "device",
        "page": 281,
        "keywords": [
            "이산화질소(NO₂) 측정기",
            "대기오염측정시스템"
        ]
    },
    {
        "code": "통신 8-7-4",
        "name": "오존(O₃) 측정기",
        "spec": "대기오염측정시스템",
        "unit": "대",
        "labors": {
            "통신설비공": 0.16,
            "통신관련산업기사": 0.16
        },
        "category": "device",
        "page": 281,
        "keywords": [
            "오존(O₃) 측정기",
            "대기오염측정시스템"
        ]
    },
    {
        "code": "통신 8-7-4",
        "name": "먼지 측정기",
        "spec": "대기오염측정시스템",
        "unit": "대",
        "labors": {
            "통신설비공": 0.16,
            "통신관련산업기사": 0.16
        },
        "category": "device",
        "page": 281,
        "keywords": [
            "먼지 측정기",
            "대기오염측정시스템"
        ]
    },
    {
        "code": "통신 8-7-5",
        "name": "적설계 대",
        "spec": "적설량 관측시스템",
        "unit": "0.29",
        "labors": {
            "통신설비공": 0.29
        },
        "category": "device",
        "page": 282,
        "keywords": [
            "적설계 대",
            "적설량 관측시스템"
        ]
    },
    {
        "code": "통신 8-7-5",
        "name": "적설데이터로거 대",
        "spec": "적설량 관측시스템",
        "unit": "0.63",
        "labors": {
            "통신설비공": 0.63
        },
        "category": "device",
        "page": 282,
        "keywords": [
            "적설데이터로거 대",
            "적설량 관측시스템"
        ]
    },
    {
        "code": "통신 8-7-5",
        "name": "적설판(1.5m×1.5m) 대",
        "spec": "적설량 관측시스템",
        "unit": "0.02",
        "labors": {
            "통신설비공": 0.02
        },
        "category": "device",
        "page": 282,
        "keywords": [
            "적설판(1.5m×1.5m) 대",
            "적설량 관측시스템"
        ]
    },
    {
        "code": "통신 9-1-9",
        "name": "소형무선기지국 설치",
        "spec": "교통정보수집시스템(Beacon)",
        "unit": "대",
        "labors": {
            "통신관련산업기사": 1.94,
            "통신설비공": 1.6
        },
        "category": "device",
        "page": 295,
        "keywords": [
            "소형무선기지국 설치",
            "교통정보수집시스템(Beacon)"
        ]
    },
    {
        "code": "통신 9-1-9",
        "name": "시험",
        "spec": "교통정보수집시스템(Beacon)",
        "unit": "대",
        "labors": {
            "통신관련산업기사": 0.96,
            "통신외선공": 0.16,
            "보통인부": 0.16,
            "통신설비공": 0.11,
            "특별인부": 0.11
        },
        "category": "device",
        "page": 295,
        "keywords": [
            "시험",
            "교통정보수집시스템(Beacon)"
        ]
    },
    {
        "code": "통신 9-1-9",
        "name": "위치비콘 설치",
        "spec": "교통정보수집시스템(Beacon)",
        "unit": "대",
        "labors": {
            "통신외선공": 0.12,
            "보통인부": 0.12
        },
        "category": "device",
        "page": 295,
        "keywords": [
            "위치비콘 설치",
            "교통정보수집시스템(Beacon)"
        ]
    },
    {
        "code": "통신 9-1-9",
        "name": "차량 통신모듈 설치",
        "spec": "교통정보수집시스템(Beacon)",
        "unit": "대",
        "labors": {
            "통신설비공": 0.22,
            "특별인부": 0.22
        },
        "category": "device",
        "page": 295,
        "keywords": [
            "차량 통신모듈 설치",
            "교통정보수집시스템(Beacon)"
        ]
    },
    {
        "code": "통신 9-1-14",
        "name": "키오스크 대",
        "spec": "자전거무인대여시스템",
        "unit": "0.83",
        "labors": {
            "통신관련산업기사": 0.83,
            "통신설비공": 0.87
        },
        "category": "device",
        "page": 297,
        "keywords": [
            "키오스크 대",
            "자전거무인대여시스템"
        ]
    },
    {
        "code": "통신 9-1-14",
        "name": "거치대 대",
        "spec": "자전거무인대여시스템",
        "unit": "-",
        "labors": {
            "통신설비공": 0.33
        },
        "category": "device",
        "page": 297,
        "keywords": [
            "거치대 대",
            "자전거무인대여시스템"
        ]
    },
    {
        "code": "통신 9-1-17",
        "name": "통학로 등하교 알리미 대",
        "spec": "통학로 등하교 알리미",
        "unit": "0.11",
        "labors": {
            "통신설비공": 0.11
        },
        "category": "device",
        "page": 299,
        "keywords": [
            "통학로 등하교 알리미 대",
            "통학로 등하교 알리미"
        ]
    },
    {
        "code": "통신 9-2-1-3",
        "name": "5m 이하",
        "spec": "CCTV Pole",
        "unit": "기",
        "labors": {
            "통신외선공": 0.65,
            "보통인부": 0.73
        },
        "category": "device",
        "page": 305,
        "keywords": [
            "5m 이하",
            "CCTV Pole"
        ]
    },
    {
        "code": "통신 9-2-1-3",
        "name": "6m 이하",
        "spec": "CCTV Pole",
        "unit": "기",
        "labors": {
            "통신외선공": 0.72,
            "보통인부": 0.81
        },
        "category": "device",
        "page": 305,
        "keywords": [
            "6m 이하",
            "CCTV Pole"
        ]
    },
    {
        "code": "통신 9-2-1-3",
        "name": "7m 이하",
        "spec": "CCTV Pole",
        "unit": "기",
        "labors": {
            "통신외선공": 1.23,
            "보통인부": 1.4
        },
        "category": "device",
        "page": 305,
        "keywords": [
            "7m 이하",
            "CCTV Pole"
        ]
    },
    {
        "code": "통신 9-2-1-3",
        "name": "8m 이하",
        "spec": "CCTV Pole",
        "unit": "기",
        "labors": {
            "통신외선공": 1.66,
            "보통인부": 1.88
        },
        "category": "device",
        "page": 305,
        "keywords": [
            "8m 이하",
            "CCTV Pole"
        ]
    },
    {
        "code": "통신 9-2-1-3",
        "name": "9m 이하",
        "spec": "CCTV Pole",
        "unit": "기",
        "labors": {
            "통신외선공": 1.68,
            "보통인부": 2.13
        },
        "category": "device",
        "page": 305,
        "keywords": [
            "9m 이하",
            "CCTV Pole"
        ]
    },
    {
        "code": "통신 9-2-1-3",
        "name": "10m 이하",
        "spec": "CCTV Pole",
        "unit": "기",
        "labors": {
            "통신외선공": 2.01,
            "보통인부": 2.55
        },
        "category": "device",
        "page": 305,
        "keywords": [
            "10m 이하",
            "CCTV Pole"
        ]
    },
    {
        "code": "통신 9-2-1-3",
        "name": "11m 이하",
        "spec": "CCTV Pole",
        "unit": "기",
        "labors": {
            "통신외선공": 2.5,
            "보통인부": 2.63
        },
        "category": "device",
        "page": 305,
        "keywords": [
            "11m 이하",
            "CCTV Pole"
        ]
    },
    {
        "code": "통신 9-2-1-3",
        "name": "12m 이하",
        "spec": "CCTV Pole",
        "unit": "기",
        "labors": {
            "통신외선공": 2.86,
            "보통인부": 3.0
        },
        "category": "device",
        "page": 305,
        "keywords": [
            "12m 이하",
            "CCTV Pole"
        ]
    },
    {
        "code": "통신 9-2-1-3",
        "name": "14m 이하",
        "spec": "CCTV Pole",
        "unit": "기",
        "labors": {
            "통신외선공": 3.6,
            "보통인부": 4.24
        },
        "category": "device",
        "page": 305,
        "keywords": [
            "14m 이하",
            "CCTV Pole"
        ]
    },
    {
        "code": "통신 9-2-4-1",
        "name": "신호전송기",
        "spec": "주장치",
        "unit": "대",
        "labors": {
            "통신설비공": 0.12,
            "통신케이블공": 0.12
        },
        "category": "device",
        "page": 308,
        "keywords": [
            "신호전송기",
            "주장치"
        ]
    },
    {
        "code": "통신 9-2-4-1",
        "name": "메인주장치",
        "spec": "주장치",
        "unit": "대",
        "labors": {
            "통신설비공": 0.18,
            "통신케이블공": 0.18
        },
        "category": "device",
        "page": 308,
        "keywords": [
            "메인주장치",
            "주장치"
        ]
    },
    {
        "code": "통신 9-2-4-1",
        "name": "알람표시기",
        "spec": "주장치",
        "unit": "대",
        "labors": {
            "통신설비공": 0.11,
            "통신케이블공": 0.22
        },
        "category": "device",
        "page": 308,
        "keywords": [
            "알람표시기",
            "주장치"
        ]
    },
    {
        "code": "통신 9-2-4-1",
        "name": "로컬컨트롤러",
        "spec": "주장치",
        "unit": "대",
        "labors": {
            "통신설비공": 0.12,
            "통신케이블공": 0.12
        },
        "category": "device",
        "page": 308,
        "keywords": [
            "로컬컨트롤러",
            "주장치"
        ]
    },
    {
        "code": "통신 9-2-4-1",
        "name": "셔터신호전송기",
        "spec": "주장치",
        "unit": "대",
        "labors": {
            "통신설비공": 0.14,
            "통신케이블공": 0.32
        },
        "category": "device",
        "page": 308,
        "keywords": [
            "셔터신호전송기",
            "주장치"
        ]
    },
    {
        "code": "통신 9-2-4-1",
        "name": "락 신호전송기",
        "spec": "주장치",
        "unit": "대",
        "labors": {
            "통신설비공": 0.13,
            "통신케이블공": 0.13
        },
        "category": "device",
        "page": 308,
        "keywords": [
            "락 신호전송기",
            "주장치"
        ]
    },
    {
        "code": "통신 9-2-4-1",
        "name": "조작표시기",
        "spec": "주장치",
        "unit": "대",
        "labors": {
            "통신설비공": 0.15,
            "통신케이블공": 0.29
        },
        "category": "device",
        "page": 308,
        "keywords": [
            "조작표시기",
            "주장치"
        ]
    },
    {
        "code": "통신 9-2-4-2",
        "name": "적외선감지기",
        "spec": "감지기(Sensor)",
        "unit": "조",
        "labors": {
            "통신설비공": 0.14
        },
        "category": "device",
        "page": 309,
        "keywords": [
            "적외선감지기",
            "감지기(Sensor)"
        ]
    },
    {
        "code": "통신 9-2-4-2",
        "name": "자석감지기",
        "spec": "감지기(Sensor)",
        "unit": "개",
        "labors": {
            "통신설비공": 0.07
        },
        "category": "device",
        "page": 309,
        "keywords": [
            "자석감지기",
            "감지기(Sensor)"
        ]
    },
    {
        "code": "통신 9-2-4-2",
        "name": "열선감지기",
        "spec": "감지기(Sensor)",
        "unit": "개",
        "labors": {
            "통신설비공": 0.07
        },
        "category": "device",
        "page": 309,
        "keywords": [
            "열선감지기",
            "감지기(Sensor)"
        ]
    },
    {
        "code": "통신 9-2-4-2",
        "name": "동체감지기",
        "spec": "감지기(Sensor)",
        "unit": "개",
        "labors": {
            "통신설비공": 0.06
        },
        "category": "device",
        "page": 309,
        "keywords": [
            "동체감지기",
            "감지기(Sensor)"
        ]
    },
    {
        "code": "통신 9-2-4-2",
        "name": "유리감지기",
        "spec": "감지기(Sensor)",
        "unit": "개",
        "labors": {
            "통신설비공": 0.04
        },
        "category": "device",
        "page": 309,
        "keywords": [
            "유리감지기",
            "감지기(Sensor)"
        ]
    },
    {
        "code": "통신 9-2-4-2",
        "name": "셧터감지기",
        "spec": "감지기(Sensor)",
        "unit": "개",
        "labors": {
            "통신설비공": 0.09
        },
        "category": "device",
        "page": 309,
        "keywords": [
            "셧터감지기",
            "감지기(Sensor)"
        ]
    },
    {
        "code": "통신 9-2-4-2",
        "name": "휀스(장력)감지기",
        "spec": "감지기(Sensor)",
        "unit": "개",
        "labors": {
            "통신설비공": 0.07
        },
        "category": "device",
        "page": 309,
        "keywords": [
            "휀스(장력)감지기",
            "감지기(Sensor)"
        ]
    },
    {
        "code": "통신 9-2-4-2",
        "name": "금고감지기",
        "spec": "감지기(Sensor)",
        "unit": "개",
        "labors": {
            "통신설비공": 0.08
        },
        "category": "device",
        "page": 309,
        "keywords": [
            "금고감지기",
            "감지기(Sensor)"
        ]
    },
    {
        "code": "통신 9-2-4-2",
        "name": "진동감지기",
        "spec": "감지기(Sensor)",
        "unit": "개",
        "labors": {
            "통신설비공": 0.03
        },
        "category": "device",
        "page": 309,
        "keywords": [
            "진동감지기",
            "감지기(Sensor)"
        ]
    },
    {
        "code": "통신 9-2-4-2",
        "name": "벽(충격)감지기",
        "spec": "감지기(Sensor)",
        "unit": "개",
        "labors": {
            "통신설비공": 0.07
        },
        "category": "device",
        "page": 309,
        "keywords": [
            "벽(충격)감지기",
            "감지기(Sensor)"
        ]
    },
    {
        "code": "통신 9-2-4-2",
        "name": "누수감지기",
        "spec": "감지기(Sensor)",
        "unit": "개",
        "labors": {
            "통신설비공": 0.08
        },
        "category": "device",
        "page": 309,
        "keywords": [
            "누수감지기",
            "감지기(Sensor)"
        ]
    },
    {
        "code": "통신 9-2-4-2",
        "name": "누액감지기",
        "spec": "감지기(Sensor)",
        "unit": "개",
        "labors": {
            "통신설비공": 0.07
        },
        "category": "device",
        "page": 309,
        "keywords": [
            "누액감지기",
            "감지기(Sensor)"
        ]
    },
    {
        "code": "통신 9-2-4-2",
        "name": "화재감지기",
        "spec": "감지기(Sensor)",
        "unit": "개",
        "labors": {
            "통신설비공": 0.06
        },
        "category": "device",
        "page": 309,
        "keywords": [
            "화재감지기",
            "감지기(Sensor)"
        ]
    },
    {
        "code": "통신 9-2-4-2",
        "name": "가스감지기",
        "spec": "감지기(Sensor)",
        "unit": "개",
        "labors": {
            "통신설비공": 0.09
        },
        "category": "device",
        "page": 309,
        "keywords": [
            "가스감지기",
            "감지기(Sensor)"
        ]
    },
    {
        "code": "통신 9-2-4-2",
        "name": "음향감지기",
        "spec": "감지기(Sensor)",
        "unit": "개",
        "labors": {
            "통신설비공": 0.07
        },
        "category": "device",
        "page": 309,
        "keywords": [
            "음향감지기",
            "감지기(Sensor)"
        ]
    },
    {
        "code": "통신 9-2-4-2",
        "name": "(CD)충격감지기",
        "spec": "감지기(Sensor)",
        "unit": "개",
        "labors": {
            "통신설비공": 0.03
        },
        "category": "device",
        "page": 309,
        "keywords": [
            "(CD)충격감지기",
            "감지기(Sensor)"
        ]
    },
    {
        "code": "통신 9-2-4-3",
        "name": "보조전원장치",
        "spec": "경비․보안 주변기기",
        "unit": "개",
        "labors": {
            "통신설비공": 0.11,
            "통신내선공": 0.28
        },
        "category": "device",
        "page": 310,
        "keywords": [
            "보조전원장치",
            "경비․보안 주변기기"
        ]
    },
    {
        "code": "통신 9-2-4-3",
        "name": "프린터",
        "spec": "경비․보안 주변기기",
        "unit": "개",
        "labors": {
            "통신설비공": 0.04,
            "통신내선공": 0.05
        },
        "category": "device",
        "page": 310,
        "keywords": [
            "프린터",
            "경비․보안 주변기기"
        ]
    },
    {
        "code": "통신 9-2-4-3",
        "name": "카드리더",
        "spec": "경비․보안 주변기기",
        "unit": "개",
        "labors": {
            "통신설비공": 0.1,
            "통신내선공": 0.1
        },
        "category": "device",
        "page": 310,
        "keywords": [
            "카드리더",
            "경비․보안 주변기기"
        ]
    },
    {
        "code": "통신 9-2-4-3",
        "name": "출입관리기",
        "spec": "경비․보안 주변기기",
        "unit": "개",
        "labors": {
            "통신설비공": 0.08,
            "통신내선공": 0.11
        },
        "category": "device",
        "page": 310,
        "keywords": [
            "출입관리기",
            "경비․보안 주변기기"
        ]
    },
    {
        "code": "통신 9-2-4-3",
        "name": "회선제어기",
        "spec": "경비․보안 주변기기",
        "unit": "개",
        "labors": {
            "통신내선공": 0.17
        },
        "category": "device",
        "page": 310,
        "keywords": [
            "회선제어기",
            "경비․보안 주변기기"
        ]
    },
    {
        "code": "통신 9-2-4-3",
        "name": "가스이보기",
        "spec": "경비․보안 주변기기",
        "unit": "개",
        "labors": {
            "통신내선공": 0.09
        },
        "category": "device",
        "page": 310,
        "keywords": [
            "가스이보기",
            "경비․보안 주변기기"
        ]
    },
    {
        "code": "통신 9-2-4-3",
        "name": "화재이보기",
        "spec": "경비․보안 주변기기",
        "unit": "개",
        "labors": {
            "통신내선공": 0.05
        },
        "category": "device",
        "page": 310,
        "keywords": [
            "화재이보기",
            "경비․보안 주변기기"
        ]
    },
    {
        "code": "통신 9-2-4-3",
        "name": "누수감지신호기",
        "spec": "경비․보안 주변기기",
        "unit": "개",
        "labors": {
            "통신내선공": 0.08
        },
        "category": "device",
        "page": 310,
        "keywords": [
            "누수감지신호기",
            "경비․보안 주변기기"
        ]
    },
    {
        "code": "통신 9-2-4-3",
        "name": "비상(통보)스위치",
        "spec": "경비․보안 주변기기",
        "unit": "개",
        "labors": {
            "통신내선공": 0.06
        },
        "category": "device",
        "page": 310,
        "keywords": [
            "비상(통보)스위치",
            "경비․보안 주변기기"
        ]
    },
    {
        "code": "통신 9-2-4-3",
        "name": "비상램프",
        "spec": "경비․보안 주변기기",
        "unit": "개",
        "labors": {
            "통신내선공": 0.05
        },
        "category": "device",
        "page": 310,
        "keywords": [
            "비상램프",
            "경비․보안 주변기기"
        ]
    },
    {
        "code": "통신 9-2-4-3",
        "name": "방범싸이렌",
        "spec": "경비․보안 주변기기",
        "unit": "개",
        "labors": {
            "통신내선공": 0.08
        },
        "category": "device",
        "page": 310,
        "keywords": [
            "방범싸이렌",
            "경비․보안 주변기기"
        ]
    },
    {
        "code": "통신 9-2-4-3",
        "name": "락개폐기",
        "spec": "경비․보안 주변기기",
        "unit": "개",
        "labors": {
            "통신설비공": 0.1,
            "통신내선공": 0.24
        },
        "category": "device",
        "page": 310,
        "keywords": [
            "락개폐기",
            "경비․보안 주변기기"
        ]
    },
    {
        "code": "통신 9-2-4-3",
        "name": "방범용 라우터",
        "spec": "경비․보안 주변기기",
        "unit": "개",
        "labors": {
            "통신설비공": 0.11,
            "통신내선공": 0.25
        },
        "category": "device",
        "page": 310,
        "keywords": [
            "방범용 라우터",
            "경비․보안 주변기기"
        ]
    },
    {
        "code": "통신 9-2-4-3",
        "name": "폐점예고등",
        "spec": "경비․보안 주변기기",
        "unit": "개",
        "labors": {
            "통신내선공": 0.07
        },
        "category": "device",
        "page": 310,
        "keywords": [
            "폐점예고등",
            "경비․보안 주변기기"
        ]
    },
    {
        "code": "통신 9-2-4-3",
        "name": "CD/ATM감시반",
        "spec": "경비․보안 주변기기",
        "unit": "개",
        "labors": {
            "통신내선공": 0.22
        },
        "category": "device",
        "page": 310,
        "keywords": [
            "CD/ATM감시반",
            "경비․보안 주변기기"
        ]
    },
    {
        "code": "통신 9-2-4-3",
        "name": "음성안내장치",
        "spec": "경비․보안 주변기기",
        "unit": "개",
        "labors": {
            "통신설비공": 0.12,
            "통신내선공": 0.18
        },
        "category": "device",
        "page": 310,
        "keywords": [
            "음성안내장치",
            "경비․보안 주변기기"
        ]
    },
    {
        "code": "통신 9-2-4-3",
        "name": "설비제어장치",
        "spec": "경비․보안 주변기기",
        "unit": "개",
        "labors": {
            "통신설비공": 0.17,
            "통신내선공": 0.32
        },
        "category": "device",
        "page": 310,
        "keywords": [
            "설비제어장치",
            "경비․보안 주변기기"
        ]
    },
    {
        "code": "통신 9-2-4-3",
        "name": "KEY BOX",
        "spec": "경비․보안 주변기기",
        "unit": "개",
        "labors": {
            "통신내선공": 0.04
        },
        "category": "device",
        "page": 310,
        "keywords": [
            "KEY BOX",
            "경비․보안 주변기기"
        ]
    },
    {
        "code": "통신 9-2-6",
        "name": "비상통화장치",
        "spec": "승강기 비상통화시스템",
        "unit": "대",
        "labors": {
            "통신설비공": 0.82
        },
        "category": "device",
        "page": 312,
        "keywords": [
            "비상통화장치",
            "승강기 비상통화시스템"
        ]
    },
    {
        "code": "통신 9-2-6",
        "name": "비상조명장치",
        "spec": "승강기 비상통화시스템",
        "unit": "대",
        "labors": {
            "통신설비공": 0.25
        },
        "category": "device",
        "page": 312,
        "keywords": [
            "비상조명장치",
            "승강기 비상통화시스템"
        ]
    },
    {
        "code": "통신 9-2-12",
        "name": "가스감지기",
        "spec": "흡입형 가스감지 설비",
        "unit": "대",
        "labors": {
            "통신설비공": 0.09
        },
        "category": "device",
        "page": 315,
        "keywords": [
            "가스감지기",
            "흡입형 가스감지 설비"
        ]
    },
    {
        "code": "통신 9-2-12",
        "name": "흡입형 가스감지기 튜브",
        "spec": "흡입형 가스감지 설비",
        "unit": "10m",
        "labors": {
            "통신내선공": 0.22
        },
        "category": "device",
        "page": 315,
        "keywords": [
            "흡입형 가스감지기 튜브",
            "흡입형 가스감지 설비"
        ]
    },
    {
        "code": "통신 9-2-13",
        "name": "열 영상 감시 카메라",
        "spec": "열 영상 감시 시스템",
        "unit": "대",
        "labors": {
            "통신관련산업기사": 0.72,
            "통신설비공": 0.48
        },
        "category": "device",
        "page": 316,
        "keywords": [
            "열 영상 감시 카메라",
            "열 영상 감시 시스템"
        ]
    },
    {
        "code": "통신 9-2-13",
        "name": "팬틸트",
        "spec": "열 영상 감시 시스템",
        "unit": "대",
        "labors": {
            "통신관련산업기사": 0.45,
            "통신설비공": 0.3
        },
        "category": "device",
        "page": 316,
        "keywords": [
            "팬틸트",
            "열 영상 감시 시스템"
        ]
    },
    {
        "code": "통신 9-2-13",
        "name": "브라켓",
        "spec": "열 영상 감시 시스템",
        "unit": "대",
        "labors": {
            "통신관련산업기사": 0.09,
            "통신설비공": 0.06
        },
        "category": "device",
        "page": 316,
        "keywords": [
            "브라켓",
            "열 영상 감시 시스템"
        ]
    },
    {
        "code": "통신 9-2-13",
        "name": "레이저 감지기",
        "spec": "열 영상 감시 시스템",
        "unit": "대",
        "labors": {
            "통신관련산업기사": 0.18,
            "통신설비공": 0.12
        },
        "category": "device",
        "page": 316,
        "keywords": [
            "레이저 감지기",
            "열 영상 감시 시스템"
        ]
    },
    {
        "code": "통신 9-2-13",
        "name": "시험",
        "spec": "열 영상 감시 시스템",
        "unit": "식",
        "labors": {
            "통신관련산업기사": 0.58,
            "통신설비공": 0.39
        },
        "category": "device",
        "page": 316,
        "keywords": [
            "시험",
            "열 영상 감시 시스템"
        ]
    },
    {
        "code": "통신 9-3-2-1",
        "name": "브라켓 설치",
        "spec": "초음파 수위계",
        "unit": "대",
        "labors": {
            "통신설비공": 0.15,
            "특별인부": 0.15
        },
        "category": "device",
        "page": 317,
        "keywords": [
            "브라켓 설치",
            "초음파 수위계"
        ]
    },
    {
        "code": "통신 9-3-2-1",
        "name": "변환기 설치",
        "spec": "초음파 수위계",
        "unit": "대",
        "labors": {
            "통신설비공": 0.09,
            "특별인부": 0.09
        },
        "category": "device",
        "page": 317,
        "keywords": [
            "변환기 설치",
            "초음파 수위계"
        ]
    },
    {
        "code": "통신 9-3-2-1",
        "name": "센서 설치",
        "spec": "초음파 수위계",
        "unit": "대",
        "labors": {
            "통신설비공": 0.1,
            "특별인부": 0.1
        },
        "category": "device",
        "page": 317,
        "keywords": [
            "센서 설치",
            "초음파 수위계"
        ]
    },
    {
        "code": "통신 9-3-2-1",
        "name": "시험",
        "spec": "초음파 수위계",
        "unit": "대",
        "labors": {
            "통신설비공": 0.09,
            "특별인부": 0.09
        },
        "category": "device",
        "page": 317,
        "keywords": [
            "시험",
            "초음파 수위계"
        ]
    },
    {
        "code": "통신 9-3-2-2",
        "name": "변환기 설치",
        "spec": "초음파 유량계",
        "unit": "대",
        "labors": {
            "통신설비공": 0.15,
            "특별인부": 0.15
        },
        "category": "device",
        "page": 318,
        "keywords": [
            "변환기 설치",
            "초음파 유량계"
        ]
    },
    {
        "code": "통신 9-3-2-2",
        "name": "센서 설치",
        "spec": "초음파 유량계",
        "unit": "세트",
        "labors": {
            "통신설비공": 0.17,
            "특별인부": 0.17
        },
        "category": "device",
        "page": 318,
        "keywords": [
            "센서 설치",
            "초음파 유량계"
        ]
    },
    {
        "code": "통신 9-3-2-2",
        "name": "시험",
        "spec": "초음파 유량계",
        "unit": "식",
        "labors": {
            "통신설비공": 0.11,
            "특별인부": 0.11
        },
        "category": "device",
        "page": 318,
        "keywords": [
            "시험",
            "초음파 유량계"
        ]
    },
    {
        "code": "통신 9-3-2-3",
        "name": "압력센서 설치",
        "spec": "압력전송기",
        "unit": "대",
        "labors": {
            "통신설비공": 0.13,
            "특별인부": 0.13
        },
        "category": "device",
        "page": 318,
        "keywords": [
            "압력센서 설치",
            "압력전송기"
        ]
    },
    {
        "code": "통신 9-3-2-3",
        "name": "변환기 설치",
        "spec": "압력전송기",
        "unit": "대",
        "labors": {
            "통신설비공": 0.11,
            "특별인부": 0.11
        },
        "category": "device",
        "page": 318,
        "keywords": [
            "변환기 설치",
            "압력전송기"
        ]
    },
    {
        "code": "통신 9-3-2-3",
        "name": "시험",
        "spec": "압력전송기",
        "unit": "식",
        "labors": {
            "통신설비공": 0.07,
            "특별인부": 0.07
        },
        "category": "device",
        "page": 318,
        "keywords": [
            "시험",
            "압력전송기"
        ]
    },
    {
        "code": "통신 9-3-3-1",
        "name": "기기 설치",
        "spec": "탁도계",
        "unit": "대",
        "labors": {
            "통신설비공": 0.11,
            "특별인부": 0.11
        },
        "category": "device",
        "page": 319,
        "keywords": [
            "기기 설치",
            "탁도계"
        ]
    },
    {
        "code": "통신 9-3-3-1",
        "name": "배관 연결",
        "spec": "탁도계",
        "unit": "대",
        "labors": {
            "통신설비공": 0.22,
            "특별인부": 0.22
        },
        "category": "device",
        "page": 319,
        "keywords": [
            "배관 연결",
            "탁도계"
        ]
    },
    {
        "code": "통신 9-3-3-1",
        "name": "시험",
        "spec": "탁도계",
        "unit": "식",
        "labors": {
            "통신설비공": 0.09,
            "특별인부": 0.09
        },
        "category": "device",
        "page": 319,
        "keywords": [
            "시험",
            "탁도계"
        ]
    },
    {
        "code": "통신 9-3-3-2",
        "name": "기기 설치",
        "spec": "전기전도도계",
        "unit": "대",
        "labors": {
            "통신설비공": 0.19,
            "특별인부": 0.19
        },
        "category": "device",
        "page": 319,
        "keywords": [
            "기기 설치",
            "전기전도도계"
        ]
    },
    {
        "code": "통신 9-3-3-2",
        "name": "배관 연결",
        "spec": "전기전도도계",
        "unit": "대",
        "labors": {
            "통신설비공": 0.19,
            "특별인부": 0.19
        },
        "category": "device",
        "page": 319,
        "keywords": [
            "배관 연결",
            "전기전도도계"
        ]
    },
    {
        "code": "통신 9-3-3-2",
        "name": "시험",
        "spec": "전기전도도계",
        "unit": "식",
        "labors": {
            "통신설비공": 0.08,
            "특별인부": 0.08
        },
        "category": "device",
        "page": 319,
        "keywords": [
            "시험",
            "전기전도도계"
        ]
    },
    {
        "code": "통신 9-3-3-3",
        "name": "기기 설치",
        "spec": "잔류염소계",
        "unit": "대",
        "labors": {
            "통신설비공": 0.23,
            "특별인부": 0.23
        },
        "category": "device",
        "page": 319,
        "keywords": [
            "기기 설치",
            "잔류염소계"
        ]
    },
    {
        "code": "통신 9-3-3-3",
        "name": "배관 연결",
        "spec": "잔류염소계",
        "unit": "대",
        "labors": {
            "통신설비공": 0.14,
            "특별인부": 0.14
        },
        "category": "device",
        "page": 319,
        "keywords": [
            "배관 연결",
            "잔류염소계"
        ]
    },
    {
        "code": "통신 9-3-3-3",
        "name": "시험",
        "spec": "잔류염소계",
        "unit": "식",
        "labors": {
            "통신설비공": 0.07,
            "특별인부": 0.07
        },
        "category": "device",
        "page": 319,
        "keywords": [
            "시험",
            "잔류염소계"
        ]
    },
    {
        "code": "통신 9-3-3-4",
        "name": "기기 설치",
        "spec": "수소이온농도계(pH계)",
        "unit": "대",
        "labors": {
            "통신설비공": 0.34,
            "특별인부": 0.34
        },
        "category": "device",
        "page": 320,
        "keywords": [
            "기기 설치",
            "수소이온농도계(pH계)"
        ]
    },
    {
        "code": "통신 9-3-3-4",
        "name": "배관 연결",
        "spec": "수소이온농도계(pH계)",
        "unit": "대",
        "labors": {
            "통신설비공": 0.18,
            "특별인부": 0.18
        },
        "category": "device",
        "page": 320,
        "keywords": [
            "배관 연결",
            "수소이온농도계(pH계)"
        ]
    },
    {
        "code": "통신 9-3-3-4",
        "name": "시험",
        "spec": "수소이온농도계(pH계)",
        "unit": "식",
        "labors": {
            "통신설비공": 0.06,
            "특별인부": 0.06
        },
        "category": "device",
        "page": 320,
        "keywords": [
            "시험",
            "수소이온농도계(pH계)"
        ]
    },
    {
        "code": "통신 9-3-3-5",
        "name": "수질계측기용 수조설치",
        "spec": "수질계측기용 수조",
        "unit": "대",
        "labors": {
            "통신설비공": 0.34,
            "특별인부": 0.34
        },
        "category": "device",
        "page": 320,
        "keywords": [
            "수질계측기용 수조설치",
            "수질계측기용 수조"
        ]
    },
    {
        "code": "통신 9-3-3-6",
        "name": "기기 설치",
        "spec": "알칼리도계",
        "unit": "대",
        "labors": {
            "통신설비공": 0.16,
            "특별인부": 0.16
        },
        "category": "device",
        "page": 321,
        "keywords": [
            "기기 설치",
            "알칼리도계"
        ]
    },
    {
        "code": "통신 9-3-3-6",
        "name": "배관 연결",
        "spec": "알칼리도계",
        "unit": "대",
        "labors": {
            "통신설비공": 0.15,
            "특별인부": 0.15
        },
        "category": "device",
        "page": 321,
        "keywords": [
            "배관 연결",
            "알칼리도계"
        ]
    },
    {
        "code": "통신 9-3-3-6",
        "name": "시험",
        "spec": "알칼리도계",
        "unit": "식",
        "labors": {
            "통신설비공": 0.1,
            "특별인부": 0.1
        },
        "category": "device",
        "page": 321,
        "keywords": [
            "시험",
            "알칼리도계"
        ]
    },
    {
        "code": "통신 9-3-3-7",
        "name": "계측기부",
        "spec": "망간계측기",
        "unit": "대",
        "labors": {
            "통신설비공": 0.12,
            "특별인부": 0.12
        },
        "category": "device",
        "page": 321,
        "keywords": [
            "계측기부",
            "망간계측기"
        ]
    },
    {
        "code": "통신 9-3-3-7",
        "name": "필터부",
        "spec": "망간계측기",
        "unit": "대",
        "labors": {
            "통신설비공": 0.18,
            "특별인부": 0.18
        },
        "category": "device",
        "page": 321,
        "keywords": [
            "필터부",
            "망간계측기"
        ]
    },
    {
        "code": "통신 9-3-3-7",
        "name": "배관 연결",
        "spec": "망간계측기",
        "unit": "대",
        "labors": {
            "통신설비공": 0.22,
            "특별인부": 0.22
        },
        "category": "device",
        "page": 321,
        "keywords": [
            "배관 연결",
            "망간계측기"
        ]
    },
    {
        "code": "통신 9-3-3-7",
        "name": "시험",
        "spec": "망간계측기",
        "unit": "식",
        "labors": {
            "통신설비공": 0.17,
            "특별인부": 0.17
        },
        "category": "device",
        "page": 321,
        "keywords": [
            "시험",
            "망간계측기"
        ]
    },
    {
        "code": "통신 9-3-3-8",
        "name": "검출부 센서",
        "spec": "다항목 수질측정장치",
        "unit": "대",
        "labors": {
            "통신설비공": 0.22,
            "특별인부": 0.22
        },
        "category": "device",
        "page": 322,
        "keywords": [
            "검출부 센서",
            "다항목 수질측정장치"
        ]
    },
    {
        "code": "통신 9-3-3-8",
        "name": "센서케이블",
        "spec": "다항목 수질측정장치",
        "unit": "식",
        "labors": {
            "통신설비공": 0.11,
            "특별인부": 0.11
        },
        "category": "device",
        "page": 322,
        "keywords": [
            "센서케이블",
            "다항목 수질측정장치"
        ]
    },
    {
        "code": "통신 9-3-3-8",
        "name": "수질 데이터수집장치",
        "spec": "다항목 수질측정장치",
        "unit": "대",
        "labors": {
            "통신설비공": 0.13,
            "특별인부": 0.13
        },
        "category": "device",
        "page": 322,
        "keywords": [
            "수질 데이터수집장치",
            "다항목 수질측정장치"
        ]
    },
    {
        "code": "통신 9-3-5",
        "name": "W600×H2100×D600 이하",
        "spec": "지능형 물관리용 함체",
        "unit": "대",
        "labors": {
            "통신설비공": 1.58,
            "특별인부": 1.58
        },
        "category": "device",
        "page": 323,
        "keywords": [
            "W600×H2100×D600 이하",
            "지능형 물관리용 함체"
        ]
    },
    {
        "code": "통신 9-3-5",
        "name": "제어함체 W900×H2100×D600 이하",
        "spec": "지능형 물관리용 함체",
        "unit": "대",
        "labors": {
            "통신설비공": 1.78,
            "특별인부": 1.78
        },
        "category": "device",
        "page": 323,
        "keywords": [
            "제어함체 W900×H2100×D600 이하",
            "지능형 물관리용 함체"
        ]
    },
    {
        "code": "통신 9-3-5",
        "name": "W1200×H2100×D600 이하",
        "spec": "지능형 물관리용 함체",
        "unit": "대",
        "labors": {
            "통신설비공": 1.98,
            "특별인부": 1.98
        },
        "category": "device",
        "page": 323,
        "keywords": [
            "W1200×H2100×D600 이하",
            "지능형 물관리용 함체"
        ]
    },
    {
        "code": "통신 9-3-5",
        "name": "W800×H1600×D900 이하",
        "spec": "지능형 물관리용 함체",
        "unit": "대",
        "labors": {
            "통신설비공": 1.07,
            "특별인부": 1.07
        },
        "category": "device",
        "page": 323,
        "keywords": [
            "W800×H1600×D900 이하",
            "지능형 물관리용 함체"
        ]
    },
    {
        "code": "통신 9-3-5",
        "name": "계기함체 W1000×H1600×D900 이하",
        "spec": "지능형 물관리용 함체",
        "unit": "대",
        "labors": {
            "통신설비공": 1.19,
            "특별인부": 1.19
        },
        "category": "device",
        "page": 323,
        "keywords": [
            "계기함체 W1000×H1600×D900 이하",
            "지능형 물관리용 함체"
        ]
    },
    {
        "code": "통신 9-3-5",
        "name": "기초패드 W1200×H2100×D600 이하",
        "spec": "지능형 물관리용 함체",
        "unit": "대",
        "labors": {
            "통신설비공": 1.28,
            "특별인부": 1.28
        },
        "category": "device",
        "page": 323,
        "keywords": [
            "기초패드 W1200×H2100×D600 이하",
            "지능형 물관리용 함체"
        ]
    },
    {
        "code": "통신 9-3-6",
        "name": "용존산소량계",
        "spec": "하수처리용 계측기",
        "unit": "대",
        "labors": {
            "통신설비공": 0.44,
            "특별인부": 0.44
        },
        "category": "device",
        "page": 323,
        "keywords": [
            "용존산소량계",
            "하수처리용 계측기"
        ]
    },
    {
        "code": "통신 9-3-6",
        "name": "부유물질농도계",
        "spec": "하수처리용 계측기",
        "unit": "대",
        "labors": {
            "통신설비공": 0.42,
            "특별인부": 0.42
        },
        "category": "device",
        "page": 323,
        "keywords": [
            "부유물질농도계",
            "하수처리용 계측기"
        ]
    },
    {
        "code": "통신 9-3-6",
        "name": "농도계",
        "spec": "하수처리용 계측기",
        "unit": "대",
        "labors": {
            "통신설비공": 0.46,
            "특별인부": 0.46
        },
        "category": "device",
        "page": 323,
        "keywords": [
            "농도계",
            "하수처리용 계측기"
        ]
    },
    {
        "code": "통신 9-4-2",
        "name": "조명컨버터 대",
        "spec": "디밍제어 시스템(Dimming Control System)",
        "unit": "-",
        "labors": {
            "통신설비공": 0.06,
            "특별인부": 0.06
        },
        "category": "device",
        "page": 324,
        "keywords": [
            "조명컨버터 대",
            "디밍제어 시스템(Dimming Control System)"
        ]
    },
    {
        "code": "통신 9-4-2",
        "name": "장비설치 동작감지센서 대",
        "spec": "디밍제어 시스템(Dimming Control System)",
        "unit": "-",
        "labors": {
            "통신설비공": 0.09,
            "특별인부": 0.09
        },
        "category": "device",
        "page": 324,
        "keywords": [
            "장비설치 동작감지센서 대",
            "디밍제어 시스템(Dimming Control System)"
        ]
    },
    {
        "code": "통신 9-4-2",
        "name": "조명제어기 동작감지센서 대",
        "spec": "디밍제어 시스템(Dimming Control System)",
        "unit": "-",
        "labors": {
            "통신설비공": 0.09,
            "특별인부": 0.09
        },
        "category": "device",
        "page": 324,
        "keywords": [
            "조명제어기 동작감지센서 대",
            "디밍제어 시스템(Dimming Control System)"
        ]
    },
    {
        "code": "통신 9-4-2",
        "name": "게이트웨이 동작감지센서 대",
        "spec": "디밍제어 시스템(Dimming Control System)",
        "unit": "-",
        "labors": {
            "통신설비공": 0.13,
            "특별인부": 0.13
        },
        "category": "device",
        "page": 324,
        "keywords": [
            "게이트웨이 동작감지센서 대",
            "디밍제어 시스템(Dimming Control System)"
        ]
    },
    {
        "code": "통신 9-4-2",
        "name": "S/W 설치 및 시험 식",
        "spec": "디밍제어 시스템(Dimming Control System)",
        "unit": "0.88",
        "labors": {
            "통신설비공": 0.88
        },
        "category": "device",
        "page": 324,
        "keywords": [
            "S/W 설치 및 시험 식",
            "디밍제어 시스템(Dimming Control System)"
        ]
    },
    {
        "code": "통신 9-4-4",
        "name": "본체대 -",
        "spec": "스마트 스쿨 시스템",
        "unit": "0.30",
        "labors": {
            "통신설비공": 0.3
        },
        "category": "device",
        "page": 325,
        "keywords": [
            "본체대 -",
            "스마트 스쿨 시스템"
        ]
    },
    {
        "code": "통신 9-4-4",
        "name": "브라켓 개 -",
        "spec": "스마트 스쿨 시스템",
        "unit": "0.44",
        "labors": {
            "통신설비공": 0.44
        },
        "category": "device",
        "page": 325,
        "keywords": [
            "브라켓 개 -",
            "스마트 스쿨 시스템"
        ]
    },
    {
        "code": "통신 9-4-4",
        "name": "Controller 식 0.70",
        "spec": "스마트 스쿨 시스템",
        "unit": "-",
        "labors": {
            "통신관련기사": 0.7,
            "통신설비공": 0.7
        },
        "category": "device",
        "page": 325,
        "keywords": [
            "Controller 식 0.70",
            "스마트 스쿨 시스템"
        ]
    },
    {
        "code": "통신 9-4-5",
        "name": "활동센서",
        "spec": "사회적 약자 안전관리 시스템",
        "unit": "대",
        "labors": {
            "통신설비공": 0.04
        },
        "category": "device",
        "page": 326,
        "keywords": [
            "활동센서",
            "사회적 약자 안전관리 시스템"
        ]
    },
    {
        "code": "통신 9-4-5",
        "name": "화재센서",
        "spec": "사회적 약자 안전관리 시스템",
        "unit": "대",
        "labors": {
            "통신설비공": 0.04
        },
        "category": "device",
        "page": 326,
        "keywords": [
            "화재센서",
            "사회적 약자 안전관리 시스템"
        ]
    },
    {
        "code": "통신 9-4-5",
        "name": "가스센서",
        "spec": "사회적 약자 안전관리 시스템",
        "unit": "대",
        "labors": {
            "통신설비공": 0.08
        },
        "category": "device",
        "page": 326,
        "keywords": [
            "가스센서",
            "사회적 약자 안전관리 시스템"
        ]
    },
    {
        "code": "통신 9-4-5",
        "name": "출입센서",
        "spec": "사회적 약자 안전관리 시스템",
        "unit": "대",
        "labors": {
            "통신설비공": 0.03
        },
        "category": "device",
        "page": 326,
        "keywords": [
            "출입센서",
            "사회적 약자 안전관리 시스템"
        ]
    },
    {
        "code": "통신 9-4-5",
        "name": "응급호출기",
        "spec": "사회적 약자 안전관리 시스템",
        "unit": "대",
        "labors": {
            "통신설비공": 0.01
        },
        "category": "device",
        "page": 326,
        "keywords": [
            "응급호출기",
            "사회적 약자 안전관리 시스템"
        ]
    },
    {
        "code": "통신 9-4-5",
        "name": "게이트웨이",
        "spec": "사회적 약자 안전관리 시스템",
        "unit": "대",
        "labors": {
            "통신설비공": 0.11
        },
        "category": "device",
        "page": 326,
        "keywords": [
            "게이트웨이",
            "사회적 약자 안전관리 시스템"
        ]
    },
    {
        "code": "통신 9-4-6-1",
        "name": "제어함체 설치 대",
        "spec": "보행신호 음성안내 보조장치",
        "unit": "0.28",
        "labors": {
            "통신설비공": 0.28
        },
        "category": "device",
        "page": 326,
        "keywords": [
            "제어함체 설치 대",
            "보행신호 음성안내 보조장치"
        ]
    },
    {
        "code": "통신 9-4-6-1",
        "name": "센서 Pole 설치 대",
        "spec": "보행신호 음성안내 보조장치",
        "unit": "-",
        "labors": {
            "통신설비공": 0.15,
            "특별인부": 0.15
        },
        "category": "device",
        "page": 326,
        "keywords": [
            "센서 Pole 설치 대",
            "보행신호 음성안내 보조장치"
        ]
    },
    {
        "code": "통신 9-4-6-1",
        "name": "종합시험 식",
        "spec": "보행신호 음성안내 보조장치",
        "unit": "0.67",
        "labors": {
            "통신관련기사": 0.67
        },
        "category": "device",
        "page": 326,
        "keywords": [
            "종합시험 식",
            "보행신호 음성안내 보조장치"
        ]
    },
    {
        "code": "통신 9-4-8-1",
        "name": "접수대 콘솔 대",
        "spec": "종합접수대 시스템",
        "unit": "-",
        "labors": {
            "통신설비공": 0.71,
            "특별인부": 0.35
        },
        "category": "device",
        "page": 332,
        "keywords": [
            "접수대 콘솔 대",
            "종합접수대 시스템"
        ]
    },
    {
        "code": "통신 9-4-8-1",
        "name": "주제어장치 콘솔 대",
        "spec": "종합접수대 시스템",
        "unit": "0.52",
        "labors": {
            "통신설비공": 0.52
        },
        "category": "device",
        "page": 332,
        "keywords": [
            "주제어장치 콘솔 대",
            "종합접수대 시스템"
        ]
    },
    {
        "code": "통신 9-4-8-1",
        "name": "제어부 헤드셋제어장치 대",
        "spec": "종합접수대 시스템",
        "unit": "0.44",
        "labors": {
            "통신설비공": 0.44
        },
        "category": "device",
        "page": 332,
        "keywords": [
            "제어부 헤드셋제어장치 대",
            "종합접수대 시스템"
        ]
    },
    {
        "code": "통신 9-4-8-1",
        "name": "무선제어장치 헤드셋제어장치 대",
        "spec": "종합접수대 시스템",
        "unit": "0.32",
        "labors": {
            "통신설비공": 0.32
        },
        "category": "device",
        "page": 332,
        "keywords": [
            "무선제어장치 헤드셋제어장치 대",
            "종합접수대 시스템"
        ]
    },
    {
        "code": "통신 9-4-8-1",
        "name": "전원부 전원제어장치 대",
        "spec": "종합접수대 시스템",
        "unit": "0.41",
        "labors": {
            "통신설비공": 0.41
        },
        "category": "device",
        "page": 332,
        "keywords": [
            "전원부 전원제어장치 대",
            "종합접수대 시스템"
        ]
    },
    {
        "code": "통신 9-4-8-1",
        "name": "출력부 모니터스피커 대",
        "spec": "종합접수대 시스템",
        "unit": "0.08",
        "labors": {
            "통신설비공": 0.08
        },
        "category": "device",
        "page": 332,
        "keywords": [
            "출력부 모니터스피커 대",
            "종합접수대 시스템"
        ]
    },
    {
        "code": "통신 9-4-8-1",
        "name": "방송 방송지령장치 대",
        "spec": "종합접수대 시스템",
        "unit": "0.24",
        "labors": {
            "통신설비공": 0.24
        },
        "category": "device",
        "page": 332,
        "keywords": [
            "방송 방송지령장치 대",
            "종합접수대 시스템"
        ]
    },
    {
        "code": "통신 9-4-8-1",
        "name": "보이스제어장치 방송지령장치 대",
        "spec": "종합접수대 시스템",
        "unit": "0.08",
        "labors": {
            "통신설비공": 0.08
        },
        "category": "device",
        "page": 332,
        "keywords": [
            "보이스제어장치 방송지령장치 대",
            "종합접수대 시스템"
        ]
    },
    {
        "code": "통신 9-4-8-1",
        "name": "기타 경광등 대",
        "spec": "종합접수대 시스템",
        "unit": "-",
        "labors": {
            "통신설비공": 0.04
        },
        "category": "device",
        "page": 332,
        "keywords": [
            "기타 경광등 대",
            "종합접수대 시스템"
        ]
    },
    {
        "code": "통신 9-4-8-1",
        "name": "스위치박스 경광등 대",
        "spec": "종합접수대 시스템",
        "unit": "-",
        "labors": {
            "통신설비공": 0.04
        },
        "category": "device",
        "page": 332,
        "keywords": [
            "스위치박스 경광등 대",
            "종합접수대 시스템"
        ]
    },
    {
        "code": "통신 9-4-8-3",
        "name": "안테나 차량탑재형 0.46",
        "spec": "무선원격기지국",
        "unit": "0.27",
        "labors": {
            "통신설비공": 0.27
        },
        "category": "device",
        "page": 333,
        "keywords": [
            "안테나 차량탑재형 0.46",
            "무선원격기지국"
        ]
    },
    {
        "code": "통신 9-4-8-3",
        "name": "옥외형 차량탑재형 0.46",
        "spec": "무선원격기지국",
        "unit": "0.38",
        "labors": {
            "통신설비공": 0.38
        },
        "category": "device",
        "page": 333,
        "keywords": [
            "옥외형 차량탑재형 0.46",
            "무선원격기지국"
        ]
    },
    {
        "code": "통신 9-4-8-3",
        "name": "함체 차량탑재형 0.46",
        "spec": "무선원격기지국",
        "unit": "0.40",
        "labors": {
            "보통인부": 0.8
        },
        "category": "device",
        "page": 333,
        "keywords": [
            "함체 차량탑재형 0.46",
            "무선원격기지국"
        ]
    },
    {
        "code": "통신 9-4-8-4",
        "name": "방송원격단말장치 대",
        "spec": "일제방송지령시스템",
        "unit": "0.36",
        "labors": {
            "통신설비공": 0.36
        },
        "category": "device",
        "page": 333,
        "keywords": [
            "방송원격단말장치 대",
            "일제방송지령시스템"
        ]
    },
    {
        "code": "통신 9-4-8-4",
        "name": "실링(10W) 대",
        "spec": "일제방송지령시스템",
        "unit": "-",
        "labors": {
            "통신설비공": 0.32
        },
        "category": "device",
        "page": 333,
        "keywords": [
            "실링(10W) 대",
            "일제방송지령시스템"
        ]
    },
    {
        "code": "통신 9-4-8-4",
        "name": "스피커 벽부형(10W) 대",
        "spec": "일제방송지령시스템",
        "unit": "-",
        "labors": {
            "통신설비공": 0.19
        },
        "category": "device",
        "page": 333,
        "keywords": [
            "스피커 벽부형(10W) 대",
            "일제방송지령시스템"
        ]
    },
    {
        "code": "통신 9-4-8-4",
        "name": "혼 벽부형(10W) 대",
        "spec": "일제방송지령시스템",
        "unit": "-",
        "labors": {
            "통신설비공": 0.27,
            "특별인부": 0.27
        },
        "category": "device",
        "page": 333,
        "keywords": [
            "혼 벽부형(10W) 대",
            "일제방송지령시스템"
        ]
    },
    {
        "code": "통신 9-4-9",
        "name": "환경센서 대",
        "spec": "스마트 팜(Farm)",
        "unit": "0.10",
        "labors": {
            "통신설비공": 0.1
        },
        "category": "device",
        "page": 334,
        "keywords": [
            "환경센서 대",
            "스마트 팜(Farm)"
        ]
    },
    {
        "code": "통신 9-4-9",
        "name": "개폐기 대",
        "spec": "스마트 팜(Farm)",
        "unit": "0.09",
        "labors": {
            "통신설비공": 0.09
        },
        "category": "device",
        "page": 334,
        "keywords": [
            "개폐기 대",
            "스마트 팜(Farm)"
        ]
    },
    {
        "code": "통신 9-4-9",
        "name": "제어함체 대",
        "spec": "스마트 팜(Farm)",
        "unit": "0.86",
        "labors": {
            "특별인부": 0.86
        },
        "category": "device",
        "page": 334,
        "keywords": [
            "제어함체 대",
            "스마트 팜(Farm)"
        ]
    },
    {
        "code": "통신 9-4-10",
        "name": "수질측정기 대",
        "spec": "스마트 피쉬 팜(Fish Farm)",
        "unit": "0.58",
        "labors": {
            "통신설비공": 0.58
        },
        "category": "device",
        "page": 334,
        "keywords": [
            "수질측정기 대",
            "스마트 피쉬 팜(Fish Farm)"
        ]
    },
    {
        "code": "통신 9-4-10",
        "name": "사료급이기 대",
        "spec": "스마트 피쉬 팜(Fish Farm)",
        "unit": "0.52",
        "labors": {
            "통신설비공": 0.52
        },
        "category": "device",
        "page": 334,
        "keywords": [
            "사료급이기 대",
            "스마트 피쉬 팜(Fish Farm)"
        ]
    },
    {
        "code": "통신 9-4-10",
        "name": "종합시험 식",
        "spec": "스마트 피쉬 팜(Fish Farm)",
        "unit": "1.25",
        "labors": {
            "특별인부": 1.25
        },
        "category": "device",
        "page": 334,
        "keywords": [
            "종합시험 식",
            "스마트 피쉬 팜(Fish Farm)"
        ]
    },
    {
        "code": "통신 9-4-12",
        "name": "폴타입 센서",
        "spec": "지능형 인원계수시스템",
        "unit": "대",
        "labors": {
            "통신설비공": 0.15
        },
        "category": "device",
        "page": 335,
        "keywords": [
            "폴타입 센서",
            "지능형 인원계수시스템"
        ]
    },
    {
        "code": "통신 9-4-12",
        "name": "제어함체",
        "spec": "지능형 인원계수시스템",
        "unit": "대",
        "labors": {
            "통신관련산업기사": 0.2,
            "통신설비공": 0.41
        },
        "category": "device",
        "page": 335,
        "keywords": [
            "제어함체",
            "지능형 인원계수시스템"
        ]
    },
    {
        "code": "통신 9-4-12",
        "name": "게이트타입 일체형",
        "spec": "지능형 인원계수시스템",
        "unit": "대",
        "labors": {
            "통신관련산업기사": 1.48,
            "통신설비공": 1.48
        },
        "category": "device",
        "page": 335,
        "keywords": [
            "게이트타입 일체형",
            "지능형 인원계수시스템"
        ]
    },
    {
        "code": "통신 9-4-13",
        "name": "감지기",
        "spec": "지능형 이상음원 시스템",
        "unit": "대",
        "labors": {
            "통신설비공": 0.21,
            "특별인부": 0.21
        },
        "category": "device",
        "page": 335,
        "keywords": [
            "감지기",
            "지능형 이상음원 시스템"
        ]
    },
    {
        "code": "통신 9-4-13",
        "name": "비상벨",
        "spec": "지능형 이상음원 시스템",
        "unit": "대",
        "labors": {
            "통신설비공": 0.16,
            "특별인부": 0.16
        },
        "category": "device",
        "page": 335,
        "keywords": [
            "비상벨",
            "지능형 이상음원 시스템"
        ]
    },
    {
        "code": "통신 9-4-13",
        "name": "경광등",
        "spec": "지능형 이상음원 시스템",
        "unit": "대",
        "labors": {
            "통신설비공": 0.13,
            "특별인부": 0.13
        },
        "category": "device",
        "page": 335,
        "keywords": [
            "경광등",
            "지능형 이상음원 시스템"
        ]
    },
    {
        "code": "통신 9-4-14",
        "name": "상수도 누수감지설비",
        "spec": "IoT 기반 지하공간 안전관리 시스템",
        "unit": "개",
        "labors": {
            "통신설비공": 0.02,
            "보통인부": 0.02
        },
        "category": "device",
        "page": 335,
        "keywords": [
            "상수도 누수감지설비",
            "IoT 기반 지하공간 안전관리 시스템"
        ]
    },
    {
        "code": "통신 9-4-15",
        "name": "LED조명",
        "spec": "가시광통신(Li-Fi : Light-Fidelity) 설비",
        "unit": "대",
        "labors": {
            "통신관련산업기사": 0.07,
            "통신설비공": 0.07
        },
        "category": "device",
        "page": 336,
        "keywords": [
            "LED조명",
            "가시광통신(Li-Fi : Light-Fidelity) 설비"
        ]
    },
    {
        "code": "통신 9-4-15",
        "name": "가시광 조명컨버터",
        "spec": "가시광통신(Li-Fi : Light-Fidelity) 설비",
        "unit": "개",
        "labors": {
            "통신관련산업기사": 0.04,
            "통신설비공": 0.04
        },
        "category": "device",
        "page": 336,
        "keywords": [
            "가시광 조명컨버터",
            "가시광통신(Li-Fi : Light-Fidelity) 설비"
        ]
    },
    {
        "code": "통신 9-4-15",
        "name": "가시광 송신기",
        "spec": "가시광통신(Li-Fi : Light-Fidelity) 설비",
        "unit": "개",
        "labors": {
            "통신관련산업기사": 0.05,
            "통신설비공": 0.05
        },
        "category": "device",
        "page": 336,
        "keywords": [
            "가시광 송신기",
            "가시광통신(Li-Fi : Light-Fidelity) 설비"
        ]
    },
    {
        "code": "통신 9-4-18",
        "name": "로고젝터",
        "spec": "로고젝터",
        "unit": "대",
        "labors": {
            "통신설비공": 0.36
        },
        "category": "device",
        "page": 337,
        "keywords": [
            "로고젝터",
            "로고젝터"
        ]
    },
    {
        "code": "통신 9-4-19",
        "name": "LTE모뎀 대",
        "spec": "전기차 충전소용 LTE모뎀",
        "unit": "0.22",
        "labors": {
            "통신설비공": 0.22
        },
        "category": "device",
        "page": 338,
        "keywords": [
            "LTE모뎀 대",
            "전기차 충전소용 LTE모뎀"
        ]
    },
    {
        "code": "통신 9-4-20-2",
        "name": "비상벨 대",
        "spec": "통화겸용 비상벨",
        "unit": "0.09",
        "labors": {
            "통신설비공": 0.09
        },
        "category": "device",
        "page": 339,
        "keywords": [
            "비상벨 대",
            "통화겸용 비상벨"
        ]
    },
    {
        "code": "통신 9-4-20-2",
        "name": "제어기 대",
        "spec": "통화겸용 비상벨",
        "unit": "0.11",
        "labors": {
            "통신설비공": 0.11
        },
        "category": "device",
        "page": 339,
        "keywords": [
            "제어기 대",
            "통화겸용 비상벨"
        ]
    },
    {
        "code": "통신 9-4-20-3",
        "name": "자동수신단말장치",
        "spec": "재난 예·경보시스템",
        "unit": "대",
        "labors": {
            "통신설비공": 0.41,
            "특별인부": 0.41
        },
        "category": "device",
        "page": 339,
        "keywords": [
            "자동수신단말장치",
            "재난 예·경보시스템"
        ]
    },
    {
        "code": "통신 9-4-20-3",
        "name": "폴(Pole)",
        "spec": "재난 예·경보시스템",
        "unit": "대",
        "labors": {
            "통신설비공": 1.03,
            "특별인부": 1.03
        },
        "category": "device",
        "page": 339,
        "keywords": [
            "폴(Pole)",
            "재난 예·경보시스템"
        ]
    },
    {
        "code": "통신 9-4-20-3",
        "name": "혼스피커",
        "spec": "재난 예·경보시스템",
        "unit": "대",
        "labors": {
            "통신설비공": 0.19,
            "특별인부": 0.19
        },
        "category": "device",
        "page": 339,
        "keywords": [
            "혼스피커",
            "재난 예·경보시스템"
        ]
    },
    {
        "code": "통신 9-4-20-4",
        "name": "우드",
        "spec": "지진대비 보호설비",
        "unit": "㎡",
        "labors": {
            "통신설비공": 0.23,
            "보통인부": 0.23
        },
        "category": "device",
        "page": 340,
        "keywords": [
            "우드",
            "지진대비 보호설비"
        ]
    },
    {
        "code": "통신 9-4-20-4",
        "name": "이중마루 스틸",
        "spec": "지진대비 보호설비",
        "unit": "㎡",
        "labors": {
            "통신설비공": 0.26,
            "보통인부": 0.26
        },
        "category": "device",
        "page": 340,
        "keywords": [
            "이중마루 스틸",
            "지진대비 보호설비"
        ]
    },
    {
        "code": "통신 9-4-20-4",
        "name": "(면진 또는 내진) 우드스틸",
        "spec": "지진대비 보호설비",
        "unit": "㎡",
        "labors": {
            "통신설비공": 0.27,
            "보통인부": 0.27
        },
        "category": "device",
        "page": 340,
        "keywords": [
            "(면진 또는 내진) 우드스틸",
            "지진대비 보호설비"
        ]
    },
    {
        "code": "통신 9-4-20-4",
        "name": "스틸콘크리트",
        "spec": "지진대비 보호설비",
        "unit": "㎡",
        "labors": {
            "통신설비공": 0.3,
            "보통인부": 0.3
        },
        "category": "device",
        "page": 340,
        "keywords": [
            "스틸콘크리트",
            "지진대비 보호설비"
        ]
    },
    {
        "code": "통신 9-4-20-4",
        "name": "랙",
        "spec": "지진대비 보호설비",
        "unit": "대",
        "labors": {
            "통신설비공": 0.3
        },
        "category": "device",
        "page": 340,
        "keywords": [
            "랙",
            "지진대비 보호설비"
        ]
    },
    {
        "code": "통신 9-4-20-4",
        "name": "가대",
        "spec": "지진대비 보호설비",
        "unit": "개",
        "labors": {
            "통신설비공": 0.55
        },
        "category": "device",
        "page": 340,
        "keywords": [
            "가대",
            "지진대비 보호설비"
        ]
    },
    {
        "code": "통신 9-4-20-4",
        "name": "면진테이블",
        "spec": "지진대비 보호설비",
        "unit": "대",
        "labors": {
            "통신설비공": 0.19,
            "보통인부": 0.13
        },
        "category": "device",
        "page": 340,
        "keywords": [
            "면진테이블",
            "지진대비 보호설비"
        ]
    },
    {
        "code": "통신 9-4-20-4",
        "name": "내진 버팀대 Φ 13 이하",
        "spec": "지진대비 보호설비",
        "unit": "세트",
        "labors": {
            "통신설비공": 0.16
        },
        "category": "device",
        "page": 340,
        "keywords": [
            "내진 버팀대 Φ 13 이하",
            "지진대비 보호설비"
        ]
    },
    {
        "code": "통신 9-4-20-4",
        "name": "Φ 13 이하",
        "spec": "지진대비 보호설비",
        "unit": "개",
        "labors": {
            "통신설비공": 0.1
        },
        "category": "device",
        "page": 340,
        "keywords": [
            "Φ 13 이하",
            "지진대비 보호설비"
        ]
    },
    {
        "code": "통신 9-4-20-4",
        "name": "Φ 14~15 이하",
        "spec": "지진대비 보호설비",
        "unit": "개",
        "labors": {
            "통신설비공": 0.18
        },
        "category": "device",
        "page": 340,
        "keywords": [
            "Φ 14~15 이하",
            "지진대비 보호설비"
        ]
    },
    {
        "code": "통신 9-4-20-5",
        "name": "민방위경보단말장치",
        "spec": "민방위 경보통제 시스템",
        "unit": "대",
        "labors": {
            "통신관련산업기사": 0.66,
            "통신설비공": 0.66
        },
        "category": "device",
        "page": 341,
        "keywords": [
            "민방위경보단말장치",
            "민방위 경보통제 시스템"
        ]
    },
    {
        "code": "통신 9-4-20-5",
        "name": "폴(Pole)",
        "spec": "민방위 경보통제 시스템",
        "unit": "대",
        "labors": {
            "통신관련산업기사": 0.65,
            "통신설비공": 0.65
        },
        "category": "device",
        "page": 341,
        "keywords": [
            "폴(Pole)",
            "민방위 경보통제 시스템"
        ]
    },
    {
        "code": "통신 9-4-20-5",
        "name": "혼 스피커",
        "spec": "민방위 경보통제 시스템",
        "unit": "대",
        "labors": {
            "통신관련산업기사": 0.11,
            "통신설비공": 0.11
        },
        "category": "device",
        "page": 341,
        "keywords": [
            "혼 스피커",
            "민방위 경보통제 시스템"
        ]
    },
    {
        "code": "통신 9-4-20-7",
        "name": "통화장치 주장치",
        "spec": "공중화장실 무선통신 비상벨 시스템",
        "unit": "개",
        "labors": {
            "통신설비공": 0.26
        },
        "category": "device",
        "page": 342,
        "keywords": [
            "통화장치 주장치",
            "공중화장실 무선통신 비상벨 시스템"
        ]
    },
    {
        "code": "통신 9-4-20-7",
        "name": "보조장치",
        "spec": "공중화장실 무선통신 비상벨 시스템",
        "unit": "개",
        "labors": {
            "통신설비공": 0.12
        },
        "category": "device",
        "page": 342,
        "keywords": [
            "보조장치",
            "공중화장실 무선통신 비상벨 시스템"
        ]
    },
    {
        "code": "통신 9-4-20-7",
        "name": "무선비상벨",
        "spec": "공중화장실 무선통신 비상벨 시스템",
        "unit": "개",
        "labors": {
            "통신설비공": 0.02
        },
        "category": "device",
        "page": 342,
        "keywords": [
            "무선비상벨",
            "공중화장실 무선통신 비상벨 시스템"
        ]
    },
    {
        "code": "통신 9-4-20-7",
        "name": "경광등",
        "spec": "공중화장실 무선통신 비상벨 시스템",
        "unit": "개",
        "labors": {
            "통신설비공": 0.14
        },
        "category": "device",
        "page": 342,
        "keywords": [
            "경광등",
            "공중화장실 무선통신 비상벨 시스템"
        ]
    },
    {
        "code": "통신 9-4-23",
        "name": "중계기 함체",
        "spec": "스마트 비탈면 경보시스템",
        "unit": "대",
        "labors": {
            "통신관련산업기사": 0.47,
            "통신설비공": 0.47
        },
        "category": "device",
        "page": 344,
        "keywords": [
            "중계기 함체",
            "스마트 비탈면 경보시스템"
        ]
    },
    {
        "code": "통신 9-4-23",
        "name": "센서 함체",
        "spec": "스마트 비탈면 경보시스템",
        "unit": "대",
        "labors": {
            "통신관련산업기사": 0.27,
            "통신설비공": 0.27
        },
        "category": "device",
        "page": 344,
        "keywords": [
            "센서 함체",
            "스마트 비탈면 경보시스템"
        ]
    },
    {
        "code": "통신 9-4-23",
        "name": "센서",
        "spec": "스마트 비탈면 경보시스템",
        "unit": "개",
        "labors": {
            "통신관련산업기사": 0.07,
            "통신설비공": 0.07
        },
        "category": "device",
        "page": 344,
        "keywords": [
            "센서",
            "스마트 비탈면 경보시스템"
        ]
    },
    {
        "code": "통신 9-4-25",
        "name": "원격데이터수집 단말장치",
        "spec": "신재생에너지 원격데이터수집 단말장치(RTU)",
        "unit": "대",
        "labors": {
            "통신설비공": 0.16
        },
        "category": "device",
        "page": 344,
        "keywords": [
            "원격데이터수집 단말장치",
            "신재생에너지 원격데이터수집 단말장치(RTU)"
        ]
    },
    {
        "code": "통신 9-4-27",
        "name": "도난방지 안테나",
        "spec": "스마트 도난방지 시스템",
        "unit": "대",
        "labors": {
            "통신설비공": 0.18,
            "통신케이블공": 0.18
        },
        "category": "device",
        "page": 345,
        "keywords": [
            "도난방지 안테나",
            "스마트 도난방지 시스템"
        ]
    },
    {
        "code": "통신 9-4-29",
        "name": "일반형",
        "spec": "지능형 카메라 시스템",
        "unit": "대",
        "labors": {
            "통신설비공": 0.24,
            "특별인부": 0.24
        },
        "category": "device",
        "page": 347,
        "keywords": [
            "일반형",
            "지능형 카메라 시스템"
        ]
    },
    {
        "code": "통신 9-4-29",
        "name": "네트워크(IP) 돔(Dome)형",
        "spec": "지능형 카메라 시스템",
        "unit": "대",
        "labors": {
            "통신설비공": 0.18,
            "특별인부": 0.18
        },
        "category": "device",
        "page": 347,
        "keywords": [
            "네트워크(IP) 돔(Dome)형",
            "지능형 카메라 시스템"
        ]
    },
    {
        "code": "통신 9-4-29",
        "name": "스피드 돔형",
        "spec": "지능형 카메라 시스템",
        "unit": "대",
        "labors": {
            "통신설비공": 0.29,
            "특별인부": 0.29
        },
        "category": "device",
        "page": 347,
        "keywords": [
            "스피드 돔형",
            "지능형 카메라 시스템"
        ]
    },
    {
        "code": "통신 9-4-29",
        "name": "브라켓 -",
        "spec": "지능형 카메라 시스템",
        "unit": "대",
        "labors": {
            "통신설비공": 0.13,
            "특별인부": 0.13
        },
        "category": "device",
        "page": 347,
        "keywords": [
            "브라켓 -",
            "지능형 카메라 시스템"
        ]
    },
    {
        "code": "통신 9-4-30-1",
        "name": "유인 배출신고 시스템 대",
        "spec": "대형 폐기물 배출신고 시스템",
        "unit": "0.18",
        "labors": {
            "통신설비공": 0.18
        },
        "category": "device",
        "page": 347,
        "keywords": [
            "유인 배출신고 시스템 대",
            "대형 폐기물 배출신고 시스템"
        ]
    },
    {
        "code": "통신 9-4-30-1",
        "name": "무인 배출신고 시스템 대",
        "spec": "대형 폐기물 배출신고 시스템",
        "unit": "0.30",
        "labors": {
            "통신설비공": 0.3
        },
        "category": "device",
        "page": 347,
        "keywords": [
            "무인 배출신고 시스템 대",
            "대형 폐기물 배출신고 시스템"
        ]
    },
    {
        "code": "통신 9-4-30-2",
        "name": "음식물 쓰레기 개별계량장비",
        "spec": "음식물 쓰레기 개별계량장비",
        "unit": "대",
        "labors": {
            "통신설비공": 0.31
        },
        "category": "device",
        "page": 348,
        "keywords": [
            "음식물 쓰레기 개별계량장비",
            "음식물 쓰레기 개별계량장비"
        ]
    },
    {
        "code": "통신 9-4-34",
        "name": "유류 센서 대",
        "spec": "스마트 유류재고 관리 시스템",
        "unit": "-",
        "labors": {
            "통신설비공": 0.21,
            "특별인부": 0.21
        },
        "category": "device",
        "page": 349,
        "keywords": [
            "유류 센서 대",
            "스마트 유류재고 관리 시스템"
        ]
    },
    {
        "code": "통신 9-4-34",
        "name": "제어기 센서 대",
        "spec": "스마트 유류재고 관리 시스템",
        "unit": "-",
        "labors": {
            "통신설비공": 0.12,
            "특별인부": 0.12
        },
        "category": "device",
        "page": 349,
        "keywords": [
            "제어기 센서 대",
            "스마트 유류재고 관리 시스템"
        ]
    },
    {
        "code": "통신 9-4-34",
        "name": "시험 식",
        "spec": "스마트 유류재고 관리 시스템",
        "unit": "0.15",
        "labors": {
            "통신설비공": 0.15
        },
        "category": "device",
        "page": 349,
        "keywords": [
            "시험 식",
            "스마트 유류재고 관리 시스템"
        ]
    },
    {
        "code": "통신 9-4-35",
        "name": "스마트 수하물 저울 대",
        "spec": "스마트 수하물 저울 시스템",
        "unit": "0.30",
        "labors": {
            "통신설비공": 0.3
        },
        "category": "device",
        "page": 350,
        "keywords": [
            "스마트 수하물 저울 대",
            "스마트 수하물 저울 시스템"
        ]
    },
    {
        "code": "통신 9-4-36",
        "name": "감지 센서 개",
        "spec": "스마트 화장실 시스템",
        "unit": "0.05",
        "labors": {
            "통신설비공": 0.05
        },
        "category": "device",
        "page": 350,
        "keywords": [
            "감지 센서 개",
            "스마트 화장실 시스템"
        ]
    },
    {
        "code": "통신 9-4-36",
        "name": "LED 표시등 개",
        "spec": "스마트 화장실 시스템",
        "unit": "0.02",
        "labors": {
            "통신설비공": 0.02
        },
        "category": "device",
        "page": 350,
        "keywords": [
            "LED 표시등 개",
            "스마트 화장실 시스템"
        ]
    },
    {
        "code": "통신 9-4-36",
        "name": "중계기 대",
        "spec": "스마트 화장실 시스템",
        "unit": "0.31",
        "labors": {
            "통신설비공": 0.31
        },
        "category": "device",
        "page": 350,
        "keywords": [
            "중계기 대",
            "스마트 화장실 시스템"
        ]
    },
    {
        "code": "통신 9-4-37",
        "name": "설치 도서대출 반납부 대 0.28",
        "spec": "스마트 도서관 시스템",
        "unit": "0.28",
        "labors": {
            "통신설비공": 0.28
        },
        "category": "device",
        "page": 350,
        "keywords": [
            "설치 도서대출 반납부 대 0.28",
            "스마트 도서관 시스템"
        ]
    },
    {
        "code": "통신 9-4-37",
        "name": "도서 적재부 반납부 대 0.28",
        "spec": "스마트 도서관 시스템",
        "unit": "0.20",
        "labors": {
            "통신설비공": 0.2
        },
        "category": "device",
        "page": 350,
        "keywords": [
            "도서 적재부 반납부 대 0.28",
            "스마트 도서관 시스템"
        ]
    },
    {
        "code": "통신 9-4-37",
        "name": "시험 식 0.32",
        "spec": "스마트 도서관 시스템",
        "unit": "0.32",
        "labors": {
            "통신설비공": 0.32
        },
        "category": "device",
        "page": 350,
        "keywords": [
            "시험 식 0.32",
            "스마트 도서관 시스템"
        ]
    },
    {
        "code": "통신 9-4-38-1",
        "name": "센서케이블 포설",
        "spec": "자력(부착)식 케이블센서 감지 시스템",
        "unit": "10m",
        "labors": {
            "통신케이블공": 0.15
        },
        "category": "device",
        "page": 351,
        "keywords": [
            "센서케이블 포설",
            "자력(부착)식 케이블센서 감지 시스템"
        ]
    },
    {
        "code": "통신 9-4-38-1",
        "name": "함체 설치",
        "spec": "자력(부착)식 케이블센서 감지 시스템",
        "unit": "대",
        "labors": {
            "통신설비공": 0.63
        },
        "category": "device",
        "page": 351,
        "keywords": [
            "함체 설치",
            "자력(부착)식 케이블센서 감지 시스템"
        ]
    },
    {
        "code": "통신 9-4-38-1",
        "name": "시그널디텍터 설치",
        "spec": "자력(부착)식 케이블센서 감지 시스템",
        "unit": "세트",
        "labors": {
            "통신관련산업기사": 0.21,
            "통신설비공": 0.42
        },
        "category": "device",
        "page": 351,
        "keywords": [
            "시그널디텍터 설치",
            "자력(부착)식 케이블센서 감지 시스템"
        ]
    },
    {
        "code": "통신 9-4-38-1",
        "name": "경보수신반 설치",
        "spec": "자력(부착)식 케이블센서 감지 시스템",
        "unit": "대",
        "labors": {
            "통신관련산업기사": 0.3,
            "통신설비공": 0.7
        },
        "category": "device",
        "page": 351,
        "keywords": [
            "경보수신반 설치",
            "자력(부착)식 케이블센서 감지 시스템"
        ]
    },
    {
        "code": "통신 9-4-38-1",
        "name": "송․수신 유니트",
        "spec": "자력(부착)식 케이블센서 감지 시스템",
        "unit": "개",
        "labors": {
            "통신설비공": 0.02
        },
        "category": "device",
        "page": 351,
        "keywords": [
            "송․수신 유니트",
            "자력(부착)식 케이블센서 감지 시스템"
        ]
    },
    {
        "code": "통신 9-4-38-1",
        "name": "시험 구간시험",
        "spec": "자력(부착)식 케이블센서 감지 시스템",
        "unit": "구간",
        "labors": {
            "통신관련산업기사": 0.05,
            "통신설비공": 0.1
        },
        "category": "device",
        "page": 351,
        "keywords": [
            "시험 구간시험",
            "자력(부착)식 케이블센서 감지 시스템"
        ]
    },
    {
        "code": "통신 9-4-38-1",
        "name": "종합시험",
        "spec": "자력(부착)식 케이블센서 감지 시스템",
        "unit": "식",
        "labors": {
            "통신관련산업기사": 0.35,
            "통신설비공": 0.35
        },
        "category": "device",
        "page": 351,
        "keywords": [
            "종합시험",
            "자력(부착)식 케이블센서 감지 시스템"
        ]
    },
    {
        "code": "통신 9-4-38-2",
        "name": "앵커 개",
        "spec": "장력식 감지 시스템",
        "unit": "-",
        "labors": {
            "특별인부": 0.45,
            "보통인부": 0.45
        },
        "category": "device",
        "page": 352,
        "keywords": [
            "앵커 개",
            "장력식 감지 시스템"
        ]
    },
    {
        "code": "통신 9-4-38-2",
        "name": "포스트 설치 감지기, 개",
        "spec": "장력식 감지 시스템",
        "unit": "0.25",
        "labors": {
            "특별인부": 0.25
        },
        "category": "device",
        "page": 352,
        "keywords": [
            "포스트 설치 감지기, 개",
            "장력식 감지 시스템"
        ]
    },
    {
        "code": "통신 9-4-38-2",
        "name": "장력 와이어 포설 m",
        "spec": "장력식 감지 시스템",
        "unit": "-",
        "labors": {
            "특별인부": 0.02,
            "보통인부": 0.02
        },
        "category": "device",
        "page": 352,
        "keywords": [
            "장력 와이어 포설 m",
            "장력식 감지 시스템"
        ]
    },
    {
        "code": "통신 9-4-38-2",
        "name": "경보분석장치 설치 대",
        "spec": "장력식 감지 시스템",
        "unit": "0.29",
        "labors": {
            "특별인부": 0.29
        },
        "category": "device",
        "page": 352,
        "keywords": [
            "경보분석장치 설치 대",
            "장력식 감지 시스템"
        ]
    },
    {
        "code": "통신 9-4-38-2",
        "name": "시험 구간시험 구간",
        "spec": "장력식 감지 시스템",
        "unit": "0.20",
        "labors": {
            "통신설비공": 0.2
        },
        "category": "device",
        "page": 352,
        "keywords": [
            "시험 구간시험 구간",
            "장력식 감지 시스템"
        ]
    },
    {
        "code": "통신 9-4-38-2",
        "name": "종합시험 식",
        "spec": "장력식 감지 시스템",
        "unit": "0.46",
        "labors": {
            "통신설비공": 0.46
        },
        "category": "device",
        "page": 352,
        "keywords": [
            "종합시험 식",
            "장력식 감지 시스템"
        ]
    },
    {
        "code": "통신 9-4-39",
        "name": "점멸기",
        "spec": "스마트 보안등 감시 제어시스템",
        "unit": "대",
        "labors": {
            "통신케이블공": 0.12,
            "통신설비공": 0.12
        },
        "category": "device",
        "page": 352,
        "keywords": [
            "점멸기",
            "스마트 보안등 감시 제어시스템"
        ]
    },
    {
        "code": "통신 9-4-40",
        "name": "중계기 대",
        "spec": "스마트 수목관리 시스템",
        "unit": "0.32",
        "labors": {
            "통신설비공": 0.32
        },
        "category": "device",
        "page": 353,
        "keywords": [
            "중계기 대",
            "스마트 수목관리 시스템"
        ]
    },
    {
        "code": "통신 9-4-40",
        "name": "수목 대",
        "spec": "스마트 수목관리 시스템",
        "unit": "-",
        "labors": {
            "통신설비공": 0.04
        },
        "category": "device",
        "page": 353,
        "keywords": [
            "수목 대",
            "스마트 수목관리 시스템"
        ]
    },
    {
        "code": "통신 9-4-40",
        "name": "센서 토양 대",
        "spec": "스마트 수목관리 시스템",
        "unit": "-",
        "labors": {
            "통신설비공": 0.04
        },
        "category": "device",
        "page": 353,
        "keywords": [
            "센서 토양 대",
            "스마트 수목관리 시스템"
        ]
    },
    {
        "code": "통신 9-4-41",
        "name": "스탠드 타입",
        "spec": "스마트 발열체크 시스템",
        "unit": "대",
        "labors": {
            "통신설비공": 0.16
        },
        "category": "device",
        "page": 353,
        "keywords": [
            "스탠드 타입",
            "스마트 발열체크 시스템"
        ]
    },
    {
        "code": "통신 9-4-41",
        "name": "게이트 타입",
        "spec": "스마트 발열체크 시스템",
        "unit": "대",
        "labors": {
            "통신설비공": 0.33
        },
        "category": "device",
        "page": 353,
        "keywords": [
            "게이트 타입",
            "스마트 발열체크 시스템"
        ]
    },
    {
        "code": "통신 9-4-43",
        "name": "T형 제수변 플렌지",
        "spec": "IoT기반 지능형 소화전 관리시스템",
        "unit": "대",
        "labors": {
            "통신외선공": 0.18,
            "보통인부": 0.18
        },
        "category": "device",
        "page": 354,
        "keywords": [
            "T형 제수변 플렌지",
            "IoT기반 지능형 소화전 관리시스템"
        ]
    },
    {
        "code": "통신 9-4-43",
        "name": "제어함체",
        "spec": "IoT기반 지능형 소화전 관리시스템",
        "unit": "대",
        "labors": {
            "통신외선공": 0.35,
            "통신설비공": 0.35,
            "보통인부": 0.35
        },
        "category": "device",
        "page": 354,
        "keywords": [
            "제어함체",
            "IoT기반 지능형 소화전 관리시스템"
        ]
    },
    {
        "code": "통신 9-4-43",
        "name": "Pole",
        "spec": "IoT기반 지능형 소화전 관리시스템",
        "unit": "기",
        "labors": {
            "통신외선공": 0.11,
            "보통인부": 0.11
        },
        "category": "device",
        "page": 354,
        "keywords": [
            "Pole",
            "IoT기반 지능형 소화전 관리시스템"
        ]
    },
    {
        "code": "통신 9-4-44",
        "name": "전광판 차량용 대 - 0.39",
        "spec": "우회전 스마트 알리미 시스템",
        "unit": "0.39",
        "labors": {
            "보통인부": 0.19
        },
        "category": "device",
        "page": 355,
        "keywords": [
            "전광판 차량용 대 - 0.39",
            "우회전 스마트 알리미 시스템"
        ]
    },
    {
        "code": "통신 9-4-44",
        "name": "보행자용 차량용 대 - 0.39",
        "spec": "우회전 스마트 알리미 시스템",
        "unit": "0.14",
        "labors": {
            "보통인부": 0.07
        },
        "category": "device",
        "page": 355,
        "keywords": [
            "보행자용 차량용 대 - 0.39",
            "우회전 스마트 알리미 시스템"
        ]
    },
    {
        "code": "통신 9-4-44",
        "name": "제어함체 대 0.29 0.29",
        "spec": "우회전 스마트 알리미 시스템",
        "unit": "-",
        "labors": {
            "보통인부": 0.29
        },
        "category": "device",
        "page": 355,
        "keywords": [
            "제어함체 대 0.29 0.29",
            "우회전 스마트 알리미 시스템"
        ]
    },
    {
        "code": "통신 9-4-45",
        "name": "모니터링 시스템 면당",
        "spec": "전기차 배터리 온도 모니터링 시스템",
        "unit": "0.08",
        "labors": {
            "통신설비공": 0.08
        },
        "category": "device",
        "page": 355,
        "keywords": [
            "모니터링 시스템 면당",
            "전기차 배터리 온도 모니터링 시스템"
        ]
    },
    {
        "code": "통신 9-4-45",
        "name": "전원함체 개",
        "spec": "전기차 배터리 온도 모니터링 시스템",
        "unit": "0.10",
        "labors": {
            "통신설비공": 0.1
        },
        "category": "device",
        "page": 355,
        "keywords": [
            "전원함체 개",
            "전기차 배터리 온도 모니터링 시스템"
        ]
    },
    {
        "code": "통신 9-4-45",
        "name": "메인함체 개",
        "spec": "전기차 배터리 온도 모니터링 시스템",
        "unit": "0.09",
        "labors": {
            "통신설비공": 0.09
        },
        "category": "device",
        "page": 355,
        "keywords": [
            "메인함체 개",
            "전기차 배터리 온도 모니터링 시스템"
        ]
    },
    {
        "code": "통신 9-4-45",
        "name": "운영프로그램 식",
        "spec": "전기차 배터리 온도 모니터링 시스템",
        "unit": "0.14",
        "labors": {
            "통신내선공": 0.14
        },
        "category": "device",
        "page": 355,
        "keywords": [
            "운영프로그램 식",
            "전기차 배터리 온도 모니터링 시스템"
        ]
    },
    {
        "code": "통신 9-4-45",
        "name": "최종시험 식",
        "spec": "전기차 배터리 온도 모니터링 시스템",
        "unit": "0.06",
        "labors": {
            "통신내선공": 0.06
        },
        "category": "device",
        "page": 355,
        "keywords": [
            "최종시험 식",
            "전기차 배터리 온도 모니터링 시스템"
        ]
    },
    {
        "code": "통신 10-2-1",
        "name": "선박 통신장비용 전원케이블 포설",
        "spec": "공통적용",
        "unit": "100m",
        "labors": {
            "통신케이블공": 1.1,
            "보통인부": 0.8
        },
        "category": "device",
        "page": 369,
        "keywords": [
            "선박 통신장비용 전원케이블 포설",
            "공통적용"
        ]
    },
    {
        "code": "통신 10-2-1",
        "name": "선박 통신장비용 케이블 포설",
        "spec": "공통적용",
        "unit": "100m",
        "labors": {
            "통신케이블공": 2.2,
            "보통인부": 1.0
        },
        "category": "device",
        "page": 369,
        "keywords": [
            "선박 통신장비용 케이블 포설",
            "공통적용"
        ]
    },
    {
        "code": "통신 10-2-7",
        "name": "기초대 설치 - - 0.07 0.07 0.44",
        "spec": "음향측심기(Echo Sounder)",
        "unit": "대",
        "labors": {
            "용접공": 0.44
        },
        "category": "device",
        "page": 375,
        "keywords": [
            "기초대 설치 - - 0.07 0.07 0.44",
            "음향측심기(Echo Sounder)"
        ]
    },
    {
        "code": "통신 10-2-7",
        "name": "작업 선저 Transducer 설치 - - 0.97 0.97 0.97",
        "spec": "음향측심기(Echo Sounder)",
        "unit": "대",
        "labors": {
            "용접공": 0.97
        },
        "category": "device",
        "page": 375,
        "keywords": [
            "작업 선저 Transducer 설치 - - 0.97 0.97 0.97",
            "음향측심기(Echo Sounder)"
        ]
    },
    {
        "code": "통신 10-2-11",
        "name": "기기반입 및 장비운반",
        "spec": "레이더 트랜스폰더(Radar Transponder)",
        "unit": "대",
        "labors": {
            "통신관련산업기사": 0.12,
            "통신설비공": 0.12
        },
        "category": "device",
        "page": 378,
        "keywords": [
            "기기반입 및 장비운반",
            "레이더 트랜스폰더(Radar Transponder)"
        ]
    },
    {
        "code": "통신 10-2-11",
        "name": "기초포장해체",
        "spec": "레이더 트랜스폰더(Radar Transponder)",
        "unit": "대",
        "labors": {
            "통신관련산업기사": 0.09,
            "통신설비공": 0.09
        },
        "category": "device",
        "page": 378,
        "keywords": [
            "기초포장해체",
            "레이더 트랜스폰더(Radar Transponder)"
        ]
    },
    {
        "code": "통신 10-2-11",
        "name": "작업 점검 및 목록대조",
        "spec": "레이더 트랜스폰더(Radar Transponder)",
        "unit": "대",
        "labors": {
            "통신관련산업기사": 0.09,
            "통신설비공": 0.09
        },
        "category": "device",
        "page": 378,
        "keywords": [
            "작업 점검 및 목록대조",
            "레이더 트랜스폰더(Radar Transponder)"
        ]
    },
    {
        "code": "통신 10-2-11",
        "name": "설치위치지정",
        "spec": "레이더 트랜스폰더(Radar Transponder)",
        "unit": "대",
        "labors": {
            "통신관련산업기사": 0.11
        },
        "category": "device",
        "page": 378,
        "keywords": [
            "설치위치지정",
            "레이더 트랜스폰더(Radar Transponder)"
        ]
    },
    {
        "code": "통신 10-2-11",
        "name": "설치작업 Main Unit",
        "spec": "레이더 트랜스폰더(Radar Transponder)",
        "unit": "대",
        "labors": {
            "통신설비공": 0.09
        },
        "category": "device",
        "page": 378,
        "keywords": [
            "설치작업 Main Unit",
            "레이더 트랜스폰더(Radar Transponder)"
        ]
    },
    {
        "code": "통신 10-2-11",
        "name": "시험 대국 및 종합시험",
        "spec": "레이더 트랜스폰더(Radar Transponder)",
        "unit": "대",
        "labors": {
            "통신관련산업기사": 0.13,
            "통신설비공": 0.13
        },
        "category": "device",
        "page": 378,
        "keywords": [
            "시험 대국 및 종합시험",
            "레이더 트랜스폰더(Radar Transponder)"
        ]
    },
    {
        "code": "통신 10-2-16",
        "name": "설치 고정브라켓 설치 - 0.60",
        "spec": "위성비상위치지시용 무선표지설비(SAT/EPIRB)",
        "unit": "대",
        "labors": {
            "용접공": 0.6
        },
        "category": "device",
        "page": 382,
        "keywords": [
            "설치 고정브라켓 설치 - 0.60",
            "위성비상위치지시용 무선표지설비(SAT/EPIRB)"
        ]
    },
    {
        "code": "통신 10-2-17",
        "name": "기초대 설치 - - 0.09 0.09 0.47",
        "spec": "위성항법표시장치 및 어군탐지기 겸용 (GPS Plotter&Fish Finder)",
        "unit": "대",
        "labors": {
            "용접공": 0.47
        },
        "category": "device",
        "page": 382,
        "keywords": [
            "기초대 설치 - - 0.09 0.09 0.47",
            "위성항법표시장치 및 어군탐지기 겸용 (GPS Plotter&Fish Finder)"
        ]
    },
    {
        "code": "통신 10-2-17",
        "name": "선저 Transducer 설치 - - 0.97 0.97 0.97",
        "spec": "위성항법표시장치 및 어군탐지기 겸용 (GPS Plotter&Fish Finder)",
        "unit": "대",
        "labors": {
            "용접공": 0.97
        },
        "category": "device",
        "page": 382,
        "keywords": [
            "선저 Transducer 설치 - - 0.97 0.97 0.97",
            "위성항법표시장치 및 어군탐지기 겸용 (GPS Plotter&Fish Finder)"
        ]
    },
    {
        "code": "통신 10-2-18",
        "name": "기초대 설치 0.07 - 0.07 0.82",
        "spec": "선내지령장치(Marine Public Addresser)",
        "unit": "대",
        "labors": {
            "용접공": 0.82
        },
        "category": "device",
        "page": 383,
        "keywords": [
            "기초대 설치 0.07 - 0.07 0.82",
            "선내지령장치(Marine Public Addresser)"
        ]
    },
    {
        "code": "통신 10-2-18",
        "name": "설치 외부 혼 스피커(Horn Speaker) 0.38 - 0.38 0.65",
        "spec": "선내지령장치(Marine Public Addresser)",
        "unit": "대",
        "labors": {
            "용접공": 0.65
        },
        "category": "device",
        "page": 383,
        "keywords": [
            "설치 외부 혼 스피커(Horn Speaker) 0.38 - 0.38 0.65",
            "선내지령장치(Marine Public Addresser)"
        ]
    },
    {
        "code": "통신 10-2-18",
        "name": "마이크/스피커 연결함 0.25 - 0.25 0.25",
        "spec": "선내지령장치(Marine Public Addresser)",
        "unit": "대",
        "labors": {
            "용접공": 0.25
        },
        "category": "device",
        "page": 383,
        "keywords": [
            "마이크/스피커 연결함 0.25 - 0.25 0.25",
            "선내지령장치(Marine Public Addresser)"
        ]
    },
    {
        "code": "통신 10-2-19",
        "name": "기초대 설치 - 0.07 0.07 0.64",
        "spec": "풍향풍속계(Wind Speed & Direction Indicator)",
        "unit": "대",
        "labors": {
            "용접공": 0.64
        },
        "category": "device",
        "page": 384,
        "keywords": [
            "기초대 설치 - 0.07 0.07 0.64",
            "풍향풍속계(Wind Speed & Direction Indicator)"
        ]
    },
    {
        "code": "통신 10-2-19",
        "name": "풍향풍속 측정기 - 0.50 0.50 0.80",
        "spec": "풍향풍속계(Wind Speed & Direction Indicator)",
        "unit": "대",
        "labors": {
            "용접공": 0.8
        },
        "category": "device",
        "page": 384,
        "keywords": [
            "풍향풍속 측정기 - 0.50 0.50 0.80",
            "풍향풍속계(Wind Speed & Direction Indicator)"
        ]
    },
    {
        "code": "통신 10-2-20",
        "name": "기초대 설치 - 0.07 0.07 - - 1.00",
        "spec": "전자해도표시시스템(ECDIS)",
        "unit": "대",
        "labors": {
            "용접공": 1.0
        },
        "category": "device",
        "page": 385,
        "keywords": [
            "기초대 설치 - 0.07 0.07 - - 1.00",
            "전자해도표시시스템(ECDIS)"
        ]
    },
    {
        "code": "통신 10-2-21",
        "name": "기초대 설치 0.13 - 0.13 0.75",
        "spec": "선속계(Doppler Speed Log)",
        "unit": "대",
        "labors": {
            "용접공": 0.75
        },
        "category": "device",
        "page": 386,
        "keywords": [
            "기초대 설치 0.13 - 0.13 0.75",
            "선속계(Doppler Speed Log)"
        ]
    },
    {
        "code": "통신 10-2-21",
        "name": "선저 Transducer 2.63 2.63 2.63 2.63",
        "spec": "선속계(Doppler Speed Log)",
        "unit": "대",
        "labors": {
            "용접공": 2.63
        },
        "category": "device",
        "page": 386,
        "keywords": [
            "선저 Transducer 2.63 2.63 2.63 2.63",
            "선속계(Doppler Speed Log)"
        ]
    },
    {
        "code": "통신 10-2-21",
        "name": "결선 선저 Transducer - 2.17 2.17 -",
        "spec": "선속계(Doppler Speed Log)",
        "unit": "대",
        "labors": {
            "용접공": 1.0
        },
        "category": "device",
        "page": 386,
        "keywords": [
            "결선 선저 Transducer - 2.17 2.17 -",
            "선속계(Doppler Speed Log)"
        ]
    },
    {
        "code": "통신 10-2-22",
        "name": "기초대 설치 0.17 - 0.17 - - 0.75",
        "spec": "간이항해자료기록장치(S-VDR)",
        "unit": "대",
        "labors": {
            "용접공": 0.75
        },
        "category": "device",
        "page": 387,
        "keywords": [
            "기초대 설치 0.17 - 0.17 - - 0.75",
            "간이항해자료기록장치(S-VDR)"
        ]
    },
    {
        "code": "통신 10-2-23",
        "name": "기초대 설치 0.50 - 0.50 1.50",
        "spec": "자이로컴퍼스(Gyro Compass)",
        "unit": "대",
        "labors": {
            "용접공": 1.5
        },
        "category": "device",
        "page": 388,
        "keywords": [
            "기초대 설치 0.50 - 0.50 1.50",
            "자이로컴퍼스(Gyro Compass)"
        ]
    },
    {
        "code": "통신 10-2-24",
        "name": "기초대 설치 0.25 0.25 2.25",
        "spec": "자기컴퍼스(Magnetic Compass)",
        "unit": "대",
        "labors": {
            "용접공": 2.25
        },
        "category": "device",
        "page": 389,
        "keywords": [
            "기초대 설치 0.25 0.25 2.25",
            "자기컴퍼스(Magnetic Compass)"
        ]
    },
    {
        "code": "통신 10-2-25",
        "name": "기초대 설치 0.50 - 0.50 - - 1.75",
        "spec": "조타장치(Auto Pilot)",
        "unit": "대",
        "labors": {
            "용접공": 1.75
        },
        "category": "device",
        "page": 389,
        "keywords": [
            "기초대 설치 0.50 - 0.50 - - 1.75",
            "조타장치(Auto Pilot)"
        ]
    },
    {
        "code": "통신 10-2-26",
        "name": "기초대 설치 - - 0.08 0.08 0.46",
        "spec": "어군탐지기 (Fish-Finder)",
        "unit": "대",
        "labors": {
            "용접공": 0.46
        },
        "category": "device",
        "page": 390,
        "keywords": [
            "기초대 설치 - - 0.08 0.08 0.46",
            "어군탐지기 (Fish-Finder)"
        ]
    },
    {
        "code": "통신 10-2-26",
        "name": "작업 선저 Transducer 설치 - - 0.97 0.97 0.97",
        "spec": "어군탐지기 (Fish-Finder)",
        "unit": "대",
        "labors": {
            "용접공": 0.97
        },
        "category": "device",
        "page": 390,
        "keywords": [
            "작업 선저 Transducer 설치 - - 0.97 0.97 0.97",
            "어군탐지기 (Fish-Finder)"
        ]
    },
    {
        "code": "통신 10-2-27",
        "name": "기초대 설치 1.00 - 1.00 - - 1.25",
        "spec": "SONAR(Sound Navigation And Ranging)",
        "unit": "개",
        "labors": {
            "용접공": 1.25
        },
        "category": "device",
        "page": 391,
        "keywords": [
            "기초대 설치 1.00 - 1.00 - - 1.25",
            "SONAR(Sound Navigation And Ranging)"
        ]
    },
    {
        "code": "통신 10-2-27",
        "name": "작업 선저 돔(DOME) 6.00 6.00 6.00 6.00",
        "spec": "SONAR(Sound Navigation And Ranging)",
        "unit": "개",
        "labors": {
            "용접공": 6.0
        },
        "category": "device",
        "page": 391,
        "keywords": [
            "작업 선저 돔(DOME) 6.00 6.00 6.00 6.00",
            "SONAR(Sound Navigation And Ranging)"
        ]
    },
    {
        "code": "통신 10-2-27",
        "name": "상하장치 3.50 3.50 3.50 3.50 3.50 3.50",
        "spec": "SONAR(Sound Navigation And Ranging)",
        "unit": "개",
        "labors": {
            "용접공": 3.5
        },
        "category": "device",
        "page": 391,
        "keywords": [
            "상하장치 3.50 3.50 3.50 3.50 3.50 3.50",
            "SONAR(Sound Navigation And Ranging)"
        ]
    },
    {
        "code": "통신 10-2-27",
        "name": "결선 선저 돔(DOME) 5.17 5.17 4.00",
        "spec": "SONAR(Sound Navigation And Ranging)",
        "unit": "개",
        "labors": {
            "용접공": 4.0
        },
        "category": "device",
        "page": 391,
        "keywords": [
            "결선 선저 돔(DOME) 5.17 5.17 4.00",
            "SONAR(Sound Navigation And Ranging)"
        ]
    },
    {
        "code": "통신 11-1-1-1",
        "name": "배열 및 조립 보통인부 1.78 4.26 8.52",
        "spec": "250AH이하 축전지",
        "unit": "조",
        "labors": {
            "통신설비공": 13.45
        },
        "category": "device",
        "page": 403,
        "keywords": [
            "배열 및 조립 보통인부 1.78 4.26 8.52",
            "250AH이하 축전지"
        ]
    },
    {
        "code": "통신 11-1-1-2",
        "name": "배열 및 조립 보통인부 1.79 4.29 8.58",
        "spec": "500AH이하 축전지",
        "unit": "조",
        "labors": {
            "통신설비공": 13.55
        },
        "category": "device",
        "page": 403,
        "keywords": [
            "배열 및 조립 보통인부 1.79 4.29 8.58",
            "500AH이하 축전지"
        ]
    },
    {
        "code": "통신 11-1-1-3",
        "name": "배열 및 조립 인력운반공 1.35 3.24 6.48",
        "spec": "1,200AH이하 축전지",
        "unit": "조",
        "labors": {
            "통신설비공": 10.23
        },
        "category": "device",
        "page": 403,
        "keywords": [
            "배열 및 조립 인력운반공 1.35 3.24 6.48",
            "1,200AH이하 축전지"
        ]
    },
    {
        "code": "통신 11-1-1-3",
        "name": "보통인부 1.35 3.24 6.48",
        "spec": "1,200AH이하 축전지",
        "unit": "조",
        "labors": {
            "통신설비공": 10.23
        },
        "category": "device",
        "page": 403,
        "keywords": [
            "보통인부 1.35 3.24 6.48",
            "1,200AH이하 축전지"
        ]
    },
    {
        "code": "통신 11-1-1-4",
        "name": "소운반 인력운반공 2.24 5.37 10.74",
        "spec": "1,600AH이하 축전지",
        "unit": "조",
        "labors": {
            "통신설비공": 16.96
        },
        "category": "device",
        "page": 404,
        "keywords": [
            "소운반 인력운반공 2.24 5.37 10.74",
            "1,600AH이하 축전지"
        ]
    },
    {
        "code": "통신 11-1-1-4",
        "name": "보통인부 2.24 5.37 10.74",
        "spec": "1,600AH이하 축전지",
        "unit": "조",
        "labors": {
            "통신설비공": 16.96
        },
        "category": "device",
        "page": 404,
        "keywords": [
            "보통인부 2.24 5.37 10.74",
            "1,600AH이하 축전지"
        ]
    },
    {
        "code": "통신 11-1-1-5",
        "name": "소운반 인력운반공 2.24 5.37 10.74",
        "spec": "2,400AH이하 축전지",
        "unit": "조",
        "labors": {
            "통신설비공": 26.96
        },
        "category": "device",
        "page": 404,
        "keywords": [
            "소운반 인력운반공 2.24 5.37 10.74",
            "2,400AH이하 축전지"
        ]
    },
    {
        "code": "통신 11-1-1-5",
        "name": "보통인부 2.62 6.28 12.56",
        "spec": "2,400AH이하 축전지",
        "unit": "조",
        "labors": {
            "통신설비공": 19.84
        },
        "category": "device",
        "page": 404,
        "keywords": [
            "보통인부 2.62 6.28 12.56",
            "2,400AH이하 축전지"
        ]
    },
    {
        "code": "통신 11-1-1-6",
        "name": "배열 및 조립 인력운반공 2.68 6.43 12.86",
        "spec": "3,000AH이하 축전지",
        "unit": "조",
        "labors": {
            "통신설비공": 20.31
        },
        "category": "device",
        "page": 404,
        "keywords": [
            "배열 및 조립 인력운반공 2.68 6.43 12.86",
            "3,000AH이하 축전지"
        ]
    },
    {
        "code": "통신 11-1-1-6",
        "name": "보통인부 3.14 7.53 15.06",
        "spec": "3,000AH이하 축전지",
        "unit": "조",
        "labors": {
            "통신설비공": 23.79
        },
        "category": "device",
        "page": 404,
        "keywords": [
            "보통인부 3.14 7.53 15.06",
            "3,000AH이하 축전지"
        ]
    },
    {
        "code": "통신 11-1-1-7",
        "name": "축전지 감시장치용 결합기",
        "spec": "축전지 감시장치용 결합기",
        "unit": "개",
        "labors": {
            "통신설비공": 0.05,
            "보통인부": 0.01
        },
        "category": "device",
        "page": 404,
        "keywords": [
            "축전지 감시장치용 결합기",
            "축전지 감시장치용 결합기"
        ]
    },
    {
        "code": "통신 11-1-2",
        "name": "모듈 설치 21.6V/70Ah",
        "spec": "리튬2차전지",
        "unit": "개",
        "labors": {
            "통신설비공": 0.02,
            "통신케이블공": 0.02
        },
        "category": "device",
        "page": 405,
        "keywords": [
            "모듈 설치 21.6V/70Ah",
            "리튬2차전지"
        ]
    },
    {
        "code": "통신 11-1-2",
        "name": "48V/50Ah",
        "spec": "리튬2차전지",
        "unit": "개",
        "labors": {
            "통신설비공": 0.03,
            "통신케이블공": 0.03
        },
        "category": "device",
        "page": 405,
        "keywords": [
            "48V/50Ah",
            "리튬2차전지"
        ]
    },
    {
        "code": "통신 11-3-1",
        "name": "보통인부 2.70 2.79 2.93 3.15 3.38",
        "spec": "배터리(Battery) 충전장치",
        "unit": "대",
        "labors": {
            "통신설비공": 3.6
        },
        "category": "device",
        "page": 407,
        "keywords": [
            "보통인부 2.70 2.79 2.93 3.15 3.38",
            "배터리(Battery) 충전장치"
        ]
    },
    {
        "code": "통신 11-3-1",
        "name": "50A이하 통신설비공 3.93 4.06 4.20 4.42 4.53",
        "spec": "배터리(Battery) 충전장치",
        "unit": "대",
        "labors": {
            "통신설비공": 4.75
        },
        "category": "device",
        "page": 407,
        "keywords": [
            "50A이하 통신설비공 3.93 4.06 4.20 4.42 4.53",
            "배터리(Battery) 충전장치"
        ]
    },
    {
        "code": "통신 11-3-1",
        "name": "보통인부 3.15 3.38 3.60 3.96 4.14",
        "spec": "배터리(Battery) 충전장치",
        "unit": "대",
        "labors": {
            "통신설비공": 4.5
        },
        "category": "device",
        "page": 407,
        "keywords": [
            "보통인부 3.15 3.38 3.60 3.96 4.14",
            "배터리(Battery) 충전장치"
        ]
    },
    {
        "code": "통신 11-3-1",
        "name": "100A이하 통신설비공 4.20 4.48 4.75 5.03 5.30",
        "spec": "배터리(Battery) 충전장치",
        "unit": "대",
        "labors": {
            "통신설비공": 5.58
        },
        "category": "device",
        "page": 407,
        "keywords": [
            "100A이하 통신설비공 4.20 4.48 4.75 5.03 5.30",
            "배터리(Battery) 충전장치"
        ]
    },
    {
        "code": "통신 11-3-1",
        "name": "보통인부 3.60 4.05 4.50 4.95 5.40",
        "spec": "배터리(Battery) 충전장치",
        "unit": "대",
        "labors": {
            "통신설비공": 5.85
        },
        "category": "device",
        "page": 407,
        "keywords": [
            "보통인부 3.60 4.05 4.50 4.95 5.40",
            "배터리(Battery) 충전장치"
        ]
    },
    {
        "code": "통신 11-3-1",
        "name": "200A이하 통신설비공 - 5.00 5.80 6.26 6.68",
        "spec": "배터리(Battery) 충전장치",
        "unit": "대",
        "labors": {
            "통신설비공": 7.07
        },
        "category": "device",
        "page": 407,
        "keywords": [
            "200A이하 통신설비공 - 5.00 5.80 6.26 6.68",
            "배터리(Battery) 충전장치"
        ]
    },
    {
        "code": "통신 11-3-1",
        "name": "보통인부 - 6.00 6.21 6.98 7.65",
        "spec": "배터리(Battery) 충전장치",
        "unit": "대",
        "labors": {
            "통신설비공": 8.37
        },
        "category": "device",
        "page": 407,
        "keywords": [
            "보통인부 - 6.00 6.21 6.98 7.65",
            "배터리(Battery) 충전장치"
        ]
    },
    {
        "code": "통신 11-3-1",
        "name": "400A이하 통신설비공 - 6.00 6.80 8.60 9.15",
        "spec": "배터리(Battery) 충전장치",
        "unit": "대",
        "labors": {
            "통신설비공": 10.25
        },
        "category": "device",
        "page": 407,
        "keywords": [
            "400A이하 통신설비공 - 6.00 6.80 8.60 9.15",
            "배터리(Battery) 충전장치"
        ]
    },
    {
        "code": "통신 11-3-1",
        "name": "보통인부 - 8.25 8.70 10.80 11.70",
        "spec": "배터리(Battery) 충전장치",
        "unit": "대",
        "labors": {
            "통신설비공": 13.5
        },
        "category": "device",
        "page": 407,
        "keywords": [
            "보통인부 - 8.25 8.70 10.80 11.70",
            "배터리(Battery) 충전장치"
        ]
    },
    {
        "code": "통신 11-3-2",
        "name": "태양광전지판",
        "spec": "태양광 충전시스템",
        "unit": "대",
        "labors": {
            "통신외선공": 0.31,
            "통신설비공": 0.28
        },
        "category": "device",
        "page": 408,
        "keywords": [
            "태양광전지판",
            "태양광 충전시스템"
        ]
    },
    {
        "code": "통신 11-3-2",
        "name": "전원관리장치",
        "spec": "태양광 충전시스템",
        "unit": "대",
        "labors": {
            "통신외선공": 0.23,
            "통신설비공": 0.35
        },
        "category": "device",
        "page": 408,
        "keywords": [
            "전원관리장치",
            "태양광 충전시스템"
        ]
    },
    {
        "code": "통신 11-4-1",
        "name": "10kVA초과 ~ 20kVA 이하 대",
        "spec": "무정전 전원장치(UPS, CVCF)",
        "unit": "4.00",
        "labors": {
            "통신설비공": 1.0
        },
        "category": "device",
        "page": 409,
        "keywords": [
            "10kVA초과 ~ 20kVA 이하 대",
            "무정전 전원장치(UPS, CVCF)"
        ]
    },
    {
        "code": "통신 11-4-1",
        "name": "20kVA초과 ~ 30kVA 이하 대",
        "spec": "무정전 전원장치(UPS, CVCF)",
        "unit": "5.00",
        "labors": {
            "통신설비공": 2.0
        },
        "category": "device",
        "page": 409,
        "keywords": [
            "20kVA초과 ~ 30kVA 이하 대",
            "무정전 전원장치(UPS, CVCF)"
        ]
    },
    {
        "code": "통신 11-4-1",
        "name": "30kVA 초과~100kVA 이하 이하 대",
        "spec": "무정전 전원장치(UPS, CVCF)",
        "unit": "6.00",
        "labors": {
            "통신설비공": 3.0
        },
        "category": "device",
        "page": 409,
        "keywords": [
            "30kVA 초과~100kVA 이하 이하 대",
            "무정전 전원장치(UPS, CVCF)"
        ]
    },
    {
        "code": "통신 11-4-1",
        "name": "100kVA 초과~250kVA 이하 이하 대",
        "spec": "무정전 전원장치(UPS, CVCF)",
        "unit": "7.00",
        "labors": {
            "통신설비공": 4.0
        },
        "category": "device",
        "page": 409,
        "keywords": [
            "100kVA 초과~250kVA 이하 이하 대",
            "무정전 전원장치(UPS, CVCF)"
        ]
    },
    {
        "code": "통신 11-4-1",
        "name": "250kVA초과~500kVA 이하 이하 이하 대",
        "spec": "무정전 전원장치(UPS, CVCF)",
        "unit": "8.00",
        "labors": {
            "통신설비공": 5.0
        },
        "category": "device",
        "page": 409,
        "keywords": [
            "250kVA초과~500kVA 이하 이하 이하 대",
            "무정전 전원장치(UPS, CVCF)"
        ]
    },
    {
        "code": "통신 11-4-1",
        "name": "원격감시 및 제어 S/W설치 식",
        "spec": "무정전 전원장치(UPS, CVCF)",
        "unit": "-",
        "labors": {
            "보통인부": 0.58
        },
        "category": "device",
        "page": 409,
        "keywords": [
            "원격감시 및 제어 S/W설치 식",
            "무정전 전원장치(UPS, CVCF)"
        ]
    },
    {
        "code": "통신 11-5-1",
        "name": "길이 1~2m × 1본",
        "spec": "접지시설",
        "unit": "개",
        "labors": {
            "통신외선공": 0.2,
            "보통인부": 0.1
        },
        "category": "device",
        "page": 410,
        "keywords": [
            "길이 1~2m × 1본",
            "접지시설"
        ]
    },
    {
        "code": "통신 11-5-1",
        "name": "접지봉 타설 × 1본",
        "spec": "접지시설",
        "unit": "개",
        "labors": {
            "통신외선공": 0.45,
            "보통인부": 0.23
        },
        "category": "device",
        "page": 410,
        "keywords": [
            "접지봉 타설 × 1본",
            "접지시설"
        ]
    },
    {
        "code": "통신 11-5-1",
        "name": "0.3m × 0.3m 이하",
        "spec": "접지시설",
        "unit": "매",
        "labors": {
            "통신외선공": 0.3,
            "보통인부": 0.3
        },
        "category": "device",
        "page": 410,
        "keywords": [
            "0.3m × 0.3m 이하",
            "접지시설"
        ]
    },
    {
        "code": "통신 11-5-1",
        "name": "접지동판 매설 1.0m × 1.5m 이하",
        "spec": "접지시설",
        "unit": "매",
        "labors": {
            "통신외선공": 0.5,
            "보통인부": 0.5
        },
        "category": "device",
        "page": 410,
        "keywords": [
            "접지동판 매설 1.0m × 1.5m 이하",
            "접지시설"
        ]
    },
    {
        "code": "통신 11-5-1",
        "name": "1.0m × 2.5m 이하",
        "spec": "접지시설",
        "unit": "매",
        "labors": {
            "통신외선공": 0.8,
            "보통인부": 0.8
        },
        "category": "device",
        "page": 410,
        "keywords": [
            "1.0m × 2.5m 이하",
            "접지시설"
        ]
    },
    {
        "code": "통신 11-5-1",
        "name": "망형접지동판 롤형",
        "spec": "접지시설",
        "unit": "20m",
        "labors": {
            "통신외선공": 0.26,
            "보통인부": 0.26
        },
        "category": "device",
        "page": 410,
        "keywords": [
            "망형접지동판 롤형",
            "접지시설"
        ]
    },
    {
        "code": "통신 11-5-1",
        "name": "매설 판형",
        "spec": "접지시설",
        "unit": "매",
        "labors": {
            "통신외선공": 0.06,
            "보통인부": 0.06
        },
        "category": "device",
        "page": 410,
        "keywords": [
            "매설 판형",
            "접지시설"
        ]
    },
    {
        "code": "통신 11-5-1",
        "name": "테두리보강형",
        "spec": "접지시설",
        "unit": "매",
        "labors": {
            "통신외선공": 0.07,
            "보통인부": 0.07
        },
        "category": "device",
        "page": 410,
        "keywords": [
            "테두리보강형",
            "접지시설"
        ]
    },
    {
        "code": "통신 11-5-1",
        "name": "접지동판 가공 -",
        "spec": "접지시설",
        "unit": "매",
        "labors": {
            "통신외선공": 0.16
        },
        "category": "device",
        "page": 410,
        "keywords": [
            "접지동판 가공 -",
            "접지시설"
        ]
    },
    {
        "code": "통신 11-5-1",
        "name": "탄소봉매설 φ 150× 1,000 미만",
        "spec": "접지시설",
        "unit": "개",
        "labors": {
            "통신외선공": 0.27,
            "보통인부": 0.46
        },
        "category": "device",
        "page": 410,
        "keywords": [
            "탄소봉매설 φ 150× 1,000 미만",
            "접지시설"
        ]
    },
    {
        "code": "통신 11-5-1",
        "name": "(지하 1.5m 기준) φ 150× 1,000 이상",
        "spec": "접지시설",
        "unit": "개",
        "labors": {
            "통신외선공": 0.43,
            "보통인부": 0.73
        },
        "category": "device",
        "page": 410,
        "keywords": [
            "(지하 1.5m 기준) φ 150× 1,000 이상",
            "접지시설"
        ]
    },
    {
        "code": "통신 11-5-1",
        "name": "φ 300× 1,000 미만",
        "spec": "접지시설",
        "unit": "개",
        "labors": {
            "통신외선공": 0.59,
            "보통인부": 1.0
        },
        "category": "device",
        "page": 410,
        "keywords": [
            "φ 300× 1,000 미만",
            "접지시설"
        ]
    },
    {
        "code": "통신 11-5-1",
        "name": "접지선 부설 600V 비닐전선",
        "spec": "접지시설",
        "unit": "10개소",
        "labors": {
            "통신외선공": 0.5,
            "보통인부": 0.25
        },
        "category": "device",
        "page": 410,
        "keywords": [
            "접지선 부설 600V 비닐전선",
            "접지시설"
        ]
    },
    {
        "code": "통신 11-5-1",
        "name": "10㎟ 이하",
        "spec": "접지시설",
        "unit": "10m",
        "labors": {
            "통신외선공": 0.1
        },
        "category": "device",
        "page": 410,
        "keywords": [
            "10㎟ 이하",
            "접지시설"
        ]
    },
    {
        "code": "통신 11-5-1",
        "name": "35㎟ 이하",
        "spec": "접지시설",
        "unit": "10m",
        "labors": {
            "통신외선공": 0.12
        },
        "category": "device",
        "page": 410,
        "keywords": [
            "35㎟ 이하",
            "접지시설"
        ]
    },
    {
        "code": "통신 11-5-1",
        "name": "접지선 매설 95㎟ 이하",
        "spec": "접지시설",
        "unit": "10m",
        "labors": {
            "통신외선공": 0.15
        },
        "category": "device",
        "page": 410,
        "keywords": [
            "접지선 매설 95㎟ 이하",
            "접지시설"
        ]
    },
    {
        "code": "통신 11-5-1",
        "name": "150㎟ 이하",
        "spec": "접지시설",
        "unit": "10m",
        "labors": {
            "통신외선공": 0.2
        },
        "category": "device",
        "page": 410,
        "keywords": [
            "150㎟ 이하",
            "접지시설"
        ]
    },
    {
        "code": "통신 11-5-1",
        "name": "150㎟ 초과",
        "spec": "접지시설",
        "unit": "10m",
        "labors": {
            "통신외선공": 0.25
        },
        "category": "device",
        "page": 410,
        "keywords": [
            "150㎟ 초과",
            "접지시설"
        ]
    },
    {
        "code": "통신 11-5-1",
        "name": "접속 및 단자 C형 및 원형 슬리브",
        "spec": "접지시설",
        "unit": "개",
        "labors": {
            "통신외선공": 0.1
        },
        "category": "device",
        "page": 410,
        "keywords": [
            "접속 및 단자 C형 및 원형 슬리브",
            "접지시설"
        ]
    },
    {
        "code": "통신 11-5-1",
        "name": "압착단자",
        "spec": "접지시설",
        "unit": "개",
        "labors": {
            "통신외선공": 0.03
        },
        "category": "device",
        "page": 410,
        "keywords": [
            "압착단자",
            "접지시설"
        ]
    },
    {
        "code": "통신 11-5-1",
        "name": "설치 용접(발열) 또는 납땜",
        "spec": "접지시설",
        "unit": "개",
        "labors": {
            "통신외선공": 0.19
        },
        "category": "device",
        "page": 410,
        "keywords": [
            "설치 용접(발열) 또는 납땜",
            "접지시설"
        ]
    },
    {
        "code": "통신 11-5-1",
        "name": "볼트 체결형",
        "spec": "접지시설",
        "unit": "개",
        "labors": {
            "통신외선공": 0.05
        },
        "category": "device",
        "page": 410,
        "keywords": [
            "볼트 체결형",
            "접지시설"
        ]
    },
    {
        "code": "통신 11-5-1",
        "name": "접지 단자함 -",
        "spec": "접지시설",
        "unit": "개",
        "labors": {
            "통신내선공": 0.66
        },
        "category": "device",
        "page": 410,
        "keywords": [
            "접지 단자함 -",
            "접지시설"
        ]
    },
    {
        "code": "통신 11-5-2-1",
        "name": "대지고유저항 측정",
        "spec": "대지고유저항 측정 및 분석",
        "unit": "Point",
        "labors": {
            "통신관련산업기사": 0.25,
            "통신관련기능사": 0.99
        },
        "category": "device",
        "page": 411,
        "keywords": [
            "대지고유저항 측정",
            "대지고유저항 측정 및 분석"
        ]
    },
    {
        "code": "통신 11-5-2-2",
        "name": "맨홀",
        "spec": "매설물 탐지",
        "unit": "개소",
        "labors": {
            "통신관련산업기사": 0.46,
            "특별인부": 0.92
        },
        "category": "device",
        "page": 411,
        "keywords": [
            "맨홀",
            "매설물 탐지"
        ]
    },
    {
        "code": "통신 11-5-2-2",
        "name": "맨홀외",
        "spec": "매설물 탐지",
        "unit": "개소",
        "labors": {
            "통신관련산업기사": 0.13,
            "특별인부": 0.26
        },
        "category": "device",
        "page": 411,
        "keywords": [
            "맨홀외",
            "매설물 탐지"
        ]
    },
    {
        "code": "통신 11-5-2-4",
        "name": "Ø 75 m",
        "spec": "보링 (천공)",
        "unit": "0.08",
        "labors": {
            "통신외선공": 0.08
        },
        "category": "device",
        "page": 412,
        "keywords": [
            "Ø 75 m",
            "보링 (천공)"
        ]
    },
    {
        "code": "통신 11-5-2-4",
        "name": "천공 Ø100 m",
        "spec": "보링 (천공)",
        "unit": "0.10",
        "labors": {
            "통신외선공": 0.1
        },
        "category": "device",
        "page": 412,
        "keywords": [
            "천공 Ø100 m",
            "보링 (천공)"
        ]
    },
    {
        "code": "통신 11-5-2-4",
        "name": "Ø150 Ø100 m",
        "spec": "보링 (천공)",
        "unit": "0.12",
        "labors": {
            "통신외선공": 0.12
        },
        "category": "device",
        "page": 412,
        "keywords": [
            "Ø150 Ø100 m",
            "보링 (천공)"
        ]
    },
    {
        "code": "통신 11-5-2-4",
        "name": "Ø200 Ø100 m",
        "spec": "보링 (천공)",
        "unit": "0.15",
        "labors": {
            "통신외선공": 0.15
        },
        "category": "device",
        "page": 412,
        "keywords": [
            "Ø200 Ø100 m",
            "보링 (천공)"
        ]
    },
    {
        "code": "통신 11-5-2-4",
        "name": "케이싱설치 Ø100 m",
        "spec": "보링 (천공)",
        "unit": "0.25",
        "labors": {
            "통신외선공": 0.25,
            "용접공": 0.12
        },
        "category": "device",
        "page": 412,
        "keywords": [
            "케이싱설치 Ø100 m",
            "보링 (천공)"
        ]
    },
    {
        "code": "통신 11-5-2-5",
        "name": "접지전극(봉) 설치 m -",
        "spec": "저감제 주입 및 접지저항 측정",
        "unit": "0.06",
        "labors": {
            "용접공": 0.01
        },
        "category": "device",
        "page": 413,
        "keywords": [
            "접지전극(봉) 설치 m -",
            "저감제 주입 및 접지저항 측정"
        ]
    },
    {
        "code": "통신 11-6-2",
        "name": "서지보호기용 외함 설치(300 x 300)",
        "spec": "서지보호기(SPD)",
        "unit": "대",
        "labors": {
            "통신내선공": 0.11
        },
        "category": "device",
        "page": 414,
        "keywords": [
            "서지보호기용 외함 설치(300 x 300)",
            "서지보호기(SPD)"
        ]
    },
    {
        "code": "통신 11-6-2",
        "name": "전원용",
        "spec": "서지보호기(SPD)",
        "unit": "개",
        "labors": {
            "통신내선공": 0.24
        },
        "category": "device",
        "page": 414,
        "keywords": [
            "전원용",
            "서지보호기(SPD)"
        ]
    },
    {
        "code": "통신 11-6-2",
        "name": "통신용(데이터, 영상)",
        "spec": "서지보호기(SPD)",
        "unit": "개",
        "labors": {
            "통신내선공": 0.14
        },
        "category": "device",
        "page": 414,
        "keywords": [
            "통신용(데이터, 영상)",
            "서지보호기(SPD)"
        ]
    },
    {
        "code": "통신 11-6-3",
        "name": "천장 천장",
        "spec": "전자기펄스(EMP) 방호설비",
        "unit": "㎡",
        "labors": {
            "통신외선공": 0.2,
            "통신설비공": 0.65,
            "특별인부": 0.16
        },
        "category": "device",
        "page": 415,
        "keywords": [
            "천장 천장",
            "전자기펄스(EMP) 방호설비"
        ]
    },
    {
        "code": "통신 11-6-3",
        "name": "모서리",
        "spec": "전자기펄스(EMP) 방호설비",
        "unit": "개소",
        "labors": {
            "통신외선공": 0.2,
            "통신설비공": 0.13,
            "특별인부": 0.03
        },
        "category": "device",
        "page": 415,
        "keywords": [
            "모서리",
            "전자기펄스(EMP) 방호설비"
        ]
    },
    {
        "code": "통신 11-6-3",
        "name": "차폐판 바닥",
        "spec": "전자기펄스(EMP) 방호설비",
        "unit": "㎡",
        "labors": {
            "통신외선공": 0.49,
            "통신설비공": 0.33,
            "특별인부": 0.08
        },
        "category": "device",
        "page": 415,
        "keywords": [
            "차폐판 바닥",
            "전자기펄스(EMP) 방호설비"
        ]
    },
    {
        "code": "통신 11-6-3",
        "name": "벽",
        "spec": "전자기펄스(EMP) 방호설비",
        "unit": "㎡",
        "labors": {
            "통신외선공": 0.42,
            "통신설비공": 0.28,
            "특별인부": 0.07
        },
        "category": "device",
        "page": 415,
        "keywords": [
            "벽",
            "전자기펄스(EMP) 방호설비"
        ]
    },
    {
        "code": "통신 11-6-3",
        "name": "기둥",
        "spec": "전자기펄스(EMP) 방호설비",
        "unit": "㎡",
        "labors": {
            "통신외선공": 0.63,
            "통신설비공": 0.42,
            "특별인부": 0.11
        },
        "category": "device",
        "page": 415,
        "keywords": [
            "기둥",
            "전자기펄스(EMP) 방호설비"
        ]
    },
    {
        "code": "통신 11-6-3",
        "name": "허니컴 600㎜x600㎜x3/16“이하",
        "spec": "전자기펄스(EMP) 방호설비",
        "unit": "대",
        "labors": {
            "통신설비공": 0.39
        },
        "category": "device",
        "page": 415,
        "keywords": [
            "허니컴 600㎜x600㎜x3/16“이하",
            "전자기펄스(EMP) 방호설비"
        ]
    },
    {
        "code": "통신 11-6-3",
        "name": "차폐필터 300㎜x90㎜x45㎜ 이하",
        "spec": "전자기펄스(EMP) 방호설비",
        "unit": "대",
        "labors": {
            "통신설비공": 0.3
        },
        "category": "device",
        "page": 415,
        "keywords": [
            "차폐필터 300㎜x90㎜x45㎜ 이하",
            "전자기펄스(EMP) 방호설비"
        ]
    },
    {
        "code": "통신 11-7-1",
        "name": "운반 및 설치",
        "spec": "자동전압 조정기",
        "unit": "대",
        "labors": {
            "통신설비공": 6.0,
            "보통인부": 3.6,
            "통신내선공": 2.4
        },
        "category": "device",
        "page": 416,
        "keywords": [
            "운반 및 설치",
            "자동전압 조정기"
        ]
    },
    {
        "code": "통신 11-7-1",
        "name": "결선 및 조정시험",
        "spec": "자동전압 조정기",
        "unit": "대",
        "labors": {
            "통신설비공": 4.0,
            "보통인부": 2.4,
            "통신내선공": 1.6
        },
        "category": "device",
        "page": 416,
        "keywords": [
            "결선 및 조정시험",
            "자동전압 조정기"
        ]
    },
    {
        "code": "통신 11-7-1",
        "name": "500kva이하 조작반설치",
        "spec": "자동전압 조정기",
        "unit": "대",
        "labors": {
            "통신내선공": 1.2,
            "통신설비공": 3.0,
            "보통인부": 1.8
        },
        "category": "device",
        "page": 416,
        "keywords": [
            "500kva이하 조작반설치",
            "자동전압 조정기"
        ]
    },
    {
        "code": "통신 11-7-1",
        "name": "1,200kva이하 조작반설치",
        "spec": "자동전압 조정기",
        "unit": "대",
        "labors": {
            "통신내선공": 1.2,
            "통신설비공": 3.0,
            "보통인부": 1.8
        },
        "category": "device",
        "page": 416,
        "keywords": [
            "1,200kva이하 조작반설치",
            "자동전압 조정기"
        ]
    },
    {
        "code": "통신 11-7-5-1",
        "name": "30AF 이하 개 0.19 0.20 0.30",
        "spec": "차단기 및 개폐기 등",
        "unit": "개",
        "labors": {
            "통신내선공": 0.11
        },
        "category": "device",
        "page": 418,
        "keywords": [
            "30AF 이하 개 0.19 0.20 0.30",
            "차단기 및 개폐기 등"
        ]
    },
    {
        "code": "통신 11-7-5-1",
        "name": "50 이하 개 0.19 0.20 0.30",
        "spec": "차단기 및 개폐기 등",
        "unit": "개",
        "labors": {
            "통신내선공": 0.15
        },
        "category": "device",
        "page": 418,
        "keywords": [
            "50 이하 개 0.19 0.20 0.30",
            "차단기 및 개폐기 등"
        ]
    },
    {
        "code": "통신 11-7-5-1",
        "name": "100 이하 개 0.19 0.20 0.30",
        "spec": "차단기 및 개폐기 등",
        "unit": "개",
        "labors": {
            "통신내선공": 0.23
        },
        "category": "device",
        "page": 418,
        "keywords": [
            "100 이하 개 0.19 0.20 0.30",
            "차단기 및 개폐기 등"
        ]
    },
    {
        "code": "통신 11-7-5-1",
        "name": "225 이하 개 0.19 0.20 0.30",
        "spec": "차단기 및 개폐기 등",
        "unit": "개",
        "labors": {
            "통신내선공": 0.29
        },
        "category": "device",
        "page": 418,
        "keywords": [
            "225 이하 개 0.19 0.20 0.30",
            "차단기 및 개폐기 등"
        ]
    },
    {
        "code": "통신 11-7-5-2",
        "name": "1,500A 이하",
        "spec": "저압 자동절체 스위치",
        "unit": "대",
        "labors": {
            "통신내선공": 1.84
        },
        "category": "device",
        "page": 418,
        "keywords": [
            "1,500A 이하",
            "저압 자동절체 스위치"
        ]
    },
    {
        "code": "통신 11-7-5-2",
        "name": "1,500A 초과 ~ 3,000A",
        "spec": "저압 자동절체 스위치",
        "unit": "대",
        "labors": {
            "통신내선공": 2.08
        },
        "category": "device",
        "page": 418,
        "keywords": [
            "1,500A 초과 ~ 3,000A",
            "저압 자동절체 스위치"
        ]
    },
    {
        "code": "통신 11-7-5-2",
        "name": "3,000A초과 ~ 5,000A까지",
        "spec": "저압 자동절체 스위치",
        "unit": "대",
        "labors": {
            "통신내선공": 2.4
        },
        "category": "device",
        "page": 418,
        "keywords": [
            "3,000A초과 ~ 5,000A까지",
            "저압 자동절체 스위치"
        ]
    },
    {
        "code": "통신 12-1-1",
        "name": "연선전화",
        "spec": "통화장치",
        "unit": "대",
        "labors": {
            "통신설비공": 0.48,
            "통신케이블공": 0.52
        },
        "category": "device",
        "page": 421,
        "keywords": [
            "연선전화",
            "통화장치"
        ]
    },
    {
        "code": "통신 12-1-1",
        "name": "건널목 주장치 및 전원장치",
        "spec": "통화장치",
        "unit": "대",
        "labors": {
            "통신설비공": 1.13
        },
        "category": "device",
        "page": 421,
        "keywords": [
            "건널목 주장치 및 전원장치",
            "통화장치"
        ]
    },
    {
        "code": "통신 12-1-1",
        "name": "비상직통전화 자장치",
        "spec": "통화장치",
        "unit": "대",
        "labors": {
            "통신외선공": 0.35,
            "통신케이블공": 0.56
        },
        "category": "device",
        "page": 421,
        "keywords": [
            "비상직통전화 자장치",
            "통화장치"
        ]
    },
    {
        "code": "통신 12-1-1",
        "name": "주장치",
        "spec": "통화장치",
        "unit": "대",
        "labors": {
            "통신설비공": 0.75,
            "통신케이블공": 0.83
        },
        "category": "device",
        "page": 421,
        "keywords": [
            "주장치",
            "통화장치"
        ]
    },
    {
        "code": "통신 12-1-1",
        "name": "비상게이트 자장치 및 게이트",
        "spec": "통화장치",
        "unit": "대",
        "labors": {
            "통신설비공": 2.19,
            "통신케이블공": 2.5
        },
        "category": "device",
        "page": 421,
        "keywords": [
            "비상게이트 자장치 및 게이트",
            "통화장치"
        ]
    },
    {
        "code": "통신 12-1-1",
        "name": "모니터 및 인터폰",
        "spec": "통화장치",
        "unit": "대",
        "labors": {
            "통신설비공": 0.5,
            "통신케이블공": 0.25
        },
        "category": "device",
        "page": 421,
        "keywords": [
            "모니터 및 인터폰",
            "통화장치"
        ]
    },
    {
        "code": "통신 12-2-1",
        "name": "보안기",
        "spec": "기기신설",
        "unit": "개",
        "labors": {
            "통신내선공": 0.2
        },
        "category": "device",
        "page": 422,
        "keywords": [
            "보안기",
            "기기신설"
        ]
    },
    {
        "code": "통신 12-2-1",
        "name": "전화기 자석",
        "spec": "기기신설",
        "unit": "개",
        "labors": {
            "통신내선공": 0.3
        },
        "category": "device",
        "page": 422,
        "keywords": [
            "전화기 자석",
            "기기신설"
        ]
    },
    {
        "code": "통신 12-2-1",
        "name": "전화기 공전",
        "spec": "기기신설",
        "unit": "개",
        "labors": {
            "통신내선공": 0.5
        },
        "category": "device",
        "page": 422,
        "keywords": [
            "전화기 공전",
            "기기신설"
        ]
    },
    {
        "code": "통신 12-2-1",
        "name": "강력전화기(유도방지장치 포함)",
        "spec": "기기신설",
        "unit": "개",
        "labors": {
            "통신내선공": 1.0
        },
        "category": "device",
        "page": 422,
        "keywords": [
            "강력전화기(유도방지장치 포함)",
            "기기신설"
        ]
    },
    {
        "code": "통신 12-2-1",
        "name": "방수, 방폭, 방진, 함체",
        "spec": "기기신설",
        "unit": "개",
        "labors": {
            "통신내선공": 1.5
        },
        "category": "device",
        "page": 422,
        "keywords": [
            "방수, 방폭, 방진, 함체",
            "기기신설"
        ]
    },
    {
        "code": "통신 12-2-1",
        "name": "Dial",
        "spec": "기기신설",
        "unit": "개",
        "labors": {
            "통신내선공": 0.15
        },
        "category": "device",
        "page": 422,
        "keywords": [
            "Dial",
            "기기신설"
        ]
    },
    {
        "code": "통신 12-2-1",
        "name": "부저",
        "spec": "기기신설",
        "unit": "개",
        "labors": {
            "통신내선공": 0.08
        },
        "category": "device",
        "page": 422,
        "keywords": [
            "부저",
            "기기신설"
        ]
    },
    {
        "code": "통신 12-2-1",
        "name": "전령 100㎜ ~ 200㎜",
        "spec": "기기신설",
        "unit": "개",
        "labors": {
            "통신내선공": 0.16
        },
        "category": "device",
        "page": 422,
        "keywords": [
            "전령 100㎜ ~ 200㎜",
            "기기신설"
        ]
    },
    {
        "code": "통신 12-2-1",
        "name": "모터싸이렌(마그넷싸이렌 포함)",
        "spec": "기기신설",
        "unit": "개",
        "labors": {
            "통신내선공": 1.6
        },
        "category": "device",
        "page": 422,
        "keywords": [
            "모터싸이렌(마그넷싸이렌 포함)",
            "기기신설"
        ]
    },
    {
        "code": "통신 12-2-1",
        "name": "누름단추 옥외용 고성전화기",
        "spec": "기기신설",
        "unit": "개",
        "labors": {
            "통신내선공": 0.16
        },
        "category": "device",
        "page": 422,
        "keywords": [
            "누름단추 옥외용 고성전화기",
            "기기신설"
        ]
    },
    {
        "code": "통신 12-2-1",
        "name": "확성기연락용",
        "spec": "기기신설",
        "unit": "개",
        "labors": {
            "통신내선공": 0.7
        },
        "category": "device",
        "page": 422,
        "keywords": [
            "확성기연락용",
            "기기신설"
        ]
    },
    {
        "code": "통신 12-2-1",
        "name": "인터폰",
        "spec": "기기신설",
        "unit": "개",
        "labors": {
            "통신내선공": 0.06
        },
        "category": "device",
        "page": 422,
        "keywords": [
            "인터폰",
            "기기신설"
        ]
    },
    {
        "code": "통신 12-2-1",
        "name": "인터폰 교환장치",
        "spec": "기기신설",
        "unit": "개",
        "labors": {
            "통신설비공": 1.2
        },
        "category": "device",
        "page": 422,
        "keywords": [
            "인터폰 교환장치",
            "기기신설"
        ]
    },
    {
        "code": "통신 12-2-1",
        "name": "주장치 20회로 이하",
        "spec": "기기신설",
        "unit": "개",
        "labors": {
            "통신설비공": 2.0,
            "통신내선공": 2.0
        },
        "category": "device",
        "page": 422,
        "keywords": [
            "주장치 20회로 이하",
            "기기신설"
        ]
    },
    {
        "code": "통신 12-2-1",
        "name": "10회로 이하",
        "spec": "기기신설",
        "unit": "개",
        "labors": {
            "통신설비공": 2.0,
            "통신내선공": 1.0
        },
        "category": "device",
        "page": 422,
        "keywords": [
            "10회로 이하",
            "기기신설"
        ]
    },
    {
        "code": "통신 12-2-1",
        "name": "냉·난방기 전기형",
        "spec": "기기신설",
        "unit": "개",
        "labors": {
            "통신설비공": 0.52,
            "보통인부": 0.27
        },
        "category": "device",
        "page": 422,
        "keywords": [
            "냉·난방기 전기형",
            "기기신설"
        ]
    },
    {
        "code": "통신 12-2-1",
        "name": "가스형",
        "spec": "기기신설",
        "unit": "개",
        "labors": {
            "통신설비공": 0.62,
            "보통인부": 0.32
        },
        "category": "device",
        "page": 422,
        "keywords": [
            "가스형",
            "기기신설"
        ]
    },
    {
        "code": "통신 12-2-2-1",
        "name": "RF신호 송수신장치 1.80 -",
        "spec": "지상장치",
        "unit": "대",
        "labors": {
            "특별인부": 1.76
        },
        "category": "device",
        "page": 423,
        "keywords": [
            "RF신호 송수신장치 1.80 -",
            "지상장치"
        ]
    },
    {
        "code": "통신 12-2-2-2",
        "name": "영상신호 변환장치 1.58",
        "spec": "차상장치",
        "unit": "대",
        "labors": {
            "통신케이블공": 1.5
        },
        "category": "device",
        "page": 424,
        "keywords": [
            "영상신호 변환장치 1.58",
            "차상장치"
        ]
    },
    {
        "code": "통신 12-2-2-2",
        "name": "RF신호 송수신장치 1.34",
        "spec": "차상장치",
        "unit": "대",
        "labors": {
            "통신케이블공": 1.16
        },
        "category": "device",
        "page": 424,
        "keywords": [
            "RF신호 송수신장치 1.34",
            "차상장치"
        ]
    },
    {
        "code": "통신 12-2-2-2",
        "name": "영상 표시부 -",
        "spec": "차상장치",
        "unit": "대",
        "labors": {
            "통신설비공": 1.34,
            "통신케이블공": 1.42
        },
        "category": "device",
        "page": 424,
        "keywords": [
            "영상 표시부 -",
            "차상장치"
        ]
    },
    {
        "code": "통신 12-2-3",
        "name": "모시계(또는 부모시계)",
        "spec": "전기시계설비",
        "unit": "개",
        "labors": {
            "통신내선공": 4.1
        },
        "category": "device",
        "page": 425,
        "keywords": [
            "모시계(또는 부모시계)",
            "전기시계설비"
        ]
    },
    {
        "code": "통신 12-2-3",
        "name": "300 ~ 400㎜",
        "spec": "전기시계설비",
        "unit": "개",
        "labors": {
            "통신내선공": 0.55
        },
        "category": "device",
        "page": 425,
        "keywords": [
            "300 ~ 400㎜",
            "전기시계설비"
        ]
    },
    {
        "code": "통신 12-2-3",
        "name": "단면 600㎜",
        "spec": "전기시계설비",
        "unit": "개",
        "labors": {
            "통신내선공": 0.69
        },
        "category": "device",
        "page": 425,
        "keywords": [
            "단면 600㎜",
            "전기시계설비"
        ]
    },
    {
        "code": "통신 12-2-3",
        "name": "자시계 900㎜ 이상",
        "spec": "전기시계설비",
        "unit": "개",
        "labors": {
            "통신내선공": 2.1
        },
        "category": "device",
        "page": 425,
        "keywords": [
            "자시계 900㎜ 이상",
            "전기시계설비"
        ]
    },
    {
        "code": "통신 12-2-3",
        "name": "양면 600㎜",
        "spec": "전기시계설비",
        "unit": "개",
        "labors": {
            "통신내선공": 1.05
        },
        "category": "device",
        "page": 425,
        "keywords": [
            "양면 600㎜",
            "전기시계설비"
        ]
    },
    {
        "code": "통신 12-2-3",
        "name": "900㎜ 이상",
        "spec": "전기시계설비",
        "unit": "개",
        "labors": {
            "통신내선공": 4.1
        },
        "category": "device",
        "page": 425,
        "keywords": [
            "900㎜ 이상",
            "전기시계설비"
        ]
    },
    {
        "code": "통신 12-2-5",
        "name": "영상표출장치 설치",
        "spec": "영상표출장치",
        "unit": "대",
        "labors": {
            "통신관련산업기사": 0.64,
            "통신설비공": 0.64
        },
        "category": "device",
        "page": 427,
        "keywords": [
            "영상표출장치 설치",
            "영상표출장치"
        ]
    },
    {
        "code": "통신 12-2-6",
        "name": "장애인용 음성유도기",
        "spec": "장애인용 음성유도기",
        "unit": "대",
        "labors": {
            "통신설비공": 0.17,
            "보통인부": 0.15
        },
        "category": "device",
        "page": 427,
        "keywords": [
            "장애인용 음성유도기",
            "장애인용 음성유도기"
        ]
    },
    {
        "code": "통신 12-3-11",
        "name": "S/W 설치 펌웨어 및 RF 모듈 설치 0.88",
        "spec": "교통카드 무인충전기",
        "unit": "-",
        "labors": {
            "통신설비공": 0.1
        },
        "category": "device",
        "page": 435,
        "keywords": [
            "S/W 설치 펌웨어 및 RF 모듈 설치 0.88",
            "교통카드 무인충전기"
        ]
    },
    {
        "code": "통신 12-3-11",
        "name": "기초정보 설정 펌웨어 및 RF 모듈 설치 0.88",
        "spec": "교통카드 무인충전기",
        "unit": "-",
        "labors": {
            "통신설비공": 0.32
        },
        "category": "device",
        "page": 435,
        "keywords": [
            "기초정보 설정 펌웨어 및 RF 모듈 설치 0.88",
            "교통카드 무인충전기"
        ]
    },
    {
        "code": "통신 12-3-11",
        "name": "종합시험 설정 펌웨어 및 RF 모듈 설치 0.88",
        "spec": "교통카드 무인충전기",
        "unit": "-",
        "labors": {
            "통신설비공": 0.14
        },
        "category": "device",
        "page": 435,
        "keywords": [
            "종합시험 설정 펌웨어 및 RF 모듈 설치 0.88",
            "교통카드 무인충전기"
        ]
    },
    {
        "code": "통신 12-5-1",
        "name": "배관(AMV용) 조",
        "spec": "ATS(Automatic Train Stop) 차상장치",
        "unit": "-",
        "labors": {
            "통신설비공": 0.5
        },
        "category": "device",
        "page": 439,
        "keywords": [
            "배관(AMV용) 조",
            "ATS(Automatic Train Stop) 차상장치"
        ]
    },
    {
        "code": "통신 12-5-1",
        "name": "배관(가압 스위치용) 조",
        "spec": "ATS(Automatic Train Stop) 차상장치",
        "unit": "-",
        "labors": {
            "통신설비공": 1.0
        },
        "category": "device",
        "page": 439,
        "keywords": [
            "배관(가압 스위치용) 조",
            "ATS(Automatic Train Stop) 차상장치"
        ]
    },
    {
        "code": "통신 12-5-1",
        "name": "설치대(차상자 설치대용) 조",
        "spec": "ATS(Automatic Train Stop) 차상장치",
        "unit": "-",
        "labors": {
            "통신설비공": 0.5
        },
        "category": "device",
        "page": 439,
        "keywords": [
            "설치대(차상자 설치대용) 조",
            "ATS(Automatic Train Stop) 차상장치"
        ]
    },
    {
        "code": "통신 13-3-2-3",
        "name": "인력점검(기별점검)",
        "spec": "OPGW 인력점검",
        "unit": "기",
        "labors": {
            "통신관련기사": 0.18,
            "송전전공": 0.18
        },
        "category": "device",
        "page": 449,
        "keywords": [
            "인력점검(기별점검)",
            "OPGW 인력점검"
        ]
    },
    {
        "code": "통신 13-3-2-4",
        "name": "기본정비",
        "spec": "OPGW 단순정비",
        "unit": "기",
        "labors": {
            "통신관련기사": 0.16,
            "송전전공": 0.32
        },
        "category": "device",
        "page": 449,
        "keywords": [
            "기본정비",
            "OPGW 단순정비"
        ]
    },
    {
        "code": "통신 13-3-2-4",
        "name": "댐퍼",
        "spec": "OPGW 단순정비",
        "unit": "개",
        "labors": {
            "통신관련기사": 0.03,
            "송전전공": 0.06
        },
        "category": "device",
        "page": 449,
        "keywords": [
            "댐퍼",
            "OPGW 단순정비"
        ]
    },
    {
        "code": "통신 13-3-2-4",
        "name": "케이블 슬립",
        "spec": "OPGW 단순정비",
        "unit": "편측",
        "labors": {
            "통신관련기사": 0.11,
            "송전전공": 0.21
        },
        "category": "device",
        "page": 449,
        "keywords": [
            "케이블 슬립",
            "OPGW 단순정비"
        ]
    },
    {
        "code": "통신 13-3-2-4",
        "name": "세부 점퍼 클램프",
        "spec": "OPGW 단순정비",
        "unit": "개",
        "labors": {
            "통신관련기사": 0.02,
            "송전전공": 0.04
        },
        "category": "device",
        "page": 449,
        "keywords": [
            "세부 점퍼 클램프",
            "OPGW 단순정비"
        ]
    },
    {
        "code": "통신 13-3-2-4",
        "name": "공정 접지선",
        "spec": "OPGW 단순정비",
        "unit": "개",
        "labors": {
            "통신관련기사": 0.04,
            "송전전공": 0.08
        },
        "category": "device",
        "page": 449,
        "keywords": [
            "공정 접지선",
            "OPGW 단순정비"
        ]
    },
    {
        "code": "통신 13-3-2-4",
        "name": "아마로드",
        "spec": "OPGW 단순정비",
        "unit": "개",
        "labors": {
            "통신관련기사": 0.04,
            "송전전공": 0.08
        },
        "category": "device",
        "page": 449,
        "keywords": [
            "아마로드",
            "OPGW 단순정비"
        ]
    },
    {
        "code": "통신 13-3-2-4",
        "name": "현수클램프 편위",
        "spec": "OPGW 단순정비",
        "unit": "개",
        "labors": {
            "통신관련기사": 0.13,
            "송전전공": 0.25
        },
        "category": "device",
        "page": 449,
        "keywords": [
            "현수클램프 편위",
            "OPGW 단순정비"
        ]
    },
    {
        "code": "통신 13-4-1-1",
        "name": "3. 보안등 점검 및 보수 조",
        "spec": "철탑 점검",
        "unit": "0.10",
        "labors": {
            "통신외선공": 0.2
        },
        "category": "device",
        "page": 450,
        "keywords": [
            "3. 보안등 점검 및 보수 조",
            "철탑 점검"
        ]
    },
    {
        "code": "통신 13-4-1-1",
        "name": "4. 피뢰침 점검 및 보수 조",
        "spec": "철탑 점검",
        "unit": "0.10",
        "labors": {
            "통신외선공": 0.2
        },
        "category": "device",
        "page": 450,
        "keywords": [
            "4. 피뢰침 점검 및 보수 조",
            "철탑 점검"
        ]
    },
    {
        "code": "통신 13-4-1-2",
        "name": "1. 공기누설 및 W/G지지철물 점 루트",
        "spec": "W/G(급전선) 점검",
        "unit": "0.12",
        "labors": {
            "통신관련산업기사": 0.2,
            "통신설비공": 0.25
        },
        "category": "device",
        "page": 450,
        "keywords": [
            "1. 공기누설 및 W/G지지철물 점 루트",
            "W/G(급전선) 점검"
        ]
    },
    {
        "code": "통신 13-4-1-2",
        "name": "2. W/G닥터 점검 및 보강 루트",
        "spec": "W/G(급전선) 점검",
        "unit": "-",
        "labors": {
            "통신관련산업기사": 0.12
        },
        "category": "device",
        "page": 450,
        "keywords": [
            "2. W/G닥터 점검 및 보강 루트",
            "W/G(급전선) 점검"
        ]
    },
    {
        "code": "통신 13-4-1-2",
        "name": "3. W/G시험 점검 및 보강 루트",
        "spec": "W/G(급전선) 점검",
        "unit": "0.15",
        "labors": {
            "통신설비공": 0.1
        },
        "category": "device",
        "page": 450,
        "keywords": [
            "3. W/G시험 점검 및 보강 루트",
            "W/G(급전선) 점검"
        ]
    },
    {
        "code": "통신 13-4-1-3",
        "name": "1. 디하이드레이터 점검 및 조정",
        "spec": "디하이드레이터 점검",
        "unit": "대",
        "labors": {
            "통신관련산업기사": 0.2
        },
        "category": "device",
        "page": 451,
        "keywords": [
            "1. 디하이드레이터 점검 및 조정",
            "디하이드레이터 점검"
        ]
    },
    {
        "code": "통신 13-4-1-3",
        "name": "2. 에어게이지․환 확인 및 보강",
        "spec": "디하이드레이터 점검",
        "unit": "대",
        "labors": {
            "통신관련산업기사": 0.2
        },
        "category": "device",
        "page": 451,
        "keywords": [
            "2. 에어게이지․환 확인 및 보강",
            "디하이드레이터 점검"
        ]
    },
    {
        "code": "통신 13-4-1-4",
        "name": "1. 전파장애물 제거 면",
        "spec": "반사판 점검",
        "unit": "-",
        "labors": {
            "통신관련산업기사": 0.5
        },
        "category": "device",
        "page": 451,
        "keywords": [
            "1. 전파장애물 제거 면",
            "반사판 점검"
        ]
    },
    {
        "code": "통신 13-4-1-4",
        "name": "2. 점검 및 방향조정 면",
        "spec": "반사판 점검",
        "unit": "0.50",
        "labors": {
            "통신관련산업기사": 0.5
        },
        "category": "device",
        "page": 451,
        "keywords": [
            "2. 점검 및 방향조정 면",
            "반사판 점검"
        ]
    },
    {
        "code": "통신 13-4-1-5",
        "name": "1. 휘다혼, 가이와이어의 볼트 면",
        "spec": "파라보라 안테나 점검",
        "unit": "-",
        "labors": {
            "통신관련기사": 0.4
        },
        "category": "device",
        "page": 451,
        "keywords": [
            "1. 휘다혼, 가이와이어의 볼트 면",
            "파라보라 안테나 점검"
        ]
    },
    {
        "code": "통신 13-4-1-5",
        "name": "2. 안테나상태 점검 볼트 면",
        "spec": "파라보라 안테나 점검",
        "unit": "0.17",
        "labors": {
            "통신관련기사": 0.17
        },
        "category": "device",
        "page": 451,
        "keywords": [
            "2. 안테나상태 점검 볼트 면",
            "파라보라 안테나 점검"
        ]
    },
    {
        "code": "통신 13-4-1-5",
        "name": "2. 안테나상태 점검 볼트 면",
        "spec": "파라보라 안테나 점검",
        "unit": "0.25",
        "labors": {
            "통신관련기사": 0.42
        },
        "category": "device",
        "page": 451,
        "keywords": [
            "2. 안테나상태 점검 볼트 면",
            "파라보라 안테나 점검"
        ]
    },
    {
        "code": "통신 13-4-1-5",
        "name": "2. 안테나상태 점검 볼트 면",
        "spec": "파라보라 안테나 점검",
        "unit": "0.39",
        "labors": {
            "통신관련기사": 0.63
        },
        "category": "device",
        "page": 451,
        "keywords": [
            "2. 안테나상태 점검 볼트 면",
            "파라보라 안테나 점검"
        ]
    },
    {
        "code": "통신 13-4-3",
        "name": "단독형 대",
        "spec": "무선AP 점검",
        "unit": "0.20",
        "labors": {
            "통신관련산업기사": 0.2
        },
        "category": "device",
        "page": 452,
        "keywords": [
            "단독형 대",
            "무선AP 점검"
        ]
    },
    {
        "code": "통신 13-4-3",
        "name": "통합형 대",
        "spec": "무선AP 점검",
        "unit": "0.14",
        "labors": {
            "통신관련산업기사": 0.14
        },
        "category": "device",
        "page": 452,
        "keywords": [
            "통합형 대",
            "무선AP 점검"
        ]
    },
    {
        "code": "통신 13-6-3",
        "name": "전원부 점검",
        "spec": "전파수신기 (30MHz이하) 점검",
        "unit": "대",
        "labors": {
            "통신관련산업기사": 0.3,
            "통신관련기능사": 0.58
        },
        "category": "device",
        "page": 465,
        "keywords": [
            "전원부 점검",
            "전파수신기 (30MHz이하) 점검"
        ]
    },
    {
        "code": "통신 13-6-3",
        "name": "수신부(Receiver Unit) 점검",
        "spec": "전파수신기 (30MHz이하) 점검",
        "unit": "대",
        "labors": {
            "통신관련산업기사": 0.58,
            "통신관련기능사": 0.31
        },
        "category": "device",
        "page": 465,
        "keywords": [
            "수신부(Receiver Unit) 점검",
            "전파수신기 (30MHz이하) 점검"
        ]
    },
    {
        "code": "통신 13-6-3",
        "name": "주파수측정 및 교정",
        "spec": "전파수신기 (30MHz이하) 점검",
        "unit": "대",
        "labors": {
            "통신관련산업기사": 0.31,
            "통신관련기능사": 0.35
        },
        "category": "device",
        "page": 465,
        "keywords": [
            "주파수측정 및 교정",
            "전파수신기 (30MHz이하) 점검"
        ]
    },
    {
        "code": "통신 13-6-3",
        "name": "전원, 전압측정 및 교정",
        "spec": "전파수신기 (30MHz이하) 점검",
        "unit": "대",
        "labors": {
            "통신관련산업기사": 0.16,
            "통신관련기능사": 0.16
        },
        "category": "device",
        "page": 465,
        "keywords": [
            "전원, 전압측정 및 교정",
            "전파수신기 (30MHz이하) 점검"
        ]
    },
    {
        "code": "통신 13-6-3",
        "name": "종합시험 및 인계",
        "spec": "전파수신기 (30MHz이하) 점검",
        "unit": "대",
        "labors": {
            "통신관련산업기사": 0.19,
            "통신관련기능사": 0.19
        },
        "category": "device",
        "page": 465,
        "keywords": [
            "종합시험 및 인계",
            "전파수신기 (30MHz이하) 점검"
        ]
    },
    {
        "code": "통신 13-6-7",
        "name": "충전부 점검",
        "spec": "초단파대 양방향 무선전화장치",
        "unit": "대",
        "labors": {
            "통신관련기능사": 0.3
        },
        "category": "device",
        "page": 467,
        "keywords": [
            "충전부 점검",
            "초단파대 양방향 무선전화장치"
        ]
    },
    {
        "code": "통신 13-6-7",
        "name": "송신부(Transmitter Unit) 점검",
        "spec": "초단파대 양방향 무선전화장치",
        "unit": "대",
        "labors": {
            "통신관련산업기사": 0.36
        },
        "category": "device",
        "page": 467,
        "keywords": [
            "송신부(Transmitter Unit) 점검",
            "초단파대 양방향 무선전화장치"
        ]
    },
    {
        "code": "통신 13-6-7",
        "name": "수신부(Receiver Unit) 점검",
        "spec": "초단파대 양방향 무선전화장치",
        "unit": "대",
        "labors": {
            "통신관련산업기사": 0.46
        },
        "category": "device",
        "page": 467,
        "keywords": [
            "수신부(Receiver Unit) 점검",
            "초단파대 양방향 무선전화장치"
        ]
    },
    {
        "code": "통신 13-6-7",
        "name": "공중선 출력측정 및 교정",
        "spec": "초단파대 양방향 무선전화장치",
        "unit": "대",
        "labors": {
            "통신관련산업기사": 0.1
        },
        "category": "device",
        "page": 467,
        "keywords": [
            "공중선 출력측정 및 교정",
            "초단파대 양방향 무선전화장치"
        ]
    },
    {
        "code": "통신 13-6-7",
        "name": "전원, 전압 측정 및 교정",
        "spec": "초단파대 양방향 무선전화장치",
        "unit": "대",
        "labors": {
            "통신관련기능사": 0.3
        },
        "category": "device",
        "page": 467,
        "keywords": [
            "전원, 전압 측정 및 교정",
            "초단파대 양방향 무선전화장치"
        ]
    },
    {
        "code": "통신 13-6-7",
        "name": "종합시험 및 인계",
        "spec": "초단파대 양방향 무선전화장치",
        "unit": "대",
        "labors": {
            "통신관련산업기사": 0.1
        },
        "category": "device",
        "page": 467,
        "keywords": [
            "종합시험 및 인계",
            "초단파대 양방향 무선전화장치"
        ]
    },
    {
        "code": "통신 13-6-13",
        "name": "전원부 점검",
        "spec": "선내지령장치 (Marine Public Addresser) 점검",
        "unit": "대",
        "labors": {
            "통신관련산업기사": 0.37,
            "통신관련기능사": 0.37
        },
        "category": "device",
        "page": 470,
        "keywords": [
            "전원부 점검",
            "선내지령장치 (Marine Public Addresser) 점검"
        ]
    },
    {
        "code": "통신 13-6-13",
        "name": "Power Amplifier Unit점검",
        "spec": "선내지령장치 (Marine Public Addresser) 점검",
        "unit": "대",
        "labors": {
            "통신관련산업기사": 0.45,
            "통신관련기능사": 0.45
        },
        "category": "device",
        "page": 470,
        "keywords": [
            "Power Amplifier Unit점검",
            "선내지령장치 (Marine Public Addresser) 점검"
        ]
    },
    {
        "code": "통신 13-6-13",
        "name": "Control Unit점검",
        "spec": "선내지령장치 (Marine Public Addresser) 점검",
        "unit": "대",
        "labors": {
            "통신관련산업기사": 0.68,
            "통신관련기능사": 0.68
        },
        "category": "device",
        "page": 470,
        "keywords": [
            "Control Unit점검",
            "선내지령장치 (Marine Public Addresser) 점검"
        ]
    },
    {
        "code": "통신 13-6-13",
        "name": "외부 Horn Speaker 점검",
        "spec": "선내지령장치 (Marine Public Addresser) 점검",
        "unit": "대",
        "labors": {
            "통신관련산업기사": 0.49,
            "통신관련기능사": 0.49
        },
        "category": "device",
        "page": 470,
        "keywords": [
            "외부 Horn Speaker 점검",
            "선내지령장치 (Marine Public Addresser) 점검"
        ]
    },
    {
        "code": "통신 13-6-13",
        "name": "실내 Speaker 점검",
        "spec": "선내지령장치 (Marine Public Addresser) 점검",
        "unit": "대",
        "labors": {
            "통신관련산업기사": 0.37,
            "통신관련기능사": 0.37
        },
        "category": "device",
        "page": 470,
        "keywords": [
            "실내 Speaker 점검",
            "선내지령장치 (Marine Public Addresser) 점검"
        ]
    },
    {
        "code": "통신 13-6-13",
        "name": "전원전압측정 및 교정",
        "spec": "선내지령장치 (Marine Public Addresser) 점검",
        "unit": "대",
        "labors": {
            "통신관련산업기사": 0.25,
            "통신관련기능사": 0.25
        },
        "category": "device",
        "page": 470,
        "keywords": [
            "전원전압측정 및 교정",
            "선내지령장치 (Marine Public Addresser) 점검"
        ]
    },
    {
        "code": "통신 13-6-13",
        "name": "종합시험 및 인계",
        "spec": "선내지령장치 (Marine Public Addresser) 점검",
        "unit": "대",
        "labors": {
            "통신관련산업기사": 0.31,
            "통신관련기능사": 0.31
        },
        "category": "device",
        "page": 470,
        "keywords": [
            "종합시험 및 인계",
            "선내지령장치 (Marine Public Addresser) 점검"
        ]
    },
    {
        "code": "통신 13-6-15",
        "name": "전원부 점검",
        "spec": "풍향풍속계 점검",
        "unit": "대",
        "labors": {
            "통신관련산업기사": 0.37,
            "통신관련기능사": 0.37
        },
        "category": "device",
        "page": 471,
        "keywords": [
            "전원부 점검",
            "풍향풍속계 점검"
        ]
    },
    {
        "code": "통신 13-6-15",
        "name": "Display Unit 점검",
        "spec": "풍향풍속계 점검",
        "unit": "대",
        "labors": {
            "통신관련산업기사": 0.4,
            "통신관련기능사": 0.4
        },
        "category": "device",
        "page": 471,
        "keywords": [
            "Display Unit 점검",
            "풍향풍속계 점검"
        ]
    },
    {
        "code": "통신 13-6-15",
        "name": "Wind Transmitter 점검",
        "spec": "풍향풍속계 점검",
        "unit": "대",
        "labors": {
            "통신관련산업기사": 1.07,
            "통신관련기능사": 1.07
        },
        "category": "device",
        "page": 471,
        "keywords": [
            "Wind Transmitter 점검",
            "풍향풍속계 점검"
        ]
    },
    {
        "code": "통신 13-6-15",
        "name": "풍향/풍속 측정 및 교정",
        "spec": "풍향풍속계 점검",
        "unit": "대",
        "labors": {
            "통신관련산업기사": 0.62,
            "통신관련기능사": 0.62
        },
        "category": "device",
        "page": 471,
        "keywords": [
            "풍향/풍속 측정 및 교정",
            "풍향풍속계 점검"
        ]
    },
    {
        "code": "통신 13-6-15",
        "name": "종합시험 및 인계",
        "spec": "풍향풍속계 점검",
        "unit": "대",
        "labors": {
            "통신관련산업기사": 0.18,
            "통신관련기능사": 0.18
        },
        "category": "device",
        "page": 471,
        "keywords": [
            "종합시험 및 인계",
            "풍향풍속계 점검"
        ]
    },
    {
        "code": "통신 13-6-16",
        "name": "전원부 및 충전기 점검 0.30",
        "spec": "Marine Radar(10Kw이하) 점검",
        "unit": "대",
        "labors": {
            "통신관련산업기사": 0.3
        },
        "category": "device",
        "page": 472,
        "keywords": [
            "전원부 및 충전기 점검 0.30",
            "Marine Radar(10Kw이하) 점검"
        ]
    },
    {
        "code": "통신 13-6-16",
        "name": "Display Unit 점검 0.48",
        "spec": "Marine Radar(10Kw이하) 점검",
        "unit": "대",
        "labors": {
            "통신관련산업기사": 0.48
        },
        "category": "device",
        "page": 472,
        "keywords": [
            "Display Unit 점검 0.48",
            "Marine Radar(10Kw이하) 점검"
        ]
    },
    {
        "code": "통신 13-6-16",
        "name": "Transceiver Unit 점검 0.31",
        "spec": "Marine Radar(10Kw이하) 점검",
        "unit": "대",
        "labors": {
            "통신관련산업기사": 0.31
        },
        "category": "device",
        "page": 472,
        "keywords": [
            "Transceiver Unit 점검 0.31",
            "Marine Radar(10Kw이하) 점검"
        ]
    },
    {
        "code": "통신 13-6-16",
        "name": "Scanner Unit 점검 0.80",
        "spec": "Marine Radar(10Kw이하) 점검",
        "unit": "대",
        "labors": {
            "통신관련기능사": 1.44
        },
        "category": "device",
        "page": 472,
        "keywords": [
            "Scanner Unit 점검 0.80",
            "Marine Radar(10Kw이하) 점검"
        ]
    },
    {
        "code": "통신 13-6-16",
        "name": "ARPA Unit 점검 0.60",
        "spec": "Marine Radar(10Kw이하) 점검",
        "unit": "대",
        "labors": {
            "통신관련산업기사": 0.6
        },
        "category": "device",
        "page": 472,
        "keywords": [
            "ARPA Unit 점검 0.60",
            "Marine Radar(10Kw이하) 점검"
        ]
    },
    {
        "code": "통신 13-6-16",
        "name": "신호측정 및 교정 0.28",
        "spec": "Marine Radar(10Kw이하) 점검",
        "unit": "대",
        "labors": {
            "통신관련산업기사": 0.28
        },
        "category": "device",
        "page": 472,
        "keywords": [
            "신호측정 및 교정 0.28",
            "Marine Radar(10Kw이하) 점검"
        ]
    },
    {
        "code": "통신 13-6-16",
        "name": "전원전압측정 및 교정 0.10",
        "spec": "Marine Radar(10Kw이하) 점검",
        "unit": "대",
        "labors": {
            "통신관련산업기사": 0.1
        },
        "category": "device",
        "page": 472,
        "keywords": [
            "전원전압측정 및 교정 0.10",
            "Marine Radar(10Kw이하) 점검"
        ]
    },
    {
        "code": "통신 13-6-16",
        "name": "종합시험 및 인계 0.10",
        "spec": "Marine Radar(10Kw이하) 점검",
        "unit": "대",
        "labors": {
            "통신관련산업기사": 0.1
        },
        "category": "device",
        "page": 472,
        "keywords": [
            "종합시험 및 인계 0.10",
            "Marine Radar(10Kw이하) 점검"
        ]
    },
    {
        "code": "통신 13-6-17",
        "name": "Radar Transponder 점검",
        "spec": "레이더 트랜스폰더 (SART) 점검",
        "unit": "대",
        "labors": {
            "통신관련산업기사": 0.67,
            "통신관련기능사": 0.21
        },
        "category": "device",
        "page": 472,
        "keywords": [
            "Radar Transponder 점검",
            "레이더 트랜스폰더 (SART) 점검"
        ]
    },
    {
        "code": "통신 13-6-17",
        "name": "주파수측정 및 교정",
        "spec": "레이더 트랜스폰더 (SART) 점검",
        "unit": "대",
        "labors": {
            "통신관련산업기사": 0.21,
            "통신관련기능사": 0.21
        },
        "category": "device",
        "page": 472,
        "keywords": [
            "주파수측정 및 교정",
            "레이더 트랜스폰더 (SART) 점검"
        ]
    },
    {
        "code": "통신 13-6-17",
        "name": "공중선 수신감도 측정 및 교정",
        "spec": "레이더 트랜스폰더 (SART) 점검",
        "unit": "대",
        "labors": {
            "통신관련산업기사": 0.22
        },
        "category": "device",
        "page": 472,
        "keywords": [
            "공중선 수신감도 측정 및 교정",
            "레이더 트랜스폰더 (SART) 점검"
        ]
    },
    {
        "code": "통신 13-6-17",
        "name": "종합시험 및 인계",
        "spec": "레이더 트랜스폰더 (SART) 점검",
        "unit": "대",
        "labors": {
            "통신관련산업기사": 0.2,
            "통신관련기능사": 0.2
        },
        "category": "device",
        "page": 472,
        "keywords": [
            "종합시험 및 인계",
            "레이더 트랜스폰더 (SART) 점검"
        ]
    },
    {
        "code": "통신 13-6-18",
        "name": "SAT/EPIRB 점검",
        "spec": "위성 비상위치 지시용 무선표지 설비(SAT / EPIRB) 점검",
        "unit": "대",
        "labors": {
            "통신관련산업기사": 0.77,
            "통신관련기능사": 0.77
        },
        "category": "device",
        "page": 473,
        "keywords": [
            "SAT/EPIRB 점검",
            "위성 비상위치 지시용 무선표지 설비(SAT / EPIRB) 점검"
        ]
    },
    {
        "code": "통신 13-6-18",
        "name": "주파수측정 및 교정",
        "spec": "위성 비상위치 지시용 무선표지 설비(SAT / EPIRB) 점검",
        "unit": "대",
        "labors": {
            "통신관련산업기사": 0.24,
            "통신관련기능사": 0.24
        },
        "category": "device",
        "page": 473,
        "keywords": [
            "주파수측정 및 교정",
            "위성 비상위치 지시용 무선표지 설비(SAT / EPIRB) 점검"
        ]
    },
    {
        "code": "통신 13-6-18",
        "name": "공중선 출력측정 및 교정",
        "spec": "위성 비상위치 지시용 무선표지 설비(SAT / EPIRB) 점검",
        "unit": "대",
        "labors": {
            "통신관련산업기사": 0.21,
            "통신관련기능사": 0.21
        },
        "category": "device",
        "page": 473,
        "keywords": [
            "공중선 출력측정 및 교정",
            "위성 비상위치 지시용 무선표지 설비(SAT / EPIRB) 점검"
        ]
    },
    {
        "code": "통신 13-6-18",
        "name": "전원, 전압 측정 및 교정",
        "spec": "위성 비상위치 지시용 무선표지 설비(SAT / EPIRB) 점검",
        "unit": "대",
        "labors": {
            "통신관련산업기사": 0.16,
            "통신관련기능사": 0.16
        },
        "category": "device",
        "page": 473,
        "keywords": [
            "전원, 전압 측정 및 교정",
            "위성 비상위치 지시용 무선표지 설비(SAT / EPIRB) 점검"
        ]
    },
    {
        "code": "통신 13-6-18",
        "name": "종합시험 및 인계",
        "spec": "위성 비상위치 지시용 무선표지 설비(SAT / EPIRB) 점검",
        "unit": "대",
        "labors": {
            "통신관련산업기사": 0.16,
            "통신관련기능사": 0.16
        },
        "category": "device",
        "page": 473,
        "keywords": [
            "종합시험 및 인계",
            "위성 비상위치 지시용 무선표지 설비(SAT / EPIRB) 점검"
        ]
    },
    {
        "code": "통신 13-6-19",
        "name": "전원부 점검 0.24",
        "spec": "무선방향탐지기(Radio Direction Finder) 점검",
        "unit": "대",
        "labors": {
            "통신관련산업기사": 0.24
        },
        "category": "device",
        "page": 473,
        "keywords": [
            "전원부 점검 0.24",
            "무선방향탐지기(Radio Direction Finder) 점검"
        ]
    },
    {
        "code": "통신 13-6-19",
        "name": "영상부(Video Unit) 점검 0.63",
        "spec": "무선방향탐지기(Radio Direction Finder) 점검",
        "unit": "대",
        "labors": {
            "통신관련산업기사": 0.63
        },
        "category": "device",
        "page": 473,
        "keywords": [
            "영상부(Video Unit) 점검 0.63",
            "무선방향탐지기(Radio Direction Finder) 점검"
        ]
    },
    {
        "code": "통신 13-6-19",
        "name": "수신부(Receiver Unit) 점검 0.44",
        "spec": "무선방향탐지기(Radio Direction Finder) 점검",
        "unit": "대",
        "labors": {
            "통신관련산업기사": 0.44
        },
        "category": "device",
        "page": 473,
        "keywords": [
            "수신부(Receiver Unit) 점검 0.44",
            "무선방향탐지기(Radio Direction Finder) 점검"
        ]
    },
    {
        "code": "통신 13-6-19",
        "name": "루프안테나 점검 -",
        "spec": "무선방향탐지기(Radio Direction Finder) 점검",
        "unit": "대",
        "labors": {
            "통신관련산업기사": 0.37,
            "통신관련기능사": 1.0
        },
        "category": "device",
        "page": 473,
        "keywords": [
            "루프안테나 점검 -",
            "무선방향탐지기(Radio Direction Finder) 점검"
        ]
    },
    {
        "code": "통신 13-6-19",
        "name": "오차측정 및 교정 0.60",
        "spec": "무선방향탐지기(Radio Direction Finder) 점검",
        "unit": "대",
        "labors": {
            "통신관련산업기사": 0.6
        },
        "category": "device",
        "page": 473,
        "keywords": [
            "오차측정 및 교정 0.60",
            "무선방향탐지기(Radio Direction Finder) 점검"
        ]
    },
    {
        "code": "통신 13-6-19",
        "name": "전원, 전압측정 및 교정 0.16",
        "spec": "무선방향탐지기(Radio Direction Finder) 점검",
        "unit": "대",
        "labors": {
            "통신관련산업기사": 0.16
        },
        "category": "device",
        "page": 473,
        "keywords": [
            "전원, 전압측정 및 교정 0.16",
            "무선방향탐지기(Radio Direction Finder) 점검"
        ]
    },
    {
        "code": "통신 13-6-19",
        "name": "종합시험 및 인계 0.16",
        "spec": "무선방향탐지기(Radio Direction Finder) 점검",
        "unit": "대",
        "labors": {
            "통신관련산업기사": 0.16
        },
        "category": "device",
        "page": 473,
        "keywords": [
            "종합시험 및 인계 0.16",
            "무선방향탐지기(Radio Direction Finder) 점검"
        ]
    },
    {
        "code": "통신 13-6-20",
        "name": "전원부 점검",
        "spec": "라디오부이 선택호출장치(SELL-CALL Signal Generator) 점검",
        "unit": "대",
        "labors": {
            "통신관련산업기사": 0.21,
            "통신관련기능사": 0.21
        },
        "category": "device",
        "page": 474,
        "keywords": [
            "전원부 점검",
            "라디오부이 선택호출장치(SELL-CALL Signal Generator) 점검"
        ]
    },
    {
        "code": "통신 13-6-20",
        "name": "Calling Transmitter 점검",
        "spec": "라디오부이 선택호출장치(SELL-CALL Signal Generator) 점검",
        "unit": "대",
        "labors": {
            "통신관련산업기사": 0.32,
            "통신관련기능사": 0.32
        },
        "category": "device",
        "page": 474,
        "keywords": [
            "Calling Transmitter 점검",
            "라디오부이 선택호출장치(SELL-CALL Signal Generator) 점검"
        ]
    },
    {
        "code": "통신 13-6-20",
        "name": "Calling Signal Generator 점검",
        "spec": "라디오부이 선택호출장치(SELL-CALL Signal Generator) 점검",
        "unit": "대",
        "labors": {
            "통신관련산업기사": 0.26,
            "통신관련기능사": 0.26
        },
        "category": "device",
        "page": 474,
        "keywords": [
            "Calling Signal Generator 점검",
            "라디오부이 선택호출장치(SELL-CALL Signal Generator) 점검"
        ]
    },
    {
        "code": "통신 13-6-20",
        "name": "Antenna Unit 점검",
        "spec": "라디오부이 선택호출장치(SELL-CALL Signal Generator) 점검",
        "unit": "대",
        "labors": {
            "통신관련기능사": 0.32
        },
        "category": "device",
        "page": 474,
        "keywords": [
            "Antenna Unit 점검",
            "라디오부이 선택호출장치(SELL-CALL Signal Generator) 점검"
        ]
    },
    {
        "code": "통신 13-6-20",
        "name": "주파수측정 및 교정",
        "spec": "라디오부이 선택호출장치(SELL-CALL Signal Generator) 점검",
        "unit": "대",
        "labors": {
            "통신관련산업기사": 0.13,
            "통신관련기능사": 0.13
        },
        "category": "device",
        "page": 474,
        "keywords": [
            "주파수측정 및 교정",
            "라디오부이 선택호출장치(SELL-CALL Signal Generator) 점검"
        ]
    },
    {
        "code": "통신 13-6-20",
        "name": "공중선 출력측정 및 교정",
        "spec": "라디오부이 선택호출장치(SELL-CALL Signal Generator) 점검",
        "unit": "대",
        "labors": {
            "통신관련산업기사": 0.2,
            "통신관련기능사": 0.2
        },
        "category": "device",
        "page": 474,
        "keywords": [
            "공중선 출력측정 및 교정",
            "라디오부이 선택호출장치(SELL-CALL Signal Generator) 점검"
        ]
    },
    {
        "code": "통신 13-6-20",
        "name": "전원전압측정 및 교정",
        "spec": "라디오부이 선택호출장치(SELL-CALL Signal Generator) 점검",
        "unit": "대",
        "labors": {
            "통신관련산업기사": 0.13,
            "통신관련기능사": 0.13
        },
        "category": "device",
        "page": 474,
        "keywords": [
            "전원전압측정 및 교정",
            "라디오부이 선택호출장치(SELL-CALL Signal Generator) 점검"
        ]
    },
    {
        "code": "통신 13-6-20",
        "name": "SELL CALL 시험",
        "spec": "라디오부이 선택호출장치(SELL-CALL Signal Generator) 점검",
        "unit": "대",
        "labors": {
            "통신관련산업기사": 0.29,
            "통신관련기능사": 0.29
        },
        "category": "device",
        "page": 474,
        "keywords": [
            "SELL CALL 시험",
            "라디오부이 선택호출장치(SELL-CALL Signal Generator) 점검"
        ]
    },
    {
        "code": "통신 13-6-20",
        "name": "종합시험 및 인계",
        "spec": "라디오부이 선택호출장치(SELL-CALL Signal Generator) 점검",
        "unit": "대",
        "labors": {
            "통신관련산업기사": 0.16,
            "통신관련기능사": 0.16
        },
        "category": "device",
        "page": 474,
        "keywords": [
            "종합시험 및 인계",
            "라디오부이 선택호출장치(SELL-CALL Signal Generator) 점검"
        ]
    },
    {
        "code": "통신 13-6-21",
        "name": "송신부 점검",
        "spec": "라디오부이 (Radio Buoy) 점검",
        "unit": "대",
        "labors": {
            "통신관련산업기사": 0.16
        },
        "category": "device",
        "page": 474,
        "keywords": [
            "송신부 점검",
            "라디오부이 (Radio Buoy) 점검"
        ]
    },
    {
        "code": "통신 13-6-21",
        "name": "수신부 점검",
        "spec": "라디오부이 (Radio Buoy) 점검",
        "unit": "대",
        "labors": {
            "통신관련산업기사": 0.2
        },
        "category": "device",
        "page": 474,
        "keywords": [
            "수신부 점검",
            "라디오부이 (Radio Buoy) 점검"
        ]
    },
    {
        "code": "통신 13-6-21",
        "name": "Antenna Unit 점검",
        "spec": "라디오부이 (Radio Buoy) 점검",
        "unit": "대",
        "labors": {
            "통신관련기능사": 0.33
        },
        "category": "device",
        "page": 474,
        "keywords": [
            "Antenna Unit 점검",
            "라디오부이 (Radio Buoy) 점검"
        ]
    },
    {
        "code": "통신 13-6-21",
        "name": "주파수측정 및 교정",
        "spec": "라디오부이 (Radio Buoy) 점검",
        "unit": "대",
        "labors": {
            "통신관련산업기사": 0.16
        },
        "category": "device",
        "page": 474,
        "keywords": [
            "주파수측정 및 교정",
            "라디오부이 (Radio Buoy) 점검"
        ]
    },
    {
        "code": "통신 13-6-21",
        "name": "공중선 출력측정 및 교정",
        "spec": "라디오부이 (Radio Buoy) 점검",
        "unit": "대",
        "labors": {
            "통신관련산업기사": 0.1
        },
        "category": "device",
        "page": 474,
        "keywords": [
            "공중선 출력측정 및 교정",
            "라디오부이 (Radio Buoy) 점검"
        ]
    },
    {
        "code": "통신 13-6-21",
        "name": "전원전압측정 및 교정",
        "spec": "라디오부이 (Radio Buoy) 점검",
        "unit": "대",
        "labors": {
            "통신관련기능사": 0.33
        },
        "category": "device",
        "page": 474,
        "keywords": [
            "전원전압측정 및 교정",
            "라디오부이 (Radio Buoy) 점검"
        ]
    },
    {
        "code": "통신 13-6-21",
        "name": "SELL CALL 수신 시험",
        "spec": "라디오부이 (Radio Buoy) 점검",
        "unit": "대",
        "labors": {
            "통신관련산업기사": 0.17
        },
        "category": "device",
        "page": 474,
        "keywords": [
            "SELL CALL 수신 시험",
            "라디오부이 (Radio Buoy) 점검"
        ]
    },
    {
        "code": "통신 13-6-21",
        "name": "종합시험",
        "spec": "라디오부이 (Radio Buoy) 점검",
        "unit": "대",
        "labors": {
            "통신관련산업기사": 0.16
        },
        "category": "device",
        "page": 474,
        "keywords": [
            "종합시험",
            "라디오부이 (Radio Buoy) 점검"
        ]
    },
    {
        "code": "통신 13-6-21",
        "name": "-",
        "spec": "라디오부이 (Radio Buoy) 점검",
        "unit": "대",
        "labors": {
            "통신관련산업기사": 444.0
        },
        "category": "device",
        "page": 474,
        "keywords": [
            "-",
            "라디오부이 (Radio Buoy) 점검"
        ]
    },
    {
        "code": "통신 13-6-22",
        "name": "전원부 점검 0.26",
        "spec": "해수온도계 점검",
        "unit": "대",
        "labors": {
            "통신관련산업기사": 0.26
        },
        "category": "device",
        "page": 475,
        "keywords": [
            "전원부 점검 0.26",
            "해수온도계 점검"
        ]
    },
    {
        "code": "통신 13-6-22",
        "name": "Display Unit 점검 0.44",
        "spec": "해수온도계 점검",
        "unit": "대",
        "labors": {
            "통신관련산업기사": 0.44
        },
        "category": "device",
        "page": 475,
        "keywords": [
            "Display Unit 점검 0.44",
            "해수온도계 점검"
        ]
    },
    {
        "code": "통신 13-6-22",
        "name": "선저 Sensor Unit 점검 1.10",
        "spec": "해수온도계 점검",
        "unit": "대",
        "labors": {
            "통신관련산업기사": 1.1
        },
        "category": "device",
        "page": 475,
        "keywords": [
            "선저 Sensor Unit 점검 1.10",
            "해수온도계 점검"
        ]
    },
    {
        "code": "통신 13-6-22",
        "name": "온도측정 및 교정 0.24",
        "spec": "해수온도계 점검",
        "unit": "대",
        "labors": {
            "통신관련산업기사": 0.24,
            "통신관련기능사": 0.93
        },
        "category": "device",
        "page": 475,
        "keywords": [
            "온도측정 및 교정 0.24",
            "해수온도계 점검"
        ]
    },
    {
        "code": "통신 13-6-22",
        "name": "전원전압측정 및 교정 0.16",
        "spec": "해수온도계 점검",
        "unit": "대",
        "labors": {
            "통신관련산업기사": 0.16
        },
        "category": "device",
        "page": 475,
        "keywords": [
            "전원전압측정 및 교정 0.16",
            "해수온도계 점검"
        ]
    },
    {
        "code": "통신 13-6-22",
        "name": "종합시험 및 인계 0.17",
        "spec": "해수온도계 점검",
        "unit": "대",
        "labors": {
            "통신관련산업기사": 0.17
        },
        "category": "device",
        "page": 475,
        "keywords": [
            "종합시험 및 인계 0.17",
            "해수온도계 점검"
        ]
    },
    {
        "code": "통신 13-6-23",
        "name": "전원부 점검 0.28",
        "spec": "네비텍스 수신기(Navtex Receiver) 점검",
        "unit": "대",
        "labors": {
            "통신관련산업기사": 0.28
        },
        "category": "device",
        "page": 475,
        "keywords": [
            "전원부 점검 0.28",
            "네비텍스 수신기(Navtex Receiver) 점검"
        ]
    },
    {
        "code": "통신 13-6-23",
        "name": "수신부(Receiver Unit) 점검 0.36",
        "spec": "네비텍스 수신기(Navtex Receiver) 점검",
        "unit": "대",
        "labors": {
            "통신관련산업기사": 0.36
        },
        "category": "device",
        "page": 475,
        "keywords": [
            "수신부(Receiver Unit) 점검 0.36",
            "네비텍스 수신기(Navtex Receiver) 점검"
        ]
    },
    {
        "code": "통신 13-6-23",
        "name": "Printer Drive Unit 점검 0.33",
        "spec": "네비텍스 수신기(Navtex Receiver) 점검",
        "unit": "대",
        "labors": {
            "통신관련산업기사": 0.33
        },
        "category": "device",
        "page": 475,
        "keywords": [
            "Printer Drive Unit 점검 0.33",
            "네비텍스 수신기(Navtex Receiver) 점검"
        ]
    },
    {
        "code": "통신 13-6-23",
        "name": "Antenna Unit 점검 -",
        "spec": "네비텍스 수신기(Navtex Receiver) 점검",
        "unit": "대",
        "labors": {
            "통신관련산업기사": 0.08,
            "통신관련기능사": 0.7
        },
        "category": "device",
        "page": 475,
        "keywords": [
            "Antenna Unit 점검 -",
            "네비텍스 수신기(Navtex Receiver) 점검"
        ]
    },
    {
        "code": "통신 13-6-23",
        "name": "전원전압측정 및 교정 0.12",
        "spec": "네비텍스 수신기(Navtex Receiver) 점검",
        "unit": "대",
        "labors": {
            "통신관련산업기사": 0.12
        },
        "category": "device",
        "page": 475,
        "keywords": [
            "전원전압측정 및 교정 0.12",
            "네비텍스 수신기(Navtex Receiver) 점검"
        ]
    },
    {
        "code": "통신 13-6-23",
        "name": "종합시험 및 인계 0.13",
        "spec": "네비텍스 수신기(Navtex Receiver) 점검",
        "unit": "대",
        "labors": {
            "통신관련산업기사": 0.13
        },
        "category": "device",
        "page": 475,
        "keywords": [
            "종합시험 및 인계 0.13",
            "네비텍스 수신기(Navtex Receiver) 점검"
        ]
    },
    {
        "code": "통신 13-6-26",
        "name": "전원부 점검",
        "spec": "자기컴퍼스(Magnetic Compass) 점검",
        "unit": "대",
        "labors": {
            "통신관련산업기사": 0.41,
            "통신관련기능사": 0.41
        },
        "category": "device",
        "page": 477,
        "keywords": [
            "전원부 점검",
            "자기컴퍼스(Magnetic Compass) 점검"
        ]
    },
    {
        "code": "통신 13-6-26",
        "name": "자기컴퍼스 본체 점검",
        "spec": "자기컴퍼스(Magnetic Compass) 점검",
        "unit": "대",
        "labors": {
            "통신관련산업기사": 0.86,
            "통신관련기능사": 0.86
        },
        "category": "device",
        "page": 477,
        "keywords": [
            "자기컴퍼스 본체 점검",
            "자기컴퍼스(Magnetic Compass) 점검"
        ]
    },
    {
        "code": "통신 13-6-26",
        "name": "자기컴퍼스 자차수정",
        "spec": "자기컴퍼스(Magnetic Compass) 점검",
        "unit": "대",
        "labors": {
            "통신관련산업기사": 1.47,
            "통신관련기능사": 1.47
        },
        "category": "device",
        "page": 477,
        "keywords": [
            "자기컴퍼스 자차수정",
            "자기컴퍼스(Magnetic Compass) 점검"
        ]
    },
    {
        "code": "통신 13-6-26",
        "name": "종합시험",
        "spec": "자기컴퍼스(Magnetic Compass) 점검",
        "unit": "대",
        "labors": {
            "통신관련산업기사": 0.39,
            "통신관련기능사": 0.39
        },
        "category": "device",
        "page": 477,
        "keywords": [
            "종합시험",
            "자기컴퍼스(Magnetic Compass) 점검"
        ]
    },
    {
        "code": "통신 13-6-27",
        "name": "전원부 점검",
        "spec": "자동조타장치(Auto Pilot) 점검",
        "unit": "대",
        "labors": {
            "통신관련산업기사": 0.46,
            "통신관련기능사": 0.46
        },
        "category": "device",
        "page": 477,
        "keywords": [
            "전원부 점검",
            "자동조타장치(Auto Pilot) 점검"
        ]
    },
    {
        "code": "통신 13-6-27",
        "name": "조타기 점검(Steering Stand)",
        "spec": "자동조타장치(Auto Pilot) 점검",
        "unit": "대",
        "labors": {
            "통신관련산업기사": 1.42,
            "통신관련기능사": 1.42
        },
        "category": "device",
        "page": 477,
        "keywords": [
            "조타기 점검(Steering Stand)",
            "자동조타장치(Auto Pilot) 점검"
        ]
    },
    {
        "code": "통신 13-6-27",
        "name": "추종장치 점검(Repeat Back Unit)",
        "spec": "자동조타장치(Auto Pilot) 점검",
        "unit": "대",
        "labors": {
            "통신관련산업기사": 1.37,
            "통신관련기능사": 1.37
        },
        "category": "device",
        "page": 477,
        "keywords": [
            "추종장치 점검(Repeat Back Unit)",
            "자동조타장치(Auto Pilot) 점검"
        ]
    },
    {
        "code": "통신 13-6-27",
        "name": "타각지시기 점검(Rudder Angle Indicator)",
        "spec": "자동조타장치(Auto Pilot) 점검",
        "unit": "대",
        "labors": {
            "통신관련산업기사": 1.67,
            "통신관련기능사": 1.67
        },
        "category": "device",
        "page": 477,
        "keywords": [
            "타각지시기 점검(Rudder Angle Indicator)",
            "자동조타장치(Auto Pilot) 점검"
        ]
    },
    {
        "code": "통신 13-6-27",
        "name": "종합시험",
        "spec": "자동조타장치(Auto Pilot) 점검",
        "unit": "대",
        "labors": {
            "통신관련산업기사": 0.62,
            "통신관련기능사": 0.62
        },
        "category": "device",
        "page": 477,
        "keywords": [
            "종합시험",
            "자동조타장치(Auto Pilot) 점검"
        ]
    },
    {
        "code": "통신 13-6-28",
        "name": "주컴퍼스(Master Compass) 본체 점검",
        "spec": "자이로컴퍼스(Gyro Compass) 점검",
        "unit": "대",
        "labors": {
            "통신관련산업기사": 2.15,
            "통신관련기능사": 2.15
        },
        "category": "device",
        "page": 478,
        "keywords": [
            "주컴퍼스(Master Compass) 본체 점검",
            "자이로컴퍼스(Gyro Compass) 점검"
        ]
    },
    {
        "code": "통신 13-6-28",
        "name": "인버터(Inverter Unit)점검",
        "spec": "자이로컴퍼스(Gyro Compass) 점검",
        "unit": "대",
        "labors": {
            "통신관련산업기사": 0.81,
            "통신관련기능사": 0.81
        },
        "category": "device",
        "page": 478,
        "keywords": [
            "인버터(Inverter Unit)점검",
            "자이로컴퍼스(Gyro Compass) 점검"
        ]
    },
    {
        "code": "통신 13-6-28",
        "name": "리피터 발신기 점검(리피터 컴퍼스 포함)",
        "spec": "자이로컴퍼스(Gyro Compass) 점검",
        "unit": "대",
        "labors": {
            "통신관련산업기사": 1.53,
            "통신관련기능사": 1.53
        },
        "category": "device",
        "page": 478,
        "keywords": [
            "리피터 발신기 점검(리피터 컴퍼스 포함)",
            "자이로컴퍼스(Gyro Compass) 점검"
        ]
    },
    {
        "code": "통신 13-6-28",
        "name": "종합시험",
        "spec": "자이로컴퍼스(Gyro Compass) 점검",
        "unit": "대",
        "labors": {
            "통신관련산업기사": 0.65,
            "통신관련기능사": 0.65
        },
        "category": "device",
        "page": 478,
        "keywords": [
            "종합시험",
            "자이로컴퍼스(Gyro Compass) 점검"
        ]
    },
    {
        "code": "통신 13-6-30",
        "name": "전원부 점검 0.24",
        "spec": "음향수신장치(SSR) 점검",
        "unit": "대",
        "labors": {
            "통신관련산업기사": 0.2
        },
        "category": "device",
        "page": 480,
        "keywords": [
            "전원부 점검 0.24",
            "음향수신장치(SSR) 점검"
        ]
    },
    {
        "code": "통신 13-6-30",
        "name": "Main Unit 점검 0.53",
        "spec": "음향수신장치(SSR) 점검",
        "unit": "대",
        "labors": {
            "통신관련산업기사": 0.5,
            "통신관련기능사": 0.67
        },
        "category": "device",
        "page": 480,
        "keywords": [
            "Main Unit 점검 0.53",
            "음향수신장치(SSR) 점검"
        ]
    },
    {
        "code": "통신 13-6-30",
        "name": "Microphone 점검 0.29",
        "spec": "음향수신장치(SSR) 점검",
        "unit": "대",
        "labors": {
            "통신관련산업기사": 0.25
        },
        "category": "device",
        "page": 480,
        "keywords": [
            "Microphone 점검 0.29",
            "음향수신장치(SSR) 점검"
        ]
    },
    {
        "code": "통신 13-6-30",
        "name": "신호 측정 및 교정 -",
        "spec": "음향수신장치(SSR) 점검",
        "unit": "대",
        "labors": {
            "통신관련산업기사": 0.24,
            "통신관련기능사": 0.46
        },
        "category": "device",
        "page": 480,
        "keywords": [
            "신호 측정 및 교정 -",
            "음향수신장치(SSR) 점검"
        ]
    },
    {
        "code": "통신 13-6-30",
        "name": "종합시험 0.28",
        "spec": "음향수신장치(SSR) 점검",
        "unit": "대",
        "labors": {
            "통신관련산업기사": 0.27
        },
        "category": "device",
        "page": 480,
        "keywords": [
            "종합시험 0.28",
            "음향수신장치(SSR) 점검"
        ]
    },
    {
        "code": "통신 13-6-35",
        "name": "송신부 및 수신부 점검 1.36",
        "spec": "소나(SONAR : Sound Navigating and Ranging) 점검",
        "unit": "대",
        "labors": {
            "통신관련산업기사": 1.36
        },
        "category": "device",
        "page": 483,
        "keywords": [
            "송신부 및 수신부 점검 1.36",
            "소나(SONAR : Sound Navigating and Ranging) 점검"
        ]
    },
    {
        "code": "통신 13-6-35",
        "name": "지시부 점검 1.53",
        "spec": "소나(SONAR : Sound Navigating and Ranging) 점검",
        "unit": "대",
        "labors": {
            "통신관련산업기사": 1.54,
            "통신관련기능사": 2.03
        },
        "category": "device",
        "page": 483,
        "keywords": [
            "지시부 점검 1.53",
            "소나(SONAR : Sound Navigating and Ranging) 점검"
        ]
    },
    {
        "code": "통신 13-6-35",
        "name": "선저 Dome 점검 1.79",
        "spec": "소나(SONAR : Sound Navigating and Ranging) 점검",
        "unit": "대",
        "labors": {
            "통신관련산업기사": 1.79
        },
        "category": "device",
        "page": 483,
        "keywords": [
            "선저 Dome 점검 1.79",
            "소나(SONAR : Sound Navigating and Ranging) 점검"
        ]
    },
    {
        "code": "통신 13-6-35",
        "name": "상하장치 점검 1.48",
        "spec": "소나(SONAR : Sound Navigating and Ranging) 점검",
        "unit": "대",
        "labors": {
            "통신관련산업기사": 1.48
        },
        "category": "device",
        "page": 483,
        "keywords": [
            "상하장치 점검 1.48",
            "소나(SONAR : Sound Navigating and Ranging) 점검"
        ]
    },
    {
        "code": "통신 13-6-35",
        "name": "종합시험 0.82",
        "spec": "소나(SONAR : Sound Navigating and Ranging) 점검",
        "unit": "대",
        "labors": {
            "통신관련산업기사": 0.82
        },
        "category": "device",
        "page": 483,
        "keywords": [
            "종합시험 0.82",
            "소나(SONAR : Sound Navigating and Ranging) 점검"
        ]
    },
    {
        "code": "통신 13-6-37",
        "name": "전원부 점검",
        "spec": "조류계 점검",
        "unit": "대",
        "labors": {
            "통신관련산업기사": 0.39,
            "통신관련기능사": 0.39
        },
        "category": "device",
        "page": 484,
        "keywords": [
            "전원부 점검",
            "조류계 점검"
        ]
    },
    {
        "code": "통신 13-6-37",
        "name": "Display Unit 점검",
        "spec": "조류계 점검",
        "unit": "대",
        "labors": {
            "통신관련산업기사": 0.63,
            "통신관련기능사": 0.63
        },
        "category": "device",
        "page": 484,
        "keywords": [
            "Display Unit 점검",
            "조류계 점검"
        ]
    },
    {
        "code": "통신 13-6-37",
        "name": "선저 Sensor 점검",
        "spec": "조류계 점검",
        "unit": "대",
        "labors": {
            "통신관련산업기사": 1.12,
            "통신관련기능사": 1.12
        },
        "category": "device",
        "page": 484,
        "keywords": [
            "선저 Sensor 점검",
            "조류계 점검"
        ]
    },
    {
        "code": "통신 13-6-37",
        "name": "송수신부 점검",
        "spec": "조류계 점검",
        "unit": "대",
        "labors": {
            "통신관련산업기사": 0.43,
            "통신관련기능사": 0.43
        },
        "category": "device",
        "page": 484,
        "keywords": [
            "송수신부 점검",
            "조류계 점검"
        ]
    },
    {
        "code": "통신 13-6-37",
        "name": "종합시험",
        "spec": "조류계 점검",
        "unit": "대",
        "labors": {
            "통신관련산업기사": 1.12,
            "통신관련기능사": 1.12
        },
        "category": "device",
        "page": 484,
        "keywords": [
            "종합시험",
            "조류계 점검"
        ]
    },
    {
        "code": "통신 13-6-39",
        "name": "전원부 점검 0.25",
        "spec": "조상기 점검",
        "unit": "대",
        "labors": {
            "통신관련산업기사": 0.25
        },
        "category": "device",
        "page": 485,
        "keywords": [
            "전원부 점검 0.25",
            "조상기 점검"
        ]
    },
    {
        "code": "통신 13-6-39",
        "name": "본체 점검 0.52",
        "spec": "조상기 점검",
        "unit": "대",
        "labors": {
            "통신관련산업기사": 0.52,
            "통신관련기능사": 0.69
        },
        "category": "device",
        "page": 485,
        "keywords": [
            "본체 점검 0.52",
            "조상기 점검"
        ]
    },
    {
        "code": "통신 13-6-39",
        "name": "측정 및 교정 0.45",
        "spec": "조상기 점검",
        "unit": "대",
        "labors": {
            "통신관련산업기사": 0.45,
            "통신관련기능사": 0.43
        },
        "category": "device",
        "page": 485,
        "keywords": [
            "측정 및 교정 0.45",
            "조상기 점검"
        ]
    },
    {
        "code": "통신 13-6-39",
        "name": "종합시험 0.41",
        "spec": "조상기 점검",
        "unit": "대",
        "labors": {
            "통신관련산업기사": 0.41
        },
        "category": "device",
        "page": 485,
        "keywords": [
            "종합시험 0.41",
            "조상기 점검"
        ]
    },
    {
        "code": "통신 13-6-40",
        "name": "전원부 점검 0.43",
        "spec": "조출기(HM : Hooking Master) 점검",
        "unit": "대",
        "labors": {
            "통신관련산업기사": 0.48
        },
        "category": "device",
        "page": 485,
        "keywords": [
            "전원부 점검 0.43",
            "조출기(HM : Hooking Master) 점검"
        ]
    },
    {
        "code": "통신 13-6-40",
        "name": "본체 및 Display 점검 0.49",
        "spec": "조출기(HM : Hooking Master) 점검",
        "unit": "대",
        "labors": {
            "통신관련기능사": 0.96
        },
        "category": "device",
        "page": 485,
        "keywords": [
            "본체 및 Display 점검 0.49",
            "조출기(HM : Hooking Master) 점검"
        ]
    },
    {
        "code": "통신 13-6-40",
        "name": "투승부 점검 0.43",
        "spec": "조출기(HM : Hooking Master) 점검",
        "unit": "대",
        "labors": {
            "통신관련산업기사": 0.49
        },
        "category": "device",
        "page": 485,
        "keywords": [
            "투승부 점검 0.43",
            "조출기(HM : Hooking Master) 점검"
        ]
    },
    {
        "code": "통신 13-6-40",
        "name": "종합시험 0.67",
        "spec": "조출기(HM : Hooking Master) 점검",
        "unit": "대",
        "labors": {
            "통신관련산업기사": 0.7
        },
        "category": "device",
        "page": 485,
        "keywords": [
            "종합시험 0.67",
            "조출기(HM : Hooking Master) 점검"
        ]
    },
    {
        "code": "통신 13-7-2",
        "name": "장치상태확인 대",
        "spec": "정류장 안내단말기 점검",
        "unit": "0.13",
        "labors": {
            "통신관련산업기사": 0.13
        },
        "category": "device",
        "page": 496,
        "keywords": [
            "장치상태확인 대",
            "정류장 안내단말기 점검"
        ]
    },
    {
        "code": "통신 13-7-2",
        "name": "기능 및 동작확인 대",
        "spec": "정류장 안내단말기 점검",
        "unit": "0.15",
        "labors": {
            "통신관련산업기사": 0.15
        },
        "category": "device",
        "page": 496,
        "keywords": [
            "기능 및 동작확인 대",
            "정류장 안내단말기 점검"
        ]
    },
    {
        "code": "통신 13-7-4",
        "name": "제어부 대",
        "spec": "노변기지국 점검",
        "unit": "0.27",
        "labors": {
            "통신관련산업기사": 0.27
        },
        "category": "device",
        "page": 496,
        "keywords": [
            "제어부 대",
            "노변기지국 점검"
        ]
    },
    {
        "code": "통신 13-7-4",
        "name": "안테나부 대",
        "spec": "노변기지국 점검",
        "unit": "0.22",
        "labors": {
            "통신관련산업기사": 0.22
        },
        "category": "device",
        "page": 496,
        "keywords": [
            "안테나부 대",
            "노변기지국 점검"
        ]
    },
    {
        "code": "통신 13-7-7",
        "name": "정류조 청소 및 점검",
        "spec": "수질원격감시시스템(TMS) 점검",
        "unit": "대",
        "labors": {
            "통신관련산업기사": 0.07,
            "통신관련기능사": 0.07
        },
        "category": "device",
        "page": 502,
        "keywords": [
            "정류조 청소 및 점검",
            "수질원격감시시스템(TMS) 점검"
        ]
    },
    {
        "code": "통신 13-7-7",
        "name": "데이터로거 점검",
        "spec": "수질원격감시시스템(TMS) 점검",
        "unit": "대",
        "labors": {
            "통신관련산업기사": 0.08,
            "통신관련기능사": 0.08
        },
        "category": "device",
        "page": 502,
        "keywords": [
            "데이터로거 점검",
            "수질원격감시시스템(TMS) 점검"
        ]
    },
    {
        "code": "통신 13-7-7",
        "name": "총질소(T-N)",
        "spec": "수질원격감시시스템(TMS) 점검",
        "unit": "대",
        "labors": {
            "통신관련산업기사": 0.6,
            "통신관련기능사": 0.6
        },
        "category": "device",
        "page": 502,
        "keywords": [
            "총질소(T-N)",
            "수질원격감시시스템(TMS) 점검"
        ]
    },
    {
        "code": "통신 13-7-7",
        "name": "측 총인(T-P)",
        "spec": "수질원격감시시스템(TMS) 점검",
        "unit": "대",
        "labors": {
            "통신관련산업기사": 0.6,
            "통신관련기능사": 0.6
        },
        "category": "device",
        "page": 502,
        "keywords": [
            "측 총인(T-P)",
            "수질원격감시시스템(TMS) 점검"
        ]
    },
    {
        "code": "통신 13-7-7",
        "name": "정 화학적산소요구량(COD)",
        "spec": "수질원격감시시스템(TMS) 점검",
        "unit": "대",
        "labors": {
            "통신관련산업기사": 0.66,
            "통신관련기능사": 0.66
        },
        "category": "device",
        "page": 502,
        "keywords": [
            "정 화학적산소요구량(COD)",
            "수질원격감시시스템(TMS) 점검"
        ]
    },
    {
        "code": "통신 13-7-7",
        "name": "기 부유물질(SS)",
        "spec": "수질원격감시시스템(TMS) 점검",
        "unit": "대",
        "labors": {
            "통신관련산업기사": 0.18,
            "통신관련기능사": 0.18
        },
        "category": "device",
        "page": 502,
        "keywords": [
            "기 부유물질(SS)",
            "수질원격감시시스템(TMS) 점검"
        ]
    },
    {
        "code": "통신 13-7-7",
        "name": "수소이온농도(pH)",
        "spec": "수질원격감시시스템(TMS) 점검",
        "unit": "대",
        "labors": {
            "통신관련산업기사": 0.18,
            "통신관련기능사": 0.18
        },
        "category": "device",
        "page": 502,
        "keywords": [
            "수소이온농도(pH)",
            "수질원격감시시스템(TMS) 점검"
        ]
    },
    {
        "code": "통신 13-7-8",
        "name": "출입통제 프로그램",
        "spec": "출입통제시스템 점검",
        "unit": "식",
        "labors": {
            "통신관련산업기사": 0.14,
            "통신관련기능사": 0.14
        },
        "category": "device",
        "page": 502,
        "keywords": [
            "출입통제 프로그램",
            "출입통제시스템 점검"
        ]
    },
    {
        "code": "통신 13-7-8",
        "name": "주제어장치(ACU)",
        "spec": "출입통제시스템 점검",
        "unit": "대",
        "labors": {
            "통신관련산업기사": 0.12,
            "통신관련기능사": 0.12
        },
        "category": "device",
        "page": 502,
        "keywords": [
            "주제어장치(ACU)",
            "출입통제시스템 점검"
        ]
    },
    {
        "code": "통신 13-7-8",
        "name": "Card Reader",
        "spec": "출입통제시스템 점검",
        "unit": "대",
        "labors": {
            "통신관련산업기사": 0.09,
            "통신관련기능사": 0.09
        },
        "category": "device",
        "page": 502,
        "keywords": [
            "Card Reader",
            "출입통제시스템 점검"
        ]
    },
    {
        "code": "통신 13-7-8",
        "name": "각종 부대장비",
        "spec": "출입통제시스템 점검",
        "unit": "대",
        "labors": {
            "통신관련산업기사": 0.07,
            "통신관련기능사": 0.07
        },
        "category": "device",
        "page": 502,
        "keywords": [
            "각종 부대장비",
            "출입통제시스템 점검"
        ]
    },
    {
        "code": "통신 13-7-11",
        "name": "측정소 점검 대",
        "spec": "다항목 수질계측기 점검",
        "unit": "0.11",
        "labors": {
            "통신관련산업기사": 0.11
        },
        "category": "device",
        "page": 504,
        "keywords": [
            "측정소 점검 대",
            "다항목 수질계측기 점검"
        ]
    },
    {
        "code": "통신 13-7-11",
        "name": "외함 및 샘플링 펌프 점검 대",
        "spec": "다항목 수질계측기 점검",
        "unit": "0.11",
        "labors": {
            "통신관련산업기사": 0.11
        },
        "category": "device",
        "page": 504,
        "keywords": [
            "외함 및 샘플링 펌프 점검 대",
            "다항목 수질계측기 점검"
        ]
    },
    {
        "code": "통신 13-7-11",
        "name": "탁도 및 샘플링 펌프 점검 대",
        "spec": "다항목 수질계측기 점검",
        "unit": "0.18",
        "labors": {
            "통신관련산업기사": 0.18
        },
        "category": "device",
        "page": 504,
        "keywords": [
            "탁도 및 샘플링 펌프 점검 대",
            "다항목 수질계측기 점검"
        ]
    },
    {
        "code": "통신 13-7-11",
        "name": "잔류염소 및 샘플링 펌프 점검 대",
        "spec": "다항목 수질계측기 점검",
        "unit": "0.07",
        "labors": {
            "통신관련산업기사": 0.07
        },
        "category": "device",
        "page": 504,
        "keywords": [
            "잔류염소 및 샘플링 펌프 점검 대",
            "다항목 수질계측기 점검"
        ]
    },
    {
        "code": "통신 13-7-11",
        "name": "수소이온농도(pH) 및 샘플링 펌프 점검 대",
        "spec": "다항목 수질계측기 점검",
        "unit": "0.15",
        "labors": {
            "통신관련산업기사": 0.15
        },
        "category": "device",
        "page": 504,
        "keywords": [
            "수소이온농도(pH) 및 샘플링 펌프 점검 대",
            "다항목 수질계측기 점검"
        ]
    },
    {
        "code": "통신 13-7-11",
        "name": "온도 및 샘플링 펌프 점검 대",
        "spec": "다항목 수질계측기 점검",
        "unit": "0.02",
        "labors": {
            "통신관련산업기사": 0.02
        },
        "category": "device",
        "page": 504,
        "keywords": [
            "온도 및 샘플링 펌프 점검 대",
            "다항목 수질계측기 점검"
        ]
    },
    {
        "code": "통신 13-7-13",
        "name": "보행신호 음성안내 보조장치 세트",
        "spec": "보행신호 음성안내 보조장치 점검",
        "unit": "0.28",
        "labors": {
            "통신관련기사": 0.14
        },
        "category": "device",
        "page": 505,
        "keywords": [
            "보행신호 음성안내 보조장치 세트",
            "보행신호 음성안내 보조장치 점검"
        ]
    },
    {
        "code": "통신 13-7-14",
        "name": "열 영상 감시 카메라",
        "spec": "열 영상 감시 시스템 점검",
        "unit": "대",
        "labors": {
            "통신관련산업기사": 0.17,
            "통신설비공": 0.17
        },
        "category": "device",
        "page": 505,
        "keywords": [
            "열 영상 감시 카메라",
            "열 영상 감시 시스템 점검"
        ]
    },
    {
        "code": "통신 13-7-14",
        "name": "팬틸트",
        "spec": "열 영상 감시 시스템 점검",
        "unit": "대",
        "labors": {
            "통신관련산업기사": 0.19,
            "통신설비공": 0.19
        },
        "category": "device",
        "page": 505,
        "keywords": [
            "팬틸트",
            "열 영상 감시 시스템 점검"
        ]
    },
    {
        "code": "통신 13-7-14",
        "name": "브라켓",
        "spec": "열 영상 감시 시스템 점검",
        "unit": "대",
        "labors": {
            "통신관련산업기사": 0.15,
            "통신설비공": 0.15
        },
        "category": "device",
        "page": 505,
        "keywords": [
            "브라켓",
            "열 영상 감시 시스템 점검"
        ]
    },
    {
        "code": "통신 13-7-14",
        "name": "레이저 감지기",
        "spec": "열 영상 감시 시스템 점검",
        "unit": "대",
        "labors": {
            "통신관련산업기사": 0.13,
            "통신설비공": 0.13
        },
        "category": "device",
        "page": 505,
        "keywords": [
            "레이저 감지기",
            "열 영상 감시 시스템 점검"
        ]
    },
    {
        "code": "통신 13-7-15",
        "name": "점멸기 점검",
        "spec": "무선양방향 가로등 감시 점멸제어기 점검",
        "unit": "대",
        "labors": {
            "통신관련산업기사": 0.08,
            "통신관련기능사": 0.08
        },
        "category": "device",
        "page": 505,
        "keywords": [
            "점멸기 점검",
            "무선양방향 가로등 감시 점멸제어기 점검"
        ]
    },
    {
        "code": "통신 13-7-15",
        "name": "DB입력 및 확인",
        "spec": "무선양방향 가로등 감시 점멸제어기 점검",
        "unit": "대",
        "labors": {
            "통신관련산업기사": 0.03,
            "통신관련기능사": 0.03
        },
        "category": "device",
        "page": 505,
        "keywords": [
            "DB입력 및 확인",
            "무선양방향 가로등 감시 점멸제어기 점검"
        ]
    },
    {
        "code": "통신 13-7-16",
        "name": "점멸기 점검",
        "spec": "스마트 보안등 감시 제어시스템 점검",
        "unit": "대",
        "labors": {
            "통신관련산업기사": 0.03,
            "통신관련기능사": 0.03
        },
        "category": "device",
        "page": 506,
        "keywords": [
            "점멸기 점검",
            "스마트 보안등 감시 제어시스템 점검"
        ]
    },
    {
        "code": "통신 13-7-16",
        "name": "DB입력 및 확인",
        "spec": "스마트 보안등 감시 제어시스템 점검",
        "unit": "대",
        "labors": {
            "통신관련산업기사": 0.03,
            "통신관련기능사": 0.03
        },
        "category": "device",
        "page": 506,
        "keywords": [
            "DB입력 및 확인",
            "스마트 보안등 감시 제어시스템 점검"
        ]
    },
    {
        "code": "통신 13-7-17",
        "name": "메인보드 개",
        "spec": "음식물쓰레기 개별계량장비 점검",
        "unit": "-",
        "labors": {
            "통신설비공": 0.15
        },
        "category": "device",
        "page": 506,
        "keywords": [
            "메인보드 개",
            "음식물쓰레기 개별계량장비 점검"
        ]
    },
    {
        "code": "통신 13-7-17",
        "name": "부품 인디게이터 개",
        "spec": "음식물쓰레기 개별계량장비 점검",
        "unit": "-",
        "labors": {
            "통신설비공": 0.12
        },
        "category": "device",
        "page": 506,
        "keywords": [
            "부품 인디게이터 개",
            "음식물쓰레기 개별계량장비 점검"
        ]
    },
    {
        "code": "통신 13-7-17",
        "name": "교체 저울부 대",
        "spec": "음식물쓰레기 개별계량장비 점검",
        "unit": "-",
        "labors": {
            "통신설비공": 0.27
        },
        "category": "device",
        "page": 506,
        "keywords": [
            "교체 저울부 대",
            "음식물쓰레기 개별계량장비 점검"
        ]
    },
    {
        "code": "통신 13-7-17",
        "name": "구동부 저울부 대",
        "spec": "음식물쓰레기 개별계량장비 점검",
        "unit": "-",
        "labors": {
            "통신설비공": 0.29
        },
        "category": "device",
        "page": 506,
        "keywords": [
            "구동부 저울부 대",
            "음식물쓰레기 개별계량장비 점검"
        ]
    },
    {
        "code": "통신 13-7-18",
        "name": "유량계 및 압력계",
        "spec": "유량계 및 압력계 점검",
        "unit": "대",
        "labors": {
            "통신설비공": 0.39
        },
        "category": "device",
        "page": 507,
        "keywords": [
            "유량계 및 압력계",
            "유량계 및 압력계 점검"
        ]
    },
    {
        "code": "통신 13-7-18",
        "name": "유량계 변환기",
        "spec": "유량계 및 압력계 점검",
        "unit": "식",
        "labors": {
            "통신설비공": 0.11
        },
        "category": "device",
        "page": 507,
        "keywords": [
            "유량계 변환기",
            "유량계 및 압력계 점검"
        ]
    },
    {
        "code": "통신 13-8-2",
        "name": "키보관 및 객실 현황판(Key Rack)",
        "spec": "객실관리시스템 점검",
        "unit": "대",
        "labors": {
            "통신관련산업기사": 0.29,
            "통신관련기능사": 0.29
        },
        "category": "device",
        "page": 510,
        "keywords": [
            "키보관 및 객실 현황판(Key Rack)",
            "객실관리시스템 점검"
        ]
    },
    {
        "code": "통신 13-8-2",
        "name": "중앙현황판",
        "spec": "객실관리시스템 점검",
        "unit": "대",
        "labors": {
            "통신관련산업기사": 0.21,
            "통신관련기능사": 0.21
        },
        "category": "device",
        "page": 510,
        "keywords": [
            "중앙현황판",
            "객실관리시스템 점검"
        ]
    },
    {
        "code": "통신 13-8-2",
        "name": "층중계기",
        "spec": "객실관리시스템 점검",
        "unit": "대",
        "labors": {
            "통신관련산업기사": 0.17,
            "통신관련기능사": 0.17
        },
        "category": "device",
        "page": 510,
        "keywords": [
            "층중계기",
            "객실관리시스템 점검"
        ]
    },
    {
        "code": "통신 13-8-2",
        "name": "객실제어기(Control Box)",
        "spec": "객실관리시스템 점검",
        "unit": "대",
        "labors": {
            "통신관련산업기사": 0.1,
            "통신관련기능사": 0.1
        },
        "category": "device",
        "page": 510,
        "keywords": [
            "객실제어기(Control Box)",
            "객실관리시스템 점검"
        ]
    },
    {
        "code": "통신 13-8-2",
        "name": "단말기(Night Table)",
        "spec": "객실관리시스템 점검",
        "unit": "대",
        "labors": {
            "통신관련산업기사": 0.04
        },
        "category": "device",
        "page": 510,
        "keywords": [
            "단말기(Night Table)",
            "객실관리시스템 점검"
        ]
    },
    {
        "code": "통신 13-8-2",
        "name": "종합시험",
        "spec": "객실관리시스템 점검",
        "unit": "식",
        "labors": {
            "통신관련산업기사": 0.35,
            "통신관련기능사": 0.33
        },
        "category": "device",
        "page": 510,
        "keywords": [
            "종합시험",
            "객실관리시스템 점검"
        ]
    },
    {
        "code": "통신 13-8-4-1",
        "name": "회선 및 데이터 전송상태 점검 회선",
        "spec": "지하수관측시스템 점검",
        "unit": "0.06",
        "labors": {
            "특별인부": 0.06
        },
        "category": "device",
        "page": 513,
        "keywords": [
            "회선 및 데이터 전송상태 점검 회선",
            "지하수관측시스템 점검"
        ]
    },
    {
        "code": "통신 13-8-4-1",
        "name": "관정깊이 측정 개소",
        "spec": "지하수관측시스템 점검",
        "unit": "0.05",
        "labors": {
            "특별인부": 0.05
        },
        "category": "device",
        "page": 513,
        "keywords": [
            "관정깊이 측정 개소",
            "지하수관측시스템 점검"
        ]
    },
    {
        "code": "통신 13-8-4-1",
        "name": "케이블점검 및 세척 케이블당",
        "spec": "지하수관측시스템 점검",
        "unit": "0.06",
        "labors": {
            "특별인부": 0.06
        },
        "category": "device",
        "page": 513,
        "keywords": [
            "케이블점검 및 세척 케이블당",
            "지하수관측시스템 점검"
        ]
    },
    {
        "code": "통신 13-8-4-1",
        "name": "모뎀 및 데이터로거 점검 대",
        "spec": "지하수관측시스템 점검",
        "unit": "0.08",
        "labors": {
            "특별인부": 0.08
        },
        "category": "device",
        "page": 513,
        "keywords": [
            "모뎀 및 데이터로거 점검 대",
            "지하수관측시스템 점검"
        ]
    },
    {
        "code": "통신 13-8-4-1",
        "name": "온도 개",
        "spec": "지하수관측시스템 점검",
        "unit": "0.03",
        "labors": {
            "특별인부": 0.03
        },
        "category": "device",
        "page": 513,
        "keywords": [
            "온도 개",
            "지하수관측시스템 점검"
        ]
    },
    {
        "code": "통신 13-8-4-1",
        "name": "센서 세척 전기전도도 개",
        "spec": "지하수관측시스템 점검",
        "unit": "0.03",
        "labors": {
            "특별인부": 0.03
        },
        "category": "device",
        "page": 513,
        "keywords": [
            "센서 세척 전기전도도 개",
            "지하수관측시스템 점검"
        ]
    },
    {
        "code": "통신 13-8-4-1",
        "name": "수위 세척 전기전도도 개",
        "spec": "지하수관측시스템 점검",
        "unit": "0.03",
        "labors": {
            "특별인부": 0.03
        },
        "category": "device",
        "page": 513,
        "keywords": [
            "수위 세척 전기전도도 개",
            "지하수관측시스템 점검"
        ]
    },
    {
        "code": "통신 13-8-4-1",
        "name": "수소이온농도 세척 전기전도도 개",
        "spec": "지하수관측시스템 점검",
        "unit": "0.03",
        "labors": {
            "특별인부": 0.03
        },
        "category": "device",
        "page": 513,
        "keywords": [
            "수소이온농도 세척 전기전도도 개",
            "지하수관측시스템 점검"
        ]
    },
    {
        "code": "통신 13-8-4-1",
        "name": "온도 세척 전기전도도 개",
        "spec": "지하수관측시스템 점검",
        "unit": "0.04",
        "labors": {
            "특별인부": 0.04
        },
        "category": "device",
        "page": 513,
        "keywords": [
            "온도 세척 전기전도도 개",
            "지하수관측시스템 점검"
        ]
    },
    {
        "code": "통신 13-8-4-1",
        "name": "종합 측정 전기전도도 개",
        "spec": "지하수관측시스템 점검",
        "unit": "0.05",
        "labors": {
            "특별인부": 0.05
        },
        "category": "device",
        "page": 513,
        "keywords": [
            "종합 측정 전기전도도 개",
            "지하수관측시스템 점검"
        ]
    },
    {
        "code": "통신 13-8-4-1",
        "name": "수위 측정 전기전도도 개",
        "spec": "지하수관측시스템 점검",
        "unit": "0.06",
        "labors": {
            "특별인부": 0.06
        },
        "category": "device",
        "page": 513,
        "keywords": [
            "수위 측정 전기전도도 개",
            "지하수관측시스템 점검"
        ]
    },
    {
        "code": "통신 13-8-4-1",
        "name": "수소이온농도 측정 전기전도도 개",
        "spec": "지하수관측시스템 점검",
        "unit": "0.05",
        "labors": {
            "특별인부": 0.05
        },
        "category": "device",
        "page": 513,
        "keywords": [
            "수소이온농도 측정 전기전도도 개",
            "지하수관측시스템 점검"
        ]
    },
    {
        "code": "통신 13-8-4-2",
        "name": "케이블 상태확인 및 점검 케이블당",
        "spec": "하천 수위관측시스템 점검",
        "unit": "0.15",
        "labors": {
            "특별인부": 0.07
        },
        "category": "device",
        "page": 514,
        "keywords": [
            "케이블 상태확인 및 점검 케이블당",
            "하천 수위관측시스템 점검"
        ]
    },
    {
        "code": "통신 13-8-4-2",
        "name": "센서부 점검 음파 송·수신기 대",
        "spec": "하천 수위관측시스템 점검",
        "unit": "0.21",
        "labors": {
            "특별인부": 0.1
        },
        "category": "device",
        "page": 514,
        "keywords": [
            "센서부 점검 음파 송·수신기 대",
            "하천 수위관측시스템 점검"
        ]
    },
    {
        "code": "통신 13-8-4-2",
        "name": "보호관 점검 음파 송·수신기 대",
        "spec": "하천 수위관측시스템 점검",
        "unit": "0.19",
        "labors": {
            "특별인부": 0.09
        },
        "category": "device",
        "page": 514,
        "keywords": [
            "보호관 점검 음파 송·수신기 대",
            "하천 수위관측시스템 점검"
        ]
    },
    {
        "code": "통신 13-8-4-2",
        "name": "장치함 점검 음파 송·수신기 대",
        "spec": "하천 수위관측시스템 점검",
        "unit": "0.15",
        "labors": {
            "특별인부": 0.07
        },
        "category": "device",
        "page": 514,
        "keywords": [
            "장치함 점검 음파 송·수신기 대",
            "하천 수위관측시스템 점검"
        ]
    },
    {
        "code": "통신 13-8-4-2",
        "name": "음파발생기 점검 음파 송·수신기 대",
        "spec": "하천 수위관측시스템 점검",
        "unit": "0.27",
        "labors": {
            "특별인부": 0.14
        },
        "category": "device",
        "page": 514,
        "keywords": [
            "음파발생기 점검 음파 송·수신기 대",
            "하천 수위관측시스템 점검"
        ]
    },
    {
        "code": "통신 13-8-4-2",
        "name": "원격단말장치 점검 음파 송·수신기 대",
        "spec": "하천 수위관측시스템 점검",
        "unit": "0.26",
        "labors": {
            "특별인부": 0.13
        },
        "category": "device",
        "page": 514,
        "keywords": [
            "원격단말장치 점검 음파 송·수신기 대",
            "하천 수위관측시스템 점검"
        ]
    },
    {
        "code": "통신 13-8-4-2",
        "name": "모뎀 점검 음파 송·수신기 대",
        "spec": "하천 수위관측시스템 점검",
        "unit": "0.25",
        "labors": {
            "특별인부": 0.13
        },
        "category": "device",
        "page": 514,
        "keywords": [
            "모뎀 점검 음파 송·수신기 대",
            "하천 수위관측시스템 점검"
        ]
    },
    {
        "code": "통신 13-8-4-2",
        "name": "전원장치 점검 음파 송·수신기 대",
        "spec": "하천 수위관측시스템 점검",
        "unit": "0.18",
        "labors": {
            "특별인부": 0.09
        },
        "category": "device",
        "page": 514,
        "keywords": [
            "전원장치 점검 음파 송·수신기 대",
            "하천 수위관측시스템 점검"
        ]
    },
    {
        "code": "통신 13-8-4-2",
        "name": "종합 측정 식",
        "spec": "하천 수위관측시스템 점검",
        "unit": "0.24",
        "labors": {
            "특별인부": 0.12
        },
        "category": "device",
        "page": 514,
        "keywords": [
            "종합 측정 식",
            "하천 수위관측시스템 점검"
        ]
    },
    {
        "code": "통신 13-8-4-3",
        "name": "영상수위관측시스템 대",
        "spec": "하천 영상수위관측시스템 점검",
        "unit": "0.25",
        "labors": {
            "특별인부": 0.25
        },
        "category": "device",
        "page": 514,
        "keywords": [
            "영상수위관측시스템 대",
            "하천 영상수위관측시스템 점검"
        ]
    },
    {
        "code": "통신 13-8-7-5",
        "name": "GPS 수신장치 점검 식 0.15",
        "spec": "배전자동화 부대설비 점검",
        "unit": "0.22",
        "labors": {
            "보통인부": 0.09
        },
        "category": "device",
        "page": 521,
        "keywords": [
            "GPS 수신장치 점검 식 0.15",
            "배전자동화 부대설비 점검"
        ]
    },
    {
        "code": "통신 13-8-7-5",
        "name": "출력장치(프린터)점검 대 -",
        "spec": "배전자동화 부대설비 점검",
        "unit": "0.38",
        "labors": {
            "보통인부": 0.16
        },
        "category": "device",
        "page": 521,
        "keywords": [
            "출력장치(프린터)점검 대 -",
            "배전자동화 부대설비 점검"
        ]
    },
    {
        "code": "통신 13-8-7-5",
        "name": "에뮬레이터 장치 점검 식 0.67",
        "spec": "배전자동화 부대설비 점검",
        "unit": "0.85",
        "labors": {
            "보통인부": 0.45
        },
        "category": "device",
        "page": 521,
        "keywords": [
            "에뮬레이터 장치 점검 식 0.67",
            "배전자동화 부대설비 점검"
        ]
    },
    {
        "code": "통신 13-8-7-6",
        "name": "전압 Transducer 개",
        "spec": "일반형 변환기장치(TD :Transducer) 점검",
        "unit": "0.18",
        "labors": {
            "통신관련산업기사": 0.13
        },
        "category": "device",
        "page": 522,
        "keywords": [
            "전압 Transducer 개",
            "일반형 변환기장치(TD :Transducer) 점검"
        ]
    },
    {
        "code": "통신 13-8-7-6",
        "name": "전류 Transducer 개",
        "spec": "일반형 변환기장치(TD :Transducer) 점검",
        "unit": "0.18",
        "labors": {
            "통신관련산업기사": 0.13
        },
        "category": "device",
        "page": 522,
        "keywords": [
            "전류 Transducer 개",
            "일반형 변환기장치(TD :Transducer) 점검"
        ]
    },
    {
        "code": "통신 13-8-7-6",
        "name": "유효전력 Transducer 개",
        "spec": "일반형 변환기장치(TD :Transducer) 점검",
        "unit": "0.26",
        "labors": {
            "통신관련산업기사": 0.21
        },
        "category": "device",
        "page": 522,
        "keywords": [
            "유효전력 Transducer 개",
            "일반형 변환기장치(TD :Transducer) 점검"
        ]
    },
    {
        "code": "통신 13-8-7-6",
        "name": "무효전력 Transducer 개",
        "spec": "일반형 변환기장치(TD :Transducer) 점검",
        "unit": "0.26",
        "labors": {
            "통신관련산업기사": 0.21
        },
        "category": "device",
        "page": 522,
        "keywords": [
            "무효전력 Transducer 개",
            "일반형 변환기장치(TD :Transducer) 점검"
        ]
    },
    {
        "code": "통신 13-8-7-7",
        "name": "H/W시험사 0.04 0.04",
        "spec": "모듈형 변환기장치(TD:Transducer) 점검",
        "unit": "대",
        "labors": {
            "통신관련산업기사": 0.04
        },
        "category": "device",
        "page": 523,
        "keywords": [
            "H/W시험사 0.04 0.04",
            "모듈형 변환기장치(TD:Transducer) 점검"
        ]
    },
    {
        "code": "통신 13-8-7-7",
        "name": "③결선해체 통신관련산업기사 0.01 0.01",
        "spec": "모듈형 변환기장치(TD:Transducer) 점검",
        "unit": "대",
        "labors": {
            "통신관련산업기사": 0.01
        },
        "category": "device",
        "page": 523,
        "keywords": [
            "③결선해체 통신관련산업기사 0.01 0.01",
            "모듈형 변환기장치(TD:Transducer) 점검"
        ]
    },
    {
        "code": "통신 13-8-7-7",
        "name": "H/W시험사 0.01 0.01",
        "spec": "모듈형 변환기장치(TD:Transducer) 점검",
        "unit": "대",
        "labors": {
            "통신관련산업기사": 0.01
        },
        "category": "device",
        "page": 523,
        "keywords": [
            "H/W시험사 0.01 0.01",
            "모듈형 변환기장치(TD:Transducer) 점검"
        ]
    },
    {
        "code": "통신 13-8-7-7",
        "name": "⑤모듈해제 통신관련산업기사 0.01 0.01",
        "spec": "모듈형 변환기장치(TD:Transducer) 점검",
        "unit": "대",
        "labors": {
            "통신관련산업기사": 0.01
        },
        "category": "device",
        "page": 523,
        "keywords": [
            "⑤모듈해제 통신관련산업기사 0.01 0.01",
            "모듈형 변환기장치(TD:Transducer) 점검"
        ]
    },
    {
        "code": "통신 13-8-7-7",
        "name": "⑥MMU 보정 통신관련산업기사 0.02 0.02",
        "spec": "모듈형 변환기장치(TD:Transducer) 점검",
        "unit": "대",
        "labors": {
            "통신관련산업기사": 0.02
        },
        "category": "device",
        "page": 523,
        "keywords": [
            "⑥MMU 보정 통신관련산업기사 0.02 0.02",
            "모듈형 변환기장치(TD:Transducer) 점검"
        ]
    },
    {
        "code": "통신 13-8-7-7",
        "name": "H/W시험사 0.02 0.02",
        "spec": "모듈형 변환기장치(TD:Transducer) 점검",
        "unit": "대",
        "labors": {
            "통신관련산업기사": 0.02
        },
        "category": "device",
        "page": 523,
        "keywords": [
            "H/W시험사 0.02 0.02",
            "모듈형 변환기장치(TD:Transducer) 점검"
        ]
    },
    {
        "code": "통신 13-8-7-7",
        "name": "시험 ⑦모듈가변저항조정 통신관련산업기사 0.01 0.01",
        "spec": "모듈형 변환기장치(TD:Transducer) 점검",
        "unit": "대",
        "labors": {
            "통신관련산업기사": 0.04
        },
        "category": "device",
        "page": 523,
        "keywords": [
            "시험 ⑦모듈가변저항조정 통신관련산업기사 0.01 0.01",
            "모듈형 변환기장치(TD:Transducer) 점검"
        ]
    },
    {
        "code": "통신 13-8-7-7",
        "name": "및 H/W 시험사 0.01 0.01",
        "spec": "모듈형 변환기장치(TD:Transducer) 점검",
        "unit": "대",
        "labors": {
            "통신관련산업기사": 0.04
        },
        "category": "device",
        "page": 523,
        "keywords": [
            "및 H/W 시험사 0.01 0.01",
            "모듈형 변환기장치(TD:Transducer) 점검"
        ]
    },
    {
        "code": "통신 13-8-7-7",
        "name": "⑧ 가변저항고정액주입 통신관련산업기사 0.01 0.01",
        "spec": "모듈형 변환기장치(TD:Transducer) 점검",
        "unit": "대",
        "labors": {
            "통신관련산업기사": 0.01
        },
        "category": "device",
        "page": 523,
        "keywords": [
            "⑧ 가변저항고정액주입 통신관련산업기사 0.01 0.01",
            "모듈형 변환기장치(TD:Transducer) 점검"
        ]
    },
    {
        "code": "통신 13-8-7-7",
        "name": "교정 H/W 시험사 0.01 0.01",
        "spec": "모듈형 변환기장치(TD:Transducer) 점검",
        "unit": "대",
        "labors": {
            "통신관련산업기사": 0.01
        },
        "category": "device",
        "page": 523,
        "keywords": [
            "교정 H/W 시험사 0.01 0.01",
            "모듈형 변환기장치(TD:Transducer) 점검"
        ]
    },
    {
        "code": "통신 13-8-7-7",
        "name": "⑨모듈교체 통신관련산업기사 0.02 0.02",
        "spec": "모듈형 변환기장치(TD:Transducer) 점검",
        "unit": "대",
        "labors": {
            "통신관련산업기사": 0.02
        },
        "category": "device",
        "page": 523,
        "keywords": [
            "⑨모듈교체 통신관련산업기사 0.02 0.02",
            "모듈형 변환기장치(TD:Transducer) 점검"
        ]
    },
    {
        "code": "통신 13-8-7-7",
        "name": "H/W 시험사 0.02 0.02",
        "spec": "모듈형 변환기장치(TD:Transducer) 점검",
        "unit": "대",
        "labors": {
            "통신관련산업기사": 0.02
        },
        "category": "device",
        "page": 523,
        "keywords": [
            "H/W 시험사 0.02 0.02",
            "모듈형 변환기장치(TD:Transducer) 점검"
        ]
    },
    {
        "code": "통신 13-8-7-7",
        "name": "⑩ 시험성적서 작성 통신관련산업기사 0.01 0.01",
        "spec": "모듈형 변환기장치(TD:Transducer) 점검",
        "unit": "대",
        "labors": {
            "통신관련산업기사": 0.01
        },
        "category": "device",
        "page": 523,
        "keywords": [
            "⑩ 시험성적서 작성 통신관련산업기사 0.01 0.01",
            "모듈형 변환기장치(TD:Transducer) 점검"
        ]
    },
    {
        "code": "통신 13-8-7-7",
        "name": "⑪재결선 통신관련산업기사 0.01 0.01",
        "spec": "모듈형 변환기장치(TD:Transducer) 점검",
        "unit": "대",
        "labors": {
            "통신관련산업기사": 0.01
        },
        "category": "device",
        "page": 523,
        "keywords": [
            "⑪재결선 통신관련산업기사 0.01 0.01",
            "모듈형 변환기장치(TD:Transducer) 점검"
        ]
    },
    {
        "code": "통신 13-8-7-7",
        "name": "⑫모듈장착 통신관련산업기사 0.01 0.01",
        "spec": "모듈형 변환기장치(TD:Transducer) 점검",
        "unit": "대",
        "labors": {
            "통신관련산업기사": 0.01
        },
        "category": "device",
        "page": 523,
        "keywords": [
            "⑫모듈장착 통신관련산업기사 0.01 0.01",
            "모듈형 변환기장치(TD:Transducer) 점검"
        ]
    },
    {
        "code": "통신 13-8-7-7",
        "name": "⑬전송데이터 확인 통신관련산업기사 0.01 0.01",
        "spec": "모듈형 변환기장치(TD:Transducer) 점검",
        "unit": "대",
        "labors": {
            "통신관련산업기사": 0.01
        },
        "category": "device",
        "page": 523,
        "keywords": [
            "⑬전송데이터 확인 통신관련산업기사 0.01 0.01",
            "모듈형 변환기장치(TD:Transducer) 점검"
        ]
    },
    {
        "code": "통신 13-8-7-7",
        "name": "H/W 시험사 0.01 0.01",
        "spec": "모듈형 변환기장치(TD:Transducer) 점검",
        "unit": "대",
        "labors": {
            "통신관련산업기사": 0.01
        },
        "category": "device",
        "page": 523,
        "keywords": [
            "H/W 시험사 0.01 0.01",
            "모듈형 변환기장치(TD:Transducer) 점검"
        ]
    },
    {
        "code": "통신 13-8-7-7",
        "name": "⑭시험기철거 및 통신관련산업기사 0.02 0.02",
        "spec": "모듈형 변환기장치(TD:Transducer) 점검",
        "unit": "대",
        "labors": {
            "통신관련산업기사": 0.02
        },
        "category": "device",
        "page": 523,
        "keywords": [
            "⑭시험기철거 및 통신관련산업기사 0.02 0.02",
            "모듈형 변환기장치(TD:Transducer) 점검"
        ]
    },
    {
        "code": "통신 13-8-7-7",
        "name": "현장정리 H/W 시험사 0.02 0.02",
        "spec": "모듈형 변환기장치(TD:Transducer) 점검",
        "unit": "대",
        "labors": {
            "통신관련산업기사": 0.02
        },
        "category": "device",
        "page": 523,
        "keywords": [
            "현장정리 H/W 시험사 0.02 0.02",
            "모듈형 변환기장치(TD:Transducer) 점검"
        ]
    },
    {
        "code": "통신 13-8-9",
        "name": "기록계 대",
        "spec": "지진감지시스템 점검",
        "unit": "0.41",
        "labors": {
            "통신관련산업기사": 0.41
        },
        "category": "device",
        "page": 525,
        "keywords": [
            "기록계 대",
            "지진감지시스템 점검"
        ]
    },
    {
        "code": "통신 13-8-9",
        "name": "가속도센서 대",
        "spec": "지진감지시스템 점검",
        "unit": "0.08",
        "labors": {
            "통신관련산업기사": 0.08
        },
        "category": "device",
        "page": 525,
        "keywords": [
            "가속도센서 대",
            "지진감지시스템 점검"
        ]
    },
    {
        "code": "통신 13-8-12",
        "name": "원격검침 단말기",
        "spec": "수도계량기 원격검침 설비 점검",
        "unit": "대",
        "labors": {
            "통신설비공": 0.08
        },
        "category": "device",
        "page": 526,
        "keywords": [
            "원격검침 단말기",
            "수도계량기 원격검침 설비 점검"
        ]
    },
    {
        "code": "통신 13-10-1",
        "name": "소형(1~2kVA) 이하",
        "spec": "무정전 전원장치(UPS, CVCF) 점검",
        "unit": "대",
        "labors": {
            "통신관련산업기사": 0.45
        },
        "category": "device",
        "page": 533,
        "keywords": [
            "소형(1~2kVA) 이하",
            "무정전 전원장치(UPS, CVCF) 점검"
        ]
    },
    {
        "code": "통신 13-10-1",
        "name": "3kVA 초과 ~ 10kVA 이하",
        "spec": "무정전 전원장치(UPS, CVCF) 점검",
        "unit": "대",
        "labors": {
            "통신관련산업기사": 0.61
        },
        "category": "device",
        "page": 533,
        "keywords": [
            "3kVA 초과 ~ 10kVA 이하",
            "무정전 전원장치(UPS, CVCF) 점검"
        ]
    },
    {
        "code": "통신 13-10-1",
        "name": "10kVA 초과 ~ 20kVA 이하",
        "spec": "무정전 전원장치(UPS, CVCF) 점검",
        "unit": "대",
        "labors": {
            "통신관련산업기사": 0.93
        },
        "category": "device",
        "page": 533,
        "keywords": [
            "10kVA 초과 ~ 20kVA 이하",
            "무정전 전원장치(UPS, CVCF) 점검"
        ]
    },
    {
        "code": "통신 13-10-1",
        "name": "20kVA 초과 ~ 30kVA 이하",
        "spec": "무정전 전원장치(UPS, CVCF) 점검",
        "unit": "대",
        "labors": {
            "통신관련산업기사": 1.08,
            "특별인부": 0.85
        },
        "category": "device",
        "page": 533,
        "keywords": [
            "20kVA 초과 ~ 30kVA 이하",
            "무정전 전원장치(UPS, CVCF) 점검"
        ]
    },
    {
        "code": "통신 13-10-1",
        "name": "30kVA 초과 ~ 100kVA 이하",
        "spec": "무정전 전원장치(UPS, CVCF) 점검",
        "unit": "대",
        "labors": {
            "통신관련산업기사": 1.94,
            "특별인부": 1.55
        },
        "category": "device",
        "page": 533,
        "keywords": [
            "30kVA 초과 ~ 100kVA 이하",
            "무정전 전원장치(UPS, CVCF) 점검"
        ]
    },
    {
        "code": "통신 13-10-1",
        "name": "100kVA 초과 ~ 250kVA 이하",
        "spec": "무정전 전원장치(UPS, CVCF) 점검",
        "unit": "대",
        "labors": {
            "통신관련산업기사": 3.23,
            "특별인부": 1.58
        },
        "category": "device",
        "page": 533,
        "keywords": [
            "100kVA 초과 ~ 250kVA 이하",
            "무정전 전원장치(UPS, CVCF) 점검"
        ]
    },
    {
        "code": "통신 13-10-1",
        "name": "250kVA 초과 ~ 500kVA 이하",
        "spec": "무정전 전원장치(UPS, CVCF) 점검",
        "unit": "대",
        "labors": {
            "통신관련산업기사": 3.29,
            "특별인부": 2.69
        },
        "category": "device",
        "page": 533,
        "keywords": [
            "250kVA 초과 ~ 500kVA 이하",
            "무정전 전원장치(UPS, CVCF) 점검"
        ]
    }
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
            
            const multiplier = item.laborMultiplier !== undefined ? item.laborMultiplier : 1.0;
            
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

            let selectHtml = "-";
            const itemHasLabor = item.labors || (item.laborType && item.laborFactor);
            if (itemHasLabor) {
                selectHtml = `<select class="select-labor-scenario" data-div-id="${div.id}" data-item-id="${item.id}" style="background-color: var(--bg-base); border: 1px solid var(--border-color); color: var(--text-primary); padding: 6px 10px; border-radius: 4px; outline: none; font-size: 13px; width: 100%; cursor: pointer;">`;
                scenarios.forEach(sc => {
                    const selected = item.laborScenario === sc.value ? "selected" : "";
                    selectHtml += `<option value="${sc.value}" data-mult="${sc.mult}" data-remark="${sc.remark}" ${selected}>${sc.label}</option>`;
                });
                selectHtml += `</select>`;
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
                        <td rowspan="${laborItems.length}" style="text-align: center;">${selectHtml}</td>
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
        
        let laborCost = 0;
        let laborDetails = "";
        if (item.labors) {
            Object.entries(item.labors).forEach(([type, factor]) => {
                const cost = Math.floor(factor * (wages[type] || 0));
                laborCost += cost;
                laborDetails += `${type} ${factor}인\n`;
            });
            laborDetails = laborDetails.trim();
        } else if (item.laborType && item.laborFactor) {
            laborCost = Math.floor(item.laborFactor * (wages[item.laborType] || 0));
            laborDetails = `${item.laborType} 품셈 ${item.laborFactor}인`;
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
            const multiplier = item.laborMultiplier !== undefined ? item.laborMultiplier : 1.0;
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
        // 1. COVER SHEET (갑지)
        // ----------------------------------------------------
        const shCover = workbook.addWorksheet("갑지");
        shCover.views = [{ showGridLines: true }];
        
        // Column widths
        shCover.columns = [
            { width: 9.6 },  // A
            { width: 4.6 },  // B
            { width: 6.1 },  // C
            { width: 8.9 },  // D
            { width: 11.0 }, // E
            { width: 8.9 },  // F
            { width: 11.5 }, // G
            { width: 8.9 },  // H
            { width: 5.6 },  // I
            { width: 11.8 }, // J
            { width: 4.2 },  // K
            { width: 5.0 },  // L
            { width: 16.0 }, // M
            { width: 11.1 }  // N
        ];
        
        // Row heights
        shCover.getRow(1).height = 20;
        shCover.getRow(2).height = 20;
        shCover.getRow(3).height = 45; // Title row
        shCover.getRow(4).height = 15;
        shCover.getRow(5).height = 25; // Project name
        shCover.getRow(6).height = 22; // Header
        for (let r = 7; r <= 12; r++) {
            shCover.getRow(r).height = 22;
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
            cell.font = { name: "돋움체", size: 10, bold: true };
            cell.alignment = { horizontal: 'center', vertical: 'middle' };
        });
        // Set sign-off block borders (thin everywhere except outer medium or simple thin)
        const signOffAll = ["A1", "A2", "B1", "B2", "C1", "C2", "D1", "D2", "E1", "E2", "F1", "F2", "G1", "G2", "H1", "H2", "I1", "I2", "J1", "J2", "K1", "K2", "L1", "L2", "M1", "M2", "N1", "N2"];
        signOffAll.forEach(coord => {
            const cell = shCover.getCell(coord);
            cell.border = {
                top: { style: 'thin', color: { argb: 'FF000000' } },
                bottom: { style: 'thin', color: { argb: 'FF000000' } },
                left: { style: 'thin', color: { argb: 'FF000000' } },
                right: { style: 'thin', color: { argb: 'FF000000' } }
            };
        });
        
        // Title: 설   계   서
        shCover.mergeCells("A3:N3");
        const titleCell = shCover.getCell("A3");
        titleCell.value = "설   계   서";
        titleCell.font = { name: "돋움체", size: 28, bold: true };
        titleCell.alignment = { horizontal: 'center', vertical: 'middle' };
        
        // Project name
        shCover.mergeCells("B5:J5");
        const projCell = shCover.getCell("B5");
        projCell.value = `공사명 : [${state.projectName}]`;
        projCell.font = { name: "돋움체", size: 13, bold: true };
        projCell.alignment = { horizontal: 'left', vertical: 'middle' };
        // Apply bottom medium border to project cell line
        for (let col = 2; col <= 10; col++) {
            shCover.getCell(5, col).border = {
                bottom: { style: 'medium', color: { argb: 'FF000000' } }
            };
        }
        
        // Table: 구분 / 금액 / 비고
        shCover.mergeCells("B6:D6");
        shCover.getCell("B6").value = "구            분";
        shCover.mergeCells("E6:K6");
        shCover.getCell("E6").value = "금                             액";
        shCover.getCell("M6").value = "비   고";
        
        // Rows values and formulas
        // B7:D7 -> 총공사비
        shCover.mergeCells("B7:D7");
        shCover.getCell("B7").value = "총  공  사  비";
        shCover.getCell("E7").value = " 일    금   :";
        shCover.getCell("F7").value = { formula: '="  "&NUMBERSTRING(J7,1)&"원정"' };
        shCover.mergeCells("J7:L7");
        shCover.getCell("J7").value = { formula: "=원가!C23" }; // 총계 row in 원가 sheet
        
        // B8:B10 -> 도급비
        shCover.mergeCells("B8:B10");
        shCover.getCell("B8").value = "도\n급\n비";
        
        // C8:D8 -> 공급가액
        shCover.mergeCells("C8:D8");
        shCover.getCell("C8").value = "공  급  가  액";
        shCover.getCell("E8").value = " 일    금   :";
        shCover.getCell("F8").value = { formula: '="  "&NUMBERSTRING(J8,1)&"원정"' };
        shCover.mergeCells("J8:L8");
        shCover.getCell("J8").value = { formula: "=원가!C21" }; // 총원가 row in 원가 sheet
        
        // C9:D9 -> 부가가치세
        shCover.mergeCells("C9:D9");
        shCover.getCell("C9").value = "부가가치세";
        shCover.getCell("E9").value = " 일    금   :";
        shCover.getCell("F9").value = { formula: '="  "&NUMBERSTRING(J9,1)&"원정"' };
        shCover.mergeCells("J9:L9");
        shCover.getCell("J9").value = { formula: "=원가!C22" }; // 부가가치세 row in 원가 sheet
        
        // C10:D10 -> 계
        shCover.mergeCells("C10:D10");
        shCover.getCell("C10").value = "계";
        shCover.getCell("E10").value = " 일    금   :";
        shCover.getCell("F10").value = { formula: '="  "&NUMBERSTRING(J10,1)&"원정"' };
        shCover.mergeCells("J10:L10");
        shCover.getCell("J10").value = { formula: "=원가!C23" }; // 총계 row in 원가 sheet
        
        // B11:D11 -> 관급비
        shCover.mergeCells("B11:D11");
        shCover.getCell("B11").value = "관급비";
        shCover.getCell("E11").value = " 일    금   :";
        shCover.getCell("F11").value = { formula: '="  "&NUMBERSTRING(J11,1)&"원정"' };
        shCover.mergeCells("J11:L11");
        shCover.getCell("J11").value = 0;
        
        // B12:D12 -> 이전비
        shCover.mergeCells("B12:D12");
        shCover.getCell("B12").value = "이전비";
        shCover.getCell("E12").value = " 일    금   :";
        shCover.getCell("F12").value = { formula: '="  "&NUMBERSTRING(J12,1)&"원정"' };
        shCover.mergeCells("J12:L12");
        shCover.getCell("J12").value = 0;
        
        // Merge F to I for Korean spelling overflow
        for (let r = 7; r <= 12; r++) {
            shCover.mergeCells(`F${r}:I${r}`);
        }
        
        // Style table cells in Cover sheet (B6:N12)
        const coverBorder = {
            top: { style: 'thin', color: { argb: 'FF000000' } },
            bottom: { style: 'thin', color: { argb: 'FF000000' } },
            left: { style: 'thin', color: { argb: 'FF000000' } },
            right: { style: 'thin', color: { argb: 'FF000000' } }
        };
        
        for (let r = 6; r <= 12; r++) {
            for (let c = 2; c <= 14; c++) {
                if (c === 12) continue; // skip L because of J:L merge
                const cell = shCover.getCell(r, c);
                cell.font = { name: "돋움체", size: 10, bold: (r === 7 || r === 10) };
                cell.border = coverBorder;
                
                // Alignment
                if (c === 2 || c === 3 || c === 4) {
                    cell.alignment = { horizontal: 'center', vertical: 'middle', wrapText: true };
                } else if (c === 5) {
                    cell.alignment = { horizontal: 'right', vertical: 'middle' };
                } else if (c === 6) { // merged F:I
                    cell.alignment = { horizontal: 'left', vertical: 'middle' };
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
        
        shCost.addRow(["원 가 계 산 서"]);
        shCost.mergeCells("A1:D1");
        shCost.getCell("A1").font = { size: 16, bold: true, name: "돋움체" };
        shCost.getCell("A1").alignment = { horizontal: 'center' };
        shCost.getRow(1).height = 35;
        
        shCost.addRow([`공사명: ${state.projectName}`, "", "", `공사기간: ${state.duration}`]);
        shCost.mergeCells("A2:C2");
        shCost.getRow(2).font = { name: "돋움체", size: 10 };
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
        
        shCost.getColumn(3).numFmt = "#,##0";
        
        // Format all cells in shCost starting from row 4
        const costRowCount = shCost.rowCount;
        for (let r = 4; r <= costRowCount; r++) {
            const row = shCost.getRow(r);
            const cell1Val = row.getCell(1).value;
            const cell2Val = row.getCell(2).value;
            
            // Check if this row is a total row
            const isTotalRow = (cell2Val === "( 소   계 )" || cell2Val === "( 순공사비계 )" || cell1Val === "총원가");
            const isGrandTotal = (cell1Val === "총  계");
            
            row.eachCell({ includeEmpty: true }, (cell, colNum) => {
                cell.font = { 
                    name: "돋움체", 
                    size: 10, 
                    bold: (isTotalRow || isGrandTotal) 
                };
                
                // Set background fill for totals
                if (isTotalRow || isGrandTotal) {
                    cell.fill = {
                        type: 'pattern',
                        pattern: 'solid',
                        fgColor: { argb: 'FFF2F2F2' }
                    };
                }
                
                // Borders
                if (isGrandTotal) {
                    cell.border = {
                        top: { style: 'thin', color: { argb: 'FFBFBFBF' } },
                        bottom: { style: 'double', color: { argb: 'FF000000' } },
                        left: { style: 'thin', color: { argb: 'FFBFBFBF' } },
                        right: { style: 'thin', color: { argb: 'FFBFBFBF' } }
                    };
                } else if (isTotalRow) {
                    cell.border = {
                        top: { style: 'thin', color: { argb: 'FFBFBFBF' } },
                        bottom: { style: 'thin', color: { argb: 'FFBFBFBF' } },
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
        
        shSummary.addRow(["공종별 총괄 집계표"]);
        shSummary.mergeCells("A1:H1");
        shSummary.getCell("A1").font = { size: 15, bold: true, name: "돋움체" };
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
        
        shSummary.getColumn(1).width = 8;
        shSummary.getColumn(2).width = 25;
        shSummary.getColumn(3).width = 8;
        shSummary.getColumn(4).width = 8;
        shSummary.getColumn(5).width = 18;
        shSummary.getColumn(6).width = 18;
        shSummary.getColumn(7).width = 18;
        shSummary.getColumn(8).width = 20;
        
        for (let colNum = 5; colNum <= 8; colNum++) {
            shSummary.getColumn(colNum).numFmt = "#,##0";
        }
        
        const summaryRowCount = shSummary.rowCount;
        for (let r = 3; r <= summaryRowCount; r++) {
            const row = shSummary.getRow(r);
            const cell2Val = row.getCell(2).value;
            
            if (cell2Val === "( 합       계 )") {
                row.eachCell({ includeEmpty: true }, (cell) => {
                    cell.font = { name: "돋움체", size: 11, bold: true };
                    cell.fill = {
                        type: 'pattern',
                        pattern: 'solid',
                        fgColor: { argb: 'FFEAEAEA' }
                    };
                    cell.border = {
                        top: { style: 'thin', color: { argb: 'FFBFBFBF' } },
                        bottom: { style: 'double', color: { argb: 'FF000000' } },
                        left: { style: 'thin', color: { argb: 'FFBFBFBF' } },
                        right: { style: 'thin', color: { argb: 'FFBFBFBF' } }
                    };
                });
            } else {
                row.eachCell({ includeEmpty: true }, (cell, colNum) => {
                    cell.font = { name: "돋움체", size: 10 };
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
        
        shBOQ.addRow(["설계내역서 - " + state.projectName]);
        shBOQ.mergeCells("A1:L1");
        shBOQ.getCell("A1").font = { size: 16, bold: true, name: "돋움체" };
        shBOQ.getCell("A1").alignment = { vertical: 'middle', horizontal: 'center' };
        shBOQ.getRow(1).height = 40;
        
        shBOQ.addRow(["번호", "품명", "규격", "단위", "수량", "재료비 단가", "재료비 금액", "노무비 단가", "노무비 금액", "경비 단가", "경비 금액", "합계 금액"]);
        styleHeaderRow(shBOQ.getRow(2));
        shBOQ.getRow(2).height = 25;
        
        let boqCurrentRow = 3;
        const matSumFormulas = [];
        const labSumFormulas = [];
        const expSumFormulas = [];
        
        state.divisions.forEach((div) => {
            // Write division header
            const divRow = shBOQ.addRow([div.name]);
            shBOQ.mergeCells(`A${boqCurrentRow}:L${boqCurrentRow}`);
            boqCurrentRow++;
            
            const startItemRow = boqCurrentRow;
            
            // Write items
            div.items.forEach((item, idx) => {
                const priceMatchIndex = keysArr.indexOf(item.masterId) + 3; // 1-based index + 2 header rows
                
                const hasLabor = item.laborExcelRowIndex !== null;
                const laborCellFormula = hasLabor ? `노임근거!K${item.laborExcelRowIndex}` : "0";
                
                shBOQ.addRow([
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
                { formula: `TRUNC(SUM(${laborSumRange})*옵션!$B$16, 0)` },
                { formula: `TRUNC(E${boqCurrentRow}*J${boqCurrentRow}, 0)` },
                { formula: `K${boqCurrentRow}` }
            ]);
            
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
            boqCurrentRow++;
            
            // Add division spacer row to keep row indices in sync
            shBOQ.addRow([]);
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
            { formula: `SUM(${matSumFormulas.join(",")})` },
            "",
            { formula: `SUM(${labSumFormulas.join(",")})` },
            "",
            { formula: `SUM(${expSumFormulas.join(",")})` },
            { formula: `SUM(G${boqCurrentRow}, I${boqCurrentRow}, K${boqCurrentRow})` }
        ]);
        
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
                    cell.font = { name: "돋움체", size: 11, bold: true };
                    cell.fill = {
                        type: 'pattern',
                        pattern: 'solid',
                        fgColor: { argb: 'FFEAEAEA' }
                    };
                    cell.border = thinBorder;
                });
            } else if (cell2Val === "( 소      계 )") {
                row.eachCell({ includeEmpty: true }, (cell) => {
                    cell.font = { name: "돋움체", size: 10, bold: true };
                    cell.fill = {
                        type: 'pattern',
                        pattern: 'solid',
                        fgColor: { argb: 'FFF2F2F2' }
                    };
                    cell.border = {
                        top: { style: 'thin', color: { argb: 'FFBFBFBF' } },
                        bottom: { style: 'double', color: { argb: 'FF000000' } },
                        left: { style: 'thin', color: { argb: 'FFBFBFBF' } },
                        right: { style: 'thin', color: { argb: 'FFBFBFBF' } }
                    };
                });
            } else if (cell2Val === "[ 합           계 ]") {
                row.eachCell({ includeEmpty: true }, (cell) => {
                    cell.font = { name: "돋움체", size: 11, bold: true };
                    cell.fill = {
                        type: 'pattern',
                        pattern: 'solid',
                        fgColor: { argb: 'FFEAEAEA' }
                    };
                    cell.border = {
                        top: { style: 'thin', color: { argb: 'FFBFBFBF' } },
                        bottom: { style: 'double', color: { argb: 'FF000000' } },
                        left: { style: 'thin', color: { argb: 'FFBFBFBF' } },
                        right: { style: 'thin', color: { argb: 'FFBFBFBF' } }
                    };
                });
            } else {
                row.eachCell({ includeEmpty: true }, (cell, colNum) => {
                    cell.font = { name: "돋움체", size: 10 };
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
                    row.getCell(2).font = { name: "돋움체", size: 10, italic: true, color: { argb: 'FF808080' } };
                    row.getCell(3).font = { name: "돋움체", size: 10, italic: true, color: { argb: 'FF808080' } };
                }
            }
        }
        
        // ----------------------------------------------------
        // 5. UNIT PRICE DATA SHEET (단가조사)
        // ----------------------------------------------------
        const shPrice = workbook.addWorksheet("단가조사");
        shPrice.views = [{ showGridLines: true }];
        
        // Add double row headers
        shPrice.addRow(["번호", "품목코드", "명칭", "규격", "단위", "적용단가", "시설단가", "거래가격", "", "물가정보", "", "물가자료", "", "유통물가", "", "조사단가1", "", "조사단가2", "", "비고"]);
        shPrice.addRow(["", "", "", "", "", "", "", "단가", "PAGE", "단가", "PAGE", "단가", "PAGE", "단가", "PAGE", "단가", "PAGE", "단가", "PAGE", ""]);
        
        // Merge cells for headers
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
            
            const rowNum = pIndex + 2; // header rows (1, 2)
            shPrice.addRow([
                pIndex++,
                key,
                item.name,
                item.spec,
                item.unit,
                { formula: `MIN(H${rowNum},J${rowNum},L${rowNum},N${rowNum},P${rowNum},R${rowNum})` }, // 적용단가 (최저가 공식)
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
        styleHeaderRow(shPrice.getRow(1));
        styleHeaderRow(shPrice.getRow(2));
        
        // Columns width
        shPrice.getColumn(1).width = 6;
        shPrice.getColumn(2).width = 12;
        shPrice.getColumn(3).width = 22;
        shPrice.getColumn(4).width = 22;
        shPrice.getColumn(5).width = 8;
        shPrice.getColumn(6).width = 15;
        shPrice.getColumn(7).width = 15;
        shPrice.getColumn(20).width = 15;
        
        shPrice.getColumn(6).numFmt = "#,##0";
        shPrice.getColumn(7).numFmt = "#,##0";
        
        for (let col = 8; col <= 19; col++) {
            const colWidth = (col % 2 === 0) ? 14 : 9;
            shPrice.getColumn(col).width = colWidth;
            if (col % 2 === 0) {
                shPrice.getColumn(col).numFmt = "#,##0";
            }
        }
        
        const priceRowCount = shPrice.rowCount;
        for (let r = 3; r <= priceRowCount; r++) {
            const row = shPrice.getRow(r);
            row.eachCell({ includeEmpty: true }, (cell, colNum) => {
                cell.font = { name: "돋움체", size: 10 };
                cell.border = thinBorder;
                
                if (colNum === 1 || colNum === 2 || colNum === 5 || (colNum >= 8 && colNum <= 19 && colNum % 2 === 1)) {
                    cell.alignment = { horizontal: 'center', vertical: 'middle' };
                } else if (colNum === 3 || colNum === 4 || colNum === 20) {
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
        
        shLabor.addRow(["번호", "소속공종", "명칭", "규격", "단위", "직종", "기본품셈", "할증률", "산출공량", "노임단가", "노무단가", "비고"]);
        
        let lIndex = 1;
        state.divisions.forEach(div => {
            div.items.forEach(item => {
                if (item.laborType && item.laborFactor > 0) {
                    const rowNum = lIndex + 1;
                    
                    let wageCell = "옵션!$B$12";
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
                        { formula: `G${rowNum}*H${rowNum}` },
                        { formula: wageCell },
                        { formula: `TRUNC(I${rowNum}*J${rowNum}, 0)` },
                        item.laborRemark || ""
                    ]);
                }
            });
        });
        
        styleHeaderRow(shLabor.getRow(1));
        shLabor.getColumn(1).width = 6;
        shLabor.getColumn(2).width = 15;
        shLabor.getColumn(3).width = 22;
        shLabor.getColumn(4).width = 22;
        shLabor.getColumn(5).width = 8;
        shLabor.getColumn(6).width = 12;
        shLabor.getColumn(7).width = 10;
        shLabor.getColumn(8).width = 10;
        shLabor.getColumn(9).width = 10;
        shLabor.getColumn(10).width = 14;
        shLabor.getColumn(11).width = 14;
        shLabor.getColumn(12).width = 12;
        
        shLabor.getColumn(7).numFmt = "0.0000";
        shLabor.getColumn(8).numFmt = "0.0%";
        shLabor.getColumn(9).numFmt = "0.0000";
        shLabor.getColumn(10).numFmt = "#,##0";
        shLabor.getColumn(11).numFmt = "#,##0";
        
        const laborRowCount = shLabor.rowCount;
        for (let r = 2; r <= laborRowCount; r++) {
            const row = shLabor.getRow(r);
            row.eachCell({ includeEmpty: true }, (cell, colNum) => {
                cell.font = { name: "돋움체", size: 10 };
                cell.border = thinBorder;
                
                if (colNum === 1 || colNum === 2 || colNum === 5 || colNum === 6) {
                    cell.alignment = { horizontal: 'center', vertical: 'middle' };
                } else if (colNum === 3 || colNum === 4 || colNum === 12) {
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
        
        styleHeaderRow(shOpt.getRow(1));
        
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

function styleHeaderRow(row) {
    row.eachCell({ includeEmpty: true }, (cell) => {
        cell.font = { bold: true, color: { argb: 'FF000000' }, name: "돋움체", size: 11 };
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
