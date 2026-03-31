function solution(n, stations, w) {
    let answer = 0;
    let position = 1; // 현재 검사 위치
    const range = 2 * w + 1;

    for (let station of stations) {
        let left = station - w;

        // 빈 구간이 있다면
        if (position < left) {
            let gap = left - position;
            answer += Math.ceil(gap / range);
        }

        // 현재 위치를 커버된 끝으로 이동
        position = station + w + 1;
    }

    // 마지막 기지국 이후 남은 구간 처리
    if (position <= n) {
        let gap = n - position + 1;
        answer += Math.ceil(gap / range);
    }

    return answer;
}