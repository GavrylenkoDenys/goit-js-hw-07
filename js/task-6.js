// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Введи 6 символов"
// />
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.

const inputFocus = document.getElementById("validation-input");

const inputAttr = inputFocus.getAttribute("data-length");

function onValid(event) {
  event.preventDefault();
  if (inputFocus.value.length === +inputAttr) {
    inputFocus.classList.add("valid");
    inputFocus.classList.remove("invalid");
  } else {
    inputFocus.classList.remove("valid");
    inputFocus.classList.add("invalid");
  }
}
inputFocus.addEventListener("blur", onValid);
