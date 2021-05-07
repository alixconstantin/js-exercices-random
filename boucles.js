//Les boucles, mais encore ? //
let cats =
         [  'black cat',
            'white cat',
            'blue cat'
            ];


for (var cat = 0; cat < cats.length; cat++) {

    console.log(cats[cat]); 
// result : black cat white cat blue cat
}



////////////////////////////////
//Methode équivalente
cats.forEach(function(meow){
    console.log("I love cats, i got a " + meow);
});

/* result :
I love cats, i got a black cat
I love cats, i got a white cat
I love cats, i got a blue cat */


//////////////////////////////// 
// Afficher chaques message après 1 seconds avec SettimeOut (0,1,2)
// setTimeout(function(){ alert("Hello"); }, 3000);

for (let pet = 0; pet < cats.length; pet++){

     setTimeout(function () {
         
        console.log("You have a really beautiful " + cats[pet]);
        }, pet * 1000); // 1000 millisecondes 
     }
/*
You have a really beautiful black cat

You have a really beautiful white cat

You have a really beautiful blue cat
*/

////////////////////////////////
// La méthode : map
// elle ressemble beaucoup a forEach, sauf que forEach ne retourne rien

// /!/  // cette methode ne retourne RIEN
 const machin = cats.forEach(function(meow){return meow});
// /!/  // cette methode ne retourne RIEN

// map va toujours renvoyer un nouveau tableau, avec autant d'éléments que celui de base

const truc = cats.map(function(meow){
    //ce que me return a l'interieur de map fera partie du nouveau tableau
});

const prout = cats.map(function(meow){
        
    return " You really have a beautiful " + meow ;
});

console.log(prout); 

////////////////////////////////
//créer un nouveau tableau a partir d'un autre avec la boucle map  

const spa = [
{
    name : 'Clara',
    age  : 18
},
{
    name : 'Morgane',
    age  : 28
},
{
    name : 'Philippe',
    age  : 67
},
];


const rolala = spa.map(function(ObjectPerson){
    return  "My name is " + ObjectPerson.name + " and i've actualy " + ObjectPerson.age + " years old !";

});
