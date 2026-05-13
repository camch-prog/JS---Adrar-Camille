function calculMoy(notes){
    let sommesNotes =0;
    for (i of notes){
        sommesNotes += i;
    }
    let moy = sommesNotes/notes.length;
    if (moy >= 15){
        console.log("Très bien")
    }
    else if(moy >= 10){
        console.log("Assez bien")
    }
    else{
        console.log("Refus");
    }
}
let notes = [5,18];
calculMoy(notes)