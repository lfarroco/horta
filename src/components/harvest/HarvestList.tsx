import * as React from "react";

import { Harvest } from "./Harvest";
import { HarvestItem } from "./HarvestItem";

export interface HarvestListState { harvests: Harvest[]; }


export class HarvestList extends React.Component<undefined, HarvestListState> {

    props: Readonly<any>;

    constructor(props: null) {
        super(props);
        this.state = {
            harvests: [
                { id: 'asdasd', type: 'asdasd', quantity: 2121, unit: 'asd', date: 'asds' },
                { id: 'asdasd', type: 'aaaa', quantity: 2121, unit: 'asd', date: 'asds' },

                { id: 'asdasd', type: 'azzzzsdasd', quantity: 2121, unit: 'asd', date: 'asds' },

                { id: 'asdasd', type: 'aasdasd', quantity: 2121, unit: 'asd', date: 'asds' },


            ]
        };
    }

    render() {

        var harvests = this.state.harvests.map((harvest, index) => {

            return <div className="list-group-item"
                key={index}>
                <HarvestItem
                    harvest={harvest} />
            </div>

        });

        return <div>
            <h2>Colheitas</h2>
            <div className="list-group">{harvests}</div>
        </div>;

    }
}