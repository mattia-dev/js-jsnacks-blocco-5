var triangle = {
    base: 8,
    height: 6
};

var hypotenuse = Math.sqrt(Math.pow(triangle.base, 2) + Math.pow(triangle.height, 2));

var perimeter = hypotenuse + triangle.base + triangle.height;

var area = (triangle.base * triangle.height)/2;

console.log(perimeter, area);