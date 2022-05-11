abstract class User {
    constructor(

        protected firstName: string, // private js  에선 보이지 않는다.
        protected lastName: string,
        protected nlckname:string
        ){}
        abstract getNickName():void

        getFullName(){ //앞에 private 을 붙이게 되면 아래 jungetFullName() 에서 에러 발생
            return`${this.firstName} ${this.lastName}`
        }
}

class Player extends User{
    getNickName(){
        
    }
}

const junsu = new Player("junsu","las","준수")


junsu.getFullName()