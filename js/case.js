
document.getElementById('case-plus').addEventListener('click', function () {
    updateValue(true, "case-input-feild", 'case-price', 59);
    calculator();
});

document.getElementById('case-minus').addEventListener('click', function () {
    updateValue(false, "case-input-feild", 'case-price', 59);
    calculator()
});

