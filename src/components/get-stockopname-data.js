import React from 'react';

var data = require('../../public/data.json');


export default class GetStockopnameData extends React.Component{
	render() {
    var rows = [];
    data.stockopname.forEach(function(stockopname) {
      rows.push(<DataRow stockopname={stockopname} key={stockopname.Id}/>);
    });
    return (
        <tbody>{rows}</tbody>
    );
}}

function Selection(){
	return <div className="input-group">
		      <span className="input-group-addon">
		        <input type="checkbox" aria-label="..."/>
		      </span>
		    </div>;
}

function Detail(){
	return <a href="#">Detail</a>;
}


class DataRow extends React.Component {
  render() {
    var obj = this.props.stockopname;
    console.log(obj);
    return (
      <tr>
      	<td>{Selection()}</td>
        <td>{obj.Id}</td>
        <td>{obj.counter}</td>
        <td>{obj.status}</td>
        <td>{obj.createdTime}</td>
        <td>{obj.totalSKU}</td>
        <td>{obj.totalQty}</td>
        <td>{Detail()}</td>
      </tr>
    );
  }
}


	
	
	
	

	

	

