window.onload = async (event) => {
    document.body.style.display = "flex";
    // Checks which span element exists
    let checkLifespan = await document.querySelector("#lifespan");
    let checkSpecies = await document.querySelector("#species");
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
}