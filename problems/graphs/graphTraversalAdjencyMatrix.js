
function create2DArray(rows){
    let arr =[];

    for(let i=0; i<rows;i++){
        arr[i] = []
    }
    return arr;
}

class Graph {
    #adjMatrix;
    constructor(numOfNodes){
        this.#adjMatrix = create2DArray(numOfNodes);
    }
    addEdge(source, destination) {
        this.#adjMatrix[source][destination] = true;
        this.#adjMatrix[destination][source] = true;
    }
    getNeighbors(node){
        const neighbors=[];
        this.#adjMatrix[node].forEach((item, index)=>{
            if(item){
                neighbors.push(index);
            }
        });
        return neighbors;
    }
    dfs(source, destination){
        const stack =[source],
        visited ={};

        while(stack.length){
            const top = stack.pop();

            if(top === destination){
                return true;
            }
            const neighbors= this.getNeighbors(top);
            neighbors.forEach(v=>{
                if(!visited[v]){
                    stack.push(v);
                }
            });
            visited[top] = true;
        }
        return false
    }
    bfs(source, destination){
        const queue =[source],
            visited ={};

        while(queue.length){
            const top = queue.shift();
            if(top === destination){
                return true;
            }
            const neighbors= this.getNeighbors(top);

            neighbors.forEach(v=>{
                if(!visited[v]){
                    queue.push(v);
                }
            });
            visited[top] = true;
        }
        return false;
    }
    printGraph() {
        console.log(this.#adjMatrix);
    }
}

const graph = new Graph(5);

graph.addEdge(0,1);
graph.addEdge(0,4);
graph.addEdge(1,2);
graph.addEdge(1,3);
graph.addEdge(1,4);
graph.addEdge(2,3);
graph.addEdge(3,4);

graph.printGraph();
console.log("bfs", graph.bfs(0, 2));
console.log("dfs", graph.dfs(0, 2))