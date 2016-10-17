var React = require('react');
var Film = require('./film.jsx')

var FilmList = React.createClass({

  render: function(){
    var filmData = this.props.data.map(function(film){
      return (<Film title={film.title} key={film.id}>{film.releaseDate}</Film>);
    });
    return (
    <div>
      {filmData}
    </div>
    )
  }

})

module.exports = FilmList;