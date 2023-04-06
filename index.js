let task = document.getElementById("task");
let addbtn = document.getElementById("addbtn");
let bottom = document.getElementById("bottom");
const create = document.getElementById("create");
let s = document.getElementById("s");
let msg = document.getElementById("msg");
let todolist = [];
addbtn.disabled = true;
let showanotherdiv = document.getElementById("showanotherdiv");

task.addEventListener("keyup", (e) => {
    if (e.target.value.trim() === "") {
        addbtn.disabled = true;
    }
    else {
        addbtn.disabled = false;

    }

});
function renderlist() {
    create.style.display = "block";
    task.value = " ";
    msg.style.display = "none";
    create.innerHTML = " ";
    for (let i = 0; i < todolist.length; i++) {
        const li = document.createElement("li");
        li.style.backgroundColor = "rgb(245, 245, 245)";
        li.style.width = "45rem";
        li.style.paddingTop = "0.7rem";
        li.style.height = "2.5rem";
        li.style.marginTop = "0.5rem";
        li.style.paddingLeft = "1rem";
        li.style.display = "flex";
        li.style.justifyContent = "space-between";
        li.style.alignItems = "center";
        bottom.style.height = `${(todolist.length + 1) *4}rem`;
        li.innerHTML += `${todolist[i]}
        <span style="margin-left:0.9rem">
        <button style="position:sticky;border:none;cursor:pointer;background-color:rgb(245, 245, 245);">
        <i class="fa fa-check" style="font-size:1rem;color:rgb(0, 132, 255)">
        </i></button>
        <button  id="b2" onclick="edititem(${i})" item-id="${i}" style="position:sticky;border:none;cursor:pointer;background-color:rgb(245, 245, 245);color:rgb(15, 179, 69)">
        EDIT</button> 
        <button id="b3"  onclick="deleteitem(${i})" item-id="${i}" style="position:sticky;border:none;cursor:pointer;margin-right:0.9rem;background-color:rgb(245, 245, 245)">
        <i class="fa fa-close" onclick="deleteitem(${i})" style="font-size:1rem;color:red"></i></button></span>`;
        create.append(li);
        task.value = "";
    }
    task.value = "";
    if (todolist.length === 0) {
        msg.style.display = "block";
    }
}
addbtn.onclick = function addbutton() {
    if (task.value != "") {
        todolist.push(task.value);
        renderlist();
    }

};
function deleteitem(item_id) {
    todolist.splice(item_id, 1);
    renderlist();

}
function edititem(item_id) {
    showanotherdiv.style.display = "block";
    showanotherdiv.innerHTML = `<h6>Edit task:</h6>
        <input id="y"/><br><br>
        <button id="s" style="width:12rem;height:2rem;border-radius:0.4rem;cursor:pointer">SUBMIT</button>
        <button id="c" style="cursor:pointer;width:12rem;height:2rem;border-radius:0.4rem;margin-left:1rem ">CANCEL</button>`;
    let y = document.getElementById("y");
    y.value = todolist[item_id];                                                                                            //problem how to add hover effect on submit and cancel.....
    let s = document.getElementById("s");
    s.addEventListener("click", () => {
        let newValue = y.value.trim();
        if (newValue !== "") {
            todolist[item_id] = newValue;
            renderlist();
        }
    });
    let c = document.getElementById("c");
    c.addEventListener("click", vanish);
    function vanish() {
        showanotherdiv.style.display = "none";
    }

}
