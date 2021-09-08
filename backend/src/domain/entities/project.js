import ValidatorEntity from "../../shared/helpers/validator-entity.js";

export default class ProjectEntity {
    constructor({ name, id }) {
        this.name = name;

        if (id) {
            this.id = Number(id);
        }
    }

    /**
     * 
     * @returns {ValidatorEntity}
     */
    validate() {
        if (!this.name) {
            return new ValidatorEntity().isValid(false).message('Nome não informado');
        }

        return new ValidatorEntity().isValid();
    }
}