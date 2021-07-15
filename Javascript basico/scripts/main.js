// Aula 5

// function botao(){
//     document.getElementById("obrigado").innerHTML = "<b>Você clicou</b>"; // injeta no elemento o texto html dentro das aspaz passa o valor.
   
//     //alert("Clicouu");
// }

// function goTheApp(){
//     window.open("https:www.google.com");
//     //passei um onclick lá no html pra quando clicarem na frase esse window.open abre o google numa aba ao lado
//     window.location.href ="https:www.youtube.com";
//     //faz a nesna coisa que o open
// }

// function moveuMouse(elemento){
//     //alert("Vocẽ acabou de passar o mouse dale");
//     //document.getElementById("mouseMove").innerHTML = "Uhuul passou e tomou alert kkkkk";
//     //Eu teria que ficar criando functions demais se dependesse de passar toda vez isso pra um novo elemento no html usando documento.get... por isso vamos usar o this, pois desse jeito eu sinalizo que estou passando um elemento, então no meu html eu vou colocar o this e vai sinalizar que está passando aquele elemento que chamou a função ele vai nesse this
//     elemento.innerHTML = "Obrigado você passou o mouse em cima"
// }

// function voltar(elemento){
//     // document.getElementById("mouseMove").innerHTML = "Passe de novo hehehe";
// elemento.innerHTML = "PASSA DE NOVO HEHEHE"
// }

// function load (){
//     alert("Página carregadaaa");
//     // função sendo chamada no onload que está na tag body que vai ser executada depois da página estar toda carregada
// }

// function changeFunction(elemento){
//     console.log(elemento.value);
//     // onchange no html em select está chamando essa function  pra quando escolhe uma mudança na seleção de opção ele executa e no caso está passando o parâmetro this, assim pega o elemento e aqui estou dando console e mostrando o valor do elemento que eu defini em value
// }











//Aula 4

// function soma (n1, n2){
//     return n1 + n2;
// }

// function setReplace(frase, nome, novo_nome){
//     return frase.replace(nome, novo_nome);
// }
// alert(soma(10, 10));
// alert(setReplace("Vai Japão", "Japão", "Brasil"));
// var validar = 0;
// function validaIdade(idade){
//    // var validar; quando for chamado no console,log a variavel validar vai ser usada essa aqui(que é a local) pra retornar, mas se tivesse uma fora da function chamada validar recebendo valo 0 por exemplo ele usaria ela o tempo todo quando retornasse, mas se você deixar ela fora da function, a própria funcion vai pegar a global  pra executar esses comandos e vai acabar dando certo.
//     if(idade >= 18){
//         validar = true;
//     }else{
//         validar = false;
//     }
//     return validar;
// }

// var idade = prompt("Qual sua idade?");
// console.log(validaIdade(idade));












//Aula 3 Condicionais, laços de repetição e Date

/*
var d = new Date;
alert(d.getMonth());
console.log(d);
console.log(d.getDate());
*/

/*
var count = 0;
while (count <= 5){
    alert(count);
    count++;
}
*/
/*
var count;
for(count = 0; count <= 5; count++){
    alert(count);
}
*/
/*
var count = 1;
while (count <= 5){
    console.log(count);
    count++;
    //count = count + 1; // a gente pode substituir isso por count++
}
*/
/*
var idade = prompt("Qual seu nome?"); // browser exibe uma pergunta pro usuário igual no alert
if (idade === "mateus"){
    alert("Só sucesso você está em Cristo");
} else{
    alert("Cristo te fortalece");
}
*/


// Aula 2 - Arrays
// var frutas = [{nome:"maçã", cor:"vermelha"}, {nome:"uva", cor:"roxa"}]
//console.log(frutas[1].cor);

/*
var fruta = {nome:"maçã", cor:"vermelha"};
console.log(fruta.cor.toUpperCase());
console.log(fruta.cor);
*/
// var lista = ["maçã", "banana", "laranja"];
// // lista.push("uva");
// console.log(lista);
// //console.log(lista.length); //usa pra ver o tamanho da lista
// //console.log(lista.reverse()); //vai imprimir na ordem inversa
// console.log(lista.toString()); // tirou do array e virou string
// console.log(lista.toString()[0]); //pega só as letras
// console.log(lista.join("/ "));//coloca o separador que eu quiser entre as palavras da lista que está transformada em string


// aula 1
// var nome = "Mateus Ramos";
// var idade = 22;
// var idade2 = 9;
// var frase = "Canadá é o país onde o Mateus mora";
// //alert(nome + " tem " + idade + " anos.");
// // comenta uma linha
// /*Comenta mais de 
// uma linha */
// //alert(idade + idade2); //tivesse entre aspas só juntaria
// // pois seriam uma string
// console.log(idade);
// console.log(idade + idade2);
// console.log(nome + " tem " + idade + " anos")
// console.log(frase.replace("o Mateus", "a Aninha gatinha"));
// /* comando frase.replace(); passar duas variáveis onde a primeira
// faz parte do que você quer substituir e a segunda é o 
// que vai ser substituido.
// no caso comando (varíavel).replace(passa o valor1, passa o valor2);
// */
// console.log(frase.toUpperCase());
// console.log(frase.toLowerCase());