import axios from 'axios';

const url = 'https://pizzashop-mern.herokuapp.com/getAllPizzas';
export const fetchPizzas = async () =>  {
    const data = await axios.get(url);
    return data;
};