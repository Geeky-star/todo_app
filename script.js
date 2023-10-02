const taskList = document.querySelector(".todos")
taskInput = document.querySelector(".task-input")

const addTask = () => {
    text = taskInput.value.trim();
    const item = document.createElement("li")
    item.innerHTML = `
    ${text} <button class="delete-btn">
    <i class="fa fa-trash"></i>
    </button>
    `
    taskList.appendChild(item)


    item.querySelector(".delete-btn").addEventListener("click",()=>{
        taskList.removeChild(item)
    })
    taskInput.innerHTML=""
}

const deleteTask = (id) => {
    elementToBeDeleted = document.getElementById(id.trim());
    taskList.removeChild(elementToBeDeleted)
}