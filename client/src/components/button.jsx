var React = require('react');

var Button = React.createClass({

  buttonHandler: function(){
    console.log("I have been clicked")
  },

  render: function(){
    return(
      <div>
        <button onClick={this.buttonHandler}>{this.props.label}</button>
      </div>
      )
  }

})

module.exports = Button;