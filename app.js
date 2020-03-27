const field = document.querySelector('#field');
const addBtn = document.querySelector('#add');
const list = document.querySelector('#list');

addBtn.addEventListener('click', add);

function add() {
    if (field.value) {
        let item = document.createElement('li');
        item.innerHTML = field.value;
        list.append(item);
        let rmvBtn = document.createElement('button')
        rmvBtn.classList.add('remove');
        rmvBtn.innerHTML = 'remove';
        rmvBtn.addEventListener('click', () => {
            item.parentNode.removeChild(item);
        })
        item.append(rmvBtn);
        field.value = '';
    } else {
        return
    }

}