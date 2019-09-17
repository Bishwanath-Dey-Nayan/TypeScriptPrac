/// <reference path="Circle.ts" />
/// <reference path="IShape.ts" />
/// <reference path = "Triangle.ts" />

function drawAllShapes(shape:Drawing.Ishape) { 
    shape.draw(); 
 } 

 
 drawAllShapes(new Drawing.Circle());
 drawAllShapes(new Drawing.Triangle());