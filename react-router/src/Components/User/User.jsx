import React from "react";

const User = ({ user }) => {
  const { name, email, website, phone, company, address } = user;

  return (
    <div className="card w-75 bg-base-100 shadow-xl mx-auto">
      <figure className="px-6 pt-6">
        {/* Dynamic avatar based on email */}
        <img
          src={`https://i.pravatar.cc/150?u=${email}`}
          alt={name}
          className="rounded-full"
        />
      </figure>

      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>

        <p className="text-sm text-gray-500">{company?.name}</p>
        <p>{email}</p>
        <p>{phone}</p>
        <p className="text-blue-600 hover:underline">{website}</p>
        <p className="text-sm text-gray-400">{address?.city}</p>

        <div className="card-actions">
          <button className="btn btn-primary btn-sm">Follow</button>
        </div>
      </div>
    </div>
  );
};

export default User;

// {
//     "id": 1,
//     "name": "Leanne Graham",
//     "username": "Bret",
//     "email": "Sincere@april.biz",
//     "address": {
//         "street": "Kulas Light",
//         "suite": "Apt. 556",
//         "city": "Gwenborough",
//         "zipcode": "92998-3874",
//         "geo": {
//             "lat": "-37.3159",
//             "lng": "81.1496"
//         }
//     },
//     "phone": "1-770-736-8031 x56442",
//     "website": "hildegard.org",
//     "company": {
//         "name": "Romaguera-Crona",
//         "catchPhrase": "Multi-layered client-server neural-net",
//         "bs": "harness real-time e-markets"
//     }
// }
