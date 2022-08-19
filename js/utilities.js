
function updatePhoneValue(isIncrase) {
    const phoneInputFeild = document.getElementById('phone-input-field');
    const phoneInputFeildValue = parseInt(phoneInputFeild.value);

    let phoneInputFeildNewValue;
    if (isIncrase) {
        phoneInputFeildNewValue = phoneInputFeildValue + 1;
        phoneInputFeild.value = phoneInputFeildNewValue;
    } else {
        phoneInputFeildNewValue = phoneInputFeildValue - 1;
        phoneInputFeild.value = phoneInputFeildNewValue;
    };
    return phoneInputFeildNewValue;
};



function updateCaseValue(isIncrase) {
    const phoneInputFeild = document.getElementById('case-input-feild');
    const phoneInputFeildValue = parseInt(phoneInputFeild.value);

    let phoneInputFeildNewValue;
    if (isIncrase) {
        phoneInputFeildNewValue = phoneInputFeildValue + 1;
        phoneInputFeild.value = phoneInputFeildNewValue;
    } else {
        phoneInputFeildNewValue = phoneInputFeildValue - 1;
        phoneInputFeild.value = phoneInputFeildNewValue;
    };
    return phoneInputFeildNewValue;
};




function priceUpdatePhone(numberOfPhone) {
    const phonePriceFeild = document.getElementById('phone-price');

    phonePriceFeild.innerText = numberOfPhone * 1219;

}
function priceUpdateCase(numberOfPhone) {
    const casePriceFeild = document.getElementById('case-price');
    casePriceFeild.innerText = numberOfPhone * 59;
}




function getTotalElement(elementId) {
    const caseTotalElement = document.getElementById(elementId);
    const caseTotalValue = parseInt(caseTotalElement.innerText);
    return caseTotalValue;
}


function calculator() {
    const casePriceTotal = getTotalElement('case-price');
    const phonePrceTotal = getTotalElement('phone-price');

    const total = casePriceTotal + phonePrceTotal;

    const subTotalElement = document.getElementById('sub-total');
    subTotalElement.innerText = total;

    const taxElement = document.getElementById('tax');
    const taxValue = total * .10;
    taxElement.innerText = taxValue.toFixed(2);

    const finalTotalElement = document.getElementById('final-total');
    const finalTotal = total - taxValue;
    finalTotalElement.innerText = finalTotal;
}