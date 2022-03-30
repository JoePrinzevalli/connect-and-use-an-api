// Variables //
const container = document.querySelector('.container');
const overlay = document.querySelector('.overlay')
const image = document.querySelector('.profile');
const modalContainer = document.querySelector(".modal-content");
const modalClose = document.querySelector(".modal-close");;
let employees = [];

// Fetch Function //

function fetchData(url) {           // look into making this into an async function //
    return fetch(url)
        .then(res => res.json())
        .then(res => res.results)
        // .then(employeeCards)
        .catch(err => console.log(err))
}
console.log(fetchData('https://randomuser.me/api/?results=12&inc=name,email,location,picture'))


// HTML Maker //



// Modal Window Functions //



