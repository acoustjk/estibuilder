app_js_path = r"app.js"

with open(app_js_path, "r", encoding="utf-8") as f:
    content = f.read()

print("Patching calculateEstimates function in app.js...")

# Helper function to replace content between two markers
def replace_between(src, start_marker, end_marker, replacement):
    start_idx = src.find(start_marker)
    if start_idx == -1:
        print(f"Error: could not find start marker: {start_marker}")
        return src
    
    end_idx = src.find(end_marker, start_idx + len(start_marker))
    if end_idx == -1:
        print(f"Error: could not find end marker: {end_marker}")
        return src
        
    return src[:start_idx + len(start_marker)] + replacement + src[end_idx:]

calculate_estimates_replacement = """
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

    document.getElementById("badge-total-cost").textContent = `₩${grandTotal.toLocaleString()}`;

    renderCostCalculationTable();
    saveToLocalStorage();
}

"""

new_content = replace_between(content, "function calculateEstimates() {", "function renderCostCalculationTable() {", calculate_estimates_replacement)

with open(app_js_path, "w", encoding="utf-8") as f:
    f.write(new_content)

print("Patching completed successfully!")
