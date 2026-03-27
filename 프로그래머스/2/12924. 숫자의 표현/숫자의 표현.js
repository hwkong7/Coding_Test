function solution(n) {
    let count = 0;

    for (let k = 1; k <= n; k++) {
        if ((2 * n) % k === 0) {
            let a = (2 * n / k - k + 1) / 2;

            if (a > 0 && Number.isInteger(a)) {
                count++;
            }
        }
    }

    return count;
}