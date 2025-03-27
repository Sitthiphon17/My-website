function analyzeSymptoms() {
    let input = document.getElementById("symptomInput").value.toLowerCase();
    let resultDiv = document.getElementById("result");

    // ฐานข้อมูลอาการ - โรค
    let diseases = {
        "ไข้ ไอ เจ็บคอ": {
            disease: "ไข้หวัด",
            advice: "ดื่มน้ำอุ่นมากๆ และพักผ่อนให้เพียงพอ"
        },
        "ไข้สูง ปวดหัว ปวดกล้ามเนื้อ": {
            disease: "ไข้หวัดใหญ่",
            advice: "พักผ่อนมากๆ และพบแพทย์หากอาการไม่ดีขึ้น"
        },
        "ไอ เจ็บหน้าอก หายใจลำบาก": {
            disease: "ปอดบวม",
            advice: "ควรพบแพทย์โดยด่วนหากหายใจลำบาก"
        },
        "ท้องเสีย ปวดท้อง อาเจียน":{
            disease: "อาหารเป็นพิษ",
            advice: "ดื่มนํ้าเกลือแร่และพักผ่อน"
        }
    };

    // ค้นหาโรคที่ตรงกับอาการที่ป้อน
    let found = false;
    for (let symptoms in diseases) {
        if (input.includes(symptoms)) {
            let info = diseases[symptoms];
            resultDiv.innerHTML = `<strong>โรคที่เป็นไปได้:</strong> ${info.disease} <br>
                                   <strong>คำแนะนำ:</strong> ${info.advice}`;
            found = true;
            break;
        }
    }

    if (!found) {
        resultDiv.innerHTML = "ไม่พบข้อมูลโรคที่ตรงกับอาการ กรุณาพบแพทย์เพื่อวินิจฉัยเพิ่มเติม";
    }
}
