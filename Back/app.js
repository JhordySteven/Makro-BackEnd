let express=require('express');
let app=express();
let path = require('path');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//CORS
app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
	res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
	res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
	next();
});

//Verificación de fotos en el server
const staticRoute = path.join(__dirname, '../public/imagenes')
app.use('/sources', express.static(staticRoute))

//llamado del servidor
let server=require('../Conexion/configGeneral');

//llamado ruta
const menu=require('../Ruta/routeMenu');
const foto=require('../Ruta/routeFoto');
app.use(menu);
app.use(foto);

//creación del server
app.listen(server.servidor,function(error,res){
	if(error) throw error;
	else console.log("servidor corriendo perfectamente");
});