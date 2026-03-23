function solution(people, limit) {
    let answer = 0;
    
    // 1. 몸무게순으로 오름차순 정렬
    people.sort((a, b) => a - b);
    
    let left = 0;
    let right = people.length - 1;
    
    // 2. 투 포인터로 양 끝에서 좁혀오기
    while (left <= right) {
        // 가장 가벼운 사람 + 가장 무거운 사람 <= 제한
        if (people[left] + people[right] <= limit) {
            left++; // 가벼운 사람도 같이 태움
        }
        
        // 무거운 사람은 무조건 배에 탐 (혼자든 둘이든)
        right--;
        answer++;
    }
    
    return answer;
}