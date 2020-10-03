/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
    // count number of tasks, and keep track of the highest frequency for any given task
    let highestFreq = 0;
    let count = {};
    for (let task of tasks) {
        if (count[task] == undefined) count[task] = 1;
        else {
            count[task]++;
        }
        highestFreq = Math.max(highestFreq, count[task]);
    }
    
    // Consider the most efficient scenario where the time between two identical tasks is longer than n, the cooldown time: 
    // e.g. n=2, ABCDABCDAB
    // Then the answer is just the length of tasks, idle time is irrelevant

    // Now consider the scenario where we don't have enough 'filler' tasks to fill a gap of n between our most frequent task(s).
    // e.g. n=2, ABCABxAB, notice how we need idle block (x) to fill a gap of 2
    // This time constraint represents all other scenarios that aren't the 'most efficient scenario' explained above.
    // The best layout for this scenario (given eg. highest freq = 3) is:
    // [Most frequent task] .. [filler] .. [Most frequent task] .. [filler] .. [Most frequent Task]
    // e.g. AB ..filler.. AB ..filler.. AB
    // Note that there needn't be any tasks afterwards, as any other task will have frequency < 3 in this scenario,  
    // This means that any other task(s) can be dropped into one, or both of the filler blocks 
    
    // To calculate the total time consumed by this pattern:
    // (AB .. filler)  occurs (highestFreq-1) times, and each block consumes (n+1) time since there must be n time between A's
    // Thus our total is (highestFreq-1)(n+1) + timeFor(AB)
    // If this time is less than tasks.length then it means it was possible to completely fill the filler blocks, thus take the most efficient scenario
    
    let highFreqTasks = 0;
    for (let t in count) {
        if (count[t] == highestFreq) highFreqTasks++;
    }
    
    return Math.max(tasks.length, (highestFreq-1)*(n+1) + highFreqTasks);
}


