
function restaurantObjectLoad(restaurantObjectLoad){
    document.createElement("main");
}
function pageLoad(e){
    //removes main page
    let id = e.target.id;
    e.target.parentNode.parentNode.querySelector("footer").remove();
    e.target.parentNode.remove();
    //load new page
    if(id == "right-store-display"){
        console.log("right");
        restaurantObjectLoad();
    }else if(id == "left-store-display"){
        console.log("left");
    }
}
export{pageLoad};