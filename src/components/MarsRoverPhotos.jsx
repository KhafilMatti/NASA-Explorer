import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../Styles/styling.css';

export default function MarsRoverPhotos() {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);


    useEffect(() => {
        const fetchMarsPhotos = async () => {
            try {
                const response = await axios.get("http://localhost:5000/api/mars");
                setImages(response.data.photos);
            } catch (err) {
                console.error('Failed to fetch Mars photos', err);
                setError(true); 
            } finally {
                setLoading(false);
            }
        };

        fetchMarsPhotos();
    },[]);


    if (loading) return <p className="mars-loading">Loading the Mars Rover Photos</p>;
    if (error) return <p className="mars-error">Failed to load the Mars Rover data</p>;

    return (
        <div className="marsphotos-grid">
          {images.length === 0 ? (
            <p className="mars-empty">No photos found for this date.</p>
          ) : (
            images.map((img) => (
              <div key={img.id} className="marsphotos-card">
                <img src={img.img_src} alt={`Mars Rover - ${img.id}`} />
                <div className="marsphotos-caption">
                  {img.rover.name} - {img.camera.full_name}
                </div>
              </div>
            ))
          )}
        </div>
      );
    }
