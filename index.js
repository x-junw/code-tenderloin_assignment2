window.onload = async (event) => {
    document.body.style.display = "flex";
    await countingStep();
    await popupStep();
}

function countingStep() {
    // Checks which span element exists
    let checkLifespan = document.querySelector("#lifespan");
    let checkSpecies = document.querySelector("#species");
    if (checkLifespan) {
        countingEffect("lifespan");
    }
    if (checkSpecies) {
        countingEffect("species");
    }
}

async function countingEffect(_element) {
    let a = document.getElementById(_element).innerHTML;
    for (let i = 0; i <= a; i += a / 40) {
            document.getElementById(_element).innerHTML = Math.round(i);
            await new Promise(resolve => setTimeout(resolve, 25));
    }
    document.getElementById(_element).innerHTML = a;
}

function popupStep() {
    const info = document.querySelectorAll(".info");
    info.forEach(async (element) => {
        let x = element.innerHTML;
        for(let i = 0; i <= x.length; i++) {
            element.innerHTML = x.slice(0, i);
            await new Promise(resolve => setTimeout(resolve, 500 / x.length));
        }
    });
}