import Logo from './img/stellasLogo.PNG';
import removeContents from './removeContents';
import showMenu from './menu';

function createAndAppend(elementType, elementClass, elementText, appendTarget){
    const element = document.createElement(`${elementType}`);
    element.innerHTML = `${elementText}`;
    if (elementClass) {
        element.classList.add(`${elementClass}`);
    };
    appendTarget.appendChild(element);
    return element;
}

function showHome() {
    const currentHeading = document.querySelector('.heading-1');
    currentHeading.setAttribute("style", "color : red;");
    const container = document.getElementById('content');

    //logo
    const stellasLogo = new Image();
    stellasLogo.src = Logo;
    container.appendChild(stellasLogo);

    const hoursHeader = document.createElement('p');
    hoursHeader.innerHTML = "STELLA'S LOUNGE (BAR + RESTAURANT)";
    container.appendChild(hoursHeader);

    //hours
    const hoursList = createAndAppend('ul', 'hours-list','',container);
    createAndAppend('li', false, "Monday-Thursday: 4 PM - 11 PM", hoursList);
    createAndAppend('li', false, "Friday: 4PM - 1AM", hoursList);
    createAndAppend('li', false, "Saturday: 11 AM - 1 AM", hoursList);
    createAndAppend('li', false, "Sunday: 1 PM - 11 PM", hoursList);

    //holiday hours
    createAndAppend('p','list-header', 'HOLIDAY HOURS',container);
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

    //chronic hour
    createAndAppend('p','list-header', "CHRONIC HOUR AT STELLA'S", container);
    createAndAppend('p', 'chronic-header', "MONDAY - THURSDAY 4 PM - 5:30 PM", container);
    const chronicList = createAndAppend('ul', 'chronic-list', '', container);
    createAndAppend('li', false, "1/2 off Chronic Fry Appetizer", chronicList);
    createAndAppend('li', false, "$5.00 Nachos", chronicList);
    createAndAppend('li', false, "$3.00 wells", chronicList);
    createAndAppend('li', false, "$2.00 Draft PBR's", chronicList);

    //pictures

}

export default showHome;