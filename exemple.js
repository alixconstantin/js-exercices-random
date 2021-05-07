
let cats =
         [  'black cat',
            'white cat',
            'blue cat'
            ];

//boucle
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
You have a really beautifulblack cat

You have a really beautifulwhite cat

You have a really beautifulblue cat
*/

////////////////////////////////






