class ConfirmLink {
  constructor(elem) {
    this.link = elem;
  }

  init() {
    // this.link.addEventListener('click', this.onClick.bind(this));
    // this.link.addEventListener('click', (e) => { this.onClick(e); });
    this.link.addEventListener('click', (e) => this.onClick(e));
  }

  onClick(e) {
    const result = confirm(`Biztos hogy el szeretnél navigálni ide: ${this.link.href}?`);

    if (!result) {
      e.preventDefault();
    }
  }

}

const elem = document.querySelector('a');
const confirmLink = new ConfirmLink(elem);
confirmLink.init();
