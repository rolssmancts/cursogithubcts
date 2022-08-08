class Billete
{
  constructor (v,c)
  {

    this.valor = v;
    this.cantidad = c;
  }
}

function entregarDinero()
{
  resultado.innerHTML = "<br/>";
  var t = document.getElementById("dinero");
  dinero = parseInt(t.value);

  for (var bi of caja)
  {
    if (dinero>0)
    {
      div = Math.floor(dinero / bi.valor);
      if (div > bi.cantidad)
      {
        papeles = bi.cantidad;
      }
      else
      {
        papeles = div;
      }
      entregado.push( new Billete(bi.valor, papeles));
      dinero = dinero - (bi.valor * papeles);
      bi.cantidad -= papeles;
    }
  }
  if (dinero>0)
  {
    resultado.innerHTML += "Soy un cajero pobre y no me alcanza el dinero D: <br/>";
  }
  else
  {
    for (var e of entregado)
    {
      if(e.cantidad > 0)
      {
        resultado.innerHTML += "<img src='"+imagenbillete[e.valor]+"' alt="+">" + e.cantidad + " billete de " + e.valor + "<br/>";
      }
    }
  for (var a of entregado)
  {
    entregado.pop();
  }
  entregado.pop();
  }
  resultado.innerHTML += "<br/>";
  for (var can of caja)
  {
    resultado.innerHTML += "Quedan " + can.cantidad + " billetes de " + can.valor + " en el cajero. <br/>";
  }
}

var caja = [];
var entregado = [];
caja.push(new Billete(50,3));
caja.push(new Billete(20,2));
caja.push(new Billete(10,2));
var imagenbillete = [];
imagenbillete [10] = "billete 10.gif";
imagenbillete [20] = "billete 20.gif";
imagenbillete [50] = "billete 50.gif";
var dinero = 0;
var div = 0;
var papeles = 0;
var resultado = document.getElementById("resultado");
var b = document.getElementById("extraer");
b.addEventListener("click", entregarDinero);
