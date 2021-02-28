class CascadeSelect extends HTMLElement {
  constructor() {
    super();
    this.typeSelect = document.querySelector('cascade-select > select:first-child'); // this.firstElementChild;
    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.appendChild(this.typeSelect);
  }

  connectedCallback() {
    // const select = document.querySelector('cascade-select:first-child')
    this.collectOptions();
    this.createAnimalSelect();
    this.typeSelect.addEventListener('change', this.changeAnimalSelectOptions.bind(this));
  }

  collectOptions() {
    this.options = Array.from(this.typeSelect.querySelectorAll('optgroup')).map(
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

    this.changeTypeSelectOptions();
  }

  changeTypeSelectOptions() {
    this.typeSelect.innerHTML = this.options.map(
      (option) => `<option value="${option.type}">${option.type}</option>`
    );
  }

  createAnimalSelect() {
    this.animalSelect = document.createElement('select');
    this.typeSelect.insertAdjacentElement('afterend', this.animalSelect);

    this.changeAnimalSelectOptions();
  }

  changeAnimalSelectOptions() {
    this.animalSelect.innerHTML = this.options.find(
      (option) => option.type === this.typeSelect.value
    ).values.map(
      (animal) => `<option value="${animal}">${animal}</option>`
    );
  }

}

customElements.define('cascade-select', CascadeSelect);
