import html from '../templates/number.js';

export class Number extends quantum.Component {
    constructor() {
        super();
    }

    static template = quantum.template(html);
}

quantum.define('quantum-number', Number);