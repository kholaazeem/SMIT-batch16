// class Student {
//     name:string
//     rollNo:number
//     email:string
//     constructor(n:string,r:number,e:string){
//     this.name = n
//     this.rollNo = r
//     this.email = e
//     }
// }
// let user1 = new Student("ali",72364,"ali@gmail.com")
// let user2 = new Student("haya","2343","haya@gmail.com") // error
// console.log(user1,user2);
// class Student {
//   public name:string
//    public rollNo:number
//    private email:string
//     constructor(n:string,r:number,e:string){
//     this.name = n
//     this.rollNo = r
//     this.email = e
//     }
// }
// let user1 = new Student("ali",72364,"ali@gmail.com")
// // console.log(user1.email); // private prop not access
// // console.log(user1.rollNo);  //72364 
// class Student {
//     constructor(public name:string,public rollNo:number,public email:string){
//     }
// }
// let user1 = new Student("ali",72364,"ali@gmail.com")
// console.log(user1); 
// class Student {
//    private grades :string[] = []
//     constructor(public name:string,public rollNo:number,private email:string){
//     }
//     getGrades(g:string){
//     this.grades.push(g)
//     }
// }
// let user1 = new Student("ali",72364,"ali@gmail.com")
// user1.getGrades(345346) //error num is not assign to string
// user1.getGrades("c")
// console.log(user1);
//  getter , setter 
class Person {
    constructor(age, firstName, lastName) {
        this._age = age;
        this._firstName = firstName;
        this._lastName = lastName;
    }
    get age() {
        return this._age;
    }
    set age(theAge) {
        if (theAge <= 18 || theAge >= 40) {
            throw new Error('The age is invalid');
        }
        this._age = theAge;
    }
}
let user1 = new Person(18, "hira", "ekram");
console.log(user1.age); //getter {18} access
user1.age = 60;
console.log(user1.age);
export {};
//# sourceMappingURL=app.js.map