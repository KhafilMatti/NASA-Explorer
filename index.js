require('dotenv').config();
// import './styling.css'

const express = require('express');
const cors = require('cors');
const axios = require('axios');
const req = require('express/lib/request');
// require('dotenv').config();

const app = express();
app.use(cors());

const PORT = process.env.PORT || 5000;
const NASA_API_KEY = process.env.NASA_API_KEY;

console.log('Server starting...');
console.log('Using NASA API Key:', NASA_API_KEY);
console.log('Listening on port:', PORT);
app.get('/', (req, res) => {
    res.send('NASA Space App Backend is running');
});




app.get('/api/apod',async (req, res) => {
    try {
        const response = await axios.get(
            `https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}`,
            { timeout: 7000 }
        );
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching APOD:', error.message);
        res.status(500).json({error: 'Failed to fetch data from NASA'});
    }
});

app.get('/api/mars',async (req,res) => {
    try {
        // const apiKey = process.env.NASA_API_KEY;
        const response = await axios.get(
            'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos',
            {
                params: {
                    earth_date: '2020-07-21',
                    api_key: NASA_API_KEY,
                },
                timeout: 7000,
            }
        );
        res.json(response.data);
    } catch (err) {
        console.error('Mars API error:', err.message);
        res.status(500).json({error: 'Failed to fetch Mars rover photos'});
    }
});

app.get('/api/neo', async (req, res) => {
  try {
    const today = new Date();
    const start = today.toISOString().split('T')[0];

    const endDate = new Date(today);
    endDate.setDate(endDate.getDate() + 6); // fetch 7 days of data
    const end = endDate.toISOString().split('T')[0];

    const url = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${start}&end_date=${end}&api_key=${NASA_API_KEY}`;

    const response = await axios.get(url);
    res.json(response.data);
  } catch (err) {
    console.error('Error fetching NEO data:', err.message);
    res.status(500).json({ error: 'Failed to fetch NEO data' });
  }
});


  app.get('/api/epic', async (req, res) => {
    try{
        const apiKey = process.env.NASA_API_KEY;
        const response = await axios.get(
            `https://api.nasa.gov/EPIC/api/natural/date/2024-10-31?api_key=${apiKey}`

        );
        res.json(response.data);
    }   catch (error){
        console.error('Failed to fetch EPIC data,', err.message);
        res.status(500).json({ error: 'Failed to fetch EPIC data'});
    }
  });

  
  

app.listen(PORT, () => {
    console.log('Server running on port ${PORT}');

module.exports = app;
});