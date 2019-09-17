export {};

interface myfunction{
    (source:string,substring:string):boolean;
}

let fun:myfunction;

fun =function (src: string,sub:string){
let result = src.search(sub);
 return result>-1;
}