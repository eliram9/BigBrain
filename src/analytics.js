// Google Analytics
import ReactGA from 'react-ga';

export const initGA = () => {
    ReactGA.initialize('G-M3VZB0DBYL');
}

export const logPageView = () => {
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname);
}