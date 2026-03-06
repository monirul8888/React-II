import React from 'react';

const User = ({user}) => {
    console.log(user);
    const {name} = user;
    return (
        <div>
            <h3>User Name : {name}</h3>
        </div>
    );
};

export default User;