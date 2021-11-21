const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function ageCalculate() {
    let today = new Date();
    let inputDate = new Date(document.getElementById('dateinput').value);
    let birthmonth, birthdate, birthyear;
    let birthdetails = {
        date: inputDate.getDate(),
        month: inputDate.getMonth() + 1,
        year: inputDate.getFullYear(),
    }
    let currentyear = today.getFullYear();
    console.log(currentyear);
    let currentmonth = today.getMonth() + 1;
    console.log(currentmonth);
    let currentdate = today.getDate();
    console.log(currentdate);
    leapChecker(currentyear);
    if (birthdetails.year > currentyear || (birthdetails.month > currentmonth && birthdetails.year == currentyear) || (birthdetails.date > currentdate && birthdetails.month == currentmonth && birthdetails.year == currentyear)) {
        alert("Invalid Date! Birthdate should lesser than currentdate");
        return;
    }
    birthyear = currentyear - birthdetails.year;
    if (currentmonth >= birthdetails.month) {
        birthmonth = currentmonth - birthdetails.month;
        console.log(birthmonth);
    }
    else {
        birthyear--;
        birthmonth = 12 + currentmonth - birthdetails.month;
    }
    if (currentdate >= birthdetails.date) {
        birthdate = currentdate - birthdetails.date;
    }
    else {
        birthmonth--;
        let days = months[currentmonth - 2];
        birthdate = days + currentdate - birthdetails.date;
        if (birthmonth > 0) {
            birthmonth = 11;
            birthyear--;
        }
    }
    displayResult(birthdate, birthmonth, birthyear);
}
function displayResult(date, month, year) {
    document.getElementById('years').textContent = year;
    document.getElementById('months').textContent = month;
    document.getElementById('days').textContent = date;
}

function leapChecker(year) {
    if (year % 4 == 0 || (year % 100 == 0 && year % 400 == 0)) {
        months[1] = 29;
    }
    else {
        months[1] = 28;
    }
}