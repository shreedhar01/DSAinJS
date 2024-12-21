let nums = [1,2,4,6];
let prod = []


//  //BruteForce
// for(let i=0; i< nums.length; i++){
//     let mul = 1;
//     for(let j=0; j<nums.length;j++){
//         if(i != j){
//             mul = mul * nums[j];
//         }
//     }
//     prod[i] = mul;
// }


//  //prefix postfix

function productofArray(nums){
    const n = nums.length
    const res = new Array(n).fill(1)
    for(let i = 1; i < n; i++){
        res[i] = res[i-1] * nums[i-1];
    }

    prefix = 1;
    for(let i= n-1; i>= 0; i--){
        res[i] *= prefix;
        prefix *= nums[i]
    }
    return res
}
console.log(productofArray(nums))