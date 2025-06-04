import { NavBar } from "../navBar";
import { clearMain } from "./clearMain";
import { menuPageLoad } from "./menuPageLoad";

function contactPageLoad(){
    clearMain();
    const main = document.querySelector("main");
    main.setAttribute("id", "contact-page")
    main.appendChild(NavBar());
    const contacts = document.createElement("div");
    contacts.setAttribute("id", "contact-container");
    const establishment = globalThis.currentRestaurant;
    for(const info in establishment){
        if(info == "menuItems"){
            break;
        }
        const contactInfo = document.createElement("p");
        contactInfo.setAttribute("class", "contact-info");
        contactInfo.textContent = establishment[info];
        contacts.appendChild(contactInfo);
    }
    main.appendChild(contacts);
}

export {contactPageLoad};