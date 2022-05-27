// <function>
// 기술적으로 interface 와 type alias가 다른지 중점 
type alias
type EatType = (food: string) =>void;

// interface 
interface IEat {
    (food: string): void;

}


// array
type PersonList = string[];

// interface
interface IPersonList {
    [index: number]: string;     //인덱서블 타입
}

// <intersection>
interface ErrorHandling {
    success:boolean;
    error?: { message: string };
}
interface ArtistsData {
    artists:    { name: string }[];
}

// type alias
type ArtistsResponseType = ArtistsData & ErrorHandling;

// interface
interface IArtistsResponse extends ArtistsData, ErrorHandling {}
let art:ArtistsResponseType;
let iar:IArtistsResponse;

// <union types>
interface Bird {
    fly(): void;
    layEggs(): void;
}

interface Fish {
    swim(): void;
    layEggs(): void;
}

type PetType = Bird | Fish; //<---union in-line 으로 적은 것

// interface IPet extends PetType {} ---- Error
// class Pet implements PetType {} ----Error

interface MergingInterface {
    a:string;
}

interface MergingInterface {
    b: string;
}

let mi: MergingInterface;
// mi. 찍으면 a,b 가나오는데 이것이 merging


type MergingType = {
    a: string;
};

type MergingType = {
    b: string;
}
















