//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

// for (let item in person3){
//     console.log(item)
// };
// console.log(Object.keys(person3))  
// console.log(Object.values(person3))  

const keysArray = Object.keys(person3);
const tacosArray = person3.tacos.split(" ");

function person3FavFoods(){
        console.log(`Person3's favourite types of ${keysArray[0]} are ${person3[keysArray[0]][0].toLowerCase()} and ${person3[keysArray[0]][1].toLowerCase()}.`)
        console.log(`For ${keysArray[1]} person3 likes ${tacosArray[0].toLowerCase()} that's ${tacosArray[1]} ${tacosArray[2]} ${tacosArray[3]} ${tacosArray[4]}. `)
        console.log(`Person3's favourite ${keysArray[2]} is ${person3[keysArray[2]].toLowerCase()}. `)
        console.log(`For ice cream person3 like ${person3[keysArray[3]][0].toLowerCase()}, ${person3[keysArray[3]][1].toLowerCase()} and ${person3[keysArray[3]][2].toLowerCase()}.`)
        console.log(`If person3 has to pick ${keysArray[4]}, he prefers ${person3.shakes[0].oberwise.toLowerCase()} from Oberwise, ${person3.shakes[0].dunkin.toLowerCase()} from Dunkin, 
${person3.shakes[0].culvers.toLowerCase()} options form Culvers, ${person3.shakes[0].mcDonalds} from McDonalds, and ${person3.shakes[0].cupids_candies.toLowerCase()} from Cupids candies.
 `)
};
person3FavFoods()


//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype
// Use an arrow to create the printInfo method
// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 

console.log("===============================")

function Person(name, age){
    this.name = name;
    this.age = age;

    this.printInfo = () => {
        console.log(`Name: ${this.name} , Age: ${this.age}`);
    };

    this.addAge = () => {
        this.age++
    };
};

const Person1 = new Person("Ronaldo", 37);
const Person2 = new Person("Zidane", 50);

Person1.printInfo()
Person2.printInfo()

Person1.addAge()
Person1.addAge()
Person1.addAge()

Person1.printInfo()
Person2.printInfo()


// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/
console.log("===============================")

new Promise((resolve, reject)=>{})

const stringLength = (string) => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if (string.length <= 10){
                resolve("Small word");
            } else {
            reject("Big word");
            }
        }, 2000)
    })
}

stringLength("Accommodation")
.then((resolveData)=>{
    console.log(resolveData, 'FROM .THEN')
})
.catch((rejectData)=>{
    console.log(rejectData, 'FROM .CATCH')
})


stringLength("Hi")
.then((resolveData)=>{
    console.log(resolveData, 'FROM .THEN')
})
.catch((rejectData)=>{
    console.log(rejectData, 'FROM .CATCH')
})

console.log("===============================")

// These are my codes from codewars but i dont know why they show error when i paste here.



// Get the Middle Character
// You are going to be given a word. Your job is to return the middle character of the word. 
// If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

class Kata {
    public static String getMiddle(String word) {
      int length = word.length();
      int mid = length/2;
      
      if (length%2 == 0) {
        return word.substring(mid-1, mid+1);
      } else{
        return word.substring(mid, mid+1);
      }
    }
  }



// Take an array and remove every second element from the array. Always keep the first element and 
// start removing with the next element.



  public class Kata {
  
    public static Object[] removeEveryOther(Object[] arr) {
      Object[] result = new Object[(arr.length + 1) / 2];
      
      for (int i = 0, j = 0; i < arr.length; i += 2, j++) {
              result[j] = arr[i];
          }
          
          return result;
    }
  }