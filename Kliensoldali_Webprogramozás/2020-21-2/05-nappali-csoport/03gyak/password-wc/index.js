class TogglablePassword extends HTMLElement {
  constructor() {
    super();

    const template = document.querySelector('template').content;
    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.appendChild(template);
  }

  connectedCallback() {
    this.button = this.shadowRoot.querySelector('button');
    const input = this.shadowRoot.querySelector('input');

    this.button.addEventListener('click', () => {
      input.type = input.type === 'password' ? 'text' : 'password';
    });
  }

  disconnectedCallback() {
    this.button.removeEventListener('click');
  }

  // a custom element attribútumáról van itt szó
  // attributeChangedCallback(attrName, oldValue, newValue) {

  // }

}

customElements.define('togglable-password', TogglablePassword);