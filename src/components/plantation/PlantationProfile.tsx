import * as React from "react";

import { Plantation } from "./Plantation";

const plantations = [
    { id: '1', dateEnd: 'asd', dateStart: 'asd', quantity: 2121, type: 'asdasd', unit: 'asd' },
    { id: '2', dateEnd: 'asd', dateStart: 'asd', quantity: 2121, type: 'asdasd', unit: 'asd' },
    { id: '3', dateEnd: 'asd', dateStart: 'asd', quantity: 2121, type: 'asdasd', unit: 'asd' }
]

export interface PlantationProfileProps { match: any; }

export class PlantationProfile extends React.Component<PlantationProfileProps, any> {

    props: any;

    constructor(props: any) {

        super(props);



        var plantation;

        plantations.some((p: any) => {

            if (p.id == this.props.match.params.id) {
                plantation = p;
                return true;
            }

        });

        this.state = {
            plantation: plantation
        };

    }
    render() {

        return <div>
            {this.state.plantation.type}
        </div>

    }
}