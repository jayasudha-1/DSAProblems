var romanToInt = function(s) {
    const romanValues = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    
    let result = 0;
    
    for (let i = 0; i < s.length; i++) {
        const currentValue = romanValues[s[i]];
        const nextValue = romanValues[s[i + 1]];
        
        if (nextValue && currentValue < nextValue) {
            result += nextValue - currentValue;
            i++; // Skip the next value  because we subtracted the number already
        } else {
            result += currentValue;
        }
    }
    
    return result;
};



var romanToInt = function(s) {
    // Map of Roman numerals to integer values
    const romanValues = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    
    let result = 0;
    let prevValue = 0;  // To hold the previous numeral's value while traversing
    
    // Traverse the string from right to left
    for (let i = s.length - 1; i >= 0; i--) {
        const currentValue = romanValues[s[i]]; // Get the current numeral value
        
        // If currentValue >= prevValue, add currentValue to result
        // If currentValue < prevValue, subtract currentValue from result
        if (currentValue >= prevValue) {
            result += currentValue;
        } else {
            result -= currentValue;
        }
        
        // Update prevValue for the next iteration (moving right to left)
        prevValue = currentValue;
    }
    
    return result;
};
