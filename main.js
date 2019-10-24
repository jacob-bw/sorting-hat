const houses = [
    {
        name: 'Hufflepuff',
        attribute: 'miscellaneous',
        number: '0',
        crest: 'https://vignette.wikia.nocookie.net/harrypotter/images/0/06/Hufflepuff_ClearBG.png/revision/latest?cb=20161020182518'
     },
    {
        name: 'Ravenclaw',
        attribute: 'smart',
        number: '1',
        crest: 'https://vignette.wikia.nocookie.net/harrypotter/images/4/4e/RavenclawCrest.png/revision/latest/scale-to-width-down/350?cb=20161020182442'
        
     },
    {
        name: 'Slytherin',
        attribute: 'evil',
        number: '2',
        crest: 'https://vignette.wikia.nocookie.net/harrypotter/images/0/00/Slytherin_ClearBG.png/revision/latest/scale-to-width-down/350?cb=20161020182557'
     },
    {
        name: 'Gryffindor',
        attribute: 'brave',
        number: '3',
        crest: 'https://vignette.wikia.nocookie.net/harrypotter/images/b/b1/Gryffindor_ClearBG.png/revision/latest/scale-to-width-down/350?cb=20190222162949'
     },
     {
         name: 'Expelled',
         punishment: 'Please turn in your wand for destruction',
         img: 'https://images.vexels.com/media/users/3/132003/isolated/preview/a05496ffbb01a7f9b84cd0e6d8e5188e-sad-pumpkin-emoticon-by-vexels.png'
     }
];

const printToDom = (toPrint, divId) => {
    document.getElementById(divId).innerHTML = toPrint
};

const sortingHat = () => {
    let firstYearName = document.getElementById('name-zone');
    let student = firstYearName.value;
    let randomNumber = Math.floor(Math.random()*4);
    let domString = ''
    const houseCard = houses[randomNumber]
    
    domString += `
    <div class="row">
    <div class="col-sm-6">
        <div class="card text-center">
            <div class="card-body">
                <img src=${houseCard.crest} alt= '...'/>
                <h5>Congratulations</h5>
                <h5 class="card-title" id="student-name">${student}!</h5>
                <p>You are in ${houseCard.name} this means you are ${houseCard.attribute}.</p>
                <div><button id="expel" href="#" class="btn btn-dark">Expel</button></div>
            </div>
        </div>
    </div>
    </div>
    `;
    
    printToDom(domString, 'student-zone')
};

const expelStudent = () => {
    let studentToExpel = document.getElementById('student-name');
    console.log(studentToExpel);
    let exStudent = studentToExpel.value;
    const domString = `
    <div class="row">
    <div class="col">
    <div class="card">
    <div class="card-body">
    </div>
    <img src=${houses[4].img} alt= '...'/>
    <div class="card-title">We're very disappointed in your behavior ${exStudent}. You've been expelled.</div>
    <div>Please turn in your wand for destruction.</div>
    </div>
    </div>
    </div>
    `;
    printToDom(domString, 'student-zone');
};

document.getElementById('sorter').addEventListener('click', sortingHat);
document.getElementById('student-zone').addEventListener('click', expelStudent);