import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Certifications = () => {
    const [certifications, setCertifications] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/api/certifications')
            .then(response => {
                setCertifications(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the certifications!', error);
            });
    }, []);

    return (
        <div>
            <h1>Certifications</h1>
            <ul>
                {certifications.map(certification => (
                    <li key={certification.id}>
                        <h3>{certification.name}</h3>
                        <p>{certification.description}</p>
                        <p>Issued by: {certification.issuer}</p>
                        <p>Expiry Date: {certification.expiryDate}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Certifications;
