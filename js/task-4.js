const decrementBtn = document.querySelector(
  "button[data-action = 'decrement']"
);
const incrementBtn = document.querySelector(
  "button[data-action = 'increment']"
);
const counterValue = document.getElementById("value");
class Counter {
  constructor() {
    this.startCount = 0;
  }
  toDecrement() {
    if (this.startCount === 0) return;
    this.startCount -= 1;
    counterValue.textContent = this.startCount;
  }
  toIncrement() {
    this.startCount += 1;
    counterValue.textContent = this.startCount;
  }
}
const myCounter = new Counter();
decrementBtn.addEventListener("click", () => {
  myCounter.toDecrement();
});
incrementBtn.addEventListener("click", () => {
  myCounter.toIncrement();
});
