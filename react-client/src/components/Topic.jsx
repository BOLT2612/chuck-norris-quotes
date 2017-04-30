import React from 'react';

class Topic extends React.Component {
	constructor(props) {
		super(props);

		this.state = {value: ''};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({ value: event.target.value });
	}

	handleSubmit(event, props) {
    console.log('\'Topic\' component submitted : ' + this.state.value);
    //console.log('props = ', this.props)
    event.preventDefault();
    this.props.quotereqhandler(this.state.value);
    this.setState({value: ''});
  }

	render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Topic:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="click me!" />
      </form>
    );
  }
}

export default Topic;
