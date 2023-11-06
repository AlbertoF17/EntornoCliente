import {LitElement, html} from "https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js";

class Prop extends LitElement {
    static get properties() {
        return {
            results: { type: Array }
        };
    }

    constructor() {
        super();
        this.results = [];
        this.fetchData();
    }

    async fetchData() {
        try {
            const response = await fetch('https://randomuser.me/api/?results=5');
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
        ${this.results.map(result => html`
          <div class="picture" @click="${() => this.toggleDisabled(event)}">
              <img src="${result.picture.large}"/>
              <p>${result.name.first} ${result.name.last}</p>
          </div>
        `)}
      </div>
    `;
    }

    toggleDisabled(event) {
        const picture = event.target.querySelector('img');
        picture.parentNode.classList.toggle('disabled');
    }
}

customElements.define('custom-prop', Prop);
