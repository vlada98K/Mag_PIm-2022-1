function interpolation_search(arr, target){
    let left = 0;
    let right = arr.length - 1;
    let step = 0;
    while (left <= right && arr[left] <= target <= arr[right]){
        step++;
        let pos = left + Math.floor((target - arr[left]) * (right - left) / (arr[right] - arr[left]));
        if (arr[pos] == target){
            return [step, pos];
        };
        if (arr[pos] < target){
            left = pos + 1;
        } else {
            right = pos - 1;
        };
    };
    return [step, -1];
};


// console.clear();

console.log("Интерполяционный поиск");

let lst = [1,99,2,3,4,56];
let elm = 3;  //N
const t0 = performance.now();
let [step, pos] = interpolation_search(lst, elm);
const t1 = performance.now();
console.log(`Кол-во шагов: ${step}. Позиция элемента " ${elm} " в массиве [${lst}]: ${pos}. Время выполнения: ${t1 - t0} мс.`);

lst = [1,2,3,4,5,8,9,11];
elm = 8;  //N
const t2 = performance.now();
[step, pos] = interpolation_search(lst, elm);
const t3 = performance.now();
console.log(`Кол-во шагов: ${step}. Позиция элемента " ${elm} " в массиве [${lst}]: ${pos}. Время выполнения: ${t3 - t2} мс.`);

lst = [1,2,3,4,5,8,9];
elm = 8;  //N
const t4 = performance.now();
[step, pos] = interpolation_search(lst, elm);
const t5 = performance.now();
console.log(`Кол-во шагов: ${step}. Позиция элемента " ${elm} " в массиве [${lst}]: ${pos}. Время выполнения: ${t5 - t4} мс.`);