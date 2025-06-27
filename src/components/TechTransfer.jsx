import React, { useEffect, useState } from 'react';
// import './styling.css';
const API_KEY = 'eIjXgZdcPpSBUHgo67E5CtmP3rSbc7AKv0dxIJEt';
const API_URL = `https://api.nasa.gov/techtransfer/patent/?engine&api_key=${API_KEY}`;


export default function TechTransfer(){
    const [techItems, setTechItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);


    useEffect(() => {
        fetch(API_URL)
        .then(res => res.json())
        .then(data => {
            setTechItems(data.results || []);
            setLoading(false);
        })
        .catch(err => {
            console.error('Error fetching Tech Transfer data:', err);
            setError(true);
            setLoading(false);
        });
    },  []);

    if(loading) return <p>Loading NASA Tech Transfer data..</p>;
    if(error) return <p>Failed to load Tech Transfer data</p>;

    return (
    <div className="neowrapper">
      <h2>NASA Tech Transfer</h2>
      <div className="techgrid">
        {techItems.slice(0, 12).map((item, idx) => (
          <div key={idx} className="techcard">
            <h4>{item[1]}</h4>
            <p>{item[3]}</p>
            {item[10] && <img src={item[10]} alt={item[1]} className="tech-image" />}
          </div>
        ))}
      </div>
    </div>
  );
}