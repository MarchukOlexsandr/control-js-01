let input;
const numbers = [];
let total = 0;

while (true) {
  input = prompt("Введіть число:");
  

  if (input === null) {
    break; // Користувач натиснув "Cancel", виходимо з циклу
  }

  const number = Number(input);
  if (!isNaN(number)) {
    numbers.push(number);
  } else {
    alert("Було введено не число, попробуйте ще раз");
  }
}

// Підраховуємо суму всіх чисел в масиві
for (const number of numbers) {
  total += number;
}

// Виводимо результат в консоль
console.log("Task 5")
console.log(`Загальна сума чисел дорівнює ${total}`);
