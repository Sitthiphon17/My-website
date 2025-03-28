document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();  

    let emailOrPhone = document.getElementById("emailOrPhone").value.trim();
    let password = document.getElementById("password").value.trim();

    let storedEmailOrPhone = localStorage.getItem("userEmailOrPhone");
    let storedPassword = localStorage.getItem("userPassword");

    if (emailOrPhone === storedEmailOrPhone && password === storedPassword) {
        alert("เข้าสู่ระบบสำเร็จ");
            console.log("กำลังเปลี่ยนหน้า...");
            window.location.href = "dashboard.html"; 

    } else {
        alert("อีเมล/เบอร์โทร หรือรหัสผ่านไม่ถูกต้อง");
    }
});
