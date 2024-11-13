// let count : number = 10

// let arr:number[] =[]
// arr.forEach(n=>n.toFixed)



// export{}
// const name : string = "Adith"; 


// const isStudent:boolean= true;

// let bag :number[]=[1,2,3,3,4,5]

// let something: Array<number>=[1,2,3]

// let position :(number | string)[]=[1,"a",1,"ab"]

// console.log(bag);

// const multidim : (string | number)[][]=[["as"],["ad"]]

// // tuples

// let ages : [number, string] = [1,"ad"]

// // any data type

// let obj : any = {
//     mane:"new"
// }

// obj.name= 1234

// // type annotation and infering it automatically to return type abd anonymous function

// // type checking can be done for a function which takes object as a parameter
// function printColour(colour: {name:string, itemCode:number, palate:string}){
//     console.log(`This is ${colour.name} with ${colour.itemCode}`);
    
// }

// printColour({name:"white",itemCode:123,palate:"some"})
// // optional properties - ?
// function printColour1(colour: {name:string, itemCode?:number, palate:string}){
//     console.log(`This is ${colour.name} with ${colour.itemCode}`);
    
// }

// printColour1({name:"white",palate:"some"})

// // 2 explicity we ahave to to rerturn to avoid undefiend return

// function checkIncome (income : number,taxYear =2022): number {
//     // let x =100;
//     if(taxYear<2024) return income*1.2
//     return income * 1.3 //if this statement is not there, the function return undefined

// }
// console.log(checkIncome(10_000,2023));

// // the union operator for types (type of)
// // typeof will give the value of type of a variable

// // type assertion for type casting using "as"
// // for eg- from any to a meaningfull datatype
// // from an api call having type html element to type html sub element

// // null or undefined will be checked with the help of type checking itself
// // Non null assertion type - ! (if the variable cannot be null)

// //type aliases -  creating a new shape for some data, can use all basic datatypes
// type magicNumber=number;
// const tshirts : magicNumber =20

// type Employee = {
//     id:number,
//     name:string,
//     email:string,
//     salary:number,
//     address?:string
// } 

// const adith : Employee = {
//     id:123,
//     name: "Adam",
//     email: "adithrames90@gmail.com",
//     salary: 1200
// }
// //nesting
// type Department = {
//     name :string,
//     employees: Employee[]
// }
// //composition

// type ISBN = number | string

// const bookISBN : ISBN =123
// const ISBN2 : ISBN= "1236"

// // extenstion of base type to specialized type (eg- User & Admin & Customer)

// type User = {
//     name:string
// }

// type Admin = User & {
//     role:string
// }

// type Customer = User & {
//     orderid:number
// }

// const admin:Admin = {
//     name:"Adith",
//     role:"admin"
// }

// type startswithAR = `AR${string}`
// const firmName:startswithAR ='AR Group'
// //types in function
// type calc = (a:number, b:number) => number;

// const sum : calc=(p,q)=>p+q
// const mul:calc =(p,q)=>p*q

// //interfaces like javascript object/ class

// interface ICustomer {
//     name:string
//     address:string
// }

// const milano:ICustomer = {
//     name:"milano",
//     address:"illikunnu"
// }

// class GoldenChase implements ICustomer{
//     name:string
//     address:string
//     constructor(name:string,address:string){
//         this.name=name;
//         this.address = address;
//     }
// }

// const goldebchaseblr = new GoldenChase("adith","thalassery")
// console.log(goldebchaseblr.name);
// console.log(goldebchaseblr.address);


// // the above instance of a class can  be achieved through type aliases as well (meany if we write type aliases also implement keyword works)
// // union operator cannot be used in interface
// //but

// interface IAustCust extends ICustomer {
//     location:string
// }

// const newCust : IAustCust={
//     name:"some",
//     address:"illi",                                                     
//     location:"thala"
// }

// let something :any = "lucknow"
// let out = (something as string).lastIndexOf