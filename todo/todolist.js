update();
document.querySelector('#fill').addEventListener('click', insert);

function update(){
    if (localStorage.getItem('todoitem')==null){
        todoarray = []; 
        localStorage.setItem('todoitem', JSON.stringify(todoarray))
    } 
    else{
        todoarraystr = localStorage.getItem('todoitem')
        todoarray = JSON.parse(todoarraystr); 
    }
    let str="";
    let tr = document.getElementById('table');
    todoarray.forEach((element, index)=>{
        str += ` <tr>
        <th scope="row">${index + 1}</th>
        <td>${element[0]}</td>
        <td>${element[1]}</td>
        <td><button class="btn btn-primary" onclick="deleteTask(${index})">DELETE</button></td>
      </tr>`
      
    });
    tr.innerHTML = str;
}


function insert() {
    
    title = document.getElementById('title').value;
    desc = document.getElementById('description').value;
    if((title.value === null) && (desc.value === null) ){
        return alert("Fields CAN'T BE EMPTY");
    }
    
    if(title.value === null){
        return alert("TITLE CAN'T BE EMPTY");
    }
    if(desc.value === null){
        return alert("DESCRIPTION CAN'T BE EMPTY");
    }
    if (localStorage.getItem('todoitem') == null) {
        todoarray = [];
        todoarray.push([title, desc]);
        localStorage.setItem("todoitem", JSON.stringify(todoarray));
    } else {
        todoarraystr = localStorage.getItem('todoitem');
        todoarray = JSON.parse(todoarraystr);
        todoarray.push([title, desc]);
        localStorage.setItem("todoitem", JSON.stringify(todoarray));
    }
    console.log(localStorage.getItem('todoitem'));
    update();

}

function deleteTask(index){
    todoarraystr = localStorage.getItem('todoitem');
    todoarray = JSON.parse(todoarraystr);
    todoarray.splice(index,1);
    localStorage.setItem("todoitem", JSON.stringify(todoarray));
    update();

}
document.querySelector('#reset').addEventListener('click',resetTask);
function resetTask(){
    if(confirm("Are Your Sure?")){
    localStorage.clear();
    update();}
}