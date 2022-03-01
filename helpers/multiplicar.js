

const fs = require('fs')

const crearArchivo = async ( base = 5, listar = false, hasta = 10 ) =>{
   
   /*  return new Promise((resolve, reject) => {
        console.log('================================')
        console.log('          tabla del :'.base)
        console.log('================================')
        let salida = ''
    
        for (let i = 1; i <= 10; i++) {
            
            salida += `${base} x ${i} = ${base * i }\n`
            
            
        }
    
        fs.writeFileSync(`tabla-${base}.txt`, salida)
        resolve(`tabla-${5} fue creado`)
    }); */
    try{

        let salida = ''
    
        for (let i = 1; i <= hasta; i++) {
            
            salida += `${base} ${'x'} ${i} = ${base * i }\n`
            
        }
        // console.log(listar)
        if(listar){

            console.log('================================'.green)
            console.log('          tabla del :'.underline.red , base.inverse)
            console.log('================================'.rainbow)
            console.log('salida', salida.trap)
            
        }
    
        fs.writeFileSync(`salida/tabla-${base}.txt`, salida)
        return (`tabla-${5} fue creado`)
    }catch(error){
        throw (error)
    }
    
}

module.exports ={
    crearArchivo
}