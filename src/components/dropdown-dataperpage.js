import React from 'react';

var Label =
	<span><b>Data Perhalaman</b></span>;
var Dropdown =
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

export default class DropdownDataPerPage extends React.Component{
	render(){
		return <div>
					<div className="col-sm-2 vertical-middle-text right-side">{Label}</div>
					<div className="col-sm-1 clean-padding">{Dropdown}</div>
				</div>;
	}
}