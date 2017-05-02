interface HarvestProps {
    id?: string;
    type?: string;
    date?: string;
    quantity?: number;
    unit?: string;
}


export class Harvest {
    id: string;
    type: string;
    date: any;
    quantity: number;
    unit: string;

    constructor(props?: HarvestProps) {

        if (props) {
            this.id = props.id;
            this.type = props.type;
            this.date = props.date;
            this.quantity = props.quantity;
            this.unit = props.unit;
        } else {

            this.id = Date.now().toString();
            this.type = '';
            this.date = undefined;
            this.quantity = 1;
            this.unit = undefined;
        }

    }

}