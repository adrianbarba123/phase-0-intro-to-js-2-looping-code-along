function writeCards(names){
    const namesInput = [];
    for(let i = 0; i < names.length; i++){
        namesInput[i] = `Thank you, ${names[i]}, for the wonderful surprise gift!`;
    }
    return namesInput;
};

function countDown(x){
    for (let i = 0; i < x+1; i++) {
        console.log(i);
    };
};