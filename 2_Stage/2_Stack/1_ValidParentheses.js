s = "({[}])"

function validity(str) {
    const map = {
        ")": "(",
        ']': '[',
        '}': '{'
    }
    let stack = []
    for (const c of str) {
        if(map[c]){
            if(stack.length > 0 && stack[stack.length-1] === map[c]) stack.pop();
            else return false;
        }else stack.push(c);
    }
    return stack.length === 0;
}

console.log(validity(s))