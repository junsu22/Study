type Words = {
    [key:string]: string
}
class Dict{
    private words : Words //initallize
    constructor(){  //초기화
        this.words = {}
    }
    //단어 추가 메소드 
    add(word:Word){
        if(this.words[word.term]=== undefined)
        this.words[word.term] =  word.def;
    }
}

{
}

class Word {
    constructor(
        public term: string,
        public def: string
        ){}
}
const kimchi = new Word ("kimchi", "한국의 음식");
const dict =  new Dict()