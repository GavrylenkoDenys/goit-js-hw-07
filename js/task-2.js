const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];
let item = [];

const ulIngredients = document.getElementById("ingredient");
let categoryList = document.createElement("li");
categoryList.classList.add("item");
const itemList = document.querySelector("item");
let heading = document.createElement("h2");
heading.classList.add("headings");
heading.textContent = "Ингредиенты";

ulIngredients.classList.add("tasks");
ingredients.map((ingredients) => {
  let liItems = document.createElement("li");
  liItems.classList.add("ingretients-tasks");
  liItems.textContent = ingredients;
  item.push(liItems);
});
ulIngredients.append(categoryList);
categoryList.append(heading, ...item);
