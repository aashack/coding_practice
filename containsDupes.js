var containsDuplicate = function(nums) {
    nums.sort((a,b) => a-b);
    
    for(let x = 0; x <= nums.length-1; x++){

        if(nums[x] === nums[x+1]){

            return true
        }
    }

    return false
};


// var containsDuplicate = function(nums) {
//     return (new Set(nums)).size !== nums.length;
// };

var containsDuplicate = function(nums) {
    let newNums = new Set(nums);
    
    return newNums.size !== nums.length;
    //return (new Set(nums)).size !== nums.length;
};


//Using a set.

var containsDuplicate = function(nums) {
    const set = new Set();
    for (let i = 0; i < nums.length; i++) {
        if (set.has(nums[i])) {
            return true;
        }
        
        set.add(nums[i]);
    }
    
    return false;
};