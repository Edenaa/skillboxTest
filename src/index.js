import "./scss/style.scss";

let form = document.getElementById('take-course__form');
let btn = document.getElementById('take-course__submit');
let elements = form.querySelectorAll('.take-course__input');
let patternName = /^[а-яёА-ЯЁ]{3,}$/;
let patternMail	= /.+@.+\..+/i;
let patternPhone = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
let errorMess	= [
    'Незаполненное поле ввода', // 0
    'Введите Ваше реальное имя', // 1
    'Укажите Вашу электронную почту', // 2
    'Неверный формат электронной почты', // 3
    'Укажите Ваш номер телефона', // 4
    'Неверный формат номера телефона', // 5
];
let isError = false;


btn.addEventListener('click', validForm);
form.addEventListener('focus', function() {
    let el = document.activeElement;
    if (el !== btn) cleanError(el);
}, true);


function validForm(e) {
    e.preventDefault();
    let formVal = getFormData(form);
    let error;
    for (let property in formVal) {
        error = getError(formVal, property);
        if (error.length != 0) {
            isError = true;
            showError(property, error);
        }
    }

    if (!isError) {
        alert("Здесь происходит отправка формы, т.к. нет ошибок")
    }
    return false;
}

function getFormData(form) {
    let controls = {};
    if (!form.elements) return '';
    for (let i = 0, ln = form.elements.length; i < ln; i++) {
        let element = form.elements[i];
        if (element.tagName.toLowerCase() !== 'button' && element.type !== 'checkbox') {
            controls[element.name]= element.value;
        }
    }
    return controls;
}

function getError(formVal, property) {
    let error = '';
    let validate = {
        'name': function() {
            if (formVal.name.length == 0 || !patternName.test(formVal.name)) {
                error = errorMess[1];
            }
        },
        'email': function() {
            if (formVal.email.length == 0) {
                error = errorMess[2];
            } else if (!patternMail.test(formVal.email)) {
                error = errorMess[3];
            }
        },
        'phone': function() {
            if (formVal.phone.length == 0) {
                error = errorMess[4];
            } else if (!patternPhone.test(formVal.phone)) {
                error = errorMess[5];
            }
        }
    };
    validate[property]();
    return error;
}

function showError(property, error) {
    let formElement = form.querySelector('[name=' + property + ']');
    let errorBox = formElement.nextElementSibling;

    formElement.classList.add('take-course__input_error');
    errorBox.classList.add('take-course__error_show');
    errorBox.innerHTML = error;
}

elements.forEach((element) => {
    element.addEventListener('blur', function(e) {
        let formElement = e.target;
        let property = formElement.getAttribute('name');
        let dataField = {};

        dataField[property] = formElement.value;
        let error = getError(dataField, property);
        if (error.length != 0) {
            showError(property, error);
        }
        return false;
    });
})

function cleanError(el) {
    let errorBox = el.nextElementSibling;
    el.classList.remove('take-course__input_error');
    errorBox.classList.remove('take-course__error_show');
}

document.getElementById('check').addEventListener('change', function(e) {
    let i = e.target;
    if(!i.checked) {
        btn.classList.add('take-course__button_disabled');
        btn.setAttribute('disabled', 'disabled');
    } else {
        btn.classList.remove('take-course__button_disabled');
        btn.removeAttribute('disabled');
    }
})