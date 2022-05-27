class Vehicle {//Vehicle 의 클래스 범위는
    constructor(name, wheel) {
        this.name = name
        this.wheel = wheel
    }
}       //Vehicle 의 클래스 범위는 여기까지 

const myVehicle = new Vehicle('운송수단', 2)
console.log(myVehicle)

class Bicycle extends Vehicle { // Vehicle 클래스의 로직을 가져와 추가적인 내용 일부만 작성(확장)
    constructor(name,wheel){
        super(name, wheel)
    }
}

const myBicycle = new Bicycle('삼천리' , 2) // 추가 (2)
const daughtersBicycle = new Bicycle('세발', 3)
console.log(myBicycle)
console.log(daughtersBicycle)


class Car extends Vehicle {
    constructor(name, wheel, license){ // Vehicle 클래스의 로직을 가져와 추가적인 내용 일부만 작성(확장)
        super(name, wheel)
        this.license = license
    }
}
const myCar = new Car('벤츠', 4, true) //constructor()매개변수에 받는다.
const daughtersCar = new daughtersCar('포르쉐', 4, false)

console.log(myCar)
console.log(daughtersCar)
