document.querySelector('#title').innerText = 'Hotel California';
document.querySelector('#subtitle').innerText = 'You can never leave';

async function getHotelData() {
    try {
        const response = await fetch('hotel.json');
        return await response.json();
    } catch(error) {
        console.error(error);
    }
}

let hotelData = {};
getHotelData().then(data => hotelData = data);

document.querySelectorAll('a').forEach(anchor => anchor.addEventListener('click', hotelInfo));

function hotelInfo(event) {
    let hotelChoice = hotelData.hotels.find(hotel => event.target.id === hotel.name.toLowerCase());

    document.querySelector('#hotelName').textContent = `${hotelChoice.name} Hotel`;
    document.querySelector('#address').textContent = `${hotelChoice.address}`;
    document.querySelector('#rooms').textContent = `${hotelChoice.rooms}`;
    document.querySelector('#gym').textContent = `${hotelChoice.gym}`;
    document.querySelector('#type').textContent = `${hotelChoice.types}`;
    document.querySelector('#picture').setAttribute('src', `images/${hotelChoice.picture}`);
}