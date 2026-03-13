const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

let T = Number(input[0]);
let idx = 1;

// 점이 원 안에 있는지 확인
function inside(x, y, cx, cy, r) {
    return (x - cx) ** 2 + (y - cy) ** 2 < r ** 2;
}

for (let t = 0; t < T; t++) {

    let [x1, y1, x2, y2] = input[idx++].split(" ").map(Number);
    let n = Number(input[idx++]);

    let count = 0;

    for (let i = 0; i < n; i++) {

        let [cx, cy, r] = input[idx++].split(" ").map(Number);

        let startInside = inside(x1, y1, cx, cy, r);
        let endInside = inside(x2, y2, cx, cy, r);

        if (startInside !== endInside) {
            count++;
        }
    }

    console.log(count);
}