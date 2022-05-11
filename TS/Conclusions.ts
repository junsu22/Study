// function superPrint<V>(a: V[]){
//     return a[0]
// }
// const a = superPrint([1,2,3,4]) //== const a = superPrint<number>([1,2,3,4])
// const b = superPrint([true, false, true])
// const c = superPrint(["a","b","c"])
// const d = superPrint([1,2,true, false, "hello"])

// 재사용
type  Player<E> = {
    name:string
    extraInfo:E
}
type JunsuExtra = {
    favColor:string
}
type JunsuPlayer = Player<JunsuExtra>

const junsu : JunsuPlayer= {
    name: "junsu",
    extraInfo: {
        favColor: "Black"
    }
}
const genie : Player<null> = {
    name: "genie",
    extraInfo: null
}

// ex2
type A = Array<number>
let a:A = [1,2,3,4]

// ex3 
function printAllNumbers(arr: Array<number>){

}

