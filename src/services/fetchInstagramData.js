import axios from 'axios';

const fetchInstagramData = async () => {
    try {
        const response = await axios.get('https://api.instagram.com/v1/users/self/media/recent/?access_token=YOUR_ACCESS_TOKEN');
        return response.data.data;
    } catch (error) {
        console.error('Error fetching data from Instagram API', error);
        return [];
    }
};

export default fetchInstagramData;
