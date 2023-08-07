//introduction to classes

class Employee{
    //modifiers are three types -> public, private, protected
    //public call any where.
    //private call in same class.
    //protected call in same classsa nd child classes.

    // public startShift(): void{
    //     console.log('Employee start to shift');
    // }

    public endShift(): void{
        console.log('Shift has beem ended')
    }



}

const employee = new Employee();
// employee.startShift();
employee.endShift();

// typescript inheritance

class Mechanic extends Employee{
    private startShift(): void {
        console.log('Mechanic started to shift');
    }
    // modifiers uses
    goToWork(): void{
        this.startShift();
    }
}


const mechanic = new Mechanic();
mechanic.goToWork();
mechanic.endShift();


//classes ,
// fields: A field declaration creates a public writeable property on a class.


// readonly: Fields may be prefixed with the readonly modifier. This prevents assignments to the field outside of the constructor.

// class Greeter {
//     readonly name: string = "world";
   
//     constructor(otherName?: string) {
//       if (otherName !== undefined) {
//         this.name = otherName;
//       }
//     }
   
//     err() {
//       this.name = "not ok";
//   Cannot assign to 'name' because it is a read-only property.
//     }
//   }

//Constructors
class Point {
    x: number;
    y: number;
   
    // Normal signature with defaults
    constructor(x = 0, y = 0) {
      this.x = x;
      this.y = y;
    }
  }
