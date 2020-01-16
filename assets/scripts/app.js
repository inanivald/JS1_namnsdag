const day = document.querySelector("#day"); //drop down menu for "Välj dag"
const month = document.querySelector("#month"); //drop down menu for "Välj månad"
const country = document.querySelector("#custom-select"); //drop down menu for first "Välj land"
const nameEl = document.querySelector('#namename'); //search field for "Namn"
const countryName = document.querySelector("#custom-select-name"); //drop down menu for second "Välj land".
const nameday = document.querySelector("#nameday"); //first form
const name = document.querySelector("#name"); //second form
const timezone = document.querySelector("#search-timezone"); //drop down menu for "Välj tidszon".
const timezoneCountry = document.querySelector("#search-country-timezone"); //drop down menu for third "Välj land".
const timezoneForm = document.querySelector("#timezone"); //third form

// variable to render error codes for first form
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

//Eventlistener for first form day
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
        renderAlertDay('danger', 'Du har inte angivit ett giltigt datum.');
    }
});
});

const renderAlertName = (severity, msg) => {
    document.querySelector('#searchResultDay').innerHTML = `
    <div class="alert alert-${severity}" role="alert">${msg}</div>`;
};

const renderName = (resultDay => {
 
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
//Eventlistener for second form Name
document.querySelector('#name').addEventListener('submit', e => {
  
    e.preventDefault();
    const nameEl2 = nameEl.value;
    const countryName2 = countryName.value
    const selectedCountry = countryName.options[countryName.selectedIndex].text;

getName(nameEl2, countryName2)
.then(resultDay => {
if (resultDay.results.length > 0) {
    renderName(resultDay);
} else { 
    renderAlertName('danger', `${nameEl2} har tyvärr ingen namnsdag i ${selectedCountry}.`)
}
})

.catch(resultDay => {

    if (400) { 
        renderAlertName('danger', 'Du måste skriva in ett namn och välja ett land.')
    } else { renderAlertDay('danger', 'Det gick tyvärr inte att utföra sökningen.');
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
//Eventlistener for third form timezone
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
        renderAlertDay('danger', 'Det gick tyvärr inte att utföra sökningen.');
    }
});
});


