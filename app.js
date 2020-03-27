const field = document.querySelector('#field');
const addBtn = document.querySelector('#add');
const list = document.querySelector('#list');

addBtn.addEventListener('click', add);
field.addEventListener('keyup', add);

function add(e) {
    if (e.keyCode == 13 || e.type == 'click') {
        if (field.value.trim() != 0) {
            let item = document.createElement('li');
            list.append(item);
            let span = document.createElement('span');
            span.innerHTML = field.value;
            item.append(span)
            let checkBtn = document.createElement('input');
            checkBtn.setAttribute('type', 'checkbox');
            checkBtn.addEventListener('change', () => {
                if (checkBtn.checked) {
                    span.classList.add('done')
                } else {
                    span.classList.remove('done');
                }
            })
            item.append(checkBtn);
            let editBtn = document.createElement('button');
            editBtn.innerHTML = 'edit';
            let editInput = document.createElement('input');
            editInput.setAttribute('type', 'text');
            item.append(editInput)
            editInput.style.display = 'none';
            editBtn.addEventListener('click', () => {
                span.style.display = 'none';
                checkBtn.style.display = "none"
                editInput.style.display = 'inline-block';
                editInput.addEventListener('keyup', (e) => {
                    if (e.keyCode == 13) {
                        span.innerHTML = editInput.value;
                        span.style.display = '';
                        editInput.style.display = 'none';
                        checkBtn.style.display = ""
                    }
                })


            })
            item.append(editBtn);
            let rmvBtn = document.createElement('button')
            rmvBtn.classList.add('remove');
            rmvBtn.innerHTML = 'remove';
            rmvBtn.addEventListener('click', () => {
                item.parentNode.removeChild(item);
            })
            item.append(rmvBtn);

            field.value = '';
        }
    }



}