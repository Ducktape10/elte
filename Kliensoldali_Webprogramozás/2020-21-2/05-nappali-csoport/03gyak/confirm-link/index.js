class ConfirmLink extends HTMLAnchorElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.addEventListener('click', this.onClick);
  }

  onClick(e) {
    const yesOrNo = confirm("Szeretnél elmenni az oldalra?");
    if (!yesOrNo) {
      e.preventDefault();
    }
  }

}

customElements.define('confirm-link', ConfirmLink, { extends: 'a' });