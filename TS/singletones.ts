class ClassName {
    private static instance: ClassName | null = null;
    public static getInstace() : ClassName {
        // ClassName 으로부터 만든 object 가 있으면 그걸 리턴
        // ClassName 으로부터 만든 object 가 없으면 만들어서 리턴

        if (ClassName.instance === null) {
            ClassName.instance = new ClassName();
        }
        return ClassName.instance;
    }

    private constructor() {}

}

const a = ClassName.getInstace;
const b = ClassName.getInstace;

console.log(a===b);
