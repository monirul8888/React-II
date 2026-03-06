import React from "react";
import { useLoaderData } from "react-router";
import User from "../Components/User/User";

const Users = () => {
  const users = useLoaderData();

  return (
    <main className="flex-1 p-6 bg-gray-50 mt-4">
      <div className="grid grid-cols-3 gap-6">
        {users.map((user) => (
          <User key={user.id} user={user} />
        ))}
      </div>
    </main>
  );
};

export default Users;