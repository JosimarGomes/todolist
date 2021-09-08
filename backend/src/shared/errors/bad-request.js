export default class BadRequestError extends Error {
    constructor(message = 'BadRequest') {
        super(message);
        this.name = 'BadRequest';
    }
}
