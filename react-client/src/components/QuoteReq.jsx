import React from 'react';

class QuoteReq extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
    return (
      //<button onClick={this.handleClick}>
      <button onClick={this.props.newreqhandler}>Get New Quotes
      </button>
    );
  }
}

export default QuoteReq;
