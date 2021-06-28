/* setTimeout(function () {
         alert("hello");
}, 1000)

//setInterval
var i=0;
let myFunc = setInterval(function () {
        console.log(i);
        i++;
        if(i==4){
        clearInterval(myFunc);
        }
    },2000) */
const animalsList = document.getElementById("myImg");
let animals = [
     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFV5HaspK5Dt3uT14IJblp04jEmTfouk0AOg&usqp=CAU",
     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXaEQhCCRmy_AUFr1QZvCMFpFWZn44x_DmWA&usqp=CAU",
     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1w-Bry-PX42X8tFiwIW9GER0t5kV8WDpGxA&usqp=CAU",
     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrflvEwhr36G-GpC3ILAk_f5Boy3vEl6S0gw&usqp=CAU"
];
let i=0;  
    setInterval( function(){
        if(i<animals.length){
        animalsList.src = animals[i];
        i++;
        }else{
            i=0;
        }
    },2000);
    