import { NavBar } from "../navBar";
import { clearMain } from "./clearMain";
import { losAngeles } from "../restaurant";
function contactPageLoad(establishment){
    clearMain();
    const main = document.querySelector("main");
    main.appendChild(NavBar());
    const contacts = document.createElement("div");
    contacts.setAttribute("id", "contact-container");
    for(const info in losAngeles){
        const contactInfo = document.createElement("p");
        contactInfo.setAttribute("class", "contact-info");
        contactInfo.textContent = losAngeles[info];
        contacts.appendChild(contactInfo);
    }
    main.appendChild(contacts);
}

export {contactPageLoad};