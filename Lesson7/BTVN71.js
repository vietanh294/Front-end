let checkLeapYear = function(year){
if (year % 4 ==0 && year % 100 != 0) {
    console.log(year + ' Là Năm Nhuận' )    
} else if (year % 400 ==0) {
    console.log(year + ' Là Năm Nhuận' )  
} else {
    console.log(year + ' Không phải Là Năm Nhuận' )  
}

};

checkLeapYear(2000);
checkLeapYear(1992);
checkLeapYear(1993);
checkLeapYear(1900);
checkLeapYear(1800);
checkLeapYear(2004);
checkLeapYear(2020);
checkLeapYear(2021);