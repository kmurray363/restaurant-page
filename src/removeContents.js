function removeContents(id){
    const node = document.getElementById(`${id}`);
    while (node.firstChild) {
        node.removeChild(node.lastChild);
    }
};

export default removeContents;