function calculateAge() {

    let dob = document.getElementById("dob").value;

    if (dob === "") {
        alert("Please select your date of birth");
        return;
    }

    let birthDate = new Date(dob);
    let today = new Date();

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (days < 0) {
        months--;

        let lastMonth = new Date(
            today.getFullYear(),
            today.getMonth(),
            0
        );

        days += lastMonth.getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    document.getElementById("years").innerHTML =
        "Years: " + years;

    document.getElementById("months").innerHTML =
        "Months: " + months;

    document.getElementById("days").innerHTML =
        "Days: " + days;
}