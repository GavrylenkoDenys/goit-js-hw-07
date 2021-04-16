/*
Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число. Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

Каждый созданный div:

Имеет случайный rgb цвет фона
Размеры самого первого div - 30px на 30px
Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
Создай функцию destroyBoxes(), которая очищает div#boxes.

<div id="controls">
  <input type="number" min="0" max="100" step="1" />
  <button type="button" data-action="render">Создать</button>
  <button type="button" data-action="destroy">Очистить</button>
</div>

<div id="boxes"></div>


*/

/* доступ к кнопкам */
const btnRender = document.querySelector("button[data-action='render']");
const btnDestroy = document.querySelector("button[data-action='destroy']");

/* значение input */
/* доступ к input */
const userInput = document.querySelector("input");

const onInputChange = (event) => {
  event.target.value;
  // console.log(userInput.value);
};
userInput.addEventListener("input", onInputChange);
// console.log(userInput);

const createBoxes = (amount) => {
  let divBox = "";
  for (let i = 0; i < amount; i += 1) {
    let rendomColor =
      "#" + (0x1000000 + Math.random() * 0xffffff).toString(16).substr(1, 6);

    divBox += `<div style="width: ${i * 10 + 30}px; height: ${
      i * 10 + 30
    }px; background-color: ${rendomColor};"></div>`;
  }
  boxes.insertAdjacentHTML("beforeend", divBox);
};
createBoxes(userInput.value);

btnRender.addEventListener("click", () => {
  createBoxes(userInput.value);
});
btnDestroy.addEventListener("click", () => {
  boxes.innerHTML = "";
  userInput.value = "";
});
