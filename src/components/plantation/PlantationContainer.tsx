import * as React from "react";

import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

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

        this.state = {
            plantations: storedPlantations,
            selectedPlantation: undefined
        }

    }

    render() {

        return <div>

            <Route exact path="/"
                component={(match) =>
                    (<PlantationList plantations={this.state.plantations} />)}
            />
            <Route exact path="/plantations"
                component={(match) =>
                    (<PlantationList plantations={this.state.plantations} />)}
            />
            <Route exact path="/plantation/:id"
                component={(match) => {
                    return this.viewPlantation(match);
                }}
            />


            <Route path='/new/plantation'
                component={(match) => {

                    var newPlantation = new Plantation();

                    return <PlantationProfile plantation={newPlantation}
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

    viewPlantation(match: any) {

        console.log('match::', match)
        console.log('match.params::', match)

        var id = match.match.params.id;

        var plantation;
        this.state.plantations.some(item => {

            if (item.id == id) {
                plantation = item;
                return true;
            }

        });

        return <PlantationProfile plantation={plantation}
            onSubmit={(p: Plantation) => { this.updatePlantation(p) }}
        />

    }

}