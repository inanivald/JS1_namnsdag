const day = document.querySelector("#day");
const month = document.querySelector("#month");
const country = document.querySelector("#custom-select");
const nameEl = document.querySelector('#namename');
const countryName = document.querySelector("#custom-select-name");
const nameday = document.querySelector("#nameday");
const name = document.querySelector("#name");
const timezone = document.querySelector("#search-timezone");
const timezoneCountry = document.querySelector("#search-country-timezone");
const timezoneForm = document.querySelector("#timezone");

const renderAlertDay = (severity, msg) => {
    document.querySelector('#searchResultName').innerHTML = `
    <div class="alert alert-${severity}" role="alert">${msg}</div>`;
};

const renderNameday = resultName => {
    const day2 = day.value;
    const selectedMonth = month.options[month.selectedIndex].text
    const country2 = country.value;
    const selectedCountry = country.options[country.selectedIndex].text

    document.querySelector('#searchResultName').innerHTML = `
        <div class="card mt-4">
        <h2>${resultName.data[0].namedays[country2]}</h2>
                <p>I ${selectedCountry} har ${resultName.data[0].namedays[country2]} 
                namnsdag den ${day2} ${selectedMonth}.</p>`   
 //reset input fields             
nameday.reset();
};

document.querySelector('#nameday').addEventListener('submit', e => {
    e.preventDefault();

   const day2 = day.value;
   const month2 = month.value;
   const country2 = country.value;

    getNameday(country2, month2, day2)
    .then(resultName => {
        renderNameday(resultName)
    })

    .catch(resultName => {
   
    if (day2 === 'Välj dag')
        { renderAlertDay('danger', 'Du måste välja en dag.')
    } else if (month2 === 'Välj månad')
        { renderAlertDay('danger', 'Du måste välja en månad.') 
    } else if (country2 === 'Välj land')
        { renderAlertDay('danger', 'Du måste välja ett land.'); 
    } else {
        renderAlertDay('danger', err);
    }
});
});

const renderAlertName = (severity, msg) => {
    document.querySelector('#searchResultDay').innerHTML = `
    <div class="alert alert-${severity}" role="alert">${msg}</div>`;
};

const renderName = (resultDay => {
    console.log(resultDay);
const selectedCountry = countryName.options[countryName.selectedIndex].text;
    //loop the array to get info
    resultDay.results.forEach(result => {
        document.querySelector('#searchResultDay').innerHTML = `
            <div class="card mt-4">
            <h2>${result.day}/${result.month}</h2>
            <p>I ${selectedCountry} har ${result.name} namnsdag den ${result.day}/${result.month}.</p>
            </div>
            `;
    });
    //reset input fields
    name.reset();
});

document.querySelector('#name').addEventListener('submit', e => {
    e.preventDefault();
    const nameEl2 = nameEl.value;
    const countryName2 = countryName.value

getName(nameEl2, countryName2)
.then(resultDay => {
    renderName(resultDay);
})
.catch(resultName => {
   
    if (400)
        { renderAlertName('danger', 'Du måste skriva in ett namn och välja ett land.')
   
    } else {
        renderAlertDay('danger', err);
    }
});
});



const renderAlertTimezone = (severity, msg) => {
    document.querySelector('#searchResultTimezone').innerHTML = `
    <div class="alert alert-${severity}" role="alert">${msg}</div>`;
};

const renderTimezone = (resultTimezone => {
const selectedTimezoneCountry = timezoneCountry.options[timezoneCountry.selectedIndex].text;
country2 = timezoneCountry.value;
        document.querySelector('#searchResultTimezone').innerHTML = `
            <div class="card mt-4">
            <h2>${resultTimezone.data[0].namedays[country2]}</h2>
            <p>I ${selectedTimezoneCountry} har ${resultTimezone.data[0].namedays[country2]} namnsdag idag den ${resultTimezone.data[0].dates.day}/${resultTimezone.data[0].dates.month}.</p>
            </div>
            `;
  
    //reset input fields
    timezoneForm.reset();
});

document.querySelector('#timezone').addEventListener('submit', e => {
    
    e.preventDefault();
    const timezone2 = timezone.value;
    const timezoneCountry2 = timezoneCountry.value

getTimezone(timezone2, timezoneCountry2)
.then(resultTimezone => {
    renderTimezone(resultTimezone);
})
.catch(resultTimezone => {
   
    if (timezoneCountry2 === 'Välj land')
    { renderAlertTimezone('danger', 'Du måste välja ett land.');
    } else {
        renderAlertDay('danger', err);
    }
});
});


