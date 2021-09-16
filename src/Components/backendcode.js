
//redux pratice code make here for
//redux pratice code make here for

 
// app.get("/redux", (req, res) => {
//    Redux_pratice.find({}).toArray((err, documents) => {
//       res.send(documents);
//     });
//   });

//   app.delete(`/redux/:id`,(req,res)=>{
//      const id =req.params.id;
//      console.log(id);
//      Redux_pratice.deleteOne({_id:ObjectId(id)},(err)=>{
//        if(!err){
//          res.send({count:1})
//        }
//      })

//    })

   

//   app.get("/redux/:id", (req, res) => {

//      const id = req.params.id;


//     Redux_pratice.find({_id:ObjectId(id)}).
//     toArray((err, documents) => {
//       res.send(documents[0]);
//     });
//   });


//   app.patch("/redux/:id", (req, res) => {

//      const id = req.params.id;
//      const value = req.body.title
     
     
     
//     Redux_pratice.updateOne({_id:ObjectId(id)},
//     {
//       $set: {[req.body.title] : req.body.body}
//     })
//     .then(result =>{
//       console.log(result)

//     })

//   })
    

//     app.delete(`/redux/:id`,(req,res)=>{
//      const id =req.params.id;
//      console.log(id);
//      Redux_pratice.deleteOne({_id:ObjectId(id)},(err)=>{
//        if(!err){
//          res.send({count:1})
//        }
//      })

//    })






//redux practice code finish here
//redux practice code finish here

import React from 'react';

const backendcode = () => {
    return (
        <div>
            
        </div>
    );
};

export default backendcode;