import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import style from "./ui.style.module.css";
import Card from "../Card/Card.component";
import Button from "../button/button.component";

const Backdrop = (props) => {
  return <div className={style.backdrop} onClick={props.onConfirm} />;
};
const ModalOverlay = (props) => {
  return (
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
  );
};
const Ui = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          msg={props.msg}
          onConfirm={props.onConfirm}
        />,
        document.getElementById("overlay-root")
      )}
    </Fragment>
  );
};
export default Ui;
