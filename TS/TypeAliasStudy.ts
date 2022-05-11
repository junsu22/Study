type Age = number;  //Alias, 앞글자는 대문자
type Name = string;
type Player = {
    name:Name,
    age?:Age
}


// const junsu: Player ={
//     name:"junsu"
// }

// const junsu2 : Player ={
//     name:"junsu2",
//     age:10
// }
// (:type Argument)
// Arrow function(same)
// const playerMaker =  (name:string) : Player => ({name})  //Player type return
// const junsu = playerMaker("junsu")
// junsu.age = 8


function playerMaker(name:string): Player {//object rerurn function
    return {    //player type return
        name
    }
}