// readonly
interface Person8 {
    name: string;
    age?: number;
    readonly gender: string;
}

const p81: Person8 = {
    name: "Junsu",
    gender: "male",
};


p81.gender = "female";// readonly를 사용하면 클래스에서도 readonly를 받아 사용할수 있다.


