var React = require('react');
var NetflixSelector = require('../components/NetflixSelector.jsx');
var NetflixDetail = require('../components/NetflixDetail.jsx');

var url;

var NetflixContainer = React.createClass({
  getInitialState: function () {
    return { films: [], focusFilm: null };
  },



  componentDidMount: function(callback) {
    var button = document.querySelector("button");
    var searchBox = document.querySelector("#search-box");
    // var self = this;
    button.onclick = function() {
      var url = "http://netflixroulette.net/api/api.php?director=";
      var splitString = searchBox.value.split(" ");
      var joinedString = splitString.join("%20");
      console.log(url + joinedString);
      var newUrl = url + joinedString;
      var request = new XMLHttpRequest();
      request.open('GET', newUrl);
      request.onload = function() {
        if (request.status !== 200){
          return;
        }
        var data = JSON.parse(request.responseText);
        console.log(data);
        for (var film of data) {
          parseInt(film.rating);
        film.rating*=20;
        }  
        this.setState({ films : data });

      }.bind(this);
      request.send();
    }.bind(this);
  },

  setFocusFilm: function(film) {
    this.setState({ focusFilm: film })
  },

  render: function () {
    return (
      <div>
      <input type="text" id="search-box"></input>
      <button type="submit">Search!</button>
      <NetflixSelector films={this.state.films} selectFilm={this.setFocusFilm}/>
      <NetflixDetail film={this.state.focusFilm}/>
      </div>
      );
  }
});


module.exports = NetflixContainer;