function solution(plans) {
    
    // HH:MM -> 분으로 변환
    const toMin = (time) => {
        const [h, m] = time.split(":").map(Number);
        return h * 60 + m;
    };
    
    // 시작시간 기준 정렬
    plans = plans
        .map(p => [p[0], toMin(p[1]), Number(p[2])])
        .sort((a, b) => a[1] - b[1]);
    
    const stack = [];
    const result = [];
    
    for (let i = 0; i < plans.length; i++) {
        
        let [name, start, playtime] = plans[i];
        
        // 마지막 과제
        if (i === plans.length - 1) {
            result.push(name);
            
            // stack 남은거 처리
            while (stack.length) {
                result.push(stack.pop()[0]);
            }
            break;
        }
        
        let nextStart = plans[i + 1][1];
        let time = nextStart - start;
        
        // 현재 과제 다 못함
        if (playtime > time) {
            stack.push([name, playtime - time]);
        } 
        // 현재 과제 끝냄
        else {
            result.push(name);
            let remain = time - playtime;
            
            // 남은 시간으로 stack 처리
            while (remain > 0 && stack.length) {
                let [prevName, prevTime] = stack.pop();
                
                if (prevTime <= remain) {
                    remain -= prevTime;
                    result.push(prevName);
                } else {
                    stack.push([prevName, prevTime - remain]);
                    remain = 0;
                }
            }
        }
    }
    
    return result;
}