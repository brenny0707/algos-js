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

  addEdge(v, w) {
    
  }
  // printGraph()

  // bfs(v)
  // dfs(v)
}