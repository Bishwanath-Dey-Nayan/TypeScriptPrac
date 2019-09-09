export {};
//function
function Add(num1: number,num2?: number): number{
    if(num2)
    {
        return num1+num2;
    }
    return num1;
}
Add(5); //return 5
Add(10,5); //return 15

