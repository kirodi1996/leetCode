/**
 * @param {number[]} heights
 * @param {number} bricks
 * @param {number} ladders
 * @return {number}
 */
 var furthestBuilding = function(heights, bricks, ladders) {
    let node = new PriorityQueue();
     for (let i =0 ; i<heights.length-1; i++) {
         
         let diff = heights[i+1]-heights[i];
         if(diff>0) {
             node.enqueue(diff);
         }
         if(node.values.length>ladders){
             bricks -=  node.dequeue().value
         }
         if(bricks<0) {
             return i;
         }
     }   
     return heights.length-1;
 
 };
 
 
 class PriorityQueue {
     constructor() {
         this.values = [];
     }
 
     insert(val) {
        let newNode = new Node(val);
        this.values.push(newNode);

        let index = this.values.length-1;
        while(index) {
            let parentIdx = Math.floor((index-1)/2);
            if(this.values[parentIdx].val > this.values[index].val ) {
                [this.values[parentIdx] , this.values[index]] = [this.values[index], this.values[parentIdx]];
            }
            index = parentIdx
        }
    }

    dequeue() {
        let lastIdx = this.values.length-1;
        let minPriority = this.values[lastIdx];
        let maxPriority = this.values[0];
        this.values[0] = minPriority;
        idx = 0;
        while(idx) {
            let length = this.values.length - 1;
            let left = (idx * 2) + 1;
            let right = (idx * 2) + 2;
            let swapNode = null
            if(left <= length) {
                if(minPriority.val > this.values[left]) {
                    swapNode = left
                }
            }
            if(right <= length) {
                if((swapNode && this.values[swapNode].val > this.values[right]) || (!swapNode && minPriority.val > this.values[right]  )) {
                    swapNode = right;
                }
            }

            if(swapNode == null) break;
            idx = swapNode;
           

        }
        return maxPriority
    }
 
 }

 class Node {
    constructor(val) {
        this.val = val;
    }
}