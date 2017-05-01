import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';
import MySiteTitle from './components/MySiteTitle.jsx';
import QuoteReq from './components/QuoteReq.jsx';
import Topic from './components/Topic.jsx';
import QuoteList from './components/QuoteList.jsx';
import ShowCurrent from './components/ShowCurrent.jsx';
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
    id: 'xuIKQFakSIiNX-8oOFqdLQ',
    url: 'http://api.chucknorris.io/jokes/xuIKQFakSIiNX-8oOFqdLQ',
    value: 'You know when you have that feeling that you\'ve seen all of this before....... That\'s just your life flashing before your eyes after chuck Norris roundhouse kicked you in the face.' },
  { icon_url: 'https://assets.chucknorris.host/img/avatar/chuck-norris.png',
    id: 'OpUSVJvcRAWWej1HuZSRrw',
    url: 'http://api.chucknorris.io/jokes/OpUSVJvcRAWWej1HuZSRrw',
    value: 'When Chuck Norris finishes watching a useless 1 hour movie, he can get his 1 hour back.' } ];



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      newQuote: {value: 'Initial State'},
      savedQuotes: []
    }
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

        this.setState({newQuote: objData});
        console.log("new quote = ", this.state.newQuote.value);
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
      data: this.state.newQuote,
      success: (data) => {
        console.log('We had success: ', data);
       
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }

  bringSavedQuotes() {
    console.log("bringSavedQuotes called");
    var arrOfObjData;
    $.ajax({
      type: 'GET',
      url: '/quotes',
      success: (data) => {
        arrOfObjData = JSON.parse(data);
        console.log("bringSavedQuotes success: ", arrOfObjData);
        this.setState({savedQuotes: arrOfObjData});
      },
      error: (err) => {
        console.log('bringSavedQuotes err: ', err);
      }
    });
  }

  render () {
    return (<div>
      <MySiteTitle awesometitle="Get Your Chuck Norris Quotes Here" />
      <QuoteReq newreqhandler={this.bringNewQuote.bind(this)} />
      <ShowCurrent currentquote={this.state.newQuote.value} keepquotehandler={this.keepThisQuote.bind(this)} />
      <SavedQuoteReq savedreqhandler={this.bringSavedQuotes.bind(this)} />
      <List items={this.state.savedQuotes} />

      
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));