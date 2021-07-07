import React, { useState, useRef } from "react";
import Button from "../button/button.component";
import Card from "../Card/Card.component";
import styles from "./username.style.module.css";
import UI from "../UI/ui.component";
const Username = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [error, setError] = useState();
  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;
    if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        msg: "Please enter a valid name and age(non-empty values).",
      });
      return;
    }
    if (+enteredUserAge < 1) {
      setError({
        title: "Invalid age",
        msg: "Please enter valid age( age>0 ).",
      });
      return;
    }
    props.onlistUpdate(enteredName, enteredUserAge);
    // console.log(userName, age);
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };

  const errorHandler = () => {
    setError(null);
  };
  return (
    <div>
      {error && (
        <UI title={error.title} msg={error.msg} onConfirm={errorHandler} />
      )}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" ref={nameInputRef} />
          <label htmlFor="age">Age(Years)</label>
          <input id="age" type="number" ref={ageInputRef} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};
export default Username;
