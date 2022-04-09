var pool=require('../Conexion/conexionBD');
module.exports={
    //Registrar Menu
    mntMenu(req,res){
        try{
          const sql="call usp_MntMenu(?,?,?,?,?)";
          var mntMenu={
              id:req.body.id,
              nombre:req.body.nombre,
              //tipoMenu:req.body.tipoMenu,
              ruta:req.body.ruta,
              opcion:req.body.opcion,
              estado:req.body.estado
          }
          pool.query(sql,[mntMenu.opcion,mntMenu.id,mntMenu.nombre,mntMenu.tipoMenu,mntMenu.ruta,mntMenu.estado],error=>{
              if(error) throw error;
              else res.send('ok');
              res.end();
          })
        }catch(error){
          res.send(error);
          res.send()
        }
    },
    //listar Menu
    listMenu(req,res){
        try{
          const sql="call usp_MntMenu(?,?,?,?,?)";
        let mntMenu={
            idsp:0,
            nombresp:'',
            rutassp: '',
            opcionsp:req.params.opcion,
            estadosp:0
        }
        pool.query(sql,[mntMenu.idsp,mntMenu.nombresp,mntMenu.rutassp,mntMenu.opcionsp,mntMenu.estadosp],function(err,resp){
            if(err){
              console.log('ingreso')
              throw err;
            }
            if(resp.length>0){
              res.send(resp);
            }else{
              res.send('not result');
            }
            res.end();
        })
        }catch(error){
          res.send(error);
          res.end()
        }
    }
}