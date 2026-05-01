function goToDashboard() {
    const name = document.getElementById('studentName').value;
    const roll = document.getElementById('rollNo').value;
    const dept = document.getElementById('deptSelect').value;

    if(name && roll && dept !== "-- Select Department --") {
        // Data save kar rahe hain taaki next page par dikh sake
        localStorage.setItem('stuName', name);
        localStorage.setItem('stuRoll', roll);
        localStorage.setItem('stuDept', dept);

        window.location.href = 'student.html'; // Naye page par bhejna
    } else {
        alert("Please fill all details!");
    }
}