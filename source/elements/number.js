import html from '../templates/number.js';

export class Number extends Component {
    constructor() {
        super();
    }

    static template = template(html);
}

define('quantum-number', Number);