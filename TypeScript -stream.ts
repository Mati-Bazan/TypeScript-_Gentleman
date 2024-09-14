/*
// JavaScript
const metodo = (a: any) : any => a;

metodo(a: 1); // hola  

// metodo = (number) => number

metodo(a: "hola"); // hola

// metodo = (string) => string
*/

/*
// TypeScript 
let a = 1
a = "Hola" // Error Type STR no se puede asignar a "a" tiene tipo "number"
// Tipado estricto
*/

// socio cultural - ventajas
// 1 - Seguridad
// 2 - Mantenibilidad
// 3 - Refactorizacion

// TypeScript ¿que es?: javascript mejorado o modificado.

class Persona{
    name: string;

    constructor (name: string) {
        this.name = name;
    }

    getName(): string {
        return this.name;
    }

    setName(name:string) : void {
        this.name = name;
    }
}

interface PersonaInterface {
    name: string;
    getName(): string;
    setName(name:string):void;
}

const persona2 = {
    name:"alana",
    setName(name: string) : void {
        this.name = name
    }
}

const sendData = (persona2 : PersonaInterface) : void => {
    console.log(persona.getName)
}

const persona: Persona = new Persona("juan") 
// persona.setName(1) ERROR
// let personaPosible: PersonaInterface = persona // Error la propiedad name es privada (private name: string;)

// Shape: se puede validar el mismo objero(clase) si son iguales auqie tengan diferente nombre. Tienen el mismo contenido

// Transpilar = generar a partir de código en un lenguaje código en otro lenguaje
// Typescript => Javascript | Los navegadores leen javascript

// Enum
const NI = {
    ARG: "dni",
    ES: "nie",
} // Es una const

type NITYPE = "pasaporte" | "nie" // Tipos | Union types

enum NIENUM {
    ARG= "dni",
    ES= "nie",
}  // Es un tipo

const dniConst = NI.ARG // Si se cambia el "DNI" = ARG: "Pasaporte" | dniConst sigue funcionando
const dniEnum = NIENUM.ARG

const dimeELNI = (ni: NITYPE) => ni;

dimeELNI("pasaporte") // Solo puede tener dos valores "pasaporte" y "nie"

// Intersection types 

type A = string | number; // union: Elementos que se comparten entre string y number

type B = string & number; // intersection: Elementos que se suman entre string y number

const metodoTypeIntersection = (a : A) => a;

// Ejemplo
interface Alumno {
    nombre: string;
    nota: number;
}

interface Profesor {
    nombre: string;
    legajo: string;
}

type AlumnoUProfesor = Alumno | Profesor

const personaType: AlumnoUProfesor = {
    nombre:"Juan",
    nota: 18,
} // personaType ahora es alumno porque tiene nota

// unknown 

// unknown vs any 

let numUnk: unknown = 1

// Type assertion
const texto: string = numUnk as string  //  Indica a TypeScript que trates a numUnk como si fuera de tipo string.

// Otros types
const myArreglo: number[] = [1,2,3,4,5] // Arreglo de numeros
const myArreglo2: [number] = [1] // Arreglo de UN UNICO numero [number]

let colores = ["rojo", "amarillo", "verde"] as const; // as const = hace que TypeScript no generalize | unicamnete estos valores.

console.log(colores); // Type readonly UNICAMENTE de "rojo", "amarillo" y "verde"

// generico
const metodoGenerico = <T>(x: T): T => x;

const a = metodoGenerico<number>(1)
const b = metodoGenerico<string>("Hola")

interface Saludar<T> {
    saludar(x: T): string;
} 

const PersonaSaludo: Saludar<string> = {
    saludar(x: string) {
        return `Hola ${x}`
    }
}

const Perro: Saludar<number> = {
    saludar(x: number) {
        return `Hola ${x}, veces`
    } 
} 

// function overloading | Sobrecarga de funciones 
function metodoStrONum(x: string): number;
function metodoStrONum(x: number): string;

function metodoStrONum(x: string | number): string | number {
    if (typeof x == "number") {
        return x.toString()
    }
    if (typeof x == "string") {
        return x.length
    }
    return x;
}
metodoStrONum(1)

interface Persona {
    name: string;
    saludar(x: string): string;
}

interface Perro {
    raza: string;
    saludar (x: number): number;
}

enum Claves {
   name = "name",
   raza = "raza",
}

type Mamal = {
    [key in Claves]: string;
}

// hagamos un tipo que dependa de una property para el resultado de la función
type Dependant <T extends {property: any}> = T["property"];

type Independent = {
    property: number;
}

const dependant: Dependant<Independent> = 1;

enum Numbers1 {
    "NUMBER1"= "Number1",
    "NUMBER2"= "Number2",
}

enum Numbers2 {
    "NUMBER3"= "Number3",
    "NUMBER4"= "Number4",
}

const MyNumbers = {...Numbers1, ...Numbers2} as const;
const mixValues = Object.values(MyNumbers)

type MixNumbers = (typeof mixValues)[number];

type Enum = {
    [key in MixNumbers] : any;
}