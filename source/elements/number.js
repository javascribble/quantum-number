import { Component, template } from '../../references/quantum.js';
import html from '../templates/number.js';

export class Number extends Component {
    constructor() {
        super();
    }

    static template = template(html);

    static attributes = [];
}

customElements.define('quantum-number', Number);