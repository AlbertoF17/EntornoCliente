import { LitElement, html } from "https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js";

class Prop extends LitElement {
    static get properties() {
        return {
            results: { type: Array },
            gender: { type: String },
        };
    }

    constructor() {
        super();
        this.results = [];
        this.gender = "";
        this.fetchData(this.gender);
    }

    async fetchData(gender) {
        try {
            if (gender !== 'male' && gender !== 'female') {
                this.results = [];
                return;
            }

            const response = await fetch(`https://randomuser.me/api/?gender=${gender}&results=25`);
            const data = await response.json();
            this.results = data.results;
            this.requestUpdate();
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    render() {
        return html`
            <style>
            * {
                box-sizing: border-box;
            }
            
            html{
                font-family: Arial, Helvetica, sans-serif;
            }
            
            body{
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
            }
            
            header {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
            }
            
            .container {
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                justify-content: center;
            }
            
            .picture {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                text-align: center;
                max-width: 14rem;
                height: 19rem;
                padding: 1rem;
                margin: 2rem;
                border-radius: 1rem;
                cursor: pointer;
                transition: box-shadow 0.3s;
            }
            
            .picture:hover img{
                box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
            }
            
            .picture img {
                border-radius: 1rem;
                width: 90%;
                height: 90%;
                overflow: none;
            }
            
            .disabled {
                opacity: 0.3;
            }
            
            p {
                font-weight: bold;
                font-size: 2rem;
            }
            </style>
            <div class="container">
                ${this.results.map(
                    result => html`
                        <div class="picture" onclick = "classList.toggle('disabled')">
                            <img src="${result.picture.large}" />
                            <p>${result.name.first} ${result.name.last}</p>
                        </div>
                    `
                )}
            </div>
        `;
    }

    toggleDisabled(event) {
        if (event) {
            const picture = event.currentTarget.querySelector('img');
            if (picture) {
                picture.parentNode.classList.toggle('disabled');
            }
        }
    }

    set gender(value) {
        this.fetchData(value);
    }
}

customElements.define('custom-prop', Prop);

const maleButton = document.getElementById('maleButton');
const femaleButton = document.getElementById('femaleButton');
const propElement = document.querySelector('custom-prop');

maleButton.addEventListener('click', () => {
    propElement.gender = 'male';
});

femaleButton.addEventListener('click', () => {
    propElement.gender = 'female';
});