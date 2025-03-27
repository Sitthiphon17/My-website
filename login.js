console.log("login.js loaded");

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();  // ป้องกันการโหลดหน้าใหม่
    console.log("Form submitted"); // ตรวจสอบว่าฟังก์ชันทำงาน

    let emailOrPhone = document.getElementById("emailOrPhone").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    // Regular expressions สำหรับตรวจสอบอีเมลและเบอร์โทร
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

    // บันทึกข้อมูลผู้ใช้ (ตรวจสอบว่า localStorage ทำงาน)
    localStorage.setItem("user", emailOrPhone);
    console.log("User saved:", emailOrPhone);

    alert("เข้าสู่ระบบสำเร็จ");
    window.location.href = "profile.html"; // ไปหน้าโปรไฟล์
});
