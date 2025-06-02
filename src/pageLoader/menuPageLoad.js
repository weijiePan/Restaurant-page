import { NavBar } from "../navBar";
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
    const foodItems = [
        MenuItem("cheese", "fermented milk chunks"),
        MenuItem("noodle", "stretched flour in water"),
    ];
    for(let i = 0; i < foodItems.length; i++){
        menuContainer.appendChild(foodItems[i]);
    }
    menuContainer.setAttribute("id","menu");
    return menuContainer;

}
function menuPageLoad(e){
    //removes main page
    let id = e.currentTarget.id;
    let main = e.currentTarget.parentNode;
    while(main.firstChild){
        main.firstChild.remove();
    }
    main.setAttribute("id","menu-page");
    main.setAttribute("class", "pages");
    //load new page
    main.appendChild(NavBar());
    if(id == "right-store-display"){
        main.appendChild(Menu());
    }else if(id == "left-store-display"){

    }
}
export{menuPageLoad};