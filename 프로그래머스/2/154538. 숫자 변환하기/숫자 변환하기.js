function solution(x, y, n) {
    let queue = [[x, 0]];
    let visited = new Set();
    visited.add(x);

    let idx = 0;

    while (idx < queue.length) {
        let [cur, count] = queue[idx++];

        if (cur === y) return count;

        let next = [cur + n, cur * 2, cur * 3];

        for (let num of next) {
            if (num <= y && !visited.has(num)) {
                visited.add(num);
                queue.push([num, count + 1]);
            }
        }
    }

    return -1;
}