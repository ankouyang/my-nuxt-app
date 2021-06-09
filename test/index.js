 const app = require('express')()

 app.set('etag',false)
 app.get('/api',(req,res)=>{
      res.setHeader('Cache-Control','no-store')
      res.setHeader('Access-Control-Allow-Origin','http://10.2.107.84:8090')
      res.json({
          code:200,
          success:true,
          data:{
              lists:[
                  {name:'ankouyang',age:'18',sex:'男'},
                  {name:'ankou',age:'18',sex:'男'},
                  {name:'张珊',age:'18',sex:'女'},
                  {name:'里斯',age:'18',sex:'女'}
              ]
          }
      })
 })

 app.listen(8888,()=>{
     console.log('进入8888服务');
 })