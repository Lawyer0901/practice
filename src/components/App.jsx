// import { Card } from "./Card";
import data from '../data.json'
import user from '../users.json'
import { Card2 } from "./Card2";
import { User } from './User';

export const App = () => {
  return (
 
 <div className = 'd-flex  flex-wrap'>
      {data.map(({ id, title, url }) => {
  return <Card2 key={id}
    title={title}
    url={url} />
      })}
      
      {user.map(el => (
       <User key={el.id} userName={el.name} userEmail={el.email} userCity={el.address} userStreet={el.address} userPhone={el.phone} userSuit={el.address} userWebsite={el.website} userCompany={ el.company} />
     ))}
      
 </div>
 
   
 
  );
};


// {
//     "id": 1,
//     "name": "Leanne Graham",
//     "username": "Bret",
//     "email": "Sincere@april.biz",
//     "address": {
//       "street": "Kulas Light",
//       "suite": "Apt. 556",
//       "city": "Gwenborough",
//       "zipcode": "92998-3874",
//       "geo": {
//         "lat": "-37.3159",
//         "lng": "81.1496"
//       }
//     },
//     "phone": "1-770-736-8031 x56442",
//     "website": "hildegard.org",
//     "company": {
//       "name": "Romaguera-Crona",
//       "catchPhrase": "Multi-layered client-server neural-net",
//       "bs": "harness real-time e-markets"
//     }
//   },

// "id": 1,
//       "title": "accusamus beatae ad facilis cum similique qui sunt",
//       "url": "https://via.placeholder.com/600/92c952",
//       "thumbnailUrl": "https://via.placeholder.com/150/92c952"