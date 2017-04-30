import React from 'react';
import ListItem from './ListItem.jsx';

const QuoteList = (props) => (
  <div>
    <h4> QuoteList Component </h4>
    There are { props.items.length } quotes related to { props.topic }.
    { props.items.map(item => <QuoteItem item={item}/>)}
  </div>
)

export default QuoteList;