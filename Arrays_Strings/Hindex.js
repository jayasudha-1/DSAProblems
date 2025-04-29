var hIndex = function(citations) {
    // Step 1: Sort the citations array in descending order
    citations.sort((a, b) => b - a);
    let h = 0;
    // Step 2: Iterate over the sorted citations
    for (let i = 0; i < citations.length; i++) {
        // If the current citation count is >= i + 1 (because index starts from 0)
        if (citations[i] >= i + 1) {
            h = i + 1;
        } else {
            break; // Since the array is sorted, no further valid h-index exists
        }
    }
    return h;
};