/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
    // tasks[i] is an upper-case english letter so there is at most 26 different tasks, so we can use a count array for fast sorting
    // populate count array
    let count = new Array(26).fill(0);
    for (let i = 0; i < tasks.length; i++) {
        let charCode = tasks[i].charCodeAt(0) - "A".charCodeAt(0);
        count[charCode]++;
    }
    
    // convert to priority queue based on num of tasks [num_tasks, cooldown]
    count = count.filter(e => e > 0).sort((a, b) => b - a);
    let taskQueue = count.map(e => [e, 0]);
 
    let currItem;
    let ret = 0;
        
    // process queue
    while (taskQueue.length > 0) {
        let taskIndex = getNextTask(taskQueue); // next task index
        
        if (taskIndex !== null) {   // if task available
            let newTask = taskQueue.splice(taskIndex, 1)[0];  // pop new task from queue
            newTask[1] = n + 1;           // set cooldown
            newTask[0]--;                 // decrease count 
            if (newTask[0] > 0) {         // only add back to queue if still count
                let enqueueIndex = enqueue(taskQueue, newTask);
                taskQueue.splice(enqueueIndex, 0, newTask);
            }
        }
        
        decrementCooldowns(taskQueue);
        ret++;
    }
    
    return ret;
}

function getNextTask(queue) {
    let nextTask = 0;
    
    while (nextTask < queue.length) {
        if (queue[nextTask][1] == 0) {
            return nextTask;
        }
        nextTask++;
    }
    return null;
}

function enqueue(queue, task) {
    let position = 0;
    
    while (position < queue.length) {
        if (queue[position][0] < task[0]) {
            return position;
        }
        position++;
    }
    return queue.length;
}


function decrementCooldowns(tasks) {
    for (let j = 0; j < tasks.length; j++) {
        if (tasks[j][1] > 0) {
            tasks[j][1]--;
        }
    }
}

