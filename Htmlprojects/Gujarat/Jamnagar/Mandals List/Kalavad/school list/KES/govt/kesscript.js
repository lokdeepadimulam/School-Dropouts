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

    loadstoredData5();

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
        let data = JSON.parse(localStorage.getItem("storedData5")) || [];
        data.push({ serialNumber, email , caste, male, female, grade});
        localStorage.setItem("storedData5", JSON.stringify(data));
    }

    function loadstoredData5() {
        let data = JSON.parse(localStorage.getItem("storedData5")) || [];

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

    const headingColumn = 'Caste';

    const frequencyMap = new Map();
    
    for (let i = 0; i < table.length; i++) {
      const row = table[i];
      const value = row[headingColumn];
    
      if (frequencyMap.has(value)) {
        frequencyMap.set(value, frequencyMap.get(value) + 1);
      } else {
        frequencyMap.set(value, 1);
      }
    }
    let mostRepeatedValue;
    let maxFrequency = 0;
    
    for (const [value, frequency] of frequencyMap) {
      if (frequency > maxFrequency) {
        mostRepeatedValue = value;
        maxFrequency = frequency;
      }
    }
    
    if (maxFrequency > 1) {
      alert(`The most repeated value in the '${headingColumn}' column is '${mostRepeatedValue}'.`);
    } else {
      console.log(`No value is repeated in the '${headingColumn}' column.`);
    }

});

// script.js
document.addEventListener('DOMContentLoaded', function () {
    const entriesSelect = document.getElementById('entries');
    const table = document.getElementById('data-table');

    // Add an event listener to the select element
    entriesSelect.addEventListener('change', function () {
        const selectedEntries = parseInt(entriesSelect.value);
        showSelectedEntries(selectedEntries);
    });

    // Function to show a specific number of table rows
    function showSelectedEntries(numEntries) {
        const allRows = table.querySelectorAll('tbody tr');
        allRows.forEach(function (row, index) {
            if (index < numEntries) {
                row.style.display = 'table-row';
            } else {
                row.style.display = 'none';
            }
        });
    }

    // Initially, show the default number of entries
    showSelectedEntries(parseInt(entriesSelect.value));
});

// Get references to the input field and table
const searchInput = document.getElementById("searchInput");
const dataTable = document.getElementById("data-table");
const tableRows = dataTable.getElementsByTagName("tr");

// Add an event listener to the search input
searchInput.addEventListener("keyup", function () {
    const searchValue = searchInput.value.toLowerCase();

    // Loop through the table rows and hide/show them based on the search input
    for (let i = 1; i < tableRows.length; i++) { // Start from 1 to skip the header row
        const rowData = tableRows[i].getElementsByTagName("td");
        let rowText = "";

        // Concatenate the text content of each cell in the row
        for (let j = 0; j < rowData.length; j++) {
            rowText += rowData[j].textContent.toLowerCase() + " ";
        }

        // Check if the row's text content contains the search value
        if (rowText.includes(searchValue)) {
            tableRows[i].style.display = "";
        } else {
            tableRows[i].style.display = "none";
        }
    }
});
