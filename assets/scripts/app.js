const day = document.querySelector("#day");
const month = document.querySelector("#month");
const country = document.querySelector("#custom-select");
const nameEl = document.querySelector('#namename');
const countryName = document.querySelector("#custom-select-name");
const countryElName = document.querySelector("#custom-select-name");


const renderAlertDay = (severity, msg) => {
    document.querySelector('#searchResultName').innerHTML = `
    <div class="alert alert-${severity}" role="alert">${msg}</div>`;
};


const renderNameday = resultName => {
    const day2 = day.value;
    const month2 = month.value;
    const country2 = country.value;

    console.log('rp', resultName)
    document.querySelector('#searchResultName').innerHTML = `
        <div class="card mt-4">
        <h2>${resultName.data[0].namedays[country2]}</h2>
                <p>I ${country2} har ${resultName.data[0].namedays[country2]} 
                namnsdag den ${day2}/${month2}.</p>`   

                
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
    // document.querySelector("#day").value = ('Välj dag');
    // document.querySelector("#month").value = ('Välj månad');
    // document.querySelector("#custom-select").value = ('Välj land'); 

});


const renderAlertName = (severity, msg) => {
    document.querySelector('#searchResultDay').innerHTML = `
    <div class="alert alert-${severity}" role="alert">${msg}</div>`;
};

const renderName = resultDay => {
console.log(resultDay)
    const names = resultDay.results.map(name => name.name);
    const days = resultDay.results.map(day => day.day);
    const months = resultDay.results.map(month => month.month);
    const countryName2 = countryName.value;
    document.querySelector('#searchResultDay').innerHTML = `
        <div class="card mt-4">
        <h2>${days.join('')}/${months.join('')}</h2>
        <p>I ${countryName2} har ${names.join(', ')} namnsdag den ${days.join('')}/${months.join('')}.</p>
        </div>`
       
      
};

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
    nameEl.value = '';
    // document.querySelector("#custom-select-name").value = ('Välj land');
        
    
});


