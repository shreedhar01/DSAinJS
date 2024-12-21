let s = "jar";
let t = "jam";

function checkAnagram(first, second){
    if(first.length !== second.length){
        return false;
    }

    let first1 = new Map();
    let second2 = new Map();

    for (let i= 0; i< first.length; i++){
        first1.set(first[i], (first1.get(first[i]) || 0) + 1);
        second2.set(second[i], (second2.get(second[i]) || 0) + 1);

        // if( first1.has(first[i])){
        //     let a = first1.get(first[i]);
        //     first1.set(first[i], (a+1));
        // }
        // else{
        //     first1.set(first[i],1);
        // }
    }

    for (const [key,value] of first1) {
        if ( value != second2.get(key)){
            return false;
        }
    }
    return true;
}

console.log(checkAnagram(s,t));