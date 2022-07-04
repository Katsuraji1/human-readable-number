module.exports = function toReadable (number) {
let units=['', 'one', 'two', 'three', 'four', 'five', 'six' ,'seven' , 'eight' , 'nine'];
let unit= ['ten' , 'eleven' , 'twelve' , 'thirteen' , 'fourteen' , 'fifteen' , 'sixteen' , 'seventeen' , 'eighteen' , 'nineteen'];
let decimal=['', '', 'twenty' , 'thirty' , 'forty' , 'fifty' , 'sixty' , 'seventy' , 'eighty' , 'ninety'];
let numbertostring=number.toString();
if (number ===0){
 return 'zero';   
}
if ( number<10 ){
    output=units[number];
    return output;
}
else if(number>=10 && number<=19){
   output=unit[numbertostring[1]];
    return output;
}
else if(number>=20 && number<=99 && numbertostring[0]>=2){
    if( numbertostring[1]==0){
    return decimal[numbertostring[0]];
    }
    else{
    output=decimal[numbertostring[0]]+' '+units[numbertostring[1]];
    return output;
    }
}
else if (number >= 100 && number <=999 && numbertostring[0]>=1 ){
    if(numbertostring[1]==0 && numbertostring[2]==0){
return units[numbertostring[0]]+" "+"hundred";
    }
    else if (numbertostring[1]==1 && numbertostring[2]==0){
        return units[numbertostring[0]]+" "+"hundred" +' '+unit[numbertostring[2]] ;
    }
    else if(numbertostring[2]==0){
return units[numbertostring[0]]+" "+"hundred" +' '+decimal[numbertostring[1]];
    }
    else if(numbertostring[1]==0){
        return units[numbertostring[0]]+" "+"hundred" +' '+units[numbertostring[2]];
    }
else if (numbertostring[1]==1){
    return units[numbertostring[0]]+" "+"hundred" +' '+unit[numbertostring[2]] 
}

    else{
return units[numbertostring[0]]+ ' '+ 'hundred'+' '+ decimal[numbertostring[1]]+ ' ' + units[numbertostring[2]];
    }
}
}
