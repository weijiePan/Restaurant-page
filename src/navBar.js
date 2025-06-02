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
    return nav;
}
export {NavBar};