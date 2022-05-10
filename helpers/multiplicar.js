const fs = require('fs');
const colors = require('colors');

const crearArchivo = async( base = 5, listar=false, hasta =10) =>{
    try {
        let salida, consola = "";
        for (let i = 1; i <= hasta; i++) {
            salida += `${ base } x ${i} = ${base * i}\n`;
            consola += `${ base } ${ 'x'.green } ${i}  ${'='.green} ${base * i}\n`;
        }
        if(listar){
            console.log("=============".rainbow);
            console.log(`  TABLA DEL ${colors.blue(base)}  `);
            console.log("=============".rainbow);
            console.log(consola);
        }
        
        
        fs.writeFileSync( `./salida/tabla-${base}.txt`, salida)
        
        return `tabla-${base}.txt creado`;
    } catch (err) {
        throw err;
    }
    
}

module.exports = {
    //funcion : crearArchivo
    crearArchivo
}