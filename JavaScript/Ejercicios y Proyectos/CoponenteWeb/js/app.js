function createPicture(props) {
    const pictureTemplateStr = `
        <div class="picture">
            <img src="https://randomuser.me/api/portraits/women/${props.id}.jpg"/>
            <p>${props.name}</p>
        </div>
    `;
    return pictureTemplateStr;
}

const body = document.querySelector('body');
const props = {id: 3, name: 'Emily'};
const component = createPicture(props);
body.insertAdjacentHTML('beforeend', component);

const pictures = document.querySelectorAll('.picture img');
pictures.forEach(picture => {
    picture.addEventListener('click', function () {
        picture.classList.toggle('disabled');
    });
});
