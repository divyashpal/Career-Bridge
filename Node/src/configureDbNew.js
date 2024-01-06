const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const validator = require('validator');
// const { stringify } = require('querystring');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors({
  origin: "*"
}));

app.use(bodyParser.json());

// mongoose.connect('mongodb://localhost:27017/auth_demo', { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
//   console.log("database connected successfully")
// }).catch(() => {
//   console.log("database not connected")
// })
mongoose.connect("mongodb://localhost:27017/auth_demo", {
  useNewUrlParser: true,
  // useFindAndModify: false,
  useUnifiedTopology: true
}).then(() => {
  console.log("Connected to Database");
}).catch((err) => {
  console.log("Not Connected to Database ERROR! ", err);
});

//Mongoose Schema



const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    // unique: true
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    // unique: true,
    // match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, // Basic email validation using a regular expression
  },
});
const User = mongoose.model('User', userSchema);


// User.collection.dropIndex('name_1', function(err, result) {
//   if (err) {
//     console.error("Error dropping index:", err);
//   } else {
//     console.log("Index dropped successfully:", result);
//   }
  
//   // Close the Mongoose connection after dropping the index (if needed)
//   mongoose.connection.close();
// });
// const User = mongoose.model('users', { name: String, password: String, email: String, degree: String, year: String });

app.post('/api/register', async (req, res) => {
  // const { email } = req.body;

  // Validate email format
  // if (!email || !email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
  //   return res.status(400).json({ error: 'Invalid email format' });
  // }
  try {
    console.log("<>>>in signing function",req.body)
    const { username, password, email } = req.body;
    const userData = await User.findOne({ email: email })
    if (userData) {
      return res.status(400).json({ message: 'User Already Exist' });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("before save data")
    const user = await User.create({ username, password: hashedPassword, email });
    console.log("after save data")
    // await user.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error(">>", error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/api/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });

    if (user && await bcrypt.compare(password, user.password)) {
      const token = jwt.sign({ username }, 'your_secret_key');
      res.status(200).json({ token });

    } else {
      res.status(401).json({ error: 'Invalid credentials' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
