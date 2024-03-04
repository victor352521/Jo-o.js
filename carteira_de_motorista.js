let pessoa ={
    idade: 18,
    cnh: false,
    autorizacao: true
} 

if (pessoa.idade >=18 && pessoa.cnh == true && pessoa.autorizacao == true){
    console.log("Voce esta autorizado.")
}
else if (pessoa.idade >= 18 && pessoa.cnh == false && pessoa.autorizacao == true || pessoa.idade < 18 && pessoa.autorizacao == true ){
    console.log("Autorizado, mas não pode dirigir")
}
else {
    console.log("Não pode dirigir, não pode entrar ou tem menos que 18 anos")
}