document.addEventListener("DOMContentLoaded", function () {
    let storedEmailOrPhone = localStorage.getItem("userEmailOrPhone");
    let storedPassword = localStorage.getItem("userPassword");

    alert("storedEmailOrPhone: " + storedEmailOrPhone);  // ตรวจสอบค่าที่เก็บไว้
    alert("storedPassword: " + storedPassword);          // ตรวจสอบค่าที่เก็บไว้

    if (storedEmailOrPhone && storedPassword) {
        alert("🔄 ผู้ใช้ล็อกอินอยู่ กำลังเปลี่ยนหน้าไป dashboard.html");
        window.location.href = "dashboard.html";
    } else {
        alert("❌ ยังไม่ได้ล็อกอิน แสดง index.html ตามปกติ");
    }
});
