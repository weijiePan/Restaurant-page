import "./index.css";
import "./restaurantPage.css";
import {pageLoad} from "./restaurantPLoader";
import { losAngeles, chicago } from "./restaurant";
let leftDisplay = document.getElementById("left-store-display");
let rightDisplay = document.getElementById("right-store-display");
let main = document.querySelector("main");
import morningRestaurant  from "../asset/morningRestaurant.jpg";
import nightTimeRestaurant from "../asset/nightTimeRestaurant.jpg";
import squareBackground from "../asset/font-background/square(1).jpg";
import circleBackground from "../asset/font-background/circle3.png";
function loadStoreDisplay(establishment, display, bg, loader){
    display.querySelector("p.name").textContent = establishment.name;
    display.querySelector("p.city").textContent = establishment.city;
    display.addEventListener("click", loader);
    display.style.background = `url(${bg})`;
}
loadStoreDisplay(losAngeles, leftDisplay, morningRestaurant, pageLoad);
loadStoreDisplay(chicago, rightDisplay, nightTimeRestaurant, pageLoad);