<script src="script.js"></script>

document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault(); // ป้องกันการรีเฟรชหน้า
    console.log("Form Submitted!"); // ตรวจสอบว่าฟอร์มถูกส่งหรือไม่

    let emailOrPhone = document.getElementById("emailOrPhone").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {
        alert("รหัสผ่านไม่ตรงกัน!");
        return;
    }

    alert("สร้างบัญชีสำเร็จ!"); // ให้แจ้งเตือนเมื่อสำเร็จ
    window.location.href = "profile.html"; // ส่งไปยังหน้าโปรไฟล์
});


