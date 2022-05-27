interface IPerson1 {
    name: string;
    age?: number;
    hello():void;

}
class person implements IPerson1 {
    name: string;
    age?: number|undefined;

    constructor(name: string){
        this.name = name;

    }

    hello(): void {
    console.log(`안녕하세요 ${this.name} 입니다.`);
    }
}   
    const  Person: IPerson1 = new person('Junsu');
