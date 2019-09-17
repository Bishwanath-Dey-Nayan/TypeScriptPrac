/// <reference path="IShape.ts" />
namespace Drawing{
    export class Triangle implements Ishape{
        public draw()
        {
            console.log("this is a triangle");
        }
    }
}