class Employee{
    employeeName:string;
    constructor(name:string)
    {
        this.employeeName = name;
    }

    greet()
    {
        console.log(`Hello ${this.employeeName}`);
    }
}

let emp = new Employee("Nayan");
emp.greet();

//inheritance
 class Manager extends Employee{
     constructor(managerName:string)
     {
         super(managerName); //base class constructor initialization
     }
     delegate()
     {
         console.log(`Manager delegating work`);
     }
 }

 let m = new Manager("Bruce");
 m.delegate();
 m.employeeName;
 m.greet();