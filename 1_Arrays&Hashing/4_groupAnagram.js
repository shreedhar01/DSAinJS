let strs = ["act","pots","tops","cat","stop","hat"];

function groupAnagram(strs){
    let mapss = {};
    for (const element of strs) {
        let count = new Array(26).fill(0);
        for (const c of element) {
            count[c.charCodeAt(0) - "a".charCodeAt(0)] += 1;
        }
        let keyss = count.join(",")
        
        if(mapss[keyss]){
            mapss[keyss].push(element)
        }
        else{
            mapss[keyss] = [element]
        }
    }
    //console.log(Object.keys(mapss))
    return Object.values(mapss)
}

console.log(groupAnagram(strs))
