const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const T = Number(input[0]);

// 0과 1 호출 횟수 저장
let zero = Array(41).fill(0);
let one = Array(41).fill(0);

// 초기값
zero[0] = 1;
one[0] = 0;

zero[1] = 0;
one[1] = 1;

// DP 계산
for (let i = 2; i <= 40; i++) {
    zero[i] = zero[i - 1] + zero[i - 2];
    one[i] = one[i - 1] + one[i - 2];
}

let result = [];

for (let i = 1; i <= T; i++) {
    const n = Number(input[i]);
    result.push(zero[n] + " " + one[n]);
}

console.log(result.join("\n"));