import React from 'react';

var UpdateButton =
		<button className="btn btn-default" type="button">Perbaharui Data</button>;

export default class ButtonUpdate extends React.Component{
	render(){
		return <div className="btn-group">{UpdateButton}</div>	
	}
}