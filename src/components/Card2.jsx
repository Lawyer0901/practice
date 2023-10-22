import PropTypes from 'prop-types';

export const Card2 = ({url, title}) => {
    return (
<div>

    <div className="card mx-auto my-2" style={{width: '18rem'}}>
  <img src={url} className="card-img-top" alt={title}/>
  <div className="card-body">
    <h5 className="card-title">Card title: {title}</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="http" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
 </div>
    )
}

Card2.propTypes = {
    url: PropTypes.string,
    title: PropTypes.string,
}