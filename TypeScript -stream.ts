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