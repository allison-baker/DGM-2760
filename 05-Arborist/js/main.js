document.querySelector("#title").innerText = "Arborist";
document.querySelector("#subtitle").innerText = "Events and Arrays";

// Create an array with 4 trees listed, and create references to div elements
let trees = ['Oak', 'Pine', 'Aspen', 'Bald Cyprus'];
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

// Add redwood tree to end
document.querySelector('#addRedwood').onclick = () => {
    errorElement.textContent = '';
    trees.push('Redwood');
    listTrees();
}

// Add pear tree to the start
document.querySelector('#addPear').onclick = () => {
    errorElement.textContent = '';
    trees.unshift('Pear');
    listTrees();
}

// Remove the first tree
document.querySelector('#remove1').onclick = () => {
    errorElement.textContent = '';
    if (trees.length > 0) {
        trees.shift();
        listTrees();
    } else {
        errorElement.textContent = 'Can\'t remove the first tree when there aren\'t any trees, silly.';
    }
}

// Remove the second tree
document.querySelector('#remove2').onclick = () => {
    errorElement.textContent = '';
    if (trees.length > 1) {
        trees.splice(1, 1);
        listTrees();
    } else {
        errorElement.textContent = 'Can\'t remove the second tree when there is only one tree, silly.';
    }
}

// Remove the last tree
document.querySelector('#removeLast').onclick = () => {
    errorElement.textContent = '';
    if (trees.length > 0) {
        trees.pop();
        listTrees();
    } else {
        errorElement.textContent = 'Can\'t remove the last tree when there aren\'t any trees, silly.';
    }
}

// Sort trees alphabetically
document.querySelector('#sortTrees').onclick = () => {
    errorElement.textContent = '';
    if (trees.length > 0) {
        trees.sort();
        listTrees();
    } else {
        errorElement.textContent = 'Can\'t sort the trees when there aren\'t any trees, silly.';
    }
}

// Make all the trees lower case
document.querySelector('#lowerTrees').onclick = () => {
    errorElement.textContent = '';
    if (trees.length > 0) {
        let lowered = [];
        trees.forEach(tree => lowered.push(tree.toLowerCase()));
        trees = lowered;
        listTrees();
    } else {
        errorElement.textContent = 'Can\'t make the trees lowercase when there aren\'t any trees, silly.';
    }
}

// Return name of third tree
document.querySelector('#showThird').onclick = () => {
    errorElement.textContent = '';
    if (trees.length >= 3) {
        resultsElement.textContent = `The third tree in the list is ${trees[2]}.`;
    } else {
        errorElement.textContent = 'Can\'t show the third tree when there aren\'t three trees, silly.';
    }
}

// Return name of fourth tree
document.querySelector('#showFourth').onclick = () => {
    errorElement.textContent = '';
    if (trees.length >= 4) {
        resultsElement.textContent = `The fourth tree in the list is ${trees[3]}.`;
    } else {
        errorElement.textContent = 'Can\'t show the fourth tree when there aren\'t four trees, silly.';
    }
}