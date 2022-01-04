function createAndAppend(elementType, elementClass, elementText, appendTarget){
    const element = document.createElement(`${elementType}`);
    element.innerHTML = `${elementText}`;
    if (elementClass) {
        element.classList.add(`${elementClass}`);
    };
    appendTarget.appendChild(element);
    return element;
}

export default createAndAppend;