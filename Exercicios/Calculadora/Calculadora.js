function somar(a, b){
    return a + b
}

function subtrair(a, b){
    return a - b
}

function multiplicar(a, b){
    return a * b
}

function dividir(a, b){
    if(b == 0){
        return "Divisão inválida"
    }
    return a/b
}

function aoQuadrado(a){
    return Math.pow(a,2)
}

function raizQuadrada(a){
    return Math.sqrt(a)
}

module.exports = {
    somar,
    subtrair,
    multiplicar,
    dividir,
    aoQuadrado,
    raizQuadrada
  }