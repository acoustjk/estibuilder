app_js_path = r"app.js"

with open(app_js_path, "r", encoding="utf-8") as f:
    content = f.read()

print("Patching app.js with multi-labor support (v2)...")

# Helper function to replace content between two markers
def replace_between(src, start_marker, end_marker, replacement, include_markers=False):
    start_idx = src.find(start_marker)
    if start_idx == -1:
        print(f"Warning: could not find start marker: {start_marker}")
        return src
    
    end_idx = src.find(end_marker, start_idx + len(start_marker))
    if end_idx == -1:
        print(f"Warning: could not find end marker: {end_marker}")
        return src
        
    if include_markers:
        return src[:start_idx] + replacement + src[end_idx + len(end_marker):]
    else:
        return src[:start_idx + len(start_marker)] + replacement + src[end_idx:]

# 1. Insert getGroupedLaborDb right before recommendLaborBasis
get_grouped_db_js = """function getGroupedLaborDb() {
    const grouped = {};
    state.standardLaborDb.forEach(item => {
        const key = `${item.code} | ${item.name} | ${item.spec}`;
        if (!grouped[key]) {
            grouped[key] = {
                code: item.code,
                name: item.name,
                spec: item.spec,
                unit: item.unit,
                category: item.category,
                keywords: item.keywords,
                labors: []
            };
        }
        grouped[key].labors.push({
            laborType: item.laborType,
            laborFactor: item.laborFactor
        });
    });
    return Object.values(grouped);
}

"""

if "function getGroupedLaborDb()" not in content:
    idx = content.find("function recommendLaborBasis(")
    if idx != -1:
        content = content[:idx] + get_grouped_db_js + content[idx:]
        print("Inserted getGroupedLaborDb function.")

# 2. Replace recommendLaborBasis function body
recommend_body_js = """
    const queryName = itemName.toLowerCase().trim();
    const querySpec = itemSpec.toLowerCase().trim();
    const groupedDb = getGroupedLaborDb();

    return groupedDb.map(dbItem => {
        let score = 0;
        const dbName = dbItem.name.toLowerCase();
        const dbSpec = dbItem.spec.toLowerCase();
        
        if (queryName.includes(dbName) || dbName.includes(queryName)) {
            score += 12;
        } else {
            const tokens = queryName.split(/[\\s,._-\\u3000]+/);
            const dbTokens = dbName.split(/[\\s,._-\\u3000]+/);
            
            tokens.forEach(t => {
                if (t.length >= 2) {
                    if (dbName.includes(t)) {
                        score += 4;
                    } else {
                        dbTokens.forEach(dbt => {
                            if (dbt.length >= 2 && (t.includes(dbt) || dbt.includes(t))) {
                                score += 2;
                            }
                        });
                    }
                }
            });
        }
        
        if (queryName.includes("utp") || querySpec.includes("utp")) {
            if (dbName.includes("utp") || dbItem.code.includes("4-3-1")) {
                score += 8;
            }
        }
        
        if (queryName.includes("광") || queryName.includes("optical") || queryName.includes("fiber")) {
            if (dbName.includes("광섬유") || dbName.includes("광케이블") || dbItem.code.includes("4-1-1")) {
                score += 8;
            }
        }
        
        if (queryName.includes("배관") || queryName.includes("배선") || queryName.includes("관로")) {
            if (dbName.includes("배관") || dbName.includes("배선") || dbName.includes("관로") || dbItem.category === "pipe") {
                score += 5;
            }
        }
        
        if (dbItem.keywords) {
            dbItem.keywords.forEach(kw => {
                const kwL = kw.toLowerCase();
                if (queryName.includes(kwL) || kwL.includes(queryName)) score += 5;
                if (querySpec.includes(kwL) || kwL.includes(querySpec)) score += 3;
            });
        }
        
        const queryP = queryName.match(/(\\d+)\\s*[pc]/) || querySpec.match(/(\\d+)\\s*[pc]/);
        const dbP = dbName.match(/(\\d+)\\s*[pc]/) || dbSpec.match(/(\\d+)\\s*[pc]/);
        if (queryP && dbP && queryP[1] === dbP[1]) {
            score += 6;
        }
        
        return {
            dbItem: dbItem,
            score: score
        };
    })
    .filter(res => res.score > 2)
    .sort((a, b) => b.score - a.score)
    .slice(0, 5)
    .map(res => ({
        ...res.dbItem,
        matchScore: Math.min(100, Math.round((res.score / 18) * 100))
    }));
}
"""
content = replace_between(content, "function recommendLaborBasis(itemName, itemSpec) {", "function autoMapAllLaborBasis()", recommend_body_js)
print("Updated recommendLaborBasis function.")

# 3. Replace autoMapAllLaborBasis function body
auto_map_body_js = """
    let count = 0;
    state.divisions.forEach(div => {
        div.items.forEach(item => {
            const recs = recommendLaborBasis(item.name, item.spec);
            if (recs.length > 0 && recs[0].matchScore >= 35) {
                const best = recs[0];
                const currentLaborsJson = JSON.stringify(item.labors || []);
                const bestLaborsJson = JSON.stringify(best.labors || []);
                
                if (item.laborRef !== best.code || currentLaborsJson !== bestLaborsJson) {
                    item.laborRef = best.code;
                    item.labors = best.labors;
                    if (best.labors.length > 0) {
                        item.laborType = best.labors[0].laborType;
                        item.laborFactor = best.labors[0].laborFactor;
                    } else {
                        item.laborType = null;
                        item.laborFactor = 0;
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
"""
content = replace_between(content, "function autoMapAllLaborBasis() {", "let activeLaborEditItem = null;", auto_map_body_js)
print("Updated autoMapAllLaborBasis function.")

# 4. Replace modal/apply labor basis block (openLaborRefModal, updateLaborModalPreview, searchModalLaborBasis, applyLaborRef)
modal_block_replacement = """function openLaborRefModal(divId, itemId) {
    const div = state.divisions.find(d => d.id === divId);
    if (!div) return;
    
    const item = div.items.find(i => i.id === itemId);
    if (!item) return;
    
    activeLaborEditItem = { divId, itemId, item };
    
    document.getElementById("lbl-modal-item-name").textContent = item.name;
    document.getElementById("lbl-modal-item-spec").textContent = item.spec;
    document.getElementById("lbl-modal-item-qty").textContent = `${item.qty} ${item.unit}`;
    
    const currentLabors = (item.labors && item.labors.length > 0)
        ? item.labors
        : (item.laborType && item.laborFactor > 0 ? [{ laborType: item.laborType, laborFactor: item.laborFactor }] : []);
    
    let currentLaborStr = "근거 없음";
    if (currentLabors.length > 0) {
        currentLaborStr = `${item.laborRef || '품셈'} (` + currentLabors.map(l => `${l.laborType} ${l.laborFactor}인`).join(", ") + `)`;
    }
    document.getElementById("lbl-modal-item-current").textContent = currentLaborStr;
    
    updateLaborModalPreview(currentLabors);
    
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
            
            const laborStr = rec.labors.map(l => `${l.laborType} ${l.laborFactor}인`).join(", ");
            
            card.innerHTML = `
                <div class="recommend-card-info">
                    <span class="recommend-card-title">${rec.name} (${rec.code})</span>
                    <span class="recommend-card-sub">${rec.spec} | ${laborStr}</span>
                </div>
                <div class="recommend-meta-wrap">
                    <span class="recommend-match-badge ${badgeClass}">${rec.matchScore}% 일치</span>
                </div>
            `;
            
            card.addEventListener("click", () => {
                applyLaborRef(rec.code, rec.labors);
            });
            
            card.addEventListener("mouseenter", () => {
                updateLaborModalPreview(rec.labors);
            });
            
            recList.appendChild(card);
        });
    }
    
    const searchInput = document.getElementById("input-modal-labor-search");
    searchInput.value = "";
    searchModalLaborBasis("");
    
    openModal("modal-recommend-labor");
}

// 모달 내 실시간 노무 단가 프리뷰 업데이트
function updateLaborModalPreview(labors) {
    const wages = WAGE_RATES[state.wageStandard];
    let calcCost = 0;
    let laborTypeStr = "";
    
    if (Array.isArray(labors)) {
        labors.forEach(l => {
            const wageRate = wages[l.laborType] || 0;
            calcCost += Math.floor((l.laborFactor || 0) * wageRate);
        });
        laborTypeStr = labors.map(l => l.laborType).join("+");
    } else if (arguments.length > 1) {
        const wageRate = wages[arguments[1]] || 0;
        calcCost = Math.floor((arguments[0] || 0) * wageRate);
        laborTypeStr = arguments[1];
    }
    
    document.getElementById("lbl-modal-wage-rate").textContent = laborTypeStr || "직종";
    document.getElementById("lbl-modal-calculated-labor").textContent = calcCost.toLocaleString();
}

// 모달 내 품셈 검색
function searchModalLaborBasis(query) {
    const list = document.getElementById("modal-labor-results-list");
    list.innerHTML = "";
    
    const queryL = query.toLowerCase().trim();
    const groupedDb = getGroupedLaborDb();
    
    const filtered = groupedDb.filter(dbItem => {
        return dbItem.name.toLowerCase().includes(queryL) ||
               dbItem.spec.toLowerCase().includes(queryL) ||
               dbItem.code.toLowerCase().includes(queryL) ||
               dbItem.labors.some(l => l.laborType.toLowerCase().includes(queryL));
    });
    
    if (filtered.length === 0) {
        list.innerHTML = `<div style="text-align: center; color: var(--text-muted); font-size: 12px; padding: 20px 0;">검색 결과가 없습니다.</div>`;
        return;
    }
    
    filtered.forEach(dbItem => {
        const row = document.createElement("div");
        row.className = "modal-db-item-row";
        
        const laborStr = dbItem.labors.map(l => `${l.laborType} ${l.laborFactor.toFixed(4)}인`).join(", ");
        
        row.innerHTML = `
            <div class="modal-db-item-details">
                <span class="modal-db-item-name">${dbItem.name} (${dbItem.code})</span>
                <span class="modal-db-item-spec">${dbItem.spec} [${dbItem.unit}]</span>
            </div>
            <div class="modal-db-item-right" style="width: 50%; text-align: right;">
                <span class="modal-db-item-factor" style="font-size: 12px; font-weight: bold;">${laborStr}</span>
            </div>
        `;
        
        row.addEventListener("click", () => {
            applyLaborRef(dbItem.code, dbItem.labors);
        });
        
        row.addEventListener("mouseenter", () => {
            updateLaborModalPreview(dbItem.labors);
        });
        
        list.appendChild(row);
    });
}

// 품셈 적용 완료 및 갱신
function applyLaborRef(code, laborsOrType, optionalFactor) {
    if (!activeLaborEditItem) return;
    
    const { item } = activeLaborEditItem;
    item.laborRef = code;
    
    if (Array.isArray(laborsOrType)) {
        item.labors = laborsOrType;
        if (laborsOrType.length > 0) {
            item.laborType = laborsOrType[0].laborType;
            item.laborFactor = laborsOrType[0].laborFactor;
        } else {
            item.laborType = null;
            item.laborFactor = 0;
        }
    } else {
        item.laborType = laborsOrType;
        item.laborFactor = optionalFactor || 0;
        item.labors = [{ laborType: laborsOrType, laborFactor: optionalFactor || 0 }];
    }
    
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
    loadActiveDivision();
    
    showToast(`"${item.name}"의 노임근거가 ${code}로 변경되었습니다.`, "success");
    activeLaborEditItem = null;
}
"""

content = replace_between(content, "function openLaborRefModal(divId, itemId) {", "// Expose functions globally to inline HTML onclick handlers", modal_block_replacement, include_markers=True)
print("Updated modal functions.")

# 5. Replace openAddPriceItemModal and confirmAddPriceItem
add_price_replacement = """function openAddPriceItemModal() {
    if (state.divisions.length === 0) {
        showToast("선택된 공종이 없습니다. 먼저 공종설정 탭에서 공종을 추가해 주세요.", "warning");
        return;
    }

    const selectLabor = document.getElementById("select-modal-price-labor-ref");
    selectLabor.innerHTML = `<option value="">노무비 없음 (자재 전용)</option>`;
    
    const groupedDb = getGroupedLaborDb();
    groupedDb.forEach(dbItem => {
        const opt = document.createElement("option");
        opt.value = `${dbItem.code} | ${dbItem.spec}`;
        const laborStr = dbItem.labors.map(l => `${l.laborType} ${l.laborFactor}인`).join(", ");
        opt.textContent = `${dbItem.code} ${dbItem.name} (${dbItem.spec}) [${laborStr}]`;
        selectLabor.appendChild(opt);
    });

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

    const newMasterId = "M_CUSTOM_" + Date.now();
    
    let laborType = null;
    let laborFactor = 0;
    let labors = [];
    if (laborRefCode) {
        const parts = laborRefCode.split(" | ");
        const refCode = parts[0];
        const refSpec = parts.length > 1 ? parts[1] : "";
        
        const groupedDb = getGroupedLaborDb();
        const dbItem = groupedDb.find(d => d.code === refCode && d.spec === refSpec);
        if (dbItem) {
            labors = dbItem.labors;
            if (labors.length > 0) {
                laborType = labors[0].laborType;
                laborFactor = labors[0].laborFactor;
            }
        }
    }

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
        laborRef: laborRefCode ? laborRefCode.split(" | ")[0] : "",
        laborRemark: laborRefCode ? "신설" : ""
    };

    ITEM_MASTER_DB.push({
        id: newMasterId,
        name: name,
        spec: spec,
        unit: unit,
        materialPrice: matPrice,
        laborRef: laborRefCode ? laborRefCode.split(" | ")[0] : null,
        laborType: laborType,
        laborFactor: laborFactor,
        labors: labors,
        category: "custom"
    });

    div.items.push(newItem);

    closeModal("modal-add-price-item");
    
    renderPriceInvestigationTable();
    calculateEstimates();
    loadActiveDivision();
    renderLaborBasisTable();

    showToast(`단가조사 품목 "${name}"이(가) 등록되었습니다.`, "success");
}"""

content = replace_between(content, "function openAddPriceItemModal() {", "function deletePriceInvestigationItem(masterId) {", add_price_replacement, include_markers=True)
print("Updated add/confirm price items.")

# 6. Replace renderLaborBasisTable function
render_table_replacement = """function renderLaborBasisTable() {
    const tbody = document.getElementById("labor-basis-table-body");
    tbody.innerHTML = "";

    let overallIndex = 1;
    let hasItems = false;

    state.divisions.forEach(div => {
        div.items.forEach(item => {
            hasItems = true;
            
            const labors = (item.labors && item.labors.length > 0)
                ? item.labors
                : (item.laborType && item.laborFactor > 0 ? [{ laborType: item.laborType, laborFactor: item.laborFactor }] : []);
                
            const multiplier = item.laborMultiplier !== undefined ? item.laborMultiplier : 1.0;

            const scenarios = [
                { value: "new", label: "신설 (100% 적용)", mult: 1.0, remark: "신설" },
                { value: "demolish", label: "단순 철거 (30% 적용)", mult: 0.3, remark: "철거자재" },
                { value: "reuse", label: "재사용 철거 (50% 적용)", mult: 0.5, remark: "철거재사용" },
                { value: "night", label: "야간 작업 (125% 적용)", mult: 1.25, remark: "야간할증" },
                { value: "narrow", label: "협소 장소 (110% 적용)", mult: 1.10, remark: "야지작업" }
            ];

            let selectHtml = "-";
            if (labors.length > 0) {
                selectHtml = `<select class="select-labor-scenario" data-div-id="${div.id}" data-item-id="${item.id}" style="background-color: var(--bg-base); border: 1px solid var(--border-color); color: var(--text-primary); padding: 6px 10px; border-radius: 4px; outline: none; font-size: 13px; width: 100%; cursor: pointer;">`;
                scenarios.forEach(sc => {
                    const selected = item.laborScenario === sc.value ? "selected" : "";
                    selectHtml += `<option value="${sc.value}" data-mult="${sc.mult}" data-remark="${sc.remark}" ${selected}>${sc.label}</option>`;
                });
                selectHtml += `</select>`;
            }

            if (labors.length === 0) {
                const tr = document.createElement("tr");
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
                    <td>-</td>
                    <td style="text-align: right; font-family: monospace;">-</td>
                    <td style="text-align: center;">-</td>
                    <td style="text-align: right; font-family: monospace; font-weight: 600; color: var(--text-muted);">-</td>
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
            } else {
                labors.forEach((lab, labIdx) => {
                    const tr = document.createElement("tr");
                    const calcFactor = lab.laborFactor * multiplier;
                    const totalLaborVolume = item.qty * calcFactor;
                    
                    const divNameCell = labIdx === 0 ? `<td style="color: var(--text-secondary); font-size: 13px;">${div.name}</td>` : `<td style="color: var(--text-muted); font-size: 13px; opacity: 0.5;">〃</td>`;
                    const itemNameCell = labIdx === 0 ? `
                        <td>
                            <div class="item-meta">
                                <span class="item-title">${item.name}</span>
                                <span class="item-subtitle">${item.spec}</span>
                            </div>
                        </td>
                    ` : `
                        <td>
                            <div class="item-meta" style="opacity: 0.6;">
                                <span class="item-title" style="font-size: 13px;">${item.name} (〃)</span>
                            </div>
                        </td>
                    `;
                    const qtyCell = labIdx === 0 ? `<td style="text-align: right; font-family: monospace;">${item.qty}</td>` : `<td style="text-align: right; font-family: monospace; color: var(--text-muted); opacity: 0.5;">〃</td>`;
                    const scenarioCell = labIdx === 0 ? `<td style="text-align: center;">${selectHtml}</td>` : `<td style="text-align: center; color: var(--text-muted); opacity: 0.5;">〃</td>`;
                    const badgeCell = labIdx === 0 ? `
                        <td style="text-align: center;">
                            <span class="labor-ref-badge-clickable" onclick="openLaborRefModal('${div.id}', '${item.id}')" title="클릭하여 표준품셈 변경/추천 받기">
                                <i class="fa-solid fa-wand-magic-sparkles"></i> ${item.laborRef || "근거 없음"}
                            </span>
                        </td>
                    ` : `
                        <td style="text-align: center; color: var(--text-muted); opacity: 0.5;">〃</td>
                    `;
                    const deleteCell = labIdx === 0 ? `
                        <td style="text-align: center;">
                            <button class="btn-icon-danger" onclick="deleteLaborBasisItem('${div.id}', '${item.id}')" title="노임근거 제거/삭제">
                                <i class="fa-solid fa-trash-can"></i>
                            </button>
                        </td>
                    ` : `
                        <td style="text-align: center; color: var(--text-muted); opacity: 0.5;">-</td>
                    `;

                    tr.innerHTML = `
                        <td>${overallIndex++}</td>
                        ${divNameCell}
                        ${itemNameCell}
                        <td style="text-align: center;">${item.unit}</td>
                        ${qtyCell}
                        <td>${lab.laborType}</td>
                        <td style="text-align: right; font-family: monospace;">${lab.laborFactor.toFixed(4)}</td>
                        ${scenarioCell}
                        <td style="text-align: right; font-family: monospace; font-weight: 600; color: var(--accent);">${totalLaborVolume.toFixed(4)}</td>
                        ${badgeCell}
                        ${deleteCell}
                    `;
                    tbody.appendChild(tr);
                });
            }
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
}"""

content = replace_between(content, "function renderLaborBasisTable() {", "function updateDivisionSelects() {", render_table_replacement, include_markers=True)
print("Updated renderLaborBasisTable function.")

# 7. Replace calculateEstimates function
calculate_estimates_replacement = """function calculateEstimates() {
    const wages = WAGE_RATES[state.wageStandard];
    
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
            const labors = (item.labors && item.labors.length > 0)
                ? item.labors
                : (item.laborType && item.laborFactor > 0 ? [{ laborType: item.laborType, laborFactor: item.laborFactor }] : []);
                
            labors.forEach(l => {
                itemLaborCost += Math.floor(l.laborFactor * multiplier * (wages[l.laborType] || 0));
            });
            
            div.materialSum += item.qty * materialPrice;
            div.laborSum += item.qty * itemLaborCost;
        });

        const toolWearRate = 3.0;
        const toolWear = Math.floor(div.laborSum * (toolWearRate / 100));
        div.expenseSum += toolWear;

        totalDirectMaterial += div.materialSum;
        totalDirectLabor += div.laborSum;
        totalDirectExpense += div.expenseSum;
    });

    const rates = state.rates;
    
    const directLabor = totalDirectLabor;
    const indirectLabor = Math.floor(directLabor * (rates.indirectLabor / 100));
    const totalLabor = directLabor + indirectLabor;

    const health = Math.floor(directLabor * (rates.healthInsurance / 100));
    const pension = Math.floor(directLabor * (rates.pensionInsurance / 100));
    const longtermCare = Math.floor(health * (rates.longtermCare / 100));
    const accident = Math.floor(totalLabor * (rates.accidentInsurance / 100));
    const employment = Math.floor(totalLabor * (rates.employmentInsurance / 100));
    const otherExpense = Math.floor((totalDirectMaterial + directLabor) * (rates.otherExpense / 100));
    
    const directExpense = totalDirectExpense;
    const totalExpense = directExpense + health + pension + longtermCare + accident + employment + otherExpense;

    const netConstruction = totalDirectMaterial + totalLabor + totalExpense;

    const generalAdmin = Math.floor(netConstruction * (rates.generalAdmin / 100));

    const profitBasis = totalLabor + totalExpense + generalAdmin;
    const rawProfit = Math.floor(profitBasis * (rates.profit / 100));

    const totalCostRaw = netConstruction + generalAdmin + rawProfit;
    const precision = state.roundingPrecision;
    
    const totalCostRounded = Math.floor(totalCostRaw / precision) * precision;
    const profitAdjustment = totalCostRounded - totalCostRaw;
    const adjustedProfit = rawProfit + profitAdjustment;
    
    const totalCost = netConstruction + generalAdmin + adjustedProfit;

    const vat = Math.floor(totalCost * 0.1);

    const grandTotal = totalCost + vat;

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

    updateSummaryDisplay();
}"""

content = replace_between(content, "function calculateEstimates() {", "// Update Division Select Dropdown", calculate_estimates_replacement, include_markers=False)
print("Updated calculateEstimates function.")

# 8. Update catalog newItem push structure in addPriceItemToActiveDivision
old_catalog_newItem = """        const newItem = {
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
        };"""

new_catalog_newItem = """        const newItem = {
            id: "item-" + Date.now() + Math.random().toString(36).substr(2, 5),
            masterId: dbItem.id,
            name: dbItem.name,
            spec: dbItem.spec,
            unit: dbItem.unit,
            qty: 1,
            materialPrice: dbItem.materialPrice,
            laborType: dbItem.laborType,
            laborFactor: dbItem.laborFactor,
            labors: dbItem.labors || (dbItem.laborType && dbItem.laborFactor > 0 ? [{ laborType: dbItem.laborType, laborFactor: dbItem.laborFactor }] : []),
            laborScenario: "new",
            laborMultiplier: 1.0,
            laborRef: dbItem.laborRef || "",
            laborRemark: "신설"
        };"""

content = content.replace(old_catalog_newItem, new_catalog_newItem)
print("Updated catalog newItem addition.")

# 9. Replace Excel row precalculations
old_excel_precalc = """        // Pre-calculate Excel row indices for 1-to-1 linkage between '내역서' and '노임근거'
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
        });"""

new_excel_precalc = """        // Pre-calculate Excel row indices for 1-to-many linkage between '내역서' and '노임근거'
        let boqRow = 3;
        let laborRow = 2;
        
        state.divisions.forEach(div => {
            boqRow++;
            div.items.forEach(item => {
                item.excelRowIndex = boqRow;
                boqRow++;
                
                const labors = (item.labors && item.labors.length > 0)
                    ? item.labors
                    : (item.laborType && item.laborFactor > 0 ? [{ laborType: item.laborType, laborFactor: item.laborFactor }] : []);
                
                if (labors.length > 0) {
                    item.laborExcelRowIndices = [];
                    labors.forEach(() => {
                        item.laborExcelRowIndices.push(laborRow);
                        laborRow++;
                    });
                } else {
                    item.laborExcelRowIndices = [];
                }
            });
            boqRow++;
            boqRow++;
            boqRow++;
        });"""

content = content.replace(old_excel_precalc, new_excel_precalc)
print("Updated excel row pre-calculations.")

# 10. Replace shLabor sheet generation block in exportToExcel
old_sh_labor_block = """        // ----------------------------------------------------
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
                        div.name.replace(/^\\d+\\.\\s*/, ""),
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
        shLabor.getColumn(11).numFmt = "₩#,##0";"""

new_sh_labor_block = """        // ----------------------------------------------------
        // 3. LABOR DETAILS SHEET (노임근거)
        // ----------------------------------------------------
        const shLabor = workbook.addWorksheet("노임근거");
        shLabor.views = [{ showGridLines: true }];
        
        shLabor.addRow(["번호", "소속공종", "명칭", "규격", "단위", "직종", "기본품셈", "할증률", "산출공량", "노임단가", "노무단가", "비고"]);
        
        let lIndex = 1;
        state.divisions.forEach(div => {
            div.items.forEach(item => {
                const labors = (item.labors && item.labors.length > 0)
                    ? item.labors
                    : (item.laborType && item.laborFactor > 0 ? [{ laborType: item.laborType, laborFactor: item.laborFactor }] : []);
                
                labors.forEach(lab => {
                    const rowNum = lIndex + 1;
                    
                    let wageCell = "옵션!$B$12";
                    if (lab.laborType === "통신설비공") wageCell = "옵션!$B$13";
                    else if (lab.laborType === "특별인부") wageCell = "옵션!$B$14";
                    else if (lab.laborType === "통신외선공") wageCell = "옵션!$B$18";
                    else if (lab.laborType === "통신케이블공") wageCell = "옵션!$B$19";
                    else if (lab.laborType === "보통인부") wageCell = "옵션!$B$20";
                    else if (lab.laborType === "광케이블설치사") wageCell = "옵션!$B$21";
                    
                    const multiplier = item.laborMultiplier !== undefined ? item.laborMultiplier : 1.0;
                    
                    shLabor.addRow([
                        lIndex++,
                        div.name.replace(/^\\d+\\.\\s*/, ""),
                        item.name,
                        item.spec,
                        item.unit,
                        lab.laborType,
                        lab.laborFactor,
                        multiplier,
                        { formula: `G${rowNum}*H${rowNum}` },
                        { formula: wageCell },
                        { formula: `TRUNC(I${rowNum}*J${rowNum}, 0)` },
                        item.laborRemark || ""
                    ]);
                });
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
        shLabor.getColumn(10).numFmt = "₩#,##0";
        shLabor.getColumn(11).numFmt = "₩#,##0";"""

content = content.replace(old_sh_labor_block, new_sh_labor_block)
print("Updated shLabor sheet generation.")

# 11. Replace shBOQ item iteration block in exportToExcel
old_sh_boq_items = """            // Write items
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
            });"""

new_sh_boq_items = """            // Write items
            div.items.forEach((item, idx) => {
                const keysArr = Array.from(allItemsMap.keys());
                const priceMatchIndex = keysArr.indexOf(item.masterId) + 3;
                
                const hasLabor = item.laborExcelRowIndices && item.laborExcelRowIndices.length > 0;
                let laborCellFormula = "0";
                
                if (hasLabor) {
                    if (item.laborExcelRowIndices.length === 1) {
                        laborCellFormula = `노임근거!K${item.laborExcelRowIndices[0]}`;
                    } else {
                        const cells = item.laborExcelRowIndices.map(r => `노임근거!K${r}`).join(", ");
                        laborCellFormula = `SUM(${cells})`;
                    }
                }

                const itemRow = shBOQ.addRow([
                    idx + 1,
                    item.name,
                    item.spec,
                    item.unit,
                    item.qty,
                    { formula: `단가조사!F${priceMatchIndex}` },
                    { formula: `TRUNC(E${boqCurrentRow}*F${boqCurrentRow}, 0)` },
                    hasLabor ? { formula: laborCellFormula } : 0,
                    { formula: `TRUNC(E${boqCurrentRow}*H${boqCurrentRow}, 0)` },
                    0,
                    0,
                    { formula: `SUM(G${boqCurrentRow}, I${boqCurrentRow}, K${boqCurrentRow})` }
                ]);
                boqCurrentRow++;
            });"""

content = content.replace(old_sh_boq_items, new_sh_boq_items)
print("Updated shBOQ items rendering and formulas.")

with open(app_js_path, "w", encoding="utf-8") as f:
    f.write(content)

print("Patching completed successfully!")
