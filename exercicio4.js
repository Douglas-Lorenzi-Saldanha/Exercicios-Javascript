const texto = Array.from("meu pai tem oculos");
let tira;
let coloca;
let i = 0;

while(i < 19){
const textPrint = texto.join('');
console.log(textPrint);
tira = texto.pop();
coloca = texto.unshift(tira);
i++;
}
