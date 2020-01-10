
const month = document.querySelector('#month').value;
const day = document.querySelector('#day').value;
const country = document.querySelector('#country').value;
const nameEl = document.querySelector('#namename').value;


const renderAlertDay = (severity, msg) => {
    document.querySelector('#searchResultName').innerHTML = `
    <div class="alert alert-${severity}" role="alert">${msg}</div>`;
};


const renderNameday = resultName => {
    console.log(resultName);
    document.querySelector('#searchResultName').innerHTML = `
        <div class="card mt-4">
                <p>${resultName.data[0].namedays.se} har namnsdag den ${day}/${month}.</p>
            
                <p class="country">${country}
                </p>`
            
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
        <p>${names.join(', ')} har namnsdag den ${days.join('')}/${months.join('')}.</p>
        </div>`
};

document.querySelector('#name').addEventListener('submit', e => {
    e.preventDefault();
    
getName(nameEl, country)
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


