document.addEventListener("DOMContentLoaded", function () {
    let isLoggedIn = localStorage.getItem("userEmailOrPhone") && localStorage.getItem("userPassword");

    if (isLoggedIn) {
        console.log("🔄 ผู้ใช้ล็อกอินอยู่ กำลังเปลี่ยนหน้าไป dashboard.html");
        window.location.href = "dashboard.html";
    }
});
