/*Function which runs a while loop that checks the current date is a certain duration away
 from the date when the loop started, hence acting like a wait function*/
function delay(ms) {
    var date1 = new Date();
    var date2 = null;
    do { date2 = new Date(); }
    while(date2-date1 < ms);
}

module.exports=delay;