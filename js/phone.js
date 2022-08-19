




document.getElementById('phone-plus').addEventListener('click', function () {
    const numberOfPhone = updatePhoneValue(true);

    priceUpdatePhone(numberOfPhone);
    calculator()

});

document.getElementById('phone-minus').addEventListener('click', function () {
    const numberOfPhone = updatePhoneValue(false);

    priceUpdatePhone(numberOfPhone);

    calculator();
})