const LeapYear = year => {

    if( year % 4 === 0 && year % 100 !== 0 || year % 400 === 0 ) {
        return "Leap Year"
    }
    else {
        return "Not Leap Year"
    }

}

const result = LeapYear(2024);
console.log(result);