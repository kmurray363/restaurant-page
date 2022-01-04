import './style.css';
import { makeHeader } from './makeHeader';
import removeContents from './removeContents';
import showHome from './home';
import showMenu from './menu';
import showContact from './contact';

makeHeader("STELLA'S LOUNGE", "MENU", "CONTACT");

//create the main container
(() => {
    const content = document.createElement('div');
    content.setAttribute('id', 'content');
    document.body.appendChild(content);
})();

const $headers = document.querySelectorAll("header li");
showHome();

//event listeners to switch pages
$headers.forEach((header) => {
    header.addEventListener('click', (e) => {
        removeContents('content');
        switch(e.srcElement.innerHTML){
            case "STELLA'S LOUNGE":
                showHome();
                break;
            case "MENU":
                showMenu();
                break;
            case "CONTACT":
                showContact();
                break;
        }
    });
});