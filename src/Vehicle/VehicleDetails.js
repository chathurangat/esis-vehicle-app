import React, {useEffect, useState} from 'react';
import axios from 'axios';

const VehicleDetails = () => {
    const [data, setData] = useState([]);
    const [vehicleNumber, setVehicleNumber] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // useEffect(() => {
    //     // Make the API request
    //     // axios.get('http://217.76.63.83:8082/vehicles?vehicle-number=123')
    //     axios.get('http://localhost:8082/vehicles?vehicle-number=123')
    //         // axios.get('http://esis-vehicle-service:8082/vehicles/1')
    //         .then((response) => {
    //             setData(response.data); // Store the data
    //             setLoading(false);      // Set loading to false
    //         })
    //         .catch((error) => {
    //             setError(error.message); // Handle any errors
    //             setLoading(false);
    //         });
    // }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div className="container">
            <div className="header-container">
                <h1>Vehicle Details</h1>
                <div className="search-bar">
                    <div className="search-bar-content">
                        <p>Find vehicle by vehicle number</p>
                        <div className="input-group">
                            <input type="text" id="searchInput"
                                   onChange={(event) => {
                                       setVehicleNumber(event.target.value?.trim());
                                   }}
                                   placeholder="Enter vehicle number..."/>
                            <button id="searchBtn" onClick={
                                () => {
                                    if (vehicleNumber.trim() === "") {
                                        return;
                                    }
                                    axios.get('http://217.76.63.83:8082/vehicles?vehicle-number=' + vehicleNumber)
                                        // axios.get('http://esis-vehicle-service:8082/vehicles/1')
                                        .then((response) => {
                                            setData(response.data); // Store the data
                                            setLoading(false);      // Set loading to false
                                        })
                                        .catch((error) => {
                                            setError(error.message); // Handle any errors
                                            setLoading(false);
                                        });
                                }
                            }>Search
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div id="message"></div>


            <div id="result"
                 style={data?.image_url ? {} : {display: 'none'}}
                 className="card-container">
                <div className="card-content">
                    <div className="card">
                        <p className="vehicleNumber">{data?.vehicle_number}</p>
                        <img src={data?.image_url}
                             alt="Toyota"/>
                        <div className="card-details">
                            <p>Owner: {data?.owner}</p>
                            <p>Make: {data?.make}</p>
                            <p>Type: {data?.vehicle_type}</p>
                            <p>Condition: {data?.condition}</p>
                            <p>Province: {data?.province}</p>
                            <p>City: {data?.city}</p>
                            <p>Fuel Type: {data?.fuel_type} </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VehicleDetails;
