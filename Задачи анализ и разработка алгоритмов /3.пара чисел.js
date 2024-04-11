// Создаем пустой массив, в который будем добавлять числа от -1000 до 1000
let sortedArray = [];

// Заполняем массив числами от -1000 до 1000
for (let i = -1000; i <= 1000; i++) {
  sortedArray.push(i);
}

//Функция поиска чиисел
function findPairWithSum(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];

    if (sum === target) {
      return [arr[left], arr[right]];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }

  return null; // Если пара не найдена
}

// Пример использования функции
const targetSum = -10;
const pair = findPairWithSum(sortedArray, targetSum);

if (pair) {
  console.log(
    `Найдена пара чисел (${pair[0]}, ${pair[1]}) с суммой ${targetSum}`
  );
} else {
  console.log(`Пара чисел с суммой ${targetSum} не найдена`);
}
