import morningRestaurant  from "../../asset/morningRestaurant.jpg";
import nightTimeRestaurant from "../../asset/nightTimeRestaurant.jpg";
import squareBackground from "../../asset/font-background/square(1).jpg";
import circleBackground from "../../asset/font-background/circle3.png";
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
    for(let i = 0; i < 2; i++){
        let display;
        if(i == 0){
            display = leftStoreDisplay;
        }else{
            display = rightStoreDisplay;
        }
        const name = document.createElement("p");
        const city = document.createElement("p");
        name.setAttribute("class", "name");
        city.setAttribute("class", "city");
        display.appendChild(name);
        display.appendChild(city);
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