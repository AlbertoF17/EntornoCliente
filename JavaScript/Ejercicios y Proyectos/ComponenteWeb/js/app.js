function createPicture(props) {
    const div = document.createElement('div');
    div.className = 'picture';
    const img = document.createElement('img');
    img.src = props.picture.large;
    const p = document.createElement('p');
    p.textContent = `${props.name.first} ${props.name.last}`;
    div.appendChild(img);
    div.appendChild(p);
    return div;
}

async function fetchData() {
    try {
        const response = await fetch('https://randomuser.me/api/?results=5');
        const data = await response.json();
        const results = data.results;
        const vanillaContainer = document.getElementById('js-vanilla-container');
        const container = document.createElement('div');
        container.classList.add('container');

        results.forEach(result => {
            const picture = createPicture(result);
            container.appendChild(picture);
        });

        vanillaContainer.appendChild(container);

        const pictures = document.querySelectorAll('.picture img');
        pictures.forEach(picture => {
            picture.parentNode.addEventListener('click', function () {
                picture.parentNode.classList.toggle('disabled');
            });
        });
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

fetchData()