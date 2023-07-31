const checkForSpam = function (message) {
  // Переводимо рядок у нижній регістр, щоб забезпечити регістронезалежну перевірку
  const lowerCasedMessage = message.toLowerCase();

  // Перевіряємо наявність заборонених слів
  if (
    lowerCasedMessage.includes("spam") ||
    lowerCasedMessage.includes("sale")
  ) {
    return true;
  }

  // Повертаємо false, якщо заборонених слів немає
  return false;
};


console.log("Task 4")
console.log(checkForSpam("Latest technology news")); // false
console.log(checkForSpam("JavaScript weekly newsletter")); // false
console.log(checkForSpam("Get best sale offers now!")); // true
console.log(checkForSpam("[SPAM] How to earn fast money?")); // true
