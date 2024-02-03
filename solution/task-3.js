
// task-3

const numbers = [2, 4, 6, 8];
function make_avg(e){
    let sum = 0;
    let countAvg;
    for(let i = 0; i < e.length; i++){
        sum = sum + e[i];
        countAvg = sum / e.length;
    }
    return countAvg;
}
let result = make_avg(numbers);
console.log(result);