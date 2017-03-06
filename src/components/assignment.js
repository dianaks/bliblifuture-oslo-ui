import React from 'react';

var AssignmentNote = 
		<div>
			Total stock opname 2, total Qty 200, SKU 22 terpilih
		</div>;

var AssignmentButton = 
	<div className="btn-group">
		<a className="btn btn-default" type="button" href="#">Assign Stock Opname</a>
	</div>;

export default class Assignment extends React.Component{
	render(){
		return <div className="row">
					<div className="col-sm-10 right-side vertical-middle-text">{AssignmentNote}</div>
					<div className="col-sm-2 right-side">{AssignmentButton}</div>
				</div>
	}
}