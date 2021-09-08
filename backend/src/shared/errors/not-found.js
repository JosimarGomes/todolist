export default class NotFound extends Error {
    constructor(message = 'NotFound') {
        super(message);
        this.name = 'NotFound';
    }
}
