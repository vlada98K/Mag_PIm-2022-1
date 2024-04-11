function findMinSquares(width, height) {
  // Базовый случай: если одна из сторон равна 0, значит прямоугольник уже заполнен
  if (width === 0 || height === 0) {
    return 0;
  }

  // Находим сторону, которая больше, и делим ее на меньшую сторону, округляя вверх
  let maxSide = Math.max(width, height);
  let minSide = Math.min(width, height);

  // Вызываем функцию рекурсивно, передавая новые размеры прямоугольника
  return (
    Math.floor(maxSide / minSide) + findMinSquares(maxSide % minSide, minSide) //floor - округление вниз
  );
}

// Пример использования функции
let width = 8;
let height = 5;
const minSquares = findMinSquares(width, height);
console.log(`Минимальное количество квадратов: ${minSquares}`);
