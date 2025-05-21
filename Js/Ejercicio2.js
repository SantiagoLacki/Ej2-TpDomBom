
// 2- Crea una clase llamada Persona que siga las 
// siguientes condiciones:
// Sus propiedades son: nombre, edad, DNI, 
// sexo (H hombre, M mujer), peso y altura, año 
// de nacimiento. Si quieres añadir alguna 
// propiedad extra puedes hacerlo.
// Los métodos que se debe poder utilizar son:
// mostrarGeneracion: este método debe mostrar un 
// mensaje indicando a qué generación pertenece 
// la persona creada y cual es el rasgo 
// característico de esta generación.
// Para realizar este método tener en cuenta la 
// siguiente tabla de generaciones:

// esMayorDeEdad: indica si es mayor de edad, 
// devuelve un mensaje indicando que la persona 
// es mayor de edad.
// mostrarDatos: devuelve toda la información del 
// objeto.
// Luego crea la interfaz necesaria para que el 
// usuario pueda crear un objeto persona, 
// permitiendo ingresar las propiedades mediante 
// un formulario, también agregar los botones 
// “mostrar generación”, es “mayor de edad” e 
// indicar en un alert el resultado de la función 
// correspondiente.

// app.js

// Definición de la clase Persona (copia la clase completa aquí o asegúrate de que esté en un archivo separado y bien enlazado)
class Persona {
  constructor(nombre, edad, dni, sexo, peso, altura, anioNacimiento) {
      this.nombre = nombre;
      this.edad = edad;
      this.dni = dni;
      this.sexo = sexo; // 'H' para hombre, 'M' para mujer
      this.peso = peso;
      this.altura = altura;
      this.anioNacimiento = anioNacimiento;
  }

  mostrarGeneracion() {
    let generacion = "";
    let rasgoCaracteristico = "";

    // Lógica para determinar la generación basada en el año de nacimiento
    if (this.anioNacimiento >= 1994 && this.anioNacimiento <= 2010) {
        generacion = "Generación Z (Centennials)";
        rasgoCaracteristico = "Irreverencia, innovación y nativos digitales.";
    } else if (this.anioNacimiento >= 1981 && this.anioNacimiento <= 1993) {
        generacion = "Generación Y (Millennials)";
        rasgoCaracteristico = "Frustración, bien preparados, nativos digitales parciales.";
    } else if (this.anioNacimiento >= 1969 && this.anioNacimiento <= 1980) {
        generacion = "Generación X";
        rasgoCaracteristico = "Obsesión por el éxito, razonamiento.";
    } else if (this.anioNacimiento >= 1949 && this.anioNacimiento <= 1968) {
        generacion = "Baby Boom";
        rasgoCaracteristico = "Ambición, trabajo, vivir para trabajar.";
    } else if (this.anioNacimiento >= 1930 && this.anioNacimiento <= 1948) {
        generacion = "Silent Generation (Los niños de la posguerra)";
        rasgoCaracteristico = "Austeridad, disciplina, sacrificio.";
    } else {
        generacion = "No definida para las generaciones en la tabla.";
        rasgoCaracteristico = "No aplica.";
    }
    alert(`Generación: ${generacion}\nRasgo Característico: ${rasgoCaracteristico}`);
  }

    esMayorDeEdad() {
        if (this.edad >= 18) {
            alert(`${this.nombre} es mayor de edad.`);
            return true;
        } else {
            alert(`${this.nombre} NO es mayor de edad.`);
            return false;
        }
    }
    
    mostrarDatos() {
    const datos = `
        Nombre: ${this.nombre}
        Edad: ${this.edad}
        DNI: ${this.dni}
        Sexo: ${this.sexo === 'H' ? 'Hombre' : 'Mujer'}
        Peso: ${this.peso} kg
        Altura: ${this.altura} m
        Año de Nacimiento: ${this.anioNacimiento}
    `;
    alert(datos);
  }
}

let persona;

function valores (e) {
  e.preventDefault();
  const nombre = document.getElementById('nombre').value;
  const edad = parseInt(document.getElementById('edad').value);
  const dni = document.getElementById('dni').value;
  const sexo = document.getElementById('sexo').value;
  const peso = parseFloat(document.getElementById('peso').value);
  const altura = parseFloat(document.getElementById('altura').value);
  const anioNacimiento = parseInt(document.getElementById('anioNacimiento').value);

  persona = new Persona(nombre, edad, dni, sexo, peso, altura, anioNacimiento);
  alert('¡Persona creada exitosamente!');

  // Habilitar los botones de acciones
  mostrarGeneracionBtn.classList.remove('d-none');
  esMayorDeEdadBtn.classList.remove('d-none');
  mostrarDatosBtn.classList.remove('d-none')
}

function mostrarGeneracion (e) {
  e.preventDefault();

  if (persona) {
    persona.mostrarGeneracion();
  } else {
    alert('Primero debes crear una persona.');
  }
}

function esMayorDeEdad (e) {
  e.preventDefault();

  if (persona) {
    persona.esMayorDeEdad();
  } else {
    alert('Primero debes crear una persona.');
  }
}

function mostrarDatos (e) {
  e.preventDefault();
  if (persona) {
    persona.mostrarDatos();
  } else {
    alert('Primero debes crear una persona.');
  }
}

const enviarForm = document.getElementById('personaForm')
const mostrarGeneracionBtn = document.getElementById('mostrarGeneracionBtn')
const esMayorDeEdadBtn = document.getElementById('esMayorDeEdadBtn')
const mostrarDatosBtn = document.getElementById('mostrarDatosBtn')

enviarForm.addEventListener('submit', valores)
mostrarGeneracionBtn.addEventListener('click', mostrarGeneracion);
esMayorDeEdadBtn.addEventListener('click', esMayorDeEdad);
mostrarDatosBtn.addEventListener('click', mostrarDatos);












// class Persona {
//   constructor(nombre, edad, dni, sexo, peso, altura, anioNacimiento) {
//     this.nombre = nombre;
//     this.edad = edad;
//     this.dni = dni;
//     this.sexo = sexo;
//     this.peso = peso;
//     this.altura = altura;
//     this.anioNacimiento = anioNacimiento;
//     this.generacion = generacion
//   }
//   mostrarDatos(e) {
//     e.prevenDefault()
//     console.log(`Nombre: ${this.nombre}, Edad: ${this.edad}, DNI: ${this.dni}, Sexo: ${this.sexo}, Peso: ${this.peso}, Altura: ${this.altura} , Anio de nacimiento: ${this.anioNacimiento}`)
//     document.writeln("DATOS DE LA PERSONA: <br>");
//     document.writeln("Nombre: ", this.nombre, "<br");
//     document.writeln("Edad: ", this.edad, "<br>");
//     document.writeln("DNI: ", this.dni, "<br>");
//     document.writeln("Sexo: ", this.sexo, "<br>");
//     document.writeln("Peso: ", this.peso, "<br>");
//     document.writeln("Altura: ", this.altura, "<br>");
//     document.writeln("Año de Nacimiento: ", this.anioNacimiento, "<br>");
//     document.writeln("Generacion: ", this.generacion, "<br>");
//   }
//   mostrarGeneracion() {
//     if (this.anioNacimiento >= 1994 && this.anioNacimiento <= 2010) {
//       this.generacion = "Generacion Z"
//       console.log("Generación Z")
//     }
//     else if (this.anioNacimiento >= 1981 && this.anioNacimiento <= 1993) {
//       this.generacion = "Generacion Y"
//       console.log("Generación Y")
//     }
//     else if (this.anioNacimiento >= 1969 && this.anioNacimiento <= 1980) {
//       this.generacion = "Generacion X"
//       console.log("Generación X")
//     }
//     else if (this.anioNacimiento >= 1949 && this.anioNacimiento <= 1968) {
//       this.generacion = "Baby Boom"
//       console.log("Generación Baby Boom")
//     }
//     else if (this.anioNacimiento >= 1930 && this.anioNacimiento <= 1948) {
//       this.generacion = "Generacion Silent Generation"
//       console.log("Generación Silent Generation")
//     }
//     else {
//       this.generacion = "Generacion desconocida"
//       console.log("No perteneces a ninguna generacion.")
//     }
//   }
//   mostrarMayorEdad() {
//     if (this.anioNacimiento > 0 && this.anioNacimiento <= 2007) {
//       document.writeln("<p>Naciste en: ", this.anioNacimiento, " Eres mayor de edad.</p> <br><br>")
//     }
//     else {
//       document.writeln("<p>Naciste en: ", this.anioNacimiento, " Eres menor de edad.</p> <br><br>")
//     }
//   }
// }

// const btnMostrarDatos = document.getElementById("btnMostrarDatos");

// btnMostrarDatos.addEventListener('click', mostrarDatos)
