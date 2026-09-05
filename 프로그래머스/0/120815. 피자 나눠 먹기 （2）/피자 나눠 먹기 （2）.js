function solution(n) {
    var pizza = 1;//1판부터 시작
    
    // (6*pizza)가 n으로 나누어 떨어지지 않으면 계속 1판씩 늘림
    while ((6 * pizza) % n !== 0) {
        pizza++;
    }
    return pizza;
}