document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();  

    let emailOrPhone = document.getElementById("emailOrPhone").value.trim();
    let password = document.getElementById("password").value.trim();

    // ตรวจสอบการกรอกข้อมูล
    if (!emailOrPhone || !password) {
        alert("กรุณากรอกข้อมูลให้ครบทุกช่อง");
        return;
    }

    let storedEmailOrPhone = localStorage.getItem("userEmailOrPhone");
    let storedPassword = localStorage.getItem("userPassword");

    if (emailOrPhone === storedEmailOrPhone && password === storedPassword) {
        alert("เข้าสู่ระบบสำเร็จ");
        window.location.href = "dashboard.html";  // เปลี่ยนไปหน้าหลัก
    } else {
        alert("อีเมล/เบอร์โทร หรือรหัสผ่านไม่ถูกต้อง");
    }
});
