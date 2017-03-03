import React from 'react';
import ReactDOM from 'react-dom';

//import table from './stockopname-table.js';

var BreadChrumb = 
	<ol className="breadcrumb">
	  <li className="breadcrumb-item"><a href="#">Home</a></li>
	  <li className="breadcrumb-item"><a href="#">Library</a></li>
	  <li className="breadcrumb-item active">Data</li>
	</ol>;

var DropdownProfile = 
	<div className="btn-group">
	  <button type="button" className="btn btn-default">hadisetiawan</button>
	  <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
	    <span className="caret"></span>
	    <span className="sr-only">Toggle Dropdown</span>
	  </button>
	  <ul className="dropdown-menu">
	    <li><a href="#">Ganti Warehouse</a></li>
	    <li><a href="#">Logout</a></li>
	    <li role="separator" className="divider"></li>
	    <li><a href="#">Separated link</a></li>
	  </ul>
	</div>;

var Header =
		<h1>Stockopname</h1>;
var UpdateButton =
	<div className="btn-group">
		<button className="btn btn-default" type="button">Perbaharui Data</button>
	</div>;

var DropdownDataPerPage = 
	<div className="btn-group">
	  <button type="button" className="btn btn-default">10</button>
	  <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
	    <span className="caret"></span>
	    <span className="sr-only">Toggle Dropdown</span>
	  </button>
	  <ul className="dropdown-menu">
	    <li><a href="#">10</a></li>
	    <li><a href="#">25</a></li>
	    <li><a href="#">50</a></li>
	    <li><a href="#">100</a></li>
	    <li role="separator" className="divider"></li>
	    <li><a href="#">Separated link</a></li>
	  </ul>
	</div>;

var DatePicker = 
<div>
		<label for="new-url" class="col-sm-2 control-label inline">End Date</label>
		<div class="col-sm-4">
			<p className="input-group inline">
			    <input className="form-control inline" type="datetime-local" value="2011-08-19T13:45:00" id="example-datetime-local-input"/>
			</p>
		</div></div>;

var DatePickerLabel =
	<span><b>Date</b></span>;
var DataPerPageLabel =
	<span><b>Data Perhalaman</b></span>;

var StockopnameTable = 
	<div>
		<table className="table">
			<thead>
				<tr>
					<th></th>
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
					<td>
						<div class="input-group">
					      <span class="input-group-addon">
					        <input type="checkbox" aria-label="..."/>
					      </span>
					    </div>
					</td>
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
		  <ul className="pagination">
		    <li className="disabled"><a href="#" aria-label="Previous"><span aria-hidden="true">&laquo;</span></a></li>
		    <li className="active"><a href="#">1 <span className="sr-only">(current)</span></a></li>
		    <li><a href="#">2</a></li>
		    <li><a href="#">3</a></li>
		    <li><a href="#">4</a></li>
		    <li><a href="#">5</a></li>
		    <li><a href="#" aria-label="Next"><span aria-hidden="true">&raquo;</span></a></li>
		  </ul>
		</nav>;

	var AssignmentNote = 
		<div>
			Total stock opname 2, total Qty 200, SKU 22 terpilih
		</div>;

	var AssignmentButton = 
		<div className="btn-group">
			<button className="btn btn-default" type="button">Assign Stock Opname</button>
		</div>;

	var AdminStockopnamePage =
		<div>
			<div className="row">
				<div className="col-sm-9">{BreadChrumb}</div>
				<div className="col-sm-3">{DropdownProfile}</div>
			</div>
			{Header}
			<div className="row">
				<div className="col-sm-6">{UpdateButton}</div>
				<div className="col-sm-1">{DatePickerLabel}</div>
				<div className="col-sm-2">{DatePicker}</div>
				<div className="col-sm-2">{DataPerPageLabel}</div>
				<div className="col-sm-1">{DropdownDataPerPage}</div>
			</div>

			{StockopnameTable}
			<div clasName="right-side">{Pagination}</div>
			<div className="row">
				<div className="col-sm-10 right-side">{AssignmentNote}</div>
				<div className="col-sm-2 right-side">{AssignmentButton}</div>
			</div>
			
		</div>;

ReactDOM.render(
 AdminStockopnamePage,
  document.getElementById('root')
);