// import * as readlineSync from 'readline-sync';
// 3

// let P: number = readlineSync.questionFloat('Enter the principal amount (P): ');
// let R: number = readlineSync.questionFloat('Enter the interest rate (R): ');
// let n: number = readlineSync.questionInt('Enter the number of years (n): ');

// let SI: number = (P * R * n) / 100;

// console.log(`Simple Interest calculated is: ${SI}`);

// 5

// function calculateGrade(percentage: number): string {
//     let grade: string;

//     if (percentage > 90) {
//         grade = 'A';
//     } else if (percentage >= 80 && percentage <= 89) {
//         grade = 'B';
//     } else if (percentage >= 70 && percentage <= 79) {
//         grade = 'C';
//     } else if (percentage >= 60 && percentage <= 69) {
//         grade = 'D';
//     } else if (percentage >= 50 && percentage <= 59) {
//         grade = 'E';
//     } else {
//         grade = 'Failed';
//     }

//     return grade;
// }


// let percentage: number = readlineSync.questionFloat('Enter your total mark percentage: ');

// let grade: string = calculateGrade(percentage);

// console.log(`Your grade is: ${grade}`);

// 8
// function sumOfOddNumbers(limit: number): number {
//     let sum: number = 0;
//       for (let i = 1; i <= limit; i++) {
//         if (i % 2 !== 0) {
//             sum += i; 
//         }
//     }
//     return sum;
// }

// let limit: number = readlineSync.questionInt('Enter a limit: ');
// let sum: number = sumOfOddNumbers(limit);
// console.log(`Sum of odd numbers = ${sum}`);


// 9

// let limit1:number=5

// for(let i:number=1;i<=limit1;i++){
//     let row:string=''
//     for(let j:number=1;j<=i;j++){
//         row=row+j+''
//     }
//     console.log(row);
// }

// 13
// function palindrome(word:string):boolean{
//     for(let i:number = 0;i<word.length/2;i++){
//         // let count:number = 0
//         if(word[i]!=word[word.length-i-1]){
//             return false
//         } 
//     }
//     return true
// }
// console.log(palindrome("racecar"));


 class Animal{
    makeNoise():void{
        
    };
}


class Cat extends Animal{
makeNoise(): void {
    console.log("meaw");
    
}
    
}

const poocha = new Cat()

console.log(poocha.makeNoise());
