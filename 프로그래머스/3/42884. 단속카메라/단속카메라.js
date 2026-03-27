function solution(routes) {
    // 1. 진출 지점 기준 정렬
    routes.sort((a, b) => a[1] - b[1]);

    let camera = -Infinity;
    let count = 0;

    for (let [start, end] of routes) {
        // 2. 현재 카메라로 못 찍는 경우
        if (start > camera) {
            count++;
            camera = end; // 3. 카메라 설치
        }
    }

    return count;
}