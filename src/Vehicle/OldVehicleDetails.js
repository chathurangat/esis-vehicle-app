import React, {useEffect, useState} from 'react';
import axios from 'axios';

const VehicleDetails = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Make the API request
        axios.get('https://jsonplaceholder.typicode.com/posts')
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
        <div>
            <h2>Data from API</h2>
            <ul>
                {data.map((item) => (
                    <li key={item.id}>{item.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default VehicleDetails;
