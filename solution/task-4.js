
// task-4
let binaryStr = '10010001';

function count_Zero(e){
    let sum = 0;
    for(let i = 0; i < e.length; i++){
        let convertToNumber = Number(e[i]);
        if(convertToNumber === 0){
            sum = sum + 1;
        }
    }
    return sum;
}
let result = count_Zero(binaryStr);
console.log(result);