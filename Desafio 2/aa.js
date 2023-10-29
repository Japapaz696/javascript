var nome = prompt('Digite seu nome:')
var altura = prompt('Digite sua altura em cm:')
var peso = prompt('Digite seu peso:')
parseFloat(altura)
parseFloat(peso)
 altura /= 100
 var m = peso / ( altura *  altura) 
 document.write( nome + " possui índice de massa corporal igual a " + m + ", sendo classificado como: ")
 if (m<16){
    document.write('Baixo do peso muito grave')
 }
  else if (16>m<16.99){
    document.write(' Baixo peso grave ')
 }
 else if (17>m<18.49){
    document.write(' Baixo peso ')
 }
 else if (18.50>m<24.99){
    document.write(' Peso normal  ')
 }
 else if (25>m<29.99){
    document.write(' Sobrepeso ')
 }
 else if (30>m<34.99){
    document.write('  Obesidade grau I  ')
 }
 else if (35>m<39.99){
    document.write('   Obesidade grau II   ')
 }
 else if (m>40){
    document.write('    Obesidade grau III    ')
 }



