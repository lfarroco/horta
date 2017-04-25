import * as React from "react";

import { Harvest } from "./Harvest";

export interface HarvestItemProps { harvest: Harvest; }

export class HarvestItem extends React.Component<HarvestItemProps, undefined> {
    render() {

        return <div>
            {this.props.harvest.type}
        </div>

    }
}