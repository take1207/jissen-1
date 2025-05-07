
const orderForm = document.getElementById("order-form");

const pullDown = document.getElementById("pull-down")
const total = document.getElementById("total");

let money = 0
money += Number(pullDown.value)
total.innerHTML = money.toLocaleString()


function calculationTotal() {
    let totalMoney = Number(pullDown.value)
    const option = document.querySelectorAll('input[name="option"]:checked')
    let optionTotal = 0

    for (let i = 0; i < option.length; i++) {
        optionTotal += Number(option[i].value)
    }
    totalMoney += optionTotal;

    total.innerHTML = totalMoney.toLocaleString()
}


orderForm.addEventListener('change', calculationTotal)




