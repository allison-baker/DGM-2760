function duplicateMenu() {
    //get all anchor elements from top menu
    let topNav = document.querySelectorAll('ul#primaryNavigation li a');
    
    //create the new list items for the bottom of the page
    let bottomNav = document.createElement('ul')

    topNav.forEach(menuItem => {
        let newItem = document.createElement('li');
        let newAnchor = document.createElement('a');

        newAnchor.setAttribute('href', menuItem.getAttribute('href'));
        newAnchor.textContent = menuItem.textContent;
        newItem.appendChild(newAnchor);
        console.log(newItem);

        bottomNav.appendChild(newItem);
        })

    document.querySelector('#smallNavArea').appendChild(bottomNav);
}

duplicateMenu();