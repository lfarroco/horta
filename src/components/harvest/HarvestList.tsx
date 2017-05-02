import * as React from "react";

import { Harvest } from "./Harvest";
import { HarvestListItem } from "./HarvestListItem";
import { Link } from 'react-router-dom'

interface HarvestListState { harvests: Harvest[]; }
interface HarvestListProps { harvests: Harvest[]; }

export class HarvestList extends React.Component<HarvestListProps, undefined> {


    render() {

        console.log(this.props)

        var Harvests = this.props.harvests.map((harvest, index) => {

            return <Link key={index}
                to={`harvest/${harvest.id}`}
                className="list-group-item">

                <HarvestListItem
                    harvest={harvest} />

            </Link>


        });

        return <div>

            <div>Minhas Colheitas</div>

            <div className="form-group">
                <Link to="/new/harvest" className="btn btn-success">
                    <span className="glyphicon glyphicon-plus"></span> Adicionar Plantação</Link>
            </div>

            <div className="list-group">{Harvests}</div></div>;

    }
}