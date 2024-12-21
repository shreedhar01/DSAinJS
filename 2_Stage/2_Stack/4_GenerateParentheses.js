class GenerateParentheses{
    constructor(n){
        this.n = n;
    }
    backtrack(openN,closeN,n,res,stack){
        if(openN === closeN && openN === n){
            res.push(stack)
            return;
        }
        if(openN < n){
            this.backtrack(openN+1, closeN, n, res, stack + '(');
        }
        if(closeN < openN){
            this.backtrack(openN, closeN + 1, n, res, stack + ')');
        }
    }

    generateParentheses(){
        const res = [];
        this.backtrack(0, 0, this.n, res, '');
        return res
    }
}

let obj =new GenerateParentheses(3);
console.log(obj.generateParentheses())

