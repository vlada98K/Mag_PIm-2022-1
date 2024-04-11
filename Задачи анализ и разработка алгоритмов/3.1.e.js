class Node {
    constructor(value, index) {
      this.value = value;
      this.index = index;
      this.left = null;
      this.right = null;
    }
  }
  
  // Определение класса бинарного дерева
  class BinarySearchTree {
    constructor() {
      this.root = null;
    }
  
    // Метод для вставки элемента в дерево
    insert(value, index) {
      const newNode = new Node(value, index);
      if (!this.root) {
        this.root = newNode;
      } else {
        this._insertRecursively(this.root, newNode);
      }
    }
  
    _insertRecursively(node, newNode) {
      if (newNode.value < node.value) {
        if (!node.left) {
          node.left = newNode;
        } else {
          this._insertRecursively(node.left, newNode);
        }
      } else {
        if (!node.right) {
          node.right = newNode;
        } else {
          this._insertRecursively(node.right, newNode);
        }
      }
    }
  
    // Метод для поиска элемента в дереве
    search(value) {
      return this._searchRecursively(this.root, value);
    }
  
    _searchRecursively(node, value, step = 0) {
      if (!node) {
        return { index: -1, steps: step }; // Возвращаем -1, если элемент не найден
      }
  
      if (node.value === value) {
        return { index: node.index, steps: step }; // Возвращаем индекс элемента, если найден и количество шагов
      }
  
      if (value < node.value) {
        return this._searchRecursively(node.left, value, step + 1);
      } else {
        return this._searchRecursively(node.right, value, step + 1);
      }
    }
  }
  
// Создание бинарного дерева и вставка элементов с индексами
const tree = new BinarySearchTree();
let lst = [1, 99, 2, 3, 4, 56];
let elm = 3;
lst.forEach((element, index) => {
    tree.insert(element, index);
});
// Поиск элемента и вывод индекса
const t0 = performance.now();
let pos = tree.search(elm);
const t1 = performance.now();
console.log(`Количество шагов: ${pos.steps}. Позиция элемента " ${elm} " в массиве [${lst}]: ${pos.index}. Время выполнения: ${t1 - t0} мс.`);


lst = [1,2,3,4,5,8,9,11];
elm = 8;
lst.forEach((element, index) => {
    tree.insert(element, index);
});
const t2 = performance.now();
pos = tree.search(elm);
const t3 = performance.now();
console.log(`Количество шагов: ${pos.steps}. Позиция элемента " ${elm} " в массиве [${lst}]: ${pos.index}. Время выполнения: ${t3 - t2} мс.`);


lst = [1,2,3,4,5,8,9];
elm = 8;
lst.forEach((element, index) => {
    tree.insert(element, index);
});
const t4 = performance.now();
pos = tree.search(elm);
const t5 = performance.now();
console.log(`Количество шагов: ${pos.steps}. Позиция элемента " ${elm} " в массиве [${lst}]: ${pos.index}. Время выполнения: ${t5 - t4} мс.`);