let idade;

idade = prompt("Informe sua Idade");

if(idade>=18){
    alert("Autorizado");
} else{
    alert("Não autorizado. Cadastro Autorizado para apenas maiores de 18");
    window.close();
}