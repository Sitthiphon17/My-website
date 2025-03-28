document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault();  

    let emailOrPhone = document.getElementById("emailOrPhone").value.trim();
    let password = document.getElementById("password").value.trim();
    let confirmPassword = document.getElementById("confirmPassword").value.trim();

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const phoneRegex = /^[0-9]{10}$/;

    if (!emailOrPhone.match(emailRegex) && !emailOrPhone.match(phoneRegex)) {
        alert("กรุณากรอกอีเมลหรือเบอร์โทรที่ถูกต้อง");
        return;
    }

    if (password.length < 6) {
        alert("รหัสผ่านต้องมีอย่างน้อย 6 ตัวอักษร");
        return;
    }

    if (password !== confirmPassword) {
        alert("รหัสผ่านและยืนยันรหัสผ่านไม่ตรงกัน");
        return;
    }

    // บันทึกข้อมูลผู้ใช้ (จำลอง)
    localStorage.setItem("userEmailOrPhone", emailOrPhone);
    localStorage.setItem("userPassword", password);

    alert("สมัครสมาชิกสำเร็จ! กรุณาเข้าสู่ระบบ");
    window.location.href = "login.html"; // ไปหน้าเข้าสู่ระบบ
});
