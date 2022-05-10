// 다형성, 제네릭, 클래스, 인터페이스 모두 합쳐보자

// 제네릭 =>클래스 =>인터페이스로 보내는 순서
interface SStorage<T> {
    [key: string]: T    //key가 제한되지 않은 오브젝트를 정의하게 해줌. 여기에 T가 위치 할 것이다 .알려주기
}

class LocalStorage<T> { //제네릭 : 다른 타입에게 물려주는 것이 가능하다. 클래스 이름에 들어오지만, 같은 제네릭을 인터페이스로 보낸다.

    private storage: SStorage<T> = {}//interface 는 이곳에서 제네릭을 받는다.
    //set 메소드 추가 
    set(key: string, value: T) {
        this.storage[key] = value;

    }
    // key 는 string 형
    // API 디자인 구현
    remove(key: string) {
        delete this.storage[key]
    }
    //remove는 string 형식의 key를 받아 이걸 LocalStorage 로 부터 지울 것 이다. 
    get(key: string): T {
        // key를 받는 get 이 필요. 이것은 T를 리턴 할 것.    
        return this.storage[key]

    }
    clear() {
        this.storage = {}
    }
}
//class 를 사용하고 싶다면 이렇게 작성.
const stringsStorage = new LocalStorage<string>()

stringsStorage.get("keyeee")

// boolean storage
const booleanStorage = new LocalStorage<boolean>;
booleanStorage.get("xxxx")
booleanStorage.set("hello", true)   //<-add set type boolean
