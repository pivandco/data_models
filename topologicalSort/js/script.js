class Graph {
    points = [];
    sorted = [];

    constructor(num) {
        for (let i = 0; i < num; i++) {
            this.points[i] = new GraphPoint(i);
        }
    }

    createConnect(up, down) {
        this.points[up].setLowestConnect(this.points[down]);
        this.points[down].setUpperConnect(this.points[up]);
    }

    recurTopologicalSort(point) {
        console.log(point);
        if (!(point.getVisited())) {
            point.setVisited(true);
            console.log(point);
            for (let i = 0; i < point.lowestConnects.length; i++) {
                this.recurTopologicalSort(point.lowestConnects[i])
            }
            this.sorted.push(point.value);
        }
    }

    topologicalSort() {
        console.log(this.points);
        for (let i = 0; i < this.points.length; i++) {
            console.log(this.points[i]);
            this.recurTopologicalSort(this.points[i]);
        }
        this.sorted.reverse();
        return this.sorted;
    }
}

class GraphPoint {
    value;
    upperConnects = [];
    lowestConnects = [];
    visited = false;

    constructor(num) {
        this.value = num;
    }

    setLowestConnect(point) {
        this.lowestConnects.push(point);
    }

    setUpperConnect(point) {
        this.upperConnects.push(point);
    }
    getVisited(){
        return this.visited;
    }
    setVisited(value){
        this.visited=value;
    }
}

let graph = new Graph(6);
graph.createConnect(5, 2);
graph.createConnect(5, 0);
graph.createConnect(4, 0);
graph.createConnect(4, 1);
graph.createConnect(2, 3);
graph.createConnect(3, 1);
console.log(graph.topologicalSort());