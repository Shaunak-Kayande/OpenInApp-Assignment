import axios from 'axios';

const API_URL = 'https://my-json-server.typicode.com/Shaunak-Kayande/OpenInApp-Assignment/top-products';

export const fetchTopProductsData = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error('Error fetching top products data:', error);
        return {};
    }
};
