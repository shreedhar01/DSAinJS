
// function mostWater(height) {
//     let bigArea=0;
//     let mul;
//     for (let i = 0; i < height.length - 1; i++) {
//         let a = i; let b = height.length;
//         while (a < b) {
//             if (height[a] < height[b]) {
//                 mul = a * (b-a);
//                 if (bigArea < mul) bigArea = mul;
//                 b--;
//             }
//             else {
//                 mul = b * (b-a);
//                 if (bigArea < mul) bigArea = mul;
//                 a++;
//             }
//         }
//     }
//     return bigArea;
// }


const height = [1, 7, 2, 5, 4, 7, 3, 6]

function mostWater(height) {
    let left = 0; let right = height.length - 1;
    let mul = 0;
    while (left < right) {
        let currentHeight = Math.min(height[left], height[right])
        let currentMul = currentHeight * (right-left)
        if(currentMul > mul) mul = currentMul;

        if(height[left] < height[right]) left++;
        else right--;
    }
    return mul;
}

console.log(mostWater(height))