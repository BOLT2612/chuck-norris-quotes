import React from 'react';

class ShowCurrent extends React.Component {
	constructor(props) {
		super(props);
    this.handleClick = this.handleClick.bind(this);
	}

  handleClick(event) {
    console.log('\'ShowCurrent\' component submitted : ' + this.props.currentquote + ' for storing.');
    //console.log('props = ', this.props)
    event.preventDefault();
    this.props.keepquotehandler();
    //this.setState({value: ''});
  }

	render() {
    return (
      <div>
        <p>{this.props.currentquote}</p>
        <button onClick={this.handleClick}>Keep It!</button>
      </div>
    );
  }
}

export default ShowCurrent;
