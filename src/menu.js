function showMenu() {
    document.querySelector('.heading-1').setAttribute("style", "color : white;");
    document.querySelector('.heading-2').setAttribute("style", "color : red;");
    document.querySelector('.heading-3').setAttribute("style", "color : white;");

    const container = document.getElementById('content');

    const contents = document.createElement('p');
    contents.innerHTML = "I'm the menu page";

    container.appendChild(contents);
}

export default showMenu;