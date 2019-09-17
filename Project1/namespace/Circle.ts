/// <reference path="IShape.ts" /> 
namespace Drawing{
    export class Circle implements Ishape{
            public draw()
            {
                console.log('draw');
            }
    }
}