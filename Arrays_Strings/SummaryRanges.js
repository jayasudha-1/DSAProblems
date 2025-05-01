var summaryRanges = function(nums) {
    let result = [];
    let i = 0;

    while (i < nums.length) {
        let start = nums[i];

        // Move i forward while consecutive numbers
        while (i + 1 < nums.length && nums[i] + 1 === nums[i + 1]) {
            i++;
        }

        // If start == nums[i], it's a single number
        if (start === nums[i]) {
            result.push(start.toString());
        } else {
            // Otherwise, it's a range
            result.push(start + "->" + nums[i]);
        }
        i++; // Move to the next number
    }

    return result;
};
