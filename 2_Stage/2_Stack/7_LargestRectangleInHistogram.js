const heights = [7,1,7,2,2,4];

function LargeRectangle(heights) {
    let stack = [];
    let maxArea = 0;
    for (let i = 0; i < heights.length; i++) {
        let start = i;
        while(stack.length > 0 && stack[stack.length-1][1] > heights[i]){
            let [index, height] = stack.pop();
            maxArea = Math.max(maxArea, height * (i-index))
            start = index;
        }
        stack.push([start, heights[i]])        
    }

    for (const [pos, height] of stack) {
        maxArea = Math.max(maxArea, height*(heights.length - pos))
    }
    return maxArea;
}

console.log(LargeRectangle(heights))