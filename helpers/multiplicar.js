const fs = require('fs')
const colores = require('colors');
const { argv } = require('process');

const crearArchivoMultiplicar = async ( base = 5, listar, hasta) =>{
    
    try {
//        console.clear();
        
        let salida = '';


    for (i=1; i<=hasta; i++){
          salida += await `${base} ${'X'.red} ${i} ${'='.red} ${base * i} \n`;
        
    }

    if(listar){
        console.log('========================'.blue);
        console.log(`Tabla del ${base}`);
        console.log('========================'.blue);
        
        console.log(salida);    
    }
    
    fs.writeFileSync(`./salida/tabla${base}.txt`, salida)
    return `archivotabla${base}.txt` 
    
    } catch (error) {
        throw error;
    }
    
}


module.exports ={
 crearArchivoMultiplicar : crearArchivoMultiplicar
}