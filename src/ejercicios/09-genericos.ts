
/*
    ===== Código de TypeScript =====
*/

function queTipoSoy<T>(argumento: T) {
    return argumento;
}

let soyString = queTipoSoy("Hola mundo");
let soyNumber = queTipoSoy( 100 );
let soyArreglo = queTipoSoy( [1,2,3,4,5]);

let soyExplicito = queTipoSoy<number>( 100 );
