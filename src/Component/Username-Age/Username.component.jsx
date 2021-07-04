import React, { useState } from "react";
import Button from "../button/button.component";
import Card from "../Card/Card.component";
import styles from "./username.style.module.css";
import ErrorModal from "../UI/ui.component";
const Username = (props) => {
  const [userName, setUserName] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState();
  const addUserHandler = (event) => {
    event.preventDefault();
    if (userName.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: "Invalid input",
        msg: "Please enter a valid name and age(non-empty values).",
      });
      return;
    }
    if (+age < 1) {
      setError({
        title: "Invalid age",
        msg: "Please enter valid age( age>0 ).",
      });
      return;
    }
    props.onlistUpdate(userName, age);
    // console.log(userName, age);
    setUserName("");
    setAge("");
  };
  const usernameChangeHandler = (e) => {
    setUserName(e.target.value);
  };
  const ageChangeHandler = (e) => {
    setAge(e.target.value);
  };
  const errorHandler = () => {
    setError(null);
  };
  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          msg={error.msg}
          onConfirm={errorHandler}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            onChange={usernameChangeHandler}
            value={userName}
          />
          <label htmlFor="age">Age(Year)</label>
          <input id="age" type="num" onChange={ageChangeHandler} value={age} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};
export default Username;
