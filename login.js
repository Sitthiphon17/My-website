document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();  

    let emailOrPhone = document.getElementById("emailOrPhone").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const phoneRegex = /^[0-9]{10}$/;

    if (!emailOrPhone.match(emailRegex) && !emailOrPhone.match(phoneRegex)) {
        alert("กรุณากรอกอีเมลหรือเบอร์โทรที่ถูกต้อง");
        return;
    }

    if (password !== confirmPassword) {
        alert("รหัสผ่านและยืนยันรหัสผ่านไม่ตรงกัน");
        return;
    }

    alert("เข้าสู่ระบบสำเร็จ");

    console.log("Redirecting to profile.html...");
    window.location.href = "profile.html";
});
