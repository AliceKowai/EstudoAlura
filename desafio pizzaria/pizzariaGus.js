var pizzas = [["Frango & catupiry",22],["Calabresa",20],["Carne de sol",30],["Mista",22],["Chocolate",27]];
var bebidas = [["Coca-cola(latinha)",3.50],["Guaraná Antartica(latinha)",3.50],["São geraldo",4.50]];
var sobremesas = [["Musse",3],["Sorvete",4],["Açai(1kg)",4],["Pudim",5],["Salada de fruta",4]];
function pedido(pizza, bebida, sobremesa){
pizza = pizzas.find(_pizza => _pizza == pizza);
bebida = bebidas.find(_bebidas => _bebidas == bebida);
sobremesa = sobremesas.find(_sobremesas => _sobremesas == sobremesa);
console.log(pizza + bebida + sobremesa);
}
pedido("Calabresa","Coca-cola(latinha)","Musse");


