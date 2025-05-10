var longestConsecutive = function (nums) {
    if (nums.length === 0) return 0;

    const numSet = new Set(nums);
    let longestStreak = 0;

    for (let num of numSet) {
        // if number is not present,then it may be the start of the sequence
        if (!numSet.has(num - 1)) {
            let currentNum = num;
            let currentStreak = 1;
            // Count the streak of consecutive numbers
            while (numSet.has(currentNum + 1)) {
                currentNum += 1;
                currentStreak += 1;
            }
            longestStreak = Math.max(longestStreak, currentStreak);
        }
    }
    return longestStreak;
};
