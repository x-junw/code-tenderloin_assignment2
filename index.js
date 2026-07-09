window.onload = async (event) => {
    document.body.style.display = "flex";
    let checkLifespan = document.querySelector("#lifespan");
    let checkSpecies = document.querySelector("#species");
    if (checkLifespan) {
        let lifespan = document.getElementById("lifespan").innerHTML;
        for (let i = 0; i <= lifespan; i++) {
            document.getElementById("lifespan").innerHTML = i;
            await new Promise(resolve => setTimeout(resolve, 1000 / lifespan));
        }
    }
    if (checkSpecies) {
        let species = document.getElementById("species").innerHTML;
        for (let i = 0; i <= species; i += 100) {
            document.getElementById("species").innerHTML = i;
            await new Promise(resolve => setTimeout(resolve, 0));
        }
    }
}