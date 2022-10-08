document.querySelector("#title").innerText = "Arborist";
document.querySelector("#subtitle").innerText = "Events and Arrays";

// create an array with 4 trees listed, and create references to div elements
const trees = ['Oak', 'Pine', 'Aspen', 'Bald Cyprus'];
const errorElement = document.querySelector('#error');
const resultsElement = document.querySelector('#displayResults');

// display the list of trees inside the displayResults element
const listTrees = () => {
    let treeList = '';
    trees.forEach(tree => {
        treeList += `${tree}</br>`;
    })
    resultsElement.innerHTML = `${treeList}<span>${trees.length} elements long</span>`;
}

listTrees();