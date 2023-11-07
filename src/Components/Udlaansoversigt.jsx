import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Udlaansoversigt = () => {
const [data, setData] = useState([]); // Set initial state for data
const [error, setError] = useState(null); // Set initial state for error

useEffect(() => {
    const fetchData = async () => {
        try {
            // Set up your header to bypass the ngrok warning
            const config = {
                headers: {
                    'ngrok-skip-browser-warning': 'skip-browser-warning', // or any value
                },
            };

            // Fetch data from the API
            const response = await axios.get('<https://gorilla-informed-asp.ngrok-free.app/Udlån/GetUdlånsOversigt>', config);
            console.clear();
            console.log(response);

            if (Array.isArray(response.data)) {
                setData(response.data); // Set data if response is an array
            } else {
                setError('Data is not in the expected array format'); // Set error if response is not an array
            }
        } catch (error) {
            setError('Error fetching data: ' + error); // Set error if there's an error fetching data
        }
    };

    fetchData(); // Call the fetchData function
}, []);

// Check if there's an error, if yes, display the error message
if (error) {
    return <div>Error: {error}</div>;
}

return (
  <div className="admin-panel">
      <h1 className="mb-4">UdlånsOversigt</h1>
      <div className="udlaan-data">
          {data.length > 0 ? (
              <ul>
                  {data.map((item, index) => (
                      <li key={index} className="udlaan-entry">
                          <p>Elev Nummer: {item.elevNummer}</p>
                          <p>Registrerings Nummer: {item.registreringsNummer}</p>
                          <p>Udlånsdato: {item.udlånsdato}</p>
                          <p>Udløbsdato: {item.udløbsdato}</p>
                      </li>
                  ))}
              </ul>
          ) : <p>No data available</p>}
      </div>
  </div>

);
};

export default Udlaansoversigt;