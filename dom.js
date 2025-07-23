const button = document.querySelector('.btn');
const inputField = document.querySelector('.form-control-mr-2');
const itemsList = document.querySelector('#items');
const items = document.querySelectorAll('.list-group-item')

// inputField.addEventListener('input', (event) =>{
   // input.textContent = event.target.value;
//})

fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
.then(response => {
    
    if(!response.ok){
        throw new Error("This is a error")
    }return response.json();
})
.then(data => console.log(data))
.catch(error => console.error(error)); 


const users = [
    { name: 'Charlie', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Alice', age: 35 }
];

button.addEventListener('click', (event) => {
    event.preventDefault()
    const input = document.querySelector('#mes');
    const li = document.createElement('li');
    li.className = 'list-group-item';
    li.innerHTML = input.value;
    itemsList.appendChild(li);
})



for(let i = 0; i < items.length; i++){
    items[i].style.backgroundColor = 'red';
}



button.addEventListener('click', (event) => {
    event.preventDefault();
    button.style.backgroundColor = 'blue'
})


const userBtn = document.querySelector('#userBtn');

userBtn.addEventListener('click', (event) =>{
    const container = document.querySelector('#userProfiles');

const userCards = users.map(user => {
    const div = document.createElement('div');
    div.innerHTML = `The name of users are ${user.name} and they are ${user.age} old`
    return div;
})
    userCards.forEach(card => container.appendChild(card));
});
    const newdiv = document.createElement('div');

    const newdivElement = document.createTextNode('Hellow World');

    newdiv.appendChild(newdivElement);
    console.log(newdiv)

    const container = document.querySelector('header .container');
    const h1 = document.querySelector('header h1');

    container.insertBefore(newdiv, h1);


   const btn2 = document.querySelector('#btn2');


   inputField.addEventListener('mousemove', (e) =>{
        document.body.style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+", 40)";
   })