import DictUsers from 'users.json';
import FullLodash from 'lodash.js';

function FuncTask2(DictOfUsers) {
    const SelectedUsers = DictOfUsers['clients'];

    const ResultOfUsers = SelectedUsers.filter(User => {
        return User['address']['city'].toLowerCase() === 'кунгур';
    });

    return FullLodash.orderBy(ResultOfUsers, ['gender', 'age', 'name'], ['asc', 'desc', 'asc']);
}

const Result = FuncTask2(DictUsers);
console.log(Result);
