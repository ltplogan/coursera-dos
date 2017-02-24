var string = "Hola";
string += "Mundo";
//string = string + " Mundo";
console.log(string + "!");

var x = 4, y = 4;
if (x == y) {
	console.log("x=4 es igual a y=4");
}

x = "4";
if (x == y) {
	console.log("x=4 es igual a y=4");
}

if (x === y) {
	console.log("x=4 es igual a y=4");
}
else {
	console.log("x=4 no es igual a y=4");
}

if (false || null || undefined || "" || 0 || NaN) {
	console.log("no se ejecuta");
}
else {
	console.log("todo falso");
}

if (true && "hola" && 1 && -1 && "false") {
	console.log("todo verdadero");
}

function irene(x) {
	x = x || "Mundo"; // || or: o 
	console.log("Hola" + x);
}

irene("Hello");
irene();

var empresa = new Object();
empresa.nombre = "Lorenzo";
empresa.ceo = new Object();
empresa.ceo.nom = "Laurent";

console.log(empresa);
console.log("La empresa se llama: " + empresa.ceo.nom);

console.log(empresa["nombre"]);
var direccion = "Domicilio";
empresa[direccion] = "C/haití";

console.log("Domicilio: " + empresa[direccion]);

var empresa = {
	nombre: "Lorenzo",
	cargo: {
		nombre: "Lorenzo",
		apellidos: "Peláez"
	},
	"Domicilio": "C/haití"
};
console.log(empresa);

function multiplicar(x,y) {
	return x * y;
}
console.log(multiplicar(5, 3));

multiplicar.irene = "Hola";
console.log(multiplicar.irene);

function operacion(multiplicar) {
	var miFuncion = function (x) {
		return multiplicar * x;
	};
	return miFuncion;
}
var tres = operacion(3);
console.log(tres(10));
var dos = operacion(2);
console.log(dos(100));

function ecuacion(x, por) {
	return por(x);
}
var tres = operacion(3);
var dos = operacion(2);
var resultado = ecuacion(5, tres);
console.log(resultado);
resultado = ecuacion(100, dos);
console.log(resultado);

var a = { x: 7 };
var b = a; 
console.log(a);
console.log(b);

b.x = 5;
console.log("sustituye por el 5");
console.log(a);
console.log(b);

function cambio(primerValor) {
	console.log("cambio...");
	console.log("antes:");
	console.log(primerValor);

	primerValor = 5;
	console.log("después:");
	console.log(primerValor);
}

var valor = 7;
cambio(valor); //primerValor = valor
console.log("después cambio, valor:");
console.log(valor);

function cambio(primerValor) {
	console.log("cambio...");
	console.log("antes:");
	console.log(primerValor);

	primerValor.x = 5;
	console.log("después:");
	console.log(primerValor);
}

valor = { x: 7 };
cambio(valor); //primerValor = valor
console.log("después cambio, valor:");
console.log(valor);

function circulo (radios) {
	this.radios = radios;

	this.getArea = function () {
		return Math.PI * Math.pow(this.radios, 2);
	};
}

var miCirculo = new circulo(10);
console.log(miCirculo.getArea());

//función constructor
function circulo (radios) {
	this.radios = radios;
}

circulo.prototype.getArea = 
	function () {
		return Math.PI * Math.pow(this.radios, 2);
	};


var miCirculo = new circulo(10);
console.log(miCirculo.getArea());

var otroCirculo = new circulo(20);
console.log(otroCirculo);


var circulo = { //new object()
	radios: 10,

	getArea: function () {
		var x = this;
		console.log(this);

		var aumentar = function () {
			//this.radios = 20;
			x.radios = 20;
		};
		aumentar();
		console.log(this.radios);

		return Math.PI * Math.pow(this.radios, 2);
	}
};
	
console.log(circulo.getArea());






