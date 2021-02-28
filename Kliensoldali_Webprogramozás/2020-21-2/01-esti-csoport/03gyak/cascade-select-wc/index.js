class CascadeSelect extends HTMLElement {
  constructor() {
    super();

    const shadowRoot = this.attachShadow({ mode: 'open' });
    this.originalSelect = this.firstElementChild;
    shadowRoot.appendChild(this.firstElementChild);
  }

  connectedCallback() {
    this.collectOptions();
    this.originalSelect.addEventListener('change', this.changeSubOptions.bind(this));
    this.createSubSelect();
  }

  collectOptions() {
    this.options = Array.from(this.originalSelect.querySelectorAll('optgroup')).map(
      (optgroup) => {
        const values = Array.from(optgroup.querySelectorAll('option')).map(
          (option) => option.value
        );

        return {
          type: optgroup.label,
          values
        };
      }
    );
    this.changeOptions();
  }

  changeOptions() {
    this.originalSelect.innerHTML = this.options.map(
      option => `<option value="${option.type}">${option.type}</option>`
    );
  }

  createSubSelect() {
    this.animalSelect = document.createElement('select');
    this.originalSelect.insertAdjacentElement('afterend', this.animalSelect);
    this.changeSubOptions();
  }

  changeSubOptions() {
    const ops = this.options.find((opt) => opt.type === this.originalSelect.value).values;
    this.animalSelect.innerHTML = ops.map(
      (option) => `<option value="${option}">${option}</option>`
    );
  }
}

customElements.define('cascade-select', CascadeSelect);