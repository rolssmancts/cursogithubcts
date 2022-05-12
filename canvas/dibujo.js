var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var ancho = d.width;
boton.addEventListener("click", dibujoClick);

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
  var espacio = ancho / lineas;

  for (l = 0; l < lineas; l++)
  {
  //while (l < lineas) {
    yi = espacio * l;
    xf = espacio * (l + 1);
    dibujarLinea(colo,yi,0,300,xf);
    //l++;
  }
  dibujarLinea(colo,0,1,1,299);
  dibujarLinea(colo,1,299,299,300);
}
