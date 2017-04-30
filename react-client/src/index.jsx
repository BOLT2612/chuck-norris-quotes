import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';
import MySiteTitle from './components/MySiteTitle.jsx';
import QuoteReq from './components/QuoteReq.jsx';
import Topic from './components/Topic.jsx';
import QuoteList from './components/QuoteList.jsx';
import ShowCurrent from './components/ShowCurrent.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      value: 'Initial State'
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
    // var str = '';
    var objData ;
    $.ajax({
      type: 'GET',
      url: '/newquote',
      success: (data) => {
        objData = JSON.parse(data);
        console.log(objData);

        this.setState({value: objData.value});
        console.log("new state = ", this.state.value);
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }

  keepThisQuote() {
    console.log("keepThisQuote called");
    $.ajax({
      type: 'POST',
      url: '/quotes',
      data: { 'quoteToStore': this.state.value },
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
      <h2>Quotes:</h2>
      <ShowCurrent currentquote={this.state.value} keepquotehandler={this.keepThisQuote.bind(this)} />

      <List items={this.state.items} />
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));