let notesTibo = [14,14,15];


function caluculerMoyenne(tableau){
    let sommeNote = 0;
    tableau.forEach(element => {
        sommeNote += element;
    });
    let moyenne = sommeNote/tableau.length
    if (moyenne >= 15){
        return "Très bien"
    }
    else if(moyenne>=10){
        return "Assez bien"
    }
    else{return "Refus"}
}
noteTibo=caluculerMoyenne(notesTibo)
console.log(noteTibo)
// function calculerMoyenne(tableauDeNote){
//     let n = tableauDeNote.length;
//     let sommeNotes =0;
//     // for (i in tableauDeNote){
//     //     sommeNotes += tableauDeNote[i];
//     //     console.log(tableauDeNote[i])
//     // }
//     for (i of tableauDeNote){
//         sommeNotes += i;
//         console.log(i)
//     }
//     return sommeNotes/n
// } 
// console.log("La moyenne des notes de Tibo est : "+calculerMoyenne(notesTibo));