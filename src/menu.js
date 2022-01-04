import createAndAppend from './createAndAppend.js';
import Poppers from './img/jpoppers.PNG';
import Burrito from './img/burrito.PNG';
import Burger from './img/burger.png';

function createMenuItem(itemName, itemDesc, price, imgURL, appendTo){
    const container = createAndAppend('div', 'menu-item', '', appendTo);
    createAndAppend('h2', 'item-name', `${itemName}`, container);
    createAndAppend('p', 'item-desc', `${itemDesc}`, container);
    createAndAppend('h4', 'price', `${price}`, container);
    const menuPicture = new Image();
    menuPicture.src = imgURL;
    container.appendChild(menuPicture);
}

function showMenu() {
    document.querySelector('.heading-1').setAttribute("style", "color : white;");
    document.querySelector('.heading-2').setAttribute("style", "color : red;");
    document.querySelector('.heading-3').setAttribute("style", "color : white;");

    const content = document.getElementById('content');

    createAndAppend("div", "blank", "", content);
    createAndAppend("h1", "menu-title", "MENU", content);
    createMenuItem("Cheddar Jalapeno Poppers", "Breaded & deliciously fried. Served with Angry Mayo or bacon-ranch", "$8", Poppers, content);
    createMenuItem("Sweet Potato Burrito (V)", "Sweet potato-rice-black bean mix, vegan ranch, lettuce, tomato & onion in a spinach wrap. Served with a side of fresh salsa & chips.", "$9", Burrito , content);
    createMenuItem("Stella Blue", "Pretty simple. Stuffed with blue cheese & bacon topped with blue cheese sauce", "$13", Burger, content);
}

export default showMenu;