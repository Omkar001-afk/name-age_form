import React, { useState } from "react";
import Username from "./Component/Username-Age/Username.component";
import UserList from "./Component/UserList/userList.component";
const App = () => {
  const [userList, setUserList] = useState([]);

  const adduserHandler = (uName, uAge) => {
    setUserList((prevList) => {
      return [
        ...prevList,
        { key: Math.random().toString(), name: uName, age: uAge },
      ];
    });
  };
  return (
    <div>
      <Username onlistUpdate={adduserHandler} />
      <UserList users={userList} />
    </div>
  );
};

export default App;
