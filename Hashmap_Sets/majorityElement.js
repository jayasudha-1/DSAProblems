var majorityElement = function (nums) {
    let majoritynum;
    let count = 0;

    for (let elem of nums) {
        if (count === 0) {
            majoritynum = elem;
        }
        if (majoritynum === elem) {
            count++;
        } else {
            count--;
        }
    }
    return majoritynum;
};

/*
var majorityElement = function(nums) {
let majoritynum;
let count = 0;

for (let elem of nums) {
  if (count === 0) {
    majoritynum = elem;
  }
 count += (elem === majoritynum) ? 1 : -1;
}
return majoritynum;
};
*/
