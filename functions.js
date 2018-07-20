//Call and Apply Methods
const clark = { name: 'Clark'};
const bruce = { name: 'Bruce'};

console.log(sayHello.call(clark));

function sayHello(greeting='Hello'){
    return `${ greeting }, my name is ${ this.name }`
}

console.log(sayHello.call(clark, 'How do you do'));

console.log(sayHello.call(bruce));

//Memoizaiton
function square(x){
    square.cache = square.cache || {};
    if (!square.cache[x]) {
        square.cache[x] = x*x;
    }
    return square.cache[x]
}

//Temporary Variables
let a = 1;
let b = 2;

(()=>{
    const temp = a;
    a = b;
    b = temp;
})();

  console.log(`Welcome back ${name}. Today is ${today}`);

//Define and Re-Define
function party(){
    console.log('Wow this is amazing!');
    party = function(){
        console.log('Been there, got the T-Shirt');
    }
}

//Init-Time Branching
function ride(){
    if (window.unicorn) {
        ride = function(){
            // some code that uses the brand new and sparkly unicorn methods
            return 'Riding on a unicorn is the best!';
        }
    } else {
        ride = function(){
            // some code that uses the older pony methods
            return 'Riding on a pony is still pretty good';
        }
    }
    return ride();
}