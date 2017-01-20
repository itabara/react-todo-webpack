let React = require('react');
require('./css/addItem.css');

var AddItem = React.createClass({
  render: function(){
    return (
      <form id="add-todo" onSubmit={this.handleSubmit}>
        <input type='text' required ref="newItem" />
        <input type='submit' value="Save" />
      </form>
    );
  },

  handleSubmit: function(submitEvent){
    submitEvent.preventDefault();
    //console.log(this.refs.newItem.value);
    // pass to parent component
    this.props.onAdd(this.refs.newItem.value);
  }
});

module.exports = AddItem;
