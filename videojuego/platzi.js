var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");
var mapa = "tile.png";

var fondo = new Image();
fondo.src = mapa;
fondo.addEventListener("load", dibujar);

var vaca = new Image();
vaca.src = "vaca.png";
vaca.addEventListener("load", dibujarVacas);
var pollo = new Image();
pollo.src = "pollo.png";
pollo.addEventListener("load", dibujarPollos);
var cerdo = new Image();
cerdo.src = "cerdo.png";
cerdo.addEventListener("load", dibujarCerdos);

function dibujar ()
{
  papel.drawImage(fondo, 0 , 0);
}

function dibujarCerdos ()
{
  papel.drawImage(cerdo, 250, 0);
}

function dibujarPollos ()
{
  papel.drawImage(pollo, 50 , 0);
}

function dibujarVacas ()
{
  papel.drawImage(vaca, 100 , 0);
}

function aleatorio (max, min)
{
  var resultado = 0;
  resultado = Math.floor(Math.random() * (max - min + 1)) + min;
  return resultado;
}
