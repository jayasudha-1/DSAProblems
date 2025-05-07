var numJewelsInStones = function (jewels, stones) {
    const jewelSet = new Set(jewels);  // Use a Set to store jewels
    //console.log("jewelSet:", jewelSet);

    let count = 0;
    for (let stone of stones) {
        if (jewelSet.has(stone)) {
            count++;
        }
    }
    return count;
};

const jewels = "aA", stones = "aAAbbbb";
const result = numJewelsInStones(jewels, stones);
console.log("Output:", result);  // Output: 3
