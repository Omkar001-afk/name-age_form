import React from "react";
import Card from "../Card/Card.component";
import style from "./userList.style.module.css";
const List = (props) => {
  return (
    <Card className={style.users}>
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.age} year's old)
          </li>
        ))}
      </ul>
    </Card>
  );
};
export default List;
