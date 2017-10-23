/* Función Constructor */
function DatosAnimal(nombreAnimal, tipoAnimal, razaAnimal, edadAnimal){
  this.nombre = nombreAnimal;
  this.animal = tipoAnimal;
  this.raza = razaAnimal;
  this.edad = edadAnimal;
  this.info = "Hola, mi nombre es " + this.nombre + ", soy un " + this.animal + " de la raza " + this.raza + " y tengo " + this.edad + " años.";

  this.mostrarNombre = function(){
    alert("Mi nombre es " + this.nombre + ".");
  }
  this.mostrarAnimal = function(){
    alert("Soy un " + this.animal + ".");
  }
  this.mostrarRaza = function(){
    alert("Soy de la raza " + this.raza + ".");
  }
  this.mostrarEdad = function(){
    alert("Tengo " + this.edad + " años.");
  }
  this.mostrarInfo = function(){
    alert(this.info);
  }
  var acumula, acumula2, acumula3;
  this.ahoraTu = function(){
    var nombres = document.getElementsByClassName('bNombre');
    var contador = 0;
    var digoNombre = prompt("¿Cómo me llamo?");
    if(digoNombre == this.nombre){
      alert("Enhorabuena, has acertado!!!");
      acumula = 'Bien';
      contador+=1;
      nombres.style.backgroundColor = "green";
    }
    else {
      alert("Has fallado. Recuerda, mi nombre es " + this.nombre + ".");
      acumula = 'Mal';
    }
    var digoAnimal = prompt("¿Qué animal soy?");
    if(digoAnimal == this.animal){
      alert("Enhorabuena, has acertado!!!");
      acumula2 = 'Bien';
      contador+=1;
    }
    else {
      alert("Has fallado. Recuerda, soy un " + this.animal + ".");
      acumula2 = 'Mal';
    }
    var digoRaza = prompt("¿De qué raza soy?");
    if(digoRaza == this.raza){
      alert("Enhorabuena, has acertado!!!");
      acumula3 = 'Bien';
      contador+=1;
    }
    else {
      alert("Has fallado. Recuerda, soy de la raza " + this.raza + ".");
      acumula3 = 'Mal';
    }
    var digoEdad = prompt("¿Cuántos años tengo?");
    if((digoEdad == this.edad) && (acumula, acumula2, acumula3 == 'Bien')){ /*Pendiente intentar hacerlo con booleanos*/
      alert("Enhorabuena, has acertado todas las preguntas!!. Tu puntuación es " + contador + " de 4.");
      contador+=1;
    }
    else if(digoEdad == this.edad){
      contador+=1;
      alert("Enhorabuena, has acertado!!. Tu puntuación es " + contador + " de 4.");
    }
    else {
      alert("Has fallado. Recuerda, tengo " + this.edad + " años.");
      alert("Tu puntuación es " + contador + " de 4.");
    }
  }

}

/* Instanciamos 4 objetos */
var tobbie = new DatosAnimal("Tobbie", "perro", "Pastor Alemán", 6);
var garras = new DatosAnimal("Garras", "gato", "siamés", 4);
var bambi = new DatosAnimal("Bambi", "ciervo", "sambar", 8);
var bolita = new DatosAnimal("Bolita", "búho", "lechuza", 33);
