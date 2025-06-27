import React, { useState } from 'react';

export default function NASAMedia() {
        const [query, setQuery] = useState('');
        const [results, setResults] = useState([]);
        const [error, setError] = useState(false);
        const [selectedMedia,setSelectedMedia] = useState(null);
        const [mediaType, setMediaType] = useState('all');
        const [videourl, setVideourl] = useState('');
        const [startYear, setStartYear] = useState('');
        const [endYear, setEndYear] = useState('');
        const search = async () => {
            try {
                setError(false);


                let url = `https://images-api.nasa.gov/search?q=${query}&media_type=${mediaType.toLowerCase()}`;

                if (startYear) url += `&year_start=${startYear}`;
                if (endYear) url += `&year_end=${endYear}`;

                let mediaParam = '';
                if (mediaType === 'image') mediaParam = '&media_type=image';
                else if (mediaType === 'video') mediaParam = '&media_type=video';
                else if (mediaType === 'audio') mediaParam = '&media_type=audio';

                // let url = await fetch(`https://images-api.nasa.gov/search?q=${query}${mediaParam}`);
                // if (mediaParam){
                //     url += `&media_type=${mediaParam}`;
                // }
                // const url = `https://images-api.nasa.gov/search?q=${query}${mediaType !== 'all' ? `&media_type=${mediaType}` : ''}`;
                const response = await fetch(`https://images-api.nasa.gov/search?q=${query}${mediaParam}`);
                const data = await response.json();
                setResults(data.collection.items);
            }   catch (err) {
                console.error('Search failed:', err);
                setError(true);
            }
        };
        const handleMediaClick = async(item) => {
            setSelectedMedia(item);
            setVideourl('');

            const mediaType = item.data?.[0]?.media_type;

            if(mediaType === 'video'){
                try{
                    const res = item.href;
                    const assets = await res.json();
                    const mp4 = assets.find((url) => url.endsWith('mp4'));
                    // setVideourl(mp4);
                    if(mp4) setVideourl(mp4);
                }   catch (err) {
                    console.error('Failed to load video:',err);
                    // setVideourl('');
                }
            } 
        };

        const closeModel = () => {
            setSelectedMedia(null);
            setVideourl('');
        };


        return (
            <div className="SearchImageorVideo">
                <h2>NASA Image and Video Library</h2>
                <div style={{ marginBottom: '10px'}}>
                {/* <div className="searchcontrols"> */}
                <select value={mediaType} onChange={(e) => setMediaType(e.target.value)}>
                    <option value="all">All</option>
                    <option value="image">Images</option>
                    <option value="videos">Videos</option>
                    <option value="Audio">Audio</option>
                </select>
                <input 
                    type="text"
                    placeholder="Enter..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />

                <input
                    type="number"
                    placeholder="Start Year"
                    value={startYear}
                    onChange={(e) => setStartYear(e.target.value)}

                />

                <input 
                    type="number"
                    placeholder="End Year"
                    value={endYear}
                    onChange={(e) => setEndYear(e.target.value)}
                />
                <button onClick={search}>Search</button>
            </div>

            {error && <p>Failed to fetch results. Please try again</p>}

            <div className="mediagrid">
                {results.map((item, index) => (
                    <div 
                        key={index} 
                        className="mediacard"
                        onClick={() => handleMediaClick(item)}
                    >
                        <img 
                            src={item.links?.[0]?.href} 
                            alt={item.data?.[0]?.title} 
                        />
                        <p>{item.data?.[0]?.title}</p>
                    </div>
                ))}
            </div>
                {selectedMedia && (
                    <div className="model" onClick = {closeModel}>
                        <div className="modelcontent" onClick={(e) => e.stopPropagation()}>
                            <h3>{selectedMedia.data?.[0]?.title}</h3>
                            {selectedMedia.data?.[0]?.media_type ==='video' && videourl ? (
                                <video controls autoPlay style={{width: '100%'}}>
                                    <source src={videourl} type="video/mp4" />
                                    Sorry, The browser doesnt support this video tag
                                </video>

                            ) : ( 
                            <img 
                                src= {selectedMedia.links?.[0]?.href} alt="expand"
                            />
                            )}
                            {/* <h3> {selectedMedia.links?.[0]?.href}</h3> */}
                            <p>{selectedMedia.data?.[0]?.description}</p>
                            <button onClick={closeModel}>Close</button>
                        </div>
                    </div>
                )}
            </div>
        );
    }
                