function calcularAreaTerreno(largura,comprimento){
    var area = largura * comprimento
    return area
}
var area = calcularAreaTerreno(prompt('digite um valor'),prompt('digite um valor'))
document.write('O terreno possui ' + area + ' metros quadrados' )
