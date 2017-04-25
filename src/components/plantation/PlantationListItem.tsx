import * as React from "react";

import { Plantation } from "./Plantation";

export interface PlantationListItemProps { match: any; }

export class PlantationListItem extends React.Component<PlantationListItemProps, any> {

    props: any;

    constructor(props: any) {

        super(props);

        this.state = {
            plantation: props.plantation
        };

    }
    render() {

        return <div>
            {this.props.plantation.type}
        </div>

    }
}