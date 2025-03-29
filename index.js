document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();  // ป้องกันไม่ให้ฟอร์มส่งข้อมูลตามปกติ

    let emailOrPhone = document.getElementById("emailOrPhone").value.trim();
    let password = document.getElementById("password").value.trim();

    let storedEmailOrPhone = localStorage.getItem("userEmailOrPhone");
    let storedPassword = localStorage.getItem("userPassword");

    if (emailOrPhone === storedEmailOrPhone && password === storedPassword) {
        // ไม่แสดง alert แค่เปลี่ยนหน้าไปยัง dashboard.html ทันที
        window.location.href = "dashboard.html";  // เปลี่ยนไปหน้าหลัก
    } else {
        alert("อีเมล/เบอร์โทร หรือรหัสผ่านไม่ถูกต้อง");
    }
});
