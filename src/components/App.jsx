// import { Card } from "./Card";
import data from '../data.json'
import { Card2 } from "./Card2";

export const App = () => {
  return (
 
 <>
      {data.map(({ id, title, url }) => {
  return <Card2 key={id}
    title={title}
    url={url} />
})}
 </>
 
 
  );
};


// "id": 1,
//       "title": "accusamus beatae ad facilis cum similique qui sunt",
//       "url": "https://via.placeholder.com/600/92c952",
//       "thumbnailUrl": "https://via.placeholder.com/150/92c952"