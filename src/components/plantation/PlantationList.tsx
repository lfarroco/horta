import * as React from "react";

import { Plantation } from "./Plantation";
import { PlantationListItem } from "./PlantationListItem";
import { Link } from 'react-router-dom'

export interface PlantationListState { plantations: Plantation[]; }


export class PlantationList extends React.Component<undefined, PlantationListState> {

    props: Readonly<any>;

    constructor(props: null) {
        super(props);
        this.state = {
            plantations: [
                { id: '1', dateEnd: 'asd', dateStart: 'asd', quantity: 2121, type: 'asdasd', unit: 'asd' },
                { id: '2', dateEnd: 'asd', dateStart: 'asd', quantity: 2121, type: 'asdasd', unit: 'asd' },
                { id: '3', dateEnd: 'asd', dateStart: 'asd', quantity: 2121, type: 'asdasd', unit: 'asd' }
            ]
        };
    }

    render() {

        var plantations = this.state.plantations.map((plantation, index) => {

            return <Link key={index}
                to={`plantation/${plantation.id}`}
                className="list-group-item">

                <PlantationListItem
                    plantation={plantation} />

            </Link>


        });

        return <div><h2>Plantações</h2><div className="list-group">{plantations}</div></div>;

    }
}