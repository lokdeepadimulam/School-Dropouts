document.addEventListener("DOMContentLoaded", function () {
    const emailInput = document.getElementById("email");
    const casteInput = document.getElementById("caste");
    const maleInput = document.getElementById("male");
    const femaleInput = document.getElementById("female");
    const gradeInput = document.getElementById("grade");
    const addDataButton = document.getElementById("add-data");
    const dataTable = document.getElementById("data-table").getElementsByTagName('tbody')[0];
    // Load data from localStorage on page load
    let serialNumber = 1;

    loadStoredData6();

    addDataButton.addEventListener("click", function () {
        const email = emailInput.value.trim();
        const caste = casteInput.value.trim();
        const male = maleInput.value.trim();
        const female = femaleInput.value.trim();
        const grade = gradeInput.value.trim();

        if ( email === "" || caste === "" || male === "" || female === "" || grade === "") {
            alert("Please fill in all fields.");
            return;
        }

        // Create a new row for the table
        const newRow = dataTable.insertRow();
        const cell1 = newRow.insertCell(0);
        const cell2 = newRow.insertCell(1);
        const cell3 = newRow.insertCell(2);
        const cell4 = newRow.insertCell(3);
        const cell5 = newRow.insertCell(4);
        const cell6 = newRow.insertCell(5);

        // Add data to the table
        cell1.innerHTML = serialNumber++;
        cell2.innerHTML = email;
        cell3.innerHTML = caste;
        cell4.innerHTML = male;
        cell5.innerHTML = female;
        cell6.innerHTML = grade;

        // Save data to localStorage
        saveData(serialNumber, email, caste, male, female, grade);

        // Clear input fields
        emailInput.value = "";
        casteInput.value = "";
        maleInput.value = "";
        femaleInput.value = "";
        gradeInput.value = "";
    });

    function saveData(serialNumber, email, caste, male, female, grade) {
        let data = JSON.parse(localStorage.getItem("StoredData6")) || [];
        data.push({ serialNumber, email , caste, male, female, grade});
        localStorage.setItem("StoredData6", JSON.stringify(data));
    }

    function loadStoredData6() {
        let data = JSON.parse(localStorage.getItem("StoredData6")) || [];

        for (const entry of data) {
            const newRow = dataTable.insertRow();
            const cell1 = newRow.insertCell(0);
            const cell2 = newRow.insertCell(1);
            const cell3 = newRow.insertCell(2);
            const cell4 = newRow.insertCell(3);
            const cell5 = newRow.insertCell(4);
            const cell6 = newRow.insertCell(5);
            cell1.innerHTML = serialNumber++;
            cell2.innerHTML = entry.email;
            cell3.innerHTML = entry.caste;
            cell4.innerHTML = entry.male;
            cell5.innerHTML = entry.female;
            cell6.innerHTML = entry.grade;
        }
    }

        const toggleBlur = () => {
    const blurEl = document.getElementById("blur");
    blurEl.classList.toggle("active");

    const popupEl = document.getElementById("popup");
    popupEl.classList.toggle("active");
    };

});
