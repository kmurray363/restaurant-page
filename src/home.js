import Logo from './img/stellasLogo.PNG';
import burger from './img/burger.png';
import removeContents from './removeContents';
import showMenu from './menu';
import createAndAppend from './createAndAppend.js';
import Element from './domGetter.js';

function showHome() {

    document.querySelector('.heading-1').setAttribute("style", "color : red;");
    document.querySelector('.heading-2').setAttribute("style", "color : white;");
    document.querySelector('.heading-3').setAttribute("style", "color : white;");

    const container = document.getElementById('content');

    //logo
    const stellasLogo = new Image();
    stellasLogo.src = Logo;
    container.appendChild(stellasLogo);

    createAndAppend('h2', 'hours-header', "STELLA'S LOUNGE (BAR + RESTAURANT)", container);


    //hours
    const hoursList = createAndAppend('ul', 'hours-list','',container);
    createAndAppend('li', false, "Monday-Thursday: 4 PM - 11 PM", hoursList);
    createAndAppend('li', false, "Friday: 4PM - 1AM", hoursList);
    createAndAppend('li', false, "Saturday: 11 AM - 1 AM", hoursList);
    createAndAppend('li', false, "Sunday: 1 PM - 11 PM", hoursList);

    //holiday hours
    createAndAppend('h2','list-header', 'HOLIDAY HOURS',container);
    const holidayHours = createAndAppend('ul', 'holiday-hours','', container);
    createAndAppend('li', false, "11/24: CLOSED", holidayHours);
    createAndAppend('li', false, "12/25: CLOSED", holidayHours);
    createAndAppend('li', false, "12/31: 4 PM - 1 AM", holidayHours);
    createAndAppend('li', false, "1/1: 11 AM - 11 PM", holidayHours);

    //menu button
    const menuButton = createAndAppend('button','menu-button', 'VIEW MENU', container);
    menuButton.addEventListener('click', () => {
        removeContents('content');
        showMenu();
    })

    //borger

    const burgerImg = new Image();
    burgerImg.src = burger;
    container.appendChild(burgerImg);


    //chronic hour
    createAndAppend('h2','list-header', "CHRONIC HOUR AT STELLA'S", container);
    createAndAppend('h3', 'chronic-header', "MONDAY - THURSDAY 4 PM - 5:30 PM", container);
    const chronicList = createAndAppend('ul', 'chronic-list', '', container);
    createAndAppend('li', false, "1/2 off Chronic Fry Appetizer", chronicList);
    createAndAppend('li', false, "$5.00 Nachos", chronicList);
    createAndAppend('li', false, "$3.00 wells", chronicList);
    createAndAppend('li', false, "$2.00 Draft PBR's", chronicList);

    //pictures

}

export default showHome;