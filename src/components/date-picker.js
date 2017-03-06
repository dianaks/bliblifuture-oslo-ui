import React from 'react';

var Label =
	<span><b>Tanggal Pembuatan</b></span>;
var DP =
	<div>
	    <p className="input-group">
	       <input type="text" className="form-control" datetime-picker="dd-MM-yyyy hh:mm" ng-model="dates.startdate" is-open="open.date" enable-time="false" />
	      <span className="input-group-btn">
	          <button type="button" className="btn btn-default"><i className="glyphicon glyphicon-calendar"></i></button>
	      </span>
	  	</p>
	  	<p className="bg-warning" ng-bind="dates.startdate | date:'EEEE, dd-MM-yyyy hh:mm'"></p>
	</div>;


export default class DatePicker extends React.Component{
	render(){
		return <div>
					<div className="col-sm-2 vertical-middle-text right-side">{Label}</div>
					<div className="col-sm-2 clean-padding">{DP}</div>
				</div>	
	}
}