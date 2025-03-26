document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault();  // ป้องกันการโหลดหน้าใหม่

    let emailOrPhone = document.getElementById("emailOrPhone").value; // รับค่าจากช่องกรอก
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    // Regular expression สำหรับตรวจสอบอีเมล
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    // Regular expression สำหรับตรวจสอบเบอร์โทร (เบอร์ไทย 10 หลัก)
    const phoneRegex = /^[0-9]{10}$/;

    // ตรวจสอบว่าผู้ใช้กรอกอีเมลหรือเบอร์โทร
    if (emailOrPhone.match(emailRegex)) {
        console.log("กรอกอีเมล");
    } else if (emailOrPhone.match(phoneRegex)) {
        console.log("กรอกเบอร์โทร");
    } else {
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
});
