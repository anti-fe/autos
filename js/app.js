const autoDrive = document.querySelector('.header__auto-drive');
const modalWindow = document.querySelector('.modal-window');
const closeModal = document.querySelector('.body-header__close-modal');
const modalBody = document.querySelector('.modal-window__body');
const formBtn = document.querySelector('.body-form__btn');
const form = document.querySelector('.form');
const hiddenInp = document.querySelector('.hidden-inp');
const title = document.querySelector('.title').innerHTML;
const inpsForm = document.querySelectorAll('.body-form-inp__inp');
const warningForm = document.querySelector('.warning');


let usersData = localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : [];

let regEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
let regPhone = /(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]‌​)\s*)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)([2-9]1[02-9]‌​|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})\s*(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+)\s*)?$/i;
let regName = /^[а-яА-Я\s]{5,30}$/;



autoDrive.addEventListener('click', ()=> {
    modalWindow.style.display = 'flex';
    document.body.style.overflowY = 'hidden';
}) 

closeModal.addEventListener('click', ()=> {
    modalWindow.style.display = 'none';
    document.body.style.overflowY = 'auto';
})

document.body.addEventListener('click', (e)=> {
    if(e.target == modalWindow) {
        modalWindow.style.display = 'none';
        document.body.style.overflowY = 'auto';
    }
})

hiddenInp.setAttribute('value',title);

formBtn.addEventListener('click', (e)=> {
    e.preventDefault();

    warningForm.style.display = 'none';

    let dataForm = new FormData(form);
    dataForm = Object.fromEntries(dataForm.entries());
    console.log(dataForm);

    if(validForm()) {
        modalWindow.style.display = 'none';
        usersData.push(dataForm);
        localStorage.setItem('users', JSON.stringify(usersData));
        
        let allInpts = document.querySelectorAll('.body-form-inp__inp');
        allInpts.forEach(item=>{
            item.value = '';
        })

    } else {
        warningForm.style.display = 'block';
    }

    function validForm() {
        if(regName.test(dataForm['fio']) && regEmail.test(dataForm['email']) && regPhone.test(dataForm['tel'])) {
            return true;
        } else {
            return false;
        }
    }
})

