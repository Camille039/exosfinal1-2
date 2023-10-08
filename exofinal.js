"use script"

let CaillouPointsDeVie = 10 
let FeuxRouges = 30
const TableMusic = ["Gazo","Jul","Naps","SDM"]



let randomMusic = TableMusic[getRandomMusicIndex()]

function getRandomMusicIndex(){
    let random = Math.random() * TableMusic.length 
    return Math.floor(random) 

}

    for (let Feux = 1; Feux <= FeuxRouges; Feux++)
    
    
    if (Math.random() < 0.2) {
        CaillouPointsDeVie -= 1
        console.log(`Feux Rouges ${Feux}: Anissa passe à la radio, Caillou perd 1 point de vie et saute immédiatement du taxi`)
    }else{
        
        console.log(`Feux Rouges ${Feux}, la musique ${randomMusic} passe à la radio`)
    }
    if (CaillouPointsDeVie == 0) 
   
    alert("EXPLOSION")





console.log(`Santé mentale de Caillou : ${CaillouPointsDeVie}`)


console.log(`Caillou à changé ${10 - CaillouPointsDeVie} de fois de taxi`)

getRandomMusicIndex()

// J'ai essayé avec un tableau avec les 5 musiques mais je n'ai pas réussi.
// Je n'ai pas réussi a faire en sorte que une musique soit tiré au sort pour chaque tour.



