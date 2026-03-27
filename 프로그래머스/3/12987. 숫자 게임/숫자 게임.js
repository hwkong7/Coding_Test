function solution(A, B) {
    A.sort((a,b) => a-b); // A를 오름차순으로 정렬
    B.sort((a,b) => a-b); // B를 오름차순으로 정렬
    let answer = 0;
    let i = 0, j = 0;
    while (i < A.length && j < B.length) {
        if (B[j] > A[i]) {
            answer++;
            i++;
            j++;
        }
        else if (B[j] <= A[i]) {
            j++;
        }
    }
    return answer;
}