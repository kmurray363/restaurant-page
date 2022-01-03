function showMenu() {
    const container = document.getElementById('content');

    const contents = document.createElement('p');
    contents.innerHTML = "I'm the menu page";

    container.appendChild(contents);
}

export default showMenu;