function makeHeader(...tabTitle){
    const header = document.createElement('header');
    const ul = document.createElement('ul');
    header.classList.add('nav');
    header.appendChild(ul);
    let i = 0;

    tabTitle.forEach((ele) => {
        i++;
        const li = document.createElement('li');
        li.innerHTML = ele;
        li.classList.add(`heading-${i}`);
        ul.appendChild(li);
    })

    document.body.appendChild(header);
}

export { makeHeader };