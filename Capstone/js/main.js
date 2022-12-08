// Select document element
let characterInfo = document.querySelector("#info");
let button = document.querySelector("#generator");
let attribution = document.createElement('a');

// Function to remove children from a container
function removeChildren(container) {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}

// Make API call and get data
const getAPIData = async (url) => {
  try {
    const result = await fetch(url);
    return await result.json();
  } catch (error) {
    console.error(error);
  }
};

const charactersArray = [];
let randomChar = {};

async function loadCharacters() {
  offset = Math.floor(Math.random()*1562);
  const data = await getAPIData(
    `https://gateway.marvel.com:443/v1/public/characters?offset=${offset}&apikey=5c8a8a285c7aaf4e2b8d93d8c32cf0cb`
  );
  for (const character of data.data.results) {
    const simpleCharacter = {
      id: character.id,
      name: character.name,
      description: character.description,
      picture: `${character.thumbnail.path}.${character.thumbnail.extension}`,
      numComics: character.comics.available,
      url: character.urls[0].url,
    };
    charactersArray.push(simpleCharacter);
  }
  let randomNum = Math.floor(Math.random() * charactersArray.length);
  randomChar = charactersArray[randomNum];
  attribution.setAttribute('href', 'https://www.marvel.com/');
  attribution.innerHTML = `${data.attributionText}`;
  populateCharCard(randomChar);
}

//Show character information
function populateCharCard(character) {
  removeChildren(characterInfo);
  let box = document.createElement("div");

  let image = document.createElement("img");
  image.setAttribute("src", randomChar.picture);

  let name = document.createElement("h3");
  name.innerHTML = `${randomChar.name}`;

  let description = document.createElement('p');
  if (randomChar.description === "") {
    description.innerHTML = 'This character has no description available to display.';
  } else {
    description.innerHTML = `${randomChar.description}`;
  }

  let comics = document.createElement('p');
  comics.innerHTML = `${randomChar.name} appears in ${randomChar.numComics} comic(s).`;

  let url = document.createElement('a');
  url.setAttribute('href', randomChar.url);
  url.innerHTML = 'More information';
  url.setAttribute('target', '_blank');

  box.appendChild(image);
  box.appendChild(name);
  box.appendChild(description);
  box.appendChild(comics);
  box.appendChild(url);

  characterInfo.appendChild(box);
  characterInfo.appendChild(attribution);
}

button.addEventListener("click", loadCharacters);
