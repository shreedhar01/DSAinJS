let nums = [3, 4, 5, 6];
let target = 7;

// function twoSum(nums, target){
//     for(let i=0; i< nums.length; i++){
//         for(let j = i+1; j< nums.length; j++){
//             if((nums[i] + nums[j]) === target){
//                 return [i, j];
//             }
//         }
//     }
//     return [];
// }

function twoSum(nums, target) {
    let hasMap = new Map();
    for (let i = 0; i < nums.length; i++) {
        const diff = target - nums[i];
        if (hasMap.has(diff)) {
            return [hasMap.get(diff), i];
        }
        hasMap.set(nums[i], i);
    }
    return []
}

let twoSumm = twoSum(nums, target);

console.log(twoSumm);