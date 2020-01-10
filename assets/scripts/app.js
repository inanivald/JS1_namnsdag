
const month = document.querySelector('#month').value;
const day = document.querySelector('#day').value;
const country = document.querySelector('#country').value;
const nameEl = document.querySelector('#namename').value;


const renderAlert = (severity, msg) => {
    document.querySelector('#searchResultName').innerHTML = `
    <div class="alert alert-${severity}" role="alert">${msg}</div>`;
};


const renderNameday = resultName => {
    document.querySelector('#searchResultName').innerHTML = `
        <div class="card mt-4">
                <h5 class="card-title" id="date">${day}/${month}</h5>
                <p class="name">
                    ${resultName.data[0].namedays.se}
                </p>
                <p class="country">${country}
                </p>`
            
};

//month.innerHTML = "";
document.querySelector('#nameday').addEventListener('submit', e => {
    e.preventDefault();
    
getNameday(country, month, day)
.then(resultName => {
   renderNameday(resultName);
  
    // if (data.){
    // renderNameday(data);
    // } else {
    //     renderAlert('warning', data.message);
    // }
})
.catch(err => {
   
    renderAlert('danger', err);
    });
});

const renderName = resultDay => {

    const names = resultDay.results.map(name => name.name);
    const days = resultDay.results.map(day => day.day);
    const months = resultDay.results.map(month => month.month);
    document.querySelector('#searchResultDay').innerHTML = `
        <div class="card mt-4">
        <p>${days.join('')}/${months.join('')}</p>
                <p>${names.join(', ')}</p>
                </div>`
};

document.querySelector('#name').addEventListener('submit', e => {
    e.preventDefault();
    
getName(nameEl, country)
.then(resultDay => {
  renderName(resultDay);
  console.log(resultDay)
    // if (data.){
    // renderNameday(data);
    // } else {
    //     renderAlert('warning', data.message);
    // }
})
.catch(err => {
   
    renderAlert('danger', err);
    });
});


