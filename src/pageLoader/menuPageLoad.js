import { NavBar } from "../navBar";
import { clearMain } from "./clearMain";
import { losAngeles, chicago } from "../restaurant";

function MenuItem(n, desc){
    let MenuItemContainer = document.createElement("div");
    let name = document.createElement("h1");
    let description = document.createElement("p");
    name.textContent = n;
    description.textContent = desc;
    name.setAttribute("class", "food-name");
    name.setAttribute("class", "food-desc");
    MenuItemContainer.setAttribute("class", "menu-item");
    MenuItemContainer.appendChild(name);
    MenuItemContainer.appendChild(description);

    return MenuItemContainer;

}
function Menu(){
    const menuContainer = document.createElement("div");
    let menuList = globalThis.currentRestaurant.menuItems;
    for(let i = 0; i < menuList.length; i++){
        menuContainer.appendChild(menuList[i]);
    }
    menuContainer.setAttribute("id","menu");
    return menuContainer;

}
function menuPageLoad(e){
    //removes main page
    const main = document.querySelector("main");

    if(e.currentTarget.id == "left-store-display"){
        globalThis.currentRestaurant = losAngeles;
    }else if(e.currentTarget.id == "right-store-display"){
        globalThis.currentRestaurant = chicago;
    }
    clearMain();
    main.setAttribute("id","menu-page");
    main.setAttribute("class", "pages");
    //load new page
    main.appendChild(NavBar());
    if(true){
        main.appendChild(Menu());
    }
}
export{menuPageLoad, MenuItem};