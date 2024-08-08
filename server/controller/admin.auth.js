const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { MongoClient } = require('mongodb');

const secretKey = 'ABESIT'; 

const adminsignUp = async (req, res) => {
  const { username, email, password, phone } = req.body;

  if (!username || !email || !password || !phone) {
    return res.status(400).json({ message: 'Please fill out all fields.' });
  }

  try {
    const client = await MongoClient.connect('mongodb://localhost:27017/', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    const coll = client.db('Bus_ticket_booking').collection('admin_details');

    const existingUser = await coll.findOne({ email });
    if (existingUser) {
      client.close();
      return res.status(400).json({ message: 'Admin already exists.' });
    }

    if (typeof password !== 'string') {
      client.close();
      return res.status(400).json({ message: 'Password must be a string.' });
    }

    const hashedPassword = await bcrypt.hash(password, 10); // Use 10 rounds for better security
    const newAdmin = { username, email, password: hashedPassword, phone };
    await coll.insertOne(newAdmin);
    client.close();

    const token = jwt.sign({ email: newAdmin.email }, secretKey, { expiresIn: '1h' });
    return res.status(200).json({ message: 'Sign-up successful', token });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error.' });
  }
};



const adminsignIn = async (req, res) => {
    const { email, password } = req.body;
  
    if (!email || !password) {
      return res.status(400).json({ valid: 0, message: 'Email and password are required.' });
    }
  
    let client;
  
    try {
      client = await MongoClient.connect('mongodb://localhost:27017/', { useNewUrlParser: true, useUnifiedTopology: true });
      const coll = client.db('Bus_ticket_booking').collection('admin_details');
  
      const admin = await coll.findOne({ email });
      if (!admin) {
        return res.status(401).json({ valid: 0, message: 'Invalid email or password.' });
      }
  
      const isValid = await bcrypt.compare(password, admin.password);
  
      if (isValid) {
        const token = jwt.sign({ email: admin.email }, secretKey, { expiresIn: '500s' });
        return res.status(200).json({ valid: 1, message: 'Sign-in successful.', token });
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



  
  
  
  
  











module.exports = { adminsignUp,adminsignIn };
