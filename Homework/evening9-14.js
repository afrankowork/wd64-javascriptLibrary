let grade = 92;
let finalGrade = '';


if (grade >=89) {
    finalGrade = 'A';
    console.log(finalGrade);
} else if (grade>=79) {
    finalGrade = 'B';
    console.log(finalGrade);
} else if (grade>=66) {
    finalGrade = 'C';
    console.log(finalGrade);
} else if (grade>=59) {
    finalGrade = 'D';
    console.log(finalGrade);
} else {
    finalGrade = 'F'
    console.log(finalGrade);
}


/*

switch(finalGrade){
    
    case 'A' :
        console.log(`With a grade of ${grade} you have earned an A!`);
        break;
    case 'B' :
        console.log(`With a grade of ${grade} you have earned a B!`);
        break;
    case 'C' :
        console.log(`With a grade of ${grade} you have earned a C!`);
        break;
    case 'D' :            
        console.log(`With a grade of ${grade} you have earned a D!`);
        break;
    default:
        console.log(`With a grade of ${grade} you have earned Failure.`)
    }
*/
    switch(true){
    
        case (grade >=89):
            console.log(`With a grade of ${grade} you have earned an A!`);
            break;
        case (grade >= 79) :
            console.log(`With a grade of ${grade} you have earned a B!`);
            break;
        case (grade >= 66) :
            console.log(`With a grade of ${grade} you have earned a C!`);
            break;
        case (grade >= 59) :            
            console.log(`With a grade of ${grade} you have earned a D!`);
            break;
        default:
            console.log(`With a grade of ${grade} you have earned Failure.`)
        }

        