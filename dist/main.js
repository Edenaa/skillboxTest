!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){e.exports=n(1)},function(e,t,n){"use strict";n.r(t);n(2);var r=document.getElementById("take-course__form"),o=document.getElementById("take-course__submit"),u=r.querySelectorAll(".take-course__input"),a=/^[а-яёА-ЯЁ]{3,}$/,i=/.+@.+\..+/i,c=/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/,l=["Незаполненное поле ввода","Введите Ваше реальное имя","Укажите Вашу электронную почту","Неверный формат электронной почты","Укажите Ваш номер телефона","Неверный формат номера телефона"],s=!1;function d(e,t){var n="";return{name:function(){0!=e.name.length&&a.test(e.name)||(n=l[1])},email:function(){0==e.email.length?n=l[2]:i.test(e.email)||(n=l[3])},phone:function(){0==e.phone.length?n=l[4]:c.test(e.phone)||(n=l[5])}}[t](),n}function f(e,t){var n=r.querySelector("[name="+e+"]"),o=n.nextElementSibling;n.classList.add("take-course__input_error"),o.classList.add("take-course__error_show"),o.innerHTML=t}o.addEventListener("click",(function(e){e.preventDefault();var t,n=function(e){var t={};if(!e.elements)return"";for(var n=0,r=e.elements.length;n<r;n++){var o=e.elements[n];"button"!==o.tagName.toLowerCase()&&"checkbox"!==o.type&&(t[o.name]=o.value)}return t}(r);for(var o in n)0!=(t=d(n,o)).length&&(s=!0,f(o,t));s||alert("Здесь происходит отправка формы, т.к. нет ошибок");return!1})),r.addEventListener("focus",(function(){var e=document.activeElement;e!==o&&function(e){var t=e.nextElementSibling;e.classList.remove("take-course__input_error"),t.classList.remove("take-course__error_show")}(e)}),!0),u.forEach((function(e){e.addEventListener("blur",(function(e){var t=e.target,n=t.getAttribute("name"),r={};r[n]=t.value;var o=d(r,n);return 0!=o.length&&f(n,o),!1}))})),document.getElementById("check").addEventListener("change",(function(e){e.target.checked?(o.classList.remove("take-course__button_disabled"),o.removeAttribute("disabled")):(o.classList.add("take-course__button_disabled"),o.setAttribute("disabled","disabled"))}))},function(e,t){}]);
//# sourceMappingURL=main.js.map