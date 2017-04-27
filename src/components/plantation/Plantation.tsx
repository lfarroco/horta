interface PlantationProps {
    id?: string;
    type?: string;
    dateStart?: string;
    dateEnd?: string;
    quantity?: number;
    unit?: string;
}


export class Plantation {
    id: string;
    type: string;
    dateStart: any;
    dateEnd: any;
    quantity: number;
    unit: string;

    constructor(props?: PlantationProps) {

        if (props) {
            this.id = props.id;
            this.type = props.type;
            this.dateStart = props.dateStart;
            this.dateEnd = props.dateEnd;
            this.quantity = props.quantity;
            this.unit = props.unit;
        } else {

            var today = new Date().toISOString().split('T')[0];

            this.id = Date.now().toString();
            this.type = '';
            this.dateStart = undefined;
            this.dateEnd = undefined;
            this.quantity = 1;
            this.unit = undefined;
        }

    }

}