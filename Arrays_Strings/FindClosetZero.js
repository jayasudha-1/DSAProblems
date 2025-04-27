var findClosestNumber = function(nums) {
    let closest = nums[0];
    for (let num of nums){
        if(Math.abs(num)< Math.abs(closest)){
            closest =num;
        }else if(Math.abs(num)===Math.abs(closest)){
            closest=Math.max(num,closest);
        }
    }
    return closest;
}
/*



var findClosestNumber = function(nums) {
    let closest = nums[0]; // Initialize closest to the first element of the array
    
    for (let i = 1; i < nums.length; i++) {
        if (Math.abs(nums[i]) < Math.abs(closest)) {
            closest = nums[i];
        } else if (Math.abs(nums[i]) === Math.abs(closest) && nums[i] > closest) {
            closest = nums[i];
        }
    }
    
    return closest;
};
// Example usage:
console.log(findClosestNumber([2, -1, 1])); // Output: 1
*/