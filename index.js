//Lab Three 
//Jordan Huitema

let mark = 85;
const desA = "Pass with Distinction";
const desB = "Pass with Merit";
const desC = "Pass";
const desD = "Fail grades";

if (mark >= 85 || mark <= 100) {
    switch(mark){
        case (mark>=85):
            console.log("Result = A+");
            break
        case (mark>=80):
            console.log("Result = A");
            break
        case (mark>=75):
            console.log("Result = A-");
    }
    console.log("Pass with Distinction")
} 