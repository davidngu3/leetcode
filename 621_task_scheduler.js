/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
    let taskObj = {};
    
    for (let i = 0; i < tasks.length; ++i) {
        if (taskObj.hasOwnProperty(tasks[i])) { // tasks exists, increment task count
            taskObj[tasks[i]][0]++;
        }
        else {
            taskObj[tasks[i]] = [1, 0]; // [task_count, cooldown_timer]
        }
    }
    
    let taskExecutionTime = 0;
    let idleTime = 0;
    
    while (taskExecutionTime < tasks.length) {
        let nextTask = processTask(taskObj, n);
        if (nextTask) {    // task found with no cooldown, task block
            taskExecutionTime++;
        }
        else {             // no task found, idle block
            idleTime++;
        }
    }

    let ret = taskExecutionTime + idleTime;
    return ret;
}

function processTask(tasks, cd) {
    let freqTask = getMostFreqTask(tasks);
    
    if (!freqTask) {    // all tasks busy/empty
        decrementCooldowns(tasks);
        return false; 
    }
    else {
        tasks[freqTask][0]--;          // decrement this task count
        decrementCooldowns(tasks);         // decrement all cooldowns
        tasks[freqTask][1] = cd;       // set this task cooldown timer
        return true;
    }
}

function getMostFreqTask(tasks) {
    let max = 0;
    let freqTask;
    
    for (let task in tasks) {
        if (tasks[task][0] > max && tasks[task][1] == 0) { // if available task with no cooldown
            max = tasks[task][0];
            freqTask = task; 
        }
    }
    
    if (max == 0) { // no task found, all on cooldown
        return null;
    }
    else {
        return freqTask;
    }
}


function decrementCooldowns(tasks) {
    for (let task in tasks) {
        if (tasks[task][1] > 0) {
            tasks[task][1]--;
        }
    }
}

