const names = document.getElementById('name');
const emails = document.getElementById('email');
const messages = document.getElementById('message');
const submitBtn = document.getElementById('submitBtn');
const registrantsList = document.getElementById('registrantsList');
const error = document.getElementById('error');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
let allRegistrants = [];

class Registration{
    constructor(name, email, message){
        this.name = name;
        this.email = email;
        this.message = message;
    }

    registrants(){
        const li = document.createElement('li');
        li.textContent = `You are registerd ${this.name} || ${this.email} having a message of ${this.message}`;
        registrantsList.appendChild(li);
    }
}

    submitBtn.addEventListener('click', (event) => {
        event.preventDefault();
        if(names.value === '' && emails.value === '' && messages.value === ''){
            error.style.backgroundColor = 'red';
            error.innerHTML = 'Please Input'
            return
        };

        const registration = new Registration(names.value.trim(), emails.value.trim(), messages.value.trim());
        registration.registrants();
        allRegistrants.push(registration);
        
        registration.forEach(element => element.registrant());

        names.value = '';
        emails.value = '';
        messages.value = '';

    });

    searchBtn.addEventListener('click', () => {
        const searchValue = searchInput.value.trim().toLowerCase();
    
        const filtered = allRegistrants.filter((registrant) =>
            registrant.name.toLowerCase().includes(searchValue) || registrant.email.toLowerCase().includes(searchValue)
        );
    
        registrantsList.innerHTML = '';
        filtered.forEach((registrant) => {
            const registrantElement = registrant.createRegistrantElement();
            registrantsList.appendChild(registrantElement);
    });
    });

    const retail = companies.filter(company => company.category === 'Retail');

