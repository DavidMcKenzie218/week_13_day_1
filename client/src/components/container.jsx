var React = require('react');
var FilmList = require('./filmList.jsx');
var Button = require("./button.jsx");

var filmData = [{id: 1, title: "Tucker and Dale vs Evil", releaseDate: 2010}, {id: 2, title: "Terminator 2", releaseDate: 1991}]

var Container = React.createClass({

  getInitialState: function(){
    return {data: filmData}
  },

  render: function(){
    return (
      <div className="film-container">
        <h3>Film List</h3>
        <FilmList data={this.state.data}/>
        <Button label="Click Me"/>
      </div>
      )
  }

})

module.exports = Container;