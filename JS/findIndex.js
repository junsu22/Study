import _, { findIndex } from 'lodash'

const users = [
    { userId :'1', name : 'JUNSU'},
    { userId :'2', name : 'Neo'},
    { userId :'3', name : 'Amy'},
    { userId :'4', name : 'Evan'},
    { userId :'5', name : 'Lewis'}
]


const foundUser = _.find(users, { name: 'Amy'})
const foundUserIndex = _>findIndex(users,{name:'Amy'})
console.log(foundUser)
console.log(foundUserIndex)

_.remove.apply(users, {name: 'JUNSU' })
console.log(users)