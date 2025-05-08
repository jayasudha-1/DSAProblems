var containsDuplicate = function (nums) {
    let seen = new Set();
    for (i = 0; i < nums.length; i++) {
        if (seen.has(nums[i])) {
            return true;
        } else
            seen.add(nums[i]);
    }
    return false;
};
