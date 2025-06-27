import React, { useEffect, useState } from 'react';
import AsteroidBarChart from './AsteroidBarChart';

export default function NeoWsViewer() {
  const [neos, setNeos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [sortBy, setSortBy] = useState('');
  const [showHazardousOnly, setShowHazardousOnly] = useState(false);

  useEffect(() => {
    fetch('http://localhost:5000/api/neo')
      .then(res => res.json())
      .then(data => {
        const neoObjects = data?.near_earth_objects || {};
        // const today = new Date().toISOString().split('T')[0];
        // const todayData = neoObjects[today];
        // const fallbackDate = Object.keys(neoObjects)[0];
        // const objects = todayData || neoObjects[fallbackDate] || [];
        const neoArray = Object.values(neoObjects).flat();
        // console.log('Using NEO data for:', todayData ? today : fallbackDate);
        setNeos(neoArray);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching NEO data:', err);
        setError(true);
        setLoading(false);
      });
  }, []);

  const filteredNeos = neos
    .filter(neo => (showHazardousOnly ? neo.is_potentially_hazardous_asteroid : true))
    .sort((a, b) => {
      if (sortBy === 'diameter') {
        return (
          b.estimated_diameter.kilometers.estimated_diameter_max -
          a.estimated_diameter.kilometers.estimated_diameter_max
        );
      }
      if (sortBy === 'velocity') {
        return (
          parseFloat(b.close_approach_data[0]?.relative_velocity.kilometers_per_hour || 0) -
          parseFloat(a.close_approach_data[0]?.relative_velocity.kilometers_per_hour || 0)
        );
      }
      if (sortBy === 'distance') {
        return (
          parseFloat(a.close_approach_data[0]?.miss_distance.kilometers || 0) -
          parseFloat(b.close_approach_data[0]?.miss_distance.kilometers || 0)
        );
      }
      return 0;
    });

  const chartData = filteredNeos.map((neo) => {
    const name = neo.name || 'Unnamed';
    const approachData = neo.close_approach_data?.[0];
    const year = approachData?.close_approach_date?.slice(0, 4) || 'Unknown';
    const distance = parseFloat(approachData?.miss_distance?.kilometers || 0);

    return {
      label: `${name} (${year})`,
      miss_distance: distance
    };
  });

  if (loading) return <p>Loading NEO data...</p>;
  if (error) return <p>Failed to load NEO data.</p>;

  return (
    <div className="neo-wrapper">
      <h2>Near Earth Objects Visualization</h2>

      {/* Filters */}
      <div style={{ margin: '20px 0' }}>
        <label>
          <input
            type="checkbox"
            checked={showHazardousOnly}
            onChange={(e) => setShowHazardousOnly(e.target.checked)}
          />{' '}
          Show only hazardous asteroids
        </label>

        <label style={{ marginLeft: '20px' }}>
          Sort by:{' '}
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="">None</option>
            <option value="diameter">Largest Diameter</option>
            <option value="velocity">Highest Velocity</option>
            <option value="distance">Closest Miss Distance</option>
          </select>
        </label>
      </div>

      {/* Chart */}
      {chartData.length > 0 ? (
        <>
          <h3>Asteroid Miss Distances</h3>
          <AsteroidBarChart data={chartData} />
        </>
      ) : (
        <p style={{ color: 'red' }}>No asteroid data available.</p>
      )}

      {/* Cards */}
      <div className="neogrid">
        {filteredNeos.map((neo) => (
          <div key={neo.id} className="neocard">
            <h3>{neo.name}</h3>
            <p>Hazardous: {neo.is_potentially_hazardous_asteroid ? 'Yes' : 'No'}</p>
            <p>Diameter: {neo.estimated_diameter.kilometers.estimated_diameter_max.toFixed(2)} km</p>
            <p>Velocity: {parseFloat(neo.close_approach_data[0]?.relative_velocity?.kilometers_per_hour || 0).toFixed(2)} km/h</p>
            <p>Miss Distance: {parseFloat(neo.close_approach_data[0]?.miss_distance?.kilometers || 0).toFixed(2)} km</p>
          </div>
        ))}
      </div>
    </div>
  );
}
