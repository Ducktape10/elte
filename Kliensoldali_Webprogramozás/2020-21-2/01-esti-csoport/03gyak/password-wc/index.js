class TogglablePassword extends HTMLElement {
  constructor() {
    super();

    const template = document.querySelector('template').content;
    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.appendChild(template);
  }

  connectedCallback() {
    const button = this.shadowRoot.querySelector('button');
    const input = this.shadowRoot.querySelector('input');

    button.addEventListener('click', () => {
      input.type = input.type === 'password' ? 'text' : 'password';
    });

  }

  disconnectedCallback() {
    const button = this.shadowRoot.querySelector('button');
    button.removeEventListener('click');
  }

}

customElements.define('togglable-password', TogglablePassword);
