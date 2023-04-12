import DictUsers from 'users.json';
import FullLodash from 'lodash.js';

function FuncTask4(colors) {
    const ListColorAndKeys = [];
    for (let i of colors) {
        const [CurrentColor] = Object.entries(i);
        ListColorAndKeys.push({
            "colour" : CurrentColor[0], "rgb" : CurrentColor[1].slice(0, 3) });
    }

    return FullLodash.sortBy(colorsWithNewKeys, 'color');
}

const Result = FuncTask4(DictUsers);
console.log(Result);
