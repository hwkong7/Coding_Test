function solution(numbers) {
    let sum = 0;
    
    // 1. 배열의 숫자를 모두 더하기
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    
    // 2. 총합을 배열의 길이(개수)로 나누기
    return sum / numbers.length;
}