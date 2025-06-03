import morningRestaurant  from "../../asset/morningRestaurant.jpg";
import nightTimeRestaurant from "../../asset/nightTimeRestaurant.jpg";
import { losAngeles, chicago } from "../restaurant.js";
import { menuPageLoad } from "../pageLoader/menuPageLoad";
import { clearMain } from "./clearMain.js";
function homePageLoader(){
    clearMain();
    let main = document.querySelector("main");
    main.setAttribute("id","index-page");
    const leftStoreDisplay = document.createElement("div");
    const rightStoreDisplay = document.createElement("div");
    leftStoreDisplay.setAttribute("class", "store-front-page");
    rightStoreDisplay.setAttribute("class", "store-front-page");
    leftStoreDisplay.setAttribute("id", "left-store-display");
    rightStoreDisplay.setAttribute("id", "right-store-display");
    
    const squareFontBackground = document.createElement("div");
    const circleFontBackground = document.createElement("div");
    squareFontBackground.setAttribute("id", "square-font-background");
    circleFontBackground.setAttribute("id", "circle-font-background");
    squareFontBackground.setAttribute("class", "font-background");
    circleFontBackground.setAttribute("class", "font-background");
    rightStoreDisplay.appendChild(circleFontBackground);
    leftStoreDisplay.appendChild(squareFontBackground);
    
    for(let i = 0; i < 2; i++){
        let fontBackground;
        if(i == 0){
            fontBackground = squareFontBackground;
        }else{
            fontBackground = circleFontBackground;
        }
        const name = document.createElement("p");
        const city = document.createElement("p");
        name.setAttribute("class", "name");
        city.setAttribute("class", "city");
        fontBackground.appendChild(name);
        fontBackground.appendChild(city);
    }
    main.appendChild(leftStoreDisplay);
    main.appendChild(rightStoreDisplay);
    loadStoreDisplay(losAngeles, leftStoreDisplay, morningRestaurant, menuPageLoad);
    loadStoreDisplay(chicago, rightStoreDisplay, nightTimeRestaurant, menuPageLoad);
}

function loadStoreDisplay(establishment, display, bg, loader){
    display.querySelector("p.name").textContent = establishment.name;
    display.querySelector("p.city").textContent = establishment.city;
    display.addEventListener("click", loader);
    display.style.background = `url(${bg})`;
}

export{homePageLoader};