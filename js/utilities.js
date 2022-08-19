function updateValue(isIncrase, inputId, priceId, price) {
    const inputFeild = document.getElementById(inputId);
    const inputValue = parseInt(inputFeild.value);
    const priceFeild = document.getElementById(priceId);

    if (isIncrase) {
        const inputNewValue = inputValue + 1;
        inputFeild.value = inputNewValue;
        priceFeild.innerText = inputNewValue * price;
    } else {
        const inputNewValue = inputValue - 1;
        inputFeild.value = inputNewValue;
        priceFeild.innerText = inputNewValue * price;
    }

}


function calculator() {
    const phonePriceTotalFeild = document.getElementById('phone-price');
    const phonePriceTotalFeildValue = parseInt(phonePriceTotalFeild.innerText);

    const casePriceTotalFeild = document.getElementById('case-price');
    const casePriceTotalFeildValue = parseInt(casePriceTotalFeild.innerText);

    const totalCost = phonePriceTotalFeildValue + casePriceTotalFeildValue;

    const subTotal = document.getElementById('sub-total').innerText = totalCost;
    const tax = totalCost * .10;
    const taxTotalString = document.getElementById('tax').innerText = tax.toFixed(2);
    const taxTotal = parseFloat(taxTotalString);

    document.getElementById('final-total').innerText = totalCost + taxTotal;
}