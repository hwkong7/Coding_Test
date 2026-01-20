function solution(num_list) {
    let product = 1; // 곱
    let sum = 0;     // 합

    for (let i = 0; i < num_list.length; i++) {
        product *= num_list[i];
        sum += num_list[i];
    }

    return product < sum * sum ? 1 : 0;
}