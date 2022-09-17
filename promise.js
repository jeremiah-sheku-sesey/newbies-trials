/*


// first exporation of the ice cream project

    // ice cream delivery


let myIceCreamMaterials = {
    Fruits : ["strawberry", "grapes", "banana", "apple", "mango"],
    Holder : ["cone", "cup", "stick"],
    liquid : ["water", "ice"],
    Topping : ["chocolate", "sprinkles"]
}

    console.log(myIceCreamMaterials.Fruits[2]);
    console.log(myIceCreamMaterials.Holder[1]);
    console.log(myIceCreamMaterials.Topping[0]);
    console.log(myIceCreamMaterials.liquid[0]);

let order = (callProduction)=>{
    console.log('i am from the order function, call production function');
    callProduction()
}

let production = ()=>{
    console.log('i am the production function, and i am here');
}


// order(production);

// setting a timeout

setTimeout(()=>{
    order(production);
},4000);



    // promises, await & async

console.log("I");

console.log("eat");

setTimeout(()=>{
    console.log("ice cream");
},4000)

console.log("with a");

console.log("spoon");



setTimeout(()=>{
    console.log(myIceCreamMaterials.Fruits[0]);
},7000)

// calling a function inside another function is a callback


fruitName=myIceCreamMaterials.Fruits[0]
console.log(fruitName);



// ice cream delivery

// declaring an array

let myIceCreamMaterials = {
    Fruits : ["strawberry", "grapes", "banana", "apple", "mango"],
    Holder : ["cone", "cup", "stick"],
    liquid : ["water", "ice"],
    Topping : ["chocolate", "sprinkles"]
}


// order function

let order = (fruitName, callProduction)=>{
    setTimeout(()=>{
        console.log(`${myIceCreamMaterials.Fruits[fruitName]} was selected`);
        // calling production function
        callProduction();
    },2000);
    

   
};


// production function

let production = ()=>{

    //nested timeout
    setTimeout(()=>{
        console.log('production has started');

        setTimeout(()=>{
            console.log('The fruits has been chopped');

            setTimeout(()=>{
                console.log(`${myIceCreamMaterials.liquid[0]} and ${myIceCreamMaterials.liquid[1]} were added`);

                setTimeout(()=>{
                    console.log('The machince has started');
                    setTimeout(()=>{
                        console.log(`The ice cream was place in the ${myIceCreamMaterials.Holder[0]}`);
                        setTimeout(()=>{
                            console.log(`${myIceCreamMaterials.Topping[1]} was added as topping`);
                            setTimeout(()=>{
                                console.log("serve ice cream");
                            
                            
                            },2000);
                        },3000);
                    },2000);
                },1000);
    
            },1000)

        },2000);

    },0000);
};


//passing an array index of zero which holds strawberry as an agument to the fruitName parameters and
// also passing the production variable to the callProduction function
  order(0,production);

   let order = (time,work)=>{
    return new Promise( (resolve, reject) =>{
        if(is_shop_open){
            setTimeout(()=>{
                resolve( work() )
            }, time);  
        }
        else{
            reject(console.log("Sorry, our shop is close!"))
        }
    })
 
 }

// calling the function
// in the function call we must pass two function the time and work

order(2000,()=>console.log(`${myIceCreamMaterials.Fruits[0]} was selected`))
.then( ()=>{
    return order(0000,()=>console.log('production has started'))
})

.then( ()=>{
    return order(1000,()=>console.log( 'The fruits has been chopped'))
})

.then(()=>{
    return order(2000,()=> console.log( `${myIceCreamMaterials.liquid[0]} and ${myIceCreamMaterials.liquid[1]} were added`))
} )

.then(()=>{
    return order(2000, ()=>console.log( 'The machince has started'))
})

.then( ()=>{
    return order(3000,()=>console.log( `The ice cream was place in the ${myIceCreamMaterials.Holder[0]}` ))
})

.then( ()=>{
    return order(1000,()=>console.log( `${myIceCreamMaterials.Topping[1]} was added as topping`))
})

.then( ()=>{
    return order(1000,()=>console.log("serve ice cream" ))
})


// handling errors(.catch(()=>{}))
//when ever u are using one line statement code with arrow functions u can easy exclude the {collerBraces}
.catch((    )=>console.log("customer left") 
)

// our FINALLY handler
// this function and the one in the the .catch function are the same 
.finally(()=>{
    console.log("thank you!") 
});

*/



// ice cream delivery

// declaring an array

let myIceCreamMaterials = {
    Fruits : ["strawberry", "grapes", "banana", "apple", "mango"],
    Holder : ["cone", "cup", "stick"],
    liquid : ["water", "ice"],
    Topping : ["chocolate", "sprinkles"]
}

// forming the relationship


 let is_shop_open = false;



/*

()=>{
        return order(console.log( ))
    }

 setTimeout(()=>{

            }, )

    // setting a timeout

setTimeout(()=>{
    order(production);
},4000);

*/