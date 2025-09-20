// rectangle.ts
function rectangleInfo(width, height) {
    var perimeter = 2 * (width + height);
    var area = width * height;
    return { perimeter: perimeter, area: area };
}
var result = rectangleInfo(10, 20);
console.log("Chu vi: ".concat(result.perimeter));
console.log("Di\u1EC7n t\u00EDch: ".concat(result.area));
