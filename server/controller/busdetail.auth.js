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
 const getbusinfo = async (req, res) => {
   try {
      
       const client = await MongoClient.connect('mongodb://localhost:27017/', { useNewUrlParser: true, useUnifiedTopology: true });
       const db = client.db('Bus_ticket_booking');
       const coll = db.collection('bus_details');
       
       
       const { source, destination, date } = req.query;
       
       
       const query = {};
       if (source) query.source = source;
       if (destination) query.destination = destination;
      
       
       
       const busInfo = await coll.find(query).toArray();
       
      
       await client.close();
       
      
       res.status(200).json(busInfo);
   } catch (error) {
      
       console.error(error);
       res.status(500).send("Internal server error");
   }
};

module.exports = { busdetails, getbusinfo };


 




























 