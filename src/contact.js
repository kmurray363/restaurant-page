import Barfront from './img/barfront.PNG';
import createAndAppend from './createAndAppend';

function showContact() {
    document.querySelector('.heading-1').setAttribute("style", "color : white;");
    document.querySelector('.heading-2').setAttribute("style", "color : white;");
    document.querySelector('.heading-3').setAttribute("style", "color : red;");

    const container = document.getElementById('content');

    createAndAppend("h2", false, "HIT US UP", container);
    createAndAppend("p", false, "STELLA'S LOUNGE<br>53 Commerce Ave<br>Grand Rapids, MI", container);
   


    const barfront = new Image();
    barfront.src = Barfront;
    container.appendChild(barfront);

}

export default showContact;