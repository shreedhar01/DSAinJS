const height = [0, 2, 0, 3, 1, 0, 1, 3, 2, 1];

function trappingRainWater(height) { 
    let l = 0; 
    let r = height.length - 1; 
    let leftMax = height[l]; 
    let rightMax = height[r]; 
    let res = 0; 
    while (l < r) { 
        if (leftMax < rightMax) { 
            l++; 
            leftMax = Math.max(leftMax, height[l]); 
            res += leftMax - height[l]; 
        } else { 
            r--; 
            rightMax = Math.max(rightMax, height[r]); 
            res += rightMax - height[r]; 
        }
    } 
    return res; 
}

console.log(trappingRainWater(height))