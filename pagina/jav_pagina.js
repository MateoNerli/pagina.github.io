/*let edad;
edad = prompt("Ingresa tu edad");

if (edad >= 18) {
  alert("Puedes ingresar");
}
else {
  alert("Eres menor de edad, esta pagina contiene contenido para adulto");
  close;
}*/

function ciudad(ciudad) {

  ciudad = prompt("Ciudad donde vives");

  if (ciudad == "san nicolas") {
    alert("Los envios son gratis a " + ciudad);
  }
  else {
    alert("Consultanos sobre los evios a " + ciudad+ "; tienen un costo des 800$");
  }
}

window.addEventListener("beforeunload", (evento) => {
  if (true) {
      evento.preventDefault();
      evento.returnValue = "";
      return "";
  }
});


