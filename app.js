/*
Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore.
*/

const bikes = [
    {

        modello: 'triban',
        peso: '18'

    },
    {

        modello: 'scott',
        peso: '17'

    },
    {

        modello: 'mountain',
        peso: '20'

    },

];

const lighterBike = bikes[0]

for (let i = 0 ; i < bikes.length ; i++ ) {
    const currentElement = bikes[i];

    if (currentElement.peso < lighterBike.peso){
        console.log(currentElement)
    }
}





/*
Snack2
Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
*/

const footballClub = [
    {

     nome: 'Juventus',
     puntiFatti: 0 ,
     falliSubiti: 0
     

    },
    {

     nome: 'Roma',
     puntiFatti: 0,
     falliSubiti: 0

    },
    {

     nome: 'Inter',
     puntiFatti: 0,
     falliSubiti: 0

    },
    {

     nome: 'Genoa',
     puntiFatti: 0,
     falliSubiti: 0

    },
    {

     nome: 'Fiorentina',
     puntiFatti: 0,
     falliSubiti: 0

    },

];

const min = 0
const max = 20

function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

for ( let i = 0 ; i < footballClub.length ; i++){

    footballClub[i].puntiFatti = generateRandomNumber(min,max);
    footballClub[i].falliSubiti = generateRandomNumber(min,max);
    delete footballClub[i].puntiFatti;
}



//console.log(footballClub)

const newArray = []

newArray.push (footballClub)

console.log(newArray)




/*
Snack 3 (Bonus)
Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
*/


