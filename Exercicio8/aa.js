var nota = prompt("Digite sua nota aqui:")
var faltas = prompt("Digite quantidade de faltas aqui:")
var media = 7
var faltas_maximas= 15 
if (nota >= media && faltas <= faltas_maximas) {
    document.write("Voce foi aprovado")
} 
else{
    document.write("Voce nao foi aprovado")
}