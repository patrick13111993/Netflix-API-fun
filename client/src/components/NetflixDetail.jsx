var React = require('react');

var NetflixDetail = function (props) {
    if (!props.film) {
      return <h4></h4>
    }
    return (<div>
      <h3>{props.film.summary}</h3>
      <img src={props.film.poster}></img>
      </div>)

};

module.exports = NetflixDetail;