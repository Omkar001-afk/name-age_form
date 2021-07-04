import React from "react";
import style from "./ui.style.module.css";
import Card from "../Card/Card.component";
import Button from "../button/button.component";
const Ui = (props) => {
  return (
    <div>
      <div className={style.backdrop} onClick={props.onConfirm} />
      <Card className={style.modal}>
        <header className={style.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={style.content}>
          <p>{props.msg}</p>
        </div>
        <footer className={style.actions}>
          <Button onClick={props.onConfirm}>okaY</Button>
        </footer>
      </Card>
    </div>
  );
};
export default Ui;
