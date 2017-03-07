import React from 'react';

export default class DropdownDataPerPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: '10'};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
    event.preventDefault();
  }

  render() {
    return (
      <form>
      	<div className="form-group">
          <select className="form-control" value={this.state.value} onChange={this.handleChange}>
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
        </div>
      </form>
    );
  }
}
