// Variables //
const container = document.querySelector('.container');
const overlay = document.querySelector('.overlay')
const image = document.querySelector('.profile');
const modalContainer = document.querySelector(".modal-content");
const modalClose = document.querySelector(".modal-close");;
let employees = [];
let browserHTML = '';
let modalHTML;


// Fetch Function //
function fetchData(url) {           // look into making this into an async function //
    return fetch(url)
            .then(res => res.json())
            .then(data => employeeCards(data.results))
            .catch(err => console.log(err))

}

console.log(fetchData('https://randomuser.me/api/?results=12&inc=name,email,location,picture,cell,dob'))


// fetch('https://randomuser.me/api/?results=12&nat=us&inc=name,email,location,picture,cell,dob')
// .then(res => res.json())
// .then(data => employeeCards(data.results))
// .catch(err => console.log(err))

// Helper Functions //
const employeeCards = (data) => {
    employees = data;
    employees.map((employee, i) => {
        let name = employee.name
        let email = employee.email;
        let city = employee.location.city;
        let state = employee.location.state;
        let picture = employee.picture;
        browserHTML += `
            <div class="card" data-index="${i}">
                <img class="profile" src="${picture.thumbnail}">
                <div class="text-container">
                    <h2 class="name">${name.first} ${name.last}</h2>
                        <p class="contact">${email}</p>
                        <p class="contact">${city}, ${state}</p>
                </div>
            </div> 
            `;
    });
    container.innerHTML = browserHTML;
}



// Modal Window Functions //



