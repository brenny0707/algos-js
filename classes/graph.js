class Vertex {
  constructor(ref) {
    this.ref = ref;
  }
}

class Graph {
  constructor() {
    this.verticies = {};
    this.adjList = {};
  }

  /*
  verticies {
    <vRef> : vertex
  }

  vertex {
    ref: <vRef>,
  }
  */

  addVertex(vRef) {
    this.verticies[vRef] = new Vertex(vRef);
  }

  addEdge(vRef, wRef, weight) {
    if (!this.verticies[vRef] || !this.verticies[wRef]) {
      const missingVerticies = [];
      if (!this.verticies[vRef]) missingVerticies.push(vRef);
      if (!this.verticies[wRef]) missingVerticies.push(wRef);
      const errorMessage = missingVerticies.length > 1 ?
                              `Missing verticies ${missingVerticies}` :
                              `Missing vertex ${missingVerticies}`;
      return console.log(errorMessage);
    }
    const adj = this.adjList;
    const vertexRefPair = [vRef, wRef];
    vertexRefPair.forEach( (ref, idx) => {
      if (!adj[ref]) adj[ref] = {}; //initialize ref in AdjList if no ref was created
      const otherVertexRef = idx === 0 ?
                          vertexRefPair[1] :
                          vertexRefPair[0];
      adj[ref][otherVertexRef] = weight;
    })
    return this.adjList;
  }

  // printGraph()

  // bfs(v)
  // dfs(v)

  findShortestPath(startNodeRef, endNodeRef) {
    const nodeQueue = [startNodeRef];
    const nodeWeights = {};
    nodeWeights[startNodeRef] = 0;
    while (nodeQueue.length > 0) {
      // console.log(nodeQueue);
      let curNodeRef = nodeQueue.shift();
      if (curNodeRef === endNodeRef);
      else {
        let curWeight = nodeWeights[curNodeRef] ? nodeWeights[curNodeRef] : 0;
        const curNodeAdjs = this.adjList[curNodeRef]; //this.adjList["A"] => { B: 10, C: 50, D: 45 }
        const curNodeAdjRefs = Object.keys(curNodeAdjs);
        curNodeAdjRefs.forEach( (adjRef) => {
          const nodeWeight = nodeWeights[curNodeRef] + curNodeAdjs[adjRef]; //weight of curNode + edge to adjNode
          if (adjRef === startNodeRef);
          else if (!nodeWeights[adjRef] || nodeWeight < nodeWeights[adjRef]) {
            nodeWeights[adjRef] = nodeWeight;
            nodeQueue.push(adjRef);
          }
        })
      }
    }
    console.log(nodeWeights);
    return nodeWeights[endNodeRef];
  }
}
// const testGraph = new Graph();
// testGraph.addVertex("A");
// testGraph.addVertex("B");
// testGraph.addVertex("C");
// testGraph.addVertex("D");
// testGraph.addEdge("A", "B", 10);
// testGraph.addEdge("A", "C", 50);
// testGraph.addEdge("A", "D", 45);
// testGraph.addEdge("B", "C", 25);
// testGraph.addEdge("B", "D", 25);
// testGraph.addEdge("C", "D", 40);
// testGraph.addEdge("C", "H", 40);
// testGraph.addEdge("W", "H", 40);
// console.log(testGraph.verticies);
// console.log(testGraph.adjList);

const dijkstraGraph = new Graph();
dijkstraGraph.addVertex("A");
dijkstraGraph.addVertex("B");
dijkstraGraph.addVertex("C");
dijkstraGraph.addVertex("D");
dijkstraGraph.addVertex("E");
dijkstraGraph.addVertex("F");
dijkstraGraph.addVertex("G");
dijkstraGraph.addVertex("H");
dijkstraGraph.addEdge("A", "B", 5);
dijkstraGraph.addEdge("A", "G", 25);
dijkstraGraph.addEdge("A", "F", 30);
dijkstraGraph.addEdge("G", "H", 25);
dijkstraGraph.addEdge("B", "C", 5);
dijkstraGraph.addEdge("C", "D", 5);
dijkstraGraph.addEdge("F", "D", 30);
dijkstraGraph.addEdge("F", "E", 80);
dijkstraGraph.addEdge("H", "D", 25);
dijkstraGraph.addEdge("H", "E", 30);
dijkstraGraph.addEdge("D", "E", 100);
console.log(dijkstraGraph.findShortestPath("A","E"));