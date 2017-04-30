import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';
import MySiteTitle from './components/MySiteTitle.jsx';
import QuoteReq from './components/QuoteReq.jsx';
import Topic from './components/Topic.jsx';
import QuoteList from './components/QuoteList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      items: []
    }
  }

  bringTheQuotes(userTopic) {
    console.log("bringTheQuotes called, userTopic = ", userTopic);
    var str = '';
    $.ajax({
      type: 'POST',
      url: '/quotes',
      //contentType: 'application/json',

      data: { 'userTopic': userTopic },
      success: (data) => {
        console.log(data)
        // res.on('data', function (chunk) {
        //   str += chunk;
        // });
        // .on('end', () => {
        //   console.log(str);
        //   console.log('received response from POST req to /quotes: ');
        // });
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }

  bringNewQuote() {
    console.log("bringNewQuote called");
    var str = '';
    $.ajax({
      type: 'GET',
      url: '/newquote',
      //contentType: 'application/json',

      //data: { 'userTopic': userTopic },
      success: (data) => {
        console.log(data)
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }

  render () {
    return (<div>
      <MySiteTitle awesometitle="Get Your Chuck Norris Quotes Here" />
      <QuoteReq newreqhandler={this.bringNewQuote.bind(this)} />
      <h1>Quotes:</h1>
      <QuoteList items={this.state.items} />
      <List items={this.state.items} />
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));