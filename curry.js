/*Curry é a ação de pegar uma função que receba múltiplos argumentos e transforma-la em uma cadeia de funções, em que cada uma receba somente um parâmetro.*/

function produto(a) {
    return function (b) {
        return a * b;
    };
}
var dobro = produto(2);
console.log(dobro(8));
console.log(produto(2)(8));