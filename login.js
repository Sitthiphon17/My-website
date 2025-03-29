document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let emailOrPhone = document.getElementById("emailOrPhone").value.trim();
    let password = document.getElementById("password").value.trim();

    let storedEmailOrPhone = localStorage.getItem("userEmailOrPhone");
    let storedPassword = localStorage.getItem("userPassword");

    console.log("ข้อมูลที่กรอก:", emailOrPhone, password);
    console.log("ข้อมูลที่เก็บใน localStorage:", storedEmailOrPhone, storedPassword);

    if (emailOrPhone === storedEmailOrPhone && password === storedPassword) {
        alert("เข้าสู่ระบบสำเร็จ");
        window.location.href = "dashboard.html"; // เปลี่ยนหน้า
    } else {
        alert("อีเมล/เบอร์โทร หรือรหัสผ่านไม่ถูกต้อง");
    }
});
