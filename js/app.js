
let input = document.getElementById("inputTask");

let editIndex = -1; 

function enterBtn() {

    let value = input.value.trim()

    if (value === "") {
        alert("Enter Something!");
        input.value = ""
        return;
    }

    let task = JSON.parse(localStorage.getItem("tasks")) || [];

    if (editIndex === -1) {
        task.push(value);
    } else {
        task[editIndex] = value;
        editIndex = -1;
    }


    localStorage.setItem("tasks", JSON.stringify(task));

    showTasks();
    input.value = "";
}

function showTasks() {

    let list = document.getElementById("listArr");
    let task = JSON.parse(localStorage.getItem("tasks")) || [];

    list.innerHTML = "";

    task.map((item, index) => {

        let li = document.createElement("li");
        li.innerHTML = `
            <span onclick="editTask(${index})">${item}</span>
            <span class="remove-btn" onclick="removeTask(${index})">❌</span>
            `;
        list.appendChild(li)

    });
}

function editTask(item){
    
    let task = JSON.parse(localStorage.getItem("tasks")) || [];
    input.value = task[item];
    editIndex = item;
}

function removeTask(item) {

    let task = JSON.parse(localStorage.getItem("tasks")) || []

    task.splice(item, 1);

    localStorage.setItem("tasks", JSON.stringify(task));

    showTasks();
}

window.onload = function () {
    showTasks()
};

function popBtn() {
    let task = JSON.parse(localStorage.getItem("tasks")) || [];

    task.pop();

    localStorage.setItem("tasks", JSON.stringify(task));

    showTasks();
}

function deleteBtn() {

    localStorage.removeItem("tasks");

    showTasks();

}


