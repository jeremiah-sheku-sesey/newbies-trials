// ADD EVENT LISTENER

/*

var button = document.querySelector("button");
button.addEventListener("click", function(){
    console.log("javaScript Lesson");
})



 myOwnFunction1 =function myOwnFunction(){
     var i = 10;
     if(i === 10){
           console.log("good");
     }else{
    console.log(23*89);
     }
}

button.addEventListener("click", myOwnFunction1);

var button = document.querySelector("button");

button.addEventListener("click", myOwnFunction);

function myOwnFunction(event){
  
          console.log(event);

}

*/



// PARAMETERS & ARGUMENTS


/*

var myown = (name) => {
    console.log(name)
}

button.addEventListener("click", myown('i am a recursive function'));


*/

//MouseEvent

var anotherDivVariable = document.querySelector('.anotherDiv');

console.log(anotherDivVariable)

anotherDivVariable.addEventListener('click', myAnotherDiv);


function myAnotherDiv(e){
    //console.log('you are in');
   /*

    anotherDivVariable.style.backgroundColor = " rgb("+e.offsetX+","+e.offsetY+",23)";
    console.log(e.offsetX);
    console.log(e.offsetY);


    var body = document.querySelector('body');
    body.style.backgroundColor ="rgb("+e.offetX+ "," +e.offetY + ",78)";

   */

    anotherDivVariable.style.backgroundColor = "rgb("+e.clientX+","+e.clientY+",233)";
    console.log(e.clientX);
    console.log(e.clientY);
}


// var input events
var anotherDivVariablett = document.querySelectorAll('input');
console.log(anotherDivVariablett);

//anotherDivVariablett.addEventListener('keypress', AnotherDiv);

function AnotherDiv(e){
    console.log(e.type);
    createMe.innerHTML=e.target.value;
}


var createMe = document.createElement('p')//.innerHTML='i am created';
var creatingATextNode = document.createTextNode('i am a text node');
createMe.appendChild(creatingATextNode);
var anotherDivVariable2 = document.querySelector('.anotherDiv');
anotherDivVariable.appendChild(createMe).style.color='aqua';
console.log(createMe);




// blur and focus event funcion



//submit event function

var form = document.querySelector('form');
form.addEventListener('submit',submitFunction);

function submitFunction(e){
    e.preventDefault();
    console.log(e.type);

}