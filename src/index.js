import "./index.css";
import { losAngeles, chicago } from "./restaurant";
let leftDisplay = document.getElementById("left-store-display");
let rightDisplay = document.getElementById("right-store-display");
import morningRestaurant  from "../asset/morningRestaurant.jpg";
import nightTimeRestaurant from "../asset/nightTimeRestaurant.jpg";
import squareBackground from "../asset/font-background/square(1).jpg";
import circleBackground from "../asset/font-background/circle3.png";
function loadStoreDisplay(establishment, display, bg, fontBackground){
    display.querySelector("p.name").textContent = establishment.name;
    display.querySelector("p.city").textContent = establishment.city;
    display.style.background = `url(${bg})`;
}
loadStoreDisplay(losAngeles, leftDisplay, morningRestaurant, squareBackground);
loadStoreDisplay(chicago, rightDisplay, nightTimeRestaurant, circleBackground);