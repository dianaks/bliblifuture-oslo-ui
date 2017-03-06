import React from 'react';

export default class DropdownProfile extends React.Component{
	render(){
		return <div className="btn-group">
				  <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
				    hadisetyawan <span className="caret"></span>
				  </button>
				  <ul className="dropdown-menu">
				    <li><a href="#">Ganti Warehouse</a></li>
				    <li><a href="#">Logout</a></li>
				  </ul>
				</div>;
	}	
}