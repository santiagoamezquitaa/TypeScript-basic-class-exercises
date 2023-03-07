
/*
    ===== Código de TypeScript =====
*/

interface SuperHeroe {
    nombre: string;
    edad: number;
    direccion: Direccion;
    mostrarDireccion: () => string;
}

interface Direccion {
    calle: string,
    pais: string,
    ciudad: string,
}

const superHeroe = {
    nombre: 'Spiderman',
    edad: 30,
    direccion:{
        calle: 'Main St',
        pais: 'USA',
        ciudad: 'NY'
    },
    mostrarDireccion() {
        return this.nombre + ', ' + this.direccion.ciudad + ', ' + this.direccion.pais;
    }
}

const direccion = superHeroe.mostrarDireccion();
console.log(direccion);

/* NOTA 

No se recomienda tener varios objetos anidados dentro de las interfaces porque aumenta la dificultas de lectura y de entendimiento. Asi no se debe hacer:

interface SuperHeroe {
    nombre: string;
    edad: number;
    direccion: {
        calle: string,
        pais: string,
        ciudad: string,
    },
    mostrarDireccion: () => string;
}

const superHeroe = {
    nombre: 'Spiderman',
    edad: 30,
    direccion:{
        calle: 'Main St',
        pais: 'USA',
        ciudad: 'NY'
    },
    mostrarDireccion() {
        return this.nombre + ', ' + this.direccion.ciudad + ', ' + this.direccion.pais;
    }
}

La forma correcta es creando interfaces para cada objeto y luego pasarle la interfaz. Ej:

interface SuperHeroe {
    nombre: string;
    edad: number;
    direccion: Direccion;
    mostrarDireccion: () => string;
}
interface Direccion {
    calle: string,
    pais: string,
    ciudad: string,
}
*/