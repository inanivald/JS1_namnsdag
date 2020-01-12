
const month = document.querySelector('#month').value;
const day = document.querySelector('#day').value;
const f = document.querySelector("#custom-select");
const country = f.options[f.selectedIndex].value;
const countryEl = f.options[f.selectedIndex].text;
const nameEl = document.querySelector('#namename').value;
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
                namnsdag den ${day}/${month}.</p>`         
};



//month.innerHTML = "";
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
   if (f.options[f.selectedIndex].text === 'Välj land'){
    renderAlertDay('danger', `Du måste välja land.`)
   } else {
    renderAlertDay('danger', `${day}/${month} är inte ett korrekt datum.`);
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
    
getName(nameEl, countryName)
.then(resultDay => {
  renderName(resultDay);
  
    if (resultDay.results.length > 0){
    renderName(resultDay);
    } else {
        renderAlertName('danger', `${nameEl} har ingen namnsdag i ${countryElName}. :(`);
    }
})
.catch(resultDay => {
   if (g.options[g.selectedIndex].text === 'Välj land'){
    renderAlertName('danger', `Du måste välja land.`)
   } else {
    renderAlertName('danger', `${day}/${month} är inte ett korrekt datum.`);
   }
    });
});


