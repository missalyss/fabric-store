
class GreetingComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    const template = document.querySelector('#button');
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.myButton = this.shadowRoot.querySelector('#myButton');

  }

  connectedCallback() {
    const href = this.getAttribute('href') || 'https://www.starbucks.com';
    this.myButton.innerHTML = href;
    this.myButton.name = 'alyssa'
    console.log('m butt: ', this.myButton)
  }
}

// Register the component
customElements.define('greeting-component', GreetingComponent);

