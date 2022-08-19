function updateValue(isIncrase, price, inputId, priceId) {
    const caseInputFeild = document.getElementById(inputId);
    const caseInputFeildValue = parseInt(caseInputFeild.value);
    const casePrice = document.getElementById(priceId);

    if (isIncrase) {
        const caseInputNewValue = caseInputFeildValue + 1;
        caseInputFeild.value = caseInputNewValue;
        casePrice.innerText = caseInputNewValue * price
    } else {
        const caseInputNewValue = caseInputFeildValue - 1;
        if (caseInputNewValue < 0) {
            alert('Negative value is not acceptabel');
            return;
        }
        caseInputFeild.value = caseInputNewValue;
        casePrice.innerText = caseInputNewValue * price;
    }
};
