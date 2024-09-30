document.getElementById('calculateBtn').addEventListener('click', function () {
    const day = parseInt(document.getElementById('dayInput').value);
    const month = parseInt(document.getElementById('monthInput').value);
    const year = parseInt(document.getElementById('yearInput').value);

    const errorElements = document.querySelectorAll('.error');
    errorElements.forEach((element) => (element.textContent = ''));

    if (isNaN(day) || day < 1 || day > 31) {
        document.querySelector('#dayInput + .error').textContent = 'Invalid day';
        return;
    }
    if (isNaN(month) || month < 1 || month > 12) {
        document.querySelector('#monthInput + .error').textContent = 'Invalid month';
        return;
    }
    if (isNaN(year) || year < 1900 || year > new Date().getFullYear()) {
        document.querySelector('#yearInput + .error').textContent = 'Invalid year';
        return;
    }

    const today = new Date();
    const birthDate = new Date(year, month - 1, day);

    let ageYears = today.getFullYear() - birthDate.getFullYear();
    let ageMonths = today.getMonth() - birthDate.getMonth();
    let ageDays = today.getDate() - birthDate.getDate();

    if (ageDays < 0) {
        ageMonths--;
        ageDays += new Date(year, month, 0).getDate();
    }

    if (ageMonths < 0) {
        ageYears--;
        ageMonths += 12;
    }

    document.getElementById('yearOutput').textContent = ageYears;
    document.getElementById('monthOutput').textContent = ageMonths;
    document.getElementById('dayOutput').textContent = ageDays;
});
