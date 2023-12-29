const argv = require('yargs')
                .option('b',{
                    alias : 'base',
                    type: 'number',
                    demandOption: true,
                    describe:'La base para multiplicar'
                } )

                .check((argv,options)=>{
                    if(isNaN(argv.b)){
                        throw 'La base tiene que ser un número'
                    }
                    return true;
                })
                .option('l',{
                    alias : 'listar',
                    type: 'boolean',
                    default: false,
                    describe:'Para listar la multiplicación'
                    //demandOption: true      
                })

                .option('h',{
                    alias : 'hasta',
                    type: 'number',
                    default: 10,
                    describe:'hasta que numero multiplicar'
                    //demandOption: true      
                })
                .argv



module.exports = argv;