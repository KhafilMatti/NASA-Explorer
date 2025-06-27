import React, { useState } from 'react';
import ApodViewer from './ApodViewer';
import MarsRoverPhotos from './MarsRoverPhotos';
import NeoWsViewer from './NeoWsViewer';
import EPICViewer from './EPICViewer';
import NASAMedia from './NASAMedia';
import TechTransfer from './TechTransfer';
import '../Styles/styling.css';

export default function NasaExplorerLayout() {
  const [activeTab, setActiveTab] = useState('apod');

  const modules = [
    { key: 'apod', label: 'Astronomy Picture of The Day' },
    { key: 'mars', label: 'Mars Rovers Photos' },
    { key: 'neo', label: 'Near Earth Object Web Services' },
    { key: 'epic', label: 'Earth Polychromatic Imaging Camera' },
    { key: 'media', label: 'NASA Image and Video Library' },
    { key: 'TechT', label: 'Tech Transfer' }
  ];

  const titles = {
    apod: "Astronomy Picture of The Day",
    mars: "Mars Rovers Photos",
    neo: "Near Earth Object Web Services",
    epic: "Earth Polychromatic Imaging Camera",
    media: "NASA Image and Video Library",
    TechT: "NASA Tech Transfer"
  };

  const renderModule = () => {
    switch (activeTab) {
      case 'apod': return <ApodViewer />;
      case 'mars': return <MarsRoverPhotos />;
      case 'neo': return <NeoWsViewer />;
      case 'epic': return <EPICViewer />;
      case 'media': return <NASAMedia />;
      case 'TechT': return <TechTransfer />;
      default: return <div className="placeholder">Coming soon...</div>;
    }
  };

  return (
    <div className="nasaexplorer">
      <aside className="sidebar">
        <h2 className="sidebar-title">NASA Explorer</h2>
        <nav className="sidebar-nav">
          {modules.map((module) => (
            <button
              key={module.key}
              onClick={() => setActiveTab(module.key)}
              className={`sidebar-button ${activeTab === module.key ? 'active-tab' : ''}`}
            >
              {module.label}
            </button>
          ))}
        </nav>
      </aside>

      <div className="mainarea">
        <header className="topbar">
          <h1 className="topbartitle">{titles[activeTab]}</h1>
          <div className="topbarcontrols">
            <input type="date" className="dateinput" />
            <input type="text" placeholder="Search..." className="searchinput" />
            <button className="applybutton">Apply</button>
          </div>
        </header>

        <main className="viewerarea">
          {renderModule()}
        </main>
      </div>
    </div>
  );
}
