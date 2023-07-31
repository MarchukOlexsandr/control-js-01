const findLongestWord = function (string) {
  // Розбиваємо рядок на слова і отримуємо масив слів
  const words = string.split(" ");

  // Змінна для зберігання найдовшого слова
  let longestWord = "";

  // Перебираємо всі слова в масиві
  for (const word of words) {
    // Перевіряємо, чи поточне слово довше за збережене найдовше слово
    if (word.length > longestWord.length) {
      // Якщо так, зберігаємо поточне слово як найдовше
      longestWord = word;
    }
  }

  // Повертаємо найдовше слово
  return longestWord;
};


console.log("Task 2")
console.log( findLongestWord("The quick brown fox jumped over the lazy dog")); // 'jumped'
console.log(findLongestWord("Google do a roll")); // 'Google'
console.log(findLongestWord("May the force be with you")); // 'force'
