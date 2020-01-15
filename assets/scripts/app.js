const day = document.querySelector("#day");
const month = document.querySelector("#month");
const country = document.querySelector("#custom-select");
const nameEl = document.querySelector('#namename');
const countryName = document.querySelector("#custom-select-name");
const countryElName = document.querySelector("#custom-select-name");
const nameday = document.querySelector("#nameday");
const name = document.querySelector("#name");

const renderAlertDay = (severity, msg) => {
    document.querySelector('#searchResultName').innerHTML = `
    <div class="alert alert-${severity}" role="alert">${msg}</div>`;
};


const renderNameday = resultName => {
    const day2 = day.value;
    const selectedMonth = month.options[month.selectedIndex].text
    const country2 = country.value;
    const selectedCountry = country.options[country.selectedIndex].text
    
    console.log('rp', resultName)
    document.querySelector('#searchResultName').innerHTML = `
        <div class="card mt-4">
        <h2>${resultName.data[0].namedays[country2]}</h2>
                <p>I ${selectedCountry} har ${resultName.data[0].namedays[country2]} 
                namnsdag den ${day2} ${selectedMonth}.</p>`   
                
                nameday.reset();
                
};

document.querySelector('#nameday').addEventListener('submit', e => {
    e.preventDefault();
   const day2 = day.value;
   const month2 = month.value;
   const country2 = country.value;

getNameday(country2, month2, day2)
.then(resultName => {
 console.log('Got response:', resultName);
 
    renderNameday(resultName)
 
})
.catch(resultName => {
    console.log(resultName)
   if (day2 === 'Välj dag')
   { renderAlertDay('danger', 'Du måste välja en dag.')
   } else if (month2 === 'Välj månad')
       { renderAlertDay('danger', 'Du måste välja en månad.') 
    } else if (country2 === 'Välj land')
    { renderAlertDay('danger', 'Du måste välja ett land.'); 
 } else {
    renderAlertDay('danger', `${day2}/${month2} är inte ett korrekt datum.`);
   }
    });
    
    
});


const renderAlertName = (severity, msg) => {
    document.querySelector('#searchResultDay').innerHTML = `
    <div class="alert alert-${severity}" role="alert">${msg}</div>`;
};

const renderName = (resultDay => {
    const selectedCountry = countryName.options[countryName.selectedIndex].text
    
   
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

    .catch(err => {
        //network error
        renderAlertName('danger', err);
    });
 
    
});


