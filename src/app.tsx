import * as React from "react";
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

import * as ReactDOM from "react-dom";

import { Navbar } from "./Navbar";

import { PlantationContainer } from "./components/plantation/PlantationContainer";

import { HarvestContainer } from "./components/harvest/HarvestContainer";

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
					
					<HarvestContainer />					

				</div>
				
			</div>

        </Router>;
    }

}

