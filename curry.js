/*Curry é a ação de pegar uma função que receba múltiplos argumentos e transforma-la em uma cadeia de funções, em que cada uma receba somente um parâmetro.*/

function teste(a) {
    return function (b) {
        return a * b;
    };
}
var dobro = teste(2);
console.log(dobro(8));
console.log(teste(2)(8));