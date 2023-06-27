console.log ('Welcome to the world of Pokemon!');

let tips = document.querySelector ("#tips_click");
    classicDex = document.querySelector ("#classic");
    legendsDex = document.querySelector ("#legends");
    modernDex = document.querySelector ("#modern");

function openTips() {
    var tipsBox = document.querySelector ("#tips_box");
    if (tipsBox.style.display === 'block') {
        tipsBox.style.display = 'none';
    } else {
        tipsBox.style.display = 'block';
    }
};

function openClassicDex() {
    var classicDex = document.querySelector("#pokedex_display_classic");
    classicDex.classList.toggle("open");

    if (classicDex.classList.contains("open")) {
        classicDex.style.display = "flex";
    } else {
        classicDex.style.display = "none";
    };
}

function openLegendsDex() {
    var legendsDex = document.querySelector("#pokedex_display_legends");
    legendsDex.classList.toggle("open");

    if (legendsDex.classList.contains("open")) {
        legendsDex.style.display = "flex";
    } else {
        legendsDex.style.display = "none";
    };
}

function openModernDex() {
    var modernDex = document.querySelector("#pokedex_display_modern");
    modernDex.classList.toggle("open");

    if (modernDex.classList.contains("open")) {
        modernDex.style.display = "flex";
    } else {
        modernDex.style.display = "none";
    };
}

tips.addEventListener("click", openTips);
classicDex.addEventListener("click", openClassicDex);
legendsDex.addEventListener("click", openLegendsDex);
modernDex.addEventListener("click", openModernDex);