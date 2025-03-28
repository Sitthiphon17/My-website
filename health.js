document.getElementById("symptomForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let symptoms = document.getElementById("symptoms").value.trim().toLowerCase(); // แปลงเป็นตัวพิมพ์เล็ก

    if (!symptoms) {
        alert("กรุณากรอกอาการ");
        return;
    }

    let advice = "กรุณาปรึกษาแพทย์หากอาการรุนแรง";
    let medication = "ไม่พบข้อมูลยา";

    // ไข้หวัด / ไข้หวัดใหญ่
    if (symptoms.includes("ไข้หวัด") || symptoms.includes("ไข้หวัดใหญ่")) {
        advice = "วิธีดูแลรักษา: พักผ่อน ดื่มน้ำอุ่น หลีกเลี่ยงอากาศเย็น";
        medication = "ยา: พาราเซตามอล (500 mg) ทานทุก 4-6 ชม. เมื่อมีไข้, ยาลดน้ำมูก (คลอเฟนิรามีน 4 mg) ทานทุก 6-8 ชม., ยาแก้ไอ (เดกซ์โทรเมทอร์แฟน 15 mg) ทานทุก 6 ชม.";
    }
    // ไข้เลือดออก
    else if (symptoms.includes("ไข้เลือดออก")) {
        advice = "วิธีดูแลรักษา: เช็ดตัว ดื่มน้ำเยอะ ห้ามใช้แอสไพริน";
        medication = "ยา: พาราเซตามอล (500 mg) ทานทุก 4-6 ชม., ORS (เกลือแร่) ดื่มบ่อยๆ เพื่อป้องกันขาดน้ำ";
    }
    // โรคมือ เท้า ปาก
    else if (symptoms.includes("โรคมือ เท้า ปาก")) {
        advice = "วิธีดูแลรักษา: กินอาหารอ่อน ดื่มน้ำเยอะ";
        medication = "ยา: พาราเซตามอล (500 mg) ทานทุก 4-6 ชม., ยาแก้เจ็บคอ (สเปรย์เบนซิดามีน) ใช้ทุก 4-6 ชม.";
    }
    // โรคอุจจาระร่วง
    else if (symptoms.includes("อุจจาระร่วง")) {
        advice = "วิธีดูแลรักษา: ดื่มน้ำเกลือแร่ หลีกเลี่ยงอาหารมัน";
        medication = "ยา: ORS (เกลือแร่) ผสมในน้ำสะอาดแล้วดื่มหลังถ่ายเหลว, Loperamide (2 mg) ช่วยลดการถ่าย ทานเมื่อจำเป็น (ไม่เกิน 8 mg/วัน)";
    }
    // โรคเบาหวาน
    else if (symptoms.includes("เบาหวาน")) {
        advice = "วิธีดูแลรักษา: ควบคุมอาหาร ออกกำลังกาย";
        medication = "ยา: Metformin (500 mg) ทานวันละ 1-2 ครั้งหลังอาหาร";
    }
    // โรคความดันโลหิตสูง
    else if (symptoms.includes("ความดันโลหิตสูง")) {
        advice = "วิธีดูแลรักษา: ลดเค็ม ออกกำลังกาย";
        medication = "ยา: Amlodipine (5 mg) ทานวันละครั้งหลังอาหารเช้า";
    }
    // โรคหัวใจและหลอดเลือด
    else if (symptoms.includes("หัวใจและหลอดเลือด")) {
        advice = "วิธีดูแลรักษา: ควบคุมอาหาร หลีกเลี่ยงบุหรี่";
        medication = "ยา: Aspirin (81 mg) ทานวันละครั้งหลังอาหาร";
    }
    // โรคภูมิแพ้
    else if (symptoms.includes("ภูมิแพ้")) {
        advice = "วิธีดูแลรักษา: หลีกเลี่ยงสารก่อภูมิแพ้";
        medication = "ยา: Cetirizine (10 mg) ทานวันละครั้งก่อนนอน";
    }
    // โรคหืด (Asthma)
    else if (symptoms.includes("หืด") || symptoms.includes("asthma")) {
        advice = "วิธีดูแลรักษา: หลีกเลี่ยงฝุ่น พกยาพ่น";
        medication = "ยา: Salbutamol Inhaler (100 mcg) พ่นเมื่อมีอาการ (สูงสุด 4 ครั้ง/วัน)";
    }
    // โรคกรดไหลย้อน
    else if (symptoms.includes("กรดไหลย้อน")) {
        advice = "วิธีดูแลรักษา: หลีกเลี่ยงอาหารเผ็ด มัน เปรี้ยว";
        medication = "ยา: Omeprazole (20 mg) ทานวันละครั้งก่อนอาหารเช้า";
    }
    // โรคนอนไม่หลับ
    else if (symptoms.includes("นอนไม่หลับ")) {
        advice = "วิธีดูแลรักษา: งดมือถือก่อนนอน ทำห้องให้มืด";
        medication = "ยา: Melatonin (3 mg) ทาน 30 นาที ก่อนนอน";
    }
    // โรคเครียดและซึมเศร้า
    else if (symptoms.includes("เครียด") || symptoms.includes("ซึมเศร้า")) {
        advice = "วิธีดูแลรักษา: ออกกำลังกาย พูดคุยกับคนใกล้ชิด";
        medication = "ยา: Sertraline (50 mg) ทานวันละครั้งตอนเช้า (ต้องใช้ตามแพทย์สั่ง)";
    }
    // โรคข้อเข่าเสื่อม
    else if (symptoms.includes("ข้อเข่าเสื่อม")) {
        advice = "วิธีดูแลรักษา: หลีกเลี่ยงการนั่งพับเพียบ";
        medication = "ยา: Glucosamine (1500 mg) ทานวันละครั้ง";
    }
    // โรคกลาก เกลื้อน
    else if (symptoms.includes("กลาก") || symptoms.includes("เกลื้อน")) {
        advice = "วิธีดูแลรักษา: รักษาความสะอาด";
        medication = "ยา: Ketoconazole cream ทาวันละ 2 ครั้ง";
    }
    else {
        advice = "ขออภัย ไม่พบข้อมูลอาการของคุณ กรุณาลองใช้คำอื่น หรือปรึกษาแพทย์";
        medication = "ไม่พบข้อมูลยา";
    }

    document.getElementById("advice").textContent = advice;
    document.getElementById("medication").textContent = medication;

    // ส่งข้อมูลไปยังตู้จ่ายยา (ระบบ API)
    fetch('/api/vending_machine', {  // เปลี่ยน URL ไปที่ API ของตู้จ่ายยา
        method: 'POST',  // ใช้ POST เพื่อส่งข้อมูล
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            symptoms: symptoms,
            advice: advice,
            medication: medication
        })  // ส่งข้อมูลอาการ, คำแนะนำ, และยา
    })
    .then(response => response.json())  // รับข้อมูลตอบกลับจากเซิร์ฟเวอร์
    .then(data => {
        console.log('ตู้จ่ายยาได้รับข้อมูล:', data);
        // แสดงผลการทำงานของตู้
        alert("ข้อมูลถูกส่งไปยังตู้จ่ายยาเรียบร้อยแล้ว");
    })
    .catch(error => {
        console.error('เกิดข้อผิดพลาด:', error);
        alert("ไม่สามารถเชื่อมต่อกับตู้จ่ายยาได้");
    });
});
