const field = document.querySelector('#field');
const addBtn= document.querySelector('#add');
const list = document.querySelector('#list');


function add(e){
    let item = document.createElement('li');
    item.innerHTML = `${field.value} <button class="remove">Remove</button>`;
    list.append(item);
    let removeBtns = document.querySelectorAll('.remove');
    removeBtns.forEach((e,idx)=>{
        e.addEventListener('click',function(){
            list.children[idx].remove()
            
        })
    })
        
    }
    
  

  
  addBtn.addEventListener('click',add);