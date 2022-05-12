var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoClick);

var d = document.getElementById("dibujito");
var ancho = d.width;
//alert(ancho);
var lienzo = d.getContext("2d");

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial,yinicial);
  lienzo.lineTo(xfinal,yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujoClick()
{
  var lineas = parseInt(texto.value);
  var l = 0;
  var yi, xf;
  var colo = "#FAA";

  for (l = 0; l < lineas; l++){
  //while (l < lineas) {
    yi =  * l;
    xf = 10 * (l + 1);
    dibujarLinea(colo,yi,0,300,xf);
    //l++;
  }
  dibujarLinea(colo,0,1,1,299);
  dibujarLinea(colo,1,299,299,300);
}
