const temperatures = [30,38,30,36,35,40,28];

function compare(temperatures) {
    let arr = []
    for (let i = 0; i < temperatures.length-1; i++) {
        let second = i+1;
        while(second <= temperatures.length){
            if((temperatures[second] - temperatures[i]) > 0) arr[i] = temperatures[second] - temperatures[i];
            second++;
        }
        if((temperatures[second] - temperatures[i]) <= 0) arr[i] = 0;
        
    }
    return arr;
}

console.log(compare(temperatures))