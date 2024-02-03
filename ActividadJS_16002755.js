<!DOCTYPE html>
<!--
Created using JS Bin
http://jsbin.com

Copyright (c) 2024 by anonymous (http://jsbin.com/qemeyupewa/1/edit)

Released under the MIT license: http://jsbin.mit-license.org
-->
<meta name="robots" content="noindex">
<html>
<head>
 
<script id="jsbin-javascript">
var ing_fecha= prompt("ingrese su fecha de nacimiento "+"en formato dd-mm-yy");

var dia= ing_fecha.slice(0,2)
//var mes= parseInt(ing_fecha.slice(3,5),8)
var mes= ing_fecha.slice(3,5)

if (mes == 1 && dia<= 20 ||mes == 12 && dia>= 22 ){
  console.log("Capricornio");
}
else if (mes == 1 && dia>=21 ||mes == 02 && dia<= 19){
  console.log("Acuario");
}
else if (mes == 2 && dia>=20 ||mes == 03 && dia<= 20){
  console.log("Piscis");
}
else if (mes == 3 && dia>=21 ||mes == 04 && dia<= 20){
  console.log("Aries");
}
else if (mes == 04 && dia>=21 ||mes == 05 && dia<= 20){
  console.log("Tauro");
}
else if (mes == 05 && dia>=21 ||mes == 06 && dia<= 20){
  console.log("Geminis");
}
else if (mes == 06 && dia>=21 ||mes == 07 && dia<= 22){
  console.log("Cancer");
}
else if (mes == 07 && dia>=23 ||mes == 08 && dia<= 23){
  console.log("Leo");
}
else if (mes == 08 && dia>=24 ||mes == 09 && dia<= 22){
  console.log("Virgo");
}
else if (mes == 09 && dia>=23 ||mes == 10 && dia<= 23){
  console.log("Libra");
}
else if (mes == 10 && dia>=24 ||mes == 11 && dia<= 22){
  console.log("Escorpio");
}
else if (mes == 11 && dia>=23 ||mes == 11 && dia<= 21){
  console.log("Sagitario");
}


</script>