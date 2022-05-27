abstract class AbstractPerson { //<-abstract class
    protected _name: string = 'junsu'

    abstract setName(name: string): void;

}

// new AbstractPerson()

class Person extends AbstractPerson {
    setName(name: string): void {
        this._name = name;
    }
}
const p = new Person();
p.setName();