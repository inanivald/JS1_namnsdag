const h = document.querySelector("#month");
const month = h.options[h.selectedIndex].value;
const monthEl = h.options[h.selectedIndex].text;
const i = document.querySelector("#day");
const day = i.options[i.selectedIndex].value;
const f = document.querySelector("#custom-select");
const country = f.options[f.selectedIndex].value;
const countryEl = f.options[f.selectedIndex].text;
const nameEl = document.querySelector('#namename');
const g = document.querySelector("#custom-select-name");
const countryName = g.options[g.selectedIndex].value;
const countryElName = g.options[g.selectedIndex].text;

const renderAlertDay = (severity, msg) => {
    document.querySelector('#searchResultName').innerHTML = `
    <div class="alert alert-${severity}" role="alert">${msg}</div>`;
};


const renderNameday = resultName => {
    document.querySelector('#searchResultName').innerHTML = `
        <div class="card mt-4">
        <h2>${resultName.data[0].namedays[country]}</h2>
                <p>I ${countryEl} har ${resultName.data[0].namedays[country]} 
                namnsdag den ${day} ${monthEl}.</p>`         
};




document.querySelector('#nameday').addEventListener('submit', e => {
    e.preventDefault();
getNameday(country, month, day)
.then(resultName => {
   renderNameday(resultName);
 
   if (resultName.data.length > 0){
    renderNameday(resultName)
    } else {
        renderAlertDay('warning', resultName.message);
    }
   
})
.catch(resultName => {
    console.log(resultName)
   if (f.options[f.selectedIndex].text === 'Välj land')
   { renderAlertDay('danger', 'Du måste välja land.')
   } else if (h.options[h.selectedIndex].text === 'Välj månad')
       { renderAlertDay('danger', 'Du måste välja en månad.') 
    } else if (i.options[i.selectedIndex].text === 'Välj dag')
    { renderAlertDay('danger', 'Du måste välja en dag.'); 
 } else {
    renderAlertDay('danger', `${day}/${monthEl} är inte ett korrekt datum.`);
   }
    });
 
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
    document.querySelector('#searchResultDay').innerHTML = `
        <div class="card mt-4">
        <h2>${days.join('')}/${months.join('')}</h2>
        <p>I ${countryElName} har ${names.join(', ')} namnsdag den ${days.join('')}/${months.join('')}.</p>
        </div>`
};

document.querySelector('#name').addEventListener('submit', e => {
    e.preventDefault();
    const nameEl2 = nameEl.value;
getName(nameEl2, countryName)
.then(resultDay => {
  renderName(resultDay);
  
    if (resultDay.results.length > 0){
    renderName(resultDay);
    } else {
        renderAlertName('danger', `${nameEl2} har ingen namnsdag i ${countryElName}. :(`);
    }
})
.catch(resultDay => {
   if (g.options[g.selectedIndex].text === 'Välj land'){
    renderAlertName('danger', 'Du måste välja land.')
   } else {
    renderAlertName('danger', 'Du måste ange ett namn.');
   }
    });
    nameEl.value = '';
});


