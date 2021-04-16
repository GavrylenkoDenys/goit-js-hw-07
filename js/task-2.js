// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li, после чего вставит все li за одну операцию в список ul.ingredients. Для создания DOM-узлов используй document.createElement().

const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];
const item = [];

const heading = document.createElement("h2");

const ulEl = document.getElementById("ingredient");

heading.classList.add("headings");
heading.textContent = "Ингредиенты :";

ulEl.classList.add("second-task");

ingredients.map((ingredient) => {
  const liItem = document.createElement("li");
  liItem.classList.add("item");
  liItem.classList.add("ingretients-tasks");
  liItem.textContent = ingredient;
  item.push(liItem);
});
ulEl.append(heading, ...item);
