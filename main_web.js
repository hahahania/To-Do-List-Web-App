 var id = 0
 function createTask(){
        
    
    let newParagraph = document.createElement('p')
    newParagraph.id = 'id'+id
    let newCheckbox = document.createElement('input')
    newCheckbox.type = 'checkbox'

    let userInput = document.querySelector('#newTask');
    let newTaskText = document.createTextNode(userInput.value)
    let parent = document.querySelector('#parent')

    newParagraph.innerHTML='\n'
    newParagraph.appendChild(newCheckbox)
    newParagraph.appendChild(newTaskText)

    parent.appendChild(newParagraph)

    id+=1

    var getValue= document.getElementById("newTask");
    if (getValue.value !="") {
            getValue.value = "";
            }
    }