let React = require('react');
require('./css/todoitem.css');

// create TodoItem component
let TodoItem = React.createClass({
  render: function(){
    return(
      <li>
        <div className="todo-item">
          <span className="item-name">{this.props.item}</span>
          <span className="item-delete" onClick={this.handleDelete}> x </span>
        </div>
      </li>
    );
  }, // render

  // Custom functions
  handleDelete: function(){
    // pass the event to parent component to delete the item from the state
    this.props.onDelete(this.props.item);
  }
});

module.exports = TodoItem;
