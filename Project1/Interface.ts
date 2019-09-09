export {};

interface Person{
    firstName:string,
    lastName:string
}

function fullName(person:Person)
{
    console.log(`FullName is:${person.firstName}${person.lastName}`);
    return `FullName is:${person.firstName}${person.lastName}`
}

let p ={
    firstName:'Nayan',
    lastName:'dey'
}

fullName(p);
