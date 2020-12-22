const itemTitleRef = document.querySelectorAll(".item");
console.log(`В списке ${itemTitleRef.length} категории.`);
itemTitleRef.forEach((li) =>
  console.log(
    `Категория: ${li.firstElementChild.textContent}\nКоличесвто элементов: ${li.lastElementChild.children.length}`
  )
);
