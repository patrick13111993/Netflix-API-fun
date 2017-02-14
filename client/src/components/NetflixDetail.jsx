var React = require('react');

var NetflixDetail = function (props) {
    if (!props.film) {
      return <h4>No Film Selected</h4>
    }
    return (<div>
      <h4>Name: {props.film.show_title}</h4>
      <img src={props.film.poster}></img>
      </div>)

};

module.exports = NetflixDetail;