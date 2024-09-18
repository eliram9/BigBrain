import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { initGA, logPageView } from '../../analytics'; 

const Analytics = () => {
    const location = useLocation();

    useEffect(() => {
        initGA();
    }, []);

    useEffect(() => {
        logPageView();
    }, [location]);

    return null;  
};

export default Analytics;