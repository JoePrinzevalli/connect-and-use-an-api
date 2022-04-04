//---Variables---//

const container = document.querySelector('.container');
const overlay = document.querySelector('.overlay');
const card = document.querySelectorAll('.card');
const image = document.querySelector('.profile');
const modalContainer = document.querySelector(".modal-content");
// const modalClose = document.querySelector('.modal-close');
let employees = [];
let browserHTML = '';
let modalHTML = '';


//---Fetch Function---//

function fetchData(url) {           
    return fetch(url)
            .then(res => res.json())
            .then(data => employeeCards(data.results))
            .catch(err => console.log(err))
}
fetchData('https://randomuser.me/api/?results=12&inc=name,email,location,picture,cell,dob');

//---Helper Functions---//

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
                <img class="profile" src="${picture.large}">
                <div class="text-container">
                    <h2 class="name">${name.first} ${name.last}</h2>
                        <p class="contact">${email}</p>
                        <p class="contact">${city}, ${state}</p>
                </div>
            </div> 
            `;
    });
    container.innerHTML = browserHTML;
};

const modalFunction = (index) => {
    let { name, dob, cell, email, location: { city, street, state, postcode 
    }, picture } = employees[index];
   
    let date = new Date(dob.date);
 
    modalHTML = `
        <div class="modal">
        <div class="modal-content">
        <button class="modal-close">X</button>
            <img class="avatar" src=${picture.large} />
            <div class="text-container">
                <h2 class="name">${name.first} ${name.last}</h2>
                    <p class="email">${email}</p>
                    <p class="address">${city}</p>
                    <hr/>
                    <p class='phone'>${cell.replace(/[^0-9.]/g, '').replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3")}</p> 
                    <p class="address">${JSON.stringify(street.number)} ${JSON.stringify(street.name)}, ${state}, ${postcode}</p>
                    <p class='dob'>${date.getMonth()}/${date.getDate()}/${date.getFullYear()}</p>
            </div>
        </div>
        </div>
        `;
    overlay.classList.remove('hidden');
    overlay.innerHTML = modalHTML;
}


//---Event Listeners---//

container.addEventListener('click', (e) => {
    if(e.target != container) {
        const employee = e.target.closest('.card');
        const index = employee.getAttribute('data-index');
        employee.classList.add('chosen');
        modalFunction(index);
    }; 
});

overlay.addEventListener('click', (e) => {  
    if(e.target === document.querySelector('.modal-close')) {
        overlay.classList.add('hidden');
        document.querySelector('.chosen').classList.remove('.chosen');
    };
});

    



//---NOT FOR PROJECT, code I would like to work with after---// 
 
// let dataIndex = document.querySelector('.chosen').getAttribute('data-index');
//     const leftArrow = document.querySelector('.left-arrow');
//     const rightArrow = document.querySelector('.right-arrow');
//     if(e.target === leftArrow) {
//         let leftIndex = dataIndex - 1
//         modalFunction(leftIndex);
//         } else if (e.target === rightArrow) {
//             let rightIndex = dataIndex + 1
//             modalFunction(rightIndex);
//         };

// if(e.target === leftArrow) {
//     clearOverlay()
//     const previous = dataIndex.previousElementSibling.getAttribute('data-index');
//     console.log(modalFunction(previous));
//     document.querySelector(".modal-content").replaceChildren(previous); 
//     } else if (e.target === rightArrow) {
//         clearOverlay()
//         const next = dataIndex.nextElementSibling.getAttribute('data-index');
//         console.log(modalFunction(next));
//         document.querySelector(".modal-content").replaceChildren(next); 
//     };

{/* <img class='left-arrow'src='img/left-arrow.svg'>
<img class="avatar" src=${picture.large} />
<img class='right-arrow'src='img/right-arrow.svg'> */}










