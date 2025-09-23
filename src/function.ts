
function getSum(): number {
    let a: number = 5;
    let b: number = 10;
    return a + b;
}

const getSumArrow = (): number => {
    let a: number = 7;
    let b: number = 8;
    return a + b;
};

console.log("Function thường:", getSum());
console.log("Arrow function:", getSumArrow());
// Default value
const sumDefault = (a: number, b: number = 5): number => a + b;

const sumOptional = (a: number, b?: number): number => {
    return b ? a + b : a;
};


const sumRest = (...numbers: number[]): number => {
    return numbers.reduce((total, num) => total + num, 0);
};

console.log("Sum Default:", sumDefault(10));
console.log("Sum Optional (1 tham số):", sumOptional(10));
console.log("Sum Optional (2 tham số):", sumOptional(10, 20));
console.log("Sum Rest:", sumRest(1, 2, 3, 4, 5));
const arr1: number[] = [1, 2, 3];
const arr2: number[] = [4, 5, 6];

const mergedArray: number[] = [...arr1, ...arr2];

console.log("Mảng gộp:", mergedArray);
