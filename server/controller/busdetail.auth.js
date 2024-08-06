const { MongoClient } =require('mongodb');


const busdetails=async(req,res)=>{
    try {
     const client = await MongoClient.connect('mongodb://localhost:27017/');
     const coll =    client.db('Bus_ticket_booking').collection('bus_details');
     const data=req.body;
      await coll.insertOne(data)
      client.close();
      res.status(200).send("data is successfully registered")
    } catch (error) {
       res.send("Internal server error");
    }
 
 }
 const getbusinfo=async(Req,res)=>{
   
 }

 module.exports={busdetails};