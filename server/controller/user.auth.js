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


const usersignIn = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ valid: 0, message: 'Email and password are required.' });
  }

  try {
    const client = await MongoClient.connect('mongodb://localhost:27017/', { useNewUrlParser: true, useUnifiedTopology: true });
    const coll = client.db('Bus_ticket_booking').collection('user_details');

    const user = await coll.findOne({ email });
    if (!user) {
      client.close();
      return res.status(401).json({ valid: 0, message: 'Invalid email or password.' });
    }

    const isValid = await bcrypt.compare(password, user.password);
    client.close();

    if (isValid) {
      return res.status(200).json({ valid: 1, message: 'Sign-in successful.' });
      
    } else {
      return res.status(401).json({ valid: 0, message: 'Invalid email or password.' });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ valid: 0, message: 'Internal server error.', error: error.message });
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