function clearMain(){
    let main = document.querySelector("main");
    while(main.firstChild){
        main.firstChild.remove();
    }
    main.style.backgroundImage = "none";
}
export {clearMain};