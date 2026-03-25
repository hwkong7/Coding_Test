class MaxHeap {
    constructor() {
        this.heap = [];
    }

    push(value) {
        this.heap.push(value);
        this.bubbleUp();
    }

    pop() {
        if (this.heap.length === 1) return this.heap.pop();

        const top = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown();
        return top;
    }

    bubbleUp() {
        let idx = this.heap.length - 1;
        const element = this.heap[idx];

        while (idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2);
            let parent = this.heap[parentIdx];

            if (parent >= element) break;

            this.heap[idx] = parent;
            this.heap[parentIdx] = element;
            idx = parentIdx;
        }
    }

    bubbleDown() {
        let idx = 0;
        const length = this.heap.length;
        const element = this.heap[0];

        while (true) {
            let leftIdx = idx * 2 + 1;
            let rightIdx = idx * 2 + 2;
            let swap = null;

            if (leftIdx < length) {
                if (this.heap[leftIdx] > element) {
                    swap = leftIdx;
                }
            }

            if (rightIdx < length) {
                if (
                    (swap === null && this.heap[rightIdx] > element) ||
                    (swap !== null && this.heap[rightIdx] > this.heap[leftIdx])
                ) {
                    swap = rightIdx;
                }
            }

            if (swap === null) break;

            this.heap[idx] = this.heap[swap];
            this.heap[swap] = element;
            idx = swap;
        }
    }
}

function solution(n, works) {
    let total = works.reduce((a, b) => a + b, 0);
    if (total <= n) return 0;

    const heap = new MaxHeap();

    for (let work of works) {
        heap.push(work);
    }

    for (let i = 0; i < n; i++) {
        let max = heap.pop();
        if (max === 0) break;
        heap.push(max - 1);
    }

    return heap.heap.reduce((sum, work) => sum + work * work, 0);
}