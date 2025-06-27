import React, { useEffect, useState } from 'react';

export default function EPICViewer() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch('http://localhost:5000/api/epic')
      .then((res) => res.json())
      .then((data) => {
        console.log('EPIC data:',data);
        setImages(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Failed to load EPIC data:', err);
        setError(true);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading EPIC images...</p>;
  if (error) return <p>Failed to load EPIC data</p>;

  return (
<div className="neo-grid">
      {images.map((img, i) => {
        const [year, month, day] = img.date.split(' ')[0].split('-');
        const imageUrl = `https://epic.gsfc.nasa.gov/archive/natural/${year}/${month}/${day}/jpg/${img.image}.jpg`;

        return (
          <div key={i} className="neo-card">
            <img src={imageUrl} alt={img.caption} style={{ width: '100%' }} />
            <p><strong>{img.date}</strong></p>
            <p>{img.caption}</p>
          </div>
        );
      })}
    </div>
  );
}


 