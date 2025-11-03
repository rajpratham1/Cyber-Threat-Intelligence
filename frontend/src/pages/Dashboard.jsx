import React, { useState } from 'react';
import MapView from '../components/MapView';
import ThreatCharts from '../components/ThreatCharts';
import NewsFeed from '../components/NewsFeed';
import IpLookupForm from '../components/IpLookupForm';
import Navbar from '../components/Navbar';

const Dashboard = () => {
  const [mapCenter, setMapCenter] = useState([20, 0]);
  const [mapZoom, setMapZoom] = useState(2);

  const handleIpLookup = (ipData) => {
    if (ipData && ipData.latitude && ipData.longitude) {
      setMapCenter([ipData.latitude, ipData.longitude]);
      setMapZoom(13); // Zoom in on the location
    }
  };

  return (
    <div>
      <Navbar />
      <IpLookupForm onIpLookup={handleIpLookup} />
      <MapView center={mapCenter} zoom={mapZoom} />
      <ThreatCharts />
      <NewsFeed />
    </div>
  );
};

export default Dashboard;
