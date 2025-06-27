// const app = require('./index');
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log('Server running on port ${PORT}'));
const express = require('express');
const cors = require('cors');
const neoRoute = require('./routes/neo'); // Adjust if your folder structure differs

const app = express();
app.use(cors());
app.use(express.json());

// Use the NEO route
app.use(neoRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
