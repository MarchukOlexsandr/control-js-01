
const calculateEngravingPrice = function (message, pricePerWord) {
  // Розбиваємо рядок на слова і отримуємо масив слів
  const words = message.split(" ");

  // Рахуємо загальну кількість слів у рядку
  const wordCount = words.length;

  // Обчислюємо вартість гравіювання всіх слів
  const totalPrice = wordCount * pricePerWord;

  // Повертаємо загальну вартість
  return totalPrice;
};


console.log("Task 1")
console.log(
  calculateEngravingPrice(
    "Proin sociis natoque et magnis parturient montes mus",
    10
  )
); // 80
console.log(
  calculateEngravingPrice(
    "Proin sociis natoque et magnis parturient montes mus",
    20
  )
); // 160
console.log(
  calculateEngravingPrice("Donec orci lectus aliquam est magnis", 40)
); // 240
console.log(
  calculateEngravingPrice("Donec orci lectus aliquam est magnis", 20)
); // 120
