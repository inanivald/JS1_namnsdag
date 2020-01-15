
const URL_DATE = 'https://api.abalin.net/namedays?country=';

const getNameday = async (country, month, day) => {
    
    const response = await fetch(`${URL_DATE}${country}&month=${month}&day=${day}`);
    
    const resultName = await response.json();

    return resultName;

};


const URL_NAME = 'https://api.abalin.net/getdate?name=';

const getName = async (nameEl, countryName) => {
    
    const response = await fetch(`${URL_NAME}${nameEl}&country=${countryName}`);
    
    const resultDay = await response.json();

    return resultDay;
    
};

const URL_TIMEZONE = 'https://api.abalin.net/today?timezone='

const getTimezone = async (timezone, countryTimezone) => {
    
    const response = await fetch(`${URL_TIMEZONE}${timezone}&country=${countryTimezone}`);
    
    const resultTimezone = await response.json();

    return resultTimezone;
    
};