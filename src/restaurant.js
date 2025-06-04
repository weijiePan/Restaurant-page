import { MenuItem } from "./pageLoader/menuPageLoad";
class Restaurant{//provides restaurant specific information 
    //and methods of interacting
    constructor(){
        this.reservations = [];
        this.events = [];
    }
    
}
class establishment extends Restaurant{//provides the general information
    constructor(name, address, city, contact){
        super();
        this.name = name;
        this.address = address;
        this.city = city;
        this.contact = contact;

    }


}

let losAngeles = new establishment("girl & the goat", "555-3 Mateo St.Los Angeles, CA", "Los Angeles",  "213-799-4628");
let chicago = new establishment("girl & the goat", "809 W. Randolph Chicago, IL", "Chicago", "213-799-4628");
losAngeles.menuItems = [
    MenuItem(" everything rye focaccia ", " charred scallion cream cheese . pickle relish "),
    MenuItem(" pita & dips ", " carrot tahini dip . tzatziki " ),
    MenuItem(" chickpea fritters ", " goat yogurt . green chutney . sev spice crunch . pickled rhubarb "),
    MenuItem(" roasted asparagus ", " golden beet giardiniera . yuzu kosho . party nuts "),
];
chicago.menuItems =[
    MenuItem(" naan & dips ", " tzatziki . carrot 'hummus' "),
    MenuItem(" kimchi sourdough ", " charred corn cheese cream . pickled garlic chives "),
    MenuItem(" goat liver mousse ", " crumpets . biscuit crackers . craisin relish . seasonal jam "),
    MenuItem(" crispy brussels sprouts ", " sichuan peanut dressing . pickled peppers "),

];
export {losAngeles, chicago};