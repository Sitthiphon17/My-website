document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let emailOrPhone = document.getElementById("emailOrPhone").value.trim();
    let password = document.getElementById("password").value.trim();
    let confirmPassword = document.getElementById("confirmPassword").value.trim();

    if (password !== confirmPassword) {
        alert("รหัสผ่านไม่ตรงกัน");
        return;
    }

    // บันทึกข้อมูลลง localStorage
    localStorage.setItem("userEmailOrPhone", emailOrPhone);
    localStorage.setItem("userPassword", password);

    alert("สมัครสมาชิกสำเร็จ! กรุณาเข้าสู่ระบบ");
    window.location.href = "login.html"; // ไปหน้าล็อกอิน
});
