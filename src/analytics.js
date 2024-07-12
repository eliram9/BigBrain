import ReactGA from 'react-ga';

export const initGA = () => {
    ReactGA.initialize('G-M3VZB0DBYL');
    // console.log('Google Analytics Initialized'); // Debug log
}

export const logPageView = () => {
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname);
    // console.log(`Page view logged for ${window.location.pathname}`); // Debug log
}