import * as React from "react";

import { Harvest } from "./Harvest";

export interface HarvestListItemProps { match: any; }

export class HarvestListItem extends React.Component<HarvestListItemProps, any> {

    props: any;

    constructor(props: any) {

        super(props);

        this.state = {
            Harvest: props.Harvest
        };

    }
    render() {

        return <div>
            {this.props.harvest.type}
        </div>

    }
}