export { };

class Animal {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    move(distance: number) {
        console.log(`${this.name} moved ${distance} meter.`)
    }
}

class Dog extends Animal {
    name: string;
    constructor(name) {
        super(name);

    }
    move(distance = 5) {
        super.move(distance);
    }
}

class Snake extends Animal {
    constructor(name)
    {
        super(name);

    }

    move (distance:number =15)
    {
        super.move(distance);
    }
}


const obj1 = new Snake('Alex the python');
const obj2 = new Dog("Jhon the dog");
obj1.move();