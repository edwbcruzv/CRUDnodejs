var mysql=require("mysql")

//  conectando con la base de datos mysql
var con=mysql.createConnection({
    host:"localhost",
    user:'root',
    password:'',
    database:'biblioteca'
});

// comprobando la conexion con mysql
con.connect(
    (err)=>{
        if(!err){
            console.log("Conectado a la base mysql")
        }else{
            console.log("Error al conectarse a mysql")
        }
    }
)

module.exports=con;