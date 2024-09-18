
function areaDoQuadrado(lado) {
    return lado * lado;
}

function areaDoParalelogramo(base, altura){
    return base * altura;
}

function areaDoTriangulo(base, altura) {
    return base * altura / 2;
}

module.exports = {
    areaDoQuadrado,
    areaDoParalelogramo,
    areaDoTriangulo
}