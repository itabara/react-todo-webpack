let React = require('react');
let ReactDom = require('react-dom');

import {Router, Route, browserHistory, Link} from 'react-router';

require('./css/index.css');

// module requires
var TodoItem = require('./todoitem');
var AddItem = require('./additem');
var About = require('./about');

var App = React.createClass({
  render: function(){
      return(
        <Router history={browserHistory}>
          <Route path={'/'} component={TodoComponent}></Route>
          <Route path={'/about'} component={About}></Route>
        </Router>
      );
  }
});

// create component
var TodoComponent = React.createClass({
  getInitialState: function(){
    return {
      todos: [
        "wash up",
        "eat some cheese",
        "take a nap",
        "take a shower"
      ],
      age:30
    }
  },

  render: function(){
    var myData = this.state.todos;
    myData = myData.map(function(item, index){
      return(
        <TodoItem item={item} key={index} onDelete={this.onDelete}/>
      );
    }.bind(this));

    // this must to be binded to component (bind(this)) instead of setTimeout function
    var ager = setTimeout(function(){
      this.setState({
        age: 40
      });
    }.bind(this), 5000);
    return(
      <div id="todo-list">
        <h1>Todo's List</h1>

        <Link to={'/about'}>About</Link>
        {/*
          <p>Hello</p>
          <p>{this.props.message}</p>
          <p><strong>Age: </strong>{this.state.age}</p>

          <p><strong>Cheese name: </strong>{this.props.cheese.name}</p>
          <p><strong>Smell Factor: </strong>{this.props.cheese.smellFactor}</p>
          <p><strong>Price: </strong>{this.props.cheese.price}</p>
          <hr/>
          <p onClick={this.clicked}>Click here</p>
        */}

        <ul>
          {myData}
          <AddItem onAdd={this.onAddItem}/>
        </ul>
      </div>
    );
  }, // render

  // custom functions
  clicked:function(){
    console.log('You clicked me');
  },

  onAddItem: function(item){
    var updatedTodos = this.state.todos;
    updatedTodos.push(item);
    this.setState({
      todos: updatedTodos
    });
  },

  onDelete: function(item){
    var updatedTodos = this.state.todos.filter(function(val, index){
      return item != val;
    });
    this.setState({
      todos: updatedTodos
    });
  }
  ,

  // lifecycle functions
  componentWillMount: function(){
    console.log('componentWillMount');
  },
  componentDidMount: function(){
    // called directly after render
    console.log('componentDidMount');
    // grab external data
  },
  componentWillUpdate: function(){
    console.log('componentWillUpdate');
  }
});

var myCheese = {
  name:"Camembert",
  smellFactor: "Extreme pong",
  price: "3.50"
};

// put component into html page
//ReactDom.render(<TodoComponent message="I like cheese" cheese={myCheese}/>, document.getElementById('todo-wrapper'));
ReactDom.render(<App />, document.getElementById('todo-wrapper'));
