import { Context } from '../context';

export class Strategy {
    public name: string;
    private returnValue: boolean;

    constructor(name: string, returnValue: boolean = false) {
        this.name = name || 'unknown';
        this.returnValue = returnValue;
    }

    isEnabled(parameters: any, context: Context): boolean {
        return this.returnValue;
    }
}

export interface StrategyTransportInterface {
    name: string;
    parameters: any;
}
