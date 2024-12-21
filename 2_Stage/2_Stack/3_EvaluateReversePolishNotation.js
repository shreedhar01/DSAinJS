tokens = ["1","2","+","3","*","4","-"]

function evaluate(tokens) {
    let nums = [];
    for(let i=0; i< tokens.length; i++){
        if(['-','+','*','/'].includes(tokens[i])){
            let b = nums.pop();
            let a = nums.pop();
            switch (tokens[i]) {
                case '-':
                    nums.push( a - b);
                    break;
                case '+':
                    nums.push(a+b);
                    break;
                case '*':
                    nums.push(a * b);
                    break;
                case '/':
                    nums.push(Math.trunc(a/b));
                    break;
            }
        }else{
            nums.push(Number(tokens[i]))
        }
    }
    return nums.pop();
}

console.log(evaluate(tokens))