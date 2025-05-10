let career = null;
let business = null;b
let magazines = [];
let awards = [];
let promoCodes = ["LEVELUP", "BONUS100"];
let cash = 1000;
let energy = 100;
let perception = 100;
let currentStudio = null;
let businessStatus = "Inactive";

function chooseCareer(choice) {
    career = choice;
    document.getElementById('career-selected').textContent = `Your career: ${career}`;
    document.getElementById('career-info').textContent = `You are now a ${career}. Train hard to improve your skills.`;
}

function createMovie() {
    if (energy < 10) {
        alert("Not enough energy!");
        return;
    }
    energy -= 10;
    alert("Movie created!");
}

function createSong() {
    if (energy < 10) {
        alert("Not enough energy!");
        return;
    }
    energy -= 10;
    alert("Song created!");
}

function sellContent() {
    if (!career) {
        alert("Select a career first!");
        return;
    }
    let earning = Math.floor(Math.random() * 500) + 100;
    cash += earning;
    alert(`You earned $${earning} from selling content.`);
}

function startStudio() {
    if (!career) {
        alert("Choose a career to start a studio.");
        return;
    }
    currentStudio = career === "actor" ? "Film Studio" : "Music Label";
    alert(`${career} studio started: ${currentStudio}`);
}

function startBusiness() {
    if (cash < 500) {
        alert("Not enough money to start a business!");
        return;
    }
    cash -= 500;
    business = "Movie Production";
    document.getElementById('current-business').textContent = business;
    document.getElementById('business-status').textContent = `Business Status: Active`;
    alert("Business started!");
}

function takeClass(classType) {
    if (energy < 20) {
        alert("Not enough energy!");
        return;
    }
    energy -= 20;
    alert(`${classType} class taken!`);
}

function applyPromoCode() {
    const code = document.getElementById("promo-code").value;
    if (promoCodes.includes(code)) {
        if (code === "LEVELUP") {
            alert("Level up! Gained 500 cash.");
            cash += 500;
        } else if (code === "BONUS100") {
            alert("Bonus 100 cash!");
            cash += 100;
        }
        document.getElementById("promo-result").textContent = `Promo code applied! New balance: $${cash}`;
    } else {
        alert("Invalid promo code.");
    }
}

function addMagazine(award) {
    magazines.push(award);
    document.getElementById('magazine-list').textContent = `Appeared in: ${magazines.join(", ")}`;
}

function addAward(award) {
    awards.push(award);
    document.getElementById('award-list').textContent = `Awards: ${awards.join(", ")}`;
}

// Dummy magazines and awards for fun
setTimeout(() => {
    addMagazine("Vogue");
    addAward("Oscar");
}, 3000);

function appearInMagazine(magazineName) {
    addMagazine(magazineName);
}

function winAward(awardName) {
    addAward(awardName);
}
