function solution(n, roads, sources, destination) {

    // 1️⃣ 그래프 만들기
    let graph = [];

    for (let i = 0; i <= n; i++) {
        graph.push([]);
    }

    for (let road of roads) {
        let a = road[0];
        let b = road[1];

        graph[a].push(b);
        graph[b].push(a);
    }


    // 2️⃣ 거리 배열 만들기
    let dist = [];

    for (let i = 0; i <= n; i++) {
        dist.push(-1); // 아직 방문 안함
    }


    // 3️⃣ BFS 준비
    let queue = [];

    queue.push(destination); // 시작점
    dist[destination] = 0;   // 자기 자신 거리


    // 4️⃣ BFS 탐색
    while (queue.length > 0) {

        let cur = queue.shift();

        for (let next of graph[cur]) {

            if (dist[next] === -1) { // 방문 안했으면

                dist[next] = dist[cur] + 1; // 거리 계산
                queue.push(next);          // 다음 탐색

            }

        }

    }


    // 5️⃣ 결과 만들기
    let answer = [];

    for (let s of sources) {
        answer.push(dist[s]);
    }

    return answer;
}