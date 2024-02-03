
// task-2
function checkFunction(e){
    let result;
    if(e % 2 === 1){
        result = e * 2;
    }
    else{
        result = e / 2;
    }
    return result;
}

let result = checkFunction(6);
console.log(result);