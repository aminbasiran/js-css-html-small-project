const addButton= document.getElementById('addtoDo');
const removeButton= document.getElementById('removetoDo');
const newtoDo = document.getElementById('todo');
const placement = document.getElementById('container');

//click event
addButton.addEventListener('click',()=>{
    var paragraph = document.createElement('li')
    paragraph.innerText = newtoDo.value
    paragraph.classList.add('styling1')
    placement.appendChild(paragraph)
    newtoDo.value=""
    paragraph.addEventListener('click',()=>{
        // paragraph.classList.add('styling2')
        paragraph.style.textDecoration = 'line-through'
            paragraph.addEventListener('click',()=>{
                // paragraph.innerText=""
                paragraph.remove('li')
        })
    })
    
})

//keypress event
newtoDo.addEventListener("keypress", function(event) {
    if (event.key=== "Enter") {
      event.preventDefault();
      document.getElementById("addtoDo").click();
    }
})

// window.addEventListener('keypress',function(e){
//     console.log(e)
// })

removeButton.addEventListener('click',()=>{
        placement.innerHTML = "";
})

// button.addEventListener('click',()=>{
//     const newList = newtoDo.value
//     document.getElementById('demo').innerHTML=newList;


// })