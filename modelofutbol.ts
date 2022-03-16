// Modelo de clases.

class Historial {

    private _id: number;
    private _n_goles: number;
    private _n_tarjeta_amarilla: number;
    private _n_tarjeta_roja: number;
   
    constructor(){
        this.id=0;
        this.n_goles=0;
        this._n_tarjeta_amarilla=0;
        this.n_tarjeta_roja=0;
    }
    
    
    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }

    public get n_goles(): number {
        return this._n_goles;
    }
    public set n_goles(value: number) {
        this._n_goles = value;
    }

    public get n_tarjeta_amarilla(): number {
        return this._n_tarjeta_amarilla;
    }
    public set n_tarjeta_amarilla(value: number) {
        this._n_tarjeta_amarilla = value;
    }

    public get n_tarjeta_roja(): number {
        return this._n_tarjeta_roja;
    }
    public set n_tarjeta_roja(value: number) {
        this._n_tarjeta_roja = value;
    }

}

class Jugador {
    
    private _id: number;
    private _nombre: string;
    private _edad: number;
    private _pais_procedencia: string;
    private _historial: Historial;
    

    constructor(){
        this.id=0;
        this.nombre="";
        this.edad=0;
        this._pais_procedencia="";
        this._historial= new Historial();
    }
    
    public get id(): number {
        return this._id;
    }

    public set id(value: number) {
        this._id = value;
    }
    
    public get nombre(): string {
        return this._nombre;
    }
    
    public set nombre(value: string) {
        this._nombre = value;
    }
    
    public get edad(): number {
        return this._edad;
    }
    public set edad(value: number) {
        this._edad = value;
    }
  
    public get pais_procedencia(): string {
        return this._pais_procedencia;
    }
    
    public set pais_procedencia(value: string) {
        this._pais_procedencia = value;
    }

    public get historial(): Historial {
        return this._historial;
    }
    public set historial(value: Historial) {
        this._historial = value;
    }
    
    
}

class Equipo {

    private _id: number;
    private _nombre: string;
    private _fecha_fundacion: Date;
    private _jugadores: Jugador[];
    
   
    constructor() {
        this._id=0;
        this._nombre="";
        this._fecha_fundacion= new Date();
        this.jugadores=[];

    }
    
    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }

    public get nombre(): string {
        return this._nombre;
    }
    public set nombre(value: string) {
        this._nombre = value;
    }

    public get fecha_fundacion(): Date {
        return this._fecha_fundacion;
    }
    public set fecha_fundacion(value: Date) {
        this._fecha_fundacion = value;
    }

    public get jugadores(): Jugador[] {
        return this._jugadores;
    }
    public set jugadores(value: Jugador[]) {
        this._jugadores = value;
    }

}

// Declaraciones de objetos.

    // Historiales.
    let historial_cristiano_ronaldo: Historial = new Historial();
    historial_cristiano_ronaldo.id=1;
    historial_cristiano_ronaldo.n_goles=23;
    historial_cristiano_ronaldo.n_tarjeta_amarilla=8;
    historial_cristiano_ronaldo.n_tarjeta_roja=2;
    
    let historial_ivan_rakitic: Historial = new Historial();
    historial_ivan_rakitic.id=2;
    historial_ivan_rakitic.n_goles=3;
    historial_ivan_rakitic.n_tarjeta_amarilla=3;
    historial_ivan_rakitic.n_tarjeta_roja=0;

    let historial_jesus_navas: Historial = new Historial();
    historial_jesus_navas.id=3;
    historial_jesus_navas.n_goles=4;
    historial_jesus_navas.n_tarjeta_amarilla=3;
    historial_jesus_navas.n_tarjeta_roja=1;


    // Jugadores.

    let cristiano_ronaldo: Jugador = new Jugador();
    cristiano_ronaldo.id=1;
    cristiano_ronaldo.nombre="Cristiano Ronaldo";
    cristiano_ronaldo.edad=37;
    cristiano_ronaldo.pais_procedencia="Portugal";
    cristiano_ronaldo.historial=historial_cristiano_ronaldo;
    
    
    let ivan_rakitic: Jugador = new Jugador();
    ivan_rakitic.id=25;
    ivan_rakitic.nombre="Ivan Rakitic";
    ivan_rakitic.edad=34;
    ivan_rakitic.pais_procedencia="Croacia";
    ivan_rakitic.historial=historial_ivan_rakitic;

    let jesus_navas: Jugador = new Jugador();
    jesus_navas.id=15;
    jesus_navas.nombre="Jesús Navas";
    jesus_navas.edad=36;
    jesus_navas.pais_procedencia="España";
    jesus_navas.historial=historial_jesus_navas;
    

    // Equipos.

    let manchester_united: Equipo = new Equipo();
    manchester_united.id=1;
    manchester_united.nombre="Manchester United";
    manchester_united.fecha_fundacion=new Date("1878-03-05")
    manchester_united.jugadores[1] = cristiano_ronaldo;
    
    let sevilla: Equipo = new Equipo();
    sevilla.id=2;
    sevilla.nombre="Sevilla FC";
    sevilla.fecha_fundacion=new Date("1890-01-25");
    sevilla.jugadores[1]=ivan_rakitic;
    sevilla.jugadores[2]=jesus_navas;


// Pruebas.

    console.log("Equipo 1");
    console.log("================================================================");
    console.log("Id: " + manchester_united.id);
    console.log("Nombre: " + manchester_united.nombre);
    console.log("Fecha de fundación: " + manchester_united.fecha_fundacion);

    console.log("Jugadores del Equipo 1");
    console.log("================================================================")
    console.log(manchester_united.jugadores)
    console.log("================================================================");
    
    console.log("Equipo 2");
    console.log("================================================================");
    console.log("Id: " + sevilla.id);
    console.log("Nombre: " + sevilla.nombre);
    console.log("Fecha de fundación: " + sevilla.fecha_fundacion);

    console.log("Jugadores del Equipo 2");
    console.log("================================================================")
    console.log(sevilla.jugadores)


    