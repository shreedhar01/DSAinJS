let encodeinput = ["neet","code","love","you"];

function encoder(strs) {
    if(strs.length === 0) return "";
    let nos ="";
    let count = 0;
    for (const e of strs) {
        nos += e.length
    }
    nos = nos + "#"

    for (const e of strs) {
        nos += e;
    }
    return nos;

}
let res = encoder(encodeinput)
console.log(res)

function decoder(str) {
   if (str.length === 0) return [];
   let count = 0;
   let arr = []
   let realarr = []
   while (str[count] != "#") {
    arr[count] = str[count]
    count ++;
   }
   let k = 0;
   for(let i = count ; i < str.length ; i++){
    let strs = "";
    for(let j = i; j< arr[k]+i; j++){
        strs += str[j]
    }
    realarr[k] = strs;
    count = count + arr[k]; 
    k ++;
   }
   console.log(realarr)
}

encodeinput = decoder(res);