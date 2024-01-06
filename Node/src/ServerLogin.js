// // server.js
// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const mongoose = require('mongoose');

// const app = express();
// const PORT = 6000;

// app.use(cors());
// app.use(bodyParser.json());

// // Connect to MongoDB
// // mongoose.connect('mongodb://0.0.0.0:27017/auth_demo', { useNewUrlParser: true });
// mongoose.connect("mongodb://0.0.0.0:27017/auth_demo", {
//     useNewUrlParser: true,
//     // useFindAndModify: false,
//     useUnifiedTopology: true
// }).then(() => {
//     console.log("Connected to Database");
// }).catch((err) => {
//     console.log("Not Connected to Database ERROR! ", err);
// });

// // Define a schema and model for your user collection
// const userSchema = new mongoose.Schema({
//   username: String,
//   password: String,
// });

// const User = mongoose.model('User', userSchema);

// // Login route
// app.post('/api/login', async (req, res) => {
//   const { username, password } = req.body;

//   try {
//     const user = await User.findOne({ username, password });
//     if (user) {
//       // Successful login
//       res.json({ success: true });
//     } else {
//       // Invalid credentials
//       res.json({ success: false });
//     }
//   } catch (error) {
//     console.error('Error during login:', error);
//     res.status(500).json({ success: false, error: 'Internal Server Error' });
//   }
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });
