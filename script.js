document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();  // ป้องกันการโหลดหน้าใหม่

    let emailOrPhone = document.getElementById("emailOrPhone").value; // เปลี่ยนเป็น id "emailOrPhone"
    let password = document.getElementById("password").value;

    // Regular expression สำหรับตรวจสอบอีเมล
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    // Regular expression สำหรับตรวจสอบเบอร์โทร
    const phoneRegex = /^[0-9]{10}$/; // เบอร์โทรไทย 10 หลัก

    if (emailOrPhone.match(emailRegex)) {
        // หากกรอกอีเมล
        if (emailOrPhone === "test@example.com" && password === "1234") {
            alert("ล็อกอินสำเร็จ!");
            window.location.href = "index.html"; // กลับไปหน้าแรก
        } else {
            alert("อีเมลหรือรหัสผ่านไม่ถูกต้อง!");
        }
    } else if (emailOrPhone.match(phoneRegex)) {
        // หากกรอกเบอร์โทร
        if (emailOrPhone === "0812345678" && password === "1234") {
            alert("ล็อกอินสำเร็จ!");
            window.location.href = "index.html"; // กลับไปหน้าแรก
        } else {
            alert("เบอร์โทรหรือรหัสผ่านไม่ถูกต้อง!");
        }
    } else {
        alert("กรุณากรอกอีเมลหรือเบอร์โทรที่ถูกต้อง");
    }
});
