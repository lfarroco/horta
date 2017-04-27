import * as React from "react";
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

import * as ReactDOM from "react-dom";

import { Navbar } from "./Navbar";

import { PlantationContainer } from "./components/plantation/PlantationContainer";

import { HarvestList } from "./components/harvest/HarvestList";

export class App extends React.Component<undefined, undefined> {

    constructor(props: any) {

        super(props);

    }

    render() {
        return <Router>
		
			<div>

				<Navbar />

				<div className="container">

					<PlantationContainer />

					<Route path="/harvests" component={HarvestList} />

				</div>
				
			</div>

        </Router>;
    }

}

