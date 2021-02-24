class CascadeSelect {
    constructor(selector) {
        this.typeSelect = document.querySelector(selector);
    }

    init() {
        this.collectOptions();
        this.createAnimalSelect();
        //! ez így nem jó, a this miatt
        // this.typeSelect.addEventListener('change', this.changeAnimalSelectOptions);

        //! jók lehetnek:
        this.typeSelect.addEventListener('change', this.changeAnimalSelectOptions.bind(this));
        // this.typeSelect.addEventListener('change', () => this.changeAnimalSelectOptions());
        // this.typeSelect.addEventListener('change', () => { this.changeAnimalSelectOptions() });
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

        // console.log(this.options);
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

        // document.body.appendChild(select);


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

const cascadeSelect = new CascadeSelect('select');
cascadeSelect.init();

//! ez nem üres object return
// (option) => {}
//! ez üres object return
// (option) => ({})