function showContact() {
    const container = document.getElementById('content');

    const contents = document.createElement('p');
    contents.innerHTML = "I'm the contact page";

    container.appendChild(contents);
}

export default showContact;