// Modelo de clases.
class Historial {
    constructor() {
        this.id = 0;
        this.n_goles = 0;
        this._n_tarjeta_amarilla = 0;
        this.n_tarjeta_roja = 0;
    }
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
    get n_goles() {
        return this._n_goles;
    }
    set n_goles(value) {
        this._n_goles = value;
    }
    get n_tarjeta_amarilla() {
        return this._n_tarjeta_amarilla;
    }
    set n_tarjeta_amarilla(value) {
        this._n_tarjeta_amarilla = value;
    }
    get n_tarjeta_roja() {
        return this._n_tarjeta_roja;
    }
    set n_tarjeta_roja(value) {
        this._n_tarjeta_roja = value;
    }
}
class Jugador {
    constructor() {
        this.id = 0;
        this.nombre = "";
        this.edad = 0;
        this._pais_procedencia = "";
        this._historial = new Historial();
    }
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
    get nombre() {
        return this._nombre;
    }
    set nombre(value) {
        this._nombre = value;
    }
    get edad() {
        return this._edad;
    }
    set edad(value) {
        this._edad = value;
    }
    get pais_procedencia() {
        return this._pais_procedencia;
    }
    set pais_procedencia(value) {
        this._pais_procedencia = value;
    }
    get historial() {
        return this._historial;
    }
    set historial(value) {
        this._historial = value;
    }
}
class Equipo {
    constructor() {
        this._id = 0;
        this._nombre = "";
        this._fecha_fundacion = new Date();
        this.jugadores = [];
    }
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
    get nombre() {
        return this._nombre;
    }
    set nombre(value) {
        this._nombre = value;
    }
    get fecha_fundacion() {
        return this._fecha_fundacion;
    }
    set fecha_fundacion(value) {
        this._fecha_fundacion = value;
    }
    get jugadores() {
        return this._jugadores;
    }
    set jugadores(value) {
        this._jugadores = value;
    }
}
// Declaraciones de objetos.
// Historiales.
let historial_cristiano_ronaldo = new Historial();
historial_cristiano_ronaldo.id = 1;
historial_cristiano_ronaldo.n_goles = 23;
historial_cristiano_ronaldo.n_tarjeta_amarilla = 8;
historial_cristiano_ronaldo.n_tarjeta_roja = 2;
let historial_ivan_rakitic = new Historial();
historial_ivan_rakitic.id = 2;
historial_ivan_rakitic.n_goles = 3;
historial_ivan_rakitic.n_tarjeta_amarilla = 3;
historial_ivan_rakitic.n_tarjeta_roja = 0;
let historial_jesus_navas = new Historial();
historial_jesus_navas.id = 3;
historial_jesus_navas.n_goles = 4;
historial_jesus_navas.n_tarjeta_amarilla = 3;
historial_jesus_navas.n_tarjeta_roja = 1;
// Jugadores.
let cristiano_ronaldo = new Jugador();
cristiano_ronaldo.id = 1;
cristiano_ronaldo.nombre = "Cristiano Ronaldo";
cristiano_ronaldo.edad = 37;
cristiano_ronaldo.pais_procedencia = "Portugal";
cristiano_ronaldo.historial = historial_cristiano_ronaldo;
let ivan_rakitic = new Jugador();
ivan_rakitic.id = 25;
ivan_rakitic.nombre = "Ivan Rakitic";
ivan_rakitic.edad = 34;
ivan_rakitic.pais_procedencia = "Croacia";
ivan_rakitic.historial = historial_ivan_rakitic;
let jesus_navas = new Jugador();
jesus_navas.id = 15;
jesus_navas.nombre = "Jesús Navas";
jesus_navas.edad = 36;
jesus_navas.pais_procedencia = "España";
jesus_navas.historial = historial_jesus_navas;
// Equipos.
let manchester_united = new Equipo();
manchester_united.id = 1;
manchester_united.nombre = "Manchester United";
manchester_united.fecha_fundacion = new Date("1878-03-05");
manchester_united.jugadores[1] = cristiano_ronaldo;
let sevilla = new Equipo();
sevilla.id = 2;
sevilla.nombre = "Sevilla FC";
sevilla.fecha_fundacion = new Date("1890-01-25");
sevilla.jugadores[1] = ivan_rakitic;
sevilla.jugadores[2] = jesus_navas;
// Pruebas.
console.log("Equipo 1");
console.log("================================================================");
console.log("Id: " + manchester_united.id);
console.log("Nombre: " + manchester_united.nombre);
console.log("Fecha de fundación: " + manchester_united.fecha_fundacion);
console.log("Jugadores del Equipo 1");
console.log("================================================================");
console.log(manchester_united.jugadores);
console.log("================================================================");
console.log("Equipo 2");
console.log("================================================================");
console.log("Id: " + sevilla.id);
console.log("Nombre: " + sevilla.nombre);
console.log("Fecha de fundación: " + sevilla.fecha_fundacion);
console.log("Jugadores del Equipo 2");
console.log("================================================================");
console.log(sevilla.jugadores);
