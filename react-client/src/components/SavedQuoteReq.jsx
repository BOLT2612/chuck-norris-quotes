import React from 'react';

class SavedQuoteReq extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
    return (
      //<button onClick={this.handleClick}>
      <button onClick={this.props.savedreqhandler}>Get Saved Quotes
      </button>
    );
  }
}

export default SavedQuoteReq;
