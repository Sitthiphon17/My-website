document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();  // ป้องกันการโหลดหน้าใหม่

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (email === "test@example.com" && password === "1234") {
        alert("ล็อกอินสำเร็จ!");
        window.location.href = "index.html"; // กลับไปหน้าแรก
    } else {
        alert("อีเมลหรือรหัสผ่านไม่ถูกต้อง!");
    }
});
