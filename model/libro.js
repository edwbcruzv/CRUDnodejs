module.exports={
    obtener:function(conexion,funcion){
        conexion.query("SELECT * FROM libros",funcion)
    },
    insertar:function(conexion,datos,archivo,funcion){
        conexion.query(`INSERT INTO libros(nombre, imagen) VALUES ('${datos.nombre}','${archivo.filename}')`,funcion)
    },
    eliminar:function(conexion,id,funcion){
        conexion.query(`DELETE FROM libros WHERE id=${id}`)
    },
    retornaDatosID:function(conexion,id,funcion){
        conexion.query(`SELECT * FROM libros WHERE id=${id}`,funcion)
    },
    actualizar:function(conexion,datos,funcion){
        // console.log("Desde la consulta:",datos)
        conexion.query(`UPDATE libros SET nombre='${datos.nombre}' WHERE id=${datos.id}`,funcion)
    },
    actualizarArchivo:function(conexion,datos,archivo,funcion){
        // console.log("Desde la consulta:",datos)
        conexion.query(`UPDATE libros SET imagen='${archivo.filename}' WHERE id=${datos.id}`,funcion)
    }
    
}