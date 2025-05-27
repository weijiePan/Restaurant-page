import "./index.css";
import { losAngeles, chicago } from "./restaurant";
let leftDisplay = document.getElementById("left-store-display");
let rightDisplay = document.getElementById("right-store-display");

function loadStoreDisplay(establishment, display, background){
    display.querySelector('p.location').textContent = establishment.city;
    display.querySelector('p.name').textContent = establishment.name;
    display.style.backgroundImage = `url(${background})`;
}
loadStoreDisplay(losAngeles, leftDisplay, "../asset/morningRestaurant.jpg");
loadStoreDisplay(chicago, rightDisplay, "../asset/nightTimeRestaurant.jpg");