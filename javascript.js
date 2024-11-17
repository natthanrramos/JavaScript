// let nomeDoUsuario = prompt(`Digite seu nome : `)
// let campoDeEstudo = prompt(`O que você estuda: `)
// let anoQueNasceu  = Number(prompt(`Digite o ano que nasceu`)); 
// let anoCompleto = new Date().getFullYear();
// typeof(anoCompleto)
// let idade = anoCompleto - anoQueNasceu;


// alert(`Ola senhor ${nomeDoUsuario}, vi que você estuda ${campoDeEstudo} e possui idade de ${idade} anos`);

// console.log(`Ola senhor ${nomeDoUsuario}, vi que você estuda ${campoDeEstudo} e possui idade de ${idade} anos`);

// console.log(anoCompleto)


// let idadeUsuario = Number(prompt(`Digite sua idade`))

// if(idadeUsuario >= 18 && idadeUsuario <= 80){
//     console.log(`O usuario pode acessar`);
// } else if(idadeUsuario < 18 && idadeUsuario >= 12) {
//     console.log(`Você é adolecente`)
// } else if (idadeUsuario < 12 && idadeUsuario > 0) {
//     console.log(`Você é uma criança`)
// } else if(idadeUsuario > 80) {
//     console.log(`Você é idoso`)
// } else {
//     console.log(`Valor invalido`)
// }
// let nomeUsuario = false;

// // Se for invalido
// if(!nomeUsuario){
//     console.log(`Faltando informação do nome do usuario`)
// } else {
//     console.log(`Nome aceito com sucesso`)
// }


// let confirmaExclusao = confirm(`Tu tem certeza que vai deletar?`);


// if(confirmaExclusao){
//     alert(`Você excluiu o dado selecionado`)
// } else{
//     alert(`Que bom que você não excluiu`)

// let diasDaSemana = prompt(Usuario, digite um numero referente ao dia da semana);

// switch(diasDaSemana){
//     case "1":
//         alert(`Você escolheu o domingo!`);
//         break;
//     case "2":
//         alert(`Você escolheu a segunda-feira!`);
//         break;
//     default:
//         alert(`Valor digitado é inválido!`);
//         break;
// }

// let numero1 = Number(prompt(`Digite o primeiro numero: `))
// let operacao = prompt(`Escolha a operaçãp: +, -, * ou / `)
// let numero2 = Number(prompt(`Digite o segundo numero: `))

// switch (operacao) {
//     case "+":
//         alert(` A soma dos numeros é: ${numero1 + numero2}`)
//         break;

//     case "-":

//         alert(` A subtração dos numeros é: ${numero1 - numero2}`)
//         break;


//     case "*":

//         alert(` A multiplicação dos numeros é: ${numero1 * numero2}`)
//         break;

//     case "/":

//         alert(` A divisão dos numeros é: ${numero1 / numero2}`)
//         break;
// }

let numero1 = Number(prompt(`Digite o primeiro numero`));
let operacao = prompt(`Digite a operação desejada (+, -, *, / ou %)`);
let numero2

if(operacao != "+" && operacao != "-" && operacao != "*" && operacao != "/" && operacao != "%"){
    alert(`Operação invalida por favor digite as seguintes operações (+, -, *, / ou %)`)
} else {
    numero2 = Number(prompt(`Digite o numero 2`))
}

switch (operacao) {
  case "+":
    alert(`O Resultado do ${numero1} ${operacao} ${numero2} é = ${numero1 + numero2}`);
    break;
}



