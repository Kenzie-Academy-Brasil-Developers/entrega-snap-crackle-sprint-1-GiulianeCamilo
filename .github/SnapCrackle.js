let maxValue = 9000;
let novoArray = [];
let s = "Snap";
let c = "Crackle";
let sc ="SnapCrackle";

function snapCrackle (){
        for (let i = 1; <= maxValue; i++){
    if (i % 2 !=0 && i % 5 ===0){
        novoArray.push(sc);
    } else if (i % 2 !== 0) {
        novoArray.push(s);
    } else if (i % 5 === 0){
        novoArray.push(c);
    } else {
        novoArray.push(i);
    }
          
    } 
    return novoArray;
    }
    console.log(snapCrackle ());

  