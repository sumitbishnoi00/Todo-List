
let input = document.getElementById("inputTask");


function enterBtn() {

        if(input.value === ""){
            alert("Please enter something!");
            return;
        }
 
        input.value.trim()

        let li = document.createElement("li");
    li.innerText = input.value;
    document.getElementById("listArr").appendChild(li);

    input.value = "";
}