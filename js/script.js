document.addEventListener('DOMContentLoaded', () => {

    //ENABLE MOBILE MENU BUTTON
    const sitenav = document.querySelector(".site-nav");
    const menubutton = document.querySelector(".menubutton");

    console.log(sitenav);
    console.log(menubutton);

    menubutton.onclick = () => {
  
    // IF MENU IS CLOSED, OPEN IT, ELSE CLOSE IT
    if (sitenav.getAttribute("data-menustate") === "open") {
    sitenav.setAttribute("data-menustate", "closed");
    } else {
    sitenav.setAttribute("data-menustate", "open");
    };
    };
    //Remove the data-attriute on resize
    window.onresize = () => {
        sitenav.removeAttribute("data-menustate");
    };

    
});