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
    var contador = 0;
    var digoNombre = prompt("¿Cómo me llamo?");
    if(digoNombre == this.nombre){
      alert("Enhorabuena, has acertado!!!");
      acumula = 'Bien';
      contador+=1;
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
    if((digoEdad == this.edad) && (acumula, acumula2, acumula3 == 'Bien')){
      contador+=1;
      alert("Enhorabuena, has acertado todas las preguntas!!. Tu puntuación es " + contador + " de 4.");
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

var jack = new DatosAnimal("Jack", "Hipopótamo", "Común", 11);
var sammy = new DatosAnimal("Sammy", "Cerdo", "Landrace", 4);
var trompas = new DatosAnimal("Trompas", "Elefante", "Africano", 8);
var rusty = new DatosAnimal("Rusty", "Águila", "Americana", 16);
var garras = new DatosAnimal("Garras", "Gato", "Burmés", 7);
var toby = new DatosAnimal("Toby", "Perro", "Dálmata", 6);
var teddy = new DatosAnimal("Teddy", "Oso", "Pardo", 25);
var bandit = new DatosAnimal("Bandit", "Conejo", "Mini Rex", 2);
