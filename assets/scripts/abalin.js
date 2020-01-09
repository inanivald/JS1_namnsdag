
const BASE_URL = 'https://api.abalin.net/namedays?country=se';



const getCurrentWeather = async (month, day) => {
    
    const response = await fetch(`${BASE_URL}&${month}=7&${day}`);
    
    const data = await response.json();

    return data;

};

