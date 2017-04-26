import * as React from "react";

import { Plantation } from "./Plantation";
import { PlantationListItem } from "./PlantationListItem";
import { Link } from 'react-router-dom'

interface PlantationListState { plantations: Plantation[]; }
interface PlantationListProps { plantations: Plantation[]; }

export class PlantationList extends React.Component<PlantationListProps, undefined> {


    render() {

        console.log(this.props)

        var plantations = this.props.plantations.map((plantation, index) => {

            return <Link key={index}
                to={`plantation/${plantation.id}`}
                className="list-group-item">

                <PlantationListItem
                    plantation={plantation} />

            </Link>


        });

        return <div>

            <div>Minhas Plantações</div>

            <div className="form-group">
                <Link to="/new/plantation" className="btn btn-success">
                    <span className="glyphicon glyphicon-plus"></span> Adicionar Plantação</Link>
            </div>

            <div className="list-group">{plantations}</div></div>;

    }
}