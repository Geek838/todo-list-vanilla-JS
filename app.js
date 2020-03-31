const field = document.querySelector('#field');
const addBtn = document.querySelector('#add');
const list = document.querySelector('#list');
const checkAll = document.querySelector('#complete')
const deleteMarked = document.querySelector('#delete');

let todoList = [];
let pageCount = 1;
let currentPage = 1;



addBtn.addEventListener('click', addToList)

field.addEventListener('keyup', addToList)

deleteMarked.addEventListener('click', () => {
    todoList = todoList.filter(item => item.checked !== true);
    pageCount = Math.ceil(todoList.length / 10);
    if (currentPage > pageCount) {
        currentPage = pageCount
    }
    renderList();
})

checkAll.addEventListener('click', () => {
    markAll(todoList);
});





const markAll = (todoList) => {
    todoList = todoList.map(item => {
        item.checked = true;
        return item
    });
    renderList();
}


function addToList(e) {
    if (e.type === 'click' || e.keyCode === 13) {
        if (field.value && field.value.trim().length !== 0) {
            todoList.push({
                name: field.value,
                checked: false,
                id: Date.now()
            });
            pageCount = Math.ceil(todoList.length / 10);
            currentPage = Math.ceil(todoList.length / 10);
            renderList();
            field.value = '';
        }

    }
}

const renderList = () => {
    const start = (currentPage - 1) * 10;
    const end = (currentPage - 1) * 10 + 10;
    list.innerHTML = ''
    todoList.slice(start, end).forEach((item) => {
        const li = document.createElement('li');
        let id = item.id;
        li.classList.add(id);
        list.append(li);
        const span = document.createElement('span');
        span.innerHTML = item.name;
        li.append(span)
        checkBtn(li, item);
        editBtn(li, item);
        removeBtn(li, item.id);
        if(item.checked){
            span.classList.add('done');
            document.querySelectorAll('.check').forEach(e=>{
                e.checked = true   
            })
        }else {
            span.classList.remove('done');
            document.querySelectorAll('.check').forEach(e=>{
                e.checked = false;
            })
        }
    })
    createPages(pageCount);
    const allButtons = document.querySelectorAll('.pagination button')
    allButtons.forEach(e => {
        e.addEventListener('click', () => {
            list.innerHTML = ''
            currentPage = Number(e.innerHTML);
            renderList();
        })
    })

}

const createPages = (pages) => {
    const pagination = document.querySelector('.pagination')
    pagination.innerHTML = '';
    for (let i = 0; i < pages; i++) {
        const page = document.createElement('button');
        page.innerHTML = i + 1;
        pagination.append(page);
    }

}


const checkBtn = (element, item) => {
    const check = document.createElement('input');
    check.setAttribute('type', 'checkbox');
    check.classList.add('check')
    element.append(check)
    check.addEventListener('change', function () {
        if (check.checked) {
            element.children[0].classList.add('done')
            item.checked = true;

        } else {
            element.children[0].classList.remove('done')
            item.checked = false;
        }
    })
}

const editBtn = (element, listItem) => {
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
        element.children[1].style.display = 'none'
        editInput.style.display = 'inline-block';
        editInput.addEventListener('keyup', (e) => {
            if (e.keyCode === 13) {
                if (editInput.value.trim() != 0) {
                    listItem.name = editInput.value;
                    element.children[0].innerHTML = editInput.value;
                }
                element.children[0].style.display = '';
                editInput.style.display = 'none';
                element.children[1].style.display = ''
            }
        })

    })
    element.append(edit);


}

const removeBtn = (element, id) => {
    const remove = document.createElement('button');
    remove.classList.add('remove');
    remove.innerHTML = 'remove';
    element.append(remove)
    remove.addEventListener('click', () => {
        todoList = todoList.filter(item => item.id !== id);
        pageCount = Math.ceil(todoList.length / 10);
        if (currentPage > pageCount) {
            currentPage = pageCount
        }
        renderList();
    })
};