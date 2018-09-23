
let addbtn = document.getElementById('btn-add')
let todoList = document.getElementById('list')
let deletebtn = document.getElementById('btn-delete')
let sortbtn = this.document.getElementById('btn-sort')
 addbtn.onclick = function(){
    let todoName = document.getElementById('todo-name').value
    if(todoName == "" || todoName == null){
      window.alert("Enter the Task Name")
      return
    }
    let newTaskItem = document.createElement('LI')
    let newTaskRemoveBtn = document.createElement('button')
    let newSpanbtn = document.createElement('span')
    let upbtn = document.createElement('i')
    let downbtn = document.createElement('i')
    let newCheckbtn = document.createElement('input')

    newSpanbtn.setAttribute('aria-hidden','true')
    newSpanbtn.innerHTML = "&times;"
    newTaskRemoveBtn.setAttribute('aria-label','Close')
    newCheckbtn.setAttribute("type","checkbox")
    newCheckbtn.style.marginLeft = "10vh"
    upbtn.style.marginLeft = "100vh"
    downbtn.style.marginLeft = "10vh"
    upbtn.classList.add('fas', 'fa-arrow-up', 'arrow-btn')
    downbtn.classList.add('fas','fa-arrow-down','arrow-btn')
    newTaskItem.classList.add("list-group-item")
    newTaskItem.classList.add('incompleted')
    newTaskRemoveBtn.setAttribute("type","button")
    newTaskRemoveBtn.classList.add("close")
   
    newCheckbtn.checked = false
    newTaskItem.innerText = todoName
    
    newTaskRemoveBtn.appendChild(newSpanbtn)
    newTaskItem.appendChild(newCheckbtn)
    newTaskItem.appendChild(upbtn)
    newTaskItem.appendChild(downbtn)
    newTaskItem.appendChild(newTaskRemoveBtn)
  
    
    todoList.appendChild(newTaskItem) 
    //TaskListArray.push(newTaskItem); 
    //console.log(TaskListArray)s
    
    newTaskRemoveBtn.addEventListener("click",function(event){
      removeTask(event)
    }) 

    newCheckbtn.addEventListener("click",function(event){
     toggleTask(event)
    })
      
      deletebtn.addEventListener("click",function(){
        deleteTasks()
    })
     
    upbtn.addEventListener("click",function(event){
      moveTaskUp(event)
    })
    
    downbtn.addEventListener("click",function(event){
      moveTaskDown(event)
    })
  }
    sortbtn.onclick = function(){
      
      let newTaskList = document.createElement('ul')
      newTaskList.classList.add('list-group')
      newTaskList.id = 'list'
     
       var selectedItem = document.getElementsByClassName('completed')
       var unSelectedItem = document.getElementsByClassName('incompleted')
        console.log(selectedItem)
        console.log(unSelectedItem) 
 
        for(let i=0;i<unSelectedItem.length;i++){
         let item = document.createElement('li')        
         item.innerHTML = unSelectedItem[i].innerHTML
         item.lastChild.addEventListener("click",function(event){
             removeTask(event)
         })
        
         item.children[1].addEventListener("click",function(event){
            moveTaskUp(event)
         })
         item.children[2].addEventListener("click",function(event){
           moveTaskDown(event)
         }) 
         item.children[0].addEventListener("click",function(event){
           toggleTask(event)
         })

       
         item.classList.add('list-group-item')
         item.children[0].checked = false
         item.classList.add('incompleted')
         newTaskList.appendChild(item)    
     }
      for(let i=0;i<selectedItem.length;i++){
       let item = document.createElement('li')
       item.innerHTML = selectedItem[i].innerHTML
       item.lastChild.addEventListener("click",function(event){
        removeTask(event)
    })
    
      item.children[1].addEventListener("click",function(){
      moveTaskUp(event)
      })

      item.children[2].addEventListener("click",function(event){
        moveTaskDown(event)
      })
      item.children[0].addEventListener("click",function(event){
        toggleTask(event)
      })

         
       item.classList.add('list-group-item')
       item.children[0].checked = true
       item.classList.add('completed')
       newTaskList.appendChild(item)
      }  
   
       document.body.lastElementChild.replaceChild(newTaskList,todoList)
       todoList = document.getElementById('list') 
    }
  
    
    function toggleTask(event){
    
      if(event.target.checked){
        event.target.parentElement.classList.add('completed')
        event.target.parentElement.classList.remove('incompleted')
        event.target.classList.add('task-completed')
        }
        else{
        event.target.parentElement.classList.remove('completed')
        event.target.parentElement.classList.add('incompleted')
        event.target.classList.remove('task-completed');
        }
    }
    function deleteTasks(){
      var checkBox = document.getElementsByClassName('task-completed')    
      while(checkBox.length > 0){
        if(checkBox[0].checked){
          checkBox[0].parentElement.parentElement.removeChild(checkBox[0].parentElement)
        }
      }
    }
    function moveTaskUp(event){
      event.target.parentElement.parentElement.
      insertBefore(event.target.parentElement,event.target.parentElement.previousElementSibling)
    }
    function moveTaskDown(event){
    event.target.parentElement.parentElement.
    insertBefore(event.target.parentElement.nextElementSibling,event.target.parentElement)  
  }
   function removeTask(event){
    event.target.parentElement.parentElement.remove()
   }  
  
 