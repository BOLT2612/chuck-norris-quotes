import React from 'react';
import ListItem from './ListItem.jsx';

const List = (props) => (
  <div>
    <h4> Saved Quotes: </h4>
    {props.items.map(
    	(item, idx) => <ListItem quote={item.value} key={idx}/>
    	)}
  </div>
)

export default List;