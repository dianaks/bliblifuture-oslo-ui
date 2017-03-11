import React from 'react';

import Breadchrumb from './breadchrumb.js'
import DropdownProfile from './dropdown-profile.js'
import DropdownDataPerPage from './dropdown-dataperpage.js'
import DatePicker from './date-picker.js'
import Pagination from './pagination.js'
import PageTitle from './page-title.js'
import ButtonUpdate from './button-update.js'
import Assignment from './assignment.js'
import StockopnameTable from './stockopname-table.js'

export default class AdminStockopnamePage extends React.Component{
	constructor(props) {
		super(props);

		this.state = {
			currentWarehouse: ""
		};
	}

	componentDidMount() {
	    fetch('http://localhost:8080')
	      .then((response) => response.json())
	      .then((responseJson) => {
	        this.setState({currentWarehouse: responseJson.nama})
	      })
	      .catch((error) => {
	        console.error(error);
	      });
	}

	render(){
		return(<div>
				<div className="row">
					<div className="col-sm-10"><Breadchrumb/></div>
					<div className="col-sm-2 right-side"><DropdownProfile/></div>
				</div>
				<PageTitle/>
				<div className="row btn-line">
					<div className="col-sm-5"><ButtonUpdate/></div>
					<DatePicker/>
					<div className="col-sm-2 right-side vertical-middle-text"><b>Data Perhalaman</b></div>
					<div className="col-sm-1 right-side"><DropdownDataPerPage/></div>
				</div>
				<StockopnameTable/>
				<div className="right-side"><Pagination/></div>
				<Assignment/>
				<h1>{this.state.currentWarehouse}</h1>
			</div>);
	}}

