// let task = new Object();

// Function for Add task.
// function addTask(){
//     let key = document.getElementById('name').value;
//     let value = document.getElementById('desc').value;

//     if (key === "" && value === "") alert("Please Enter the Task Name and Description");
//     if (key === "" && value !== "") alert("Please Enter the Task Name");
//     if (key !== "" && value === "") alert("Please Enter the Task Description");
    
    // task[key] = value;
    // document.getElementById("output-div").style.display='block';
    // document.getElementById("task-heading").innerHTML=key;
    // document.getElementById("task-d").innerHTML=value;
    // console.log(task);
    // document.getElementById('name').value = "";
    // document.getElementById('desc').value = "";
    // document.getElementById('name').focus();
// }

// Function for Delete Task
// function deleteTask() {
//     let key = document.getElementById('task-heading').innerHTML;
//     delete task[key];
//     document.getElementById('task-heading').style.color='white';
//     document.getElementById('task-d').style.color='white';
//     document.getElementById('task-heading').style.textDecoration='line-through';
//     document.getElementById('task-d').style.textDecoration='line-through';
//     document.getElementById('edit-btn').style.display='none';
//     console.log(task);
//     document.getElementById('name').focus();
//     document.getElementById('name').value = "";
//     document.getElementById('desc').value = "";
// }

// // Function for Edit Task
// function editTask(){
//     document.getElementById('name').value = document.getElementById('task-heading').innerHTML;
//     document.getElementById('desc').value = document.getElementById('task-d').innerHTML;
// }

// function addTask2(){
//     let x = document.getElementById("output-div");
//     x += x.style.display='block';
// }
// -------------------------------------------------------------------------------------------------------------------------

let container = document.getElementById("container");
let y = 0;
function addTask() {

    y = y + 1;
    let x = y+"";


    let key = document.getElementById('name');
    let data = document.getElementById('desc');

    if (key.value === "" && data.value === "") {
        alert("Please Enter the Task Name and Description");
    }
    else if (key.value === "" && data.value !== "") {
        alert("Please Enter the Task Name");
    }
    else if (key.value !== "" && data.value === "") {
        alert("Please Enter the Task Description");
    } else {

        let div1 = document.createElement('div');
        let div2 = document.createElement('div');
        let div3 = document.createElement('div');
        let h1 = document.createElement('h1');
        let p = document.createElement("p");
        let btn1 = document.createElement("button");
        let btn2 = document.createElement("button");

        btn1.append("Update");
        btn2.append("Delete");
        
        div1.setAttribute("class","output-div");
        div1.setAttribute("id","output-div");
        div2.setAttribute("class","left");
        div2.setAttribute("onclidk","selectTask()");
        div3.setAttribute("class","right");
        h1.setAttribute("id",`task-h${x}`);
        p.setAttribute("id", `task-d${x}`);
        btn1.setAttribute("class","edit-btn");
        btn2.setAttribute("class","delete-btn");
        btn1.setAttribute("id",`edit-btn`);
        btn2.setAttribute("id","delete-btn");

        container.append(div1);
        div1.append(div2,div3)
        div2.append(h1,p);
        div3.append(btn1,btn2);

        document.getElementById(`task-h${x}`).innerHTML = key.value;
        document.getElementById(`task-d${x}`).innerHTML = data.value;

        key.value = "";
        data.value = "";
        key.focus();
    }   
}
console.log(container);

function selectTask(){
    const taskH = h1.getAttribute("id");
    const taskD = p.getAttribute("id");

    const key = document.getElementById("name");
    const data = document.getElementById("desc");

    key.value = document.getElementById(taskH).innerText;
    data.value = document.getElementById(taskD).innerText;
    document.getElementById("edit-btn").focus();
}

function deleteTask() {

}













// let x = 1;
// let m = 0;
// function a() {
//     x = x+1;
//     let y = x+"";
//     m = y;
//     console.log(y);
// }
// let c = a()

// function b(){
//     x=x+1;
//     let z = x+"";
//     console.log("second",z);
// }
// b()

// // a();
// console.log("m",m);
// let x = null;
// function a(){
//     let y =1;
//     console.log(x);
//     x=a=()=>{
//         console.log(y+1);
//     }
// }
// x()