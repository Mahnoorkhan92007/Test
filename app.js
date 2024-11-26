//template literals
function greetuser(name, timeofday) {
    return `Good ${timeofday} ${name}!`;

}
const greet = greetuser("Mahnoor", "Morning");
document.write(greet);


//Arrow function
const add = (a, b) => { return a + b };
console.log(add(2, 2))
//OR

const add1 = (a, b) => a + b;
console.log(add(2, 2));

//Resolve a Promise

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Success!');
    }, 1000);
    setTimeout(() => {
        reject('Failed!');
    }, 1000);
});

myPromise
    .then((result) => {
        console.log(result);
            })
    .catch((error) => {
        console.log(error); 
    });

   


//jab promise fulfill hojata hai tab chalta hai .then 



//Destructuring and Default Parameters

const user = { name: 'John', age: 25, city: 'New York' };
function Default1(Name = 'John', City = 'NewYork') {
    console.log(Name, City);
}
const nam1 = Default1('mahnoor', 'karachi')


//1. Variable Scoping and Closure


function createCounter() {
    let count = 0; 

    return {
        increment: function() {
            count++; 
            console.log(count); 
        },

        reset: function() {
            count = 0; 
            console.log(count);  
        }
    };
}




const counter = createCounter();
counter.increment();
counter.increment();
counter.increment();

counter.reset();
