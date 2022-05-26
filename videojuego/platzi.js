document.addEventListener("keydown", moverCerdo);
var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");
var cantidad = aleatorio(2, 10);
var teclas = {
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40
};
var fondo = {
  url: "tile.png",
  cargaOk: false
};
var vaca = {
  url: "vaca.png",
  cargaOk: false,
  x : [],
  y : []
};
var pollo = {
  url: "pollo.png",
  cargaOk: false,
  x : [],
  y : []
};
var cerdo = {
  url: "cerdo.png",
  cargaOk: false,
  x : 0,
  y : 0
};

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);
vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);
pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollos);
cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdos);

function dibujar()
{
  if (fondo.cargaOk)
  {
    papel.drawImage(fondo.imagen, 0 , 0);
  }
  if (vaca.cargaOk)
  {
    for (var i = 0; i < cantidad; i++)
    {
      var x = aleatorio(0, 6) * 70;
      var y = aleatorio(0, 6) * 70;
      vaca.x[i] = x;
      vaca.y[i] = y;
      papel.drawImage(vaca.imagen,x , y);
    }
  }
  if (pollo.cargaOk)
  {
    for (var i = 0; i < cantidad; i++)
    {
      var x = aleatorio(0, 6) * 70;
      var y = aleatorio(0, 6) * 70;
      pollo.x[i] = x;
      pollo.y[i] = y;
      papel.drawImage(pollo.imagen,x , y);
    }
  }
}

function dibujarDeNuevo ()
{
  if (fondo.cargaOk)
  {
    papel.drawImage(fondo.imagen, 0 , 0);
  }
  if (vaca.cargaOk)
  {
    for (var i = 0; i < cantidad; i++)
    {
      papel.drawImage(vaca.imagen,vaca.x[i] ,vaca.y[i]);
    }
  }
  if (pollo.cargaOk)
  {
    for (var i = 0; i < cantidad; i++)
    {
      papel.drawImage(pollo.imagen,pollo.x[i] ,pollo.y[i]);
    }
  }
}

function teclasCerdo (x,y)
{
  papel.drawImage(cerdo.imagen,x,y);
}

function moverCerdo(evento)
{
  var movimiento = 5;
  switch (evento.keyCode) {
    case teclas.DOWN:
      dibujarDeNuevo();
      cerdo.y = cerdo.y + movimiento;
      teclasCerdo(cerdo.x,cerdo.y);
    break;
    case teclas.UP:
      dibujarDeNuevo();
      cerdo.y = cerdo.y - movimiento;
      teclasCerdo(cerdo.x,cerdo.y);
    break;
    case teclas.LEFT:
      dibujarDeNuevo();
      cerdo.x = cerdo.x - movimiento;
      teclasCerdo(cerdo.x,cerdo.y);
    break;
    case teclas.RIGHT:
      dibujarDeNuevo();
      cerdo.x = cerdo.x + movimiento;
      teclasCerdo(cerdo.x,cerdo.y);
    break;
    default:
      console.log("otra tecla");

  }
}

function cargarFondo()
{
  fondo.cargaOk = true;
  dibujar();
}

function cargarVacas()
{
  vaca.cargaOk = true;
  dibujar();
}

function cargarPollos()
{
  pollo.cargaOk = true;
  dibujar();
}

function cargarCerdos()
{
  cerdo.cargaOk = true;
  dibujar();
}

function aleatorio (max, min)
{
  var resultado = 0;
  resultado = Math.floor(Math.random() * (max - min + 1)) + min;
  return resultado;
}
