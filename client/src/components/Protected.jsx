import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Protected({ Component }) {
    const navigate = useNavigate();
    const [isAuthenticated, setIsAuthenticated] = useState(null); // Use null for initial loading state

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setIsAuthenticated(true);
        } else {
            setIsAuthenticated(false);
            navigate('/signin'); // Redirect to sign-in if no token is found
        }
    }, [navigate]);

    // Display nothing while checking authentication
    if (isAuthenticated === null) {
        return null; // or a loading spinner
    }

   
    return isAuthenticated ? <Component /> : null;
}

export default Protected;
