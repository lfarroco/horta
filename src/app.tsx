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


interface AppState { firebase: any }

export class App extends React.Component<undefined, AppState> {

    constructor(props: any) {

        super(props);

        // Initialize Firebase
        var config = {
            apiKey: "AIzaSyAGP4c16zxmPcrQXZET3dGJWd0ka3hXnNk",
            authDomain: "horta-6ff87.firebaseapp.com",
            databaseURL: "https://horta-6ff87.firebaseio.com",
            projectId: "horta-6ff87",
            storageBucket: "horta-6ff87.appspot.com",
            messagingSenderId: "40630372356"
        };
        var firebaseApp = firebase.initializeApp(config);

        console.log(firebase);
        console.log(firebaseApp);

        var database = firebaseApp.database();

        // Create a storage reference from our storage service
        var storageRef = database.ref();

        this.state = {
            firebase: storageRef
        };


    }

    render() {
        return <Router>

            <div>

                <Navbar />

                <div className="container">

                    <PlantationContainer firebase={this.state.firebase} />

                    <HarvestContainer firebase={this.state.firebase} />

                </div>

            </div>

        </Router>;
    }

}

