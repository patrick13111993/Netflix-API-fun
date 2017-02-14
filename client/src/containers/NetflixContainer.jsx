var React = require('react');
var NetflixSelector = require('../components/NetflixSelector.jsx');
var NetflixDetail = require('../components/NetflixDetail.jsx');

var NetflixContainer = React.createClass({
  getInitialState: function () {
    return { films: [], focusFilm: null };
  },

  componentDidMount: function(callback) {
    var url = "http://netflixroulette.net/api/api.php?director=Quentin%20Tarantino";
    var request = new XMLHttpRequest();
    request.open('GET', url);
    request.onload = function() {
      if (request.status !== 200){
        return;
      }
      var data = JSON.parse(request.responseText);
      this.setState({ films : data });      
    }.bind(this);
    request.send();
  },

  setFocusFilm: function(film) {
    this.setState({ focusFilm: film })
  },

  render: function () {
    return (
      <div>
      <h2>Netflix Container</h2>
      <NetflixSelector films={this.state.films} selectFilm={this.setFocusFilm}/>
      <NetflixDetail film={this.state.focusFilm}/>
      </div>
      );
  }
});


module.exports = NetflixContainer;