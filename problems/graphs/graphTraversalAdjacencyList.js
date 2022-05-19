class Graph {
    #nodes;
    constructor() {
        this.#nodes = new Map();
    }
    addNode(node) {
        if (!this.#nodes.get(node)) {
            this.#nodes.set(node, []);
        }
    }
    addEdge(source, destination) {
        if (!this.#nodes.get(source) || !this.#nodes.get(destination)) {
            return;
        }
        if (!this.#nodes.get(source).includes(destination)) {
            this.#nodes.get(source).push(destination);
        }
        if (!this.#nodes.get(destination).includes(source)) {
            this.#nodes.get(destination).push(source);
        }
    }
    printGraph() {
        console.log(this.#nodes);
    }
    bfsTraversal(s, d) {
        const queue = [s];
        const visited = {};
        while (queue.length) {
            const node = queue.shift();
            if (node === d) {
                return true;
            }
            const neighbors = this.#nodes.get(node);
            neighbors.forEach(v => {
                if (!visited[v]) {
                    queue.push(v);
                }
            })
            visited[node] = true;
        }
        return false;
    }
    dfsTraversalIterative(s,d){
        const stack = [s],
            visited = {};

        while(stack.length){
           const top= stack.pop(),
                neighbors = this.#nodes.get(top);
            if(!visited[top]){
                console.log(top);
                visited[top] = true;
            }
            if(top === d){
                return true;
            }
            neighbors.forEach(v=>{
                if(!visited[v]){
                    stack.push(v);
                }
            });
        }
        return false;
    }
    dfsTraversal(s, d, visited = {}) {
        if (visited[s]) {
            return false;
        }
        if (s === d) {
            return true;
        }
        visited[s] = true;
        const neighbors = this.#nodes.get(s);

        for(let i =0; i< neighbors.length; i++){
            if (this.dfsTraversal(neighbors[i], d, visited)) {
                return true;
            }
        };
        return false;
    }
}


/**
 *  P <-> S
 * |  \  
 * N <-> A
 */
const graph = new Graph();
graph.addNode('P');
graph.addNode('S');
graph.addNode('N');
graph.addNode('A');
graph.addNode('X');

graph.addEdge('P', 'S');
graph.addEdge('P', 'N');
graph.addEdge('P', 'A');
graph.addEdge('N', 'A');

graph.printGraph();
const dfs = graph.dfsTraversal('P', 'A');
console.log('DFS::isRoutePresent for S->P', dfs);

const bfs = graph.bfsTraversal('P', 'A');
console.log('BFS::isRoutePresent for S->P', bfs);

graph.dfsTraversalIterative('P', 'A');