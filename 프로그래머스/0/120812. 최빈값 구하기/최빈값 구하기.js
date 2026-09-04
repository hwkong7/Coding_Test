function solution(array) {
    // 1. 오름차순 정렬 (같은 숫자끼리 모아줌)
    array.sort((a, b) => a - b);
    
    let maxCount = 0;      // 가장 많이 나온 횟수
    let mode = -1;         // 최빈값
    let currentCount = 0;  // 현재 숫자의 등장 횟수
    let isDup = false;     // 최빈값이 여러 개인지 여부
    
    for (let i = 0; i < array.length; i++) {
        currentCount++;
        
        // 다음 숫자와 다르거나 마지막 원소일 때 횟수를 비교함
        if (i === array.length - 1 || array[i] !== array[i + 1]) {
            if (currentCount > maxCount) {
                maxCount = currentCount;
                mode = array[i];
                isDup = false;
            } else if (currentCount === maxCount) {
                isDup = true; // 최빈값 횟수가 같은 게 또 있음
            }
            currentCount = 0; // 다음 숫자를 위해 리셋
        }
    }
    
    return isDup ? -1 : mode;
}