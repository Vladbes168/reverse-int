 module.exports = function reverse (n) {
    return Number(n.toString().split('').filter((e) => e !== '-').reverse().join(''))
}


// reverse(123)// 321
// reverse(233); // 332
// reverse(535); // 535
// reverse(95034); // 43059


// console.log(reverse(-5243));
