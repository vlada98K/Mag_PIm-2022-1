import DictUsers from 'users.json';

function FuncTask3(colors) {
    const ListOfColors = [];
    for (let i of colors) {
        if (Object.keys(i)[0].length < 6) {
            ListOfColors.push(Object.keys(i)[0]);
        }
    }

    return ListOfColors.sort();
}
const Result = FuncTask3(DictUsers);
console.log(Result);
