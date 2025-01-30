import axios from 'axios';

const fetchInstagramData = async (accessToken) => {
    try {
        const response = await axios.get(`https://graph.instagram.com/me/media?fields=id,caption,media_url&access_token=${accessToken}`);
        return response.data.data;
    } catch (error) {
        console.error('Error fetching data from Instagram API', error);
        return [];
    }
};

export default fetchInstagramData;
