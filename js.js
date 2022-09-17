const myVar = document.querySelector('.headings');

console.log(5+7)


console.log(myVar)


let VariableName = document.querySelector('.headings');

const objJS = {
    name: 'john',
    age: 34,
    add: '78 bah lane'
}

console.log(objJS.name + " " + " welcome")

 for(i in objJS){
     console.log(i)
 }

 function funcName(name) {
     console.log(2*9)
     this.name = name;
        console.log(name)
     return name;
 }

 funcName('jeremiah');

 let title1 = document.title ='my DOM Lesson'

 console.log(title1)

 var list = document.getElementById("list");

 //console.log(list);

 //list.innerText ='fruit';

 //list.textContent ='fruits';


 // Traversing to nodes

 /*

 HTML is the head of the body
 HTML has no parent is the parent for head and body
 HEAD is the second child of the body
 BODY  is the last child of the body
 

 the head holds title, meta and links

                   AND 

 h1, div, img, p, anchor and more in the body 


 */

 var listContent = document.querySelector("#list");

 //console.log(listContent);
 //console.log(listContent.parentNode);
 //console.log(listContent.parentElement);


 //var body = document.querySelector('body');
 //console.log(body.parentNode);
 //console.log(body.parentElement);


 // 
 //console.log(body.parentNode);
 //onsole.log(body.parentElement);
 //console.log(body.children)

 // childnode and childElement


 //var listContent = document.querySelector("#list");
 //console.log(listContent.childNodes);
//console.log(listContent.children);

listContent.children[1].style.color='red';
//console.log(listContent.children[3]);

//console.log(listContent.firstChild);

//console.log(listContent.firstElementChild);

//console.log(listContent.lastChild);

//console.log(listContent.lastElementChild);

listContent.lastElementChild.style.backgroundColor='orange';


//console.log(listContent.previousSibling);
//console.log(listContent.previousElementSibling);

//console.log(listContent.previousElementSibling.previousElementSibling);

//console.log(listContent.nextSibling);
//console.log(listContent.nextElementSibling);

//console.log(listContent.nextElementSibling.nextElementSibling);




// creating html element


var createNewElement = document.createElement('h1');

console.log(createNewElement);

createNewElement.className="headingss";

createNewElement.id="headingsss";

createNewElement.setAttribute("title", "myHeading");

var myHeadingContent = document.createTextNode("am adding content to my new heading");

createNewElement.appendChild(myHeadingContent);

var body = document.querySelector("body");

var paragraph = document.querySelector("domSession");

body.insertBefore(createNewElement,paragraph);

//REMOVING HTML ELEMENT

var removingElement =  document.querySelector("h1");
removingElement.remove();

var button = document.querySelector("h2");

//body.removeChild(button);


// REPLACING ELEMENTT

//var replacingContent = document.querySelector("p");

//body.replaceChild(myHeadingContent, replacingContent )

// EVENT IN JS

