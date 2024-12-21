const s = "Was it a car or a cat I saw?";

function palindrom(s) {
    // let str = s.toLowerCase().replace(/[^a-z]/g,'');
    let a=0; let b=(s.length -1);
    for(let i=0; i< s.length; i++){
        while(a < b){
            while (a<b && !/[a-z]/i.test(s[a])) {
                a++;
            }

            while (a < b && !/[a-z]/i.test(s[b])) {
                b--;
            }

            if(s[a].toLowerCase() !== s[b].toLowerCase()){
                return false
            }
            //console.log(`a :${s[a]} b :${s[b]}`)
            a++;b--;
        }
    }
    return true
}

console.log(palindrom(s))
