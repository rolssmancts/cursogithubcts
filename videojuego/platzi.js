var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");
var fondo = {
  url: "tile.png",
  cargaOk: false
};
var vaca = {
  url: "vaca.png",
  cargaOk: false
};
var pollo = {
  url: "pollo.png",
  cargaOk: false
};
var cerdo = {
  url: "cerdo.png",
  cargaOk: false
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
    var cantidad = aleatorio(2, 10);
    console.log("vacas: " + cantidad);
    for (var i = 0; i < cantidad; i++)
    {
      var x = aleatorio(0, 6) * 70;
      var y = aleatorio(0, 6) * 70;
      papel.drawImage(vaca.imagen,x , y);
    }
  }
  if (pollo.cargaOk)
  {
    var cantidad = aleatorio(2, 10);
    console.log("pollos: " + cantidad);
    for (var i = 0; i < cantidad; i++)
    {
      var x = aleatorio(0, 6) * 70;
      var y = aleatorio(0, 6) * 70;
      papel.drawImage(pollo.imagen,x , y);
    }
  }
  if (cerdo.cargaOk)
  {
    var cantidad = aleatorio(2, 10);
    console.log("cerdos: " + cantidad);
    for (var i = 0; i < cantidad; i++)
    {
      var x = aleatorio(0, 6) * 70;
      var y = aleatorio(0, 6) * 70;
      papel.drawImage(cerdo.imagen,x , y);
    }
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
