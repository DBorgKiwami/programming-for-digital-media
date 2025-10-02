//I'm not using conditionals for this because my overwhelming autism forces me to optimize for expandability.

//A dictionary of dictionaries. The first layer indicates the currency we are converting from. The second layer the currency we are converting to.
const currencyConversionTable = new Map([
    ["EUR", new Map([
        ["EUR", 1],
        ["GBP", 0.87],
        ["USD", 1.17]
    ])],
    ["GBP", new Map([
        ["EUR", 1.15], 
        ["GBP", 1], 
        ["USD", 1.35]
    ])],
    ["USD", new Map([
        ["EUR", 0.8],
        ["GBP", 0.74],
        ["USD", 1]
    ])],
]);
//Fect Input/output elements
const initialSelect = document.getElementById("initial");
const targetSelect = document.getElementById("target");
const valueSelect = document.getElementById("amount");
const outputDisplay = document.getElementById("outputVal");

console.log(outputDisplay.textContent);

function convertCurrency(initialCurrency, targetCurrency, amount){
    //To calculate the conversion, multiply the given amount by that currency's conversion rate to the target currency, found nested within the following dictionaries.
    
    return (amount * currencyConversionTable.get(initialCurrency).get(targetCurrency));
};

//Display output on webpage
function updateOutput(){
    outputDisplay.textContent = convertCurrency(initialSelect.value, targetSelect.value, valueSelect.value)
}

//Add event listeners for change in currecy or value to update output
valueSelect.addEventListener("change", updateOutput);
initialSelect.addEventListener("change", updateOutput);
targetSelect.addEventListener("change", updateOutput);

//Of note that this could instead be done using integers, which would make this a job suitable for a two dimensional array.
//However, as to match the specified brief, I have elected to do so this way.
console.log(convertCurrency("EUR", "GBP", 10));