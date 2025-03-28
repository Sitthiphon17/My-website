document.getElementById("profileForm").addEventListener("submit", function(event) {
    event.preventDefault();  

    let fullName = document.getElementById("fullName").value.trim();
    let age = document.getElementById("age").value.trim();
    let gender = document.getElementById("gender").value.trim();

    if (!fullName || !age || !gender) {
        alert("กรุณากรอกข้อมูลให้ครบถ้วน");
        return;
    }

    // เก็บข้อมูลลง localStorage
    localStorage.setItem("fullName", fullName);
    localStorage.setItem("age", age);
    localStorage.setItem("gender", gender);

    alert("บันทึกข้อมูลสำเร็จ!");
    window.location.href = "health.html"; // ไปหน้าบันทึกอาการ
});
