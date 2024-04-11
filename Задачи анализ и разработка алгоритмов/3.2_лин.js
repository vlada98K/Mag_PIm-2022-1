const fs = require('fs');

fs.readFile('./find_words/find_words.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Ошибка чтения файла find_words.txt:', err);
        return;
    }
    let targetWord = data.split('\n');
    // Чтение содержимого файла
    fs.readFile('./find_words/words_utf.txt', 'utf8', (err1, data1) => {
        if (err1){
            console.error('Ошибка чтения файла words_utf.txt:', err1);
            return;
        }
        const lines = data1.split('\n'); // Разделение содержимого файла на строки
        let wordFound = false; // Переменная для отслеживания того, было ли найдено слово
        // Поиск слова
        for (let i = 0; i < targetWord.length; i++){
            for (let j = 0; j < lines.length; j++){
                if (targetWord[i] === lines[j] && targetWord[i] != ""){
                    console.log(`Слово "${targetWord[i]}" найдено на строке ${j + 1}.`);
                    wordFound = true;
                };                
            };
            if (!wordFound && targetWord[i] != ""){
                console.log(`Слово ${targetWord[i]} не найдено.`);
            };
            wordFound = false;
        };
    });
});

