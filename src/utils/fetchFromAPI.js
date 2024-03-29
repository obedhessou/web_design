import axios from 'axios';

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
  url: BASE_URL,
  params: {
    part: 'snippet', 
    videoId: 'M7FIvfx5J10',
    maxResults: '50'
  },
  headers: {
    'X-RapidAPI-Key': 'b765461da0msh1d9e834494af6dap15a7fdjsna81ba171afe4',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const fetchFromAPI = async (url) => 
{
    const {data} = await axios.get(`${BASE_URL}/${url}`, options);

    return data;

};
