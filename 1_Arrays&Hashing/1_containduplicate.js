let a = [1, 2, 3, 4];

//Buteforce
function checkDuplicate(arr){
    for(let i=0; i< arr.length; i++){
        for(let j=i+1; j< arr.length; j++){
            if(arr[i] == arr[j]){
                return true;
            }
        }
    }
    return false;
}


// Shorting
function checkDuplicate(arr) {
    let sor = arr.sort((a, b) => a - b);
    for(let i=1; i< arr.length; i++){
        if(arr[i] === arr[i-1]){
            return true;
        }
    }
    return false;
}

//Hash Table
function checkDuplicate(arr){
    let hashTable = new Set();
    for (const item of arr) {
        if(!hashTable.has(item)){
            hashTable.add(item);
        }
        else{
            return true;
        }
    }
    return false;
}

let result = checkDuplicate(a);
console.log(result);


