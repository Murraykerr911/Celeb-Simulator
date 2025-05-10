let cash = 5000;
let fame = 50;
let level = 1;
let charisma = 5;
let acting = 5;
let voice = 3;
let stockValue = 100;
let stockOwned = 0;
let businessCreated = false;

// Career Paths
const careerPaths = {
    Actor: { charisma: 5, acting: 7, voice: 3, fame: 10, salary: 500 },
    Singer: { charisma: 6, acting: 3, voice: 7, fame: 15, salary: 600 },
    Director: { charisma: 7, acting: 5, voice: 4, fame: 20, salary: 700 },
    Producer: { charisma: 5, acting: 3, voice: 5, fame: 18, salary: 800 },
};

// Update Stats
function updateStats() {
    document.getElementById('cash').textContent = `Cash: $${cash}`;
    document.getElementById('fame').textContent = `Fame: ${fame}`;
    document.getElementById('level').textContent = `Level: ${level}`;
    document.getElementById('charisma').textContent = `Charisma: ${charisma}`;
    document.getElementById('acting').textContent = `Acting: ${acting}`;
    document.getElementById('voice').textContent = `Voice: ${voice}`;
    document.getElementById('stock').textContent = `Stock: $${stockValue}`;
}

// Career Progression
document.getElementById('actor').addEventListener('click', () => startCareer('Actor'));
document.getElementById('singer').addEventListener('click', () => startCareer('Singer'));
document.getElementById('director').addEventListener('click', () => startCareer('Director'));
document.getElementById('producer').addEventListener('click', () => startCareer('Producer'));

function startCareer(career) {
    let careerPath = careerPaths[career];
    if (careerPath) {
        charisma = careerPath.charisma;
        acting = careerPath.acting;
        voice = careerPath.voice;
        fame += careerPath.fame;
        cash += careerPath.salary;
        alert(`${career} Career Started!`);
        updateStats();
    }
}

// Business Creation
document.getElementById('create-business').addEventListener('click', () => {
    if (!businessCreated) {
        createBusiness();
        businessCreated = true;
    } else {
        alert("Business already created!");
    }
});

function createBusiness() {
    let businessType = prompt("Enter business type (Movie Studio, Music Label, Tech Startup):");
    alert(`${businessType} Business Created!`);
    updateStats();
}

// Weekly Events
document.getElementById('next-week').addEventListener('click', () => {
    level++;
    fame += 20;
    cash
