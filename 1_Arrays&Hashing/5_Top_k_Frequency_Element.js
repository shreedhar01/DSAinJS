let nums = [1,2,2,3,3,3]; 
let k = 2;

function topKFrequencyElement(nums,k){
    let count =new Map();
    for (let i= 0; i< nums.length; i++){
        if(!count.has(nums[i])){
            count.set(nums[i], 1);
        }
        else{
            count.set(nums[i], 1 + count.get(nums[i]));
        }
    }
    
    let freq = Array.from({length: nums.length + 1}, ()=>[])
    for (const [key,values] of count) {
        freq[values].push(key)
    }
    
    let res = [];
    for(let i = freq.length-1; i> 0; i--){
        for (const n of freq[i]) {
            res.push(n)
            if(res.length == k){
                return res;
            }
        }
    }
   
}

console.log(topKFrequencyElement(nums, k))