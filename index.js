//Lab Three 
//Jordan Huitema

let mark = 90;                                  //Input var (must be number between 0-100)

if (mark >= 75 && mark <= 100) {                //if mark is between 70pts and 100pts
    console.log("Pass with Distinction")            //print grade description
    if (mark >= 85) {                               //if mark is at or above 85 set mark var as A+
        mark = "A+"
    } else if (mark >= 80) {                            //else if mark is at or above 80 set mark var as A
        mark = "A"
    } else if (mark >= 75) {                                //else if mark is at or above 75 set mark var as A-
        mark = "A-"
    }
} else if (mark >= 60 && mark <= 74) {          //else if mark is between 60pts and 74pts 
    console.log("Pass with Merit")                  //print grade description
    if (mark >= 70) {                               //if mark is at or above 70 set mark var as B+
        mark = "B+"
    } else if (mark >= 65) {                            //else if mark is at or above 65 set mark var as B
        mark = "B"
    } else if (mark >= 60) {                                //else if mark is at or above 60 set mark var as B-
        mark = "B-"
    }
} else if (mark >= 50 && mark <= 59) {          //else if mark is between 50pts and 59pts
    console.log("Pass")                             //print grade description
    if (mark >= 55) {                               //if mark is at or above 55 set mark var as C+
        mark = "C+"
    } else if (mark >= 50) {                            //else if mark is at or above 50 set mark var as C
        mark = "C"
    }
} else if (mark >= 40 && mark <= 49){                                        //else if mark is below 50pts
    console.log("Fail Grades")                      //print grade description
    if (mark >= 40) {                               //if mark is at or above 40 set mark var as D
        mark = "D"
    }
} else if (mark >= 0 && mark <= 39){                                        //else if mark is below 50pts
    console.log("Fail Grades")                      //print grade description
    if (mark >= 40) {                               //if mark is at or above 40 set mark var as D
        mark = "E"
    }
} else {                                        //else if mark is outside 0-100 print error text
    console.log("Mark Input needs to be a number between 0 - 100 e.g. 55");
    mark = "Error";
};

//this switch is unnecessary, a better way to do it would be to add console.log("Result = " + mark) here but i am demonstrating how to use a switch to do this for this assesment
switch(mark){                                   //this switch prints the result of the mark var
    case "A+":                                      //if mark = A+ print "Result = A+"
        console.log("Result = A+");
        break
    case "A":                                       //if mark = A+ print "Result = A+"
        console.log("Result = A");
        break
    case "A-":                                      //if mark = A+ print "Result = A+"
        console.log("Result = A-");
        break
    case "B+":                                      //if mark = A+ print "Result = A+"
        console.log("Result = B+");
        break
    case "B":                                       //if mark = A+ print "Result = A+"
        console.log("Result = B");
        break
    case "B-":                                      //if mark = A+ print "Result = A+"
        console.log("Result = B-");
        break
    case "C+":                                      //if mark = A+ print "Result = A+"
        console.log("Result = C+");
        break
    case "C":                                       //if mark = A+ print "Result = A+"
        console.log("Result = C");
        break
    case "C-":                                      //if mark = A+ print "Result = A+"
        console.log("Result = C-");
        break
    case "D":                                       //if mark = A+ print "Result = A+"
        console.log("Result = D");
        break
    default:                                        //if the mark var is empty or contains a number (because the score is below 40) print "Result = E"
        console.log("Result = E")
        break
    case "Error":                                   //if mark input was outside of 0-100 dont print
        break
};