/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
    
    let uniqueEmails = new Set();
    
    for (email of emails) {
        let emailParts = email.split("@");
        let localName = emailParts[0];
        let domainName = emailParts[1];
        
        localName = localName.split('.').join(""); // disregard all periods
        localName = localName.split('+')[0]; // disregard everything after first + sign
        
        uniqueEmails.add(`${localName}@${domainName}`);
    }
    
    console.log(uniqueEmails);
    return uniqueEmails.size;
};