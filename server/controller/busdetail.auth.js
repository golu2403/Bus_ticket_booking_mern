const { MongoClient } =require('mongodb');


const busdetails=async(req,res)=>{
    try {
     const client = await MongoClient.connect('mongodb://localhost:27017/');
     const coll = client.db('Bus_ticket_booking').collection('bus_details');
     const data=req.body;
      await coll.insertOne(data)
      client.close();
      res.status(200).json({ message: 'Bus details added successfully.' });

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



const UpdateBus = async (req, res) => {
  try {
    const id = req.params.bus_id; 

    const client = await MongoClient.connect('mongodb://localhost:27017/', { useNewUrlParser: true, useUnifiedTopology: true });
    const db = client.db('Bus_ticket_booking');
    const coll = db.collection('bus_details');

  
    const businfo = await coll.findOne({ busId: id });

    if (businfo && businfo.availableSeats > 0) {
      // Decrement available seats by 1
      await coll.updateOne({ busId: id }, { $inc: { availableSeats: -1 } });

     
      const updatedBus = await coll.findOne({ busId: id });

      
      client.close();

      
      res.status(200).json(updatedBus);
    } else {
     
      res.status(400).json({ message: 'No seats available' });
    }
  } catch (error) {
    console.error('Internal server error', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};




module.exports = { busdetails, getbusinfo,UpdateBus };


 




























 