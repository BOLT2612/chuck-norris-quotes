import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';
import MySiteTitle from './components/MySiteTitle.jsx';
import QuoteReq from './components/QuoteReq.jsx';
import Topic from './components/Topic.jsx';
import QuoteList from './components/QuoteList.jsx';
import ShowCurrent from './components/ShowCurrent.jsx';
<<<<<<< HEAD
import SavedQuoteReq from './components/SavedQuoteReq.jsx';

var items = [ 
  { icon_url: 'https://assets.chucknorris.host/img/avatar/chuck-norris.png',
    id: 'PKKZAq9iSDW3NRomAH6bXg',
    url: 'http://api.chucknorris.io/jokes/PKKZAq9iSDW3NRomAH6bXg',
    value: 'Every morning Chuck Norris gets up and pisses excellence.' },
  { icon_url: 'https://assets.chucknorris.host/img/avatar/chuck-norris.png',
    id: 'SmLJfAqMT7SNugtBSPOmjA',
    url: 'http://api.chucknorris.io/jokes/SmLJfAqMT7SNugtBSPOmjA',
    value: 'Chuck Norris made a bath take a shower.' },
  { icon_url: 'https://assets.chucknorris.host/img/avatar/chuck-norris.png',
    id: 'JBoIfOe0TQawNbmLnbJrJg',
    url: 'http://api.chucknorris.io/jokes/JBoIfOe0TQawNbmLnbJrJg',
    value: 'Hurricans, tornados, etc are caused by chuck norris roundhouse kicking the wind.' },
  { icon_url: 'https://assets.chucknorris.host/img/avatar/chuck-norris.png',
    id: 'izjeqnjzteeqms8l8xgdhw',
    url: 'http://api.chucknorris.io/jokes/izjeqnjzteeqms8l8xgdhw',
    value: 'Chuck Norris knows the last digit of pi.' },
  { icon_url: 'https://assets.chucknorris.host/img/avatar/chuck-norris.png',
    id: 'OpUSVJvcRAWWej1HuZSRrw',
    url: 'http://api.chucknorris.io/jokes/OpUSVJvcRAWWej1HuZSRrw',
    value: 'When Chuck Norris finishes watching a useless 1 hour movie, he can get his 1 hour back.' } ];


=======
>>>>>>> parent of 439a7f6... Updated _PRESS-RELEASE.md

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

<<<<<<< HEAD
=======
      <List items={this.state.items} />
>>>>>>> parent of 439a7f6... Updated _PRESS-RELEASE.md
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));