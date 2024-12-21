let nums = [-1,0,2,4,6,8];
let target = 4;


function search(nums, target){
    let l = 0;
    let r = nums.length-1;
    while( l <= r){
        let mid = Math.floor((l+r)/2);
        if(nums[mid] > target) r = mid-1;
        else if(nums[mid] < target) l = mid+1;
        else return mid;
    }
    return -1;
}

console.log(search(nums, target))