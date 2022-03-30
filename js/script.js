// Variables //
const container = document.querySelector('.container');
const overlay = document.querySelector('.overlay')
const image = document.querySelector('.profile');
const modalContainer = document.querySelector(".modal-content");
const modalClose = document.querySelector(".modal-close");;
let employees = [];
let browserHTML;
let modalHTML;


// Fetch Function //
async function fetchData(url) {           // look into making this into an async function //
    try {
        const res = await fetch(url);
        const res_1 = await res.json();
        const data = res_1.results;
        return employeeCards(data);
    } catch (err) {
        return console.log(err);
    }
}

console.log(fetchData('https://randomuser.me/api/?results=12&inc=name,email,location,picture,cell,dob'))


// Helper Functions //
const employeeCards = (data) => {
    employees = data;
    let name = data.name
    let email = data.email;
    let city = data.location.city;
    let state = data.location.state;
    let picture = data.picture;
    
    for(let i = 0; i < 12;i++) {    // instead of putting length 12,  can i say ex. i < array.length, or something else
    browserHTML = `
    <div class="card" data-index="${i}">
        <img class="profile" src="${picture.thumbnail}">
        <div class="text-container">
            <h2 class="name">${name.first} ${name.last}</h2>
                <p class="contact">${email}</p>
                <p class="contact">${city}, ${state}</p>
        </div>
    </div>
    `;
    console.log(browserHTML)
    };
}


// Modal Window Functions //



