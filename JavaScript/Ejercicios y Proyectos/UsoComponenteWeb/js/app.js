function createPicture(props) {
    const pictureTemplateStr = `
        <div class="picture">
            <img src="${props.picture.large}"/>
            <p>${props.name.first} ${props.name.last}</p>
        </div>
    `;
    const picture = document.createElement('div');
    picture.innerHTML = pictureTemplateStr;
    return picture;
}

async function fetchData(gender) {
    try {
        const response = await fetch(`https://randomuser.me/api/?gender=${gender}&results=25`);
        const data = await response.json();
        const results = data.results;
        const container = document.getElementById('js-vanilla-container');
        container.innerHTML = '';

        results.forEach(result => {
            const picture = createPicture(result);
            container.appendChild(picture);
        });

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

document.getElementById('maleButton').addEventListener('click', () => {
    fetchData('male');
});

document.getElementById('femaleButton').addEventListener('click', () => {
    fetchData('female');
});