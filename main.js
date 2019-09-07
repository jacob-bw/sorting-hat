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
     }
];

console.log(houses);

const printToDom = (toPrint, divId) => {
    document.getElementById(divId).innerHTML = toPrint
}


const sortingHat = () => {
    let firstYearName = document.getElementById('name-zone');
    let student = firstYearName.value;
    console.log(student);
    let randomNumber = Math.floor(Math.random()*4);
    console.log(randomNumber);
    let domString = ''
    const studentCard = houses[randomNumber]
    console.log(studentCard);
//    domString += ` 
//    <div class="card">
//        <h2>Congratulations ${student}!</h2>
//        <p> You are in ${studentCard.name} this means you are ${studentCard.attribute}.</p>
//        <img src=${studentCard.crest} alt= '...' />
//        <button id="expel-student">Expel</button>
//    </div>
//    `
        domString += `
        <div class="row">
        <div class="col-sm-6">
            <div class="card w-100">
                <div class="card-body">
                    <img src=${studentCard.crest} alt= '...' height="250" width="250" />
                    <h5 class="card-title">Congratulations ${student}!</h5>
                    <p>You are in ${studentCard.name} this means you are ${studentCard.attribute}.</p>
                    <a id="expel" href="#" class="btn btn-dark">Expel</a>
                </div>
            </div>
        </div>
        </div>
        `
printToDom(domString, 'student-zone')
}

//const expelStudent = () => {}


document.getElementById('sorter').addEventListener('click', sortingHat);
//document.getElementById('expel-student').addEventListener('click', expelStudent);