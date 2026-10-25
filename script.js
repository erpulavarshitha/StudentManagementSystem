function addStudent() {
    let name = document.getElementById("name").value;
    let roll = document.getElementById("roll").value;

    if (name === "" || roll === "") {
        alert("Please enter all details");
        return;
    }

    let row = document.createElement("tr");
    row.innerHTML = "<td>" + name + "</td><td>" + roll + "</td>";

    document.getElementById("studentList").appendChild(row);

    document.getElementById("name").value = "";
    document.getElementById("roll").value = "";
}