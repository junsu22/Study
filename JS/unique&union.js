import _ from 'lodash' 
const usersA = [
    { userId : '1', name : 'JUNSU'},
    { userId : '2', name : 'Neo'}
]

const usersB = [
    { userId : '1', name : 'JUNSU'},
    { userID : '3', name : 'Amy'}
]

const usersC = usersA.concat(usersB)
console.log('concat',usersC)
console.log('uniqBy', _.uniqBy(usersC, 'userId'))
//unique 배열데이터가 하나일때 사용한다,.
//union 여러개일때 사용한다.

const usersD = _.unionBy(usersA, usersB, 'userId')
console.log('unionBy',usersD)