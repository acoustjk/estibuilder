// EstiBuilder App Logic

// 1. Master Item Database (통신공사 품목 DB)
const ITEM_MASTER_DB = [
    // category: device
    { id: "M001", name: "모듈라짹", spec: "매입용, Cat.5 2구", unit: "개", category: "device", materialPrice: 11500, laborType: "통신내선공", laborFactor: 0.0336 },
    { id: "M002", name: "TV UNIT", spec: "쌍방향, 단말", unit: "개", category: "device", materialPrice: 2635, laborType: "통신내선공", laborFactor: 0.0700 },
    { id: "M003", name: "TV UNIT", spec: "쌍방향, 직렬", unit: "개", category: "device", materialPrice: 2750, laborType: "통신내선공", laborFactor: 0.0700 },
    { id: "M004", name: "스피커", spec: "스피커(S.T), 천정용(3W)", unit: "개", category: "device", materialPrice: 16174, laborType: "통신설비공", laborFactor: 0.2100 },
    { id: "M005", name: "스피커", spec: "벽부형(3W)", unit: "개", category: "device", materialPrice: 18500, laborType: "통신설비공", laborFactor: 0.2100 },
    { id: "M006", name: "CCTV카메라(일체형)", spec: "Color CCD, Dome(고정형)", unit: "개", category: "device", materialPrice: 125000, laborType: "통신설비공", laborFactor: 0.2400 },
    { id: "M007", name: "무선 경광등", spec: "경보장치용", unit: "개", category: "device", materialPrice: 195500, laborType: "통신내선공", laborFactor: 0.1000 },
    { id: "M008", name: "비상벨 송신기", spec: "무선 송신형", unit: "개", category: "device", materialPrice: 13800, laborType: "통신내선공", laborFactor: 0.1000 },
    { id: "M009", name: "비상벨 수신기", spec: "메인 제어형", unit: "개", category: "device", materialPrice: 465750, laborType: "통신내선공", laborFactor: 0.1000 },
    { id: "M010", name: "비상벨 중계기", spec: "신호 증폭용", unit: "개", category: "device", materialPrice: 523250, laborType: "통신내선공", laborFactor: 0.1000 },
    { id: "M011", name: "경광등용 안내판", spec: "아크릴 포장형", unit: "개", category: "device", materialPrice: 11500, laborType: "통신내선공", laborFactor: 0.1000 },
    
    // category: cable
    { id: "C001", name: "UTP 케이블", spec: "CAT 5E. 4P-0.5mm", unit: "M", category: "cable", materialPrice: 350, laborType: "통신내선공", laborFactor: 0.0336 },
    { id: "C002", name: "광섬유 케이블", spec: "2Core (S/M)", unit: "M", category: "cable", materialPrice: 850, laborType: "통신설비공", laborFactor: 0.0500 },
    { id: "C003", name: "Speaker Cable", spec: "2S11F", unit: "M", category: "cable", materialPrice: 650, laborType: "통신설비공", laborFactor: 0.0400 },
    { id: "C004", name: "난연성 비닐절연 접지선", spec: "0.6/1kV F-GV 16㎟", unit: "M", category: "cable", materialPrice: 3500, laborType: "통신내선공", laborFactor: 0.1200 },
    { id: "C005", name: "압착단자 (접지용)", spec: "R형동선 나압착 16 ㎟", unit: "개", category: "cable", materialPrice: 350, laborType: "통신내선공", laborFactor: 0.0500 },

    // category: pipe
    { id: "P001", name: "경질비닐전선관(통신)", spec: "HI 22 mm", unit: "M", category: "pipe", materialPrice: 1200, laborType: "통신내선공", laborFactor: 0.0600 },
    { id: "P002", name: "경질비닐전선관(통신)", spec: "HI 36 mm", unit: "M", category: "pipe", materialPrice: 1800, laborType: "통신내선공", laborFactor: 0.0800 },
    { id: "P003", name: "경질비닐전선관(노출)", spec: "HI 36 mm", unit: "M", category: "pipe", materialPrice: 2000, laborType: "통신내선공", laborFactor: 0.0900 },
    { id: "P004", name: "강제전선관용 부품", spec: "위샤캡, 36 C", unit: "개", category: "pipe", materialPrice: 1500, laborType: "통신내선공", laborFactor: 0.0500 },
    { id: "P005", name: "지중선용 가선철물", spec: "전주용입상관, D130x2m", unit: "개", category: "pipe", materialPrice: 45000, laborType: "통신내선공", laborFactor: 0.2500 },
    { id: "P006", name: "통신맨홀 (사각수공 1호)", spec: "450x950x700", unit: "개소", category: "pipe", materialPrice: 180000, laborType: "통신내선공", laborFactor: 1.5000 },
    { id: "P007", name: "관로구방수(통신)", spec: "D 30", unit: "개소", category: "pipe", materialPrice: 8500, laborType: "통신내선공", laborFactor: 0.1500 },
    { id: "P008", name: "관로구방수(통신)", spec: "D 50", unit: "개소", category: "pipe", materialPrice: 12000, laborType: "통신내선공", laborFactor: 0.2000 },
    
    // category: labor
    { id: "L001", name: "터파기(인력100%)", spec: "보통토사0∼1m", unit: "㎥", category: "labor", materialPrice: 0, laborType: "특별인부", laborFactor: 0.3500 },
    { id: "L002", name: "되메우기(인력100%)", spec: "보통토사", unit: "㎥", category: "labor", materialPrice: 0, laborType: "특별인부", laborFactor: 0.2000 },
    { id: "L003", name: "현장내잔토처리", spec: "소운반.고르기", unit: "㎥", category: "labor", materialPrice: 0, laborType: "특별인부", laborFactor: 0.1500 },
    { id: "L004", name: "잡석깔기지정", spec: "인력포설", unit: "㎥", category: "labor", materialPrice: 28000, laborType: "특별인부", laborFactor: 0.4000 }
];

// 2. Wage Rates (노임 단가 테이블)
const WAGE_RATES = {
    "2023_1": { "통신내선공": 251790, "통신설비공": 280506, "특별인부": 197450 },
    "2024_1": { "통신내선공": 268400, "통신설비공": 298100, "특별인부": 208500 },
    "2026_1": { "통신내선공": 298500, "통신설비공": 332600, "특별인부": 234100 }
};

// 3. Application State (상태 관리)
let state = {
    projectName: "노원문화예술회관 리모델링 통신공사",
    duration: "6개월",
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
    divisions: [
        {
            id: "div-1",
            name: "1. 통신설비공사",
            items: [
                { id: "item-1", masterId: "M001", name: "모듈라짹", spec: "매입용, Cat.5 2구", unit: "개", qty: 2, materialPrice: 11500, laborType: "통신내선공", laborFactor: 0.0336 },
                { id: "item-2", masterId: "M002", name: "TV UNIT", spec: "쌍방향, 단말", unit: "개", qty: 2, materialPrice: 2635, laborType: "통신내선공", laborFactor: 0.0700 },
                { id: "item-3", masterId: "M003", name: "TV UNIT", spec: "쌍방향, 직렬", unit: "개", qty: 2, materialPrice: 2750, laborType: "통신내선공", laborFactor: 0.0700 },
                { id: "item-4", masterId: "M007", name: "무선 경광등", spec: "경보장치용", unit: "개", qty: 2, materialPrice: 195500, laborType: "통신내선공", laborFactor: 0.1000 }
            ]
        },
        {
            id: "div-2",
            name: "2. 방송설비공사",
            items: [
                { id: "item-5", masterId: "M004", name: "스피커", spec: "스피커(S.T), 천정용(3W)", unit: "개", qty: 16, materialPrice: 16174, laborType: "통신설비공", laborFactor: 0.2100 }
            ]
        },
        {
            id: "div-3",
            name: "3. CCTV설비공사",
            items: [
                { id: "item-6", masterId: "M006", name: "CCTV카메라(일체형)", spec: "Color CCD, Dome(고정형)", unit: "개", qty: 8, materialPrice: 125000, laborType: "통신설비공", laborFactor: 0.2400 }
            ]
        }
    ],
    itemPrices: {
        "M001": { appliedPrice: 11500, facilityPrice: 11500, marketPrice: { price: 0, page: "" }, infoPrice: { price: 11500, page: "1-1311" }, materialPrice: { price: 0, page: "" }, distPrice: { price: 0, page: "" }, invest1: { price: 0, page: "" }, invest2: { price: 0, page: "" } },
        "M002": { appliedPrice: 2635, facilityPrice: 2635, marketPrice: { price: 0, page: "" }, infoPrice: { price: 2635, page: "1-1311" }, materialPrice: { price: 0, page: "" }, distPrice: { price: 0, page: "" }, invest1: { price: 0, page: "" }, invest2: { price: 0, page: "" } },
        "M003": { appliedPrice: 2750, facilityPrice: 2750, marketPrice: { price: 0, page: "" }, infoPrice: { price: 2750, page: "1-1311" }, materialPrice: { price: 0, page: "" }, distPrice: { price: 0, page: "" }, invest1: { price: 0, page: "" }, invest2: { price: 0, page: "" } },
        "M004": { appliedPrice: 16174, facilityPrice: 16174, marketPrice: { price: 0, page: "" }, infoPrice: { price: 20000, page: "1-1402" }, materialPrice: { price: 0, page: "" }, distPrice: { price: 0, page: "" }, invest1: { price: 0, page: "" }, invest2: { price: 0, page: "" } },
        "M006": { appliedPrice: 125000, facilityPrice: 125000, marketPrice: { price: 0, page: "" }, infoPrice: { price: 125000, page: "1-1502" }, materialPrice: { price: 0, page: "" }, distPrice: { price: 0, page: "" }, invest1: { price: 0, page: "" }, invest2: { price: 0, page: "" } },
        "M007": { appliedPrice: 195500, facilityPrice: 195500, marketPrice: { price: 0, page: "" }, infoPrice: { price: 195500, page: "1-1505" }, materialPrice: { price: 0, page: "" }, distPrice: { price: 0, page: "" }, invest1: { price: 0, page: "" }, invest2: { price: 0, page: "" } }
    },
    activeDivisionId: "div-1"
};

let costShareChart = null;

// 4. Initialization
document.addEventListener("DOMContentLoaded", () => {
    initTabs();
    initSettingsListeners();
    initBuilderListeners();
    initPriceListeners();
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
            if (tabId === "tab-prices") {
                renderPriceInvestigationTable();
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
        tbody.innerHTML = `<tr><td colspan="19" style="text-align: center; color: var(--text-muted); padding: 45px 0;"><i class="fa-solid fa-calculator" style="font-size: 24px; margin-bottom: 10px; display: block;"></i>내역서 빌더에서 먼저 품목을 추가해야 단가 조사를 진행할 수 있습니다.</td></tr>`;
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
    if (!activeDiv) return;

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
            laborFactor: dbItem.laborFactor
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
            const itemLaborCost = Math.floor(item.laborFactor * (wages[item.laborType] || 0));
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
        shLabor.addRow(["번호", "품목코드", "명칭", "규격", "단위", "직종", "품셈공량", "노임단가", "노무단가"]);
        
        let lIndex = 1;
        allItemsMap.forEach((item, key) => {
            const rowNum = lIndex + 1;
            // Map labor type to option cells
            let wageCell = "옵션!$B$12"; // 통신내선공 default
            if (item.laborType === "통신설비공") wageCell = "옵션!$B$13";
            else if (item.laborType === "특별인부") wageCell = "옵션!$B$14";

            shLabor.addRow([
                lIndex++,
                key,
                item.name,
                item.spec,
                item.unit,
                item.laborType,
                item.laborFactor,
                { formula: wageCell },
                { formula: `TRUNC(G${rowNum}*H${rowNum}, 0)` }
            ]);
        });

        styleHeaderRow(shLabor.getRow(1));
        shLabor.getColumn(1).width = 8;
        shLabor.getColumn(2).width = 12;
        shLabor.getColumn(3).width = 20;
        shLabor.getColumn(4).width = 20;
        shLabor.getColumn(5).width = 8;
        shLabor.getColumn(6).width = 15;
        shLabor.getColumn(7).width = 12;
        shLabor.getColumn(8).width = 15;
        shLabor.getColumn(9).width = 15;
        
        shLabor.getColumn(7).numFmt = "0.0000";
        shLabor.getColumn(8).numFmt = "₩#,##0";
        shLabor.getColumn(9).numFmt = "₩#,##0";

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
                const laborMatchIndex = keysArr.indexOf(item.masterId) + 2; // 1-based index + 1 header row

                const itemRow = shBOQ.addRow([
                    idx + 1,
                    item.name,
                    item.spec,
                    item.unit,
                    item.qty,
                    { formula: `단가조사!F${priceMatchIndex}` }, // Material Unit Cost
                    { formula: `TRUNC(E${boqCurrentRow}*F${boqCurrentRow}, 0)` }, // Material Total Cost
                    { formula: `노임근거!I${laborMatchIndex}` }, // Labor Unit Cost
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
