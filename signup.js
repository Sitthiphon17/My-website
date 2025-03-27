document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault(); // ป้องกันการรีเฟรชหน้า
    console.log("Form Submitted!"); // ตรวจสอบว่าฟอร์มถูกเรียกใช้

    let emailOrPhone = document.getElementById("emailOrPhone").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    console.log("Email/Phone:", emailOrPhone);
    console.log("Password:", password);
    console.log("Confirm Password:", confirmPassword);

    if (password !== confirmPassword) {
        alert("รหัสผ่านไม่ตรงกัน!");
        return;
    }

    alert("สร้างบัญชีสำเร็จ!");
    console.log("Redirecting to profile.html...");
    
    window.location.href = "profile.html"; // ส่งไปยังหน้าโปรไฟล์
});
