var React = require('react');

var NetflixDetail = function (props) {
  if (!props.film) {
    return <h4></h4>
  }

  var style = { width: props.film.rating }
  
  return (
    <div>
    <h3>{props.film.summary}</h3>
        <div  className='rating' style={style}>
        </div>
    <img src={props.film.poster}></img>
    </div>
  )

};

module.exports = NetflixDetail;