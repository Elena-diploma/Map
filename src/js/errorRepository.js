export default class ErrorRepository {
    constructor() {
        this.map = new Map([
            ['400', 'Bad Request'],
            ['404', 'Not Found'],
        ]);
    }
    translate(code) {
        if (this.map.get(code)) {
            return this.map.get(code);
        }
        return 'Unknown error';
    }
}