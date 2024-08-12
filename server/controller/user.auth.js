const { MongoClient } =require('mongodb');
const bcrypt=require("bcrypt");
const jwt = require('jsonwebtoken');
const secretKey = 'ABESIT'; 




const home=async(req,res)=>{
  return res.send("Welcome sir")
}

const usersignUp = async (req, res) => {
  const { name, email, password, age, DOB, mobile } = req.body;

  if (!name || !email || !password || !age || !DOB || !mobile) {
    return res.status(400).json({ message: 'Please fill out all fields.' });
  }

  try {
    const client = await MongoClient.connect('mongodb://localhost:27017/');
    const coll = client.db('Bus_ticket_booking').collection('user_details');

    const existingUser = await coll.findOne({ email });
    if (existingUser) {
      client.close();
      return res.status(400).json({ message: 'User already exists.' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = { name, email, password: hashedPassword, age, DOB, mobile };
    await coll.insertOne(newUser);
    client.close();

   
    const token = jwt.sign({ email: newUser.email }, secretKey, { expiresIn: '1h' });
    return res.status(200).json({ message: 'Sign-up successful', token });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error.' });
  }
};


const usersignIn = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ valid: 0, message: 'Email and password are required.' });
  }

  let client;

  try {
    client = await MongoClient.connect('mongodb://localhost:27017/', { useNewUrlParser: true, useUnifiedTopology: true });
    const coll = client.db('Bus_ticket_booking').collection('user_details');

    
    const user = await coll.findOne({ email });
    if (!user) {
      return res.status(401).json({ valid: 0, message: 'Invalid email or password.' });
    }

    
    const isValid = await bcrypt.compare(password, user.password);

    if (isValid) {
    
      const token = jwt.sign({ email: user.email }, secretKey, { expiresIn: '500s' });

     
      return res.status(200).json({ 
        valid: 1, 
        message: 'Sign-in successful.', 
        token, 
        name: user.name  
      });
    } else {
      return res.status(401).json({ valid: 0, message: 'Invalid email or password.' });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ valid: 0, message: 'Internal server error.', error: error.message });
  } finally {
    if (client) {
      await client.close();
    }
  }
};














module.exports={home,usersignUp,usersignIn};