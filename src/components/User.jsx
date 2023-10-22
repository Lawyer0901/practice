
export const User = ({userName, userEmail, userStreet, userSuit, userCity, userPhone, userWebsite, userCompany}) => {
    return (
        <div className="card mx-auto my-2" style={{width: '18rem'}}>
  <h5 className="card-title">{userName}</h5>
  <div className="card-body">
                <h5 className="card-title">e-mail: { userEmail}</h5>
    <p className="card-text">User Address: </p>
                <p className="card-text">Street: { userStreet.street}</p>
                <p className="card-text">Suit: {userSuit.suite}</p>
                <p className="card-text">City: {userCity.city}</p>
                <h5 className="card-title">phone: {userPhone}</h5>
                <h5 className="card-title">Website: {userWebsite}</h5>
                <p className="card-text">Company: {userCompany.name}</p>
                  </div>
</div>
    )
}




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