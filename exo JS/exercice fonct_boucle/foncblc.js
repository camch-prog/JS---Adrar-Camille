let notesTibo = [0,3,4,6,18,19,4];
function calculerMoyenne(tableauDeNote){
    let n = tableauDeNote.length;
    let sommeNotes =0;
    // for (i in tableauDeNote){
    //     sommeNotes += tableauDeNote[i];
    //     console.log(tableauDeNote[i])
    // }
    for (i of tableauDeNote){
        sommeNotes += i;
        console.log(i)
    }
    return sommeNotes/n
} 
console.log("La moyenne des notes de Tibo est : "+calculerMoyenne(notesTibo));