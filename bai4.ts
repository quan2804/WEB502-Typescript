// Hàm kiểm tra số nguyên tố
function isPrime(n: number): boolean {
    if (n <= 1) return false;
    if (n === 2) return true;
    if (n % 2 === 0) return false;

    for (let i = 3; i <= Math.sqrt(n); i += 2) {
        if (n % i === 0) return false;
    }
    return true;
}


console.log(isPrime(2));   // true
console.log(isPrime(17));  // true
console.log(isPrime(18));  // false
