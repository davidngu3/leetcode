/**
 * @param {string} date
 * @return {string}
 */
var reformatDate = function(date) {
    var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    
    var dateArr = date.split(' ');
    
    var day = dateArr[0].length == 3 ? "0" + dateArr[0][0] : dateArr[0].slice(0,2);
    var month = (months.indexOf(dateArr[1]) + 1).toString();
    
    if (month.length == 1) {
        month = "0" + month;
    }
    var year = dateArr[2];
    
    return `${year}-${month}-${day}`;
};