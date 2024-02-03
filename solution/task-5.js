
function odd_even(e){
    let message;
    if(e % 2 === 0){
        message = 'Even Number';
    }
    else{
        message = 'Odd Number';
    }
    return message;
}
let result = odd_even(25);
console.log(result);