/**
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */
var distributeCandies = function(candies, num_people) {
    let people = new Array(num_people).fill(0);
    
    let candy_counter = 1;
    let people_counter = 0;
    
    while (candies > 0) {
        if (candies >= candy_counter) {
            people[people_counter] += candy_counter;
            candies -= candy_counter;
            candy_counter++;
            people_counter = (people_counter + 1) % num_people;
        }
        else {
            people[people_counter] += candies;
            candies = -1;
        }
    }
    
    return people;
};