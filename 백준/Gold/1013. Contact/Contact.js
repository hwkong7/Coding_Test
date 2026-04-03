const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const T = Number(input[0]);

for (let i = 1; i <= T; i++) {
  const s = input[i].trim();
  const regex = /^(100+1+|01)+$/;
  console.log(regex.test(s) ? "YES" : "NO");
}