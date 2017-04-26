import * as React from "react";
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

import * as ReactDOM from "react-dom";


export class Navbar extends React.Component<undefined, undefined> {

    render() {
        return <nav className="navbar navbar-default">
            <div className="container-fluid">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand" href="#">Project name</a>
                </div>
                <div id="navbar" className="navbar-collapse collapse">
                    <ul className="nav navbar-nav">

                        <li className="dropdown">

                            <a href="#" className="dropdown-toggle"
                                data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><span className="glyphicon glyphicon-leaf" aria-hidden="true"></span> Plantações<span className="caret"></span></a>

                            <ul className="dropdown-menu">

                                <li><Link to="/plantations">
                                    <span className="glyphicon glyphicon-leaf" aria-hidden="true"></span> Minhas Plantações</Link></li>
                                <li><Link to="/new/plantation">
                                    <span className="glyphicon glyphicon-plus" aria-hidden="true"></span> Adicionar Plantação</Link></li>

                            </ul>

                        </li>
                        <li><Link to="/harvests"><span className="glyphicon glyphicon-box" aria-hidden="true"></span>  Colheitas</Link></li>


                    </ul>
                    <ul className="nav navbar-nav navbar-right">
                        <li className="active"><a href="./">Default <span className="sr-only">(current)</span></a></li>
                        <li><a href="../navbar-static-top/">Static top</a></li>
                        <li><a href="../navbar-fixed-top/">Fixed top</a></li>
                    </ul>
                </div>
            </div>
        </nav>;
    }

}

