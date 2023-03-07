nombre = prompt("Inserta tu nombre")
let selecciona =prompt("Selecciona el sistema de calificación que deseas emplear.   1.) Tradicional    2.) PointRange    3.) Letra   ");
parseInt(selecciona);
let tablaa=[
    {Tradicional: "90-100", PointRange: "12-14", Letter: "A", SGBRating: "4", Proficiency: "Exceeds proficiency"},
    {Tradicional: "70-79", PointRange: "9-11", Letter: "B", SGBRating: "3", Proficiency: "Demonstrates proficiency"},
    {Tradicional: "70-79", PointRange: "6-8", Letter: "c", SGBRating: "2", Proficiency: "Approaches proficiency"},
    {Tradicional: "60-69", PointRange: "3-5", Letter: "D", SGBRating: "1", Proficiency: "Falls well bellow proficiency"},
    {Tradicional: "<60", PointRange: "1-2", Letter: "E", SGBRating: "0", Proficiency: "Lacks all proficiency"},
    {Tradicional: "0", PointRange: "0", Letter: "Z", SGBRating: "0", Proficiency: "No attemp made"}
]
console.table(tablaa,["Tradicional", "PointRange", "Letter", "SGBRating", "Proficiency"]);
while(selecciona){
    if(selecciona == 1){
        let r1 = prompt("Digita tu calificacion en tradicional, del 0 hasta el 100")
        if(r1 >= 90 && r1 <= 100){
            console.log(nombre + ", tu Point Range está entre: 12-14; tu letra es: A; y tu SBG Rating es de: 4. Muy bien todo, pero deja el vicio bro, sal a la calle un rato y socializa -.-")
        }
        else if (r1 >= 80 && r1 <= 89){
            console.log(nombre + ", tu Point Range está entre: 9-11; tu letra es: B; y tu SBG Rating es de: 3. Muy bien, solo que te faltaron puntos para la excelencia, mediocre esforzate más :/")
        }
        else if(r1 >= 70 && r1  <= 79){
            console.log(nomre + ", tu Point Range está entre: 6-8; tu letra es: C; y tu SBG Rating es de: 2. Regular, ponete a estudiar para que almenos subas un rango, aunque si bajas es mucho mejor para nosotros :)")
        }
        else if(r1 >= 60 && r1 <= 69){
            console.log(nombre + ", tu Point Range está entre: 3-5; tu letra es: D; y tu SBG Rating es de: 1. Tu estás mas afuera que adentro, preparate para estudiar en otro instituto porque a este no entras mas =)")
        }
        else if(r1 <60 && r1 != 0){
            console.log(nombre + ", tu Point Range está entre: 1-2; tu letra es: E; y tu SBG Rating es de: 0. Excelente, casi el peor rango, a la proxima te esfuerzas para ser el peor y no dejar las cosas a medias, si haces algo lo haces bien o no lo haces :D")
        }
        else if(r1 == 0){
            console.log(nombre + ", tu Point Range está en: 0; tu letra es: Z; y tu SBG Rating es de: 0. Felicitaciones, el rango mas bajo y el peor, podes sentirte como un fracasado total toda tu vida y ni te vuelvas a aparecer por aqui porque te sacamos a machetazos :3")
        }   
        else {
            alert("Ingresa un valor valido...");
            setTimeout(function(){
                window.location.reload();
             }, 1500);
        }
    }
    else if(selecciona == 2){
        let r2 = prompt("Digita tu calificacion en Point Range, de 0 hasta 14")
        if(r2 <= 14 && r2 >= 12){
            console.log(nombre + ", tu puntaje tradicional está entre 90-100; tu letra es: A; y tu SBG Rating es de: 4. Muy bien todo, pero deja el vicio bro, sal a la calle un rato y socializa -.-")
        }
        else if (r2 <= 11 && r2 >= 9){
            console.log(nombre + ", tu puntaje tradicional está entre 80-89; tu letra es: B; y tu SBG Rating es de: 3. Muy bien, solo que te faltaron puntos para la excelencia, mediocre esforzate más :/")
        }
        else if(r2 <= 8 && r2 >= 6){
            console.log(nombre + ", tu puntaje tradicional está entre 70-79; tu letra es: C; y tu SBG Rating es de: 2. Regular, ponete a estudiar para que almenos subas un rango, aunque si bajas es mucho mejor para nosotros :)")
        }
        else if(r2 <= 5 && r2 >= 3){
            console.log(nombre + ", tu puntaje tradicional está entre 60-69; tu letra es: D; y tu SBG Rating es de: 1. Tu estás mas afuera que adentro, preparate para estudiar en otro instituto porque a este no entras mas =)")
        }
        else if(r2 <= 2 && r2 >= 1){
            console.log(nombre + ", tu puntaje tradicional está entre 1-60; tu letra es: E; y tu SBG Rating es de: 0. Excelente, casi el peor rango, a la proxima te esfuerzas para ser el peor y no dejar las cosas a medias, si haces algo lo haces bien o no lo haces :D")
        }
        else if(r2 == 0){
            console.log(nombre + ", tu puntaje tradicional está en 0; tu letra es: Z; y tu SBG Rating es de: 0. Felicitaciones, el rango mas bajo y el peor, podes sentirte como un fracasado total toda tu vida y ni te vuelvas a aparecer por aqui porque te sacamos a machetazos :3")
        } 
        else {
            alert("Ingresa un valor valido...");
            setTimeout(function(){
                window.location.reload();
             }, 1500);
        }
    }
    else if(selecciona == 3){
        let r3 = prompt("Digita tu calificacion con la letra (A, B, C, D, E, Z)");
        if(r3 == "A"){
            console.log(nombre + ", tu puntaje tradicional está entre 90-100; tu Point Range está entre: 12-14; y tu SBG Rating es de: 4. Muy bien todo, pero deja el vicio bro, sal a la calle un rato y socializa -.-")
        }
        else if (r3 = "B"){
            console.log(nombre + ", tu puntaje tradicional está entre 80-89; tu Point Range está entre: 9-11; y tu SBG Rating es de: 3. Muy bien, solo que te faltaron puntos para la excelencia, mediocre esforzate más :/")
        }
        else if(r3 = "C"){
            console.log(nombre + ", tu puntaje tradicional está entre 70-79; tu Point Range está entre: 6-8; y tu SBG Rating es de: 2. Regular, ponete a estudiar para que almenos subas un rango, aunque si bajas es mucho mejor para nosotros :)")
        }
        else if(r3 = "D"){
            console.log(nombre + ", tu puntaje tradicional está entre 60-69; tu Point Range está entre: 3-5; y tu SBG Rating es de: 1. Tu estás mas afuera que adentro, preparate para estudiar en otro instituto porque a este no entras mas =)")
        }
        else if(r3 = "E"){
            console.log(nombre + ", tu puntaje tradicional está entre 1-60; tu Point Range está entre: 1-2; y tu SBG Rating es de: 0. Excelente, casi el peor rango, a la proxima te esfuerzas para ser el peor y no dejar las cosas a medias, si haces algo lo haces bien o no lo haces :D")
        }
        else if(r3 = "Z"){
            console.log(nombre + ", tu puntaje tradicional está en 0; tu Point Range está en: 0; y tu SBG Rating es de: 0. Felicitaciones, el rango mas bajo y el peor, podes sentirte como un fracasado total toda tu vida y ni te vuelvas a aparecer por aqui porque te sacamos a machetazos :3")
        }   
        else {
            alert("Ingresa un valor valido...");
            setTimeout(function(){
                window.location.reload();
             }, 1500);
        }
    }
    else {
        alert("Ingresa un valor valido...");
        setTimeout(function(){
            window.location.reload();
         }, 1500);
    }
    break;
}