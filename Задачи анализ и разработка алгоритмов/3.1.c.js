function binary_search_recursive(step, arr, target, left, right){
    step++;
    if (left > right){
        return [step, -1];
    };
    let midle = Math.floor((left + right) / 2);
    if (arr[midle] == target){
        return [step, midle];
    } else {
        if (arr[midle] > target){
            return binary_search_recursive(step, arr, target, left, midle - 1);
        } else {
            return binary_search_recursive(step, arr, target, midle + 1, right);
        };
    };
};

// console.clear();

console.log("Бинарный поиск - рекурсивно");

let lst = [1,99,2,3,4,56];
let elm = 3;  //N
const t0 = performance.now();
let [step, pos] = binary_search_recursive(0, lst, elm, 0, lst.length - 1)
const t1 = performance.now();
console.log(`Кол-во шагов: ${step}. Позиция элемента " ${elm} " в массиве [${lst}]: ${pos}. Время выполнения: ${t1 - t0} мс.`);

lst = [1,2,3,4,5,8,9,11];
elm = 8;  //N
const t2 = performance.now();
[step, pos] = binary_search_recursive(0, lst, elm, 0, lst.length - 1)
const t3 = performance.now();
console.log(`Кол-во шагов: ${step}. Позиция элемента " ${elm} " в массиве [${lst}]: ${pos}. Время выполнения: ${t3 - t2} мс.`);

lst = [1,2,3,4,5,8,9];
elm = 8;  //N
const t4 = performance.now();
[step, pos] = binary_search_recursive(0, lst, elm, 0, lst.length - 1)
const t5 = performance.now();
console.log(`Кол-во шагов: ${step}. Позиция элемента " ${elm} " в массиве [${lst}]: ${pos}. Время выполнения: ${t5 - t4} мс.`);