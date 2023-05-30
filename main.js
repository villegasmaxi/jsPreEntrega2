

//clase constructora que me arma objetos con parametros que pido por prompt en datosUsuarios, dentro de un array que declaro vacío (usuarios)
class Usuario {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }
}

let usuarios = [];
//esta funcion pide datos de usuario nombre y edad  y los valida al final llamo a clase constructora para que arme objetos y los pushee al array usuarios 
function datosUsuarios() {
  
  do {
    let nombre = prompt(
      "Ingrese el nombre del usuario (o escriba 'salir' para terminar):"
    );
    //si nombre convertido a minuscula es salir, sale de la funcion con un break
    if (nombre.toLowerCase() === "salir") {
      break;
    }
    //si nombre parseado es un numero y nombre puede ser convertido a numero finito o no hay nada escrito , alert y vuelve
    if (
      (!isNaN(parseFloat(nombre)) && isFinite(nombre)) ||
      nombre.length == 0
    ) {
      alert("El nombre no puede ser un número.");
      continue;
    }
    //si edad parseado no es un numero alert y continue para ingresar un numero
    let edad;
    //anido un do while con la edad para que no vuelva a preguntarme todo si solo falla la edad 
    do {
      edad = parseInt(prompt("Ingrese la edad del usuario:"));

      if (isNaN(edad)) {
        alert("debe ingresar una edad valida ");
      }
    } while (isNaN(edad));

    let usuario = new Usuario(nombre, edad);
    usuarios.push(usuario);
  } while (true);
// uso true en el while para que solo salga cuando se ejecute break el poner salir  
  return usuarios;
}



function corre() {
  datosUsuarios();
//esta funcion de orden superior(filter) mayorDeEdad deja afuera a los menores de 13 años de la romana
  function mayorDeEdad(usuario){
    return usuario.edad>= 13;
    }
    
  let resultadoMayores = usuarios.filter(mayorDeEdad);
  console.log(resultadoMayores);
  
//este for es para mostrar el nombre de quienes pusieron dinero al final de la romana
  let usuariosInfo = "";
  for (let i = 0; i < resultadoMayores.length; i++) {
    usuariosInfo += "\n" + resultadoMayores[i].nombre + "\n";
  }

  function calculoRomana(resultadoMayores, costoCena) {
    let montoRecaudado = 0;

    function rondaDeDinero(resultadoMayores, costoCena) {
      let montoRonda = 0;
      for (let i = 0; i < resultadoMayores.length; i++) {
        const dineroFaltante = costoCena - montoRonda;
        const comenzal = prompt(
          "Hola " +
            resultadoMayores[i].nombre +
            ", la cena costo " +
            parseInt(costoCena) +
            " y falta poner " +
            dineroFaltante +
            " entre " +
            (resultadoMayores.length - i) +
            " Cuanto podes poner vos?"
        );
        if ( isNaN(comenzal) || comenzal === "") {
                
          alert(" no es  un número.");
          i--
          continue;
        }
        //aca agrego la participacion de dinero de cada comenzal al array resultadoMayores  que contiene los mayores de edad con nombre y edad con datos nombre y edad 
        let aporteComenzal = parseInt(comenzal);
        resultadoMayores[i].comenzal= aporteComenzal;
        montoRonda = montoRonda + parseInt(comenzal);

        console.log(" montoRecaudado: ", montoRonda);
        
      }
          // Si no alcanza alert "No llegamos a cubrir el costo: Vamos de nuevo." Y vuelvo a preguntar a todos cuanto quieren poner.
      if (montoRonda < costoCena) {
        alert("No llegamos a cubrir el costo: Vamos de nuevo.");
      }
      return montoRonda;
    }

    while (montoRecaudado < costoCena) {
      montoRecaudado = rondaDeDinero(resultadoMayores, costoCena);
      console.log(" Total recaudado en la romana: ", montoRecaudado);
    }
    // Si al final de la vuelta alcanza, mando alerta "A comer" y con lo que sobra agrego "Quedo X para propina."
    let propina = montoRecaudado - costoCena;
    return alert(
      "Genial!!!" +
        usuariosInfo +
        "juntamos " +
        montoRecaudado +
        ". Y nos quedo " +
        propina +
        " para la propina."
    );
  }

  //validacion de entrada de datos debe ser un numero positivo sino alert y va de nuevo
  let costoCena = prompt("Cuanto costo la cena?");
  while (costoCena <= 0 || isNaN(costoCena)) {
    alert("el costo debe ser un numero positivo");
    costoCena = prompt(" otra vez Cuanto costo la cena?");
  }

 calculoRomana(resultadoMayores,costoCena);




function postre(){ 
  let respuesta = prompt("dividimos el postre? CONTESTE si/no");
 
if ( respuesta !== null && respuesta.toLowerCase() === "si") {
pedirPostre();
  
}
else {
  alert("no vamos a dividir el postre")
}

 
}
function pedirPostre(){ 
  let costoPostre = prompt("Cuanto costo el postre?");
 costoPostre= (costoPostre / resultadoMayores.length);
 alert("hay que poner "  + costoPostre + " cada uno");
}
postre();
 }
