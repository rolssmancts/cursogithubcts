var teclas = {
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40
};
var cuaderno = document.getElementById("marco");
var papel = cuaderno.getContext("2d");
var x = 150;
var y = 150;

cuaderno.addEventListener("mousedown", clicMouse);
cuaderno.addEventListener("mouseup", desClicMouse);
cuaderno.addEventListener("mousemove", dibujarConMouse);

var raton = false;


function clicMouse (evento)
{
  raton = true;
}

function desClicMouse (evento)
{
  raton = false;
}

function dibujarConMouse (evento)
{
  if (raton == true)
  {
    var coloreishon = "red";
      dibujarLinea(coloreishon, evento.x+1, evento.y+1, evento.x-1, evento.y-1, papel);
  }
}

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 3;
  lienzo.moveTo(xinicial,yinicial);
  lienzo.lineTo(xfinal,yfinal);
  lienzo.stroke();
  lienzo.closePath();
}
