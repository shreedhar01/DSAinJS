const nums = [2,20,4,10,3,4,5];

function longestConsecutiveSequence(nums) {
    let sets = new Set();
    let maps = new Map();
    for (const element of nums) {
        sets.add(element)
    }
    for (const e of sets) {
        if(!sets.has(e-1)){
            maps.set(e, [e])
            
            let current = e;
            while(sets.has(current+1)){
                current++;
                maps.get(e).push(current)
            }
        }
    }
    
    let output = [];
    for (const [key,value] of maps) {
        if(value.length > output.length){
            output = value;
        }
    }
    return output.length;
}

console.log(longestConsecutiveSequence(nums))