import data from '../data.json'

// export const Card = () => {
//     return (
// <div>
// {data.map(({photo})=> 
//     <div className="card mx-auto my-2" style={{width: '18rem'}}>
//   <img src={photo.url} className="card-img-top" alt={photo.title}/>
//   <div className="card-body">
//     <h5 className="card-title">Card title: {photo.title}</h5>
//     <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     <a href="http" className="btn btn-primary">Go somewhere</a>
//   </div>
// </div>
//  )}
// </div>
//     )
// }


export const Card = () => {
    return (
<div>
{data.map(({url, title, id})=> 
    <div key={id} className="card mx-auto my-2" style={{width: '18rem'}}>
  <img src={url} className="card-img-top" alt={title}/>
  <div className="card-body">
    <h5 className="card-title">Card title: {title}</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="http" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
 )}
</div>
    )
}



// "id": 1,
//       "title": "accusamus beatae ad facilis cum similique qui sunt",
//       "url": "https://via.placeholder.com/600/92c952",
//       "thumbnailUrl": "https://via.placeholder.com/150/92c952"