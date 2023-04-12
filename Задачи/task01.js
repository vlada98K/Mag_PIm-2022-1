import DictUsers from 'users.json'
import FullLodash from 'lodash.js'

function FuncTask1(DictOfUsers) {
    const SelectedUsers = DictOfUsers.filter(
        User => Number(User.address['geo']['lat']) < 0);

    const ResultDict = [];
    SelectedUsers.forEach(user => {
        ResultDict.push(
            { "username": user.username,"city": user.address.city});
    });

    return FullLodash.orderBy(ResultDict, 'city', 'desc');
}

const Result = FuncTask1(DictUsers)
console.log(Result);
