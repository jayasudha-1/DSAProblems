var removeDuplicates = function(nums) {
    if(nums.length <=2) return nums.length;
    let j=2;
    for(let i=2;i<nums.length;i++){
        if(nums[i] !== nums[j-2]){
            nums[j]=nums[i];
            j++;
        }
    }
    return j;
};
/*
Input: nums = [1,1,1,2,2,3]
Output: 5, nums = [1,1,2,2,3,_]
Explanation: Your function should return k = 5, with the first five elements of nums being 1, 1, 2, 2 and 3 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).
*/