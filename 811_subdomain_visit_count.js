// A website domain like "discuss.leetcode.com" consists of various subdomains. At the top level, we have "com", at the next level, 
// we have "leetcode.com", and at the lowest level, "discuss.leetcode.com". When we visit a domain like "discuss.leetcode.com", we will also visit the parent domains "leetcode.com" and "com" implicitly.
// Now, call a "count-paired domain" to be a count (representing the number of visits this domain received), followed by a space, followed by the address. 
// An example of a count-paired domain might be "9001 discuss.leetcode.com".
// We are given a list cpdomains of count-paired domains. We would like a list of count-paired domains, (in the same format as the input, and in any order), 
// that explicitly counts the number of visits to each subdomain.

/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function(cpdomains) {
    let domainObj = {};
    let ans = [];

    cpdomains.forEach(domain => {
        // split count-paired domain into count and domain
        let temp = domain.split(" ");
        let visitCount = parseInt(temp[0]);
        
        // get all subdomains
        let subdomains = temp[1].split('.');
        for (let i=0; i<subdomains.length-1; i++) {
            let j = i;
            while (!subdomains[i].endsWith("." + subdomains[subdomains.length-1])) {
                subdomains[i] += `.${subdomains[j+1]}`;
                j++;
            }
        }
        console.log(subdomains);
        
        // adding subdomains with their counts to object
        subdomains.forEach((subdomain) => {
            let subdomainExists = false;
            // add to object entry if found
            Object.keys(domainObj).forEach(key => {
                if (key == subdomain) {
                    subdomainExists = true;
                    domainObj[subdomain] += visitCount;
                }
            });

            // create a new entry if not found
            if (!subdomainExists) {
                domainObj[subdomain] = visitCount;
            }
        })
    })

    // parse the object and add each count-domain pair to the output
    Object.keys(domainObj).forEach((key) => {
        ans.push(`${domainObj[key]} ${key}`);
    })

    return ans;
    
};

