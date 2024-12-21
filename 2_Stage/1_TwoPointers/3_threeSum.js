const nums = [-1, 0, 1, 2, -1, -4];

// function threeSum(nums) {
//     let arr = [];
//     nums = nums.sort((a, b) => a - b);
//     for (let i = 0; i < nums.length - 2; i++) {
//         if (i > 0 && nums[i] == nums[i - 1]) continue;
//         let a = i + 1; let b = nums.length - 1;
//         while (a < b) {
//             if (nums[i] + nums[a] + nums[b] === 0) {
//                 arr.push([nums[i], nums[a], nums[b]]);
//                 while (a < b && nums[a] == nums[a + 1]) a++;
//                 while (a < b && nums[b] == nums[b - 1]) b--;
//                 a++;
//                 b--;
//             }
//             else if (nums[i] + nums[a] + nums[b] < 0) a++;
//             else b--;
//         }
//     }
//     return arr;
// }


function threeSum(nums) {
    let arr = []
    nums = nums.sort((a,b)=> a - b);
    for(let i=0; i< nums.length -2; i++){
        if(i > 0 && nums[i] === nums[i-1]) continue;
        let a = i+1;
        let b = nums.length - 1;
        while(a < b){
            if(nums[i]+nums[a]+nums[b] === 0){
                arr.push([nums[i],nums[a],nums[b]])
                while(a < b && nums[a] === nums[a + 1]) a++;
                while(a < b && nums[b] === nums[b - 1]) b--;
                a++;
                b--;
            }
            else if(nums[i]+nums[a]+nums[b] < 0) a++;
            else b--;
        }
    }
    return arr;
}
console.log(threeSum(nums));