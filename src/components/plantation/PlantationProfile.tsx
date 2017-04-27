import * as React from "react";

import { Plantation } from "./Plantation";

export interface PlantationProfileProps { plantation: Plantation; onSubmit: any; }
export interface PlantationProfileState { plantation: Plantation; }

import DatePicker from 'react-datepicker';
import * as moment from 'moment';

export class PlantationProfile extends React.Component<PlantationProfileProps, Plantation> {

    constructor(props: PlantationProfileProps) {
        super(props);

        this.state = this.props.plantation;

        console.log(DatePicker);
    }

    render() {

        return <form onSubmit={e => { e.preventDefault(); this.handleSubmit(e) }}>

            <div className="form-group col-sm-12">
                <div className="btn btn-default" onClick={this.back}>
                    <span className="glyphicon glyphicon-chevron-left"></span> Voltar</div>
            </div>

            <div className="form-group col-sm-8">

                <label>Tipo:</label>

                <input type="text" value={this.state.type}
                    name="type"
                    className="form-control"
                    onChange={e => { this.handleInputChange(e) }} />

            </div>

            <div className="form-group col-xs-6">

                <label>Plantado em:</label>

                <DatePicker
                    dateFormat="DD/MM/YYYY"
                    locale="pt-br"
                    className="form-control"
                    selected={this.state.dateStart}
                    onChange={e => { this.handleDateChange(e, 'start') }}
                />

            </div>

            <div className="form-group col-xs-6">

                <label>Colher em:</label>

                <DatePicker
                    dateFormat="DD/MM/YYYY"
                    locale="pt-br"
                    className="form-control"
                    selected={this.state.dateEnd}
                    onChange={e => { this.handleDateChange(e, 'end') }}
                />

            </div>

            <div className="form-group col-xs-6">

                <label>Quantidade:</label>

                <input type="number" value={this.state.quantity}
                    name="quantity"
                    className="form-control"
                    onChange={e => { this.handleInputChange(e) }} />

            </div>


            <div className="form-group col-xs-6">

                <label>Unidade</label>

                <input type="text" value={this.state.unit}
                    name="unit"
                    className="form-control"
                    onChange={e => { this.handleInputChange(e) }} />

            </div>


            <input type="submit" value="Salvar" className="btn btn-info" />


        </form>

    }

    back() {
        window.history.back();
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

        window.history.back();

    }

    handleDateChange(date: any, type: string) {

        console.log(date);

        if (type == 'start')
            this.setState({
                dateStart: date
            });
        else
            this.setState({
                dateEnd: date
            });

    }
}