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

const onValid = (event) => {
  event.preventDefault();
  if (inputFocus.value.length === +inputAttr) {
    inputFocus.classList.add("valid");
    inputFocus.classList.remove("invalid");
  } else {
    inputFocus.classList.remove("valid");
    inputFocus.classList.add("invalid");
  }
};
inputFocus.addEventListener("blur", onValid);

/**********************************************************/

// const TAX_RATE = 0.08;
// const phonePrice = 88.88;
// const accPrice = 9;

// let banckAmount = prompt("Сколько денег есть, а?");
// let quantity = prompt("Сколько телефонов желаете: ");

// let total = (phonePrice + TAX_RATE * phonePrice) * quantity;

// if (banckAmount < total) {
//   alert("денежек не хватит на столько покупок :(");
// }

// while (banckAmount > total) {
//   if (banckAmount > total) {
//     confirm(`Ваша покупка составляет ${total.toFixed(2)}$. Будете брать?`);

//     while (total < banckAmount) {
//       let moneyLeft = banckAmount - total;

//       if (moneyLeft > accPrice) {
//         let decision = confirm("может возьмёте ещё чехольчик?");

//         if (decision === true) {
//           let combo = total + (accPrice * TAX_RATE + accPrice);
//           alert(`С Вас ${combo.toFixed(2)}$.`);
//         }
//         if (decision !== false) {
//           alert(`Cпасибо за покупку`);
//         }
//       }
//       break;
//     }

//     break;
//   }
// }

// "31" + 2 * 2;

// let a = {
//   name: "a",
// };

// let b = Object.create(a);
// console.log(b.name);

/* ============================================= */

// function getGender(gender) {
//   const arr = this.allStudents;
//   let total = 0;
//   for (let element of arr) {
//     let prop = element.gender === gender;
//     if (prop) {
//       total += 1;
//     }
//   }
//   if (gender === "male") {
//     return (this.boys = total);
//   } else {
//     return (this.girls = total);
//   }
// }
// classList.getGender = getGender;
// classList.getGender("male");

// console.log(`Здесь ${classList.boys} малчика`);
// classList.getGender("female");
// console.log(`Здесь ${classList.girls} дэвочек`);

// classList.addStudent(sara);

// console.log(classList.allStudents);

/**----------------------- Задача  ----------------------------- */

// classList.girls = 10;
// classList.boys = 12;

// console.log(classList.girls);

// console.log(classList._girls);

// console.log(classList.boys);
