var sortColors = function(nums) {
    let low=0, mid=0, high=nums.length-1;
 
    while(mid<=high){
     if(nums[mid]===0){
         [nums[low], nums[mid]]=[nums[mid], nums[low]];
         low++;
         mid++;
     } else if(nums[mid]===1){
         mid++;
     }else{
         [nums[high], nums[mid]]=[nums[mid], nums[high]];
         high--
     }
    }
 }



/*
var sortColors = function(nums) {
    let count0=0,count1=0,count2=0;

    for(let i=0; i<nums.length;i++){
        if(nums[i]===0) count0++;
        else if (nums[i]===1) count1++;
        else
        count2++;
    }    

    //second pass
    for(let i=0; i<count0;i++){
        nums[i]=0;
    }
    for(let i=count0; i<count0+count1;i++){
        nums[i]=1;
    }
    for(let i=count0+count1; i<nums.length;i++){
        nums[i]=2;
    }
};
*/