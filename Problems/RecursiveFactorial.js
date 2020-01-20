function recFactorial(num) {
    if (num === 1) return 1;
    return num * recFactorial(num - 1);
}