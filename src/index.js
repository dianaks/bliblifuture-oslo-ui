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
	  <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
	    hadisetyawan <span className="caret"></span>
	  </button>
	  <ul className="dropdown-menu">
	    <li><a href="#">Ganti Warehouse</a></li>
	    <li><a href="#">Logout</a></li>
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
	  <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
	    10 <span className="caret"></span>
	  </button>
	  <ul className="dropdown-menu">
	    <li><a href="#">10</a></li>
	    <li><a href="#">25</a></li>
	    <li><a href="#">50</a></li>
	    <li><a href="#">100</a></li>
	  </ul>
	</div>;	

var DatePicker = 
	<div>
	    <p className="input-group">
	       <input type="text" className="form-control" datetime-picker="dd-MM-yyyy hh:mm" ng-model="dates.startdate" is-open="open.date" enable-time="false" />
	      <span className="input-group-btn">
	          <button type="button" className="btn btn-default"><i className="glyphicon glyphicon-calendar"></i></button>
	      </span>
	  </p>
	  <p className="bg-warning" ng-bind="dates.startdate | date:'EEEE, dd-MM-yyyy hh:mm'"></p>
	</div>;

var DatePickerLabel =
	<span><b>Tanggal Pembuatan</b></span>;
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
					<td></td>
					<td>
						<div className="input-group">
					      <input type="text" className="form-control" placeholder="Cari Storage Code"/>
					    </div>
					</td>
					<td>
						<div className="input-group">
					      <input type="text" className="form-control" placeholder="Cari Counter"/>
					    </div>
					</td>
					<td>
						<div className="btn-group">
						  <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
						    Semua <span className="caret"></span>
						  </button>
						  <ul className="dropdown-menu">
						    <li><a href="#">Open</a></li>
						    <li><a href="#">Assigned</a></li>
						    <li><a href="#">In Progress</a></li>
						  </ul>
						</div>
					</td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
				</tr>
				<tr>
					<td>
						<div className="input-group">
					      <span className="input-group-addon">
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
		<nav aria-label="..." className="right-side">
		  <ul className="pagination">
		    <li className="disabled"><a href="#" aria-label="Previous"><span aria-hidden="true">&laquo;</span></a></li>
		    <li><a href="#">First</a></li>
		    <li className="active"><a href="#">1 <span className="sr-only">(current)</span></a></li>
		    <li><a href="#">2</a></li>
		    <li><a href="#">3</a></li>
		    <li><a href="#">4</a></li>
		    <li><a href="#">5</a></li>
		    <li><a href="#">Last</a></li>
		    <li><a href="#" aria-label="Next"><span aria-hidden="true">&raquo;</span></a></li>
		  </ul>
		</nav>;

	var AssignmentNote = 
		<div>
			Total stock opname 2, total Qty 200, SKU 22 terpilih
		</div>;

	var AssignmentButton = 
		<div className="btn-group">
			<a className="btn btn-default" type="button" href="#">Assign Stock Opname</a>
		</div>;

	var AdminStockopnamePage =
		<div>
			<div className="row">
				<div className="col-sm-10">{BreadChrumb}</div>
				<div className="col-sm-2 right-side">{DropdownProfile}</div>
			</div>
			{Header}
			<div className="row btn-line">
				<div className="col-sm-5">{UpdateButton}</div>
				<div className="col-sm-2 vertical-middle-text right-side">{DatePickerLabel}</div>
				<div className="col-sm-2 clean-padding">{DatePicker}</div>
				<div className="col-sm-2 vertical-middle-text right-side">{DataPerPageLabel}</div>
				<div className="col-sm-1 clean-padding">{DropdownDataPerPage}</div>
			</div>

			{StockopnameTable}
			<div className="right-side">{Pagination}</div>
			<div className="row">
				<div className="col-sm-10 right-side vertical-middle-text">{AssignmentNote}</div>
				<div className="col-sm-2 right-side">{AssignmentButton}</div>
			</div>
			
		</div>;

ReactDOM.render(
 AdminStockopnamePage,
  document.getElementById('root')
);