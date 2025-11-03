import React, { useState } from 'react';

const IpLookupForm = ({ onIpLookup }) => {
  const [ip, setIp] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResult(null);
    setError(null);

    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/iplookup?ip=${ip}`);
      const data = await response.json();

      if (data.error) {
        setError(data.error);
      } else if (data.data && !data.data.isPublic) {
        setError(`'${data.data.ipAddress}' is a private IP address and cannot be tracked on the public internet.`);
        setResult(null);
      } else {
        setResult(data);
        if (onIpLookup) {
          onIpLookup(data.data);
        }
      }
    } catch (err) {
      setError('An error occurred while fetching the IP data.');
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">IP/Domain Risk Lookup</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={ip}
          onChange={(e) => setIp(e.target.value)}
          placeholder="Enter IP address"
          className="border p-2 mr-2"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Lookup
        </button>
      </form>
      {error && (
        <div className="mt-4 p-4 border rounded bg-red-100 text-red-700">
          <p>{error}</p>
        </div>
      )}
      {result && (
        <div className="mt-4 p-4 border rounded">
          <pre>{JSON.stringify(result, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default IpLookupForm;
