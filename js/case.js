

document.getElementById('case-plus').addEventListener('click', function () {
    const numberOfCase = updateCaseValue(true);

    priceUpdateCase(numberOfCase);

    calculator()
});

document.getElementById('case-minus').addEventListener('click', function () {
    const numberOfCase = updateCaseValue(false);

    priceUpdateCase(numberOfCase);

    calculator()

});