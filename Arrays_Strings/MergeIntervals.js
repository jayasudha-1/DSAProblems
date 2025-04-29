var merge = function(intervals) {
    intervals=intervals.sort((a,b)=>a[0]-b[0])
    const result=[]
    let pair=intervals[0];

    for(i of intervals){
        if(pair[1]>=i[0]){
            pair[1]=Math.max(i[1],pair[1])
        }else{
            result.push(pair);
            pair=i;
        }
    }
    result.push(pair)
    return result;
    
};