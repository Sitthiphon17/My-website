console.log("Signup.js loaded!");

document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault();  // ป้องกันการโหลดหน้าใหม่

    let emailOrPhone = document.getElementById("emailOrPhone").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    // Regular expressions สำหรับตรวจสอบอีเมลและเบอร์โทร
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const phoneRegex = /^[0-9]{10}$/;

    // ตรวจสอบว่าเป็นอีเมลหรือเบอร์โทร
    if (!emailOrPhone.match(emailRegex) && !emailOrPhone.match(phoneRegex)) {
        alert("กรุณากรอกอีเมลหรือเบอร์โทรที่ถูกต้อง");
        return;
    }

    // ตรวจสอบรหัสผ่าน
    if (password !== confirmPassword) {
        alert("รหัสผ่านและยืนยันรหัสผ่านไม่ตรงกัน");
        return;
    }

    // ถ้าผ่านการตรวจสอบทั้งหมด
    alert("สร้างบัญชีสำเร็จ");
    window.location.href = "profile.html";  // เปลี่ยนไปยังหน้าที่ต้องการ
});
