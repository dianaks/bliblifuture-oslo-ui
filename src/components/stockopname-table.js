import React from 'react';

import GetStockopnameData from './get-stockopname-data.js'

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
				
					<tr>
						<td>
							<div className="input-group">
						      <span className="input-group-addon">
						        <input type="checkbox" aria-label="..."/>
						      </span>
						    </div>
						</td>
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
				</thead>
				<GetStockopnameData/>
			</table>
		</div>;
  }
}
