export {};
class Employee{

    constructor(private x?:number,private y?: number)
    {}
    //property
    get X()
    {
        return this.x;
    }
    //propertys
    set X(value)
    {
        if(value<0)
        {
            throw new Error('value can not be 0')
        }
        this.x = value;
    }
}

let p = new Employee();
let X= p.X;
p.X = 15;
console.log(p.X);