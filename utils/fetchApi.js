import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
    const {data} = await axios.get( (url), {
        headers: {
           'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
           'X-RapidAPI-Key': 'b3224caff0msh627a4bd52b0442ap1e157ejsn71dcf17ff4ae'
         }
    } );

    return data;
}

