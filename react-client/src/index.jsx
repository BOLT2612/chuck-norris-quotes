import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';
import TrekTitle from './components/TrekTitle.jsx';
import Topic from './components/Topic.jsx';
import QuoteList from './components/QuoteList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      items: []
    }
  }

  componentDidMount() {
    $.ajax({
      url: '/items', 
      success: (data) => {
        this.setState({
          items: data
        })
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }

  bringTheQuotes(userTopic) {
    $.ajax({
      url: '/items', 
      success: (data) => {
        this.setState({
          items: data
        })
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }

  render () {
    return (<div>
      <TrekTitle awesometitle="Get Your Star Trek Quotes Here" />
      <Topic />
      <h1>Quotes:</h1>
      <QuoteList items={this.state.items} />
      <List items={this.state.items} />
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));