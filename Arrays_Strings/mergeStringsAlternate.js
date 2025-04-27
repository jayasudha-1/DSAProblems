var mergeAlternately = function(word1, word2) {
    let merged="";
    let i=0;
    while(i<word1.length || i<word2.length){
        if(i<word1.length){
            merged=merged+word1[i];
        }
        if(i<word2.length){
            merged=merged+word2[i];
        }
        i++;
    }
    return merged;
}



var mergeAlternately = function(word1, word2) {
    let merged = [];
    let i = 0;
    while (i < word1.length || i < word2.length) {
        if (i < word1.length) merged.push(word1[i]);
        if (i < word2.length) merged.push(word2[i]);
        i++;
    }
    return merged.join('');
};
