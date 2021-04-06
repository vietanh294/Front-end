let convertNumberToMonth = function(number){
    switch (number) {
        case 1:
        console.log('Tháng ' + number + ' là: '+ 'Tháng'+' Giêng.')    
       
            break;
        case 2:
        console.log('Tháng ' + number + ' là: '+ 'Tháng'+' Hai.')    
        
            break;
        case 3:
        console.log('Tháng ' + number + ' là: '+ 'Tháng'+' Ba.')    
    
            break;
            
        case 4:
            console.log('Tháng ' + number + ' là: '+ 'Tháng'+' Tư.')    
         
                break;
                
        case 5:
            console.log('Tháng ' + number + ' là: '+ 'Tháng'+' Năm.')    
            
                break;
                
        case 6:
            console.log('Tháng ' + number + ' là: '+ 'Tháng'+' Sáu.')    
            
                break;
                
        case 7:
            console.log('Tháng ' + number + ' là: '+ 'Tháng'+' Bảy.')    
           
                break;
                
        case 8:
            console.log('Tháng ' + number + ' là: '+ 'Tháng'+' Tám.')    
            
                break; 
                
        case 9:
            console.log('Tháng ' + number + ' là: '+ 'Tháng'+' Chín.')    
            
                break;
                
        case 10:
            console.log('Tháng ' + number + ' là: '+ 'Tháng'+' Mười.')    
            
                break;
                
        case 11:
            console.log('Tháng ' + number + ' là: '+ 'Tháng'+' Mười Một.')    
            
                break;
                
        case 12:
            console.log('Tháng ' + number + ' là: '+ 'Tháng'+' Chạp.')    
                break;   
    
        default:
            console.log('Tháng '+number+' Là: Tháng Không Tồn Tại')
            break;
    }
}

convertNumberToMonth(01);
convertNumberToMonth(2);
convertNumberToMonth(12);
convertNumberToMonth(13);
convertNumberToMonth(14);
convertNumberToMonth(001);
convertNumberToMonth(002);
convertNumberToMonth(5);
convertNumberToMonth(6);
convertNumberToMonth(000001);
convertNumberToMonth(000005);
convertNumberToMonth(0011);
