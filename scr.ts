// rectangle.ts
function rectangleInfo(width: number, height: number): { perimeter: number; area: number } {
    const perimeter = 2 * (width + height);
    const area = width * height;
    return { perimeter, area };
}

const result = rectangleInfo(5, 10);
console.log(`Chu vi: ${result.perimeter}`);
console.log(`Diện tích: ${result.area}`);
g