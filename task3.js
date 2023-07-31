const formatString = function (string) {
  const maxLength = 40;

  // Перевіряємо, чи потрібно обрізати рядок
  if (string.length > maxLength) {
    // Обрізаємо рядок до 40 символів
    const truncatedString = string.slice(0, maxLength);

    // Повертаємо укорочену версію рядка з доданими крапками
    return truncatedString + "...";
  }

  // Повертаємо рядок в початковому вигляді, якщо довжина не перевищує 40 символів
  return string;
};


console.log("Task 3")
console.log(formatString("Curabitur ligula sapien, tincidunt non."));
// повернеться оригінальний рядок

console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));
// повернеться форматований рядок

console.log(formatString("Curabitur ligula sapien."));
// повернеться оригінальний рядок


