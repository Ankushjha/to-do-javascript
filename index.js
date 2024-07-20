let write = document.getElementById("write");
let todoList = document.getElementById("todo-list");

write.addEventListener("keyup", function(event){  //this event variable will take argument as object
    if(event.key == "Enter") {
        addTodo(this.value);
        this.value=''
    }
})

function addTodo(val){
    let list = document.createElement("li");
    list.innerHTML = `${val}`;
    todoList.appendChild(list)

    list.addEventListener("click", function(){
        this.classList.toggle("done")
    })
}