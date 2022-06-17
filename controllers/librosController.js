var conexion=require("../config/conexion") // utilizando la conexion con la base de datos
var libro=require("../model/libro") //modelo para la consulta a la base de datos

module.exports={
    index:function(req,res){
        // realizando una consulta
        libro.obtener(conexion,(err,datos)=>{
            console.log(datos)
            res.render('libros/index', { title: 'algo desde controllers', libros:datos });
        })

        
    },
    crear:function(rew,res){
        res.render('libros/crear')
    }
}