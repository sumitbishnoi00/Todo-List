
let input = document.getElementById("inputTask");
let task = [];


function enterBtn() {
    let value = input.value.trim();
        if(input.value === ""){
            alert("Please enter something!");
            return;
        }
        
        task.push(value);
        showTask();

        input.value = "";

}

    function showTask(){
        let list = document.getElementById("listArr");
        list.innerHTML = "";
        
     task.map ((task, index) => {  
        let li = document.createElement("li");
        li.innerText = task;

    list.appendChild(li);

    });
}