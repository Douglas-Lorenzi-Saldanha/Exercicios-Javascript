const num1 = 99;
const num2 = 50;
const num3 = 40;
let result = 0;

if((num1 > num2)&&(num1 > num3)){
    result = num1;
}
else if((num2 > num1)&&(num2 > num3)){
    result = num2;
}
else{
    result = num3;
}

console.log("Maior valor é: " + result);
