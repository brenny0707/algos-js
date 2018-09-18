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
    if (!this.verticies[vRef] || !this.verticies[wRef]) return "Missing vertex/verticies";
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
}
const testGraph = new Graph();
testGraph.addVertex("A");
testGraph.addVertex("B");
console.log(testGraph.addEdge("A", "B", 50));