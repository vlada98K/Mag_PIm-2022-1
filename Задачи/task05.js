const {colors, argb} = require('data');
import FullLodash from 'lodash.js';

function rgbToHex([r, g, b]) {
    function colorToHex(color) {
        return color.toString(16).length == 1 ? '0' + color.toString(16) : color.toString(16);
    }

    return `#${colorToHex(r)}${colorToHex(g)}${colorToHex(b)}`
}

function FuncTask5(colors, argb) {
    const hexes = argb.map(rgb => rgbToHex(rgb));
    const consolidatedArray = colors.map((color, i) => {
        return {"color" : color, "hex_name" : hexes[i]}
    });

    return FullLodash.sortBy(consolidatedArray, 'color');
}

const Result = FuncTask5(colors, argb);
console.log(Result);
