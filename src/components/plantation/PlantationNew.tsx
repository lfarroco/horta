import * as React from "react";

import { Plantation } from "./Plantation";

export interface PlantationNewProps { match: any; onSubmit: any; }

export class PlantationNew extends React.Component<PlantationNewProps, Plantation> {

    props: PlantationNewProps;

    constructor(props: PlantationNewProps) {

        super(props);

        this.state = {

            id: Date.now() + '',
            dateEnd: '',
            dateStart: '',
            quantity: 1,
            type: '',
            unit: ''

        };

        //this.handleInputChange = this.handleInputChange.bind(this);
        //this.handleSubmit = this.handleSubmit.bind(this);

    }
    render() {

        return (
            <form onSubmit={e => { this.handleSubmit(e) }}>

                <div className="form-group col-sm-8">

                    <label>Tipo:</label>

                    <input type="text" value={this.state.type}
                        name="type"
                        className="form-control"
                        onChange={e => { this.handleInputChange(e) }} />

                </div>

                <div className="form-group col-sm-8">

                    <label>Quantidade:</label>

                    <input type="number" value={this.state.quantity}
                        name="quantity"
                        className="form-control"
                        onChange={e => { this.handleInputChange(e) }} />

                </div>

                <div className="form-group col-sm-8">

                    <label>Plantado em:</label>

                    <input type="text" value={this.state.dateStart}
                        name="dateStart"
                        className="form-control"
                        onChange={e => { this.handleInputChange(e) }} />

                </div>

                <div className="form-group col-sm-8">

                    <label>Colher em:</label>

                    <input type="date" value={this.state.dateEnd}
                        name="dateEnd"
                        className="form-control"
                        onChange={e => { this.handleInputChange(e) }} />

                </div>

                <div className="form-group col-sm-8">

                    <label>Unidade</label>

                    <input type="text" value={this.state.unit}
                        name="unit"
                        className="form-control"
                        onChange={e => { this.handleInputChange(e) }} />

                </div>



                <input type="submit" value="Submit" className="btn btn-info" />


            </form>
        );

    }

    handleInputChange(event: any) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event: any) {
        console.log('submitted: ', this.state);
        this.props.onSubmit(this.state);
        event.preventDefault();
    }


}

