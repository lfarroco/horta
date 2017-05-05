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

interface PlantationContainerProps { firebase: any }
interface PlantationContainerState { plantations: any; selectedPlantation: Plantation }

export class PlantationContainer extends React.Component<PlantationContainerProps, PlantationContainerState> {

    snapshot: any;
    plantationsRef: any;

    constructor(props: PlantationContainerProps) {

        super(props);

        this.plantationsRef = this.props.firebase.child('plantations');

        this.state = {
            plantations: [],
            selectedPlantation: undefined
        };

        this.plantationsRef.on('value', (snapshot: any) => {



            var items = snapshot.val();

            console.log(items);

            var aux = [];

            for (var i in items) {

                console.log(items[i])

                aux.push({
                    type: items[i].type,
                    id: items[i].type.key,
                    dateStart: moment(items[i].dateStart),
                    dateEnd: moment(items[i].dateEnd),
                    quantity: items[i].quantity,
                    unit: items[i].unit
                });

            }

            this.setState({
                plantations: aux
            });

        });

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


        //p.dateStart = plantation.dateStart.toUTCString();
        //p.dateEnd = plantation.dateEnd.toUTCString();

        var p = {
            id: plantation.id,
            type: plantation.type,
            dateStart: plantation.dateStart.format(),
            dateEnd: plantation.dateEnd.format(),
            quantity: plantation.quantity,
            unit: plantation.unit

        };

        var plantations = this.state.plantations.concat(plantation);
        this.setState({ plantations: plantations });

        this.plantationsRef.push().set(p);

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