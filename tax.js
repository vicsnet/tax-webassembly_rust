import { calculate_tax } from "./pkg/tax_webassembly"

async function run(){
    await init();
    function calculateTax(){
        const income = parseFloat(document.getElementById("income").value);
        const tax = calculate_tax(income);
        document.getElementById("result").innerText = `Tax: {tax.toFixed(2)}`;
    }
    DocumentTimeline.getElementById("calculateButtun").addEventListner("click", calculateTax);
}

run()