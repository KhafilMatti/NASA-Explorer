import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ApodViewer() {
    const [apod,setApod] = useState(null);
    const [loading, setloading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        axios
            .get('http://localhost:5000/api/apod')
            .then((res) => {
              setApod(res.data);
              setloading(false);   
            })
            .catch((err) => {
                console.error('Failed to fetch APOD:', err);
                setError(true);
                setloading(false);
            });
        },[]);


    if (loading) return <p className="text-gray-500">Loading..</p>;
    if (error) return <p className="text-red-500">Failed to load APOD data</p>;

    return (
        <div className="text-center">
            <h2 className="text-2xl font-semibold mb-4">{apod.title}</h2>
            <p className="text-sm text-gray-600 mb-4">{apod.date}</p>
            <img
                src={apod.url}
                alt={apod.title}
                className="mx-auto mb-4 max-w-full rounded-lg shadow"
            />
            <p className="text-gray-700 max-w-xl mx-auto">{apod.explanation}</p>
        </div>
    );
}

export default ApodViewer;