import React from 'react';
import ReactDOM from 'react-dom';

//import table from './stockopname-table.js';

var Header =
		<h1>Stockopname</h1>;
var UpdateButton =
	<button>Perbaharui Data</button>;

var BreadChrumb = 
	<ol className="breadcrumb">
	  <li className="breadcrumb-item"><a href="#">Home</a></li>
	  <li className="breadcrumb-item"><a href="#">Library</a></li>
	  <li className="breadcrumb-item active">Data</li>
	</ol>;

var DropdownProfile = 
	<div className="dropdown">
	  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
	    Dropdown button
	  </button>
	  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
	    <a className="dropdown-item" href="#">hadisetiawan</a>
	    <a className="dropdown-item" href="#">ganti gudang</a>
	    <a className="dropdown-item" href="#">keluar</a>
	  </div>
	</div>;

var DropdownDataPerPage = 
	<div className="dropdown">
	  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
	    Dropdown button
	  </button>
	  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
	    <a className="dropdown-item" href="#">10</a>
	    <a className="dropdown-item" href="#">25</a>
	    <a className="dropdown-item" href="#">50</a>
	    <a className="dropdown-item" href="#">100</a>
	  </div>
    </div>;

var DatePicker = 
	<div className="form-group row">
	  <label for="example-datetime-local-input" class="col-2 col-form-label">Date and time</label>
	  <div className="col-10">
	    <input className="form-control" type="datetime-local" value="2011-08-19T13:45:00" id="example-datetime-local-input"/>
	  </div>
	</div>;

var StockopnameTable = 
	<div>
		<table className="table">
			<thead>
				<tr>
					<th>Stock Opname No.</th>
					<th>Counter</th>
					<th>Status</th>
					<th>Waktu Pembuatan</th>
					<th>Total Qty</th>
					<th>SKU</th>
					<th></th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>STO/WAB-000012/XI-2016/0005</td>
					<td> - </td>
					<td>Open</td>
					<td>11/06/2016</td>
					<td>100</td>
					<td>11</td>
					<td>Detail</td>
				</tr>
			</tbody>
		</table>
	</div>;

	var Pagination = 
		<nav aria-label="...">
		  <ul class="pagination">
		    <li class="disabled"><a href="#" aria-label="Previous"><span aria-hidden="true">&laquo;</span></a></li>
		    <li class="active"><a href="#">1 <span class="sr-only">(current)</span></a></li>
		    ...
		  </ul>
		</nav>;

	var AssignmentNote = 
		<div>
			Total stock opname 2, total Qty 200, SKU 22 terpilih
		</div>;

	var AssignmentButton = 
		<button>Assign Stock Opname</button>;

	var AdminStockopnamePage =
		<div>
			<div>
				{BreadChrumb}
			</div>
			{Header}{DropdownProfile}
			{UpdateButton}{DatePicker}{DropdownDataPerPage}
			{StockopnameTable}
			{Pagination}
			{AssignmentNote}{AssignmentButton}
		</div>;

ReactDOM.render(
 AdminStockopnamePage,
  document.getElementById('root')
);