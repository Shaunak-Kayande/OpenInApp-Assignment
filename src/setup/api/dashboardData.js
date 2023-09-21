import axios from 'axios';

const API_URL = 'https://my-json-server.typicode.com/Shaunak-Kayande/OpenInApp-Assignment/dashboard';

export const fetchDashboardData = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error('Error fetching dashboard data:', error);
        return {};
    }
};
