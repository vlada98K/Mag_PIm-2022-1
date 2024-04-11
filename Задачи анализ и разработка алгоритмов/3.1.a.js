function linear_search(arr, target){
    let step = 0;
    for (let i = 0; i < arr.length; i++){
        step++;
        if (arr[i] == target){
            return [step, i];
        } 
    };
    return [step, -1];
};

// console.clear();

console.log("Линейный поиск");

let lst = [1,99,2,3,4,56];
let elm = 3;  //N
const t0 = performance.now();
let [step, pos] = linear_search(lst, elm)
const t1 = performance.now();
console.log(`Кол-во шагов: ${step}. Позиция элемента " ${elm} " в массиве [${lst}]: ${pos}. Время выполнения: ${t1 - t0} мс.`);

lst = [1,2,3,4,5,8,9,11];
elm = 8;  //N
const t2 = performance.now();
[step, pos] = linear_search(lst, elm)
const t3 = performance.now();
console.log(`Кол-во шагов: ${step}. Позиция элемента " ${elm} " в массиве [${lst}]: ${pos}. Время выполнения: ${t3 - t2} мс.`);

lst = [1,2,3,4,5,8,9];
elm = 8;  //N
const t4 = performance.now();
[step, pos] = linear_search(lst, elm)
const t5 = performance.now();
console.log(`Кол-во шагов: ${step}. Позиция элемента " ${elm} " в массиве [${lst}]: ${pos}. Время выполнения: ${t5 - t4} мс.`);