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

export {losAngeles, chicago};