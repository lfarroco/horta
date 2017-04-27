import * as React from "react";

import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

import * as moment from 'moment';

import { Plantation } from "./Plantation"
import { PlantationList } from "./PlantationList"
import { PlantationProfile } from "./PlantationProfile"

interface PlantationContainerProps { }
interface PlantationContainerState { plantations: Plantation[]; selectedPlantation: Plantation }

export class PlantationContainer extends React.Component<PlantationContainerProps, PlantationContainerState> {

    constructor(props: PlantationContainerProps) {
        super(props);

        console.log('props::', props);

        var storedPlantations = JSON.parse(localStorage.getItem('plantations'));
        if (!storedPlantations) {
            localStorage.setItem('plantations', JSON.stringify([]));
            storedPlantations = [];
        }

        storedPlantations.forEach((p: Plantation) => {

            p.dateStart = moment(p.dateStart);
            p.dateEnd = moment(p.dateStart);

        });

        this.state = {
            plantations: storedPlantations,
            selectedPlantation: undefined
        }

    }

    render() {

        return <div>

            <Route exact path="/"
                component={(params) =>
                    (<PlantationList plantations={this.state.plantations} />)}
            />
            <Route exact path="/plantations"
                component={(params) =>
                    (<PlantationList plantations={this.state.plantations} />)}
            />
            <Route exact path="/plantation/:id"
                component={(params) => {
                    return this.viewPlantation(params);
                }}
            />

            <Route path='/new/plantation'
                component={(params) => {

                    var newPlantation = new Plantation();

                    return <PlantationProfile
                        plantation={newPlantation}
                        canHarvest={false}
                        onSubmit={(p: Plantation) => { this.addPlantation(p) }} />

                }}
            />

        </div>

    }

    addPlantation(plantation: Plantation) {
        console.log('adding', plantation);

        var plantations = this.state.plantations.concat(plantation);
        this.setState({ plantations: plantations });
        localStorage.setItem('plantations', JSON.stringify(plantations));

    }

    updatePlantation(plantation: Plantation) {
        console.log('updating', plantation);

        var plantations = this.state.plantations.map((p, i) => {

            if (p.id == plantation.id)
                p = plantation;

            return p;

        });
        this.setState({ plantations: plantations });

        localStorage.setItem('plantations', JSON.stringify(plantations));

    }

    viewPlantation(params: any) {

        console.log('match::', params)
        console.log('match.params::', params)

        var id = params.match.params.id;

        var plantation;
        this.state.plantations.some(item => {

            if (item.id == id) {
                plantation = item;
                return true;
            }

        });

        return <PlantationProfile plantation={plantation}
            canHarvest={true}
            onSubmit={(p: Plantation) => { this.updatePlantation(p) }}
        />

    }

}