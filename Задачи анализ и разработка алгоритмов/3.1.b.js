function binary_search(arr, target){
    let step = 0;
    let left = 0;
    let right = arr.length - 1;
    while (left <= right){
        step++;
        let midle = Math.floor((left + right) / 2);
        if (arr[midle] == target){
            return [step, midle];
        } else {
            if (arr[midle] > target) {
                right = midle - 1;
            } else {
                left = midle + 1;
            };
        };
    };
    return [step, -1];
};

// console.clear();

console.log("Бинарный поиск");

let lst = [1,99,2,3,4,56];
let elm = 3;  //N
const t0 = performance.now();
let [step, pos] = binary_search(lst, elm)
const t1 = performance.now();
console.log(`Кол-во шагов: ${step}. Позиция элемента " ${elm} " в массиве [${lst}]: ${pos}. Время выполнения: ${t1 - t0} мс.`);

lst = [1,2,3,4,5,8,9,11];
elm = 8;  //N
const t2 = performance.now();
[step, pos] = binary_search(lst, elm)
const t3 = performance.now();
console.log(`Кол-во шагов: ${step}. Позиция элемента " ${elm} " в массиве [${lst}]: ${pos}. Время выполнения: ${t3 - t2} мс.`);

lst = [1,2,3,4,5,8,9];
elm = 8;  //N
const t4 = performance.now();
[step, pos] = binary_search(lst, elm)
const t5 = performance.now();
console.log(`Кол-во шагов: ${step}. Позиция элемента " ${elm} " в массиве [${lst}]: ${pos}. Время выполнения: ${t5 - t4} мс.`);