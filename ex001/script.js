// criando a classe
class Carro{
    // por padrão método tem esse nome
    constructor(corDoatributo){
        // atributo da classe carro
        this.cor=(corDoatributo)
        document.write("<p> Novo carro "+this.cor+"</p>")
    }

}
// criando os objetos
let ca1=new Carro("preto")
let ca2=new Carro("cinza")
let ca3=new Carro("branco")
let ca4=new Carro("azul")
