export default class ValidatorEntity {

    isValid(flag = true) {
        this.valid = flag;
        return this;
    }

    message(message = '') {
        this.errorMessage = message;
        return this;
    }
}
