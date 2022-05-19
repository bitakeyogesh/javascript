
/**
 *        (1)
 *     2/     \3
 *    (0) -6- (3)   
 *     4\    /3
 *       (2)
 *
*/

// class Node {
//     constructor(name, weight){
//         this.name = name;
//         this.weight = weight;
//     }
// }
const adjacencyList = {
    0: [[1,2],[2,4],[3,6]],
    1: [[0,2], [3,3]],
    2: [[0,4], [3,3]]
};

const findShortedPath =(source, adjacencyList )=>{
    const distance= Array(adjacencyList.length).fill(Integer.MAX_VALUE);
    const minPriorityQueue = new PQ();
    distance[source] = 0;
    minPriorityQueue.enqueue(source);

    while(minPriorityQueue.length){
        const u = minPriorityQueue.dequeue();
        
        const neighbors = adjacencyList[u];

        neighbors.forEach(neighbor=>{
            const [v, weight] = neighbor;
            if(distance[v] > distance[u]+ weight) {
                distance[v] = distance[u]+ weight;
                minPriorityQueue.enqueue(v);
            }
        }) 
    }
    return distance;
}

findShortedPath(0, adjacencyList);