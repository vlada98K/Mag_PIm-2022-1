const fs = require('fs');

// Функция для бинарного поиска слова в отсортированном массиве
function binarySearch(array, word) {
    let left = 0;
    let right = array.length - 1;

    while (left <= right) {
        const middle = Math.floor((left + right) / 2);
        if (array[middle] === word) {
            return middle; // Слово найдено, возвращаем его индекс
        } else if (array[middle] < word) {
            left = middle + 1;
        } else {
            right = middle - 1;
        }
    }

    return -1; // Слово не найдено
}

fs.readFile('./find_words/find_words.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Ошибка чтения файла find_words.txt:', err);
        return;
    }
    let targetWords = data.split('\n');

    // Чтение содержимого файла
    fs.readFile('./find_words/words_utf.txt', 'utf8', (err1, data1) => {
        if (err1) {
            console.error('Ошибка чтения файла words_utf.txt:', err1);
            return;
        }
        const lines = data1.split('\n');

        // Без сортировки не может найти як и ящерица
        // lines.sort();

        for (let i = 0; i < targetWords.length; i++) {
            if (targetWords[i] !== "") {
                const wordIndex = binarySearch(lines, targetWords[i]);
                if (wordIndex !== -1) {
                    // Найденное слово извлекается из исходного массива
                    console.log(`Слово "${targetWords[i]}" найдено на строке ${wordIndex + 1}.`);
                } else {
                    console.log(`Слово "${targetWords[i]}" не найдено.`);
                }
            }
        }
    });
});

