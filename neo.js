const express = require('express');
const fetch = require('node-fetch');
const router = express.Router();

const NASA_API_KEY = process.env.NASA_API_KEY || 'eIjXgZdcPpSBUHgo67E5CtmP3rSbc7AKv0dxIJEt'; // Replace 'DEMO_KEY' with your real key in production

router.get('/api/neo', async (req, res) => {
  try {
    const today = new Date();
    const start = today.toISOString().split('T')[0];

    const endDate = new Date(today);
    endDate.setDate(endDate.getDate() + 6); // 7 days total
    const end = endDate.toISOString().split('T')[0];

    const url = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${start}&end_date=${end}&api_key=${NASA_API_KEY}`;
    const response = await fetch(url);
    const data = await response.json();

    res.json(data);
  } catch (err) {
    console.error('Error fetching NEO data:', err);
    res.status(500).json({ error: 'Failed to fetch NEO data' });
  }
});

module.exports = router;
