'use strict';

module.exports =(startNode, goalNode, graph) => {
    const queue = new Queue();
    const vistedNode = new Set();
    const parentPath = new Map();

    queue.enqueue(startNode);
    visitedNodes.add(startNode);

    while (queue.size() > 0) {
        const currentNode = queue.dequeue();

        if (currentNode === goalNode) {
            return parentPath;
        }

        const neighbors = graph.getNeighbors(currentNode);

        for (let neighbor of neighbors) {
            const neighborNode = neighbor.node;

            if (vistedNode.has(neighborNode)) {
                // noinspection JSAnnotator
                continue;
            } else {
                vistedNode.add(neighborNode);
            }
            parentPath.set(neighborNode, currentNode);

            queue.enqueue(neighborNode);
        }
    }
    return null;
};

