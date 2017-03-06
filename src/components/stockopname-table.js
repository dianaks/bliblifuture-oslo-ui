import React from 'react';

export default class StockopnameTable extends React.Component {
  render() {
    return <div>
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
						<td>Detail{this.props.name}</td>
					</tr>
				</tbody>
			</table>
		</div>;
  }
}
