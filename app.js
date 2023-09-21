// const todolistForm = document.querySelector('#todolist-form');
// const todolistInput = document.querySelector('#todolist_input');
// const todoListTaskContainer = document.querySelector('#todolist-taskcontainer')
// const clearBtn = document.querySelector('#clear-input');
// const deleteAllBtn = document.querySelector('#todolist_deleteall');

// todolistForm.addEventListener('submit', createTask)

// const TASKLIST = []

// todolistInput.addEventListener('keydown', (e) => {
//     if(e.key == "Enter"){
//         createTask(e)
//     }
// })

// function createTask(e){
//     e.preventDefault()
//     if(todolistInput.value.trim().length > 0){
//         const taskData = {
//             taskName: todolistInput.value,
//             taskDate: new Date().getDate(),
//             taskHour: new Date().getHours(),
//             taskMinute: new Date().getMinutes(),
//             taskCompleted: false,
//         }
//         TASKLIST.unshift(taskData)
//         clearInput(todolistInput)
//         renderTasks()
//     }
//     console.log(TASKLIST);
// }

// function renderTasks (){
//     // 1-way
//     // todoListTaskContainer.innerHTML = ""
//     // 2-way
//     while(todoListTaskContainer.firstChild){
//         todoListTaskContainer.removeChild(todoListTaskContainer.firstElementChild)
//     }
//     TASKLIST.map(todo => {
//         const div = document.createElement('div')
//         div.innerHTML = `
//             <strong>${todo.taskName}</strong>
//         `

//         todoListTaskContainer.appendChild(div)
//     })
// }


// clearBtn.addEventListener('click', () => {
//     clearInput(todolistInput)
// })

// function clearInput (inp){
//     inp.value = ""
// }



// const taskList = [
//     {
//         taskName: "Go to school",
//         taskMinute: "26/07/2023",
//         taskCompleted: false
//     }
// ]



// const todoForm = document.querySelector('#todolist-form');
// const todoListInput = document.querySelector('#todolist_input')
// const todoListTaskContainer = document.querySelector('#todolist-taskcontainer');
// const clearBtn = document.querySelector('#clear-input');

// todoForm.addEventListener('submit', createTask)

// let TASKLIST = [];

// function createTask (e){
//     e.preventDefault()
//     if(todoListInput.value.trim() !== ""){
//         const date = new Date()
//         const taskData = {
//             taskName: todoListInput.value,
//             taskDate: addZeroToTime(date.getDate()),
//             taskHour: addZeroToTime(date.getHours()),
//             taskMinute: addZeroToTime(date.getMinutes()),
//             taskMonth: addZeroToTime(date.getMonth() + 1),
//             taskYear: date.getFullYear(),
//             taslCompleted: false,
//         }
//         TASKLIST.unshift(taskData)
//         renderTask()
//         localed()
//         clearInput(todoListInput)
//     }
// }

// function renderTask (){
//     while(todoListTaskContainer.firstChild){
//         todoListTaskContainer.removeChild(todoListTaskContainer.firstElementChild)
//     }
//     TASKLIST.map((todo) => {
//         const task = document.createElement('div');
//         task.className = 'todolist_item'
//         task.innerHTML = `
//             <p>${todo.taskName}</p>
            
//             <div class="todolist_actions">
//                 <button class="todolist_btn complete"><i class="fas fa-check-circle"></i>Complete</button>
//                 <button class="todolist_btn edit"><i class="fas fa-edit"></i>Edit</button>
//                 <button class="todolist_btn time"><div class="additional_time">${todo.taskDate}/${todo.taskMonth}/${todo.taskYear}</div><i class="fas fa-clock"></i>${todo.taskHour} : ${todo.taskMinute}</button>
//                 <button class="todolist_btn delete"><i class="fas fa-trash"></i>Delete</button>
//             </div>
//         `
//         todoListTaskContainer.appendChild(task)
//     })
// }

// function clearInput (inp){
//     inp.value = "";
// }

// clearBtn.addEventListener('click', () => {
//     clearInput(todoListInput)
// })

// function addZeroToTime(time){
//     return String(time).padStart(2, "0")
// }

// todoListTaskContainer.addEventListener('click', (e) => {
//     console.log(e);
// })

// function localed (){
//     localStorage.setItem('TASKLIST', JSON.stringify(TASKLIST))
// }

// document.addEventListener('DOMContentLoaded', () => {
//     let parsed = localStorage.getItem('TASKLIST')
//     if(parsed){
//         TASKLIST = JSON.parse(parsed)
//         renderTask()
//     }
// })


const todoForm = document.querySelector('#todolist-form')
const todolistInput = document.querySelector('#todolist_input')
const clearInput = document.querySelector('#clear-input')
const todoListTaskContainer = document.querySelector('#todolist-taskcontainer')
const deleteAllBtn = document.querySelector('#todolist_deleteall')

todoForm.addEventListener('submit', createTask)

let TASKLIST = []

function createTask(e){
    e.preventDefault()
    if(todolistInput.value.trim().length > 0){
        const date = new Date()
        const taskData = {
            taskName: todolistInput.value,
            taskDate: date.getDate(),
            taskHour: date.getHours(),
            taskMinute: date.getMinutes(),
            taskMonth: date.getMonth() + 1,
            taskYear: date.getFullYear(),
            taskCompleted: false,
        }

        TASKLIST.unshift(taskData)
        renderTask()
        clearInputValue(todolistInput)
        localed()
        console.log(TASKLIST);
    }
} 


function renderTask (){
    while(todoListTaskContainer.firstChild){
        todoListTaskContainer.removeChild(todoListTaskContainer.firstChild)
    }
    TASKLIST.map((t, index) => {
        const elm = document.createElement('div')
        elm.className = 'todolist_results';
        elm.setAttribute('data-order-number', index)
        elm.innerHTML = `
            <strong style="${t.taskCompleted ? 'text-decoration: line-through; background-color: #14c414; color: #fff; padding: 5px 16px;' : 'text-decoration: none'}">${t.taskName}</strong>

            <div class="todolist_buttons">
                <button class="todolist-btn complete"><i class="fas fa-circle-check"></i> Complete</button>
                <button class="todolist-btn edit"><i class="fas fa-edit"></i> Edit</button>
                <button class="todolist-btn time"><div class="additional_time">${t.taskDate}/${t.taskMonth}/${t.taskYear}</div><i class="fas fa-clock"></i> ${t.taskHour} : ${t.taskMinute}</button>
                <button class="todolist-btn delete"><i class="fas fa-trash"></i> Delete</button>
            </div>
        `
        todoListTaskContainer.appendChild(elm)
    })
}


todoListTaskContainer.addEventListener('click', (e) => {
    let taskIndex = +e.target.parentElement.parentElement.dataset.orderNumber
    if(e.target.classList.contains("complete")){
        TASKLIST[taskIndex].taskCompleted = !TASKLIST[taskIndex].taskCompleted
        console.log(TASKLIST[taskIndex]);
        localed()
        renderTask()
    }else if(e.target.classList.contains('delete')){
        e.target.parentElement.parentElement.classList.add('deleted')
        setTimeout(() => {
            TASKLIST.splice(taskIndex, 1)
            localed()
            renderTask()
        }, 500)
    }else if(e.target.classList.contains('edit')){
        e.target.parentElement.previousElementSibling.setAttribute('contenteditable', true);
        e.target.parentElement.previousElementSibling.style = 'border: 2px solid gray; padding-left: 5px;'
        e.target.innerHTML = '<i class="fas fa-check-double"></i> Done'
        e.target.classList.add('edits')
        e.target.classList.remove('edit')
    }
    else if(e.target.classList.contains('edits')){
        e.target.parentElement.previousElementSibling.removeAttribute('contenteditable')
        e.target.parentElement.previousElementSibling.style = 'border: 2px solid transparent;'
        e.target.innerHTML = '<i class="fas fa-edit"></i> Edit'
        e.target.classList.add('edit')
        e.target.classList.remove('edits')
        if(e.target.parentElement.previousElementSibling.textContent != TASKLIST[taskIndex].taskName){
            TASKLIST[taskIndex].taskName = e.target.parentElement.previousElementSibling.textContent
        }
        localed()
    }
})  

function clearInputValue(inp){
    inp.value = ""
}

clearInput.addEventListener('click', () => {
    clearInputValue(todolistInput)
})

deleteAllBtn.addEventListener('click', () => {
    while(TASKLIST[0]){
        TASKLIST.splice(0, 1)
    }
    localed()
    renderTask()
})

function localed(){
    localStorage.setItem('task', JSON.stringify(TASKLIST))
}

window.addEventListener('DOMContentLoaded', () => {
    let ls = localStorage.getItem('task')
    if(ls){
        TASKLIST = JSON.parse(ls)
        renderTask()
    }
})