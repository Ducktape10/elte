class CustomDialog extends HTMLElement {
  constructor() {
    super();

    const shadowRoot = this.attachShadow({ mode: 'open' });
    const template = document.querySelector('template').content.cloneNode(true);
    shadowRoot.appendChild(template);
  }

  connectedCallback() {
    const button = document.createElement('button');
    button.innerText = 'Open dialog';
    button.addEventListener('click', () => {
      button.style.display = 'none';

      const dialog = this.shadowRoot.querySelector('.dialog');
      dialog.style.display = 'block';
      this.dataset.isVisible = true;
    });

    this.shadowRoot.appendChild(button);
  }

  disconnectedCallback() {
    console.log('Goodbye cruel world!');
  }

}


customElements.define('custom-dialog', CustomDialog);