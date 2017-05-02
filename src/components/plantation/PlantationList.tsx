import * as React from "react";
import {Table, Column, Cell} from 'fixed-data-table';

import { Plantation } from "./Plantation";
import { PlantationListItem } from "./PlantationListItem";
import { Link } from 'react-router-dom'

interface PlantationListState { plantations: Plantation[]; }
interface PlantationListProps { plantations: Plantation[]; }

export class PlantationList extends React.Component<PlantationListProps, undefined> {


    render() {

        console.log(this.props)

        var plantations = this.props.plantations;
		
		var totalWidth = window.innerWidth-30;
		var colWidth = totalWidth/5;
		
		var aux:any = [];
		
		plantations.forEach((item,index)=>{
			
			aux.push([]);
			
			for(var i in item)
				aux[index].push(item[i])
			
			
		});

            return<div>
			
			 <div className="form-group">
                <Link to="/new/plantation" className="btn btn-success">
                    <span className="glyphicon glyphicon-plus"></span> Adicionar Plantação</Link>
            </div>
			
			 <Table rowHeight={50} rowsCount={aux.length} width={totalWidth} height={500} headerHeight={50}>
			 
<Column header={<Cell>Fim</Cell>} cell={
({rowIndex, ...props}) => ( <Cell {...props}> {aux[rowIndex][1]} </Cell> )
} width={colWidth} />				

<Column header={<Cell>Platando em</Cell>} cell={
({rowIndex, ...props}) => ( <Cell {...props}> { new Date(aux[rowIndex][2]).toISOString().split('T')[0]} </Cell> )
} width={colWidth} />

<Column header={<Cell>Colher em</Cell>} cell={
({rowIndex, ...props}) => ( <Cell {...props}> { new Date(aux[rowIndex][3]).toISOString().split('T')[0]} </Cell> )
} width={colWidth} />					

<Column header={<Cell>Quantidade</Cell>} cell={
({rowIndex, ...props}) => ( <Cell {...props}> {aux[rowIndex][4]} </Cell> )
} width={colWidth} />

<Column header={<Cell>Unidade</Cell>} cell={
({rowIndex, ...props}) => ( <Cell {...props}> {aux[rowIndex][5]} </Cell> )
} width={colWidth} />						

				
										
					
			</Table>
			</div>



    }
}