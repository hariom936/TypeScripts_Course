// Type Annotation.....

const age: number = 3 

let firstName: string = 'hariom'
let iMarried: boolean = false
let noValue: null = null
let notAssiged: undefined = undefined
let today: Date = new Date()


//****************** *//
//Array


let planets: string[] =['earth', 'mars']
let luckyNumber: number[] =[3,2,1];
let completed: boolean[] =[false, true]

//classes
class Phone{}
let phone: Phone = new Phone();


//Object Literals
let product:{name: string; price:number} ={
name:'pen',
price:12
}


//Functions

const printer =(content:string) =>{
   console.log(content) 
}

// 'any' type
// Functions that returns the 'any' type
// 'any' type is a type like others(string, number)
// typescript cannot do any error checking around variables with 'any' type
const place = '{"lat": 55, "lon": -20}';
const newLocation = JSON.parse(place)
console.log(newLocation) // any type annotation
newLocation.abc // it will not give any error because this is of 'any' type



const place2 = '{"lat": 55, "lon": -20}';
const newLocation2: { lat: number, lon: number } = JSON.parse(place) // fixing 'any' type
console.log(newLocation2) 
// newLocation2.abc // now it will give error


// Initialize variable later
const forecast = ['sunny', 'rain', 'wind', 'cloudy']
let isSunny: boolean;

for (let i = 0; i < forecast.length; i++) {
    if (forecast[i] === "sunny") {
      isSunny = true;
    }
  }

  // Type can't be inferred correctly
let temperature = [8, 5, -2, 10]
let subZero: boolean | number = false;

for (let i = 0; i < temperature.length; i++) {
  if (temperature[i] < 0) {
    subZero = temperature[i]
  }
}

  
