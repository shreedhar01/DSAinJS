let target = 10;
let position = [4,1,0,7];
let speed = [2,2,1,1];

function CarFleet(target, position, speed) {
    let arr = position.map((p,i)=>[p,speed[i]]);
    arr.sort((a,b)=>b[0]-a[0]);
    let stack=[]
    for(let [p,s] of arr){
        stack.push((target-p)/s);
        if(stack.length >=2 && stack[stack.length-1] <= stack[stack.length-2]){
            stack.pop()
        }
    }
    return stack.length
}

console.log(CarFleet(target, position, speed))