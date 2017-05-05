import * as React from "react";

import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

import * as moment from 'moment';

import { Harvest } from "./Harvest"
import { HarvestList } from "./HarvestList"
import { HarvestProfile } from "./HarvestProfile"

//import * as firebase from "firebase/app";

interface HarvestContainerProps { firebase: firebase.database.Reference }
interface HarvestContainerState { harvests: Harvest[]; selectedHarvest: Harvest }

export class HarvestContainer extends React.Component<HarvestContainerProps, HarvestContainerState> {

    constructor(props: HarvestContainerProps) {
        super(props);

        console.log('props::', props);

        var storedHarvests = JSON.parse(localStorage.getItem('harvests'));
        if (!storedHarvests) {
            localStorage.setItem('harvests', JSON.stringify([]));
            storedHarvests = [];
        }

        storedHarvests.forEach((p: Harvest) => {

            p.date = moment(p.date);

        });

        this.state = {
            harvests: storedHarvests,
            selectedHarvest: undefined
        }

    }

    render() {

        return <div>

            <Route exact path="/harvests"
                component={(params) =>
                    (<HarvestList harvests={this.state.harvests} />)}
            />
            <Route exact path="/harvest/:id"
                component={(params) => {
                    return this.viewHarvest(params);
                }}
            />

            <Route path='/new/harvest'
                component={(params) => {

                    var newHarvest = new Harvest();

                    return <HarvestProfile
                        harvest={newHarvest}
                        canHarvest={false}
                        onSubmit={(p: Harvest) => { this.addHarvest(p) }} />

                }}
            />

        </div>

    }

    addHarvest(harvest: Harvest) {
        console.log('adding', harvest);

        var harvests = this.state.harvests.concat(harvest);
        this.setState({ harvests: harvests });
        localStorage.setItem('harvests', JSON.stringify(harvests));

    }

    updateHarvest(harvest: Harvest) {
        console.log('updating', harvest);

        var harvests = this.state.harvests.map((p, i) => {

            if (p.id == harvest.id)
                p = harvest;

            return p;

        });
        this.setState({ harvests: harvests });

        localStorage.setItem('harvests', JSON.stringify(harvests));

    }

    viewHarvest(params: any) {

        console.log('match::', params)
        console.log('match.params::', params)

        var id = params.match.params.id;

        var harvest;
        this.state.harvests.some(item => {

            if (item.id == id) {
                harvest = item;
                return true;
            }

        });

        return <HarvestProfile harvest={harvest}
            canHarvest={true}
            onSubmit={(p: Harvest) => { this.updateHarvest(p) }}
        />

    }

}