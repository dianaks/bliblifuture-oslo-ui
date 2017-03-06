import React from 'react';
import ReactDOM from 'react-dom';

import Breadchrumb from './components/breadchrumb.js'
import DropdownProfile from './components/dropdown-profile.js'
import DropdownDataPerPage from './components/dropdown-dataperpage.js'
import DatePicker from './components/date-picker.js'
import Pagination from './components/pagination.js'
import PageTitle from './components/page-title.js'
import ButtonUpdate from './components/button-update.js'
import Assignment from './components/assignment.js'
import StockopnameTable from './components/stockopname-table.js';

var AdminStockopnamePage =
		<div>
			<div className="row">
				<div className="col-sm-10"><Breadchrumb/></div>
				<div className="col-sm-2 right-side"><DropdownProfile/></div>
			</div>
			<PageTitle/>
			<div className="row btn-line">
				<div className="col-sm-5"><ButtonUpdate/></div>
				<DatePicker/><DropdownDataPerPage/>
			</div>
			<StockopnameTable/>
			<div className="right-side"><Pagination/></div>
			<Assignment/>
		</div>;

ReactDOM.render(
	AdminStockopnamePage,
  	document.getElementById('root')
);
