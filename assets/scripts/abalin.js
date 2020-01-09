
const URL = 'https://api.abalin.net/namedays?country=se';



const getNameday = async (month, day) => {
    
    const response = await fetch(`${URL}&month=${month}&day=${day}`);
    
    const result = await response.json();

    return result;

};
