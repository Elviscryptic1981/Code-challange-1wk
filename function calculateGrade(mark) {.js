function calculateGrade(mark) {
    if (mark > 79) {
        return 'A';
    } 
    else if (mark >= 60 && mark <= 79) {
        return 'B';
    } 
    else if (mark >= 50 && mark <= 59) {
        return 'C';
    }
    else if (mark >= 40 && mark <= 49) {
        return 'D';
    } 
    else {
        return 'E';
    }
}

function main() {
    const readline = require('readline).createInterface({
        input: process. stdin,
        output: process. stdout
        )}
    readline.question("Enter the student's mark (between 0 and 100): ", (input) => {
        const mark = parseFloat(input);
        if ( mark >= 0 && mark <= 100) {
            const grade = calculateGrade(mark);
            console.log(`The grade for mark ${mark} is ${grade}.`);
        } 
        else {
            console.log("Invalid input. Marks should be between 0 and 100.");
        }
        readline.close();
    });
}

main();
