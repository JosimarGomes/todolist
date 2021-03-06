import ValidatorEntity from "../../shared/helpers/validator-entity.js";

const REGEX_DATA = /^[0-9]{4}-[0-9]{2}-[0-9]{2}$/;

export default class TaskEntity {
    constructor({ description, id, endDate, projectId, status, owner }) {
        this.description = description;
        this.endDate = endDate;
        this.projectId = Number(projectId);
        this.status = status;
        this.owner = owner;

        if (id) {
            this.id = Number(id);
        }
    }

    /**
     * 
     * @returns {ValidatorEntity}
     */
     validate() {
        if (!this.description) {
            return new ValidatorEntity().isValid(false).message('Descrição não informado');
        }

        if (!this.owner) {
            return new ValidatorEntity().isValid(false).message('Responsável não informado');
        }

        if (!this.endDate || !REGEX_DATA.test(this.endDate)) {
            return new ValidatorEntity().isValid(false).message('Data não informada ou formato inválido')
        }

        // comentando para testar estilo de task atrasada no front
        // const endDate = new Date(this.endDate);
        // const currentDate = new Date();
        // if (currentDate > endDate) {
        //     return new ValidatorEntity().isValid(false).message('Data final não pode ser menor que a data atual')    
        // }

        return new ValidatorEntity().isValid();
    }
}