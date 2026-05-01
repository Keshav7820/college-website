function nextStep() {
    let dept = document.getElementById("department").value;
    let year = document.getElementById("year").value;

    if (dept === "Select Department" || year === "Select Year") {
        alert("Please select both fields");
    } else {
        document.getElementById("studentBox").classList.remove("hidden");
    }
}

function calculate() {
    let name = document.getElementById("name").value;
    let attendance = document.getElementById("attendance").value;
    let marks = document.getElementById("marks").value;

    let grade = marks >= 90 ? "A+" :
                marks >= 75 ? "A" :
                marks >= 60 ? "B" :
                marks >= 50 ? "C" : "Fail";

    let status = attendance < 75 ? "Detained ❌" : "Eligible ✅";

    document.getElementById("result").innerHTML =
        name + "<br>" + grade + "<br>" + status;
}