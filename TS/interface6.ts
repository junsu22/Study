// 인터페이스끼리 상속하는 방법
interface IPerson2 {
    name: string;
    age? : number;
}

interface IKorean extends IPerson2 {
    city:string;

}

const K : IKorean = {
    name: "김준수",
    city: "대전",
};