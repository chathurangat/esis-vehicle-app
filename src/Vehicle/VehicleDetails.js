import React, {useEffect, useState} from 'react';
import axios from 'axios';

const VehicleDetails = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Make the API request
        axios.get('http://217.76.63.83:8082/vehicles?vehicle-number=123')
            // axios.get('http://esis-vehicle-service:8082/vehicles/1')
            .then((response) => {
                setData(response.data); // Store the data
                setLoading(false);      // Set loading to false
            })
            .catch((error) => {
                setError(error.message); // Handle any errors
                setLoading(false);
            });
    }, []);

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
                            <input type="text" id="searchInput" placeholder="Enter vehicle number..."/>
                            <button id="searchBtn" onClick="searchVehicle()">Search</button>
                        </div>
                    </div>
                </div>
            </div>

            <div id="message"></div>


            <div id="result" className="card-container">
                <div className="card-content">
                    <div className="card">
                        <p className="vehicleNumber">{data?.vehicle_number}</p>
                        <img src="https://eu2.contabostorage.com/014d85f72af04deab35beb05d491b530:asda/img2.png"
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
                {/*<div className="card-content">*/}
                {/*    <div className="card">*/}
                {/*        <p className="vehicleNumber">XYZ5678</p>*/}
                {/*        <img src="./images/img2.png" alt="Honda Civic"/>*/}
                {/*        <div className="card-details">*/}
                {/*            <p>Make: Toyota</p>*/}
                {/*            <p>Type: Van</p>*/}
                {/*            <p>Condition: New</p>*/}
                {/*            <p>Province: Southern Province</p>*/}
                {/*            <p>City: Galle</p>*/}
                {/*            <p>Fuel Type: </p>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
                {/*<div className="card-content">*/}
                {/*    <div className="card">*/}
                {/*        <p className="vehicleNumber">ABC234</p>*/}
                {/*        <img src="./images/img3.png" alt="Bajaj"/>*/}
                {/*        <div className="card-details">*/}
                {/*            <p>Make: Bajaj</p>*/}
                {/*            <p>Type: Three Wheel</p>*/}
                {/*            <p>Condition: Brand New</p>*/}
                {/*            <p>Province: Central Province</p>*/}
                {/*            <p>City: Kandy</p>*/}
                {/*            <p>Fuel Type: </p>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
                {/*<div className="card-content">*/}
                {/*    <div className="card">*/}
                {/*        <p className="vehicleNumber">ABC456</p>*/}
                {/*        <img src="./images/img4.png" alt="Bajaj"/>*/}
                {/*        <div className="card-details">*/}
                {/*            <p>Make: Isuzu</p>*/}
                {/*            <p>Type: Truck</p>*/}
                {/*            <p>Condition: Used</p>*/}
                {/*            <p>Province: Western Province</p>*/}
                {/*            <p>City: Gampaha</p>*/}
                {/*            <p>Fuel Type: Diesel</p>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>
        </div>
    );
};

export default VehicleDetails;
