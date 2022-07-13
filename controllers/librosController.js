const { restart } = require("nodemon")
var conexion=require("../config/conexion") // utilizando la conexion con la base de datos
var libro=require("../model/libro") //modelo para la consulta a la base de datos
const borrar=require('fs')

module.exports={
    index:function(req,res){
        // realizando una consulta
        libro.obtener(conexion,(err,datos)=>{
            console.log(datos)
            res.render('libros/index', { title: 'algo desde controllers', libros:datos });
        })

        
    },
    crear:function(req,res){
        res.render('libros/crear')
    },
    guardar:function(req,res){
        // console.log(req.body)
        // console.log(req.file)

        libro.insertar(conexion,req.body,req.file,(err,datos)=>{
            res.redirect('/libros')
        })
    },
    eliminar:function(req,res){
        console.log("Eliminando...:",req.params.id)
        libro.retornaDatosID(conexion,req.params.id,(err,datos)=>{
            const nombreImagen="public/Images/"+(datos[0].imagen)
            // res.send(nombreImagen)
            if (borrar.existsSync(nombreImagen)) {
                borrar.unlinkSync(nombreImagen)
            }
        })
        libro.eliminar(conexion,req.params.id,(err,datos)=>{
            res.redirect('/libros')
        })
    },
    editar:function(req,res){

        libro.retornaDatosID(conexion,req.params.id,(err,datos)=>{
            console.log(datos[0])
            res.render('libros/editar',{libro:datos[0]})
        })
        
    },
    actualizar:function(req,res){
        console.log("Actualizado",req.body)

        if (req.body.nombre) {
            libro.actualizar(conexion,req.body,(err,datos)=>{}) 
        }

        if (req.file) {
            if (req.file.filename){
                libro.retornaDatosID(conexion,req.body.id,(err,datos)=>{
                    const nombreImagen="public/Images/"+(datos[0].imagen)
                    // res.send(nombreImagen)
                    if (borrar.existsSync(nombreImagen)) {
                        borrar.unlinkSync(nombreImagen)
                    }
                })

                libro.actualizarArchivo(conexion,req.body,req.file,(err,datos)=>{}) 

            }
            
        }


        res.redirect('/libros')
        
    }

    

}