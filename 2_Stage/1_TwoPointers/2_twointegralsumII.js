const numbers = [1, 2, 3, 4];
const target = 7;

function twoSum(numbers, target) {
    // for (let j = i + 1; j < numbers.length; j++) {
    //     for (let i = 0; i < numbers.length; i++) {
    //         if (numbers[i] + numbers[j] === target) {
    //             return [i + 1, j + 1]
    //         }
    //     }
    // }


    // let a = 0; let b = numbers.length - 1;
    // while (a < b) {
    //     if(numbers[a]+numbers[b] === target){
    //         return [a+1,b+1]
    //     }
    //     else if(numbers[a]+numbers[b] > target){
    //         if(a > b) a++;
    //         else b--;
    //     }
    //     else{
    //         if(a > b) b--;
    //         else a++;
    //     }
    // }

    let a = 0; let b = numbers.length - 1;
    while(a < b){
        const sum = numbers[a] + numbers[b];
        if(sum > target){
            
        }
    }
}

console.log(twoSum(numbers, target))