"use script"
let survivantPointsDeVie = 100
let tueurPointsDeVie = 100
let nombreDeTours = 10

for (let tour = 1; tour <= nombreDeTours; tour++) 
    if (Math.random() < 0.6) {
        tueurPointsDeVie -= 10
        console.log(`Tour ${tour}: Le survivant inflige 10 points de dégâts au tueur`)
    } else {
        survivantPointsDeVie -= 20 
        console.log (`Tour ${tour} Le survivant a raté son attaque et le tueur lui inflige 20 dégâts`)
    }

console.log(`Points de vie du survivant : ${survivantPointsDeVie}`)
console.log(`Points de vie du tueur : ${tueurPointsDeVie}`)

if (survivantPointsDeVie < tueurPointsDeVie) {
    console.log("Le héros a été exécuté par tueur, le tueur l'emporte!");
  } else if (tueurPointsDeVie < survivantPointsDeVie) {
    console.log("Le tueur a été vaincu par le survivant ! Le survivant gagne !");
  } else {
    console.log("Le combat se termine en match nul. Le survivant et le tueur sont tous les deux épuisés !");
  }

// Je n'ai malheureusement pas compris comment faire le jeux initial avec les 5 personnages et le système du constructor.
// J'ai donc préféré faire un petit jeu au lieu de ne rien rendre. 
// Même si le jeu n'est pas parfait c'est le max que je peux faire. 

