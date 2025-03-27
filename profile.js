if (password === confirmPassword) {
    alert("เข้าสู่ระบบสำเร็จ");
    localStorage.setItem("user", emailOrPhone); // บันทึกข้อมูลผู้ใช้
    window.location.href = "profile.html";
}
