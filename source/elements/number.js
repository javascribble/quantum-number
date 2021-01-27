import html from '../templates/number.js';

const { Component, template, define } = quantum;

export class Number extends Component {
    constructor() {
        super();
    }

    static template = template(html);
}

define('quantum-number', Number);