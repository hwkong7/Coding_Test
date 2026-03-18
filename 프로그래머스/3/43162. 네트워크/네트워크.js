function solution(n, computers) {
    let visited = Array(n).fill(false);
    let count = 0;

    function dfs(i) {
        visited[i] = true;

        for (let j = 0; j < n; j++) {
            if (computers[i][j] === 1 && !visited[j]) {
                dfs(j);
            }
        }
    }

    for (let i = 0; i < n; i++) {
        if (!visited[i]) {
            dfs(i);      // 하나의 네트워크 탐색
            count++;     // 네트워크 개수 증가
        }
    }

    return count;
}