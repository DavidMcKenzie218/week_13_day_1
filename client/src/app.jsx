var React = require('react');
var ReactDOM = require('react-dom');
var Container = require('./components/container.jsx')

window.onload = function(){
  ReactDOM.render(
    <Container/>,
    document.getElementById('app')
  );
}
