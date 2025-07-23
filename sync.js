function walkeDog(){

    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const wallked = false;

            if(wallked){
                resolve('You walked the Dog');
            }else{
                reject('You dont walked the Dog');
            }
        }, 1000);
    })
}
function cleanKitchen(){

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('You clean the Kitchen');
        }, 2500);
    })
}
function outTrash(){

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('You take out the Trash');
        }, 3000);
    })
}

async function doAll(){

    try{
        const dog = await walkeDog();
        console.log(dog)
    
        const kitchen = await cleanKitchen();
        console.log(kitchen)
    
        const trash = await outTrash();
        console.log(trash);
    
        setTimeout(() => {
            console.log('Youre Done')
        }, 4000);
    }catch(error){
        console.error(error);
    }


    fetch("person.json").then(response => response.json()).then(values => values.forEach(value => console.log(value)));
    

}

doAll();


const tasks = ['Study DOM', 'Clean Room', 'Buy Groceries', 'Learn React'];
const taskList = document.getElementById('taskList');
const filterInput = document.getElementById('filterInput');
const sortBtn = document.getElementById('sortBtn');
const container = document.getElementById('container');


function renderTasks(taskArray) {
    taskList.innerHTML = ''; 
    taskArray.forEach(task => {
        const li = document.createElement('li');
        li.textContent = task;
        taskList.appendChild(li);
    });
}

renderTasks(tasks);

filterInput.addEventListener('input', () => {
    const filterValue = filterInput.value.toLowerCase();
    const filteredTasks = tasks.filter(task => task.toLowerCase().includes(filterValue));
    renderTasks(filteredTasks);
});


sortBtn.addEventListener('click', () => {
    const sortedTasks = [...tasks].sort(); 
    renderTasks(sortedTasks);
});


const arr = [
    {name: 'Jovedel', lastName: 'Hermosa', age: 20},
    {name: 'Nadine', lastName: 'Tondo', age: 20},
]

function getName (){
    setTimeout(() => {
        arr.forEach(element => {
            const hold = document.createElement('li');
            hold.textContent = `The user ${element.name} lives in ${element.occupation || 'unknown location'}.`;
            container.appendChild(hold);
        }) 
    }, 3000)
};  

function newarr(post, callback){
    setTimeout(() => {
        arr.push(post);
        callback();
    }, 5000);
};
newarr( {name: 'Jovedel', lastName: 'II', age: 25, occupation: 'Bulacan'}, getName);