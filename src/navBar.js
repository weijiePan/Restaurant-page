import {homePageLoader} from "./pageLoader/homePageLoader.js";
import { contactPageLoad } from "./pageLoader/contactPageLoad.js";
import { menuPageLoad } from "./pageLoader/menuPageLoad.js";
function Tab(id){
    const div = document.createElement("div");
    const h5 = document.createElement("h5");
    div.setAttribute("id", id);
    div.setAttribute("class", "navbar-div");
    div.appendChild(h5);
    h5.textContent = id;    
    return div;

}
function NavBar(){
    //sets up
    const nav = document.createElement("nav");
    let navbarDivs = [new Tab("home-tab"),new Tab("menu-tab"), new Tab("contact-tab")];
    for(let i = 0; i < navbarDivs.length; i++){
        nav.appendChild(navbarDivs[i]);
    }
    navbarDivs[0].addEventListener("click", homePageLoader);
    navbarDivs[1].addEventListener("click", menuPageLoad);
    navbarDivs[2].addEventListener("click", contactPageLoad);
    return nav;
}
export {NavBar};