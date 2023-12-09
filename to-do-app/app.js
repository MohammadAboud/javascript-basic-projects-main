// ****** SELECT ITEMS **********
const alert = document.querySelector('.alert');
const form = document.querySelector('.grocery-form');
const item = document.getElementById('grocery');

const submitBtn = document.querySelector('.submit-btn');
const container = document.querySelector('.grocery-container');
const list = document.querySelector('.grocery-list');

const clearBtn = document.querySelector('.clear-btn');
// edit option

let editItem;
let editFlag = false;
let editId = '';
// ****** EVENT LISTENERS **********

form.addEventListener('submit', function (e) {
  e.preventDefault();
  let value = item.value;
  const id = new Date().getTime().toString();

  //  creating the Item
  if (value && !editFlag) {
    const el = document.createElement('article');
    el.classList.add('grocery-item');
    let att = document.createAttribute('data-id');
    att.value = id;
    el.setAttributeNode(att);
    el.innerHTML = ` <p class="title">${value}</p>
         <div class="btn-container">
             <button type="button" class="edit-btn">
               <i class="fas fa-edit"></i>
             </button>
             <button type="button" class="delete-btn">
               <i class="fas fa-trash"></i>
            </button>
            </div>`;
    const editBtn = el.querySelector('.edit-btn');
    const deleteBtn = el.querySelector('.delete-btn');

    // edit item
    editBtn.addEventListener('click', function (e) {
      const el = e.currentTarget.parentElement.parentElement;
      const id = el.dataset.id;
      // the title
      editItem = e.currentTarget.parentElement.previousElementSibling;
      item.value = editItem.innerHTML;
      editFlag = true;
      editId = id;
      submitBtn.textContent = 'edit';
    });

    // delete item
    deleteBtn.addEventListener('click', function (e) {
      const el = e.currentTarget.parentElement.parentElement;
      const id = el.dataset.id;
      list.removeChild(el);
      if (list.children.length === 0) {
        container.classList.remove('show-container');
      }
      setBackToDefault();
      // removeItemLocal(id);
    });
    list.appendChild(el);
    displayAlertSuccess();

    container.classList.add('show-container');
    //  add to local storage
    addToLocalStorage(id, value);
    // set back to default
    setBackToDefault();
  }
  //  editing the Item
  else if (value && editFlag) {
    editItem.innerHTML = value;
    setBackToDefault();
    submitBtn.innerHTML = 'Add';
    // empty values
  } else {
    displayAlertDanger();
  }
});
// clear all items
clearBtn.addEventListener('click', function () {
  const items = document.querySelectorAll('.grocery-item');
  if (items.length > 0) {
    items.forEach(function (item) {
      list.removeChild(item);
      container.classList.remove('show-container');
      setBackToDefault();
      // localStorage.removeItem('list');
    });
  }
});

// alert
function displayAlertDanger() {
  alert.textContent = 'Empty Value';
  alert.classList.add('alert-danger');
  setTimeout(function () {
    alert.textContent = '';
    alert.classList.remove('alert-danger');
  }, 1500);
}
function displayAlertSuccess() {
  alert.textContent = 'Item Added';
  alert.classList.add('alert-success');
  setTimeout(function () {
    alert.textContent = '';
    alert.classList.remove('alert-success');
  }, 1500);
}

function setBackToDefault() {
  item.value = '';
  editFlag = false;
  editId = '';
  submitBtn.textContent = 'add';
}
