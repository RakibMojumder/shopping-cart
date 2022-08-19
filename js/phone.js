
document.getElementById('phone-plus').addEventListener('click', function () {
    updateValue(true, "phone-input-feild", 'phone-price', 1219);
    calculator()
});

document.getElementById('phone-minus').addEventListener('click', function () {
    updateValue(false, "phone-input-feild", 'phone-price', 1219);
    calculator()
});

