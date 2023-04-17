let people = [];
let salaries = [];
let select = document.getElementById("namesArray");

people.push("Bob");
people.push("Dave");
people.push("Amy");
people.push("Steve");
salaries.push(0);
salaries.push(0);
salaries.push(0);
salaries.push(0);
let salaryName;
let salaryInput;

function fillNames() {
    namesArray.style.display="";
    addSalaryBox.style.display="";
    confirmAddSalary.style.display="inline";
    salaryNum = document.getElementById("addSalaryBox").value;
    let btnAddSalary = document.getElementById("addSalary");

    for(let i=0; i<people.length; i++) {
        let option = people[i];
        let el = document.createElement("option");
        el.textContent = option;
        el.value = option;
        select.add(el);
    }
    console.log(salaries);
    document.getElementById("addSalary").disabled = true;
}

function addSalary() {
    salaryName  = namesArray.options[namesArray.selectedIndex].innerHTML;
    
    console.log(salaryName);
        for(let i=0; i<people.length; i++) {
            salaryNum = document.getElementById("addSalaryBox").value;
            if(salaryName === people[i]) {
                salaries.splice(i,1, parseInt(salaryNum) );
            }
        }
    console.log(people);
    console.log(salaries);
}

function displayResults() {
    let totalSalary = 0;
    let highestSalary = 0;
    for(let i=0; i<salaries.length; i++) {
        totalSalary += Number(salaries[i]);
    }
    // calculates highest salary 
    highestSalary = Math.max(...salaries);

    console.log(totalSalary);
    console.log(highestSalary);
    document.getElementById("resultsTotal").innerHTML = totalSalary;
    document.getElementById("highestSalary").innerHTML = highestSalary;
    totalSalaryHead.style.display="inline";
    highestSalaryhead.style.display="inline";
}

function displaySalary() {
    let table = document.getElementById("results_table");
    let row  = table.insertRow(), cell, perrow=1;

    people.forEach((value, i) => {
        //add name cell
        cell = row.insertCell();
        cell.innerHTML = people[i];

        // add salary cell
        cell = row.insertCell();
        cell.innerHTML = salaries[i];

        let next = i+1;
        if (next%perrow==0 && next!=people.length) { row = table.insertRow(); }
    });

    results_table.style.display="block";
    refreshTablebtn.style.display="";
}

$(document).ready(function() {
    function RefreshTable() {
        $("#results_table").load("arrays.html #results_table");
    }
    $("#refreshTablebtn").on("click", RefreshTable);
});