const field = document.querySelector('#field');
const addBtn = document.querySelector('#add');
const list = document.querySelector('#list');

let todoList = [];
let pageCount = Math.ceil(todoList.length/10);

addBtn.addEventListener('click', () => {
    

    if(field.value || field.value.trim()!=0){
        todoList.push({
            name: field.value,
            checked: false,
            id: todoList.length + 1
        });
        renderList(0,10);

    }
    
})

const renderList = (start,end) => {
    list.innerHTML = ''
    todoList.slice(start,end).forEach((item) => {
        const li = document.createElement('li');
        list.append(li);
        const span = document.createElement('span');
        span.innerHTML = item.name;
        li.append(span)
        checkBtn(li);
        editBtn(li);
        removeBtn(li);

    })
    

}

// const check = document.querySelector('.check')
// const edit = document.querySelector('.edit')
// const remove = document.querySelector('.remove')


const checkBtn = (element) => {
    const check = document.createElement('input');
    check.setAttribute('type', 'checkbox');
    check.classList.add('check')
    element.append(check)
    check.addEventListener('change', function () {
        if (check.checked) {
            element.children[0].classList.add('done')

        } else {
            element.children[0].classList.remove('done')
        }
    })
}

const editBtn = (element) => {
    const edit = document.createElement('button');
    edit.classList.add('edit')
    edit.innerHTML = 'edit';
    element.append(edit);
    const editInput = document.createElement('input');
    editInput.setAttribute('type', 'text');
    element.append(editInput)
    editInput.style.display = 'none';
    edit.addEventListener('click', () => {
        element.children[0].style.display = 'none';
        element.children[1].style.display = "none"
        editInput.style.display = 'inline-block';
        editInput.addEventListener('keyup', (e) => {
            if (e.keyCode == 13) {
                if (editInput.value.trim() != 0) {
                    element.children[0].innerHTML = editInput.value;
                }
                element.children[0].style.display = '';
                editInput.style.display = 'none';
                element.children[1].style.display = ""
            }
        })


    })
    element.append(edit);


}

const removeBtn = (element) => {
    const remove = document.createElement('button');
    remove.classList.add('remove');
    remove.innerHTML = 'remove';
    element.append(remove)
    remove.addEventListener('click', () => {
        element.parentNode.removeChild(element);
        todoList.pop(todoList.length - 1)
    })
    
}







































// function add(e) {
//     if (e.keyCode == 13 || e.type == 'click') {
//         if (field.value.trim() != 0) {
//             let lis = document.querySelectorAll('#list li');

//             if (lis.length <= 10) {
//                 let item = document.createElement('li');
//                 list.append(item);
//                 let span = document.createElement('span');
//                 span.innerHTML = field.value;
//                 item.append(span)
//                 let checkBtn = document.createElement('input');
//                 let editBtn = document.createElement('button');
//                 let editInput = document.createElement('input');
//                 let rmvBtn = document.createElement('button')
//                 Check();
//                 edit();
//                 remove();




//                 function remove() {
//                     rmvBtn.classList.add('remove');
//                     rmvBtn.innerHTML = 'remove';
//                     rmvBtn.addEventListener('click', () => {
//                         item.parentNode.removeChild(item);
//                     })
//                     item.append(rmvBtn);
//                 }

//                 function edit() {
//                     editBtn.innerHTML = 'edit';
//                     editInput.setAttribute('type', 'text');
//                     item.append(editInput)
//                     editInput.style.display = 'none';
//                     editBtn.addEventListener('click', () => {
//                         span.style.display = 'none';
//                         checkBtn.style.display = "none"
//                         editInput.style.display = 'inline-block';
//                         editInput.addEventListener('keyup', (e) => {
//                             if (e.keyCode == 13) {
//                                 if (editInput.value.trim() != 0) {
//                                     span.innerHTML = editInput.value;
//                                 }
//                                 span.style.display = '';
//                                 editInput.style.display = 'none';
//                                 checkBtn.style.display = ""
//                             }
//                         })


//                     })
//                     item.append(editBtn);
//                 }

//                 function Check() {
//                     checkBtn.setAttribute('type', 'checkbox');
//                     item.append(checkBtn);
//                     checkBtn.addEventListener('change', () => {
//                         if (checkBtn.checked) {
//                             span.classList.add('done')
//                         } else {
//                             span.classList.remove('done');
//                         }
//                     })
//                 }




//                 field.value = '';


//             }
//             else {

//                 lis.forEach((e)=>{
//                     pageOne.push(e);
//                 })
//                 let pagination = document.querySelectorAll('.pagination button');
//                 let nextPage = document.createElement('button');
//                 nextPage.classList.add('next');
//                 nextPage.innerHTML = pagination.length +1 ;
//                 document.querySelector('.pagination').append(nextPage);
//                 if(pagination.length>1){
//                     nextPage.parentNode.removeChild(nextPage)
//                 }
//                 nextPage.addEventListener('click',()=>{
//                     lis.forEach((e)=>{
//                         e.parentNode.removeChild(e);
//                     })
//                 })
//                 document.querySelector('.pagi').addEventListener('click',()=>{
//                     pageOne.forEach((e)=>{
//                         lis.forEach((e)=>{
//                             e.parentNode.removeChild(e);
//                         })
//                         list.append(e);


//                     })
//                 })



//             }

//         }
//     }
// }










// function pagination(e){
//     if(e.keyCode===13){
//         let items = document.querySelectorAll('#list li')
//         if (items.length> 10 && !document.querySelector('.next')){
//             let nextPage = document.createElement('button');
//             nextPage.classList.add('next')
//             nextPage.innerText = 'next page';
//             document.querySelector('.pagination').append(nextPage);

//             let list2 = 


//         }
//     }

// }

// document.addEventListener('keyup',pagination)