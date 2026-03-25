function solution(m, n, puddles) {
    const MOD = 1000000007;
    
    // 1. 2차원 배열을 미리 만들고 0으로 초기화
    // (가로 m, 세로 n이므로 dp[n+1][m+1] 크기가 적당합니다)
    const dp = Array.from({ length: n + 1 }, () => new Int32Array(m + 1));

    // 2. 웅덩이 위치를 미리 DP 테이블에 마킹 (-1)
    // 반복문 밖에서 한 번만 수행하여 조회 속도를 높입니다.
    for (const [px, py] of puddles) {
        dp[py][px] = -1;
    }

    dp[1][1] = 1;

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= m; j++) {
            // 시작점은 이미 1이므로 건너뜁니다.
            if (i === 1 && j === 1) continue;
            
            // 웅덩이라면 0으로 바꾸고 다음 칸으로 이동
            if (dp[i][j] === -1) {
                dp[i][j] = 0;
                continue;
            }

            // 위쪽(i-1)과 왼쪽(j-1) 값을 더함
            // 이전에 계산된 값을 그대로 쓰므로 매우 빠릅니다.
            dp[i][j] = (dp[i - 1][j] + dp[i][j - 1]) % MOD;
        }
    }

    return dp[n][m];
}