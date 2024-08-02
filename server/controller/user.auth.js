const { MongoClient } =require('mongodb');
const bcrypt=require("bcrypt");


const home=async(req,res)=>{
  return res.send("Welcome sir")
}
const usersignUp=async(req,res)=>{
   try {
    const client = await MongoClient.connect('mongodb://localhost:27017/');
    const coll =  client.db('Bus_ticket_booking').collection('user_details');
     const data=req.body;
     data.password=await bcrypt.hash(data.password,5)
     await coll.insertOne(data)
     client.close();
     res.status(200).send("data is successfully registered")
   } catch (error) {
      res.send("Internal server error");
   }

}
const usersignIn=async(req,res)=>{
   try {
      const client = await MongoClient.connect('mongodb://localhost:27017/');
      const coll =  client.db('Bus_ticket_booking').collection('user_details');
      const data=req.body;
      const cursor=await coll.findOne({email:data.email});
      client.close();
      const isvalid=await bcrypt.compare(data.password,cursor.password);
      client.close();
      if(isvalid){
         return res.json({valid:1});
       }else{
         return res.json({valid:0});
       }
     
      
   } catch (error) {
      return res.send("internal server error ",error);
   }
};

const addEvent=async(req,res)=>{
   try {
      const client = await MongoClient.connect('mongodb://localhost:27017/');
      const coll =  client.db('Bus_ticket_booking').collection('user_details');
      const data=req.body;
      console.log(data);
      await coll.insertOne(data);
      client.close();
      res.status(200).send( 'Event is added' );   
   } catch (error) {
      console.error('Internal server error', error);
    
   }
}



module.exports={home,usersignUp,usersignIn,addEvent};