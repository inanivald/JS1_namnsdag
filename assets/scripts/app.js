
const month = document.querySelector('#month').value;
const day = document.querySelector('#day').value;
//const country = document.querySelector('#country').value;
var f = document.querySelector("#custom-select");
var country = f.options[f.selectedIndex].value;
var countryEl = f.options[f.selectedIndex].text;
const nameEl = document.querySelector('#namename').value;
var g = document.querySelector("#custom-select-name");
var countryName = g.options[g.selectedIndex].value;
var countryElName = g.options[g.selectedIndex].text;

const renderAlertDay = (severity, msg) => {
    document.querySelector('#searchResultName').innerHTML = `
    <div class="alert alert-${severity}" role="alert">${msg}</div>`;
};


const renderNameday = resultName => {
    console.log(resultName);
    document.querySelector('#searchResultName').innerHTML = `
        <div class="card mt-4">
        <h1>${resultName.data[0].namedays[country]} </h1>
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
    renderNameday(resultName);
    } else {
        renderAlertName('warning', resultName.message);
    }
})
.catch(err => {
   
    renderAlertDay('danger', `${day}/${month} är inte ett korrekt datum.`);
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
        renderAlertName('danger', `${nameEl} har ingen namnsdag. :(`);
    }
})
.catch(err => {
   
    renderAlertName('danger', err);
    });
});


