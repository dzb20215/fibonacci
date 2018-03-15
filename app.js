'use strict';
const memo = new Map();
memo.set(0, 0);
memo.set(1, 1);
//元のでいいじゃん
function fib(n) {
    if(memo.has(n)) {
        return memo.get(n);
    }
    const value = fib(n - 1) + fib(n - 2);
    memo.set(n, value);
    return value;
}
const len = 40;
for (let i = 0; i <= len; i++) {
    console.log(fib(i));
}

/*
//遅かったバージョン
if (n === 0) {
 return 0;
} else if (n === 1) {
 return 1;
} else {
 return fib(n - 1) + fib(n - 2);
}
*/
/*
//n-1、n-2があった時用に改善
let m1 = n - 1;
let m2 = n - 2;
let temp;
if (memo.has(m1)) {
    //値で上書き
    m1 = memo.get(m1);
} else {
    temp = fib(m1);
    memo.set(m1, temp);
    //値で上書き
    m1 = temp;
}
if (memo.has(m2)) {
    //値で上書き
    m2 = memo.get(m2);
} else {
    temp = fib(m2);
    memo.set(m2, temp);
    //値で上書き
    m2 = temp;
}
*/
/*
function fib(n) {
    if (memo.has(n)) {
        return memo.get(n);
    }
    //更に関数化して改善
    const value = get_minus(n - 1) + get_minus(n - 2);
    memo.set(n, value);
    return value;
}
//fibによく似たn-1、n-2用の関数
function get_minus(m_n) {
    let temp;
    if (memo.has(m_n)) {
        return memo.get(m_n);
    }
    temp = fib(m_n);
    memo.set(m_n, temp);
    //値で上書き
    return temp;
}
*/
