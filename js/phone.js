
document.getElementById('phone-plus').addEventListener('click', function () {
    updateValue(true, 1219, 'phone-input-field', 'phone-price');
});

document.getElementById('phone-minus').addEventListener('click', function (event) {
    updateValue(false, 1219, 'phone-input-field', 'phone-price');
});
