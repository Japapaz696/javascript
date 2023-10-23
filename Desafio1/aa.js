var idade = prompt ("Digite sua idade:")
if( idade >= 0 && idade < 15 ) {
    document.write("Crianca")
}
else if( idade >= 15 && idade < 30 ) {
    document.write("Jovem")
}
else if (idade >= 30 && idade < 60) {
   document.write("Adulto") 
}
else{
    document.write ("Idoso")
}