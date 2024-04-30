//ismei comment me sabkch jo use hua hai wo describe kia hai
let cardArray = [      
    {
        'name': 'burger',//two properties of one ele
        'img': 'images/Burger Cartoon Free Pictures｜Illustoon.jpeg'
    },
    {
        'name': 'coke',
        'img': 'images/Coca-Cola Simple Bottle Modern Pop Art Floor Graphic - 13 x 48.jpeg'
    },
    {
        'name': 'fries',
        'img': 'images/_Hot crispy french fries_ Sticker for Sale by Denis Pisarovsky.jpeg'
    },
    {
        'name': 'tacco',
        'img': 'images/Taco.jpeg'
    },
    {
        'name': 'pizza',
        'img': 'images/Pizza Pillow _ Zazzle.jpeg'
    },
    {
        'name': 'icecream',
        'img': 'images/Download premium psd _ image of Psd vintage ice cream dull colorful cartoon illustration by Noon about ice cream, dessert, cream roll sticker, instagram story, and peach drawn 2567052.jpeg'
    }
];
//neeche humne bahut saare divs js ka use krke kia jo html me ho skte the
const parentdiv = document.querySelector('#sec');// Once assigned, the value of a const variable cannot be reassigned. However, for objects and arrays declared with const, their properties or elements can be modified, but the variable itself cannot be reassigned to a different object or array.


//doubling the array
const gamecard= cardArray.concat(cardArray)



//here we are randomizing the cards
let shuffledArray = Array.from(gamecard).sort(() => 0.5 - Math.random());
/*Array.from(gamecard): This takes the elements in gamecard (which I assume is an array-like object, like a NodeList from querying DOM elements) and creates a new array containing those elements. It ensures that we have a proper array to work wi.sort(): This is a method in JavaScript that sorts the elements of an array. By default, it sorts elements alphabetically if they're strings, or numerically if they're numbers. But we want to shuffle the elements randomly, so we'll provide a special function inside sort().
 () => 0.5 - Math.random(): This is a function that generates a random number between -0.5 and 0.5. When sort() uses this function to compare elements, it essentially shuffles them randomly. Here's how it works:
Math.random() generates a random number between 0 and 1.
 0.5 - Math.random() subtracts this random number from 0.5, giving us a value between -0.5 and 0.5.
The sort() function uses this value to randomly reorder the elements of the array*/

let clickcount=0;
let firstcard="";
let secondcard="";

const card_matches=()=>
{
let card_selected = document.querySelectorAll('.card_selected');

card_selected.forEach((ele)=>{
ele.classList.add('card_match')
})
}

const resetgame=()=>{
    firstcard="";
    secondcard="";
    clickcount=0;
    let card_selected = document.querySelectorAll('.card_selected');

card_selected.forEach((ele)=>{
ele.classList.remove('card_selected');
})
}

parentdiv.addEventListener('click',(event)=>{
    let curcard=event.target;
    if(curcard.id === 'sec'){
        return false;
    }  
    clickcount++;
if(clickcount<3){
   if(clickcount===1){
    firstcard = curcard.parentNode.dataset.name;
    
   curcard.parentNode.classList.add('card_selected');
   }else{
    secondcard=curcard.parentNode.dataset.name;
    
   curcard.parentNode.classList.add('card_selected');
   }

   if(firstcard!=="" && secondcard!==""){
    if(firstcard === secondcard){


        setTimeout(()=>
    {
        card_matches();
        resetgame();
    },1000)
      
    }else{
        setTimeout(()=>
    {
        resetgame();
    },1000)
    }
   }
}

 // yha kya hora hai jb , click krre hai to border pure parent div pe bhi gg jaara hau, better tbhi hoga jb usko bolde ki jb id = sec  hoto mt kro border purple, kewl chote divs pe select krne se hoga purple


})





for (let i = 0; i < shuffledArray.length; i++) {
    const childdiv = document.createElement('div'); //ye ek naya div create krta hai
    childdiv.classList.add('card');//add() method in classlist ek naya class add krta hai,a method is a function that is associated with an object. It allows objects to perform actions or have functionality.
    childdiv.dataset.name = shuffledArray[i].name; //ye jitne bhu class hai us=nko unique data-name dega jiska use krke we can matcha nd do functions
    // childdiv.style.backgroundImage = `url("${shuffledArray[i].img}")`; // $ it's part of the string interpolation syntax aur use kia h style tag chikdiv pe taaki uske url ki jgh cardarray ka img prt aajae,The ${} syntax is used to include the URL of the image from the cardArray dynamically within the url() function call, allowing you to set the backgroundImage style property of the childdiv
    childdiv.style.backgroundSize = 'cover'; // Adjust the background size
    childdiv.style.backgroundPosition = 'center'; // Adjust the background position
    childdiv.style.backgroundRepeat = 'no-repeat';


    const front_div = document.createElement('div');//2 divs front and back for the solid color and the img thing on one div
    front_div.classList.add('front-card');

    const back_div = document.createElement('div');
    back_div.classList.add('back-card');
    back_div.style.backgroundImage = `url("${shuffledArray[i].img}")`; // $ it's part of the string interpolation syntax aur use kia h style tag chikdiv pe taaki uske url ki jgh cardarray ka img prt aajae,The ${} syntax is used to include the URL of the image from the cardArray dynamically within the url() function call, allowing you to set the backgroundImage style property of the childdiv
    parentdiv.appendChild(childdiv);
    childdiv.appendChild(front_div);
    childdiv.appendChild(back_div);

}
