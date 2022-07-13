var express = require('express');
var router = express.Router();
const librosController=require("../controllers/librosController")
const multer=require('multer')
const fecha=Date.now()

const rutaAlmacen=multer.diskStorage(
    {
        destination:function(request,file,callback){
            callback(null,'./public/Images')
        },
        filename:function(request,file,callback){
            console.log(file)
            callback(null,fecha+'_'+file.originalname)
        }
    }
)

const cargar=multer({storage:rutaAlmacen})


/* GET home page. */
router.get('/', librosController.index);
router.get('/crear', librosController.crear)
router.get('/editar/:id', librosController.editar)
router.post('/eliminar/:id', librosController.eliminar)

router.post('/', cargar.single('archivo'),librosController.guardar)
router.post('/actualizar', cargar.single('archivo'),librosController.actualizar)


module.exports = router;