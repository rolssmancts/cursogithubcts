document.addEventListener("keydown", dibujarTeclado);
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
dibujarLinea("blue",149, 149, 151, 151, papel);

function dibujarTeclado(evento)
{
  var colorcin = "blue";
  var movimiento = 5;
  switch (evento.keyCode) {
    case teclas.DOWN:
      dibujarLinea(colorcin, x, y, x, y + movimiento, papel);
      y = y + movimiento;
    break;
    case teclas.UP:
      dibujarLinea(colorcin, x, y, x, y - movimiento, papel);
      y = y - movimiento;
    break;
    case teclas.LEFT:
      dibujarLinea(colorcin, x, y, x - movimiento, y , papel);
      x = x - movimiento;
    break;
    case teclas.RIGHT:
      dibujarLinea(colorcin, x, y, x + movimiento, y , papel);
      x = x + movimiento;
    break;
    default:
      console.log("otra tecla");

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
