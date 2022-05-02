const data = new Date();
let mes = data.getMonth();
let dia = data.getDate();
let ano = data.getFullYear();

if(mes.toString().length < 2){
    mes = "0" + mes;
}

if(dia.toString().length < 2){
    dia = "0" + dia;
}

console.log(mes + "-" + dia + "-" + ano + 
            ", " + 
            mes + "/" + dia + "/" + ano + 
            " or " + 
            dia + "-" + mes + "-" + ano +
            ", " + 
            dia + "/" + mes + "/" + ano);