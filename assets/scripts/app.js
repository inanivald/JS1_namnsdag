
const month = document.querySelector('#month').value;
const day = document.querySelector('#day').value;

const renderAlert = (severity, msg) => {
    document.querySelector('#name').innerHTML = `
    <div class="alert alert-${severity}" role="alert">${msg}</div>`;
};


const renderNameday = result => {
    document.querySelector('#name').innerHTML = `
        <div class="card mt-4">
                <h5 class="card-title" id="date">${result.data[0].dates.day}/${result.data[0].dates.month}</h5>
                <p class="name">
                    <span id="temperature">${result.data[0].namedays.se}
                </p>`
};

document.querySelector('#nameday').addEventListener('submit', e => {
    e.preventDefault();
    
getNameday(month, day)
.then(result => {
   renderNameday(result);
   
})
.catch(err => {
   
    renderAlert('danger', err);
    });
});