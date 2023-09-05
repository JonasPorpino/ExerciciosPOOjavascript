carro = {
    Marca : "Ford",
    Modelo : "Ka",
    Caracteristicas : ["Preto", "1.0", "2 portas"],

    exibirDetalhes : function(){
      document.write("<p> Marca: " + this.Marca + " - Modelo: " + this.Modelo+"</p>")
    }
}

carro.exibirDetalhes();
document.write(" Caracteristicas: "
+carro.Caracteristicas[0]
+", "+carro.Caracteristicas[1]
+", "+carro.Caracteristicas[2]
)


