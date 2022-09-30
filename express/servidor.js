var cosanueva = require("express");
var aplicacion = cosanueva();

aplicacion.get("/", inicio);
aplicacion.get("/primero", primero);

function inicio(peticion, resultado)
{
  resultado.send("Si funcionó esta madre");
}

function primero(peticion, resultado)
{
  resultado.send("Que me ves <strong>PERRO<strong/>");
}

aplicacion.listen(8989);
